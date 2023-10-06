(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Va(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Je={},ki=[],en=()=>{},Xd=()=>!1,Yd=/^on[^a-z]/,oo=n=>Yd.test(n),ka=n=>n.startsWith("onUpdate:"),ft=Object.assign,Wa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qd=Object.prototype.hasOwnProperty,qe=(n,e)=>qd.call(n,e),Oe=Array.isArray,kr=n=>ao(n)==="[object Map]",jd=n=>ao(n)==="[object Set]",Ge=n=>typeof n=="function",gt=n=>typeof n=="string",Xa=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",$u=n=>at(n)&&Ge(n.then)&&Ge(n.catch),Kd=Object.prototype.toString,ao=n=>Kd.call(n),$d=n=>ao(n).slice(8,-1),Zd=n=>ao(n)==="[object Object]",Ya=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ys=Va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jd=/-(\w)/g,ji=lo(n=>n.replace(Jd,(e,t)=>t?t.toUpperCase():"")),Qd=/\B([A-Z])/g,nr=lo(n=>n.replace(Qd,"-$1").toLowerCase()),Zu=lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ro=lo(n=>n?`on${Zu(n)}`:""),Js=(n,e)=>!Object.is(n,e),Lo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Qs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ef=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ol;const ga=()=>Ol||(Ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qa(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=gt(i)?sf(i):qa(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(gt(n))return n;if(at(n))return n}}const tf=/;(?![^(]*\))/g,nf=/:([^]+)/,rf=/\/\*[^]*?\*\//g;function sf(n){const e={};return n.replace(rf,"").split(tf).forEach(t=>{if(t){const i=t.split(nf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ja(n){let e="";if(gt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=ja(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const of="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",af=Va(of);function Ju(n){return!!n||n===""}let jt;class lf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function cf(n,e=jt){e&&e.active&&e.effects.push(n)}function uf(){return jt}const Ka=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Qu=n=>(n.w&Xn)>0,eh=n=>(n.n&Xn)>0,hf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Xn},df=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Qu(r)&&!eh(r)?r.delete(n):e[t++]=r,r.w&=~Xn,r.n&=~Xn}e.length=t}},_a=new WeakMap;let Br=0,Xn=1;const va=30;let $t;const oi=Symbol(""),xa=Symbol("");class $a{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,cf(this,i)}run(){if(!this.active)return this.fn();let e=$t,t=zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,zn=!0,Xn=1<<++Br,Br<=va?hf(this):Fl(this),this.fn()}finally{Br<=va&&df(this),Xn=1<<--Br,$t=this.parent,zn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(Fl(this),this.onStop&&this.onStop(),this.active=!1)}}function Fl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let zn=!0;const th=[];function ir(){th.push(zn),zn=!1}function rr(){const n=th.pop();zn=n===void 0?!0:n}function Ut(n,e,t){if(zn&&$t){let i=_a.get(n);i||_a.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Ka()),nh(r)}}function nh(n,e){let t=!1;Br<=va?eh(n)||(n.n|=Xn,t=!Qu(n)):t=!n.has($t),t&&(n.add($t),$t.deps.push(n))}function Tn(n,e,t,i,r,s){const a=_a.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Oe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Oe(n)?Ya(t)&&o.push(a.get("length")):(o.push(a.get(oi)),kr(n)&&o.push(a.get(xa)));break;case"delete":Oe(n)||(o.push(a.get(oi)),kr(n)&&o.push(a.get(xa)));break;case"set":kr(n)&&o.push(a.get(oi));break}if(o.length===1)o[0]&&Ma(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ma(Ka(l))}}function Ma(n,e){const t=Oe(n)?n:[...n];for(const i of t)i.computed&&Bl(i);for(const i of t)i.computed||Bl(i)}function Bl(n,e){(n!==$t||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ff=Va("__proto__,__v_isRef,__isVue"),ih=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xa)),pf=Za(),mf=Za(!1,!0),gf=Za(!0),zl=_f();function _f(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let s=0,a=this.length;s<a;s++)Ut(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ir();const i=Ke(this)[e].apply(this,t);return rr(),i}}),n}function vf(n){const e=Ke(this);return Ut(e,"has",n),e.hasOwnProperty(n)}function Za(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?If:lh:e?ah:oh).get(i))return i;const a=Oe(i);if(!n){if(a&&qe(zl,r))return Reflect.get(zl,r,s);if(r==="hasOwnProperty")return vf}const o=Reflect.get(i,r,s);return(Xa(r)?ih.has(r):ff(r))||(n||Ut(i,"get",r),e)?o:Ct(o)?a&&Ya(r)?o:o.value:at(o)?n?ch(o):el(o):o}}const xf=rh(),Mf=rh(!0);function rh(n=!1){return function(t,i,r,s){let a=t[i];if(Kr(a)&&Ct(a)&&!Ct(r))return!1;if(!n&&(!Sa(r)&&!Kr(r)&&(a=Ke(a),r=Ke(r)),!Oe(t)&&Ct(a)&&!Ct(r)))return a.value=r,!0;const o=Oe(t)&&Ya(i)?Number(i)<t.length:qe(t,i),l=Reflect.set(t,i,r,s);return t===Ke(s)&&(o?Js(r,a)&&Tn(t,"set",i,r):Tn(t,"add",i,r)),l}}function Sf(n,e){const t=qe(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Tn(n,"delete",e,void 0),i}function Ef(n,e){const t=Reflect.has(n,e);return(!Xa(e)||!ih.has(e))&&Ut(n,"has",e),t}function yf(n){return Ut(n,"iterate",Oe(n)?"length":oi),Reflect.ownKeys(n)}const sh={get:pf,set:xf,deleteProperty:Sf,has:Ef,ownKeys:yf},bf={get:gf,set(n,e){return!0},deleteProperty(n,e){return!0}},Tf=ft({},sh,{get:mf,set:Mf}),Ja=n=>n,co=n=>Reflect.getPrototypeOf(n);function ds(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ke(n),s=Ke(e);t||(e!==s&&Ut(r,"get",e),Ut(r,"get",s));const{has:a}=co(r),o=i?Ja:t?il:nl;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function fs(n,e=!1){const t=this.__v_raw,i=Ke(t),r=Ke(n);return e||(n!==r&&Ut(i,"has",n),Ut(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ps(n,e=!1){return n=n.__v_raw,!e&&Ut(Ke(n),"iterate",oi),Reflect.get(n,"size",n)}function Hl(n){n=Ke(n);const e=Ke(this);return co(e).has.call(e,n)||(e.add(n),Tn(e,"add",n,n)),this}function Gl(n,e){e=Ke(e);const t=Ke(this),{has:i,get:r}=co(t);let s=i.call(t,n);s||(n=Ke(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Js(e,a)&&Tn(t,"set",n,e):Tn(t,"add",n,e),this}function Vl(n){const e=Ke(this),{has:t,get:i}=co(e);let r=t.call(e,n);r||(n=Ke(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Tn(e,"delete",n,void 0),s}function kl(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&Tn(n,"clear",void 0,void 0),t}function ms(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Ke(a),l=e?Ja:n?il:nl;return!n&&Ut(o,"iterate",oi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function gs(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),a=kr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Ja:e?il:nl;return!e&&Ut(s,"iterate",l?xa:oi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Cn(n){return function(...e){return n==="delete"?!1:this}}function Af(){const n={get(s){return ds(this,s)},get size(){return ps(this)},has:fs,add:Hl,set:Gl,delete:Vl,clear:kl,forEach:ms(!1,!1)},e={get(s){return ds(this,s,!1,!0)},get size(){return ps(this)},has:fs,add:Hl,set:Gl,delete:Vl,clear:kl,forEach:ms(!1,!0)},t={get(s){return ds(this,s,!0)},get size(){return ps(this,!0)},has(s){return fs.call(this,s,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:ms(!0,!1)},i={get(s){return ds(this,s,!0,!0)},get size(){return ps(this,!0)},has(s){return fs.call(this,s,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:ms(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gs(s,!1,!1),t[s]=gs(s,!0,!1),e[s]=gs(s,!1,!0),i[s]=gs(s,!0,!0)}),[n,t,e,i]}const[wf,Cf,Rf,Lf]=Af();function Qa(n,e){const t=e?n?Lf:Rf:n?Cf:wf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(qe(t,r)&&r in i?t:i,r,s)}const Pf={get:Qa(!1,!1)},Df={get:Qa(!1,!0)},Uf={get:Qa(!0,!1)},oh=new WeakMap,ah=new WeakMap,lh=new WeakMap,If=new WeakMap;function Nf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Of(n){return n.__v_skip||!Object.isExtensible(n)?0:Nf($d(n))}function el(n){return Kr(n)?n:tl(n,!1,sh,Pf,oh)}function Ff(n){return tl(n,!1,Tf,Df,ah)}function ch(n){return tl(n,!0,bf,Uf,lh)}function tl(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Of(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Wi(n){return Kr(n)?Wi(n.__v_raw):!!(n&&n.__v_isReactive)}function Kr(n){return!!(n&&n.__v_isReadonly)}function Sa(n){return!!(n&&n.__v_isShallow)}function uh(n){return Wi(n)||Kr(n)}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function hh(n){return Qs(n,"__v_skip",!0),n}const nl=n=>at(n)?el(n):n,il=n=>at(n)?ch(n):n;function Bf(n){zn&&$t&&(n=Ke(n),nh(n.dep||(n.dep=Ka())))}function zf(n,e){n=Ke(n);const t=n.dep;t&&Ma(t)}function Ct(n){return!!(n&&n.__v_isRef===!0)}function zr(n){return Ct(n)?n.value:n}const Hf={get:(n,e,t)=>zr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function dh(n){return Wi(n)?n:new Proxy(n,Hf)}class Gf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new $a(e,()=>{this._dirty||(this._dirty=!0,zf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ke(this);return Bf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Vf(n,e,t=!1){let i,r;const s=Ge(n);return s?(i=n,r=en):(i=n.get,r=n.set),new Gf(i,r,s||!r,t)}function Hn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){uo(s,e,t)}return r}function tn(n,e,t,i){if(Ge(n)){const s=Hn(n,e,t,i);return s&&$u(s)&&s.catch(a=>{uo(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(tn(n[s],e,t,i));return r}function uo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Hn(l,null,10,[n,a,o]);return}}kf(n,t,r,i)}function kf(n,e,t,i=!0){console.error(n)}let $r=!1,Ea=!1;const Mt=[];let ln=0;const Xi=[];let En=null,ii=0;const fh=Promise.resolve();let rl=null;function Wf(n){const e=rl||fh;return n?e.then(this?n.bind(this):n):e}function Xf(n){let e=ln+1,t=Mt.length;for(;e<t;){const i=e+t>>>1;Zr(Mt[i])<n?e=i+1:t=i}return e}function sl(n){(!Mt.length||!Mt.includes(n,$r&&n.allowRecurse?ln+1:ln))&&(n.id==null?Mt.push(n):Mt.splice(Xf(n.id),0,n),ph())}function ph(){!$r&&!Ea&&(Ea=!0,rl=fh.then(gh))}function Yf(n){const e=Mt.indexOf(n);e>ln&&Mt.splice(e,1)}function qf(n){Oe(n)?Xi.push(...n):(!En||!En.includes(n,n.allowRecurse?ii+1:ii))&&Xi.push(n),ph()}function Wl(n,e=$r?ln+1:0){for(;e<Mt.length;e++){const t=Mt[e];t&&t.pre&&(Mt.splice(e,1),e--,t())}}function mh(n){if(Xi.length){const e=[...new Set(Xi)];if(Xi.length=0,En){En.push(...e);return}for(En=e,En.sort((t,i)=>Zr(t)-Zr(i)),ii=0;ii<En.length;ii++)En[ii]();En=null,ii=0}}const Zr=n=>n.id==null?1/0:n.id,jf=(n,e)=>{const t=Zr(n)-Zr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function gh(n){Ea=!1,$r=!0,Mt.sort(jf);const e=en;try{for(ln=0;ln<Mt.length;ln++){const t=Mt[ln];t&&t.active!==!1&&Hn(t,null,14)}}finally{ln=0,Mt.length=0,mh(),$r=!1,rl=null,(Mt.length||Xi.length)&&gh()}}function Kf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Je;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=i[u]||Je;d&&(r=t.map(m=>gt(m)?m.trim():m)),h&&(r=t.map(ef))}let o,l=i[o=Ro(e)]||i[o=Ro(ji(e))];!l&&s&&(l=i[o=Ro(nr(e))]),l&&tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,tn(c,n,6,r)}}function _h(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ge(n)){const l=c=>{const u=_h(c,e,!0);u&&(o=!0,ft(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(at(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>a[l]=null):ft(a,s),at(n)&&i.set(n,a),a)}function ho(n,e){return!n||!oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(n,e[0].toLowerCase()+e.slice(1))||qe(n,nr(e))||qe(n,e))}let un=null,vh=null;function eo(n){const e=un;return un=n,vh=n&&n.type.__scopeId||null,e}function $f(n,e=un,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ec(-1);const s=eo(e);let a;try{a=n(...r)}finally{eo(s),i._d&&ec(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Po(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:m,ctx:x,inheritAttrs:v}=n;let p,f;const A=eo(n);try{if(t.shapeFlag&4){const b=r||i;p=on(u.call(b,b,h,s,m,d,x)),f=l}else{const b=e;p=on(b.length>1?b(s,{attrs:l,slots:o,emit:c}):b(s,null)),f=e.props?l:Zf(l)}}catch(b){Xr.length=0,uo(b,n,1),p=Gn(Jr)}let M=p;if(f&&v!==!1){const b=Object.keys(f),{shapeFlag:w}=M;b.length&&w&7&&(a&&b.some(ka)&&(f=Jf(f,a)),M=Ki(M,f))}return t.dirs&&(M=Ki(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),p=M,eo(A),p}const Zf=n=>{let e;for(const t in n)(t==="class"||t==="style"||oo(t))&&((e||(e={}))[t]=n[t]);return e},Jf=(n,e)=>{const t={};for(const i in n)(!ka(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Xl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==i[d]&&!ho(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Xl(i,a,c):!0:!!a;return!1}function Xl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ho(t,s))return!0}return!1}function ep({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const tp=n=>n.__isSuspense;function np(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):qf(n)}const _s={};function Do(n,e,t){return xh(n,e,t)}function xh(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Je){var o;const l=uf()===((o=St)==null?void 0:o.scope)?St:null;let c,u=!1,h=!1;if(Ct(n)?(c=()=>n.value,u=Sa(n)):Wi(n)?(c=()=>n,i=!0):Oe(n)?(h=!0,u=n.some(b=>Wi(b)||Sa(b)),c=()=>n.map(b=>{if(Ct(b))return b.value;if(Wi(b))return Gi(b);if(Ge(b))return Hn(b,l,2)})):Ge(n)?e?c=()=>Hn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),tn(n,l,3,[m])}:c=en,e&&i){const b=c;c=()=>Gi(b())}let d,m=b=>{d=A.onStop=()=>{Hn(b,l,4)}},x;if(es)if(m=en,e?t&&tn(e,l,3,[c(),h?[]:void 0,m]):c(),r==="sync"){const b=Qp();x=b.__watcherHandles||(b.__watcherHandles=[])}else return en;let v=h?new Array(n.length).fill(_s):_s;const p=()=>{if(A.active)if(e){const b=A.run();(i||u||(h?b.some((w,U)=>Js(w,v[U])):Js(b,v)))&&(d&&d(),tn(e,l,3,[b,v===_s?void 0:h&&v[0]===_s?[]:v,m]),v=b)}else A.run()};p.allowRecurse=!!e;let f;r==="sync"?f=p:r==="post"?f=()=>Lt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),f=()=>sl(p));const A=new $a(c,f);e?t?p():v=A.run():r==="post"?Lt(A.run.bind(A),l&&l.suspense):A.run();const M=()=>{A.stop(),l&&l.scope&&Wa(l.scope.effects,A)};return x&&x.push(M),M}function ip(n,e,t){const i=this.proxy,r=gt(n)?n.includes(".")?Mh(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const a=St;$i(this);const o=xh(r,s.bind(i),t);return a?$i(a):ai(),o}function Mh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Gi(n,e){if(!at(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ct(n))Gi(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)Gi(n[t],e);else if(jd(n)||kr(n))n.forEach(t=>{Gi(t,e)});else if(Zd(n))for(const t in n)Gi(n[t],e);return n}function Kn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ir(),tn(l,t,8,[n.el,o,n,e]),rr())}}function Sh(n,e){return Ge(n)?(()=>ft({name:n.name},e,{setup:n}))():n}const qs=n=>!!n.type.__asyncLoader,Eh=n=>n.type.__isKeepAlive;function rp(n,e){yh(n,"a",e)}function sp(n,e){yh(n,"da",e)}function yh(n,e,t=St){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(fo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Eh(r.parent.vnode)&&op(i,e,t,r),r=r.parent}}function op(n,e,t,i){const r=fo(e,n,i,!0);bh(()=>{Wa(i[e],r)},t)}function fo(n,e,t=St,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ir(),$i(t);const o=tn(e,t,n,a);return ai(),rr(),o});return i?r.unshift(s):r.push(s),s}}const An=n=>(e,t=St)=>(!es||n==="sp")&&fo(n,(...i)=>e(...i),t),ap=An("bm"),lp=An("m"),cp=An("bu"),up=An("u"),hp=An("bum"),bh=An("um"),dp=An("sp"),fp=An("rtg"),pp=An("rtc");function mp(n,e=St){fo("ec",n,e)}const gp=Symbol.for("v-ndc"),ya=n=>n?Oh(n)?ul(n)||n.proxy:ya(n.parent):null,Wr=ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ya(n.parent),$root:n=>ya(n.root),$emit:n=>n.emit,$options:n=>ol(n),$forceUpdate:n=>n.f||(n.f=()=>sl(n.update)),$nextTick:n=>n.n||(n.n=Wf.bind(n.proxy)),$watch:n=>ip.bind(n)}),Uo=(n,e)=>n!==Je&&!n.__isScriptSetup&&qe(n,e),_p={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Uo(i,e))return a[e]=1,i[e];if(r!==Je&&qe(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&qe(c,e))return a[e]=3,s[e];if(t!==Je&&qe(t,e))return a[e]=4,t[e];ba&&(a[e]=0)}}const u=Wr[e];let h,d;if(u)return e==="$attrs"&&Ut(n,"get",e),u(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==Je&&qe(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,qe(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Uo(r,e)?(r[e]=t,!0):i!==Je&&qe(i,e)?(i[e]=t,!0):qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Je&&qe(n,a)||Uo(e,a)||(o=s[0])&&qe(o,a)||qe(i,a)||qe(Wr,a)||qe(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Yl(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ba=!0;function vp(n){const e=ol(n),t=n.proxy,i=n.ctx;ba=!1,e.beforeCreate&&ql(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:f,beforeUnmount:A,destroyed:M,unmounted:b,render:w,renderTracked:U,renderTriggered:R,errorCaptured:j,serverPrefetch:E,expose:T,inheritAttrs:se,components:pe,directives:V,filters:q}=e;if(c&&xp(c,i,null),a)for(const k in a){const W=a[k];Ge(W)&&(i[k]=W.bind(t))}if(r){const k=r.call(t,t);at(k)&&(n.data=el(k))}if(ba=!0,s)for(const k in s){const W=s[k],ce=Ge(W)?W.bind(t,t):Ge(W.get)?W.get.bind(t,t):en,ue=!Ge(W)&&Ge(W.set)?W.set.bind(t):en,F=Zp({get:ce,set:ue});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>F.value,set:J=>F.value=J})}if(o)for(const k in o)Th(o[k],i,t,k);if(l){const k=Ge(l)?l.call(t):l;Reflect.ownKeys(k).forEach(W=>{Tp(W,k[W])})}u&&ql(u,n,"c");function le(k,W){Oe(W)?W.forEach(ce=>k(ce.bind(t))):W&&k(W.bind(t))}if(le(ap,h),le(lp,d),le(cp,m),le(up,x),le(rp,v),le(sp,p),le(mp,j),le(pp,U),le(fp,R),le(hp,A),le(bh,b),le(dp,E),Oe(T))if(T.length){const k=n.exposed||(n.exposed={});T.forEach(W=>{Object.defineProperty(k,W,{get:()=>t[W],set:ce=>t[W]=ce})})}else n.exposed||(n.exposed={});w&&n.render===en&&(n.render=w),se!=null&&(n.inheritAttrs=se),pe&&(n.components=pe),V&&(n.directives=V)}function xp(n,e,t=en){Oe(n)&&(n=Ta(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=js(r.from||i,r.default,!0):s=js(r.from||i):s=js(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ql(n,e,t){tn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Th(n,e,t,i){const r=i.includes(".")?Mh(t,i):()=>t[i];if(gt(n)){const s=e[n];Ge(s)&&Do(r,s)}else if(Ge(n))Do(r,n.bind(t));else if(at(n))if(Oe(n))n.forEach(s=>Th(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&Do(r,s,n)}}function ol(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>to(l,c,a,!0)),to(l,e,a)),at(e)&&s.set(e,l),l}function to(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&to(n,s,t,!0),r&&r.forEach(a=>to(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Mp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Mp={data:jl,props:Kl,emits:Kl,methods:Hr,computed:Hr,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Hr,directives:Hr,watch:Ep,provide:jl,inject:Sp};function jl(n,e){return e?n?function(){return ft(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Sp(n,e){return Hr(Ta(n),Ta(e))}function Ta(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Hr(n,e){return n?ft(Object.create(null),n,e):e}function Kl(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:ft(Object.create(null),Yl(n),Yl(e??{})):e}function Ep(n,e){if(!n)return e;if(!e)return n;const t=ft(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function Ah(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yp=0;function bp(n,e){return function(i,r=null){Ge(i)||(i=ft({},i)),r!=null&&!at(r)&&(r=null);const s=Ah(),a=new Set;let o=!1;const l=s.app={_uid:yp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:em,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ge(c.install)?(a.add(c),c.install(l,...u)):Ge(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!o){const d=Gn(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,h),o=!0,l._container=c,c.__vue_app__=l,ul(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){no=l;try{return c()}finally{no=null}}};return l}}let no=null;function Tp(n,e){if(St){let t=St.provides;const i=St.parent&&St.parent.provides;i===t&&(t=St.provides=Object.create(i)),t[n]=e}}function js(n,e,t=!1){const i=St||un;if(i||no){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:no._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}function Ap(n,e,t,i=!1){const r={},s={};Qs(s,mo,1),n.propsDefaults=Object.create(null),wh(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Ff(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function wp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ke(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ho(n.emitsOptions,d))continue;const m=e[d];if(l)if(qe(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=ji(d);r[x]=Aa(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{wh(n,e,r,s)&&(c=!0);let u;for(const h in o)(!e||!qe(e,h)&&((u=nr(h))===h||!qe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Aa(l,o,h,void 0,n,!0)):delete r[h]);if(s!==o)for(const h in s)(!e||!qe(e,h))&&(delete s[h],c=!0)}c&&Tn(n,"set","$attrs")}function wh(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ys(l))continue;const c=e[l];let u;r&&qe(r,u=ji(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ho(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ke(t),c=o||Je;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Aa(r,l,h,c[h],n,!qe(c,h))}}return a}function Aa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ge(l)){const{propsDefaults:c}=r;t in c?i=c[t]:($i(r),i=c[t]=l.call(null,e),ai())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===nr(t))&&(i=!0))}return i}function Ch(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ge(n)){const u=h=>{l=!0;const[d,m]=Ch(h,e,!0);ft(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,ki),ki;if(Oe(s))for(let u=0;u<s.length;u++){const h=ji(s[u]);$l(h)&&(a[h]=Je)}else if(s)for(const u in s){const h=ji(u);if($l(h)){const d=s[u],m=a[h]=Oe(d)||Ge(d)?{type:d}:ft({},d);if(m){const x=Ql(Boolean,m.type),v=Ql(String,m.type);m[0]=x>-1,m[1]=v<0||x<v,(x>-1||qe(m,"default"))&&o.push(h)}}}const c=[a,o];return at(n)&&i.set(n,c),c}function $l(n){return n[0]!=="$"}function Zl(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Jl(n,e){return Zl(n)===Zl(e)}function Ql(n,e){return Oe(e)?e.findIndex(t=>Jl(t,n)):Ge(e)&&Jl(e,n)?0:-1}const Rh=n=>n[0]==="_"||n==="$stable",al=n=>Oe(n)?n.map(on):[on(n)],Cp=(n,e,t)=>{if(e._n)return e;const i=$f((...r)=>al(e(...r)),t);return i._c=!1,i},Lh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Rh(r))continue;const s=n[r];if(Ge(s))e[r]=Cp(r,s,i);else if(s!=null){const a=al(s);e[r]=()=>a}}},Ph=(n,e)=>{const t=al(e);n.slots.default=()=>t},Rp=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ke(e),Qs(e,"_",t)):Lh(e,n.slots={})}else n.slots={},e&&Ph(n,e);Qs(n.slots,mo,1)},Lp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Je;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ft(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Lh(e,r)),a=e}else e&&(Ph(n,e),a={default:1});if(s)for(const o in r)!Rh(o)&&!(o in a)&&delete r[o]};function wa(n,e,t,i,r=!1){if(Oe(n)){n.forEach((d,m)=>wa(d,e&&(Oe(e)?e[m]:e),t,i,r));return}if(qs(i)&&!r)return;const s=i.shapeFlag&4?ul(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Je?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(gt(c)?(u[c]=null,qe(h,c)&&(h[c]=null)):Ct(c)&&(c.value=null)),Ge(l))Hn(l,o,12,[a,u]);else{const d=gt(l),m=Ct(l);if(d||m){const x=()=>{if(n.f){const v=d?qe(h,l)?h[l]:u[l]:l.value;r?Oe(v)&&Wa(v,s):Oe(v)?v.includes(s)||v.push(s):d?(u[l]=[s],qe(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,qe(h,l)&&(h[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,Lt(x,t)):x()}}}const Lt=np;function Pp(n){return Dp(n)}function Dp(n,e){const t=ga();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=en,insertStaticContent:x}=n,v=(_,L,I,H=null,B=null,ae=null,oe=!1,K=null,re=!!L.dynamicChildren)=>{if(_===L)return;_&&!dr(_,L)&&(H=Re(_),J(_,B,ae,!0),_=null),L.patchFlag===-2&&(re=!1,L.dynamicChildren=null);const{type:ne,ref:Ee,shapeFlag:S}=L;switch(ne){case po:p(_,L,I,H);break;case Jr:f(_,L,I,H);break;case Io:_==null&&A(L,I,H,oe);break;case yn:pe(_,L,I,H,B,ae,oe,K,re);break;default:S&1?w(_,L,I,H,B,ae,oe,K,re):S&6?V(_,L,I,H,B,ae,oe,K,re):(S&64||S&128)&&ne.process(_,L,I,H,B,ae,oe,K,re,Fe)}Ee!=null&&B&&wa(Ee,_&&_.ref,ae,L||_,!L)},p=(_,L,I,H)=>{if(_==null)i(L.el=o(L.children),I,H);else{const B=L.el=_.el;L.children!==_.children&&c(B,L.children)}},f=(_,L,I,H)=>{_==null?i(L.el=l(L.children||""),I,H):L.el=_.el},A=(_,L,I,H)=>{[_.el,_.anchor]=x(_.children,L,I,H,_.el,_.anchor)},M=({el:_,anchor:L},I,H)=>{let B;for(;_&&_!==L;)B=d(_),i(_,I,H),_=B;i(L,I,H)},b=({el:_,anchor:L})=>{let I;for(;_&&_!==L;)I=d(_),r(_),_=I;r(L)},w=(_,L,I,H,B,ae,oe,K,re)=>{oe=oe||L.type==="svg",_==null?U(L,I,H,B,ae,oe,K,re):E(_,L,B,ae,oe,K,re)},U=(_,L,I,H,B,ae,oe,K)=>{let re,ne;const{type:Ee,props:S,shapeFlag:g,transition:D,dirs:Q}=_;if(re=_.el=a(_.type,ae,S&&S.is,S),g&8?u(re,_.children):g&16&&j(_.children,re,null,H,B,ae&&Ee!=="foreignObject",oe,K),Q&&Kn(_,null,H,"created"),R(re,_,_.scopeId,oe,H),S){for(const te in S)te!=="value"&&!Ys(te)&&s(re,te,null,S[te],ae,_.children,H,B,Ae);"value"in S&&s(re,"value",null,S.value),(ne=S.onVnodeBeforeMount)&&sn(ne,H,_)}Q&&Kn(_,null,H,"beforeMount");const ee=(!B||B&&!B.pendingBranch)&&D&&!D.persisted;ee&&D.beforeEnter(re),i(re,L,I),((ne=S&&S.onVnodeMounted)||ee||Q)&&Lt(()=>{ne&&sn(ne,H,_),ee&&D.enter(re),Q&&Kn(_,null,H,"mounted")},B)},R=(_,L,I,H,B)=>{if(I&&m(_,I),H)for(let ae=0;ae<H.length;ae++)m(_,H[ae]);if(B){let ae=B.subTree;if(L===ae){const oe=B.vnode;R(_,oe,oe.scopeId,oe.slotScopeIds,B.parent)}}},j=(_,L,I,H,B,ae,oe,K,re=0)=>{for(let ne=re;ne<_.length;ne++){const Ee=_[ne]=K?Nn(_[ne]):on(_[ne]);v(null,Ee,L,I,H,B,ae,oe,K)}},E=(_,L,I,H,B,ae,oe)=>{const K=L.el=_.el;let{patchFlag:re,dynamicChildren:ne,dirs:Ee}=L;re|=_.patchFlag&16;const S=_.props||Je,g=L.props||Je;let D;I&&$n(I,!1),(D=g.onVnodeBeforeUpdate)&&sn(D,I,L,_),Ee&&Kn(L,_,I,"beforeUpdate"),I&&$n(I,!0);const Q=B&&L.type!=="foreignObject";if(ne?T(_.dynamicChildren,ne,K,I,H,Q,ae):oe||W(_,L,K,null,I,H,Q,ae,!1),re>0){if(re&16)se(K,L,S,g,I,H,B);else if(re&2&&S.class!==g.class&&s(K,"class",null,g.class,B),re&4&&s(K,"style",S.style,g.style,B),re&8){const ee=L.dynamicProps;for(let te=0;te<ee.length;te++){const _e=ee[te],he=S[_e],G=g[_e];(G!==he||_e==="value")&&s(K,_e,he,G,B,_.children,I,H,Ae)}}re&1&&_.children!==L.children&&u(K,L.children)}else!oe&&ne==null&&se(K,L,S,g,I,H,B);((D=g.onVnodeUpdated)||Ee)&&Lt(()=>{D&&sn(D,I,L,_),Ee&&Kn(L,_,I,"updated")},H)},T=(_,L,I,H,B,ae,oe)=>{for(let K=0;K<L.length;K++){const re=_[K],ne=L[K],Ee=re.el&&(re.type===yn||!dr(re,ne)||re.shapeFlag&70)?h(re.el):I;v(re,ne,Ee,null,H,B,ae,oe,!0)}},se=(_,L,I,H,B,ae,oe)=>{if(I!==H){if(I!==Je)for(const K in I)!Ys(K)&&!(K in H)&&s(_,K,I[K],null,oe,L.children,B,ae,Ae);for(const K in H){if(Ys(K))continue;const re=H[K],ne=I[K];re!==ne&&K!=="value"&&s(_,K,ne,re,oe,L.children,B,ae,Ae)}"value"in H&&s(_,"value",I.value,H.value)}},pe=(_,L,I,H,B,ae,oe,K,re)=>{const ne=L.el=_?_.el:o(""),Ee=L.anchor=_?_.anchor:o("");let{patchFlag:S,dynamicChildren:g,slotScopeIds:D}=L;D&&(K=K?K.concat(D):D),_==null?(i(ne,I,H),i(Ee,I,H),j(L.children,I,Ee,B,ae,oe,K,re)):S>0&&S&64&&g&&_.dynamicChildren?(T(_.dynamicChildren,g,I,B,ae,oe,K),(L.key!=null||B&&L===B.subTree)&&Dh(_,L,!0)):W(_,L,I,Ee,B,ae,oe,K,re)},V=(_,L,I,H,B,ae,oe,K,re)=>{L.slotScopeIds=K,_==null?L.shapeFlag&512?B.ctx.activate(L,I,H,oe,re):q(L,I,H,B,ae,oe,re):Y(_,L,re)},q=(_,L,I,H,B,ae,oe)=>{const K=_.component=Xp(_,H,B);if(Eh(_)&&(K.ctx.renderer=Fe),Yp(K),K.asyncDep){if(B&&B.registerDep(K,le),!_.el){const re=K.subTree=Gn(Jr);f(null,re,L,I)}return}le(K,_,L,I,B,ae,oe)},Y=(_,L,I)=>{const H=L.component=_.component;if(Qf(_,L,I))if(H.asyncDep&&!H.asyncResolved){k(H,L,I);return}else H.next=L,Yf(H.update),H.update();else L.el=_.el,H.vnode=L},le=(_,L,I,H,B,ae,oe)=>{const K=()=>{if(_.isMounted){let{next:Ee,bu:S,u:g,parent:D,vnode:Q}=_,ee=Ee,te;$n(_,!1),Ee?(Ee.el=Q.el,k(_,Ee,oe)):Ee=Q,S&&Lo(S),(te=Ee.props&&Ee.props.onVnodeBeforeUpdate)&&sn(te,D,Ee,Q),$n(_,!0);const _e=Po(_),he=_.subTree;_.subTree=_e,v(he,_e,h(he.el),Re(he),_,B,ae),Ee.el=_e.el,ee===null&&ep(_,_e.el),g&&Lt(g,B),(te=Ee.props&&Ee.props.onVnodeUpdated)&&Lt(()=>sn(te,D,Ee,Q),B)}else{let Ee;const{el:S,props:g}=L,{bm:D,m:Q,parent:ee}=_,te=qs(L);if($n(_,!1),D&&Lo(D),!te&&(Ee=g&&g.onVnodeBeforeMount)&&sn(Ee,ee,L),$n(_,!0),S&&Ie){const _e=()=>{_.subTree=Po(_),Ie(S,_.subTree,_,B,null)};te?L.type.__asyncLoader().then(()=>!_.isUnmounted&&_e()):_e()}else{const _e=_.subTree=Po(_);v(null,_e,I,H,_,B,ae),L.el=_e.el}if(Q&&Lt(Q,B),!te&&(Ee=g&&g.onVnodeMounted)){const _e=L;Lt(()=>sn(Ee,ee,_e),B)}(L.shapeFlag&256||ee&&qs(ee.vnode)&&ee.vnode.shapeFlag&256)&&_.a&&Lt(_.a,B),_.isMounted=!0,L=I=H=null}},re=_.effect=new $a(K,()=>sl(ne),_.scope),ne=_.update=()=>re.run();ne.id=_.uid,$n(_,!0),ne()},k=(_,L,I)=>{L.component=_;const H=_.vnode.props;_.vnode=L,_.next=null,wp(_,L.props,H,I),Lp(_,L.children,I),ir(),Wl(),rr()},W=(_,L,I,H,B,ae,oe,K,re=!1)=>{const ne=_&&_.children,Ee=_?_.shapeFlag:0,S=L.children,{patchFlag:g,shapeFlag:D}=L;if(g>0){if(g&128){ue(ne,S,I,H,B,ae,oe,K,re);return}else if(g&256){ce(ne,S,I,H,B,ae,oe,K,re);return}}D&8?(Ee&16&&Ae(ne,B,ae),S!==ne&&u(I,S)):Ee&16?D&16?ue(ne,S,I,H,B,ae,oe,K,re):Ae(ne,B,ae,!0):(Ee&8&&u(I,""),D&16&&j(S,I,H,B,ae,oe,K,re))},ce=(_,L,I,H,B,ae,oe,K,re)=>{_=_||ki,L=L||ki;const ne=_.length,Ee=L.length,S=Math.min(ne,Ee);let g;for(g=0;g<S;g++){const D=L[g]=re?Nn(L[g]):on(L[g]);v(_[g],D,I,null,B,ae,oe,K,re)}ne>Ee?Ae(_,B,ae,!0,!1,S):j(L,I,H,B,ae,oe,K,re,S)},ue=(_,L,I,H,B,ae,oe,K,re)=>{let ne=0;const Ee=L.length;let S=_.length-1,g=Ee-1;for(;ne<=S&&ne<=g;){const D=_[ne],Q=L[ne]=re?Nn(L[ne]):on(L[ne]);if(dr(D,Q))v(D,Q,I,null,B,ae,oe,K,re);else break;ne++}for(;ne<=S&&ne<=g;){const D=_[S],Q=L[g]=re?Nn(L[g]):on(L[g]);if(dr(D,Q))v(D,Q,I,null,B,ae,oe,K,re);else break;S--,g--}if(ne>S){if(ne<=g){const D=g+1,Q=D<Ee?L[D].el:H;for(;ne<=g;)v(null,L[ne]=re?Nn(L[ne]):on(L[ne]),I,Q,B,ae,oe,K,re),ne++}}else if(ne>g)for(;ne<=S;)J(_[ne],B,ae,!0),ne++;else{const D=ne,Q=ne,ee=new Map;for(ne=Q;ne<=g;ne++){const de=L[ne]=re?Nn(L[ne]):on(L[ne]);de.key!=null&&ee.set(de.key,ne)}let te,_e=0;const he=g-Q+1;let G=!1,C=0;const ie=new Array(he);for(ne=0;ne<he;ne++)ie[ne]=0;for(ne=D;ne<=S;ne++){const de=_[ne];if(_e>=he){J(de,B,ae,!0);continue}let me;if(de.key!=null)me=ee.get(de.key);else for(te=Q;te<=g;te++)if(ie[te-Q]===0&&dr(de,L[te])){me=te;break}me===void 0?J(de,B,ae,!0):(ie[me-Q]=ne+1,me>=C?C=me:G=!0,v(de,L[me],I,null,B,ae,oe,K,re),_e++)}const xe=G?Up(ie):ki;for(te=xe.length-1,ne=he-1;ne>=0;ne--){const de=Q+ne,me=L[de],Le=de+1<Ee?L[de+1].el:H;ie[ne]===0?v(null,me,I,Le,B,ae,oe,K,re):G&&(te<0||ne!==xe[te]?F(me,I,Le,2):te--)}}},F=(_,L,I,H,B=null)=>{const{el:ae,type:oe,transition:K,children:re,shapeFlag:ne}=_;if(ne&6){F(_.component.subTree,L,I,H);return}if(ne&128){_.suspense.move(L,I,H);return}if(ne&64){oe.move(_,L,I,Fe);return}if(oe===yn){i(ae,L,I);for(let S=0;S<re.length;S++)F(re[S],L,I,H);i(_.anchor,L,I);return}if(oe===Io){M(_,L,I);return}if(H!==2&&ne&1&&K)if(H===0)K.beforeEnter(ae),i(ae,L,I),Lt(()=>K.enter(ae),B);else{const{leave:S,delayLeave:g,afterLeave:D}=K,Q=()=>i(ae,L,I),ee=()=>{S(ae,()=>{Q(),D&&D()})};g?g(ae,Q,ee):ee()}else i(ae,L,I)},J=(_,L,I,H=!1,B=!1)=>{const{type:ae,props:oe,ref:K,children:re,dynamicChildren:ne,shapeFlag:Ee,patchFlag:S,dirs:g}=_;if(K!=null&&wa(K,null,I,_,!0),Ee&256){L.ctx.deactivate(_);return}const D=Ee&1&&g,Q=!qs(_);let ee;if(Q&&(ee=oe&&oe.onVnodeBeforeUnmount)&&sn(ee,L,_),Ee&6)be(_.component,I,H);else{if(Ee&128){_.suspense.unmount(I,H);return}D&&Kn(_,null,L,"beforeUnmount"),Ee&64?_.type.remove(_,L,I,B,Fe,H):ne&&(ae!==yn||S>0&&S&64)?Ae(ne,L,I,!1,!0):(ae===yn&&S&384||!B&&Ee&16)&&Ae(re,L,I),H&&Me(_)}(Q&&(ee=oe&&oe.onVnodeUnmounted)||D)&&Lt(()=>{ee&&sn(ee,L,_),D&&Kn(_,null,L,"unmounted")},I)},Me=_=>{const{type:L,el:I,anchor:H,transition:B}=_;if(L===yn){ye(I,H);return}if(L===Io){b(_);return}const ae=()=>{r(I),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(_.shapeFlag&1&&B&&!B.persisted){const{leave:oe,delayLeave:K}=B,re=()=>oe(I,ae);K?K(_.el,ae,re):re()}else ae()},ye=(_,L)=>{let I;for(;_!==L;)I=d(_),r(_),_=I;r(L)},be=(_,L,I)=>{const{bum:H,scope:B,update:ae,subTree:oe,um:K}=_;H&&Lo(H),B.stop(),ae&&(ae.active=!1,J(oe,_,L,I)),K&&Lt(K,L),Lt(()=>{_.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Ae=(_,L,I,H=!1,B=!1,ae=0)=>{for(let oe=ae;oe<_.length;oe++)J(_[oe],L,I,H,B)},Re=_=>_.shapeFlag&6?Re(_.component.subTree):_.shapeFlag&128?_.suspense.next():d(_.anchor||_.el),we=(_,L,I)=>{_==null?L._vnode&&J(L._vnode,null,null,!0):v(L._vnode||null,_,L,null,null,null,I),Wl(),mh(),L._vnode=_},Fe={p:v,um:J,m:F,r:Me,mt:q,mc:j,pc:W,pbc:T,n:Re,o:n};let tt,Ie;return e&&([tt,Ie]=e(Fe)),{render:we,hydrate:tt,createApp:bp(we,tt)}}function $n({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Dh(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Nn(r[s]),o.el=a.el),t||Dh(a,o)),o.type===po&&(o.el=a.el)}}function Up(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Ip=n=>n.__isTeleport,yn=Symbol.for("v-fgt"),po=Symbol.for("v-txt"),Jr=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),Xr=[];let Qt=null;function Uh(n=!1){Xr.push(Qt=n?null:[])}function Np(){Xr.pop(),Qt=Xr[Xr.length-1]||null}let Qr=1;function ec(n){Qr+=n}function Ih(n){return n.dynamicChildren=Qr>0?Qt||ki:null,Np(),Qr>0&&Qt&&Qt.push(n),n}function Op(n,e,t,i,r,s){return Ih(pt(n,e,t,i,r,s,!0))}function Fp(n,e,t,i,r){return Ih(Gn(n,e,t,i,r,!0))}function Bp(n){return n?n.__v_isVNode===!0:!1}function dr(n,e){return n.type===e.type&&n.key===e.key}const mo="__vInternal",Nh=({key:n})=>n??null,Ks=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||Ct(n)||Ge(n)?{i:un,r:n,k:e,f:!!t}:n:null);function pt(n,e=null,t=null,i=0,r=null,s=n===yn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Nh(e),ref:e&&Ks(e),scopeId:vh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:un};return o?(ll(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),Qr>0&&!a&&Qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qt.push(l),l}const Gn=zp;function zp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gp)&&(n=Jr),Bp(n)){const o=Ki(n,e,!0);return t&&ll(o,t),Qr>0&&!s&&Qt&&(o.shapeFlag&6?Qt[Qt.indexOf(n)]=o:Qt.push(o)),o.patchFlag|=-2,o}if($p(n)&&(n=n.__vccOpts),e){e=Hp(e);let{class:o,style:l}=e;o&&!gt(o)&&(e.class=ja(o)),at(l)&&(uh(l)&&!Oe(l)&&(l=ft({},l)),e.style=qa(l))}const a=gt(n)?1:tp(n)?128:Ip(n)?64:at(n)?4:Ge(n)?2:0;return pt(n,e,t,i,r,a,s,!0)}function Hp(n){return n?uh(n)||mo in n?ft({},n):n:null}function Ki(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Vp(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Nh(o),ref:e&&e.ref?t&&r?Oe(r)?r.concat(Ks(e)):[r,Ks(e)]:Ks(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==yn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ki(n.ssContent),ssFallback:n.ssFallback&&Ki(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Gp(n=" ",e=0){return Gn(po,null,n,e)}function on(n){return n==null||typeof n=="boolean"?Gn(Jr):Oe(n)?Gn(yn,null,n.slice()):typeof n=="object"?Nn(n):Gn(po,null,String(n))}function Nn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ki(n)}function ll(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ll(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(mo in e)?e._ctx=un:r===3&&un&&(un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:un},t=32):(e=String(e),i&64?(t=16,e=[Gp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ja([e.class,i.class]));else if(r==="style")e.style=qa([e.style,i.style]);else if(oo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Oe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function sn(n,e,t,i=null){tn(n,e,7,[t,i])}const kp=Ah();let Wp=0;function Xp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||kp,s={uid:Wp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ch(i,r),emitsOptions:_h(i,r),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:i.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Kf.bind(null,s),n.ce&&n.ce(s),s}let St=null,cl,gi,tc="__VUE_INSTANCE_SETTERS__";(gi=ga()[tc])||(gi=ga()[tc]=[]),gi.push(n=>St=n),cl=n=>{gi.length>1?gi.forEach(e=>e(n)):gi[0](n)};const $i=n=>{cl(n),n.scope.on()},ai=()=>{St&&St.scope.off(),cl(null)};function Oh(n){return n.vnode.shapeFlag&4}let es=!1;function Yp(n,e=!1){es=e;const{props:t,children:i}=n.vnode,r=Oh(n);Ap(n,t,r,e),Rp(n,i);const s=r?qp(n,e):void 0;return es=!1,s}function qp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=hh(new Proxy(n.ctx,_p));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Kp(n):null;$i(n),ir();const s=Hn(i,n,0,[n.props,r]);if(rr(),ai(),$u(s)){if(s.then(ai,ai),e)return s.then(a=>{nc(n,a,e)}).catch(a=>{uo(a,n,0)});n.asyncDep=s}else nc(n,s,e)}else Fh(n,e)}function nc(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=dh(e)),Fh(n,t)}let ic;function Fh(n,e,t){const i=n.type;if(!n.render){if(!e&&ic&&!i.render){const r=i.template||ol(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=ft(ft({isCustomElement:s,delimiters:o},a),l);i.render=ic(r,c)}}n.render=i.render||en}$i(n),ir(),vp(n),rr(),ai()}function jp(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ut(n,"get","$attrs"),e[t]}}))}function Kp(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return jp(n)},slots:n.slots,emit:n.emit,expose:e}}function ul(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(dh(hh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Wr)return Wr[t](n)},has(e,t){return t in e||t in Wr}}))}function $p(n){return Ge(n)&&"__vccOpts"in n}const Zp=(n,e)=>Vf(n,e,es),Jp=Symbol.for("v-scx"),Qp=()=>js(Jp),em="3.3.4",tm="http://www.w3.org/2000/svg",ri=typeof document<"u"?document:null,rc=ri&&ri.createElement("template"),nm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ri.createElementNS(tm,n):ri.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{rc.innerHTML=i?`<svg>${n}</svg>`:n;const o=rc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function im(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function rm(n,e,t){const i=n.style,r=gt(t);if(t&&!r){if(e&&!gt(e))for(const s in e)t[s]==null&&Ca(i,s,"");for(const s in t)Ca(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const sc=/\s*!important$/;function Ca(n,e,t){if(Oe(t))t.forEach(i=>Ca(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=sm(n,e);sc.test(t)?n.setProperty(nr(i),t.replace(sc,""),"important"):n[i]=t}}const oc=["Webkit","Moz","ms"],No={};function sm(n,e){const t=No[e];if(t)return t;let i=ji(e);if(i!=="filter"&&i in n)return No[e]=i;i=Zu(i);for(let r=0;r<oc.length;r++){const s=oc[r]+i;if(s in n)return No[e]=s}return e}const ac="http://www.w3.org/1999/xlink";function om(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(ac,e.slice(6,e.length)):n.setAttributeNS(ac,e,t);else{const s=af(e);t==null||s&&!Ju(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function am(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Ju(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function lm(n,e,t,i){n.addEventListener(e,t,i)}function cm(n,e,t,i){n.removeEventListener(e,t,i)}function um(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=hm(e);if(i){const c=s[e]=pm(i,r);lm(n,o,c,l)}else a&&(cm(n,o,a,l),s[e]=void 0)}}const lc=/(?:Once|Passive|Capture)$/;function hm(n){let e;if(lc.test(n)){e={};let i;for(;i=n.match(lc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):nr(n.slice(2)),e]}let Oo=0;const dm=Promise.resolve(),fm=()=>Oo||(dm.then(()=>Oo=0),Oo=Date.now());function pm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;tn(mm(i,t.value),e,5,[i])};return t.value=n,t.attached=fm(),t}function mm(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const cc=/^on[a-z]/,gm=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?im(n,i,r):e==="style"?rm(n,t,i):oo(e)?ka(e)||um(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_m(n,e,i,r))?am(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),om(n,e,i,r))};function _m(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&cc.test(e)&&Ge(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||cc.test(e)&&gt(t)?!1:e in n}const vm=ft({patchProp:gm},nm);let uc;function xm(){return uc||(uc=Pp(vm))}const Mm=(...n)=>{const e=xm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Sm(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Sm(n){return gt(n)?document.querySelector(n):n}class nn{constructor(e){this._canceled=!1,this.data=e}get type(){return this.constructor.type}get cancelable(){return this.constructor.cancelable}cancel(){this._canceled=!0}canceled(){return this._canceled}clone(e){return new this.constructor({...this.data,...e})}}nn.type="event";nn.cancelable=!1;class go{constructor(e){this.draggable=e}attach(){throw new Error("Not Implemented")}detach(){throw new Error("Not Implemented")}}const _i={mouse:0,drag:0,touch:100};class Bh{constructor(e=[],t={}){this.containers=[...e],this.options={...t},this.dragging=!1,this.currentContainer=null,this.originalSource=null,this.startEvent=null,this.delay=Em(t.delay)}attach(){return this}detach(){return this}addContainer(...e){this.containers=[...this.containers,...e]}removeContainer(...e){this.containers=this.containers.filter(t=>!e.includes(t))}trigger(e,t){const i=document.createEvent("Event");return i.detail=t,i.initEvent(t.type,!0,!0),e.dispatchEvent(i),this.lastEvent=t,t}}function Em(n){const e={};if(n===void 0)return{..._i};if(typeof n=="number"){for(const t in _i)Object.prototype.hasOwnProperty.call(_i,t)&&(e[t]=n);return e}for(const t in _i)Object.prototype.hasOwnProperty.call(_i,t)&&(n[t]===void 0?e[t]=_i[t]:e[t]=n[t]);return e}function Vt(n,e){if(n==null)return null;function t(r){return r==null||e==null?!1:ym(e)?Element.prototype.matches.call(r,e):bm(e)?[...e].includes(r):Tm(e)?e===r:Am(e)?e(r):!1}let i=n;do{if(i=i.correspondingUseElement||i.correspondingElement||i,t(i))return i;i=(i==null?void 0:i.parentNode)||null}while(i!=null&&i!==document.body&&i!==document);return null}function ym(n){return typeof n=="string"}function bm(n){return n instanceof NodeList||n instanceof Array}function Tm(n){return n instanceof Node}function Am(n){return typeof n=="function"}function zh(n,e,t,i){return Math.sqrt((t-n)**2+(i-e)**2)}class _o extends nn{get originalEvent(){return this.data.originalEvent}get clientX(){return this.data.clientX}get clientY(){return this.data.clientY}get target(){return this.data.target}get container(){return this.data.container}get originalSource(){return this.data.originalSource}get pressure(){return this.data.pressure}}class hl extends _o{}hl.type="drag:start";class dl extends _o{}dl.type="drag:move";class fl extends _o{}fl.type="drag:stop";class wm extends _o{}wm.type="drag:pressure";const fr=Symbol("onContextMenuWhileDragging"),pr=Symbol("onMouseDown"),mr=Symbol("onMouseMove"),gr=Symbol("onMouseUp"),vs=Symbol("startDrag"),Rn=Symbol("onDistanceChange");class Cm extends Bh{constructor(e=[],t={}){super(e,t),this.mouseDownTimeout=null,this.pageX=null,this.pageY=null,this[fr]=this[fr].bind(this),this[pr]=this[pr].bind(this),this[mr]=this[mr].bind(this),this[gr]=this[gr].bind(this),this[vs]=this[vs].bind(this),this[Rn]=this[Rn].bind(this)}attach(){document.addEventListener("mousedown",this[pr],!0)}detach(){document.removeEventListener("mousedown",this[pr],!0)}[pr](e){if(e.button!==0||e.ctrlKey||e.metaKey)return;const t=Vt(e.target,this.containers);if(!t||this.options.handle&&e.target&&!Vt(e.target,this.options.handle))return;const i=Vt(e.target,this.options.draggable);if(!i)return;const{delay:r}=this,{pageX:s,pageY:a}=e;Object.assign(this,{pageX:s,pageY:a}),this.onMouseDownAt=Date.now(),this.startEvent=e,this.currentContainer=t,this.originalSource=i,document.addEventListener("mouseup",this[gr]),document.addEventListener("dragstart",hc),document.addEventListener("mousemove",this[Rn]),this.mouseDownTimeout=window.setTimeout(()=>{this[Rn]({pageX:this.pageX,pageY:this.pageY})},r.mouse)}[vs](){const e=this.startEvent,t=this.currentContainer,i=this.originalSource,r=new hl({clientX:e.clientX,clientY:e.clientY,target:e.target,container:t,originalSource:i,originalEvent:e});this.trigger(this.currentContainer,r),this.dragging=!r.canceled(),this.dragging&&(document.addEventListener("contextmenu",this[fr],!0),document.addEventListener("mousemove",this[mr]))}[Rn](e){const{pageX:t,pageY:i}=e,{distance:r}=this.options,{startEvent:s,delay:a}=this;if(Object.assign(this,{pageX:t,pageY:i}),!this.currentContainer)return;const o=Date.now()-this.onMouseDownAt,l=zh(s.pageX,s.pageY,t,i)||0;clearTimeout(this.mouseDownTimeout),o<a.mouse?document.removeEventListener("mousemove",this[Rn]):l>=r&&(document.removeEventListener("mousemove",this[Rn]),this[vs]())}[mr](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),i=new dl({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,i)}[gr](e){if(clearTimeout(this.mouseDownTimeout),e.button!==0||(document.removeEventListener("mouseup",this[gr]),document.removeEventListener("dragstart",hc),document.removeEventListener("mousemove",this[Rn]),!this.dragging))return;const t=document.elementFromPoint(e.clientX,e.clientY),i=new fl({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,i),document.removeEventListener("contextmenu",this[fr],!0),document.removeEventListener("mousemove",this[mr]),this.currentContainer=null,this.dragging=!1,this.startEvent=null}[fr](e){e.preventDefault()}}function hc(n){n.preventDefault()}function vi(n){const{touches:e,changedTouches:t}=n;return e&&e[0]||t&&t[0]}const _r=Symbol("onTouchStart"),Zn=Symbol("onTouchEnd"),vr=Symbol("onTouchMove"),xs=Symbol("startDrag"),Ln=Symbol("onDistanceChange");let $s=!1;window.addEventListener("touchmove",n=>{$s&&n.preventDefault()},{passive:!1});class Rm extends Bh{constructor(e=[],t={}){super(e,t),this.currentScrollableParent=null,this.tapTimeout=null,this.touchMoved=!1,this.pageX=null,this.pageY=null,this[_r]=this[_r].bind(this),this[Zn]=this[Zn].bind(this),this[vr]=this[vr].bind(this),this[xs]=this[xs].bind(this),this[Ln]=this[Ln].bind(this)}attach(){document.addEventListener("touchstart",this[_r])}detach(){document.removeEventListener("touchstart",this[_r])}[_r](e){const t=Vt(e.target,this.containers);if(!t||this.options.handle&&e.target&&!Vt(e.target,this.options.handle))return;const i=Vt(e.target,this.options.draggable);if(!i)return;const{distance:r=0}=this.options,{delay:s}=this,{pageX:a,pageY:o}=vi(e);Object.assign(this,{pageX:a,pageY:o}),this.onTouchStartAt=Date.now(),this.startEvent=e,this.currentContainer=t,this.originalSource=i,document.addEventListener("touchend",this[Zn]),document.addEventListener("touchcancel",this[Zn]),document.addEventListener("touchmove",this[Ln]),t.addEventListener("contextmenu",dc),r&&($s=!0),this.tapTimeout=window.setTimeout(()=>{this[Ln]({touches:[{pageX:this.pageX,pageY:this.pageY}]})},s.touch)}[xs](){const e=this.startEvent,t=this.currentContainer,i=vi(e),r=this.originalSource,s=new hl({clientX:i.pageX,clientY:i.pageY,target:e.target,container:t,originalSource:r,originalEvent:e});this.trigger(this.currentContainer,s),this.dragging=!s.canceled(),this.dragging&&document.addEventListener("touchmove",this[vr]),$s=this.dragging}[Ln](e){const{distance:t}=this.options,{startEvent:i,delay:r}=this,s=vi(i),a=vi(e),o=Date.now()-this.onTouchStartAt,l=zh(s.pageX,s.pageY,a.pageX,a.pageY);Object.assign(this,a),clearTimeout(this.tapTimeout),o<r.touch?document.removeEventListener("touchmove",this[Ln]):l>=t&&(document.removeEventListener("touchmove",this[Ln]),this[xs]())}[vr](e){if(!this.dragging)return;const{pageX:t,pageY:i}=vi(e),r=document.elementFromPoint(t-window.scrollX,i-window.scrollY),s=new dl({clientX:t,clientY:i,target:r,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,s)}[Zn](e){if(clearTimeout(this.tapTimeout),$s=!1,document.removeEventListener("touchend",this[Zn]),document.removeEventListener("touchcancel",this[Zn]),document.removeEventListener("touchmove",this[Ln]),this.currentContainer&&this.currentContainer.removeEventListener("contextmenu",dc),!this.dragging)return;document.removeEventListener("touchmove",this[vr]);const{pageX:t,pageY:i}=vi(e),r=document.elementFromPoint(t-window.scrollX,i-window.scrollY);e.preventDefault();const s=new fl({clientX:t,clientY:i,target:r,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,s),this.currentContainer=null,this.dragging=!1,this.startEvent=null}}function dc(n){n.preventDefault(),n.stopPropagation()}class pl extends nn{get dragEvent(){return this.data.dragEvent}}pl.type="collidable";class Lm extends pl{get collidingElement(){return this.data.collidingElement}}Lm.type="collidable:in";class Pm extends pl{get collidingElement(){return this.data.collidingElement}}Pm.type="collidable:out";class fn extends nn{constructor(e){super(e),this.data=e}get source(){return this.data.source}get originalSource(){return this.data.originalSource}get mirror(){return this.data.mirror}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}fn.type="drag";class ml extends fn{}ml.type="drag:start";ml.cancelable=!0;class Hh extends fn{}Hh.type="drag:move";class gl extends fn{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}gl.type="drag:over";gl.cancelable=!0;class Gh extends fn{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}Gh.type="drag:out";class Vh extends fn{get overContainer(){return this.data.overContainer}}Vh.type="drag:over:container";class kh extends fn{get overContainer(){return this.data.overContainer}}kh.type="drag:out:container";class Wh extends fn{get pressure(){return this.data.pressure}}Wh.type="drag:pressure";class _l extends fn{}_l.type="drag:stop";_l.cancelable=!0;class Xh extends fn{}Xh.type="drag:stopped";class vl extends nn{get dragEvent(){return this.data.dragEvent}get snappable(){return this.data.snappable}}vl.type="snap";class Yh extends vl{}Yh.type="snap:in";Yh.cancelable=!0;class qh extends vl{}qh.type="snap:out";qh.cancelable=!0;const Ms=Symbol("onInitialize"),Ss=Symbol("onDestroy"),fc=Symbol("announceEvent"),Fo=Symbol("announceMessage"),Dm="aria-relevant",Um="aria-atomic",Im="aria-live",Nm="role",Om={expire:7e3};class Fm extends go{constructor(e){super(e),this.options={...Om,...this.getOptions()},this.originalTriggerMethod=this.draggable.trigger,this[Ms]=this[Ms].bind(this),this[Ss]=this[Ss].bind(this)}attach(){this.draggable.on("draggable:initialize",this[Ms])}detach(){this.draggable.off("draggable:destroy",this[Ss])}getOptions(){return this.draggable.options.announcements||{}}[fc](e){const t=this.options[e.type];t&&typeof t=="string"&&this[Fo](t),t&&typeof t=="function"&&this[Fo](t(e))}[Fo](e){Bm(e,{expire:this.options.expire})}[Ms](){this.draggable.trigger=e=>{try{this[fc](e)}finally{this.originalTriggerMethod.call(this.draggable,e)}}}[Ss](){this.draggable.trigger=this.originalTriggerMethod}}const Ra=zm();function Bm(n,{expire:e}){const t=document.createElement("div");return t.textContent=n,Ra.appendChild(t),setTimeout(()=>{Ra.removeChild(t)},e)}function zm(){const n=document.createElement("div");return n.setAttribute("id","draggable-live-region"),n.setAttribute(Dm,"additions"),n.setAttribute(Um,"true"),n.setAttribute(Im,"assertive"),n.setAttribute(Nm,"log"),n.style.position="fixed",n.style.width="1px",n.style.height="1px",n.style.top="-1px",n.style.overflow="hidden",n}document.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(Ra)});const xr=Symbol("onInitialize"),xi=Symbol("onDestroy"),Hm={};class Gm extends go{constructor(e){super(e),this.options={...Hm,...this.getOptions()},this[xr]=this[xr].bind(this),this[xi]=this[xi].bind(this)}attach(){this.draggable.on("draggable:initialize",this[xr]).on("draggable:destroy",this[xi])}detach(){this.draggable.off("draggable:initialize",this[xr]).off("draggable:destroy",this[xi]),this[xi]()}getOptions(){return this.draggable.options.focusable||{}}getElements(){return[...this.draggable.containers,...this.draggable.getDraggableElements()]}[xr](){requestAnimationFrame(()=>{this.getElements().forEach(e=>Vm(e))})}[xi](){requestAnimationFrame(()=>{this.getElements().forEach(e=>km(e))})}}const La=[];function Vm(n){!n.getAttribute("tabindex")&&n.tabIndex===-1&&(La.push(n),n.tabIndex=0)}function km(n){const e=La.indexOf(n);e!==-1&&(n.tabIndex=-1,La.splice(e,1))}class sr extends nn{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get dragEvent(){return this.data.dragEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}class jh extends sr{}jh.type="mirror:create";class Kh extends sr{get mirror(){return this.data.mirror}}Kh.type="mirror:created";class $h extends sr{get mirror(){return this.data.mirror}}$h.type="mirror:attached";class xl extends sr{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}xl.type="mirror:move";xl.cancelable=!0;class Zh extends sr{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}Zh.type="mirror:moved";class Ml extends sr{get mirror(){return this.data.mirror}}Ml.type="mirror:destroy";Ml.cancelable=!0;const Mr=Symbol("onDragStart"),Sr=Symbol("onDragMove"),Er=Symbol("onDragStop"),yr=Symbol("onMirrorCreated"),br=Symbol("onMirrorMove"),Tr=Symbol("onScroll"),pc=Symbol("getAppendableContainer"),Wm={constrainDimensions:!1,xAxis:!0,yAxis:!0,cursorOffsetX:null,cursorOffsetY:null,thresholdX:null,thresholdY:null};class Xm extends go{constructor(e){super(e),this.options={...Wm,...this.getOptions()},this.scrollOffset={x:0,y:0},this.initialScrollOffset={x:window.scrollX,y:window.scrollY},this[Mr]=this[Mr].bind(this),this[Sr]=this[Sr].bind(this),this[Er]=this[Er].bind(this),this[yr]=this[yr].bind(this),this[br]=this[br].bind(this),this[Tr]=this[Tr].bind(this)}attach(){this.draggable.on("drag:start",this[Mr]).on("drag:move",this[Sr]).on("drag:stop",this[Er]).on("mirror:created",this[yr]).on("mirror:move",this[br])}detach(){this.draggable.off("drag:start",this[Mr]).off("drag:move",this[Sr]).off("drag:stop",this[Er]).off("mirror:created",this[yr]).off("mirror:move",this[br])}getOptions(){return this.draggable.options.mirror||{}}[Mr](e){if(e.canceled())return;"ontouchstart"in window&&document.addEventListener("scroll",this[Tr],!0),this.initialScrollOffset={x:window.scrollX,y:window.scrollY};const{source:t,originalSource:i,sourceContainer:r,sensorEvent:s}=e;this.lastMirrorMovedClient={x:s.clientX,y:s.clientY};const a=new jh({source:t,originalSource:i,sourceContainer:r,sensorEvent:s,dragEvent:e});if(this.draggable.trigger(a),Zm(s)||a.canceled())return;const o=this[pc](t)||r;this.mirror=t.cloneNode(!0);const l=new Kh({source:t,originalSource:i,sourceContainer:r,sensorEvent:s,dragEvent:e,mirror:this.mirror}),c=new $h({source:t,originalSource:i,sourceContainer:r,sensorEvent:s,dragEvent:e,mirror:this.mirror});this.draggable.trigger(l),o.appendChild(this.mirror),this.draggable.trigger(c)}[Sr](e){if(!this.mirror||e.canceled())return;const{source:t,originalSource:i,sourceContainer:r,sensorEvent:s}=e;let a=!0,o=!0;if(this.options.thresholdX||this.options.thresholdY){const{x:c,y:u}=this.lastMirrorMovedClient;if(Math.abs(c-s.clientX)<this.options.thresholdX?a=!1:this.lastMirrorMovedClient.x=s.clientX,Math.abs(u-s.clientY)<this.options.thresholdY?o=!1:this.lastMirrorMovedClient.y=s.clientY,!a&&!o)return}const l=new xl({source:t,originalSource:i,sourceContainer:r,sensorEvent:s,dragEvent:e,mirror:this.mirror,passedThreshX:a,passedThreshY:o});this.draggable.trigger(l)}[Er](e){if("ontouchstart"in window&&document.removeEventListener("scroll",this[Tr],!0),this.initialScrollOffset={x:0,y:0},this.scrollOffset={x:0,y:0},!this.mirror)return;const{source:t,sourceContainer:i,sensorEvent:r}=e,s=new Ml({source:t,mirror:this.mirror,sourceContainer:i,sensorEvent:r,dragEvent:e});this.draggable.trigger(s),s.canceled()||this.mirror.remove()}[Tr](){this.scrollOffset={x:window.scrollX-this.initialScrollOffset.x,y:window.scrollY-this.initialScrollOffset.y}}[yr]({mirror:e,source:t,sensorEvent:i}){const r=this.draggable.getClassNamesFor("mirror"),s=({mirrorOffset:o,initialX:l,initialY:c,...u})=>(this.mirrorOffset=o,this.initialX=l,this.initialY=c,this.lastMovedX=l,this.lastMovedY=c,{mirrorOffset:o,initialX:l,initialY:c,...u});e.style.display="none";const a={mirror:e,source:t,sensorEvent:i,mirrorClasses:r,scrollOffset:this.scrollOffset,options:this.options,passedThreshX:!0,passedThreshY:!0};return Promise.resolve(a).then(Ym).then(qm).then(jm).then(Km).then(mc({initial:!0})).then($m).then(s)}[br](e){if(e.canceled())return null;const t=({lastMovedX:s,lastMovedY:a,...o})=>(this.lastMovedX=s,this.lastMovedY=a,{lastMovedX:s,lastMovedY:a,...o}),i=s=>{const a=new Zh({source:e.source,originalSource:e.originalSource,sourceContainer:e.sourceContainer,sensorEvent:e.sensorEvent,dragEvent:e.dragEvent,mirror:this.mirror,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY});return this.draggable.trigger(a),s},r={mirror:e.mirror,sensorEvent:e.sensorEvent,mirrorOffset:this.mirrorOffset,options:this.options,initialX:this.initialX,initialY:this.initialY,scrollOffset:this.scrollOffset,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY,lastMovedX:this.lastMovedX,lastMovedY:this.lastMovedY};return Promise.resolve(r).then(mc({raf:!0})).then(t).then(i)}[pc](e){const t=this.options.appendTo;return typeof t=="string"?document.querySelector(t):t instanceof HTMLElement?t:typeof t=="function"?t(e):e.parentNode}}function Ym({source:n,...e}){return or(t=>{const i=n.getBoundingClientRect();t({source:n,sourceRect:i,...e})})}function qm({sensorEvent:n,sourceRect:e,options:t,...i}){return or(r=>{const s=t.cursorOffsetY===null?n.clientY-e.top:t.cursorOffsetY,a=t.cursorOffsetX===null?n.clientX-e.left:t.cursorOffsetX;r({sensorEvent:n,sourceRect:e,mirrorOffset:{top:s,left:a},options:t,...i})})}function jm({mirror:n,source:e,options:t,...i}){return or(r=>{let s,a;if(t.constrainDimensions){const o=getComputedStyle(e);s=o.getPropertyValue("height"),a=o.getPropertyValue("width")}n.style.display=null,n.style.position="fixed",n.style.pointerEvents="none",n.style.top=0,n.style.left=0,n.style.margin=0,t.constrainDimensions&&(n.style.height=s,n.style.width=a),r({mirror:n,source:e,options:t,...i})})}function Km({mirror:n,mirrorClasses:e,...t}){return or(i=>{n.classList.add(...e),i({mirror:n,mirrorClasses:e,...t})})}function $m({mirror:n,...e}){return or(t=>{n.removeAttribute("id"),delete n.id,t({mirror:n,...e})})}function mc({withFrame:n=!1,initial:e=!1}={}){return({mirror:t,sensorEvent:i,mirrorOffset:r,initialY:s,initialX:a,scrollOffset:o,options:l,passedThreshX:c,passedThreshY:u,lastMovedX:h,lastMovedY:d,...m})=>or(x=>{const v={mirror:t,sensorEvent:i,mirrorOffset:r,options:l,...m};if(r){const p=c?Math.round((i.clientX-r.left-o.x)/(l.thresholdX||1))*(l.thresholdX||1):Math.round(h),f=u?Math.round((i.clientY-r.top-o.y)/(l.thresholdY||1))*(l.thresholdY||1):Math.round(d);l.xAxis&&l.yAxis||e?t.style.transform=`translate3d(${p}px, ${f}px, 0)`:l.xAxis&&!l.yAxis?t.style.transform=`translate3d(${p}px, ${s}px, 0)`:l.yAxis&&!l.xAxis&&(t.style.transform=`translate3d(${a}px, ${f}px, 0)`),e&&(v.initialX=p,v.initialY=f),v.lastMovedX=p,v.lastMovedY=f}x(v)},{frame:n})}function or(n,{raf:e=!1}={}){return new Promise((t,i)=>{e?requestAnimationFrame(()=>{n(t,i)}):n(t,i)})}function Zm(n){return/^drag/.test(n.originalEvent.type)}const Ar=Symbol("onDragStart"),wr=Symbol("onDragMove"),Cr=Symbol("onDragStop"),Rr=Symbol("scroll"),Jm={speed:6,sensitivity:50,scrollableElements:[]};class Qm extends go{constructor(e){super(e),this.options={...Jm,...this.getOptions()},this.currentMousePosition=null,this.scrollAnimationFrame=null,this.scrollableElement=null,this.findScrollableElementFrame=null,this[Ar]=this[Ar].bind(this),this[wr]=this[wr].bind(this),this[Cr]=this[Cr].bind(this),this[Rr]=this[Rr].bind(this)}attach(){this.draggable.on("drag:start",this[Ar]).on("drag:move",this[wr]).on("drag:stop",this[Cr])}detach(){this.draggable.off("drag:start",this[Ar]).off("drag:move",this[wr]).off("drag:stop",this[Cr])}getOptions(){return this.draggable.options.scrollable||{}}getScrollableElement(e){return this.hasDefinedScrollableElements()?Vt(e,this.options.scrollableElements)||document.documentElement:ng(e)}hasDefinedScrollableElements(){return this.options.scrollableElements.length!==0}[Ar](e){this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.source)})}[wr](e){if(this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.sensorEvent.target)}),!this.scrollableElement)return;const t=e.sensorEvent,i={x:0,y:0};"ontouchstart"in window&&(i.y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,i.x=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0),this.currentMousePosition={clientX:t.clientX-i.x,clientY:t.clientY-i.y},this.scrollAnimationFrame=requestAnimationFrame(this[Rr])}[Cr](){cancelAnimationFrame(this.scrollAnimationFrame),cancelAnimationFrame(this.findScrollableElementFrame),this.scrollableElement=null,this.scrollAnimationFrame=null,this.findScrollableElementFrame=null,this.currentMousePosition=null}[Rr](){if(!this.scrollableElement||!this.currentMousePosition)return;cancelAnimationFrame(this.scrollAnimationFrame);const{speed:e,sensitivity:t}=this.options,i=this.scrollableElement.getBoundingClientRect(),r=i.bottom>window.innerHeight,a=i.top<0||r,o=Pa(),l=this.scrollableElement,c=this.currentMousePosition.clientX,u=this.currentMousePosition.clientY;if(l!==document.body&&l!==document.documentElement&&!a){const{offsetHeight:h,offsetWidth:d}=l;i.top+h-u<t?l.scrollTop+=e:u-i.top<t&&(l.scrollTop-=e),i.left+d-c<t?l.scrollLeft+=e:c-i.left<t&&(l.scrollLeft-=e)}else{const{innerHeight:h,innerWidth:d}=window;u<t?o.scrollTop-=e:h-u<t&&(o.scrollTop+=e),c<t?o.scrollLeft-=e:d-c<t&&(o.scrollLeft+=e)}this.scrollAnimationFrame=requestAnimationFrame(this[Rr])}}function eg(n){const e=/(auto|scroll)/,t=getComputedStyle(n,null),i=t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x");return e.test(i)}function tg(n){return getComputedStyle(n).getPropertyValue("position")==="static"}function ng(n){if(!n)return Pa();const e=getComputedStyle(n).getPropertyValue("position"),t=e==="absolute",i=Vt(n,r=>t&&tg(r)?!1:eg(r));return e==="fixed"||!i?Pa():i}function Pa(){return document.scrollingElement||document.documentElement}class ig{constructor(){this.callbacks={}}on(e,...t){return this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(...t),this}off(e,t){if(!this.callbacks[e])return null;const i=this.callbacks[e].slice(0);for(let r=0;r<i.length;r++)t===i[r]&&this.callbacks[e].splice(r,1);return this}trigger(e){if(!this.callbacks[e.type])return null;const t=[...this.callbacks[e.type]],i=[];for(let r=t.length-1;r>=0;r--){const s=t[r];try{s(e)}catch(a){i.push(a)}}return i.length&&console.error(`Draggable caught errors while triggering '${e.type}'`,i),this}}class Sl extends nn{get draggable(){return this.data.draggable}}Sl.type="draggable";class Jh extends Sl{}Jh.type="draggable:initialize";class Qh extends Sl{}Qh.type="draggable:destroy";const Lr=Symbol("onDragStart"),Mi=Symbol("onDragMove"),Pr=Symbol("onDragStop"),Dr=Symbol("onDragPressure"),Ur=Symbol("dragStop"),rg={"drag:start":n=>`Picked up ${n.source.textContent.trim()||n.source.id||"draggable element"}`,"drag:stop":n=>`Released ${n.source.textContent.trim()||n.source.id||"draggable element"}`},sg={"container:dragging":"draggable-container--is-dragging","source:dragging":"draggable-source--is-dragging","source:placed":"draggable-source--placed","container:placed":"draggable-container--placed","body:dragging":"draggable--is-dragging","draggable:over":"draggable--over","container:over":"draggable-container--over","source:original":"draggable--original",mirror:"draggable-mirror"},og={draggable:".draggable-source",handle:null,delay:{},distance:0,placedTimeout:800,plugins:[],sensors:[],exclude:{plugins:[],sensors:[]}};class Zi{constructor(e=[document.body],t={}){if(e instanceof NodeList||e instanceof Array)this.containers=[...e];else if(e instanceof HTMLElement)this.containers=[e];else throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");this.options={...og,...t,classes:{...sg,...t.classes||{}},announcements:{...rg,...t.announcements||{}},exclude:{plugins:t.exclude&&t.exclude.plugins||[],sensors:t.exclude&&t.exclude.sensors||[]}},this.emitter=new ig,this.dragging=!1,this.plugins=[],this.sensors=[],this[Lr]=this[Lr].bind(this),this[Mi]=this[Mi].bind(this),this[Pr]=this[Pr].bind(this),this[Dr]=this[Dr].bind(this),this[Ur]=this[Ur].bind(this),document.addEventListener("drag:start",this[Lr],!0),document.addEventListener("drag:move",this[Mi],!0),document.addEventListener("drag:stop",this[Pr],!0),document.addEventListener("drag:pressure",this[Dr],!0);const i=Object.values(Zi.Plugins).filter(a=>!this.options.exclude.plugins.includes(a)),r=Object.values(Zi.Sensors).filter(a=>!this.options.exclude.sensors.includes(a));this.addPlugin(...i,...this.options.plugins),this.addSensor(...r,...this.options.sensors);const s=new Jh({draggable:this});this.on("mirror:created",({mirror:a})=>this.mirror=a),this.on("mirror:destroy",()=>this.mirror=null),this.trigger(s)}destroy(){document.removeEventListener("drag:start",this[Lr],!0),document.removeEventListener("drag:move",this[Mi],!0),document.removeEventListener("drag:stop",this[Pr],!0),document.removeEventListener("drag:pressure",this[Dr],!0);const e=new Qh({draggable:this});this.trigger(e),this.removePlugin(...this.plugins.map(t=>t.constructor)),this.removeSensor(...this.sensors.map(t=>t.constructor))}addPlugin(...e){const t=e.map(i=>new i(this));return t.forEach(i=>i.attach()),this.plugins=[...this.plugins,...t],this}removePlugin(...e){return this.plugins.filter(i=>e.includes(i.constructor)).forEach(i=>i.detach()),this.plugins=this.plugins.filter(i=>!e.includes(i.constructor)),this}addSensor(...e){const t=e.map(i=>new i(this.containers,this.options));return t.forEach(i=>i.attach()),this.sensors=[...this.sensors,...t],this}removeSensor(...e){return this.sensors.filter(i=>e.includes(i.constructor)).forEach(i=>i.detach()),this.sensors=this.sensors.filter(i=>!e.includes(i.constructor)),this}addContainer(...e){return this.containers=[...this.containers,...e],this.sensors.forEach(t=>t.addContainer(...e)),this}removeContainer(...e){return this.containers=this.containers.filter(t=>!e.includes(t)),this.sensors.forEach(t=>t.removeContainer(...e)),this}on(e,...t){return this.emitter.on(e,...t),this}off(e,t){return this.emitter.off(e,t),this}trigger(e){return this.emitter.trigger(e),this}getClassNameFor(e){return this.getClassNamesFor(e)[0]}getClassNamesFor(e){const t=this.options.classes[e];return t instanceof Array?t:typeof t=="string"||t instanceof String?[t]:[]}isDragging(){return!!this.dragging}getDraggableElements(){return this.containers.reduce((e,t)=>[...e,...this.getDraggableElementsForContainer(t)],[])}getDraggableElementsForContainer(e){return[...e.querySelectorAll(this.options.draggable)].filter(i=>i!==this.originalSource&&i!==this.mirror)}cancel(){this[Ur]()}[Lr](e){const t=Es(e),{target:i,container:r,originalSource:s}=t;if(!this.containers.includes(r))return;if(this.options.handle&&i&&!Vt(i,this.options.handle)){t.cancel();return}this.originalSource=s,this.sourceContainer=r,this.lastPlacedSource&&this.lastPlacedContainer&&(clearTimeout(this.placedTimeoutID),this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"))),this.source=this.originalSource.cloneNode(!0),this.originalSource.parentNode.insertBefore(this.source,this.originalSource),this.originalSource.style.display="none";const a=new ml({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t});if(this.trigger(a),this.dragging=!a.canceled(),a.canceled()){this.source.remove(),this.originalSource.style.display=null;return}this.originalSource.classList.add(...this.getClassNamesFor("source:original")),this.source.classList.add(...this.getClassNamesFor("source:dragging")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:dragging")),document.body.classList.add(...this.getClassNamesFor("body:dragging")),gc(document.body,"none"),requestAnimationFrame(()=>{const l=Es(e).clone({target:this.source});this[Mi]({...e,detail:l})})}[Mi](e){if(!this.dragging)return;const t=Es(e),{container:i}=t;let r=t.target;const s=new Hh({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t});this.trigger(s),s.canceled()&&t.cancel(),r=Vt(r,this.options.draggable);const a=Vt(t.target,this.containers),o=t.overContainer||a,l=this.currentOverContainer&&o!==this.currentOverContainer,c=this.currentOver&&r!==this.currentOver,u=o&&this.currentOverContainer!==o,h=a&&r&&this.currentOver!==r;if(c){const d=new Gh({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,over:this.currentOver,overContainer:this.currentOverContainer});this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOver=null,this.trigger(d)}if(l){const d=new kh({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:this.currentOverContainer});this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.currentOverContainer=null,this.trigger(d)}if(u){o.classList.add(...this.getClassNamesFor("container:over"));const d=new Vh({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:o});this.currentOverContainer=o,this.trigger(d)}if(h){r.classList.add(...this.getClassNamesFor("draggable:over"));const d=new gl({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:o,over:r});this.currentOver=r,this.trigger(d)}}[Ur](e){if(!this.dragging)return;this.dragging=!1;const t=new _l({source:this.source,originalSource:this.originalSource,sensorEvent:e?e.sensorEvent:null,sourceContainer:this.sourceContainer});this.trigger(t),t.canceled()||this.source.parentNode.insertBefore(this.originalSource,this.source),this.source.remove(),this.originalSource.style.display="",this.source.classList.remove(...this.getClassNamesFor("source:dragging")),this.originalSource.classList.remove(...this.getClassNamesFor("source:original")),this.originalSource.classList.add(...this.getClassNamesFor("source:placed")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:placed")),this.sourceContainer.classList.remove(...this.getClassNamesFor("container:dragging")),document.body.classList.remove(...this.getClassNamesFor("body:dragging")),gc(document.body,""),this.currentOver&&this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOverContainer&&this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.lastPlacedSource=this.originalSource,this.lastPlacedContainer=this.sourceContainer,this.placedTimeoutID=setTimeout(()=>{this.lastPlacedSource&&this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer&&this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed")),this.lastPlacedSource=null,this.lastPlacedContainer=null},this.options.placedTimeout);const i=new Xh({source:this.source,originalSource:this.originalSource,sensorEvent:e?e.sensorEvent:null,sourceContainer:this.sourceContainer});this.trigger(i),this.source=null,this.originalSource=null,this.currentOverContainer=null,this.currentOver=null,this.sourceContainer=null}[Pr](e){this[Ur](e)}[Dr](e){if(!this.dragging)return;const t=Es(e),i=this.source||Vt(t.originalEvent.target,this.options.draggable),r=new Wh({sensorEvent:t,source:i,pressure:t.pressure});this.trigger(r)}}Zi.Plugins={Announcement:Fm,Focusable:Gm,Mirror:Xm,Scrollable:Qm};Zi.Sensors={MouseSensor:Cm,TouchSensor:Rm};function Es(n){return n.detail}function gc(n,e){n.style.webkitUserSelect=e,n.style.mozUserSelect=e,n.style.msUserSelect=e,n.style.oUserSelect=e,n.style.userSelect=e}class ss extends nn{get dragEvent(){return this.data.dragEvent}}ss.type="droppable";class ed extends ss{get dropzone(){return this.data.dropzone}}ed.type="droppable:start";ed.cancelable=!0;class td extends ss{get dropzone(){return this.data.dropzone}}td.type="droppable:dropped";td.cancelable=!0;class nd extends ss{get dropzone(){return this.data.dropzone}}nd.type="droppable:returned";nd.cancelable=!0;class id extends ss{get dropzone(){return this.data.dropzone}}id.type="droppable:stop";id.cancelable=!0;class os extends nn{get dragEvent(){return this.data.dragEvent}}os.type="swappable";class rd extends os{}rd.type="swappable:start";rd.cancelable=!0;class sd extends os{get over(){return this.data.over}get overContainer(){return this.data.overContainer}}sd.type="swappable:swap";sd.cancelable=!0;class ag extends os{get swappedElement(){return this.data.swappedElement}}ag.type="swappable:swapped";class lg extends os{}lg.type="swappable:stop";class as extends nn{get dragEvent(){return this.data.dragEvent}}as.type="sortable";class od extends as{get startIndex(){return this.data.startIndex}get startContainer(){return this.data.startContainer}}od.type="sortable:start";od.cancelable=!0;class ad extends as{get currentIndex(){return this.data.currentIndex}get over(){return this.data.over}get overContainer(){return this.data.dragEvent.overContainer}}ad.type="sortable:sort";ad.cancelable=!0;class cg extends as{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}cg.type="sortable:sorted";class ug extends as{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}ug.type="sortable:stop";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="156",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hg=0,_c=1,dg=2,ld=1,fg=2,Sn=3,Yn=0,Pt=1,cn=2,Vn=0,Yi=1,vc=2,xc=3,Mc=4,pg=5,zi=100,mg=101,gg=102,Sc=103,Ec=104,_g=200,vg=201,xg=202,Mg=203,cd=204,ud=205,Sg=206,Eg=207,yg=208,bg=209,Tg=210,Ag=0,wg=1,Cg=2,Da=3,Rg=4,Lg=5,Pg=6,Dg=7,hd=0,Ug=1,Ig=2,kn=0,Ng=1,Og=2,Fg=3,Bg=4,zg=5,dd=300,Ji=301,Qi=302,Ua=303,Ia=304,vo=306,Na=1e3,Zt=1001,Oa=1002,wt=1003,yc=1004,Bo=1005,Ht=1006,Hg=1007,ts=1008,Wn=1009,Gg=1010,Vg=1011,yl=1012,fd=1013,Fn=1014,Bn=1015,ns=1016,pd=1017,md=1018,li=1020,kg=1021,Jt=1023,Wg=1024,Xg=1025,ci=1026,er=1027,Yg=1028,gd=1029,qg=1030,_d=1031,vd=1033,zo=33776,Ho=33777,Go=33778,Vo=33779,bc=35840,Tc=35841,Ac=35842,wc=35843,jg=36196,Cc=37492,Rc=37496,Lc=37808,Pc=37809,Dc=37810,Uc=37811,Ic=37812,Nc=37813,Oc=37814,Fc=37815,Bc=37816,zc=37817,Hc=37818,Gc=37819,Vc=37820,kc=37821,ko=36492,Wc=36494,Xc=36495,Kg=36283,Yc=36284,qc=36285,jc=36286,xd=3e3,ui=3001,$g=3200,Zg=3201,Md=0,Jg=1,hi="",Qe="srgb",dn="srgb-linear",xo="display-p3",Wo=7680,Qg=519,e_=512,t_=513,n_=514,i_=515,r_=516,s_=517,o_=518,a_=519,Kc=35044,$c="300 es",Fa=1035,bn=2e3,io=2001;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const Yr=Math.PI/180,is=180/Math.PI;function ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function bl(n,e){return(n%e+e)%e}function l_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function c_(n,e,t){return n!==e?(t-n)/(e-n):0}function qr(n,e,t){return(1-t)*n+t*e}function u_(n,e,t,i){return qr(n,e,1-Math.exp(-t*i))}function h_(n,e=1){return e-Math.abs(bl(n,e*2)-e)}function d_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function f_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function p_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function m_(n,e){return n+Math.random()*(e-n)}function g_(n){return n*(.5-Math.random())}function __(n){n!==void 0&&(Zc=n);let e=Zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(n){return n*Yr}function x_(n){return n*is}function Ba(n){return(n&n-1)===0&&n!==0}function M_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ro(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S_(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:Yr,RAD2DEG:is,generateUUID:ar,clamp:xt,euclideanModulo:bl,mapLinear:l_,inverseLerp:c_,lerp:qr,damp:u_,pingpong:h_,smoothstep:d_,smootherstep:f_,randInt:p_,randFloat:m_,randFloatSpread:g_,seededRandom:__,degToRad:v_,radToDeg:x_,isPowerOfTwo:Ba,ceilPowerOfTwo:M_,floorPowerOfTwo:ro,setQuaternionFromProperEuler:S_,normalize:Tt,denormalize:Hi};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],f=r[6],A=r[1],M=r[4],b=r[7],w=r[2],U=r[5],R=r[8];return s[0]=a*v+o*A+l*w,s[3]=a*p+o*M+l*U,s[6]=a*f+o*b+l*R,s[1]=c*v+u*A+h*w,s[4]=c*p+u*M+h*U,s[7]=c*f+u*b+h*R,s[2]=d*v+m*A+x*w,s[5]=d*p+m*M+x*U,s[8]=d*f+m*b+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new He;function Sd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function y_(){const n=rs("canvas");return n.style.display="block",n}const Jc={};function jr(n){n in Jc||(Jc[n]=!0,console.warn(n))}function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const b_=new He().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),T_=new He().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function A_(n){return n.convertSRGBToLinear().applyMatrix3(T_)}function w_(n){return n.applyMatrix3(b_).convertLinearToSRGB()}const C_={[dn]:n=>n,[Qe]:n=>n.convertSRGBToLinear(),[xo]:A_},R_={[dn]:n=>n,[Qe]:n=>n.convertLinearToSRGB(),[xo]:w_},Wt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return dn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=C_[e],r=R_[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let yi;class Ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=rs("canvas")),yi.width=e.width,yi.height=e.height;const i=yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L_=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qo(r[a].image)):s.push(qo(r[a]))}else s=qo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P_=0;class Dt extends mi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Zt,r=Zt,s=Ht,a=ts,o=Jt,l=Wn,c=Dt.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=ar(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ui?Qe:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?ui:xd}set encoding(e){jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ui?Qe:hi}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=dd;Dt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(m+1)/2,w=(f+1)/2,U=(u+d)/4,R=(h+v)/4,j=(x+p)/4;return M>b&&M>w?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=U/i,s=R/i):b>w?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=U/r,s=j/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=j/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-x)/A,this.y=(h-v)/A,this.z=(d-u)/A,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D_ extends mi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ui?Qe:hi),this.texture=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ht,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends D_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bd extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U_ extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(h!==v||l!==d||c!==m||u!==x){let p=1-o;const f=l*d+c*m+u*x+h*v,A=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const w=Math.sqrt(M),U=Math.atan2(w,f*A);p=Math.sin(p*U)/w,o=Math.sin(o*U)/w}const b=o*A;if(l=l*p+d*b,c=c*p+m*b,u=u*p+x*b,h=h*p+v*b,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*m-c*d,e[t+1]=l*x+u*d+c*h-o*m,e[t+2]=c*x+u*m+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h-d*m*x;break;case"YXZ":this._x=d*u*h+c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h+d*m*x;break;case"ZXY":this._x=d*u*h-c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h-d*m*x;break;case"ZYX":this._x=d*u*h-c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h+d*m*x;break;case"YZX":this._x=d*u*h+c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h-d*m*x;break;case"XZY":this._x=d*u*h-c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,h=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new N,Qc=new fi;class ls{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),bi.copy(e.boundingBox),bi.applyMatrix4(e.matrixWorld),this.union(bi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(gn)}else r.boundingBox===null&&r.computeBoundingBox(),bi.copy(r.boundingBox),bi.applyMatrix4(e.matrixWorld),this.union(bi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),ys.subVectors(this.max,Ir),Ti.subVectors(e.a,Ir),Ai.subVectors(e.b,Ir),wi.subVectors(e.c,Ir),Pn.subVectors(Ai,Ti),Dn.subVectors(wi,Ai),Jn.subVectors(Ti,wi);let t=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-Jn.z,Jn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,Jn.z,0,-Jn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-Jn.y,Jn.x,0];return!Ko(t,Ti,Ai,wi,ys)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,Ti,Ai,wi,ys))?!1:(bs.crossVectors(Pn,Dn),t=[bs.x,bs.y,bs.z],Ko(t,Ti,Ai,wi,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new N,new N,new N,new N,new N,new N,new N,new N],gn=new N,bi=new ls,Ti=new N,Ai=new N,wi=new N,Pn=new N,Dn=new N,Jn=new N,Ir=new N,ys=new N,bs=new N,Qn=new N;function Ko(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Qn.fromArray(n,s);const o=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=i.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const I_=new ls,Nr=new N,$o=new N;class Mo{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):I_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Nr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add($o)),this.expandByPoint(Nr.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new N,Zo=new N,Ts=new N,Un=new N,Jo=new N,As=new N,Qo=new N;class So{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zo.copy(e).add(t).multiplyScalar(.5),Ts.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ts),o=Un.dot(this.direction),l=-Un.dot(Ts),c=Un.lengthSq(),u=Math.abs(1-a*a);let h,d,m,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const v=1/u;h*=v,d*=v,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zo).addScaledVector(Ts,d),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,r,s){Jo.subVectors(t,e),As.subVectors(i,e),Qo.crossVectors(Jo,As);let a=this.direction.dot(Qo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(As.crossVectors(Un,As));if(l<0)return null;const c=o*this.direction.dot(Jo.cross(Un));if(c<0||l+c>a)return null;const u=-o*Un.dot(Qo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=x,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,x=c*u,v=c*h;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,x=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=x*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+x,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,O_)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),In.crossVectors(i,Ot),In.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),In.crossVectors(i,Ot)),In.normalize(),ws.crossVectors(Ot,In),r[0]=In.x,r[4]=ws.x,r[8]=Ot.x,r[1]=In.y,r[5]=ws.y,r[9]=Ot.y,r[2]=In.z,r[6]=ws.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],f=i[14],A=i[3],M=i[7],b=i[11],w=i[15],U=r[0],R=r[4],j=r[8],E=r[12],T=r[1],se=r[5],pe=r[9],V=r[13],q=r[2],Y=r[6],le=r[10],k=r[14],W=r[3],ce=r[7],ue=r[11],F=r[15];return s[0]=a*U+o*T+l*q+c*W,s[4]=a*R+o*se+l*Y+c*ce,s[8]=a*j+o*pe+l*le+c*ue,s[12]=a*E+o*V+l*k+c*F,s[1]=u*U+h*T+d*q+m*W,s[5]=u*R+h*se+d*Y+m*ce,s[9]=u*j+h*pe+d*le+m*ue,s[13]=u*E+h*V+d*k+m*F,s[2]=x*U+v*T+p*q+f*W,s[6]=x*R+v*se+p*Y+f*ce,s[10]=x*j+v*pe+p*le+f*ue,s[14]=x*E+v*V+p*k+f*F,s[3]=A*U+M*T+b*q+w*W,s[7]=A*R+M*se+b*Y+w*ce,s[11]=A*j+M*pe+b*le+w*ue,s[15]=A*E+M*V+b*k+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],f=e[15];return x*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],f=e[15],A=h*p*c-v*d*c+v*l*m-o*p*m-h*l*f+o*d*f,M=x*d*c-u*p*c-x*l*m+a*p*m+u*l*f-a*d*f,b=u*v*c-x*h*c+x*o*m-a*v*m-u*o*f+a*h*f,w=x*h*l-u*v*l-x*o*d+a*v*d+u*o*p-a*h*p,U=t*A+i*M+r*b+s*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/U;return e[0]=A*R,e[1]=(v*d*s-h*p*s-v*r*m+i*p*m+h*r*f-i*d*f)*R,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*f+i*l*f)*R,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*m-i*l*m)*R,e[4]=M*R,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*f+t*d*f)*R,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*f-t*l*f)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=b*R,e[9]=(x*h*s-u*v*s-x*i*m+t*v*m+u*i*f-t*h*f)*R,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*f+t*o*f)*R,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*m-t*o*m)*R,e[12]=w*R,e[13]=(u*v*r-x*h*r+x*i*d-t*v*d-u*i*p+t*h*p)*R,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*R,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,x=s*h,v=a*u,p=a*h,f=o*h,A=l*c,M=l*u,b=l*h,w=i.x,U=i.y,R=i.z;return r[0]=(1-(v+f))*w,r[1]=(m+b)*w,r[2]=(x-M)*w,r[3]=0,r[4]=(m-b)*U,r[5]=(1-(d+f))*U,r[6]=(p+A)*U,r[7]=0,r[8]=(x+M)*R,r[9]=(p-A)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const a=Ci.set(r[4],r[5],r[6]).length(),o=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,u=1/a,h=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=h,Xt.elements[9]*=h,Xt.elements[10]*=h,t.setFromRotationMatrix(Xt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=bn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===bn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===io)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=bn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,v;if(o===bn)x=(a+s)*h,v=-2*h;else if(o===io)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ci=new N,Xt=new ot,N_=new N(0,0,0),O_=new N(1,1,1),In=new N,ws=new N,Ot=new N,eu=new ot,tu=new fi;class Eo{constructor(e=0,t=0,i=0,r=Eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Eo.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const nu=new N,Ri=new fi,vn=new ot,Cs=new N,Or=new N,B_=new N,z_=new fi,iu=new N(1,0,0),ru=new N(0,1,0),su=new N(0,0,1),H_={type:"added"},G_={type:"removed"};class mt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new N,t=new Eo,i=new fi,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new He}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Or,Cs,this.up):vn.lookAt(Cs,Or,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(vn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(H_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,B_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DEFAULT_UP=new N(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new N,xn=new N,ea=new N,Mn=new N,Li=new N,Pi=new N,ou=new N,ta=new N,na=new N,ia=new N;let Rs=!1;class Kt{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),xn.subVectors(i,t),ea.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(xn),l=Yt.dot(ea),c=xn.dot(xn),u=xn.dot(ea),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Mn),l.setScalar(0),l.addScaledVector(s,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),xn.subVectors(e,t),Yt.cross(xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Yt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Li.subVectors(r,i),Pi.subVectors(s,i),ta.subVectors(e,i);const l=Li.dot(ta),c=Pi.dot(ta);if(l<=0&&c<=0)return t.copy(i);na.subVectors(e,r);const u=Li.dot(na),h=Pi.dot(na);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Li,a);ia.subVectors(e,s);const m=Li.dot(ia),x=Pi.dot(ia);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Pi,o);const p=u*x-m*h;if(p<=0&&h-u>=0&&m-x>=0)return ou.subVectors(s,r),o=(h-u)/(h-u+(m-x)),t.copy(r).addScaledVector(ou,o);const f=1/(p+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(Li,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let V_=0;class lr extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Yi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function ra(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Wt.workingColorSpace){if(e=bl(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ra(a,s,e+1/3),this.g=ra(a,s,e),this.b=ra(a,s,e-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(e,t=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){const i=Td[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return Wt.fromWorkingColorSpace(vt.copy(this),e),Math.round(xt(vt.r*255,0,255))*65536+Math.round(xt(vt.g*255,0,255))*256+Math.round(xt(vt.b*255,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(vt.copy(this),t);const i=vt.r,r=vt.g,s=vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Qe){Wt.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,r=vt.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=i,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(Ls);const i=qr(qt.h,Ls.h,t),r=qr(qt.s,Ls.s,t),s=qr(qt.l,Ls.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ve;Ve.NAMES=Td;class yo extends lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new N,Ps=new Ne;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kc,this.updateRange={offset:0,count:-1},this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ad extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wd extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let k_=0;const zt=new ot,sa=new mt,Di=new N,Ft=new ls,Fr=new ls,ht=new N;class wn extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?wd:Ad)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Ft.min,Fr.min),Ft.expandByPoint(ht),ht.addVectors(Ft.max,Fr.max),Ft.expandByPoint(ht)):(Ft.expandByPoint(Fr.min),Ft.expandByPoint(Fr.max))}Ft.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ht.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(e,c),ht.add(Di)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new N,u[T]=new N;const h=new N,d=new N,m=new N,x=new Ne,v=new Ne,p=new Ne,f=new N,A=new N;function M(T,se,pe){h.fromArray(r,T*3),d.fromArray(r,se*3),m.fromArray(r,pe*3),x.fromArray(a,T*2),v.fromArray(a,se*2),p.fromArray(a,pe*2),d.sub(h),m.sub(h),v.sub(x),p.sub(x);const V=1/(v.x*p.y-p.x*v.y);isFinite(V)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(V),A.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(V),c[T].add(f),c[se].add(f),c[pe].add(f),u[T].add(A),u[se].add(A),u[pe].add(A))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,se=b.length;T<se;++T){const pe=b[T],V=pe.start,q=pe.count;for(let Y=V,le=V+q;Y<le;Y+=3)M(i[Y+0],i[Y+1],i[Y+2])}const w=new N,U=new N,R=new N,j=new N;function E(T){R.fromArray(s,T*3),j.copy(R);const se=c[T];w.copy(se),w.sub(R.multiplyScalar(R.dot(se))).normalize(),U.crossVectors(j,se);const V=U.dot(u[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=V}for(let T=0,se=b.length;T<se;++T){const pe=b[T],V=pe.start,q=pe.count;for(let Y=V,le=V+q;Y<le;Y+=3)E(i[Y+0]),E(i[Y+1]),E(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let f=0;f<u;f++)d[x++]=c[m++]}return new hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new ot,ei=new So,Ds=new Mo,lu=new N,Ui=new N,Ii=new N,Ni=new N,oa=new N,Us=new N,Is=new Ne,Ns=new Ne,Os=new Ne,cu=new N,uu=new N,hu=new N,Fs=new N,Bs=new N;class Rt extends mt{constructor(e=new wn,t=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(oa.fromBufferAttribute(h,e),a?Us.addScaledVector(oa,u):Us.addScaledVector(oa.sub(t),u))}t.add(Us)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),ei.copy(e.ray).recast(e.near),!(Ds.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Ds,lu)===null||ei.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(au.copy(s).invert(),ei.copy(e.ray).applyMatrix4(au),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],f=a[p.materialIndex],A=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,w=M;b<w;b+=3){const U=o.getX(b),R=o.getX(b+1),j=o.getX(b+2);r=zs(this,f,e,i,c,u,h,U,R,j),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,f=v;p<f;p+=3){const A=o.getX(p),M=o.getX(p+1),b=o.getX(p+2);r=zs(this,a,e,i,c,u,h,A,M,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],f=a[p.materialIndex],A=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,w=M;b<w;b+=3){const U=b,R=b+1,j=b+2;r=zs(this,f,e,i,c,u,h,U,R,j),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,f=v;p<f;p+=3){const A=p,M=p+1,b=p+2;r=zs(this,a,e,i,c,u,h,A,M,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function W_(n,e,t,i,r,s,a,o){let l;if(e.side===Pt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:n}}function zs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ui),n.getVertexPosition(l,Ii),n.getVertexPosition(c,Ni);const u=W_(n,e,t,i,Ui,Ii,Ni,Fs);if(u){r&&(Is.fromBufferAttribute(r,o),Ns.fromBufferAttribute(r,l),Os.fromBufferAttribute(r,c),u.uv=Kt.getInterpolation(Fs,Ui,Ii,Ni,Is,Ns,Os,new Ne)),s&&(Is.fromBufferAttribute(s,o),Ns.fromBufferAttribute(s,l),Os.fromBufferAttribute(s,c),u.uv1=Kt.getInterpolation(Fs,Ui,Ii,Ni,Is,Ns,Os,new Ne),u.uv2=u.uv1),a&&(cu.fromBufferAttribute(a,o),uu.fromBufferAttribute(a,l),hu.fromBufferAttribute(a,c),u.normal=Kt.getInterpolation(Fs,Ui,Ii,Ni,cu,uu,hu,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};Kt.getNormal(Ui,Ii,Ni,h.normal),u.face=h}return u}class cr extends wn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function x(v,p,f,A,M,b,w,U,R,j,E){const T=b/R,se=w/j,pe=b/2,V=w/2,q=U/2,Y=R+1,le=j+1;let k=0,W=0;const ce=new N;for(let ue=0;ue<le;ue++){const F=ue*se-V;for(let J=0;J<Y;J++){const Me=J*T-pe;ce[v]=Me*A,ce[p]=F*M,ce[f]=q,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[p]=0,ce[f]=U>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(J/R),h.push(1-ue/j),k+=1}}for(let ue=0;ue<j;ue++)for(let F=0;F<R;F++){const J=d+F+Y*ue,Me=d+F+Y*(ue+1),ye=d+(F+1)+Y*(ue+1),be=d+(F+1)+Y*ue;l.push(J,Me,be),l.push(Me,ye,be),W+=6}o.addGroup(m,W,E),m+=W,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function X_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cd(n){return n.getRenderTarget()===null?n.outputColorSpace:dn}const Y_={clone:tr,merge:At};var q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rd extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Rd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Fi=1;class K_ extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Gt(Oi,Fi,e,t);r.layers=this.layers,this.add(r);const s=new Gt(Oi,Fi,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Oi,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Oi,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Oi,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Oi,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Ld extends Dt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $_ extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ui?Qe:hi),this.texture=new Ld(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cr(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new Rt(r,s),o=t.minFilter;return t.minFilter===ts&&(t.minFilter=Ht),new K_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const aa=new N,Z_=new N,J_=new He;class On{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=aa.subVectors(i,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||J_.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Mo,Hs=new N;class Al{constructor(e=new On,t=new On,i=new On,r=new On,s=new On,a=new On){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],f=r[12],A=r[13],M=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,p-m,b-f).normalize(),i[1].setComponents(l+s,d+c,p+m,b+f).normalize(),i[2].setComponents(l+a,d+u,p+x,b+A).normalize(),i[3].setComponents(l-a,d-u,p-x,b-A).normalize(),i[4].setComponents(l-o,d-h,p-v,b-M).normalize(),t===bn)i[5].setComponents(l+o,d+h,p+v,b+M).normalize();else if(t===io)i[5].setComponents(o,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hs.x=r.normal.x>0?e.max.x:e.min.x,Hs.y=r.normal.y>0?e.max.y:e.min.y,Hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Q_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;n.bindBuffer(h,c),m.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class cs extends wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],x=[],v=[],p=[];for(let f=0;f<u;f++){const A=f*d-a;for(let M=0;M<c;M++){const b=M*h-s;x.push(b,-A,0),v.push(0,0,1),p.push(M/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const M=A+c*f,b=A+c*(f+1),w=A+1+c*(f+1),U=A+1+c*f;m.push(M,b,U),m.push(b,w,U)}this.setIndex(m),this.setAttribute("position",new kt(x,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var ev=`#ifdef USE_ALPHAHASH
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
#endif`,nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,av=`#ifdef USE_AOMAP
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
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sv=`#define PI 3.141592653589793
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
#endif`,yv=`vec3 transformedNormal = objectNormal;
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
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rv=`vec4 LinearToLinear( in vec4 value ) {
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
	
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
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
}`,Hv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kv=`varying vec3 vViewPosition;
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
#endif`,Yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
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
#endif`,Zv=`struct PhysicalMaterial {
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
}`,Jv=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lx=`#if defined( USE_POINTS_UV )
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
#endif`,cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dx=`#ifdef USE_MORPHNORMALS
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
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
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
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ox=`float getShadowMask() {
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
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,x0=`#define PHONG
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
}`,M0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,E0=`#define STANDARD
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
}`,y0=`#define TOON
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
}`,b0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,R0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:ev,alphahash_pars_fragment:tv,alphamap_fragment:nv,alphamap_pars_fragment:iv,alphatest_fragment:rv,alphatest_pars_fragment:sv,aomap_fragment:ov,aomap_pars_fragment:av,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:dv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:_v,color_pars_fragment:vv,color_pars_vertex:xv,color_vertex:Mv,common:Sv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:yv,displacementmap_pars_vertex:bv,displacementmap_vertex:Tv,emissivemap_fragment:Av,emissivemap_pars_fragment:wv,colorspace_fragment:Cv,colorspace_pars_fragment:Rv,envmap_fragment:Lv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Dv,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:Xv,envmap_vertex:Iv,fog_vertex:Nv,fog_pars_vertex:Ov,fog_fragment:Fv,fog_pars_fragment:Bv,gradientmap_pars_fragment:zv,lightmap_fragment:Hv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:kv,lights_pars_begin:Wv,lights_toon_fragment:Yv,lights_toon_pars_fragment:qv,lights_phong_fragment:jv,lights_phong_pars_fragment:Kv,lights_physical_fragment:$v,lights_physical_pars_fragment:Zv,lights_fragment_begin:Jv,lights_fragment_maps:Qv,lights_fragment_end:ex,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:nx,logdepthbuf_pars_vertex:ix,logdepthbuf_vertex:rx,map_fragment:sx,map_pars_fragment:ox,map_particle_fragment:ax,map_particle_pars_fragment:lx,metalnessmap_fragment:cx,metalnessmap_pars_fragment:ux,morphcolor_vertex:hx,morphnormal_vertex:dx,morphtarget_pars_vertex:fx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:_x,normal_pars_vertex:vx,normal_vertex:xx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Ex,clearcoat_pars_fragment:yx,iridescence_pars_fragment:bx,opaque_fragment:Tx,packing:Ax,premultiplied_alpha_fragment:wx,project_vertex:Cx,dithering_fragment:Rx,dithering_pars_fragment:Lx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Ix,shadowmap_vertex:Nx,shadowmask_pars_fragment:Ox,skinbase_vertex:Fx,skinning_pars_vertex:Bx,skinning_vertex:zx,skinnormal_vertex:Hx,specularmap_fragment:Gx,specularmap_pars_fragment:Vx,tonemapping_fragment:kx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:Yx,uv_pars_fragment:qx,uv_pars_vertex:jx,uv_vertex:Kx,worldpos_vertex:$x,background_vert:Zx,background_frag:Jx,backgroundCube_vert:Qx,backgroundCube_frag:e0,cube_vert:t0,cube_frag:n0,depth_vert:i0,depth_frag:r0,distanceRGBA_vert:s0,distanceRGBA_frag:o0,equirect_vert:a0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:u0,meshbasic_vert:h0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:_0,meshnormal_frag:v0,meshphong_vert:x0,meshphong_frag:M0,meshphysical_vert:S0,meshphysical_frag:E0,meshtoon_vert:y0,meshtoon_frag:b0,points_vert:T0,points_frag:A0,shadow_vert:w0,shadow_frag:C0,sprite_vert:R0,sprite_frag:L0},ve={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},an={basic:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:At([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:At([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:At([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:At([ve.points,ve.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:At([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:At([ve.common,ve.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:At([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:At([ve.sprite,ve.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:At([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:At([ve.lights,ve.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};an.physical={uniforms:At([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Gs={r:0,b:0,g:0};function P0(n,e,t,i,r,s,a){const o=new Ve(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function x(p,f){let A=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=(f.backgroundBlurriness>0?t:e).get(M)),M===null?v(o,l):M&&M.isColor&&(v(M,1),A=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===vo)?(u===void 0&&(u=new Rt(new cr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:tr(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,U,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=M.colorSpace!==Qe,(h!==M||d!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Rt(new cs(2,2),new pi({name:"BackgroundMaterial",uniforms:tr(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=M.colorSpace!==Qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(Gs,Cd(n)),i.buffers.color.setClear(Gs.r,Gs.g,Gs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function D0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(q,Y,le,k,W){let ce=!1;if(a){const ue=v(k,le,Y);c!==ue&&(c=ue,m(c.object)),ce=f(q,k,le,W),ce&&A(q,k,le,W)}else{const ue=Y.wireframe===!0;(c.geometry!==k.id||c.program!==le.id||c.wireframe!==ue)&&(c.geometry=k.id,c.program=le.id,c.wireframe=ue,ce=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,j(q,Y,le,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(q){return i.isWebGL2?n.bindVertexArray(q):s.bindVertexArrayOES(q)}function x(q){return i.isWebGL2?n.deleteVertexArray(q):s.deleteVertexArrayOES(q)}function v(q,Y,le){const k=le.wireframe===!0;let W=o[q.id];W===void 0&&(W={},o[q.id]=W);let ce=W[Y.id];ce===void 0&&(ce={},W[Y.id]=ce);let ue=ce[k];return ue===void 0&&(ue=p(d()),ce[k]=ue),ue}function p(q){const Y=[],le=[],k=[];for(let W=0;W<r;W++)Y[W]=0,le[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:le,attributeDivisors:k,object:q,attributes:{},index:null}}function f(q,Y,le,k){const W=c.attributes,ce=Y.attributes;let ue=0;const F=le.getAttributes();for(const J in F)if(F[J].location>=0){const ye=W[J];let be=ce[J];if(be===void 0&&(J==="instanceMatrix"&&q.instanceMatrix&&(be=q.instanceMatrix),J==="instanceColor"&&q.instanceColor&&(be=q.instanceColor)),ye===void 0||ye.attribute!==be||be&&ye.data!==be.data)return!0;ue++}return c.attributesNum!==ue||c.index!==k}function A(q,Y,le,k){const W={},ce=Y.attributes;let ue=0;const F=le.getAttributes();for(const J in F)if(F[J].location>=0){let ye=ce[J];ye===void 0&&(J==="instanceMatrix"&&q.instanceMatrix&&(ye=q.instanceMatrix),J==="instanceColor"&&q.instanceColor&&(ye=q.instanceColor));const be={};be.attribute=ye,ye&&ye.data&&(be.data=ye.data),W[J]=be,ue++}c.attributes=W,c.attributesNum=ue,c.index=k}function M(){const q=c.newAttributes;for(let Y=0,le=q.length;Y<le;Y++)q[Y]=0}function b(q){w(q,0)}function w(q,Y){const le=c.newAttributes,k=c.enabledAttributes,W=c.attributeDivisors;le[q]=1,k[q]===0&&(n.enableVertexAttribArray(q),k[q]=1),W[q]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,Y),W[q]=Y)}function U(){const q=c.newAttributes,Y=c.enabledAttributes;for(let le=0,k=Y.length;le<k;le++)Y[le]!==q[le]&&(n.disableVertexAttribArray(le),Y[le]=0)}function R(q,Y,le,k,W,ce,ue){ue===!0?n.vertexAttribIPointer(q,Y,le,W,ce):n.vertexAttribPointer(q,Y,le,k,W,ce)}function j(q,Y,le,k){if(i.isWebGL2===!1&&(q.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=k.attributes,ce=le.getAttributes(),ue=Y.defaultAttributeValues;for(const F in ce){const J=ce[F];if(J.location>=0){let Me=W[F];if(Me===void 0&&(F==="instanceMatrix"&&q.instanceMatrix&&(Me=q.instanceMatrix),F==="instanceColor"&&q.instanceColor&&(Me=q.instanceColor)),Me!==void 0){const ye=Me.normalized,be=Me.itemSize,Ae=t.get(Me);if(Ae===void 0)continue;const Re=Ae.buffer,we=Ae.type,Fe=Ae.bytesPerElement,tt=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||Me.gpuType===fd);if(Me.isInterleavedBufferAttribute){const Ie=Me.data,_=Ie.stride,L=Me.offset;if(Ie.isInstancedInterleavedBuffer){for(let I=0;I<J.locationSize;I++)w(J.location+I,Ie.meshPerAttribute);q.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let I=0;I<J.locationSize;I++)b(J.location+I);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let I=0;I<J.locationSize;I++)R(J.location+I,be/J.locationSize,we,ye,_*Fe,(L+be/J.locationSize*I)*Fe,tt)}else{if(Me.isInstancedBufferAttribute){for(let Ie=0;Ie<J.locationSize;Ie++)w(J.location+Ie,Me.meshPerAttribute);q.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)b(J.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Ie=0;Ie<J.locationSize;Ie++)R(J.location+Ie,be/J.locationSize,we,ye,be*Fe,be/J.locationSize*Ie*Fe,tt)}}else if(ue!==void 0){const ye=ue[F];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(J.location,ye);break;case 3:n.vertexAttrib3fv(J.location,ye);break;case 4:n.vertexAttrib4fv(J.location,ye);break;default:n.vertexAttrib1fv(J.location,ye)}}}}U()}function E(){pe();for(const q in o){const Y=o[q];for(const le in Y){const k=Y[le];for(const W in k)x(k[W].object),delete k[W];delete Y[le]}delete o[q]}}function T(q){if(o[q.id]===void 0)return;const Y=o[q.id];for(const le in Y){const k=Y[le];for(const W in k)x(k[W].object),delete k[W];delete Y[le]}delete o[q.id]}function se(q){for(const Y in o){const le=o[Y];if(le[q.id]===void 0)continue;const k=le[q.id];for(const W in k)x(k[W].object),delete k[W];delete le[q.id]}}function pe(){V(),u=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:pe,resetDefaultState:V,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:se,initAttributes:M,enableAttribute:b,disableUnusedAttributes:U}}function U0(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function I0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,b=a||e.has("OES_texture_float"),w=M&&b,U=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:A,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:U}}function N0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new On,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,M=A*4;let b=f.clippingState||null;l.value=b,b=u(x,d,M,m);for(let w=0;w!==M;++w)b[w]=t[w];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const f=m+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,b=m;M!==v;++M,b+=4)a.copy(h[M]).applyMatrix4(A,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function O0(n){let e=new WeakMap;function t(a,o){return o===Ua?a.mapping=Ji:o===Ia&&(a.mapping=Qi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ua||o===Ia)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Dd extends Rd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,du=[.125,.215,.35,.446,.526,.582],si=20,la=new Dd,fu=new Ve;let ca=null;const ni=(1+Math.sqrt(5))/2,Bi=1/ni,pu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ni,Bi),new N(0,ni,-Bi),new N(Bi,0,ni),new N(-Bi,0,ni),new N(ni,Bi,0),new N(-ni,Bi,0)];class mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ca=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca),e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ns,format:Jt,colorSpace:dn,depthBuffer:!1},r=gu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(s)),this._blurMaterial=B0(s,e,t)}return r}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,i,r){const o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fu),u.toneMapping=kn,u.autoClear=!1;const m=new yo({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),x=new Rt(new cr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(fu),v=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):A===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const M=this._cubeSize;Vs(r,A*M,f>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,la)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pu[(r-1)%pu.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*si-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):si;p>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${si}`);const f=[];let A=0;for(let R=0;R<si;++R){const j=R/v,E=Math.exp(-j*j/2);f.push(E),R===0?A+=E:R<p&&(A+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-i;const b=this._sizeLods[r],w=3*b*(r>M-Vi?r-M+Vi:0),U=4*(this._cubeSize-b);Vs(t,w,U,3*b,2*b),l.setRenderTarget(t),l.render(h,la)}}function F0(n){const e=[],t=[],i=[];let r=n;const s=n-Vi+1+du.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Vi?l=du[a-n+Vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,v=3,p=2,f=1,A=new Float32Array(v*x*m),M=new Float32Array(p*x*m),b=new Float32Array(f*x*m);for(let U=0;U<m;U++){const R=U%3*2/3-1,j=U>2?0:-1,E=[R,j,0,R+2/3,j,0,R+2/3,j+1,0,R,j,0,R+2/3,j+1,0,R,j+1,0];A.set(E,v*x*U),M.set(d,p*x*U);const T=[U,U,U,U,U,U];b.set(T,f*x*U)}const w=new wn;w.setAttribute("position",new hn(A,v)),w.setAttribute("uv",new hn(M,p)),w.setAttribute("faceIndex",new hn(b,f)),e.push(w),r>Vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gu(n,e,t){const i=new di(n,e,t);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function B0(n,e,t){const i=new Float32Array(si),r=new N(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function _u(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vu(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function z0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ua||l===Ia,u=l===Ji||l===Qi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new mu(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new mu(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function H0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function G0(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let M=0,b=A.length;M<b;M+=3){const w=A[M+0],U=A[M+1],R=A[M+2];d.push(w,U,U,R,R,w)}}else if(x!==void 0){const A=x.array;v=x.version;for(let M=0,b=A.length/3-1;M<b;M+=3){const w=M+0,U=M+1,R=M+2;d.push(w,U,U,R,R,w)}}else return;const p=new(Sd(d)?wd:Ad)(d,1);p.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function V0(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function h(d,m,x){if(x===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,d*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function k0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function W0(n,e){return n[0]-e[0]}function X0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Y0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==x){let q=function(){pe.dispose(),s.delete(u),u.removeEventListener("dispose",q)};v!==void 0&&v.texture.dispose();const A=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let j=0;A===!0&&(j=1),M===!0&&(j=2),b===!0&&(j=3);let E=u.attributes.position.count*j,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const se=new Float32Array(E*T*4*x),pe=new bd(se,E,T,x);pe.type=Bn,pe.needsUpdate=!0;const V=j*4;for(let Y=0;Y<x;Y++){const le=w[Y],k=U[Y],W=R[Y],ce=E*T*4*Y;for(let ue=0;ue<le.count;ue++){const F=ue*V;A===!0&&(a.fromBufferAttribute(le,ue),se[ce+F+0]=a.x,se[ce+F+1]=a.y,se[ce+F+2]=a.z,se[ce+F+3]=0),M===!0&&(a.fromBufferAttribute(k,ue),se[ce+F+4]=a.x,se[ce+F+5]=a.y,se[ce+F+6]=a.z,se[ce+F+7]=0),b===!0&&(a.fromBufferAttribute(W,ue),se[ce+F+8]=a.x,se[ce+F+9]=a.y,se[ce+F+10]=a.z,se[ce+F+11]=W.itemSize===4?a.w:1)}}v={count:x,texture:pe,size:new Ne(E,T)},s.set(u,v),u.addEventListener("dispose",q)}let p=0;for(let A=0;A<d.length;A++)p+=d[A];const f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let x=i[u.id];if(x===void 0||x.length!==m){x=[];for(let M=0;M<m;M++)x[M]=[M,0];i[u.id]=x}for(let M=0;M<m;M++){const b=x[M];b[0]=M,b[1]=d[M]}x.sort(X0);for(let M=0;M<8;M++)M<m&&x[M][1]?(o[M][0]=x[M][0],o[M][1]=x[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(W0);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let f=0;for(let M=0;M<8;M++){const b=o[M],w=b[0],U=b[1];w!==Number.MAX_SAFE_INTEGER&&U?(v&&u.getAttribute("morphTarget"+M)!==v[w]&&u.setAttribute("morphTarget"+M,v[w]),p&&u.getAttribute("morphNormal"+M)!==p[w]&&u.setAttribute("morphNormal"+M,p[w]),r[M]=U,f+=U):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const A=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",A),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function q0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ud=new Dt,Id=new bd,Nd=new U_,Od=new Ld,xu=[],Mu=[],Su=new Float32Array(16),Eu=new Float32Array(9),yu=new Float32Array(4);function ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=xu[r];if(s===void 0&&(s=new Float32Array(r),xu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bo(n,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function $0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function J0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;yu.set(i),n.uniformMatrix2fv(this.addr,!1,yu),ut(t,i)}}function Q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),ut(t,i)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),ut(t,i)}}function tM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function sM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function cM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ud,r)}function uM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nd,r)}function hM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Od,r)}function dM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Id,r)}function fM(n){switch(n){case 5126:return j0;case 35664:return K0;case 35665:return $0;case 35666:return Z0;case 35674:return J0;case 35675:return Q0;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return oM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return dM}}function pM(n,e){n.uniform1fv(this.addr,e)}function mM(n,e){const t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function gM(n,e){const t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function _M(n,e){const t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function vM(n,e){const t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xM(n,e){const t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MM(n,e){const t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function SM(n,e){n.uniform1iv(this.addr,e)}function EM(n,e){n.uniform2iv(this.addr,e)}function yM(n,e){n.uniform3iv(this.addr,e)}function bM(n,e){n.uniform4iv(this.addr,e)}function TM(n,e){n.uniform1uiv(this.addr,e)}function AM(n,e){n.uniform2uiv(this.addr,e)}function wM(n,e){n.uniform3uiv(this.addr,e)}function CM(n,e){n.uniform4uiv(this.addr,e)}function RM(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ud,s[a])}function LM(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nd,s[a])}function PM(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Od,s[a])}function DM(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Id,s[a])}function UM(n){switch(n){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return vM;case 35675:return xM;case 35676:return MM;case 5124:case 35670:return SM;case 35667:case 35671:return EM;case 35668:case 35672:return yM;case 35669:case 35673:return bM;case 5125:return TM;case 36294:return AM;case 36295:return wM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return DM}}class IM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=fM(t.type)}}class NM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=UM(t.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function bu(n,e){n.seq.push(e),n.map[e.id]=e}function FM(n,e,t){const i=n.name,r=i.length;for(ua.lastIndex=0;;){const s=ua.exec(i),a=ua.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bu(t,c===void 0?new IM(o,n,e):new NM(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new OM(o),bu(t,h)),t=h}}}class Zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);FM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Tu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let BM=0;function zM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function HM(n){switch(n){case dn:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zM(n.getShaderSource(e),a)}else return r}function GM(n,e){const t=HM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function VM(n,e){let t;switch(e){case Ng:t="Linear";break;case Og:t="Reinhard";break;case Fg:t="OptimizedCineon";break;case Bg:t="ACESFilmic";break;case zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gr).join(`
`)}function WM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Gr(n){return n!==""}function wu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(n){return n.replace(YM,jM)}const qM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jM(n,e){let t=ze[e];if(t===void 0){const i=qM.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(n){return n.replace(KM,$M)}function $M(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function JM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function eS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Ug:e="ENVMAP_BLENDING_MIX";break;case Ig:e="ENVMAP_BLENDING_ADD";break}return e}function tS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ZM(t),c=JM(t),u=QM(t),h=eS(t),d=tS(t),m=t.isWebGL2?"":kM(t),x=WM(s),v=r.createProgram();let p,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Gr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Gr).join(`
`),f.length>0&&(f+=`
`)):(p=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),f=[m,Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?ze.tonemapping_pars_fragment:"",t.toneMapping!==kn?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=za(a),a=wu(a,t),a=Cu(a,t),o=za(o),o=wu(o,t),o=Cu(o,t),a=Ru(a),o=Ru(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=A+p+a,b=A+f+o,w=Tu(r,r.VERTEX_SHADER,M),U=Tu(r,r.FRAGMENT_SHADER,b);if(r.attachShader(v,w),r.attachShader(v,U),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(v).trim(),T=r.getShaderInfoLog(w).trim(),se=r.getShaderInfoLog(U).trim();let pe=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,U);else{const q=Au(r,w,"vertex"),Y=Au(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+q+`
`+Y)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(T===""||se==="")&&(V=!1);V&&(this.diagnostics={runnable:pe,programLog:E,vertexShader:{log:T,prefix:p},fragmentShader:{log:se,prefix:f}})}r.deleteShader(w),r.deleteShader(U);let R;this.getUniforms=function(){return R===void 0&&(R=new Zs(r,v)),R};let j;return this.getAttributes=function(){return j===void 0&&(j=XM(r,v)),j},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=U,this}let iS=0;class rS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sS(e),t.set(e,i)),i}}class sS{constructor(e){this.id=iS++,this.code=e,this.usedTimes=0}}function oS(n,e,t,i,r,s,a){const o=new Tl,l=new rS,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,T,se,pe,V){const q=pe.fog,Y=V.geometry,le=E.isMeshStandardMaterial?pe.environment:null,k=(E.isMeshStandardMaterial?t:e).get(E.envMap||le),W=k&&k.mapping===vo?k.image.height:null,ce=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=ue!==void 0?ue.length:0;let J=0;Y.morphAttributes.position!==void 0&&(J=1),Y.morphAttributes.normal!==void 0&&(J=2),Y.morphAttributes.color!==void 0&&(J=3);let Me,ye,be,Ae;if(ce){const Ze=an[ce];Me=Ze.vertexShader,ye=Ze.fragmentShader}else Me=E.vertexShader,ye=E.fragmentShader,l.update(E),be=l.getVertexShaderID(E),Ae=l.getFragmentShaderID(E);const Re=n.getRenderTarget(),we=V.isInstancedMesh===!0,Fe=!!E.map,tt=!!E.matcap,Ie=!!k,_=!!E.aoMap,L=!!E.lightMap,I=!!E.bumpMap,H=!!E.normalMap,B=!!E.displacementMap,ae=!!E.emissiveMap,oe=!!E.metalnessMap,K=!!E.roughnessMap,re=E.anisotropy>0,ne=E.clearcoat>0,Ee=E.iridescence>0,S=E.sheen>0,g=E.transmission>0,D=re&&!!E.anisotropyMap,Q=ne&&!!E.clearcoatMap,ee=ne&&!!E.clearcoatNormalMap,te=ne&&!!E.clearcoatRoughnessMap,_e=Ee&&!!E.iridescenceMap,he=Ee&&!!E.iridescenceThicknessMap,G=S&&!!E.sheenColorMap,C=S&&!!E.sheenRoughnessMap,ie=!!E.specularMap,xe=!!E.specularColorMap,de=!!E.specularIntensityMap,me=g&&!!E.transmissionMap,Le=g&&!!E.thicknessMap,Ye=!!E.gradientMap,P=!!E.alphaMap,Se=E.alphaTest>0,X=!!E.alphaHash,fe=!!E.extensions,ge=!!Y.attributes.uv1,ke=!!Y.attributes.uv2,je=!!Y.attributes.uv3;let $e=kn;return E.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&($e=n.toneMapping),{isWebGL2:u,shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:ye,defines:E.defines,customVertexShaderID:be,customFragmentShaderID:Ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:we,instancingColor:we&&V.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:dn,map:Fe,matcap:tt,envMap:Ie,envMapMode:Ie&&k.mapping,envMapCubeUVHeight:W,aoMap:_,lightMap:L,bumpMap:I,normalMap:H,displacementMap:d&&B,emissiveMap:ae,normalMapObjectSpace:H&&E.normalMapType===Jg,normalMapTangentSpace:H&&E.normalMapType===Md,metalnessMap:oe,roughnessMap:K,anisotropy:re,anisotropyMap:D,clearcoat:ne,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:te,iridescence:Ee,iridescenceMap:_e,iridescenceThicknessMap:he,sheen:S,sheenColorMap:G,sheenRoughnessMap:C,specularMap:ie,specularColorMap:xe,specularIntensityMap:de,transmission:g,transmissionMap:me,thicknessMap:Le,gradientMap:Ye,opaque:E.transparent===!1&&E.blending===Yi,alphaMap:P,alphaTest:Se,alphaHash:X,combine:E.combine,mapUv:Fe&&v(E.map.channel),aoMapUv:_&&v(E.aoMap.channel),lightMapUv:L&&v(E.lightMap.channel),bumpMapUv:I&&v(E.bumpMap.channel),normalMapUv:H&&v(E.normalMap.channel),displacementMapUv:B&&v(E.displacementMap.channel),emissiveMapUv:ae&&v(E.emissiveMap.channel),metalnessMapUv:oe&&v(E.metalnessMap.channel),roughnessMapUv:K&&v(E.roughnessMap.channel),anisotropyMapUv:D&&v(E.anisotropyMap.channel),clearcoatMapUv:Q&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:G&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:C&&v(E.sheenRoughnessMap.channel),specularMapUv:ie&&v(E.specularMap.channel),specularColorMapUv:xe&&v(E.specularColorMap.channel),specularIntensityMapUv:de&&v(E.specularIntensityMap.channel),transmissionMapUv:me&&v(E.transmissionMap.channel),thicknessMapUv:Le&&v(E.thicknessMap.channel),alphaMapUv:P&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(H||re),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:ke,vertexUv3s:je,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(Fe||P),fog:!!q,useFog:E.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&se.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&E.map.isVideoTexture===!0&&E.map.colorSpace===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===cn,flipSided:E.side===Pt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:fe&&E.extensions.derivatives===!0,extensionFragDepth:fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const se in E.defines)T.push(se),T.push(E.defines[se]);return E.isRawShaderMaterial===!1&&(A(T,E),M(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function A(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function M(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function b(E){const T=x[E.type];let se;if(T){const pe=an[T];se=Y_.clone(pe.uniforms)}else se=E.uniforms;return se}function w(E,T){let se;for(let pe=0,V=c.length;pe<V;pe++){const q=c[pe];if(q.cacheKey===T){se=q,++se.usedTimes;break}}return se===void 0&&(se=new nS(n,T,E,s),c.push(se)),se}function U(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function R(E){l.remove(E)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:w,releaseProgram:U,releaseShaderCache:R,programs:c,dispose:j}}function aS(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function lS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Du(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,m,x,v,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=v,f.group=p),e++,f}function o(h,d,m,x,v,p){const f=a(h,d,m,x,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,x,v,p){const f=a(h,d,m,x,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||lS),i.length>1&&i.sort(d||Pu),r.length>1&&r.sort(d||Pu)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function cS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Du,n.set(i,[a])):r>=s.length?(a=new Du,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function uS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ve};break;case"SpotLight":t={position:new N,direction:new N,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function hS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dS=0;function fS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pS(n,e){const t=new uS,i=hS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,a=new ot,o=new ot;function l(u,h){let d=0,m=0,x=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let v=0,p=0,f=0,A=0,M=0,b=0,w=0,U=0,R=0,j=0;u.sort(fS);const E=h===!0?Math.PI:1;for(let se=0,pe=u.length;se<pe;se++){const V=u[se],q=V.color,Y=V.intensity,le=V.distance,k=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=q.r*Y*E,m+=q.g*Y*E,x+=q.b*Y*E;else if(V.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(V.sh.coefficients[W],Y);else if(V.isDirectionalLight){const W=t.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity*E),V.castShadow){const ce=V.shadow,ue=i.get(V);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,r.directionalShadow[v]=ue,r.directionalShadowMap[v]=k,r.directionalShadowMatrix[v]=V.shadow.matrix,b++}r.directional[v]=W,v++}else if(V.isSpotLight){const W=t.get(V);W.position.setFromMatrixPosition(V.matrixWorld),W.color.copy(q).multiplyScalar(Y*E),W.distance=le,W.coneCos=Math.cos(V.angle),W.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),W.decay=V.decay,r.spot[f]=W;const ce=V.shadow;if(V.map&&(r.spotLightMap[R]=V.map,R++,ce.updateMatrices(V),V.castShadow&&j++),r.spotLightMatrix[f]=ce.matrix,V.castShadow){const ue=i.get(V);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,r.spotShadow[f]=ue,r.spotShadowMap[f]=k,U++}f++}else if(V.isRectAreaLight){const W=t.get(V);W.color.copy(q).multiplyScalar(Y),W.halfWidth.set(V.width*.5,0,0),W.halfHeight.set(0,V.height*.5,0),r.rectArea[A]=W,A++}else if(V.isPointLight){const W=t.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity*E),W.distance=V.distance,W.decay=V.decay,V.castShadow){const ce=V.shadow,ue=i.get(V);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,r.pointShadow[p]=ue,r.pointShadowMap[p]=k,r.pointShadowMatrix[p]=V.shadow.matrix,w++}r.point[p]=W,p++}else if(V.isHemisphereLight){const W=t.get(V);W.skyColor.copy(V.color).multiplyScalar(Y*E),W.groundColor.copy(V.groundColor).multiplyScalar(Y*E),r.hemi[M]=W,M++}}A>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==v||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==A||T.hemiLength!==M||T.numDirectionalShadows!==b||T.numPointShadows!==w||T.numSpotShadows!==U||T.numSpotMaps!==R)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=A,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=U+R-j,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=j,T.directionalLength=v,T.pointLength=p,T.spotLength=f,T.rectAreaLength=A,T.hemiLength=M,T.numDirectionalShadows=b,T.numPointShadows=w,T.numSpotShadows=U,T.numSpotMaps=R,r.version=dS++)}function c(u,h){let d=0,m=0,x=0,v=0,p=0;const f=h.matrixWorldInverse;for(let A=0,M=u.length;A<M;A++){const b=u[A];if(b.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),d++}else if(b.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),x++}else if(b.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function Uu(n,e){const t=new pS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function mS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Uu(n,e),t.set(s,[l])):a>=o.length?(l=new Uu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class gS extends lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _S extends lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xS=`uniform sampler2D shadow_pass;
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
}`;function MS(n,e,t){let i=new Al;const r=new Ne,s=new Ne,a=new dt,o=new gS({depthPacking:Zg}),l=new _S,c={},u=t.maxTextureSize,h={[Yn]:Pt,[Pt]:Yn,[cn]:cn},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:vS,fragmentShader:xS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new wn;x.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rt(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let f=this.type;this.render=function(w,U,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const j=n.getRenderTarget(),E=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),se=n.state;se.setBlending(Vn),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const pe=f!==Sn&&this.type===Sn,V=f===Sn&&this.type!==Sn;for(let q=0,Y=w.length;q<Y;q++){const le=w[q],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const W=k.getFrameExtents();if(r.multiply(W),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,k.mapSize.y=s.y)),k.map===null||pe===!0||V===!0){const ue=this.type!==Sn?{minFilter:wt,magFilter:wt}:{};k.map!==null&&k.map.dispose(),k.map=new di(r.x,r.y,ue),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ce=k.getViewportCount();for(let ue=0;ue<ce;ue++){const F=k.getViewport(ue);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),se.viewport(a),k.updateMatrices(le,ue),i=k.getFrustum(),b(U,R,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===Sn&&A(k,R),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(j,E,T)};function A(w,U){const R=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new di(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(U,null,R,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(U,null,R,m,v,null)}function M(w,U,R,j){let E=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)E=T;else if(E=R.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const se=E.uuid,pe=U.uuid;let V=c[se];V===void 0&&(V={},c[se]=V);let q=V[pe];q===void 0&&(q=E.clone(),V[pe]=q),E=q}if(E.visible=U.visible,E.wireframe=U.wireframe,j===Sn?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:h[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const se=n.properties.get(E);se.light=R}return E}function b(w,U,R,j,E){if(w.visible===!1)return;if(w.layers.test(U.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Sn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const pe=e.update(w),V=w.material;if(Array.isArray(V)){const q=pe.groups;for(let Y=0,le=q.length;Y<le;Y++){const k=q[Y],W=V[k.materialIndex];if(W&&W.visible){const ce=M(w,W,j,E);n.renderBufferDirect(R,null,pe,ce,w,k)}}}else if(V.visible){const q=M(w,V,j,E);n.renderBufferDirect(R,null,pe,q,w,null)}}const se=w.children;for(let pe=0,V=se.length;pe<V;pe++)b(se[pe],U,R,j,E)}}function SS(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const Se=new dt;let X=null;const fe=new dt(0,0,0,0);return{setMask:function(ge){X!==ge&&!P&&(n.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){P=ge},setClear:function(ge,ke,je,$e,It){It===!0&&(ge*=$e,ke*=$e,je*=$e),Se.set(ge,ke,je,$e),fe.equals(Se)===!1&&(n.clearColor(ge,ke,je,$e),fe.copy(Se))},reset:function(){P=!1,X=null,fe.set(-1,0,0,0)}}}function s(){let P=!1,Se=null,X=null,fe=null;return{setTest:function(ge){ge?Re(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ge){Se!==ge&&!P&&(n.depthMask(ge),Se=ge)},setFunc:function(ge){if(X!==ge){switch(ge){case Ag:n.depthFunc(n.NEVER);break;case wg:n.depthFunc(n.ALWAYS);break;case Cg:n.depthFunc(n.LESS);break;case Da:n.depthFunc(n.LEQUAL);break;case Rg:n.depthFunc(n.EQUAL);break;case Lg:n.depthFunc(n.GEQUAL);break;case Pg:n.depthFunc(n.GREATER);break;case Dg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ge}},setLocked:function(ge){P=ge},setClear:function(ge){fe!==ge&&(n.clearDepth(ge),fe=ge)},reset:function(){P=!1,Se=null,X=null,fe=null}}}function a(){let P=!1,Se=null,X=null,fe=null,ge=null,ke=null,je=null,$e=null,It=null;return{setTest:function(Ze){P||(Ze?Re(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Ze){Se!==Ze&&!P&&(n.stencilMask(Ze),Se=Ze)},setFunc:function(Ze,rn,Et){(X!==Ze||fe!==rn||ge!==Et)&&(n.stencilFunc(Ze,rn,Et),X=Ze,fe=rn,ge=Et)},setOp:function(Ze,rn,Et){(ke!==Ze||je!==rn||$e!==Et)&&(n.stencilOp(Ze,rn,Et),ke=Ze,je=rn,$e=Et)},setLocked:function(Ze){P=Ze},setClear:function(Ze){It!==Ze&&(n.clearStencil(Ze),It=Ze)},reset:function(){P=!1,Se=null,X=null,fe=null,ge=null,ke=null,je=null,$e=null,It=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,f=!1,A=null,M=null,b=null,w=null,U=null,R=null,j=null,E=!1,T=null,se=null,pe=null,V=null,q=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,k=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),le=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),le=k>=2);let ce=null,ue={};const F=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Me=new dt().fromArray(F),ye=new dt().fromArray(J);function be(P,Se,X,fe){const ge=new Uint8Array(4),ke=n.createTexture();n.bindTexture(P,ke),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<X;je++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(Se+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ke}const Ae={};Ae[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(n.DEPTH_TEST),l.setFunc(Da),B(!1),ae(_c),Re(n.CULL_FACE),I(Vn);function Re(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function we(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Fe(P,Se){return m[P]!==Se?(n.bindFramebuffer(P,Se),m[P]=Se,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Se),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function tt(P,Se){let X=v,fe=!1;if(P)if(X=x.get(Se),X===void 0&&(X=[],x.set(Se,X)),P.isWebGLMultipleRenderTargets){const ge=P.texture;if(X.length!==ge.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,je=ge.length;ke<je;ke++)X[ke]=n.COLOR_ATTACHMENT0+ke;X.length=ge.length,fe=!0}}else X[0]!==n.COLOR_ATTACHMENT0&&(X[0]=n.COLOR_ATTACHMENT0,fe=!0);else X[0]!==n.BACK&&(X[0]=n.BACK,fe=!0);fe&&(t.isWebGL2?n.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Ie(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const _={[zi]:n.FUNC_ADD,[mg]:n.FUNC_SUBTRACT,[gg]:n.FUNC_REVERSE_SUBTRACT};if(i)_[Sc]=n.MIN,_[Ec]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(_[Sc]=P.MIN_EXT,_[Ec]=P.MAX_EXT)}const L={[_g]:n.ZERO,[vg]:n.ONE,[xg]:n.SRC_COLOR,[cd]:n.SRC_ALPHA,[Tg]:n.SRC_ALPHA_SATURATE,[yg]:n.DST_COLOR,[Sg]:n.DST_ALPHA,[Mg]:n.ONE_MINUS_SRC_COLOR,[ud]:n.ONE_MINUS_SRC_ALPHA,[bg]:n.ONE_MINUS_DST_COLOR,[Eg]:n.ONE_MINUS_DST_ALPHA};function I(P,Se,X,fe,ge,ke,je,$e){if(P===Vn){f===!0&&(we(n.BLEND),f=!1);return}if(f===!1&&(Re(n.BLEND),f=!0),P!==pg){if(P!==A||$e!==E){if((M!==zi||U!==zi)&&(n.blendEquation(n.FUNC_ADD),M=zi,U=zi),$e)switch(P){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,w=null,R=null,j=null,A=P,E=$e}return}ge=ge||Se,ke=ke||X,je=je||fe,(Se!==M||ge!==U)&&(n.blendEquationSeparate(_[Se],_[ge]),M=Se,U=ge),(X!==b||fe!==w||ke!==R||je!==j)&&(n.blendFuncSeparate(L[X],L[fe],L[ke],L[je]),b=X,w=fe,R=ke,j=je),A=P,E=!1}function H(P,Se){P.side===cn?we(n.CULL_FACE):Re(n.CULL_FACE);let X=P.side===Pt;Se&&(X=!X),B(X),P.blending===Yi&&P.transparent===!1?I(Vn):I(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const fe=P.stencilWrite;c.setTest(fe),fe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),K(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(P){T!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),T=P)}function ae(P){P!==hg?(Re(n.CULL_FACE),P!==se&&(P===_c?n.cullFace(n.BACK):P===dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),se=P}function oe(P){P!==pe&&(le&&n.lineWidth(P),pe=P)}function K(P,Se,X){P?(Re(n.POLYGON_OFFSET_FILL),(V!==Se||q!==X)&&(n.polygonOffset(Se,X),V=Se,q=X)):we(n.POLYGON_OFFSET_FILL)}function re(P){P?Re(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function ne(P){P===void 0&&(P=n.TEXTURE0+Y-1),ce!==P&&(n.activeTexture(P),ce=P)}function Ee(P,Se,X){X===void 0&&(ce===null?X=n.TEXTURE0+Y-1:X=ce);let fe=ue[X];fe===void 0&&(fe={type:void 0,texture:void 0},ue[X]=fe),(fe.type!==P||fe.texture!==Se)&&(ce!==X&&(n.activeTexture(X),ce=X),n.bindTexture(P,Se||Ae[P]),fe.type=P,fe.texture=Se)}function S(){const P=ue[ce];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(P){Me.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Me.copy(P))}function de(P){ye.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ye.copy(P))}function me(P,Se){let X=h.get(Se);X===void 0&&(X=new WeakMap,h.set(Se,X));let fe=X.get(P);fe===void 0&&(fe=n.getUniformBlockIndex(Se,P.name),X.set(P,fe))}function Le(P,Se){const fe=h.get(Se).get(P);u.get(Se)!==fe&&(n.uniformBlockBinding(Se,fe,P.__bindingPointIndex),u.set(Se,fe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ce=null,ue={},m={},x=new WeakMap,v=[],p=null,f=!1,A=null,M=null,b=null,w=null,U=null,R=null,j=null,E=!1,T=null,se=null,pe=null,V=null,q=null,Me.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Re,disable:we,bindFramebuffer:Fe,drawBuffers:tt,useProgram:Ie,setBlending:I,setMaterial:H,setFlipSided:B,setCullFace:ae,setLineWidth:oe,setPolygonOffset:K,setScissorTest:re,activeTexture:ne,bindTexture:Ee,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:C,texImage3D:ie,updateUBOMapping:me,uniformBlockBinding:Le,texStorage2D:he,texStorage3D:G,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:te,compressedTexSubImage3D:_e,scissor:xe,viewport:de,reset:Ye}}function ES(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,g){return f?new OffscreenCanvas(S,g):rs("canvas")}function M(S,g,D,Q){let ee=1;if((S.width>Q||S.height>Q)&&(ee=Q/Math.max(S.width,S.height)),ee<1||g===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const te=g?ro:Math.floor,_e=te(ee*S.width),he=te(ee*S.height);v===void 0&&(v=A(_e,he));const G=D?A(_e,he):v;return G.width=_e,G.height=he,G.getContext("2d").drawImage(S,0,0,_e,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+_e+"x"+he+")."),G}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return Ba(S.width)&&Ba(S.height)}function w(S){return o?!1:S.wrapS!==Zt||S.wrapT!==Zt||S.minFilter!==wt&&S.minFilter!==Ht}function U(S,g){return S.generateMipmaps&&g&&S.minFilter!==wt&&S.minFilter!==Ht}function R(S){n.generateMipmap(S)}function j(S,g,D,Q,ee=!1){if(o===!1)return g;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let te=g;return g===n.RED&&(D===n.FLOAT&&(te=n.R32F),D===n.HALF_FLOAT&&(te=n.R16F),D===n.UNSIGNED_BYTE&&(te=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(te=n.R8UI),D===n.UNSIGNED_SHORT&&(te=n.R16UI),D===n.UNSIGNED_INT&&(te=n.R32UI),D===n.BYTE&&(te=n.R8I),D===n.SHORT&&(te=n.R16I),D===n.INT&&(te=n.R32I)),g===n.RG&&(D===n.FLOAT&&(te=n.RG32F),D===n.HALF_FLOAT&&(te=n.RG16F),D===n.UNSIGNED_BYTE&&(te=n.RG8)),g===n.RGBA&&(D===n.FLOAT&&(te=n.RGBA32F),D===n.HALF_FLOAT&&(te=n.RGBA16F),D===n.UNSIGNED_BYTE&&(te=Q===Qe&&ee===!1?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)),(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function E(S,g,D){return U(S,D)===!0||S.isFramebufferTexture&&S.minFilter!==wt&&S.minFilter!==Ht?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function T(S){return S===wt||S===yc||S===Bo?n.NEAREST:n.LINEAR}function se(S){const g=S.target;g.removeEventListener("dispose",se),V(g),g.isVideoTexture&&x.delete(g)}function pe(S){const g=S.target;g.removeEventListener("dispose",pe),Y(g)}function V(S){const g=i.get(S);if(g.__webglInit===void 0)return;const D=S.source,Q=p.get(D);if(Q){const ee=Q[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&q(S),Object.keys(Q).length===0&&p.delete(D)}i.remove(S)}function q(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const D=S.source,Q=p.get(D);delete Q[g.__cacheKey],a.memory.textures--}function Y(S){const g=S.texture,D=i.get(S),Q=i.get(g);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(D.__webglFramebuffer[ee]))for(let te=0;te<D.__webglFramebuffer[ee].length;te++)n.deleteFramebuffer(D.__webglFramebuffer[ee][te]);else n.deleteFramebuffer(D.__webglFramebuffer[ee]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[ee])}else{if(Array.isArray(D.__webglFramebuffer))for(let ee=0;ee<D.__webglFramebuffer.length;ee++)n.deleteFramebuffer(D.__webglFramebuffer[ee]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ee=0;ee<D.__webglColorRenderbuffer.length;ee++)D.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[ee]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,te=g.length;ee<te;ee++){const _e=i.get(g[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(g[ee])}i.remove(g),i.remove(S)}let le=0;function k(){le=0}function W(){const S=le;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),le+=1,S}function ce(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function ue(S,g){const D=i.get(S);if(S.isVideoTexture&&ne(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(D,S,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function F(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){Fe(D,S,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function J(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){Fe(D,S,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function Me(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){tt(D,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const ye={[Na]:n.REPEAT,[Zt]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},be={[wt]:n.NEAREST,[yc]:n.NEAREST_MIPMAP_NEAREST,[Bo]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Hg]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},Ae={[e_]:n.NEVER,[a_]:n.ALWAYS,[t_]:n.LESS,[i_]:n.LEQUAL,[n_]:n.EQUAL,[o_]:n.GEQUAL,[r_]:n.GREATER,[s_]:n.NOTEQUAL};function Re(S,g,D){if(D?(n.texParameteri(S,n.TEXTURE_WRAP_S,ye[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ye[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ye[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,be[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,be[g.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==Zt||g.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,T(g.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,T(g.minFilter)),g.minFilter!==wt&&g.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===wt||g.minFilter!==Bo&&g.minFilter!==ts||g.type===Bn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===ns&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function we(S,g){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",se));const Q=g.source;let ee=p.get(Q);ee===void 0&&(ee={},p.set(Q,ee));const te=ce(g);if(te!==S.__cacheKey){ee[te]===void 0&&(ee[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),ee[te].usedTimes++;const _e=ee[S.__cacheKey];_e!==void 0&&(ee[S.__cacheKey].usedTimes--,_e.usedTimes===0&&q(g)),S.__cacheKey=te,S.__webglTexture=ee[te].texture}return D}function Fe(S,g,D){let Q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=n.TEXTURE_3D);const ee=we(S,g),te=g.source;t.bindTexture(Q,S.__webglTexture,n.TEXTURE0+D);const _e=i.get(te);if(te.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const he=w(g)&&b(g.image)===!1;let G=M(g.image,he,!1,u);G=Ee(g,G);const C=b(G)||o,ie=s.convert(g.format,g.colorSpace);let xe=s.convert(g.type),de=j(g.internalFormat,ie,xe,g.colorSpace,g.isVideoTexture);Re(Q,g,C);let me;const Le=g.mipmaps,Ye=o&&g.isVideoTexture!==!0,P=_e.__version===void 0||ee===!0,Se=E(g,G,C);if(g.isDepthTexture)de=n.DEPTH_COMPONENT,o?g.type===Bn?de=n.DEPTH_COMPONENT32F:g.type===Fn?de=n.DEPTH_COMPONENT24:g.type===li?de=n.DEPTH24_STENCIL8:de=n.DEPTH_COMPONENT16:g.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ci&&de===n.DEPTH_COMPONENT&&g.type!==yl&&g.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Fn,xe=s.convert(g.type)),g.format===er&&de===n.DEPTH_COMPONENT&&(de=n.DEPTH_STENCIL,g.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=li,xe=s.convert(g.type))),P&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,de,G.width,G.height):t.texImage2D(n.TEXTURE_2D,0,de,G.width,G.height,0,ie,xe,null));else if(g.isDataTexture)if(Le.length>0&&C){Ye&&P&&t.texStorage2D(n.TEXTURE_2D,Se,de,Le[0].width,Le[0].height);for(let X=0,fe=Le.length;X<fe;X++)me=Le[X],Ye?t.texSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,ie,xe,me.data):t.texImage2D(n.TEXTURE_2D,X,de,me.width,me.height,0,ie,xe,me.data);g.generateMipmaps=!1}else Ye?(P&&t.texStorage2D(n.TEXTURE_2D,Se,de,G.width,G.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,G.width,G.height,ie,xe,G.data)):t.texImage2D(n.TEXTURE_2D,0,de,G.width,G.height,0,ie,xe,G.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ye&&P&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,de,Le[0].width,Le[0].height,G.depth);for(let X=0,fe=Le.length;X<fe;X++)me=Le[X],g.format!==Jt?ie!==null?Ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,G.depth,ie,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,de,me.width,me.height,G.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,G.depth,ie,xe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,de,me.width,me.height,G.depth,0,ie,xe,me.data)}else{Ye&&P&&t.texStorage2D(n.TEXTURE_2D,Se,de,Le[0].width,Le[0].height);for(let X=0,fe=Le.length;X<fe;X++)me=Le[X],g.format!==Jt?ie!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,ie,me.data):t.compressedTexImage2D(n.TEXTURE_2D,X,de,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,ie,xe,me.data):t.texImage2D(n.TEXTURE_2D,X,de,me.width,me.height,0,ie,xe,me.data)}else if(g.isDataArrayTexture)Ye?(P&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,de,G.width,G.height,G.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ie,xe,G.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,G.width,G.height,G.depth,0,ie,xe,G.data);else if(g.isData3DTexture)Ye?(P&&t.texStorage3D(n.TEXTURE_3D,Se,de,G.width,G.height,G.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ie,xe,G.data)):t.texImage3D(n.TEXTURE_3D,0,de,G.width,G.height,G.depth,0,ie,xe,G.data);else if(g.isFramebufferTexture){if(P)if(Ye)t.texStorage2D(n.TEXTURE_2D,Se,de,G.width,G.height);else{let X=G.width,fe=G.height;for(let ge=0;ge<Se;ge++)t.texImage2D(n.TEXTURE_2D,ge,de,X,fe,0,ie,xe,null),X>>=1,fe>>=1}}else if(Le.length>0&&C){Ye&&P&&t.texStorage2D(n.TEXTURE_2D,Se,de,Le[0].width,Le[0].height);for(let X=0,fe=Le.length;X<fe;X++)me=Le[X],Ye?t.texSubImage2D(n.TEXTURE_2D,X,0,0,ie,xe,me):t.texImage2D(n.TEXTURE_2D,X,de,ie,xe,me);g.generateMipmaps=!1}else Ye?(P&&t.texStorage2D(n.TEXTURE_2D,Se,de,G.width,G.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,xe,G)):t.texImage2D(n.TEXTURE_2D,0,de,ie,xe,G);U(g,C)&&R(Q),_e.__version=te.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function tt(S,g,D){if(g.image.length!==6)return;const Q=we(S,g),ee=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const te=i.get(ee);if(ee.version!==te.__version||Q===!0){t.activeTexture(n.TEXTURE0+D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,G=[];for(let X=0;X<6;X++)!_e&&!he?G[X]=M(g.image[X],!1,!0,c):G[X]=he?g.image[X].image:g.image[X],G[X]=Ee(g,G[X]);const C=G[0],ie=b(C)||o,xe=s.convert(g.format,g.colorSpace),de=s.convert(g.type),me=j(g.internalFormat,xe,de,g.colorSpace),Le=o&&g.isVideoTexture!==!0,Ye=te.__version===void 0||Q===!0;let P=E(g,C,ie);Re(n.TEXTURE_CUBE_MAP,g,ie);let Se;if(_e){Le&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,P,me,C.width,C.height);for(let X=0;X<6;X++){Se=G[X].mipmaps;for(let fe=0;fe<Se.length;fe++){const ge=Se[fe];g.format!==Jt?xe!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe,me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe,0,0,ge.width,ge.height,xe,de,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe,me,ge.width,ge.height,0,xe,de,ge.data)}}}else{Se=g.mipmaps,Le&&Ye&&(Se.length>0&&P++,t.texStorage2D(n.TEXTURE_CUBE_MAP,P,me,G[0].width,G[0].height));for(let X=0;X<6;X++)if(he){Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,G[X].width,G[X].height,xe,de,G[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,me,G[X].width,G[X].height,0,xe,de,G[X].data);for(let fe=0;fe<Se.length;fe++){const ke=Se[fe].image[X].image;Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe+1,0,0,ke.width,ke.height,xe,de,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe+1,me,ke.width,ke.height,0,xe,de,ke.data)}}else{Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,de,G[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,me,xe,de,G[X]);for(let fe=0;fe<Se.length;fe++){const ge=Se[fe];Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe+1,0,0,xe,de,ge.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe+1,me,xe,de,ge.image[X])}}}U(g,ie)&&R(n.TEXTURE_CUBE_MAP),te.__version=ee.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ie(S,g,D,Q,ee,te){const _e=s.convert(D.format,D.colorSpace),he=s.convert(D.type),G=j(D.internalFormat,_e,he,D.colorSpace);if(!i.get(g).__hasExternalTextures){const ie=Math.max(1,g.width>>te),xe=Math.max(1,g.height>>te);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,G,ie,xe,g.depth,0,_e,he,null):t.texImage2D(ee,te,G,ie,xe,0,_e,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),re(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,i.get(D).__webglTexture,0,K(g)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,i.get(D).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(S,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer&&!g.stencilBuffer){let Q=n.DEPTH_COMPONENT16;if(D||re(g)){const ee=g.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Bn?Q=n.DEPTH_COMPONENT32F:ee.type===Fn&&(Q=n.DEPTH_COMPONENT24));const te=K(g);re(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,Q,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,Q,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(g.depthBuffer&&g.stencilBuffer){const Q=K(g);D&&re(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,g.width,g.height):re(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const Q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ee=0;ee<Q.length;ee++){const te=Q[ee],_e=s.convert(te.format,te.colorSpace),he=s.convert(te.type),G=j(te.internalFormat,_e,he,te.colorSpace),C=K(g);D&&re(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,G,g.width,g.height):re(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,G,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,G,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ue(g.depthTexture,0);const Q=i.get(g.depthTexture).__webglTexture,ee=K(g);if(g.depthTexture.format===ci)re(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(g.depthTexture.format===er)re(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function I(S){const g=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");L(g.__webglFramebuffer,S)}else if(D){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]=n.createRenderbuffer(),_(g.__webglDepthbuffer[Q],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),_(g.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(S,g,D){const Q=i.get(S);g!==void 0&&Ie(Q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&I(S)}function B(S){const g=S.texture,D=i.get(S),Q=i.get(g);S.addEventListener("dispose",pe),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=g.version,a.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,te=S.isWebGLMultipleRenderTargets===!0,_e=b(S)||o;if(ee){D.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[he]=[];for(let G=0;G<g.mipmaps.length;G++)D.__webglFramebuffer[he][G]=n.createFramebuffer()}else D.__webglFramebuffer[he]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)D.__webglFramebuffer[he]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const he=S.texture;for(let G=0,C=he.length;G<C;G++){const ie=i.get(he[G]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&re(S)===!1){const he=te?g:[g];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let G=0;G<he.length;G++){const C=he[G];D.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[G]);const ie=s.convert(C.format,C.colorSpace),xe=s.convert(C.type),de=j(C.internalFormat,ie,xe,C.colorSpace,S.isXRRenderTarget===!0),me=K(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,de,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,D.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),_(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Re(n.TEXTURE_CUBE_MAP,g,_e);for(let he=0;he<6;he++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let G=0;G<g.mipmaps.length;G++)Ie(D.__webglFramebuffer[he][G],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,G);else Ie(D.__webglFramebuffer[he],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);U(g,_e)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const he=S.texture;for(let G=0,C=he.length;G<C;G++){const ie=he[G],xe=i.get(ie);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),Re(n.TEXTURE_2D,ie,_e),Ie(D.__webglFramebuffer,S,ie,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,0),U(ie,_e)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?he=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,Q.__webglTexture),Re(he,g,_e),o&&g.mipmaps&&g.mipmaps.length>0)for(let G=0;G<g.mipmaps.length;G++)Ie(D.__webglFramebuffer[G],S,g,n.COLOR_ATTACHMENT0,he,G);else Ie(D.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,he,0);U(g,_e)&&R(he),t.unbindTexture()}S.depthBuffer&&I(S)}function ae(S){const g=b(S)||o,D=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,ee=D.length;Q<ee;Q++){const te=D[Q];if(U(te,g)){const _e=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(te).__webglTexture;t.bindTexture(_e,he),R(_e),t.unbindTexture()}}}function oe(S){if(o&&S.samples>0&&re(S)===!1){const g=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],D=S.width,Q=S.height;let ee=n.COLOR_BUFFER_BIT;const te=[],_e=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),G=S.isWebGLMultipleRenderTargets===!0;if(G)for(let C=0;C<g.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let C=0;C<g.length;C++){te.push(n.COLOR_ATTACHMENT0+C),S.depthBuffer&&te.push(_e);const ie=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ie===!1&&(S.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),G&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[C]),ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),G){const xe=i.get(g[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,D,Q,0,0,D,Q,ee,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let C=0;C<g.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,he.__webglColorRenderbuffer[C]);const ie=i.get(g[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function K(S){return Math.min(h,S.samples)}function re(S){const g=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ne(S){const g=a.render.frame;x.get(S)!==g&&(x.set(S,g),S.update())}function Ee(S,g){const D=S.colorSpace,Q=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Fa||D!==dn&&D!==hi&&(D===Qe||D===xo?o===!1?e.has("EXT_sRGB")===!0&&Q===Jt?(S.format=Fa,S.minFilter=Ht,S.generateMipmaps=!1):g=Ed.sRGBToLinear(g):(Q!==Jt||ee!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=ue,this.setTexture2DArray=F,this.setTexture3D=J,this.setTextureCube=Me,this.rebindTextures=H,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=re}const yS=0,lt=1;function bS(n,e,t){const i=t.isWebGL2;function r(s,a=hi){let o;const l=a===Qe||a===xo?lt:yS;if(s===Wn)return n.UNSIGNED_BYTE;if(s===pd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===md)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Gg)return n.BYTE;if(s===Vg)return n.SHORT;if(s===yl)return n.UNSIGNED_SHORT;if(s===fd)return n.INT;if(s===Fn)return n.UNSIGNED_INT;if(s===Bn)return n.FLOAT;if(s===ns)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===kg)return n.ALPHA;if(s===Jt)return n.RGBA;if(s===Wg)return n.LUMINANCE;if(s===Xg)return n.LUMINANCE_ALPHA;if(s===ci)return n.DEPTH_COMPONENT;if(s===er)return n.DEPTH_STENCIL;if(s===Fa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Yg)return n.RED;if(s===gd)return n.RED_INTEGER;if(s===qg)return n.RG;if(s===_d)return n.RG_INTEGER;if(s===vd)return n.RGBA_INTEGER;if(s===zo||s===Ho||s===Go||s===Vo)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bc||s===Tc||s===Ac||s===wc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===bc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cc||s===Rc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Cc)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Rc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lc||s===Pc||s===Dc||s===Uc||s===Ic||s===Nc||s===Oc||s===Fc||s===Bc||s===zc||s===Hc||s===Gc||s===Vc||s===kc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Lc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Uc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ic)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ko||s===Wc||s===Xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ko)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kg||s===Yc||s===qc||s===jc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ko)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===li?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class TS extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AS={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wS extends Dt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ci,u!==ci&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ci&&(i=Fn),i===void 0&&u===er&&(i=li),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class CS extends mi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,f=null;const A=[],M=[],b=new Gt;b.layers.enable(1),b.viewport=new dt;const w=new Gt;w.layers.enable(2),w.viewport=new dt;const U=[b,w],R=new TS;R.layers.enable(1),R.layers.enable(2);let j=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let J=A[F];return J===void 0&&(J=new ha,A[F]=J),J.getTargetRaySpace()},this.getControllerGrip=function(F){let J=A[F];return J===void 0&&(J=new ha,A[F]=J),J.getGripSpace()},this.getHand=function(F){let J=A[F];return J===void 0&&(J=new ha,A[F]=J),J.getHandSpace()};function T(F){const J=M.indexOf(F.inputSource);if(J===-1)return;const Me=A[J];Me!==void 0&&(Me.update(F.inputSource,F.frame,c||a),Me.dispatchEvent({type:F.type,data:F.inputSource}))}function se(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",pe);for(let F=0;F<A.length;F++){const J=M[F];J!==null&&(M[F]=null,A[F].disconnect(J))}j=null,E=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,f=null,ue.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",se),r.addEventListener("inputsourceschange",pe),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),f=new di(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,Me=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=v.stencil?er:ci,Me=v.stencil?li:Fn);const be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(be),r.updateRenderState({layers:[d]}),f=new di(d.textureWidth,d.textureHeight,{format:Jt,type:Wn,depthTexture:new wS(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ae=e.properties.get(f);Ae.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function pe(F){for(let J=0;J<F.removed.length;J++){const Me=F.removed[J],ye=M.indexOf(Me);ye>=0&&(M[ye]=null,A[ye].disconnect(Me))}for(let J=0;J<F.added.length;J++){const Me=F.added[J];let ye=M.indexOf(Me);if(ye===-1){for(let Ae=0;Ae<A.length;Ae++)if(Ae>=M.length){M.push(Me),ye=Ae;break}else if(M[Ae]===null){M[Ae]=Me,ye=Ae;break}if(ye===-1)break}const be=A[ye];be&&be.connect(Me)}}const V=new N,q=new N;function Y(F,J,Me){V.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(Me.matrixWorld);const ye=V.distanceTo(q),be=J.projectionMatrix.elements,Ae=Me.projectionMatrix.elements,Re=be[14]/(be[10]-1),we=be[14]/(be[10]+1),Fe=(be[9]+1)/be[5],tt=(be[9]-1)/be[5],Ie=(be[8]-1)/be[0],_=(Ae[8]+1)/Ae[0],L=Re*Ie,I=Re*_,H=ye/(-Ie+_),B=H*-Ie;J.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(B),F.translateZ(H),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const ae=Re+H,oe=we+H,K=L-B,re=I+(ye-B),ne=Fe*we/oe*ae,Ee=tt*we/oe*ae;F.projectionMatrix.makePerspective(K,re,ne,Ee,ae,oe),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function le(F,J){J===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(J.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;R.near=w.near=b.near=F.near,R.far=w.far=b.far=F.far,(j!==R.near||E!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),j=R.near,E=R.far);const J=F.parent,Me=R.cameras;le(R,J);for(let ye=0;ye<Me.length;ye++)le(Me[ye],J);Me.length===2?Y(R,b,w):R.projectionMatrix.copy(b.projectionMatrix),k(F,R,J)};function k(F,J,Me){Me===null?F.matrix.copy(J.matrixWorld):(F.matrix.copy(Me.matrixWorld),F.matrix.invert(),F.matrix.multiply(J.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(J.projectionMatrix),F.projectionMatrixInverse.copy(J.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=is*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let W=null;function ce(F,J){if(u=J.getViewerPose(c||a),x=J,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ye=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let be=0;be<Me.length;be++){const Ae=Me[be];let Re=null;if(m!==null)Re=m.getViewport(Ae);else{const Fe=h.getViewSubImage(d,Ae);Re=Fe.viewport,be===0&&(e.setRenderTargetTextures(f,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(f))}let we=U[be];we===void 0&&(we=new Gt,we.layers.enable(be),we.viewport=new dt,U[be]=we),we.matrix.fromArray(Ae.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ae.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Re.x,Re.y,Re.width,Re.height),be===0&&(R.matrix.copy(we.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(we)}}for(let Me=0;Me<A.length;Me++){const ye=M[Me],be=A[Me];ye!==null&&be!==void 0&&be.update(ye,J,c||a)}W&&W(F,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const ue=new Pd;ue.setAnimationLoop(ce),this.setAnimationLoop=function(F){W=F},this.dispose=function(){}}}function RS(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Cd(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,A,M,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(s(p,f),x(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,A,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const A=e.get(f).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*M,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,A,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const A=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LS(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,M){const b=M.program;i.uniformBlockBinding(A,b)}function c(A,M){let b=r[A.id];b===void 0&&(x(A),b=u(A),r[A.id]=b,A.addEventListener("dispose",p));const w=M.program;i.updateUBOMapping(A,w);const U=e.render.frame;s[A.id]!==U&&(d(A),s[A.id]=U)}function u(A){const M=h();A.__bindingPointIndex=M;const b=n.createBuffer(),w=A.__size,U=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,w,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const M=r[A.id],b=A.uniforms,w=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let U=0,R=b.length;U<R;U++){const j=b[U];if(m(j,U,w)===!0){const E=j.__offset,T=Array.isArray(j.value)?j.value:[j.value];let se=0;for(let pe=0;pe<T.length;pe++){const V=T[pe],q=v(V);typeof V=="number"?(j.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,E+se,j.__data)):V.isMatrix3?(j.__data[0]=V.elements[0],j.__data[1]=V.elements[1],j.__data[2]=V.elements[2],j.__data[3]=V.elements[0],j.__data[4]=V.elements[3],j.__data[5]=V.elements[4],j.__data[6]=V.elements[5],j.__data[7]=V.elements[0],j.__data[8]=V.elements[6],j.__data[9]=V.elements[7],j.__data[10]=V.elements[8],j.__data[11]=V.elements[0]):(V.toArray(j.__data,se),se+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,j.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,M,b){const w=A.value;if(b[M]===void 0){if(typeof w=="number")b[M]=w;else{const U=Array.isArray(w)?w:[w],R=[];for(let j=0;j<U.length;j++)R.push(U[j].clone());b[M]=R}return!0}else if(typeof w=="number"){if(b[M]!==w)return b[M]=w,!0}else{const U=Array.isArray(b[M])?b[M]:[b[M]],R=Array.isArray(w)?w:[w];for(let j=0;j<U.length;j++){const E=U[j];if(E.equals(R[j])===!1)return E.copy(R[j]),!0}}return!1}function x(A){const M=A.uniforms;let b=0;const w=16;let U=0;for(let R=0,j=M.length;R<j;R++){const E=M[R],T={boundary:0,storage:0},se=Array.isArray(E.value)?E.value:[E.value];for(let pe=0,V=se.length;pe<V;pe++){const q=se[pe],Y=v(q);T.boundary+=Y.boundary,T.storage+=Y.storage}if(E.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,R>0){U=b%w;const pe=w-U;U!==0&&pe-T.boundary<0&&(b+=w-U,E.__offset=b)}b+=T.storage}return U=b%w,U>0&&(b+=w-U),A.__size=b,A.__cache={},this}function v(A){const M={boundary:0,storage:0};return typeof A=="number"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function p(A){const M=A.target;M.removeEventListener("dispose",p);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Fd{constructor(e={}){const{canvas:t=y_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const f=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qe,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const M=this;let b=!1,w=0,U=0,R=null,j=-1,E=null;const T=new dt,se=new dt;let pe=null;const V=new Ve(0);let q=0,Y=t.width,le=t.height,k=1,W=null,ce=null;const ue=new dt(0,0,Y,le),F=new dt(0,0,Y,le);let J=!1;const Me=new Al;let ye=!1,be=!1,Ae=null;const Re=new ot,we=new Ne,Fe=new N,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return R===null?k:1}let _=i;function L(y,O){for(let $=0;$<y.length;$++){const z=y[$],Z=t.getContext(z,O);if(Z!==null)return Z}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",fe,!1),_===null){const O=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&O.shift(),_=L(O,y),_===null)throw L(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let I,H,B,ae,oe,K,re,ne,Ee,S,g,D,Q,ee,te,_e,he,G,C,ie,xe,de,me,Le;function Ye(){I=new H0(_),H=new I0(_,I,e),I.init(H),de=new bS(_,I,H),B=new SS(_,I,H),ae=new k0(_),oe=new aS,K=new ES(_,I,B,oe,H,de,ae),re=new O0(M),ne=new z0(M),Ee=new Q_(_,H),me=new D0(_,I,Ee,H),S=new G0(_,Ee,ae,me),g=new q0(_,S,Ee,ae),C=new Y0(_,H,K),_e=new N0(oe),D=new oS(M,re,ne,I,H,me,_e),Q=new RS(M,oe),ee=new cS,te=new mS(I,H),G=new P0(M,re,ne,B,g,d,l),he=new MS(M,g,H),Le=new LS(_,ae,H,B),ie=new U0(_,I,ae,H),xe=new V0(_,I,ae,H),ae.programs=D.programs,M.capabilities=H,M.extensions=I,M.properties=oe,M.renderLists=ee,M.shadowMap=he,M.state=B,M.info=ae}Ye();const P=new CS(M,_);this.xr=P,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const y=I.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=I.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(Y,le,!1))},this.getSize=function(y){return y.set(Y,le)},this.setSize=function(y,O,$=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,le=O,t.width=Math.floor(y*k),t.height=Math.floor(O*k),$===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Y*k,le*k).floor()},this.setDrawingBufferSize=function(y,O,$){Y=y,le=O,k=$,t.width=Math.floor(y*$),t.height=Math.floor(O*$),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,O,$,z){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,O,$,z),B.viewport(T.copy(ue).multiplyScalar(k).floor())},this.getScissor=function(y){return y.copy(F)},this.setScissor=function(y,O,$,z){y.isVector4?F.set(y.x,y.y,y.z,y.w):F.set(y,O,$,z),B.scissor(se.copy(F).multiplyScalar(k).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(y){B.setScissorTest(J=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(y=!0,O=!0,$=!0){let z=0;if(y){let Z=!1;if(R!==null){const Te=R.texture.format;Z=Te===vd||Te===_d||Te===gd}if(Z){const Te=R.texture.type,Ce=Te===Wn||Te===Fn||Te===yl||Te===li||Te===pd||Te===md,De=G.getClearColor(),Ue=G.getClearAlpha(),We=De.r,Pe=De.g,Be=De.b;Ce?(m[0]=We,m[1]=Pe,m[2]=Be,m[3]=Ue,_.clearBufferuiv(_.COLOR,0,m)):(x[0]=We,x[1]=Pe,x[2]=Be,x[3]=Ue,_.clearBufferiv(_.COLOR,0,x))}else z|=_.COLOR_BUFFER_BIT}O&&(z|=_.DEPTH_BUFFER_BIT),$&&(z|=_.STENCIL_BUFFER_BIT),_.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ee.dispose(),te.dispose(),oe.dispose(),re.dispose(),ne.dispose(),g.dispose(),me.dispose(),Le.dispose(),D.dispose(),P.dispose(),P.removeEventListener("sessionstart",Ze),P.removeEventListener("sessionend",rn),Ae&&(Ae.dispose(),Ae=null),Et.stop()};function Se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=ae.autoReset,O=he.enabled,$=he.autoUpdate,z=he.needsUpdate,Z=he.type;Ye(),ae.autoReset=y,he.enabled=O,he.autoUpdate=$,he.needsUpdate=z,he.type=Z}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ge(y){const O=y.target;O.removeEventListener("dispose",ge),ke(O)}function ke(y){je(y),oe.remove(y)}function je(y){const O=oe.get(y).programs;O!==void 0&&(O.forEach(function($){D.releaseProgram($)}),y.isShaderMaterial&&D.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,$,z,Z,Te){O===null&&(O=tt);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,De=Gd(y,O,$,z,Z);B.setMaterial(z,Ce);let Ue=$.index,We=1;if(z.wireframe===!0){if(Ue=S.getWireframeAttribute($),Ue===void 0)return;We=2}const Pe=$.drawRange,Be=$.attributes.position;let et=Pe.start*We,nt=(Pe.start+Pe.count)*We;Te!==null&&(et=Math.max(et,Te.start*We),nt=Math.min(nt,(Te.start+Te.count)*We)),Ue!==null?(et=Math.max(et,0),nt=Math.min(nt,Ue.count)):Be!=null&&(et=Math.max(et,0),nt=Math.min(nt,Be.count));const Bt=nt-et;if(Bt<0||Bt===1/0)return;me.setup(Z,z,De,$,Ue);let pn,it=ie;if(Ue!==null&&(pn=Ee.get(Ue),it=xe,it.setIndex(pn)),Z.isMesh)z.wireframe===!0?(B.setLineWidth(z.wireframeLinewidth*Ie()),it.setMode(_.LINES)):it.setMode(_.TRIANGLES);else if(Z.isLine){let Xe=z.linewidth;Xe===void 0&&(Xe=1),B.setLineWidth(Xe*Ie()),Z.isLineSegments?it.setMode(_.LINES):Z.isLineLoop?it.setMode(_.LINE_LOOP):it.setMode(_.LINE_STRIP)}else Z.isPoints?it.setMode(_.POINTS):Z.isSprite&&it.setMode(_.TRIANGLES);if(Z.isInstancedMesh)it.renderInstances(et,Bt,Z.count);else if($.isInstancedBufferGeometry){const Xe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,To=Math.min($.instanceCount,Xe);it.renderInstances(et,Bt,To)}else it.render(et,Bt)},this.compile=function(y,O){function $(z,Z,Te){z.transparent===!0&&z.side===cn&&z.forceSinglePass===!1?(z.side=Pt,z.needsUpdate=!0,hs(z,Z,Te),z.side=Yn,z.needsUpdate=!0,hs(z,Z,Te),z.side=cn):hs(z,Z,Te)}p=te.get(y),p.init(),A.push(p),y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(M._useLegacyLights),y.traverse(function(z){const Z=z.material;if(Z)if(Array.isArray(Z))for(let Te=0;Te<Z.length;Te++){const Ce=Z[Te];$(Ce,y,z)}else $(Z,y,z)}),A.pop(),p=null};let $e=null;function It(y){$e&&$e(y)}function Ze(){Et.stop()}function rn(){Et.start()}const Et=new Pd;Et.setAnimationLoop(It),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(y){$e=y,P.setAnimationLoop(y),y===null?Et.stop():Et.start()},P.addEventListener("sessionstart",Ze),P.addEventListener("sessionend",rn),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,O,R),p=te.get(y,A.length),p.init(),A.push(p),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Me.setFromProjectionMatrix(Re),be=this.localClippingEnabled,ye=_e.init(this.clippingPlanes,be),v=ee.get(y,f.length),v.init(),f.push(v),Ll(y,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(W,ce),this.info.render.frame++,ye===!0&&_e.beginShadows();const $=p.state.shadowsArray;if(he.render($,y,O),ye===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(v,y),p.setupLights(M._useLegacyLights),O.isArrayCamera){const z=O.cameras;for(let Z=0,Te=z.length;Z<Te;Z++){const Ce=z[Z];Pl(v,y,Ce,Ce.viewport)}}else Pl(v,y,O);R!==null&&(K.updateMultisampleRenderTarget(R),K.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(M,y,O),me.resetDefaultState(),j=-1,E=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ll(y,O,$,z){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Me.intersectsSprite(y)){z&&Fe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Re);const Ce=g.update(y),De=y.material;De.visible&&v.push(y,Ce,De,$,Fe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Me.intersectsObject(y))){const Ce=g.update(y),De=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Fe.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Fe.copy(Ce.boundingSphere.center)),Fe.applyMatrix4(y.matrixWorld).applyMatrix4(Re)),Array.isArray(De)){const Ue=Ce.groups;for(let We=0,Pe=Ue.length;We<Pe;We++){const Be=Ue[We],et=De[Be.materialIndex];et&&et.visible&&v.push(y,Ce,et,$,Fe.z,Be)}}else De.visible&&v.push(y,Ce,De,$,Fe.z,null)}}const Te=y.children;for(let Ce=0,De=Te.length;Ce<De;Ce++)Ll(Te[Ce],O,$,z)}function Pl(y,O,$,z){const Z=y.opaque,Te=y.transmissive,Ce=y.transparent;p.setupLightsView($),ye===!0&&_e.setGlobalState(M.clippingPlanes,$),Te.length>0&&Hd(Z,Te,O,$),z&&B.viewport(T.copy(z)),Z.length>0&&us(Z,O,$),Te.length>0&&us(Te,O,$),Ce.length>0&&us(Ce,O,$),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Hd(y,O,$,z){const Z=H.isWebGL2;Ae===null&&(Ae=new di(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?ns:Wn,minFilter:ts,samples:Z?4:0})),M.getDrawingBufferSize(we),Z?Ae.setSize(we.x,we.y):Ae.setSize(ro(we.x),ro(we.y));const Te=M.getRenderTarget();M.setRenderTarget(Ae),M.getClearColor(V),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear();const Ce=M.toneMapping;M.toneMapping=kn,us(y,$,z),K.updateMultisampleRenderTarget(Ae),K.updateRenderTargetMipmap(Ae);let De=!1;for(let Ue=0,We=O.length;Ue<We;Ue++){const Pe=O[Ue],Be=Pe.object,et=Pe.geometry,nt=Pe.material,Bt=Pe.group;if(nt.side===cn&&Be.layers.test(z.layers)){const pn=nt.side;nt.side=Pt,nt.needsUpdate=!0,Dl(Be,$,z,et,nt,Bt),nt.side=pn,nt.needsUpdate=!0,De=!0}}De===!0&&(K.updateMultisampleRenderTarget(Ae),K.updateRenderTargetMipmap(Ae)),M.setRenderTarget(Te),M.setClearColor(V,q),M.toneMapping=Ce}function us(y,O,$){const z=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Te=y.length;Z<Te;Z++){const Ce=y[Z],De=Ce.object,Ue=Ce.geometry,We=z===null?Ce.material:z,Pe=Ce.group;De.layers.test($.layers)&&Dl(De,O,$,Ue,We,Pe)}}function Dl(y,O,$,z,Z,Te){y.onBeforeRender(M,O,$,z,Z,Te),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Z.onBeforeRender(M,O,$,z,y,Te),Z.transparent===!0&&Z.side===cn&&Z.forceSinglePass===!1?(Z.side=Pt,Z.needsUpdate=!0,M.renderBufferDirect($,O,z,Z,y,Te),Z.side=Yn,Z.needsUpdate=!0,M.renderBufferDirect($,O,z,Z,y,Te),Z.side=cn):M.renderBufferDirect($,O,z,Z,y,Te),y.onAfterRender(M,O,$,z,Z,Te)}function hs(y,O,$){O.isScene!==!0&&(O=tt);const z=oe.get(y),Z=p.state.lights,Te=p.state.shadowsArray,Ce=Z.state.version,De=D.getParameters(y,Z.state,Te,O,$),Ue=D.getProgramCacheKey(De);let We=z.programs;z.environment=y.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(y.isMeshStandardMaterial?ne:re).get(y.envMap||z.environment),We===void 0&&(y.addEventListener("dispose",ge),We=new Map,z.programs=We);let Pe=We.get(Ue);if(Pe!==void 0){if(z.currentProgram===Pe&&z.lightsStateVersion===Ce)return Ul(y,De),Pe}else De.uniforms=D.getUniforms(y),y.onBuild($,De,M),y.onBeforeCompile(De,M),Pe=D.acquireProgram(De,Ue),We.set(Ue,Pe),z.uniforms=De.uniforms;const Be=z.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Be.clippingPlanes=_e.uniform),Ul(y,De),z.needsLights=kd(y),z.lightsStateVersion=Ce,z.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.directionalShadowMap.value=Z.state.directionalShadowMap,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotShadowMap.value=Z.state.spotShadowMap,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMap.value=Z.state.pointShadowMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix);const et=Pe.getUniforms(),nt=Zs.seqWithValue(et.seq,Be);return z.currentProgram=Pe,z.uniformsList=nt,Pe}function Ul(y,O){const $=oe.get(y);$.outputColorSpace=O.outputColorSpace,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Gd(y,O,$,z,Z){O.isScene!==!0&&(O=tt),K.resetTextureUnits();const Te=O.fog,Ce=z.isMeshStandardMaterial?O.environment:null,De=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:dn,Ue=(z.isMeshStandardMaterial?ne:re).get(z.envMap||Ce),We=z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Pe=!!$.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Be=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,nt=!!$.morphAttributes.color;let Bt=kn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Bt=M.toneMapping);const pn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,it=pn!==void 0?pn.length:0,Xe=oe.get(z),To=p.state.lights;if(ye===!0&&(be===!0||y!==E)){const Nt=y===E&&z.id===j;_e.setState(z,y,Nt)}let rt=!1;z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==To.state.version||Xe.outputColorSpace!==De||Z.isInstancedMesh&&Xe.instancing===!1||!Z.isInstancedMesh&&Xe.instancing===!0||Z.isSkinnedMesh&&Xe.skinning===!1||!Z.isSkinnedMesh&&Xe.skinning===!0||Z.isInstancedMesh&&Xe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xe.instancingColor===!1&&Z.instanceColor!==null||Xe.envMap!==Ue||z.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==_e.numPlanes||Xe.numIntersection!==_e.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Pe||Xe.morphTargets!==Be||Xe.morphNormals!==et||Xe.morphColors!==nt||Xe.toneMapping!==Bt||H.isWebGL2===!0&&Xe.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Xe.__version=z.version);let qn=Xe.currentProgram;rt===!0&&(qn=hs(z,O,Z));let Il=!1,hr=!1,Ao=!1;const yt=qn.getUniforms(),jn=Xe.uniforms;if(B.useProgram(qn.program)&&(Il=!0,hr=!0,Ao=!0),z.id!==j&&(j=z.id,hr=!0),Il||E!==y){yt.setValue(_,"projectionMatrix",y.projectionMatrix),yt.setValue(_,"viewMatrix",y.matrixWorldInverse);const Nt=yt.map.cameraPosition;Nt!==void 0&&Nt.setValue(_,Fe.setFromMatrixPosition(y.matrixWorld)),H.logarithmicDepthBuffer&&yt.setValue(_,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&yt.setValue(_,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,hr=!0,Ao=!0)}if(Z.isSkinnedMesh){yt.setOptional(_,Z,"bindMatrix"),yt.setOptional(_,Z,"bindMatrixInverse");const Nt=Z.skeleton;Nt&&(H.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),yt.setValue(_,"boneTexture",Nt.boneTexture,K),yt.setValue(_,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wo=$.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&H.isWebGL2===!0)&&C.update(Z,$,qn),(hr||Xe.receiveShadow!==Z.receiveShadow)&&(Xe.receiveShadow=Z.receiveShadow,yt.setValue(_,"receiveShadow",Z.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(jn.envMap.value=Ue,jn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),hr&&(yt.setValue(_,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&Vd(jn,Ao),Te&&z.fog===!0&&Q.refreshFogUniforms(jn,Te),Q.refreshMaterialUniforms(jn,z,k,le,Ae),Zs.upload(_,Xe.uniformsList,jn,K)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zs.upload(_,Xe.uniformsList,jn,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&yt.setValue(_,"center",Z.center),yt.setValue(_,"modelViewMatrix",Z.modelViewMatrix),yt.setValue(_,"normalMatrix",Z.normalMatrix),yt.setValue(_,"modelMatrix",Z.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Nt=z.uniformsGroups;for(let Co=0,Wd=Nt.length;Co<Wd;Co++)if(H.isWebGL2){const Nl=Nt[Co];Le.update(Nl,qn),Le.bind(Nl,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function Vd(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function kd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,O,$){oe.get(y.texture).__webglTexture=O,oe.get(y.depthTexture).__webglTexture=$;const z=oe.get(y);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=$===void 0,z.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,O){const $=oe.get(y);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,$=0){R=y,w=O,U=$;let z=!0,Z=null,Te=!1,Ce=!1;if(y){const Ue=oe.get(y);Ue.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(_.FRAMEBUFFER,null),z=!1):Ue.__webglFramebuffer===void 0?K.setupRenderTarget(y):Ue.__hasExternalTextures&&K.rebindTextures(y,oe.get(y.texture).__webglTexture,oe.get(y.depthTexture).__webglTexture);const We=y.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ce=!0);const Pe=oe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?Z=Pe[O][$]:Z=Pe[O],Te=!0):H.isWebGL2&&y.samples>0&&K.useMultisampledRTT(y)===!1?Z=oe.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?Z=Pe[$]:Z=Pe,T.copy(y.viewport),se.copy(y.scissor),pe=y.scissorTest}else T.copy(ue).multiplyScalar(k).floor(),se.copy(F).multiplyScalar(k).floor(),pe=J;if(B.bindFramebuffer(_.FRAMEBUFFER,Z)&&H.drawBuffers&&z&&B.drawBuffers(y,Z),B.viewport(T),B.scissor(se),B.setScissorTest(pe),Te){const Ue=oe.get(y.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,$)}else if(Ce){const Ue=oe.get(y.texture),We=O||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ue.__webglTexture,$||0,We)}j=-1},this.readRenderTargetPixels=function(y,O,$,z,Z,Te,Ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){B.bindFramebuffer(_.FRAMEBUFFER,De);try{const Ue=y.texture,We=Ue.format,Pe=Ue.type;if(We!==Jt&&de.convert(We)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Pe===ns&&(I.has("EXT_color_buffer_half_float")||H.isWebGL2&&I.has("EXT_color_buffer_float"));if(Pe!==Wn&&de.convert(Pe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Bn&&(H.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-z&&$>=0&&$<=y.height-Z&&_.readPixels(O,$,z,Z,de.convert(We),de.convert(Pe),Te)}finally{const Ue=R!==null?oe.get(R).__webglFramebuffer:null;B.bindFramebuffer(_.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(y,O,$=0){const z=Math.pow(2,-$),Z=Math.floor(O.image.width*z),Te=Math.floor(O.image.height*z);K.setTexture2D(O,0),_.copyTexSubImage2D(_.TEXTURE_2D,$,0,0,y.x,y.y,Z,Te),B.unbindTexture()},this.copyTextureToTexture=function(y,O,$,z=0){const Z=O.image.width,Te=O.image.height,Ce=de.convert($.format),De=de.convert($.type);K.setTexture2D($,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,$.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,$.unpackAlignment),O.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,z,y.x,y.y,Z,Te,Ce,De,O.image.data):O.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,z,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,z,y.x,y.y,Ce,De,O.image),z===0&&$.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(y,O,$,z,Z=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=y.max.x-y.min.x+1,Ce=y.max.y-y.min.y+1,De=y.max.z-y.min.z+1,Ue=de.convert(z.format),We=de.convert(z.type);let Pe;if(z.isData3DTexture)K.setTexture3D(z,0),Pe=_.TEXTURE_3D;else if(z.isDataArrayTexture)K.setTexture2DArray(z,0),Pe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,z.unpackAlignment);const Be=_.getParameter(_.UNPACK_ROW_LENGTH),et=_.getParameter(_.UNPACK_IMAGE_HEIGHT),nt=_.getParameter(_.UNPACK_SKIP_PIXELS),Bt=_.getParameter(_.UNPACK_SKIP_ROWS),pn=_.getParameter(_.UNPACK_SKIP_IMAGES),it=$.isCompressedTexture?$.mipmaps[0]:$.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,it.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,it.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,y.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,y.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,y.min.z),$.isDataTexture||$.isData3DTexture?_.texSubImage3D(Pe,Z,O.x,O.y,O.z,Te,Ce,De,Ue,We,it.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Pe,Z,O.x,O.y,O.z,Te,Ce,De,Ue,it.data)):_.texSubImage3D(Pe,Z,O.x,O.y,O.z,Te,Ce,De,Ue,We,it),_.pixelStorei(_.UNPACK_ROW_LENGTH,Be),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,et),_.pixelStorei(_.UNPACK_SKIP_PIXELS,nt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Bt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,pn),Z===0&&z.generateMipmaps&&_.generateMipmap(Pe),B.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?K.setTextureCube(y,0):y.isData3DTexture?K.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?K.setTexture2DArray(y,0):K.setTexture2D(y,0),B.unbindTexture()},this.resetState=function(){w=0,U=0,R=null,B.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?ui:xd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ui?Qe:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class PS extends Fd{}PS.prototype.isWebGL1Renderer=!0;class Cl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new Cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class DS extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bd extends lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Iu=new N,Nu=new N,Ou=new ot,da=new So,Ws=new Mo;class US extends mt{constructor(e=new wn,t=new Bd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Iu.fromBufferAttribute(t,r-1),Nu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Iu.distanceTo(Nu);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;Ou.copy(r).invert(),da.copy(e.ray).applyMatrix4(Ou);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,h=new N,d=new N,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const f=Math.max(0,a.start),A=Math.min(x.count,a.start+a.count);for(let M=f,b=A-1;M<b;M+=m){const w=x.getX(M),U=x.getX(M+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,U),da.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const j=e.ray.origin.distanceTo(d);j<e.near||j>e.far||t.push({distance:j,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),A=Math.min(p.count,a.start+a.count);for(let M=f,b=A-1;M<b;M+=m){if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),da.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Fu=new N,Bu=new N;class IS extends US{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Fu.fromBufferAttribute(t,r),Bu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fu.distanceTo(Bu);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class NS extends lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const zu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class OS{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const FS=new OS;class Rl{constructor(e){this.manager=e!==void 0?e:FS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";class BS extends Rl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=rs("img");function l(){u(),zu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class zS extends Rl{constructor(e){super(e)}load(e,t,i,r){const s=new Dt,a=new BS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class zd extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fa=new ot,Hu=new N,Gu=new N;class HS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gu),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GS extends HS{constructor(){super(new Dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VS extends zd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new GS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kS extends zd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class WS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vu(){return(typeof performance>"u"?Date:performance).now()}class XS{constructor(e,t,i=0,r=1/0){this.ray=new So(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ha(e,this,i,t),i.sort(ku),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ha(e[r],this,i,t);return i.sort(ku),i}}function ku(n,e){return n.distance-e.distance}function Ha(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Ha(r[s],e,t,!0)}}class Wu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class YS extends IS{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,x=-o;d<=t;d++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const v=d===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new wn;u.setAttribute("position",new kt(l,3)),u.setAttribute("color",new kt(c,3));const h=new Bd({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);const Xu={type:"change"},pa={type:"start"},Yu={type:"end"},Xs=new So,qu=new On,qS=Math.cos(70*E_.DEG2RAD);class jS extends mi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",g),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xu),i.update(),s=r.NONE},this.update=function(){const C=new N,ie=new fi().setFromUnitVectors(e.up,new N(0,1,0)),xe=ie.clone().invert(),de=new N,me=new fi,Le=new N,Ye=2*Math.PI;return function(Se=null){const X=i.object.position;C.copy(X).sub(i.target),C.applyQuaternion(ie),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&se(E(Se)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let fe=i.minAzimuthAngle,ge=i.maxAzimuthAngle;isFinite(fe)&&isFinite(ge)&&(fe<-Math.PI?fe+=Ye:fe>Math.PI&&(fe-=Ye),ge<-Math.PI?ge+=Ye:ge>Math.PI&&(ge-=Ye),fe<=ge?o.theta=Math.max(fe,Math.min(ge,o.theta)):o.theta=o.theta>(fe+ge)/2?Math.max(fe,o.theta):Math.min(ge,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&U||i.object.isOrthographicCamera?o.radius=ce(o.radius):o.radius=ce(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(xe),X.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ke=!1;if(i.zoomToCursor&&U){let je=null;if(i.object.isPerspectiveCamera){const $e=C.length();je=ce($e*c);const It=$e-je;i.object.position.addScaledVector(b,It),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const $e=new N(w.x,w.y,0);$e.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ke=!0;const It=new N(w.x,w.y,0);It.unproject(i.object),i.object.position.sub(It).add($e),i.object.updateMatrixWorld(),je=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;je!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(je).add(i.object.position):(Xs.origin.copy(i.object.position),Xs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Xs.direction))<qS?e.lookAt(i.target):(qu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Xs.intersectPlane(qu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ke=!0);return c=1,U=!1,ke||de.distanceToSquared(i.object.position)>a||8*(1-me.dot(i.object.quaternion))>a||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(Xu),de.copy(i.object.position),me.copy(i.object.quaternion),Le.copy(i.target),ke=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",oe),i.domElement.removeEventListener("pointercancel",re),i.domElement.removeEventListener("wheel",S),i.domElement.removeEventListener("pointermove",K),i.domElement.removeEventListener("pointerup",re),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",g),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Wu,l=new Wu;let c=1;const u=new N,h=new Ne,d=new Ne,m=new Ne,x=new Ne,v=new Ne,p=new Ne,f=new Ne,A=new Ne,M=new Ne,b=new N,w=new Ne;let U=!1;const R=[],j={};function E(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function se(C){l.theta-=C}function pe(C){l.phi-=C}const V=function(){const C=new N;return function(xe,de){C.setFromMatrixColumn(de,0),C.multiplyScalar(-xe),u.add(C)}}(),q=function(){const C=new N;return function(xe,de){i.screenSpacePanning===!0?C.setFromMatrixColumn(de,1):(C.setFromMatrixColumn(de,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(xe),u.add(C)}}(),Y=function(){const C=new N;return function(xe,de){const me=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;C.copy(Le).sub(i.target);let Ye=C.length();Ye*=Math.tan(i.object.fov/2*Math.PI/180),V(2*xe*Ye/me.clientHeight,i.object.matrix),q(2*de*Ye/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(xe*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),q(de*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function le(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(C){if(!i.zoomToCursor)return;U=!0;const ie=i.domElement.getBoundingClientRect(),xe=C.clientX-ie.left,de=C.clientY-ie.top,me=ie.width,Le=ie.height;w.x=xe/me*2-1,w.y=-(de/Le)*2+1,b.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function ce(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function ue(C){h.set(C.clientX,C.clientY)}function F(C){W(C),f.set(C.clientX,C.clientY)}function J(C){x.set(C.clientX,C.clientY)}function Me(C){d.set(C.clientX,C.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ie=i.domElement;se(2*Math.PI*m.x/ie.clientHeight),pe(2*Math.PI*m.y/ie.clientHeight),h.copy(d),i.update()}function ye(C){A.set(C.clientX,C.clientY),M.subVectors(A,f),M.y>0?le(T()):M.y<0&&k(T()),f.copy(A),i.update()}function be(C){v.set(C.clientX,C.clientY),p.subVectors(v,x).multiplyScalar(i.panSpeed),Y(p.x,p.y),x.copy(v),i.update()}function Ae(C){W(C),C.deltaY<0?k(T()):C.deltaY>0&&le(T()),i.update()}function Re(C){let ie=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?pe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?pe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?se(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?se(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),ie=!0;break}ie&&(C.preventDefault(),i.update())}function we(){if(R.length===1)h.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),ie=.5*(R[0].pageY+R[1].pageY);h.set(C,ie)}}function Fe(){if(R.length===1)x.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),ie=.5*(R[0].pageY+R[1].pageY);x.set(C,ie)}}function tt(){const C=R[0].pageX-R[1].pageX,ie=R[0].pageY-R[1].pageY,xe=Math.sqrt(C*C+ie*ie);f.set(0,xe)}function Ie(){i.enableZoom&&tt(),i.enablePan&&Fe()}function _(){i.enableZoom&&tt(),i.enableRotate&&we()}function L(C){if(R.length==1)d.set(C.pageX,C.pageY);else{const xe=G(C),de=.5*(C.pageX+xe.x),me=.5*(C.pageY+xe.y);d.set(de,me)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ie=i.domElement;se(2*Math.PI*m.x/ie.clientHeight),pe(2*Math.PI*m.y/ie.clientHeight),h.copy(d)}function I(C){if(R.length===1)v.set(C.pageX,C.pageY);else{const ie=G(C),xe=.5*(C.pageX+ie.x),de=.5*(C.pageY+ie.y);v.set(xe,de)}p.subVectors(v,x).multiplyScalar(i.panSpeed),Y(p.x,p.y),x.copy(v)}function H(C){const ie=G(C),xe=C.pageX-ie.x,de=C.pageY-ie.y,me=Math.sqrt(xe*xe+de*de);A.set(0,me),M.set(0,Math.pow(A.y/f.y,i.zoomSpeed)),le(M.y),f.copy(A)}function B(C){i.enableZoom&&H(C),i.enablePan&&I(C)}function ae(C){i.enableZoom&&H(C),i.enableRotate&&L(C)}function oe(C){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",K),i.domElement.addEventListener("pointerup",re)),te(C),C.pointerType==="touch"?D(C):ne(C))}function K(C){i.enabled!==!1&&(C.pointerType==="touch"?Q(C):Ee(C))}function re(C){_e(C),R.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",K),i.domElement.removeEventListener("pointerup",re)),i.dispatchEvent(Yu),s=r.NONE}function ne(C){let ie;switch(C.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Si.DOLLY:if(i.enableZoom===!1)return;F(C),s=r.DOLLY;break;case Si.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;J(C),s=r.PAN}else{if(i.enableRotate===!1)return;ue(C),s=r.ROTATE}break;case Si.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;ue(C),s=r.ROTATE}else{if(i.enablePan===!1)return;J(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(pa)}function Ee(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Me(C);break;case r.DOLLY:if(i.enableZoom===!1)return;ye(C);break;case r.PAN:if(i.enablePan===!1)return;be(C);break}}function S(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(pa),Ae(C),i.dispatchEvent(Yu))}function g(C){i.enabled===!1||i.enablePan===!1||Re(C)}function D(C){switch(he(C),R.length){case 1:switch(i.touches.ONE){case Ei.ROTATE:if(i.enableRotate===!1)return;we(),s=r.TOUCH_ROTATE;break;case Ei.PAN:if(i.enablePan===!1)return;Fe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ei.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(),s=r.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(pa)}function Q(C){switch(he(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;L(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;I(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ae(C),i.update();break;default:s=r.NONE}}function ee(C){i.enabled!==!1&&C.preventDefault()}function te(C){R.push(C)}function _e(C){delete j[C.pointerId];for(let ie=0;ie<R.length;ie++)if(R[ie].pointerId==C.pointerId){R.splice(ie,1);return}}function he(C){let ie=j[C.pointerId];ie===void 0&&(ie=new Ne,j[C.pointerId]=ie),ie.set(C.pageX,C.pageY)}function G(C){const ie=C.pointerId===R[0].pointerId?R[1]:R[0];return j[ie.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",oe),i.domElement.addEventListener("pointercancel",re),i.domElement.addEventListener("wheel",S,{passive:!1}),this.update()}}class KS{constructor(e,t){this.controls=new jS(e,t)}init(){return this.controls.enabled=!0,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=1,this.controls.enableDamping=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls}tick(e){this.controls.update()}}class $S{constructor(e){this.pos=e}init(){return this.camera=new Gt(80,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.set(this.pos.x,this.pos.y,this.pos.z),this.camera.lookAt(0,0,0),this.camera}tick(e){}}class ZS{constructor(){}init(e,t,i){const r=new VS(t,1.5);r.position.set(0,0,5),e.add(r);const s=new kS(i,.7);s.position.set(-2,0,5),e.add(s)}tick(e){}}class JS{constructor(e,t,i){this.clock=new WS,this.camera=e,this.scene=t,this.renderer=i,this.updatables=[]}addToUpdate(e){this.updatables.push(e)}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(e){e||(e=this.clock.getDelta());for(const t of this.updatables)t.tick(e)}}class QS{constructor(){this.scene=new DS}init(e){return this.scene.background=new Ve(e),this.scene.fog=new Cl(e,50,90),this.scene}addMesh(e){if(!e){console.log("Mesh is null or undifined and will not be added to the scene!");return}if(e instanceof Rt){this.scene.add(e);return}console.log("This parameter is not a Mesh and will not be added to the scene!")}}class eE{constructor(e,t){this.setSize(e,t),window.addEventListener("resize",()=>{this.setSize(e,t)})}setSize(e,t){e.aspect=window.innerWidth/window.innerHeight*.5,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)}}class tE{constructor(e,t){this.size=e,this.divisions=t}init(e){this.gridHelper=new YS(this.size,this.divisions),e.add(this.gridHelper)}}class nE extends Rt{constructor(e,t,i,r){super(),this.name=e,this.dim=t,this.seg=i,this.pos=r}initMesh(e,t){this.geometry=new cs(this.dim.x,this.dim.y,this.seg.x,this.seg.y),this.geometry.rotateX(-Math.PI/2),this.material=new yo({color:t||new Ve(16711680),visible:e}),this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}class iE extends Rt{constructor(e,t,i,r){super(),this.name=e,this.dim=t,this.seg=i,this.pos=r}initMesh(e,t){const i=new zS,r=e+"/"+t,s=i.load(new URL("./../../../textures/terrains/"+r+"/ao.png",import.meta.url).toString()),a=i.load(new URL("./../../../textures/terrains/"+r+"/bump.png",import.meta.url).toString()),o=i.load(new URL("./../../../textures/terrains/"+r+"/normal.png",import.meta.url).toString()),l=i.load(new URL("./../../../textures/terrains/"+r+"/displacement.png",import.meta.url).toString()),c=i.load(new URL("./../../../textures/terrains/"+r+"/diffuse.png",import.meta.url).toString());this.geometry=new cr(this.dim.x,this.dim.y,this.dim.z,this.seg.x,this.seg.y,this.seg.z);const u=this.geometry.attributes.position,h=this.geometry.attributes.normal,d=[];for(let m=0;m<u.count;m++){d.push(Math.sign(u.getY(m)),Math.sign(h.getY(m)));const x=(u.getX(m)+this.dim.x*.5)/this.dim.x,v=1-(u.getZ(m)+this.dim.z*.5)/this.dim.z;this.geometry.attributes.uv.setXY(m,x,v)}this.geometry.setAttribute("enableDisp",new kt(d,2)),this.material=new NS({aoMap:s,normalMap:o,bumpMap:a,bumpScale:.5,displacementMap:l,displacementScale:1.5,map:c,side:cn}),this.material.onBeforeCompile=m=>{m.vertexShader=`
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
        `)},this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}class rE extends Rt{constructor(e,t,i,r){super(),this.name=e,this.dim=t,this.seg=i,this.pos=r}initMesh(e,t){this.geometry=new cs(this.dim.x,this.dim.z),this.geometry.rotateX(-Math.PI/2),this.material=new yo({color:e,opacity:t,transparent:!0}),this.mesh=new Rt(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}tick(e){}}var Ga;(n=>{n.createEventHub=()=>({hub:Object.create(null),fire(e,t){(this.hub[e]||[]).forEach(i=>i(t))},on(e,t){this.hub[e]||(this.hub[e]=[]),this.hub[e].push(t)},off(e,t){const i=(this.hub[e]||[]).findIndex(r=>r===t);i>-1&&this.hub[e].splice(i,1),this.hub[e].length===0&&delete this.hub[e]}})})(Ga||(Ga={}));const ma=20,sE=40,Vr=2,ju=Vr*.5,Ku=new N(2,.5,2),oE=0,aE=.25,so=Ga.createEventHub();class lE{constructor(e){this.meshArray=[],this.isShiftDown=!1,this.sceneController=new QS,this.scene=this.sceneController.init(new Ve("#17181b")),this.renderer=new Fd({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.cameraController=new $S(new N(0,15,15)),this.camera=this.cameraController.init(),this.controlsController=new KS(this.camera,e),this.controlsController.init(),new eE(this.camera,this.renderer),new ZS().init(this.scene,new Ve(16777215),new Ve(5437322)),this.loopController=new JS(this.camera,this.scene,this.renderer),this.gridController=new tE(ma,sE),this.gridController.init(this.scene),this.raycaster=new XS,this.pointer=new Ne,this.planeController=new nE("T-Plane",new Ne(ma,ma),new Ne(1,1),new N(0,0,0)),this.planeController.initMesh(!1),this.addObject(this.planeController),this.terrainGhost=new rE("T-Ghost",Ku,new N(50,1,50),new N(0,0,0)),this.terrainGhost.initMesh(new Ve(16711680),.5),this.terrainGhost.mesh&&(this.sceneController.addMesh(this.terrainGhost.mesh),this.loopController.addToUpdate(this.terrainGhost)),this.init()}init(){this.addObject(this.controlsController),this.addObject(this.cameraController),document.addEventListener("keydown",e=>{this.onDocumentKeyDown(e)}),document.addEventListener("keyup",e=>{this.onDocumentKeyUp(e)}),so.on("spawnTerrain",()=>document.addEventListener("pointermove",e=>{this.onPointerMove(e)})),so.on("dropTerrain",e=>this.onPointerDown(e))}render(){this.renderer.render(this.scene,this.camera)}start(){this.loopController.start()}stop(){this.loopController.stop()}addObject(e){if(!e){console.log("Object is null or undifined and will not be added to the scene!");return}e.mesh&&(this.sceneController.addMesh(e.mesh),this.meshArray.push(e.mesh)),this.loopController.addToUpdate(e)}onPointerMove(e){console.log("OnPointerMove =>"),this.controlsController.controls.enabled=!1,this.pointer.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.meshArray,!1);if(t&&t.length>0){const i=t[0];this.terrainGhost&&this.terrainGhost.mesh&&i&&i.face&&(this.terrainGhost.mesh.position.copy(i.point).add(i.face.normal),this.terrainGhost.mesh.position.divideScalar(Vr).floor().multiplyScalar(Vr).addScalar(ju),this.terrainGhost.mesh.position.y=oE),this.render()}}onPointerDown(e){console.log("OnPointerDown =>"),this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.meshArray,!1);if(t&&t.length>0){const i=t[0];if(this.isShiftDown)i.object&&i.object!==this.planeController.mesh&&(this.scene.remove(i.object),this.meshArray.splice(this.meshArray.indexOf(i.object),1));else{const r=new iE("T01",Ku,new N(50,1,50),new N(0,0,0));r.initMesh("mountain",e),r.mesh&&i&&i.face&&(r.mesh.position.copy(i.point).add(i.face.normal),r.mesh.position.divideScalar(Vr).floor().multiplyScalar(Vr).addScalar(ju),r.mesh.position.y=aE),this.addObject(r)}this.render()}this.controlsController.controls.enabled=!0,document.removeEventListener("pointermove",this.onPointerMove)}onDocumentKeyDown(e){switch(e.keyCode){case 16:this.isShiftDown=!0;break}}onDocumentKeyUp(e){switch(e.keyCode){case 16:this.isShiftDown=!1;break}}}const cE={class:"menu"},uE=pt("div",{class:"menu__title"},[pt("p",null,"Terrains")],-1),hE={id:"menu__resources",class:"menu__resources"},dE={class:"menu__resources--tile",tabindex:"1"},fE={class:"menu__resources--btn"},pE=["src"],mE={class:"menu__resources--tile",tabindex:"2"},gE={class:"menu__resources--btn"},_E=["src"],vE={class:"menu__resources--tile",tabindex:"3"},xE={class:"menu__resources--btn"},ME=["src"],SE={class:"menu__resources--tile",tabindex:"3"},EE={class:"menu__resources--btn"},yE=["src"],bE=Sh({__name:"ResourceExplorer",setup(n){const e=new URL("/dist/assets/thumb-4f930de4.png",self.location).toString(),t=new URL("/dist/assets/thumb-e08c5e7d.png",self.location).toString(),i=new URL("/dist/assets/thumb-424cb668.png",self.location).toString();function r(){setTimeout(()=>{let s=new Zi(document.getElementById("menu__resources"),{draggable:"li.menu__resources--tile"});s.on("drag:start",a=>{so.fire("spawnTerrain","")}),s.on("drag:stop",a=>{const o=a.source;console.log("TILE ",o),so.fire("dropTerrain",o.tabIndex)})},500)}return r(),(s,a)=>(Uh(),Op("div",cE,[uE,pt("ul",hE,[pt("li",dE,[pt("button",fE,[pt("img",{class:"menu__resources--img",title:"t1",src:zr(e)},null,8,pE)])]),pt("li",mE,[pt("button",gE,[pt("img",{class:"menu__resources--img",title:"t2",src:zr(t)},null,8,_E)])]),pt("li",vE,[pt("button",xE,[pt("img",{class:"menu__resources--img",title:"t3",src:zr(i)},null,8,ME)])]),pt("li",SE,[pt("button",EE,[pt("img",{class:"menu__resources--img",title:"t3",src:zr(i)},null,8,yE)])])])]))}});const TE=Sh({__name:"App",setup(n){return(e,t)=>(Uh(),Fp(bE))}});async function AE(){const n=document.getElementById("App");new lE(n).start()}Mm(TE).mount("#App");AE();
