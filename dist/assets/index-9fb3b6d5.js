var qd=Object.defineProperty;var jd=(n,e,t)=>e in n?qd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ze=(n,e,t)=>(jd(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Wa(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Qe={},Xi=[],tn=()=>{},Kd=()=>!1,$d=/^on[^a-z]/,lo=n=>$d.test(n),Xa=n=>n.startsWith("onUpdate:"),pt=Object.assign,Ya=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zd=Object.prototype.hasOwnProperty,je=(n,e)=>Zd.call(n,e),Oe=Array.isArray,Xr=n=>co(n)==="[object Map]",Jd=n=>co(n)==="[object Set]",Ve=n=>typeof n=="function",_t=n=>typeof n=="string",qa=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",Ju=n=>lt(n)&&Ve(n.then)&&Ve(n.catch),Qd=Object.prototype.toString,co=n=>Qd.call(n),ef=n=>co(n).slice(8,-1),tf=n=>co(n)==="[object Object]",ja=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,js=Wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},nf=/-(\w)/g,$i=uo(n=>n.replace(nf,(e,t)=>t?t.toUpperCase():"")),rf=/\B([A-Z])/g,rr=uo(n=>n.replace(rf,"-$1").toLowerCase()),Qu=uo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Po=uo(n=>n?`on${Qu(n)}`:""),eo=(n,e)=>!Object.is(n,e),Do=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},to=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},sf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Bl;const va=()=>Bl||(Bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ka(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?cf(i):Ka(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(_t(n))return n;if(lt(n))return n}}const of=/;(?![^(]*\))/g,af=/:([^]+)/,lf=/\/\*[^]*?\*\//g;function cf(n){const e={};return n.replace(lf,"").split(of).forEach(t=>{if(t){const i=t.split(af);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function $a(n){let e="";if(_t(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=$a(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const uf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hf=Wa(uf);function eh(n){return!!n||n===""}let Kt;class df{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ff(n,e=Kt){e&&e.active&&e.effects.push(n)}function pf(){return Kt}const Za=n=>{const e=new Set(n);return e.w=0,e.n=0,e},th=n=>(n.w&qn)>0,nh=n=>(n.n&qn)>0,mf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=qn},gf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];th(r)&&!nh(r)?r.delete(n):e[t++]=r,r.w&=~qn,r.n&=~qn}e.length=t}},xa=new WeakMap;let Hr=0,qn=1;const Ma=30;let Zt;const li=Symbol(""),Ea=Symbol("");class Ja{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,ff(this,i)}run(){if(!this.active)return this.fn();let e=Zt,t=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,Gn=!0,qn=1<<++Hr,Hr<=Ma?mf(this):zl(this),this.fn()}finally{Hr<=Ma&&gf(this),qn=1<<--Hr,Zt=this.parent,Gn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(zl(this),this.onStop&&this.onStop(),this.active=!1)}}function zl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Gn=!0;const ih=[];function sr(){ih.push(Gn),Gn=!1}function or(){const n=ih.pop();Gn=n===void 0?!0:n}function It(n,e,t){if(Gn&&Zt){let i=xa.get(n);i||xa.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Za()),rh(r)}}function rh(n,e){let t=!1;Hr<=Ma?nh(n)||(n.n|=qn,t=!th(n)):t=!n.has(Zt),t&&(n.add(Zt),Zt.deps.push(n))}function An(n,e,t,i,r,s){const a=xa.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Oe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Oe(n)?ja(t)&&o.push(a.get("length")):(o.push(a.get(li)),Xr(n)&&o.push(a.get(Ea)));break;case"delete":Oe(n)||(o.push(a.get(li)),Xr(n)&&o.push(a.get(Ea)));break;case"set":Xr(n)&&o.push(a.get(li));break}if(o.length===1)o[0]&&Sa(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Sa(Za(l))}}function Sa(n,e){const t=Oe(n)?n:[...n];for(const i of t)i.computed&&Hl(i);for(const i of t)i.computed||Hl(i)}function Hl(n,e){(n!==Zt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const _f=Wa("__proto__,__v_isRef,__isVue"),sh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qa)),vf=Qa(),xf=Qa(!1,!0),Mf=Qa(!0),Gl=Ef();function Ef(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=$e(this);for(let s=0,a=this.length;s<a;s++)It(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){sr();const i=$e(this)[e].apply(this,t);return or(),i}}),n}function Sf(n){const e=$e(this);return It(e,"has",n),e.hasOwnProperty(n)}function Qa(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Bf:uh:e?ch:lh).get(i))return i;const a=Oe(i);if(!n){if(a&&je(Gl,r))return Reflect.get(Gl,r,s);if(r==="hasOwnProperty")return Sf}const o=Reflect.get(i,r,s);return(qa(r)?sh.has(r):_f(r))||(n||It(i,"get",r),e)?o:Rt(o)?a&&ja(r)?o:o.value:lt(o)?n?hh(o):nl(o):o}}const yf=oh(),bf=oh(!0);function oh(n=!1){return function(t,i,r,s){let a=t[i];if(Zr(a)&&Rt(a)&&!Rt(r))return!1;if(!n&&(!ya(r)&&!Zr(r)&&(a=$e(a),r=$e(r)),!Oe(t)&&Rt(a)&&!Rt(r)))return a.value=r,!0;const o=Oe(t)&&ja(i)?Number(i)<t.length:je(t,i),l=Reflect.set(t,i,r,s);return t===$e(s)&&(o?eo(r,a)&&An(t,"set",i,r):An(t,"add",i,r)),l}}function Tf(n,e){const t=je(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&An(n,"delete",e,void 0),i}function Af(n,e){const t=Reflect.has(n,e);return(!qa(e)||!sh.has(e))&&It(n,"has",e),t}function wf(n){return It(n,"iterate",Oe(n)?"length":li),Reflect.ownKeys(n)}const ah={get:vf,set:yf,deleteProperty:Tf,has:Af,ownKeys:wf},Cf={get:Mf,set(n,e){return!0},deleteProperty(n,e){return!0}},Rf=pt({},ah,{get:xf,set:bf}),el=n=>n,ho=n=>Reflect.getPrototypeOf(n);function ps(n,e,t=!1,i=!1){n=n.__v_raw;const r=$e(n),s=$e(e);t||(e!==s&&It(r,"get",e),It(r,"get",s));const{has:a}=ho(r),o=i?el:t?sl:rl;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function ms(n,e=!1){const t=this.__v_raw,i=$e(t),r=$e(n);return e||(n!==r&&It(i,"has",n),It(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function gs(n,e=!1){return n=n.__v_raw,!e&&It($e(n),"iterate",li),Reflect.get(n,"size",n)}function Vl(n){n=$e(n);const e=$e(this);return ho(e).has.call(e,n)||(e.add(n),An(e,"add",n,n)),this}function kl(n,e){e=$e(e);const t=$e(this),{has:i,get:r}=ho(t);let s=i.call(t,n);s||(n=$e(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?eo(e,a)&&An(t,"set",n,e):An(t,"add",n,e),this}function Wl(n){const e=$e(this),{has:t,get:i}=ho(e);let r=t.call(e,n);r||(n=$e(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&An(e,"delete",n,void 0),s}function Xl(){const n=$e(this),e=n.size!==0,t=n.clear();return e&&An(n,"clear",void 0,void 0),t}function _s(n,e){return function(i,r){const s=this,a=s.__v_raw,o=$e(a),l=e?el:n?sl:rl;return!n&&It(o,"iterate",li),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function vs(n,e,t){return function(...i){const r=this.__v_raw,s=$e(r),a=Xr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?el:e?sl:rl;return!e&&It(s,"iterate",l?Ea:li),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(n){return function(...e){return n==="delete"?!1:this}}function Lf(){const n={get(s){return ps(this,s)},get size(){return gs(this)},has:ms,add:Vl,set:kl,delete:Wl,clear:Xl,forEach:_s(!1,!1)},e={get(s){return ps(this,s,!1,!0)},get size(){return gs(this)},has:ms,add:Vl,set:kl,delete:Wl,clear:Xl,forEach:_s(!1,!0)},t={get(s){return ps(this,s,!0)},get size(){return gs(this,!0)},has(s){return ms.call(this,s,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:_s(!0,!1)},i={get(s){return ps(this,s,!0,!0)},get size(){return gs(this,!0)},has(s){return ms.call(this,s,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vs(s,!1,!1),t[s]=vs(s,!0,!1),e[s]=vs(s,!1,!0),i[s]=vs(s,!0,!0)}),[n,t,e,i]}const[Pf,Df,Uf,If]=Lf();function tl(n,e){const t=e?n?If:Uf:n?Df:Pf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(je(t,r)&&r in i?t:i,r,s)}const Nf={get:tl(!1,!1)},Of={get:tl(!1,!0)},Ff={get:tl(!0,!1)},lh=new WeakMap,ch=new WeakMap,uh=new WeakMap,Bf=new WeakMap;function zf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hf(n){return n.__v_skip||!Object.isExtensible(n)?0:zf(ef(n))}function nl(n){return Zr(n)?n:il(n,!1,ah,Nf,lh)}function Gf(n){return il(n,!1,Rf,Of,ch)}function hh(n){return il(n,!0,Cf,Ff,uh)}function il(n,e,t,i,r){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Hf(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Yi(n){return Zr(n)?Yi(n.__v_raw):!!(n&&n.__v_isReactive)}function Zr(n){return!!(n&&n.__v_isReadonly)}function ya(n){return!!(n&&n.__v_isShallow)}function dh(n){return Yi(n)||Zr(n)}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function fh(n){return to(n,"__v_skip",!0),n}const rl=n=>lt(n)?nl(n):n,sl=n=>lt(n)?hh(n):n;function Vf(n){Gn&&Zt&&(n=$e(n),rh(n.dep||(n.dep=Za())))}function kf(n,e){n=$e(n);const t=n.dep;t&&Sa(t)}function Rt(n){return!!(n&&n.__v_isRef===!0)}function Gr(n){return Rt(n)?n.value:n}const Wf={get:(n,e,t)=>Gr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ph(n){return Yi(n)?n:new Proxy(n,Wf)}class Xf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ja(e,()=>{this._dirty||(this._dirty=!0,kf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=$e(this);return Vf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Yf(n,e,t=!1){let i,r;const s=Ve(n);return s?(i=n,r=tn):(i=n.get,r=n.set),new Xf(i,r,s||!r,t)}function Vn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){fo(s,e,t)}return r}function nn(n,e,t,i){if(Ve(n)){const s=Vn(n,e,t,i);return s&&Ju(s)&&s.catch(a=>{fo(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(nn(n[s],e,t,i));return r}function fo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Vn(l,null,10,[n,a,o]);return}}qf(n,t,r,i)}function qf(n,e,t,i=!0){console.error(n)}let Jr=!1,ba=!1;const Et=[];let cn=0;const qi=[];let yn=null,si=0;const mh=Promise.resolve();let ol=null;function jf(n){const e=ol||mh;return n?e.then(this?n.bind(this):n):e}function Kf(n){let e=cn+1,t=Et.length;for(;e<t;){const i=e+t>>>1;Qr(Et[i])<n?e=i+1:t=i}return e}function al(n){(!Et.length||!Et.includes(n,Jr&&n.allowRecurse?cn+1:cn))&&(n.id==null?Et.push(n):Et.splice(Kf(n.id),0,n),gh())}function gh(){!Jr&&!ba&&(ba=!0,ol=mh.then(vh))}function $f(n){const e=Et.indexOf(n);e>cn&&Et.splice(e,1)}function Zf(n){Oe(n)?qi.push(...n):(!yn||!yn.includes(n,n.allowRecurse?si+1:si))&&qi.push(n),gh()}function Yl(n,e=Jr?cn+1:0){for(;e<Et.length;e++){const t=Et[e];t&&t.pre&&(Et.splice(e,1),e--,t())}}function _h(n){if(qi.length){const e=[...new Set(qi)];if(qi.length=0,yn){yn.push(...e);return}for(yn=e,yn.sort((t,i)=>Qr(t)-Qr(i)),si=0;si<yn.length;si++)yn[si]();yn=null,si=0}}const Qr=n=>n.id==null?1/0:n.id,Jf=(n,e)=>{const t=Qr(n)-Qr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function vh(n){ba=!1,Jr=!0,Et.sort(Jf);const e=tn;try{for(cn=0;cn<Et.length;cn++){const t=Et[cn];t&&t.active!==!1&&Vn(t,null,14)}}finally{cn=0,Et.length=0,_h(),Jr=!1,ol=null,(Et.length||qi.length)&&vh()}}function Qf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=i[u]||Qe;d&&(r=t.map(m=>_t(m)?m.trim():m)),h&&(r=t.map(sf))}let o,l=i[o=Po(e)]||i[o=Po($i(e))];!l&&s&&(l=i[o=Po(rr(e))]),l&&nn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,nn(c,n,6,r)}}function xh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ve(n)){const l=c=>{const u=xh(c,e,!0);u&&(o=!0,pt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(lt(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>a[l]=null):pt(a,s),lt(n)&&i.set(n,a),a)}function po(n,e){return!n||!lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,rr(e))||je(n,e))}let hn=null,Mh=null;function no(n){const e=hn;return hn=n,Mh=n&&n.type.__scopeId||null,e}function ep(n,e=hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&nc(-1);const s=no(e);let a;try{a=n(...r)}finally{no(s),i._d&&nc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Uo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:m,ctx:x,inheritAttrs:v}=n;let p,f;const T=no(n);try{if(t.shapeFlag&4){const y=r||i;p=an(u.call(y,y,h,s,m,d,x)),f=l}else{const y=e;p=an(y.length>1?y(s,{attrs:l,slots:o,emit:c}):y(s,null)),f=e.props?l:tp(l)}}catch(y){qr.length=0,fo(y,n,1),p=kn(es)}let E=p;if(f&&v!==!1){const y=Object.keys(f),{shapeFlag:C}=E;y.length&&C&7&&(a&&y.some(Xa)&&(f=np(f,a)),E=Zi(E,f))}return t.dirs&&(E=Zi(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),p=E,no(T),p}const tp=n=>{let e;for(const t in n)(t==="class"||t==="style"||lo(t))&&((e||(e={}))[t]=n[t]);return e},np=(n,e)=>{const t={};for(const i in n)(!Xa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ip(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ql(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==i[d]&&!po(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ql(i,a,c):!0:!!a;return!1}function ql(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!po(t,s))return!0}return!1}function rp({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const sp=n=>n.__isSuspense;function op(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):Zf(n)}const xs={};function Io(n,e,t){return Eh(n,e,t)}function Eh(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Qe){var o;const l=pf()===((o=St)==null?void 0:o.scope)?St:null;let c,u=!1,h=!1;if(Rt(n)?(c=()=>n.value,u=ya(n)):Yi(n)?(c=()=>n,i=!0):Oe(n)?(h=!0,u=n.some(y=>Yi(y)||ya(y)),c=()=>n.map(y=>{if(Rt(y))return y.value;if(Yi(y))return ki(y);if(Ve(y))return Vn(y,l,2)})):Ve(n)?e?c=()=>Vn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),nn(n,l,3,[m])}:c=tn,e&&i){const y=c;c=()=>ki(y())}let d,m=y=>{d=T.onStop=()=>{Vn(y,l,4)}},x;if(ns)if(m=tn,e?t&&nn(e,l,3,[c(),h?[]:void 0,m]):c(),r==="sync"){const y=im();x=y.__watcherHandles||(y.__watcherHandles=[])}else return tn;let v=h?new Array(n.length).fill(xs):xs;const p=()=>{if(T.active)if(e){const y=T.run();(i||u||(h?y.some((C,U)=>eo(C,v[U])):eo(y,v)))&&(d&&d(),nn(e,l,3,[y,v===xs?void 0:h&&v[0]===xs?[]:v,m]),v=y)}else T.run()};p.allowRecurse=!!e;let f;r==="sync"?f=p:r==="post"?f=()=>Pt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),f=()=>al(p));const T=new Ja(c,f);e?t?p():v=T.run():r==="post"?Pt(T.run.bind(T),l&&l.suspense):T.run();const E=()=>{T.stop(),l&&l.scope&&Ya(l.scope.effects,T)};return x&&x.push(E),E}function ap(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?Sh(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const a=St;Ji(this);const o=Eh(r,s.bind(i),t);return a?Ji(a):ci(),o}function Sh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function ki(n,e){if(!lt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Rt(n))ki(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)ki(n[t],e);else if(Jd(n)||Xr(n))n.forEach(t=>{ki(t,e)});else if(tf(n))for(const t in n)ki(n[t],e);return n}function Zn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(sr(),nn(l,t,8,[n.el,o,n,e]),or())}}function yh(n,e){return Ve(n)?(()=>pt({name:n.name},e,{setup:n}))():n}const Ks=n=>!!n.type.__asyncLoader,bh=n=>n.type.__isKeepAlive;function lp(n,e){Th(n,"a",e)}function cp(n,e){Th(n,"da",e)}function Th(n,e,t=St){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(mo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)bh(r.parent.vnode)&&up(i,e,t,r),r=r.parent}}function up(n,e,t,i){const r=mo(e,n,i,!0);Ah(()=>{Ya(i[e],r)},t)}function mo(n,e,t=St,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;sr(),Ji(t);const o=nn(e,t,n,a);return ci(),or(),o});return i?r.unshift(s):r.push(s),s}}const wn=n=>(e,t=St)=>(!ns||n==="sp")&&mo(n,(...i)=>e(...i),t),hp=wn("bm"),dp=wn("m"),fp=wn("bu"),pp=wn("u"),mp=wn("bum"),Ah=wn("um"),gp=wn("sp"),_p=wn("rtg"),vp=wn("rtc");function xp(n,e=St){mo("ec",n,e)}const Mp=Symbol.for("v-ndc"),Ta=n=>n?Bh(n)?dl(n)||n.proxy:Ta(n.parent):null,Yr=pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ta(n.parent),$root:n=>Ta(n.root),$emit:n=>n.emit,$options:n=>ll(n),$forceUpdate:n=>n.f||(n.f=()=>al(n.update)),$nextTick:n=>n.n||(n.n=jf.bind(n.proxy)),$watch:n=>ap.bind(n)}),No=(n,e)=>n!==Qe&&!n.__isScriptSetup&&je(n,e),Ep={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(No(i,e))return a[e]=1,i[e];if(r!==Qe&&je(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&je(c,e))return a[e]=3,s[e];if(t!==Qe&&je(t,e))return a[e]=4,t[e];Aa&&(a[e]=0)}}const u=Yr[e];let h,d;if(u)return e==="$attrs"&&It(n,"get",e),u(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==Qe&&je(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,je(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return No(r,e)?(r[e]=t,!0):i!==Qe&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Qe&&je(n,a)||No(e,a)||(o=s[0])&&je(o,a)||je(i,a)||je(Yr,a)||je(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function jl(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Aa=!0;function Sp(n){const e=ll(n),t=n.proxy,i=n.ctx;Aa=!1,e.beforeCreate&&Kl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:f,beforeUnmount:T,destroyed:E,unmounted:y,render:C,renderTracked:U,renderTriggered:w,errorCaptured:J,serverPrefetch:S,expose:A,inheritAttrs:ce,components:he,directives:V,filters:j}=e;if(c&&yp(c,i,null),a)for(const k in a){const W=a[k];Ve(W)&&(i[k]=W.bind(t))}if(r){const k=r.call(t,t);lt(k)&&(n.data=nl(k))}if(Aa=!0,s)for(const k in s){const W=s[k],ue=Ve(W)?W.bind(t,t):Ve(W.get)?W.get.bind(t,t):tn,ae=!Ve(W)&&Ve(W.set)?W.set.bind(t):tn,z=tm({get:ue,set:ae});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>z.value,set:X=>z.value=X})}if(o)for(const k in o)wh(o[k],i,t,k);if(l){const k=Ve(l)?l.call(t):l;Reflect.ownKeys(k).forEach(W=>{Rp(W,k[W])})}u&&Kl(u,n,"c");function re(k,W){Oe(W)?W.forEach(ue=>k(ue.bind(t))):W&&k(W.bind(t))}if(re(hp,h),re(dp,d),re(fp,m),re(pp,x),re(lp,v),re(cp,p),re(xp,J),re(vp,U),re(_p,w),re(mp,T),re(Ah,y),re(gp,S),Oe(A))if(A.length){const k=n.exposed||(n.exposed={});A.forEach(W=>{Object.defineProperty(k,W,{get:()=>t[W],set:ue=>t[W]=ue})})}else n.exposed||(n.exposed={});C&&n.render===tn&&(n.render=C),ce!=null&&(n.inheritAttrs=ce),he&&(n.components=he),V&&(n.directives=V)}function yp(n,e,t=tn){Oe(n)&&(n=wa(n));for(const i in n){const r=n[i];let s;lt(r)?"default"in r?s=$s(r.from||i,r.default,!0):s=$s(r.from||i):s=$s(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Kl(n,e,t){nn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function wh(n,e,t,i){const r=i.includes(".")?Sh(t,i):()=>t[i];if(_t(n)){const s=e[n];Ve(s)&&Io(r,s)}else if(Ve(n))Io(r,n.bind(t));else if(lt(n))if(Oe(n))n.forEach(s=>wh(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Io(r,s,n)}}function ll(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>io(l,c,a,!0)),io(l,e,a)),lt(e)&&s.set(e,l),l}function io(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&io(n,s,t,!0),r&&r.forEach(a=>io(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=bp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const bp={data:$l,props:Zl,emits:Zl,methods:Vr,computed:Vr,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Vr,directives:Vr,watch:Ap,provide:$l,inject:Tp};function $l(n,e){return e?n?function(){return pt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function Tp(n,e){return Vr(wa(n),wa(e))}function wa(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tt(n,e){return n?[...new Set([].concat(n,e))]:e}function Vr(n,e){return n?pt(Object.create(null),n,e):e}function Zl(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:pt(Object.create(null),jl(n),jl(e??{})):e}function Ap(n,e){if(!n)return e;if(!e)return n;const t=pt(Object.create(null),n);for(const i in e)t[i]=Tt(n[i],e[i]);return t}function Ch(){return{app:null,config:{isNativeTag:Kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wp=0;function Cp(n,e){return function(i,r=null){Ve(i)||(i=pt({},i)),r!=null&&!lt(r)&&(r=null);const s=Ch(),a=new Set;let o=!1;const l=s.app={_uid:wp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:rm,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ve(c.install)?(a.add(c),c.install(l,...u)):Ve(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!o){const d=kn(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,h),o=!0,l._container=c,c.__vue_app__=l,dl(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ro=l;try{return c()}finally{ro=null}}};return l}}let ro=null;function Rp(n,e){if(St){let t=St.provides;const i=St.parent&&St.parent.provides;i===t&&(t=St.provides=Object.create(i)),t[n]=e}}function $s(n,e,t=!1){const i=St||hn;if(i||ro){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ro._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}function Lp(n,e,t,i=!1){const r={},s={};to(s,_o,1),n.propsDefaults=Object.create(null),Rh(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Gf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Pp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=$e(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(po(n.emitsOptions,d))continue;const m=e[d];if(l)if(je(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=$i(d);r[x]=Ca(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Rh(n,e,r,s)&&(c=!0);let u;for(const h in o)(!e||!je(e,h)&&((u=rr(h))===h||!je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Ca(l,o,h,void 0,n,!0)):delete r[h]);if(s!==o)for(const h in s)(!e||!je(e,h))&&(delete s[h],c=!0)}c&&An(n,"set","$attrs")}function Rh(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(js(l))continue;const c=e[l];let u;r&&je(r,u=$i(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:po(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=$e(t),c=o||Qe;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Ca(r,l,h,c[h],n,!je(c,h))}}return a}function Ca(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ve(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Ji(r),i=c[t]=l.call(null,e),ci())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===rr(t))&&(i=!0))}return i}function Lh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ve(n)){const u=h=>{l=!0;const[d,m]=Lh(h,e,!0);pt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return lt(n)&&i.set(n,Xi),Xi;if(Oe(s))for(let u=0;u<s.length;u++){const h=$i(s[u]);Jl(h)&&(a[h]=Qe)}else if(s)for(const u in s){const h=$i(u);if(Jl(h)){const d=s[u],m=a[h]=Oe(d)||Ve(d)?{type:d}:pt({},d);if(m){const x=tc(Boolean,m.type),v=tc(String,m.type);m[0]=x>-1,m[1]=v<0||x<v,(x>-1||je(m,"default"))&&o.push(h)}}}const c=[a,o];return lt(n)&&i.set(n,c),c}function Jl(n){return n[0]!=="$"}function Ql(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function ec(n,e){return Ql(n)===Ql(e)}function tc(n,e){return Oe(e)?e.findIndex(t=>ec(t,n)):Ve(e)&&ec(e,n)?0:-1}const Ph=n=>n[0]==="_"||n==="$stable",cl=n=>Oe(n)?n.map(an):[an(n)],Dp=(n,e,t)=>{if(e._n)return e;const i=ep((...r)=>cl(e(...r)),t);return i._c=!1,i},Dh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ph(r))continue;const s=n[r];if(Ve(s))e[r]=Dp(r,s,i);else if(s!=null){const a=cl(s);e[r]=()=>a}}},Uh=(n,e)=>{const t=cl(e);n.slots.default=()=>t},Up=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=$e(e),to(e,"_",t)):Dh(e,n.slots={})}else n.slots={},e&&Uh(n,e);to(n.slots,_o,1)},Ip=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Qe;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(pt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Dh(e,r)),a=e}else e&&(Uh(n,e),a={default:1});if(s)for(const o in r)!Ph(o)&&!(o in a)&&delete r[o]};function Ra(n,e,t,i,r=!1){if(Oe(n)){n.forEach((d,m)=>Ra(d,e&&(Oe(e)?e[m]:e),t,i,r));return}if(Ks(i)&&!r)return;const s=i.shapeFlag&4?dl(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Qe?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,je(h,c)&&(h[c]=null)):Rt(c)&&(c.value=null)),Ve(l))Vn(l,o,12,[a,u]);else{const d=_t(l),m=Rt(l);if(d||m){const x=()=>{if(n.f){const v=d?je(h,l)?h[l]:u[l]:l.value;r?Oe(v)&&Ya(v,s):Oe(v)?v.includes(s)||v.push(s):d?(u[l]=[s],je(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,je(h,l)&&(h[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,Pt(x,t)):x()}}}const Pt=op;function Np(n){return Op(n)}function Op(n,e){const t=va();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=tn,insertStaticContent:x}=n,v=(_,L,I,H=null,F=null,le=null,oe=!1,K=null,se=!!L.dynamicChildren)=>{if(_===L)return;_&&!pr(_,L)&&(H=Re(_),X(_,F,le,!0),_=null),L.patchFlag===-2&&(se=!1,L.dynamicChildren=null);const{type:ne,ref:Se,shapeFlag:M}=L;switch(ne){case go:p(_,L,I,H);break;case es:f(_,L,I,H);break;case Oo:_==null&&T(L,I,H,oe);break;case bn:he(_,L,I,H,F,le,oe,K,se);break;default:M&1?C(_,L,I,H,F,le,oe,K,se):M&6?V(_,L,I,H,F,le,oe,K,se):(M&64||M&128)&&ne.process(_,L,I,H,F,le,oe,K,se,Fe)}Se!=null&&F&&Ra(Se,_&&_.ref,le,L||_,!L)},p=(_,L,I,H)=>{if(_==null)i(L.el=o(L.children),I,H);else{const F=L.el=_.el;L.children!==_.children&&c(F,L.children)}},f=(_,L,I,H)=>{_==null?i(L.el=l(L.children||""),I,H):L.el=_.el},T=(_,L,I,H)=>{[_.el,_.anchor]=x(_.children,L,I,H,_.el,_.anchor)},E=({el:_,anchor:L},I,H)=>{let F;for(;_&&_!==L;)F=d(_),i(_,I,H),_=F;i(L,I,H)},y=({el:_,anchor:L})=>{let I;for(;_&&_!==L;)I=d(_),r(_),_=I;r(L)},C=(_,L,I,H,F,le,oe,K,se)=>{oe=oe||L.type==="svg",_==null?U(L,I,H,F,le,oe,K,se):S(_,L,F,le,oe,K,se)},U=(_,L,I,H,F,le,oe,K)=>{let se,ne;const{type:Se,props:M,shapeFlag:g,transition:D,dirs:Q}=_;if(se=_.el=a(_.type,le,M&&M.is,M),g&8?u(se,_.children):g&16&&J(_.children,se,null,H,F,le&&Se!=="foreignObject",oe,K),Q&&Zn(_,null,H,"created"),w(se,_,_.scopeId,oe,H),M){for(const te in M)te!=="value"&&!js(te)&&s(se,te,null,M[te],le,_.children,H,F,Ae);"value"in M&&s(se,"value",null,M.value),(ne=M.onVnodeBeforeMount)&&on(ne,H,_)}Q&&Zn(_,null,H,"beforeMount");const ee=(!F||F&&!F.pendingBranch)&&D&&!D.persisted;ee&&D.beforeEnter(se),i(se,L,I),((ne=M&&M.onVnodeMounted)||ee||Q)&&Pt(()=>{ne&&on(ne,H,_),ee&&D.enter(se),Q&&Zn(_,null,H,"mounted")},F)},w=(_,L,I,H,F)=>{if(I&&m(_,I),H)for(let le=0;le<H.length;le++)m(_,H[le]);if(F){let le=F.subTree;if(L===le){const oe=F.vnode;w(_,oe,oe.scopeId,oe.slotScopeIds,F.parent)}}},J=(_,L,I,H,F,le,oe,K,se=0)=>{for(let ne=se;ne<_.length;ne++){const Se=_[ne]=K?On(_[ne]):an(_[ne]);v(null,Se,L,I,H,F,le,oe,K)}},S=(_,L,I,H,F,le,oe)=>{const K=L.el=_.el;let{patchFlag:se,dynamicChildren:ne,dirs:Se}=L;se|=_.patchFlag&16;const M=_.props||Qe,g=L.props||Qe;let D;I&&Jn(I,!1),(D=g.onVnodeBeforeUpdate)&&on(D,I,L,_),Se&&Zn(L,_,I,"beforeUpdate"),I&&Jn(I,!0);const Q=F&&L.type!=="foreignObject";if(ne?A(_.dynamicChildren,ne,K,I,H,Q,le):oe||W(_,L,K,null,I,H,Q,le,!1),se>0){if(se&16)ce(K,L,M,g,I,H,F);else if(se&2&&M.class!==g.class&&s(K,"class",null,g.class,F),se&4&&s(K,"style",M.style,g.style,F),se&8){const ee=L.dynamicProps;for(let te=0;te<ee.length;te++){const _e=ee[te],de=M[_e],G=g[_e];(G!==de||_e==="value")&&s(K,_e,de,G,F,_.children,I,H,Ae)}}se&1&&_.children!==L.children&&u(K,L.children)}else!oe&&ne==null&&ce(K,L,M,g,I,H,F);((D=g.onVnodeUpdated)||Se)&&Pt(()=>{D&&on(D,I,L,_),Se&&Zn(L,_,I,"updated")},H)},A=(_,L,I,H,F,le,oe)=>{for(let K=0;K<L.length;K++){const se=_[K],ne=L[K],Se=se.el&&(se.type===bn||!pr(se,ne)||se.shapeFlag&70)?h(se.el):I;v(se,ne,Se,null,H,F,le,oe,!0)}},ce=(_,L,I,H,F,le,oe)=>{if(I!==H){if(I!==Qe)for(const K in I)!js(K)&&!(K in H)&&s(_,K,I[K],null,oe,L.children,F,le,Ae);for(const K in H){if(js(K))continue;const se=H[K],ne=I[K];se!==ne&&K!=="value"&&s(_,K,ne,se,oe,L.children,F,le,Ae)}"value"in H&&s(_,"value",I.value,H.value)}},he=(_,L,I,H,F,le,oe,K,se)=>{const ne=L.el=_?_.el:o(""),Se=L.anchor=_?_.anchor:o("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:D}=L;D&&(K=K?K.concat(D):D),_==null?(i(ne,I,H),i(Se,I,H),J(L.children,I,Se,F,le,oe,K,se)):M>0&&M&64&&g&&_.dynamicChildren?(A(_.dynamicChildren,g,I,F,le,oe,K),(L.key!=null||F&&L===F.subTree)&&Ih(_,L,!0)):W(_,L,I,Se,F,le,oe,K,se)},V=(_,L,I,H,F,le,oe,K,se)=>{L.slotScopeIds=K,_==null?L.shapeFlag&512?F.ctx.activate(L,I,H,oe,se):j(L,I,H,F,le,oe,se):q(_,L,se)},j=(_,L,I,H,F,le,oe)=>{const K=_.component=Kp(_,H,F);if(bh(_)&&(K.ctx.renderer=Fe),$p(K),K.asyncDep){if(F&&F.registerDep(K,re),!_.el){const se=K.subTree=kn(es);f(null,se,L,I)}return}re(K,_,L,I,F,le,oe)},q=(_,L,I)=>{const H=L.component=_.component;if(ip(_,L,I))if(H.asyncDep&&!H.asyncResolved){k(H,L,I);return}else H.next=L,$f(H.update),H.update();else L.el=_.el,H.vnode=L},re=(_,L,I,H,F,le,oe)=>{const K=()=>{if(_.isMounted){let{next:Se,bu:M,u:g,parent:D,vnode:Q}=_,ee=Se,te;Jn(_,!1),Se?(Se.el=Q.el,k(_,Se,oe)):Se=Q,M&&Do(M),(te=Se.props&&Se.props.onVnodeBeforeUpdate)&&on(te,D,Se,Q),Jn(_,!0);const _e=Uo(_),de=_.subTree;_.subTree=_e,v(de,_e,h(de.el),Re(de),_,F,le),Se.el=_e.el,ee===null&&rp(_,_e.el),g&&Pt(g,F),(te=Se.props&&Se.props.onVnodeUpdated)&&Pt(()=>on(te,D,Se,Q),F)}else{let Se;const{el:M,props:g}=L,{bm:D,m:Q,parent:ee}=_,te=Ks(L);if(Jn(_,!1),D&&Do(D),!te&&(Se=g&&g.onVnodeBeforeMount)&&on(Se,ee,L),Jn(_,!0),M&&Ie){const _e=()=>{_.subTree=Uo(_),Ie(M,_.subTree,_,F,null)};te?L.type.__asyncLoader().then(()=>!_.isUnmounted&&_e()):_e()}else{const _e=_.subTree=Uo(_);v(null,_e,I,H,_,F,le),L.el=_e.el}if(Q&&Pt(Q,F),!te&&(Se=g&&g.onVnodeMounted)){const _e=L;Pt(()=>on(Se,ee,_e),F)}(L.shapeFlag&256||ee&&Ks(ee.vnode)&&ee.vnode.shapeFlag&256)&&_.a&&Pt(_.a,F),_.isMounted=!0,L=I=H=null}},se=_.effect=new Ja(K,()=>al(ne),_.scope),ne=_.update=()=>se.run();ne.id=_.uid,Jn(_,!0),ne()},k=(_,L,I)=>{L.component=_;const H=_.vnode.props;_.vnode=L,_.next=null,Pp(_,L.props,H,I),Ip(_,L.children,I),sr(),Yl(),or()},W=(_,L,I,H,F,le,oe,K,se=!1)=>{const ne=_&&_.children,Se=_?_.shapeFlag:0,M=L.children,{patchFlag:g,shapeFlag:D}=L;if(g>0){if(g&128){ae(ne,M,I,H,F,le,oe,K,se);return}else if(g&256){ue(ne,M,I,H,F,le,oe,K,se);return}}D&8?(Se&16&&Ae(ne,F,le),M!==ne&&u(I,M)):Se&16?D&16?ae(ne,M,I,H,F,le,oe,K,se):Ae(ne,F,le,!0):(Se&8&&u(I,""),D&16&&J(M,I,H,F,le,oe,K,se))},ue=(_,L,I,H,F,le,oe,K,se)=>{_=_||Xi,L=L||Xi;const ne=_.length,Se=L.length,M=Math.min(ne,Se);let g;for(g=0;g<M;g++){const D=L[g]=se?On(L[g]):an(L[g]);v(_[g],D,I,null,F,le,oe,K,se)}ne>Se?Ae(_,F,le,!0,!1,M):J(L,I,H,F,le,oe,K,se,M)},ae=(_,L,I,H,F,le,oe,K,se)=>{let ne=0;const Se=L.length;let M=_.length-1,g=Se-1;for(;ne<=M&&ne<=g;){const D=_[ne],Q=L[ne]=se?On(L[ne]):an(L[ne]);if(pr(D,Q))v(D,Q,I,null,F,le,oe,K,se);else break;ne++}for(;ne<=M&&ne<=g;){const D=_[M],Q=L[g]=se?On(L[g]):an(L[g]);if(pr(D,Q))v(D,Q,I,null,F,le,oe,K,se);else break;M--,g--}if(ne>M){if(ne<=g){const D=g+1,Q=D<Se?L[D].el:H;for(;ne<=g;)v(null,L[ne]=se?On(L[ne]):an(L[ne]),I,Q,F,le,oe,K,se),ne++}}else if(ne>g)for(;ne<=M;)X(_[ne],F,le,!0),ne++;else{const D=ne,Q=ne,ee=new Map;for(ne=Q;ne<=g;ne++){const fe=L[ne]=se?On(L[ne]):an(L[ne]);fe.key!=null&&ee.set(fe.key,ne)}let te,_e=0;const de=g-Q+1;let G=!1,R=0;const ie=new Array(de);for(ne=0;ne<de;ne++)ie[ne]=0;for(ne=D;ne<=M;ne++){const fe=_[ne];if(_e>=de){X(fe,F,le,!0);continue}let me;if(fe.key!=null)me=ee.get(fe.key);else for(te=Q;te<=g;te++)if(ie[te-Q]===0&&pr(fe,L[te])){me=te;break}me===void 0?X(fe,F,le,!0):(ie[me-Q]=ne+1,me>=R?R=me:G=!0,v(fe,L[me],I,null,F,le,oe,K,se),_e++)}const xe=G?Fp(ie):Xi;for(te=xe.length-1,ne=de-1;ne>=0;ne--){const fe=Q+ne,me=L[fe],Le=fe+1<Se?L[fe+1].el:H;ie[ne]===0?v(null,me,I,Le,F,le,oe,K,se):G&&(te<0||ne!==xe[te]?z(me,I,Le,2):te--)}}},z=(_,L,I,H,F=null)=>{const{el:le,type:oe,transition:K,children:se,shapeFlag:ne}=_;if(ne&6){z(_.component.subTree,L,I,H);return}if(ne&128){_.suspense.move(L,I,H);return}if(ne&64){oe.move(_,L,I,Fe);return}if(oe===bn){i(le,L,I);for(let M=0;M<se.length;M++)z(se[M],L,I,H);i(_.anchor,L,I);return}if(oe===Oo){E(_,L,I);return}if(H!==2&&ne&1&&K)if(H===0)K.beforeEnter(le),i(le,L,I),Pt(()=>K.enter(le),F);else{const{leave:M,delayLeave:g,afterLeave:D}=K,Q=()=>i(le,L,I),ee=()=>{M(le,()=>{Q(),D&&D()})};g?g(le,Q,ee):ee()}else i(le,L,I)},X=(_,L,I,H=!1,F=!1)=>{const{type:le,props:oe,ref:K,children:se,dynamicChildren:ne,shapeFlag:Se,patchFlag:M,dirs:g}=_;if(K!=null&&Ra(K,null,I,_,!0),Se&256){L.ctx.deactivate(_);return}const D=Se&1&&g,Q=!Ks(_);let ee;if(Q&&(ee=oe&&oe.onVnodeBeforeUnmount)&&on(ee,L,_),Se&6)be(_.component,I,H);else{if(Se&128){_.suspense.unmount(I,H);return}D&&Zn(_,null,L,"beforeUnmount"),Se&64?_.type.remove(_,L,I,F,Fe,H):ne&&(le!==bn||M>0&&M&64)?Ae(ne,L,I,!1,!0):(le===bn&&M&384||!F&&Se&16)&&Ae(se,L,I),H&&Me(_)}(Q&&(ee=oe&&oe.onVnodeUnmounted)||D)&&Pt(()=>{ee&&on(ee,L,_),D&&Zn(_,null,L,"unmounted")},I)},Me=_=>{const{type:L,el:I,anchor:H,transition:F}=_;if(L===bn){ye(I,H);return}if(L===Oo){y(_);return}const le=()=>{r(I),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(_.shapeFlag&1&&F&&!F.persisted){const{leave:oe,delayLeave:K}=F,se=()=>oe(I,le);K?K(_.el,le,se):se()}else le()},ye=(_,L)=>{let I;for(;_!==L;)I=d(_),r(_),_=I;r(L)},be=(_,L,I)=>{const{bum:H,scope:F,update:le,subTree:oe,um:K}=_;H&&Do(H),F.stop(),le&&(le.active=!1,X(oe,_,L,I)),K&&Pt(K,L),Pt(()=>{_.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Ae=(_,L,I,H=!1,F=!1,le=0)=>{for(let oe=le;oe<_.length;oe++)X(_[oe],L,I,H,F)},Re=_=>_.shapeFlag&6?Re(_.component.subTree):_.shapeFlag&128?_.suspense.next():d(_.anchor||_.el),we=(_,L,I)=>{_==null?L._vnode&&X(L._vnode,null,null,!0):v(L._vnode||null,_,L,null,null,null,I),Yl(),_h(),L._vnode=_},Fe={p:v,um:X,m:z,r:Me,mt:j,mc:J,pc:W,pbc:A,n:Re,o:n};let nt,Ie;return e&&([nt,Ie]=e(Fe)),{render:we,hydrate:nt,createApp:Cp(we,nt)}}function Jn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Ih(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=On(r[s]),o.el=a.el),t||Ih(a,o)),o.type===go&&(o.el=a.el)}}function Fp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Bp=n=>n.__isTeleport,bn=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),es=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),qr=[];let en=null;function Nh(n=!1){qr.push(en=n?null:[])}function zp(){qr.pop(),en=qr[qr.length-1]||null}let ts=1;function nc(n){ts+=n}function Oh(n){return n.dynamicChildren=ts>0?en||Xi:null,zp(),ts>0&&en&&en.push(n),n}function Hp(n,e,t,i,r,s){return Oh(mt(n,e,t,i,r,s,!0))}function Gp(n,e,t,i,r){return Oh(kn(n,e,t,i,r,!0))}function Vp(n){return n?n.__v_isVNode===!0:!1}function pr(n,e){return n.type===e.type&&n.key===e.key}const _o="__vInternal",Fh=({key:n})=>n??null,Zs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||Rt(n)||Ve(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function mt(n,e=null,t=null,i=0,r=null,s=n===bn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Fh(e),ref:e&&Zs(e),scopeId:Mh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return o?(ul(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),ts>0&&!a&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const kn=kp;function kp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Mp)&&(n=es),Vp(n)){const o=Zi(n,e,!0);return t&&ul(o,t),ts>0&&!s&&en&&(o.shapeFlag&6?en[en.indexOf(n)]=o:en.push(o)),o.patchFlag|=-2,o}if(em(n)&&(n=n.__vccOpts),e){e=Wp(e);let{class:o,style:l}=e;o&&!_t(o)&&(e.class=$a(o)),lt(l)&&(dh(l)&&!Oe(l)&&(l=pt({},l)),e.style=Ka(l))}const a=_t(n)?1:sp(n)?128:Bp(n)?64:lt(n)?4:Ve(n)?2:0;return mt(n,e,t,i,r,a,s,!0)}function Wp(n){return n?dh(n)||_o in n?pt({},n):n:null}function Zi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Yp(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Fh(o),ref:e&&e.ref?t&&r?Oe(r)?r.concat(Zs(e)):[r,Zs(e)]:Zs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zi(n.ssContent),ssFallback:n.ssFallback&&Zi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Xp(n=" ",e=0){return kn(go,null,n,e)}function an(n){return n==null||typeof n=="boolean"?kn(es):Oe(n)?kn(bn,null,n.slice()):typeof n=="object"?On(n):kn(go,null,String(n))}function On(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zi(n)}function ul(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ul(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(_o in e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[Xp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Yp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=$a([e.class,i.class]));else if(r==="style")e.style=Ka([e.style,i.style]);else if(lo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Oe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function on(n,e,t,i=null){nn(n,e,7,[t,i])}const qp=Ch();let jp=0;function Kp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||qp,s={uid:jp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lh(i,r),emitsOptions:xh(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Qf.bind(null,s),n.ce&&n.ce(s),s}let St=null,hl,vi,ic="__VUE_INSTANCE_SETTERS__";(vi=va()[ic])||(vi=va()[ic]=[]),vi.push(n=>St=n),hl=n=>{vi.length>1?vi.forEach(e=>e(n)):vi[0](n)};const Ji=n=>{hl(n),n.scope.on()},ci=()=>{St&&St.scope.off(),hl(null)};function Bh(n){return n.vnode.shapeFlag&4}let ns=!1;function $p(n,e=!1){ns=e;const{props:t,children:i}=n.vnode,r=Bh(n);Lp(n,t,r,e),Up(n,i);const s=r?Zp(n,e):void 0;return ns=!1,s}function Zp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=fh(new Proxy(n.ctx,Ep));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Qp(n):null;Ji(n),sr();const s=Vn(i,n,0,[n.props,r]);if(or(),ci(),Ju(s)){if(s.then(ci,ci),e)return s.then(a=>{rc(n,a,e)}).catch(a=>{fo(a,n,0)});n.asyncDep=s}else rc(n,s,e)}else zh(n,e)}function rc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=ph(e)),zh(n,t)}let sc;function zh(n,e,t){const i=n.type;if(!n.render){if(!e&&sc&&!i.render){const r=i.template||ll(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=pt(pt({isCustomElement:s,delimiters:o},a),l);i.render=sc(r,c)}}n.render=i.render||tn}Ji(n),sr(),Sp(n),or(),ci()}function Jp(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return It(n,"get","$attrs"),e[t]}}))}function Qp(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Jp(n)},slots:n.slots,emit:n.emit,expose:e}}function dl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(ph(fh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Yr)return Yr[t](n)},has(e,t){return t in e||t in Yr}}))}function em(n){return Ve(n)&&"__vccOpts"in n}const tm=(n,e)=>Yf(n,e,ns),nm=Symbol.for("v-scx"),im=()=>$s(nm),rm="3.3.4",sm="http://www.w3.org/2000/svg",oi=typeof document<"u"?document:null,oc=oi&&oi.createElement("template"),om={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?oi.createElementNS(sm,n):oi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{oc.innerHTML=i?`<svg>${n}</svg>`:n;const o=oc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function am(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function lm(n,e,t){const i=n.style,r=_t(t);if(t&&!r){if(e&&!_t(e))for(const s in e)t[s]==null&&La(i,s,"");for(const s in t)La(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const ac=/\s*!important$/;function La(n,e,t){if(Oe(t))t.forEach(i=>La(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=cm(n,e);ac.test(t)?n.setProperty(rr(i),t.replace(ac,""),"important"):n[i]=t}}const lc=["Webkit","Moz","ms"],Fo={};function cm(n,e){const t=Fo[e];if(t)return t;let i=$i(e);if(i!=="filter"&&i in n)return Fo[e]=i;i=Qu(i);for(let r=0;r<lc.length;r++){const s=lc[r]+i;if(s in n)return Fo[e]=s}return e}const cc="http://www.w3.org/1999/xlink";function um(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(cc,e.slice(6,e.length)):n.setAttributeNS(cc,e,t);else{const s=hf(e);t==null||s&&!eh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function hm(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=eh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function dm(n,e,t,i){n.addEventListener(e,t,i)}function fm(n,e,t,i){n.removeEventListener(e,t,i)}function pm(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=mm(e);if(i){const c=s[e]=vm(i,r);dm(n,o,c,l)}else a&&(fm(n,o,a,l),s[e]=void 0)}}const uc=/(?:Once|Passive|Capture)$/;function mm(n){let e;if(uc.test(n)){e={};let i;for(;i=n.match(uc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rr(n.slice(2)),e]}let Bo=0;const gm=Promise.resolve(),_m=()=>Bo||(gm.then(()=>Bo=0),Bo=Date.now());function vm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;nn(xm(i,t.value),e,5,[i])};return t.value=n,t.attached=_m(),t}function xm(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const hc=/^on[a-z]/,Mm=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?am(n,i,r):e==="style"?lm(n,t,i):lo(e)?Xa(e)||pm(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Em(n,e,i,r))?hm(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),um(n,e,i,r))};function Em(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&hc.test(e)&&Ve(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||hc.test(e)&&_t(t)?!1:e in n}const Sm=pt({patchProp:Mm},om);let dc;function ym(){return dc||(dc=Np(Sm))}const bm=(...n)=>{const e=ym().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Tm(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Tm(n){return _t(n)?document.querySelector(n):n}class rn{constructor(e){this._canceled=!1,this.data=e}get type(){return this.constructor.type}get cancelable(){return this.constructor.cancelable}cancel(){this._canceled=!0}canceled(){return this._canceled}clone(e){return new this.constructor({...this.data,...e})}}rn.type="event";rn.cancelable=!1;class vo{constructor(e){this.draggable=e}attach(){throw new Error("Not Implemented")}detach(){throw new Error("Not Implemented")}}const xi={mouse:0,drag:0,touch:100};class Hh{constructor(e=[],t={}){this.containers=[...e],this.options={...t},this.dragging=!1,this.currentContainer=null,this.originalSource=null,this.startEvent=null,this.delay=Am(t.delay)}attach(){return this}detach(){return this}addContainer(...e){this.containers=[...this.containers,...e]}removeContainer(...e){this.containers=this.containers.filter(t=>!e.includes(t))}trigger(e,t){const i=document.createEvent("Event");return i.detail=t,i.initEvent(t.type,!0,!0),e.dispatchEvent(i),this.lastEvent=t,t}}function Am(n){const e={};if(n===void 0)return{...xi};if(typeof n=="number"){for(const t in xi)Object.prototype.hasOwnProperty.call(xi,t)&&(e[t]=n);return e}for(const t in xi)Object.prototype.hasOwnProperty.call(xi,t)&&(n[t]===void 0?e[t]=xi[t]:e[t]=n[t]);return e}function kt(n,e){if(n==null)return null;function t(r){return r==null||e==null?!1:wm(e)?Element.prototype.matches.call(r,e):Cm(e)?[...e].includes(r):Rm(e)?e===r:Lm(e)?e(r):!1}let i=n;do{if(i=i.correspondingUseElement||i.correspondingElement||i,t(i))return i;i=(i==null?void 0:i.parentNode)||null}while(i!=null&&i!==document.body&&i!==document);return null}function wm(n){return typeof n=="string"}function Cm(n){return n instanceof NodeList||n instanceof Array}function Rm(n){return n instanceof Node}function Lm(n){return typeof n=="function"}function Gh(n,e,t,i){return Math.sqrt((t-n)**2+(i-e)**2)}class xo extends rn{get originalEvent(){return this.data.originalEvent}get clientX(){return this.data.clientX}get clientY(){return this.data.clientY}get target(){return this.data.target}get container(){return this.data.container}get originalSource(){return this.data.originalSource}get pressure(){return this.data.pressure}}class fl extends xo{}fl.type="drag:start";class pl extends xo{}pl.type="drag:move";class ml extends xo{}ml.type="drag:stop";class Pm extends xo{}Pm.type="drag:pressure";const mr=Symbol("onContextMenuWhileDragging"),gr=Symbol("onMouseDown"),_r=Symbol("onMouseMove"),vr=Symbol("onMouseUp"),Ms=Symbol("startDrag"),Ln=Symbol("onDistanceChange");class Dm extends Hh{constructor(e=[],t={}){super(e,t),this.mouseDownTimeout=null,this.pageX=null,this.pageY=null,this[mr]=this[mr].bind(this),this[gr]=this[gr].bind(this),this[_r]=this[_r].bind(this),this[vr]=this[vr].bind(this),this[Ms]=this[Ms].bind(this),this[Ln]=this[Ln].bind(this)}attach(){document.addEventListener("mousedown",this[gr],!0)}detach(){document.removeEventListener("mousedown",this[gr],!0)}[gr](e){if(e.button!==0||e.ctrlKey||e.metaKey)return;const t=kt(e.target,this.containers);if(!t||this.options.handle&&e.target&&!kt(e.target,this.options.handle))return;const i=kt(e.target,this.options.draggable);if(!i)return;const{delay:r}=this,{pageX:s,pageY:a}=e;Object.assign(this,{pageX:s,pageY:a}),this.onMouseDownAt=Date.now(),this.startEvent=e,this.currentContainer=t,this.originalSource=i,document.addEventListener("mouseup",this[vr]),document.addEventListener("dragstart",fc),document.addEventListener("mousemove",this[Ln]),this.mouseDownTimeout=window.setTimeout(()=>{this[Ln]({pageX:this.pageX,pageY:this.pageY})},r.mouse)}[Ms](){const e=this.startEvent,t=this.currentContainer,i=this.originalSource,r=new fl({clientX:e.clientX,clientY:e.clientY,target:e.target,container:t,originalSource:i,originalEvent:e});this.trigger(this.currentContainer,r),this.dragging=!r.canceled(),this.dragging&&(document.addEventListener("contextmenu",this[mr],!0),document.addEventListener("mousemove",this[_r]))}[Ln](e){const{pageX:t,pageY:i}=e,{distance:r}=this.options,{startEvent:s,delay:a}=this;if(Object.assign(this,{pageX:t,pageY:i}),!this.currentContainer)return;const o=Date.now()-this.onMouseDownAt,l=Gh(s.pageX,s.pageY,t,i)||0;clearTimeout(this.mouseDownTimeout),o<a.mouse?document.removeEventListener("mousemove",this[Ln]):l>=r&&(document.removeEventListener("mousemove",this[Ln]),this[Ms]())}[_r](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),i=new pl({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,i)}[vr](e){if(clearTimeout(this.mouseDownTimeout),e.button!==0||(document.removeEventListener("mouseup",this[vr]),document.removeEventListener("dragstart",fc),document.removeEventListener("mousemove",this[Ln]),!this.dragging))return;const t=document.elementFromPoint(e.clientX,e.clientY),i=new ml({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,i),document.removeEventListener("contextmenu",this[mr],!0),document.removeEventListener("mousemove",this[_r]),this.currentContainer=null,this.dragging=!1,this.startEvent=null}[mr](e){e.preventDefault()}}function fc(n){n.preventDefault()}function Mi(n){const{touches:e,changedTouches:t}=n;return e&&e[0]||t&&t[0]}const xr=Symbol("onTouchStart"),Qn=Symbol("onTouchEnd"),Mr=Symbol("onTouchMove"),Es=Symbol("startDrag"),Pn=Symbol("onDistanceChange");let Js=!1;window.addEventListener("touchmove",n=>{Js&&n.preventDefault()},{passive:!1});class Um extends Hh{constructor(e=[],t={}){super(e,t),this.currentScrollableParent=null,this.tapTimeout=null,this.touchMoved=!1,this.pageX=null,this.pageY=null,this[xr]=this[xr].bind(this),this[Qn]=this[Qn].bind(this),this[Mr]=this[Mr].bind(this),this[Es]=this[Es].bind(this),this[Pn]=this[Pn].bind(this)}attach(){document.addEventListener("touchstart",this[xr])}detach(){document.removeEventListener("touchstart",this[xr])}[xr](e){const t=kt(e.target,this.containers);if(!t||this.options.handle&&e.target&&!kt(e.target,this.options.handle))return;const i=kt(e.target,this.options.draggable);if(!i)return;const{distance:r=0}=this.options,{delay:s}=this,{pageX:a,pageY:o}=Mi(e);Object.assign(this,{pageX:a,pageY:o}),this.onTouchStartAt=Date.now(),this.startEvent=e,this.currentContainer=t,this.originalSource=i,document.addEventListener("touchend",this[Qn]),document.addEventListener("touchcancel",this[Qn]),document.addEventListener("touchmove",this[Pn]),t.addEventListener("contextmenu",pc),r&&(Js=!0),this.tapTimeout=window.setTimeout(()=>{this[Pn]({touches:[{pageX:this.pageX,pageY:this.pageY}]})},s.touch)}[Es](){const e=this.startEvent,t=this.currentContainer,i=Mi(e),r=this.originalSource,s=new fl({clientX:i.pageX,clientY:i.pageY,target:e.target,container:t,originalSource:r,originalEvent:e});this.trigger(this.currentContainer,s),this.dragging=!s.canceled(),this.dragging&&document.addEventListener("touchmove",this[Mr]),Js=this.dragging}[Pn](e){const{distance:t}=this.options,{startEvent:i,delay:r}=this,s=Mi(i),a=Mi(e),o=Date.now()-this.onTouchStartAt,l=Gh(s.pageX,s.pageY,a.pageX,a.pageY);Object.assign(this,a),clearTimeout(this.tapTimeout),o<r.touch?document.removeEventListener("touchmove",this[Pn]):l>=t&&(document.removeEventListener("touchmove",this[Pn]),this[Es]())}[Mr](e){if(!this.dragging)return;const{pageX:t,pageY:i}=Mi(e),r=document.elementFromPoint(t-window.scrollX,i-window.scrollY),s=new pl({clientX:t,clientY:i,target:r,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,s)}[Qn](e){if(clearTimeout(this.tapTimeout),Js=!1,document.removeEventListener("touchend",this[Qn]),document.removeEventListener("touchcancel",this[Qn]),document.removeEventListener("touchmove",this[Pn]),this.currentContainer&&this.currentContainer.removeEventListener("contextmenu",pc),!this.dragging)return;document.removeEventListener("touchmove",this[Mr]);const{pageX:t,pageY:i}=Mi(e),r=document.elementFromPoint(t-window.scrollX,i-window.scrollY);e.preventDefault();const s=new ml({clientX:t,clientY:i,target:r,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,s),this.currentContainer=null,this.dragging=!1,this.startEvent=null}}function pc(n){n.preventDefault(),n.stopPropagation()}class gl extends rn{get dragEvent(){return this.data.dragEvent}}gl.type="collidable";class Im extends gl{get collidingElement(){return this.data.collidingElement}}Im.type="collidable:in";class Nm extends gl{get collidingElement(){return this.data.collidingElement}}Nm.type="collidable:out";class pn extends rn{constructor(e){super(e),this.data=e}get source(){return this.data.source}get originalSource(){return this.data.originalSource}get mirror(){return this.data.mirror}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}pn.type="drag";class _l extends pn{}_l.type="drag:start";_l.cancelable=!0;class Vh extends pn{}Vh.type="drag:move";class vl extends pn{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}vl.type="drag:over";vl.cancelable=!0;class kh extends pn{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}kh.type="drag:out";class Wh extends pn{get overContainer(){return this.data.overContainer}}Wh.type="drag:over:container";class Xh extends pn{get overContainer(){return this.data.overContainer}}Xh.type="drag:out:container";class Yh extends pn{get pressure(){return this.data.pressure}}Yh.type="drag:pressure";class xl extends pn{}xl.type="drag:stop";xl.cancelable=!0;class qh extends pn{}qh.type="drag:stopped";class Ml extends rn{get dragEvent(){return this.data.dragEvent}get snappable(){return this.data.snappable}}Ml.type="snap";class jh extends Ml{}jh.type="snap:in";jh.cancelable=!0;class Kh extends Ml{}Kh.type="snap:out";Kh.cancelable=!0;const Ss=Symbol("onInitialize"),ys=Symbol("onDestroy"),mc=Symbol("announceEvent"),zo=Symbol("announceMessage"),Om="aria-relevant",Fm="aria-atomic",Bm="aria-live",zm="role",Hm={expire:7e3};class Gm extends vo{constructor(e){super(e),this.options={...Hm,...this.getOptions()},this.originalTriggerMethod=this.draggable.trigger,this[Ss]=this[Ss].bind(this),this[ys]=this[ys].bind(this)}attach(){this.draggable.on("draggable:initialize",this[Ss])}detach(){this.draggable.off("draggable:destroy",this[ys])}getOptions(){return this.draggable.options.announcements||{}}[mc](e){const t=this.options[e.type];t&&typeof t=="string"&&this[zo](t),t&&typeof t=="function"&&this[zo](t(e))}[zo](e){Vm(e,{expire:this.options.expire})}[Ss](){this.draggable.trigger=e=>{try{this[mc](e)}finally{this.originalTriggerMethod.call(this.draggable,e)}}}[ys](){this.draggable.trigger=this.originalTriggerMethod}}const Pa=km();function Vm(n,{expire:e}){const t=document.createElement("div");return t.textContent=n,Pa.appendChild(t),setTimeout(()=>{Pa.removeChild(t)},e)}function km(){const n=document.createElement("div");return n.setAttribute("id","draggable-live-region"),n.setAttribute(Om,"additions"),n.setAttribute(Fm,"true"),n.setAttribute(Bm,"assertive"),n.setAttribute(zm,"log"),n.style.position="fixed",n.style.width="1px",n.style.height="1px",n.style.top="-1px",n.style.overflow="hidden",n}document.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(Pa)});const Er=Symbol("onInitialize"),Ei=Symbol("onDestroy"),Wm={};class Xm extends vo{constructor(e){super(e),this.options={...Wm,...this.getOptions()},this[Er]=this[Er].bind(this),this[Ei]=this[Ei].bind(this)}attach(){this.draggable.on("draggable:initialize",this[Er]).on("draggable:destroy",this[Ei])}detach(){this.draggable.off("draggable:initialize",this[Er]).off("draggable:destroy",this[Ei]),this[Ei]()}getOptions(){return this.draggable.options.focusable||{}}getElements(){return[...this.draggable.containers,...this.draggable.getDraggableElements()]}[Er](){requestAnimationFrame(()=>{this.getElements().forEach(e=>Ym(e))})}[Ei](){requestAnimationFrame(()=>{this.getElements().forEach(e=>qm(e))})}}const Da=[];function Ym(n){!n.getAttribute("tabindex")&&n.tabIndex===-1&&(Da.push(n),n.tabIndex=0)}function qm(n){const e=Da.indexOf(n);e!==-1&&(n.tabIndex=-1,Da.splice(e,1))}class ar extends rn{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get dragEvent(){return this.data.dragEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}class $h extends ar{}$h.type="mirror:create";class Zh extends ar{get mirror(){return this.data.mirror}}Zh.type="mirror:created";class Jh extends ar{get mirror(){return this.data.mirror}}Jh.type="mirror:attached";class El extends ar{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}El.type="mirror:move";El.cancelable=!0;class Qh extends ar{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}Qh.type="mirror:moved";class Sl extends ar{get mirror(){return this.data.mirror}}Sl.type="mirror:destroy";Sl.cancelable=!0;const Sr=Symbol("onDragStart"),yr=Symbol("onDragMove"),br=Symbol("onDragStop"),Tr=Symbol("onMirrorCreated"),Ar=Symbol("onMirrorMove"),wr=Symbol("onScroll"),gc=Symbol("getAppendableContainer"),jm={constrainDimensions:!1,xAxis:!0,yAxis:!0,cursorOffsetX:null,cursorOffsetY:null,thresholdX:null,thresholdY:null};class Km extends vo{constructor(e){super(e),this.options={...jm,...this.getOptions()},this.scrollOffset={x:0,y:0},this.initialScrollOffset={x:window.scrollX,y:window.scrollY},this[Sr]=this[Sr].bind(this),this[yr]=this[yr].bind(this),this[br]=this[br].bind(this),this[Tr]=this[Tr].bind(this),this[Ar]=this[Ar].bind(this),this[wr]=this[wr].bind(this)}attach(){this.draggable.on("drag:start",this[Sr]).on("drag:move",this[yr]).on("drag:stop",this[br]).on("mirror:created",this[Tr]).on("mirror:move",this[Ar])}detach(){this.draggable.off("drag:start",this[Sr]).off("drag:move",this[yr]).off("drag:stop",this[br]).off("mirror:created",this[Tr]).off("mirror:move",this[Ar])}getOptions(){return this.draggable.options.mirror||{}}[Sr](e){if(e.canceled())return;"ontouchstart"in window&&document.addEventListener("scroll",this[wr],!0),this.initialScrollOffset={x:window.scrollX,y:window.scrollY};const{source:t,originalSource:i,sourceContainer:r,sensorEvent:s}=e;this.lastMirrorMovedClient={x:s.clientX,y:s.clientY};const a=new $h({source:t,originalSource:i,sourceContainer:r,sensorEvent:s,dragEvent:e});if(this.draggable.trigger(a),tg(s)||a.canceled())return;const o=this[gc](t)||r;this.mirror=t.cloneNode(!0);const l=new Zh({source:t,originalSource:i,sourceContainer:r,sensorEvent:s,dragEvent:e,mirror:this.mirror}),c=new Jh({source:t,originalSource:i,sourceContainer:r,sensorEvent:s,dragEvent:e,mirror:this.mirror});this.draggable.trigger(l),o.appendChild(this.mirror),this.draggable.trigger(c)}[yr](e){if(!this.mirror||e.canceled())return;const{source:t,originalSource:i,sourceContainer:r,sensorEvent:s}=e;let a=!0,o=!0;if(this.options.thresholdX||this.options.thresholdY){const{x:c,y:u}=this.lastMirrorMovedClient;if(Math.abs(c-s.clientX)<this.options.thresholdX?a=!1:this.lastMirrorMovedClient.x=s.clientX,Math.abs(u-s.clientY)<this.options.thresholdY?o=!1:this.lastMirrorMovedClient.y=s.clientY,!a&&!o)return}const l=new El({source:t,originalSource:i,sourceContainer:r,sensorEvent:s,dragEvent:e,mirror:this.mirror,passedThreshX:a,passedThreshY:o});this.draggable.trigger(l)}[br](e){if("ontouchstart"in window&&document.removeEventListener("scroll",this[wr],!0),this.initialScrollOffset={x:0,y:0},this.scrollOffset={x:0,y:0},!this.mirror)return;const{source:t,sourceContainer:i,sensorEvent:r}=e,s=new Sl({source:t,mirror:this.mirror,sourceContainer:i,sensorEvent:r,dragEvent:e});this.draggable.trigger(s),s.canceled()||this.mirror.remove()}[wr](){this.scrollOffset={x:window.scrollX-this.initialScrollOffset.x,y:window.scrollY-this.initialScrollOffset.y}}[Tr]({mirror:e,source:t,sensorEvent:i}){const r=this.draggable.getClassNamesFor("mirror"),s=({mirrorOffset:o,initialX:l,initialY:c,...u})=>(this.mirrorOffset=o,this.initialX=l,this.initialY=c,this.lastMovedX=l,this.lastMovedY=c,{mirrorOffset:o,initialX:l,initialY:c,...u});e.style.display="none";const a={mirror:e,source:t,sensorEvent:i,mirrorClasses:r,scrollOffset:this.scrollOffset,options:this.options,passedThreshX:!0,passedThreshY:!0};return Promise.resolve(a).then($m).then(Zm).then(Jm).then(Qm).then(_c({initial:!0})).then(eg).then(s)}[Ar](e){if(e.canceled())return null;const t=({lastMovedX:s,lastMovedY:a,...o})=>(this.lastMovedX=s,this.lastMovedY=a,{lastMovedX:s,lastMovedY:a,...o}),i=s=>{const a=new Qh({source:e.source,originalSource:e.originalSource,sourceContainer:e.sourceContainer,sensorEvent:e.sensorEvent,dragEvent:e.dragEvent,mirror:this.mirror,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY});return this.draggable.trigger(a),s},r={mirror:e.mirror,sensorEvent:e.sensorEvent,mirrorOffset:this.mirrorOffset,options:this.options,initialX:this.initialX,initialY:this.initialY,scrollOffset:this.scrollOffset,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY,lastMovedX:this.lastMovedX,lastMovedY:this.lastMovedY};return Promise.resolve(r).then(_c({raf:!0})).then(t).then(i)}[gc](e){const t=this.options.appendTo;return typeof t=="string"?document.querySelector(t):t instanceof HTMLElement?t:typeof t=="function"?t(e):e.parentNode}}function $m({source:n,...e}){return lr(t=>{const i=n.getBoundingClientRect();t({source:n,sourceRect:i,...e})})}function Zm({sensorEvent:n,sourceRect:e,options:t,...i}){return lr(r=>{const s=t.cursorOffsetY===null?n.clientY-e.top:t.cursorOffsetY,a=t.cursorOffsetX===null?n.clientX-e.left:t.cursorOffsetX;r({sensorEvent:n,sourceRect:e,mirrorOffset:{top:s,left:a},options:t,...i})})}function Jm({mirror:n,source:e,options:t,...i}){return lr(r=>{let s,a;if(t.constrainDimensions){const o=getComputedStyle(e);s=o.getPropertyValue("height"),a=o.getPropertyValue("width")}n.style.display=null,n.style.position="fixed",n.style.pointerEvents="none",n.style.top=0,n.style.left=0,n.style.margin=0,t.constrainDimensions&&(n.style.height=s,n.style.width=a),r({mirror:n,source:e,options:t,...i})})}function Qm({mirror:n,mirrorClasses:e,...t}){return lr(i=>{n.classList.add(...e),i({mirror:n,mirrorClasses:e,...t})})}function eg({mirror:n,...e}){return lr(t=>{n.removeAttribute("id"),delete n.id,t({mirror:n,...e})})}function _c({withFrame:n=!1,initial:e=!1}={}){return({mirror:t,sensorEvent:i,mirrorOffset:r,initialY:s,initialX:a,scrollOffset:o,options:l,passedThreshX:c,passedThreshY:u,lastMovedX:h,lastMovedY:d,...m})=>lr(x=>{const v={mirror:t,sensorEvent:i,mirrorOffset:r,options:l,...m};if(r){const p=c?Math.round((i.clientX-r.left-o.x)/(l.thresholdX||1))*(l.thresholdX||1):Math.round(h),f=u?Math.round((i.clientY-r.top-o.y)/(l.thresholdY||1))*(l.thresholdY||1):Math.round(d);l.xAxis&&l.yAxis||e?t.style.transform=`translate3d(${p}px, ${f}px, 0)`:l.xAxis&&!l.yAxis?t.style.transform=`translate3d(${p}px, ${s}px, 0)`:l.yAxis&&!l.xAxis&&(t.style.transform=`translate3d(${a}px, ${f}px, 0)`),e&&(v.initialX=p,v.initialY=f),v.lastMovedX=p,v.lastMovedY=f}x(v)},{frame:n})}function lr(n,{raf:e=!1}={}){return new Promise((t,i)=>{e?requestAnimationFrame(()=>{n(t,i)}):n(t,i)})}function tg(n){return/^drag/.test(n.originalEvent.type)}const Cr=Symbol("onDragStart"),Rr=Symbol("onDragMove"),Lr=Symbol("onDragStop"),Pr=Symbol("scroll"),ng={speed:6,sensitivity:50,scrollableElements:[]};class ig extends vo{constructor(e){super(e),this.options={...ng,...this.getOptions()},this.currentMousePosition=null,this.scrollAnimationFrame=null,this.scrollableElement=null,this.findScrollableElementFrame=null,this[Cr]=this[Cr].bind(this),this[Rr]=this[Rr].bind(this),this[Lr]=this[Lr].bind(this),this[Pr]=this[Pr].bind(this)}attach(){this.draggable.on("drag:start",this[Cr]).on("drag:move",this[Rr]).on("drag:stop",this[Lr])}detach(){this.draggable.off("drag:start",this[Cr]).off("drag:move",this[Rr]).off("drag:stop",this[Lr])}getOptions(){return this.draggable.options.scrollable||{}}getScrollableElement(e){return this.hasDefinedScrollableElements()?kt(e,this.options.scrollableElements)||document.documentElement:og(e)}hasDefinedScrollableElements(){return this.options.scrollableElements.length!==0}[Cr](e){this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.source)})}[Rr](e){if(this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.sensorEvent.target)}),!this.scrollableElement)return;const t=e.sensorEvent,i={x:0,y:0};"ontouchstart"in window&&(i.y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,i.x=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0),this.currentMousePosition={clientX:t.clientX-i.x,clientY:t.clientY-i.y},this.scrollAnimationFrame=requestAnimationFrame(this[Pr])}[Lr](){cancelAnimationFrame(this.scrollAnimationFrame),cancelAnimationFrame(this.findScrollableElementFrame),this.scrollableElement=null,this.scrollAnimationFrame=null,this.findScrollableElementFrame=null,this.currentMousePosition=null}[Pr](){if(!this.scrollableElement||!this.currentMousePosition)return;cancelAnimationFrame(this.scrollAnimationFrame);const{speed:e,sensitivity:t}=this.options,i=this.scrollableElement.getBoundingClientRect(),r=i.bottom>window.innerHeight,a=i.top<0||r,o=Ua(),l=this.scrollableElement,c=this.currentMousePosition.clientX,u=this.currentMousePosition.clientY;if(l!==document.body&&l!==document.documentElement&&!a){const{offsetHeight:h,offsetWidth:d}=l;i.top+h-u<t?l.scrollTop+=e:u-i.top<t&&(l.scrollTop-=e),i.left+d-c<t?l.scrollLeft+=e:c-i.left<t&&(l.scrollLeft-=e)}else{const{innerHeight:h,innerWidth:d}=window;u<t?o.scrollTop-=e:h-u<t&&(o.scrollTop+=e),c<t?o.scrollLeft-=e:d-c<t&&(o.scrollLeft+=e)}this.scrollAnimationFrame=requestAnimationFrame(this[Pr])}}function rg(n){const e=/(auto|scroll)/,t=getComputedStyle(n,null),i=t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x");return e.test(i)}function sg(n){return getComputedStyle(n).getPropertyValue("position")==="static"}function og(n){if(!n)return Ua();const e=getComputedStyle(n).getPropertyValue("position"),t=e==="absolute",i=kt(n,r=>t&&sg(r)?!1:rg(r));return e==="fixed"||!i?Ua():i}function Ua(){return document.scrollingElement||document.documentElement}class ag{constructor(){this.callbacks={}}on(e,...t){return this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(...t),this}off(e,t){if(!this.callbacks[e])return null;const i=this.callbacks[e].slice(0);for(let r=0;r<i.length;r++)t===i[r]&&this.callbacks[e].splice(r,1);return this}trigger(e){if(!this.callbacks[e.type])return null;const t=[...this.callbacks[e.type]],i=[];for(let r=t.length-1;r>=0;r--){const s=t[r];try{s(e)}catch(a){i.push(a)}}return i.length&&console.error(`Draggable caught errors while triggering '${e.type}'`,i),this}}class yl extends rn{get draggable(){return this.data.draggable}}yl.type="draggable";class ed extends yl{}ed.type="draggable:initialize";class td extends yl{}td.type="draggable:destroy";const Dr=Symbol("onDragStart"),Si=Symbol("onDragMove"),Ur=Symbol("onDragStop"),Ir=Symbol("onDragPressure"),Nr=Symbol("dragStop"),lg={"drag:start":n=>`Picked up ${n.source.textContent.trim()||n.source.id||"draggable element"}`,"drag:stop":n=>`Released ${n.source.textContent.trim()||n.source.id||"draggable element"}`},cg={"container:dragging":"draggable-container--is-dragging","source:dragging":"draggable-source--is-dragging","source:placed":"draggable-source--placed","container:placed":"draggable-container--placed","body:dragging":"draggable--is-dragging","draggable:over":"draggable--over","container:over":"draggable-container--over","source:original":"draggable--original",mirror:"draggable-mirror"},ug={draggable:".draggable-source",handle:null,delay:{},distance:0,placedTimeout:800,plugins:[],sensors:[],exclude:{plugins:[],sensors:[]}};class Qi{constructor(e=[document.body],t={}){if(e instanceof NodeList||e instanceof Array)this.containers=[...e];else if(e instanceof HTMLElement)this.containers=[e];else throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");this.options={...ug,...t,classes:{...cg,...t.classes||{}},announcements:{...lg,...t.announcements||{}},exclude:{plugins:t.exclude&&t.exclude.plugins||[],sensors:t.exclude&&t.exclude.sensors||[]}},this.emitter=new ag,this.dragging=!1,this.plugins=[],this.sensors=[],this[Dr]=this[Dr].bind(this),this[Si]=this[Si].bind(this),this[Ur]=this[Ur].bind(this),this[Ir]=this[Ir].bind(this),this[Nr]=this[Nr].bind(this),document.addEventListener("drag:start",this[Dr],!0),document.addEventListener("drag:move",this[Si],!0),document.addEventListener("drag:stop",this[Ur],!0),document.addEventListener("drag:pressure",this[Ir],!0);const i=Object.values(Qi.Plugins).filter(a=>!this.options.exclude.plugins.includes(a)),r=Object.values(Qi.Sensors).filter(a=>!this.options.exclude.sensors.includes(a));this.addPlugin(...i,...this.options.plugins),this.addSensor(...r,...this.options.sensors);const s=new ed({draggable:this});this.on("mirror:created",({mirror:a})=>this.mirror=a),this.on("mirror:destroy",()=>this.mirror=null),this.trigger(s)}destroy(){document.removeEventListener("drag:start",this[Dr],!0),document.removeEventListener("drag:move",this[Si],!0),document.removeEventListener("drag:stop",this[Ur],!0),document.removeEventListener("drag:pressure",this[Ir],!0);const e=new td({draggable:this});this.trigger(e),this.removePlugin(...this.plugins.map(t=>t.constructor)),this.removeSensor(...this.sensors.map(t=>t.constructor))}addPlugin(...e){const t=e.map(i=>new i(this));return t.forEach(i=>i.attach()),this.plugins=[...this.plugins,...t],this}removePlugin(...e){return this.plugins.filter(i=>e.includes(i.constructor)).forEach(i=>i.detach()),this.plugins=this.plugins.filter(i=>!e.includes(i.constructor)),this}addSensor(...e){const t=e.map(i=>new i(this.containers,this.options));return t.forEach(i=>i.attach()),this.sensors=[...this.sensors,...t],this}removeSensor(...e){return this.sensors.filter(i=>e.includes(i.constructor)).forEach(i=>i.detach()),this.sensors=this.sensors.filter(i=>!e.includes(i.constructor)),this}addContainer(...e){return this.containers=[...this.containers,...e],this.sensors.forEach(t=>t.addContainer(...e)),this}removeContainer(...e){return this.containers=this.containers.filter(t=>!e.includes(t)),this.sensors.forEach(t=>t.removeContainer(...e)),this}on(e,...t){return this.emitter.on(e,...t),this}off(e,t){return this.emitter.off(e,t),this}trigger(e){return this.emitter.trigger(e),this}getClassNameFor(e){return this.getClassNamesFor(e)[0]}getClassNamesFor(e){const t=this.options.classes[e];return t instanceof Array?t:typeof t=="string"||t instanceof String?[t]:[]}isDragging(){return!!this.dragging}getDraggableElements(){return this.containers.reduce((e,t)=>[...e,...this.getDraggableElementsForContainer(t)],[])}getDraggableElementsForContainer(e){return[...e.querySelectorAll(this.options.draggable)].filter(i=>i!==this.originalSource&&i!==this.mirror)}cancel(){this[Nr]()}[Dr](e){const t=bs(e),{target:i,container:r,originalSource:s}=t;if(!this.containers.includes(r))return;if(this.options.handle&&i&&!kt(i,this.options.handle)){t.cancel();return}this.originalSource=s,this.sourceContainer=r,this.lastPlacedSource&&this.lastPlacedContainer&&(clearTimeout(this.placedTimeoutID),this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"))),this.source=this.originalSource.cloneNode(!0),this.originalSource.parentNode.insertBefore(this.source,this.originalSource),this.originalSource.style.display="none";const a=new _l({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t});if(this.trigger(a),this.dragging=!a.canceled(),a.canceled()){this.source.remove(),this.originalSource.style.display=null;return}this.originalSource.classList.add(...this.getClassNamesFor("source:original")),this.source.classList.add(...this.getClassNamesFor("source:dragging")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:dragging")),document.body.classList.add(...this.getClassNamesFor("body:dragging")),vc(document.body,"none"),requestAnimationFrame(()=>{const l=bs(e).clone({target:this.source});this[Si]({...e,detail:l})})}[Si](e){if(!this.dragging)return;const t=bs(e),{container:i}=t;let r=t.target;const s=new Vh({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t});this.trigger(s),s.canceled()&&t.cancel(),r=kt(r,this.options.draggable);const a=kt(t.target,this.containers),o=t.overContainer||a,l=this.currentOverContainer&&o!==this.currentOverContainer,c=this.currentOver&&r!==this.currentOver,u=o&&this.currentOverContainer!==o,h=a&&r&&this.currentOver!==r;if(c){const d=new kh({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,over:this.currentOver,overContainer:this.currentOverContainer});this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOver=null,this.trigger(d)}if(l){const d=new Xh({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:this.currentOverContainer});this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.currentOverContainer=null,this.trigger(d)}if(u){o.classList.add(...this.getClassNamesFor("container:over"));const d=new Wh({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:o});this.currentOverContainer=o,this.trigger(d)}if(h){r.classList.add(...this.getClassNamesFor("draggable:over"));const d=new vl({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:o,over:r});this.currentOver=r,this.trigger(d)}}[Nr](e){if(!this.dragging)return;this.dragging=!1;const t=new xl({source:this.source,originalSource:this.originalSource,sensorEvent:e?e.sensorEvent:null,sourceContainer:this.sourceContainer});this.trigger(t),t.canceled()||this.source.parentNode.insertBefore(this.originalSource,this.source),this.source.remove(),this.originalSource.style.display="",this.source.classList.remove(...this.getClassNamesFor("source:dragging")),this.originalSource.classList.remove(...this.getClassNamesFor("source:original")),this.originalSource.classList.add(...this.getClassNamesFor("source:placed")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:placed")),this.sourceContainer.classList.remove(...this.getClassNamesFor("container:dragging")),document.body.classList.remove(...this.getClassNamesFor("body:dragging")),vc(document.body,""),this.currentOver&&this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOverContainer&&this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.lastPlacedSource=this.originalSource,this.lastPlacedContainer=this.sourceContainer,this.placedTimeoutID=setTimeout(()=>{this.lastPlacedSource&&this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer&&this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed")),this.lastPlacedSource=null,this.lastPlacedContainer=null},this.options.placedTimeout);const i=new qh({source:this.source,originalSource:this.originalSource,sensorEvent:e?e.sensorEvent:null,sourceContainer:this.sourceContainer});this.trigger(i),this.source=null,this.originalSource=null,this.currentOverContainer=null,this.currentOver=null,this.sourceContainer=null}[Ur](e){this[Nr](e)}[Ir](e){if(!this.dragging)return;const t=bs(e),i=this.source||kt(t.originalEvent.target,this.options.draggable),r=new Yh({sensorEvent:t,source:i,pressure:t.pressure});this.trigger(r)}}Qi.Plugins={Announcement:Gm,Focusable:Xm,Mirror:Km,Scrollable:ig};Qi.Sensors={MouseSensor:Dm,TouchSensor:Um};function bs(n){return n.detail}function vc(n,e){n.style.webkitUserSelect=e,n.style.mozUserSelect=e,n.style.msUserSelect=e,n.style.oUserSelect=e,n.style.userSelect=e}class as extends rn{get dragEvent(){return this.data.dragEvent}}as.type="droppable";class nd extends as{get dropzone(){return this.data.dropzone}}nd.type="droppable:start";nd.cancelable=!0;class id extends as{get dropzone(){return this.data.dropzone}}id.type="droppable:dropped";id.cancelable=!0;class rd extends as{get dropzone(){return this.data.dropzone}}rd.type="droppable:returned";rd.cancelable=!0;class sd extends as{get dropzone(){return this.data.dropzone}}sd.type="droppable:stop";sd.cancelable=!0;class ls extends rn{get dragEvent(){return this.data.dragEvent}}ls.type="swappable";class od extends ls{}od.type="swappable:start";od.cancelable=!0;class ad extends ls{get over(){return this.data.over}get overContainer(){return this.data.overContainer}}ad.type="swappable:swap";ad.cancelable=!0;class hg extends ls{get swappedElement(){return this.data.swappedElement}}hg.type="swappable:swapped";class dg extends ls{}dg.type="swappable:stop";class cs extends rn{get dragEvent(){return this.data.dragEvent}}cs.type="sortable";class ld extends cs{get startIndex(){return this.data.startIndex}get startContainer(){return this.data.startContainer}}ld.type="sortable:start";ld.cancelable=!0;class cd extends cs{get currentIndex(){return this.data.currentIndex}get over(){return this.data.over}get overContainer(){return this.data.dragEvent.overContainer}}cd.type="sortable:sort";cd.cancelable=!0;class fg extends cs{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}fg.type="sortable:sorted";class pg extends cs{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}pg.type="sortable:stop";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="156",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mg=0,xc=1,gg=2,ud=1,_g=2,Sn=3,jn=0,Dt=1,un=2,Wn=0,ji=1,Mc=2,Ec=3,Sc=4,vg=5,Gi=100,xg=101,Mg=102,yc=103,bc=104,Eg=200,Sg=201,yg=202,bg=203,hd=204,dd=205,Tg=206,Ag=207,wg=208,Cg=209,Rg=210,Lg=0,Pg=1,Dg=2,Ia=3,Ug=4,Ig=5,Ng=6,Og=7,fd=0,Fg=1,Bg=2,Xn=0,zg=1,Hg=2,Gg=3,Vg=4,kg=5,pd=300,er=301,tr=302,Na=303,Oa=304,Mo=306,Fa=1e3,Jt=1001,Ba=1002,Ct=1003,Tc=1004,Ho=1005,Gt=1006,Wg=1007,is=1008,Yn=1009,Xg=1010,Yg=1011,Tl=1012,md=1013,zn=1014,Hn=1015,rs=1016,gd=1017,_d=1018,ui=1020,qg=1021,Qt=1023,jg=1024,Kg=1025,hi=1026,nr=1027,$g=1028,vd=1029,Zg=1030,xd=1031,Md=1033,Go=33776,Vo=33777,ko=33778,Wo=33779,Ac=35840,wc=35841,Cc=35842,Rc=35843,Jg=36196,Lc=37492,Pc=37496,Dc=37808,Uc=37809,Ic=37810,Nc=37811,Oc=37812,Fc=37813,Bc=37814,zc=37815,Hc=37816,Gc=37817,Vc=37818,kc=37819,Wc=37820,Xc=37821,Xo=36492,Yc=36494,qc=36495,Qg=36283,jc=36284,Kc=36285,$c=36286,Ed=3e3,di=3001,e_=3200,t_=3201,Sd=0,n_=1,fi="",et="srgb",fn="srgb-linear",Eo="display-p3",Yo=7680,i_=519,r_=512,s_=513,o_=514,a_=515,l_=516,c_=517,u_=518,h_=519,Zc=35044,Jc="300 es",za=1035,Tn=2e3,so=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const jr=Math.PI/180,ss=180/Math.PI;function cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Al(n,e){return(n%e+e)%e}function d_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function f_(n,e,t){return n!==e?(t-n)/(e-n):0}function Kr(n,e,t){return(1-t)*n+t*e}function p_(n,e,t,i){return Kr(n,e,1-Math.exp(-t*i))}function m_(n,e=1){return e-Math.abs(Al(n,e*2)-e)}function g_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function __(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function v_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function x_(n,e){return n+Math.random()*(e-n)}function M_(n){return n*(.5-Math.random())}function E_(n){n!==void 0&&(Qc=n);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function S_(n){return n*jr}function y_(n){return n*ss}function Ha(n){return(n&n-1)===0&&n!==0}function b_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function T_(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const A_={DEG2RAD:jr,RAD2DEG:ss,generateUUID:cr,clamp:Mt,euclideanModulo:Al,mapLinear:d_,inverseLerp:f_,lerp:Kr,damp:p_,pingpong:m_,smoothstep:g_,smootherstep:__,randInt:v_,randFloat:x_,randFloatSpread:M_,seededRandom:E_,degToRad:S_,radToDeg:y_,isPowerOfTwo:Ha,ceilPowerOfTwo:b_,floorPowerOfTwo:oo,setQuaternionFromProperEuler:T_,normalize:At,denormalize:Vi};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],f=r[6],T=r[1],E=r[4],y=r[7],C=r[2],U=r[5],w=r[8];return s[0]=a*v+o*T+l*C,s[3]=a*p+o*E+l*U,s[6]=a*f+o*y+l*w,s[1]=c*v+u*T+h*C,s[4]=c*p+u*E+h*U,s[7]=c*f+u*y+h*w,s[2]=d*v+m*T+x*C,s[5]=d*p+m*E+x*U,s[8]=d*f+m*y+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new Ge;function yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w_(){const n=os("canvas");return n.style.display="block",n}const eu={};function $r(n){n in eu||(eu[n]=!0,console.warn(n))}function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const C_=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),R_=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function L_(n){return n.convertSRGBToLinear().applyMatrix3(R_)}function P_(n){return n.applyMatrix3(C_).convertLinearToSRGB()}const D_={[fn]:n=>n,[et]:n=>n.convertSRGBToLinear(),[Eo]:L_},U_={[fn]:n=>n,[et]:n=>n.convertLinearToSRGB(),[Eo]:P_},Xt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return fn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=D_[e],r=U_[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ti;class bd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=os("canvas")),Ti.width=e.width,Ti.height=e.height;const i=Ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I_=0;class Td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ko(r[a].image)):s.push(Ko(r[a]))}else s=Ko(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N_=0;class Ut extends _i{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Jt,r=Jt,s=Gt,a=is,o=Qt,l=Yn,c=Ut.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=cr(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:($r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===di?et:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===et?di:Ed}set encoding(e){$r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===di?et:fi}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=pd;Ut.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(m+1)/2,C=(f+1)/2,U=(u+d)/4,w=(h+v)/4,J=(x+p)/4;return E>y&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=U/i,s=w/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=U/r,s=J/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=J/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-x)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O_ extends _i{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&($r("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===di?et:fi),this.texture=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends O_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ad extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F_ extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(h!==v||l!==d||c!==m||u!==x){let p=1-o;const f=l*d+c*m+u*x+h*v,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const C=Math.sqrt(E),U=Math.atan2(C,f*T);p=Math.sin(p*U)/C,o=Math.sin(o*U)/C}const y=o*T;if(l=l*p+d*y,c=c*p+m*y,u=u*p+x*y,h=h*p+v*y,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*m-c*d,e[t+1]=l*x+u*d+c*h-o*m,e[t+2]=c*x+u*m+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h-d*m*x;break;case"YXZ":this._x=d*u*h+c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h+d*m*x;break;case"ZXY":this._x=d*u*h-c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h-d*m*x;break;case"ZYX":this._x=d*u*h-c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h+d*m*x;break;case"YZX":this._x=d*u*h+c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h-d*m*x;break;case"XZY":this._x=d*u*h-c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,h=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new N,tu=new mi;class us{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ai.copy(e.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)_n.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(_n)}else r.boundingBox===null&&r.computeBoundingBox(),Ai.copy(r.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Ts.subVectors(this.max,Or),wi.subVectors(e.a,Or),Ci.subVectors(e.b,Or),Ri.subVectors(e.c,Or),Dn.subVectors(Ci,wi),Un.subVectors(Ri,Ci),ei.subVectors(wi,Ri);let t=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-ei.z,ei.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,ei.z,0,-ei.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-ei.y,ei.x,0];return!Zo(t,wi,Ci,Ri,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,wi,Ci,Ri,Ts))?!1:(As.crossVectors(Dn,Un),t=[As.x,As.y,As.z],Zo(t,wi,Ci,Ri,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new N,new N,new N,new N,new N,new N,new N,new N],_n=new N,Ai=new us,wi=new N,Ci=new N,Ri=new N,Dn=new N,Un=new N,ei=new N,Or=new N,Ts=new N,As=new N,ti=new N;function Zo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ti.fromArray(n,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const B_=new us,Fr=new N,Jo=new N;class So{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):B_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Jo)),this.expandByPoint(Fr.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new N,Qo=new N,ws=new N,In=new N,ea=new N,Cs=new N,ta=new N;class yo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qo.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ws),o=In.dot(this.direction),l=-In.dot(ws),c=In.lengthSq(),u=Math.abs(1-a*a);let h,d,m,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const v=1/u;h*=v,d*=v,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qo).addScaledVector(ws,d),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),r=vn.dot(vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,r,s){ea.subVectors(t,e),Cs.subVectors(i,e),ta.crossVectors(ea,Cs);let a=this.direction.dot(ta),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,e);const l=o*this.direction.dot(Cs.crossVectors(In,Cs));if(l<0)return null;const c=o*this.direction.dot(ea.cross(In));if(c<0||l+c>a)return null;const u=-o*In.dot(ta);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=x,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,x=c*u,v=c*h;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,x=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=x*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+x,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,H_)}lookAt(e,t,i){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Nn.crossVectors(i,Ft),Nn.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Nn.crossVectors(i,Ft)),Nn.normalize(),Rs.crossVectors(Ft,Nn),r[0]=Nn.x,r[4]=Rs.x,r[8]=Ft.x,r[1]=Nn.y,r[5]=Rs.y,r[9]=Ft.y,r[2]=Nn.z,r[6]=Rs.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],f=i[14],T=i[3],E=i[7],y=i[11],C=i[15],U=r[0],w=r[4],J=r[8],S=r[12],A=r[1],ce=r[5],he=r[9],V=r[13],j=r[2],q=r[6],re=r[10],k=r[14],W=r[3],ue=r[7],ae=r[11],z=r[15];return s[0]=a*U+o*A+l*j+c*W,s[4]=a*w+o*ce+l*q+c*ue,s[8]=a*J+o*he+l*re+c*ae,s[12]=a*S+o*V+l*k+c*z,s[1]=u*U+h*A+d*j+m*W,s[5]=u*w+h*ce+d*q+m*ue,s[9]=u*J+h*he+d*re+m*ae,s[13]=u*S+h*V+d*k+m*z,s[2]=x*U+v*A+p*j+f*W,s[6]=x*w+v*ce+p*q+f*ue,s[10]=x*J+v*he+p*re+f*ae,s[14]=x*S+v*V+p*k+f*z,s[3]=T*U+E*A+y*j+C*W,s[7]=T*w+E*ce+y*q+C*ue,s[11]=T*J+E*he+y*re+C*ae,s[15]=T*S+E*V+y*k+C*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],f=e[15];return x*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],f=e[15],T=h*p*c-v*d*c+v*l*m-o*p*m-h*l*f+o*d*f,E=x*d*c-u*p*c-x*l*m+a*p*m+u*l*f-a*d*f,y=u*v*c-x*h*c+x*o*m-a*v*m-u*o*f+a*h*f,C=x*h*l-u*v*l-x*o*d+a*v*d+u*o*p-a*h*p,U=t*T+i*E+r*y+s*C;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/U;return e[0]=T*w,e[1]=(v*d*s-h*p*s-v*r*m+i*p*m+h*r*f-i*d*f)*w,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*f+i*l*f)*w,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*m-i*l*m)*w,e[4]=E*w,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*f+t*d*f)*w,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*f-t*l*f)*w,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*w,e[8]=y*w,e[9]=(x*h*s-u*v*s-x*i*m+t*v*m+u*i*f-t*h*f)*w,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*f+t*o*f)*w,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*m-t*o*m)*w,e[12]=C*w,e[13]=(u*v*r-x*h*r+x*i*d-t*v*d-u*i*p+t*h*p)*w,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*w,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,x=s*h,v=a*u,p=a*h,f=o*h,T=l*c,E=l*u,y=l*h,C=i.x,U=i.y,w=i.z;return r[0]=(1-(v+f))*C,r[1]=(m+y)*C,r[2]=(x-E)*C,r[3]=0,r[4]=(m-y)*U,r[5]=(1-(d+f))*U,r[6]=(p+T)*U,r[7]=0,r[8]=(x+E)*w,r[9]=(p-T)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const a=Li.set(r[4],r[5],r[6]).length(),o=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const c=1/s,u=1/a,h=1/o;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Tn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===Tn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===so)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Tn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,v;if(o===Tn)x=(a+s)*h,v=-2*h;else if(o===so)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Li=new N,Yt=new at,z_=new N(0,0,0),H_=new N(1,1,1),Nn=new N,Rs=new N,Ft=new N,nu=new at,iu=new mi;class bo{constructor(e=0,t=0,i=0,r=bo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bo.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G_=0;const ru=new N,Pi=new mi,xn=new at,Ls=new N,Br=new N,V_=new N,k_=new mi,su=new N(1,0,0),ou=new N(0,1,0),au=new N(0,0,1),W_={type:"added"},X_={type:"removed"};class gt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new N,t=new bo,i=new mi,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ls.copy(e):Ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Br,Ls,this.up):xn.lookAt(Ls,Br,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(xn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(W_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,V_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,k_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new N,Mn=new N,na=new N,En=new N,Di=new N,Ui=new N,lu=new N,ia=new N,ra=new N,sa=new N;let Ps=!1;class $t{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),Mn.subVectors(i,t),na.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(Mn),l=qt.dot(na),c=Mn.dot(Mn),u=Mn.dot(na),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,i,r,s,a,o,l){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,En),l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),Mn.subVectors(e,t),qt.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),qt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Di.subVectors(r,i),Ui.subVectors(s,i),ia.subVectors(e,i);const l=Di.dot(ia),c=Ui.dot(ia);if(l<=0&&c<=0)return t.copy(i);ra.subVectors(e,r);const u=Di.dot(ra),h=Ui.dot(ra);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Di,a);sa.subVectors(e,s);const m=Di.dot(sa),x=Ui.dot(sa);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Ui,o);const p=u*x-m*h;if(p<=0&&h-u>=0&&m-x>=0)return lu.subVectors(s,r),o=(h-u)/(h-u+(m-x)),t.copy(r).addScaledVector(lu,o);const f=1/(p+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Y_=0;class ur extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=ji,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xt.workingColorSpace){if(e=Al(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=oa(a,s,e+1/3),this.g=oa(a,s,e),this.b=oa(a,s,e-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(e,t=et){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return Xt.fromWorkingColorSpace(xt.copy(this),e),Math.round(Mt(xt.r*255,0,255))*65536+Math.round(Mt(xt.g*255,0,255))*256+Math.round(Mt(xt.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,s=xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=et){Xt.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=i,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(Ds);const i=Kr(jt.h,Ds.h,t),r=Kr(jt.s,Ds.s,t),s=Kr(jt.l,Ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new ke;ke.NAMES=wd;class To extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new N,Us=new Ne;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this.updateRange={offset:0,count:-1},this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Cd extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rd extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let q_=0;const Ht=new at,aa=new gt,Ii=new N,Bt=new us,zr=new us,dt=new N;class Cn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Rd:Cd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Bt.min,zr.min),Bt.expandByPoint(dt),dt.addVectors(Bt.max,zr.max),Bt.expandByPoint(dt)):(Bt.expandByPoint(zr.min),Bt.expandByPoint(zr.max))}Bt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),dt.add(Ii)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new N,u[A]=new N;const h=new N,d=new N,m=new N,x=new Ne,v=new Ne,p=new Ne,f=new N,T=new N;function E(A,ce,he){h.fromArray(r,A*3),d.fromArray(r,ce*3),m.fromArray(r,he*3),x.fromArray(a,A*2),v.fromArray(a,ce*2),p.fromArray(a,he*2),d.sub(h),m.sub(h),v.sub(x),p.sub(x);const V=1/(v.x*p.y-p.x*v.y);isFinite(V)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(V),T.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(V),c[A].add(f),c[ce].add(f),c[he].add(f),u[A].add(T),u[ce].add(T),u[he].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,ce=y.length;A<ce;++A){const he=y[A],V=he.start,j=he.count;for(let q=V,re=V+j;q<re;q+=3)E(i[q+0],i[q+1],i[q+2])}const C=new N,U=new N,w=new N,J=new N;function S(A){w.fromArray(s,A*3),J.copy(w);const ce=c[A];C.copy(ce),C.sub(w.multiplyScalar(w.dot(ce))).normalize(),U.crossVectors(J,ce);const V=U.dot(u[A])<0?-1:1;l[A*4]=C.x,l[A*4+1]=C.y,l[A*4+2]=C.z,l[A*4+3]=V}for(let A=0,ce=y.length;A<ce;++A){const he=y[A],V=he.start,j=he.count;for(let q=V,re=V+j;q<re;q+=3)S(i[q+0]),S(i[q+1]),S(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let f=0;f<u;f++)d[x++]=c[m++]}return new dn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new at,ni=new yo,Is=new So,uu=new N,Ni=new N,Oi=new N,Fi=new N,la=new N,Ns=new N,Os=new Ne,Fs=new Ne,Bs=new Ne,hu=new N,du=new N,fu=new N,zs=new N,Hs=new N;class Lt extends gt{constructor(e=new Cn,t=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(la.fromBufferAttribute(h,e),a?Ns.addScaledVector(la,u):Ns.addScaledVector(la.sub(t),u))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(Is.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Is,uu)===null||ni.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(s).invert(),ni.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],f=a[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,C=E;y<C;y+=3){const U=o.getX(y),w=o.getX(y+1),J=o.getX(y+2);r=Gs(this,f,e,i,c,u,h,U,w,J),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,f=v;p<f;p+=3){const T=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);r=Gs(this,a,e,i,c,u,h,T,E,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],f=a[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,C=E;y<C;y+=3){const U=y,w=y+1,J=y+2;r=Gs(this,f,e,i,c,u,h,U,w,J),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,f=v;p<f;p+=3){const T=p,E=p+1,y=p+2;r=Gs(this,a,e,i,c,u,h,T,E,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function j_(n,e,t,i,r,s,a,o){let l;if(e.side===Dt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===jn,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Hs);return c<t.near||c>t.far?null:{distance:c,point:Hs.clone(),object:n}}function Gs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ni),n.getVertexPosition(l,Oi),n.getVertexPosition(c,Fi);const u=j_(n,e,t,i,Ni,Oi,Fi,zs);if(u){r&&(Os.fromBufferAttribute(r,o),Fs.fromBufferAttribute(r,l),Bs.fromBufferAttribute(r,c),u.uv=$t.getInterpolation(zs,Ni,Oi,Fi,Os,Fs,Bs,new Ne)),s&&(Os.fromBufferAttribute(s,o),Fs.fromBufferAttribute(s,l),Bs.fromBufferAttribute(s,c),u.uv1=$t.getInterpolation(zs,Ni,Oi,Fi,Os,Fs,Bs,new Ne),u.uv2=u.uv1),a&&(hu.fromBufferAttribute(a,o),du.fromBufferAttribute(a,l),fu.fromBufferAttribute(a,c),u.normal=$t.getInterpolation(zs,Ni,Oi,Fi,hu,du,fu,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};$t.getNormal(Ni,Oi,Fi,h.normal),u.face=h}return u}class hr extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(h,2));function x(v,p,f,T,E,y,C,U,w,J,S){const A=y/w,ce=C/J,he=y/2,V=C/2,j=U/2,q=w+1,re=J+1;let k=0,W=0;const ue=new N;for(let ae=0;ae<re;ae++){const z=ae*ce-V;for(let X=0;X<q;X++){const Me=X*A-he;ue[v]=Me*T,ue[p]=z*E,ue[f]=j,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[p]=0,ue[f]=U>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(X/w),h.push(1-ae/J),k+=1}}for(let ae=0;ae<J;ae++)for(let z=0;z<w;z++){const X=d+z+q*ae,Me=d+z+q*(ae+1),ye=d+(z+1)+q*(ae+1),be=d+(z+1)+q*ae;l.push(X,Me,be),l.push(Me,ye,be),W+=6}o.addGroup(m,W,S),m+=W,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const r in i)e[r]=i[r]}return e}function K_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ld(n){return n.getRenderTarget()===null?n.outputColorSpace:fn}const $_={clone:ir,merge:wt};var Z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z_,this.fragmentShader=J_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=K_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pd extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Pd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class Q_ extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Vt(Bi,zi,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Bi,zi,e,t);s.layers=this.layers,this.add(s);const a=new Vt(Bi,zi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Bi,zi,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Dd extends Ut{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ev extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&($r("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===di?et:fi),this.texture=new Dd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hr(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Wn});s.uniforms.tEquirect.value=t;const a=new Lt(r,s),o=t.minFilter;return t.minFilter===is&&(t.minFilter=Gt),new Q_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ca=new N,tv=new N,nv=new Ge;class Fn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ca.subVectors(i,t).cross(tv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nv.getNormalMatrix(e),r=this.coplanarPoint(ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new So,Vs=new N;class Cl{constructor(e=new Fn,t=new Fn,i=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],f=r[12],T=r[13],E=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,p-m,y-f).normalize(),i[1].setComponents(l+s,d+c,p+m,y+f).normalize(),i[2].setComponents(l+a,d+u,p+x,y+T).normalize(),i[3].setComponents(l-a,d-u,p-x,y-T).normalize(),i[4].setComponents(l-o,d-h,p-v,y-E).normalize(),t===Tn)i[5].setComponents(l+o,d+h,p+v,y+E).normalize();else if(t===so)i[5].setComponents(o,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ud(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;n.bindBuffer(h,c),m.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class hs extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],x=[],v=[],p=[];for(let f=0;f<u;f++){const T=f*d-a;for(let E=0;E<c;E++){const y=E*h-s;x.push(y,-T,0),v.push(0,0,1),p.push(E/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const E=T+c*f,y=T+c*(f+1),C=T+1+c*(f+1),U=T+1+c*f;m.push(E,y,U),m.push(y,C,U)}this.setIndex(m),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
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
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mv=`#ifdef USE_IRIDESCENCE
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
#endif`,gv=`#ifdef USE_BUMPMAP
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tv=`#define PI 3.141592653589793
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
} // validated`,Av=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,Wv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jv=`uniform bool receiveShadow;
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
#endif`,Kv=`#ifdef USE_ENVMAP
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
#endif`,$v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
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
#endif`,tx=`struct PhysicalMaterial {
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
}`,nx=`
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dx=`#if defined( USE_POINTS_UV )
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
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
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
#endif`,Tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
}`,c0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,v0=`#define LAMBERT
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
}`,x0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,S0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,b0=`#define PHONG
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
}`,T0=`#define STANDARD
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
}`,A0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,C0=`#define TOON
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
}`,R0=`uniform float size;
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
}`,L0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,U0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:rv,alphahash_pars_fragment:sv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:uv,aomap_pars_fragment:hv,begin_vertex:dv,beginnormal_vertex:fv,bsdfs:pv,iridescence_fragment:mv,bumpmap_pars_fragment:gv,clipping_planes_fragment:_v,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:xv,clipping_planes_vertex:Mv,color_fragment:Ev,color_pars_fragment:Sv,color_pars_vertex:yv,color_vertex:bv,common:Tv,cube_uv_reflection_fragment:Av,defaultnormal_vertex:wv,displacementmap_pars_vertex:Cv,displacementmap_vertex:Rv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Pv,colorspace_fragment:Dv,colorspace_pars_fragment:Uv,envmap_fragment:Iv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Ov,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:Kv,envmap_vertex:Bv,fog_vertex:zv,fog_pars_vertex:Hv,fog_fragment:Gv,fog_pars_fragment:Vv,gradientmap_pars_fragment:kv,lightmap_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:qv,lights_pars_begin:jv,lights_toon_fragment:$v,lights_toon_pars_fragment:Zv,lights_phong_fragment:Jv,lights_phong_pars_fragment:Qv,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:lx,map_fragment:cx,map_pars_fragment:ux,map_particle_fragment:hx,map_particle_pars_fragment:dx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:_x,morphtarget_vertex:vx,normal_fragment_begin:xx,normal_fragment_maps:Mx,normal_pars_fragment:Ex,normal_pars_vertex:Sx,normal_vertex:yx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Tx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Cx,opaque_fragment:Rx,packing:Lx,premultiplied_alpha_fragment:Px,project_vertex:Dx,dithering_fragment:Ux,dithering_pars_fragment:Ix,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Bx,shadowmap_vertex:zx,shadowmask_pars_fragment:Hx,skinbase_vertex:Gx,skinning_pars_vertex:Vx,skinning_vertex:kx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:Yx,tonemapping_fragment:qx,tonemapping_pars_fragment:jx,transmission_fragment:Kx,transmission_pars_fragment:$x,uv_pars_fragment:Zx,uv_pars_vertex:Jx,uv_vertex:Qx,worldpos_vertex:e0,background_vert:t0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:r0,cube_vert:s0,cube_frag:o0,depth_vert:a0,depth_frag:l0,distanceRGBA_vert:c0,distanceRGBA_frag:u0,equirect_vert:h0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:v0,meshmatcap_vert:x0,meshmatcap_frag:M0,meshnormal_vert:E0,meshnormal_frag:S0,meshphong_vert:y0,meshphong_frag:b0,meshphysical_vert:T0,meshphysical_frag:A0,meshtoon_vert:w0,meshtoon_frag:C0,points_vert:R0,points_frag:L0,shadow_vert:P0,shadow_frag:D0,sprite_vert:U0,sprite_frag:I0},ve={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ln={basic:{uniforms:wt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:wt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:wt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:wt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:wt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:wt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:wt([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:wt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:wt([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:wt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:wt([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:wt([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:wt([ve.lights,ve.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ln.physical={uniforms:wt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ks={r:0,b:0,g:0};function N0(n,e,t,i,r,s,a){const o=new ke(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function x(p,f){let T=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=(f.backgroundBlurriness>0?t:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),T=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Mo)?(u===void 0&&(u=new Lt(new hr(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:ir(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,U,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=E.colorSpace!==et,(h!==E||d!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Lt(new hs(2,2),new gi({name:"BackgroundMaterial",uniforms:ir(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=E.colorSpace!==et,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(ks,Ld(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function O0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(j,q,re,k,W){let ue=!1;if(a){const ae=v(k,re,q);c!==ae&&(c=ae,m(c.object)),ue=f(j,k,re,W),ue&&T(j,k,re,W)}else{const ae=q.wireframe===!0;(c.geometry!==k.id||c.program!==re.id||c.wireframe!==ae)&&(c.geometry=k.id,c.program=re.id,c.wireframe=ae,ue=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,J(j,q,re,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(j){return i.isWebGL2?n.bindVertexArray(j):s.bindVertexArrayOES(j)}function x(j){return i.isWebGL2?n.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function v(j,q,re){const k=re.wireframe===!0;let W=o[j.id];W===void 0&&(W={},o[j.id]=W);let ue=W[q.id];ue===void 0&&(ue={},W[q.id]=ue);let ae=ue[k];return ae===void 0&&(ae=p(d()),ue[k]=ae),ae}function p(j){const q=[],re=[],k=[];for(let W=0;W<r;W++)q[W]=0,re[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:re,attributeDivisors:k,object:j,attributes:{},index:null}}function f(j,q,re,k){const W=c.attributes,ue=q.attributes;let ae=0;const z=re.getAttributes();for(const X in z)if(z[X].location>=0){const ye=W[X];let be=ue[X];if(be===void 0&&(X==="instanceMatrix"&&j.instanceMatrix&&(be=j.instanceMatrix),X==="instanceColor"&&j.instanceColor&&(be=j.instanceColor)),ye===void 0||ye.attribute!==be||be&&ye.data!==be.data)return!0;ae++}return c.attributesNum!==ae||c.index!==k}function T(j,q,re,k){const W={},ue=q.attributes;let ae=0;const z=re.getAttributes();for(const X in z)if(z[X].location>=0){let ye=ue[X];ye===void 0&&(X==="instanceMatrix"&&j.instanceMatrix&&(ye=j.instanceMatrix),X==="instanceColor"&&j.instanceColor&&(ye=j.instanceColor));const be={};be.attribute=ye,ye&&ye.data&&(be.data=ye.data),W[X]=be,ae++}c.attributes=W,c.attributesNum=ae,c.index=k}function E(){const j=c.newAttributes;for(let q=0,re=j.length;q<re;q++)j[q]=0}function y(j){C(j,0)}function C(j,q){const re=c.newAttributes,k=c.enabledAttributes,W=c.attributeDivisors;re[j]=1,k[j]===0&&(n.enableVertexAttribArray(j),k[j]=1),W[j]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,q),W[j]=q)}function U(){const j=c.newAttributes,q=c.enabledAttributes;for(let re=0,k=q.length;re<k;re++)q[re]!==j[re]&&(n.disableVertexAttribArray(re),q[re]=0)}function w(j,q,re,k,W,ue,ae){ae===!0?n.vertexAttribIPointer(j,q,re,W,ue):n.vertexAttribPointer(j,q,re,k,W,ue)}function J(j,q,re,k){if(i.isWebGL2===!1&&(j.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const W=k.attributes,ue=re.getAttributes(),ae=q.defaultAttributeValues;for(const z in ue){const X=ue[z];if(X.location>=0){let Me=W[z];if(Me===void 0&&(z==="instanceMatrix"&&j.instanceMatrix&&(Me=j.instanceMatrix),z==="instanceColor"&&j.instanceColor&&(Me=j.instanceColor)),Me!==void 0){const ye=Me.normalized,be=Me.itemSize,Ae=t.get(Me);if(Ae===void 0)continue;const Re=Ae.buffer,we=Ae.type,Fe=Ae.bytesPerElement,nt=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||Me.gpuType===md);if(Me.isInterleavedBufferAttribute){const Ie=Me.data,_=Ie.stride,L=Me.offset;if(Ie.isInstancedInterleavedBuffer){for(let I=0;I<X.locationSize;I++)C(X.location+I,Ie.meshPerAttribute);j.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let I=0;I<X.locationSize;I++)y(X.location+I);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let I=0;I<X.locationSize;I++)w(X.location+I,be/X.locationSize,we,ye,_*Fe,(L+be/X.locationSize*I)*Fe,nt)}else{if(Me.isInstancedBufferAttribute){for(let Ie=0;Ie<X.locationSize;Ie++)C(X.location+Ie,Me.meshPerAttribute);j.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)y(X.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Ie=0;Ie<X.locationSize;Ie++)w(X.location+Ie,be/X.locationSize,we,ye,be*Fe,be/X.locationSize*Ie*Fe,nt)}}else if(ae!==void 0){const ye=ae[z];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(X.location,ye);break;case 3:n.vertexAttrib3fv(X.location,ye);break;case 4:n.vertexAttrib4fv(X.location,ye);break;default:n.vertexAttrib1fv(X.location,ye)}}}}U()}function S(){he();for(const j in o){const q=o[j];for(const re in q){const k=q[re];for(const W in k)x(k[W].object),delete k[W];delete q[re]}delete o[j]}}function A(j){if(o[j.id]===void 0)return;const q=o[j.id];for(const re in q){const k=q[re];for(const W in k)x(k[W].object),delete k[W];delete q[re]}delete o[j.id]}function ce(j){for(const q in o){const re=o[q];if(re[j.id]===void 0)continue;const k=re[j.id];for(const W in k)x(k[W].object),delete k[W];delete re[j.id]}}function he(){V(),u=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:he,resetDefaultState:V,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:ce,initAttributes:E,enableAttribute:y,disableUnusedAttributes:U}}function F0(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function B0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,y=a||e.has("OES_texture_float"),C=E&&y,U=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:E,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:U}}function z0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Fn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,E=T*4;let y=f.clippingState||null;l.value=y,y=u(x,d,E,m);for(let C=0;C!==E;++C)y[C]=t[C];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const f=m+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,y=m;E!==v;++E,y+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function H0(n){let e=new WeakMap;function t(a,o){return o===Na?a.mapping=er:o===Oa&&(a.mapping=tr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Na||o===Oa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ev(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Id extends Pd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,pu=[.125,.215,.35,.446,.526,.582],ai=20,ua=new Id,mu=new ke;let ha=null;const ri=(1+Math.sqrt(5))/2,Hi=1/ri,gu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ri,Hi),new N(0,ri,-Hi),new N(Hi,0,ri),new N(-Hi,0,ri),new N(ri,Hi,0),new N(-ri,Hi,0)];class _u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ha=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha),e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:rs,format:Qt,colorSpace:fn,depthBuffer:!1},r=vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(s)),this._blurMaterial=V0(s,e,t)}return r}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,i,r){const o=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(mu),u.toneMapping=Xn,u.autoClear=!1;const m=new To({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),x=new Lt(new hr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(mu),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;Ws(r,T*E,f>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===er||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gu[(r-1)%gu.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Lt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ai-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):ai;p>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const f=[];let T=0;for(let w=0;w<ai;++w){const J=w/v,S=Math.exp(-J*J/2);f.push(S),w===0?T+=S:w<p&&(T+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const y=this._sizeLods[r],C=3*y*(r>E-Wi?r-E+Wi:0),U=4*(this._cubeSize-y);Ws(t,C,U,3*y,2*y),l.setRenderTarget(t),l.render(h,ua)}}function G0(n){const e=[],t=[],i=[];let r=n;const s=n-Wi+1+pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Wi?l=pu[a-n+Wi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,v=3,p=2,f=1,T=new Float32Array(v*x*m),E=new Float32Array(p*x*m),y=new Float32Array(f*x*m);for(let U=0;U<m;U++){const w=U%3*2/3-1,J=U>2?0:-1,S=[w,J,0,w+2/3,J,0,w+2/3,J+1,0,w,J,0,w+2/3,J+1,0,w,J+1,0];T.set(S,v*x*U),E.set(d,p*x*U);const A=[U,U,U,U,U,U];y.set(A,f*x*U)}const C=new Cn;C.setAttribute("position",new dn(T,v)),C.setAttribute("uv",new dn(E,p)),C.setAttribute("faceIndex",new dn(y,f)),e.push(C),r>Wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vu(n,e,t){const i=new pi(n,e,t);return i.texture.mapping=Mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function V0(n,e,t){const i=new Float32Array(ai),r=new N(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function xu(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Mu(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function k0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Na||l===Oa,u=l===er||l===tr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new _u(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new _u(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function W0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function X0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let E=0,y=T.length;E<y;E+=3){const C=T[E+0],U=T[E+1],w=T[E+2];d.push(C,U,U,w,w,C)}}else if(x!==void 0){const T=x.array;v=x.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const C=E+0,U=E+1,w=E+2;d.push(C,U,U,w,w,C)}}else return;const p=new(yd(d)?Rd:Cd)(d,1);p.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Y0(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function h(d,m,x){if(x===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,d*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function q0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function j0(n,e){return n[0]-e[0]}function K0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let q=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var m=q;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],J=u.morphAttributes.color||[];let S=0;E===!0&&(S=1),y===!0&&(S=2),C===!0&&(S=3);let A=u.attributes.position.count*S,ce=1;A>e.maxTextureSize&&(ce=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const he=new Float32Array(A*ce*4*v),V=new Ad(he,A,ce,v);V.type=Hn,V.needsUpdate=!0;const j=S*4;for(let re=0;re<v;re++){const k=U[re],W=w[re],ue=J[re],ae=A*ce*4*re;for(let z=0;z<k.count;z++){const X=z*j;E===!0&&(a.fromBufferAttribute(k,z),he[ae+X+0]=a.x,he[ae+X+1]=a.y,he[ae+X+2]=a.z,he[ae+X+3]=0),y===!0&&(a.fromBufferAttribute(W,z),he[ae+X+4]=a.x,he[ae+X+5]=a.y,he[ae+X+6]=a.z,he[ae+X+7]=0),C===!0&&(a.fromBufferAttribute(ue,z),he[ae+X+8]=a.x,he[ae+X+9]=a.y,he[ae+X+10]=a.z,he[ae+X+11]=ue.itemSize===4?a.w:1)}}p={count:v,texture:V,size:new Ne(A,ce)},s.set(u,p),u.addEventListener("dispose",q)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const T=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let y=0;y<x;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<x;y++){const C=v[y];C[0]=y,C[1]=d[y]}v.sort(K0);for(let y=0;y<8;y++)y<x&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(j0);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const C=o[y],U=C[0],w=C[1];U!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+y)!==p[U]&&u.setAttribute("morphTarget"+y,p[U]),f&&u.getAttribute("morphNormal"+y)!==f[U]&&u.setAttribute("morphNormal"+y,f[U]),r[y]=w,T+=w):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const E=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Z0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Nd=new Ut,Od=new Ad,Fd=new F_,Bd=new Dd,Eu=[],Su=[],yu=new Float32Array(16),bu=new Float32Array(9),Tu=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Eu[r];if(s===void 0&&(s=new Float32Array(r),Eu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ao(n,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function J0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function nM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),ht(t,i)}}function iM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;bu.set(i),n.uniformMatrix3fv(this.addr,!1,bu),ht(t,i)}}function rM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;yu.set(i),n.uniformMatrix4fv(this.addr,!1,yu),ht(t,i)}}function sM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function cM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function fM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Nd,r)}function pM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Fd,r)}function mM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bd,r)}function gM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Od,r)}function _M(n){switch(n){case 5126:return J0;case 35664:return Q0;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return hM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(n,e){n.uniform1fv(this.addr,e)}function xM(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function MM(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function EM(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function SM(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yM(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bM(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function TM(n,e){n.uniform1iv(this.addr,e)}function AM(n,e){n.uniform2iv(this.addr,e)}function wM(n,e){n.uniform3iv(this.addr,e)}function CM(n,e){n.uniform4iv(this.addr,e)}function RM(n,e){n.uniform1uiv(this.addr,e)}function LM(n,e){n.uniform2uiv(this.addr,e)}function PM(n,e){n.uniform3uiv(this.addr,e)}function DM(n,e){n.uniform4uiv(this.addr,e)}function UM(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Nd,s[a])}function IM(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Fd,s[a])}function NM(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bd,s[a])}function OM(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Od,s[a])}function FM(n){switch(n){case 5126:return vM;case 35664:return xM;case 35665:return MM;case 35666:return EM;case 35674:return SM;case 35675:return yM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return wM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return LM;case 36295:return PM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=_M(t.type)}}class zM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=FM(t.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Au(n,e){n.seq.push(e),n.map[e.id]=e}function GM(n,e,t){const i=n.name,r=i.length;for(da.lastIndex=0;;){const s=da.exec(i),a=da.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Au(t,c===void 0?new BM(o,n,e):new zM(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new HM(o),Au(t,h)),t=h}}}class Qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);GM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let VM=0;function kM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function WM(n){switch(n){case fn:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Cu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kM(n.getShaderSource(e),a)}else return r}function XM(n,e){const t=WM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function YM(n,e){let t;switch(e){case zg:t="Linear";break;case Hg:t="Reinhard";break;case Gg:t="OptimizedCineon";break;case Vg:t="ACESFilmic";break;case kg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function jM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function KM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function kr(n){return n!==""}function Ru(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(n){return n.replace($M,JM)}const ZM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function JM(n,e){let t=He[e];if(t===void 0){const i=ZM.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(n){return n.replace(QM,eE)}function eE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Du(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function nE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function rE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case Fg:e="ENVMAP_BLENDING_MIX";break;case Bg:e="ENVMAP_BLENDING_ADD";break}return e}function sE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function oE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tE(t),c=nE(t),u=iE(t),h=rE(t),d=sE(t),m=t.isWebGL2?"":qM(t),x=jM(s),v=r.createProgram();let p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(kr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(kr).join(`
`),f.length>0&&(f+=`
`)):(p=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),f=[m,Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?He.tonemapping_pars_fragment:"",t.toneMapping!==Xn?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,XM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=Ga(a),a=Ru(a,t),a=Lu(a,t),o=Ga(o),o=Ru(o,t),o=Lu(o,t),a=Pu(a),o=Pu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=T+p+a,y=T+f+o,C=wu(r,r.VERTEX_SHADER,E),U=wu(r,r.FRAGMENT_SHADER,y);if(r.attachShader(v,C),r.attachShader(v,U),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(C).trim(),ce=r.getShaderInfoLog(U).trim();let he=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,U);else{const j=Cu(r,C,"vertex"),q=Cu(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+j+`
`+q)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||ce==="")&&(V=!1);V&&(this.diagnostics={runnable:he,programLog:S,vertexShader:{log:A,prefix:p},fragmentShader:{log:ce,prefix:f}})}r.deleteShader(C),r.deleteShader(U);let w;this.getUniforms=function(){return w===void 0&&(w=new Qs(r,v)),w};let J;return this.getAttributes=function(){return J===void 0&&(J=KM(r,v)),J},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=U,this}let aE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cE(e),t.set(e,i)),i}}class cE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function uE(n,e,t,i,r,s,a){const o=new wl,l=new lE,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,A,ce,he,V){const j=he.fog,q=V.geometry,re=S.isMeshStandardMaterial?he.environment:null,k=(S.isMeshStandardMaterial?t:e).get(S.envMap||re),W=k&&k.mapping===Mo?k.image.height:null,ue=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,z=ae!==void 0?ae.length:0;let X=0;q.morphAttributes.position!==void 0&&(X=1),q.morphAttributes.normal!==void 0&&(X=2),q.morphAttributes.color!==void 0&&(X=3);let Me,ye,be,Ae;if(ue){const Je=ln[ue];Me=Je.vertexShader,ye=Je.fragmentShader}else Me=S.vertexShader,ye=S.fragmentShader,l.update(S),be=l.getVertexShaderID(S),Ae=l.getFragmentShaderID(S);const Re=n.getRenderTarget(),we=V.isInstancedMesh===!0,Fe=!!S.map,nt=!!S.matcap,Ie=!!k,_=!!S.aoMap,L=!!S.lightMap,I=!!S.bumpMap,H=!!S.normalMap,F=!!S.displacementMap,le=!!S.emissiveMap,oe=!!S.metalnessMap,K=!!S.roughnessMap,se=S.anisotropy>0,ne=S.clearcoat>0,Se=S.iridescence>0,M=S.sheen>0,g=S.transmission>0,D=se&&!!S.anisotropyMap,Q=ne&&!!S.clearcoatMap,ee=ne&&!!S.clearcoatNormalMap,te=ne&&!!S.clearcoatRoughnessMap,_e=Se&&!!S.iridescenceMap,de=Se&&!!S.iridescenceThicknessMap,G=M&&!!S.sheenColorMap,R=M&&!!S.sheenRoughnessMap,ie=!!S.specularMap,xe=!!S.specularColorMap,fe=!!S.specularIntensityMap,me=g&&!!S.transmissionMap,Le=g&&!!S.thicknessMap,qe=!!S.gradientMap,P=!!S.alphaMap,Ee=S.alphaTest>0,Y=!!S.alphaHash,pe=!!S.extensions,ge=!!q.attributes.uv1,We=!!q.attributes.uv2,Ke=!!q.attributes.uv3;let Ze=Xn;return S.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ze=n.toneMapping),{isWebGL2:u,shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Me,fragmentShader:ye,defines:S.defines,customVertexShaderID:be,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:we,instancingColor:we&&V.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:fn,map:Fe,matcap:nt,envMap:Ie,envMapMode:Ie&&k.mapping,envMapCubeUVHeight:W,aoMap:_,lightMap:L,bumpMap:I,normalMap:H,displacementMap:d&&F,emissiveMap:le,normalMapObjectSpace:H&&S.normalMapType===n_,normalMapTangentSpace:H&&S.normalMapType===Sd,metalnessMap:oe,roughnessMap:K,anisotropy:se,anisotropyMap:D,clearcoat:ne,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:te,iridescence:Se,iridescenceMap:_e,iridescenceThicknessMap:de,sheen:M,sheenColorMap:G,sheenRoughnessMap:R,specularMap:ie,specularColorMap:xe,specularIntensityMap:fe,transmission:g,transmissionMap:me,thicknessMap:Le,gradientMap:qe,opaque:S.transparent===!1&&S.blending===ji,alphaMap:P,alphaTest:Ee,alphaHash:Y,combine:S.combine,mapUv:Fe&&v(S.map.channel),aoMapUv:_&&v(S.aoMap.channel),lightMapUv:L&&v(S.lightMap.channel),bumpMapUv:I&&v(S.bumpMap.channel),normalMapUv:H&&v(S.normalMap.channel),displacementMapUv:F&&v(S.displacementMap.channel),emissiveMapUv:le&&v(S.emissiveMap.channel),metalnessMapUv:oe&&v(S.metalnessMap.channel),roughnessMapUv:K&&v(S.roughnessMap.channel),anisotropyMapUv:D&&v(S.anisotropyMap.channel),clearcoatMapUv:Q&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:G&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:R&&v(S.sheenRoughnessMap.channel),specularMapUv:ie&&v(S.specularMap.channel),specularColorMapUv:xe&&v(S.specularColorMap.channel),specularIntensityMapUv:fe&&v(S.specularIntensityMap.channel),transmissionMapUv:me&&v(S.transmissionMap.channel),thicknessMapUv:Le&&v(S.thicknessMap.channel),alphaMapUv:P&&v(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(H||se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:We,vertexUv3s:Ke,pointsUvs:V.isPoints===!0&&!!q.attributes.uv&&(Fe||P),fog:!!j,useFog:S.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&ce.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&S.map.colorSpace===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:pe&&S.extensions.derivatives===!0,extensionFragDepth:pe&&S.extensions.fragDepth===!0,extensionDrawBuffers:pe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ce in S.defines)A.push(ce),A.push(S.defines[ce]);return S.isRawShaderMaterial===!1&&(T(A,S),E(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function T(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function E(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function y(S){const A=x[S.type];let ce;if(A){const he=ln[A];ce=$_.clone(he.uniforms)}else ce=S.uniforms;return ce}function C(S,A){let ce;for(let he=0,V=c.length;he<V;he++){const j=c[he];if(j.cacheKey===A){ce=j,++ce.usedTimes;break}}return ce===void 0&&(ce=new oE(n,A,S,s),c.push(ce)),ce}function U(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function J(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:U,releaseShaderCache:w,programs:c,dispose:J}}function hE(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function dE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Iu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,m,x,v,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=v,f.group=p),e++,f}function o(h,d,m,x,v,p){const f=a(h,d,m,x,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,x,v,p){const f=a(h,d,m,x,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||dE),i.length>1&&i.sort(d||Uu),r.length>1&&r.sort(d||Uu)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function fE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Iu,n.set(i,[a])):r>=s.length?(a=new Iu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function pE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ke};break;case"SpotLight":t={position:new N,direction:new N,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function mE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gE=0;function _E(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vE(n,e){const t=new pE,i=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,a=new at,o=new at;function l(u,h){let d=0,m=0,x=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let v=0,p=0,f=0,T=0,E=0,y=0,C=0,U=0,w=0,J=0;u.sort(_E);const S=h===!0?Math.PI:1;for(let ce=0,he=u.length;ce<he;ce++){const V=u[ce],j=V.color,q=V.intensity,re=V.distance,k=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=j.r*q*S,m+=j.g*q*S,x+=j.b*q*S;else if(V.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(V.sh.coefficients[W],q);else if(V.isDirectionalLight){const W=t.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity*S),V.castShadow){const ue=V.shadow,ae=i.get(V);ae.shadowBias=ue.bias,ae.shadowNormalBias=ue.normalBias,ae.shadowRadius=ue.radius,ae.shadowMapSize=ue.mapSize,r.directionalShadow[v]=ae,r.directionalShadowMap[v]=k,r.directionalShadowMatrix[v]=V.shadow.matrix,y++}r.directional[v]=W,v++}else if(V.isSpotLight){const W=t.get(V);W.position.setFromMatrixPosition(V.matrixWorld),W.color.copy(j).multiplyScalar(q*S),W.distance=re,W.coneCos=Math.cos(V.angle),W.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),W.decay=V.decay,r.spot[f]=W;const ue=V.shadow;if(V.map&&(r.spotLightMap[w]=V.map,w++,ue.updateMatrices(V),V.castShadow&&J++),r.spotLightMatrix[f]=ue.matrix,V.castShadow){const ae=i.get(V);ae.shadowBias=ue.bias,ae.shadowNormalBias=ue.normalBias,ae.shadowRadius=ue.radius,ae.shadowMapSize=ue.mapSize,r.spotShadow[f]=ae,r.spotShadowMap[f]=k,U++}f++}else if(V.isRectAreaLight){const W=t.get(V);W.color.copy(j).multiplyScalar(q),W.halfWidth.set(V.width*.5,0,0),W.halfHeight.set(0,V.height*.5,0),r.rectArea[T]=W,T++}else if(V.isPointLight){const W=t.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity*S),W.distance=V.distance,W.decay=V.decay,V.castShadow){const ue=V.shadow,ae=i.get(V);ae.shadowBias=ue.bias,ae.shadowNormalBias=ue.normalBias,ae.shadowRadius=ue.radius,ae.shadowMapSize=ue.mapSize,ae.shadowCameraNear=ue.camera.near,ae.shadowCameraFar=ue.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=k,r.pointShadowMatrix[p]=V.shadow.matrix,C++}r.point[p]=W,p++}else if(V.isHemisphereLight){const W=t.get(V);W.skyColor.copy(V.color).multiplyScalar(q*S),W.groundColor.copy(V.groundColor).multiplyScalar(q*S),r.hemi[E]=W,E++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const A=r.hash;(A.directionalLength!==v||A.pointLength!==p||A.spotLength!==f||A.rectAreaLength!==T||A.hemiLength!==E||A.numDirectionalShadows!==y||A.numPointShadows!==C||A.numSpotShadows!==U||A.numSpotMaps!==w)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=T,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=U+w-J,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=J,A.directionalLength=v,A.pointLength=p,A.spotLength=f,A.rectAreaLength=T,A.hemiLength=E,A.numDirectionalShadows=y,A.numPointShadows=C,A.numSpotShadows=U,A.numSpotMaps=w,r.version=gE++)}function c(u,h){let d=0,m=0,x=0,v=0,p=0;const f=h.matrixWorldInverse;for(let T=0,E=u.length;T<E;T++){const y=u[T];if(y.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),d++}else if(y.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function Nu(n,e){const t=new vE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xE(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Nu(n,e),t.set(s,[l])):a>=o.length?(l=new Nu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ME extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EE extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yE=`uniform sampler2D shadow_pass;
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
}`;function bE(n,e,t){let i=new Cl;const r=new Ne,s=new Ne,a=new ft,o=new ME({depthPacking:t_}),l=new EE,c={},u=t.maxTextureSize,h={[jn]:Dt,[Dt]:jn,[un]:un},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:SE,fragmentShader:yE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Cn;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let f=this.type;this.render=function(C,U,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const J=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),ce=n.state;ce.setBlending(Wn),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const he=f!==Sn&&this.type===Sn,V=f===Sn&&this.type!==Sn;for(let j=0,q=C.length;j<q;j++){const re=C[j],k=re.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const W=k.getFrameExtents();if(r.multiply(W),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,k.mapSize.y=s.y)),k.map===null||he===!0||V===!0){const ae=this.type!==Sn?{minFilter:Ct,magFilter:Ct}:{};k.map!==null&&k.map.dispose(),k.map=new pi(r.x,r.y,ae),k.map.texture.name=re.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ue=k.getViewportCount();for(let ae=0;ae<ue;ae++){const z=k.getViewport(ae);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),ce.viewport(a),k.updateMatrices(re,ae),i=k.getFrustum(),y(U,w,k.camera,re,this.type)}k.isPointLightShadow!==!0&&this.type===Sn&&T(k,w),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(J,S,A)};function T(C,U){const w=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(U,null,w,d,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(U,null,w,m,v,null)}function E(C,U,w,J){let S=null;const A=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)S=A;else if(S=w.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ce=S.uuid,he=U.uuid;let V=c[ce];V===void 0&&(V={},c[ce]=V);let j=V[he];j===void 0&&(j=S.clone(),V[he]=j),S=j}if(S.visible=U.visible,S.wireframe=U.wireframe,J===Sn?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:h[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ce=n.properties.get(S);ce.light=w}return S}function y(C,U,w,J,S){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Sn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const he=e.update(C),V=C.material;if(Array.isArray(V)){const j=he.groups;for(let q=0,re=j.length;q<re;q++){const k=j[q],W=V[k.materialIndex];if(W&&W.visible){const ue=E(C,W,J,S);n.renderBufferDirect(w,null,he,ue,C,k)}}}else if(V.visible){const j=E(C,V,J,S);n.renderBufferDirect(w,null,he,j,C,null)}}const ce=C.children;for(let he=0,V=ce.length;he<V;he++)y(ce[he],U,w,J,S)}}function TE(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const Ee=new ft;let Y=null;const pe=new ft(0,0,0,0);return{setMask:function(ge){Y!==ge&&!P&&(n.colorMask(ge,ge,ge,ge),Y=ge)},setLocked:function(ge){P=ge},setClear:function(ge,We,Ke,Ze,Nt){Nt===!0&&(ge*=Ze,We*=Ze,Ke*=Ze),Ee.set(ge,We,Ke,Ze),pe.equals(Ee)===!1&&(n.clearColor(ge,We,Ke,Ze),pe.copy(Ee))},reset:function(){P=!1,Y=null,pe.set(-1,0,0,0)}}}function s(){let P=!1,Ee=null,Y=null,pe=null;return{setTest:function(ge){ge?Re(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ge){Ee!==ge&&!P&&(n.depthMask(ge),Ee=ge)},setFunc:function(ge){if(Y!==ge){switch(ge){case Lg:n.depthFunc(n.NEVER);break;case Pg:n.depthFunc(n.ALWAYS);break;case Dg:n.depthFunc(n.LESS);break;case Ia:n.depthFunc(n.LEQUAL);break;case Ug:n.depthFunc(n.EQUAL);break;case Ig:n.depthFunc(n.GEQUAL);break;case Ng:n.depthFunc(n.GREATER);break;case Og:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=ge}},setLocked:function(ge){P=ge},setClear:function(ge){pe!==ge&&(n.clearDepth(ge),pe=ge)},reset:function(){P=!1,Ee=null,Y=null,pe=null}}}function a(){let P=!1,Ee=null,Y=null,pe=null,ge=null,We=null,Ke=null,Ze=null,Nt=null;return{setTest:function(Je){P||(Je?Re(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Je){Ee!==Je&&!P&&(n.stencilMask(Je),Ee=Je)},setFunc:function(Je,sn,yt){(Y!==Je||pe!==sn||ge!==yt)&&(n.stencilFunc(Je,sn,yt),Y=Je,pe=sn,ge=yt)},setOp:function(Je,sn,yt){(We!==Je||Ke!==sn||Ze!==yt)&&(n.stencilOp(Je,sn,yt),We=Je,Ke=sn,Ze=yt)},setLocked:function(Je){P=Je},setClear:function(Je){Nt!==Je&&(n.clearStencil(Je),Nt=Je)},reset:function(){P=!1,Ee=null,Y=null,pe=null,ge=null,We=null,Ke=null,Ze=null,Nt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,f=!1,T=null,E=null,y=null,C=null,U=null,w=null,J=null,S=!1,A=null,ce=null,he=null,V=null,j=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,k=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),re=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),re=k>=2);let ue=null,ae={};const z=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),Me=new ft().fromArray(z),ye=new ft().fromArray(X);function be(P,Ee,Y,pe){const ge=new Uint8Array(4),We=n.createTexture();n.bindTexture(P,We),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<Y;Ke++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(Ee+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return We}const Ae={};Ae[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(n.DEPTH_TEST),l.setFunc(Ia),F(!1),le(xc),Re(n.CULL_FACE),I(Wn);function Re(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function we(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Fe(P,Ee){return m[P]!==Ee?(n.bindFramebuffer(P,Ee),m[P]=Ee,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ee),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function nt(P,Ee){let Y=v,pe=!1;if(P)if(Y=x.get(Ee),Y===void 0&&(Y=[],x.set(Ee,Y)),P.isWebGLMultipleRenderTargets){const ge=P.texture;if(Y.length!==ge.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let We=0,Ke=ge.length;We<Ke;We++)Y[We]=n.COLOR_ATTACHMENT0+We;Y.length=ge.length,pe=!0}}else Y[0]!==n.COLOR_ATTACHMENT0&&(Y[0]=n.COLOR_ATTACHMENT0,pe=!0);else Y[0]!==n.BACK&&(Y[0]=n.BACK,pe=!0);pe&&(t.isWebGL2?n.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Ie(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const _={[Gi]:n.FUNC_ADD,[xg]:n.FUNC_SUBTRACT,[Mg]:n.FUNC_REVERSE_SUBTRACT};if(i)_[yc]=n.MIN,_[bc]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(_[yc]=P.MIN_EXT,_[bc]=P.MAX_EXT)}const L={[Eg]:n.ZERO,[Sg]:n.ONE,[yg]:n.SRC_COLOR,[hd]:n.SRC_ALPHA,[Rg]:n.SRC_ALPHA_SATURATE,[wg]:n.DST_COLOR,[Tg]:n.DST_ALPHA,[bg]:n.ONE_MINUS_SRC_COLOR,[dd]:n.ONE_MINUS_SRC_ALPHA,[Cg]:n.ONE_MINUS_DST_COLOR,[Ag]:n.ONE_MINUS_DST_ALPHA};function I(P,Ee,Y,pe,ge,We,Ke,Ze){if(P===Wn){f===!0&&(we(n.BLEND),f=!1);return}if(f===!1&&(Re(n.BLEND),f=!0),P!==vg){if(P!==T||Ze!==S){if((E!==Gi||U!==Gi)&&(n.blendEquation(n.FUNC_ADD),E=Gi,U=Gi),Ze)switch(P){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.ONE,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,C=null,w=null,J=null,T=P,S=Ze}return}ge=ge||Ee,We=We||Y,Ke=Ke||pe,(Ee!==E||ge!==U)&&(n.blendEquationSeparate(_[Ee],_[ge]),E=Ee,U=ge),(Y!==y||pe!==C||We!==w||Ke!==J)&&(n.blendFuncSeparate(L[Y],L[pe],L[We],L[Ke]),y=Y,C=pe,w=We,J=Ke),T=P,S=!1}function H(P,Ee){P.side===un?we(n.CULL_FACE):Re(n.CULL_FACE);let Y=P.side===Dt;Ee&&(Y=!Y),F(Y),P.blending===ji&&P.transparent===!1?I(Wn):I(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const pe=P.stencilWrite;c.setTest(pe),pe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),K(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(P){A!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),A=P)}function le(P){P!==mg?(Re(n.CULL_FACE),P!==ce&&(P===xc?n.cullFace(n.BACK):P===gg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),ce=P}function oe(P){P!==he&&(re&&n.lineWidth(P),he=P)}function K(P,Ee,Y){P?(Re(n.POLYGON_OFFSET_FILL),(V!==Ee||j!==Y)&&(n.polygonOffset(Ee,Y),V=Ee,j=Y)):we(n.POLYGON_OFFSET_FILL)}function se(P){P?Re(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function ne(P){P===void 0&&(P=n.TEXTURE0+q-1),ue!==P&&(n.activeTexture(P),ue=P)}function Se(P,Ee,Y){Y===void 0&&(ue===null?Y=n.TEXTURE0+q-1:Y=ue);let pe=ae[Y];pe===void 0&&(pe={type:void 0,texture:void 0},ae[Y]=pe),(pe.type!==P||pe.texture!==Ee)&&(ue!==Y&&(n.activeTexture(Y),ue=Y),n.bindTexture(P,Ee||Ae[P]),pe.type=P,pe.texture=Ee)}function M(){const P=ae[ue];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(P){Me.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Me.copy(P))}function fe(P){ye.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ye.copy(P))}function me(P,Ee){let Y=h.get(Ee);Y===void 0&&(Y=new WeakMap,h.set(Ee,Y));let pe=Y.get(P);pe===void 0&&(pe=n.getUniformBlockIndex(Ee,P.name),Y.set(P,pe))}function Le(P,Ee){const pe=h.get(Ee).get(P);u.get(Ee)!==pe&&(n.uniformBlockBinding(Ee,pe,P.__bindingPointIndex),u.set(Ee,pe))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ue=null,ae={},m={},x=new WeakMap,v=[],p=null,f=!1,T=null,E=null,y=null,C=null,U=null,w=null,J=null,S=!1,A=null,ce=null,he=null,V=null,j=null,Me.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Re,disable:we,bindFramebuffer:Fe,drawBuffers:nt,useProgram:Ie,setBlending:I,setMaterial:H,setFlipSided:F,setCullFace:le,setLineWidth:oe,setPolygonOffset:K,setScissorTest:se,activeTexture:ne,bindTexture:Se,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:R,texImage3D:ie,updateUBOMapping:me,uniformBlockBinding:Le,texStorage2D:de,texStorage3D:G,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:te,compressedTexSubImage3D:_e,scissor:xe,viewport:fe,reset:qe}}function AE(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(M,g){return f?new OffscreenCanvas(M,g):os("canvas")}function E(M,g,D,Q){let ee=1;if((M.width>Q||M.height>Q)&&(ee=Q/Math.max(M.width,M.height)),ee<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const te=g?oo:Math.floor,_e=te(ee*M.width),de=te(ee*M.height);v===void 0&&(v=T(_e,de));const G=D?T(_e,de):v;return G.width=_e,G.height=de,G.getContext("2d").drawImage(M,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+de+")."),G}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function y(M){return Ha(M.width)&&Ha(M.height)}function C(M){return o?!1:M.wrapS!==Jt||M.wrapT!==Jt||M.minFilter!==Ct&&M.minFilter!==Gt}function U(M,g){return M.generateMipmaps&&g&&M.minFilter!==Ct&&M.minFilter!==Gt}function w(M){n.generateMipmap(M)}function J(M,g,D,Q,ee=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let te=g;return g===n.RED&&(D===n.FLOAT&&(te=n.R32F),D===n.HALF_FLOAT&&(te=n.R16F),D===n.UNSIGNED_BYTE&&(te=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(te=n.R8UI),D===n.UNSIGNED_SHORT&&(te=n.R16UI),D===n.UNSIGNED_INT&&(te=n.R32UI),D===n.BYTE&&(te=n.R8I),D===n.SHORT&&(te=n.R16I),D===n.INT&&(te=n.R32I)),g===n.RG&&(D===n.FLOAT&&(te=n.RG32F),D===n.HALF_FLOAT&&(te=n.RG16F),D===n.UNSIGNED_BYTE&&(te=n.RG8)),g===n.RGBA&&(D===n.FLOAT&&(te=n.RGBA32F),D===n.HALF_FLOAT&&(te=n.RGBA16F),D===n.UNSIGNED_BYTE&&(te=Q===et&&ee===!1?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)),(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(M,g,D){return U(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Ct&&M.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function A(M){return M===Ct||M===Tc||M===Ho?n.NEAREST:n.LINEAR}function ce(M){const g=M.target;g.removeEventListener("dispose",ce),V(g),g.isVideoTexture&&x.delete(g)}function he(M){const g=M.target;g.removeEventListener("dispose",he),q(g)}function V(M){const g=i.get(M);if(g.__webglInit===void 0)return;const D=M.source,Q=p.get(D);if(Q){const ee=Q[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&j(M),Object.keys(Q).length===0&&p.delete(D)}i.remove(M)}function j(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const D=M.source,Q=p.get(D);delete Q[g.__cacheKey],a.memory.textures--}function q(M){const g=M.texture,D=i.get(M),Q=i.get(g);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(D.__webglFramebuffer[ee]))for(let te=0;te<D.__webglFramebuffer[ee].length;te++)n.deleteFramebuffer(D.__webglFramebuffer[ee][te]);else n.deleteFramebuffer(D.__webglFramebuffer[ee]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[ee])}else{if(Array.isArray(D.__webglFramebuffer))for(let ee=0;ee<D.__webglFramebuffer.length;ee++)n.deleteFramebuffer(D.__webglFramebuffer[ee]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ee=0;ee<D.__webglColorRenderbuffer.length;ee++)D.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[ee]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ee=0,te=g.length;ee<te;ee++){const _e=i.get(g[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(g[ee])}i.remove(g),i.remove(M)}let re=0;function k(){re=0}function W(){const M=re;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),re+=1,M}function ue(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ae(M,g){const D=i.get(M);if(M.isVideoTexture&&ne(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(D,M,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function z(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Fe(D,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function X(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Fe(D,M,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function Me(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){nt(D,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const ye={[Fa]:n.REPEAT,[Jt]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},be={[Ct]:n.NEAREST,[Tc]:n.NEAREST_MIPMAP_NEAREST,[Ho]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Wg]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},Ae={[r_]:n.NEVER,[h_]:n.ALWAYS,[s_]:n.LESS,[a_]:n.LEQUAL,[o_]:n.EQUAL,[u_]:n.GEQUAL,[l_]:n.GREATER,[c_]:n.NOTEQUAL};function Re(M,g,D){if(D?(n.texParameteri(M,n.TEXTURE_WRAP_S,ye[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ye[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ye[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,be[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,be[g.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==Jt||g.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(g.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(g.minFilter)),g.minFilter!==Ct&&g.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Ct||g.minFilter!==Ho&&g.minFilter!==is||g.type===Hn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===rs&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function we(M,g){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",ce));const Q=g.source;let ee=p.get(Q);ee===void 0&&(ee={},p.set(Q,ee));const te=ue(g);if(te!==M.__cacheKey){ee[te]===void 0&&(ee[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),ee[te].usedTimes++;const _e=ee[M.__cacheKey];_e!==void 0&&(ee[M.__cacheKey].usedTimes--,_e.usedTimes===0&&j(g)),M.__cacheKey=te,M.__webglTexture=ee[te].texture}return D}function Fe(M,g,D){let Q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=n.TEXTURE_3D);const ee=we(M,g),te=g.source;t.bindTexture(Q,M.__webglTexture,n.TEXTURE0+D);const _e=i.get(te);if(te.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const de=C(g)&&y(g.image)===!1;let G=E(g.image,de,!1,u);G=Se(g,G);const R=y(G)||o,ie=s.convert(g.format,g.colorSpace);let xe=s.convert(g.type),fe=J(g.internalFormat,ie,xe,g.colorSpace,g.isVideoTexture);Re(Q,g,R);let me;const Le=g.mipmaps,qe=o&&g.isVideoTexture!==!0,P=_e.__version===void 0||ee===!0,Ee=S(g,G,R);if(g.isDepthTexture)fe=n.DEPTH_COMPONENT,o?g.type===Hn?fe=n.DEPTH_COMPONENT32F:g.type===zn?fe=n.DEPTH_COMPONENT24:g.type===ui?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:g.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===hi&&fe===n.DEPTH_COMPONENT&&g.type!==Tl&&g.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=zn,xe=s.convert(g.type)),g.format===nr&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,g.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ui,xe=s.convert(g.type))),P&&(qe?t.texStorage2D(n.TEXTURE_2D,1,fe,G.width,G.height):t.texImage2D(n.TEXTURE_2D,0,fe,G.width,G.height,0,ie,xe,null));else if(g.isDataTexture)if(Le.length>0&&R){qe&&P&&t.texStorage2D(n.TEXTURE_2D,Ee,fe,Le[0].width,Le[0].height);for(let Y=0,pe=Le.length;Y<pe;Y++)me=Le[Y],qe?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,ie,xe,me.data):t.texImage2D(n.TEXTURE_2D,Y,fe,me.width,me.height,0,ie,xe,me.data);g.generateMipmaps=!1}else qe?(P&&t.texStorage2D(n.TEXTURE_2D,Ee,fe,G.width,G.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,G.width,G.height,ie,xe,G.data)):t.texImage2D(n.TEXTURE_2D,0,fe,G.width,G.height,0,ie,xe,G.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){qe&&P&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,fe,Le[0].width,Le[0].height,G.depth);for(let Y=0,pe=Le.length;Y<pe;Y++)me=Le[Y],g.format!==Qt?ie!==null?qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,G.depth,ie,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,fe,me.width,me.height,G.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,G.depth,ie,xe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,fe,me.width,me.height,G.depth,0,ie,xe,me.data)}else{qe&&P&&t.texStorage2D(n.TEXTURE_2D,Ee,fe,Le[0].width,Le[0].height);for(let Y=0,pe=Le.length;Y<pe;Y++)me=Le[Y],g.format!==Qt?ie!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,ie,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,ie,xe,me.data):t.texImage2D(n.TEXTURE_2D,Y,fe,me.width,me.height,0,ie,xe,me.data)}else if(g.isDataArrayTexture)qe?(P&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,fe,G.width,G.height,G.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ie,xe,G.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,G.width,G.height,G.depth,0,ie,xe,G.data);else if(g.isData3DTexture)qe?(P&&t.texStorage3D(n.TEXTURE_3D,Ee,fe,G.width,G.height,G.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ie,xe,G.data)):t.texImage3D(n.TEXTURE_3D,0,fe,G.width,G.height,G.depth,0,ie,xe,G.data);else if(g.isFramebufferTexture){if(P)if(qe)t.texStorage2D(n.TEXTURE_2D,Ee,fe,G.width,G.height);else{let Y=G.width,pe=G.height;for(let ge=0;ge<Ee;ge++)t.texImage2D(n.TEXTURE_2D,ge,fe,Y,pe,0,ie,xe,null),Y>>=1,pe>>=1}}else if(Le.length>0&&R){qe&&P&&t.texStorage2D(n.TEXTURE_2D,Ee,fe,Le[0].width,Le[0].height);for(let Y=0,pe=Le.length;Y<pe;Y++)me=Le[Y],qe?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ie,xe,me):t.texImage2D(n.TEXTURE_2D,Y,fe,ie,xe,me);g.generateMipmaps=!1}else qe?(P&&t.texStorage2D(n.TEXTURE_2D,Ee,fe,G.width,G.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,xe,G)):t.texImage2D(n.TEXTURE_2D,0,fe,ie,xe,G);U(g,R)&&w(Q),_e.__version=te.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function nt(M,g,D){if(g.image.length!==6)return;const Q=we(M,g),ee=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const te=i.get(ee);if(ee.version!==te.__version||Q===!0){t.activeTexture(n.TEXTURE0+D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,G=[];for(let Y=0;Y<6;Y++)!_e&&!de?G[Y]=E(g.image[Y],!1,!0,c):G[Y]=de?g.image[Y].image:g.image[Y],G[Y]=Se(g,G[Y]);const R=G[0],ie=y(R)||o,xe=s.convert(g.format,g.colorSpace),fe=s.convert(g.type),me=J(g.internalFormat,xe,fe,g.colorSpace),Le=o&&g.isVideoTexture!==!0,qe=te.__version===void 0||Q===!0;let P=S(g,R,ie);Re(n.TEXTURE_CUBE_MAP,g,ie);let Ee;if(_e){Le&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,P,me,R.width,R.height);for(let Y=0;Y<6;Y++){Ee=G[Y].mipmaps;for(let pe=0;pe<Ee.length;pe++){const ge=Ee[pe];g.format!==Qt?xe!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,ge.width,ge.height,xe,fe,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,me,ge.width,ge.height,0,xe,fe,ge.data)}}}else{Ee=g.mipmaps,Le&&qe&&(Ee.length>0&&P++,t.texStorage2D(n.TEXTURE_CUBE_MAP,P,me,G[0].width,G[0].height));for(let Y=0;Y<6;Y++)if(de){Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,G[Y].width,G[Y].height,xe,fe,G[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,me,G[Y].width,G[Y].height,0,xe,fe,G[Y].data);for(let pe=0;pe<Ee.length;pe++){const We=Ee[pe].image[Y].image;Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,We.width,We.height,xe,fe,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,me,We.width,We.height,0,xe,fe,We.data)}}else{Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe,fe,G[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,me,xe,fe,G[Y]);for(let pe=0;pe<Ee.length;pe++){const ge=Ee[pe];Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,xe,fe,ge.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,me,xe,fe,ge.image[Y])}}}U(g,ie)&&w(n.TEXTURE_CUBE_MAP),te.__version=ee.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ie(M,g,D,Q,ee,te){const _e=s.convert(D.format,D.colorSpace),de=s.convert(D.type),G=J(D.internalFormat,_e,de,D.colorSpace);if(!i.get(g).__hasExternalTextures){const ie=Math.max(1,g.width>>te),xe=Math.max(1,g.height>>te);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,G,ie,xe,g.depth,0,_e,de,null):t.texImage2D(ee,te,G,ie,xe,0,_e,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),se(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,i.get(D).__webglTexture,0,K(g)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,i.get(D).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(M,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let Q=n.DEPTH_COMPONENT16;if(D||se(g)){const ee=g.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Hn?Q=n.DEPTH_COMPONENT32F:ee.type===zn&&(Q=n.DEPTH_COMPONENT24));const te=K(g);se(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,Q,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,Q,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const Q=K(g);D&&se(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,g.width,g.height):se(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const Q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ee=0;ee<Q.length;ee++){const te=Q[ee],_e=s.convert(te.format,te.colorSpace),de=s.convert(te.type),G=J(te.internalFormat,_e,de,te.colorSpace),R=K(g);D&&se(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,G,g.width,g.height):se(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,G,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,G,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ae(g.depthTexture,0);const Q=i.get(g.depthTexture).__webglTexture,ee=K(g);if(g.depthTexture.format===hi)se(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(g.depthTexture.format===nr)se(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function I(M){const g=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");L(g.__webglFramebuffer,M)}else if(D){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]=n.createRenderbuffer(),_(g.__webglDepthbuffer[Q],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),_(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(M,g,D){const Q=i.get(M);g!==void 0&&Ie(Q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&I(M)}function F(M){const g=M.texture,D=i.get(M),Q=i.get(g);M.addEventListener("dispose",he),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=g.version,a.memory.textures++);const ee=M.isWebGLCubeRenderTarget===!0,te=M.isWebGLMultipleRenderTargets===!0,_e=y(M)||o;if(ee){D.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[de]=[];for(let G=0;G<g.mipmaps.length;G++)D.__webglFramebuffer[de][G]=n.createFramebuffer()}else D.__webglFramebuffer[de]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)D.__webglFramebuffer[de]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const de=M.texture;for(let G=0,R=de.length;G<R;G++){const ie=i.get(de[G]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&se(M)===!1){const de=te?g:[g];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let G=0;G<de.length;G++){const R=de[G];D.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[G]);const ie=s.convert(R.format,R.colorSpace),xe=s.convert(R.type),fe=J(R.internalFormat,ie,xe,R.colorSpace,M.isXRRenderTarget===!0),me=K(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,fe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,D.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),_(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Re(n.TEXTURE_CUBE_MAP,g,_e);for(let de=0;de<6;de++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let G=0;G<g.mipmaps.length;G++)Ie(D.__webglFramebuffer[de][G],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,G);else Ie(D.__webglFramebuffer[de],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);U(g,_e)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const de=M.texture;for(let G=0,R=de.length;G<R;G++){const ie=de[G],xe=i.get(ie);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),Re(n.TEXTURE_2D,ie,_e),Ie(D.__webglFramebuffer,M,ie,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,0),U(ie,_e)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?de=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,Q.__webglTexture),Re(de,g,_e),o&&g.mipmaps&&g.mipmaps.length>0)for(let G=0;G<g.mipmaps.length;G++)Ie(D.__webglFramebuffer[G],M,g,n.COLOR_ATTACHMENT0,de,G);else Ie(D.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,de,0);U(g,_e)&&w(de),t.unbindTexture()}M.depthBuffer&&I(M)}function le(M){const g=y(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,ee=D.length;Q<ee;Q++){const te=D[Q];if(U(te,g)){const _e=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(te).__webglTexture;t.bindTexture(_e,de),w(_e),t.unbindTexture()}}}function oe(M){if(o&&M.samples>0&&se(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,Q=M.height;let ee=n.COLOR_BUFFER_BIT;const te=[],_e=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(M),G=M.isWebGLMultipleRenderTargets===!0;if(G)for(let R=0;R<g.length;R++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let R=0;R<g.length;R++){te.push(n.COLOR_ATTACHMENT0+R),M.depthBuffer&&te.push(_e);const ie=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ie===!1&&(M.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),G&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[R]),ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),G){const xe=i.get(g[R]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,D,Q,0,0,D,Q,ee,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let R=0;R<g.length;R++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,de.__webglColorRenderbuffer[R]);const ie=i.get(g[R]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function K(M){return Math.min(h,M.samples)}function se(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ne(M){const g=a.render.frame;x.get(M)!==g&&(x.set(M,g),M.update())}function Se(M,g){const D=M.colorSpace,Q=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===za||D!==fn&&D!==fi&&(D===et||D===Eo?o===!1?e.has("EXT_sRGB")===!0&&Q===Qt?(M.format=za,M.minFilter=Gt,M.generateMipmaps=!1):g=bd.sRGBToLinear(g):(Q!==Qt||ee!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=ae,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=Me,this.rebindTextures=H,this.setupRenderTarget=F,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=se}const wE=0,ct=1;function CE(n,e,t){const i=t.isWebGL2;function r(s,a=fi){let o;const l=a===et||a===Eo?ct:wE;if(s===Yn)return n.UNSIGNED_BYTE;if(s===gd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===_d)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Xg)return n.BYTE;if(s===Yg)return n.SHORT;if(s===Tl)return n.UNSIGNED_SHORT;if(s===md)return n.INT;if(s===zn)return n.UNSIGNED_INT;if(s===Hn)return n.FLOAT;if(s===rs)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qg)return n.ALPHA;if(s===Qt)return n.RGBA;if(s===jg)return n.LUMINANCE;if(s===Kg)return n.LUMINANCE_ALPHA;if(s===hi)return n.DEPTH_COMPONENT;if(s===nr)return n.DEPTH_STENCIL;if(s===za)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$g)return n.RED;if(s===vd)return n.RED_INTEGER;if(s===Zg)return n.RG;if(s===xd)return n.RG_INTEGER;if(s===Md)return n.RGBA_INTEGER;if(s===Go||s===Vo||s===ko||s===Wo)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Go)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ac||s===wc||s===Cc||s===Rc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ac)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lc||s===Pc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Lc)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Pc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dc||s===Uc||s===Ic||s===Nc||s===Oc||s===Fc||s===Bc||s===zc||s===Hc||s===Gc||s===Vc||s===kc||s===Wc||s===Xc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Dc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ic)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xo||s===Yc||s===qc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Xo)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qg||s===jc||s===Kc||s===$c)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Xo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===jc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ui?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class RE extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xs extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LE={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class PE extends Ut{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hi&&(i=zn),i===void 0&&u===nr&&(i=ui),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class DE extends _i{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,f=null;const T=[],E=[],y=new Vt;y.layers.enable(1),y.viewport=new ft;const C=new Vt;C.layers.enable(2),C.viewport=new ft;const U=[y,C],w=new RE;w.layers.enable(1),w.layers.enable(2);let J=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=T[z];return X===void 0&&(X=new fa,T[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=T[z];return X===void 0&&(X=new fa,T[z]=X),X.getGripSpace()},this.getHand=function(z){let X=T[z];return X===void 0&&(X=new fa,T[z]=X),X.getHandSpace()};function A(z){const X=E.indexOf(z.inputSource);if(X===-1)return;const Me=T[X];Me!==void 0&&(Me.update(z.inputSource,z.frame,c||a),Me.dispatchEvent({type:z.type,data:z.inputSource}))}function ce(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",he);for(let z=0;z<T.length;z++){const X=E[z];X!==null&&(E[z]=null,T[z].disconnect(X))}J=null,S=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,f=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",he),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:m}),f=new pi(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,Me=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?nr:hi,Me=v.stencil?ui:zn);const be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(be),r.updateRenderState({layers:[d]}),f=new pi(d.textureWidth,d.textureHeight,{format:Qt,type:Yn,depthTexture:new PE(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ae=e.properties.get(f);Ae.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function he(z){for(let X=0;X<z.removed.length;X++){const Me=z.removed[X],ye=E.indexOf(Me);ye>=0&&(E[ye]=null,T[ye].disconnect(Me))}for(let X=0;X<z.added.length;X++){const Me=z.added[X];let ye=E.indexOf(Me);if(ye===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=E.length){E.push(Me),ye=Ae;break}else if(E[Ae]===null){E[Ae]=Me,ye=Ae;break}if(ye===-1)break}const be=T[ye];be&&be.connect(Me)}}const V=new N,j=new N;function q(z,X,Me){V.setFromMatrixPosition(X.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);const ye=V.distanceTo(j),be=X.projectionMatrix.elements,Ae=Me.projectionMatrix.elements,Re=be[14]/(be[10]-1),we=be[14]/(be[10]+1),Fe=(be[9]+1)/be[5],nt=(be[9]-1)/be[5],Ie=(be[8]-1)/be[0],_=(Ae[8]+1)/Ae[0],L=Re*Ie,I=Re*_,H=ye/(-Ie+_),F=H*-Ie;X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(F),z.translateZ(H),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const le=Re+H,oe=we+H,K=L-F,se=I+(ye-F),ne=Fe*we/oe*le,Se=nt*we/oe*le;z.projectionMatrix.makePerspective(K,se,ne,Se,le,oe),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function re(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;w.near=C.near=y.near=z.near,w.far=C.far=y.far=z.far,(J!==w.near||S!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),J=w.near,S=w.far);const X=z.parent,Me=w.cameras;re(w,X);for(let ye=0;ye<Me.length;ye++)re(Me[ye],X);Me.length===2?q(w,y,C):w.projectionMatrix.copy(y.projectionMatrix),k(z,w,X)};function k(z,X,Me){Me===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(Me.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ss*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let W=null;function ue(z,X){if(u=X.getViewerPose(c||a),x=X,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ye=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let be=0;be<Me.length;be++){const Ae=Me[be];let Re=null;if(m!==null)Re=m.getViewport(Ae);else{const Fe=h.getViewSubImage(d,Ae);Re=Fe.viewport,be===0&&(e.setRenderTargetTextures(f,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(f))}let we=U[be];we===void 0&&(we=new Vt,we.layers.enable(be),we.viewport=new ft,U[be]=we),we.matrix.fromArray(Ae.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ae.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Re.x,Re.y,Re.width,Re.height),be===0&&(w.matrix.copy(we.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(we)}}for(let Me=0;Me<T.length;Me++){const ye=E[Me],be=T[Me];ye!==null&&be!==void 0&&be.update(ye,X,c||a)}W&&W(z,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),x=null}const ae=new Ud;ae.setAnimationLoop(ue),this.setAnimationLoop=function(z){W=z},this.dispose=function(){}}}function UE(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Ld(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,T,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),x(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,T,E):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Dt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Dt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=e.get(f).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=E*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IE(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,E){const y=E.program;i.uniformBlockBinding(T,y)}function c(T,E){let y=r[T.id];y===void 0&&(x(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",p));const C=E.program;i.updateUBOMapping(T,C);const U=e.render.frame;s[T.id]!==U&&(d(T),s[T.id]=U)}function u(T){const E=h();T.__bindingPointIndex=E;const y=n.createBuffer(),C=T.__size,U=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=r[T.id],y=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let U=0,w=y.length;U<w;U++){const J=y[U];if(m(J,U,C)===!0){const S=J.__offset,A=Array.isArray(J.value)?J.value:[J.value];let ce=0;for(let he=0;he<A.length;he++){const V=A[he],j=v(V);typeof V=="number"?(J.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,S+ce,J.__data)):V.isMatrix3?(J.__data[0]=V.elements[0],J.__data[1]=V.elements[1],J.__data[2]=V.elements[2],J.__data[3]=V.elements[0],J.__data[4]=V.elements[3],J.__data[5]=V.elements[4],J.__data[6]=V.elements[5],J.__data[7]=V.elements[0],J.__data[8]=V.elements[6],J.__data[9]=V.elements[7],J.__data[10]=V.elements[8],J.__data[11]=V.elements[0]):(V.toArray(J.__data,ce),ce+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,J.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,E,y){const C=T.value;if(y[E]===void 0){if(typeof C=="number")y[E]=C;else{const U=Array.isArray(C)?C:[C],w=[];for(let J=0;J<U.length;J++)w.push(U[J].clone());y[E]=w}return!0}else if(typeof C=="number"){if(y[E]!==C)return y[E]=C,!0}else{const U=Array.isArray(y[E])?y[E]:[y[E]],w=Array.isArray(C)?C:[C];for(let J=0;J<U.length;J++){const S=U[J];if(S.equals(w[J])===!1)return S.copy(w[J]),!0}}return!1}function x(T){const E=T.uniforms;let y=0;const C=16;let U=0;for(let w=0,J=E.length;w<J;w++){const S=E[w],A={boundary:0,storage:0},ce=Array.isArray(S.value)?S.value:[S.value];for(let he=0,V=ce.length;he<V;he++){const j=ce[he],q=v(j);A.boundary+=q.boundary,A.storage+=q.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,w>0){U=y%C;const he=C-U;U!==0&&he-A.boundary<0&&(y+=C-U,S.__offset=y)}y+=A.storage}return U=y%C,U>0&&(y+=C-U),T.__size=y,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function p(T){const E=T.target;E.removeEventListener("dispose",p);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class zd{constructor(e={}){const{canvas:t=w_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=et,this._useLegacyLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const E=this;let y=!1,C=0,U=0,w=null,J=-1,S=null;const A=new ft,ce=new ft;let he=null;const V=new ke(0);let j=0,q=t.width,re=t.height,k=1,W=null,ue=null;const ae=new ft(0,0,q,re),z=new ft(0,0,q,re);let X=!1;const Me=new Cl;let ye=!1,be=!1,Ae=null;const Re=new at,we=new Ne,Fe=new N,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return w===null?k:1}let _=i;function L(b,O){for(let $=0;$<b.length;$++){const B=b[$],Z=t.getContext(B,O);if(Z!==null)return Z}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",pe,!1),_===null){const O=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&O.shift(),_=L(O,b),_===null)throw L(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let I,H,F,le,oe,K,se,ne,Se,M,g,D,Q,ee,te,_e,de,G,R,ie,xe,fe,me,Le;function qe(){I=new W0(_),H=new B0(_,I,e),I.init(H),fe=new CE(_,I,H),F=new TE(_,I,H),le=new q0(_),oe=new hE,K=new AE(_,I,F,oe,H,fe,le),se=new H0(E),ne=new k0(E),Se=new iv(_,H),me=new O0(_,I,Se,H),M=new X0(_,Se,le,me),g=new Z0(_,M,Se,le),R=new $0(_,H,K),_e=new z0(oe),D=new uE(E,se,ne,I,H,me,_e),Q=new UE(E,oe),ee=new fE,te=new xE(I,H),G=new N0(E,se,ne,F,g,d,l),de=new bE(E,g,H),Le=new IE(_,le,H,F),ie=new F0(_,I,le,H),xe=new Y0(_,I,le,H),le.programs=D.programs,E.capabilities=H,E.extensions=I,E.properties=oe,E.renderLists=ee,E.shadowMap=de,E.state=F,E.info=le}qe();const P=new DE(E,_);this.xr=P,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const b=I.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=I.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(q,re,!1))},this.getSize=function(b){return b.set(q,re)},this.setSize=function(b,O,$=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,re=O,t.width=Math.floor(b*k),t.height=Math.floor(O*k),$===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(q*k,re*k).floor()},this.setDrawingBufferSize=function(b,O,$){q=b,re=O,k=$,t.width=Math.floor(b*$),t.height=Math.floor(O*$),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,O,$,B){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,O,$,B),F.viewport(A.copy(ae).multiplyScalar(k).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,O,$,B){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,O,$,B),F.scissor(ce.copy(z).multiplyScalar(k).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(b){F.setScissorTest(X=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(b=!0,O=!0,$=!0){let B=0;if(b){let Z=!1;if(w!==null){const Te=w.texture.format;Z=Te===Md||Te===xd||Te===vd}if(Z){const Te=w.texture.type,Ce=Te===Yn||Te===zn||Te===Tl||Te===ui||Te===gd||Te===_d,De=G.getClearColor(),Ue=G.getClearAlpha(),Xe=De.r,Pe=De.g,Be=De.b;Ce?(m[0]=Xe,m[1]=Pe,m[2]=Be,m[3]=Ue,_.clearBufferuiv(_.COLOR,0,m)):(x[0]=Xe,x[1]=Pe,x[2]=Be,x[3]=Ue,_.clearBufferiv(_.COLOR,0,x))}else B|=_.COLOR_BUFFER_BIT}O&&(B|=_.DEPTH_BUFFER_BIT),$&&(B|=_.STENCIL_BUFFER_BIT),_.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ee.dispose(),te.dispose(),oe.dispose(),se.dispose(),ne.dispose(),g.dispose(),me.dispose(),Le.dispose(),D.dispose(),P.dispose(),P.removeEventListener("sessionstart",Je),P.removeEventListener("sessionend",sn),Ae&&(Ae.dispose(),Ae=null),yt.stop()};function Ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=le.autoReset,O=de.enabled,$=de.autoUpdate,B=de.needsUpdate,Z=de.type;qe(),le.autoReset=b,de.enabled=O,de.autoUpdate=$,de.needsUpdate=B,de.type=Z}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ge(b){const O=b.target;O.removeEventListener("dispose",ge),We(O)}function We(b){Ke(b),oe.remove(b)}function Ke(b){const O=oe.get(b).programs;O!==void 0&&(O.forEach(function($){D.releaseProgram($)}),b.isShaderMaterial&&D.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,$,B,Z,Te){O===null&&(O=nt);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,De=kd(b,O,$,B,Z);F.setMaterial(B,Ce);let Ue=$.index,Xe=1;if(B.wireframe===!0){if(Ue=M.getWireframeAttribute($),Ue===void 0)return;Xe=2}const Pe=$.drawRange,Be=$.attributes.position;let tt=Pe.start*Xe,it=(Pe.start+Pe.count)*Xe;Te!==null&&(tt=Math.max(tt,Te.start*Xe),it=Math.min(it,(Te.start+Te.count)*Xe)),Ue!==null?(tt=Math.max(tt,0),it=Math.min(it,Ue.count)):Be!=null&&(tt=Math.max(tt,0),it=Math.min(it,Be.count));const zt=it-tt;if(zt<0||zt===1/0)return;me.setup(Z,B,De,$,Ue);let mn,rt=ie;if(Ue!==null&&(mn=Se.get(Ue),rt=xe,rt.setIndex(mn)),Z.isMesh)B.wireframe===!0?(F.setLineWidth(B.wireframeLinewidth*Ie()),rt.setMode(_.LINES)):rt.setMode(_.TRIANGLES);else if(Z.isLine){let Ye=B.linewidth;Ye===void 0&&(Ye=1),F.setLineWidth(Ye*Ie()),Z.isLineSegments?rt.setMode(_.LINES):Z.isLineLoop?rt.setMode(_.LINE_LOOP):rt.setMode(_.LINE_STRIP)}else Z.isPoints?rt.setMode(_.POINTS):Z.isSprite&&rt.setMode(_.TRIANGLES);if(Z.isInstancedMesh)rt.renderInstances(tt,zt,Z.count);else if($.isInstancedBufferGeometry){const Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wo=Math.min($.instanceCount,Ye);rt.renderInstances(tt,zt,wo)}else rt.render(tt,zt)},this.compile=function(b,O){function $(B,Z,Te){B.transparent===!0&&B.side===un&&B.forceSinglePass===!1?(B.side=Dt,B.needsUpdate=!0,fs(B,Z,Te),B.side=jn,B.needsUpdate=!0,fs(B,Z,Te),B.side=un):fs(B,Z,Te)}p=te.get(b),p.init(),T.push(p),b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(E._useLegacyLights),b.traverse(function(B){const Z=B.material;if(Z)if(Array.isArray(Z))for(let Te=0;Te<Z.length;Te++){const Ce=Z[Te];$(Ce,b,B)}else $(Z,b,B)}),T.pop(),p=null};let Ze=null;function Nt(b){Ze&&Ze(b)}function Je(){yt.stop()}function sn(){yt.start()}const yt=new Ud;yt.setAnimationLoop(Nt),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(b){Ze=b,P.setAnimationLoop(b),b===null?yt.stop():yt.start()},P.addEventListener("sessionstart",Je),P.addEventListener("sessionend",sn),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,O,w),p=te.get(b,T.length),p.init(),T.push(p),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Me.setFromProjectionMatrix(Re),be=this.localClippingEnabled,ye=_e.init(this.clippingPlanes,be),v=ee.get(b,f.length),v.init(),f.push(v),Dl(b,O,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(W,ue),this.info.render.frame++,ye===!0&&_e.beginShadows();const $=p.state.shadowsArray;if(de.render($,b,O),ye===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(v,b),p.setupLights(E._useLegacyLights),O.isArrayCamera){const B=O.cameras;for(let Z=0,Te=B.length;Z<Te;Z++){const Ce=B[Z];Ul(v,b,Ce,Ce.viewport)}}else Ul(v,b,O);w!==null&&(K.updateMultisampleRenderTarget(w),K.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(E,b,O),me.resetDefaultState(),J=-1,S=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Dl(b,O,$,B){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Me.intersectsSprite(b)){B&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);const Ce=g.update(b),De=b.material;De.visible&&v.push(b,Ce,De,$,Fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Me.intersectsObject(b))){const Ce=g.update(b),De=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Fe.copy(Ce.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(De)){const Ue=Ce.groups;for(let Xe=0,Pe=Ue.length;Xe<Pe;Xe++){const Be=Ue[Xe],tt=De[Be.materialIndex];tt&&tt.visible&&v.push(b,Ce,tt,$,Fe.z,Be)}}else De.visible&&v.push(b,Ce,De,$,Fe.z,null)}}const Te=b.children;for(let Ce=0,De=Te.length;Ce<De;Ce++)Dl(Te[Ce],O,$,B)}function Ul(b,O,$,B){const Z=b.opaque,Te=b.transmissive,Ce=b.transparent;p.setupLightsView($),ye===!0&&_e.setGlobalState(E.clippingPlanes,$),Te.length>0&&Vd(Z,Te,O,$),B&&F.viewport(A.copy(B)),Z.length>0&&ds(Z,O,$),Te.length>0&&ds(Te,O,$),Ce.length>0&&ds(Ce,O,$),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Vd(b,O,$,B){const Z=H.isWebGL2;Ae===null&&(Ae=new pi(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?rs:Yn,minFilter:is,samples:Z?4:0})),E.getDrawingBufferSize(we),Z?Ae.setSize(we.x,we.y):Ae.setSize(oo(we.x),oo(we.y));const Te=E.getRenderTarget();E.setRenderTarget(Ae),E.getClearColor(V),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear();const Ce=E.toneMapping;E.toneMapping=Xn,ds(b,$,B),K.updateMultisampleRenderTarget(Ae),K.updateRenderTargetMipmap(Ae);let De=!1;for(let Ue=0,Xe=O.length;Ue<Xe;Ue++){const Pe=O[Ue],Be=Pe.object,tt=Pe.geometry,it=Pe.material,zt=Pe.group;if(it.side===un&&Be.layers.test(B.layers)){const mn=it.side;it.side=Dt,it.needsUpdate=!0,Il(Be,$,B,tt,it,zt),it.side=mn,it.needsUpdate=!0,De=!0}}De===!0&&(K.updateMultisampleRenderTarget(Ae),K.updateRenderTargetMipmap(Ae)),E.setRenderTarget(Te),E.setClearColor(V,j),E.toneMapping=Ce}function ds(b,O,$){const B=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Te=b.length;Z<Te;Z++){const Ce=b[Z],De=Ce.object,Ue=Ce.geometry,Xe=B===null?Ce.material:B,Pe=Ce.group;De.layers.test($.layers)&&Il(De,O,$,Ue,Xe,Pe)}}function Il(b,O,$,B,Z,Te){b.onBeforeRender(E,O,$,B,Z,Te),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(E,O,$,B,b,Te),Z.transparent===!0&&Z.side===un&&Z.forceSinglePass===!1?(Z.side=Dt,Z.needsUpdate=!0,E.renderBufferDirect($,O,B,Z,b,Te),Z.side=jn,Z.needsUpdate=!0,E.renderBufferDirect($,O,B,Z,b,Te),Z.side=un):E.renderBufferDirect($,O,B,Z,b,Te),b.onAfterRender(E,O,$,B,Z,Te)}function fs(b,O,$){O.isScene!==!0&&(O=nt);const B=oe.get(b),Z=p.state.lights,Te=p.state.shadowsArray,Ce=Z.state.version,De=D.getParameters(b,Z.state,Te,O,$),Ue=D.getProgramCacheKey(De);let Xe=B.programs;B.environment=b.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(b.isMeshStandardMaterial?ne:se).get(b.envMap||B.environment),Xe===void 0&&(b.addEventListener("dispose",ge),Xe=new Map,B.programs=Xe);let Pe=Xe.get(Ue);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===Ce)return Nl(b,De),Pe}else De.uniforms=D.getUniforms(b),b.onBuild($,De,E),b.onBeforeCompile(De,E),Pe=D.acquireProgram(De,Ue),Xe.set(Ue,Pe),B.uniforms=De.uniforms;const Be=B.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=_e.uniform),Nl(b,De),B.needsLights=Xd(b),B.lightsStateVersion=Ce,B.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.directionalShadowMap.value=Z.state.directionalShadowMap,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotShadowMap.value=Z.state.spotShadowMap,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMap.value=Z.state.pointShadowMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix);const tt=Pe.getUniforms(),it=Qs.seqWithValue(tt.seq,Be);return B.currentProgram=Pe,B.uniformsList=it,Pe}function Nl(b,O){const $=oe.get(b);$.outputColorSpace=O.outputColorSpace,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function kd(b,O,$,B,Z){O.isScene!==!0&&(O=nt),K.resetTextureUnits();const Te=O.fog,Ce=B.isMeshStandardMaterial?O.environment:null,De=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:fn,Ue=(B.isMeshStandardMaterial?ne:se).get(B.envMap||Ce),Xe=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Pe=!!$.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Be=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,it=!!$.morphAttributes.color;let zt=Xn;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(zt=E.toneMapping);const mn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rt=mn!==void 0?mn.length:0,Ye=oe.get(B),wo=p.state.lights;if(ye===!0&&(be===!0||b!==S)){const Ot=b===S&&B.id===J;_e.setState(B,b,Ot)}let st=!1;B.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==wo.state.version||Ye.outputColorSpace!==De||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Ye.envMap!==Ue||B.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==_e.numPlanes||Ye.numIntersection!==_e.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==Pe||Ye.morphTargets!==Be||Ye.morphNormals!==tt||Ye.morphColors!==it||Ye.toneMapping!==zt||H.isWebGL2===!0&&Ye.morphTargetsCount!==rt)&&(st=!0):(st=!0,Ye.__version=B.version);let Kn=Ye.currentProgram;st===!0&&(Kn=fs(B,O,Z));let Ol=!1,fr=!1,Co=!1;const bt=Kn.getUniforms(),$n=Ye.uniforms;if(F.useProgram(Kn.program)&&(Ol=!0,fr=!0,Co=!0),B.id!==J&&(J=B.id,fr=!0),Ol||S!==b){bt.setValue(_,"projectionMatrix",b.projectionMatrix),bt.setValue(_,"viewMatrix",b.matrixWorldInverse);const Ot=bt.map.cameraPosition;Ot!==void 0&&Ot.setValue(_,Fe.setFromMatrixPosition(b.matrixWorld)),H.logarithmicDepthBuffer&&bt.setValue(_,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&bt.setValue(_,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,fr=!0,Co=!0)}if(Z.isSkinnedMesh){bt.setOptional(_,Z,"bindMatrix"),bt.setOptional(_,Z,"bindMatrixInverse");const Ot=Z.skeleton;Ot&&(H.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),bt.setValue(_,"boneTexture",Ot.boneTexture,K),bt.setValue(_,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ro=$.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&H.isWebGL2===!0)&&R.update(Z,$,Kn),(fr||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,bt.setValue(_,"receiveShadow",Z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($n.envMap.value=Ue,$n.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),fr&&(bt.setValue(_,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&Wd($n,Co),Te&&B.fog===!0&&Q.refreshFogUniforms($n,Te),Q.refreshMaterialUniforms($n,B,k,re,Ae),Qs.upload(_,Ye.uniformsList,$n,K)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qs.upload(_,Ye.uniformsList,$n,K),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&bt.setValue(_,"center",Z.center),bt.setValue(_,"modelViewMatrix",Z.modelViewMatrix),bt.setValue(_,"normalMatrix",Z.normalMatrix),bt.setValue(_,"modelMatrix",Z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ot=B.uniformsGroups;for(let Lo=0,Yd=Ot.length;Lo<Yd;Lo++)if(H.isWebGL2){const Fl=Ot[Lo];Le.update(Fl,Kn),Le.bind(Fl,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function Wd(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Xd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,O,$){oe.get(b.texture).__webglTexture=O,oe.get(b.depthTexture).__webglTexture=$;const B=oe.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=$===void 0,B.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const $=oe.get(b);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,$=0){w=b,C=O,U=$;let B=!0,Z=null,Te=!1,Ce=!1;if(b){const Ue=oe.get(b);Ue.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(_.FRAMEBUFFER,null),B=!1):Ue.__webglFramebuffer===void 0?K.setupRenderTarget(b):Ue.__hasExternalTextures&&K.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);const Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Pe=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?Z=Pe[O][$]:Z=Pe[O],Te=!0):H.isWebGL2&&b.samples>0&&K.useMultisampledRTT(b)===!1?Z=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?Z=Pe[$]:Z=Pe,A.copy(b.viewport),ce.copy(b.scissor),he=b.scissorTest}else A.copy(ae).multiplyScalar(k).floor(),ce.copy(z).multiplyScalar(k).floor(),he=X;if(F.bindFramebuffer(_.FRAMEBUFFER,Z)&&H.drawBuffers&&B&&F.drawBuffers(b,Z),F.viewport(A),F.scissor(ce),F.setScissorTest(he),Te){const Ue=oe.get(b.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,$)}else if(Ce){const Ue=oe.get(b.texture),Xe=O||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ue.__webglTexture,$||0,Xe)}J=-1},this.readRenderTargetPixels=function(b,O,$,B,Z,Te,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){F.bindFramebuffer(_.FRAMEBUFFER,De);try{const Ue=b.texture,Xe=Ue.format,Pe=Ue.type;if(Xe!==Qt&&fe.convert(Xe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Pe===rs&&(I.has("EXT_color_buffer_half_float")||H.isWebGL2&&I.has("EXT_color_buffer_float"));if(Pe!==Yn&&fe.convert(Pe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Hn&&(H.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-B&&$>=0&&$<=b.height-Z&&_.readPixels(O,$,B,Z,fe.convert(Xe),fe.convert(Pe),Te)}finally{const Ue=w!==null?oe.get(w).__webglFramebuffer:null;F.bindFramebuffer(_.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(b,O,$=0){const B=Math.pow(2,-$),Z=Math.floor(O.image.width*B),Te=Math.floor(O.image.height*B);K.setTexture2D(O,0),_.copyTexSubImage2D(_.TEXTURE_2D,$,0,0,b.x,b.y,Z,Te),F.unbindTexture()},this.copyTextureToTexture=function(b,O,$,B=0){const Z=O.image.width,Te=O.image.height,Ce=fe.convert($.format),De=fe.convert($.type);K.setTexture2D($,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,$.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,$.unpackAlignment),O.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,B,b.x,b.y,Z,Te,Ce,De,O.image.data):O.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,B,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,B,b.x,b.y,Ce,De,O.image),B===0&&$.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,O,$,B,Z=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=b.max.x-b.min.x+1,Ce=b.max.y-b.min.y+1,De=b.max.z-b.min.z+1,Ue=fe.convert(B.format),Xe=fe.convert(B.type);let Pe;if(B.isData3DTexture)K.setTexture3D(B,0),Pe=_.TEXTURE_3D;else if(B.isDataArrayTexture)K.setTexture2DArray(B,0),Pe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,B.unpackAlignment);const Be=_.getParameter(_.UNPACK_ROW_LENGTH),tt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),it=_.getParameter(_.UNPACK_SKIP_PIXELS),zt=_.getParameter(_.UNPACK_SKIP_ROWS),mn=_.getParameter(_.UNPACK_SKIP_IMAGES),rt=$.isCompressedTexture?$.mipmaps[0]:$.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,rt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,rt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,b.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,b.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,b.min.z),$.isDataTexture||$.isData3DTexture?_.texSubImage3D(Pe,Z,O.x,O.y,O.z,Te,Ce,De,Ue,Xe,rt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Pe,Z,O.x,O.y,O.z,Te,Ce,De,Ue,rt.data)):_.texSubImage3D(Pe,Z,O.x,O.y,O.z,Te,Ce,De,Ue,Xe,rt),_.pixelStorei(_.UNPACK_ROW_LENGTH,Be),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,tt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,it),_.pixelStorei(_.UNPACK_SKIP_ROWS,zt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,mn),Z===0&&B.generateMipmaps&&_.generateMipmap(Pe),F.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){C=0,U=0,w=null,F.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===et?di:Ed}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===di?et:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NE extends zd{}NE.prototype.isWebGL1Renderer=!0;class Ll{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new Ll(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class OE extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Hd extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ou=new N,Fu=new N,Bu=new at,pa=new yo,Ys=new So;class FE extends gt{constructor(e=new Cn,t=new Hd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ou.fromBufferAttribute(t,r-1),Fu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ou.distanceTo(Fu);e.setAttribute("lineDistance",new Wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(r),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;Bu.copy(r).invert(),pa.copy(e.ray).applyMatrix4(Bu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,h=new N,d=new N,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const f=Math.max(0,a.start),T=Math.min(x.count,a.start+a.count);for(let E=f,y=T-1;E<y;E+=m){const C=x.getX(E),U=x.getX(E+1);if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,U),pa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(d);J<e.near||J>e.far||t.push({distance:J,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),T=Math.min(p.count,a.start+a.count);for(let E=f,y=T-1;E<y;E+=m){if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,E+1),pa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const zu=new N,Hu=new N;class BE extends FE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)zu.fromBufferAttribute(t,r),Hu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zu.distanceTo(Hu);e.setAttribute("lineDistance",new Wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zE extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Gu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class HE{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const GE=new HE;class Pl{constructor(e){this.manager=e!==void 0?e:GE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";class VE extends Pl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Gu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=os("img");function l(){u(),Gu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class kE extends Pl{constructor(e){super(e)}load(e,t,i,r){const s=new Ut,a=new VE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Gd extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ma=new at,Vu=new N,ku=new N;class WE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class XE extends WE{constructor(){super(new Id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YE extends Gd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new XE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qE extends Gd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class jE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wu(){return(typeof performance>"u"?Date:performance).now()}class KE{constructor(e,t,i=0,r=1/0){this.ray=new yo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Va(e,this,i,t),i.sort(Xu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Va(e[r],this,i,t);return i.sort(Xu),i}}function Xu(n,e){return n.distance-e.distance}function Va(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Va(r[s],e,t,!0)}}class Yu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $E extends BE{constructor(e=10,t=10,i=4473924,r=8947848){i=new ke(i),r=new ke(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,x=-o;d<=t;d++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const v=d===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Cn;u.setAttribute("position",new Wt(l,3)),u.setAttribute("color",new Wt(c,3));const h=new Hd({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);const qu={type:"change"},ga={type:"start"},ju={type:"end"},qs=new yo,Ku=new Fn,ZE=Math.cos(70*A_.DEG2RAD);class JE extends _i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",g),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(qu),i.update(),s=r.NONE},this.update=function(){const R=new N,ie=new mi().setFromUnitVectors(e.up,new N(0,1,0)),xe=ie.clone().invert(),fe=new N,me=new mi,Le=new N,qe=2*Math.PI;return function(Ee=null){const Y=i.object.position;R.copy(Y).sub(i.target),R.applyQuaternion(ie),o.setFromVector3(R),i.autoRotate&&s===r.NONE&&ce(S(Ee)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let pe=i.minAzimuthAngle,ge=i.maxAzimuthAngle;isFinite(pe)&&isFinite(ge)&&(pe<-Math.PI?pe+=qe:pe>Math.PI&&(pe-=qe),ge<-Math.PI?ge+=qe:ge>Math.PI&&(ge-=qe),pe<=ge?o.theta=Math.max(pe,Math.min(ge,o.theta)):o.theta=o.theta>(pe+ge)/2?Math.max(pe,o.theta):Math.min(ge,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&U||i.object.isOrthographicCamera?o.radius=ue(o.radius):o.radius=ue(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(xe),Y.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let We=!1;if(i.zoomToCursor&&U){let Ke=null;if(i.object.isPerspectiveCamera){const Ze=R.length();Ke=ue(Ze*c);const Nt=Ze-Ke;i.object.position.addScaledVector(y,Nt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ze=new N(C.x,C.y,0);Ze.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),We=!0;const Nt=new N(C.x,C.y,0);Nt.unproject(i.object),i.object.position.sub(Nt).add(Ze),i.object.updateMatrixWorld(),Ke=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ke).add(i.object.position):(qs.origin.copy(i.object.position),qs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(qs.direction))<ZE?e.lookAt(i.target):(Ku.setFromNormalAndCoplanarPoint(i.object.up,i.target),qs.intersectPlane(Ku,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),We=!0);return c=1,U=!1,We||fe.distanceToSquared(i.object.position)>a||8*(1-me.dot(i.object.quaternion))>a||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(qu),fe.copy(i.object.position),me.copy(i.object.quaternion),Le.copy(i.target),We=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",oe),i.domElement.removeEventListener("pointercancel",se),i.domElement.removeEventListener("wheel",M),i.domElement.removeEventListener("pointermove",K),i.domElement.removeEventListener("pointerup",se),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",g),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Yu,l=new Yu;let c=1;const u=new N,h=new Ne,d=new Ne,m=new Ne,x=new Ne,v=new Ne,p=new Ne,f=new Ne,T=new Ne,E=new Ne,y=new N,C=new Ne;let U=!1;const w=[],J={};function S(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function ce(R){l.theta-=R}function he(R){l.phi-=R}const V=function(){const R=new N;return function(xe,fe){R.setFromMatrixColumn(fe,0),R.multiplyScalar(-xe),u.add(R)}}(),j=function(){const R=new N;return function(xe,fe){i.screenSpacePanning===!0?R.setFromMatrixColumn(fe,1):(R.setFromMatrixColumn(fe,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(xe),u.add(R)}}(),q=function(){const R=new N;return function(xe,fe){const me=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;R.copy(Le).sub(i.target);let qe=R.length();qe*=Math.tan(i.object.fov/2*Math.PI/180),V(2*xe*qe/me.clientHeight,i.object.matrix),j(2*fe*qe/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(xe*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),j(fe*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function re(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(R){if(!i.zoomToCursor)return;U=!0;const ie=i.domElement.getBoundingClientRect(),xe=R.clientX-ie.left,fe=R.clientY-ie.top,me=ie.width,Le=ie.height;C.x=xe/me*2-1,C.y=-(fe/Le)*2+1,y.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function ue(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function ae(R){h.set(R.clientX,R.clientY)}function z(R){W(R),f.set(R.clientX,R.clientY)}function X(R){x.set(R.clientX,R.clientY)}function Me(R){d.set(R.clientX,R.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ie=i.domElement;ce(2*Math.PI*m.x/ie.clientHeight),he(2*Math.PI*m.y/ie.clientHeight),h.copy(d),i.update()}function ye(R){T.set(R.clientX,R.clientY),E.subVectors(T,f),E.y>0?re(A()):E.y<0&&k(A()),f.copy(T),i.update()}function be(R){v.set(R.clientX,R.clientY),p.subVectors(v,x).multiplyScalar(i.panSpeed),q(p.x,p.y),x.copy(v),i.update()}function Ae(R){W(R),R.deltaY<0?k(A()):R.deltaY>0&&re(A()),i.update()}function Re(R){let ie=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?he(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?he(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?ce(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?ce(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),ie=!0;break}ie&&(R.preventDefault(),i.update())}function we(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const R=.5*(w[0].pageX+w[1].pageX),ie=.5*(w[0].pageY+w[1].pageY);h.set(R,ie)}}function Fe(){if(w.length===1)x.set(w[0].pageX,w[0].pageY);else{const R=.5*(w[0].pageX+w[1].pageX),ie=.5*(w[0].pageY+w[1].pageY);x.set(R,ie)}}function nt(){const R=w[0].pageX-w[1].pageX,ie=w[0].pageY-w[1].pageY,xe=Math.sqrt(R*R+ie*ie);f.set(0,xe)}function Ie(){i.enableZoom&&nt(),i.enablePan&&Fe()}function _(){i.enableZoom&&nt(),i.enableRotate&&we()}function L(R){if(w.length==1)d.set(R.pageX,R.pageY);else{const xe=G(R),fe=.5*(R.pageX+xe.x),me=.5*(R.pageY+xe.y);d.set(fe,me)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ie=i.domElement;ce(2*Math.PI*m.x/ie.clientHeight),he(2*Math.PI*m.y/ie.clientHeight),h.copy(d)}function I(R){if(w.length===1)v.set(R.pageX,R.pageY);else{const ie=G(R),xe=.5*(R.pageX+ie.x),fe=.5*(R.pageY+ie.y);v.set(xe,fe)}p.subVectors(v,x).multiplyScalar(i.panSpeed),q(p.x,p.y),x.copy(v)}function H(R){const ie=G(R),xe=R.pageX-ie.x,fe=R.pageY-ie.y,me=Math.sqrt(xe*xe+fe*fe);T.set(0,me),E.set(0,Math.pow(T.y/f.y,i.zoomSpeed)),re(E.y),f.copy(T)}function F(R){i.enableZoom&&H(R),i.enablePan&&I(R)}function le(R){i.enableZoom&&H(R),i.enableRotate&&L(R)}function oe(R){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",K),i.domElement.addEventListener("pointerup",se)),te(R),R.pointerType==="touch"?D(R):ne(R))}function K(R){i.enabled!==!1&&(R.pointerType==="touch"?Q(R):Se(R))}function se(R){_e(R),w.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",K),i.domElement.removeEventListener("pointerup",se)),i.dispatchEvent(ju),s=r.NONE}function ne(R){let ie;switch(R.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case yi.DOLLY:if(i.enableZoom===!1)return;z(R),s=r.DOLLY;break;case yi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;X(R),s=r.PAN}else{if(i.enableRotate===!1)return;ae(R),s=r.ROTATE}break;case yi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;ae(R),s=r.ROTATE}else{if(i.enablePan===!1)return;X(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ga)}function Se(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Me(R);break;case r.DOLLY:if(i.enableZoom===!1)return;ye(R);break;case r.PAN:if(i.enablePan===!1)return;be(R);break}}function M(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(ga),Ae(R),i.dispatchEvent(ju))}function g(R){i.enabled===!1||i.enablePan===!1||Re(R)}function D(R){switch(de(R),w.length){case 1:switch(i.touches.ONE){case bi.ROTATE:if(i.enableRotate===!1)return;we(),s=r.TOUCH_ROTATE;break;case bi.PAN:if(i.enablePan===!1)return;Fe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(),s=r.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ga)}function Q(R){switch(de(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;L(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;I(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;le(R),i.update();break;default:s=r.NONE}}function ee(R){i.enabled!==!1&&R.preventDefault()}function te(R){w.push(R)}function _e(R){delete J[R.pointerId];for(let ie=0;ie<w.length;ie++)if(w[ie].pointerId==R.pointerId){w.splice(ie,1);return}}function de(R){let ie=J[R.pointerId];ie===void 0&&(ie=new Ne,J[R.pointerId]=ie),ie.set(R.pageX,R.pageY)}function G(R){const ie=R.pointerId===w[0].pointerId?w[1]:w[0];return J[ie.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",oe),i.domElement.addEventListener("pointercancel",se),i.domElement.addEventListener("wheel",M,{passive:!1}),this.update()}}class QE{constructor(e,t){ze(this,"controls");this.controls=new JE(e,t)}init(){return this.controls.enabled=!0,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=1,this.controls.enableDamping=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls}tick(e){this.controls.update()}}class eS{constructor(e){ze(this,"camera");ze(this,"pos");this.pos=e}init(){return this.camera=new Vt(80,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.set(this.pos.x,this.pos.y,this.pos.z),this.camera.lookAt(0,0,0),this.camera}tick(e){}}class tS{constructor(){}init(e,t,i){const r=new YE(t,1.5);r.position.set(0,0,5),e.add(r);const s=new qE(i,.7);s.position.set(-2,0,5),e.add(s)}tick(e){}}class nS{constructor(e,t,i){ze(this,"clock");ze(this,"camera");ze(this,"scene");ze(this,"renderer");ze(this,"updatables");this.clock=new jE,this.camera=e,this.scene=t,this.renderer=i,this.updatables=[]}addToUpdate(e){this.updatables.push(e)}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(e){e||(e=this.clock.getDelta());for(const t of this.updatables)t.tick(e)}}class iS{constructor(){ze(this,"scene");this.scene=new OE}init(e){return this.scene.background=new ke(e),this.scene.fog=new Ll(e,50,90),this.scene}addMesh(e){if(!e){console.log("Mesh is null or undifined and will not be added to the scene!");return}if(e instanceof Lt){this.scene.add(e);return}console.log("This parameter is not a Mesh and will not be added to the scene!")}}class rS{constructor(e,t){this.setSize(e,t),window.addEventListener("resize",()=>{this.setSize(e,t)})}setSize(e,t){e.aspect=window.innerWidth/window.innerHeight*.5,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)}}class sS{constructor(e,t){ze(this,"gridHelper");ze(this,"size");ze(this,"divisions");this.size=e,this.divisions=t}init(e){this.gridHelper=new $E(this.size,this.divisions),e.add(this.gridHelper)}}class oS extends Lt{constructor(t,i,r,s){super();ze(this,"dim");ze(this,"seg");ze(this,"pos");ze(this,"mesh");this.name=t,this.dim=i,this.seg=r,this.pos=s}initMesh(t,i){this.geometry=new hs(this.dim.x,this.dim.y,this.seg.x,this.seg.y),this.geometry.rotateX(-Math.PI/2),this.material=new To({color:i||new ke(16711680),visible:t}),this.mesh=new Lt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(t){}}var Bn;(n=>{const e="studioMFB",t="atelierFrancois",i="src/components/modelViewer/textures/terrains";async function r(){const u=await fetch("https://api.github.com/rate_limit",{method:"GET",headers:{"User-Agent":e}});let h="";return u.ok?(h=await u.json(),console.log("Rate limit ",h)):console.error(u.status,u.statusText),h}n.getRateLimit=r;async function s(c,u,h){const d=`https://api.github.com/repos/${e}/${t}/contents/${i}/${c}/${u}/${h}.png`,m=await fetch(d,{method:"GET",headers:{"User-Agent":e}});let x="";if(m.ok){const p=(await m.json()).content;if(p){const f=await l(p,"image/png");f&&(x=URL.createObjectURL(f))}}else console.error(m.status+m.statusText);return x}n.getSingleTextureUrl=s;async function a(c,u){const h=`https://api.github.com/repos/${e}/${t}/contents/${i}/${c}/${u}`,d=await fetch(h,{method:"GET",headers:{"User-Agent":e}}),m=[];if(d.ok){const x=await d.json();for(let v=0;v<x.length;++v){const p=x[v],f=await o(p.sha);if(f){const T=await l(f,"image/png");if(T){const E=URL.createObjectURL(T);m.push(E)}}}}else console.error(d.status+d.statusText);return m}n.getallTexturesUrl=a;async function o(c){const u=`https://api.github.com/repos/${e}/${t}/git/blobs/${c}`,h=await fetch(u,{method:"GET",headers:{"User-Agent":e}});let d="";return h.ok?d=(await h.json()).content:console.error(h.status+h.statusText),d}n.getFileContent=o;async function l(c,u="image/png",h=512){try{const d=atob(c),m=[];for(let v=0;v<d.length;v+=h){const p=d.slice(v,v+h),f=new Array(p.length);for(let E=0;E<p.length;E++)f[E]=p.charCodeAt(E);const T=new Uint8Array(f);m.push(T)}return new Blob(m,{type:u})}catch(d){console.log(d)}}n.b64toBlob=l})(Bn||(Bn={}));class aS extends Lt{constructor(t,i,r,s){super();ze(this,"dim");ze(this,"seg");ze(this,"pos");ze(this,"mesh");this.name=t,this.dim=i,this.seg=r,this.pos=s}async initMesh(t,i){await Bn.getRateLimit();const r=await Bn.getSingleTextureUrl(t,i,"ao"),s=await Bn.getSingleTextureUrl(t,i,"bump"),a=await Bn.getSingleTextureUrl(t,i,"normal"),o=await Bn.getSingleTextureUrl(t,i,"displacement"),l=await Bn.getSingleTextureUrl(t,i,"diffuse"),c=new kE,u=c.load(r),h=c.load(s),d=c.load(a),m=c.load(o),x=c.load(l);this.geometry=new hr(this.dim.x,this.dim.y,this.dim.z,this.seg.x,this.seg.y,this.seg.z);const v=this.geometry.attributes.position,p=this.geometry.attributes.normal,f=[];for(let T=0;T<v.count;T++){f.push(Math.sign(v.getY(T)),Math.sign(p.getY(T)));const E=(v.getX(T)+this.dim.x*.5)/this.dim.x,y=1-(v.getZ(T)+this.dim.z*.5)/this.dim.z;this.geometry.attributes.uv.setXY(T,E,y)}this.geometry.setAttribute("enableDisp",new Wt(f,2)),this.material=new zE({aoMap:u,normalMap:d,bumpMap:h,bumpScale:.5,displacementMap:m,displacementScale:1.5,map:x,side:un}),this.material.onBeforeCompile=T=>{T.vertexShader=`
            attribute vec2 enableDisp;
            varying vec2 vUv; 
            varying vec3 mNormal;
            varying vec3 vPos;
            ${T.vertexShader}
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
            `),T.fragmentShader=`

        varying vec2 vUv;
        varying vec3 mNormal;
        varying vec3 vPos;

        vec3 bbMin = vec3(.1, .1, .1);
        vec3 bbMax = vec3(.3, .3, .3);

        vec3 color1 = vec3(1.000,0.833,0.224); // yellow
        vec3 color2 = vec3(0.01, 0.03, 0.01); // green
        vec3 color3 = vec3(0.0, 0.0, 0.0); // black

        ${T.fragmentShader}
      `.replace("#include <dithering_fragment>",`#include <dithering_fragment>

        #ifdef GL_ES
        precision mediump float;
        #endif

        vec2 uv = (vUv - .5) * vec2(.6, .6);
        vec3 color = mix(color1, color2, length(uv));
         
        if (length(mNormal) < 0.001) {
            gl_FragColor = vec4(color, 1.);  
          } 
        `)},this.mesh=new Lt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(t){}}class lS extends Lt{constructor(t,i,r,s){super();ze(this,"dim");ze(this,"seg");ze(this,"pos");ze(this,"mesh");this.name=t,this.dim=i,this.seg=r,this.pos=s}initMesh(t,i){this.geometry=new hs(this.dim.x,this.dim.z),this.geometry.rotateX(-Math.PI/2),this.material=new To({color:t,opacity:i,transparent:!0}),this.mesh=new Lt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(t){}}var ka;(n=>{n.createEventHub=()=>({hub:Object.create(null),fire(e,t){(this.hub[e]||[]).forEach(i=>i(t))},on(e,t){this.hub[e]||(this.hub[e]=[]),this.hub[e].push(t)},off(e,t){const i=(this.hub[e]||[]).findIndex(r=>r===t);i>-1&&this.hub[e].splice(i,1),this.hub[e].length===0&&delete this.hub[e]}})})(ka||(ka={}));const _a=20,cS=40,Wr=2,$u=Wr*.5,Zu=new N(2,.5,2),uS=0,hS=.25,ao=ka.createEventHub();class dS{constructor(e){ze(this,"sceneController");ze(this,"scene");ze(this,"loopController");ze(this,"renderer");ze(this,"controlsController");ze(this,"cameraController");ze(this,"camera");ze(this,"gridController");ze(this,"planeController");ze(this,"raycaster");ze(this,"pointer");ze(this,"terrainGhost");ze(this,"meshArray");ze(this,"isShiftDown");ze(this,"terrainsList",new Map);this.meshArray=[],this.isShiftDown=!1,this.sceneController=new iS,this.scene=this.sceneController.init(new ke("#17181b")),this.renderer=new zd({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.cameraController=new eS(new N(0,15,15)),this.camera=this.cameraController.init(),this.controlsController=new QE(this.camera,e),this.controlsController.init(),new rS(this.camera,this.renderer),new tS().init(this.scene,new ke(16777215),new ke(5437322)),this.loopController=new nS(this.camera,this.scene,this.renderer),this.gridController=new sS(_a,cS),this.gridController.init(this.scene),this.raycaster=new KE,this.pointer=new Ne,this.planeController=new oS("T-Plane",new Ne(_a,_a),new Ne(1,1),new N(0,0,0)),this.planeController.initMesh(!1),this.addObject(this.planeController),this.terrainGhost=new lS("T-Ghost",Zu,new N(50,1,50),new N(0,0,0)),this.terrainGhost.initMesh(new ke(16711680),.5),this.terrainGhost.mesh&&(this.sceneController.addMesh(this.terrainGhost.mesh),this.loopController.addToUpdate(this.terrainGhost)),this.init()}init(){this.addObject(this.controlsController),this.addObject(this.cameraController),document.addEventListener("keydown",e=>{this.onDocumentKeyDown(e)}),document.addEventListener("keyup",e=>{this.onDocumentKeyUp(e)}),ao.on("spawnTerrain",()=>document.addEventListener("pointermove",e=>{this.onPointerMove(e)})),ao.on("dropTerrain",async e=>await this.onPointerDown(e.type,e.id))}render(){this.renderer.render(this.scene,this.camera)}start(){this.loopController.start()}stop(){this.loopController.stop()}addObject(e){if(!e){console.log("Object is null or undifined and will not be added to the scene!");return}e.mesh&&(this.sceneController.addMesh(e.mesh),this.meshArray.push(e.mesh)),this.loopController.addToUpdate(e)}onPointerMove(e){console.log("OnPointerMove =>"),this.controlsController.controls.enabled=!1,this.pointer.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.meshArray,!1);if(t&&t.length>0){const i=t[0];this.terrainGhost&&this.terrainGhost.mesh&&i&&i.face&&(this.terrainGhost.mesh.position.copy(i.point).add(i.face.normal),this.terrainGhost.mesh.position.divideScalar(Wr).floor().multiplyScalar(Wr).addScalar($u),this.terrainGhost.mesh.position.y=uS),this.render()}}async onPointerDown(e,t){console.log("OnPointerDown =>"),this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObjects(this.meshArray,!1);if(i&&i.length>0){const r=i[0];if(this.isShiftDown)r.object&&r.object!==this.planeController.mesh&&(this.scene.remove(r.object),this.meshArray.splice(this.meshArray.indexOf(r.object),1));else{const s=`${e}${t}`;let a;this.terrainsList.has(s)?a=this.terrainsList.get(s):(a=new aS("T01",Zu,new N(50,1,50),new N(0,0,0)),await a.initMesh(e,t)),a&&a.mesh&&r&&r.face&&(a.mesh.position.copy(r.point).add(r.face.normal),a.mesh.position.divideScalar(Wr).floor().multiplyScalar(Wr).addScalar($u),a.mesh.position.y=hS),this.addObject(a)}this.render()}this.controlsController.controls.enabled=!0,document.removeEventListener("pointermove",this.onPointerMove)}onDocumentKeyDown(e){switch(e.keyCode){case 16:this.isShiftDown=!0;break}}onDocumentKeyUp(e){switch(e.keyCode){case 16:this.isShiftDown=!1;break}}}const fS={class:"menu"},pS=mt("div",{class:"menu__title"},[mt("p",null,"Terrains")],-1),mS={id:"menu__resources",class:"menu__resources"},gS={class:"menu__resources--tile",tabindex:"1"},_S={class:"menu__resources--btn"},vS=["src"],xS={class:"menu__resources--tile",tabindex:"2"},MS={class:"menu__resources--btn"},ES=["src"],SS={class:"menu__resources--tile",tabindex:"3"},yS={class:"menu__resources--btn"},bS=["src"],TS={class:"menu__resources--tile",tabindex:"3"},AS={class:"menu__resources--btn"},wS=["src"],CS=yh({__name:"ResourceExplorer",setup(n){const e=new URL("/dist/assets/thumb-4f930de4.png",self.location).toString(),t=new URL("/dist/assets/thumb-e08c5e7d.png",self.location).toString(),i=new URL("/dist/assets/thumb-424cb668.png",self.location).toString();function r(){setTimeout(()=>{let s=new Qi(document.getElementById("menu__resources"),{draggable:"li.menu__resources--tile"});s.on("drag:start",a=>{ao.fire("spawnTerrain","")}),s.on("drag:stop",a=>{const o=a.source;console.log("TILE ",o);const l={type:"mountain",id:o.tabIndex};ao.fire("dropTerrain",l)})},500)}return r(),(s,a)=>(Nh(),Hp("div",fS,[pS,mt("ul",mS,[mt("li",gS,[mt("button",_S,[mt("img",{class:"menu__resources--img",title:"t1",src:Gr(e)},null,8,vS)])]),mt("li",xS,[mt("button",MS,[mt("img",{class:"menu__resources--img",title:"t2",src:Gr(t)},null,8,ES)])]),mt("li",SS,[mt("button",yS,[mt("img",{class:"menu__resources--img",title:"t3",src:Gr(i)},null,8,bS)])]),mt("li",TS,[mt("button",AS,[mt("img",{class:"menu__resources--img",title:"t3",src:Gr(i)},null,8,wS)])])])]))}});const RS=yh({__name:"App",setup(n){return(e,t)=>(Nh(),Gp(CS))}});async function LS(){const n=document.getElementById("App");new dS(n).start()}bm(RS).mount("#App");LS();
