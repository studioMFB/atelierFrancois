(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();function ko(i,e){const t=Object.create(null),r=i.split(",");for(let n=0;n<r.length;n++)t[r[n]]=!0;return e?n=>!!t[n.toLowerCase()]:n=>!!t[n]}const Ze={},Gr=[],li=()=>{},Xd=()=>!1,jd=/^on[^a-z]/,sa=i=>jd.test(i),Vo=i=>i.startsWith("onUpdate:"),dt=Object.assign,Wo=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Yd=Object.prototype.hasOwnProperty,Xe=(i,e)=>Yd.call(i,e),Ie=Array.isArray,kn=i=>aa(i)==="[object Map]",qd=i=>aa(i)==="[object Set]",Ge=i=>typeof i=="function",mt=i=>typeof i=="string",Xo=i=>typeof i=="symbol",st=i=>i!==null&&typeof i=="object",Jh=i=>st(i)&&Ge(i.then)&&Ge(i.catch),Kd=Object.prototype.toString,aa=i=>Kd.call(i),Jd=i=>aa(i).slice(8,-1),Zd=i=>aa(i)==="[object Object]",jo=i=>mt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Xs=ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Qd=/-(\w)/g,jr=oa(i=>i.replace(Qd,(e,t)=>t?t.toUpperCase():"")),$d=/\B([A-Z])/g,en=oa(i=>i.replace($d,"-$1").toLowerCase()),Zh=oa(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ra=oa(i=>i?`on${Zh(i)}`:""),Zs=(i,e)=>!Object.is(i,e),Ca=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Qs=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},ep=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Ol;const go=()=>Ol||(Ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yo(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const r=i[t],n=mt(r)?np(r):Yo(r);if(n)for(const s in n)e[s]=n[s]}return e}else if(mt(i)||st(i))return i}const tp=/;(?![^(]*\))/g,ip=/:([^]+)/,rp=/\/\*[^]*?\*\//g;function np(i){const e={};return i.replace(rp,"").split(tp).forEach(t=>{if(t){const r=t.split(ip);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qo(i){let e="";if(mt(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const r=qo(i[t]);r&&(e+=r+" ")}else if(st(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ap=ko(sp);function Qh(i){return!!i||i===""}let jt;class op{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function lp(i,e=jt){e&&e.active&&e.effects.push(i)}function cp(){return jt}const Ko=i=>{const e=new Set(i);return e.w=0,e.n=0,e},$h=i=>(i.w&Vi)>0,eu=i=>(i.n&Vi)>0,hp=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Vi},up=i=>{const{deps:e}=i;if(e.length){let t=0;for(let r=0;r<e.length;r++){const n=e[r];$h(n)&&!eu(n)?n.delete(i):e[t++]=n,n.w&=~Vi,n.n&=~Vi}e.length=t}},vo=new WeakMap;let Fn=0,Vi=1;const _o=30;let qt;const nr=Symbol(""),xo=Symbol("");class Jo{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,lp(this,r)}run(){if(!this.active)return this.fn();let e=qt,t=Fi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Fi=!0,Vi=1<<++Fn,Fn<=_o?hp(this):Fl(this),this.fn()}finally{Fn<=_o&&up(this),Vi=1<<--Fn,qt=this.parent,Fi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(Fl(this),this.onStop&&this.onStop(),this.active=!1)}}function Fl(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Fi=!0;const tu=[];function tn(){tu.push(Fi),Fi=!1}function rn(){const i=tu.pop();Fi=i===void 0?!0:i}function Ut(i,e,t){if(Fi&&qt){let r=vo.get(i);r||vo.set(i,r=new Map);let n=r.get(t);n||r.set(t,n=Ko()),iu(n)}}function iu(i,e){let t=!1;Fn<=_o?eu(i)||(i.n|=Vi,t=!$h(i)):t=!i.has(qt),t&&(i.add(qt),qt.deps.push(i))}function Si(i,e,t,r,n,s){const o=vo.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i)){const l=Number(r);o.forEach((c,h)=>{(h==="length"||h>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?jo(t)&&a.push(o.get("length")):(a.push(o.get(nr)),kn(i)&&a.push(o.get(xo)));break;case"delete":Ie(i)||(a.push(o.get(nr)),kn(i)&&a.push(o.get(xo)));break;case"set":kn(i)&&a.push(o.get(nr));break}if(a.length===1)a[0]&&Mo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Mo(Ko(l))}}function Mo(i,e){const t=Ie(i)?i:[...i];for(const r of t)r.computed&&Bl(r);for(const r of t)r.computed||Bl(r)}function Bl(i,e){(i!==qt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const dp=ko("__proto__,__v_isRef,__isVue"),ru=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Xo)),pp=Zo(),fp=Zo(!1,!0),mp=Zo(!0),zl=gp();function gp(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const r=Ke(this);for(let s=0,o=this.length;s<o;s++)Ut(r,"get",s+"");const n=r[e](...t);return n===-1||n===!1?r[e](...t.map(Ke)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){tn();const r=Ke(this)[e].apply(this,t);return rn(),r}}),i}function vp(i){const e=Ke(this);return Ut(e,"has",i),e.hasOwnProperty(i)}function Zo(i=!1,e=!1){return function(t,r,n){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&n===(i?e?Dp:lu:e?ou:au).get(t))return t;const s=Ie(t);if(!i){if(s&&Xe(zl,r))return Reflect.get(zl,r,n);if(r==="hasOwnProperty")return vp}const o=Reflect.get(t,r,n);return(Xo(r)?ru.has(r):dp(r))||(i||Ut(t,"get",r),e)?o:At(o)?s&&jo(r)?o:o.value:st(o)?i?cu(o):el(o):o}}const _p=nu(),xp=nu(!0);function nu(i=!1){return function(e,t,r,n){let s=e[t];if(qn(s)&&At(s)&&!At(r))return!1;if(!i&&(!yo(r)&&!qn(r)&&(s=Ke(s),r=Ke(r)),!Ie(e)&&At(s)&&!At(r)))return s.value=r,!0;const o=Ie(e)&&jo(t)?Number(t)<e.length:Xe(e,t),a=Reflect.set(e,t,r,n);return e===Ke(n)&&(o?Zs(r,s)&&Si(e,"set",t,r):Si(e,"add",t,r)),a}}function Mp(i,e){const t=Xe(i,e);i[e];const r=Reflect.deleteProperty(i,e);return r&&t&&Si(i,"delete",e,void 0),r}function yp(i,e){const t=Reflect.has(i,e);return(!Xo(e)||!ru.has(e))&&Ut(i,"has",e),t}function Ep(i){return Ut(i,"iterate",Ie(i)?"length":nr),Reflect.ownKeys(i)}const su={get:pp,set:_p,deleteProperty:Mp,has:yp,ownKeys:Ep},Sp={get:mp,set(i,e){return!0},deleteProperty(i,e){return!0}},bp=dt({},su,{get:fp,set:xp}),Qo=i=>i,la=i=>Reflect.getPrototypeOf(i);function us(i,e,t=!1,r=!1){i=i.__v_raw;const n=Ke(i),s=Ke(e);t||(e!==s&&Ut(n,"get",e),Ut(n,"get",s));const{has:o}=la(n),a=r?Qo:t?rl:il;if(o.call(n,e))return a(i.get(e));if(o.call(n,s))return a(i.get(s));i!==n&&i.get(e)}function ds(i,e=!1){const t=this.__v_raw,r=Ke(t),n=Ke(i);return e||(i!==n&&Ut(r,"has",i),Ut(r,"has",n)),i===n?t.has(i):t.has(i)||t.has(n)}function ps(i,e=!1){return i=i.__v_raw,!e&&Ut(Ke(i),"iterate",nr),Reflect.get(i,"size",i)}function Hl(i){i=Ke(i);const e=Ke(this);return la(e).has.call(e,i)||(e.add(i),Si(e,"add",i,i)),this}function Gl(i,e){e=Ke(e);const t=Ke(this),{has:r,get:n}=la(t);let s=r.call(t,i);s||(i=Ke(i),s=r.call(t,i));const o=n.call(t,i);return t.set(i,e),s?Zs(e,o)&&Si(t,"set",i,e):Si(t,"add",i,e),this}function kl(i){const e=Ke(this),{has:t,get:r}=la(e);let n=t.call(e,i);n||(i=Ke(i),n=t.call(e,i)),r&&r.call(e,i);const s=e.delete(i);return n&&Si(e,"delete",i,void 0),s}function Vl(){const i=Ke(this),e=i.size!==0,t=i.clear();return e&&Si(i,"clear",void 0,void 0),t}function fs(i,e){return function(t,r){const n=this,s=n.__v_raw,o=Ke(s),a=e?Qo:i?rl:il;return!i&&Ut(o,"iterate",nr),s.forEach((l,c)=>t.call(r,a(l),a(c),n))}}function ms(i,e,t){return function(...r){const n=this.__v_raw,s=Ke(n),o=kn(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=n[i](...r),h=t?Qo:e?rl:il;return!e&&Ut(s,"iterate",l?xo:nr),{next(){const{value:d,done:u}=c.next();return u?{value:d,done:u}:{value:a?[h(d[0]),h(d[1])]:h(d),done:u}},[Symbol.iterator](){return this}}}}function wi(i){return function(...e){return i==="delete"?!1:this}}function Tp(){const i={get(n){return us(this,n)},get size(){return ps(this)},has:ds,add:Hl,set:Gl,delete:kl,clear:Vl,forEach:fs(!1,!1)},e={get(n){return us(this,n,!1,!0)},get size(){return ps(this)},has:ds,add:Hl,set:Gl,delete:kl,clear:Vl,forEach:fs(!1,!0)},t={get(n){return us(this,n,!0)},get size(){return ps(this,!0)},has(n){return ds.call(this,n,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:fs(!0,!1)},r={get(n){return us(this,n,!0,!0)},get size(){return ps(this,!0)},has(n){return ds.call(this,n,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=ms(n,!1,!1),t[n]=ms(n,!0,!1),e[n]=ms(n,!1,!0),r[n]=ms(n,!0,!0)}),[i,t,e,r]}const[wp,Ap,Rp,Cp]=Tp();function $o(i,e){const t=e?i?Cp:Rp:i?Ap:wp;return(r,n,s)=>n==="__v_isReactive"?!i:n==="__v_isReadonly"?i:n==="__v_raw"?r:Reflect.get(Xe(t,n)&&n in r?t:r,n,s)}const Lp={get:$o(!1,!1)},Pp={get:$o(!1,!0)},Up={get:$o(!0,!1)},au=new WeakMap,ou=new WeakMap,lu=new WeakMap,Dp=new WeakMap;function Np(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ip(i){return i.__v_skip||!Object.isExtensible(i)?0:Np(Jd(i))}function el(i){return qn(i)?i:tl(i,!1,su,Lp,au)}function Op(i){return tl(i,!1,bp,Pp,ou)}function cu(i){return tl(i,!0,Sp,Up,lu)}function tl(i,e,t,r,n){if(!st(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=n.get(i);if(s)return s;const o=Ip(i);if(o===0)return i;const a=new Proxy(i,o===2?r:t);return n.set(i,a),a}function kr(i){return qn(i)?kr(i.__v_raw):!!(i&&i.__v_isReactive)}function qn(i){return!!(i&&i.__v_isReadonly)}function yo(i){return!!(i&&i.__v_isShallow)}function hu(i){return kr(i)||qn(i)}function Ke(i){const e=i&&i.__v_raw;return e?Ke(e):i}function uu(i){return Qs(i,"__v_skip",!0),i}const il=i=>st(i)?el(i):i,rl=i=>st(i)?cu(i):i;function Fp(i){Fi&&qt&&(i=Ke(i),iu(i.dep||(i.dep=Ko())))}function Bp(i,e){i=Ke(i);const t=i.dep;t&&Mo(t)}function At(i){return!!(i&&i.__v_isRef===!0)}function Bn(i){return At(i)?i.value:i}const zp={get:(i,e,t)=>Bn(Reflect.get(i,e,t)),set:(i,e,t,r)=>{const n=i[e];return At(n)&&!At(t)?(n.value=t,!0):Reflect.set(i,e,t,r)}};function du(i){return kr(i)?i:new Proxy(i,zp)}class Hp{constructor(e,t,r,n){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Jo(e,()=>{this._dirty||(this._dirty=!0,Bp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=r}get value(){const e=Ke(this);return Fp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Gp(i,e,t=!1){let r,n;const s=Ge(i);return s?(r=i,n=li):(r=i.get,n=i.set),new Hp(r,n,s||!n,t)}function Bi(i,e,t,r){let n;try{n=r?i(...r):i()}catch(s){ca(s,e,t)}return n}function Qt(i,e,t,r){if(Ge(i)){const s=Bi(i,e,t,r);return s&&Jh(s)&&s.catch(o=>{ca(o,e,t)}),s}const n=[];for(let s=0;s<i.length;s++)n.push(Qt(i[s],e,t,r));return n}function ca(i,e,t,r=!0){const n=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Bi(l,null,10,[i,o,a]);return}}kp(i,t,n,r)}function kp(i,e,t,r=!0){console.error(i)}let Kn=!1,Eo=!1;const xt=[];let si=0;const Vr=[];let Mi=null,tr=0;const pu=Promise.resolve();let nl=null;function Vp(i){const e=nl||pu;return i?e.then(this?i.bind(this):i):e}function Wp(i){let e=si+1,t=xt.length;for(;e<t;){const r=e+t>>>1;Jn(xt[r])<i?e=r+1:t=r}return e}function sl(i){(!xt.length||!xt.includes(i,Kn&&i.allowRecurse?si+1:si))&&(i.id==null?xt.push(i):xt.splice(Wp(i.id),0,i),fu())}function fu(){!Kn&&!Eo&&(Eo=!0,nl=pu.then(gu))}function Xp(i){const e=xt.indexOf(i);e>si&&xt.splice(e,1)}function jp(i){Ie(i)?Vr.push(...i):(!Mi||!Mi.includes(i,i.allowRecurse?tr+1:tr))&&Vr.push(i),fu()}function Wl(i,e=Kn?si+1:0){for(;e<xt.length;e++){const t=xt[e];t&&t.pre&&(xt.splice(e,1),e--,t())}}function mu(i){if(Vr.length){const e=[...new Set(Vr)];if(Vr.length=0,Mi){Mi.push(...e);return}for(Mi=e,Mi.sort((t,r)=>Jn(t)-Jn(r)),tr=0;tr<Mi.length;tr++)Mi[tr]();Mi=null,tr=0}}const Jn=i=>i.id==null?1/0:i.id,Yp=(i,e)=>{const t=Jn(i)-Jn(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function gu(i){Eo=!1,Kn=!0,xt.sort(Yp);try{for(si=0;si<xt.length;si++){const e=xt[si];e&&e.active!==!1&&Bi(e,null,14)}}finally{si=0,xt.length=0,mu(),Kn=!1,nl=null,(xt.length||Vr.length)&&gu()}}function qp(i,e,...t){if(i.isUnmounted)return;const r=i.vnode.props||Ze;let n=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:u}=r[h]||Ze;u&&(n=t.map(m=>mt(m)?m.trim():m)),d&&(n=t.map(ep))}let a,l=r[a=Ra(e)]||r[a=Ra(jr(e))];!l&&s&&(l=r[a=Ra(en(e))]),l&&Qt(l,i,6,n);const c=r[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Qt(c,i,6,n)}}function vu(i,e,t=!1){const r=e.emitsCache,n=r.get(i);if(n!==void 0)return n;const s=i.emits;let o={},a=!1;if(!Ge(i)){const l=c=>{const h=vu(c,e,!0);h&&(a=!0,dt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(st(i)&&r.set(i,null),null):(Ie(s)?s.forEach(l=>o[l]=null):dt(o,s),st(i)&&r.set(i,o),o)}function ha(i,e){return!i||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Xe(i,e[0].toLowerCase()+e.slice(1))||Xe(i,en(e))||Xe(i,e))}let oi=null,_u=null;function $s(i){const e=oi;return oi=i,_u=i&&i.type.__scopeId||null,e}function Kp(i,e=oi,t){if(!e||i._n)return i;const r=(...n)=>{r._d&&ec(-1);const s=$s(e);let o;try{o=i(...n)}finally{$s(s),r._d&&ec(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function La(i){const{type:e,vnode:t,proxy:r,withProxy:n,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:h,renderCache:d,data:u,setupState:m,ctx:x,inheritAttrs:_}=i;let f,p;const w=$s(i);try{if(t.shapeFlag&4){const T=n||r;f=ri(h.call(T,T,d,s,m,u,x)),p=l}else{const T=e;f=ri(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),p=e.props?l:Jp(l)}}catch(T){Wn.length=0,ca(T,i,1),f=zi(Zn)}let y=f;if(p&&_!==!1){const T=Object.keys(p),{shapeFlag:R}=y;T.length&&R&7&&(o&&T.some(Vo)&&(p=Zp(p,o)),y=Yr(y,p))}return t.dirs&&(y=Yr(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),f=y,$s(w),f}const Jp=i=>{let e;for(const t in i)(t==="class"||t==="style"||sa(t))&&((e||(e={}))[t]=i[t]);return e},Zp=(i,e)=>{const t={};for(const r in i)(!Vo(r)||!(r.slice(9)in e))&&(t[r]=i[r]);return t};function Qp(i,e,t){const{props:r,children:n,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Xl(r,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const u=h[d];if(o[u]!==r[u]&&!ha(c,u))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xl(r,o,c):!0:!!o;return!1}function Xl(i,e,t){const r=Object.keys(e);if(r.length!==Object.keys(i).length)return!0;for(let n=0;n<r.length;n++){const s=r[n];if(e[s]!==i[s]&&!ha(t,s))return!0}return!1}function $p({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const ef=i=>i.__isSuspense;function tf(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):jp(i)}const gs={};function Pa(i,e,t){return xu(i,e,t)}function xu(i,e,{immediate:t,deep:r,flush:n,onTrack:s,onTrigger:o}=Ze){var a;const l=cp()===((a=Mt)==null?void 0:a.scope)?Mt:null;let c,h=!1,d=!1;if(At(i)?(c=()=>i.value,h=yo(i)):kr(i)?(c=()=>i,r=!0):Ie(i)?(d=!0,h=i.some(T=>kr(T)||yo(T)),c=()=>i.map(T=>{if(At(T))return T.value;if(kr(T))return zr(T);if(Ge(T))return Bi(T,l,2)})):Ge(i)?e?c=()=>Bi(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return u&&u(),Qt(i,l,3,[m])}:c=li,e&&r){const T=c;c=()=>zr(T())}let u,m=T=>{u=w.onStop=()=>{Bi(T,l,4)}},x;if($n)if(m=li,e?t&&Qt(e,l,3,[c(),d?[]:void 0,m]):c(),n==="sync"){const T=$f();x=T.__watcherHandles||(T.__watcherHandles=[])}else return li;let _=d?new Array(i.length).fill(gs):gs;const f=()=>{if(w.active)if(e){const T=w.run();(r||h||(d?T.some((R,D)=>Zs(R,_[D])):Zs(T,_)))&&(u&&u(),Qt(e,l,3,[T,_===gs?void 0:d&&_[0]===gs?[]:_,m]),_=T)}else w.run()};f.allowRecurse=!!e;let p;n==="sync"?p=f:n==="post"?p=()=>Ct(f,l&&l.suspense):(f.pre=!0,l&&(f.id=l.uid),p=()=>sl(f));const w=new Jo(c,p);e?t?f():_=w.run():n==="post"?Ct(w.run.bind(w),l&&l.suspense):w.run();const y=()=>{w.stop(),l&&l.scope&&Wo(l.scope.effects,w)};return x&&x.push(y),y}function rf(i,e,t){const r=this.proxy,n=mt(i)?i.includes(".")?Mu(r,i):()=>r[i]:i.bind(r,r);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=Mt;qr(this);const a=xu(n,s.bind(r),t);return o?qr(o):sr(),a}function Mu(i,e){const t=e.split(".");return()=>{let r=i;for(let n=0;n<t.length&&r;n++)r=r[t[n]];return r}}function zr(i,e){if(!st(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),At(i))zr(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)zr(i[t],e);else if(qd(i)||kn(i))i.forEach(t=>{zr(t,e)});else if(Zd(i))for(const t in i)zr(i[t],e);return i}function Yi(i,e,t,r){const n=i.dirs,s=e&&e.dirs;for(let o=0;o<n.length;o++){const a=n[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(tn(),Qt(l,t,8,[i.el,a,i,e]),rn())}}function yu(i,e){return Ge(i)?(()=>dt({name:i.name},e,{setup:i}))():i}const js=i=>!!i.type.__asyncLoader,Eu=i=>i.type.__isKeepAlive;function nf(i,e){Su(i,"a",e)}function sf(i,e){Su(i,"da",e)}function Su(i,e,t=Mt){const r=i.__wdc||(i.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return i()});if(ua(e,r,t),t){let n=t.parent;for(;n&&n.parent;)Eu(n.parent.vnode)&&af(r,e,t,n),n=n.parent}}function af(i,e,t,r){const n=ua(e,i,r,!0);bu(()=>{Wo(r[e],n)},t)}function ua(i,e,t=Mt,r=!1){if(t){const n=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;tn(),qr(t);const a=Qt(e,t,i,o);return sr(),rn(),a});return r?n.unshift(s):n.push(s),s}}const bi=i=>(e,t=Mt)=>(!$n||i==="sp")&&ua(i,(...r)=>e(...r),t),of=bi("bm"),lf=bi("m"),cf=bi("bu"),hf=bi("u"),uf=bi("bum"),bu=bi("um"),df=bi("sp"),pf=bi("rtg"),ff=bi("rtc");function mf(i,e=Mt){ua("ec",i,e)}const gf=Symbol.for("v-ndc"),So=i=>i?Ou(i)?hl(i)||i.proxy:So(i.parent):null,Vn=dt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>So(i.parent),$root:i=>So(i.root),$emit:i=>i.emit,$options:i=>al(i),$forceUpdate:i=>i.f||(i.f=()=>sl(i.update)),$nextTick:i=>i.n||(i.n=Vp.bind(i.proxy)),$watch:i=>rf.bind(i)}),Ua=(i,e)=>i!==Ze&&!i.__isScriptSetup&&Xe(i,e),vf={get({_:i},e){const{ctx:t,setupState:r,data:n,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return n[e];case 4:return t[e];case 3:return s[e]}else{if(Ua(r,e))return o[e]=1,r[e];if(n!==Ze&&Xe(n,e))return o[e]=2,n[e];if((c=i.propsOptions[0])&&Xe(c,e))return o[e]=3,s[e];if(t!==Ze&&Xe(t,e))return o[e]=4,t[e];bo&&(o[e]=0)}}const h=Vn[e];let d,u;if(h)return e==="$attrs"&&Ut(i,"get",e),h(i);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==Ze&&Xe(t,e))return o[e]=4,t[e];if(u=l.config.globalProperties,Xe(u,e))return u[e]},set({_:i},e,t){const{data:r,setupState:n,ctx:s}=i;return Ua(n,e)?(n[e]=t,!0):r!==Ze&&Xe(r,e)?(r[e]=t,!0):Xe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:r,appContext:n,propsOptions:s}},o){let a;return!!t[o]||i!==Ze&&Xe(i,o)||Ua(e,o)||(a=s[0])&&Xe(a,o)||Xe(r,o)||Xe(Vn,o)||Xe(n.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Xe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function jl(i){return Ie(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let bo=!0;function _f(i){const e=al(i),t=i.proxy,r=i.ctx;bo=!1,e.beforeCreate&&Yl(e.beforeCreate,i,"bc");const{data:n,computed:s,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:d,mounted:u,beforeUpdate:m,updated:x,activated:_,deactivated:f,beforeDestroy:p,beforeUnmount:w,destroyed:y,unmounted:T,render:R,renderTracked:D,renderTriggered:C,errorCaptured:ee,serverPrefetch:E,expose:b,inheritAttrs:oe,components:ue,directives:X,filters:j}=e;if(c&&xf(c,r,null),o)for(const te in o){const W=o[te];Ge(W)&&(r[te]=W.bind(t))}if(n){const te=n.call(t,t);st(te)&&(i.data=el(te))}if(bo=!0,s)for(const te in s){const W=s[te],Q=Ge(W)?W.bind(t,t):Ge(W.get)?W.get.bind(t,t):li,he=!Ge(W)&&Ge(W.set)?W.set.bind(t):li,ce=Zf({get:Q,set:he});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>ce.value,set:F=>ce.value=F})}if(a)for(const te in a)Tu(a[te],r,t,te);if(l){const te=Ge(l)?l.call(t):l;Reflect.ownKeys(te).forEach(W=>{Tf(W,te[W])})}h&&Yl(h,i,"c");function V(te,W){Ie(W)?W.forEach(Q=>te(Q.bind(t))):W&&te(W.bind(t))}if(V(of,d),V(lf,u),V(cf,m),V(hf,x),V(nf,_),V(sf,f),V(mf,ee),V(ff,D),V(pf,C),V(uf,w),V(bu,T),V(df,E),Ie(b))if(b.length){const te=i.exposed||(i.exposed={});b.forEach(W=>{Object.defineProperty(te,W,{get:()=>t[W],set:Q=>t[W]=Q})})}else i.exposed||(i.exposed={});R&&i.render===li&&(i.render=R),oe!=null&&(i.inheritAttrs=oe),ue&&(i.components=ue),X&&(i.directives=X)}function xf(i,e,t=li){Ie(i)&&(i=To(i));for(const r in i){const n=i[r];let s;st(n)?"default"in n?s=Ys(n.from||r,n.default,!0):s=Ys(n.from||r):s=Ys(n),At(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Yl(i,e,t){Qt(Ie(i)?i.map(r=>r.bind(e.proxy)):i.bind(e.proxy),e,t)}function Tu(i,e,t,r){const n=r.includes(".")?Mu(t,r):()=>t[r];if(mt(i)){const s=e[i];Ge(s)&&Pa(n,s)}else if(Ge(i))Pa(n,i.bind(t));else if(st(i))if(Ie(i))i.forEach(s=>Tu(s,e,t,r));else{const s=Ge(i.handler)?i.handler.bind(t):e[i.handler];Ge(s)&&Pa(n,s,i)}}function al(i){const e=i.type,{mixins:t,extends:r}=e,{mixins:n,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!n.length&&!t&&!r?l=e:(l={},n.length&&n.forEach(c=>ea(l,c,o,!0)),ea(l,e,o)),st(e)&&s.set(e,l),l}function ea(i,e,t,r=!1){const{mixins:n,extends:s}=e;s&&ea(i,s,t,!0),n&&n.forEach(o=>ea(i,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=Mf[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Mf={data:ql,props:Kl,emits:Kl,methods:zn,computed:zn,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:zn,directives:zn,watch:Ef,provide:ql,inject:yf};function ql(i,e){return e?i?function(){return dt(Ge(i)?i.call(this,this):i,Ge(e)?e.call(this,this):e)}:e:i}function yf(i,e){return zn(To(i),To(e))}function To(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function St(i,e){return i?[...new Set([].concat(i,e))]:e}function zn(i,e){return i?dt(Object.create(null),i,e):e}function Kl(i,e){return i?Ie(i)&&Ie(e)?[...new Set([...i,...e])]:dt(Object.create(null),jl(i),jl(e??{})):e}function Ef(i,e){if(!i)return e;if(!e)return i;const t=dt(Object.create(null),i);for(const r in e)t[r]=St(i[r],e[r]);return t}function wu(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function bf(i,e){return function(t,r=null){Ge(t)||(t=dt({},t)),r!=null&&!st(r)&&(r=null);const n=wu(),s=new Set;let o=!1;const a=n.app={_uid:Sf++,_component:t,_props:r,_container:null,_context:n,_instance:null,version:em,get config(){return n.config},set config(l){},use(l,...c){return s.has(l)||(l&&Ge(l.install)?(s.add(l),l.install(a,...c)):Ge(l)&&(s.add(l),l(a,...c))),a},mixin(l){return n.mixins.includes(l)||n.mixins.push(l),a},component(l,c){return c?(n.components[l]=c,a):n.components[l]},directive(l,c){return c?(n.directives[l]=c,a):n.directives[l]},mount(l,c,h){if(!o){const d=zi(t,r);return d.appContext=n,c&&e?e(d,l):i(d,l,h),o=!0,a._container=l,l.__vue_app__=a,hl(d.component)||d.component.proxy}},unmount(){o&&(i(null,a._container),delete a._container.__vue_app__)},provide(l,c){return n.provides[l]=c,a},runWithContext(l){ta=a;try{return l()}finally{ta=null}}};return a}}let ta=null;function Tf(i,e){if(Mt){let t=Mt.provides;const r=Mt.parent&&Mt.parent.provides;r===t&&(t=Mt.provides=Object.create(r)),t[i]=e}}function Ys(i,e,t=!1){const r=Mt||oi;if(r||ta){const n=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ta._context.provides;if(n&&i in n)return n[i];if(arguments.length>1)return t&&Ge(e)?e.call(r&&r.proxy):e}}function wf(i,e,t,r=!1){const n={},s={};Qs(s,pa,1),i.propsDefaults=Object.create(null),Au(i,e,n,s);for(const o in i.propsOptions[0])o in n||(n[o]=void 0);t?i.props=r?n:Op(n):i.type.props?i.props=n:i.props=s,i.attrs=s}function Af(i,e,t,r){const{props:n,attrs:s,vnode:{patchFlag:o}}=i,a=Ke(n),[l]=i.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=i.vnode.dynamicProps;for(let d=0;d<h.length;d++){let u=h[d];if(ha(i.emitsOptions,u))continue;const m=e[u];if(l)if(Xe(s,u))m!==s[u]&&(s[u]=m,c=!0);else{const x=jr(u);n[x]=wo(l,a,x,m,i,!1)}else m!==s[u]&&(s[u]=m,c=!0)}}}else{Au(i,e,n,s)&&(c=!0);let h;for(const d in a)(!e||!Xe(e,d)&&((h=en(d))===d||!Xe(e,h)))&&(l?t&&(t[d]!==void 0||t[h]!==void 0)&&(n[d]=wo(l,a,d,void 0,i,!0)):delete n[d]);if(s!==a)for(const d in s)(!e||!Xe(e,d))&&(delete s[d],c=!0)}c&&Si(i,"set","$attrs")}function Au(i,e,t,r){const[n,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xs(l))continue;const c=e[l];let h;n&&Xe(n,h=jr(l))?!s||!s.includes(h)?t[h]=c:(a||(a={}))[h]=c:ha(i.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Ke(t),c=a||Ze;for(let h=0;h<s.length;h++){const d=s[h];t[d]=wo(n,l,d,c[d],i,!Xe(c,d))}}return o}function wo(i,e,t,r,n,s){const o=i[t];if(o!=null){const a=Xe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=n;t in c?r=c[t]:(qr(n),r=c[t]=l.call(null,e),sr())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===en(t))&&(r=!0))}return r}function Ru(i,e,t=!1){const r=e.propsCache,n=r.get(i);if(n)return n;const s=i.props,o={},a=[];let l=!1;if(!Ge(i)){const h=d=>{l=!0;const[u,m]=Ru(d,e,!0);dt(o,u),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),i.extends&&h(i.extends),i.mixins&&i.mixins.forEach(h)}if(!s&&!l)return st(i)&&r.set(i,Gr),Gr;if(Ie(s))for(let h=0;h<s.length;h++){const d=jr(s[h]);Jl(d)&&(o[d]=Ze)}else if(s)for(const h in s){const d=jr(h);if(Jl(d)){const u=s[h],m=o[d]=Ie(u)||Ge(u)?{type:u}:dt({},u);if(m){const x=$l(Boolean,m.type),_=$l(String,m.type);m[0]=x>-1,m[1]=_<0||x<_,(x>-1||Xe(m,"default"))&&a.push(d)}}}const c=[o,a];return st(i)&&r.set(i,c),c}function Jl(i){return i[0]!=="$"}function Zl(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function Ql(i,e){return Zl(i)===Zl(e)}function $l(i,e){return Ie(e)?e.findIndex(t=>Ql(t,i)):Ge(e)&&Ql(e,i)?0:-1}const Cu=i=>i[0]==="_"||i==="$stable",ol=i=>Ie(i)?i.map(ri):[ri(i)],Rf=(i,e,t)=>{if(e._n)return e;const r=Kp((...n)=>ol(e(...n)),t);return r._c=!1,r},Lu=(i,e,t)=>{const r=i._ctx;for(const n in i){if(Cu(n))continue;const s=i[n];if(Ge(s))e[n]=Rf(n,s,r);else if(s!=null){const o=ol(s);e[n]=()=>o}}},Pu=(i,e)=>{const t=ol(e);i.slots.default=()=>t},Cf=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ke(e),Qs(e,"_",t)):Lu(e,i.slots={})}else i.slots={},e&&Pu(i,e);Qs(i.slots,pa,1)},Lf=(i,e,t)=>{const{vnode:r,slots:n}=i;let s=!0,o=Ze;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(dt(n,e),!t&&a===1&&delete n._):(s=!e.$stable,Lu(e,n)),o=e}else e&&(Pu(i,e),o={default:1});if(s)for(const a in n)!Cu(a)&&!(a in o)&&delete n[a]};function Ao(i,e,t,r,n=!1){if(Ie(i)){i.forEach((u,m)=>Ao(u,e&&(Ie(e)?e[m]:e),t,r,n));return}if(js(r)&&!n)return;const s=r.shapeFlag&4?hl(r.component)||r.component.proxy:r.el,o=n?null:s,{i:a,r:l}=i,c=e&&e.r,h=a.refs===Ze?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(mt(c)?(h[c]=null,Xe(d,c)&&(d[c]=null)):At(c)&&(c.value=null)),Ge(l))Bi(l,a,12,[o,h]);else{const u=mt(l),m=At(l);if(u||m){const x=()=>{if(i.f){const _=u?Xe(d,l)?d[l]:h[l]:l.value;n?Ie(_)&&Wo(_,s):Ie(_)?_.includes(s)||_.push(s):u?(h[l]=[s],Xe(d,l)&&(d[l]=h[l])):(l.value=[s],i.k&&(h[i.k]=l.value))}else u?(h[l]=o,Xe(d,l)&&(d[l]=o)):m&&(l.value=o,i.k&&(h[i.k]=o))};o?(x.id=-1,Ct(x,t)):x()}}}const Ct=tf;function Pf(i){return Uf(i)}function Uf(i,e){const t=go();t.__VUE__=!0;const{insert:r,remove:n,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:u,setScopeId:m=li,insertStaticContent:x}=i,_=(v,L,N,G=null,z=null,le=null,ae=!1,q=null,se=!!L.dynamicChildren)=>{if(v===L)return;v&&!un(v,L)&&(G=Re(v),J(v,z,le,!0),v=null),L.patchFlag===-2&&(se=!1,L.dynamicChildren=null);const{type:ne,ref:_e,shapeFlag:M}=L;switch(ne){case da:f(v,L,N,G);break;case Zn:p(v,L,N,G);break;case Da:v==null&&w(L,N,G,ae);break;case yi:ue(v,L,N,G,z,le,ae,q,se);break;default:M&1?R(v,L,N,G,z,le,ae,q,se):M&6?X(v,L,N,G,z,le,ae,q,se):(M&64||M&128)&&ne.process(v,L,N,G,z,le,ae,q,se,ze)}_e!=null&&z&&Ao(_e,v&&v.ref,le,L||v,!L)},f=(v,L,N,G)=>{if(v==null)r(L.el=a(L.children),N,G);else{const z=L.el=v.el;L.children!==v.children&&c(z,L.children)}},p=(v,L,N,G)=>{v==null?r(L.el=l(L.children||""),N,G):L.el=v.el},w=(v,L,N,G)=>{[v.el,v.anchor]=x(v.children,L,N,G,v.el,v.anchor)},y=({el:v,anchor:L},N,G)=>{let z;for(;v&&v!==L;)z=u(v),r(v,N,G),v=z;r(L,N,G)},T=({el:v,anchor:L})=>{let N;for(;v&&v!==L;)N=u(v),n(v),v=N;n(L)},R=(v,L,N,G,z,le,ae,q,se)=>{ae=ae||L.type==="svg",v==null?D(L,N,G,z,le,ae,q,se):E(v,L,z,le,ae,q,se)},D=(v,L,N,G,z,le,ae,q)=>{let se,ne;const{type:_e,props:M,shapeFlag:g,transition:U,dirs:Z}=v;if(se=v.el=o(v.type,le,M&&M.is,M),g&8?h(se,v.children):g&16&&ee(v.children,se,null,G,z,le&&_e!=="foreignObject",ae,q),Z&&Yi(v,null,G,"created"),C(se,v,v.scopeId,ae,G),M){for(const re in M)re!=="value"&&!Xs(re)&&s(se,re,null,M[re],le,v.children,G,z,Te);"value"in M&&s(se,"value",null,M.value),(ne=M.onVnodeBeforeMount)&&ii(ne,G,v)}Z&&Yi(v,null,G,"beforeMount");const ie=(!z||z&&!z.pendingBranch)&&U&&!U.persisted;ie&&U.beforeEnter(se),r(se,L,N),((ne=M&&M.onVnodeMounted)||ie||Z)&&Ct(()=>{ne&&ii(ne,G,v),ie&&U.enter(se),Z&&Yi(v,null,G,"mounted")},z)},C=(v,L,N,G,z)=>{if(N&&m(v,N),G)for(let le=0;le<G.length;le++)m(v,G[le]);if(z){let le=z.subTree;if(L===le){const ae=z.vnode;C(v,ae,ae.scopeId,ae.slotScopeIds,z.parent)}}},ee=(v,L,N,G,z,le,ae,q,se=0)=>{for(let ne=se;ne<v.length;ne++){const _e=v[ne]=q?Di(v[ne]):ri(v[ne]);_(null,_e,L,N,G,z,le,ae,q)}},E=(v,L,N,G,z,le,ae)=>{const q=L.el=v.el;let{patchFlag:se,dynamicChildren:ne,dirs:_e}=L;se|=v.patchFlag&16;const M=v.props||Ze,g=L.props||Ze;let U;N&&qi(N,!1),(U=g.onVnodeBeforeUpdate)&&ii(U,N,L,v),_e&&Yi(L,v,N,"beforeUpdate"),N&&qi(N,!0);const Z=z&&L.type!=="foreignObject";if(ne?b(v.dynamicChildren,ne,q,N,G,Z,le):ae||Q(v,L,q,null,N,G,Z,le,!1),se>0){if(se&16)oe(q,L,M,g,N,G,z);else if(se&2&&M.class!==g.class&&s(q,"class",null,g.class,z),se&4&&s(q,"style",M.style,g.style,z),se&8){const ie=L.dynamicProps;for(let re=0;re<ie.length;re++){const xe=ie[re],de=M[xe],k=g[xe];(k!==de||xe==="value")&&s(q,xe,de,k,z,v.children,N,G,Te)}}se&1&&v.children!==L.children&&h(q,L.children)}else!ae&&ne==null&&oe(q,L,M,g,N,G,z);((U=g.onVnodeUpdated)||_e)&&Ct(()=>{U&&ii(U,N,L,v),_e&&Yi(L,v,N,"updated")},G)},b=(v,L,N,G,z,le,ae)=>{for(let q=0;q<L.length;q++){const se=v[q],ne=L[q],_e=se.el&&(se.type===yi||!un(se,ne)||se.shapeFlag&70)?d(se.el):N;_(se,ne,_e,null,G,z,le,ae,!0)}},oe=(v,L,N,G,z,le,ae)=>{if(N!==G){if(N!==Ze)for(const q in N)!Xs(q)&&!(q in G)&&s(v,q,N[q],null,ae,L.children,z,le,Te);for(const q in G){if(Xs(q))continue;const se=G[q],ne=N[q];se!==ne&&q!=="value"&&s(v,q,ne,se,ae,L.children,z,le,Te)}"value"in G&&s(v,"value",N.value,G.value)}},ue=(v,L,N,G,z,le,ae,q,se)=>{const ne=L.el=v?v.el:a(""),_e=L.anchor=v?v.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:U}=L;U&&(q=q?q.concat(U):U),v==null?(r(ne,N,G),r(_e,N,G),ee(L.children,N,_e,z,le,ae,q,se)):M>0&&M&64&&g&&v.dynamicChildren?(b(v.dynamicChildren,g,N,z,le,ae,q),(L.key!=null||z&&L===z.subTree)&&Uu(v,L,!0)):Q(v,L,N,_e,z,le,ae,q,se)},X=(v,L,N,G,z,le,ae,q,se)=>{L.slotScopeIds=q,v==null?L.shapeFlag&512?z.ctx.activate(L,N,G,ae,se):j(L,N,G,z,le,ae,se):V(v,L,se)},j=(v,L,N,G,z,le,ae)=>{const q=v.component=Xf(v,G,z);if(Eu(v)&&(q.ctx.renderer=ze),jf(q),q.asyncDep){if(z&&z.registerDep(q,te),!v.el){const se=q.subTree=zi(Zn);p(null,se,L,N)}return}te(q,v,L,N,z,le,ae)},V=(v,L,N)=>{const G=L.component=v.component;if(Qp(v,L,N))if(G.asyncDep&&!G.asyncResolved){W(G,L,N);return}else G.next=L,Xp(G.update),G.update();else L.el=v.el,G.vnode=L},te=(v,L,N,G,z,le,ae)=>{const q=()=>{if(v.isMounted){let{next:_e,bu:M,u:g,parent:U,vnode:Z}=v,ie=_e,re;qi(v,!1),_e?(_e.el=Z.el,W(v,_e,ae)):_e=Z,M&&Ca(M),(re=_e.props&&_e.props.onVnodeBeforeUpdate)&&ii(re,U,_e,Z),qi(v,!0);const xe=La(v),de=v.subTree;v.subTree=xe,_(de,xe,d(de.el),Re(de),v,z,le),_e.el=xe.el,ie===null&&$p(v,xe.el),g&&Ct(g,z),(re=_e.props&&_e.props.onVnodeUpdated)&&Ct(()=>ii(re,U,_e,Z),z)}else{let _e;const{el:M,props:g}=L,{bm:U,m:Z,parent:ie}=v,re=js(L);if(qi(v,!1),U&&Ca(U),!re&&(_e=g&&g.onVnodeBeforeMount)&&ii(_e,ie,L),qi(v,!0),M&&Ue){const xe=()=>{v.subTree=La(v),Ue(M,v.subTree,v,z,null)};re?L.type.__asyncLoader().then(()=>!v.isUnmounted&&xe()):xe()}else{const xe=v.subTree=La(v);_(null,xe,N,G,v,z,le),L.el=xe.el}if(Z&&Ct(Z,z),!re&&(_e=g&&g.onVnodeMounted)){const xe=L;Ct(()=>ii(_e,ie,xe),z)}(L.shapeFlag&256||ie&&js(ie.vnode)&&ie.vnode.shapeFlag&256)&&v.a&&Ct(v.a,z),v.isMounted=!0,L=N=G=null}},se=v.effect=new Jo(q,()=>sl(ne),v.scope),ne=v.update=()=>se.run();ne.id=v.uid,qi(v,!0),ne()},W=(v,L,N)=>{L.component=v;const G=v.vnode.props;v.vnode=L,v.next=null,Af(v,L.props,G,N),Lf(v,L.children,N),tn(),Wl(),rn()},Q=(v,L,N,G,z,le,ae,q,se=!1)=>{const ne=v&&v.children,_e=v?v.shapeFlag:0,M=L.children,{patchFlag:g,shapeFlag:U}=L;if(g>0){if(g&128){ce(ne,M,N,G,z,le,ae,q,se);return}else if(g&256){he(ne,M,N,G,z,le,ae,q,se);return}}U&8?(_e&16&&Te(ne,z,le),M!==ne&&h(N,M)):_e&16?U&16?ce(ne,M,N,G,z,le,ae,q,se):Te(ne,z,le,!0):(_e&8&&h(N,""),U&16&&ee(M,N,G,z,le,ae,q,se))},he=(v,L,N,G,z,le,ae,q,se)=>{v=v||Gr,L=L||Gr;const ne=v.length,_e=L.length,M=Math.min(ne,_e);let g;for(g=0;g<M;g++){const U=L[g]=se?Di(L[g]):ri(L[g]);_(v[g],U,N,null,z,le,ae,q,se)}ne>_e?Te(v,z,le,!0,!1,M):ee(L,N,G,z,le,ae,q,se,M)},ce=(v,L,N,G,z,le,ae,q,se)=>{let ne=0;const _e=L.length;let M=v.length-1,g=_e-1;for(;ne<=M&&ne<=g;){const U=v[ne],Z=L[ne]=se?Di(L[ne]):ri(L[ne]);if(un(U,Z))_(U,Z,N,null,z,le,ae,q,se);else break;ne++}for(;ne<=M&&ne<=g;){const U=v[M],Z=L[g]=se?Di(L[g]):ri(L[g]);if(un(U,Z))_(U,Z,N,null,z,le,ae,q,se);else break;M--,g--}if(ne>M){if(ne<=g){const U=g+1,Z=U<_e?L[U].el:G;for(;ne<=g;)_(null,L[ne]=se?Di(L[ne]):ri(L[ne]),N,Z,z,le,ae,q,se),ne++}}else if(ne>g)for(;ne<=M;)J(v[ne],z,le,!0),ne++;else{const U=ne,Z=ne,ie=new Map;for(ne=Z;ne<=g;ne++){const pe=L[ne]=se?Di(L[ne]):ri(L[ne]);pe.key!=null&&ie.set(pe.key,ne)}let re,xe=0;const de=g-Z+1;let k=!1,A=0;const $=new Array(de);for(ne=0;ne<de;ne++)$[ne]=0;for(ne=U;ne<=M;ne++){const pe=v[ne];if(xe>=de){J(pe,z,le,!0);continue}let ge;if(pe.key!=null)ge=ie.get(pe.key);else for(re=Z;re<=g;re++)if($[re-Z]===0&&un(pe,L[re])){ge=re;break}ge===void 0?J(pe,z,le,!0):($[ge-Z]=ne+1,ge>=A?A=ge:k=!0,_(pe,L[ge],N,null,z,le,ae,q,se),xe++)}const Ee=k?Df($):Gr;for(re=Ee.length-1,ne=de-1;ne>=0;ne--){const pe=Z+ne,ge=L[pe],Ce=pe+1<_e?L[pe+1].el:G;$[ne]===0?_(null,ge,N,Ce,z,le,ae,q,se):k&&(re<0||ne!==Ee[re]?F(ge,N,Ce,2):re--)}}},F=(v,L,N,G,z=null)=>{const{el:le,type:ae,transition:q,children:se,shapeFlag:ne}=v;if(ne&6){F(v.component.subTree,L,N,G);return}if(ne&128){v.suspense.move(L,N,G);return}if(ne&64){ae.move(v,L,N,ze);return}if(ae===yi){r(le,L,N);for(let _e=0;_e<se.length;_e++)F(se[_e],L,N,G);r(v.anchor,L,N);return}if(ae===Da){y(v,L,N);return}if(G!==2&&ne&1&&q)if(G===0)q.beforeEnter(le),r(le,L,N),Ct(()=>q.enter(le),z);else{const{leave:_e,delayLeave:M,afterLeave:g}=q,U=()=>r(le,L,N),Z=()=>{_e(le,()=>{U(),g&&g()})};M?M(le,U,Z):Z()}else r(le,L,N)},J=(v,L,N,G=!1,z=!1)=>{const{type:le,props:ae,ref:q,children:se,dynamicChildren:ne,shapeFlag:_e,patchFlag:M,dirs:g}=v;if(q!=null&&Ao(q,null,N,v,!0),_e&256){L.ctx.deactivate(v);return}const U=_e&1&&g,Z=!js(v);let ie;if(Z&&(ie=ae&&ae.onVnodeBeforeUnmount)&&ii(ie,L,v),_e&6)we(v.component,N,G);else{if(_e&128){v.suspense.unmount(N,G);return}U&&Yi(v,null,L,"beforeUnmount"),_e&64?v.type.remove(v,L,N,z,ze,G):ne&&(le!==yi||M>0&&M&64)?Te(ne,L,N,!1,!0):(le===yi&&M&384||!z&&_e&16)&&Te(se,L,N),G&&me(v)}(Z&&(ie=ae&&ae.onVnodeUnmounted)||U)&&Ct(()=>{ie&&ii(ie,L,v),U&&Yi(v,null,L,"unmounted")},N)},me=v=>{const{type:L,el:N,anchor:G,transition:z}=v;if(L===yi){be(N,G);return}if(L===Da){T(v);return}const le=()=>{n(N),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(v.shapeFlag&1&&z&&!z.persisted){const{leave:ae,delayLeave:q}=z,se=()=>ae(N,le);q?q(v.el,le,se):se()}else le()},be=(v,L)=>{let N;for(;v!==L;)N=u(v),n(v),v=N;n(L)},we=(v,L,N)=>{const{bum:G,scope:z,update:le,subTree:ae,um:q}=v;G&&Ca(G),z.stop(),le&&(le.active=!1,J(ae,v,L,N)),q&&Ct(q,L),Ct(()=>{v.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Te=(v,L,N,G=!1,z=!1,le=0)=>{for(let ae=le;ae<v.length;ae++)J(v[ae],L,N,G,z)},Re=v=>v.shapeFlag&6?Re(v.component.subTree):v.shapeFlag&128?v.suspense.next():u(v.anchor||v.el),Ae=(v,L,N)=>{v==null?L._vnode&&J(L._vnode,null,null,!0):_(L._vnode||null,v,L,null,null,null,N),Wl(),mu(),L._vnode=v},ze={p:_,um:J,m:F,r:me,mt:j,mc:ee,pc:Q,pbc:b,n:Re,o:i};let et,Ue;return e&&([et,Ue]=e(ze)),{render:Ae,hydrate:et,createApp:bf(Ae,et)}}function qi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Uu(i,e,t=!1){const r=i.children,n=e.children;if(Ie(r)&&Ie(n))for(let s=0;s<r.length;s++){const o=r[s];let a=n[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[s]=Di(n[s]),a.el=o.el),t||Uu(o,a)),a.type===da&&(a.el=o.el)}}function Df(i){const e=i.slice(),t=[0];let r,n,s,o,a;const l=i.length;for(r=0;r<l;r++){const c=i[r];if(c!==0){if(n=t[t.length-1],i[n]<c){e[r]=n,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Nf=i=>i.__isTeleport,yi=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),Zn=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),Wn=[];let Zt=null;function Du(i=!1){Wn.push(Zt=i?null:[])}function If(){Wn.pop(),Zt=Wn[Wn.length-1]||null}let Qn=1;function ec(i){Qn+=i}function Nu(i){return i.dynamicChildren=Qn>0?Zt||Gr:null,If(),Qn>0&&Zt&&Zt.push(i),i}function Of(i,e,t,r,n,s){return Nu(pt(i,e,t,r,n,s,!0))}function Ff(i,e,t,r,n){return Nu(zi(i,e,t,r,n,!0))}function Bf(i){return i?i.__v_isVNode===!0:!1}function un(i,e){return i.type===e.type&&i.key===e.key}const pa="__vInternal",Iu=({key:i})=>i??null,qs=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?mt(i)||At(i)||Ge(i)?{i:oi,r:i,k:e,f:!!t}:i:null);function pt(i,e=null,t=null,r=0,n=null,s=i===yi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Iu(e),ref:e&&qs(e),scopeId:_u,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:oi};return a?(ll(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=mt(t)?8:16),Qn>0&&!o&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const zi=zf;function zf(i,e=null,t=null,r=0,n=null,s=!1){if((!i||i===gf)&&(i=Zn),Bf(i)){const a=Yr(i,e,!0);return t&&ll(a,t),Qn>0&&!s&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(i)]=a:Zt.push(a)),a.patchFlag|=-2,a}if(Jf(i)&&(i=i.__vccOpts),e){e=Hf(e);let{class:a,style:l}=e;a&&!mt(a)&&(e.class=qo(a)),st(l)&&(hu(l)&&!Ie(l)&&(l=dt({},l)),e.style=Yo(l))}const o=mt(i)?1:ef(i)?128:Nf(i)?64:st(i)?4:Ge(i)?2:0;return pt(i,e,t,r,n,o,s,!0)}function Hf(i){return i?hu(i)||pa in i?dt({},i):i:null}function Yr(i,e,t=!1){const{props:r,ref:n,patchFlag:s,children:o}=i,a=e?kf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Iu(a),ref:e&&e.ref?t&&n?Ie(n)?n.concat(qs(e)):[n,qs(e)]:qs(e):n,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==yi?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Yr(i.ssContent),ssFallback:i.ssFallback&&Yr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Gf(i=" ",e=0){return zi(da,null,i,e)}function ri(i){return i==null||typeof i=="boolean"?zi(Zn):Ie(i)?zi(yi,null,i.slice()):typeof i=="object"?Di(i):zi(da,null,String(i))}function Di(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Yr(i)}function ll(i,e){let t=0;const{shapeFlag:r}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(r&65){const n=e.default;n&&(n._c&&(n._d=!1),ll(i,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!(pa in e)?e._ctx=oi:n===3&&oi&&(oi.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:oi},t=32):(e=String(e),r&64?(t=16,e=[Gf(e)]):t=8);i.children=e,i.shapeFlag|=t}function kf(...i){const e={};for(let t=0;t<i.length;t++){const r=i[t];for(const n in r)if(n==="class")e.class!==r.class&&(e.class=qo([e.class,r.class]));else if(n==="style")e.style=Yo([e.style,r.style]);else if(sa(n)){const s=e[n],o=r[n];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[n]=s?[].concat(s,o):o)}else n!==""&&(e[n]=r[n])}return e}function ii(i,e,t,r=null){Qt(i,e,7,[t,r])}const Vf=wu();let Wf=0;function Xf(i,e,t){const r=i.type,n=(e?e.appContext:i.appContext)||Vf,s={uid:Wf++,vnode:i,type:r,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ru(r,n),emitsOptions:vu(r,n),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:r.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qp.bind(null,s),i.ce&&i.ce(s),s}let Mt=null,cl,fr,tc="__VUE_INSTANCE_SETTERS__";(fr=go()[tc])||(fr=go()[tc]=[]),fr.push(i=>Mt=i),cl=i=>{fr.length>1?fr.forEach(e=>e(i)):fr[0](i)};const qr=i=>{cl(i),i.scope.on()},sr=()=>{Mt&&Mt.scope.off(),cl(null)};function Ou(i){return i.vnode.shapeFlag&4}let $n=!1;function jf(i,e=!1){$n=e;const{props:t,children:r}=i.vnode,n=Ou(i);wf(i,t,n,e),Cf(i,r);const s=n?Yf(i,e):void 0;return $n=!1,s}function Yf(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=uu(new Proxy(i.ctx,vf));const{setup:r}=t;if(r){const n=i.setupContext=r.length>1?Kf(i):null;qr(i),tn();const s=Bi(r,i,0,[i.props,n]);if(rn(),sr(),Jh(s)){if(s.then(sr,sr),e)return s.then(o=>{ic(i,o,e)}).catch(o=>{ca(o,i,0)});i.asyncDep=s}else ic(i,s,e)}else Fu(i,e)}function ic(i,e,t){Ge(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:st(e)&&(i.setupState=du(e)),Fu(i,t)}let rc;function Fu(i,e,t){const r=i.type;if(!i.render){if(!e&&rc&&!r.render){const n=r.template||al(i).template;if(n){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=r,c=dt(dt({isCustomElement:s,delimiters:a},o),l);r.render=rc(n,c)}}i.render=r.render||li}qr(i),tn(),_f(i),rn(),sr()}function qf(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return Ut(i,"get","$attrs"),e[t]}}))}function Kf(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return qf(i)},slots:i.slots,emit:i.emit,expose:e}}function hl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(du(uu(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vn)return Vn[t](i)},has(e,t){return t in e||t in Vn}}))}function Jf(i){return Ge(i)&&"__vccOpts"in i}const Zf=(i,e)=>Gp(i,e,$n),Qf=Symbol.for("v-scx"),$f=()=>Ys(Qf),em="3.3.4",tm="http://www.w3.org/2000/svg",ir=typeof document<"u"?document:null,nc=ir&&ir.createElement("template"),im={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,r)=>{const n=e?ir.createElementNS(tm,i):ir.createElement(i,t?{is:t}:void 0);return i==="select"&&r&&r.multiple!=null&&n.setAttribute("multiple",r.multiple),n},createText:i=>ir.createTextNode(i),createComment:i=>ir.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ir.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,r,n,s){const o=t?t.previousSibling:e.lastChild;if(n&&(n===s||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===s||!(n=n.nextSibling)););else{nc.innerHTML=r?`<svg>${i}</svg>`:i;const a=nc.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function rm(i,e,t){const r=i._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function nm(i,e,t){const r=i.style,n=mt(t);if(t&&!n){if(e&&!mt(e))for(const s in e)t[s]==null&&Ro(r,s,"");for(const s in t)Ro(r,s,t[s])}else{const s=r.display;n?e!==t&&(r.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(r.display=s)}}const sc=/\s*!important$/;function Ro(i,e,t){if(Ie(t))t.forEach(r=>Ro(i,e,r));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const r=sm(i,e);sc.test(t)?i.setProperty(en(r),t.replace(sc,""),"important"):i[r]=t}}const ac=["Webkit","Moz","ms"],Na={};function sm(i,e){const t=Na[e];if(t)return t;let r=jr(e);if(r!=="filter"&&r in i)return Na[e]=r;r=Zh(r);for(let n=0;n<ac.length;n++){const s=ac[n]+r;if(s in i)return Na[e]=s}return e}const oc="http://www.w3.org/1999/xlink";function am(i,e,t,r,n){if(r&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(oc,e.slice(6,e.length)):i.setAttributeNS(oc,e,t);else{const s=ap(e);t==null||s&&!Qh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function om(i,e,t,r,n,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,n,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,h=t??"";c!==h&&(i.value=h),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Qh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function lm(i,e,t,r){i.addEventListener(e,t,r)}function cm(i,e,t,r){i.removeEventListener(e,t,r)}function hm(i,e,t,r,n=null){const s=i._vei||(i._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=um(e);if(r){const c=s[e]=fm(r,n);lm(i,a,c,l)}else o&&(cm(i,a,o,l),s[e]=void 0)}}const lc=/(?:Once|Passive|Capture)$/;function um(i){let e;if(lc.test(i)){e={};let t;for(;t=i.match(lc);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):en(i.slice(2)),e]}let Ia=0;const dm=Promise.resolve(),pm=()=>Ia||(dm.then(()=>Ia=0),Ia=Date.now());function fm(i,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Qt(mm(r,t.value),e,5,[r])};return t.value=i,t.attached=pm(),t}function mm(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(r=>n=>!n._stopped&&r&&r(n))}else return e}const cc=/^on[a-z]/,gm=(i,e,t,r,n=!1,s,o,a,l)=>{e==="class"?rm(i,r,n):e==="style"?nm(i,t,r):sa(e)?Vo(e)||hm(i,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vm(i,e,r,n))?om(i,e,r,s,o,a,l):(e==="true-value"?i._trueValue=r:e==="false-value"&&(i._falseValue=r),am(i,e,r,n))};function vm(i,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in i&&cc.test(e)&&Ge(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||cc.test(e)&&mt(t)?!1:e in i}const _m=dt({patchProp:gm},im);let hc;function xm(){return hc||(hc=Pf(_m))}const Mm=(...i)=>{const e=xm().createApp(...i),{mount:t}=e;return e.mount=r=>{const n=ym(r);if(!n)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=n.innerHTML),n.innerHTML="";const o=t(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),o},e};function ym(i){return mt(i)?document.querySelector(i):i}class $t{constructor(e){this._canceled=!1,this.data=e}get type(){return this.constructor.type}get cancelable(){return this.constructor.cancelable}cancel(){this._canceled=!0}canceled(){return this._canceled}clone(e){return new this.constructor({...this.data,...e})}}$t.type="event";$t.cancelable=!1;class fa{constructor(e){this.draggable=e}attach(){throw new Error("Not Implemented")}detach(){throw new Error("Not Implemented")}}const mr={mouse:0,drag:0,touch:100};class Bu{constructor(e=[],t={}){this.containers=[...e],this.options={...t},this.dragging=!1,this.currentContainer=null,this.originalSource=null,this.startEvent=null,this.delay=Em(t.delay)}attach(){return this}detach(){return this}addContainer(...e){this.containers=[...this.containers,...e]}removeContainer(...e){this.containers=this.containers.filter(t=>!e.includes(t))}trigger(e,t){const r=document.createEvent("Event");return r.detail=t,r.initEvent(t.type,!0,!0),e.dispatchEvent(r),this.lastEvent=t,t}}function Em(i){const e={};if(i===void 0)return{...mr};if(typeof i=="number"){for(const t in mr)Object.prototype.hasOwnProperty.call(mr,t)&&(e[t]=i);return e}for(const t in mr)Object.prototype.hasOwnProperty.call(mr,t)&&(i[t]===void 0?e[t]=mr[t]:e[t]=i[t]);return e}function Ht(i,e){if(i==null)return null;function t(n){return n==null||e==null?!1:Sm(e)?Element.prototype.matches.call(n,e):bm(e)?[...e].includes(n):Tm(e)?e===n:wm(e)?e(n):!1}let r=i;do{if(r=r.correspondingUseElement||r.correspondingElement||r,t(r))return r;r=(r==null?void 0:r.parentNode)||null}while(r!=null&&r!==document.body&&r!==document);return null}function Sm(i){return typeof i=="string"}function bm(i){return i instanceof NodeList||i instanceof Array}function Tm(i){return i instanceof Node}function wm(i){return typeof i=="function"}function zu(i,e,t,r){return Math.sqrt((t-i)**2+(r-e)**2)}class ma extends $t{get originalEvent(){return this.data.originalEvent}get clientX(){return this.data.clientX}get clientY(){return this.data.clientY}get target(){return this.data.target}get container(){return this.data.container}get originalSource(){return this.data.originalSource}get pressure(){return this.data.pressure}}class ul extends ma{}ul.type="drag:start";class dl extends ma{}dl.type="drag:move";class pl extends ma{}pl.type="drag:stop";class Am extends ma{}Am.type="drag:pressure";const dn=Symbol("onContextMenuWhileDragging"),pn=Symbol("onMouseDown"),fn=Symbol("onMouseMove"),mn=Symbol("onMouseUp"),vs=Symbol("startDrag"),Ai=Symbol("onDistanceChange");class Rm extends Bu{constructor(e=[],t={}){super(e,t),this.mouseDownTimeout=null,this.pageX=null,this.pageY=null,this[dn]=this[dn].bind(this),this[pn]=this[pn].bind(this),this[fn]=this[fn].bind(this),this[mn]=this[mn].bind(this),this[vs]=this[vs].bind(this),this[Ai]=this[Ai].bind(this)}attach(){document.addEventListener("mousedown",this[pn],!0)}detach(){document.removeEventListener("mousedown",this[pn],!0)}[pn](e){if(e.button!==0||e.ctrlKey||e.metaKey)return;const t=Ht(e.target,this.containers);if(!t||this.options.handle&&e.target&&!Ht(e.target,this.options.handle))return;const r=Ht(e.target,this.options.draggable);if(!r)return;const{delay:n}=this,{pageX:s,pageY:o}=e;Object.assign(this,{pageX:s,pageY:o}),this.onMouseDownAt=Date.now(),this.startEvent=e,this.currentContainer=t,this.originalSource=r,document.addEventListener("mouseup",this[mn]),document.addEventListener("dragstart",uc),document.addEventListener("mousemove",this[Ai]),this.mouseDownTimeout=window.setTimeout(()=>{this[Ai]({pageX:this.pageX,pageY:this.pageY})},n.mouse)}[vs](){const e=this.startEvent,t=this.currentContainer,r=this.originalSource,n=new ul({clientX:e.clientX,clientY:e.clientY,target:e.target,container:t,originalSource:r,originalEvent:e});this.trigger(this.currentContainer,n),this.dragging=!n.canceled(),this.dragging&&(document.addEventListener("contextmenu",this[dn],!0),document.addEventListener("mousemove",this[fn]))}[Ai](e){const{pageX:t,pageY:r}=e,{distance:n}=this.options,{startEvent:s,delay:o}=this;if(Object.assign(this,{pageX:t,pageY:r}),!this.currentContainer)return;const a=Date.now()-this.onMouseDownAt,l=zu(s.pageX,s.pageY,t,r)||0;clearTimeout(this.mouseDownTimeout),a<o.mouse?document.removeEventListener("mousemove",this[Ai]):l>=n&&(document.removeEventListener("mousemove",this[Ai]),this[vs]())}[fn](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),r=new dl({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,r)}[mn](e){if(clearTimeout(this.mouseDownTimeout),e.button!==0||(document.removeEventListener("mouseup",this[mn]),document.removeEventListener("dragstart",uc),document.removeEventListener("mousemove",this[Ai]),!this.dragging))return;const t=document.elementFromPoint(e.clientX,e.clientY),r=new pl({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,r),document.removeEventListener("contextmenu",this[dn],!0),document.removeEventListener("mousemove",this[fn]),this.currentContainer=null,this.dragging=!1,this.startEvent=null}[dn](e){e.preventDefault()}}function uc(i){i.preventDefault()}function gr(i){const{touches:e,changedTouches:t}=i;return e&&e[0]||t&&t[0]}const gn=Symbol("onTouchStart"),Ki=Symbol("onTouchEnd"),vn=Symbol("onTouchMove"),_s=Symbol("startDrag"),Ri=Symbol("onDistanceChange");let Ks=!1;window.addEventListener("touchmove",i=>{Ks&&i.preventDefault()},{passive:!1});class Cm extends Bu{constructor(e=[],t={}){super(e,t),this.currentScrollableParent=null,this.tapTimeout=null,this.touchMoved=!1,this.pageX=null,this.pageY=null,this[gn]=this[gn].bind(this),this[Ki]=this[Ki].bind(this),this[vn]=this[vn].bind(this),this[_s]=this[_s].bind(this),this[Ri]=this[Ri].bind(this)}attach(){document.addEventListener("touchstart",this[gn])}detach(){document.removeEventListener("touchstart",this[gn])}[gn](e){const t=Ht(e.target,this.containers);if(!t||this.options.handle&&e.target&&!Ht(e.target,this.options.handle))return;const r=Ht(e.target,this.options.draggable);if(!r)return;const{distance:n=0}=this.options,{delay:s}=this,{pageX:o,pageY:a}=gr(e);Object.assign(this,{pageX:o,pageY:a}),this.onTouchStartAt=Date.now(),this.startEvent=e,this.currentContainer=t,this.originalSource=r,document.addEventListener("touchend",this[Ki]),document.addEventListener("touchcancel",this[Ki]),document.addEventListener("touchmove",this[Ri]),t.addEventListener("contextmenu",dc),n&&(Ks=!0),this.tapTimeout=window.setTimeout(()=>{this[Ri]({touches:[{pageX:this.pageX,pageY:this.pageY}]})},s.touch)}[_s](){const e=this.startEvent,t=this.currentContainer,r=gr(e),n=this.originalSource,s=new ul({clientX:r.pageX,clientY:r.pageY,target:e.target,container:t,originalSource:n,originalEvent:e});this.trigger(this.currentContainer,s),this.dragging=!s.canceled(),this.dragging&&document.addEventListener("touchmove",this[vn]),Ks=this.dragging}[Ri](e){const{distance:t}=this.options,{startEvent:r,delay:n}=this,s=gr(r),o=gr(e),a=Date.now()-this.onTouchStartAt,l=zu(s.pageX,s.pageY,o.pageX,o.pageY);Object.assign(this,o),clearTimeout(this.tapTimeout),a<n.touch?document.removeEventListener("touchmove",this[Ri]):l>=t&&(document.removeEventListener("touchmove",this[Ri]),this[_s]())}[vn](e){if(!this.dragging)return;const{pageX:t,pageY:r}=gr(e),n=document.elementFromPoint(t-window.scrollX,r-window.scrollY),s=new dl({clientX:t,clientY:r,target:n,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,s)}[Ki](e){if(clearTimeout(this.tapTimeout),Ks=!1,document.removeEventListener("touchend",this[Ki]),document.removeEventListener("touchcancel",this[Ki]),document.removeEventListener("touchmove",this[Ri]),this.currentContainer&&this.currentContainer.removeEventListener("contextmenu",dc),!this.dragging)return;document.removeEventListener("touchmove",this[vn]);const{pageX:t,pageY:r}=gr(e),n=document.elementFromPoint(t-window.scrollX,r-window.scrollY);e.preventDefault();const s=new pl({clientX:t,clientY:r,target:n,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,s),this.currentContainer=null,this.dragging=!1,this.startEvent=null}}function dc(i){i.preventDefault(),i.stopPropagation()}class fl extends $t{get dragEvent(){return this.data.dragEvent}}fl.type="collidable";class Lm extends fl{get collidingElement(){return this.data.collidingElement}}Lm.type="collidable:in";class Pm extends fl{get collidingElement(){return this.data.collidingElement}}Pm.type="collidable:out";class ui extends $t{constructor(e){super(e),this.data=e}get source(){return this.data.source}get originalSource(){return this.data.originalSource}get mirror(){return this.data.mirror}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}ui.type="drag";class ml extends ui{}ml.type="drag:start";ml.cancelable=!0;class Hu extends ui{}Hu.type="drag:move";class gl extends ui{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}gl.type="drag:over";gl.cancelable=!0;class Gu extends ui{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}Gu.type="drag:out";class ku extends ui{get overContainer(){return this.data.overContainer}}ku.type="drag:over:container";class Vu extends ui{get overContainer(){return this.data.overContainer}}Vu.type="drag:out:container";class Wu extends ui{get pressure(){return this.data.pressure}}Wu.type="drag:pressure";class vl extends ui{}vl.type="drag:stop";vl.cancelable=!0;class Xu extends ui{}Xu.type="drag:stopped";class _l extends $t{get dragEvent(){return this.data.dragEvent}get snappable(){return this.data.snappable}}_l.type="snap";class ju extends _l{}ju.type="snap:in";ju.cancelable=!0;class Yu extends _l{}Yu.type="snap:out";Yu.cancelable=!0;const xs=Symbol("onInitialize"),Ms=Symbol("onDestroy"),pc=Symbol("announceEvent"),Oa=Symbol("announceMessage"),Um="aria-relevant",Dm="aria-atomic",Nm="aria-live",Im="role",Om={expire:7e3};class Fm extends fa{constructor(e){super(e),this.options={...Om,...this.getOptions()},this.originalTriggerMethod=this.draggable.trigger,this[xs]=this[xs].bind(this),this[Ms]=this[Ms].bind(this)}attach(){this.draggable.on("draggable:initialize",this[xs])}detach(){this.draggable.off("draggable:destroy",this[Ms])}getOptions(){return this.draggable.options.announcements||{}}[pc](e){const t=this.options[e.type];t&&typeof t=="string"&&this[Oa](t),t&&typeof t=="function"&&this[Oa](t(e))}[Oa](e){Bm(e,{expire:this.options.expire})}[xs](){this.draggable.trigger=e=>{try{this[pc](e)}finally{this.originalTriggerMethod.call(this.draggable,e)}}}[Ms](){this.draggable.trigger=this.originalTriggerMethod}}const Co=zm();function Bm(i,{expire:e}){const t=document.createElement("div");return t.textContent=i,Co.appendChild(t),setTimeout(()=>{Co.removeChild(t)},e)}function zm(){const i=document.createElement("div");return i.setAttribute("id","draggable-live-region"),i.setAttribute(Um,"additions"),i.setAttribute(Dm,"true"),i.setAttribute(Nm,"assertive"),i.setAttribute(Im,"log"),i.style.position="fixed",i.style.width="1px",i.style.height="1px",i.style.top="-1px",i.style.overflow="hidden",i}document.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(Co)});const _n=Symbol("onInitialize"),vr=Symbol("onDestroy"),Hm={};class Gm extends fa{constructor(e){super(e),this.options={...Hm,...this.getOptions()},this[_n]=this[_n].bind(this),this[vr]=this[vr].bind(this)}attach(){this.draggable.on("draggable:initialize",this[_n]).on("draggable:destroy",this[vr])}detach(){this.draggable.off("draggable:initialize",this[_n]).off("draggable:destroy",this[vr]),this[vr]()}getOptions(){return this.draggable.options.focusable||{}}getElements(){return[...this.draggable.containers,...this.draggable.getDraggableElements()]}[_n](){requestAnimationFrame(()=>{this.getElements().forEach(e=>km(e))})}[vr](){requestAnimationFrame(()=>{this.getElements().forEach(e=>Vm(e))})}}const Lo=[];function km(i){!i.getAttribute("tabindex")&&i.tabIndex===-1&&(Lo.push(i),i.tabIndex=0)}function Vm(i){const e=Lo.indexOf(i);e!==-1&&(i.tabIndex=-1,Lo.splice(e,1))}class nn extends $t{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get dragEvent(){return this.data.dragEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}class qu extends nn{}qu.type="mirror:create";class Ku extends nn{get mirror(){return this.data.mirror}}Ku.type="mirror:created";class Ju extends nn{get mirror(){return this.data.mirror}}Ju.type="mirror:attached";class xl extends nn{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}xl.type="mirror:move";xl.cancelable=!0;class Zu extends nn{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}Zu.type="mirror:moved";class Ml extends nn{get mirror(){return this.data.mirror}}Ml.type="mirror:destroy";Ml.cancelable=!0;const xn=Symbol("onDragStart"),Mn=Symbol("onDragMove"),yn=Symbol("onDragStop"),En=Symbol("onMirrorCreated"),Sn=Symbol("onMirrorMove"),bn=Symbol("onScroll"),fc=Symbol("getAppendableContainer"),Wm={constrainDimensions:!1,xAxis:!0,yAxis:!0,cursorOffsetX:null,cursorOffsetY:null,thresholdX:null,thresholdY:null};class Xm extends fa{constructor(e){super(e),this.options={...Wm,...this.getOptions()},this.scrollOffset={x:0,y:0},this.initialScrollOffset={x:window.scrollX,y:window.scrollY},this[xn]=this[xn].bind(this),this[Mn]=this[Mn].bind(this),this[yn]=this[yn].bind(this),this[En]=this[En].bind(this),this[Sn]=this[Sn].bind(this),this[bn]=this[bn].bind(this)}attach(){this.draggable.on("drag:start",this[xn]).on("drag:move",this[Mn]).on("drag:stop",this[yn]).on("mirror:created",this[En]).on("mirror:move",this[Sn])}detach(){this.draggable.off("drag:start",this[xn]).off("drag:move",this[Mn]).off("drag:stop",this[yn]).off("mirror:created",this[En]).off("mirror:move",this[Sn])}getOptions(){return this.draggable.options.mirror||{}}[xn](e){if(e.canceled())return;"ontouchstart"in window&&document.addEventListener("scroll",this[bn],!0),this.initialScrollOffset={x:window.scrollX,y:window.scrollY};const{source:t,originalSource:r,sourceContainer:n,sensorEvent:s}=e;this.lastMirrorMovedClient={x:s.clientX,y:s.clientY};const o=new qu({source:t,originalSource:r,sourceContainer:n,sensorEvent:s,dragEvent:e});if(this.draggable.trigger(o),Zm(s)||o.canceled())return;const a=this[fc](t)||n;this.mirror=t.cloneNode(!0);const l=new Ku({source:t,originalSource:r,sourceContainer:n,sensorEvent:s,dragEvent:e,mirror:this.mirror}),c=new Ju({source:t,originalSource:r,sourceContainer:n,sensorEvent:s,dragEvent:e,mirror:this.mirror});this.draggable.trigger(l),a.appendChild(this.mirror),this.draggable.trigger(c)}[Mn](e){if(!this.mirror||e.canceled())return;const{source:t,originalSource:r,sourceContainer:n,sensorEvent:s}=e;let o=!0,a=!0;if(this.options.thresholdX||this.options.thresholdY){const{x:c,y:h}=this.lastMirrorMovedClient;if(Math.abs(c-s.clientX)<this.options.thresholdX?o=!1:this.lastMirrorMovedClient.x=s.clientX,Math.abs(h-s.clientY)<this.options.thresholdY?a=!1:this.lastMirrorMovedClient.y=s.clientY,!o&&!a)return}const l=new xl({source:t,originalSource:r,sourceContainer:n,sensorEvent:s,dragEvent:e,mirror:this.mirror,passedThreshX:o,passedThreshY:a});this.draggable.trigger(l)}[yn](e){if("ontouchstart"in window&&document.removeEventListener("scroll",this[bn],!0),this.initialScrollOffset={x:0,y:0},this.scrollOffset={x:0,y:0},!this.mirror)return;const{source:t,sourceContainer:r,sensorEvent:n}=e,s=new Ml({source:t,mirror:this.mirror,sourceContainer:r,sensorEvent:n,dragEvent:e});this.draggable.trigger(s),s.canceled()||this.mirror.remove()}[bn](){this.scrollOffset={x:window.scrollX-this.initialScrollOffset.x,y:window.scrollY-this.initialScrollOffset.y}}[En]({mirror:e,source:t,sensorEvent:r}){const n=this.draggable.getClassNamesFor("mirror"),s=({mirrorOffset:a,initialX:l,initialY:c,...h})=>(this.mirrorOffset=a,this.initialX=l,this.initialY=c,this.lastMovedX=l,this.lastMovedY=c,{mirrorOffset:a,initialX:l,initialY:c,...h});e.style.display="none";const o={mirror:e,source:t,sensorEvent:r,mirrorClasses:n,scrollOffset:this.scrollOffset,options:this.options,passedThreshX:!0,passedThreshY:!0};return Promise.resolve(o).then(jm).then(Ym).then(qm).then(Km).then(mc({initial:!0})).then(Jm).then(s)}[Sn](e){if(e.canceled())return null;const t=({lastMovedX:s,lastMovedY:o,...a})=>(this.lastMovedX=s,this.lastMovedY=o,{lastMovedX:s,lastMovedY:o,...a}),r=s=>{const o=new Zu({source:e.source,originalSource:e.originalSource,sourceContainer:e.sourceContainer,sensorEvent:e.sensorEvent,dragEvent:e.dragEvent,mirror:this.mirror,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY});return this.draggable.trigger(o),s},n={mirror:e.mirror,sensorEvent:e.sensorEvent,mirrorOffset:this.mirrorOffset,options:this.options,initialX:this.initialX,initialY:this.initialY,scrollOffset:this.scrollOffset,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY,lastMovedX:this.lastMovedX,lastMovedY:this.lastMovedY};return Promise.resolve(n).then(mc({raf:!0})).then(t).then(r)}[fc](e){const t=this.options.appendTo;return typeof t=="string"?document.querySelector(t):t instanceof HTMLElement?t:typeof t=="function"?t(e):e.parentNode}}function jm({source:i,...e}){return sn(t=>{const r=i.getBoundingClientRect();t({source:i,sourceRect:r,...e})})}function Ym({sensorEvent:i,sourceRect:e,options:t,...r}){return sn(n=>{const s=t.cursorOffsetY===null?i.clientY-e.top:t.cursorOffsetY,o=t.cursorOffsetX===null?i.clientX-e.left:t.cursorOffsetX;n({sensorEvent:i,sourceRect:e,mirrorOffset:{top:s,left:o},options:t,...r})})}function qm({mirror:i,source:e,options:t,...r}){return sn(n=>{let s,o;if(t.constrainDimensions){const a=getComputedStyle(e);s=a.getPropertyValue("height"),o=a.getPropertyValue("width")}i.style.display=null,i.style.position="fixed",i.style.pointerEvents="none",i.style.top=0,i.style.left=0,i.style.margin=0,t.constrainDimensions&&(i.style.height=s,i.style.width=o),n({mirror:i,source:e,options:t,...r})})}function Km({mirror:i,mirrorClasses:e,...t}){return sn(r=>{i.classList.add(...e),r({mirror:i,mirrorClasses:e,...t})})}function Jm({mirror:i,...e}){return sn(t=>{i.removeAttribute("id"),delete i.id,t({mirror:i,...e})})}function mc({withFrame:i=!1,initial:e=!1}={}){return({mirror:t,sensorEvent:r,mirrorOffset:n,initialY:s,initialX:o,scrollOffset:a,options:l,passedThreshX:c,passedThreshY:h,lastMovedX:d,lastMovedY:u,...m})=>sn(x=>{const _={mirror:t,sensorEvent:r,mirrorOffset:n,options:l,...m};if(n){const f=c?Math.round((r.clientX-n.left-a.x)/(l.thresholdX||1))*(l.thresholdX||1):Math.round(d),p=h?Math.round((r.clientY-n.top-a.y)/(l.thresholdY||1))*(l.thresholdY||1):Math.round(u);l.xAxis&&l.yAxis||e?t.style.transform=`translate3d(${f}px, ${p}px, 0)`:l.xAxis&&!l.yAxis?t.style.transform=`translate3d(${f}px, ${s}px, 0)`:l.yAxis&&!l.xAxis&&(t.style.transform=`translate3d(${o}px, ${p}px, 0)`),e&&(_.initialX=f,_.initialY=p),_.lastMovedX=f,_.lastMovedY=p}x(_)},{frame:i})}function sn(i,{raf:e=!1}={}){return new Promise((t,r)=>{e?requestAnimationFrame(()=>{i(t,r)}):i(t,r)})}function Zm(i){return/^drag/.test(i.originalEvent.type)}const Tn=Symbol("onDragStart"),wn=Symbol("onDragMove"),An=Symbol("onDragStop"),Rn=Symbol("scroll"),Qm={speed:6,sensitivity:50,scrollableElements:[]};class $m extends fa{constructor(e){super(e),this.options={...Qm,...this.getOptions()},this.currentMousePosition=null,this.scrollAnimationFrame=null,this.scrollableElement=null,this.findScrollableElementFrame=null,this[Tn]=this[Tn].bind(this),this[wn]=this[wn].bind(this),this[An]=this[An].bind(this),this[Rn]=this[Rn].bind(this)}attach(){this.draggable.on("drag:start",this[Tn]).on("drag:move",this[wn]).on("drag:stop",this[An])}detach(){this.draggable.off("drag:start",this[Tn]).off("drag:move",this[wn]).off("drag:stop",this[An])}getOptions(){return this.draggable.options.scrollable||{}}getScrollableElement(e){return this.hasDefinedScrollableElements()?Ht(e,this.options.scrollableElements)||document.documentElement:ig(e)}hasDefinedScrollableElements(){return this.options.scrollableElements.length!==0}[Tn](e){this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.source)})}[wn](e){if(this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.sensorEvent.target)}),!this.scrollableElement)return;const t=e.sensorEvent,r={x:0,y:0};"ontouchstart"in window&&(r.y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,r.x=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0),this.currentMousePosition={clientX:t.clientX-r.x,clientY:t.clientY-r.y},this.scrollAnimationFrame=requestAnimationFrame(this[Rn])}[An](){cancelAnimationFrame(this.scrollAnimationFrame),cancelAnimationFrame(this.findScrollableElementFrame),this.scrollableElement=null,this.scrollAnimationFrame=null,this.findScrollableElementFrame=null,this.currentMousePosition=null}[Rn](){if(!this.scrollableElement||!this.currentMousePosition)return;cancelAnimationFrame(this.scrollAnimationFrame);const{speed:e,sensitivity:t}=this.options,r=this.scrollableElement.getBoundingClientRect(),n=r.bottom>window.innerHeight,s=r.top<0||n,o=Po(),a=this.scrollableElement,l=this.currentMousePosition.clientX,c=this.currentMousePosition.clientY;if(a!==document.body&&a!==document.documentElement&&!s){const{offsetHeight:h,offsetWidth:d}=a;r.top+h-c<t?a.scrollTop+=e:c-r.top<t&&(a.scrollTop-=e),r.left+d-l<t?a.scrollLeft+=e:l-r.left<t&&(a.scrollLeft-=e)}else{const{innerHeight:h,innerWidth:d}=window;c<t?o.scrollTop-=e:h-c<t&&(o.scrollTop+=e),l<t?o.scrollLeft-=e:d-l<t&&(o.scrollLeft+=e)}this.scrollAnimationFrame=requestAnimationFrame(this[Rn])}}function eg(i){const e=/(auto|scroll)/,t=getComputedStyle(i,null),r=t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x");return e.test(r)}function tg(i){return getComputedStyle(i).getPropertyValue("position")==="static"}function ig(i){if(!i)return Po();const e=getComputedStyle(i).getPropertyValue("position"),t=e==="absolute",r=Ht(i,n=>t&&tg(n)?!1:eg(n));return e==="fixed"||!r?Po():r}function Po(){return document.scrollingElement||document.documentElement}class rg{constructor(){this.callbacks={}}on(e,...t){return this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(...t),this}off(e,t){if(!this.callbacks[e])return null;const r=this.callbacks[e].slice(0);for(let n=0;n<r.length;n++)t===r[n]&&this.callbacks[e].splice(n,1);return this}trigger(e){if(!this.callbacks[e.type])return null;const t=[...this.callbacks[e.type]],r=[];for(let n=t.length-1;n>=0;n--){const s=t[n];try{s(e)}catch(o){r.push(o)}}return r.length&&console.error(`Draggable caught errors while triggering '${e.type}'`,r),this}}class yl extends $t{get draggable(){return this.data.draggable}}yl.type="draggable";class Qu extends yl{}Qu.type="draggable:initialize";class $u extends yl{}$u.type="draggable:destroy";const Cn=Symbol("onDragStart"),_r=Symbol("onDragMove"),Ln=Symbol("onDragStop"),Pn=Symbol("onDragPressure"),Un=Symbol("dragStop"),ng={"drag:start":i=>`Picked up ${i.source.textContent.trim()||i.source.id||"draggable element"}`,"drag:stop":i=>`Released ${i.source.textContent.trim()||i.source.id||"draggable element"}`},sg={"container:dragging":"draggable-container--is-dragging","source:dragging":"draggable-source--is-dragging","source:placed":"draggable-source--placed","container:placed":"draggable-container--placed","body:dragging":"draggable--is-dragging","draggable:over":"draggable--over","container:over":"draggable-container--over","source:original":"draggable--original",mirror:"draggable-mirror"},ag={draggable:".draggable-source",handle:null,delay:{},distance:0,placedTimeout:800,plugins:[],sensors:[],exclude:{plugins:[],sensors:[]}};class Kr{constructor(e=[document.body],t={}){if(e instanceof NodeList||e instanceof Array)this.containers=[...e];else if(e instanceof HTMLElement)this.containers=[e];else throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");this.options={...ag,...t,classes:{...sg,...t.classes||{}},announcements:{...ng,...t.announcements||{}},exclude:{plugins:t.exclude&&t.exclude.plugins||[],sensors:t.exclude&&t.exclude.sensors||[]}},this.emitter=new rg,this.dragging=!1,this.plugins=[],this.sensors=[],this[Cn]=this[Cn].bind(this),this[_r]=this[_r].bind(this),this[Ln]=this[Ln].bind(this),this[Pn]=this[Pn].bind(this),this[Un]=this[Un].bind(this),document.addEventListener("drag:start",this[Cn],!0),document.addEventListener("drag:move",this[_r],!0),document.addEventListener("drag:stop",this[Ln],!0),document.addEventListener("drag:pressure",this[Pn],!0);const r=Object.values(Kr.Plugins).filter(o=>!this.options.exclude.plugins.includes(o)),n=Object.values(Kr.Sensors).filter(o=>!this.options.exclude.sensors.includes(o));this.addPlugin(...r,...this.options.plugins),this.addSensor(...n,...this.options.sensors);const s=new Qu({draggable:this});this.on("mirror:created",({mirror:o})=>this.mirror=o),this.on("mirror:destroy",()=>this.mirror=null),this.trigger(s)}destroy(){document.removeEventListener("drag:start",this[Cn],!0),document.removeEventListener("drag:move",this[_r],!0),document.removeEventListener("drag:stop",this[Ln],!0),document.removeEventListener("drag:pressure",this[Pn],!0);const e=new $u({draggable:this});this.trigger(e),this.removePlugin(...this.plugins.map(t=>t.constructor)),this.removeSensor(...this.sensors.map(t=>t.constructor))}addPlugin(...e){const t=e.map(r=>new r(this));return t.forEach(r=>r.attach()),this.plugins=[...this.plugins,...t],this}removePlugin(...e){return this.plugins.filter(t=>e.includes(t.constructor)).forEach(t=>t.detach()),this.plugins=this.plugins.filter(t=>!e.includes(t.constructor)),this}addSensor(...e){const t=e.map(r=>new r(this.containers,this.options));return t.forEach(r=>r.attach()),this.sensors=[...this.sensors,...t],this}removeSensor(...e){return this.sensors.filter(t=>e.includes(t.constructor)).forEach(t=>t.detach()),this.sensors=this.sensors.filter(t=>!e.includes(t.constructor)),this}addContainer(...e){return this.containers=[...this.containers,...e],this.sensors.forEach(t=>t.addContainer(...e)),this}removeContainer(...e){return this.containers=this.containers.filter(t=>!e.includes(t)),this.sensors.forEach(t=>t.removeContainer(...e)),this}on(e,...t){return this.emitter.on(e,...t),this}off(e,t){return this.emitter.off(e,t),this}trigger(e){return this.emitter.trigger(e),this}getClassNameFor(e){return this.getClassNamesFor(e)[0]}getClassNamesFor(e){const t=this.options.classes[e];return t instanceof Array?t:typeof t=="string"||t instanceof String?[t]:[]}isDragging(){return!!this.dragging}getDraggableElements(){return this.containers.reduce((e,t)=>[...e,...this.getDraggableElementsForContainer(t)],[])}getDraggableElementsForContainer(e){return[...e.querySelectorAll(this.options.draggable)].filter(t=>t!==this.originalSource&&t!==this.mirror)}cancel(){this[Un]()}[Cn](e){const t=ys(e),{target:r,container:n,originalSource:s}=t;if(!this.containers.includes(n))return;if(this.options.handle&&r&&!Ht(r,this.options.handle)){t.cancel();return}this.originalSource=s,this.sourceContainer=n,this.lastPlacedSource&&this.lastPlacedContainer&&(clearTimeout(this.placedTimeoutID),this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"))),this.source=this.originalSource.cloneNode(!0),this.originalSource.parentNode.insertBefore(this.source,this.originalSource),this.originalSource.style.display="none";const o=new ml({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t});if(this.trigger(o),this.dragging=!o.canceled(),o.canceled()){this.source.remove(),this.originalSource.style.display=null;return}this.originalSource.classList.add(...this.getClassNamesFor("source:original")),this.source.classList.add(...this.getClassNamesFor("source:dragging")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:dragging")),document.body.classList.add(...this.getClassNamesFor("body:dragging")),gc(document.body,"none"),requestAnimationFrame(()=>{const a=ys(e).clone({target:this.source});this[_r]({...e,detail:a})})}[_r](e){if(!this.dragging)return;const t=ys(e),{container:r}=t;let n=t.target;const s=new Hu({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t});this.trigger(s),s.canceled()&&t.cancel(),n=Ht(n,this.options.draggable);const o=Ht(t.target,this.containers),a=t.overContainer||o,l=this.currentOverContainer&&a!==this.currentOverContainer,c=this.currentOver&&n!==this.currentOver,h=a&&this.currentOverContainer!==a,d=o&&n&&this.currentOver!==n;if(c){const u=new Gu({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t,over:this.currentOver,overContainer:this.currentOverContainer});this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOver=null,this.trigger(u)}if(l){const u=new Vu({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t,overContainer:this.currentOverContainer});this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.currentOverContainer=null,this.trigger(u)}if(h){a.classList.add(...this.getClassNamesFor("container:over"));const u=new ku({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t,overContainer:a});this.currentOverContainer=a,this.trigger(u)}if(d){n.classList.add(...this.getClassNamesFor("draggable:over"));const u=new gl({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t,overContainer:a,over:n});this.currentOver=n,this.trigger(u)}}[Un](e){if(!this.dragging)return;this.dragging=!1;const t=new vl({source:this.source,originalSource:this.originalSource,sensorEvent:e?e.sensorEvent:null,sourceContainer:this.sourceContainer});this.trigger(t),t.canceled()||this.source.parentNode.insertBefore(this.originalSource,this.source),this.source.remove(),this.originalSource.style.display="",this.source.classList.remove(...this.getClassNamesFor("source:dragging")),this.originalSource.classList.remove(...this.getClassNamesFor("source:original")),this.originalSource.classList.add(...this.getClassNamesFor("source:placed")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:placed")),this.sourceContainer.classList.remove(...this.getClassNamesFor("container:dragging")),document.body.classList.remove(...this.getClassNamesFor("body:dragging")),gc(document.body,""),this.currentOver&&this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOverContainer&&this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.lastPlacedSource=this.originalSource,this.lastPlacedContainer=this.sourceContainer,this.placedTimeoutID=setTimeout(()=>{this.lastPlacedSource&&this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer&&this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed")),this.lastPlacedSource=null,this.lastPlacedContainer=null},this.options.placedTimeout);const r=new Xu({source:this.source,originalSource:this.originalSource,sensorEvent:e?e.sensorEvent:null,sourceContainer:this.sourceContainer});this.trigger(r),this.source=null,this.originalSource=null,this.currentOverContainer=null,this.currentOver=null,this.sourceContainer=null}[Ln](e){this[Un](e)}[Pn](e){if(!this.dragging)return;const t=ys(e),r=this.source||Ht(t.originalEvent.target,this.options.draggable),n=new Wu({sensorEvent:t,source:r,pressure:t.pressure});this.trigger(n)}}Kr.Plugins={Announcement:Fm,Focusable:Gm,Mirror:Xm,Scrollable:$m};Kr.Sensors={MouseSensor:Rm,TouchSensor:Cm};function ys(i){return i.detail}function gc(i,e){i.style.webkitUserSelect=e,i.style.mozUserSelect=e,i.style.msUserSelect=e,i.style.oUserSelect=e,i.style.userSelect=e}class ns extends $t{get dragEvent(){return this.data.dragEvent}}ns.type="droppable";class ed extends ns{get dropzone(){return this.data.dropzone}}ed.type="droppable:start";ed.cancelable=!0;class td extends ns{get dropzone(){return this.data.dropzone}}td.type="droppable:dropped";td.cancelable=!0;class id extends ns{get dropzone(){return this.data.dropzone}}id.type="droppable:returned";id.cancelable=!0;class rd extends ns{get dropzone(){return this.data.dropzone}}rd.type="droppable:stop";rd.cancelable=!0;class ss extends $t{get dragEvent(){return this.data.dragEvent}}ss.type="swappable";class nd extends ss{}nd.type="swappable:start";nd.cancelable=!0;class sd extends ss{get over(){return this.data.over}get overContainer(){return this.data.overContainer}}sd.type="swappable:swap";sd.cancelable=!0;class og extends ss{get swappedElement(){return this.data.swappedElement}}og.type="swappable:swapped";class lg extends ss{}lg.type="swappable:stop";class as extends $t{get dragEvent(){return this.data.dragEvent}}as.type="sortable";class ad extends as{get startIndex(){return this.data.startIndex}get startContainer(){return this.data.startContainer}}ad.type="sortable:start";ad.cancelable=!0;class od extends as{get currentIndex(){return this.data.currentIndex}get over(){return this.data.over}get overContainer(){return this.data.dragEvent.overContainer}}od.type="sortable:sort";od.cancelable=!0;class cg extends as{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}cg.type="sortable:sorted";class hg extends as{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}hg.type="sortable:stop";/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const El="156",xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ug=0,vc=1,dg=2,ld=1,pg=2,xi=3,Wi=0,Lt=1,ai=2,Hi=0,Wr=1,_c=2,xc=3,Mc=4,fg=5,Fr=100,mg=101,gg=102,yc=103,Ec=104,vg=200,_g=201,xg=202,Mg=203,cd=204,hd=205,yg=206,Eg=207,Sg=208,bg=209,Tg=210,wg=0,Ag=1,Rg=2,Uo=3,Cg=4,Lg=5,Pg=6,Ug=7,ud=0,Dg=1,Ng=2,Gi=0,Ig=1,Og=2,Fg=3,Bg=4,zg=5,dd=300,Jr=301,Zr=302,Do=303,No=304,ga=306,Io=1e3,Kt=1001,Oo=1002,wt=1003,Sc=1004,Fa=1005,Bt=1006,Hg=1007,es=1008,ki=1009,Gg=1010,kg=1011,Sl=1012,pd=1013,Ii=1014,Oi=1015,ts=1016,fd=1017,md=1018,ar=1020,Vg=1021,Jt=1023,Wg=1024,Xg=1025,or=1026,Qr=1027,jg=1028,gd=1029,Yg=1030,vd=1031,_d=1033,Ba=33776,za=33777,Ha=33778,Ga=33779,bc=35840,Tc=35841,wc=35842,Ac=35843,qg=36196,Rc=37492,Cc=37496,Lc=37808,Pc=37809,Uc=37810,Dc=37811,Nc=37812,Ic=37813,Oc=37814,Fc=37815,Bc=37816,zc=37817,Hc=37818,Gc=37819,kc=37820,Vc=37821,ka=36492,Wc=36494,Xc=36495,Kg=36283,jc=36284,Yc=36285,qc=36286,xd=3e3,lr=3001,Jg=3200,Zg=3201,Md=0,Qg=1,cr="",Qe="srgb",hi="srgb-linear",va="display-p3",Va=7680,$g=519,ev=512,tv=513,iv=514,rv=515,nv=516,sv=517,av=518,ov=519,Kc=35044,Jc="300 es",Fo=1035,Ei=2e3,ia=2001;class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const Xn=Math.PI/180,is=180/Math.PI;function an(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function bl(i,e){return(i%e+e)%e}function lv(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function cv(i,e,t){return i!==e?(t-i)/(e-i):0}function jn(i,e,t){return(1-t)*i+t*e}function hv(i,e,t,r){return jn(i,e,1-Math.exp(-t*r))}function uv(i,e=1){return e-Math.abs(bl(i,e*2)-e)}function dv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mv(i,e){return i+Math.random()*(e-i)}function gv(i){return i*(.5-Math.random())}function vv(i){i!==void 0&&(Zc=i);let e=Zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _v(i){return i*Xn}function xv(i){return i*is}function Bo(i){return(i&i-1)===0&&i!==0}function Mv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ra(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yv(i,e,t,r,n){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+r)/2),h=o((e+r)/2),d=s((e-r)/2),u=o((e-r)/2),m=s((r-e)/2),x=o((r-e)/2);switch(n){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ev={DEG2RAD:Xn,RAD2DEG:is,generateUUID:an,clamp:_t,euclideanModulo:bl,mapLinear:lv,inverseLerp:cv,lerp:jn,damp:hv,pingpong:uv,smoothstep:dv,smootherstep:pv,randInt:fv,randFloat:mv,randFloatSpread:gv,seededRandom:vv,degToRad:_v,radToDeg:xv,isPowerOfTwo:Bo,ceilPowerOfTwo:Mv,floorPowerOfTwo:ra,setQuaternionFromProperEuler:yv,normalize:bt,denormalize:Br};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*n+e.x,this.y=s*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,r,n,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,s,o,a,l,c)}set(e,t,r,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=r,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,s=this.elements,o=r[0],a=r[3],l=r[6],c=r[1],h=r[4],d=r[7],u=r[2],m=r[5],x=r[8],_=n[0],f=n[3],p=n[6],w=n[1],y=n[4],T=n[7],R=n[2],D=n[5],C=n[8];return s[0]=o*_+a*w+l*R,s[3]=o*f+a*y+l*D,s[6]=o*p+a*T+l*C,s[1]=c*_+h*w+d*R,s[4]=c*f+h*y+d*D,s[7]=c*p+h*T+d*C,s[2]=u*_+m*w+x*R,s[5]=u*f+m*y+x*D,s[8]=u*p+m*T+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-r*s*h+r*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,m=c*s-o*l,x=t*d+r*u+n*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(n*c-h*r)*_,e[2]=(a*r-n*o)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-a*t)*_,e[6]=m*_,e[7]=(r*l-c*t)*_,e[8]=(o*t-r*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new He;function yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sv(){const i=rs("canvas");return i.style.display="block",i}const Qc={};function Yn(i){i in Qc||(Qc[i]=!0,console.warn(i))}function Xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bv=new He().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Tv=new He().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wv(i){return i.convertSRGBToLinear().applyMatrix3(Tv)}function Av(i){return i.applyMatrix3(bv).convertLinearToSRGB()}const Rv={[hi]:i=>i,[Qe]:i=>i.convertSRGBToLinear(),[va]:wv},Cv={[hi]:i=>i,[Qe]:i=>i.convertLinearToSRGB(),[va]:Av},kt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return hi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=Rv[e],n=Cv[t];if(r===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let yr;class Ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yr===void 0&&(yr=rs("canvas")),yr.width=e.width,yr.height=e.height;const r=yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Xr(s[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xr(t[r]/255)*255):t[r]=Xr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lv=0;class Sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=an(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(ja(n[o].image)):s.push(ja(n[o]))}else s=ja(n);r.url=s}return t||(e.images[this.uuid]=r),r}}function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pv=0;class Pt extends pr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,r=Kt,n=Kt,s=Bt,o=es,a=Jt,l=ki,c=Pt.DEFAULT_ANISOTROPY,h=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=an(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Yn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===lr?Qe:cr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?lr:xd}set encoding(e){Yn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===lr?Qe:cr}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=dd;Pt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,r=0,n=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,s;const o=e.elements,a=o[0],l=o[4],c=o[8],h=o[1],d=o[5],u=o[9],m=o[2],x=o[6],_=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(u-x)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(u+x)<.1&&Math.abs(a+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(a+1)/2,w=(d+1)/2,y=(_+1)/2,T=(l+h)/4,R=(c+m)/4,D=(u+x)/4;return p>w&&p>y?p<.01?(r=0,n=.707106781,s=.707106781):(r=Math.sqrt(p),n=T/r,s=R/r):w>y?w<.01?(r=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),r=T/n,s=D/n):y<.01?(r=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),r=R/s,n=D/s),this.set(r,n,s,t),this}let f=Math.sqrt((x-u)*(x-u)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(x-u)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((a+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uv extends pr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(Yn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===lr?Qe:cr),this.texture=new Pt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Bt,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends Uv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class bd extends Pt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=wt,this.minFilter=wt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dv extends Pt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=wt,this.minFilter=wt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,s,o,a){let l=r[n+0],c=r[n+1],h=r[n+2],d=r[n+3];const u=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(d!==_||l!==u||c!==m||h!==x){let f=1-a;const p=l*u+c*m+h*x+d*_,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),D=Math.atan2(R,p*w);f=Math.sin(f*D)/R,a=Math.sin(a*D)/R}const T=a*w;if(l=l*f+u*T,c=c*f+m*T,h=h*f+x*T,d=d*f+_*T,f===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,n,s,o){const a=r[n],l=r[n+1],c=r[n+2],h=r[n+3],d=s[o],u=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+h*d+l*m-c*u,e[t+1]=l*x+h*u+c*d-a*m,e[t+2]=c*x+h*m+a*u-l*d,e[t+3]=h*x-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(r/2),h=a(n/2),d=a(s/2),u=l(r/2),m=l(n/2),x=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"YXZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"ZXY":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"ZYX":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"YZX":this._x=u*h*d+c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d-u*m*x;break;case"XZY":this._x=u*h*d-c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d+u*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=r+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-n)*m}else if(r>a&&r>d){const m=2*Math.sqrt(1+r-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-r-d);this._w=(s-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-r-a);this._w=(o-n)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-r*c,this._z=s*h+o*c+r*l-n*a,this._w=o*h-r*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+r*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=r*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(s),r*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,r=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6]*n,this.y=s[1]*t+s[4]*r+s[7]*n,this.z=s[2]*t+s[5]*r+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*r+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*r+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*r+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*r+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*r,h=l*r+a*t-s*n,d=l*n+s*r-o*t,u=-s*t-o*r-a*n;return this.x=c*l+u*-s+h*-a-d*-o,this.y=h*l+u*-o+d*-s-c*-a,this.z=d*l+u*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n,this.y=s[1]*t+s[5]*r+s[9]*n,this.z=s[2]*t+s[6]*r+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-r*l,this.z=r*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new I,$c=new ur;class os{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox),Er.applyMatrix4(e.matrixWorld),this.union(Er);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)fi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fi)}else n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dn),Es.subVectors(this.max,Dn),Sr.subVectors(e.a,Dn),br.subVectors(e.b,Dn),Tr.subVectors(e.c,Dn),Ci.subVectors(br,Sr),Li.subVectors(Tr,br),Ji.subVectors(Sr,Tr);let t=[0,-Ci.z,Ci.y,0,-Li.z,Li.y,0,-Ji.z,Ji.y,Ci.z,0,-Ci.x,Li.z,0,-Li.x,Ji.z,0,-Ji.x,-Ci.y,Ci.x,0,-Li.y,Li.x,0,-Ji.y,Ji.x,0];return!qa(t,Sr,br,Tr,Es)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Sr,br,Tr,Es))?!1:(Ss.crossVectors(Ci,Li),t=[Ss.x,Ss.y,Ss.z],qa(t,Sr,br,Tr,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new I,new I,new I,new I,new I,new I,new I,new I],fi=new I,Er=new os,Sr=new I,br=new I,Tr=new I,Ci=new I,Li=new I,Ji=new I,Dn=new I,Es=new I,Ss=new I,Zi=new I;function qa(i,e,t,r,n){for(let s=0,o=i.length-3;s<=o;s+=3){Zi.fromArray(i,s);const a=n.x*Math.abs(Zi.x)+n.y*Math.abs(Zi.y)+n.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=r.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Nv=new os,Nn=new I,Ka=new I;class _a{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Nv.setFromPoints(e).getCenter(r);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nn.subVectors(e,this.center);const t=Nn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Nn,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nn.copy(e.center).add(Ka)),this.expandByPoint(Nn.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new I,Ja=new I,bs=new I,Pi=new I,Za=new I,Ts=new I,Qa=new I;class xa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Ja.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=Pi.dot(this.direction),l=-Pi.dot(bs),c=Pi.lengthSq(),h=Math.abs(1-o*o);let d,u,m,x;if(h>0)if(d=o*l-a,u=o*a-l,x=s*h,d>=0)if(u>=-x)if(u<=x){const _=1/h;d*=_,u*=_,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ja).addScaledVector(bs,u),m}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const r=mi.dot(this.direction),n=mi.dot(mi)-r*r,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=r-o,l=r+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(r=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(r=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),r>o||s>n||((s>r||isNaN(r))&&(r=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),r>l||a>n)||((a>r||r!==r)&&(r=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,r,n,s){Za.subVectors(t,e),Ts.subVectors(r,e),Qa.crossVectors(Za,Ts);let o=this.direction.dot(Qa),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Ts.crossVectors(Pi,Ts));if(l<0)return null;const c=a*this.direction.dot(Za.cross(Pi));if(c<0||l+c>o)return null;const h=-a*Pi.dot(Qa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,r,n,s,o,a,l,c,h,d,u,m,x,_,f){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,s,o,a,l,c,h,d,u,m,x,_,f)}set(e,t,r,n,s,o,a,l,c,h,d,u,m,x,_,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=x,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/wr.setFromMatrixColumn(e,0).length(),s=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*s,t[5]=r[5]*s,t[6]=r[6]*s,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,m=o*d,x=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,x=c*h,_=c*d;t[0]=u+_*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,x=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,m=o*d,x=a*h,_=a*d;t[0]=l*h,t[4]=x*c-m,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=x*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+x,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iv,e,Ov)}lookAt(e,t,r){const n=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Ui.crossVectors(r,Nt),Ui.lengthSq()===0&&(Math.abs(r.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Ui.crossVectors(r,Nt)),Ui.normalize(),ws.crossVectors(Nt,Ui),n[0]=Ui.x,n[4]=ws.x,n[8]=Nt.x,n[1]=Ui.y,n[5]=ws.y,n[9]=Nt.y,n[2]=Ui.z,n[6]=ws.z,n[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,s=this.elements,o=r[0],a=r[4],l=r[8],c=r[12],h=r[1],d=r[5],u=r[9],m=r[13],x=r[2],_=r[6],f=r[10],p=r[14],w=r[3],y=r[7],T=r[11],R=r[15],D=n[0],C=n[4],ee=n[8],E=n[12],b=n[1],oe=n[5],ue=n[9],X=n[13],j=n[2],V=n[6],te=n[10],W=n[14],Q=n[3],he=n[7],ce=n[11],F=n[15];return s[0]=o*D+a*b+l*j+c*Q,s[4]=o*C+a*oe+l*V+c*he,s[8]=o*ee+a*ue+l*te+c*ce,s[12]=o*E+a*X+l*W+c*F,s[1]=h*D+d*b+u*j+m*Q,s[5]=h*C+d*oe+u*V+m*he,s[9]=h*ee+d*ue+u*te+m*ce,s[13]=h*E+d*X+u*W+m*F,s[2]=x*D+_*b+f*j+p*Q,s[6]=x*C+_*oe+f*V+p*he,s[10]=x*ee+_*ue+f*te+p*ce,s[14]=x*E+_*X+f*W+p*F,s[3]=w*D+y*b+T*j+R*Q,s[7]=w*C+y*oe+T*V+R*he,s[11]=w*ee+y*ue+T*te+R*ce,s[15]=w*E+y*X+T*W+R*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],x=e[3],_=e[7],f=e[11],p=e[15];return x*(+s*l*d-n*c*d-s*a*u+r*c*u+n*a*m-r*l*m)+_*(+t*l*m-t*c*u+s*o*u-n*o*m+n*c*h-s*l*h)+f*(+t*c*d-t*a*m-s*o*d+r*o*m+s*a*h-r*c*h)+p*(-n*a*h-t*l*d+t*a*u+n*o*d-r*o*u+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],x=e[12],_=e[13],f=e[14],p=e[15],w=d*f*c-_*u*c+_*l*m-a*f*m-d*l*p+a*u*p,y=x*u*c-h*f*c-x*l*m+o*f*m+h*l*p-o*u*p,T=h*_*c-x*d*c+x*a*m-o*_*m-h*a*p+o*d*p,R=x*d*l-h*_*l-x*a*u+o*_*u+h*a*f-o*d*f,D=t*w+r*y+n*T+s*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(_*u*s-d*f*s-_*n*m+r*f*m+d*n*p-r*u*p)*C,e[2]=(a*f*s-_*l*s+_*n*c-r*f*c-a*n*p+r*l*p)*C,e[3]=(d*l*s-a*u*s-d*n*c+r*u*c+a*n*m-r*l*m)*C,e[4]=y*C,e[5]=(h*f*s-x*u*s+x*n*m-t*f*m-h*n*p+t*u*p)*C,e[6]=(x*l*s-o*f*s-x*n*c+t*f*c+o*n*p-t*l*p)*C,e[7]=(o*u*s-h*l*s+h*n*c-t*u*c-o*n*m+t*l*m)*C,e[8]=T*C,e[9]=(x*d*s-h*_*s-x*r*m+t*_*m+h*r*p-t*d*p)*C,e[10]=(o*_*s-x*a*s+x*r*c-t*_*c-o*r*p+t*a*p)*C,e[11]=(h*a*s-o*d*s-h*r*c+t*d*c+o*r*m-t*a*m)*C,e[12]=R*C,e[13]=(h*_*n-x*d*n+x*r*u-t*_*u-h*r*f+t*d*f)*C,e[14]=(x*a*n-o*_*n-x*r*l+t*_*l+o*r*f-t*a*f)*C,e[15]=(o*d*n-h*a*n+h*r*l-t*d*l-o*r*u+t*a*u)*C,this}scale(e){const t=this.elements,r=e.x,n=e.y,s=e.z;return t[0]*=r,t[4]*=n,t[8]*=s,t[1]*=r,t[5]*=n,t[9]*=s,t[2]*=r,t[6]*=n,t[10]*=s,t[3]*=r,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),s=1-r,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+r,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+r,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,s,o){return this.set(1,r,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,m=s*h,x=s*d,_=o*h,f=o*d,p=a*d,w=l*c,y=l*h,T=l*d,R=r.x,D=r.y,C=r.z;return n[0]=(1-(_+p))*R,n[1]=(m+T)*R,n[2]=(x-y)*R,n[3]=0,n[4]=(m-T)*D,n[5]=(1-(u+p))*D,n[6]=(f+w)*D,n[7]=0,n[8]=(x+y)*C,n[9]=(f-w)*C,n[10]=(1-(u+_))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let s=wr.set(n[0],n[1],n[2]).length();const o=wr.set(n[4],n[5],n[6]).length(),a=wr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Vt.copy(this);const l=1/s,c=1/o,h=1/a;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=c,Vt.elements[5]*=c,Vt.elements[6]*=c,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),r.x=s,r.y=o,r.z=a,this}makePerspective(e,t,r,n,s,o,a=Ei){const l=this.elements,c=2*s/(t-e),h=2*s/(r-n),d=(t+e)/(t-e),u=(r+n)/(r-n);let m,x;if(a===Ei)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ia)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,s,o,a=Ei){const l=this.elements,c=1/(t-e),h=1/(r-n),d=1/(o-s),u=(t+e)*c,m=(r+n)*h;let x,_;if(a===Ei)x=(o+s)*d,_=-2*d;else if(a===ia)x=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const wr=new I,Vt=new nt,Iv=new I(0,0,0),Ov=new I(1,1,1),Ui=new I,ws=new I,Nt=new I,eh=new nt,th=new ur;class Ma{constructor(e=0,t=0,r=0,n=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fv=0;const ih=new I,Ar=new ur,gi=new nt,As=new I,In=new I,Bv=new I,zv=new ur,rh=new I(1,0,0),nh=new I(0,1,0),sh=new I(0,0,1),Hv={type:"added"},Gv={type:"removed"};class ft extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new Ma,r=new ur,n=new I(1,1,1);function s(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new nt},normalMatrix:{value:new He}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?As.copy(e):As.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),In.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(In,As,this.up):gi.lookAt(As,In,this.up),this.quaternion.setFromRotationMatrix(gi),n&&(gi.extractRotation(n.matrixWorld),Ar.setFromRotationMatrix(gi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(r=r.concat(o))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,e,Bv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const s=t[r];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),m.length>0&&(r.animations=m),x.length>0&&(r.nodes=x)}return r.object=n,r;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new I,vi=new I,$a=new I,_i=new I,Rr=new I,Cr=new I,ah=new I,eo=new I,to=new I,io=new I;let Rs=!1;class Yt{constructor(e=new I,t=new I,r=new I){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Wt.subVectors(e,t),n.cross(Wt);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,r,n,s){Wt.subVectors(n,t),vi.subVectors(r,t),$a.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(vi),l=Wt.dot($a),c=vi.dot(vi),h=vi.dot($a),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-a*h)*u,x=(o*h-a*l)*u;return s.set(1-m-x,x,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,_i),_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,r,n,s,o,a,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,r,n,s,o,a,l)}static getInterpolation(e,t,r,n,s,o,a,l){return this.getBarycoord(e,t,r,n,_i),l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l}static isFrontFacing(e,t,r,n){return Wt.subVectors(r,t),vi.subVectors(e,t),Wt.cross(vi).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Wt.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,s){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,r,n,s)}getInterpolation(e,t,r,n,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,r,n,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,s=this.c;let o,a;Rr.subVectors(n,r),Cr.subVectors(s,r),eo.subVectors(e,r);const l=Rr.dot(eo),c=Cr.dot(eo);if(l<=0&&c<=0)return t.copy(r);to.subVectors(e,n);const h=Rr.dot(to),d=Cr.dot(to);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(r).addScaledVector(Rr,o);io.subVectors(e,s);const m=Rr.dot(io),x=Cr.dot(io);if(x>=0&&m<=x)return t.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(r).addScaledVector(Cr,a);const f=h*x-m*d;if(f<=0&&d-h>=0&&m-x>=0)return ah.subVectors(s,n),a=(d-h)/(d-h+(m-x)),t.copy(n).addScaledVector(ah,a);const p=1/(f+_+u);return o=_*p,a=u*p,t.copy(r).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kv=0;class on extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=an(),this.name="",this.type="Material",this.blending=Wr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=hd,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(r.blending=this.blending),this.side!==Wi&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let s=0;s!==n;++s)r[s]=t[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xt={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=kt.workingColorSpace){if(e=bl(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+t):r+t-r*t,o=2*r-s;this.r=ro(o,s,e+1/3),this.g=ro(o,s,e),this.b=ro(o,s,e-1/3)}return kt.toWorkingColorSpace(this,n),this}setStyle(e,t=Qe){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){const r=Td[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return kt.fromWorkingColorSpace(vt.copy(this),e),Math.round(_t(vt.r*255,0,255))*65536+Math.round(_t(vt.g*255,0,255))*256+Math.round(_t(vt.b*255,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(vt.copy(this),t);const r=vt.r,n=vt.g,s=vt.b,o=Math.max(r,n,s),a=Math.min(r,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case r:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-r)/d+2;break;case s:l=(r-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Qe){kt.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,r=vt.g,n=vt.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=r,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(Cs);const r=jn(Xt.h,Cs.h,t),n=jn(Xt.s,Cs.s,t),s=jn(Xt.l,Cs.l,t);return this.setHSL(r,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*r+s[6]*n,this.g=s[1]*t+s[4]*r+s[7]*n,this.b=s[2]*t+s[5]*r+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new ke;ke.NAMES=Td;class ya extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new I,Ls=new Ne;class ci{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Kc,this.updateRange={offset:0,count:-1},this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Br(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=bt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class wd extends ci{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ad extends ci{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gt extends ci{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Vv=0;const Ft=new nt,no=new ft,Lr=new I,It=new os,On=new os,ht=new I;class Ti extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Ad:wd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new He().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,r){return Ft.makeTranslation(e,t,r),this.applyMatrix4(Ft),this}scale(e,t,r){return Ft.makeScale(e,t,r),this.applyMatrix4(Ft),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const s=e[r];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const s=t[r];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const r=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];On.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(It.min,On.min),It.expandByPoint(ht),ht.addVectors(It.max,On.max),It.expandByPoint(ht)):(It.expandByPoint(On.min),It.expandByPoint(On.max))}It.getCenter(r);let n=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),n=Math.max(n,r.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ht.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),ht.add(Lr)),n=Math.max(n,r.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new I,h[b]=new I;const d=new I,u=new I,m=new I,x=new Ne,_=new Ne,f=new Ne,p=new I,w=new I;function y(b,oe,ue){d.fromArray(n,b*3),u.fromArray(n,oe*3),m.fromArray(n,ue*3),x.fromArray(o,b*2),_.fromArray(o,oe*2),f.fromArray(o,ue*2),u.sub(d),m.sub(d),_.sub(x),f.sub(x);const X=1/(_.x*f.y-f.x*_.y);isFinite(X)&&(p.copy(u).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(X),w.copy(m).multiplyScalar(_.x).addScaledVector(u,-f.x).multiplyScalar(X),c[b].add(p),c[oe].add(p),c[ue].add(p),h[b].add(w),h[oe].add(w),h[ue].add(w))}let T=this.groups;T.length===0&&(T=[{start:0,count:r.length}]);for(let b=0,oe=T.length;b<oe;++b){const ue=T[b],X=ue.start,j=ue.count;for(let V=X,te=X+j;V<te;V+=3)y(r[V+0],r[V+1],r[V+2])}const R=new I,D=new I,C=new I,ee=new I;function E(b){C.fromArray(s,b*3),ee.copy(C);const oe=c[b];R.copy(oe),R.sub(C.multiplyScalar(C.dot(oe))).normalize(),D.crossVectors(ee,oe);const ue=D.dot(h[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=ue}for(let b=0,oe=T.length;b<oe;++b){const ue=T[b],X=ue.start,j=ue.count;for(let V=X,te=X+j;V<te;V+=3)E(r[V+0]),E(r[V+1]),E(r[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let u=0,m=r.count;u<m;u++)r.setXYZ(u,0,0,0);const n=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),_=e.getX(u+1),f=e.getX(u+2);n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(r,x),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,f),a.add(h),l.add(h),c.add(h),r.setXYZ(x,a.x,a.y,a.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let m=0,x=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let p=0;p<h;p++)u[x++]=c[m++]}return new ci(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,r=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,r);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,r);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new nt,Qi=new xa,Ps=new _a,lh=new I,Pr=new I,Ur=new I,Dr=new I,so=new I,Us=new I,Ds=new Ne,Ns=new Ne,Is=new Ne,ch=new I,hh=new I,uh=new I,Os=new I,Fs=new I;class Rt extends ft{constructor(e=new Ti,t=new ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(so.fromBufferAttribute(d,e),o?Us.addScaledVector(so,h):Us.addScaledVector(so.sub(t),h))}t.add(Us)}return t}raycast(e,t){const r=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ps.copy(r.boundingSphere),Ps.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(Ps.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ps,lh)===null||Qi.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(oh.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(oh),!(r.boundingBox!==null&&Qi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,r){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=u.length;x<_;x++){const f=u[x],p=o[f.materialIndex],w=Math.max(f.start,m.start),y=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let T=w,R=y;T<R;T+=3){const D=a.getX(T),C=a.getX(T+1),ee=a.getX(T+2);n=Bs(this,p,e,r,c,h,d,D,C,ee),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=x,p=_;f<p;f+=3){const w=a.getX(f),y=a.getX(f+1),T=a.getX(f+2);n=Bs(this,o,e,r,c,h,d,w,y,T),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=u.length;x<_;x++){const f=u[x],p=o[f.materialIndex],w=Math.max(f.start,m.start),y=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=w,R=y;T<R;T+=3){const D=T,C=T+1,ee=T+2;n=Bs(this,p,e,r,c,h,d,D,C,ee),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=x,p=_;f<p;f+=3){const w=f,y=f+1,T=f+2;n=Bs(this,o,e,r,c,h,d,w,y,T),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function Wv(i,e,t,r,n,s,o,a){let l;if(e.side===Lt?l=r.intersectTriangle(o,s,n,!0,a):l=r.intersectTriangle(n,s,o,e.side===Wi,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:i}}function Bs(i,e,t,r,n,s,o,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Ur),i.getVertexPosition(c,Dr);const h=Wv(i,e,t,r,Pr,Ur,Dr,Os);if(h){n&&(Ds.fromBufferAttribute(n,a),Ns.fromBufferAttribute(n,l),Is.fromBufferAttribute(n,c),h.uv=Yt.getInterpolation(Os,Pr,Ur,Dr,Ds,Ns,Is,new Ne)),s&&(Ds.fromBufferAttribute(s,a),Ns.fromBufferAttribute(s,l),Is.fromBufferAttribute(s,c),h.uv1=Yt.getInterpolation(Os,Pr,Ur,Dr,Ds,Ns,Is,new Ne),h.uv2=h.uv1),o&&(ch.fromBufferAttribute(o,a),hh.fromBufferAttribute(o,l),uh.fromBufferAttribute(o,c),h.normal=Yt.getInterpolation(Os,Pr,Ur,Dr,ch,hh,uh,new I),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Yt.getNormal(Pr,Ur,Dr,d.normal),h.face=d}return h}class ln extends Ti{constructor(e=1,t=1,r=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,m=0;x("z","y","x",-1,-1,r,t,e,o,s,0),x("z","y","x",1,-1,r,t,-e,o,s,1),x("x","z","y",1,1,e,r,t,n,o,2),x("x","z","y",1,-1,e,r,-t,n,o,3),x("x","y","z",1,-1,e,t,r,n,s,4),x("x","y","z",-1,-1,e,t,-r,n,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(d,2));function x(_,f,p,w,y,T,R,D,C,ee,E){const b=T/C,oe=R/ee,ue=T/2,X=R/2,j=D/2,V=C+1,te=ee+1;let W=0,Q=0;const he=new I;for(let ce=0;ce<te;ce++){const F=ce*oe-X;for(let J=0;J<V;J++){const me=J*b-ue;he[_]=me*w,he[f]=F*y,he[p]=j,c.push(he.x,he.y,he.z),he[_]=0,he[f]=0,he[p]=D>0?1:-1,h.push(he.x,he.y,he.z),d.push(J/C),d.push(1-ce/ee),W+=1}}for(let ce=0;ce<ee;ce++)for(let F=0;F<C;F++){const J=u+F+V*ce,me=u+F+V*(ce+1),be=u+(F+1)+V*(ce+1),we=u+(F+1)+V*ce;l.push(J,me,we),l.push(me,be,we),Q+=6}a.addGroup(m,Q,E),m+=Q,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const r=$r(i[t]);for(const n in r)e[n]=r[n]}return e}function Xv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rd(i){return i.getRenderTarget()===null?i.outputColorSpace:hi}const jv={clone:$r,merge:Tt};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Cd extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Cd{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Xn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xn*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Ir=1;class Kv extends ft{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const n=new zt(Nr,Ir,e,t);n.layers=this.layers,this.add(n);const s=new zt(Nr,Ir,e,t);s.layers=this.layers,this.add(s);const o=new zt(Nr,Ir,e,t);o.layers=this.layers,this.add(o);const a=new zt(Nr,Ir,e,t);a.layers=this.layers,this.add(a);const l=new zt(Nr,Ir,e,t);l.layers=this.layers,this.add(l);const c=new zt(Nr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ei)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const u=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,n),e.setRenderTarget(r,1),e.render(t,s),e.setRenderTarget(r,2),e.render(t,o),e.setRenderTarget(r,3),e.render(t,a),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=u,e.setRenderTarget(r,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=d,r.texture.needsPMREMUpdate=!0}}class Ld extends Pt{constructor(e,t,r,n,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,r,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(Yn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===lr?Qe:cr),this.texture=new Ld(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ln(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:$r(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Lt,blending:Hi});s.uniforms.tEquirect.value=t;const o=new Rt(n,s),a=t.minFilter;return t.minFilter===es&&(t.minFilter=Bt),new Kv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(s)}}const ao=new I,Zv=new I,Qv=new He;class Ni{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=ao.subVectors(r,t).cross(Zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ao),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Qv.getNormalMatrix(e),n=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new _a,zs=new I;class wl{constructor(e=new Ni,t=new Ni,r=new Ni,n=new Ni,s=new Ni,o=new Ni){this.planes=[e,t,r,n,s,o]}set(e,t,r,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(r),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ei){const r=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],m=n[8],x=n[9],_=n[10],f=n[11],p=n[12],w=n[13],y=n[14],T=n[15];if(r[0].setComponents(l-s,u-c,f-m,T-p).normalize(),r[1].setComponents(l+s,u+c,f+m,T+p).normalize(),r[2].setComponents(l+o,u+h,f+x,T+w).normalize(),r[3].setComponents(l-o,u-h,f-x,T-w).normalize(),r[4].setComponents(l-a,u-d,f-_,T-y).normalize(),t===Ei)r[5].setComponents(l+a,u+d,f+_,T+y).normalize();else if(t===ia)r[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(zs.x=n.normal.x>0?e.max.x:e.min.x,zs.y=n.normal.y>0?e.max.y:e.min.y,zs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pd(){let i=null,e=!1,t=null,r=null;function n(s,o){t(s,o),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function $v(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,h){const d=c.array,u=c.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;i.bindBuffer(d,c),m.count===-1?i.bufferSubData(d,0,u):(t?i.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):i.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h&&(i.deleteBuffer(h.buffer),r.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=r.get(c);(!u||u.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=r.get(c);d===void 0?r.set(c,n(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class ls extends Ti{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(r),l=Math.floor(n),c=a+1,h=l+1,d=e/a,u=t/l,m=[],x=[],_=[],f=[];for(let p=0;p<h;p++){const w=p*u-o;for(let y=0;y<c;y++){const T=y*d-s;x.push(T,-w,0),_.push(0,0,1),f.push(y/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const y=w+c*p,T=w+c*(p+1),R=w+1+c*(p+1),D=w+1+c*p;m.push(y,T,D),m.push(T,R,D)}this.setIndex(m),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var e_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t_=`#ifdef USE_ALPHAHASH
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
#endif`,i_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,s_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u_=`#ifdef USE_IRIDESCENCE
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
#endif`,d_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,y_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,E_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,S_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",C_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,D_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z_=`#ifdef USE_GRADIENTMAP
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
}`,H_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,G_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,X_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,j_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Z_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Q_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,s0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l0=`#if defined( USE_POINTS_UV )
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
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,p0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,g0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,nx=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ax=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,dx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,fx=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,gx=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_x=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Mx=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ex=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,bx=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Tx=`uniform float size;
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
}`,wx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ax=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Rx=`uniform vec3 color;
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
}`,Cx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Lx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Be={alphahash_fragment:e_,alphahash_pars_fragment:t_,alphamap_fragment:i_,alphamap_pars_fragment:r_,alphatest_fragment:n_,alphatest_pars_fragment:s_,aomap_fragment:a_,aomap_pars_fragment:o_,begin_vertex:l_,beginnormal_vertex:c_,bsdfs:h_,iridescence_fragment:u_,bumpmap_pars_fragment:d_,clipping_planes_fragment:p_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:m_,clipping_planes_vertex:g_,color_fragment:v_,color_pars_fragment:__,color_pars_vertex:x_,color_vertex:M_,common:y_,cube_uv_reflection_fragment:E_,defaultnormal_vertex:S_,displacementmap_pars_vertex:b_,displacementmap_vertex:T_,emissivemap_fragment:w_,emissivemap_pars_fragment:A_,colorspace_fragment:R_,colorspace_pars_fragment:C_,envmap_fragment:L_,envmap_common_pars_fragment:P_,envmap_pars_fragment:U_,envmap_pars_vertex:D_,envmap_physical_pars_fragment:X_,envmap_vertex:N_,fog_vertex:I_,fog_pars_vertex:O_,fog_fragment:F_,fog_pars_fragment:B_,gradientmap_pars_fragment:z_,lightmap_fragment:H_,lightmap_pars_fragment:G_,lights_lambert_fragment:k_,lights_lambert_pars_fragment:V_,lights_pars_begin:W_,lights_toon_fragment:j_,lights_toon_pars_fragment:Y_,lights_phong_fragment:q_,lights_phong_pars_fragment:K_,lights_physical_fragment:J_,lights_physical_pars_fragment:Z_,lights_fragment_begin:Q_,lights_fragment_maps:$_,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:n0,map_fragment:s0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphcolor_vertex:u0,morphnormal_vertex:d0,morphtarget_pars_vertex:p0,morphtarget_vertex:f0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:v0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:T0,packing:w0,premultiplied_alpha_fragment:A0,project_vertex:R0,dithering_fragment:C0,dithering_pars_fragment:L0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:N0,shadowmap_vertex:I0,shadowmask_pars_fragment:O0,skinbase_vertex:F0,skinning_pars_vertex:B0,skinning_vertex:z0,skinnormal_vertex:H0,specularmap_fragment:G0,specularmap_pars_fragment:k0,tonemapping_fragment:V0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:j0,uv_pars_fragment:Y0,uv_pars_vertex:q0,uv_vertex:K0,worldpos_vertex:J0,background_vert:Z0,background_frag:Q0,backgroundCube_vert:$0,backgroundCube_frag:ex,cube_vert:tx,cube_frag:ix,depth_vert:rx,depth_frag:nx,distanceRGBA_vert:sx,distanceRGBA_frag:ax,equirect_vert:ox,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:hx,meshbasic_vert:ux,meshbasic_frag:dx,meshlambert_vert:px,meshlambert_frag:fx,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:vx,meshnormal_frag:_x,meshphong_vert:xx,meshphong_frag:Mx,meshphysical_vert:yx,meshphysical_frag:Ex,meshtoon_vert:Sx,meshtoon_frag:bx,points_vert:Tx,points_frag:wx,shadow_vert:Ax,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Lx},ye={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ni={basic:{uniforms:Tt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Tt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Tt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Tt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Tt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Tt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Tt([ye.points,ye.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Tt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Tt([ye.common,ye.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Tt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Tt([ye.sprite,ye.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Tt([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Tt([ye.lights,ye.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ni.physical={uniforms:Tt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Hs={r:0,b:0,g:0};function Px(i,e,t,r,n,s,o){const a=new ke(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function x(f,p){let w=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?r.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ga)?(h===void 0&&(h=new Rt(new ln(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:$r(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=y.colorSpace!==Qe,(d!==y||u!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rt(new ls(2,2),new dr({name:"BackgroundMaterial",uniforms:$r(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(Hs,Rd(i)),r.buffers.color.setClear(Hs.r,Hs.g,Hs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(a,l)},render:x}}function Ux(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||s!==null,a={},l=f(null);let c=l,h=!1;function d(j,V,te,W,Q){let he=!1;if(o){const ce=_(W,te,V);c!==ce&&(c=ce,m(c.object)),he=p(j,W,te,Q),he&&w(j,W,te,Q)}else{const ce=V.wireframe===!0;(c.geometry!==W.id||c.program!==te.id||c.wireframe!==ce)&&(c.geometry=W.id,c.program=te.id,c.wireframe=ce,he=!0)}Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(he||h)&&(h=!1,ee(j,V,te,W),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function u(){return r.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(j){return r.isWebGL2?i.bindVertexArray(j):s.bindVertexArrayOES(j)}function x(j){return r.isWebGL2?i.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function _(j,V,te){const W=te.wireframe===!0;let Q=a[j.id];Q===void 0&&(Q={},a[j.id]=Q);let he=Q[V.id];he===void 0&&(he={},Q[V.id]=he);let ce=he[W];return ce===void 0&&(ce=f(u()),he[W]=ce),ce}function f(j){const V=[],te=[],W=[];for(let Q=0;Q<n;Q++)V[Q]=0,te[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:W,object:j,attributes:{},index:null}}function p(j,V,te,W){const Q=c.attributes,he=V.attributes;let ce=0;const F=te.getAttributes();for(const J in F)if(F[J].location>=0){const me=Q[J];let be=he[J];if(be===void 0&&(J==="instanceMatrix"&&j.instanceMatrix&&(be=j.instanceMatrix),J==="instanceColor"&&j.instanceColor&&(be=j.instanceColor)),me===void 0||me.attribute!==be||be&&me.data!==be.data)return!0;ce++}return c.attributesNum!==ce||c.index!==W}function w(j,V,te,W){const Q={},he=V.attributes;let ce=0;const F=te.getAttributes();for(const J in F)if(F[J].location>=0){let me=he[J];me===void 0&&(J==="instanceMatrix"&&j.instanceMatrix&&(me=j.instanceMatrix),J==="instanceColor"&&j.instanceColor&&(me=j.instanceColor));const be={};be.attribute=me,me&&me.data&&(be.data=me.data),Q[J]=be,ce++}c.attributes=Q,c.attributesNum=ce,c.index=W}function y(){const j=c.newAttributes;for(let V=0,te=j.length;V<te;V++)j[V]=0}function T(j){R(j,0)}function R(j,V){const te=c.newAttributes,W=c.enabledAttributes,Q=c.attributeDivisors;te[j]=1,W[j]===0&&(i.enableVertexAttribArray(j),W[j]=1),Q[j]!==V&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,V),Q[j]=V)}function D(){const j=c.newAttributes,V=c.enabledAttributes;for(let te=0,W=V.length;te<W;te++)V[te]!==j[te]&&(i.disableVertexAttribArray(te),V[te]=0)}function C(j,V,te,W,Q,he,ce){ce===!0?i.vertexAttribIPointer(j,V,te,Q,he):i.vertexAttribPointer(j,V,te,W,Q,he)}function ee(j,V,te,W){if(r.isWebGL2===!1&&(j.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Q=W.attributes,he=te.getAttributes(),ce=V.defaultAttributeValues;for(const F in he){const J=he[F];if(J.location>=0){let me=Q[F];if(me===void 0&&(F==="instanceMatrix"&&j.instanceMatrix&&(me=j.instanceMatrix),F==="instanceColor"&&j.instanceColor&&(me=j.instanceColor)),me!==void 0){const be=me.normalized,we=me.itemSize,Te=t.get(me);if(Te===void 0)continue;const Re=Te.buffer,Ae=Te.type,ze=Te.bytesPerElement,et=r.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||me.gpuType===pd);if(me.isInterleavedBufferAttribute){const Ue=me.data,v=Ue.stride,L=me.offset;if(Ue.isInstancedInterleavedBuffer){for(let N=0;N<J.locationSize;N++)R(J.location+N,Ue.meshPerAttribute);j.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let N=0;N<J.locationSize;N++)T(J.location+N);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let N=0;N<J.locationSize;N++)C(J.location+N,we/J.locationSize,Ae,be,v*ze,(L+we/J.locationSize*N)*ze,et)}else{if(me.isInstancedBufferAttribute){for(let Ue=0;Ue<J.locationSize;Ue++)R(J.location+Ue,me.meshPerAttribute);j.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ue=0;Ue<J.locationSize;Ue++)T(J.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Ue=0;Ue<J.locationSize;Ue++)C(J.location+Ue,we/J.locationSize,Ae,be,we*ze,we/J.locationSize*Ue*ze,et)}}else if(ce!==void 0){const be=ce[F];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(J.location,be);break;case 3:i.vertexAttrib3fv(J.location,be);break;case 4:i.vertexAttrib4fv(J.location,be);break;default:i.vertexAttrib1fv(J.location,be)}}}}D()}function E(){ue();for(const j in a){const V=a[j];for(const te in V){const W=V[te];for(const Q in W)x(W[Q].object),delete W[Q];delete V[te]}delete a[j]}}function b(j){if(a[j.id]===void 0)return;const V=a[j.id];for(const te in V){const W=V[te];for(const Q in W)x(W[Q].object),delete W[Q];delete V[te]}delete a[j.id]}function oe(j){for(const V in a){const te=a[V];if(te[j.id]===void 0)continue;const W=te[j.id];for(const Q in W)x(W[Q].object),delete W[Q];delete te[j.id]}}function ue(){X(),h=!0,c!==l&&(c=l,m(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ue,resetDefaultState:X,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:oe,initAttributes:y,enableAttribute:T,disableUnusedAttributes:D}}function Dx(i,e,t,r){const n=r.isWebGL2;let s;function o(c){s=c}function a(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(n)u=i,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Nx(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,T=o||e.has("OES_texture_float"),R=y&&T,D=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:D}}function Ix(i){const e=this;let t=null,r=0,n=!1,s=!1;const o=new Ni,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||r!==0||n;return n=u,r=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const x=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!n||x===null||x.length===0||s&&!f)s?h(null):c();else{const w=s?0:r,y=w*4;let T=p.clippingState||null;l.value=T,T=h(x,u,y,m);for(let R=0;R!==y;++R)T[R]=t[R];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(d,u,m,x){const _=d!==null?d.length:0;let f=null;if(_!==0){if(f=l.value,x!==!0||f===null){const p=m+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let y=0,T=m;y!==_;++y,T+=4)o.copy(d[y]).applyMatrix4(w,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Ox(i){let e=new WeakMap;function t(o,a){return a===Do?o.mapping=Jr:a===No&&(o.mapping=Zr),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Do||a===No)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jv(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}class Ud extends Cd{constructor(e=-1,t=1,r=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=r-e,o=r+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hr=4,dh=[.125,.215,.35,.446,.526,.582],rr=20,oo=new Ud,ph=new ke;let lo=null;const er=(1+Math.sqrt(5))/2,Or=1/er,fh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,er,Or),new I(0,er,-Or),new I(Or,0,er),new I(-Or,0,er),new I(er,Or,0),new I(-er,Or,0)];class mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){lo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo),e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ts,format:Jt,colorSpace:hi,depthBuffer:!1},n=gh(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fx(s)),this._blurMaterial=Bx(s,e,t)}return n}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,r,n){const s=new zt(90,1,t,r),o=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(ph),l.toneMapping=Gi,l.autoClear=!1;const d=new ya({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),u=new Rt(new ln,d);let m=!1;const x=e.background;x?x.isColor&&(d.color.copy(x),e.background=null,m=!0):(d.color.copy(ph),m=!0);for(let _=0;_<6;_++){const f=_%3;f===0?(s.up.set(0,o[_],0),s.lookAt(a[_],0,0)):f===1?(s.up.set(0,0,o[_]),s.lookAt(0,a[_],0)):(s.up.set(0,o[_],0),s.lookAt(0,0,a[_]));const p=this._cubeSize;Gs(n,f*p,_>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Jr||e.mapping===Zr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,oo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=fh[(n-1)%fh.length];this._blur(e,n-1,n,s,o)}t.autoClear=r}_blur(e,t,r,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",s),this._halfBlur(o,e,r,r,n,"longitudinal",s)}_halfBlur(e,t,r,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Rt(this._lodPlanes[n],c),u=c.uniforms,m=this._sizeLods[r]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rr-1),_=s/x,f=isFinite(s)?1+Math.floor(h*_):rr;f>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${rr}`);const p=[];let w=0;for(let C=0;C<rr;++C){const ee=C/_,E=Math.exp(-ee*ee/2);p.push(E),C===0?w+=E:C<f&&(w+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=x,u.mipInt.value=y-r;const T=this._sizeLods[n],R=3*T*(n>y-Hr?n-y+Hr:0),D=4*(this._cubeSize-T);Gs(t,R,D,3*T,2*T),l.setRenderTarget(t),l.render(d,oo)}}function Fx(i){const e=[],t=[],r=[];let n=i;const s=i-Hr+1+dh.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>i-Hr?l=dh[o-i+Hr-1]:o===0&&(l=0),r.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,_=3,f=2,p=1,w=new Float32Array(_*x*m),y=new Float32Array(f*x*m),T=new Float32Array(p*x*m);for(let D=0;D<m;D++){const C=D%3*2/3-1,ee=D>2?0:-1,E=[C,ee,0,C+2/3,ee,0,C+2/3,ee+1,0,C,ee,0,C+2/3,ee+1,0,C,ee+1,0];w.set(E,_*x*D),y.set(u,f*x*D);const b=[D,D,D,D,D,D];T.set(b,p*x*D)}const R=new Ti;R.setAttribute("position",new ci(w,_)),R.setAttribute("uv",new ci(y,f)),R.setAttribute("faceIndex",new ci(T,p)),e.push(R),n>Hr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function gh(i,e,t){const r=new hr(i,e,t);return r.texture.mapping=ga,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gs(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Bx(i,e,t){const r=new Float32Array(rr),n=new I(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function vh(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _h(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function zx(i){let e=new WeakMap,t=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Do||l===No,h=l===Jr||l===Zr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new mh(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&n(d)){t===null&&(t=new mh(i));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Hx(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Gx(i,e,t,r){const n={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);for(const x in u.morphAttributes){const _=u.morphAttributes[x];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}u.removeEventListener("dispose",o),delete n[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const x in u)e.update(u[x],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const _=m[x];for(let f=0,p=_.length;f<p;f++)e.update(_[f],i.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,x=d.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let y=0,T=w.length;y<T;y+=3){const R=w[y+0],D=w[y+1],C=w[y+2];u.push(R,D,D,C,C,R)}}else if(x!==void 0){const w=x.array;_=x.version;for(let y=0,T=w.length/3-1;y<T;y+=3){const R=y+0,D=y+1,C=y+2;u.push(R,D,D,C,C,R)}}else return;const f=new(yd(u)?Ad:wd)(u,1);f.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function kx(i,e,t,r){const n=r.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,m){i.drawElements(s,m,a,u*l),t.update(m,s,1)}function d(u,m,x){if(x===0)return;let _,f;if(n)_=i,f="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[f](s,m,a,u*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Vx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Wx(i,e){return i[0]-e[0]}function Xx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function jx(i,e,t){const r={},n=new Float32Array(8),s=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0;let _=s.get(h);if(_===void 0||_.count!==x){let w=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",w)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],ee=h.morphAttributes.color||[];let E=0;y===!0&&(E=1),T===!0&&(E=2),R===!0&&(E=3);let b=h.attributes.position.count*E,oe=1;b>e.maxTextureSize&&(oe=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const ue=new Float32Array(b*oe*4*x),X=new bd(ue,b,oe,x);X.type=Oi,X.needsUpdate=!0;const j=E*4;for(let V=0;V<x;V++){const te=D[V],W=C[V],Q=ee[V],he=b*oe*4*V;for(let ce=0;ce<te.count;ce++){const F=ce*j;y===!0&&(o.fromBufferAttribute(te,ce),ue[he+F+0]=o.x,ue[he+F+1]=o.y,ue[he+F+2]=o.z,ue[he+F+3]=0),T===!0&&(o.fromBufferAttribute(W,ce),ue[he+F+4]=o.x,ue[he+F+5]=o.y,ue[he+F+6]=o.z,ue[he+F+7]=0),R===!0&&(o.fromBufferAttribute(Q,ce),ue[he+F+8]=o.x,ue[he+F+9]=o.y,ue[he+F+10]=o.z,ue[he+F+11]=Q.itemSize===4?o.w:1)}}_={count:x,texture:X,size:new Ne(b,oe)},s.set(h,_),h.addEventListener("dispose",w)}let f=0;for(let w=0;w<u.length;w++)f+=u[w];const p=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=u===void 0?0:u.length;let x=r[h.id];if(x===void 0||x.length!==m){x=[];for(let y=0;y<m;y++)x[y]=[y,0];r[h.id]=x}for(let y=0;y<m;y++){const T=x[y];T[0]=y,T[1]=u[y]}x.sort(Xx);for(let y=0;y<8;y++)y<m&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Wx);const _=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const T=a[y],R=T[0],D=T[1];R!==Number.MAX_SAFE_INTEGER&&D?(_&&h.getAttribute("morphTarget"+y)!==_[R]&&h.setAttribute("morphTarget"+y,_[R]),f&&h.getAttribute("morphNormal"+y)!==f[R]&&h.setAttribute("morphNormal"+y,f[R]),n[y]=D,p+=D):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),n[y]=0)}const w=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function Yx(i,e,t,r){let n=new WeakMap;function s(l){const c=r.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Dd=new Pt,Nd=new bd,Id=new Dv,Od=new Ld,xh=[],Mh=[],yh=new Float32Array(16),Eh=new Float32Array(9),Sh=new Float32Array(4);function cn(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let s=xh[n];if(s===void 0&&(s=new Float32Array(n),xh[n]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Ea(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function qx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Qx(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;Sh.set(r),i.uniformMatrix2fv(this.addr,!1,Sh),lt(t,r)}}function $x(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;Eh.set(r),i.uniformMatrix3fv(this.addr,!1,Eh),lt(t,r)}}function eM(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;yh.set(r),i.uniformMatrix4fv(this.addr,!1,yh),lt(t,r)}}function tM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function rM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function nM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function sM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function aM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function oM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function lM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function cM(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2D(e||Dd,n)}function hM(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Id,n)}function uM(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Od,n)}function dM(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Nd,n)}function pM(i){switch(i){case 5126:return qx;case 35664:return Kx;case 35665:return Jx;case 35666:return Zx;case 35674:return Qx;case 35675:return $x;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return nM;case 5125:return sM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return dM}}function fM(i,e){i.uniform1fv(this.addr,e)}function mM(i,e){const t=cn(e,this.size,2);i.uniform2fv(this.addr,t)}function gM(i,e){const t=cn(e,this.size,3);i.uniform3fv(this.addr,t)}function vM(i,e){const t=cn(e,this.size,4);i.uniform4fv(this.addr,t)}function _M(i,e){const t=cn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xM(i,e){const t=cn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function MM(i,e){const t=cn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yM(i,e){i.uniform1iv(this.addr,e)}function EM(i,e){i.uniform2iv(this.addr,e)}function SM(i,e){i.uniform3iv(this.addr,e)}function bM(i,e){i.uniform4iv(this.addr,e)}function TM(i,e){i.uniform1uiv(this.addr,e)}function wM(i,e){i.uniform2uiv(this.addr,e)}function AM(i,e){i.uniform3uiv(this.addr,e)}function RM(i,e){i.uniform4uiv(this.addr,e)}function CM(i,e,t){const r=this.cache,n=e.length,s=Ea(t,n);ot(r,s)||(i.uniform1iv(this.addr,s),lt(r,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Dd,s[o])}function LM(i,e,t){const r=this.cache,n=e.length,s=Ea(t,n);ot(r,s)||(i.uniform1iv(this.addr,s),lt(r,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Id,s[o])}function PM(i,e,t){const r=this.cache,n=e.length,s=Ea(t,n);ot(r,s)||(i.uniform1iv(this.addr,s),lt(r,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Od,s[o])}function UM(i,e,t){const r=this.cache,n=e.length,s=Ea(t,n);ot(r,s)||(i.uniform1iv(this.addr,s),lt(r,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Nd,s[o])}function DM(i){switch(i){case 5126:return fM;case 35664:return mM;case 35665:return gM;case 35666:return vM;case 35674:return _M;case 35675:return xM;case 35676:return MM;case 5124:case 35670:return yM;case 35667:case 35671:return EM;case 35668:case 35672:return SM;case 35669:case 35673:return bM;case 5125:return TM;case 36294:return wM;case 36295:return AM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return UM}}class NM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=pM(t.type)}}class IM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=DM(t.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],r)}}}const co=/(\w+)(\])?(\[|\.)?/g;function bh(i,e){i.seq.push(e),i.map[e.id]=e}function FM(i,e,t){const r=i.name,n=r.length;for(co.lastIndex=0;;){const s=co.exec(r),o=co.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){bh(t,c===void 0?new NM(a,i,e):new IM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new OM(a),bh(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);FM(s,o,this)}}setValue(e,t,r,n){const s=this.map[t];s!==void 0&&s.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function Th(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}let BM=0;function zM(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;r.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return r.join(`
`)}function HM(i){switch(i){case hi:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function wh(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+zM(i.getShaderSource(e),o)}else return n}function GM(i,e){const t=HM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kM(i,e){let t;switch(e){case Ig:t="Linear";break;case Og:t="Reinhard";break;case Fg:t="OptimizedCineon";break;case Bg:t="ACESFilmic";break;case zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function VM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hn).join(`
`)}function WM(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function XM(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const s=i.getActiveAttrib(e,n),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hn(i){return i!==""}function Ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(jM,qM)}const YM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qM(i,e){let t=Be[e];if(t===void 0){const r=YM.get(e);if(r!==void 0)t=Be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(KM,JM)}function JM(i,e,t,r){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Lh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function QM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jr:case Zr:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $M(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function ey(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case Dg:e="ENVMAP_BLENDING_MIX";break;case Ng:e="ENVMAP_BLENDING_ADD";break}return e}function ty(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function iy(i,e,t,r){const n=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZM(t),c=QM(t),h=$M(t),d=ey(t),u=ty(t),m=t.isWebGL2?"":VM(t),x=WM(s),_=n.createProgram();let f,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hn).join(`
`),f.length>0&&(f+=`
`),p=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hn).join(`
`),p.length>0&&(p+=`
`)):(f=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hn).join(`
`),p=[m,Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Be.tonemapping_pars_fragment:"",t.toneMapping!==Gi?kM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hn).join(`
`)),o=zo(o),o=Ah(o,t),o=Rh(o,t),a=zo(a),a=Ah(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=w+f+o,T=w+p+a,R=Th(n,n.VERTEX_SHADER,y),D=Th(n,n.FRAGMENT_SHADER,T);if(n.attachShader(_,R),n.attachShader(_,D),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_),i.debug.checkShaderErrors){const E=n.getProgramInfoLog(_).trim(),b=n.getShaderInfoLog(R).trim(),oe=n.getShaderInfoLog(D).trim();let ue=!0,X=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(ue=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,_,R,D);else{const j=wh(n,R,"vertex"),V=wh(n,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+j+`
`+V)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(b===""||oe==="")&&(X=!1);X&&(this.diagnostics={runnable:ue,programLog:E,vertexShader:{log:b,prefix:f},fragmentShader:{log:oe,prefix:p}})}n.deleteShader(R),n.deleteShader(D);let C;this.getUniforms=function(){return C===void 0&&(C=new Js(n,_)),C};let ee;return this.getAttributes=function(){return ee===void 0&&(ee=XM(n,_)),ee},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=D,this}let ry=0;class ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new sy(e),t.set(e,r)),r}}class sy{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}}function ay(i,e,t,r,n,s,o){const a=new Tl,l=new ny,c=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures;let m=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function f(E,b,oe,ue,X){const j=ue.fog,V=X.geometry,te=E.isMeshStandardMaterial?ue.environment:null,W=(E.isMeshStandardMaterial?t:e).get(E.envMap||te),Q=W&&W.mapping===ga?W.image.height:null,he=x[E.type];E.precision!==null&&(m=n.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,F=ce!==void 0?ce.length:0;let J=0;V.morphAttributes.position!==void 0&&(J=1),V.morphAttributes.normal!==void 0&&(J=2),V.morphAttributes.color!==void 0&&(J=3);let me,be,we,Te;if(he){const ei=ni[he];me=ei.vertexShader,be=ei.fragmentShader}else me=E.vertexShader,be=E.fragmentShader,l.update(E),we=l.getVertexShaderID(E),Te=l.getFragmentShaderID(E);const Re=i.getRenderTarget(),Ae=X.isInstancedMesh===!0,ze=!!E.map,et=!!E.matcap,Ue=!!W,v=!!E.aoMap,L=!!E.lightMap,N=!!E.bumpMap,G=!!E.normalMap,z=!!E.displacementMap,le=!!E.emissiveMap,ae=!!E.metalnessMap,q=!!E.roughnessMap,se=E.anisotropy>0,ne=E.clearcoat>0,_e=E.iridescence>0,M=E.sheen>0,g=E.transmission>0,U=se&&!!E.anisotropyMap,Z=ne&&!!E.clearcoatMap,ie=ne&&!!E.clearcoatNormalMap,re=ne&&!!E.clearcoatRoughnessMap,xe=_e&&!!E.iridescenceMap,de=_e&&!!E.iridescenceThicknessMap,k=M&&!!E.sheenColorMap,A=M&&!!E.sheenRoughnessMap,$=!!E.specularMap,Ee=!!E.specularColorMap,pe=!!E.specularIntensityMap,ge=g&&!!E.transmissionMap,Ce=g&&!!E.thicknessMap,je=!!E.gradientMap,P=!!E.alphaMap,Me=E.alphaTest>0,H=!!E.alphaHash,fe=!!E.extensions,ve=!!V.attributes.uv1,Ye=!!V.attributes.uv2,qe=!!V.attributes.uv3;let Je=Gi;return E.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:h,shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:me,fragmentShader:be,defines:E.defines,customVertexShaderID:we,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&X.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:hi,map:ze,matcap:et,envMap:Ue,envMapMode:Ue&&W.mapping,envMapCubeUVHeight:Q,aoMap:v,lightMap:L,bumpMap:N,normalMap:G,displacementMap:u&&z,emissiveMap:le,normalMapObjectSpace:G&&E.normalMapType===Qg,normalMapTangentSpace:G&&E.normalMapType===Md,metalnessMap:ae,roughnessMap:q,anisotropy:se,anisotropyMap:U,clearcoat:ne,clearcoatMap:Z,clearcoatNormalMap:ie,clearcoatRoughnessMap:re,iridescence:_e,iridescenceMap:xe,iridescenceThicknessMap:de,sheen:M,sheenColorMap:k,sheenRoughnessMap:A,specularMap:$,specularColorMap:Ee,specularIntensityMap:pe,transmission:g,transmissionMap:ge,thicknessMap:Ce,gradientMap:je,opaque:E.transparent===!1&&E.blending===Wr,alphaMap:P,alphaTest:Me,alphaHash:H,combine:E.combine,mapUv:ze&&_(E.map.channel),aoMapUv:v&&_(E.aoMap.channel),lightMapUv:L&&_(E.lightMap.channel),bumpMapUv:N&&_(E.bumpMap.channel),normalMapUv:G&&_(E.normalMap.channel),displacementMapUv:z&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:ae&&_(E.metalnessMap.channel),roughnessMapUv:q&&_(E.roughnessMap.channel),anisotropyMapUv:U&&_(E.anisotropyMap.channel),clearcoatMapUv:Z&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:k&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:A&&_(E.sheenRoughnessMap.channel),specularMapUv:$&&_(E.specularMap.channel),specularColorMapUv:Ee&&_(E.specularColorMap.channel),specularIntensityMapUv:pe&&_(E.specularIntensityMap.channel),transmissionMapUv:ge&&_(E.transmissionMap.channel),thicknessMapUv:Ce&&_(E.thicknessMap.channel),alphaMapUv:P&&_(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(G||se),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:Ye,vertexUv3s:qe,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(ze||P),fog:!!j,useFog:E.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&oe.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&E.map.colorSpace===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ai,flipSided:E.side===Lt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:fe&&E.extensions.derivatives===!0,extensionFragDepth:fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||r.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const oe in E.defines)b.push(oe),b.push(E.defines[oe]);return E.isRawShaderMaterial===!1&&(w(b,E),y(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function w(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){const b=x[E.type];let oe;if(b){const ue=ni[b];oe=jv.clone(ue.uniforms)}else oe=E.uniforms;return oe}function R(E,b){let oe;for(let ue=0,X=c.length;ue<X;ue++){const j=c[ue];if(j.cacheKey===b){oe=j,++oe.usedTimes;break}}return oe===void 0&&(oe=new iy(i,b,E,s),c.push(oe)),oe}function D(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function ee(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:T,acquireProgram:R,releaseProgram:D,releaseShaderCache:C,programs:c,dispose:ee}}function oy(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function r(s,o,a){i.get(s)[o]=a}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function ly(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uh(){const i=[];let e=0;const t=[],r=[],n=[];function s(){e=0,t.length=0,r.length=0,n.length=0}function o(d,u,m,x,_,f){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:x,renderOrder:d.renderOrder,z:_,group:f},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=_,p.group=f),e++,p}function a(d,u,m,x,_,f){const p=o(d,u,m,x,_,f);m.transmission>0?r.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(d,u,m,x,_,f){const p=o(d,u,m,x,_,f);m.transmission>0?r.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||ly),r.length>1&&r.sort(u||Ph),n.length>1&&n.sort(u||Ph)}function h(){for(let d=e,u=i.length;d<u;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function cy(){let i=new WeakMap;function e(r,n){const s=i.get(r);let o;return s===void 0?(o=new Uh,i.set(r,[o])):n>=s.length?(o=new Uh,s.push(o)):o=s[n],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function uy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dy=0;function py(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fy(i,e){const t=new hy,r=uy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new I);const s=new I,o=new nt,a=new nt;function l(h,d){let u=0,m=0,x=0;for(let oe=0;oe<9;oe++)n.probe[oe].set(0,0,0);let _=0,f=0,p=0,w=0,y=0,T=0,R=0,D=0,C=0,ee=0;h.sort(py);const E=d===!0?Math.PI:1;for(let oe=0,ue=h.length;oe<ue;oe++){const X=h[oe],j=X.color,V=X.intensity,te=X.distance,W=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)u+=j.r*V*E,m+=j.g*V*E,x+=j.b*V*E;else if(X.isLightProbe)for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(X.sh.coefficients[Q],V);else if(X.isDirectionalLight){const Q=t.get(X);if(Q.color.copy(X.color).multiplyScalar(X.intensity*E),X.castShadow){const he=X.shadow,ce=r.get(X);ce.shadowBias=he.bias,ce.shadowNormalBias=he.normalBias,ce.shadowRadius=he.radius,ce.shadowMapSize=he.mapSize,n.directionalShadow[_]=ce,n.directionalShadowMap[_]=W,n.directionalShadowMatrix[_]=X.shadow.matrix,T++}n.directional[_]=Q,_++}else if(X.isSpotLight){const Q=t.get(X);Q.position.setFromMatrixPosition(X.matrixWorld),Q.color.copy(j).multiplyScalar(V*E),Q.distance=te,Q.coneCos=Math.cos(X.angle),Q.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),Q.decay=X.decay,n.spot[p]=Q;const he=X.shadow;if(X.map&&(n.spotLightMap[C]=X.map,C++,he.updateMatrices(X),X.castShadow&&ee++),n.spotLightMatrix[p]=he.matrix,X.castShadow){const ce=r.get(X);ce.shadowBias=he.bias,ce.shadowNormalBias=he.normalBias,ce.shadowRadius=he.radius,ce.shadowMapSize=he.mapSize,n.spotShadow[p]=ce,n.spotShadowMap[p]=W,D++}p++}else if(X.isRectAreaLight){const Q=t.get(X);Q.color.copy(j).multiplyScalar(V),Q.halfWidth.set(X.width*.5,0,0),Q.halfHeight.set(0,X.height*.5,0),n.rectArea[w]=Q,w++}else if(X.isPointLight){const Q=t.get(X);if(Q.color.copy(X.color).multiplyScalar(X.intensity*E),Q.distance=X.distance,Q.decay=X.decay,X.castShadow){const he=X.shadow,ce=r.get(X);ce.shadowBias=he.bias,ce.shadowNormalBias=he.normalBias,ce.shadowRadius=he.radius,ce.shadowMapSize=he.mapSize,ce.shadowCameraNear=he.camera.near,ce.shadowCameraFar=he.camera.far,n.pointShadow[f]=ce,n.pointShadowMap[f]=W,n.pointShadowMatrix[f]=X.shadow.matrix,R++}n.point[f]=Q,f++}else if(X.isHemisphereLight){const Q=t.get(X);Q.skyColor.copy(X.color).multiplyScalar(V*E),Q.groundColor.copy(X.groundColor).multiplyScalar(V*E),n.hemi[y]=Q,y++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=x;const b=n.hash;(b.directionalLength!==_||b.pointLength!==f||b.spotLength!==p||b.rectAreaLength!==w||b.hemiLength!==y||b.numDirectionalShadows!==T||b.numPointShadows!==R||b.numSpotShadows!==D||b.numSpotMaps!==C)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=w,n.point.length=f,n.hemi.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=D+C-ee,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=ee,b.directionalLength=_,b.pointLength=f,b.spotLength=p,b.rectAreaLength=w,b.hemiLength=y,b.numDirectionalShadows=T,b.numPointShadows=R,b.numSpotShadows=D,b.numSpotMaps=C,n.version=dy++)}function c(h,d){let u=0,m=0,x=0,_=0,f=0;const p=d.matrixWorldInverse;for(let w=0,y=h.length;w<y;w++){const T=h[w];if(T.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(T.isSpotLight){const R=n.spot[x];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),x++}else if(T.isRectAreaLight){const R=n.rectArea[_];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(T.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const R=n.point[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){const R=n.hemi[f];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:n}}function Dh(i,e){const t=new fy(i,e),r=[],n=[];function s(){r.length=0,n.length=0}function o(h){r.push(h)}function a(h){n.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:s,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function my(i,e){let t=new WeakMap;function r(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Dh(i,e),t.set(s,[l])):o>=a.length?(l=new Dh(i,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class gy extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vy extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
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
}`;function My(i,e,t){let r=new wl;const n=new Ne,s=new Ne,o=new ut,a=new gy({depthPacking:Zg}),l=new vy,c={},h=t.maxTextureSize,d={[Wi]:Lt,[Lt]:Wi,[ai]:ai},u=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:_y,fragmentShader:xy}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ti;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(x,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let p=this.type;this.render=function(R,D,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const ee=i.getRenderTarget(),E=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),oe=i.state;oe.setBlending(Hi),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ue=p!==xi&&this.type===xi,X=p===xi&&this.type!==xi;for(let j=0,V=R.length;j<V;j++){const te=R[j],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const Q=W.getFrameExtents();if(n.multiply(Q),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Q.x),n.x=s.x*Q.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Q.y),n.y=s.y*Q.y,W.mapSize.y=s.y)),W.map===null||ue===!0||X===!0){const ce=this.type!==xi?{minFilter:wt,magFilter:wt}:{};W.map!==null&&W.map.dispose(),W.map=new hr(n.x,n.y,ce),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const he=W.getViewportCount();for(let ce=0;ce<he;ce++){const F=W.getViewport(ce);o.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),oe.viewport(o),W.updateMatrices(te,ce),r=W.getFrustum(),T(D,C,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===xi&&w(W,C),W.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(ee,E,b)};function w(R,D){const C=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hr(n.x,n.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(D,null,C,u,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(D,null,C,m,_,null)}function y(R,D,C,ee){let E=null;const b=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)E=b;else if(E=C.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const oe=E.uuid,ue=D.uuid;let X=c[oe];X===void 0&&(X={},c[oe]=X);let j=X[ue];j===void 0&&(j=E.clone(),X[ue]=j),E=j}if(E.visible=D.visible,E.wireframe=D.wireframe,ee===xi?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:d[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const oe=i.properties.get(E);oe.light=C}return E}function T(R,D,C,ee,E){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===xi)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const oe=e.update(R),ue=R.material;if(Array.isArray(ue)){const X=oe.groups;for(let j=0,V=X.length;j<V;j++){const te=X[j],W=ue[te.materialIndex];if(W&&W.visible){const Q=y(R,W,ee,E);i.renderBufferDirect(C,null,oe,Q,R,te)}}}else if(ue.visible){const X=y(R,ue,ee,E);i.renderBufferDirect(C,null,oe,X,R,null)}}const b=R.children;for(let oe=0,ue=b.length;oe<ue;oe++)T(b[oe],D,C,ee,E)}}function yy(i,e,t){const r=t.isWebGL2;function n(){let P=!1;const Me=new ut;let H=null;const fe=new ut(0,0,0,0);return{setMask:function(ve){H!==ve&&!P&&(i.colorMask(ve,ve,ve,ve),H=ve)},setLocked:function(ve){P=ve},setClear:function(ve,Ye,qe,Je,ei){ei===!0&&(ve*=Je,Ye*=Je,qe*=Je),Me.set(ve,Ye,qe,Je),fe.equals(Me)===!1&&(i.clearColor(ve,Ye,qe,Je),fe.copy(Me))},reset:function(){P=!1,H=null,fe.set(-1,0,0,0)}}}function s(){let P=!1,Me=null,H=null,fe=null;return{setTest:function(ve){ve?Re(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ve){Me!==ve&&!P&&(i.depthMask(ve),Me=ve)},setFunc:function(ve){if(H!==ve){switch(ve){case wg:i.depthFunc(i.NEVER);break;case Ag:i.depthFunc(i.ALWAYS);break;case Rg:i.depthFunc(i.LESS);break;case Uo:i.depthFunc(i.LEQUAL);break;case Cg:i.depthFunc(i.EQUAL);break;case Lg:i.depthFunc(i.GEQUAL);break;case Pg:i.depthFunc(i.GREATER);break;case Ug:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=ve}},setLocked:function(ve){P=ve},setClear:function(ve){fe!==ve&&(i.clearDepth(ve),fe=ve)},reset:function(){P=!1,Me=null,H=null,fe=null}}}function o(){let P=!1,Me=null,H=null,fe=null,ve=null,Ye=null,qe=null,Je=null,ei=null;return{setTest:function($e){P||($e?Re(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function($e){Me!==$e&&!P&&(i.stencilMask($e),Me=$e)},setFunc:function($e,ti,yt){(H!==$e||fe!==ti||ve!==yt)&&(i.stencilFunc($e,ti,yt),H=$e,fe=ti,ve=yt)},setOp:function($e,ti,yt){(Ye!==$e||qe!==ti||Je!==yt)&&(i.stencilOp($e,ti,yt),Ye=$e,qe=ti,Je=yt)},setLocked:function($e){P=$e},setClear:function($e){ei!==$e&&(i.clearStencil($e),ei=$e)},reset:function(){P=!1,Me=null,H=null,fe=null,ve=null,Ye=null,qe=null,Je=null,ei=null}}}const a=new n,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let u={},m={},x=new WeakMap,_=[],f=null,p=!1,w=null,y=null,T=null,R=null,D=null,C=null,ee=null,E=!1,b=null,oe=null,ue=null,X=null,j=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,W=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),te=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),te=W>=2);let he=null,ce={};const F=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),me=new ut().fromArray(F),be=new ut().fromArray(J);function we(P,Me,H,fe){const ve=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(P,Ye),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<H;qe++)r&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(Me,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Me+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Ye}const Te={};Te[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Te[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc(Uo),z(!1),le(vc),Re(i.CULL_FACE),N(Hi);function Re(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ae(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function ze(P,Me){return m[P]!==Me?(i.bindFramebuffer(P,Me),m[P]=Me,r&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Me),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Me)),!0):!1}function et(P,Me){let H=_,fe=!1;if(P)if(H=x.get(Me),H===void 0&&(H=[],x.set(Me,H)),P.isWebGLMultipleRenderTargets){const ve=P.texture;if(H.length!==ve.length||H[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,qe=ve.length;Ye<qe;Ye++)H[Ye]=i.COLOR_ATTACHMENT0+Ye;H.length=ve.length,fe=!0}}else H[0]!==i.COLOR_ATTACHMENT0&&(H[0]=i.COLOR_ATTACHMENT0,fe=!0);else H[0]!==i.BACK&&(H[0]=i.BACK,fe=!0);fe&&(t.isWebGL2?i.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Ue(P){return f!==P?(i.useProgram(P),f=P,!0):!1}const v={[Fr]:i.FUNC_ADD,[mg]:i.FUNC_SUBTRACT,[gg]:i.FUNC_REVERSE_SUBTRACT};if(r)v[yc]=i.MIN,v[Ec]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(v[yc]=P.MIN_EXT,v[Ec]=P.MAX_EXT)}const L={[vg]:i.ZERO,[_g]:i.ONE,[xg]:i.SRC_COLOR,[cd]:i.SRC_ALPHA,[Tg]:i.SRC_ALPHA_SATURATE,[Sg]:i.DST_COLOR,[yg]:i.DST_ALPHA,[Mg]:i.ONE_MINUS_SRC_COLOR,[hd]:i.ONE_MINUS_SRC_ALPHA,[bg]:i.ONE_MINUS_DST_COLOR,[Eg]:i.ONE_MINUS_DST_ALPHA};function N(P,Me,H,fe,ve,Ye,qe,Je){if(P===Hi){p===!0&&(Ae(i.BLEND),p=!1);return}if(p===!1&&(Re(i.BLEND),p=!0),P!==fg){if(P!==w||Je!==E){if((y!==Fr||D!==Fr)&&(i.blendEquation(i.FUNC_ADD),y=Fr,D=Fr),Je)switch(P){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,R=null,C=null,ee=null,w=P,E=Je}return}ve=ve||Me,Ye=Ye||H,qe=qe||fe,(Me!==y||ve!==D)&&(i.blendEquationSeparate(v[Me],v[ve]),y=Me,D=ve),(H!==T||fe!==R||Ye!==C||qe!==ee)&&(i.blendFuncSeparate(L[H],L[fe],L[Ye],L[qe]),T=H,R=fe,C=Ye,ee=qe),w=P,E=!1}function G(P,Me){P.side===ai?Ae(i.CULL_FACE):Re(i.CULL_FACE);let H=P.side===Lt;Me&&(H=!H),z(H),P.blending===Wr&&P.transparent===!1?N(Hi):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const fe=P.stencilWrite;c.setTest(fe),fe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),q(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function z(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function le(P){P!==ug?(Re(i.CULL_FACE),P!==oe&&(P===vc?i.cullFace(i.BACK):P===dg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),oe=P}function ae(P){P!==ue&&(te&&i.lineWidth(P),ue=P)}function q(P,Me,H){P?(Re(i.POLYGON_OFFSET_FILL),(X!==Me||j!==H)&&(i.polygonOffset(Me,H),X=Me,j=H)):Ae(i.POLYGON_OFFSET_FILL)}function se(P){P?Re(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function ne(P){P===void 0&&(P=i.TEXTURE0+V-1),he!==P&&(i.activeTexture(P),he=P)}function _e(P,Me,H){H===void 0&&(he===null?H=i.TEXTURE0+V-1:H=he);let fe=ce[H];fe===void 0&&(fe={type:void 0,texture:void 0},ce[H]=fe),(fe.type!==P||fe.texture!==Me)&&(he!==H&&(i.activeTexture(H),he=H),i.bindTexture(P,Me||Te[P]),fe.type=P,fe.texture=Me)}function M(){const P=ce[he];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){me.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),me.copy(P))}function pe(P){be.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),be.copy(P))}function ge(P,Me){let H=d.get(Me);H===void 0&&(H=new WeakMap,d.set(Me,H));let fe=H.get(P);fe===void 0&&(fe=i.getUniformBlockIndex(Me,P.name),H.set(P,fe))}function Ce(P,Me){const H=d.get(Me).get(P);h.get(Me)!==H&&(i.uniformBlockBinding(Me,H,P.__bindingPointIndex),h.set(Me,H))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,ce={},m={},x=new WeakMap,_=[],f=null,p=!1,w=null,y=null,T=null,R=null,D=null,C=null,ee=null,E=!1,b=null,oe=null,ue=null,X=null,j=null,me.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:Ae,bindFramebuffer:ze,drawBuffers:et,useProgram:Ue,setBlending:N,setMaterial:G,setFlipSided:z,setCullFace:le,setLineWidth:ae,setPolygonOffset:q,setScissorTest:se,activeTexture:ne,bindTexture:_e,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:A,texImage3D:$,updateUBOMapping:ge,uniformBlockBinding:Ce,texStorage2D:de,texStorage3D:k,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:re,compressedTexSubImage3D:xe,scissor:Ee,viewport:pe,reset:je}}function Ey(i,e,t,r,n,s,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,d=n.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(M,g){return p?new OffscreenCanvas(M,g):rs("canvas")}function y(M,g,U,Z){let ie=1;if((M.width>Z||M.height>Z)&&(ie=Z/Math.max(M.width,M.height)),ie<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const re=g?ra:Math.floor,xe=re(ie*M.width),de=re(ie*M.height);_===void 0&&(_=w(xe,de));const k=U?w(xe,de):_;return k.width=xe,k.height=de,k.getContext("2d").drawImage(M,0,0,xe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+xe+"x"+de+")."),k}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function T(M){return Bo(M.width)&&Bo(M.height)}function R(M){return a?!1:M.wrapS!==Kt||M.wrapT!==Kt||M.minFilter!==wt&&M.minFilter!==Bt}function D(M,g){return M.generateMipmaps&&g&&M.minFilter!==wt&&M.minFilter!==Bt}function C(M){i.generateMipmap(M)}function ee(M,g,U,Z,ie=!1){if(a===!1)return g;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let re=g;return g===i.RED&&(U===i.FLOAT&&(re=i.R32F),U===i.HALF_FLOAT&&(re=i.R16F),U===i.UNSIGNED_BYTE&&(re=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(re=i.R8UI),U===i.UNSIGNED_SHORT&&(re=i.R16UI),U===i.UNSIGNED_INT&&(re=i.R32UI),U===i.BYTE&&(re=i.R8I),U===i.SHORT&&(re=i.R16I),U===i.INT&&(re=i.R32I)),g===i.RG&&(U===i.FLOAT&&(re=i.RG32F),U===i.HALF_FLOAT&&(re=i.RG16F),U===i.UNSIGNED_BYTE&&(re=i.RG8)),g===i.RGBA&&(U===i.FLOAT&&(re=i.RGBA32F),U===i.HALF_FLOAT&&(re=i.RGBA16F),U===i.UNSIGNED_BYTE&&(re=Z===Qe&&ie===!1?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)),(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function E(M,g,U){return D(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==wt&&M.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function b(M){return M===wt||M===Sc||M===Fa?i.NEAREST:i.LINEAR}function oe(M){const g=M.target;g.removeEventListener("dispose",oe),X(g),g.isVideoTexture&&x.delete(g)}function ue(M){const g=M.target;g.removeEventListener("dispose",ue),V(g)}function X(M){const g=r.get(M);if(g.__webglInit===void 0)return;const U=M.source,Z=f.get(U);if(Z){const ie=Z[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&j(M),Object.keys(Z).length===0&&f.delete(U)}r.remove(M)}function j(M){const g=r.get(M);i.deleteTexture(g.__webglTexture);const U=M.source,Z=f.get(U);delete Z[g.__cacheKey],o.memory.textures--}function V(M){const g=M.texture,U=r.get(M),Z=r.get(g);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(U.__webglFramebuffer[ie]))for(let re=0;re<U.__webglFramebuffer[ie].length;re++)i.deleteFramebuffer(U.__webglFramebuffer[ie][re]);else i.deleteFramebuffer(U.__webglFramebuffer[ie]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[ie])}else{if(Array.isArray(U.__webglFramebuffer))for(let ie=0;ie<U.__webglFramebuffer.length;ie++)i.deleteFramebuffer(U.__webglFramebuffer[ie]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ie=0;ie<U.__webglColorRenderbuffer.length;ie++)U.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[ie]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ie=0,re=g.length;ie<re;ie++){const xe=r.get(g[ie]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),r.remove(g[ie])}r.remove(g),r.remove(M)}let te=0;function W(){te=0}function Q(){const M=te;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),te+=1,M}function he(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ce(M,g){const U=r.get(M);if(M.isVideoTexture&&ne(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(U,M,g);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function F(M,g){const U=r.get(M);if(M.version>0&&U.__version!==M.version){ze(U,M,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function J(M,g){const U=r.get(M);if(M.version>0&&U.__version!==M.version){ze(U,M,g);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function me(M,g){const U=r.get(M);if(M.version>0&&U.__version!==M.version){et(U,M,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}const be={[Io]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[Oo]:i.MIRRORED_REPEAT},we={[wt]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[Fa]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Hg]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},Te={[ev]:i.NEVER,[ov]:i.ALWAYS,[tv]:i.LESS,[rv]:i.LEQUAL,[iv]:i.EQUAL,[av]:i.GEQUAL,[nv]:i.GREATER,[sv]:i.NOTEQUAL};function Re(M,g,U){if(U?(i.texParameteri(M,i.TEXTURE_WRAP_S,be[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,be[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,be[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,we[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,we[g.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Kt||g.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,b(g.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,b(g.minFilter)),g.minFilter!==wt&&g.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Te[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===wt||g.minFilter!==Fa&&g.minFilter!==es||g.type===Oi&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||r.get(g).__currentAnisotropy)&&(i.texParameterf(M,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy)}}function Ae(M,g){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",oe));const Z=g.source;let ie=f.get(Z);ie===void 0&&(ie={},f.set(Z,ie));const re=he(g);if(re!==M.__cacheKey){ie[re]===void 0&&(ie[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ie[re].usedTimes++;const xe=ie[M.__cacheKey];xe!==void 0&&(ie[M.__cacheKey].usedTimes--,xe.usedTimes===0&&j(g)),M.__cacheKey=re,M.__webglTexture=ie[re].texture}return U}function ze(M,g,U){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);const ie=Ae(M,g),re=g.source;t.bindTexture(Z,M.__webglTexture,i.TEXTURE0+U);const xe=r.get(re);if(re.version!==xe.__version||ie===!0){t.activeTexture(i.TEXTURE0+U),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const de=R(g)&&T(g.image)===!1;let k=y(g.image,de,!1,h);k=_e(g,k);const A=T(k)||a,$=s.convert(g.format,g.colorSpace);let Ee=s.convert(g.type),pe=ee(g.internalFormat,$,Ee,g.colorSpace,g.isVideoTexture);Re(Z,g,A);let ge;const Ce=g.mipmaps,je=a&&g.isVideoTexture!==!0,P=xe.__version===void 0||ie===!0,Me=E(g,k,A);if(g.isDepthTexture)pe=i.DEPTH_COMPONENT,a?g.type===Oi?pe=i.DEPTH_COMPONENT32F:g.type===Ii?pe=i.DEPTH_COMPONENT24:g.type===ar?pe=i.DEPTH24_STENCIL8:pe=i.DEPTH_COMPONENT16:g.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===or&&pe===i.DEPTH_COMPONENT&&g.type!==Sl&&g.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Ii,Ee=s.convert(g.type)),g.format===Qr&&pe===i.DEPTH_COMPONENT&&(pe=i.DEPTH_STENCIL,g.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ar,Ee=s.convert(g.type))),P&&(je?t.texStorage2D(i.TEXTURE_2D,1,pe,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,pe,k.width,k.height,0,$,Ee,null));else if(g.isDataTexture)if(Ce.length>0&&A){je&&P&&t.texStorage2D(i.TEXTURE_2D,Me,pe,Ce[0].width,Ce[0].height);for(let H=0,fe=Ce.length;H<fe;H++)ge=Ce[H],je?t.texSubImage2D(i.TEXTURE_2D,H,0,0,ge.width,ge.height,$,Ee,ge.data):t.texImage2D(i.TEXTURE_2D,H,pe,ge.width,ge.height,0,$,Ee,ge.data);g.generateMipmaps=!1}else je?(P&&t.texStorage2D(i.TEXTURE_2D,Me,pe,k.width,k.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,$,Ee,k.data)):t.texImage2D(i.TEXTURE_2D,0,pe,k.width,k.height,0,$,Ee,k.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){je&&P&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,pe,Ce[0].width,Ce[0].height,k.depth);for(let H=0,fe=Ce.length;H<fe;H++)ge=Ce[H],g.format!==Jt?$!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,k.depth,$,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,pe,ge.width,ge.height,k.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,k.depth,$,Ee,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,pe,ge.width,ge.height,k.depth,0,$,Ee,ge.data)}else{je&&P&&t.texStorage2D(i.TEXTURE_2D,Me,pe,Ce[0].width,Ce[0].height);for(let H=0,fe=Ce.length;H<fe;H++)ge=Ce[H],g.format!==Jt?$!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,ge.width,ge.height,$,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,H,pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,H,0,0,ge.width,ge.height,$,Ee,ge.data):t.texImage2D(i.TEXTURE_2D,H,pe,ge.width,ge.height,0,$,Ee,ge.data)}else if(g.isDataArrayTexture)je?(P&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,pe,k.width,k.height,k.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,$,Ee,k.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,k.width,k.height,k.depth,0,$,Ee,k.data);else if(g.isData3DTexture)je?(P&&t.texStorage3D(i.TEXTURE_3D,Me,pe,k.width,k.height,k.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,$,Ee,k.data)):t.texImage3D(i.TEXTURE_3D,0,pe,k.width,k.height,k.depth,0,$,Ee,k.data);else if(g.isFramebufferTexture){if(P)if(je)t.texStorage2D(i.TEXTURE_2D,Me,pe,k.width,k.height);else{let H=k.width,fe=k.height;for(let ve=0;ve<Me;ve++)t.texImage2D(i.TEXTURE_2D,ve,pe,H,fe,0,$,Ee,null),H>>=1,fe>>=1}}else if(Ce.length>0&&A){je&&P&&t.texStorage2D(i.TEXTURE_2D,Me,pe,Ce[0].width,Ce[0].height);for(let H=0,fe=Ce.length;H<fe;H++)ge=Ce[H],je?t.texSubImage2D(i.TEXTURE_2D,H,0,0,$,Ee,ge):t.texImage2D(i.TEXTURE_2D,H,pe,$,Ee,ge);g.generateMipmaps=!1}else je?(P&&t.texStorage2D(i.TEXTURE_2D,Me,pe,k.width,k.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$,Ee,k)):t.texImage2D(i.TEXTURE_2D,0,pe,$,Ee,k);D(g,A)&&C(Z),xe.__version=re.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function et(M,g,U){if(g.image.length!==6)return;const Z=Ae(M,g),ie=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);const re=r.get(ie);if(ie.version!==re.__version||Z===!0){t.activeTexture(i.TEXTURE0+U),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,k=[];for(let H=0;H<6;H++)!xe&&!de?k[H]=y(g.image[H],!1,!0,c):k[H]=de?g.image[H].image:g.image[H],k[H]=_e(g,k[H]);const A=k[0],$=T(A)||a,Ee=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),ge=ee(g.internalFormat,Ee,pe,g.colorSpace),Ce=a&&g.isVideoTexture!==!0,je=re.__version===void 0||Z===!0;let P=E(g,A,$);Re(i.TEXTURE_CUBE_MAP,g,$);let Me;if(xe){Ce&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,P,ge,A.width,A.height);for(let H=0;H<6;H++){Me=k[H].mipmaps;for(let fe=0;fe<Me.length;fe++){const ve=Me[fe];g.format!==Jt?Ee!==null?Ce?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe,0,0,ve.width,ve.height,Ee,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe,0,0,ve.width,ve.height,Ee,pe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe,ge,ve.width,ve.height,0,Ee,pe,ve.data)}}}else{Me=g.mipmaps,Ce&&je&&(Me.length>0&&P++,t.texStorage2D(i.TEXTURE_CUBE_MAP,P,ge,k[0].width,k[0].height));for(let H=0;H<6;H++)if(de){Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,k[H].width,k[H].height,Ee,pe,k[H].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,ge,k[H].width,k[H].height,0,Ee,pe,k[H].data);for(let fe=0;fe<Me.length;fe++){const ve=Me[fe].image[H].image;Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe+1,0,0,ve.width,ve.height,Ee,pe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe+1,ge,ve.width,ve.height,0,Ee,pe,ve.data)}}else{Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ee,pe,k[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,ge,Ee,pe,k[H]);for(let fe=0;fe<Me.length;fe++){const ve=Me[fe];Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe+1,0,0,Ee,pe,ve.image[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe+1,ge,Ee,pe,ve.image[H])}}}D(g,$)&&C(i.TEXTURE_CUBE_MAP),re.__version=ie.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ue(M,g,U,Z,ie,re){const xe=s.convert(U.format,U.colorSpace),de=s.convert(U.type),k=ee(U.internalFormat,xe,de,U.colorSpace);if(!r.get(g).__hasExternalTextures){const A=Math.max(1,g.width>>re),$=Math.max(1,g.height>>re);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,k,A,$,g.depth,0,xe,de,null):t.texImage2D(ie,re,k,A,$,0,xe,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),se(g)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,r.get(U).__webglTexture,0,q(g)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,r.get(U).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function v(M,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let Z=i.DEPTH_COMPONENT16;if(U||se(g)){const ie=g.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Oi?Z=i.DEPTH_COMPONENT32F:ie.type===Ii&&(Z=i.DEPTH_COMPONENT24));const re=q(g);se(g)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Z,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Z,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const Z=q(g);U&&se(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,g.width,g.height):se(g)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const Z=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ie=0;ie<Z.length;ie++){const re=Z[ie],xe=s.convert(re.format,re.colorSpace),de=s.convert(re.type),k=ee(re.internalFormat,xe,de,re.colorSpace),A=q(g);U&&se(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,A,k,g.width,g.height):se(g)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,A,k,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,k,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function L(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ce(g.depthTexture,0);const U=r.get(g.depthTexture).__webglTexture,Z=q(g);if(g.depthTexture.format===or)se(g)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0);else if(g.depthTexture.format===Qr)se(g)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function N(M){const g=r.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");L(g.__webglFramebuffer,M)}else if(U){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]=i.createRenderbuffer(),v(g.__webglDepthbuffer[Z],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),v(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(M,g,U){const Z=r.get(M);g!==void 0&&Ue(Z.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&N(M)}function z(M){const g=M.texture,U=r.get(M),Z=r.get(g);M.addEventListener("dispose",ue),M.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,o.memory.textures++);const ie=M.isWebGLCubeRenderTarget===!0,re=M.isWebGLMultipleRenderTargets===!0,xe=T(M)||a;if(ie){U.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[de]=[];for(let k=0;k<g.mipmaps.length;k++)U.__webglFramebuffer[de][k]=i.createFramebuffer()}else U.__webglFramebuffer[de]=i.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)U.__webglFramebuffer[de]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(re)if(n.drawBuffers){const de=M.texture;for(let k=0,A=de.length;k<A;k++){const $=r.get(de[k]);$.__webglTexture===void 0&&($.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&se(M)===!1){const de=re?g:[g];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let k=0;k<de.length;k++){const A=de[k];U.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[k]);const $=s.convert(A.format,A.colorSpace),Ee=s.convert(A.type),pe=ee(A.internalFormat,$,Ee,A.colorSpace,M.isXRRenderTarget===!0),ge=q(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,pe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,U.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),v(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(i.TEXTURE_CUBE_MAP,g,xe);for(let de=0;de<6;de++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let k=0;k<g.mipmaps.length;k++)Ue(U.__webglFramebuffer[de][k],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,k);else Ue(U.__webglFramebuffer[de],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);D(g,xe)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const de=M.texture;for(let k=0,A=de.length;k<A;k++){const $=de[k],Ee=r.get($);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),Re(i.TEXTURE_2D,$,xe),Ue(U.__webglFramebuffer,M,$,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,0),D($,xe)&&C(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?de=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,Z.__webglTexture),Re(de,g,xe),a&&g.mipmaps&&g.mipmaps.length>0)for(let k=0;k<g.mipmaps.length;k++)Ue(U.__webglFramebuffer[k],M,g,i.COLOR_ATTACHMENT0,de,k);else Ue(U.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,de,0);D(g,xe)&&C(de),t.unbindTexture()}M.depthBuffer&&N(M)}function le(M){const g=T(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0,ie=U.length;Z<ie;Z++){const re=U[Z];if(D(re,g)){const xe=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=r.get(re).__webglTexture;t.bindTexture(xe,de),C(xe),t.unbindTexture()}}}function ae(M){if(a&&M.samples>0&&se(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,Z=M.height;let ie=i.COLOR_BUFFER_BIT;const re=[],xe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=r.get(M),k=M.isWebGLMultipleRenderTargets===!0;if(k)for(let A=0;A<g.length;A++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let A=0;A<g.length;A++){re.push(i.COLOR_ATTACHMENT0+A),M.depthBuffer&&re.push(xe);const $=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if($===!1&&(M.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),k&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[A]),$===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xe])),k){const Ee=r.get(g[A]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,U,Z,0,0,U,Z,ie,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let A=0;A<g.length;A++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.RENDERBUFFER,de.__webglColorRenderbuffer[A]);const $=r.get(g[A]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.TEXTURE_2D,$,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function q(M){return Math.min(d,M.samples)}function se(M){const g=r.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ne(M){const g=o.render.frame;x.get(M)!==g&&(x.set(M,g),M.update())}function _e(M,g){const U=M.colorSpace,Z=M.format,ie=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Fo||U!==hi&&U!==cr&&(U===Qe||U===va?a===!1?e.has("EXT_sRGB")===!0&&Z===Jt?(M.format=Fo,M.minFilter=Bt,M.generateMipmaps=!1):g=Ed.sRGBToLinear(g):(Z!==Jt||ie!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.setTexture2D=ce,this.setTexture2DArray=F,this.setTexture3D=J,this.setTextureCube=me,this.rebindTextures=G,this.setupRenderTarget=z,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=se}const Sy=0,at=1;function by(i,e,t){const r=t.isWebGL2;function n(s,o=cr){let a;const l=o===Qe||o===va?at:Sy;if(s===ki)return i.UNSIGNED_BYTE;if(s===fd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===md)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Gg)return i.BYTE;if(s===kg)return i.SHORT;if(s===Sl)return i.UNSIGNED_SHORT;if(s===pd)return i.INT;if(s===Ii)return i.UNSIGNED_INT;if(s===Oi)return i.FLOAT;if(s===ts)return r?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vg)return i.ALPHA;if(s===Jt)return i.RGBA;if(s===Wg)return i.LUMINANCE;if(s===Xg)return i.LUMINANCE_ALPHA;if(s===or)return i.DEPTH_COMPONENT;if(s===Qr)return i.DEPTH_STENCIL;if(s===Fo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jg)return i.RED;if(s===gd)return i.RED_INTEGER;if(s===Yg)return i.RG;if(s===vd)return i.RG_INTEGER;if(s===_d)return i.RGBA_INTEGER;if(s===Ba||s===za||s===Ha||s===Ga)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bc||s===Tc||s===wc||s===Ac)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rc||s===Cc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rc)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Cc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lc||s===Pc||s===Uc||s===Dc||s===Nc||s===Ic||s===Oc||s===Fc||s===Bc||s===zc||s===Hc||s===Gc||s===kc||s===Vc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Lc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ic)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ka||s===Wc||s===Xc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ka)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kg||s===jc||s===Yc||s===qc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ar?r?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:n}}class Ty extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wy={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,r),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wy)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Ay extends Pt{constructor(e,t,r,n,s,o,a,l,c,h){if(h=h!==void 0?h:or,h!==or&&h!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===or&&(r=Ii),r===void 0&&h===Qr&&(r=ar),super(null,n,s,o,a,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ry extends pr{constructor(e,t){super();const r=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,x=null;const _=t.getContextAttributes();let f=null,p=null;const w=[],y=[],T=new zt;T.layers.enable(1),T.viewport=new ut;const R=new zt;R.layers.enable(2),R.viewport=new ut;const D=[T,R],C=new Ty;C.layers.enable(1),C.layers.enable(2);let ee=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let J=w[F];return J===void 0&&(J=new ho,w[F]=J),J.getTargetRaySpace()},this.getControllerGrip=function(F){let J=w[F];return J===void 0&&(J=new ho,w[F]=J),J.getGripSpace()},this.getHand=function(F){let J=w[F];return J===void 0&&(J=new ho,w[F]=J),J.getHandSpace()};function b(F){const J=y.indexOf(F.inputSource);if(J===-1)return;const me=w[J];me!==void 0&&(me.update(F.inputSource,F.frame,c||o),me.dispatchEvent({type:F.type,data:F.inputSource}))}function oe(){n.removeEventListener("select",b),n.removeEventListener("selectstart",b),n.removeEventListener("selectend",b),n.removeEventListener("squeeze",b),n.removeEventListener("squeezestart",b),n.removeEventListener("squeezeend",b),n.removeEventListener("end",oe),n.removeEventListener("inputsourceschange",ue);for(let F=0;F<w.length;F++){const J=y[F];J!==null&&(y[F]=null,w[F].disconnect(J))}ee=null,E=null,e.setRenderTarget(f),m=null,u=null,d=null,n=null,p=null,ce.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",b),n.addEventListener("selectstart",b),n.addEventListener("selectend",b),n.addEventListener("squeeze",b),n.addEventListener("squeezestart",b),n.addEventListener("squeezeend",b),n.addEventListener("end",oe),n.addEventListener("inputsourceschange",ue),_.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(n,t,J),n.updateRenderState({baseLayer:m}),p=new hr(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,me=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Qr:or,me=_.stencil?ar:Ii);const we={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(we),n.updateRenderState({layers:[u]}),p=new hr(u.textureWidth,u.textureHeight,{format:Jt,type:ki,depthTexture:new Ay(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Te=e.properties.get(p);Te.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),ce.setContext(n),ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function ue(F){for(let J=0;J<F.removed.length;J++){const me=F.removed[J],be=y.indexOf(me);be>=0&&(y[be]=null,w[be].disconnect(me))}for(let J=0;J<F.added.length;J++){const me=F.added[J];let be=y.indexOf(me);if(be===-1){for(let Te=0;Te<w.length;Te++)if(Te>=y.length){y.push(me),be=Te;break}else if(y[Te]===null){y[Te]=me,be=Te;break}if(be===-1)break}const we=w[be];we&&we.connect(me)}}const X=new I,j=new I;function V(F,J,me){X.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);const be=X.distanceTo(j),we=J.projectionMatrix.elements,Te=me.projectionMatrix.elements,Re=we[14]/(we[10]-1),Ae=we[14]/(we[10]+1),ze=(we[9]+1)/we[5],et=(we[9]-1)/we[5],Ue=(we[8]-1)/we[0],v=(Te[8]+1)/Te[0],L=Re*Ue,N=Re*v,G=be/(-Ue+v),z=G*-Ue;J.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(z),F.translateZ(G),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const le=Re+G,ae=Ae+G,q=L-z,se=N+(be-z),ne=ze*Ae/ae*le,_e=et*Ae/ae*le;F.projectionMatrix.makePerspective(q,se,ne,_e,le,ae),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function te(F,J){J===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(J.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;C.near=R.near=T.near=F.near,C.far=R.far=T.far=F.far,(ee!==C.near||E!==C.far)&&(n.updateRenderState({depthNear:C.near,depthFar:C.far}),ee=C.near,E=C.far);const J=F.parent,me=C.cameras;te(C,J);for(let be=0;be<me.length;be++)te(me[be],J);me.length===2?V(C,T,R):C.projectionMatrix.copy(T.projectionMatrix),W(F,C,J)};function W(F,J,me){me===null?F.matrix.copy(J.matrixWorld):(F.matrix.copy(me.matrixWorld),F.matrix.invert(),F.matrix.multiply(J.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(J.projectionMatrix),F.projectionMatrixInverse.copy(J.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=is*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let Q=null;function he(F,J){if(h=J.getViewerPose(c||o),x=J,h!==null){const me=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let be=!1;me.length!==C.cameras.length&&(C.cameras.length=0,be=!0);for(let we=0;we<me.length;we++){const Te=me[we];let Re=null;if(m!==null)Re=m.getViewport(Te);else{const ze=d.getViewSubImage(u,Te);Re=ze.viewport,we===0&&(e.setRenderTargetTextures(p,ze.colorTexture,u.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(p))}let Ae=D[we];Ae===void 0&&(Ae=new zt,Ae.layers.enable(we),Ae.viewport=new ut,D[we]=Ae),Ae.matrix.fromArray(Te.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Te.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Re.x,Re.y,Re.width,Re.height),we===0&&(C.matrix.copy(Ae.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),be===!0&&C.cameras.push(Ae)}}for(let me=0;me<w.length;me++){const be=y[me],we=w[me];be!==null&&we!==void 0&&we.update(be,J,c||o)}Q&&Q(F,J),J.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:J}),x=null}const ce=new Pd;ce.setAnimationLoop(he),this.setAnimationLoop=function(F){Q=F},this.dispose=function(){}}}function Cy(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function r(f,p){p.color.getRGB(f.fogColor.value,Rd(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,w,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),d(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(s(f,p),x(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,w,y):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Lt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Lt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,w,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=y*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const w=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Ly(i,e,t,r){let n={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,y){const T=y.program;r.uniformBlockBinding(w,T)}function c(w,y){let T=n[w.id];T===void 0&&(x(w),T=h(w),n[w.id]=T,w.addEventListener("dispose",f));const R=y.program;r.updateUBOMapping(w,R);const D=e.render.frame;s[w.id]!==D&&(u(w),s[w.id]=D)}function h(w){const y=d();w.__bindingPointIndex=y;const T=i.createBuffer(),R=w.__size,D=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const y=n[w.id],T=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let D=0,C=T.length;D<C;D++){const ee=T[D];if(m(ee,D,R)===!0){const E=ee.__offset,b=Array.isArray(ee.value)?ee.value:[ee.value];let oe=0;for(let ue=0;ue<b.length;ue++){const X=b[ue],j=_(X);typeof X=="number"?(ee.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,E+oe,ee.__data)):X.isMatrix3?(ee.__data[0]=X.elements[0],ee.__data[1]=X.elements[1],ee.__data[2]=X.elements[2],ee.__data[3]=X.elements[0],ee.__data[4]=X.elements[3],ee.__data[5]=X.elements[4],ee.__data[6]=X.elements[5],ee.__data[7]=X.elements[0],ee.__data[8]=X.elements[6],ee.__data[9]=X.elements[7],ee.__data[10]=X.elements[8],ee.__data[11]=X.elements[0]):(X.toArray(ee.__data,oe),oe+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,ee.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,y,T){const R=w.value;if(T[y]===void 0){if(typeof R=="number")T[y]=R;else{const D=Array.isArray(R)?R:[R],C=[];for(let ee=0;ee<D.length;ee++)C.push(D[ee].clone());T[y]=C}return!0}else if(typeof R=="number"){if(T[y]!==R)return T[y]=R,!0}else{const D=Array.isArray(T[y])?T[y]:[T[y]],C=Array.isArray(R)?R:[R];for(let ee=0;ee<D.length;ee++){const E=D[ee];if(E.equals(C[ee])===!1)return E.copy(C[ee]),!0}}return!1}function x(w){const y=w.uniforms;let T=0;const R=16;let D=0;for(let C=0,ee=y.length;C<ee;C++){const E=y[C],b={boundary:0,storage:0},oe=Array.isArray(E.value)?E.value:[E.value];for(let ue=0,X=oe.length;ue<X;ue++){const j=oe[ue],V=_(j);b.boundary+=V.boundary,b.storage+=V.storage}if(E.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,C>0){D=T%R;const ue=R-D;D!==0&&ue-b.boundary<0&&(T+=R-D,E.__offset=T)}T+=b.storage}return D=T%R,D>0&&(T+=R-D),w.__size=T,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function f(w){const y=w.target;y.removeEventListener("dispose",f);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function p(){for(const w in n)i.deleteBuffer(n[w]);o=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Fd{constructor(e={}){const{canvas:t=Sv(),context:r=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;r!==null?u=r.getContextAttributes().alpha:u=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,f=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qe,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const y=this;let T=!1,R=0,D=0,C=null,ee=-1,E=null;const b=new ut,oe=new ut;let ue=null;const X=new ke(0);let j=0,V=t.width,te=t.height,W=1,Q=null,he=null;const ce=new ut(0,0,V,te),F=new ut(0,0,V,te);let J=!1;const me=new wl;let be=!1,we=!1,Te=null;const Re=new nt,Ae=new Ne,ze=new I,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return C===null?W:1}let v=r;function L(S,O){for(let K=0;K<S.length;K++){const B=S[K],Y=t.getContext(B,O);if(Y!==null)return Y}return null}try{const S={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",fe,!1),v===null){const O=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&O.shift(),v=L(O,S),v===null)throw L(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let N,G,z,le,ae,q,se,ne,_e,M,g,U,Z,ie,re,xe,de,k,A,$,Ee,pe,ge,Ce;function je(){N=new Hx(v),G=new Nx(v,N,e),N.init(G),pe=new by(v,N,G),z=new yy(v,N,G),le=new Vx(v),ae=new oy,q=new Ey(v,N,z,ae,G,pe,le),se=new Ox(y),ne=new zx(y),_e=new $v(v,G),ge=new Ux(v,N,_e,G),M=new Gx(v,_e,le,ge),g=new Yx(v,M,_e,le),A=new jx(v,G,q),xe=new Ix(ae),U=new ay(y,se,ne,N,G,ge,xe),Z=new Cy(y,ae),ie=new cy,re=new my(N,G),k=new Px(y,se,ne,z,g,u,l),de=new My(y,g,G),Ce=new Ly(v,le,G,z),$=new Dx(v,N,le,G),Ee=new kx(v,N,le,G),le.programs=U.programs,y.capabilities=G,y.extensions=N,y.properties=ae,y.renderLists=ie,y.shadowMap=de,y.state=z,y.info=le}je();const P=new Ry(y,v);this.xr=P,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const S=N.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=N.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(V,te,!1))},this.getSize=function(S){return S.set(V,te)},this.setSize=function(S,O,K=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,te=O,t.width=Math.floor(S*W),t.height=Math.floor(O*W),K===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(V*W,te*W).floor()},this.setDrawingBufferSize=function(S,O,K){V=S,te=O,W=K,t.width=Math.floor(S*K),t.height=Math.floor(O*K),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,O,K,B){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,O,K,B),z.viewport(b.copy(ce).multiplyScalar(W).floor())},this.getScissor=function(S){return S.copy(F)},this.setScissor=function(S,O,K,B){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,O,K,B),z.scissor(oe.copy(F).multiplyScalar(W).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(S){z.setScissorTest(J=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(S=!0,O=!0,K=!0){let B=0;if(S){let Y=!1;if(C!==null){const Se=C.texture.format;Y=Se===_d||Se===vd||Se===gd}if(Y){const Se=C.texture.type,Le=Se===ki||Se===Ii||Se===Sl||Se===ar||Se===fd||Se===md,Pe=k.getClearColor(),De=k.getClearAlpha(),Ve=Pe.r,Oe=Pe.g,Fe=Pe.b;Le?(m[0]=Ve,m[1]=Oe,m[2]=Fe,m[3]=De,v.clearBufferuiv(v.COLOR,0,m)):(x[0]=Ve,x[1]=Oe,x[2]=Fe,x[3]=De,v.clearBufferiv(v.COLOR,0,x))}else B|=v.COLOR_BUFFER_BIT}O&&(B|=v.DEPTH_BUFFER_BIT),K&&(B|=v.STENCIL_BUFFER_BIT),v.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ie.dispose(),re.dispose(),ae.dispose(),se.dispose(),ne.dispose(),g.dispose(),ge.dispose(),Ce.dispose(),U.dispose(),P.dispose(),P.removeEventListener("sessionstart",$e),P.removeEventListener("sessionend",ti),Te&&(Te.dispose(),Te=null),yt.stop()};function Me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=le.autoReset,O=de.enabled,K=de.autoUpdate,B=de.needsUpdate,Y=de.type;je(),le.autoReset=S,de.enabled=O,de.autoUpdate=K,de.needsUpdate=B,de.type=Y}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ve(S){const O=S.target;O.removeEventListener("dispose",ve),Ye(O)}function Ye(S){qe(S),ae.remove(S)}function qe(S){const O=ae.get(S).programs;O!==void 0&&(O.forEach(function(K){U.releaseProgram(K)}),S.isShaderMaterial&&U.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,K,B,Y,Se){O===null&&(O=et);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=Gd(S,O,K,B,Y);z.setMaterial(B,Le);let De=K.index,Ve=1;if(B.wireframe===!0){if(De=M.getWireframeAttribute(K),De===void 0)return;Ve=2}const Oe=K.drawRange,Fe=K.attributes.position;let ct=Oe.start*Ve,tt=(Oe.start+Oe.count)*Ve;Se!==null&&(ct=Math.max(ct,Se.start*Ve),tt=Math.min(tt,(Se.start+Se.count)*Ve)),De!==null?(ct=Math.max(ct,0),tt=Math.min(tt,De.count)):Fe!=null&&(ct=Math.max(ct,0),tt=Math.min(tt,Fe.count));const Ot=tt-ct;if(Ot<0||Ot===1/0)return;ge.setup(Y,B,Pe,K,De);let di,it=$;if(De!==null&&(di=_e.get(De),it=Ee,it.setIndex(di)),Y.isMesh)B.wireframe===!0?(z.setLineWidth(B.wireframeLinewidth*Ue()),it.setMode(v.LINES)):it.setMode(v.TRIANGLES);else if(Y.isLine){let We=B.linewidth;We===void 0&&(We=1),z.setLineWidth(We*Ue()),Y.isLineSegments?it.setMode(v.LINES):Y.isLineLoop?it.setMode(v.LINE_LOOP):it.setMode(v.LINE_STRIP)}else Y.isPoints?it.setMode(v.POINTS):Y.isSprite&&it.setMode(v.TRIANGLES);if(Y.isInstancedMesh)it.renderInstances(ct,Ot,Y.count);else if(K.isInstancedBufferGeometry){const We=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Sa=Math.min(K.instanceCount,We);it.renderInstances(ct,Ot,Sa)}else it.render(ct,Ot)},this.compile=function(S,O){function K(B,Y,Se){B.transparent===!0&&B.side===ai&&B.forceSinglePass===!1?(B.side=Lt,B.needsUpdate=!0,hs(B,Y,Se),B.side=Wi,B.needsUpdate=!0,hs(B,Y,Se),B.side=ai):hs(B,Y,Se)}f=re.get(S),f.init(),w.push(f),S.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(y._useLegacyLights),S.traverse(function(B){const Y=B.material;if(Y)if(Array.isArray(Y))for(let Se=0;Se<Y.length;Se++){const Le=Y[Se];K(Le,S,B)}else K(Y,S,B)}),w.pop(),f=null};let Je=null;function ei(S){Je&&Je(S)}function $e(){yt.stop()}function ti(){yt.start()}const yt=new Pd;yt.setAnimationLoop(ei),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(S){Je=S,P.setAnimationLoop(S),S===null?yt.stop():yt.start()},P.addEventListener("sessionstart",$e),P.addEventListener("sessionend",ti),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,O,C),f=re.get(S,w.length),f.init(),w.push(f),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),me.setFromProjectionMatrix(Re),we=this.localClippingEnabled,be=xe.init(this.clippingPlanes,we),_=ie.get(S,p.length),_.init(),p.push(_),Ll(S,O,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Q,he),this.info.render.frame++,be===!0&&xe.beginShadows();const K=f.state.shadowsArray;if(de.render(K,S,O),be===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(_,S),f.setupLights(y._useLegacyLights),O.isArrayCamera){const B=O.cameras;for(let Y=0,Se=B.length;Y<Se;Y++){const Le=B[Y];Pl(_,S,Le,Le.viewport)}}else Pl(_,S,O);C!==null&&(q.updateMultisampleRenderTarget(C),q.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(y,S,O),ge.resetDefaultState(),ee=-1,E=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ll(S,O,K,B){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||me.intersectsSprite(S)){B&&ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Re);const Se=g.update(S),Le=S.material;Le.visible&&_.push(S,Se,Le,K,ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||me.intersectsObject(S))){const Se=g.update(S),Le=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ze.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ze.copy(Se.boundingSphere.center)),ze.applyMatrix4(S.matrixWorld).applyMatrix4(Re)),Array.isArray(Le)){const Pe=Se.groups;for(let De=0,Ve=Pe.length;De<Ve;De++){const Oe=Pe[De],Fe=Le[Oe.materialIndex];Fe&&Fe.visible&&_.push(S,Se,Fe,K,ze.z,Oe)}}else Le.visible&&_.push(S,Se,Le,K,ze.z,null)}}const Y=S.children;for(let Se=0,Le=Y.length;Se<Le;Se++)Ll(Y[Se],O,K,B)}function Pl(S,O,K,B){const Y=S.opaque,Se=S.transmissive,Le=S.transparent;f.setupLightsView(K),be===!0&&xe.setGlobalState(y.clippingPlanes,K),Se.length>0&&Hd(Y,Se,O,K),B&&z.viewport(b.copy(B)),Y.length>0&&cs(Y,O,K),Se.length>0&&cs(Se,O,K),Le.length>0&&cs(Le,O,K),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Hd(S,O,K,B){const Y=G.isWebGL2;Te===null&&(Te=new hr(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?ts:ki,minFilter:es,samples:Y?4:0})),y.getDrawingBufferSize(Ae),Y?Te.setSize(Ae.x,Ae.y):Te.setSize(ra(Ae.x),ra(Ae.y));const Se=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(X),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear();const Le=y.toneMapping;y.toneMapping=Gi,cs(S,K,B),q.updateMultisampleRenderTarget(Te),q.updateRenderTargetMipmap(Te);let Pe=!1;for(let De=0,Ve=O.length;De<Ve;De++){const Oe=O[De],Fe=Oe.object,ct=Oe.geometry,tt=Oe.material,Ot=Oe.group;if(tt.side===ai&&Fe.layers.test(B.layers)){const di=tt.side;tt.side=Lt,tt.needsUpdate=!0,Ul(Fe,K,B,ct,tt,Ot),tt.side=di,tt.needsUpdate=!0,Pe=!0}}Pe===!0&&(q.updateMultisampleRenderTarget(Te),q.updateRenderTargetMipmap(Te)),y.setRenderTarget(Se),y.setClearColor(X,j),y.toneMapping=Le}function cs(S,O,K){const B=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,Se=S.length;Y<Se;Y++){const Le=S[Y],Pe=Le.object,De=Le.geometry,Ve=B===null?Le.material:B,Oe=Le.group;Pe.layers.test(K.layers)&&Ul(Pe,O,K,De,Ve,Oe)}}function Ul(S,O,K,B,Y,Se){S.onBeforeRender(y,O,K,B,Y,Se),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(y,O,K,B,S,Se),Y.transparent===!0&&Y.side===ai&&Y.forceSinglePass===!1?(Y.side=Lt,Y.needsUpdate=!0,y.renderBufferDirect(K,O,B,Y,S,Se),Y.side=Wi,Y.needsUpdate=!0,y.renderBufferDirect(K,O,B,Y,S,Se),Y.side=ai):y.renderBufferDirect(K,O,B,Y,S,Se),S.onAfterRender(y,O,K,B,Y,Se)}function hs(S,O,K){O.isScene!==!0&&(O=et);const B=ae.get(S),Y=f.state.lights,Se=f.state.shadowsArray,Le=Y.state.version,Pe=U.getParameters(S,Y.state,Se,O,K),De=U.getProgramCacheKey(Pe);let Ve=B.programs;B.environment=S.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(S.isMeshStandardMaterial?ne:se).get(S.envMap||B.environment),Ve===void 0&&(S.addEventListener("dispose",ve),Ve=new Map,B.programs=Ve);let Oe=Ve.get(De);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===Le)return Dl(S,Pe),Oe}else Pe.uniforms=U.getUniforms(S),S.onBuild(K,Pe,y),S.onBeforeCompile(Pe,y),Oe=U.acquireProgram(Pe,De),Ve.set(De,Oe),B.uniforms=Pe.uniforms;const Fe=B.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=xe.uniform),Dl(S,Pe),B.needsLights=Vd(S),B.lightsStateVersion=Le,B.needsLights&&(Fe.ambientLightColor.value=Y.state.ambient,Fe.lightProbe.value=Y.state.probe,Fe.directionalLights.value=Y.state.directional,Fe.directionalLightShadows.value=Y.state.directionalShadow,Fe.spotLights.value=Y.state.spot,Fe.spotLightShadows.value=Y.state.spotShadow,Fe.rectAreaLights.value=Y.state.rectArea,Fe.ltc_1.value=Y.state.rectAreaLTC1,Fe.ltc_2.value=Y.state.rectAreaLTC2,Fe.pointLights.value=Y.state.point,Fe.pointLightShadows.value=Y.state.pointShadow,Fe.hemisphereLights.value=Y.state.hemi,Fe.directionalShadowMap.value=Y.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Fe.spotShadowMap.value=Y.state.spotShadowMap,Fe.spotLightMatrix.value=Y.state.spotLightMatrix,Fe.spotLightMap.value=Y.state.spotLightMap,Fe.pointShadowMap.value=Y.state.pointShadowMap,Fe.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ct=Oe.getUniforms(),tt=Js.seqWithValue(ct.seq,Fe);return B.currentProgram=Oe,B.uniformsList=tt,Oe}function Dl(S,O){const K=ae.get(S);K.outputColorSpace=O.outputColorSpace,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Gd(S,O,K,B,Y){O.isScene!==!0&&(O=et),q.resetTextureUnits();const Se=O.fog,Le=B.isMeshStandardMaterial?O.environment:null,Pe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hi,De=(B.isMeshStandardMaterial?ne:se).get(B.envMap||Le),Ve=B.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Oe=!!K.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Fe=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,tt=!!K.morphAttributes.color;let Ot=Gi;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=y.toneMapping);const di=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,it=di!==void 0?di.length:0,We=ae.get(B),Sa=f.state.lights;if(be===!0&&(we===!0||S!==E)){const Dt=S===E&&B.id===ee;xe.setState(B,S,Dt)}let ba=!1;B.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Sa.state.version||We.outputColorSpace!==Pe||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||We.envMap!==De||B.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==xe.numPlanes||We.numIntersection!==xe.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Oe||We.morphTargets!==Fe||We.morphNormals!==ct||We.morphColors!==tt||We.toneMapping!==Ot||G.isWebGL2===!0&&We.morphTargetsCount!==it)&&(ba=!0):(ba=!0,We.__version=B.version);let Xi=We.currentProgram;ba===!0&&(Xi=hs(B,O,Y));let Nl=!1,hn=!1,Ta=!1;const Et=Xi.getUniforms(),ji=We.uniforms;if(z.useProgram(Xi.program)&&(Nl=!0,hn=!0,Ta=!0),B.id!==ee&&(ee=B.id,hn=!0),Nl||E!==S){Et.setValue(v,"projectionMatrix",S.projectionMatrix),Et.setValue(v,"viewMatrix",S.matrixWorldInverse);const Dt=Et.map.cameraPosition;Dt!==void 0&&Dt.setValue(v,ze.setFromMatrixPosition(S.matrixWorld)),G.logarithmicDepthBuffer&&Et.setValue(v,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(v,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,hn=!0,Ta=!0)}if(Y.isSkinnedMesh){Et.setOptional(v,Y,"bindMatrix"),Et.setOptional(v,Y,"bindMatrixInverse");const Dt=Y.skeleton;Dt&&(G.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Et.setValue(v,"boneTexture",Dt.boneTexture,q),Et.setValue(v,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wa=K.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&G.isWebGL2===!0)&&A.update(Y,K,Xi),(hn||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,Et.setValue(v,"receiveShadow",Y.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ji.envMap.value=De,ji.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),hn&&(Et.setValue(v,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&kd(ji,Ta),Se&&B.fog===!0&&Z.refreshFogUniforms(ji,Se),Z.refreshMaterialUniforms(ji,B,W,te,Te),Js.upload(v,We.uniformsList,ji,q)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Js.upload(v,We.uniformsList,ji,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(v,"center",Y.center),Et.setValue(v,"modelViewMatrix",Y.modelViewMatrix),Et.setValue(v,"normalMatrix",Y.normalMatrix),Et.setValue(v,"modelMatrix",Y.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Dt=B.uniformsGroups;for(let Aa=0,Wd=Dt.length;Aa<Wd;Aa++)if(G.isWebGL2){const Il=Dt[Aa];Ce.update(Il,Xi),Ce.bind(Il,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function kd(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Vd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,O,K){ae.get(S.texture).__webglTexture=O,ae.get(S.depthTexture).__webglTexture=K;const B=ae.get(S);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=K===void 0,B.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const K=ae.get(S);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,K=0){C=S,R=O,D=K;let B=!0,Y=null,Se=!1,Le=!1;if(S){const Pe=ae.get(S);Pe.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(v.FRAMEBUFFER,null),B=!1):Pe.__webglFramebuffer===void 0?q.setupRenderTarget(S):Pe.__hasExternalTextures&&q.rebindTextures(S,ae.get(S.texture).__webglTexture,ae.get(S.depthTexture).__webglTexture);const De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Le=!0);const Ve=ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[O])?Y=Ve[O][K]:Y=Ve[O],Se=!0):G.isWebGL2&&S.samples>0&&q.useMultisampledRTT(S)===!1?Y=ae.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[K]:Y=Ve,b.copy(S.viewport),oe.copy(S.scissor),ue=S.scissorTest}else b.copy(ce).multiplyScalar(W).floor(),oe.copy(F).multiplyScalar(W).floor(),ue=J;if(z.bindFramebuffer(v.FRAMEBUFFER,Y)&&G.drawBuffers&&B&&z.drawBuffers(S,Y),z.viewport(b),z.scissor(oe),z.setScissorTest(ue),Se){const Pe=ae.get(S.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,K)}else if(Le){const Pe=ae.get(S.texture),De=O||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Pe.__webglTexture,K||0,De)}ee=-1},this.readRenderTargetPixels=function(S,O,K,B,Y,Se,Le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe){z.bindFramebuffer(v.FRAMEBUFFER,Pe);try{const De=S.texture,Ve=De.format,Oe=De.type;if(Ve!==Jt&&pe.convert(Ve)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Oe===ts&&(N.has("EXT_color_buffer_half_float")||G.isWebGL2&&N.has("EXT_color_buffer_float"));if(Oe!==ki&&pe.convert(Oe)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Oi&&(G.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-B&&K>=0&&K<=S.height-Y&&v.readPixels(O,K,B,Y,pe.convert(Ve),pe.convert(Oe),Se)}finally{const De=C!==null?ae.get(C).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(S,O,K=0){const B=Math.pow(2,-K),Y=Math.floor(O.image.width*B),Se=Math.floor(O.image.height*B);q.setTexture2D(O,0),v.copyTexSubImage2D(v.TEXTURE_2D,K,0,0,S.x,S.y,Y,Se),z.unbindTexture()},this.copyTextureToTexture=function(S,O,K,B=0){const Y=O.image.width,Se=O.image.height,Le=pe.convert(K.format),Pe=pe.convert(K.type);q.setTexture2D(K,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,K.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,K.unpackAlignment),O.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,B,S.x,S.y,Y,Se,Le,Pe,O.image.data):O.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,B,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Le,O.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,B,S.x,S.y,Le,Pe,O.image),B===0&&K.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(S,O,K,B,Y=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=S.max.x-S.min.x+1,Le=S.max.y-S.min.y+1,Pe=S.max.z-S.min.z+1,De=pe.convert(B.format),Ve=pe.convert(B.type);let Oe;if(B.isData3DTexture)q.setTexture3D(B,0),Oe=v.TEXTURE_3D;else if(B.isDataArrayTexture)q.setTexture2DArray(B,0),Oe=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,B.unpackAlignment);const Fe=v.getParameter(v.UNPACK_ROW_LENGTH),ct=v.getParameter(v.UNPACK_IMAGE_HEIGHT),tt=v.getParameter(v.UNPACK_SKIP_PIXELS),Ot=v.getParameter(v.UNPACK_SKIP_ROWS),di=v.getParameter(v.UNPACK_SKIP_IMAGES),it=K.isCompressedTexture?K.mipmaps[0]:K.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,it.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,it.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,S.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,S.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,S.min.z),K.isDataTexture||K.isData3DTexture?v.texSubImage3D(Oe,Y,O.x,O.y,O.z,Se,Le,Pe,De,Ve,it.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),v.compressedTexSubImage3D(Oe,Y,O.x,O.y,O.z,Se,Le,Pe,De,it.data)):v.texSubImage3D(Oe,Y,O.x,O.y,O.z,Se,Le,Pe,De,Ve,it),v.pixelStorei(v.UNPACK_ROW_LENGTH,Fe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ct),v.pixelStorei(v.UNPACK_SKIP_PIXELS,tt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Ot),v.pixelStorei(v.UNPACK_SKIP_IMAGES,di),Y===0&&B.generateMipmaps&&v.generateMipmap(Oe),z.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),z.unbindTexture()},this.resetState=function(){R=0,D=0,C=null,z.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?lr:xd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lr?Qe:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Py extends Fd{}Py.prototype.isWebGL1Renderer=!0;class Rl{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=r}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Uy extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bd extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nh=new I,Ih=new I,Oh=new nt,uo=new xa,Vs=new _a;class Dy extends ft{constructor(e=new Ti,t=new Bd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,s=t.count;n<s;n++)Nh.fromBufferAttribute(t,n-1),Ih.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=Nh.distanceTo(Ih);e.setAttribute("lineDistance",new Gt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vs.copy(r.boundingSphere),Vs.applyMatrix4(n),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;Oh.copy(n).invert(),uo.copy(e.ray).applyMatrix4(Oh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,d=new I,u=new I,m=this.isLineSegments?2:1,x=r.index,_=r.attributes.position;if(x!==null){const f=Math.max(0,o.start),p=Math.min(x.count,o.start+o.count);for(let w=f,y=p-1;w<y;w+=m){const T=x.getX(w),R=x.getX(w+1);if(c.fromBufferAttribute(_,T),h.fromBufferAttribute(_,R),uo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),p=Math.min(_.count,o.start+o.count);for(let w=f,y=p-1;w<y;w+=m){if(c.fromBufferAttribute(_,w),h.fromBufferAttribute(_,w+1),uo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}const Fh=new I,Bh=new I;class Ny extends Dy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,s=t.count;n<s;n+=2)Fh.fromBufferAttribute(t,n),Bh.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+Fh.distanceTo(Bh);e.setAttribute("lineDistance",new Gt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Iy extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const zh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Oy{constructor(e,t,r){const n=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}}const Fy=new Oy;class Cl{constructor(e){this.manager=e!==void 0?e:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,s){r.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";class By extends Cl{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=rs("img");function l(){h(),zh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class zy extends Cl{constructor(e){super(e)}load(e,t,r,n){const s=new Pt,o=new By(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},r,n),s}}class zd extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const po=new nt,Hh=new I,Gh=new I;class Hy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gy extends Hy{constructor(){super(new Ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ky extends zd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Gy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vy extends zd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kh(){return(typeof performance>"u"?Date:performance).now()}class Xy{constructor(e,t,r=0,n=1/0){this.ray=new xa(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return Ho(e,this,r,t),r.sort(Vh),r}intersectObjects(e,t=!0,r=[]){for(let n=0,s=e.length;n<s;n++)Ho(e[n],this,r,t);return r.sort(Vh),r}}function Vh(i,e){return i.distance-e.distance}function Ho(i,e,t,r){if(i.layers.test(e.layers)&&i.raycast(e,t),r===!0){const n=i.children;for(let s=0,o=n.length;s<o;s++)Ho(n[s],e,t,!0)}}class Wh{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jy extends Ny{constructor(e=10,t=10,r=4473924,n=8947848){r=new ke(r),n=new ke(n);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,m=0,x=-a;u<=t;u++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const _=u===s?r:n;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new Ti;h.setAttribute("position",new Gt(l,3)),h.setAttribute("color",new Gt(c,3));const d=new Bd({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);const Xh={type:"change"},fo={type:"start"},jh={type:"end"},Ws=new xa,Yh=new Ni,Yy=Math.cos(70*Ev.DEG2RAD);class qy extends pr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",g),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Xh),r.update(),s=n.NONE},this.update=function(){const A=new I,$=new ur().setFromUnitVectors(e.up,new I(0,1,0)),Ee=$.clone().invert(),pe=new I,ge=new ur,Ce=new I,je=2*Math.PI;return function(P=null){const Me=r.object.position;A.copy(Me).sub(r.target),A.applyQuaternion($),a.setFromVector3(A),r.autoRotate&&s===n.NONE&&oe(E(P)),r.enableDamping?(a.theta+=l.theta*r.dampingFactor,a.phi+=l.phi*r.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let H=r.minAzimuthAngle,fe=r.maxAzimuthAngle;isFinite(H)&&isFinite(fe)&&(H<-Math.PI?H+=je:H>Math.PI&&(H-=je),fe<-Math.PI?fe+=je:fe>Math.PI&&(fe-=je),H<=fe?a.theta=Math.max(H,Math.min(fe,a.theta)):a.theta=a.theta>(H+fe)/2?Math.max(H,a.theta):Math.min(fe,a.theta)),a.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,a.phi)),a.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(h,r.dampingFactor):r.target.add(h),r.zoomToCursor&&D||r.object.isOrthographicCamera?a.radius=he(a.radius):a.radius=he(a.radius*c),A.setFromSpherical(a),A.applyQuaternion(Ee),Me.copy(r.target).add(A),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,h.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ve=!1;if(r.zoomToCursor&&D){let Ye=null;if(r.object.isPerspectiveCamera){const qe=A.length();Ye=he(qe*c);const Je=qe-Ye;r.object.position.addScaledVector(T,Je),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const qe=new I(R.x,R.y,0);qe.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),ve=!0;const Je=new I(R.x,R.y,0);Je.unproject(r.object),r.object.position.sub(Je).add(qe),r.object.updateMatrixWorld(),Ye=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Ye!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Ye).add(r.object.position):(Ws.origin.copy(r.object.position),Ws.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Ws.direction))<Yy?e.lookAt(r.target):(Yh.setFromNormalAndCoplanarPoint(r.object.up,r.target),Ws.intersectPlane(Yh,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),ve=!0);return c=1,D=!1,ve||pe.distanceToSquared(r.object.position)>o||8*(1-ge.dot(r.object.quaternion))>o||Ce.distanceToSquared(r.target)>0?(r.dispatchEvent(Xh),pe.copy(r.object.position),ge.copy(r.object.quaternion),Ce.copy(r.target),ve=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",ie),r.domElement.removeEventListener("pointerdown",ae),r.domElement.removeEventListener("pointercancel",se),r.domElement.removeEventListener("wheel",M),r.domElement.removeEventListener("pointermove",q),r.domElement.removeEventListener("pointerup",se),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",g),r._domElementKeyEvents=null)};const r=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const o=1e-6,a=new Wh,l=new Wh;let c=1;const h=new I,d=new Ne,u=new Ne,m=new Ne,x=new Ne,_=new Ne,f=new Ne,p=new Ne,w=new Ne,y=new Ne,T=new I,R=new Ne;let D=!1;const C=[],ee={};function E(A){return A!==null?2*Math.PI/60*r.autoRotateSpeed*A:2*Math.PI/60/60*r.autoRotateSpeed}function b(){return Math.pow(.95,r.zoomSpeed)}function oe(A){l.theta-=A}function ue(A){l.phi-=A}const X=function(){const A=new I;return function($,Ee){A.setFromMatrixColumn(Ee,0),A.multiplyScalar(-$),h.add(A)}}(),j=function(){const A=new I;return function($,Ee){r.screenSpacePanning===!0?A.setFromMatrixColumn(Ee,1):(A.setFromMatrixColumn(Ee,0),A.crossVectors(r.object.up,A)),A.multiplyScalar($),h.add(A)}}(),V=function(){const A=new I;return function($,Ee){const pe=r.domElement;if(r.object.isPerspectiveCamera){const ge=r.object.position;A.copy(ge).sub(r.target);let Ce=A.length();Ce*=Math.tan(r.object.fov/2*Math.PI/180),X(2*$*Ce/pe.clientHeight,r.object.matrix),j(2*Ee*Ce/pe.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(X($*(r.object.right-r.object.left)/r.object.zoom/pe.clientWidth,r.object.matrix),j(Ee*(r.object.top-r.object.bottom)/r.object.zoom/pe.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function te(A){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function W(A){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Q(A){if(!r.zoomToCursor)return;D=!0;const $=r.domElement.getBoundingClientRect(),Ee=A.clientX-$.left,pe=A.clientY-$.top,ge=$.width,Ce=$.height;R.x=Ee/ge*2-1,R.y=-(pe/Ce)*2+1,T.set(R.x,R.y,1).unproject(r.object).sub(r.object.position).normalize()}function he(A){return Math.max(r.minDistance,Math.min(r.maxDistance,A))}function ce(A){d.set(A.clientX,A.clientY)}function F(A){Q(A),p.set(A.clientX,A.clientY)}function J(A){x.set(A.clientX,A.clientY)}function me(A){u.set(A.clientX,A.clientY),m.subVectors(u,d).multiplyScalar(r.rotateSpeed);const $=r.domElement;oe(2*Math.PI*m.x/$.clientHeight),ue(2*Math.PI*m.y/$.clientHeight),d.copy(u),r.update()}function be(A){w.set(A.clientX,A.clientY),y.subVectors(w,p),y.y>0?te(b()):y.y<0&&W(b()),p.copy(w),r.update()}function we(A){_.set(A.clientX,A.clientY),f.subVectors(_,x).multiplyScalar(r.panSpeed),V(f.x,f.y),x.copy(_),r.update()}function Te(A){Q(A),A.deltaY<0?W(b()):A.deltaY>0&&te(b()),r.update()}function Re(A){let $=!1;switch(A.code){case r.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?ue(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,r.keyPanSpeed),$=!0;break;case r.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?ue(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(0,-r.keyPanSpeed),$=!0;break;case r.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?oe(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(r.keyPanSpeed,0),$=!0;break;case r.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?oe(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):V(-r.keyPanSpeed,0),$=!0;break}$&&(A.preventDefault(),r.update())}function Ae(){if(C.length===1)d.set(C[0].pageX,C[0].pageY);else{const A=.5*(C[0].pageX+C[1].pageX),$=.5*(C[0].pageY+C[1].pageY);d.set(A,$)}}function ze(){if(C.length===1)x.set(C[0].pageX,C[0].pageY);else{const A=.5*(C[0].pageX+C[1].pageX),$=.5*(C[0].pageY+C[1].pageY);x.set(A,$)}}function et(){const A=C[0].pageX-C[1].pageX,$=C[0].pageY-C[1].pageY,Ee=Math.sqrt(A*A+$*$);p.set(0,Ee)}function Ue(){r.enableZoom&&et(),r.enablePan&&ze()}function v(){r.enableZoom&&et(),r.enableRotate&&Ae()}function L(A){if(C.length==1)u.set(A.pageX,A.pageY);else{const Ee=k(A),pe=.5*(A.pageX+Ee.x),ge=.5*(A.pageY+Ee.y);u.set(pe,ge)}m.subVectors(u,d).multiplyScalar(r.rotateSpeed);const $=r.domElement;oe(2*Math.PI*m.x/$.clientHeight),ue(2*Math.PI*m.y/$.clientHeight),d.copy(u)}function N(A){if(C.length===1)_.set(A.pageX,A.pageY);else{const $=k(A),Ee=.5*(A.pageX+$.x),pe=.5*(A.pageY+$.y);_.set(Ee,pe)}f.subVectors(_,x).multiplyScalar(r.panSpeed),V(f.x,f.y),x.copy(_)}function G(A){const $=k(A),Ee=A.pageX-$.x,pe=A.pageY-$.y,ge=Math.sqrt(Ee*Ee+pe*pe);w.set(0,ge),y.set(0,Math.pow(w.y/p.y,r.zoomSpeed)),te(y.y),p.copy(w)}function z(A){r.enableZoom&&G(A),r.enablePan&&N(A)}function le(A){r.enableZoom&&G(A),r.enableRotate&&L(A)}function ae(A){r.enabled!==!1&&(C.length===0&&(r.domElement.setPointerCapture(A.pointerId),r.domElement.addEventListener("pointermove",q),r.domElement.addEventListener("pointerup",se)),re(A),A.pointerType==="touch"?U(A):ne(A))}function q(A){r.enabled!==!1&&(A.pointerType==="touch"?Z(A):_e(A))}function se(A){xe(A),C.length===0&&(r.domElement.releasePointerCapture(A.pointerId),r.domElement.removeEventListener("pointermove",q),r.domElement.removeEventListener("pointerup",se)),r.dispatchEvent(jh),s=n.NONE}function ne(A){let $;switch(A.button){case 0:$=r.mouseButtons.LEFT;break;case 1:$=r.mouseButtons.MIDDLE;break;case 2:$=r.mouseButtons.RIGHT;break;default:$=-1}switch($){case xr.DOLLY:if(r.enableZoom===!1)return;F(A),s=n.DOLLY;break;case xr.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(r.enablePan===!1)return;J(A),s=n.PAN}else{if(r.enableRotate===!1)return;ce(A),s=n.ROTATE}break;case xr.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(r.enableRotate===!1)return;ce(A),s=n.ROTATE}else{if(r.enablePan===!1)return;J(A),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&r.dispatchEvent(fo)}function _e(A){switch(s){case n.ROTATE:if(r.enableRotate===!1)return;me(A);break;case n.DOLLY:if(r.enableZoom===!1)return;be(A);break;case n.PAN:if(r.enablePan===!1)return;we(A);break}}function M(A){r.enabled===!1||r.enableZoom===!1||s!==n.NONE||(A.preventDefault(),r.dispatchEvent(fo),Te(A),r.dispatchEvent(jh))}function g(A){r.enabled===!1||r.enablePan===!1||Re(A)}function U(A){switch(de(A),C.length){case 1:switch(r.touches.ONE){case Mr.ROTATE:if(r.enableRotate===!1)return;Ae(),s=n.TOUCH_ROTATE;break;case Mr.PAN:if(r.enablePan===!1)return;ze(),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(r.touches.TWO){case Mr.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Ue(),s=n.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;v(),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&r.dispatchEvent(fo)}function Z(A){switch(de(A),s){case n.TOUCH_ROTATE:if(r.enableRotate===!1)return;L(A),r.update();break;case n.TOUCH_PAN:if(r.enablePan===!1)return;N(A),r.update();break;case n.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;z(A),r.update();break;case n.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;le(A),r.update();break;default:s=n.NONE}}function ie(A){r.enabled!==!1&&A.preventDefault()}function re(A){C.push(A)}function xe(A){delete ee[A.pointerId];for(let $=0;$<C.length;$++)if(C[$].pointerId==A.pointerId){C.splice($,1);return}}function de(A){let $=ee[A.pointerId];$===void 0&&($=new Ne,ee[A.pointerId]=$),$.set(A.pageX,A.pageY)}function k(A){const $=A.pointerId===C[0].pointerId?C[1]:C[0];return ee[$.pointerId]}r.domElement.addEventListener("contextmenu",ie),r.domElement.addEventListener("pointerdown",ae),r.domElement.addEventListener("pointercancel",se),r.domElement.addEventListener("wheel",M,{passive:!1}),this.update()}}class Ky{constructor(e,t){this.controls=new qy(e,t)}init(){return this.controls.enabled=!0,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=1,this.controls.enableDamping=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls}tick(e){this.controls.update()}}class Jy{constructor(e){this.pos=e}init(){return this.camera=new zt(80,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.set(this.pos.x,this.pos.y,this.pos.z),this.camera.lookAt(0,0,0),this.camera}tick(e){}}class Zy{constructor(){}init(e,t,r){const n=new ky(t,1.5);n.position.set(0,0,5),e.add(n);const s=new Vy(r,.7);s.position.set(-2,0,5),e.add(s)}tick(e){}}class Qy{constructor(e,t,r){this.clock=new Wy,this.camera=e,this.scene=t,this.renderer=r,this.updatables=[]}addToUpdate(e){this.updatables.push(e)}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(e){e||(e=this.clock.getDelta());for(const t of this.updatables)t.tick(e)}}class $y{constructor(){this.scene=new Uy}init(e){return this.scene.background=new ke(e),this.scene.fog=new Rl(e,50,90),this.scene}addMesh(e){if(!e){console.log("Mesh is null or undifined and will not be added to the scene!");return}if(e instanceof Rt){this.scene.add(e);return}console.log("This parameter is not a Mesh and will not be added to the scene!")}}class eE{constructor(e,t){this.setSize(e,t),window.addEventListener("resize",()=>{this.setSize(e,t)})}setSize(e,t){e.aspect=window.innerWidth/window.innerHeight*.5,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)}}class tE{constructor(e,t){this.size=e,this.divisions=t}init(e){this.gridHelper=new jy(this.size,this.divisions),e.add(this.gridHelper)}}class iE extends Rt{constructor(e,t,r,n){super(),this.name=e,this.dim=t,this.seg=r,this.pos=n}initMesh(e,t){this.geometry=new ls(this.dim.x,this.dim.y,this.seg.x,this.seg.y),this.geometry.rotateX(-Math.PI/2),this.material=new ya({color:t||new ke(16711680),visible:e}),this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}class rE extends Rt{constructor(e,t,r,n){super(),this.name=e,this.dim=t,this.seg=r,this.pos=n}initMesh(e,t){const r=new zy,n=e+"/"+t,s=r.load(new URL("./../../../textures/terrains/"+n+"/ao.png",import.meta.url).toString()),o=r.load(new URL("./../../../textures/terrains/"+n+"/bump.png",import.meta.url).toString()),a=r.load(new URL("./../../../textures/terrains/"+n+"/normal.png",import.meta.url).toString()),l=r.load(new URL("./../../../textures/terrains/"+n+"/displacement.png",import.meta.url).toString()),c=r.load(new URL("./../../../textures/terrains/"+n+"/diffuse.png",import.meta.url).toString());this.geometry=new ln(this.dim.x,this.dim.y,this.dim.z,this.seg.x,this.seg.y,this.seg.z);const h=this.geometry.attributes.position,d=this.geometry.attributes.normal,u=[];for(let m=0;m<h.count;m++){u.push(Math.sign(h.getY(m)),Math.sign(d.getY(m)));const x=(h.getX(m)+this.dim.x*.5)/this.dim.x,_=1-(h.getZ(m)+this.dim.z*.5)/this.dim.z;this.geometry.attributes.uv.setXY(m,x,_)}this.geometry.setAttribute("enableDisp",new Gt(u,2)),this.material=new Iy({aoMap:s,normalMap:a,bumpMap:o,bumpScale:.5,displacementMap:l,displacementScale:1.5,map:c,side:ai}),this.material.onBeforeCompile=m=>{m.vertexShader=`
            attribute vec2 enableDisp;
            varying vec2 vUv; 
            varying vec3 mNormal;
            varying vec3 vPos;
            ${m.vertexShader}
          `.replace("#include <displacementmap_vertex>",`
            #ifdef USE_DISPLACEMENTMAP

            vUv = uv;

              if (enableDisp.x > 0.) {
                
                vec3 vUp = vec3(0, 1, 0);
  
                vec3 v0 = normalize( vUp ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
                transformed += v0;
                
                if(enableDisp.y > 0.) {
                  float txl = 1. / 256.;
  
                  vec3 v1 = normalize( vUp ) * ( texture2D( displacementMap, vUv + vec2(txl, 0.) ).x * displacementScale + displacementBias );
                  v1.xz = vec2(txl, 0.) * 20.;
                  vec3 v2 = normalize( vUp ) * ( texture2D( displacementMap, vUv + vec2(0., txl) ).x * displacementScale + displacementBias );
                  v2.xz = -vec2(0., txl) * 20.;

                  vec3 n = normalize(cross(v1 - v0, v2 - v0));
                  mNormal = n;
                  vNormal = normalMatrix * n;

                  vPos = transformed;
                }              
              }
            #endif
            `),m.fragmentShader=`

        varying vec2 vUv;
        varying vec3 mNormal;
        varying vec3 vPos;

        vec3 bbMin = vec3(.1, .1, .1);
        vec3 bbMax = vec3(.3, .3, .3);

        vec3 color1 = vec3(1.000,0.833,0.224); // yellow
        vec3 color2 = vec3(0.01, 0.03, 0.01); // green
        vec3 color3 = vec3(0.0, 0.0, 0.0); // black

        ${m.fragmentShader}
      `.replace("#include <dithering_fragment>",`#include <dithering_fragment>

        #ifdef GL_ES
        precision mediump float;
        #endif

        vec2 uv = (vUv - .5) * vec2(.6, .6);
        vec3 color = mix(color1, color2, length(uv));
         
        if (length(mNormal) < 0.001) {
            gl_FragColor = vec4(color, 1.);  
          } 
        `)},this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}class nE extends Rt{constructor(e,t,r,n){super(),this.name=e,this.dim=t,this.seg=r,this.pos=n}initMesh(e,t){this.geometry=new ls(this.dim.x,this.dim.z),this.geometry.rotateX(-Math.PI/2),this.material=new ya({color:e,opacity:t,transparent:!0}),this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}var Go;(i=>{i.createEventHub=()=>({hub:Object.create(null),fire(e,t){(this.hub[e]||[]).forEach(r=>r(t))},on(e,t){this.hub[e]||(this.hub[e]=[]),this.hub[e].push(t)},off(e,t){const r=(this.hub[e]||[]).findIndex(n=>n===t);r>-1&&this.hub[e].splice(r,1),this.hub[e].length===0&&delete this.hub[e]}})})(Go||(Go={}));const mo=20,sE=40,Gn=2,qh=Gn*.5,Kh=new I(2,.5,2),aE=0,oE=.25,na=Go.createEventHub();class lE{constructor(e){this.meshArray=[],this.isShiftDown=!1,this.sceneController=new $y,this.scene=this.sceneController.init(new ke("#17181b")),this.renderer=new Fd({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.cameraController=new Jy(new I(0,15,15)),this.camera=this.cameraController.init(),this.controlsController=new Ky(this.camera,e),this.controlsController.init(),new eE(this.camera,this.renderer),new Zy().init(this.scene,new ke(16777215),new ke(5437322)),this.loopController=new Qy(this.camera,this.scene,this.renderer),this.gridController=new tE(mo,sE),this.gridController.init(this.scene),this.raycaster=new Xy,this.pointer=new Ne,this.planeController=new iE("T-Plane",new Ne(mo,mo),new Ne(1,1),new I(0,0,0)),this.planeController.initMesh(!1),this.addObject(this.planeController),this.terrainGhost=new nE("T-Ghost",Kh,new I(50,1,50),new I(0,0,0)),this.terrainGhost.initMesh(new ke(16711680),.5),this.terrainGhost.mesh&&(this.sceneController.addMesh(this.terrainGhost.mesh),this.loopController.addToUpdate(this.terrainGhost)),this.init()}init(){this.addObject(this.controlsController),this.addObject(this.cameraController),document.addEventListener("keydown",e=>{this.onDocumentKeyDown(e)}),document.addEventListener("keyup",e=>{this.onDocumentKeyUp(e)}),na.on("spawnTerrain",()=>document.addEventListener("pointermove",e=>{this.onPointerMove(e)})),na.on("dropTerrain",e=>this.onPointerDown(e))}render(){this.renderer.render(this.scene,this.camera)}start(){this.loopController.start()}stop(){this.loopController.stop()}addObject(e){if(!e){console.log("Object is null or undifined and will not be added to the scene!");return}e.mesh&&(this.sceneController.addMesh(e.mesh),this.meshArray.push(e.mesh)),this.loopController.addToUpdate(e)}onPointerMove(e){console.log("OnPointerMove =>"),this.controlsController.controls.enabled=!1,this.pointer.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.meshArray,!1);if(t&&t.length>0){const r=t[0];this.terrainGhost&&this.terrainGhost.mesh&&r&&r.face&&(this.terrainGhost.mesh.position.copy(r.point).add(r.face.normal),this.terrainGhost.mesh.position.divideScalar(Gn).floor().multiplyScalar(Gn).addScalar(qh),this.terrainGhost.mesh.position.y=aE),this.render()}}onPointerDown(e){console.log("OnPointerDown =>"),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.meshArray,!1);if(t&&t.length>0){const r=t[0];if(this.isShiftDown)r.object&&r.object!==this.planeController.mesh&&(this.scene.remove(r.object),this.meshArray.splice(this.meshArray.indexOf(r.object),1));else{const n=new rE("T01",Kh,new I(50,1,50),new I(0,0,0));n.initMesh("mountain",e),n.mesh&&r&&r.face&&(n.mesh.position.copy(r.point).add(r.face.normal),n.mesh.position.divideScalar(Gn).floor().multiplyScalar(Gn).addScalar(qh),n.mesh.position.y=oE),this.addObject(n)}this.render()}this.controlsController.controls.enabled=!0,document.removeEventListener("pointermove",this.onPointerMove)}onDocumentKeyDown(e){switch(e.keyCode){case 16:this.isShiftDown=!0;break}}onDocumentKeyUp(e){switch(e.keyCode){case 16:this.isShiftDown=!1;break}}}const cE={class:"menu"},hE=pt("div",{class:"menu__title"},[pt("p",null,"Terrains")],-1),uE={id:"menu__resources",class:"menu__resources"},dE={class:"menu__resources--tile",tabindex:"1"},pE={class:"menu__resources--btn"},fE=["src"],mE={class:"menu__resources--tile",tabindex:"2"},gE={class:"menu__resources--btn"},vE=["src"],_E={class:"menu__resources--tile",tabindex:"3"},xE={class:"menu__resources--btn"},ME=["src"],yE={class:"menu__resources--tile",tabindex:"3"},EE={class:"menu__resources--btn"},SE=["src"],bE=yu({__name:"ResourceExplorer",setup(i){const e=new URL("/dist/assets/thumb-4f930de4.png",self.location).toString(),t=new URL("/dist/assets/thumb-e08c5e7d.png",self.location).toString(),r=new URL("/dist/assets/thumb-424cb668.png",self.location).toString();function n(){setTimeout(()=>{let s=new Kr(document.getElementById("menu__resources"),{draggable:"li.menu__resources--tile"});s.on("drag:start",o=>{na.fire("spawnTerrain","")}),s.on("drag:stop",o=>{const a=o.source;console.log("TILE ",a),na.fire("dropTerrain",a.tabIndex)})},500)}return n(),(s,o)=>(Du(),Of("div",cE,[hE,pt("ul",uE,[pt("li",dE,[pt("button",pE,[pt("img",{class:"menu__resources--img",title:"t1",src:Bn(e)},null,8,fE)])]),pt("li",mE,[pt("button",gE,[pt("img",{class:"menu__resources--img",title:"t2",src:Bn(t)},null,8,vE)])]),pt("li",_E,[pt("button",xE,[pt("img",{class:"menu__resources--img",title:"t3",src:Bn(r)},null,8,ME)])]),pt("li",yE,[pt("button",EE,[pt("img",{class:"menu__resources--img",title:"t3",src:Bn(r)},null,8,SE)])])])]))}}),TE=yu({__name:"App",setup(i){return(e,t)=>(Du(),Ff(bE))}});async function wE(){const i=document.getElementById("App");new lE(i).start()}Mm(TE).mount("#App");wE();
