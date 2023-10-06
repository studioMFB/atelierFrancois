(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();function Go(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const Je={},Gn=[],lr=()=>{},Xd=()=>!1,jd=/^on[^a-z]/,sa=r=>jd.test(r),Vo=r=>r.startsWith("onUpdate:"),dt=Object.assign,Wo=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},Yd=Object.prototype.hasOwnProperty,Xe=(r,e)=>Yd.call(r,e),Ne=Array.isArray,Gi=r=>aa(r)==="[object Map]",qd=r=>aa(r)==="[object Set]",ke=r=>typeof r=="function",mt=r=>typeof r=="string",Xo=r=>typeof r=="symbol",st=r=>r!==null&&typeof r=="object",Ku=r=>st(r)&&ke(r.then)&&ke(r.catch),Zd=Object.prototype.toString,aa=r=>Zd.call(r),Kd=r=>aa(r).slice(8,-1),Jd=r=>aa(r)==="[object Object]",jo=r=>mt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Xs=Go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},$d=/-(\w)/g,Yn=oa(r=>r.replace($d,(e,t)=>t?t.toUpperCase():"")),Qd=/\B([A-Z])/g,ti=oa(r=>r.replace(Qd,"-$1").toLowerCase()),Ju=oa(r=>r.charAt(0).toUpperCase()+r.slice(1)),Ra=oa(r=>r?`on${Ju(r)}`:""),Js=(r,e)=>!Object.is(r,e),Ca=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},$s=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},ep=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let Ol;const go=()=>Ol||(Ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yo(r){if(Ne(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=mt(n)?ip(n):Yo(n);if(i)for(const s in i)e[s]=i[s]}return e}else if(mt(r)||st(r))return r}const tp=/;(?![^(]*\))/g,rp=/:([^]+)/,np=/\/\*[^]*?\*\//g;function ip(r){const e={};return r.replace(np,"").split(tp).forEach(t=>{if(t){const n=t.split(rp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function qo(r){let e="";if(mt(r))e=r;else if(Ne(r))for(let t=0;t<r.length;t++){const n=qo(r[t]);n&&(e+=n+" ")}else if(st(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ap=Go(sp);function $u(r){return!!r||r===""}let jt;class op{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function lp(r,e=jt){e&&e.active&&e.effects.push(r)}function cp(){return jt}const Zo=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Qu=r=>(r.w&Vr)>0,eh=r=>(r.n&Vr)>0,up=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=Vr},hp=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Qu(i)&&!eh(i)?i.delete(r):e[t++]=i,i.w&=~Vr,i.n&=~Vr}e.length=t}},_o=new WeakMap;let Fi=0,Vr=1;const vo=30;let qt;const sn=Symbol(""),xo=Symbol("");class Ko{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,lp(this,n)}run(){if(!this.active)return this.fn();let e=qt,t=Fr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Fr=!0,Vr=1<<++Fi,Fi<=vo?up(this):Fl(this),this.fn()}finally{Fi<=vo&&hp(this),Vr=1<<--Fi,qt=this.parent,Fr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(Fl(this),this.onStop&&this.onStop(),this.active=!1)}}function Fl(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Fr=!0;const th=[];function ri(){th.push(Fr),Fr=!1}function ni(){const r=th.pop();Fr=r===void 0?!0:r}function Ut(r,e,t){if(Fr&&qt){let n=_o.get(r);n||_o.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=Zo()),rh(i)}}function rh(r,e){let t=!1;Fi<=vo?eh(r)||(r.n|=Vr,t=!Qu(r)):t=!r.has(qt),t&&(r.add(qt),qt.deps.push(r))}function Sr(r,e,t,n,i,s){const o=_o.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(r)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(r)?jo(t)&&a.push(o.get("length")):(a.push(o.get(sn)),Gi(r)&&a.push(o.get(xo)));break;case"delete":Ne(r)||(a.push(o.get(sn)),Gi(r)&&a.push(o.get(xo)));break;case"set":Gi(r)&&a.push(o.get(sn));break}if(a.length===1)a[0]&&yo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yo(Zo(l))}}function yo(r,e){const t=Ne(r)?r:[...r];for(const n of t)n.computed&&zl(n);for(const n of t)n.computed||zl(n)}function zl(r,e){(r!==qt||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const dp=Go("__proto__,__v_isRef,__isVue"),nh=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Xo)),pp=Jo(),fp=Jo(!1,!0),mp=Jo(!0),Hl=gp();function gp(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=Ze(this);for(let s=0,o=this.length;s<o;s++)Ut(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(Ze)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){ri();const n=Ze(this)[e].apply(this,t);return ni(),n}}),r}function _p(r){const e=Ze(this);return Ut(e,"has",r),e.hasOwnProperty(r)}function Jo(r=!1,e=!1){return function(t,n,i){if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&i===(r?e?Dp:lh:e?oh:ah).get(t))return t;const s=Ne(t);if(!r){if(s&&Xe(Hl,n))return Reflect.get(Hl,n,i);if(n==="hasOwnProperty")return _p}const o=Reflect.get(t,n,i);return(Xo(n)?nh.has(n):dp(n))||(r||Ut(t,"get",n),e)?o:At(o)?s&&jo(n)?o:o.value:st(o)?r?ch(o):el(o):o}}const vp=ih(),xp=ih(!0);function ih(r=!1){return function(e,t,n,i){let s=e[t];if(qi(s)&&At(s)&&!At(n))return!1;if(!r&&(!Mo(n)&&!qi(n)&&(s=Ze(s),n=Ze(n)),!Ne(e)&&At(s)&&!At(n)))return s.value=n,!0;const o=Ne(e)&&jo(t)?Number(t)<e.length:Xe(e,t),a=Reflect.set(e,t,n,i);return e===Ze(i)&&(o?Js(n,s)&&Sr(e,"set",t,n):Sr(e,"add",t,n)),a}}function yp(r,e){const t=Xe(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&Sr(r,"delete",e,void 0),n}function Mp(r,e){const t=Reflect.has(r,e);return(!Xo(e)||!nh.has(e))&&Ut(r,"has",e),t}function Ep(r){return Ut(r,"iterate",Ne(r)?"length":sn),Reflect.ownKeys(r)}const sh={get:pp,set:vp,deleteProperty:yp,has:Mp,ownKeys:Ep},Sp={get:mp,set(r,e){return!0},deleteProperty(r,e){return!0}},bp=dt({},sh,{get:fp,set:xp}),$o=r=>r,la=r=>Reflect.getPrototypeOf(r);function hs(r,e,t=!1,n=!1){r=r.__v_raw;const i=Ze(r),s=Ze(e);t||(e!==s&&Ut(i,"get",e),Ut(i,"get",s));const{has:o}=la(i),a=n?$o:t?nl:rl;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function ds(r,e=!1){const t=this.__v_raw,n=Ze(t),i=Ze(r);return e||(r!==i&&Ut(n,"has",r),Ut(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function ps(r,e=!1){return r=r.__v_raw,!e&&Ut(Ze(r),"iterate",sn),Reflect.get(r,"size",r)}function Bl(r){r=Ze(r);const e=Ze(this);return la(e).has.call(e,r)||(e.add(r),Sr(e,"add",r,r)),this}function kl(r,e){e=Ze(e);const t=Ze(this),{has:n,get:i}=la(t);let s=n.call(t,r);s||(r=Ze(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?Js(e,o)&&Sr(t,"set",r,e):Sr(t,"add",r,e),this}function Gl(r){const e=Ze(this),{has:t,get:n}=la(e);let i=t.call(e,r);i||(r=Ze(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&Sr(e,"delete",r,void 0),s}function Vl(){const r=Ze(this),e=r.size!==0,t=r.clear();return e&&Sr(r,"clear",void 0,void 0),t}function fs(r,e){return function(t,n){const i=this,s=i.__v_raw,o=Ze(s),a=e?$o:r?nl:rl;return!r&&Ut(o,"iterate",sn),s.forEach((l,c)=>t.call(n,a(l),a(c),i))}}function ms(r,e,t){return function(...n){const i=this.__v_raw,s=Ze(i),o=Gi(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,c=i[r](...n),u=t?$o:e?nl:rl;return!e&&Ut(s,"iterate",l?xo:sn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function wr(r){return function(...e){return r==="delete"?!1:this}}function Tp(){const r={get(i){return hs(this,i)},get size(){return ps(this)},has:ds,add:Bl,set:kl,delete:Gl,clear:Vl,forEach:fs(!1,!1)},e={get(i){return hs(this,i,!1,!0)},get size(){return ps(this)},has:ds,add:Bl,set:kl,delete:Gl,clear:Vl,forEach:fs(!1,!0)},t={get(i){return hs(this,i,!0)},get size(){return ps(this,!0)},has(i){return ds.call(this,i,!0)},add:wr("add"),set:wr("set"),delete:wr("delete"),clear:wr("clear"),forEach:fs(!0,!1)},n={get(i){return hs(this,i,!0,!0)},get size(){return ps(this,!0)},has(i){return ds.call(this,i,!0)},add:wr("add"),set:wr("set"),delete:wr("delete"),clear:wr("clear"),forEach:fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=ms(i,!1,!1),t[i]=ms(i,!0,!1),e[i]=ms(i,!1,!0),n[i]=ms(i,!0,!0)}),[r,t,e,n]}const[wp,Ap,Rp,Cp]=Tp();function Qo(r,e){const t=e?r?Cp:Rp:r?Ap:wp;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(Xe(t,i)&&i in n?t:n,i,s)}const Lp={get:Qo(!1,!1)},Pp={get:Qo(!1,!0)},Up={get:Qo(!0,!1)},ah=new WeakMap,oh=new WeakMap,lh=new WeakMap,Dp=new WeakMap;function Ip(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Np(r){return r.__v_skip||!Object.isExtensible(r)?0:Ip(Kd(r))}function el(r){return qi(r)?r:tl(r,!1,sh,Lp,ah)}function Op(r){return tl(r,!1,bp,Pp,oh)}function ch(r){return tl(r,!0,Sp,Up,lh)}function tl(r,e,t,n,i){if(!st(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=Np(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function Vn(r){return qi(r)?Vn(r.__v_raw):!!(r&&r.__v_isReactive)}function qi(r){return!!(r&&r.__v_isReadonly)}function Mo(r){return!!(r&&r.__v_isShallow)}function uh(r){return Vn(r)||qi(r)}function Ze(r){const e=r&&r.__v_raw;return e?Ze(e):r}function hh(r){return $s(r,"__v_skip",!0),r}const rl=r=>st(r)?el(r):r,nl=r=>st(r)?ch(r):r;function Fp(r){Fr&&qt&&(r=Ze(r),rh(r.dep||(r.dep=Zo())))}function zp(r,e){r=Ze(r);const t=r.dep;t&&yo(t)}function At(r){return!!(r&&r.__v_isRef===!0)}function zi(r){return At(r)?r.value:r}const Hp={get:(r,e,t)=>zi(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return At(i)&&!At(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function dh(r){return Vn(r)?r:new Proxy(r,Hp)}class Bp{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ko(e,()=>{this._dirty||(this._dirty=!0,zp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=Ze(this);return Fp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kp(r,e,t=!1){let n,i;const s=ke(r);return s?(n=r,i=lr):(n=r.get,i=r.set),new Bp(n,i,s||!i,t)}function zr(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){ca(s,e,t)}return i}function $t(r,e,t,n){if(ke(r)){const s=zr(r,e,t,n);return s&&Ku(s)&&s.catch(o=>{ca(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push($t(r[s],e,t,n));return i}function ca(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){zr(l,null,10,[r,o,a]);return}}Gp(r,t,i,n)}function Gp(r,e,t,n=!0){console.error(r)}let Zi=!1,Eo=!1;const xt=[];let sr=0;const Wn=[];let yr=null,tn=0;const ph=Promise.resolve();let il=null;function Vp(r){const e=il||ph;return r?e.then(this?r.bind(this):r):e}function Wp(r){let e=sr+1,t=xt.length;for(;e<t;){const n=e+t>>>1;Ki(xt[n])<r?e=n+1:t=n}return e}function sl(r){(!xt.length||!xt.includes(r,Zi&&r.allowRecurse?sr+1:sr))&&(r.id==null?xt.push(r):xt.splice(Wp(r.id),0,r),fh())}function fh(){!Zi&&!Eo&&(Eo=!0,il=ph.then(gh))}function Xp(r){const e=xt.indexOf(r);e>sr&&xt.splice(e,1)}function jp(r){Ne(r)?Wn.push(...r):(!yr||!yr.includes(r,r.allowRecurse?tn+1:tn))&&Wn.push(r),fh()}function Wl(r,e=Zi?sr+1:0){for(;e<xt.length;e++){const t=xt[e];t&&t.pre&&(xt.splice(e,1),e--,t())}}function mh(r){if(Wn.length){const e=[...new Set(Wn)];if(Wn.length=0,yr){yr.push(...e);return}for(yr=e,yr.sort((t,n)=>Ki(t)-Ki(n)),tn=0;tn<yr.length;tn++)yr[tn]();yr=null,tn=0}}const Ki=r=>r.id==null?1/0:r.id,Yp=(r,e)=>{const t=Ki(r)-Ki(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function gh(r){Eo=!1,Zi=!0,xt.sort(Yp);try{for(sr=0;sr<xt.length;sr++){const e=xt[sr];e&&e.active!==!1&&zr(e,null,14)}}finally{sr=0,xt.length=0,mh(),Zi=!1,il=null,(xt.length||Wn.length)&&gh()}}function qp(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||Je;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=n[u]||Je;h&&(i=t.map(m=>mt(m)?m.trim():m)),d&&(i=t.map(ep))}let a,l=n[a=Ra(e)]||n[a=Ra(Yn(e))];!l&&s&&(l=n[a=Ra(ti(e))]),l&&$t(l,r,6,i);const c=n[a+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,$t(c,r,6,i)}}function _h(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!ke(r)){const l=c=>{const u=_h(c,e,!0);u&&(a=!0,dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(st(r)&&n.set(r,null),null):(Ne(s)?s.forEach(l=>o[l]=null):dt(o,s),st(r)&&n.set(r,o),o)}function ua(r,e){return!r||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Xe(r,e[0].toLowerCase()+e.slice(1))||Xe(r,ti(e))||Xe(r,e))}let or=null,vh=null;function Qs(r){const e=or;return or=r,vh=r&&r.type.__scopeId||null,e}function Zp(r,e=or,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&ec(-1);const s=Qs(e);let o;try{o=r(...i)}finally{Qs(s),n._d&&ec(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function La(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:x,inheritAttrs:v}=r;let f,p;const w=Qs(r);try{if(t.shapeFlag&4){const T=i||n;f=nr(u.call(T,T,d,s,m,h,x)),p=l}else{const T=e;f=nr(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),p=e.props?l:Kp(l)}}catch(T){Wi.length=0,ca(T,r,1),f=Hr(Ji)}let M=f;if(p&&v!==!1){const T=Object.keys(p),{shapeFlag:R}=M;T.length&&R&7&&(o&&T.some(Vo)&&(p=Jp(p,o)),M=qn(M,p))}return t.dirs&&(M=qn(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),f=M,Qs(w),f}const Kp=r=>{let e;for(const t in r)(t==="class"||t==="style"||sa(t))&&((e||(e={}))[t]=r[t]);return e},Jp=(r,e)=>{const t={};for(const n in r)(!Vo(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function $p(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Xl(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==n[h]&&!ua(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Xl(n,o,c):!0:!!o;return!1}function Xl(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!ua(t,s))return!0}return!1}function Qp({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const ef=r=>r.__isSuspense;function tf(r,e){e&&e.pendingBranch?Ne(r)?e.effects.push(...r):e.effects.push(r):jp(r)}const gs={};function Pa(r,e,t){return xh(r,e,t)}function xh(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=Je){var a;const l=cp()===((a=yt)==null?void 0:a.scope)?yt:null;let c,u=!1,d=!1;if(At(r)?(c=()=>r.value,u=Mo(r)):Vn(r)?(c=()=>r,n=!0):Ne(r)?(d=!0,u=r.some(T=>Vn(T)||Mo(T)),c=()=>r.map(T=>{if(At(T))return T.value;if(Vn(T))return Bn(T);if(ke(T))return zr(T,l,2)})):ke(r)?e?c=()=>zr(r,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),$t(r,l,3,[m])}:c=lr,e&&n){const T=c;c=()=>Bn(T())}let h,m=T=>{h=w.onStop=()=>{zr(T,l,4)}},x;if(Qi)if(m=lr,e?t&&$t(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const T=Qf();x=T.__watcherHandles||(T.__watcherHandles=[])}else return lr;let v=d?new Array(r.length).fill(gs):gs;const f=()=>{if(w.active)if(e){const T=w.run();(n||u||(d?T.some((R,D)=>Js(R,v[D])):Js(T,v)))&&(h&&h(),$t(e,l,3,[T,v===gs?void 0:d&&v[0]===gs?[]:v,m]),v=T)}else w.run()};f.allowRecurse=!!e;let p;i==="sync"?p=f:i==="post"?p=()=>Ct(f,l&&l.suspense):(f.pre=!0,l&&(f.id=l.uid),p=()=>sl(f));const w=new Ko(c,p);e?t?f():v=w.run():i==="post"?Ct(w.run.bind(w),l&&l.suspense):w.run();const M=()=>{w.stop(),l&&l.scope&&Wo(l.scope.effects,w)};return x&&x.push(M),M}function rf(r,e,t){const n=this.proxy,i=mt(r)?r.includes(".")?yh(n,r):()=>n[r]:r.bind(n,n);let s;ke(e)?s=e:(s=e.handler,t=e);const o=yt;Zn(this);const a=xh(i,s.bind(n),t);return o?Zn(o):an(),a}function yh(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Bn(r,e){if(!st(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),At(r))Bn(r.value,e);else if(Ne(r))for(let t=0;t<r.length;t++)Bn(r[t],e);else if(qd(r)||Gi(r))r.forEach(t=>{Bn(t,e)});else if(Jd(r))for(const t in r)Bn(r[t],e);return r}function Yr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(ri(),$t(l,t,8,[r.el,a,r,e]),ni())}}function Mh(r,e){return ke(r)?(()=>dt({name:r.name},e,{setup:r}))():r}const js=r=>!!r.type.__asyncLoader,Eh=r=>r.type.__isKeepAlive;function nf(r,e){Sh(r,"a",e)}function sf(r,e){Sh(r,"da",e)}function Sh(r,e,t=yt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(ha(e,n,t),t){let i=t.parent;for(;i&&i.parent;)Eh(i.parent.vnode)&&af(n,e,t,i),i=i.parent}}function af(r,e,t,n){const i=ha(e,r,n,!0);bh(()=>{Wo(n[e],i)},t)}function ha(r,e,t=yt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ri(),Zn(t);const a=$t(e,t,r,o);return an(),ni(),a});return n?i.unshift(s):i.push(s),s}}const br=r=>(e,t=yt)=>(!Qi||r==="sp")&&ha(r,(...n)=>e(...n),t),of=br("bm"),lf=br("m"),cf=br("bu"),uf=br("u"),hf=br("bum"),bh=br("um"),df=br("sp"),pf=br("rtg"),ff=br("rtc");function mf(r,e=yt){ha("ec",r,e)}const gf=Symbol.for("v-ndc"),So=r=>r?Oh(r)?ul(r)||r.proxy:So(r.parent):null,Vi=dt(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>So(r.parent),$root:r=>So(r.root),$emit:r=>r.emit,$options:r=>al(r),$forceUpdate:r=>r.f||(r.f=()=>sl(r.update)),$nextTick:r=>r.n||(r.n=Vp.bind(r.proxy)),$watch:r=>rf.bind(r)}),Ua=(r,e)=>r!==Je&&!r.__isScriptSetup&&Xe(r,e),_f={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Ua(n,e))return o[e]=1,n[e];if(i!==Je&&Xe(i,e))return o[e]=2,i[e];if((c=r.propsOptions[0])&&Xe(c,e))return o[e]=3,s[e];if(t!==Je&&Xe(t,e))return o[e]=4,t[e];bo&&(o[e]=0)}}const u=Vi[e];let d,h;if(u)return e==="$attrs"&&Ut(r,"get",e),u(r);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==Je&&Xe(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Xe(h,e))return h[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Ua(i,e)?(i[e]=t,!0):n!==Je&&Xe(n,e)?(n[e]=t,!0):Xe(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==Je&&Xe(r,o)||Ua(e,o)||(a=s[0])&&Xe(a,o)||Xe(n,o)||Xe(Vi,o)||Xe(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:Xe(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};function jl(r){return Ne(r)?r.reduce((e,t)=>(e[t]=null,e),{}):r}let bo=!0;function vf(r){const e=al(r),t=r.proxy,n=r.ctx;bo=!1,e.beforeCreate&&Yl(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:x,activated:v,deactivated:f,beforeDestroy:p,beforeUnmount:w,destroyed:M,unmounted:T,render:R,renderTracked:D,renderTriggered:C,errorCaptured:ee,serverPrefetch:E,expose:b,inheritAttrs:oe,components:he,directives:X,filters:j}=e;if(c&&xf(c,n,null),o)for(const te in o){const W=o[te];ke(W)&&(n[te]=W.bind(t))}if(i){const te=i.call(t,t);st(te)&&(r.data=el(te))}if(bo=!0,s)for(const te in s){const W=s[te],$=ke(W)?W.bind(t,t):ke(W.get)?W.get.bind(t,t):lr,ue=!ke(W)&&ke(W.set)?W.set.bind(t):lr,ce=Jf({get:$,set:ue});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>ce.value,set:F=>ce.value=F})}if(a)for(const te in a)Th(a[te],n,t,te);if(l){const te=ke(l)?l.call(t):l;Reflect.ownKeys(te).forEach(W=>{Tf(W,te[W])})}u&&Yl(u,r,"c");function V(te,W){Ne(W)?W.forEach($=>te($.bind(t))):W&&te(W.bind(t))}if(V(of,d),V(lf,h),V(cf,m),V(uf,x),V(nf,v),V(sf,f),V(mf,ee),V(ff,D),V(pf,C),V(hf,w),V(bh,T),V(df,E),Ne(b))if(b.length){const te=r.exposed||(r.exposed={});b.forEach(W=>{Object.defineProperty(te,W,{get:()=>t[W],set:$=>t[W]=$})})}else r.exposed||(r.exposed={});R&&r.render===lr&&(r.render=R),oe!=null&&(r.inheritAttrs=oe),he&&(r.components=he),X&&(r.directives=X)}function xf(r,e,t=lr){Ne(r)&&(r=To(r));for(const n in r){const i=r[n];let s;st(i)?"default"in i?s=Ys(i.from||n,i.default,!0):s=Ys(i.from||n):s=Ys(i),At(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function Yl(r,e,t){$t(Ne(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function Th(r,e,t,n){const i=n.includes(".")?yh(t,n):()=>t[n];if(mt(r)){const s=e[r];ke(s)&&Pa(i,s)}else if(ke(r))Pa(i,r.bind(t));else if(st(r))if(Ne(r))r.forEach(s=>Th(s,e,t,n));else{const s=ke(r.handler)?r.handler.bind(t):e[r.handler];ke(s)&&Pa(i,s,r)}}function al(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>ea(l,c,o,!0)),ea(l,e,o)),st(e)&&s.set(e,l),l}function ea(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&ea(r,s,t,!0),i&&i.forEach(o=>ea(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=yf[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const yf={data:ql,props:Zl,emits:Zl,methods:Hi,computed:Hi,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Hi,directives:Hi,watch:Ef,provide:ql,inject:Mf};function ql(r,e){return e?r?function(){return dt(ke(r)?r.call(this,this):r,ke(e)?e.call(this,this):e)}:e:r}function Mf(r,e){return Hi(To(r),To(e))}function To(r){if(Ne(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function St(r,e){return r?[...new Set([].concat(r,e))]:e}function Hi(r,e){return r?dt(Object.create(null),r,e):e}function Zl(r,e){return r?Ne(r)&&Ne(e)?[...new Set([...r,...e])]:dt(Object.create(null),jl(r),jl(e??{})):e}function Ef(r,e){if(!r)return e;if(!e)return r;const t=dt(Object.create(null),r);for(const n in e)t[n]=St(r[n],e[n]);return t}function wh(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function bf(r,e){return function(t,n=null){ke(t)||(t=dt({},t)),n!=null&&!st(n)&&(n=null);const i=wh(),s=new Set;let o=!1;const a=i.app={_uid:Sf++,_component:t,_props:n,_container:null,_context:i,_instance:null,version:em,get config(){return i.config},set config(l){},use(l,...c){return s.has(l)||(l&&ke(l.install)?(s.add(l),l.install(a,...c)):ke(l)&&(s.add(l),l(a,...c))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,c){return c?(i.components[l]=c,a):i.components[l]},directive(l,c){return c?(i.directives[l]=c,a):i.directives[l]},mount(l,c,u){if(!o){const d=Hr(t,n);return d.appContext=i,c&&e?e(d,l):r(d,l,u),o=!0,a._container=l,l.__vue_app__=a,ul(d.component)||d.component.proxy}},unmount(){o&&(r(null,a._container),delete a._container.__vue_app__)},provide(l,c){return i.provides[l]=c,a},runWithContext(l){ta=a;try{return l()}finally{ta=null}}};return a}}let ta=null;function Tf(r,e){if(yt){let t=yt.provides;const n=yt.parent&&yt.parent.provides;n===t&&(t=yt.provides=Object.create(n)),t[r]=e}}function Ys(r,e,t=!1){const n=yt||or;if(n||ta){const i=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:ta._context.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&ke(e)?e.call(n&&n.proxy):e}}function wf(r,e,t,n=!1){const i={},s={};$s(s,pa,1),r.propsDefaults=Object.create(null),Ah(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:Op(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function Af(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=Ze(i),[l]=r.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=r.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ua(r.emitsOptions,h))continue;const m=e[h];if(l)if(Xe(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=Yn(h);i[x]=wo(l,a,x,m,r,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Ah(r,e,i,s)&&(c=!0);let u;for(const d in a)(!e||!Xe(e,d)&&((u=ti(d))===d||!Xe(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(i[d]=wo(l,a,d,void 0,r,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!Xe(e,d))&&(delete s[d],c=!0)}c&&Sr(r,"set","$attrs")}function Ah(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xs(l))continue;const c=e[l];let u;i&&Xe(i,u=Yn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ua(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Ze(t),c=a||Je;for(let u=0;u<s.length;u++){const d=s[u];t[d]=wo(i,l,d,c[d],r,!Xe(c,d))}}return o}function wo(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=Xe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(Zn(i),n=c[t]=l.call(null,e),an())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===ti(t))&&(n=!0))}return n}function Rh(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!ke(r)){const u=d=>{l=!0;const[h,m]=Rh(d,e,!0);dt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return st(r)&&n.set(r,Gn),Gn;if(Ne(s))for(let u=0;u<s.length;u++){const d=Yn(s[u]);Kl(d)&&(o[d]=Je)}else if(s)for(const u in s){const d=Yn(u);if(Kl(d)){const h=s[u],m=o[d]=Ne(h)||ke(h)?{type:h}:dt({},h);if(m){const x=Ql(Boolean,m.type),v=Ql(String,m.type);m[0]=x>-1,m[1]=v<0||x<v,(x>-1||Xe(m,"default"))&&a.push(d)}}}const c=[o,a];return st(r)&&n.set(r,c),c}function Kl(r){return r[0]!=="$"}function Jl(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function $l(r,e){return Jl(r)===Jl(e)}function Ql(r,e){return Ne(e)?e.findIndex(t=>$l(t,r)):ke(e)&&$l(e,r)?0:-1}const Ch=r=>r[0]==="_"||r==="$stable",ol=r=>Ne(r)?r.map(nr):[nr(r)],Rf=(r,e,t)=>{if(e._n)return e;const n=Zp((...i)=>ol(e(...i)),t);return n._c=!1,n},Lh=(r,e,t)=>{const n=r._ctx;for(const i in r){if(Ch(i))continue;const s=r[i];if(ke(s))e[i]=Rf(i,s,n);else if(s!=null){const o=ol(s);e[i]=()=>o}}},Ph=(r,e)=>{const t=ol(e);r.slots.default=()=>t},Cf=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=Ze(e),$s(e,"_",t)):Lh(e,r.slots={})}else r.slots={},e&&Ph(r,e);$s(r.slots,pa,1)},Lf=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=Je;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(dt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Lh(e,i)),o=e}else e&&(Ph(r,e),o={default:1});if(s)for(const a in i)!Ch(a)&&!(a in o)&&delete i[a]};function Ao(r,e,t,n,i=!1){if(Ne(r)){r.forEach((h,m)=>Ao(h,e&&(Ne(e)?e[m]:e),t,n,i));return}if(js(n)&&!i)return;const s=n.shapeFlag&4?ul(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,c=e&&e.r,u=a.refs===Je?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(mt(c)?(u[c]=null,Xe(d,c)&&(d[c]=null)):At(c)&&(c.value=null)),ke(l))zr(l,a,12,[o,u]);else{const h=mt(l),m=At(l);if(h||m){const x=()=>{if(r.f){const v=h?Xe(d,l)?d[l]:u[l]:l.value;i?Ne(v)&&Wo(v,s):Ne(v)?v.includes(s)||v.push(s):h?(u[l]=[s],Xe(d,l)&&(d[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else h?(u[l]=o,Xe(d,l)&&(d[l]=o)):m&&(l.value=o,r.k&&(u[r.k]=o))};o?(x.id=-1,Ct(x,t)):x()}}}const Ct=tf;function Pf(r){return Uf(r)}function Uf(r,e){const t=go();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=lr,insertStaticContent:x}=r,v=(_,L,I,k=null,H=null,le=null,ae=!1,q=null,se=!!L.dynamicChildren)=>{if(_===L)return;_&&!hi(_,L)&&(k=Re(_),K(_,H,le,!0),_=null),L.patchFlag===-2&&(se=!1,L.dynamicChildren=null);const{type:ie,ref:ve,shapeFlag:y}=L;switch(ie){case da:f(_,L,I,k);break;case Ji:p(_,L,I,k);break;case Da:_==null&&w(L,I,k,ae);break;case Mr:he(_,L,I,k,H,le,ae,q,se);break;default:y&1?R(_,L,I,k,H,le,ae,q,se):y&6?X(_,L,I,k,H,le,ae,q,se):(y&64||y&128)&&ie.process(_,L,I,k,H,le,ae,q,se,He)}ve!=null&&H&&Ao(ve,_&&_.ref,le,L||_,!L)},f=(_,L,I,k)=>{if(_==null)n(L.el=a(L.children),I,k);else{const H=L.el=_.el;L.children!==_.children&&c(H,L.children)}},p=(_,L,I,k)=>{_==null?n(L.el=l(L.children||""),I,k):L.el=_.el},w=(_,L,I,k)=>{[_.el,_.anchor]=x(_.children,L,I,k,_.el,_.anchor)},M=({el:_,anchor:L},I,k)=>{let H;for(;_&&_!==L;)H=h(_),n(_,I,k),_=H;n(L,I,k)},T=({el:_,anchor:L})=>{let I;for(;_&&_!==L;)I=h(_),i(_),_=I;i(L)},R=(_,L,I,k,H,le,ae,q,se)=>{ae=ae||L.type==="svg",_==null?D(L,I,k,H,le,ae,q,se):E(_,L,H,le,ae,q,se)},D=(_,L,I,k,H,le,ae,q)=>{let se,ie;const{type:ve,props:y,shapeFlag:g,transition:U,dirs:J}=_;if(se=_.el=o(_.type,le,y&&y.is,y),g&8?u(se,_.children):g&16&&ee(_.children,se,null,k,H,le&&ve!=="foreignObject",ae,q),J&&Yr(_,null,k,"created"),C(se,_,_.scopeId,ae,k),y){for(const ne in y)ne!=="value"&&!Xs(ne)&&s(se,ne,null,y[ne],le,_.children,k,H,Te);"value"in y&&s(se,"value",null,y.value),(ie=y.onVnodeBeforeMount)&&rr(ie,k,_)}J&&Yr(_,null,k,"beforeMount");const re=(!H||H&&!H.pendingBranch)&&U&&!U.persisted;re&&U.beforeEnter(se),n(se,L,I),((ie=y&&y.onVnodeMounted)||re||J)&&Ct(()=>{ie&&rr(ie,k,_),re&&U.enter(se),J&&Yr(_,null,k,"mounted")},H)},C=(_,L,I,k,H)=>{if(I&&m(_,I),k)for(let le=0;le<k.length;le++)m(_,k[le]);if(H){let le=H.subTree;if(L===le){const ae=H.vnode;C(_,ae,ae.scopeId,ae.slotScopeIds,H.parent)}}},ee=(_,L,I,k,H,le,ae,q,se=0)=>{for(let ie=se;ie<_.length;ie++){const ve=_[ie]=q?Dr(_[ie]):nr(_[ie]);v(null,ve,L,I,k,H,le,ae,q)}},E=(_,L,I,k,H,le,ae)=>{const q=L.el=_.el;let{patchFlag:se,dynamicChildren:ie,dirs:ve}=L;se|=_.patchFlag&16;const y=_.props||Je,g=L.props||Je;let U;I&&qr(I,!1),(U=g.onVnodeBeforeUpdate)&&rr(U,I,L,_),ve&&Yr(L,_,I,"beforeUpdate"),I&&qr(I,!0);const J=H&&L.type!=="foreignObject";if(ie?b(_.dynamicChildren,ie,q,I,k,J,le):ae||$(_,L,q,null,I,k,J,le,!1),se>0){if(se&16)oe(q,L,y,g,I,k,H);else if(se&2&&y.class!==g.class&&s(q,"class",null,g.class,H),se&4&&s(q,"style",y.style,g.style,H),se&8){const re=L.dynamicProps;for(let ne=0;ne<re.length;ne++){const xe=re[ne],de=y[xe],G=g[xe];(G!==de||xe==="value")&&s(q,xe,de,G,H,_.children,I,k,Te)}}se&1&&_.children!==L.children&&u(q,L.children)}else!ae&&ie==null&&oe(q,L,y,g,I,k,H);((U=g.onVnodeUpdated)||ve)&&Ct(()=>{U&&rr(U,I,L,_),ve&&Yr(L,_,I,"updated")},k)},b=(_,L,I,k,H,le,ae)=>{for(let q=0;q<L.length;q++){const se=_[q],ie=L[q],ve=se.el&&(se.type===Mr||!hi(se,ie)||se.shapeFlag&70)?d(se.el):I;v(se,ie,ve,null,k,H,le,ae,!0)}},oe=(_,L,I,k,H,le,ae)=>{if(I!==k){if(I!==Je)for(const q in I)!Xs(q)&&!(q in k)&&s(_,q,I[q],null,ae,L.children,H,le,Te);for(const q in k){if(Xs(q))continue;const se=k[q],ie=I[q];se!==ie&&q!=="value"&&s(_,q,ie,se,ae,L.children,H,le,Te)}"value"in k&&s(_,"value",I.value,k.value)}},he=(_,L,I,k,H,le,ae,q,se)=>{const ie=L.el=_?_.el:a(""),ve=L.anchor=_?_.anchor:a("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:U}=L;U&&(q=q?q.concat(U):U),_==null?(n(ie,I,k),n(ve,I,k),ee(L.children,I,ve,H,le,ae,q,se)):y>0&&y&64&&g&&_.dynamicChildren?(b(_.dynamicChildren,g,I,H,le,ae,q),(L.key!=null||H&&L===H.subTree)&&Uh(_,L,!0)):$(_,L,I,ve,H,le,ae,q,se)},X=(_,L,I,k,H,le,ae,q,se)=>{L.slotScopeIds=q,_==null?L.shapeFlag&512?H.ctx.activate(L,I,k,ae,se):j(L,I,k,H,le,ae,se):V(_,L,se)},j=(_,L,I,k,H,le,ae)=>{const q=_.component=Xf(_,k,H);if(Eh(_)&&(q.ctx.renderer=He),jf(q),q.asyncDep){if(H&&H.registerDep(q,te),!_.el){const se=q.subTree=Hr(Ji);p(null,se,L,I)}return}te(q,_,L,I,H,le,ae)},V=(_,L,I)=>{const k=L.component=_.component;if($p(_,L,I))if(k.asyncDep&&!k.asyncResolved){W(k,L,I);return}else k.next=L,Xp(k.update),k.update();else L.el=_.el,k.vnode=L},te=(_,L,I,k,H,le,ae)=>{const q=()=>{if(_.isMounted){let{next:ve,bu:y,u:g,parent:U,vnode:J}=_,re=ve,ne;qr(_,!1),ve?(ve.el=J.el,W(_,ve,ae)):ve=J,y&&Ca(y),(ne=ve.props&&ve.props.onVnodeBeforeUpdate)&&rr(ne,U,ve,J),qr(_,!0);const xe=La(_),de=_.subTree;_.subTree=xe,v(de,xe,d(de.el),Re(de),_,H,le),ve.el=xe.el,re===null&&Qp(_,xe.el),g&&Ct(g,H),(ne=ve.props&&ve.props.onVnodeUpdated)&&Ct(()=>rr(ne,U,ve,J),H)}else{let ve;const{el:y,props:g}=L,{bm:U,m:J,parent:re}=_,ne=js(L);if(qr(_,!1),U&&Ca(U),!ne&&(ve=g&&g.onVnodeBeforeMount)&&rr(ve,re,L),qr(_,!0),y&&Ue){const xe=()=>{_.subTree=La(_),Ue(y,_.subTree,_,H,null)};ne?L.type.__asyncLoader().then(()=>!_.isUnmounted&&xe()):xe()}else{const xe=_.subTree=La(_);v(null,xe,I,k,_,H,le),L.el=xe.el}if(J&&Ct(J,H),!ne&&(ve=g&&g.onVnodeMounted)){const xe=L;Ct(()=>rr(ve,re,xe),H)}(L.shapeFlag&256||re&&js(re.vnode)&&re.vnode.shapeFlag&256)&&_.a&&Ct(_.a,H),_.isMounted=!0,L=I=k=null}},se=_.effect=new Ko(q,()=>sl(ie),_.scope),ie=_.update=()=>se.run();ie.id=_.uid,qr(_,!0),ie()},W=(_,L,I)=>{L.component=_;const k=_.vnode.props;_.vnode=L,_.next=null,Af(_,L.props,k,I),Lf(_,L.children,I),ri(),Wl(),ni()},$=(_,L,I,k,H,le,ae,q,se=!1)=>{const ie=_&&_.children,ve=_?_.shapeFlag:0,y=L.children,{patchFlag:g,shapeFlag:U}=L;if(g>0){if(g&128){ce(ie,y,I,k,H,le,ae,q,se);return}else if(g&256){ue(ie,y,I,k,H,le,ae,q,se);return}}U&8?(ve&16&&Te(ie,H,le),y!==ie&&u(I,y)):ve&16?U&16?ce(ie,y,I,k,H,le,ae,q,se):Te(ie,H,le,!0):(ve&8&&u(I,""),U&16&&ee(y,I,k,H,le,ae,q,se))},ue=(_,L,I,k,H,le,ae,q,se)=>{_=_||Gn,L=L||Gn;const ie=_.length,ve=L.length,y=Math.min(ie,ve);let g;for(g=0;g<y;g++){const U=L[g]=se?Dr(L[g]):nr(L[g]);v(_[g],U,I,null,H,le,ae,q,se)}ie>ve?Te(_,H,le,!0,!1,y):ee(L,I,k,H,le,ae,q,se,y)},ce=(_,L,I,k,H,le,ae,q,se)=>{let ie=0;const ve=L.length;let y=_.length-1,g=ve-1;for(;ie<=y&&ie<=g;){const U=_[ie],J=L[ie]=se?Dr(L[ie]):nr(L[ie]);if(hi(U,J))v(U,J,I,null,H,le,ae,q,se);else break;ie++}for(;ie<=y&&ie<=g;){const U=_[y],J=L[g]=se?Dr(L[g]):nr(L[g]);if(hi(U,J))v(U,J,I,null,H,le,ae,q,se);else break;y--,g--}if(ie>y){if(ie<=g){const U=g+1,J=U<ve?L[U].el:k;for(;ie<=g;)v(null,L[ie]=se?Dr(L[ie]):nr(L[ie]),I,J,H,le,ae,q,se),ie++}}else if(ie>g)for(;ie<=y;)K(_[ie],H,le,!0),ie++;else{const U=ie,J=ie,re=new Map;for(ie=J;ie<=g;ie++){const pe=L[ie]=se?Dr(L[ie]):nr(L[ie]);pe.key!=null&&re.set(pe.key,ie)}let ne,xe=0;const de=g-J+1;let G=!1,A=0;const Q=new Array(de);for(ie=0;ie<de;ie++)Q[ie]=0;for(ie=U;ie<=y;ie++){const pe=_[ie];if(xe>=de){K(pe,H,le,!0);continue}let ge;if(pe.key!=null)ge=re.get(pe.key);else for(ne=J;ne<=g;ne++)if(Q[ne-J]===0&&hi(pe,L[ne])){ge=ne;break}ge===void 0?K(pe,H,le,!0):(Q[ge-J]=ie+1,ge>=A?A=ge:G=!0,v(pe,L[ge],I,null,H,le,ae,q,se),xe++)}const Ee=G?Df(Q):Gn;for(ne=Ee.length-1,ie=de-1;ie>=0;ie--){const pe=J+ie,ge=L[pe],Ce=pe+1<ve?L[pe+1].el:k;Q[ie]===0?v(null,ge,I,Ce,H,le,ae,q,se):G&&(ne<0||ie!==Ee[ne]?F(ge,I,Ce,2):ne--)}}},F=(_,L,I,k,H=null)=>{const{el:le,type:ae,transition:q,children:se,shapeFlag:ie}=_;if(ie&6){F(_.component.subTree,L,I,k);return}if(ie&128){_.suspense.move(L,I,k);return}if(ie&64){ae.move(_,L,I,He);return}if(ae===Mr){n(le,L,I);for(let ve=0;ve<se.length;ve++)F(se[ve],L,I,k);n(_.anchor,L,I);return}if(ae===Da){M(_,L,I);return}if(k!==2&&ie&1&&q)if(k===0)q.beforeEnter(le),n(le,L,I),Ct(()=>q.enter(le),H);else{const{leave:ve,delayLeave:y,afterLeave:g}=q,U=()=>n(le,L,I),J=()=>{ve(le,()=>{U(),g&&g()})};y?y(le,U,J):J()}else n(le,L,I)},K=(_,L,I,k=!1,H=!1)=>{const{type:le,props:ae,ref:q,children:se,dynamicChildren:ie,shapeFlag:ve,patchFlag:y,dirs:g}=_;if(q!=null&&Ao(q,null,I,_,!0),ve&256){L.ctx.deactivate(_);return}const U=ve&1&&g,J=!js(_);let re;if(J&&(re=ae&&ae.onVnodeBeforeUnmount)&&rr(re,L,_),ve&6)we(_.component,I,k);else{if(ve&128){_.suspense.unmount(I,k);return}U&&Yr(_,null,L,"beforeUnmount"),ve&64?_.type.remove(_,L,I,H,He,k):ie&&(le!==Mr||y>0&&y&64)?Te(ie,L,I,!1,!0):(le===Mr&&y&384||!H&&ve&16)&&Te(se,L,I),k&&me(_)}(J&&(re=ae&&ae.onVnodeUnmounted)||U)&&Ct(()=>{re&&rr(re,L,_),U&&Yr(_,null,L,"unmounted")},I)},me=_=>{const{type:L,el:I,anchor:k,transition:H}=_;if(L===Mr){be(I,k);return}if(L===Da){T(_);return}const le=()=>{i(I),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(_.shapeFlag&1&&H&&!H.persisted){const{leave:ae,delayLeave:q}=H,se=()=>ae(I,le);q?q(_.el,le,se):se()}else le()},be=(_,L)=>{let I;for(;_!==L;)I=h(_),i(_),_=I;i(L)},we=(_,L,I)=>{const{bum:k,scope:H,update:le,subTree:ae,um:q}=_;k&&Ca(k),H.stop(),le&&(le.active=!1,K(ae,_,L,I)),q&&Ct(q,L),Ct(()=>{_.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Te=(_,L,I,k=!1,H=!1,le=0)=>{for(let ae=le;ae<_.length;ae++)K(_[ae],L,I,k,H)},Re=_=>_.shapeFlag&6?Re(_.component.subTree):_.shapeFlag&128?_.suspense.next():h(_.anchor||_.el),Ae=(_,L,I)=>{_==null?L._vnode&&K(L._vnode,null,null,!0):v(L._vnode||null,_,L,null,null,null,I),Wl(),mh(),L._vnode=_},He={p:v,um:K,m:F,r:me,mt:j,mc:ee,pc:$,pbc:b,n:Re,o:r};let et,Ue;return e&&([et,Ue]=e(He)),{render:Ae,hydrate:et,createApp:bf(Ae,et)}}function qr({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function Uh(r,e,t=!1){const n=r.children,i=e.children;if(Ne(n)&&Ne(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Dr(i[s]),a.el=o.el),t||Uh(o,a)),a.type===da&&(a.el=o.el)}}function Df(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<c?s=a+1:o=a;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const If=r=>r.__isTeleport,Mr=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),Ji=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),Wi=[];let Jt=null;function Dh(r=!1){Wi.push(Jt=r?null:[])}function Nf(){Wi.pop(),Jt=Wi[Wi.length-1]||null}let $i=1;function ec(r){$i+=r}function Ih(r){return r.dynamicChildren=$i>0?Jt||Gn:null,Nf(),$i>0&&Jt&&Jt.push(r),r}function Of(r,e,t,n,i,s){return Ih(pt(r,e,t,n,i,s,!0))}function Ff(r,e,t,n,i){return Ih(Hr(r,e,t,n,i,!0))}function zf(r){return r?r.__v_isVNode===!0:!1}function hi(r,e){return r.type===e.type&&r.key===e.key}const pa="__vInternal",Nh=({key:r})=>r??null,qs=({ref:r,ref_key:e,ref_for:t})=>(typeof r=="number"&&(r=""+r),r!=null?mt(r)||At(r)||ke(r)?{i:or,r,k:e,f:!!t}:r:null);function pt(r,e=null,t=null,n=0,i=null,s=r===Mr?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Nh(e),ref:e&&qs(e),scopeId:vh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:or};return a?(ll(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=mt(t)?8:16),$i>0&&!o&&Jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Jt.push(l),l}const Hr=Hf;function Hf(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===gf)&&(r=Ji),zf(r)){const a=qn(r,e,!0);return t&&ll(a,t),$i>0&&!s&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(r)]=a:Jt.push(a)),a.patchFlag|=-2,a}if(Kf(r)&&(r=r.__vccOpts),e){e=Bf(e);let{class:a,style:l}=e;a&&!mt(a)&&(e.class=qo(a)),st(l)&&(uh(l)&&!Ne(l)&&(l=dt({},l)),e.style=Yo(l))}const o=mt(r)?1:ef(r)?128:If(r)?64:st(r)?4:ke(r)?2:0;return pt(r,e,t,n,i,o,s,!0)}function Bf(r){return r?uh(r)||pa in r?dt({},r):r:null}function qn(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?Gf(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&Nh(a),ref:e&&e.ref?t&&i?Ne(i)?i.concat(qs(e)):[i,qs(e)]:qs(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==Mr?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&qn(r.ssContent),ssFallback:r.ssFallback&&qn(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function kf(r=" ",e=0){return Hr(da,null,r,e)}function nr(r){return r==null||typeof r=="boolean"?Hr(Ji):Ne(r)?Hr(Mr,null,r.slice()):typeof r=="object"?Dr(r):Hr(da,null,String(r))}function Dr(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:qn(r)}function ll(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),ll(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(pa in e)?e._ctx=or:i===3&&or&&(or.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:or},t=32):(e=String(e),n&64?(t=16,e=[kf(e)]):t=8);r.children=e,r.shapeFlag|=t}function Gf(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=qo([e.class,n.class]));else if(i==="style")e.style=Yo([e.style,n.style]);else if(sa(i)){const s=e[i],o=n[i];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function rr(r,e,t,n=null){$t(r,e,7,[t,n])}const Vf=wh();let Wf=0;function Xf(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||Vf,s={uid:Wf++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rh(n,i),emitsOptions:_h(n,i),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:n.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qp.bind(null,s),r.ce&&r.ce(s),s}let yt=null,cl,mn,tc="__VUE_INSTANCE_SETTERS__";(mn=go()[tc])||(mn=go()[tc]=[]),mn.push(r=>yt=r),cl=r=>{mn.length>1?mn.forEach(e=>e(r)):mn[0](r)};const Zn=r=>{cl(r),r.scope.on()},an=()=>{yt&&yt.scope.off(),cl(null)};function Oh(r){return r.vnode.shapeFlag&4}let Qi=!1;function jf(r,e=!1){Qi=e;const{props:t,children:n}=r.vnode,i=Oh(r);wf(r,t,i,e),Cf(r,n);const s=i?Yf(r,e):void 0;return Qi=!1,s}function Yf(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=hh(new Proxy(r.ctx,_f));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?Zf(r):null;Zn(r),ri();const s=zr(n,r,0,[r.props,i]);if(ni(),an(),Ku(s)){if(s.then(an,an),e)return s.then(o=>{rc(r,o,e)}).catch(o=>{ca(o,r,0)});r.asyncDep=s}else rc(r,s,e)}else Fh(r,e)}function rc(r,e,t){ke(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:st(e)&&(r.setupState=dh(e)),Fh(r,t)}let nc;function Fh(r,e,t){const n=r.type;if(!r.render){if(!e&&nc&&!n.render){const i=n.template||al(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,c=dt(dt({isCustomElement:s,delimiters:a},o),l);n.render=nc(i,c)}}r.render=n.render||lr}Zn(r),ri(),vf(r),ni(),an()}function qf(r){return r.attrsProxy||(r.attrsProxy=new Proxy(r.attrs,{get(e,t){return Ut(r,"get","$attrs"),e[t]}}))}function Zf(r){const e=t=>{r.exposed=t||{}};return{get attrs(){return qf(r)},slots:r.slots,emit:r.emit,expose:e}}function ul(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(dh(hh(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vi)return Vi[t](r)},has(e,t){return t in e||t in Vi}}))}function Kf(r){return ke(r)&&"__vccOpts"in r}const Jf=(r,e)=>kp(r,e,Qi),$f=Symbol.for("v-scx"),Qf=()=>Ys($f),em="3.3.4",tm="http://www.w3.org/2000/svg",rn=typeof document<"u"?document:null,ic=rn&&rn.createElement("template"),rm={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?rn.createElementNS(tm,r):rn.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>rn.createTextNode(r),createComment:r=>rn.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>rn.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{ic.innerHTML=n?`<svg>${r}</svg>`:r;const a=ic.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function nm(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function im(r,e,t){const n=r.style,i=mt(t);if(t&&!i){if(e&&!mt(e))for(const s in e)t[s]==null&&Ro(n,s,"");for(const s in t)Ro(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const sc=/\s*!important$/;function Ro(r,e,t){if(Ne(t))t.forEach(n=>Ro(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=sm(r,e);sc.test(t)?r.setProperty(ti(n),t.replace(sc,""),"important"):r[n]=t}}const ac=["Webkit","Moz","ms"],Ia={};function sm(r,e){const t=Ia[e];if(t)return t;let n=Yn(e);if(n!=="filter"&&n in r)return Ia[e]=n;n=Ju(n);for(let i=0;i<ac.length;i++){const s=ac[i]+n;if(s in r)return Ia[e]=s}return e}const oc="http://www.w3.org/1999/xlink";function am(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(oc,e.slice(6,e.length)):r.setAttributeNS(oc,e,t);else{const s=ap(e);t==null||s&&!$u(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function om(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t??"";return}const a=r.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){r._value=t;const c=a==="OPTION"?r.getAttribute("value"):r.value,u=t??"";c!==u&&(r.value=u),t==null&&r.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof r[e];c==="boolean"?t=$u(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{r[e]=t}catch{}l&&r.removeAttribute(e)}function lm(r,e,t,n){r.addEventListener(e,t,n)}function cm(r,e,t,n){r.removeEventListener(e,t,n)}function um(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=hm(e);if(n){const c=s[e]=fm(n,i);lm(r,a,c,l)}else o&&(cm(r,a,o,l),s[e]=void 0)}}const lc=/(?:Once|Passive|Capture)$/;function hm(r){let e;if(lc.test(r)){e={};let t;for(;t=r.match(lc);)r=r.slice(0,r.length-t[0].length),e[t[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):ti(r.slice(2)),e]}let Na=0;const dm=Promise.resolve(),pm=()=>Na||(dm.then(()=>Na=0),Na=Date.now());function fm(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;$t(mm(n,t.value),e,5,[n])};return t.value=r,t.attached=pm(),t}function mm(r,e){if(Ne(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const cc=/^on[a-z]/,gm=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?nm(r,n,i):e==="style"?im(r,t,n):sa(e)?Vo(e)||um(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_m(r,e,n,i))?om(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),am(r,e,n,i))};function _m(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&cc.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||cc.test(e)&&mt(t)?!1:e in r}const vm=dt({patchProp:gm},rm);let uc;function xm(){return uc||(uc=Pf(vm))}const ym=(...r)=>{const e=xm().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=Mm(n);if(!i)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mm(r){return mt(r)?document.querySelector(r):r}class Qt{constructor(e){this._canceled=!1,this.data=e}get type(){return this.constructor.type}get cancelable(){return this.constructor.cancelable}cancel(){this._canceled=!0}canceled(){return this._canceled}clone(e){return new this.constructor({...this.data,...e})}}Qt.type="event";Qt.cancelable=!1;class fa{constructor(e){this.draggable=e}attach(){throw new Error("Not Implemented")}detach(){throw new Error("Not Implemented")}}const gn={mouse:0,drag:0,touch:100};class zh{constructor(e=[],t={}){this.containers=[...e],this.options={...t},this.dragging=!1,this.currentContainer=null,this.originalSource=null,this.startEvent=null,this.delay=Em(t.delay)}attach(){return this}detach(){return this}addContainer(...e){this.containers=[...this.containers,...e]}removeContainer(...e){this.containers=this.containers.filter(t=>!e.includes(t))}trigger(e,t){const n=document.createEvent("Event");return n.detail=t,n.initEvent(t.type,!0,!0),e.dispatchEvent(n),this.lastEvent=t,t}}function Em(r){const e={};if(r===void 0)return{...gn};if(typeof r=="number"){for(const t in gn)Object.prototype.hasOwnProperty.call(gn,t)&&(e[t]=r);return e}for(const t in gn)Object.prototype.hasOwnProperty.call(gn,t)&&(r[t]===void 0?e[t]=gn[t]:e[t]=r[t]);return e}function Bt(r,e){if(r==null)return null;function t(i){return i==null||e==null?!1:Sm(e)?Element.prototype.matches.call(i,e):bm(e)?[...e].includes(i):Tm(e)?e===i:wm(e)?e(i):!1}let n=r;do{if(n=n.correspondingUseElement||n.correspondingElement||n,t(n))return n;n=(n==null?void 0:n.parentNode)||null}while(n!=null&&n!==document.body&&n!==document);return null}function Sm(r){return typeof r=="string"}function bm(r){return r instanceof NodeList||r instanceof Array}function Tm(r){return r instanceof Node}function wm(r){return typeof r=="function"}function Hh(r,e,t,n){return Math.sqrt((t-r)**2+(n-e)**2)}class ma extends Qt{get originalEvent(){return this.data.originalEvent}get clientX(){return this.data.clientX}get clientY(){return this.data.clientY}get target(){return this.data.target}get container(){return this.data.container}get originalSource(){return this.data.originalSource}get pressure(){return this.data.pressure}}class hl extends ma{}hl.type="drag:start";class dl extends ma{}dl.type="drag:move";class pl extends ma{}pl.type="drag:stop";class Am extends ma{}Am.type="drag:pressure";const di=Symbol("onContextMenuWhileDragging"),pi=Symbol("onMouseDown"),fi=Symbol("onMouseMove"),mi=Symbol("onMouseUp"),_s=Symbol("startDrag"),Ar=Symbol("onDistanceChange");class Rm extends zh{constructor(e=[],t={}){super(e,t),this.mouseDownTimeout=null,this.pageX=null,this.pageY=null,this[di]=this[di].bind(this),this[pi]=this[pi].bind(this),this[fi]=this[fi].bind(this),this[mi]=this[mi].bind(this),this[_s]=this[_s].bind(this),this[Ar]=this[Ar].bind(this)}attach(){document.addEventListener("mousedown",this[pi],!0)}detach(){document.removeEventListener("mousedown",this[pi],!0)}[pi](e){if(e.button!==0||e.ctrlKey||e.metaKey)return;const t=Bt(e.target,this.containers);if(!t||this.options.handle&&e.target&&!Bt(e.target,this.options.handle))return;const n=Bt(e.target,this.options.draggable);if(!n)return;const{delay:i}=this,{pageX:s,pageY:o}=e;Object.assign(this,{pageX:s,pageY:o}),this.onMouseDownAt=Date.now(),this.startEvent=e,this.currentContainer=t,this.originalSource=n,document.addEventListener("mouseup",this[mi]),document.addEventListener("dragstart",hc),document.addEventListener("mousemove",this[Ar]),this.mouseDownTimeout=window.setTimeout(()=>{this[Ar]({pageX:this.pageX,pageY:this.pageY})},i.mouse)}[_s](){const e=this.startEvent,t=this.currentContainer,n=this.originalSource,i=new hl({clientX:e.clientX,clientY:e.clientY,target:e.target,container:t,originalSource:n,originalEvent:e});this.trigger(this.currentContainer,i),this.dragging=!i.canceled(),this.dragging&&(document.addEventListener("contextmenu",this[di],!0),document.addEventListener("mousemove",this[fi]))}[Ar](e){const{pageX:t,pageY:n}=e,{distance:i}=this.options,{startEvent:s,delay:o}=this;if(Object.assign(this,{pageX:t,pageY:n}),!this.currentContainer)return;const a=Date.now()-this.onMouseDownAt,l=Hh(s.pageX,s.pageY,t,n)||0;clearTimeout(this.mouseDownTimeout),a<o.mouse?document.removeEventListener("mousemove",this[Ar]):l>=i&&(document.removeEventListener("mousemove",this[Ar]),this[_s]())}[fi](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),n=new dl({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,n)}[mi](e){if(clearTimeout(this.mouseDownTimeout),e.button!==0||(document.removeEventListener("mouseup",this[mi]),document.removeEventListener("dragstart",hc),document.removeEventListener("mousemove",this[Ar]),!this.dragging))return;const t=document.elementFromPoint(e.clientX,e.clientY),n=new pl({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,n),document.removeEventListener("contextmenu",this[di],!0),document.removeEventListener("mousemove",this[fi]),this.currentContainer=null,this.dragging=!1,this.startEvent=null}[di](e){e.preventDefault()}}function hc(r){r.preventDefault()}function _n(r){const{touches:e,changedTouches:t}=r;return e&&e[0]||t&&t[0]}const gi=Symbol("onTouchStart"),Zr=Symbol("onTouchEnd"),_i=Symbol("onTouchMove"),vs=Symbol("startDrag"),Rr=Symbol("onDistanceChange");let Zs=!1;window.addEventListener("touchmove",r=>{Zs&&r.preventDefault()},{passive:!1});class Cm extends zh{constructor(e=[],t={}){super(e,t),this.currentScrollableParent=null,this.tapTimeout=null,this.touchMoved=!1,this.pageX=null,this.pageY=null,this[gi]=this[gi].bind(this),this[Zr]=this[Zr].bind(this),this[_i]=this[_i].bind(this),this[vs]=this[vs].bind(this),this[Rr]=this[Rr].bind(this)}attach(){document.addEventListener("touchstart",this[gi])}detach(){document.removeEventListener("touchstart",this[gi])}[gi](e){const t=Bt(e.target,this.containers);if(!t||this.options.handle&&e.target&&!Bt(e.target,this.options.handle))return;const n=Bt(e.target,this.options.draggable);if(!n)return;const{distance:i=0}=this.options,{delay:s}=this,{pageX:o,pageY:a}=_n(e);Object.assign(this,{pageX:o,pageY:a}),this.onTouchStartAt=Date.now(),this.startEvent=e,this.currentContainer=t,this.originalSource=n,document.addEventListener("touchend",this[Zr]),document.addEventListener("touchcancel",this[Zr]),document.addEventListener("touchmove",this[Rr]),t.addEventListener("contextmenu",dc),i&&(Zs=!0),this.tapTimeout=window.setTimeout(()=>{this[Rr]({touches:[{pageX:this.pageX,pageY:this.pageY}]})},s.touch)}[vs](){const e=this.startEvent,t=this.currentContainer,n=_n(e),i=this.originalSource,s=new hl({clientX:n.pageX,clientY:n.pageY,target:e.target,container:t,originalSource:i,originalEvent:e});this.trigger(this.currentContainer,s),this.dragging=!s.canceled(),this.dragging&&document.addEventListener("touchmove",this[_i]),Zs=this.dragging}[Rr](e){const{distance:t}=this.options,{startEvent:n,delay:i}=this,s=_n(n),o=_n(e),a=Date.now()-this.onTouchStartAt,l=Hh(s.pageX,s.pageY,o.pageX,o.pageY);Object.assign(this,o),clearTimeout(this.tapTimeout),a<i.touch?document.removeEventListener("touchmove",this[Rr]):l>=t&&(document.removeEventListener("touchmove",this[Rr]),this[vs]())}[_i](e){if(!this.dragging)return;const{pageX:t,pageY:n}=_n(e),i=document.elementFromPoint(t-window.scrollX,n-window.scrollY),s=new dl({clientX:t,clientY:n,target:i,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,s)}[Zr](e){if(clearTimeout(this.tapTimeout),Zs=!1,document.removeEventListener("touchend",this[Zr]),document.removeEventListener("touchcancel",this[Zr]),document.removeEventListener("touchmove",this[Rr]),this.currentContainer&&this.currentContainer.removeEventListener("contextmenu",dc),!this.dragging)return;document.removeEventListener("touchmove",this[_i]);const{pageX:t,pageY:n}=_n(e),i=document.elementFromPoint(t-window.scrollX,n-window.scrollY);e.preventDefault();const s=new pl({clientX:t,clientY:n,target:i,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,s),this.currentContainer=null,this.dragging=!1,this.startEvent=null}}function dc(r){r.preventDefault(),r.stopPropagation()}class fl extends Qt{get dragEvent(){return this.data.dragEvent}}fl.type="collidable";class Lm extends fl{get collidingElement(){return this.data.collidingElement}}Lm.type="collidable:in";class Pm extends fl{get collidingElement(){return this.data.collidingElement}}Pm.type="collidable:out";class hr extends Qt{constructor(e){super(e),this.data=e}get source(){return this.data.source}get originalSource(){return this.data.originalSource}get mirror(){return this.data.mirror}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}hr.type="drag";class ml extends hr{}ml.type="drag:start";ml.cancelable=!0;class Bh extends hr{}Bh.type="drag:move";class gl extends hr{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}gl.type="drag:over";gl.cancelable=!0;class kh extends hr{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}kh.type="drag:out";class Gh extends hr{get overContainer(){return this.data.overContainer}}Gh.type="drag:over:container";class Vh extends hr{get overContainer(){return this.data.overContainer}}Vh.type="drag:out:container";class Wh extends hr{get pressure(){return this.data.pressure}}Wh.type="drag:pressure";class _l extends hr{}_l.type="drag:stop";_l.cancelable=!0;class Xh extends hr{}Xh.type="drag:stopped";class vl extends Qt{get dragEvent(){return this.data.dragEvent}get snappable(){return this.data.snappable}}vl.type="snap";class jh extends vl{}jh.type="snap:in";jh.cancelable=!0;class Yh extends vl{}Yh.type="snap:out";Yh.cancelable=!0;const xs=Symbol("onInitialize"),ys=Symbol("onDestroy"),pc=Symbol("announceEvent"),Oa=Symbol("announceMessage"),Um="aria-relevant",Dm="aria-atomic",Im="aria-live",Nm="role",Om={expire:7e3};class Fm extends fa{constructor(e){super(e),this.options={...Om,...this.getOptions()},this.originalTriggerMethod=this.draggable.trigger,this[xs]=this[xs].bind(this),this[ys]=this[ys].bind(this)}attach(){this.draggable.on("draggable:initialize",this[xs])}detach(){this.draggable.off("draggable:destroy",this[ys])}getOptions(){return this.draggable.options.announcements||{}}[pc](e){const t=this.options[e.type];t&&typeof t=="string"&&this[Oa](t),t&&typeof t=="function"&&this[Oa](t(e))}[Oa](e){zm(e,{expire:this.options.expire})}[xs](){this.draggable.trigger=e=>{try{this[pc](e)}finally{this.originalTriggerMethod.call(this.draggable,e)}}}[ys](){this.draggable.trigger=this.originalTriggerMethod}}const Co=Hm();function zm(r,{expire:e}){const t=document.createElement("div");return t.textContent=r,Co.appendChild(t),setTimeout(()=>{Co.removeChild(t)},e)}function Hm(){const r=document.createElement("div");return r.setAttribute("id","draggable-live-region"),r.setAttribute(Um,"additions"),r.setAttribute(Dm,"true"),r.setAttribute(Im,"assertive"),r.setAttribute(Nm,"log"),r.style.position="fixed",r.style.width="1px",r.style.height="1px",r.style.top="-1px",r.style.overflow="hidden",r}document.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(Co)});const vi=Symbol("onInitialize"),vn=Symbol("onDestroy"),Bm={};class km extends fa{constructor(e){super(e),this.options={...Bm,...this.getOptions()},this[vi]=this[vi].bind(this),this[vn]=this[vn].bind(this)}attach(){this.draggable.on("draggable:initialize",this[vi]).on("draggable:destroy",this[vn])}detach(){this.draggable.off("draggable:initialize",this[vi]).off("draggable:destroy",this[vn]),this[vn]()}getOptions(){return this.draggable.options.focusable||{}}getElements(){return[...this.draggable.containers,...this.draggable.getDraggableElements()]}[vi](){requestAnimationFrame(()=>{this.getElements().forEach(e=>Gm(e))})}[vn](){requestAnimationFrame(()=>{this.getElements().forEach(e=>Vm(e))})}}const Lo=[];function Gm(r){!r.getAttribute("tabindex")&&r.tabIndex===-1&&(Lo.push(r),r.tabIndex=0)}function Vm(r){const e=Lo.indexOf(r);e!==-1&&(r.tabIndex=-1,Lo.splice(e,1))}class ii extends Qt{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get dragEvent(){return this.data.dragEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}class qh extends ii{}qh.type="mirror:create";class Zh extends ii{get mirror(){return this.data.mirror}}Zh.type="mirror:created";class Kh extends ii{get mirror(){return this.data.mirror}}Kh.type="mirror:attached";class xl extends ii{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}xl.type="mirror:move";xl.cancelable=!0;class Jh extends ii{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}Jh.type="mirror:moved";class yl extends ii{get mirror(){return this.data.mirror}}yl.type="mirror:destroy";yl.cancelable=!0;const xi=Symbol("onDragStart"),yi=Symbol("onDragMove"),Mi=Symbol("onDragStop"),Ei=Symbol("onMirrorCreated"),Si=Symbol("onMirrorMove"),bi=Symbol("onScroll"),fc=Symbol("getAppendableContainer"),Wm={constrainDimensions:!1,xAxis:!0,yAxis:!0,cursorOffsetX:null,cursorOffsetY:null,thresholdX:null,thresholdY:null};class Xm extends fa{constructor(e){super(e),this.options={...Wm,...this.getOptions()},this.scrollOffset={x:0,y:0},this.initialScrollOffset={x:window.scrollX,y:window.scrollY},this[xi]=this[xi].bind(this),this[yi]=this[yi].bind(this),this[Mi]=this[Mi].bind(this),this[Ei]=this[Ei].bind(this),this[Si]=this[Si].bind(this),this[bi]=this[bi].bind(this)}attach(){this.draggable.on("drag:start",this[xi]).on("drag:move",this[yi]).on("drag:stop",this[Mi]).on("mirror:created",this[Ei]).on("mirror:move",this[Si])}detach(){this.draggable.off("drag:start",this[xi]).off("drag:move",this[yi]).off("drag:stop",this[Mi]).off("mirror:created",this[Ei]).off("mirror:move",this[Si])}getOptions(){return this.draggable.options.mirror||{}}[xi](e){if(e.canceled())return;"ontouchstart"in window&&document.addEventListener("scroll",this[bi],!0),this.initialScrollOffset={x:window.scrollX,y:window.scrollY};const{source:t,originalSource:n,sourceContainer:i,sensorEvent:s}=e;this.lastMirrorMovedClient={x:s.clientX,y:s.clientY};const o=new qh({source:t,originalSource:n,sourceContainer:i,sensorEvent:s,dragEvent:e});if(this.draggable.trigger(o),Jm(s)||o.canceled())return;const a=this[fc](t)||i;this.mirror=t.cloneNode(!0);const l=new Zh({source:t,originalSource:n,sourceContainer:i,sensorEvent:s,dragEvent:e,mirror:this.mirror}),c=new Kh({source:t,originalSource:n,sourceContainer:i,sensorEvent:s,dragEvent:e,mirror:this.mirror});this.draggable.trigger(l),a.appendChild(this.mirror),this.draggable.trigger(c)}[yi](e){if(!this.mirror||e.canceled())return;const{source:t,originalSource:n,sourceContainer:i,sensorEvent:s}=e;let o=!0,a=!0;if(this.options.thresholdX||this.options.thresholdY){const{x:c,y:u}=this.lastMirrorMovedClient;if(Math.abs(c-s.clientX)<this.options.thresholdX?o=!1:this.lastMirrorMovedClient.x=s.clientX,Math.abs(u-s.clientY)<this.options.thresholdY?a=!1:this.lastMirrorMovedClient.y=s.clientY,!o&&!a)return}const l=new xl({source:t,originalSource:n,sourceContainer:i,sensorEvent:s,dragEvent:e,mirror:this.mirror,passedThreshX:o,passedThreshY:a});this.draggable.trigger(l)}[Mi](e){if("ontouchstart"in window&&document.removeEventListener("scroll",this[bi],!0),this.initialScrollOffset={x:0,y:0},this.scrollOffset={x:0,y:0},!this.mirror)return;const{source:t,sourceContainer:n,sensorEvent:i}=e,s=new yl({source:t,mirror:this.mirror,sourceContainer:n,sensorEvent:i,dragEvent:e});this.draggable.trigger(s),s.canceled()||this.mirror.remove()}[bi](){this.scrollOffset={x:window.scrollX-this.initialScrollOffset.x,y:window.scrollY-this.initialScrollOffset.y}}[Ei]({mirror:e,source:t,sensorEvent:n}){const i=this.draggable.getClassNamesFor("mirror"),s=({mirrorOffset:a,initialX:l,initialY:c,...u})=>(this.mirrorOffset=a,this.initialX=l,this.initialY=c,this.lastMovedX=l,this.lastMovedY=c,{mirrorOffset:a,initialX:l,initialY:c,...u});e.style.display="none";const o={mirror:e,source:t,sensorEvent:n,mirrorClasses:i,scrollOffset:this.scrollOffset,options:this.options,passedThreshX:!0,passedThreshY:!0};return Promise.resolve(o).then(jm).then(Ym).then(qm).then(Zm).then(mc({initial:!0})).then(Km).then(s)}[Si](e){if(e.canceled())return null;const t=({lastMovedX:s,lastMovedY:o,...a})=>(this.lastMovedX=s,this.lastMovedY=o,{lastMovedX:s,lastMovedY:o,...a}),n=s=>{const o=new Jh({source:e.source,originalSource:e.originalSource,sourceContainer:e.sourceContainer,sensorEvent:e.sensorEvent,dragEvent:e.dragEvent,mirror:this.mirror,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY});return this.draggable.trigger(o),s},i={mirror:e.mirror,sensorEvent:e.sensorEvent,mirrorOffset:this.mirrorOffset,options:this.options,initialX:this.initialX,initialY:this.initialY,scrollOffset:this.scrollOffset,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY,lastMovedX:this.lastMovedX,lastMovedY:this.lastMovedY};return Promise.resolve(i).then(mc({raf:!0})).then(t).then(n)}[fc](e){const t=this.options.appendTo;return typeof t=="string"?document.querySelector(t):t instanceof HTMLElement?t:typeof t=="function"?t(e):e.parentNode}}function jm({source:r,...e}){return si(t=>{const n=r.getBoundingClientRect();t({source:r,sourceRect:n,...e})})}function Ym({sensorEvent:r,sourceRect:e,options:t,...n}){return si(i=>{const s=t.cursorOffsetY===null?r.clientY-e.top:t.cursorOffsetY,o=t.cursorOffsetX===null?r.clientX-e.left:t.cursorOffsetX;i({sensorEvent:r,sourceRect:e,mirrorOffset:{top:s,left:o},options:t,...n})})}function qm({mirror:r,source:e,options:t,...n}){return si(i=>{let s,o;if(t.constrainDimensions){const a=getComputedStyle(e);s=a.getPropertyValue("height"),o=a.getPropertyValue("width")}r.style.display=null,r.style.position="fixed",r.style.pointerEvents="none",r.style.top=0,r.style.left=0,r.style.margin=0,t.constrainDimensions&&(r.style.height=s,r.style.width=o),i({mirror:r,source:e,options:t,...n})})}function Zm({mirror:r,mirrorClasses:e,...t}){return si(n=>{r.classList.add(...e),n({mirror:r,mirrorClasses:e,...t})})}function Km({mirror:r,...e}){return si(t=>{r.removeAttribute("id"),delete r.id,t({mirror:r,...e})})}function mc({withFrame:r=!1,initial:e=!1}={}){return({mirror:t,sensorEvent:n,mirrorOffset:i,initialY:s,initialX:o,scrollOffset:a,options:l,passedThreshX:c,passedThreshY:u,lastMovedX:d,lastMovedY:h,...m})=>si(x=>{const v={mirror:t,sensorEvent:n,mirrorOffset:i,options:l,...m};if(i){const f=c?Math.round((n.clientX-i.left-a.x)/(l.thresholdX||1))*(l.thresholdX||1):Math.round(d),p=u?Math.round((n.clientY-i.top-a.y)/(l.thresholdY||1))*(l.thresholdY||1):Math.round(h);l.xAxis&&l.yAxis||e?t.style.transform=`translate3d(${f}px, ${p}px, 0)`:l.xAxis&&!l.yAxis?t.style.transform=`translate3d(${f}px, ${s}px, 0)`:l.yAxis&&!l.xAxis&&(t.style.transform=`translate3d(${o}px, ${p}px, 0)`),e&&(v.initialX=f,v.initialY=p),v.lastMovedX=f,v.lastMovedY=p}x(v)},{frame:r})}function si(r,{raf:e=!1}={}){return new Promise((t,n)=>{e?requestAnimationFrame(()=>{r(t,n)}):r(t,n)})}function Jm(r){return/^drag/.test(r.originalEvent.type)}const Ti=Symbol("onDragStart"),wi=Symbol("onDragMove"),Ai=Symbol("onDragStop"),Ri=Symbol("scroll"),$m={speed:6,sensitivity:50,scrollableElements:[]};class Qm extends fa{constructor(e){super(e),this.options={...$m,...this.getOptions()},this.currentMousePosition=null,this.scrollAnimationFrame=null,this.scrollableElement=null,this.findScrollableElementFrame=null,this[Ti]=this[Ti].bind(this),this[wi]=this[wi].bind(this),this[Ai]=this[Ai].bind(this),this[Ri]=this[Ri].bind(this)}attach(){this.draggable.on("drag:start",this[Ti]).on("drag:move",this[wi]).on("drag:stop",this[Ai])}detach(){this.draggable.off("drag:start",this[Ti]).off("drag:move",this[wi]).off("drag:stop",this[Ai])}getOptions(){return this.draggable.options.scrollable||{}}getScrollableElement(e){return this.hasDefinedScrollableElements()?Bt(e,this.options.scrollableElements)||document.documentElement:rg(e)}hasDefinedScrollableElements(){return this.options.scrollableElements.length!==0}[Ti](e){this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.source)})}[wi](e){if(this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.sensorEvent.target)}),!this.scrollableElement)return;const t=e.sensorEvent,n={x:0,y:0};"ontouchstart"in window&&(n.y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n.x=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0),this.currentMousePosition={clientX:t.clientX-n.x,clientY:t.clientY-n.y},this.scrollAnimationFrame=requestAnimationFrame(this[Ri])}[Ai](){cancelAnimationFrame(this.scrollAnimationFrame),cancelAnimationFrame(this.findScrollableElementFrame),this.scrollableElement=null,this.scrollAnimationFrame=null,this.findScrollableElementFrame=null,this.currentMousePosition=null}[Ri](){if(!this.scrollableElement||!this.currentMousePosition)return;cancelAnimationFrame(this.scrollAnimationFrame);const{speed:e,sensitivity:t}=this.options,n=this.scrollableElement.getBoundingClientRect(),i=n.bottom>window.innerHeight,s=n.top<0||i,o=Po(),a=this.scrollableElement,l=this.currentMousePosition.clientX,c=this.currentMousePosition.clientY;if(a!==document.body&&a!==document.documentElement&&!s){const{offsetHeight:u,offsetWidth:d}=a;n.top+u-c<t?a.scrollTop+=e:c-n.top<t&&(a.scrollTop-=e),n.left+d-l<t?a.scrollLeft+=e:l-n.left<t&&(a.scrollLeft-=e)}else{const{innerHeight:u,innerWidth:d}=window;c<t?o.scrollTop-=e:u-c<t&&(o.scrollTop+=e),l<t?o.scrollLeft-=e:d-l<t&&(o.scrollLeft+=e)}this.scrollAnimationFrame=requestAnimationFrame(this[Ri])}}function eg(r){const e=/(auto|scroll)/,t=getComputedStyle(r,null),n=t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x");return e.test(n)}function tg(r){return getComputedStyle(r).getPropertyValue("position")==="static"}function rg(r){if(!r)return Po();const e=getComputedStyle(r).getPropertyValue("position"),t=e==="absolute",n=Bt(r,i=>t&&tg(i)?!1:eg(i));return e==="fixed"||!n?Po():n}function Po(){return document.scrollingElement||document.documentElement}class ng{constructor(){this.callbacks={}}on(e,...t){return this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(...t),this}off(e,t){if(!this.callbacks[e])return null;const n=this.callbacks[e].slice(0);for(let i=0;i<n.length;i++)t===n[i]&&this.callbacks[e].splice(i,1);return this}trigger(e){if(!this.callbacks[e.type])return null;const t=[...this.callbacks[e.type]],n=[];for(let i=t.length-1;i>=0;i--){const s=t[i];try{s(e)}catch(o){n.push(o)}}return n.length&&console.error(`Draggable caught errors while triggering '${e.type}'`,n),this}}class Ml extends Qt{get draggable(){return this.data.draggable}}Ml.type="draggable";class $h extends Ml{}$h.type="draggable:initialize";class Qh extends Ml{}Qh.type="draggable:destroy";const Ci=Symbol("onDragStart"),xn=Symbol("onDragMove"),Li=Symbol("onDragStop"),Pi=Symbol("onDragPressure"),Ui=Symbol("dragStop"),ig={"drag:start":r=>`Picked up ${r.source.textContent.trim()||r.source.id||"draggable element"}`,"drag:stop":r=>`Released ${r.source.textContent.trim()||r.source.id||"draggable element"}`},sg={"container:dragging":"draggable-container--is-dragging","source:dragging":"draggable-source--is-dragging","source:placed":"draggable-source--placed","container:placed":"draggable-container--placed","body:dragging":"draggable--is-dragging","draggable:over":"draggable--over","container:over":"draggable-container--over","source:original":"draggable--original",mirror:"draggable-mirror"},ag={draggable:".draggable-source",handle:null,delay:{},distance:0,placedTimeout:800,plugins:[],sensors:[],exclude:{plugins:[],sensors:[]}};class Kn{constructor(e=[document.body],t={}){if(e instanceof NodeList||e instanceof Array)this.containers=[...e];else if(e instanceof HTMLElement)this.containers=[e];else throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");this.options={...ag,...t,classes:{...sg,...t.classes||{}},announcements:{...ig,...t.announcements||{}},exclude:{plugins:t.exclude&&t.exclude.plugins||[],sensors:t.exclude&&t.exclude.sensors||[]}},this.emitter=new ng,this.dragging=!1,this.plugins=[],this.sensors=[],this[Ci]=this[Ci].bind(this),this[xn]=this[xn].bind(this),this[Li]=this[Li].bind(this),this[Pi]=this[Pi].bind(this),this[Ui]=this[Ui].bind(this),document.addEventListener("drag:start",this[Ci],!0),document.addEventListener("drag:move",this[xn],!0),document.addEventListener("drag:stop",this[Li],!0),document.addEventListener("drag:pressure",this[Pi],!0);const n=Object.values(Kn.Plugins).filter(o=>!this.options.exclude.plugins.includes(o)),i=Object.values(Kn.Sensors).filter(o=>!this.options.exclude.sensors.includes(o));this.addPlugin(...n,...this.options.plugins),this.addSensor(...i,...this.options.sensors);const s=new $h({draggable:this});this.on("mirror:created",({mirror:o})=>this.mirror=o),this.on("mirror:destroy",()=>this.mirror=null),this.trigger(s)}destroy(){document.removeEventListener("drag:start",this[Ci],!0),document.removeEventListener("drag:move",this[xn],!0),document.removeEventListener("drag:stop",this[Li],!0),document.removeEventListener("drag:pressure",this[Pi],!0);const e=new Qh({draggable:this});this.trigger(e),this.removePlugin(...this.plugins.map(t=>t.constructor)),this.removeSensor(...this.sensors.map(t=>t.constructor))}addPlugin(...e){const t=e.map(n=>new n(this));return t.forEach(n=>n.attach()),this.plugins=[...this.plugins,...t],this}removePlugin(...e){return this.plugins.filter(t=>e.includes(t.constructor)).forEach(t=>t.detach()),this.plugins=this.plugins.filter(t=>!e.includes(t.constructor)),this}addSensor(...e){const t=e.map(n=>new n(this.containers,this.options));return t.forEach(n=>n.attach()),this.sensors=[...this.sensors,...t],this}removeSensor(...e){return this.sensors.filter(t=>e.includes(t.constructor)).forEach(t=>t.detach()),this.sensors=this.sensors.filter(t=>!e.includes(t.constructor)),this}addContainer(...e){return this.containers=[...this.containers,...e],this.sensors.forEach(t=>t.addContainer(...e)),this}removeContainer(...e){return this.containers=this.containers.filter(t=>!e.includes(t)),this.sensors.forEach(t=>t.removeContainer(...e)),this}on(e,...t){return this.emitter.on(e,...t),this}off(e,t){return this.emitter.off(e,t),this}trigger(e){return this.emitter.trigger(e),this}getClassNameFor(e){return this.getClassNamesFor(e)[0]}getClassNamesFor(e){const t=this.options.classes[e];return t instanceof Array?t:typeof t=="string"||t instanceof String?[t]:[]}isDragging(){return!!this.dragging}getDraggableElements(){return this.containers.reduce((e,t)=>[...e,...this.getDraggableElementsForContainer(t)],[])}getDraggableElementsForContainer(e){return[...e.querySelectorAll(this.options.draggable)].filter(t=>t!==this.originalSource&&t!==this.mirror)}cancel(){this[Ui]()}[Ci](e){const t=Ms(e),{target:n,container:i,originalSource:s}=t;if(!this.containers.includes(i))return;if(this.options.handle&&n&&!Bt(n,this.options.handle)){t.cancel();return}this.originalSource=s,this.sourceContainer=i,this.lastPlacedSource&&this.lastPlacedContainer&&(clearTimeout(this.placedTimeoutID),this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"))),this.source=this.originalSource.cloneNode(!0),this.originalSource.parentNode.insertBefore(this.source,this.originalSource),this.originalSource.style.display="none";const o=new ml({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t});if(this.trigger(o),this.dragging=!o.canceled(),o.canceled()){this.source.remove(),this.originalSource.style.display=null;return}this.originalSource.classList.add(...this.getClassNamesFor("source:original")),this.source.classList.add(...this.getClassNamesFor("source:dragging")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:dragging")),document.body.classList.add(...this.getClassNamesFor("body:dragging")),gc(document.body,"none"),requestAnimationFrame(()=>{const a=Ms(e).clone({target:this.source});this[xn]({...e,detail:a})})}[xn](e){if(!this.dragging)return;const t=Ms(e),{container:n}=t;let i=t.target;const s=new Bh({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t});this.trigger(s),s.canceled()&&t.cancel(),i=Bt(i,this.options.draggable);const o=Bt(t.target,this.containers),a=t.overContainer||o,l=this.currentOverContainer&&a!==this.currentOverContainer,c=this.currentOver&&i!==this.currentOver,u=a&&this.currentOverContainer!==a,d=o&&i&&this.currentOver!==i;if(c){const h=new kh({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t,over:this.currentOver,overContainer:this.currentOverContainer});this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOver=null,this.trigger(h)}if(l){const h=new Vh({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t,overContainer:this.currentOverContainer});this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.currentOverContainer=null,this.trigger(h)}if(u){a.classList.add(...this.getClassNamesFor("container:over"));const h=new Gh({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t,overContainer:a});this.currentOverContainer=a,this.trigger(h)}if(d){i.classList.add(...this.getClassNamesFor("draggable:over"));const h=new gl({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t,overContainer:a,over:i});this.currentOver=i,this.trigger(h)}}[Ui](e){if(!this.dragging)return;this.dragging=!1;const t=new _l({source:this.source,originalSource:this.originalSource,sensorEvent:e?e.sensorEvent:null,sourceContainer:this.sourceContainer});this.trigger(t),t.canceled()||this.source.parentNode.insertBefore(this.originalSource,this.source),this.source.remove(),this.originalSource.style.display="",this.source.classList.remove(...this.getClassNamesFor("source:dragging")),this.originalSource.classList.remove(...this.getClassNamesFor("source:original")),this.originalSource.classList.add(...this.getClassNamesFor("source:placed")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:placed")),this.sourceContainer.classList.remove(...this.getClassNamesFor("container:dragging")),document.body.classList.remove(...this.getClassNamesFor("body:dragging")),gc(document.body,""),this.currentOver&&this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOverContainer&&this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.lastPlacedSource=this.originalSource,this.lastPlacedContainer=this.sourceContainer,this.placedTimeoutID=setTimeout(()=>{this.lastPlacedSource&&this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer&&this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed")),this.lastPlacedSource=null,this.lastPlacedContainer=null},this.options.placedTimeout);const n=new Xh({source:this.source,originalSource:this.originalSource,sensorEvent:e?e.sensorEvent:null,sourceContainer:this.sourceContainer});this.trigger(n),this.source=null,this.originalSource=null,this.currentOverContainer=null,this.currentOver=null,this.sourceContainer=null}[Li](e){this[Ui](e)}[Pi](e){if(!this.dragging)return;const t=Ms(e),n=this.source||Bt(t.originalEvent.target,this.options.draggable),i=new Wh({sensorEvent:t,source:n,pressure:t.pressure});this.trigger(i)}}Kn.Plugins={Announcement:Fm,Focusable:km,Mirror:Xm,Scrollable:Qm};Kn.Sensors={MouseSensor:Rm,TouchSensor:Cm};function Ms(r){return r.detail}function gc(r,e){r.style.webkitUserSelect=e,r.style.mozUserSelect=e,r.style.msUserSelect=e,r.style.oUserSelect=e,r.style.userSelect=e}class is extends Qt{get dragEvent(){return this.data.dragEvent}}is.type="droppable";class ed extends is{get dropzone(){return this.data.dropzone}}ed.type="droppable:start";ed.cancelable=!0;class td extends is{get dropzone(){return this.data.dropzone}}td.type="droppable:dropped";td.cancelable=!0;class rd extends is{get dropzone(){return this.data.dropzone}}rd.type="droppable:returned";rd.cancelable=!0;class nd extends is{get dropzone(){return this.data.dropzone}}nd.type="droppable:stop";nd.cancelable=!0;class ss extends Qt{get dragEvent(){return this.data.dragEvent}}ss.type="swappable";class id extends ss{}id.type="swappable:start";id.cancelable=!0;class sd extends ss{get over(){return this.data.over}get overContainer(){return this.data.overContainer}}sd.type="swappable:swap";sd.cancelable=!0;class og extends ss{get swappedElement(){return this.data.swappedElement}}og.type="swappable:swapped";class lg extends ss{}lg.type="swappable:stop";class as extends Qt{get dragEvent(){return this.data.dragEvent}}as.type="sortable";class ad extends as{get startIndex(){return this.data.startIndex}get startContainer(){return this.data.startContainer}}ad.type="sortable:start";ad.cancelable=!0;class od extends as{get currentIndex(){return this.data.currentIndex}get over(){return this.data.over}get overContainer(){return this.data.dragEvent.overContainer}}od.type="sortable:sort";od.cancelable=!0;class cg extends as{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}cg.type="sortable:sorted";class ug extends as{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}ug.type="sortable:stop";/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const El="156",yn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hg=0,_c=1,dg=2,ld=1,pg=2,xr=3,Wr=0,Lt=1,ar=2,Br=0,Xn=1,vc=2,xc=3,yc=4,fg=5,zn=100,mg=101,gg=102,Mc=103,Ec=104,_g=200,vg=201,xg=202,yg=203,cd=204,ud=205,Mg=206,Eg=207,Sg=208,bg=209,Tg=210,wg=0,Ag=1,Rg=2,Uo=3,Cg=4,Lg=5,Pg=6,Ug=7,hd=0,Dg=1,Ig=2,kr=0,Ng=1,Og=2,Fg=3,zg=4,Hg=5,dd=300,Jn=301,$n=302,Do=303,Io=304,ga=306,No=1e3,Zt=1001,Oo=1002,wt=1003,Sc=1004,Fa=1005,zt=1006,Bg=1007,es=1008,Gr=1009,kg=1010,Gg=1011,Sl=1012,pd=1013,Nr=1014,Or=1015,ts=1016,fd=1017,md=1018,on=1020,Vg=1021,Kt=1023,Wg=1024,Xg=1025,ln=1026,Qn=1027,jg=1028,gd=1029,Yg=1030,_d=1031,vd=1033,za=33776,Ha=33777,Ba=33778,ka=33779,bc=35840,Tc=35841,wc=35842,Ac=35843,qg=36196,Rc=37492,Cc=37496,Lc=37808,Pc=37809,Uc=37810,Dc=37811,Ic=37812,Nc=37813,Oc=37814,Fc=37815,zc=37816,Hc=37817,Bc=37818,kc=37819,Gc=37820,Vc=37821,Ga=36492,Wc=36494,Xc=36495,Zg=36283,jc=36284,Yc=36285,qc=36286,xd=3e3,cn=3001,Kg=3200,Jg=3201,yd=0,$g=1,un="",$e="srgb",ur="srgb-linear",_a="display-p3",Va=7680,Qg=519,e_=512,t_=513,r_=514,n_=515,i_=516,s_=517,a_=518,o_=519,Zc=35044,Kc="300 es",Fo=1035,Er=2e3,ra=2001;class fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jc=1234567;const Xi=Math.PI/180,rs=180/Math.PI;function ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function bl(r,e){return(r%e+e)%e}function l_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function c_(r,e,t){return r!==e?(t-r)/(e-r):0}function ji(r,e,t){return(1-t)*r+t*e}function u_(r,e,t,n){return ji(r,e,1-Math.exp(-t*n))}function h_(r,e=1){return e-Math.abs(bl(r,e*2)-e)}function d_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function p_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function f_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function m_(r,e){return r+Math.random()*(e-r)}function g_(r){return r*(.5-Math.random())}function __(r){r!==void 0&&(Jc=r);let e=Jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(r){return r*Xi}function x_(r){return r*rs}function zo(r){return(r&r-1)===0&&r!==0}function y_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function na(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function M_(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),m=s((n-e)/2),x=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*x,l*m,a*c);break;case"YXY":r.set(l*m,a*u,l*x,a*c);break;case"ZYZ":r.set(l*x,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:Xi,RAD2DEG:rs,generateUUID:ai,clamp:vt,euclideanModulo:bl,mapLinear:l_,inverseLerp:c_,lerp:ji,damp:u_,pingpong:h_,smoothstep:d_,smootherstep:p_,randInt:f_,randFloat:m_,randFloatSpread:g_,seededRandom:__,degToRad:v_,radToDeg:x_,isPowerOfTwo:zo,ceilPowerOfTwo:y_,floorPowerOfTwo:na,setQuaternionFromProperEuler:M_,normalize:bt,denormalize:Hn};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],x=n[8],v=i[0],f=i[3],p=i[6],w=i[1],M=i[4],T=i[7],R=i[2],D=i[5],C=i[8];return s[0]=o*v+a*w+l*R,s[3]=o*f+a*M+l*D,s[6]=o*p+a*T+l*C,s[1]=c*v+u*w+d*R,s[4]=c*f+u*M+d*D,s[7]=c*p+u*T+d*C,s[2]=h*v+m*w+x*R,s[5]=h*f+m*M+x*D,s[8]=h*p+m*T+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,m=c*s-o*l,x=t*d+n*h+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Be;function Md(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ns(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function S_(){const r=ns("canvas");return r.style.display="block",r}const $c={};function Yi(r){r in $c||($c[r]=!0,console.warn(r))}function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const b_=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),T_=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function w_(r){return r.convertSRGBToLinear().applyMatrix3(T_)}function A_(r){return r.applyMatrix3(b_).convertLinearToSRGB()}const R_={[ur]:r=>r,[$e]:r=>r.convertSRGBToLinear(),[_a]:w_},C_={[ur]:r=>r,[$e]:r=>r.convertLinearToSRGB(),[_a]:A_},Gt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ur},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=R_[e],i=C_[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let En;class Ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{En===void 0&&(En=ns("canvas")),En.width=e.width,En.height=e.height;const n=En.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=En}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L_=0;class Sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ja(i[o].image)):s.push(ja(i[o]))}else s=ja(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ja(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ed.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P_=0;class Pt extends fn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Zt,i=Zt,s=zt,o=es,a=Kt,l=Gr,c=Pt.DEFAULT_ANISOTROPY,u=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=ai(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===cn?$e:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?cn:xd}set encoding(e){Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cn?$e:un}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=dd;Pt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const o=e.elements,a=o[0],l=o[4],c=o[8],u=o[1],d=o[5],h=o[9],m=o[2],x=o[6],v=o[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(h-x)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(h+x)<.1&&Math.abs(a+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(a+1)/2,w=(d+1)/2,M=(v+1)/2,T=(l+u)/4,R=(c+m)/4,D=(h+x)/4;return p>w&&p>M?p<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(p),i=T/n,s=R/n):w>M?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=T/i,s=D/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=R/s,i=D/s),this.set(n,i,s,t),this}let f=Math.sqrt((x-h)*(x-h)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(f)<.001&&(f=1),this.x=(x-h)/f,this.y=(c-m)/f,this.z=(u-l)/f,this.w=Math.acos((a+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U_ extends fn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Yi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cn?$e:un),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends U_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bd extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class D_ extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(d!==v||l!==h||c!==m||u!==x){let f=1-a;const p=l*h+c*m+u*x+d*v,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),D=Math.atan2(R,p*w);f=Math.sin(f*D)/R,a=Math.sin(a*D)/R}const T=a*w;if(l=l*f+h*T,c=c*f+m*T,u=u*f+x*T,d=d*f+v*T,f===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*d+l*m-c*h,e[t+1]=l*x+u*h+c*d-a*m,e[t+2]=c*x+u*m+a*h-l*d,e[t+3]=u*x-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),m=l(i/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"YXZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"ZXY":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"ZYX":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"YZX":this._x=h*u*d+c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d-h*m*x;break;case"XZY":this._x=h*u*d-c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,d=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new N,Qc=new dn;class os{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Sn.copy(e.boundingBox),Sn.applyMatrix4(e.matrixWorld),this.union(Sn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)fr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fr)}else i.boundingBox===null&&i.computeBoundingBox(),Sn.copy(i.boundingBox),Sn.applyMatrix4(e.matrixWorld),this.union(Sn)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),Es.subVectors(this.max,Di),bn.subVectors(e.a,Di),Tn.subVectors(e.b,Di),wn.subVectors(e.c,Di),Cr.subVectors(Tn,bn),Lr.subVectors(wn,Tn),Kr.subVectors(bn,wn);let t=[0,-Cr.z,Cr.y,0,-Lr.z,Lr.y,0,-Kr.z,Kr.y,Cr.z,0,-Cr.x,Lr.z,0,-Lr.x,Kr.z,0,-Kr.x,-Cr.y,Cr.x,0,-Lr.y,Lr.x,0,-Kr.y,Kr.x,0];return!qa(t,bn,Tn,wn,Es)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,bn,Tn,wn,Es))?!1:(Ss.crossVectors(Cr,Lr),t=[Ss.x,Ss.y,Ss.z],qa(t,bn,Tn,wn,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pr=[new N,new N,new N,new N,new N,new N,new N,new N],fr=new N,Sn=new os,bn=new N,Tn=new N,wn=new N,Cr=new N,Lr=new N,Kr=new N,Di=new N,Es=new N,Ss=new N,Jr=new N;function qa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Jr.fromArray(r,s);const a=i.x*Math.abs(Jr.x)+i.y*Math.abs(Jr.y)+i.z*Math.abs(Jr.z),l=e.dot(Jr),c=t.dot(Jr),u=n.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const I_=new os,Ii=new N,Za=new N;class va{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):I_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(Za)),this.expandByPoint(Ii.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mr=new N,Ka=new N,bs=new N,Pr=new N,Ja=new N,Ts=new N,$a=new N;class xa{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ka.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Ka);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=Pr.dot(this.direction),l=-Pr.dot(bs),c=Pr.lengthSq(),u=Math.abs(1-o*o);let d,h,m,x;if(u>0)if(d=o*l-a,h=o*a-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const v=1/u;d*=v,h*=v,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ka).addScaledVector(bs,h),m}intersectSphere(e,t){mr.subVectors(e.center,this.origin);const n=mr.dot(this.direction),i=mr.dot(mr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,n,i,s){Ja.subVectors(t,e),Ts.subVectors(n,e),$a.crossVectors(Ja,Ts);let o=this.direction.dot($a),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pr.subVectors(this.origin,e);const l=a*this.direction.dot(Ts.crossVectors(Pr,Ts));if(l<0)return null;const c=a*this.direction.dot(Ja.cross(Pr));if(c<0||l+c>o)return null;const u=-a*Pr.dot($a);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,s,o,a,l,c,u,d,h,m,x,v,f){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,d,h,m,x,v,f)}set(e,t,n,i,s,o,a,l,c,u,d,h,m,x,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=x,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/An.setFromMatrixColumn(e,0).length(),s=1/An.setFromMatrixColumn(e,1).length(),o=1/An.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,x=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,x=c*u,v=c*d;t[0]=h+v*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,x=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,x=a*u,v=a*d;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=x*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+x,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,O_)}lookAt(e,t,n){const i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Ur.crossVectors(n,It),Ur.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Ur.crossVectors(n,It)),Ur.normalize(),ws.crossVectors(It,Ur),i[0]=Ur.x,i[4]=ws.x,i[8]=It.x,i[1]=Ur.y,i[5]=ws.y,i[9]=It.y,i[2]=Ur.z,i[6]=ws.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],x=n[2],v=n[6],f=n[10],p=n[14],w=n[3],M=n[7],T=n[11],R=n[15],D=i[0],C=i[4],ee=i[8],E=i[12],b=i[1],oe=i[5],he=i[9],X=i[13],j=i[2],V=i[6],te=i[10],W=i[14],$=i[3],ue=i[7],ce=i[11],F=i[15];return s[0]=o*D+a*b+l*j+c*$,s[4]=o*C+a*oe+l*V+c*ue,s[8]=o*ee+a*he+l*te+c*ce,s[12]=o*E+a*X+l*W+c*F,s[1]=u*D+d*b+h*j+m*$,s[5]=u*C+d*oe+h*V+m*ue,s[9]=u*ee+d*he+h*te+m*ce,s[13]=u*E+d*X+h*W+m*F,s[2]=x*D+v*b+f*j+p*$,s[6]=x*C+v*oe+f*V+p*ue,s[10]=x*ee+v*he+f*te+p*ce,s[14]=x*E+v*X+f*W+p*F,s[3]=w*D+M*b+T*j+R*$,s[7]=w*C+M*oe+T*V+R*ue,s[11]=w*ee+M*he+T*te+R*ce,s[15]=w*E+M*X+T*W+R*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],x=e[3],v=e[7],f=e[11],p=e[15];return x*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*m-n*l*m)+v*(+t*l*m-t*c*h+s*o*h-i*o*m+i*c*u-s*l*u)+f*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*u-n*c*u)+p*(-i*a*u-t*l*d+t*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],x=e[12],v=e[13],f=e[14],p=e[15],w=d*f*c-v*h*c+v*l*m-a*f*m-d*l*p+a*h*p,M=x*h*c-u*f*c-x*l*m+o*f*m+u*l*p-o*h*p,T=u*v*c-x*d*c+x*a*m-o*v*m-u*a*p+o*d*p,R=x*d*l-u*v*l-x*a*h+o*v*h+u*a*f-o*d*f,D=t*w+n*M+i*T+s*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(v*h*s-d*f*s-v*i*m+n*f*m+d*i*p-n*h*p)*C,e[2]=(a*f*s-v*l*s+v*i*c-n*f*c-a*i*p+n*l*p)*C,e[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*m-n*l*m)*C,e[4]=M*C,e[5]=(u*f*s-x*h*s+x*i*m-t*f*m-u*i*p+t*h*p)*C,e[6]=(x*l*s-o*f*s-x*i*c+t*f*c+o*i*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*m+t*l*m)*C,e[8]=T*C,e[9]=(x*d*s-u*v*s-x*n*m+t*v*m+u*n*p-t*d*p)*C,e[10]=(o*v*s-x*a*s+x*n*c-t*v*c-o*n*p+t*a*p)*C,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*m-t*a*m)*C,e[12]=R*C,e[13]=(u*v*i-x*d*i+x*n*h-t*v*h-u*n*f+t*d*f)*C,e[14]=(x*a*i-o*v*i-x*n*l+t*v*l+o*n*f-t*a*f)*C,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,m=s*u,x=s*d,v=o*u,f=o*d,p=a*d,w=l*c,M=l*u,T=l*d,R=n.x,D=n.y,C=n.z;return i[0]=(1-(v+p))*R,i[1]=(m+T)*R,i[2]=(x-M)*R,i[3]=0,i[4]=(m-T)*D,i[5]=(1-(h+p))*D,i[6]=(f+w)*D,i[7]=0,i[8]=(x+M)*C,i[9]=(f-w)*C,i[10]=(1-(h+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=An.set(i[0],i[1],i[2]).length();const o=An.set(i[4],i[5],i[6]).length(),a=An.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Vt.copy(this);const l=1/s,c=1/o,u=1/a;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=c,Vt.elements[5]*=c,Vt.elements[6]*=c,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Er){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let m,x;if(a===Er)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ra)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Er){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(o-s),h=(t+e)*c,m=(n+i)*u;let x,v;if(a===Er)x=(o+s)*d,v=-2*d;else if(a===ra)x=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const An=new N,Vt=new it,N_=new N(0,0,0),O_=new N(1,1,1),Ur=new N,ws=new N,It=new N,eu=new it,tu=new dn;class ya{constructor(e=0,t=0,n=0,i=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const ru=new N,Rn=new dn,gr=new it,As=new N,Ni=new N,z_=new N,H_=new dn,nu=new N(1,0,0),iu=new N(0,1,0),su=new N(0,0,1),B_={type:"added"},k_={type:"removed"};class ft extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new N,t=new ya,n=new dn,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Be}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.multiply(Rn),this}rotateOnWorldAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.premultiply(Rn),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(Ni,As,this.up):gr.lookAt(As,Ni,this.up),this.quaternion.setFromRotationMatrix(gr),i&&(gr.extractRotation(i.matrixWorld),Rn.setFromRotationMatrix(gr),this.quaternion.premultiply(Rn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(B_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,H_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new N(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new N,_r=new N,Qa=new N,vr=new N,Cn=new N,Ln=new N,au=new N,eo=new N,to=new N,ro=new N;let Rs=!1;class Yt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wt.subVectors(i,t),_r.subVectors(n,t),Qa.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(_r),l=Wt.dot(Qa),c=_r.dot(_r),u=_r.dot(Qa),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vr),vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getUV(e,t,n,i,s,o,a,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,vr),l.setScalar(0),l.addScaledVector(s,vr.x),l.addScaledVector(o,vr.y),l.addScaledVector(a,vr.z),l}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),_r.subVectors(e,t),Wt.cross(_r).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Wt.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Cn.subVectors(i,n),Ln.subVectors(s,n),eo.subVectors(e,n);const l=Cn.dot(eo),c=Ln.dot(eo);if(l<=0&&c<=0)return t.copy(n);to.subVectors(e,i);const u=Cn.dot(to),d=Ln.dot(to);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Cn,o);ro.subVectors(e,s);const m=Cn.dot(ro),x=Ln.dot(ro);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Ln,a);const f=u*x-m*d;if(f<=0&&d-u>=0&&m-x>=0)return au.subVectors(s,i),a=(d-u)/(d-u+(m-x)),t.copy(i).addScaledVector(au,a);const p=1/(f+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(Cn,o).addScaledVector(Ln,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let G_=0;class oi extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Xn,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(n.blending=this.blending),this.side!==Wr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xt={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function no(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Gt.workingColorSpace){if(e=bl(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=no(o,s,e+1/3),this.g=no(o,s,e),this.b=no(o,s,e-1/3)}return Gt.toWorkingColorSpace(this,i),this}setStyle(e,t=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){const n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return Gt.fromWorkingColorSpace(_t.copy(this),e),Math.round(vt(_t.r*255,0,255))*65536+Math.round(vt(_t.g*255,0,255))*256+Math.round(vt(_t.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,i=_t.g,s=_t.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=$e){Gt.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,i=_t.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=n,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(Cs);const n=ji(Xt.h,Cs.h,t),i=ji(Xt.s,Cs.s,t),s=ji(Xt.l,Cs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Ge;Ge.NAMES=Td;class Ma extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new N,Ls=new Ie;class cr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRange={offset:0,count:-1},this.gpuType=Or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class wd extends cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ad extends cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends cr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let V_=0;const Ft=new it,io=new ft,Pn=new N,Nt=new os,Oi=new os,ut=new N;class Tr extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?Ad:wd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Nt.min,Oi.min),Nt.expandByPoint(ut),ut.addVectors(Nt.max,Oi.max),Nt.expandByPoint(ut)):(Nt.expandByPoint(Oi.min),Nt.expandByPoint(Oi.max))}Nt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ut.fromBufferAttribute(a,c),l&&(Pn.fromBufferAttribute(e,c),ut.add(Pn)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cr(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new N,u[b]=new N;const d=new N,h=new N,m=new N,x=new Ie,v=new Ie,f=new Ie,p=new N,w=new N;function M(b,oe,he){d.fromArray(i,b*3),h.fromArray(i,oe*3),m.fromArray(i,he*3),x.fromArray(o,b*2),v.fromArray(o,oe*2),f.fromArray(o,he*2),h.sub(d),m.sub(d),v.sub(x),f.sub(x);const X=1/(v.x*f.y-f.x*v.y);isFinite(X)&&(p.copy(h).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(X),w.copy(m).multiplyScalar(v.x).addScaledVector(h,-f.x).multiplyScalar(X),c[b].add(p),c[oe].add(p),c[he].add(p),u[b].add(w),u[oe].add(w),u[he].add(w))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,oe=T.length;b<oe;++b){const he=T[b],X=he.start,j=he.count;for(let V=X,te=X+j;V<te;V+=3)M(n[V+0],n[V+1],n[V+2])}const R=new N,D=new N,C=new N,ee=new N;function E(b){C.fromArray(s,b*3),ee.copy(C);const oe=c[b];R.copy(oe),R.sub(C.multiplyScalar(C.dot(oe))).normalize(),D.crossVectors(ee,oe);const he=D.dot(u[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=he}for(let b=0,oe=T.length;b<oe;++b){const he=T[b],X=he.start,j=he.count;for(let V=X,te=X+j;V<te;V+=3)E(n[V+0]),E(n[V+1]),E(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),v=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let p=0;p<u;p++)h[x++]=c[m++]}return new cr(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new it,$r=new xa,Ps=new va,lu=new N,Un=new N,Dn=new N,In=new N,so=new N,Us=new N,Ds=new Ie,Is=new Ie,Ns=new Ie,cu=new N,uu=new N,hu=new N,Os=new N,Fs=new N;class Rt extends ft{constructor(e=new Tr,t=new Ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(so.fromBufferAttribute(d,e),o?Us.addScaledVector(so,u):Us.addScaledVector(so.sub(t),u))}t.add(Us)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(Ps.containsPoint($r.origin)===!1&&($r.intersectSphere(Ps,lu)===null||$r.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(ou.copy(s).invert(),$r.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&$r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const f=h[x],p=o[f.materialIndex],w=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let T=w,R=M;T<R;T+=3){const D=a.getX(T),C=a.getX(T+1),ee=a.getX(T+2);i=zs(this,p,e,n,c,u,d,D,C,ee),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=x,p=v;f<p;f+=3){const w=a.getX(f),M=a.getX(f+1),T=a.getX(f+2);i=zs(this,o,e,n,c,u,d,w,M,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const f=h[x],p=o[f.materialIndex],w=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=w,R=M;T<R;T+=3){const D=T,C=T+1,ee=T+2;i=zs(this,p,e,n,c,u,d,D,C,ee),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=x,p=v;f<p;f+=3){const w=f,M=f+1,T=f+2;i=zs(this,o,e,n,c,u,d,w,M,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function W_(r,e,t,n,i,s,o,a){let l;if(e.side===Lt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Wr,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:r}}function zs(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Un),r.getVertexPosition(l,Dn),r.getVertexPosition(c,In);const u=W_(r,e,t,n,Un,Dn,In,Os);if(u){i&&(Ds.fromBufferAttribute(i,a),Is.fromBufferAttribute(i,l),Ns.fromBufferAttribute(i,c),u.uv=Yt.getInterpolation(Os,Un,Dn,In,Ds,Is,Ns,new Ie)),s&&(Ds.fromBufferAttribute(s,a),Is.fromBufferAttribute(s,l),Ns.fromBufferAttribute(s,c),u.uv1=Yt.getInterpolation(Os,Un,Dn,In,Ds,Is,Ns,new Ie),u.uv2=u.uv1),o&&(cu.fromBufferAttribute(o,a),uu.fromBufferAttribute(o,l),hu.fromBufferAttribute(o,c),u.normal=Yt.getInterpolation(Os,Un,Dn,In,cu,uu,hu,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Yt.getNormal(Un,Dn,In,d.normal),u.face=d}return u}class li extends Tr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(d,2));function x(v,f,p,w,M,T,R,D,C,ee,E){const b=T/C,oe=R/ee,he=T/2,X=R/2,j=D/2,V=C+1,te=ee+1;let W=0,$=0;const ue=new N;for(let ce=0;ce<te;ce++){const F=ce*oe-X;for(let K=0;K<V;K++){const me=K*b-he;ue[v]=me*w,ue[f]=F*M,ue[p]=j,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[f]=0,ue[p]=D>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(K/C),d.push(1-ce/ee),W+=1}}for(let ce=0;ce<ee;ce++)for(let F=0;F<C;F++){const K=h+F+V*ce,me=h+F+V*(ce+1),be=h+(F+1)+V*(ce+1),we=h+(F+1)+V*ce;l.push(K,me,we),l.push(me,be,we),$+=6}a.addGroup(m,$,E),m+=$,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ei(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(r){const e={};for(let t=0;t<r.length;t++){const n=ei(r[t]);for(const i in n)e[i]=n[i]}return e}function X_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Rd(r){return r.getRenderTarget()===null?r.outputColorSpace:ur}const j_={clone:ei,merge:Tt};var Y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cd extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends Cd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nn=-90,On=1;class Z_ extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Ht(Nn,On,e,t);i.layers=this.layers,this.add(i);const s=new Ht(Nn,On,e,t);s.layers=this.layers,this.add(s);const o=new Ht(Nn,On,e,t);o.layers=this.layers,this.add(o);const a=new Ht(Nn,On,e,t);a.layers=this.layers,this.add(a);const l=new Ht(Nn,On,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Nn,On,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Er)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ld extends Pt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Jn,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Yi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cn?$e:un),this.texture=new Ld(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new li(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Br});s.uniforms.tEquirect.value=t;const o=new Rt(i,s),a=t.minFilter;return t.minFilter===es&&(t.minFilter=zt),new Z_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ao=new N,J_=new N,$_=new Be;class Ir{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ao.subVectors(n,t).cross(J_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$_.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new va,Hs=new N;class wl{constructor(e=new Ir,t=new Ir,n=new Ir,i=new Ir,s=new Ir,o=new Ir){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Er){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],m=i[8],x=i[9],v=i[10],f=i[11],p=i[12],w=i[13],M=i[14],T=i[15];if(n[0].setComponents(l-s,h-c,f-m,T-p).normalize(),n[1].setComponents(l+s,h+c,f+m,T+p).normalize(),n[2].setComponents(l+o,h+u,f+x,T+w).normalize(),n[3].setComponents(l-o,h-u,f-x,T-w).normalize(),n[4].setComponents(l-a,h-d,f-v,T-M).normalize(),t===Er)n[5].setComponents(l+a,h+d,f+v,T+M).normalize();else if(t===ra)n[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hs.x=i.normal.x>0?e.max.x:e.min.x,Hs.y=i.normal.y>0?e.max.y:e.min.y,Hs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Q_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,m=u.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,h):(t?r.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class ls extends Tr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,m=[],x=[],v=[],f=[];for(let p=0;p<u;p++){const w=p*h-o;for(let M=0;M<c;M++){const T=M*d-s;x.push(T,-w,0),v.push(0,0,1),f.push(M/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const M=w+c*p,T=w+c*(p+1),R=w+1+c*(p+1),D=w+1+c*p;m.push(M,T,D),m.push(T,R,D)}this.setIndex(m),this.setAttribute("position",new kt(x,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tv=`#ifdef USE_ALPHAHASH
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
#endif`,rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hv=`#ifdef USE_IRIDESCENCE
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
#endif`,dv=`#ifdef USE_BUMPMAP
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mv=`#define PI 3.141592653589793
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
} // validated`,Ev=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sv=`vec3 transformedNormal = objectNormal;
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
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hv=`#ifdef USE_GRADIENTMAP
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
}`,Bv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wv=`uniform bool receiveShadow;
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
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
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
#endif`,Jv=`struct PhysicalMaterial {
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
}`,$v=`
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
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
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
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
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
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
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
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,ux=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,_x=`#define NORMAL
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
}`,vx=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,Mx=`#define STANDARD
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
}`,ze={alphahash_fragment:ev,alphahash_pars_fragment:tv,alphamap_fragment:rv,alphamap_pars_fragment:nv,alphatest_fragment:iv,alphatest_pars_fragment:sv,aomap_fragment:av,aomap_pars_fragment:ov,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:dv,clipping_planes_fragment:pv,clipping_planes_pars_fragment:fv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:_v,color_pars_fragment:vv,color_pars_vertex:xv,color_vertex:yv,common:Mv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:Sv,displacementmap_pars_vertex:bv,displacementmap_vertex:Tv,emissivemap_fragment:wv,emissivemap_pars_fragment:Av,colorspace_fragment:Rv,colorspace_pars_fragment:Cv,envmap_fragment:Lv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Uv,envmap_pars_vertex:Dv,envmap_physical_pars_fragment:Xv,envmap_vertex:Iv,fog_vertex:Nv,fog_pars_vertex:Ov,fog_fragment:Fv,fog_pars_fragment:zv,gradientmap_pars_fragment:Hv,lightmap_fragment:Bv,lightmap_pars_fragment:kv,lights_lambert_fragment:Gv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Wv,lights_toon_fragment:jv,lights_toon_pars_fragment:Yv,lights_phong_fragment:qv,lights_phong_pars_fragment:Zv,lights_physical_fragment:Kv,lights_physical_pars_fragment:Jv,lights_fragment_begin:$v,lights_fragment_maps:Qv,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:s0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:u0,morphcolor_vertex:h0,morphnormal_vertex:d0,morphtarget_pars_vertex:p0,morphtarget_vertex:f0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:_0,normal_pars_vertex:v0,normal_vertex:x0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:T0,packing:w0,premultiplied_alpha_fragment:A0,project_vertex:R0,dithering_fragment:C0,dithering_pars_fragment:L0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:I0,shadowmap_vertex:N0,shadowmask_pars_fragment:O0,skinbase_vertex:F0,skinning_pars_vertex:z0,skinning_vertex:H0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:G0,tonemapping_fragment:V0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:j0,uv_pars_fragment:Y0,uv_pars_vertex:q0,uv_vertex:Z0,worldpos_vertex:K0,background_vert:J0,background_frag:$0,backgroundCube_vert:Q0,backgroundCube_frag:ex,cube_vert:tx,cube_frag:rx,depth_vert:nx,depth_frag:ix,distanceRGBA_vert:sx,distanceRGBA_frag:ax,equirect_vert:ox,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:ux,meshbasic_vert:hx,meshbasic_frag:dx,meshlambert_vert:px,meshlambert_frag:fx,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:_x,meshnormal_frag:vx,meshphong_vert:xx,meshphong_frag:yx,meshphysical_vert:Mx,meshphysical_frag:Ex,meshtoon_vert:Sx,meshtoon_frag:bx,points_vert:Tx,points_frag:wx,shadow_vert:Ax,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Lx},Me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ir={basic:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Tt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Tt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Tt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Tt([Me.points,Me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Tt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Tt([Me.common,Me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Tt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Tt([Me.sprite,Me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Tt([Me.common,Me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Tt([Me.lights,Me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ir.physical={uniforms:Tt([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Bs={r:0,b:0,g:0};function Px(r,e,t,n,i,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function x(f,p){let w=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,l):M&&M.isColor&&(v(M,1),w=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||w)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ga)?(u===void 0&&(u=new Rt(new li(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ei(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=M.colorSpace!==$e,(d!==M||h!==M.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Rt(new ls(2,2),new pn({name:"BackgroundMaterial",uniforms:ei(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=M.colorSpace!==$e,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(Bs,Rd(r)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(a,l)},render:x}}function Ux(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function d(j,V,te,W,$){let ue=!1;if(o){const ce=v(W,te,V);c!==ce&&(c=ce,m(c.object)),ue=p(j,W,te,$),ue&&w(j,W,te,$)}else{const ce=V.wireframe===!0;(c.geometry!==W.id||c.program!==te.id||c.wireframe!==ce)&&(c.geometry=W.id,c.program=te.id,c.wireframe=ce,ue=!0)}$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,ee(j,V,te,W),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(j){return n.isWebGL2?r.bindVertexArray(j):s.bindVertexArrayOES(j)}function x(j){return n.isWebGL2?r.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function v(j,V,te){const W=te.wireframe===!0;let $=a[j.id];$===void 0&&($={},a[j.id]=$);let ue=$[V.id];ue===void 0&&(ue={},$[V.id]=ue);let ce=ue[W];return ce===void 0&&(ce=f(h()),ue[W]=ce),ce}function f(j){const V=[],te=[],W=[];for(let $=0;$<i;$++)V[$]=0,te[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:W,object:j,attributes:{},index:null}}function p(j,V,te,W){const $=c.attributes,ue=V.attributes;let ce=0;const F=te.getAttributes();for(const K in F)if(F[K].location>=0){const me=$[K];let be=ue[K];if(be===void 0&&(K==="instanceMatrix"&&j.instanceMatrix&&(be=j.instanceMatrix),K==="instanceColor"&&j.instanceColor&&(be=j.instanceColor)),me===void 0||me.attribute!==be||be&&me.data!==be.data)return!0;ce++}return c.attributesNum!==ce||c.index!==W}function w(j,V,te,W){const $={},ue=V.attributes;let ce=0;const F=te.getAttributes();for(const K in F)if(F[K].location>=0){let me=ue[K];me===void 0&&(K==="instanceMatrix"&&j.instanceMatrix&&(me=j.instanceMatrix),K==="instanceColor"&&j.instanceColor&&(me=j.instanceColor));const be={};be.attribute=me,me&&me.data&&(be.data=me.data),$[K]=be,ce++}c.attributes=$,c.attributesNum=ce,c.index=W}function M(){const j=c.newAttributes;for(let V=0,te=j.length;V<te;V++)j[V]=0}function T(j){R(j,0)}function R(j,V){const te=c.newAttributes,W=c.enabledAttributes,$=c.attributeDivisors;te[j]=1,W[j]===0&&(r.enableVertexAttribArray(j),W[j]=1),$[j]!==V&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,V),$[j]=V)}function D(){const j=c.newAttributes,V=c.enabledAttributes;for(let te=0,W=V.length;te<W;te++)V[te]!==j[te]&&(r.disableVertexAttribArray(te),V[te]=0)}function C(j,V,te,W,$,ue,ce){ce===!0?r.vertexAttribIPointer(j,V,te,$,ue):r.vertexAttribPointer(j,V,te,W,$,ue)}function ee(j,V,te,W){if(n.isWebGL2===!1&&(j.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const $=W.attributes,ue=te.getAttributes(),ce=V.defaultAttributeValues;for(const F in ue){const K=ue[F];if(K.location>=0){let me=$[F];if(me===void 0&&(F==="instanceMatrix"&&j.instanceMatrix&&(me=j.instanceMatrix),F==="instanceColor"&&j.instanceColor&&(me=j.instanceColor)),me!==void 0){const be=me.normalized,we=me.itemSize,Te=t.get(me);if(Te===void 0)continue;const Re=Te.buffer,Ae=Te.type,He=Te.bytesPerElement,et=n.isWebGL2===!0&&(Ae===r.INT||Ae===r.UNSIGNED_INT||me.gpuType===pd);if(me.isInterleavedBufferAttribute){const Ue=me.data,_=Ue.stride,L=me.offset;if(Ue.isInstancedInterleavedBuffer){for(let I=0;I<K.locationSize;I++)R(K.location+I,Ue.meshPerAttribute);j.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let I=0;I<K.locationSize;I++)T(K.location+I);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let I=0;I<K.locationSize;I++)C(K.location+I,we/K.locationSize,Ae,be,_*He,(L+we/K.locationSize*I)*He,et)}else{if(me.isInstancedBufferAttribute){for(let Ue=0;Ue<K.locationSize;Ue++)R(K.location+Ue,me.meshPerAttribute);j.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ue=0;Ue<K.locationSize;Ue++)T(K.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Ue=0;Ue<K.locationSize;Ue++)C(K.location+Ue,we/K.locationSize,Ae,be,we*He,we/K.locationSize*Ue*He,et)}}else if(ce!==void 0){const be=ce[F];if(be!==void 0)switch(be.length){case 2:r.vertexAttrib2fv(K.location,be);break;case 3:r.vertexAttrib3fv(K.location,be);break;case 4:r.vertexAttrib4fv(K.location,be);break;default:r.vertexAttrib1fv(K.location,be)}}}}D()}function E(){he();for(const j in a){const V=a[j];for(const te in V){const W=V[te];for(const $ in W)x(W[$].object),delete W[$];delete V[te]}delete a[j]}}function b(j){if(a[j.id]===void 0)return;const V=a[j.id];for(const te in V){const W=V[te];for(const $ in W)x(W[$].object),delete W[$];delete V[te]}delete a[j.id]}function oe(j){for(const V in a){const te=a[V];if(te[j.id]===void 0)continue;const W=te[j.id];for(const $ in W)x(W[$].object),delete W[$];delete te[j.id]}}function he(){X(),u=!0,c!==l&&(c=l,m(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:he,resetDefaultState:X,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:oe,initAttributes:M,enableAttribute:T,disableUnusedAttributes:D}}function Dx(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Ix(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,T=o||e.has("OES_texture_float"),R=M&&T,D=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:D}}function Nx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ir,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,p=r.get(d);if(!i||x===null||x.length===0||s&&!f)s?u(null):c();else{const w=s?0:n,M=w*4;let T=p.clippingState||null;l.value=T,T=u(x,h,M,m);for(let R=0;R!==M;++R)T[R]=t[R];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,x){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=l.value,x!==!0||f===null){const p=m+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,T=m;M!==v;++M,T+=4)o.copy(d[M]).applyMatrix4(w,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Ox(r){let e=new WeakMap;function t(o,a){return a===Do?o.mapping=Jn:a===Io&&(o.mapping=$n),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Do||a===Io)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new K_(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ud extends Cd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kn=4,du=[.125,.215,.35,.446,.526,.582],nn=20,oo=new Ud,pu=new Ge;let lo=null;const en=(1+Math.sqrt(5))/2,Fn=1/en,fu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,en,Fn),new N(0,en,-Fn),new N(Fn,0,en),new N(-Fn,0,en),new N(en,Fn,0),new N(-en,Fn,0)];class mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo),e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:ts,format:Kt,colorSpace:ur,depthBuffer:!1},i=gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fx(s)),this._blurMaterial=zx(s,e,t)}return i}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,i){const s=new Ht(90,1,t,n),o=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(pu),l.toneMapping=kr,l.autoClear=!1;const d=new Ma({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),h=new Rt(new li,d);let m=!1;const x=e.background;x?x.isColor&&(d.color.copy(x),e.background=null,m=!0):(d.color.copy(pu),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(s.up.set(0,o[v],0),s.lookAt(a[v],0,0)):f===1?(s.up.set(0,0,o[v]),s.lookAt(0,a[v],0)):(s.up.set(0,o[v],0),s.lookAt(0,0,a[v]));const p=this._cubeSize;ks(i,f*p,v>2?p:0,p,p),l.setRenderTarget(i),m&&l.render(h,s),l.render(e,s)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Jn||e.mapping===$n;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=fu[(i-1)%fu.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Rt(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nn-1),v=s/x,f=isFinite(s)?1+Math.floor(u*v):nn;f>nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${nn}`);const p=[];let w=0;for(let C=0;C<nn;++C){const ee=C/v,E=Math.exp(-ee*ee/2);p.push(E),C===0?w+=E:C<f&&(w+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=x,h.mipInt.value=M-n;const T=this._sizeLods[i],R=3*T*(i>M-kn?i-M+kn:0),D=4*(this._cubeSize-T);ks(t,R,D,3*T,2*T),l.setRenderTarget(t),l.render(d,oo)}}function Fx(r){const e=[],t=[],n=[];let i=r;const s=r-kn+1+du.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-kn?l=du[o-r+kn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,v=3,f=2,p=1,w=new Float32Array(v*x*m),M=new Float32Array(f*x*m),T=new Float32Array(p*x*m);for(let D=0;D<m;D++){const C=D%3*2/3-1,ee=D>2?0:-1,E=[C,ee,0,C+2/3,ee,0,C+2/3,ee+1,0,C,ee,0,C+2/3,ee+1,0,C,ee+1,0];w.set(E,v*x*D),M.set(h,f*x*D);const b=[D,D,D,D,D,D];T.set(b,p*x*D)}const R=new Tr;R.setAttribute("position",new cr(w,v)),R.setAttribute("uv",new cr(M,f)),R.setAttribute("faceIndex",new cr(T,p)),e.push(R),i>kn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gu(r,e,t){const n=new hn(r,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function zx(r,e,t){const n=new Float32Array(nn),i=new N(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function _u(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function vu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function Hx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Do||l===Io,u=l===Jn||l===$n;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new mu(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new mu(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kx(r,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const v=m[x];for(let f=0,p=v.length;f<p;f++)e.update(v[f],r.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,x=d.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let M=0,T=w.length;M<T;M+=3){const R=w[M+0],D=w[M+1],C=w[M+2];h.push(R,D,D,C,C,R)}}else if(x!==void 0){const w=x.array;v=x.version;for(let M=0,T=w.length/3-1;M<T;M+=3){const R=M+0,D=M+1,C=M+2;h.push(R,D,D,C,C,R)}}else return;const f=new(Md(h)?Ad:wd)(h,1);f.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,f)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Gx(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,a,h*l),t.update(m,s,1)}function d(h,m,x){if(x===0)return;let v,f;if(i)v=r,f="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](s,m,a,h*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function Vx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wx(r,e){return r[0]-e[0]}function Xx(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jx(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==x){let w=function(){X.dispose(),s.delete(u),u.removeEventListener("dispose",w)};v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],ee=u.morphAttributes.color||[];let E=0;M===!0&&(E=1),T===!0&&(E=2),R===!0&&(E=3);let b=u.attributes.position.count*E,oe=1;b>e.maxTextureSize&&(oe=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const he=new Float32Array(b*oe*4*x),X=new bd(he,b,oe,x);X.type=Or,X.needsUpdate=!0;const j=E*4;for(let V=0;V<x;V++){const te=D[V],W=C[V],$=ee[V],ue=b*oe*4*V;for(let ce=0;ce<te.count;ce++){const F=ce*j;M===!0&&(o.fromBufferAttribute(te,ce),he[ue+F+0]=o.x,he[ue+F+1]=o.y,he[ue+F+2]=o.z,he[ue+F+3]=0),T===!0&&(o.fromBufferAttribute(W,ce),he[ue+F+4]=o.x,he[ue+F+5]=o.y,he[ue+F+6]=o.z,he[ue+F+7]=0),R===!0&&(o.fromBufferAttribute($,ce),he[ue+F+8]=o.x,he[ue+F+9]=o.y,he[ue+F+10]=o.z,he[ue+F+11]=$.itemSize===4?o.w:1)}}v={count:x,texture:X,size:new Ie(b,oe)},s.set(u,v),u.addEventListener("dispose",w)}let f=0;for(let w=0;w<h.length;w++)f+=h[w];const p=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",h),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const m=h===void 0?0:h.length;let x=n[u.id];if(x===void 0||x.length!==m){x=[];for(let M=0;M<m;M++)x[M]=[M,0];n[u.id]=x}for(let M=0;M<m;M++){const T=x[M];T[0]=M,T[1]=h[M]}x.sort(Xx);for(let M=0;M<8;M++)M<m&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Wx);const v=u.morphAttributes.position,f=u.morphAttributes.normal;let p=0;for(let M=0;M<8;M++){const T=a[M],R=T[0],D=T[1];R!==Number.MAX_SAFE_INTEGER&&D?(v&&u.getAttribute("morphTarget"+M)!==v[R]&&u.setAttribute("morphTarget"+M,v[R]),f&&u.getAttribute("morphNormal"+M)!==f[R]&&u.setAttribute("morphNormal"+M,f[R]),i[M]=D,p+=D):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),f&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const w=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Yx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Dd=new Pt,Id=new bd,Nd=new D_,Od=new Ld,xu=[],yu=[],Mu=new Float32Array(16),Eu=new Float32Array(9),Su=new Float32Array(4);function ci(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=xu[i];if(s===void 0&&(s=new Float32Array(i),xu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ea(r,e){let t=yu[e];t===void 0&&(t=new Int32Array(e),yu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}function Kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}function Jx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}function $x(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Su.set(n),r.uniformMatrix2fv(this.addr,!1,Su),lt(t,n)}}function Qx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Eu.set(n),r.uniformMatrix3fv(this.addr,!1,Eu),lt(t,n)}}function ey(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Mu.set(n),r.uniformMatrix4fv(this.addr,!1,Mu),lt(t,n)}}function ty(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2iv(this.addr,e),lt(t,e)}}function ny(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3iv(this.addr,e),lt(t,e)}}function iy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4iv(this.addr,e),lt(t,e)}}function sy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ay(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2uiv(this.addr,e),lt(t,e)}}function oy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3uiv(this.addr,e),lt(t,e)}}function ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4uiv(this.addr,e),lt(t,e)}}function cy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Dd,i)}function uy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nd,i)}function hy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Od,i)}function dy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Id,i)}function py(r){switch(r){case 5126:return qx;case 35664:return Zx;case 35665:return Kx;case 35666:return Jx;case 35674:return $x;case 35675:return Qx;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ry;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return sy;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return dy}}function fy(r,e){r.uniform1fv(this.addr,e)}function my(r,e){const t=ci(e,this.size,2);r.uniform2fv(this.addr,t)}function gy(r,e){const t=ci(e,this.size,3);r.uniform3fv(this.addr,t)}function _y(r,e){const t=ci(e,this.size,4);r.uniform4fv(this.addr,t)}function vy(r,e){const t=ci(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xy(r,e){const t=ci(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yy(r,e){const t=ci(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function My(r,e){r.uniform1iv(this.addr,e)}function Ey(r,e){r.uniform2iv(this.addr,e)}function Sy(r,e){r.uniform3iv(this.addr,e)}function by(r,e){r.uniform4iv(this.addr,e)}function Ty(r,e){r.uniform1uiv(this.addr,e)}function wy(r,e){r.uniform2uiv(this.addr,e)}function Ay(r,e){r.uniform3uiv(this.addr,e)}function Ry(r,e){r.uniform4uiv(this.addr,e)}function Cy(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Dd,s[o])}function Ly(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Nd,s[o])}function Py(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Od,s[o])}function Uy(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Id,s[o])}function Dy(r){switch(r){case 5126:return fy;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return vy;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return Ey;case 35668:case 35672:return Sy;case 35669:case 35673:return by;case 5125:return Ty;case 36294:return wy;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Uy}}class Iy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=py(t.type)}}class Ny{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Dy(t.type)}}class Oy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const co=/(\w+)(\])?(\[|\.)?/g;function bu(r,e){r.seq.push(e),r.map[e.id]=e}function Fy(r,e,t){const n=r.name,i=n.length;for(co.lastIndex=0;;){const s=co.exec(n),o=co.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bu(t,c===void 0?new Iy(a,r,e):new Ny(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Oy(a),bu(t,u)),t=u}}}class Ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Fy(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Tu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let zy=0;function Hy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function By(r){switch(r){case ur:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function wu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Hy(r.getShaderSource(e),o)}else return i}function ky(r,e){const t=By(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gy(r,e){let t;switch(e){case Ng:t="Linear";break;case Og:t="Reinhard";break;case Fg:t="OptimizedCineon";break;case zg:t="ACESFilmic";break;case Hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vy(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}function Wy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Bi(r){return r!==""}function Au(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ru(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(r){return r.replace(jy,qy)}const Yy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qy(r,e){let t=ze[e];if(t===void 0){const n=Yy.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(r){return r.replace(Zy,Ky)}function Ky(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function $y(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Jn:case $n:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function eM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Dg:e="ENVMAP_BLENDING_MIX";break;case Ig:e="ENVMAP_BLENDING_ADD";break}return e}function tM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jy(t),c=$y(t),u=Qy(t),d=eM(t),h=tM(t),m=t.isWebGL2?"":Vy(t),x=Wy(s),v=i.createProgram();let f,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bi).join(`
`),f.length>0&&(f+=`
`),p=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bi).join(`
`),p.length>0&&(p+=`
`)):(f=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),p=[m,Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kr?"#define TONE_MAPPING":"",t.toneMapping!==kr?ze.tonemapping_pars_fragment:"",t.toneMapping!==kr?Gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),o=Ho(o),o=Au(o,t),o=Ru(o,t),a=Ho(a),a=Au(a,t),a=Ru(a,t),o=Cu(o),a=Cu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+f+o,T=w+p+a,R=Tu(i,i.VERTEX_SHADER,M),D=Tu(i,i.FRAGMENT_SHADER,T);if(i.attachShader(v,R),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(v).trim(),b=i.getShaderInfoLog(R).trim(),oe=i.getShaderInfoLog(D).trim();let he=!0,X=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,R,D);else{const j=wu(i,R,"vertex"),V=wu(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+j+`
`+V)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(b===""||oe==="")&&(X=!1);X&&(this.diagnostics={runnable:he,programLog:E,vertexShader:{log:b,prefix:f},fragmentShader:{log:oe,prefix:p}})}i.deleteShader(R),i.deleteShader(D);let C;this.getUniforms=function(){return C===void 0&&(C=new Ks(i,v)),C};let ee;return this.getAttributes=function(){return ee===void 0&&(ee=Xy(i,v)),ee},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=D,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sM(e),t.set(e,n)),n}}class sM{constructor(e){this.id=nM++,this.code=e,this.usedTimes=0}}function aM(r,e,t,n,i,s,o){const a=new Tl,l=new iM,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function f(E,b,oe,he,X){const j=he.fog,V=X.geometry,te=E.isMeshStandardMaterial?he.environment:null,W=(E.isMeshStandardMaterial?t:e).get(E.envMap||te),$=W&&W.mapping===ga?W.image.height:null,ue=x[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,F=ce!==void 0?ce.length:0;let K=0;V.morphAttributes.position!==void 0&&(K=1),V.morphAttributes.normal!==void 0&&(K=2),V.morphAttributes.color!==void 0&&(K=3);let me,be,we,Te;if(ue){const er=ir[ue];me=er.vertexShader,be=er.fragmentShader}else me=E.vertexShader,be=E.fragmentShader,l.update(E),we=l.getVertexShaderID(E),Te=l.getFragmentShaderID(E);const Re=r.getRenderTarget(),Ae=X.isInstancedMesh===!0,He=!!E.map,et=!!E.matcap,Ue=!!W,_=!!E.aoMap,L=!!E.lightMap,I=!!E.bumpMap,k=!!E.normalMap,H=!!E.displacementMap,le=!!E.emissiveMap,ae=!!E.metalnessMap,q=!!E.roughnessMap,se=E.anisotropy>0,ie=E.clearcoat>0,ve=E.iridescence>0,y=E.sheen>0,g=E.transmission>0,U=se&&!!E.anisotropyMap,J=ie&&!!E.clearcoatMap,re=ie&&!!E.clearcoatNormalMap,ne=ie&&!!E.clearcoatRoughnessMap,xe=ve&&!!E.iridescenceMap,de=ve&&!!E.iridescenceThicknessMap,G=y&&!!E.sheenColorMap,A=y&&!!E.sheenRoughnessMap,Q=!!E.specularMap,Ee=!!E.specularColorMap,pe=!!E.specularIntensityMap,ge=g&&!!E.transmissionMap,Ce=g&&!!E.thicknessMap,je=!!E.gradientMap,P=!!E.alphaMap,ye=E.alphaTest>0,B=!!E.alphaHash,fe=!!E.extensions,_e=!!V.attributes.uv1,Ye=!!V.attributes.uv2,qe=!!V.attributes.uv3;let Ke=kr;return E.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ke=r.toneMapping),{isWebGL2:u,shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:me,fragmentShader:be,defines:E.defines,customVertexShaderID:we,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&X.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ur,map:He,matcap:et,envMap:Ue,envMapMode:Ue&&W.mapping,envMapCubeUVHeight:$,aoMap:_,lightMap:L,bumpMap:I,normalMap:k,displacementMap:h&&H,emissiveMap:le,normalMapObjectSpace:k&&E.normalMapType===$g,normalMapTangentSpace:k&&E.normalMapType===yd,metalnessMap:ae,roughnessMap:q,anisotropy:se,anisotropyMap:U,clearcoat:ie,clearcoatMap:J,clearcoatNormalMap:re,clearcoatRoughnessMap:ne,iridescence:ve,iridescenceMap:xe,iridescenceThicknessMap:de,sheen:y,sheenColorMap:G,sheenRoughnessMap:A,specularMap:Q,specularColorMap:Ee,specularIntensityMap:pe,transmission:g,transmissionMap:ge,thicknessMap:Ce,gradientMap:je,opaque:E.transparent===!1&&E.blending===Xn,alphaMap:P,alphaTest:ye,alphaHash:B,combine:E.combine,mapUv:He&&v(E.map.channel),aoMapUv:_&&v(E.aoMap.channel),lightMapUv:L&&v(E.lightMap.channel),bumpMapUv:I&&v(E.bumpMap.channel),normalMapUv:k&&v(E.normalMap.channel),displacementMapUv:H&&v(E.displacementMap.channel),emissiveMapUv:le&&v(E.emissiveMap.channel),metalnessMapUv:ae&&v(E.metalnessMap.channel),roughnessMapUv:q&&v(E.roughnessMap.channel),anisotropyMapUv:U&&v(E.anisotropyMap.channel),clearcoatMapUv:J&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:G&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:A&&v(E.sheenRoughnessMap.channel),specularMapUv:Q&&v(E.specularMap.channel),specularColorMapUv:Ee&&v(E.specularColorMap.channel),specularIntensityMapUv:pe&&v(E.specularIntensityMap.channel),transmissionMapUv:ge&&v(E.transmissionMap.channel),thicknessMapUv:Ce&&v(E.thicknessMap.channel),alphaMapUv:P&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(k||se),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:Ye,vertexUv3s:qe,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(He||P),fog:!!j,useFog:E.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&oe.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,useLegacyLights:r._useLegacyLights,decodeVideoTexture:He&&E.map.isVideoTexture===!0&&E.map.colorSpace===$e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ar,flipSided:E.side===Lt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:fe&&E.extensions.derivatives===!0,extensionFragDepth:fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const oe in E.defines)b.push(oe),b.push(E.defines[oe]);return E.isRawShaderMaterial===!1&&(w(b,E),M(b,E),b.push(r.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function w(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function M(E,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){const b=x[E.type];let oe;if(b){const he=ir[b];oe=j_.clone(he.uniforms)}else oe=E.uniforms;return oe}function R(E,b){let oe;for(let he=0,X=c.length;he<X;he++){const j=c[he];if(j.cacheKey===b){oe=j,++oe.usedTimes;break}}return oe===void 0&&(oe=new rM(r,b,E,s),c.push(oe)),oe}function D(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function ee(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:T,acquireProgram:R,releaseProgram:D,releaseShaderCache:C,programs:c,dispose:ee}}function oM(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Pu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Uu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,m,x,v,f){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:x,renderOrder:d.renderOrder,z:v,group:f},r[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=v,p.group=f),e++,p}function a(d,h,m,x,v,f){const p=o(d,h,m,x,v,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(d,h,m,x,v,f){const p=o(d,h,m,x,v,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||lM),n.length>1&&n.sort(h||Pu),i.length>1&&i.sort(h||Pu)}function u(){for(let d=e,h=r.length;d<h;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function cM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Uu,r.set(n,[o])):i>=s.length?(o=new Uu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function uM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ge};break;case"SpotLight":t={position:new N,direction:new N,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function hM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dM=0;function pM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fM(r,e){const t=new uM,n=hM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,o=new it,a=new it;function l(u,d){let h=0,m=0,x=0;for(let oe=0;oe<9;oe++)i.probe[oe].set(0,0,0);let v=0,f=0,p=0,w=0,M=0,T=0,R=0,D=0,C=0,ee=0;u.sort(pM);const E=d===!0?Math.PI:1;for(let oe=0,he=u.length;oe<he;oe++){const X=u[oe],j=X.color,V=X.intensity,te=X.distance,W=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)h+=j.r*V*E,m+=j.g*V*E,x+=j.b*V*E;else if(X.isLightProbe)for(let $=0;$<9;$++)i.probe[$].addScaledVector(X.sh.coefficients[$],V);else if(X.isDirectionalLight){const $=t.get(X);if($.color.copy(X.color).multiplyScalar(X.intensity*E),X.castShadow){const ue=X.shadow,ce=n.get(X);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,i.directionalShadow[v]=ce,i.directionalShadowMap[v]=W,i.directionalShadowMatrix[v]=X.shadow.matrix,T++}i.directional[v]=$,v++}else if(X.isSpotLight){const $=t.get(X);$.position.setFromMatrixPosition(X.matrixWorld),$.color.copy(j).multiplyScalar(V*E),$.distance=te,$.coneCos=Math.cos(X.angle),$.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),$.decay=X.decay,i.spot[p]=$;const ue=X.shadow;if(X.map&&(i.spotLightMap[C]=X.map,C++,ue.updateMatrices(X),X.castShadow&&ee++),i.spotLightMatrix[p]=ue.matrix,X.castShadow){const ce=n.get(X);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,i.spotShadow[p]=ce,i.spotShadowMap[p]=W,D++}p++}else if(X.isRectAreaLight){const $=t.get(X);$.color.copy(j).multiplyScalar(V),$.halfWidth.set(X.width*.5,0,0),$.halfHeight.set(0,X.height*.5,0),i.rectArea[w]=$,w++}else if(X.isPointLight){const $=t.get(X);if($.color.copy(X.color).multiplyScalar(X.intensity*E),$.distance=X.distance,$.decay=X.decay,X.castShadow){const ue=X.shadow,ce=n.get(X);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,ce.shadowCameraNear=ue.camera.near,ce.shadowCameraFar=ue.camera.far,i.pointShadow[f]=ce,i.pointShadowMap[f]=W,i.pointShadowMatrix[f]=X.shadow.matrix,R++}i.point[f]=$,f++}else if(X.isHemisphereLight){const $=t.get(X);$.skyColor.copy(X.color).multiplyScalar(V*E),$.groundColor.copy(X.groundColor).multiplyScalar(V*E),i.hemi[M]=$,M++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=x;const b=i.hash;(b.directionalLength!==v||b.pointLength!==f||b.spotLength!==p||b.rectAreaLength!==w||b.hemiLength!==M||b.numDirectionalShadows!==T||b.numPointShadows!==R||b.numSpotShadows!==D||b.numSpotMaps!==C)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=w,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=D+C-ee,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=ee,b.directionalLength=v,b.pointLength=f,b.spotLength=p,b.rectAreaLength=w,b.hemiLength=M,b.numDirectionalShadows=T,b.numPointShadows=R,b.numSpotShadows=D,b.numSpotMaps=C,i.version=dM++)}function c(u,d){let h=0,m=0,x=0,v=0,f=0;const p=d.matrixWorldInverse;for(let w=0,M=u.length;w<M;w++){const T=u[w];if(T.isDirectionalLight){const R=i.directional[h];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),h++}else if(T.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),x++}else if(T.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(T.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){const R=i.hemi[f];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function Du(r,e){const t=new fM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mM(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Du(r,e),t.set(s,[l])):o>=a.length?(l=new Du(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class gM extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
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
}`;function yM(r,e,t){let n=new wl;const i=new Ie,s=new Ie,o=new ht,a=new gM({depthPacking:Jg}),l=new _M,c={},u=t.maxTextureSize,d={[Wr]:Lt,[Lt]:Wr,[ar]:ar},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:vM,fragmentShader:xM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Tr;x.setAttribute("position",new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rt(x,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let p=this.type;this.render=function(R,D,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const ee=r.getRenderTarget(),E=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(Br),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const he=p!==xr&&this.type===xr,X=p===xr&&this.type!==xr;for(let j=0,V=R.length;j<V;j++){const te=R[j],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const $=W.getFrameExtents();if(i.multiply($),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,W.mapSize.y=s.y)),W.map===null||he===!0||X===!0){const ce=this.type!==xr?{minFilter:wt,magFilter:wt}:{};W.map!==null&&W.map.dispose(),W.map=new hn(i.x,i.y,ce),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ue=W.getViewportCount();for(let ce=0;ce<ue;ce++){const F=W.getViewport(ce);o.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),oe.viewport(o),W.updateMatrices(te,ce),n=W.getFrustum(),T(D,C,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===xr&&w(W,C),W.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(ee,E,b)};function w(R,D){const C=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hn(i.x,i.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(D,null,C,h,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(D,null,C,m,v,null)}function M(R,D,C,ee){let E=null;const b=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)E=b;else if(E=C.isPointLight===!0?l:a,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const oe=E.uuid,he=D.uuid;let X=c[oe];X===void 0&&(X={},c[oe]=X);let j=X[he];j===void 0&&(j=E.clone(),X[he]=j),E=j}if(E.visible=D.visible,E.wireframe=D.wireframe,ee===xr?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:d[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const oe=r.properties.get(E);oe.light=C}return E}function T(R,D,C,ee,E){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===xr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const oe=e.update(R),he=R.material;if(Array.isArray(he)){const X=oe.groups;for(let j=0,V=X.length;j<V;j++){const te=X[j],W=he[te.materialIndex];if(W&&W.visible){const $=M(R,W,ee,E);r.renderBufferDirect(C,null,oe,$,R,te)}}}else if(he.visible){const X=M(R,he,ee,E);r.renderBufferDirect(C,null,oe,X,R,null)}}const b=R.children;for(let oe=0,he=b.length;oe<he;oe++)T(b[oe],D,C,ee,E)}}function MM(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const ye=new ht;let B=null;const fe=new ht(0,0,0,0);return{setMask:function(_e){B!==_e&&!P&&(r.colorMask(_e,_e,_e,_e),B=_e)},setLocked:function(_e){P=_e},setClear:function(_e,Ye,qe,Ke,er){er===!0&&(_e*=Ke,Ye*=Ke,qe*=Ke),ye.set(_e,Ye,qe,Ke),fe.equals(ye)===!1&&(r.clearColor(_e,Ye,qe,Ke),fe.copy(ye))},reset:function(){P=!1,B=null,fe.set(-1,0,0,0)}}}function s(){let P=!1,ye=null,B=null,fe=null;return{setTest:function(_e){_e?Re(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(_e){ye!==_e&&!P&&(r.depthMask(_e),ye=_e)},setFunc:function(_e){if(B!==_e){switch(_e){case wg:r.depthFunc(r.NEVER);break;case Ag:r.depthFunc(r.ALWAYS);break;case Rg:r.depthFunc(r.LESS);break;case Uo:r.depthFunc(r.LEQUAL);break;case Cg:r.depthFunc(r.EQUAL);break;case Lg:r.depthFunc(r.GEQUAL);break;case Pg:r.depthFunc(r.GREATER);break;case Ug:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}B=_e}},setLocked:function(_e){P=_e},setClear:function(_e){fe!==_e&&(r.clearDepth(_e),fe=_e)},reset:function(){P=!1,ye=null,B=null,fe=null}}}function o(){let P=!1,ye=null,B=null,fe=null,_e=null,Ye=null,qe=null,Ke=null,er=null;return{setTest:function(Qe){P||(Qe?Re(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Qe){ye!==Qe&&!P&&(r.stencilMask(Qe),ye=Qe)},setFunc:function(Qe,tr,Mt){(B!==Qe||fe!==tr||_e!==Mt)&&(r.stencilFunc(Qe,tr,Mt),B=Qe,fe=tr,_e=Mt)},setOp:function(Qe,tr,Mt){(Ye!==Qe||qe!==tr||Ke!==Mt)&&(r.stencilOp(Qe,tr,Mt),Ye=Qe,qe=tr,Ke=Mt)},setLocked:function(Qe){P=Qe},setClear:function(Qe){er!==Qe&&(r.clearStencil(Qe),er=Qe)},reset:function(){P=!1,ye=null,B=null,fe=null,_e=null,Ye=null,qe=null,Ke=null,er=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},x=new WeakMap,v=[],f=null,p=!1,w=null,M=null,T=null,R=null,D=null,C=null,ee=null,E=!1,b=null,oe=null,he=null,X=null,j=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,W=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),te=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),te=W>=2);let ue=null,ce={};const F=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),me=new ht().fromArray(F),be=new ht().fromArray(K);function we(P,ye,B,fe){const _e=new Uint8Array(4),Ye=r.createTexture();r.bindTexture(P,Ye),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<B;qe++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(ye,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(ye+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return Ye}const Te={};Te[r.TEXTURE_2D]=we(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=we(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[r.TEXTURE_2D_ARRAY]=we(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=we(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(r.DEPTH_TEST),l.setFunc(Uo),H(!1),le(_c),Re(r.CULL_FACE),I(Br);function Re(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Ae(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function He(P,ye){return m[P]!==ye?(r.bindFramebuffer(P,ye),m[P]=ye,n&&(P===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ye),P===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ye)),!0):!1}function et(P,ye){let B=v,fe=!1;if(P)if(B=x.get(ye),B===void 0&&(B=[],x.set(ye,B)),P.isWebGLMultipleRenderTargets){const _e=P.texture;if(B.length!==_e.length||B[0]!==r.COLOR_ATTACHMENT0){for(let Ye=0,qe=_e.length;Ye<qe;Ye++)B[Ye]=r.COLOR_ATTACHMENT0+Ye;B.length=_e.length,fe=!0}}else B[0]!==r.COLOR_ATTACHMENT0&&(B[0]=r.COLOR_ATTACHMENT0,fe=!0);else B[0]!==r.BACK&&(B[0]=r.BACK,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Ue(P){return f!==P?(r.useProgram(P),f=P,!0):!1}const _={[zn]:r.FUNC_ADD,[mg]:r.FUNC_SUBTRACT,[gg]:r.FUNC_REVERSE_SUBTRACT};if(n)_[Mc]=r.MIN,_[Ec]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(_[Mc]=P.MIN_EXT,_[Ec]=P.MAX_EXT)}const L={[_g]:r.ZERO,[vg]:r.ONE,[xg]:r.SRC_COLOR,[cd]:r.SRC_ALPHA,[Tg]:r.SRC_ALPHA_SATURATE,[Sg]:r.DST_COLOR,[Mg]:r.DST_ALPHA,[yg]:r.ONE_MINUS_SRC_COLOR,[ud]:r.ONE_MINUS_SRC_ALPHA,[bg]:r.ONE_MINUS_DST_COLOR,[Eg]:r.ONE_MINUS_DST_ALPHA};function I(P,ye,B,fe,_e,Ye,qe,Ke){if(P===Br){p===!0&&(Ae(r.BLEND),p=!1);return}if(p===!1&&(Re(r.BLEND),p=!0),P!==fg){if(P!==w||Ke!==E){if((M!==zn||D!==zn)&&(r.blendEquation(r.FUNC_ADD),M=zn,D=zn),Ke)switch(P){case Xn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vc:r.blendFunc(r.ONE,r.ONE);break;case xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Xn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,R=null,C=null,ee=null,w=P,E=Ke}return}_e=_e||ye,Ye=Ye||B,qe=qe||fe,(ye!==M||_e!==D)&&(r.blendEquationSeparate(_[ye],_[_e]),M=ye,D=_e),(B!==T||fe!==R||Ye!==C||qe!==ee)&&(r.blendFuncSeparate(L[B],L[fe],L[Ye],L[qe]),T=B,R=fe,C=Ye,ee=qe),w=P,E=!1}function k(P,ye){P.side===ar?Ae(r.CULL_FACE):Re(r.CULL_FACE);let B=P.side===Lt;ye&&(B=!B),H(B),P.blending===Xn&&P.transparent===!1?I(Br):I(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const fe=P.stencilWrite;c.setTest(fe),fe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),q(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function H(P){b!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),b=P)}function le(P){P!==hg?(Re(r.CULL_FACE),P!==oe&&(P===_c?r.cullFace(r.BACK):P===dg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),oe=P}function ae(P){P!==he&&(te&&r.lineWidth(P),he=P)}function q(P,ye,B){P?(Re(r.POLYGON_OFFSET_FILL),(X!==ye||j!==B)&&(r.polygonOffset(ye,B),X=ye,j=B)):Ae(r.POLYGON_OFFSET_FILL)}function se(P){P?Re(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function ie(P){P===void 0&&(P=r.TEXTURE0+V-1),ue!==P&&(r.activeTexture(P),ue=P)}function ve(P,ye,B){B===void 0&&(ue===null?B=r.TEXTURE0+V-1:B=ue);let fe=ce[B];fe===void 0&&(fe={type:void 0,texture:void 0},ce[B]=fe),(fe.type!==P||fe.texture!==ye)&&(ue!==B&&(r.activeTexture(B),ue=B),r.bindTexture(P,ye||Te[P]),fe.type=P,fe.texture=ye)}function y(){const P=ce[ue];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){me.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),me.copy(P))}function pe(P){be.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),be.copy(P))}function ge(P,ye){let B=d.get(ye);B===void 0&&(B=new WeakMap,d.set(ye,B));let fe=B.get(P);fe===void 0&&(fe=r.getUniformBlockIndex(ye,P.name),B.set(P,fe))}function Ce(P,ye){const B=d.get(ye).get(P);u.get(ye)!==B&&(r.uniformBlockBinding(ye,B,P.__bindingPointIndex),u.set(ye,B))}function je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ue=null,ce={},m={},x=new WeakMap,v=[],f=null,p=!1,w=null,M=null,T=null,R=null,D=null,C=null,ee=null,E=!1,b=null,oe=null,he=null,X=null,j=null,me.set(0,0,r.canvas.width,r.canvas.height),be.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:Ae,bindFramebuffer:He,drawBuffers:et,useProgram:Ue,setBlending:I,setMaterial:k,setFlipSided:H,setCullFace:le,setLineWidth:ae,setPolygonOffset:q,setScissorTest:se,activeTexture:ie,bindTexture:ve,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:A,texImage3D:Q,updateUBOMapping:ge,uniformBlockBinding:Ce,texStorage2D:de,texStorage3D:G,texSubImage2D:J,texSubImage3D:re,compressedTexSubImage2D:ne,compressedTexSubImage3D:xe,scissor:Ee,viewport:pe,reset:je}}function EM(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(y,g){return p?new OffscreenCanvas(y,g):ns("canvas")}function M(y,g,U,J){let re=1;if((y.width>J||y.height>J)&&(re=J/Math.max(y.width,y.height)),re<1||g===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ne=g?na:Math.floor,xe=ne(re*y.width),de=ne(re*y.height);v===void 0&&(v=w(xe,de));const G=U?w(xe,de):v;return G.width=xe,G.height=de,G.getContext("2d").drawImage(y,0,0,xe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+xe+"x"+de+")."),G}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function T(y){return zo(y.width)&&zo(y.height)}function R(y){return a?!1:y.wrapS!==Zt||y.wrapT!==Zt||y.minFilter!==wt&&y.minFilter!==zt}function D(y,g){return y.generateMipmaps&&g&&y.minFilter!==wt&&y.minFilter!==zt}function C(y){r.generateMipmap(y)}function ee(y,g,U,J,re=!1){if(a===!1)return g;if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ne=g;return g===r.RED&&(U===r.FLOAT&&(ne=r.R32F),U===r.HALF_FLOAT&&(ne=r.R16F),U===r.UNSIGNED_BYTE&&(ne=r.R8)),g===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(ne=r.R8UI),U===r.UNSIGNED_SHORT&&(ne=r.R16UI),U===r.UNSIGNED_INT&&(ne=r.R32UI),U===r.BYTE&&(ne=r.R8I),U===r.SHORT&&(ne=r.R16I),U===r.INT&&(ne=r.R32I)),g===r.RG&&(U===r.FLOAT&&(ne=r.RG32F),U===r.HALF_FLOAT&&(ne=r.RG16F),U===r.UNSIGNED_BYTE&&(ne=r.RG8)),g===r.RGBA&&(U===r.FLOAT&&(ne=r.RGBA32F),U===r.HALF_FLOAT&&(ne=r.RGBA16F),U===r.UNSIGNED_BYTE&&(ne=J===$e&&re===!1?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)),(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(y,g,U){return D(y,U)===!0||y.isFramebufferTexture&&y.minFilter!==wt&&y.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function b(y){return y===wt||y===Sc||y===Fa?r.NEAREST:r.LINEAR}function oe(y){const g=y.target;g.removeEventListener("dispose",oe),X(g),g.isVideoTexture&&x.delete(g)}function he(y){const g=y.target;g.removeEventListener("dispose",he),V(g)}function X(y){const g=n.get(y);if(g.__webglInit===void 0)return;const U=y.source,J=f.get(U);if(J){const re=J[g.__cacheKey];re.usedTimes--,re.usedTimes===0&&j(y),Object.keys(J).length===0&&f.delete(U)}n.remove(y)}function j(y){const g=n.get(y);r.deleteTexture(g.__webglTexture);const U=y.source,J=f.get(U);delete J[g.__cacheKey],o.memory.textures--}function V(y){const g=y.texture,U=n.get(y),J=n.get(g);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(U.__webglFramebuffer[re]))for(let ne=0;ne<U.__webglFramebuffer[re].length;ne++)r.deleteFramebuffer(U.__webglFramebuffer[re][ne]);else r.deleteFramebuffer(U.__webglFramebuffer[re]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[re])}else{if(Array.isArray(U.__webglFramebuffer))for(let re=0;re<U.__webglFramebuffer.length;re++)r.deleteFramebuffer(U.__webglFramebuffer[re]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let re=0;re<U.__webglColorRenderbuffer.length;re++)U.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[re]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let re=0,ne=g.length;re<ne;re++){const xe=n.get(g[re]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(g[re])}n.remove(g),n.remove(y)}let te=0;function W(){te=0}function $(){const y=te;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),te+=1,y}function ue(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function ce(y,g){const U=n.get(y);if(y.isVideoTexture&&ie(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const J=y.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(U,y,g);return}}t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+g)}function F(y,g){const U=n.get(y);if(y.version>0&&U.__version!==y.version){He(U,y,g);return}t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+g)}function K(y,g){const U=n.get(y);if(y.version>0&&U.__version!==y.version){He(U,y,g);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+g)}function me(y,g){const U=n.get(y);if(y.version>0&&U.__version!==y.version){et(U,y,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+g)}const be={[No]:r.REPEAT,[Zt]:r.CLAMP_TO_EDGE,[Oo]:r.MIRRORED_REPEAT},we={[wt]:r.NEAREST,[Sc]:r.NEAREST_MIPMAP_NEAREST,[Fa]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[Bg]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},Te={[e_]:r.NEVER,[o_]:r.ALWAYS,[t_]:r.LESS,[n_]:r.LEQUAL,[r_]:r.EQUAL,[a_]:r.GEQUAL,[i_]:r.GREATER,[s_]:r.NOTEQUAL};function Re(y,g,U){if(U?(r.texParameteri(y,r.TEXTURE_WRAP_S,be[g.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,be[g.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,be[g.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,we[g.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,we[g.minFilter])):(r.texParameteri(y,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(y,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(g.wrapS!==Zt||g.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(y,r.TEXTURE_MAG_FILTER,b(g.magFilter)),r.texParameteri(y,r.TEXTURE_MIN_FILTER,b(g.minFilter)),g.minFilter!==wt&&g.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,Te[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===wt||g.minFilter!==Fa&&g.minFilter!==es||g.type===Or&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(r.texParameterf(y,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function Ae(y,g){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",oe));const J=g.source;let re=f.get(J);re===void 0&&(re={},f.set(J,re));const ne=ue(g);if(ne!==y.__cacheKey){re[ne]===void 0&&(re[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),re[ne].usedTimes++;const xe=re[y.__cacheKey];xe!==void 0&&(re[y.__cacheKey].usedTimes--,xe.usedTimes===0&&j(g)),y.__cacheKey=ne,y.__webglTexture=re[ne].texture}return U}function He(y,g,U){let J=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=r.TEXTURE_3D);const re=Ae(y,g),ne=g.source;t.bindTexture(J,y.__webglTexture,r.TEXTURE0+U);const xe=n.get(ne);if(ne.version!==xe.__version||re===!0){t.activeTexture(r.TEXTURE0+U),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const de=R(g)&&T(g.image)===!1;let G=M(g.image,de,!1,u);G=ve(g,G);const A=T(G)||a,Q=s.convert(g.format,g.colorSpace);let Ee=s.convert(g.type),pe=ee(g.internalFormat,Q,Ee,g.colorSpace,g.isVideoTexture);Re(J,g,A);let ge;const Ce=g.mipmaps,je=a&&g.isVideoTexture!==!0,P=xe.__version===void 0||re===!0,ye=E(g,G,A);if(g.isDepthTexture)pe=r.DEPTH_COMPONENT,a?g.type===Or?pe=r.DEPTH_COMPONENT32F:g.type===Nr?pe=r.DEPTH_COMPONENT24:g.type===on?pe=r.DEPTH24_STENCIL8:pe=r.DEPTH_COMPONENT16:g.type===Or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ln&&pe===r.DEPTH_COMPONENT&&g.type!==Sl&&g.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Nr,Ee=s.convert(g.type)),g.format===Qn&&pe===r.DEPTH_COMPONENT&&(pe=r.DEPTH_STENCIL,g.type!==on&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=on,Ee=s.convert(g.type))),P&&(je?t.texStorage2D(r.TEXTURE_2D,1,pe,G.width,G.height):t.texImage2D(r.TEXTURE_2D,0,pe,G.width,G.height,0,Q,Ee,null));else if(g.isDataTexture)if(Ce.length>0&&A){je&&P&&t.texStorage2D(r.TEXTURE_2D,ye,pe,Ce[0].width,Ce[0].height);for(let B=0,fe=Ce.length;B<fe;B++)ge=Ce[B],je?t.texSubImage2D(r.TEXTURE_2D,B,0,0,ge.width,ge.height,Q,Ee,ge.data):t.texImage2D(r.TEXTURE_2D,B,pe,ge.width,ge.height,0,Q,Ee,ge.data);g.generateMipmaps=!1}else je?(P&&t.texStorage2D(r.TEXTURE_2D,ye,pe,G.width,G.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,G.width,G.height,Q,Ee,G.data)):t.texImage2D(r.TEXTURE_2D,0,pe,G.width,G.height,0,Q,Ee,G.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){je&&P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,pe,Ce[0].width,Ce[0].height,G.depth);for(let B=0,fe=Ce.length;B<fe;B++)ge=Ce[B],g.format!==Kt?Q!==null?je?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,0,ge.width,ge.height,G.depth,Q,ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,B,pe,ge.width,ge.height,G.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,0,ge.width,ge.height,G.depth,Q,Ee,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,B,pe,ge.width,ge.height,G.depth,0,Q,Ee,ge.data)}else{je&&P&&t.texStorage2D(r.TEXTURE_2D,ye,pe,Ce[0].width,Ce[0].height);for(let B=0,fe=Ce.length;B<fe;B++)ge=Ce[B],g.format!==Kt?Q!==null?je?t.compressedTexSubImage2D(r.TEXTURE_2D,B,0,0,ge.width,ge.height,Q,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,B,pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(r.TEXTURE_2D,B,0,0,ge.width,ge.height,Q,Ee,ge.data):t.texImage2D(r.TEXTURE_2D,B,pe,ge.width,ge.height,0,Q,Ee,ge.data)}else if(g.isDataArrayTexture)je?(P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,pe,G.width,G.height,G.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Q,Ee,G.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,G.width,G.height,G.depth,0,Q,Ee,G.data);else if(g.isData3DTexture)je?(P&&t.texStorage3D(r.TEXTURE_3D,ye,pe,G.width,G.height,G.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Q,Ee,G.data)):t.texImage3D(r.TEXTURE_3D,0,pe,G.width,G.height,G.depth,0,Q,Ee,G.data);else if(g.isFramebufferTexture){if(P)if(je)t.texStorage2D(r.TEXTURE_2D,ye,pe,G.width,G.height);else{let B=G.width,fe=G.height;for(let _e=0;_e<ye;_e++)t.texImage2D(r.TEXTURE_2D,_e,pe,B,fe,0,Q,Ee,null),B>>=1,fe>>=1}}else if(Ce.length>0&&A){je&&P&&t.texStorage2D(r.TEXTURE_2D,ye,pe,Ce[0].width,Ce[0].height);for(let B=0,fe=Ce.length;B<fe;B++)ge=Ce[B],je?t.texSubImage2D(r.TEXTURE_2D,B,0,0,Q,Ee,ge):t.texImage2D(r.TEXTURE_2D,B,pe,Q,Ee,ge);g.generateMipmaps=!1}else je?(P&&t.texStorage2D(r.TEXTURE_2D,ye,pe,G.width,G.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q,Ee,G)):t.texImage2D(r.TEXTURE_2D,0,pe,Q,Ee,G);D(g,A)&&C(J),xe.__version=ne.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function et(y,g,U){if(g.image.length!==6)return;const J=Ae(y,g),re=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+U);const ne=n.get(re);if(re.version!==ne.__version||J===!0){t.activeTexture(r.TEXTURE0+U),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,G=[];for(let B=0;B<6;B++)!xe&&!de?G[B]=M(g.image[B],!1,!0,c):G[B]=de?g.image[B].image:g.image[B],G[B]=ve(g,G[B]);const A=G[0],Q=T(A)||a,Ee=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),ge=ee(g.internalFormat,Ee,pe,g.colorSpace),Ce=a&&g.isVideoTexture!==!0,je=ne.__version===void 0||J===!0;let P=E(g,A,Q);Re(r.TEXTURE_CUBE_MAP,g,Q);let ye;if(xe){Ce&&je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,P,ge,A.width,A.height);for(let B=0;B<6;B++){ye=G[B].mipmaps;for(let fe=0;fe<ye.length;fe++){const _e=ye[fe];g.format!==Kt?Ee!==null?Ce?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe,ge,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe,0,0,_e.width,_e.height,Ee,pe,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe,ge,_e.width,_e.height,0,Ee,pe,_e.data)}}}else{ye=g.mipmaps,Ce&&je&&(ye.length>0&&P++,t.texStorage2D(r.TEXTURE_CUBE_MAP,P,ge,G[0].width,G[0].height));for(let B=0;B<6;B++)if(de){Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,G[B].width,G[B].height,Ee,pe,G[B].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ge,G[B].width,G[B].height,0,Ee,pe,G[B].data);for(let fe=0;fe<ye.length;fe++){const _e=ye[fe].image[B].image;Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe+1,0,0,_e.width,_e.height,Ee,pe,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe+1,ge,_e.width,_e.height,0,Ee,pe,_e.data)}}else{Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Ee,pe,G[B]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ge,Ee,pe,G[B]);for(let fe=0;fe<ye.length;fe++){const _e=ye[fe];Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe+1,0,0,Ee,pe,_e.image[B]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe+1,ge,Ee,pe,_e.image[B])}}}D(g,Q)&&C(r.TEXTURE_CUBE_MAP),ne.__version=re.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ue(y,g,U,J,re,ne){const xe=s.convert(U.format,U.colorSpace),de=s.convert(U.type),G=ee(U.internalFormat,xe,de,U.colorSpace);if(!n.get(g).__hasExternalTextures){const A=Math.max(1,g.width>>ne),Q=Math.max(1,g.height>>ne);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,G,A,Q,g.depth,0,xe,de,null):t.texImage2D(re,ne,G,A,Q,0,xe,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,y),se(g)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,re,n.get(U).__webglTexture,0,q(g)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,re,n.get(U).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _(y,g,U){if(r.bindRenderbuffer(r.RENDERBUFFER,y),g.depthBuffer&&!g.stencilBuffer){let J=r.DEPTH_COMPONENT16;if(U||se(g)){const re=g.depthTexture;re&&re.isDepthTexture&&(re.type===Or?J=r.DEPTH_COMPONENT32F:re.type===Nr&&(J=r.DEPTH_COMPONENT24));const ne=q(g);se(g)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,J,g.width,g.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,J,g.width,g.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,g.width,g.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,y)}else if(g.depthBuffer&&g.stencilBuffer){const J=q(g);U&&se(g)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,g.width,g.height):se(g)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,y)}else{const J=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let re=0;re<J.length;re++){const ne=J[re],xe=s.convert(ne.format,ne.colorSpace),de=s.convert(ne.type),G=ee(ne.internalFormat,xe,de,ne.colorSpace),A=q(g);U&&se(g)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,A,G,g.width,g.height):se(g)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,A,G,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,G,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function L(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ce(g.depthTexture,0);const U=n.get(g.depthTexture).__webglTexture,J=q(g);if(g.depthTexture.format===ln)se(g)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,U,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,U,0);else if(g.depthTexture.format===Qn)se(g)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,U,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function I(y){const g=n.get(y),U=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");L(g.__webglFramebuffer,y)}else if(U){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]=r.createRenderbuffer(),_(g.__webglDepthbuffer[J],y,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=r.createRenderbuffer(),_(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function k(y,g,U){const J=n.get(y);g!==void 0&&Ue(J.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&I(y)}function H(y){const g=y.texture,U=n.get(y),J=n.get(g);y.addEventListener("dispose",he),y.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=g.version,o.memory.textures++);const re=y.isWebGLCubeRenderTarget===!0,ne=y.isWebGLMultipleRenderTargets===!0,xe=T(y)||a;if(re){U.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[de]=[];for(let G=0;G<g.mipmaps.length;G++)U.__webglFramebuffer[de][G]=r.createFramebuffer()}else U.__webglFramebuffer[de]=r.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)U.__webglFramebuffer[de]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(ne)if(i.drawBuffers){const de=y.texture;for(let G=0,A=de.length;G<A;G++){const Q=n.get(de[G]);Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&se(y)===!1){const de=ne?g:[g];U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let G=0;G<de.length;G++){const A=de[G];U.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[G]);const Q=s.convert(A.format,A.colorSpace),Ee=s.convert(A.type),pe=ee(A.internalFormat,Q,Ee,A.colorSpace,y.isXRRenderTarget===!0),ge=q(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,pe,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,U.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),_(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Re(r.TEXTURE_CUBE_MAP,g,xe);for(let de=0;de<6;de++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let G=0;G<g.mipmaps.length;G++)Ue(U.__webglFramebuffer[de][G],y,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,G);else Ue(U.__webglFramebuffer[de],y,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);D(g,xe)&&C(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const de=y.texture;for(let G=0,A=de.length;G<A;G++){const Q=de[G],Ee=n.get(Q);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),Re(r.TEXTURE_2D,Q,xe),Ue(U.__webglFramebuffer,y,Q,r.COLOR_ATTACHMENT0+G,r.TEXTURE_2D,0),D(Q,xe)&&C(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?de=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,J.__webglTexture),Re(de,g,xe),a&&g.mipmaps&&g.mipmaps.length>0)for(let G=0;G<g.mipmaps.length;G++)Ue(U.__webglFramebuffer[G],y,g,r.COLOR_ATTACHMENT0,de,G);else Ue(U.__webglFramebuffer,y,g,r.COLOR_ATTACHMENT0,de,0);D(g,xe)&&C(de),t.unbindTexture()}y.depthBuffer&&I(y)}function le(y){const g=T(y)||a,U=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0,re=U.length;J<re;J++){const ne=U[J];if(D(ne,g)){const xe=y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=n.get(ne).__webglTexture;t.bindTexture(xe,de),C(xe),t.unbindTexture()}}}function ae(y){if(a&&y.samples>0&&se(y)===!1){const g=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],U=y.width,J=y.height;let re=r.COLOR_BUFFER_BIT;const ne=[],xe=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(y),G=y.isWebGLMultipleRenderTargets===!0;if(G)for(let A=0;A<g.length;A++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let A=0;A<g.length;A++){ne.push(r.COLOR_ATTACHMENT0+A),y.depthBuffer&&ne.push(xe);const Q=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Q===!1&&(y.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),G&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[A]),Q===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[xe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[xe])),G){const Ee=n.get(g[A]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,U,J,0,0,U,J,re,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let A=0;A<g.length;A++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.RENDERBUFFER,de.__webglColorRenderbuffer[A]);const Q=n.get(g[A]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function q(y){return Math.min(d,y.samples)}function se(y){const g=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ie(y){const g=o.render.frame;x.get(y)!==g&&(x.set(y,g),y.update())}function ve(y,g){const U=y.colorSpace,J=y.format,re=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Fo||U!==ur&&U!==un&&(U===$e||U===_a?a===!1?e.has("EXT_sRGB")===!0&&J===Kt?(y.format=Fo,y.minFilter=zt,y.generateMipmaps=!1):g=Ed.sRGBToLinear(g):(J!==Kt||re!==Gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.setTexture2D=ce,this.setTexture2DArray=F,this.setTexture3D=K,this.setTextureCube=me,this.rebindTextures=k,this.setupRenderTarget=H,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=se}const SM=0,at=1;function bM(r,e,t){const n=t.isWebGL2;function i(s,o=un){let a;const l=o===$e||o===_a?at:SM;if(s===Gr)return r.UNSIGNED_BYTE;if(s===fd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===md)return r.UNSIGNED_SHORT_5_5_5_1;if(s===kg)return r.BYTE;if(s===Gg)return r.SHORT;if(s===Sl)return r.UNSIGNED_SHORT;if(s===pd)return r.INT;if(s===Nr)return r.UNSIGNED_INT;if(s===Or)return r.FLOAT;if(s===ts)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vg)return r.ALPHA;if(s===Kt)return r.RGBA;if(s===Wg)return r.LUMINANCE;if(s===Xg)return r.LUMINANCE_ALPHA;if(s===ln)return r.DEPTH_COMPONENT;if(s===Qn)return r.DEPTH_STENCIL;if(s===Fo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jg)return r.RED;if(s===gd)return r.RED_INTEGER;if(s===Yg)return r.RG;if(s===_d)return r.RG_INTEGER;if(s===vd)return r.RGBA_INTEGER;if(s===za||s===Ha||s===Ba||s===ka)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ha)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bc||s===Tc||s===wc||s===Ac)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rc||s===Cc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rc)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Cc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lc||s===Pc||s===Uc||s===Dc||s===Ic||s===Nc||s===Oc||s===Fc||s===zc||s===Hc||s===Bc||s===kc||s===Gc||s===Vc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Lc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ic)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ga||s===Wc||s===Xc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ga)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zg||s===jc||s===Yc||s===qc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ga)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===on?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class TM extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gs extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wM={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,n),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class AM extends Pt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:ln,u!==ln&&u!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ln&&(n=Nr),n===void 0&&u===Qn&&(n=on),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class RM extends fn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,x=null;const v=t.getContextAttributes();let f=null,p=null;const w=[],M=[],T=new Ht;T.layers.enable(1),T.viewport=new ht;const R=new Ht;R.layers.enable(2),R.viewport=new ht;const D=[T,R],C=new TM;C.layers.enable(1),C.layers.enable(2);let ee=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=w[F];return K===void 0&&(K=new uo,w[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=w[F];return K===void 0&&(K=new uo,w[F]=K),K.getGripSpace()},this.getHand=function(F){let K=w[F];return K===void 0&&(K=new uo,w[F]=K),K.getHandSpace()};function b(F){const K=M.indexOf(F.inputSource);if(K===-1)return;const me=w[K];me!==void 0&&(me.update(F.inputSource,F.frame,c||o),me.dispatchEvent({type:F.type,data:F.inputSource}))}function oe(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",oe),i.removeEventListener("inputsourceschange",he);for(let F=0;F<w.length;F++){const K=M[F];K!==null&&(M[F]=null,w[F].disconnect(K))}ee=null,E=null,e.setRenderTarget(f),m=null,h=null,d=null,i=null,p=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",oe),i.addEventListener("inputsourceschange",he),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:m}),p=new hn(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:Gr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,me=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?Qn:ln,me=v.stencil?on:Nr);const we={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(we),i.updateRenderState({layers:[h]}),p=new hn(h.textureWidth,h.textureHeight,{format:Kt,type:Gr,depthTexture:new AM(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Te=e.properties.get(p);Te.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function he(F){for(let K=0;K<F.removed.length;K++){const me=F.removed[K],be=M.indexOf(me);be>=0&&(M[be]=null,w[be].disconnect(me))}for(let K=0;K<F.added.length;K++){const me=F.added[K];let be=M.indexOf(me);if(be===-1){for(let Te=0;Te<w.length;Te++)if(Te>=M.length){M.push(me),be=Te;break}else if(M[Te]===null){M[Te]=me,be=Te;break}if(be===-1)break}const we=w[be];we&&we.connect(me)}}const X=new N,j=new N;function V(F,K,me){X.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);const be=X.distanceTo(j),we=K.projectionMatrix.elements,Te=me.projectionMatrix.elements,Re=we[14]/(we[10]-1),Ae=we[14]/(we[10]+1),He=(we[9]+1)/we[5],et=(we[9]-1)/we[5],Ue=(we[8]-1)/we[0],_=(Te[8]+1)/Te[0],L=Re*Ue,I=Re*_,k=be/(-Ue+_),H=k*-Ue;K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(H),F.translateZ(k),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const le=Re+k,ae=Ae+k,q=L-H,se=I+(be-H),ie=He*Ae/ae*le,ve=et*Ae/ae*le;F.projectionMatrix.makePerspective(q,se,ie,ve,le,ae),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function te(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;C.near=R.near=T.near=F.near,C.far=R.far=T.far=F.far,(ee!==C.near||E!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),ee=C.near,E=C.far);const K=F.parent,me=C.cameras;te(C,K);for(let be=0;be<me.length;be++)te(me[be],K);me.length===2?V(C,T,R):C.projectionMatrix.copy(T.projectionMatrix),W(F,C,K)};function W(F,K,me){me===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(me.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=rs*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let $=null;function ue(F,K){if(u=K.getViewerPose(c||o),x=K,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let be=!1;me.length!==C.cameras.length&&(C.cameras.length=0,be=!0);for(let we=0;we<me.length;we++){const Te=me[we];let Re=null;if(m!==null)Re=m.getViewport(Te);else{const He=d.getViewSubImage(h,Te);Re=He.viewport,we===0&&(e.setRenderTargetTextures(p,He.colorTexture,h.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(p))}let Ae=D[we];Ae===void 0&&(Ae=new Ht,Ae.layers.enable(we),Ae.viewport=new ht,D[we]=Ae),Ae.matrix.fromArray(Te.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Te.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Re.x,Re.y,Re.width,Re.height),we===0&&(C.matrix.copy(Ae.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),be===!0&&C.cameras.push(Ae)}}for(let me=0;me<w.length;me++){const be=M[me],we=w[me];be!==null&&we!==void 0&&we.update(be,K,c||o)}$&&$(F,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const ce=new Pd;ce.setAnimationLoop(ue),this.setAnimationLoop=function(F){$=F},this.dispose=function(){}}}function CM(r,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Rd(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,w,M,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),d(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(s(f,p),x(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),v(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,w,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Lt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Lt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const M=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,w,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=M*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const w=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function LM(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,M){const T=M.program;n.uniformBlockBinding(w,T)}function c(w,M){let T=i[w.id];T===void 0&&(x(w),T=u(w),i[w.id]=T,w.addEventListener("dispose",f));const R=M.program;n.updateUBOMapping(w,R);const D=e.render.frame;s[w.id]!==D&&(h(w),s[w.id]=D)}function u(w){const M=d();w.__bindingPointIndex=M;const T=r.createBuffer(),R=w.__size,D=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,R,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,T),T}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const M=i[w.id],T=w.uniforms,R=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let D=0,C=T.length;D<C;D++){const ee=T[D];if(m(ee,D,R)===!0){const E=ee.__offset,b=Array.isArray(ee.value)?ee.value:[ee.value];let oe=0;for(let he=0;he<b.length;he++){const X=b[he],j=v(X);typeof X=="number"?(ee.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,E+oe,ee.__data)):X.isMatrix3?(ee.__data[0]=X.elements[0],ee.__data[1]=X.elements[1],ee.__data[2]=X.elements[2],ee.__data[3]=X.elements[0],ee.__data[4]=X.elements[3],ee.__data[5]=X.elements[4],ee.__data[6]=X.elements[5],ee.__data[7]=X.elements[0],ee.__data[8]=X.elements[6],ee.__data[9]=X.elements[7],ee.__data[10]=X.elements[8],ee.__data[11]=X.elements[0]):(X.toArray(ee.__data,oe),oe+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,E,ee.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(w,M,T){const R=w.value;if(T[M]===void 0){if(typeof R=="number")T[M]=R;else{const D=Array.isArray(R)?R:[R],C=[];for(let ee=0;ee<D.length;ee++)C.push(D[ee].clone());T[M]=C}return!0}else if(typeof R=="number"){if(T[M]!==R)return T[M]=R,!0}else{const D=Array.isArray(T[M])?T[M]:[T[M]],C=Array.isArray(R)?R:[R];for(let ee=0;ee<D.length;ee++){const E=D[ee];if(E.equals(C[ee])===!1)return E.copy(C[ee]),!0}}return!1}function x(w){const M=w.uniforms;let T=0;const R=16;let D=0;for(let C=0,ee=M.length;C<ee;C++){const E=M[C],b={boundary:0,storage:0},oe=Array.isArray(E.value)?E.value:[E.value];for(let he=0,X=oe.length;he<X;he++){const j=oe[he],V=v(j);b.boundary+=V.boundary,b.storage+=V.storage}if(E.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,C>0){D=T%R;const he=R-D;D!==0&&he-b.boundary<0&&(T+=R-D,E.__offset=T)}T+=b.storage}return D=T%R,D>0&&(T+=R-D),w.__size=T,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function f(w){const M=w.target;M.removeEventListener("dispose",f);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Fd{constructor(e={}){const{canvas:t=S_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,f=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=kr,this.toneMappingExposure=1;const M=this;let T=!1,R=0,D=0,C=null,ee=-1,E=null;const b=new ht,oe=new ht;let he=null;const X=new Ge(0);let j=0,V=t.width,te=t.height,W=1,$=null,ue=null;const ce=new ht(0,0,V,te),F=new ht(0,0,V,te);let K=!1;const me=new wl;let be=!1,we=!1,Te=null;const Re=new it,Ae=new Ie,He=new N,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return C===null?W:1}let _=n;function L(S,O){for(let Z=0;Z<S.length;Z++){const z=S[Z],Y=t.getContext(z,O);if(Y!==null)return Y}return null}try{const S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",fe,!1),_===null){const O=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&O.shift(),_=L(O,S),_===null)throw L(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let I,k,H,le,ae,q,se,ie,ve,y,g,U,J,re,ne,xe,de,G,A,Q,Ee,pe,ge,Ce;function je(){I=new Bx(_),k=new Ix(_,I,e),I.init(k),pe=new bM(_,I,k),H=new MM(_,I,k),le=new Vx(_),ae=new oM,q=new EM(_,I,H,ae,k,pe,le),se=new Ox(M),ie=new Hx(M),ve=new Q_(_,k),ge=new Ux(_,I,ve,k),y=new kx(_,ve,le,ge),g=new Yx(_,y,ve,le),A=new jx(_,k,q),xe=new Nx(ae),U=new aM(M,se,ie,I,k,ge,xe),J=new CM(M,ae),re=new cM,ne=new mM(I,k),G=new Px(M,se,ie,H,g,h,l),de=new yM(M,g,k),Ce=new LM(_,le,k,H),Q=new Dx(_,I,le,k),Ee=new Gx(_,I,le,k),le.programs=U.programs,M.capabilities=k,M.extensions=I,M.properties=ae,M.renderLists=re,M.shadowMap=de,M.state=H,M.info=le}je();const P=new RM(M,_);this.xr=P,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const S=I.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=I.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(V,te,!1))},this.getSize=function(S){return S.set(V,te)},this.setSize=function(S,O,Z=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,te=O,t.width=Math.floor(S*W),t.height=Math.floor(O*W),Z===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(V*W,te*W).floor()},this.setDrawingBufferSize=function(S,O,Z){V=S,te=O,W=Z,t.width=Math.floor(S*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,O,Z,z){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,O,Z,z),H.viewport(b.copy(ce).multiplyScalar(W).floor())},this.getScissor=function(S){return S.copy(F)},this.setScissor=function(S,O,Z,z){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,O,Z,z),H.scissor(oe.copy(F).multiplyScalar(W).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(S){H.setScissorTest(K=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(S=!0,O=!0,Z=!0){let z=0;if(S){let Y=!1;if(C!==null){const Se=C.texture.format;Y=Se===vd||Se===_d||Se===gd}if(Y){const Se=C.texture.type,Le=Se===Gr||Se===Nr||Se===Sl||Se===on||Se===fd||Se===md,Pe=G.getClearColor(),De=G.getClearAlpha(),Ve=Pe.r,Oe=Pe.g,Fe=Pe.b;Le?(m[0]=Ve,m[1]=Oe,m[2]=Fe,m[3]=De,_.clearBufferuiv(_.COLOR,0,m)):(x[0]=Ve,x[1]=Oe,x[2]=Fe,x[3]=De,_.clearBufferiv(_.COLOR,0,x))}else z|=_.COLOR_BUFFER_BIT}O&&(z|=_.DEPTH_BUFFER_BIT),Z&&(z|=_.STENCIL_BUFFER_BIT),_.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),re.dispose(),ne.dispose(),ae.dispose(),se.dispose(),ie.dispose(),g.dispose(),ge.dispose(),Ce.dispose(),U.dispose(),P.dispose(),P.removeEventListener("sessionstart",Qe),P.removeEventListener("sessionend",tr),Te&&(Te.dispose(),Te=null),Mt.stop()};function ye(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=le.autoReset,O=de.enabled,Z=de.autoUpdate,z=de.needsUpdate,Y=de.type;je(),le.autoReset=S,de.enabled=O,de.autoUpdate=Z,de.needsUpdate=z,de.type=Y}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function _e(S){const O=S.target;O.removeEventListener("dispose",_e),Ye(O)}function Ye(S){qe(S),ae.remove(S)}function qe(S){const O=ae.get(S).programs;O!==void 0&&(O.forEach(function(Z){U.releaseProgram(Z)}),S.isShaderMaterial&&U.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,Z,z,Y,Se){O===null&&(O=et);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=kd(S,O,Z,z,Y);H.setMaterial(z,Le);let De=Z.index,Ve=1;if(z.wireframe===!0){if(De=y.getWireframeAttribute(Z),De===void 0)return;Ve=2}const Oe=Z.drawRange,Fe=Z.attributes.position;let ct=Oe.start*Ve,tt=(Oe.start+Oe.count)*Ve;Se!==null&&(ct=Math.max(ct,Se.start*Ve),tt=Math.min(tt,(Se.start+Se.count)*Ve)),De!==null?(ct=Math.max(ct,0),tt=Math.min(tt,De.count)):Fe!=null&&(ct=Math.max(ct,0),tt=Math.min(tt,Fe.count));const Ot=tt-ct;if(Ot<0||Ot===1/0)return;ge.setup(Y,z,Pe,Z,De);let dr,rt=Q;if(De!==null&&(dr=ve.get(De),rt=Ee,rt.setIndex(dr)),Y.isMesh)z.wireframe===!0?(H.setLineWidth(z.wireframeLinewidth*Ue()),rt.setMode(_.LINES)):rt.setMode(_.TRIANGLES);else if(Y.isLine){let We=z.linewidth;We===void 0&&(We=1),H.setLineWidth(We*Ue()),Y.isLineSegments?rt.setMode(_.LINES):Y.isLineLoop?rt.setMode(_.LINE_LOOP):rt.setMode(_.LINE_STRIP)}else Y.isPoints?rt.setMode(_.POINTS):Y.isSprite&&rt.setMode(_.TRIANGLES);if(Y.isInstancedMesh)rt.renderInstances(ct,Ot,Y.count);else if(Z.isInstancedBufferGeometry){const We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Sa=Math.min(Z.instanceCount,We);rt.renderInstances(ct,Ot,Sa)}else rt.render(ct,Ot)},this.compile=function(S,O){function Z(z,Y,Se){z.transparent===!0&&z.side===ar&&z.forceSinglePass===!1?(z.side=Lt,z.needsUpdate=!0,us(z,Y,Se),z.side=Wr,z.needsUpdate=!0,us(z,Y,Se),z.side=ar):us(z,Y,Se)}f=ne.get(S),f.init(),w.push(f),S.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(M._useLegacyLights),S.traverse(function(z){const Y=z.material;if(Y)if(Array.isArray(Y))for(let Se=0;Se<Y.length;Se++){const Le=Y[Se];Z(Le,S,z)}else Z(Y,S,z)}),w.pop(),f=null};let Ke=null;function er(S){Ke&&Ke(S)}function Qe(){Mt.stop()}function tr(){Mt.start()}const Mt=new Pd;Mt.setAnimationLoop(er),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(S){Ke=S,P.setAnimationLoop(S),S===null?Mt.stop():Mt.start()},P.addEventListener("sessionstart",Qe),P.addEventListener("sessionend",tr),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,O,C),f=ne.get(S,w.length),f.init(),w.push(f),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),me.setFromProjectionMatrix(Re),we=this.localClippingEnabled,be=xe.init(this.clippingPlanes,we),v=re.get(S,p.length),v.init(),p.push(v),Ll(S,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort($,ue),this.info.render.frame++,be===!0&&xe.beginShadows();const Z=f.state.shadowsArray;if(de.render(Z,S,O),be===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(v,S),f.setupLights(M._useLegacyLights),O.isArrayCamera){const z=O.cameras;for(let Y=0,Se=z.length;Y<Se;Y++){const Le=z[Y];Pl(v,S,Le,Le.viewport)}}else Pl(v,S,O);C!==null&&(q.updateMultisampleRenderTarget(C),q.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(M,S,O),ge.resetDefaultState(),ee=-1,E=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ll(S,O,Z,z){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||me.intersectsSprite(S)){z&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Re);const Se=g.update(S),Le=S.material;Le.visible&&v.push(S,Se,Le,Z,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||me.intersectsObject(S))){const Se=g.update(S),Le=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),He.copy(Se.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(Re)),Array.isArray(Le)){const Pe=Se.groups;for(let De=0,Ve=Pe.length;De<Ve;De++){const Oe=Pe[De],Fe=Le[Oe.materialIndex];Fe&&Fe.visible&&v.push(S,Se,Fe,Z,He.z,Oe)}}else Le.visible&&v.push(S,Se,Le,Z,He.z,null)}}const Y=S.children;for(let Se=0,Le=Y.length;Se<Le;Se++)Ll(Y[Se],O,Z,z)}function Pl(S,O,Z,z){const Y=S.opaque,Se=S.transmissive,Le=S.transparent;f.setupLightsView(Z),be===!0&&xe.setGlobalState(M.clippingPlanes,Z),Se.length>0&&Bd(Y,Se,O,Z),z&&H.viewport(b.copy(z)),Y.length>0&&cs(Y,O,Z),Se.length>0&&cs(Se,O,Z),Le.length>0&&cs(Le,O,Z),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Bd(S,O,Z,z){const Y=k.isWebGL2;Te===null&&(Te=new hn(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?ts:Gr,minFilter:es,samples:Y?4:0})),M.getDrawingBufferSize(Ae),Y?Te.setSize(Ae.x,Ae.y):Te.setSize(na(Ae.x),na(Ae.y));const Se=M.getRenderTarget();M.setRenderTarget(Te),M.getClearColor(X),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear();const Le=M.toneMapping;M.toneMapping=kr,cs(S,Z,z),q.updateMultisampleRenderTarget(Te),q.updateRenderTargetMipmap(Te);let Pe=!1;for(let De=0,Ve=O.length;De<Ve;De++){const Oe=O[De],Fe=Oe.object,ct=Oe.geometry,tt=Oe.material,Ot=Oe.group;if(tt.side===ar&&Fe.layers.test(z.layers)){const dr=tt.side;tt.side=Lt,tt.needsUpdate=!0,Ul(Fe,Z,z,ct,tt,Ot),tt.side=dr,tt.needsUpdate=!0,Pe=!0}}Pe===!0&&(q.updateMultisampleRenderTarget(Te),q.updateRenderTargetMipmap(Te)),M.setRenderTarget(Se),M.setClearColor(X,j),M.toneMapping=Le}function cs(S,O,Z){const z=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,Se=S.length;Y<Se;Y++){const Le=S[Y],Pe=Le.object,De=Le.geometry,Ve=z===null?Le.material:z,Oe=Le.group;Pe.layers.test(Z.layers)&&Ul(Pe,O,Z,De,Ve,Oe)}}function Ul(S,O,Z,z,Y,Se){S.onBeforeRender(M,O,Z,z,Y,Se),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(M,O,Z,z,S,Se),Y.transparent===!0&&Y.side===ar&&Y.forceSinglePass===!1?(Y.side=Lt,Y.needsUpdate=!0,M.renderBufferDirect(Z,O,z,Y,S,Se),Y.side=Wr,Y.needsUpdate=!0,M.renderBufferDirect(Z,O,z,Y,S,Se),Y.side=ar):M.renderBufferDirect(Z,O,z,Y,S,Se),S.onAfterRender(M,O,Z,z,Y,Se)}function us(S,O,Z){O.isScene!==!0&&(O=et);const z=ae.get(S),Y=f.state.lights,Se=f.state.shadowsArray,Le=Y.state.version,Pe=U.getParameters(S,Y.state,Se,O,Z),De=U.getProgramCacheKey(Pe);let Ve=z.programs;z.environment=S.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(S.isMeshStandardMaterial?ie:se).get(S.envMap||z.environment),Ve===void 0&&(S.addEventListener("dispose",_e),Ve=new Map,z.programs=Ve);let Oe=Ve.get(De);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===Le)return Dl(S,Pe),Oe}else Pe.uniforms=U.getUniforms(S),S.onBuild(Z,Pe,M),S.onBeforeCompile(Pe,M),Oe=U.acquireProgram(Pe,De),Ve.set(De,Oe),z.uniforms=Pe.uniforms;const Fe=z.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=xe.uniform),Dl(S,Pe),z.needsLights=Vd(S),z.lightsStateVersion=Le,z.needsLights&&(Fe.ambientLightColor.value=Y.state.ambient,Fe.lightProbe.value=Y.state.probe,Fe.directionalLights.value=Y.state.directional,Fe.directionalLightShadows.value=Y.state.directionalShadow,Fe.spotLights.value=Y.state.spot,Fe.spotLightShadows.value=Y.state.spotShadow,Fe.rectAreaLights.value=Y.state.rectArea,Fe.ltc_1.value=Y.state.rectAreaLTC1,Fe.ltc_2.value=Y.state.rectAreaLTC2,Fe.pointLights.value=Y.state.point,Fe.pointLightShadows.value=Y.state.pointShadow,Fe.hemisphereLights.value=Y.state.hemi,Fe.directionalShadowMap.value=Y.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Fe.spotShadowMap.value=Y.state.spotShadowMap,Fe.spotLightMatrix.value=Y.state.spotLightMatrix,Fe.spotLightMap.value=Y.state.spotLightMap,Fe.pointShadowMap.value=Y.state.pointShadowMap,Fe.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ct=Oe.getUniforms(),tt=Ks.seqWithValue(ct.seq,Fe);return z.currentProgram=Oe,z.uniformsList=tt,Oe}function Dl(S,O){const Z=ae.get(S);Z.outputColorSpace=O.outputColorSpace,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function kd(S,O,Z,z,Y){O.isScene!==!0&&(O=et),q.resetTextureUnits();const Se=O.fog,Le=z.isMeshStandardMaterial?O.environment:null,Pe=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ur,De=(z.isMeshStandardMaterial?ie:se).get(z.envMap||Le),Ve=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Oe=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Fe=!!Z.morphAttributes.position,ct=!!Z.morphAttributes.normal,tt=!!Z.morphAttributes.color;let Ot=kr;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=M.toneMapping);const dr=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,rt=dr!==void 0?dr.length:0,We=ae.get(z),Sa=f.state.lights;if(be===!0&&(we===!0||S!==E)){const Dt=S===E&&z.id===ee;xe.setState(z,S,Dt)}let ba=!1;z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Sa.state.version||We.outputColorSpace!==Pe||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||We.envMap!==De||z.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==xe.numPlanes||We.numIntersection!==xe.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Oe||We.morphTargets!==Fe||We.morphNormals!==ct||We.morphColors!==tt||We.toneMapping!==Ot||k.isWebGL2===!0&&We.morphTargetsCount!==rt)&&(ba=!0):(ba=!0,We.__version=z.version);let Xr=We.currentProgram;ba===!0&&(Xr=us(z,O,Y));let Il=!1,ui=!1,Ta=!1;const Et=Xr.getUniforms(),jr=We.uniforms;if(H.useProgram(Xr.program)&&(Il=!0,ui=!0,Ta=!0),z.id!==ee&&(ee=z.id,ui=!0),Il||E!==S){Et.setValue(_,"projectionMatrix",S.projectionMatrix),Et.setValue(_,"viewMatrix",S.matrixWorldInverse);const Dt=Et.map.cameraPosition;Dt!==void 0&&Dt.setValue(_,He.setFromMatrixPosition(S.matrixWorld)),k.logarithmicDepthBuffer&&Et.setValue(_,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Et.setValue(_,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,ui=!0,Ta=!0)}if(Y.isSkinnedMesh){Et.setOptional(_,Y,"bindMatrix"),Et.setOptional(_,Y,"bindMatrixInverse");const Dt=Y.skeleton;Dt&&(k.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Et.setValue(_,"boneTexture",Dt.boneTexture,q),Et.setValue(_,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wa=Z.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&k.isWebGL2===!0)&&A.update(Y,Z,Xr),(ui||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,Et.setValue(_,"receiveShadow",Y.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(jr.envMap.value=De,jr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ui&&(Et.setValue(_,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&Gd(jr,Ta),Se&&z.fog===!0&&J.refreshFogUniforms(jr,Se),J.refreshMaterialUniforms(jr,z,W,te,Te),Ks.upload(_,We.uniformsList,jr,q)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ks.upload(_,We.uniformsList,jr,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Et.setValue(_,"center",Y.center),Et.setValue(_,"modelViewMatrix",Y.modelViewMatrix),Et.setValue(_,"normalMatrix",Y.normalMatrix),Et.setValue(_,"modelMatrix",Y.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Dt=z.uniformsGroups;for(let Aa=0,Wd=Dt.length;Aa<Wd;Aa++)if(k.isWebGL2){const Nl=Dt[Aa];Ce.update(Nl,Xr),Ce.bind(Nl,Xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xr}function Gd(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Vd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,O,Z){ae.get(S.texture).__webglTexture=O,ae.get(S.depthTexture).__webglTexture=Z;const z=ae.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const Z=ae.get(S);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,Z=0){C=S,R=O,D=Z;let z=!0,Y=null,Se=!1,Le=!1;if(S){const Pe=ae.get(S);Pe.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(_.FRAMEBUFFER,null),z=!1):Pe.__webglFramebuffer===void 0?q.setupRenderTarget(S):Pe.__hasExternalTextures&&q.rebindTextures(S,ae.get(S.texture).__webglTexture,ae.get(S.depthTexture).__webglTexture);const De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Le=!0);const Ve=ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[O])?Y=Ve[O][Z]:Y=Ve[O],Se=!0):k.isWebGL2&&S.samples>0&&q.useMultisampledRTT(S)===!1?Y=ae.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[Z]:Y=Ve,b.copy(S.viewport),oe.copy(S.scissor),he=S.scissorTest}else b.copy(ce).multiplyScalar(W).floor(),oe.copy(F).multiplyScalar(W).floor(),he=K;if(H.bindFramebuffer(_.FRAMEBUFFER,Y)&&k.drawBuffers&&z&&H.drawBuffers(S,Y),H.viewport(b),H.scissor(oe),H.setScissorTest(he),Se){const Pe=ae.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,Z)}else if(Le){const Pe=ae.get(S.texture),De=O||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Pe.__webglTexture,Z||0,De)}ee=-1},this.readRenderTargetPixels=function(S,O,Z,z,Y,Se,Le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe){H.bindFramebuffer(_.FRAMEBUFFER,Pe);try{const De=S.texture,Ve=De.format,Oe=De.type;if(Ve!==Kt&&pe.convert(Ve)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Oe===ts&&(I.has("EXT_color_buffer_half_float")||k.isWebGL2&&I.has("EXT_color_buffer_float"));if(Oe!==Gr&&pe.convert(Oe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Or&&(k.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-z&&Z>=0&&Z<=S.height-Y&&_.readPixels(O,Z,z,Y,pe.convert(Ve),pe.convert(Oe),Se)}finally{const De=C!==null?ae.get(C).__webglFramebuffer:null;H.bindFramebuffer(_.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(S,O,Z=0){const z=Math.pow(2,-Z),Y=Math.floor(O.image.width*z),Se=Math.floor(O.image.height*z);q.setTexture2D(O,0),_.copyTexSubImage2D(_.TEXTURE_2D,Z,0,0,S.x,S.y,Y,Se),H.unbindTexture()},this.copyTextureToTexture=function(S,O,Z,z=0){const Y=O.image.width,Se=O.image.height,Le=pe.convert(Z.format),Pe=pe.convert(Z.type);q.setTexture2D(Z,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,Z.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,Z.unpackAlignment),O.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,z,S.x,S.y,Y,Se,Le,Pe,O.image.data):O.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,z,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Le,O.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,z,S.x,S.y,Le,Pe,O.image),z===0&&Z.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(S,O,Z,z,Y=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=S.max.x-S.min.x+1,Le=S.max.y-S.min.y+1,Pe=S.max.z-S.min.z+1,De=pe.convert(z.format),Ve=pe.convert(z.type);let Oe;if(z.isData3DTexture)q.setTexture3D(z,0),Oe=_.TEXTURE_3D;else if(z.isDataArrayTexture)q.setTexture2DArray(z,0),Oe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,z.unpackAlignment);const Fe=_.getParameter(_.UNPACK_ROW_LENGTH),ct=_.getParameter(_.UNPACK_IMAGE_HEIGHT),tt=_.getParameter(_.UNPACK_SKIP_PIXELS),Ot=_.getParameter(_.UNPACK_SKIP_ROWS),dr=_.getParameter(_.UNPACK_SKIP_IMAGES),rt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,rt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,rt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,S.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,S.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,S.min.z),Z.isDataTexture||Z.isData3DTexture?_.texSubImage3D(Oe,Y,O.x,O.y,O.z,Se,Le,Pe,De,Ve,rt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Oe,Y,O.x,O.y,O.z,Se,Le,Pe,De,rt.data)):_.texSubImage3D(Oe,Y,O.x,O.y,O.z,Se,Le,Pe,De,Ve,rt),_.pixelStorei(_.UNPACK_ROW_LENGTH,Fe),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ct),_.pixelStorei(_.UNPACK_SKIP_PIXELS,tt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ot),_.pixelStorei(_.UNPACK_SKIP_IMAGES,dr),Y===0&&z.generateMipmaps&&_.generateMipmap(Oe),H.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),H.unbindTexture()},this.resetState=function(){R=0,D=0,C=null,H.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Er}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?cn:xd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cn?$e:ur}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class PM extends Fd{}PM.prototype.isWebGL1Renderer=!0;class Rl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class UM extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class zd extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Iu=new N,Nu=new N,Ou=new it,ho=new xa,Vs=new va;class DM extends ft{constructor(e=new Tr,t=new zd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Iu.fromBufferAttribute(t,i-1),Nu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Iu.distanceTo(Nu);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;Ou.copy(i).invert(),ho.copy(e.ray).applyMatrix4(Ou);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,d=new N,h=new N,m=this.isLineSegments?2:1,x=n.index,v=n.attributes.position;if(x!==null){const f=Math.max(0,o.start),p=Math.min(x.count,o.start+o.count);for(let w=f,M=p-1;w<M;w+=m){const T=x.getX(w),R=x.getX(w+1);if(c.fromBufferAttribute(v,T),u.fromBufferAttribute(v,R),ho.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),p=Math.min(v.count,o.start+o.count);for(let w=f,M=p-1;w<M;w+=m){if(c.fromBufferAttribute(v,w),u.fromBufferAttribute(v,w+1),ho.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}const Fu=new N,zu=new N;class IM extends DM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fu.fromBufferAttribute(t,i),zu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fu.distanceTo(zu);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class NM extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Hu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class OM{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const FM=new OM;class Cl{constructor(e){this.manager=e!==void 0?e:FM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";class zM extends Cl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ns("img");function l(){u(),Hu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class HM extends Cl{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,o=new zM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Hd extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const po=new it,Bu=new N,ku=new N;class BM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kM extends BM{constructor(){super(new Ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class GM extends Hd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new kM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class VM extends Hd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class WM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gu(){return(typeof performance>"u"?Date:performance).now()}class XM{constructor(e,t,n=0,i=1/0){this.ray=new xa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Bo(e,this,n,t),n.sort(Vu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Bo(e[i],this,n,t);return n.sort(Vu),n}}function Vu(r,e){return r.distance-e.distance}function Bo(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Bo(i[s],e,t,!0)}}class Wu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jM extends IM{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ge(n),i=new Ge(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,m=0,x=-a;h<=t;h++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const v=h===s?n:i;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Tr;u.setAttribute("position",new kt(l,3)),u.setAttribute("color",new kt(c,3));const d=new zd({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);const Xu={type:"change"},fo={type:"start"},ju={type:"end"},Ws=new xa,Yu=new Ir,YM=Math.cos(70*E_.DEG2RAD);class qM extends fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yn.ROTATE,MIDDLE:yn.DOLLY,RIGHT:yn.PAN},this.touches={ONE:Mn.ROTATE,TWO:Mn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",g),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xu),n.update(),s=i.NONE},this.update=function(){const A=new N,Q=new dn().setFromUnitVectors(e.up,new N(0,1,0)),Ee=Q.clone().invert(),pe=new N,ge=new dn,Ce=new N,je=2*Math.PI;return function(P=null){const ye=n.object.position;A.copy(ye).sub(n.target),A.applyQuaternion(Q),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&oe(E(P)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let B=n.minAzimuthAngle,fe=n.maxAzimuthAngle;isFinite(B)&&isFinite(fe)&&(B<-Math.PI?B+=je:B>Math.PI&&(B-=je),fe<-Math.PI?fe+=je:fe>Math.PI&&(fe-=je),B<=fe?a.theta=Math.max(B,Math.min(fe,a.theta)):a.theta=a.theta>(B+fe)/2?Math.max(B,a.theta):Math.min(fe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&D||n.object.isOrthographicCamera?a.radius=ue(a.radius):a.radius=ue(a.radius*c),A.setFromSpherical(a),A.applyQuaternion(Ee),ye.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let _e=!1;if(n.zoomToCursor&&D){let Ye=null;if(n.object.isPerspectiveCamera){const qe=A.length();Ye=ue(qe*c);const Ke=qe-Ye;n.object.position.addScaledVector(T,Ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const qe=new N(R.x,R.y,0);qe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),_e=!0;const Ke=new N(R.x,R.y,0);Ke.unproject(n.object),n.object.position.sub(Ke).add(qe),n.object.updateMatrixWorld(),Ye=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ye).add(n.object.position):(Ws.origin.copy(n.object.position),Ws.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ws.direction))<YM?e.lookAt(n.target):(Yu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ws.intersectPlane(Yu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),_e=!0);return c=1,D=!1,_e||pe.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>0?(n.dispatchEvent(Xu),pe.copy(n.object.position),ge.copy(n.object.quaternion),Ce.copy(n.target),_e=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",re),n.domElement.removeEventListener("pointerdown",ae),n.domElement.removeEventListener("pointercancel",se),n.domElement.removeEventListener("wheel",y),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",se),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",g),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Wu,l=new Wu;let c=1;const u=new N,d=new Ie,h=new Ie,m=new Ie,x=new Ie,v=new Ie,f=new Ie,p=new Ie,w=new Ie,M=new Ie,T=new N,R=new Ie;let D=!1;const C=[],ee={};function E(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function oe(A){l.theta-=A}function he(A){l.phi-=A}const X=function(){const A=new N;return function(Q,Ee){A.setFromMatrixColumn(Ee,0),A.multiplyScalar(-Q),u.add(A)}}(),j=function(){const A=new N;return function(Q,Ee){n.screenSpacePanning===!0?A.setFromMatrixColumn(Ee,1):(A.setFromMatrixColumn(Ee,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Q),u.add(A)}}(),V=function(){const A=new N;return function(Q,Ee){const pe=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;A.copy(ge).sub(n.target);let Ce=A.length();Ce*=Math.tan(n.object.fov/2*Math.PI/180),X(2*Q*Ce/pe.clientHeight,n.object.matrix),j(2*Ee*Ce/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(Q*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),j(Ee*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function te(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(A){if(!n.zoomToCursor)return;D=!0;const Q=n.domElement.getBoundingClientRect(),Ee=A.clientX-Q.left,pe=A.clientY-Q.top,ge=Q.width,Ce=Q.height;R.x=Ee/ge*2-1,R.y=-(pe/Ce)*2+1,T.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function ue(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function ce(A){d.set(A.clientX,A.clientY)}function F(A){$(A),p.set(A.clientX,A.clientY)}function K(A){x.set(A.clientX,A.clientY)}function me(A){h.set(A.clientX,A.clientY),m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;oe(2*Math.PI*m.x/Q.clientHeight),he(2*Math.PI*m.y/Q.clientHeight),d.copy(h),n.update()}function be(A){w.set(A.clientX,A.clientY),M.subVectors(w,p),M.y>0?te(b()):M.y<0&&W(b()),p.copy(w),n.update()}function we(A){v.set(A.clientX,A.clientY),f.subVectors(v,x).multiplyScalar(n.panSpeed),V(f.x,f.y),x.copy(v),n.update()}function Te(A){$(A),A.deltaY<0?W(b()):A.deltaY>0&&te(b()),n.update()}function Re(A){let Q=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?he(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?he(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?oe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?oe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),Q=!0;break}Q&&(A.preventDefault(),n.update())}function Ae(){if(C.length===1)d.set(C[0].pageX,C[0].pageY);else{const A=.5*(C[0].pageX+C[1].pageX),Q=.5*(C[0].pageY+C[1].pageY);d.set(A,Q)}}function He(){if(C.length===1)x.set(C[0].pageX,C[0].pageY);else{const A=.5*(C[0].pageX+C[1].pageX),Q=.5*(C[0].pageY+C[1].pageY);x.set(A,Q)}}function et(){const A=C[0].pageX-C[1].pageX,Q=C[0].pageY-C[1].pageY,Ee=Math.sqrt(A*A+Q*Q);p.set(0,Ee)}function Ue(){n.enableZoom&&et(),n.enablePan&&He()}function _(){n.enableZoom&&et(),n.enableRotate&&Ae()}function L(A){if(C.length==1)h.set(A.pageX,A.pageY);else{const Ee=G(A),pe=.5*(A.pageX+Ee.x),ge=.5*(A.pageY+Ee.y);h.set(pe,ge)}m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;oe(2*Math.PI*m.x/Q.clientHeight),he(2*Math.PI*m.y/Q.clientHeight),d.copy(h)}function I(A){if(C.length===1)v.set(A.pageX,A.pageY);else{const Q=G(A),Ee=.5*(A.pageX+Q.x),pe=.5*(A.pageY+Q.y);v.set(Ee,pe)}f.subVectors(v,x).multiplyScalar(n.panSpeed),V(f.x,f.y),x.copy(v)}function k(A){const Q=G(A),Ee=A.pageX-Q.x,pe=A.pageY-Q.y,ge=Math.sqrt(Ee*Ee+pe*pe);w.set(0,ge),M.set(0,Math.pow(w.y/p.y,n.zoomSpeed)),te(M.y),p.copy(w)}function H(A){n.enableZoom&&k(A),n.enablePan&&I(A)}function le(A){n.enableZoom&&k(A),n.enableRotate&&L(A)}function ae(A){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",q),n.domElement.addEventListener("pointerup",se)),ne(A),A.pointerType==="touch"?U(A):ie(A))}function q(A){n.enabled!==!1&&(A.pointerType==="touch"?J(A):ve(A))}function se(A){xe(A),C.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",se)),n.dispatchEvent(ju),s=i.NONE}function ie(A){let Q;switch(A.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case yn.DOLLY:if(n.enableZoom===!1)return;F(A),s=i.DOLLY;break;case yn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;K(A),s=i.PAN}else{if(n.enableRotate===!1)return;ce(A),s=i.ROTATE}break;case yn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;ce(A),s=i.ROTATE}else{if(n.enablePan===!1)return;K(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(fo)}function ve(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;me(A);break;case i.DOLLY:if(n.enableZoom===!1)return;be(A);break;case i.PAN:if(n.enablePan===!1)return;we(A);break}}function y(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(fo),Te(A),n.dispatchEvent(ju))}function g(A){n.enabled===!1||n.enablePan===!1||Re(A)}function U(A){switch(de(A),C.length){case 1:switch(n.touches.ONE){case Mn.ROTATE:if(n.enableRotate===!1)return;Ae(),s=i.TOUCH_ROTATE;break;case Mn.PAN:if(n.enablePan===!1)return;He(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Mn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ue(),s=i.TOUCH_DOLLY_PAN;break;case Mn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(fo)}function J(A){switch(de(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;L(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;I(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;le(A),n.update();break;default:s=i.NONE}}function re(A){n.enabled!==!1&&A.preventDefault()}function ne(A){C.push(A)}function xe(A){delete ee[A.pointerId];for(let Q=0;Q<C.length;Q++)if(C[Q].pointerId==A.pointerId){C.splice(Q,1);return}}function de(A){let Q=ee[A.pointerId];Q===void 0&&(Q=new Ie,ee[A.pointerId]=Q),Q.set(A.pageX,A.pageY)}function G(A){const Q=A.pointerId===C[0].pointerId?C[1]:C[0];return ee[Q.pointerId]}n.domElement.addEventListener("contextmenu",re),n.domElement.addEventListener("pointerdown",ae),n.domElement.addEventListener("pointercancel",se),n.domElement.addEventListener("wheel",y,{passive:!1}),this.update()}}class ZM{constructor(e,t){this.controls=new qM(e,t)}init(){return this.controls.enabled=!0,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=1,this.controls.enableDamping=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls}tick(e){this.controls.update()}}class KM{constructor(e){this.pos=e}init(){return this.camera=new Ht(80,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.set(this.pos.x,this.pos.y,this.pos.z),this.camera.lookAt(0,0,0),this.camera}tick(e){}}class JM{constructor(){}init(e,t,n){const i=new GM(t,1.5);i.position.set(0,0,5),e.add(i);const s=new VM(n,.7);s.position.set(-2,0,5),e.add(s)}tick(e){}}class $M{constructor(e,t,n){this.clock=new WM,this.camera=e,this.scene=t,this.renderer=n,this.updatables=[]}addToUpdate(e){this.updatables.push(e)}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(e){e||(e=this.clock.getDelta());for(const t of this.updatables)t.tick(e)}}class QM{constructor(){this.scene=new UM}init(e){return this.scene.background=new Ge(e),this.scene.fog=new Rl(e,50,90),this.scene}addMesh(e){if(!e){console.log("Mesh is null or undifined and will not be added to the scene!");return}if(e instanceof Rt){this.scene.add(e);return}console.log("This parameter is not a Mesh and will not be added to the scene!")}}class eE{constructor(e,t){this.setSize(e,t),window.addEventListener("resize",()=>{this.setSize(e,t)})}setSize(e,t){e.aspect=window.innerWidth/window.innerHeight*.5,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)}}class tE{constructor(e,t){this.size=e,this.divisions=t}init(e){this.gridHelper=new jM(this.size,this.divisions),e.add(this.gridHelper)}}class rE extends Rt{constructor(e,t,n,i){super(),this.name=e,this.dim=t,this.seg=n,this.pos=i}initMesh(e,t){this.geometry=new ls(this.dim.x,this.dim.y,this.seg.x,this.seg.y),this.geometry.rotateX(-Math.PI/2),this.material=new Ma({color:t||new Ge(16711680),visible:e}),this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}class nE extends Rt{constructor(e,t,n,i){super(),this.name=e,this.dim=t,this.seg=n,this.pos=i}initMesh(e,t){const n=new HM,i=e+"/"+t,s=n.load(new URL("./../../../textures/terrains/"+i+"/ao.png",import.meta.url).toString()),o=n.load(new URL("./../../../textures/terrains/"+i+"/bump.png",import.meta.url).toString()),a=n.load(new URL("./../../../textures/terrains/"+i+"/normal.png",import.meta.url).toString()),l=n.load(new URL("./../../../textures/terrains/"+i+"/displacement.png",import.meta.url).toString()),c=n.load(new URL("./../../../textures/terrains/"+i+"/diffuse.png",import.meta.url).toString());this.geometry=new li(this.dim.x,this.dim.y,this.dim.z,this.seg.x,this.seg.y,this.seg.z);const u=this.geometry.attributes.position,d=this.geometry.attributes.normal,h=[];for(let m=0;m<u.count;m++){h.push(Math.sign(u.getY(m)),Math.sign(d.getY(m)));const x=(u.getX(m)+this.dim.x*.5)/this.dim.x,v=1-(u.getZ(m)+this.dim.z*.5)/this.dim.z;this.geometry.attributes.uv.setXY(m,x,v)}this.geometry.setAttribute("enableDisp",new kt(h,2)),this.material=new NM({aoMap:s,normalMap:a,bumpMap:o,bumpScale:.5,displacementMap:l,displacementScale:1.5,map:c,side:ar}),this.material.onBeforeCompile=m=>{m.vertexShader=`
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
        `)},this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}class iE extends Rt{constructor(e,t,n,i){super(),this.name=e,this.dim=t,this.seg=n,this.pos=i}initMesh(e,t){this.geometry=new ls(this.dim.x,this.dim.z),this.geometry.rotateX(-Math.PI/2),this.material=new Ma({color:e,opacity:t,transparent:!0}),this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}var ko;(r=>{r.createEventHub=()=>({hub:Object.create(null),fire(e,t){(this.hub[e]||[]).forEach(n=>n(t))},on(e,t){this.hub[e]||(this.hub[e]=[]),this.hub[e].push(t)},off(e,t){const n=(this.hub[e]||[]).findIndex(i=>i===t);n>-1&&this.hub[e].splice(n,1),this.hub[e].length===0&&delete this.hub[e]}})})(ko||(ko={}));const mo=20,sE=40,ki=2,qu=ki*.5,Zu=new N(2,.5,2),aE=0,oE=.25,ia=ko.createEventHub();class lE{constructor(e){this.meshArray=[],this.isShiftDown=!1,this.sceneController=new QM,this.scene=this.sceneController.init(new Ge("#17181b")),this.renderer=new Fd({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.cameraController=new KM(new N(0,15,15)),this.camera=this.cameraController.init(),this.controlsController=new ZM(this.camera,e),this.controlsController.init(),new eE(this.camera,this.renderer),new JM().init(this.scene,new Ge(16777215),new Ge(5437322)),this.loopController=new $M(this.camera,this.scene,this.renderer),this.gridController=new tE(mo,sE),this.gridController.init(this.scene),this.raycaster=new XM,this.pointer=new Ie,this.planeController=new rE("T-Plane",new Ie(mo,mo),new Ie(1,1),new N(0,0,0)),this.planeController.initMesh(!1),this.addObject(this.planeController),this.terrainGhost=new iE("T-Ghost",Zu,new N(50,1,50),new N(0,0,0)),this.terrainGhost.initMesh(new Ge(16711680),.5),this.terrainGhost.mesh&&(this.sceneController.addMesh(this.terrainGhost.mesh),this.loopController.addToUpdate(this.terrainGhost)),this.init()}init(){this.addObject(this.controlsController),this.addObject(this.cameraController),document.addEventListener("keydown",e=>{this.onDocumentKeyDown(e)}),document.addEventListener("keyup",e=>{this.onDocumentKeyUp(e)}),ia.on("spawnTerrain",()=>document.addEventListener("pointermove",e=>{this.onPointerMove(e)})),ia.on("dropTerrain",e=>this.onPointerDown(e))}render(){this.renderer.render(this.scene,this.camera)}start(){this.loopController.start()}stop(){this.loopController.stop()}addObject(e){if(!e){console.log("Object is null or undifined and will not be added to the scene!");return}e.mesh&&(this.sceneController.addMesh(e.mesh),this.meshArray.push(e.mesh)),this.loopController.addToUpdate(e)}onPointerMove(e){console.log("OnPointerMove =>"),this.controlsController.controls.enabled=!1,this.pointer.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.meshArray,!1);if(t&&t.length>0){const n=t[0];this.terrainGhost&&this.terrainGhost.mesh&&n&&n.face&&(this.terrainGhost.mesh.position.copy(n.point).add(n.face.normal),this.terrainGhost.mesh.position.divideScalar(ki).floor().multiplyScalar(ki).addScalar(qu),this.terrainGhost.mesh.position.y=aE),this.render()}}onPointerDown(e){console.log("OnPointerDown =>"),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.meshArray,!1);if(t&&t.length>0){const n=t[0];if(this.isShiftDown)n.object&&n.object!==this.planeController.mesh&&(this.scene.remove(n.object),this.meshArray.splice(this.meshArray.indexOf(n.object),1));else{const i=new nE("T01",Zu,new N(50,1,50),new N(0,0,0));i.initMesh("mountain",e),i.mesh&&n&&n.face&&(i.mesh.position.copy(n.point).add(n.face.normal),i.mesh.position.divideScalar(ki).floor().multiplyScalar(ki).addScalar(qu),i.mesh.position.y=oE),this.addObject(i)}this.render()}this.controlsController.controls.enabled=!0,document.removeEventListener("pointermove",this.onPointerMove)}onDocumentKeyDown(e){switch(e.keyCode){case 16:this.isShiftDown=!0;break}}onDocumentKeyUp(e){switch(e.keyCode){case 16:this.isShiftDown=!1;break}}}const cE={class:"menu"},uE=pt("div",{class:"menu__title"},[pt("p",null,"Terrains")],-1),hE={id:"menu__resources",class:"menu__resources"},dE={class:"menu__resources--tile",tabindex:"1"},pE={class:"menu__resources--btn"},fE=["src"],mE={class:"menu__resources--tile",tabindex:"2"},gE={class:"menu__resources--btn"},_E=["src"],vE={class:"menu__resources--tile",tabindex:"3"},xE={class:"menu__resources--btn"},yE=["src"],ME={class:"menu__resources--tile",tabindex:"3"},EE={class:"menu__resources--btn"},SE=["src"],bE=Mh({__name:"ResourceExplorer",setup(r){const e=new URL("./dist/assets/thumb-4f930de4.png",self.location).toString(),t=new URL("./dist/assets/thumb-e08c5e7d.png",self.location).toString(),n=new URL("./dist/assets/thumb-424cb668.png",self.location).toString();function i(){setTimeout(()=>{let s=new Kn(document.getElementById("menu__resources"),{draggable:"li.menu__resources--tile"});s.on("drag:start",o=>{ia.fire("spawnTerrain","")}),s.on("drag:stop",o=>{const a=o.source;console.log("TILE ",a),ia.fire("dropTerrain",a.tabIndex)})},500)}return i(),(s,o)=>(Dh(),Of("div",cE,[uE,pt("ul",hE,[pt("li",dE,[pt("button",pE,[pt("img",{class:"menu__resources--img",title:"t1",src:zi(e)},null,8,fE)])]),pt("li",mE,[pt("button",gE,[pt("img",{class:"menu__resources--img",title:"t2",src:zi(t)},null,8,_E)])]),pt("li",vE,[pt("button",xE,[pt("img",{class:"menu__resources--img",title:"t3",src:zi(n)},null,8,yE)])]),pt("li",ME,[pt("button",EE,[pt("img",{class:"menu__resources--img",title:"t3",src:zi(n)},null,8,SE)])])])]))}}),TE=Mh({__name:"App",setup(r){return(e,t)=>(Dh(),Ff(bE))}});async function wE(){const r=document.getElementById("App");new lE(r).start()}ym(TE).mount("#App");wE();
