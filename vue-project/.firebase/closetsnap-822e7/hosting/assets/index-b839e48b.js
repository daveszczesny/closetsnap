(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Wn(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ql(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?t_(s):ql(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(we(t))return t}}const Jv=/;(?![^(]*\))/g,Zv=/:([^]+)/,e_=/\/\*.*?\*\//gs;function t_(t){const e={};return t.replace(e_,"").split(Jv).forEach(n=>{if(n){const s=n.split(Zv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ei(t){let e="";if(De(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Ei(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const n_="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",s_="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",r_=Wn(n_),i_=Wn(s_),o_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a_=Wn(o_);function Yf(t){return!!t||t===""}const fP=t=>De(t)?t:t==null?"":W(t)||we(t)&&(t.toString===tp||!Q(t.toString))?JSON.stringify(t,Jf,2):String(t),Jf=(t,e)=>e&&e.__v_isRef?Jf(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ep(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!W(e)&&!np(e)?String(e):e,_e=Object.freeze({}),Qs=Object.freeze([]),vt=()=>{},Zf=()=>!1,c_=/^on[^a-z]/,Ti=t=>c_.test(t),xo=t=>t.startsWith("onUpdate:"),Pe=Object.assign,zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},l_=Object.prototype.hasOwnProperty,oe=(t,e)=>l_.call(t,e),W=Array.isArray,us=t=>ha(t)==="[object Map]",ep=t=>ha(t)==="[object Set]",Q=t=>typeof t=="function",De=t=>typeof t=="string",Kl=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",Wl=t=>we(t)&&Q(t.then)&&Q(t.catch),tp=Object.prototype.toString,ha=t=>tp.call(t),Gl=t=>ha(t).slice(8,-1),np=t=>ha(t)==="[object Object]",Ql=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_o=Wn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),u_=Wn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},h_=/-(\w)/g,Xt=da(t=>t.replace(h_,(e,n)=>n?n.toUpperCase():"")),d_=/\B([A-Z])/g,$n=da(t=>t.replace(d_,"-$1").toLowerCase()),bs=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),es=da(t=>t?`on${bs(t)}`:""),Yr=(t,e)=>!Object.is(t,e),Vs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Lc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ch;const sp=()=>Ch||(Ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uc(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Dt;class f_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}else Uc("cannot run an inactive effect scope.")}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function p_(t,e=Dt){e&&e.active&&e.effects.push(t)}function g_(){return Dt}const Xl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},rp=t=>(t.w&Bn)>0,ip=t=>(t.n&Bn)>0,m_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},y_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];rp(r)&&!ip(r)?r.delete(t):e[n++]=r,r.w&=~Bn,r.n&=~Bn}e.length=n}},Fc=new WeakMap;let kr=0,Bn=1;const $c=30;let ht;const hs=Symbol("iterate"),Bc=Symbol("Map key iterate");class Yl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,p_(this,s)}run(){if(!this.active)return this.fn();let e=ht,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ht,ht=this,xn=!0,Bn=1<<++kr,kr<=$c?m_(this):kh(this),this.fn()}finally{kr<=$c&&y_(this),Bn=1<<--kr,ht=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(kh(this),this.onStop&&this.onStop(),this.active=!1)}}function kh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const op=[];function Rs(){op.push(xn),xn=!1}function Os(){const t=op.pop();xn=t===void 0?!0:t}function _t(t,e,n){if(xn&&ht){let s=Fc.get(t);s||Fc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Xl()),ap(r,{effect:ht,target:t,type:e,key:n})}}function ap(t,e){let n=!1;kr<=$c?ip(t)||(t.n|=Bn,n=!rp(t)):n=!t.has(ht),n&&(t.add(ht),ht.deps.push(t),ht.onTrack&&ht.onTrack(Object.assign({effect:ht},e)))}function fn(t,e,n,s,r,i){const o=Fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(s);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Ql(n)&&a.push(o.get("length")):(a.push(o.get(hs)),us(t)&&a.push(o.get(Bc)));break;case"delete":W(t)||(a.push(o.get(hs)),us(t)&&a.push(o.get(Bc)));break;case"set":us(t)&&a.push(o.get(hs));break}const c={target:t,type:e,key:n,newValue:s,oldValue:r,oldTarget:i};if(a.length===1)a[0]&&Vc(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);Vc(Xl(l),c)}}function Vc(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Rh(s,e);for(const s of n)s.computed||Rh(s,e)}function Rh(t,e){(t!==ht||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Pe({effect:t},e)),t.scheduler?t.scheduler():t.run())}const v_=Wn("__proto__,__v_isRef,__isVue"),cp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kl)),__=fa(),w_=fa(!1,!0),b_=fa(!0),E_=fa(!0,!0),Oh=T_();function T_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let i=0,o=this.length;i<o;i++)_t(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rs();const s=te(this)[e].apply(this,n);return Os(),s}}),t}function I_(t){const e=te(this);return _t(e,"has",t),e.hasOwnProperty(t)}function fa(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?mp:gp:e?pp:fp).get(s))return s;const o=W(s);if(!t){if(o&&oe(Oh,r))return Reflect.get(Oh,r,i);if(r==="hasOwnProperty")return I_}const a=Reflect.get(s,r,i);return(Kl(r)?cp.has(r):v_(r))||(t||_t(s,"get",r),e)?a:Ve(a)?o&&Ql(r)?a:a.value:we(a)?t?yp(a):Ii(a):a}}const A_=lp(),S_=lp(!0);function lp(t=!1){return function(n,s,r,i){let o=n[s];if(Vn(o)&&Ve(o)&&!Ve(r))return!1;if(!t&&(!Lo(r)&&!Vn(r)&&(o=te(o),r=te(r)),!W(n)&&Ve(o)&&!Ve(r)))return o.value=r,!0;const a=W(n)&&Ql(s)?Number(s)<n.length:oe(n,s),c=Reflect.set(n,s,r,i);return n===te(i)&&(a?Yr(r,o)&&fn(n,"set",s,r,o):fn(n,"add",s,r)),c}}function C_(t,e){const n=oe(t,e),s=t[e],r=Reflect.deleteProperty(t,e);return r&&n&&fn(t,"delete",e,void 0,s),r}function k_(t,e){const n=Reflect.has(t,e);return(!Kl(e)||!cp.has(e))&&_t(t,"has",e),n}function R_(t){return _t(t,"iterate",W(t)?"length":hs),Reflect.ownKeys(t)}const up={get:__,set:A_,deleteProperty:C_,has:k_,ownKeys:R_},hp={get:b_,set(t,e){return Uc(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Uc(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},O_=Pe({},up,{get:w_,set:S_}),N_=Pe({},hp,{get:E_}),Jl=t=>t,pa=t=>Reflect.getPrototypeOf(t);function Zi(t,e,n=!1,s=!1){t=t.__v_raw;const r=te(t),i=te(e);n||(e!==i&&_t(r,"get",e),_t(r,"get",i));const{has:o}=pa(r),a=s?Jl:n?Zl:Jr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function eo(t,e=!1){const n=this.__v_raw,s=te(n),r=te(t);return e||(t!==r&&_t(s,"has",t),_t(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function to(t,e=!1){return t=t.__v_raw,!e&&_t(te(t),"iterate",hs),Reflect.get(t,"size",t)}function Nh(t){t=te(t);const e=te(this);return pa(e).has.call(e,t)||(e.add(t),fn(e,"add",t,t)),this}function Ph(t,e){e=te(e);const n=te(this),{has:s,get:r}=pa(n);let i=s.call(n,t);i?dp(n,s,t):(t=te(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Yr(e,o)&&fn(n,"set",t,e,o):fn(n,"add",t,e),this}function Dh(t){const e=te(this),{has:n,get:s}=pa(e);let r=n.call(e,t);r?dp(e,n,t):(t=te(t),r=n.call(e,t));const i=s?s.call(e,t):void 0,o=e.delete(t);return r&&fn(e,"delete",t,void 0,i),o}function xh(){const t=te(this),e=t.size!==0,n=us(t)?new Map(t):new Set(t),s=t.clear();return e&&fn(t,"clear",void 0,void 0,n),s}function no(t,e){return function(s,r){const i=this,o=i.__v_raw,a=te(o),c=e?Jl:t?Zl:Jr;return!t&&_t(a,"iterate",hs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function so(t,e,n){return function(...s){const r=this.__v_raw,i=te(r),o=us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Jl:e?Zl:Jr;return!e&&_t(i,"iterate",c?Bc:hs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function En(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${bs(t)} operation ${n}failed: target is readonly.`,te(this))}return t==="delete"?!1:this}}function P_(){const t={get(i){return Zi(this,i)},get size(){return to(this)},has:eo,add:Nh,set:Ph,delete:Dh,clear:xh,forEach:no(!1,!1)},e={get(i){return Zi(this,i,!1,!0)},get size(){return to(this)},has:eo,add:Nh,set:Ph,delete:Dh,clear:xh,forEach:no(!1,!0)},n={get(i){return Zi(this,i,!0)},get size(){return to(this,!0)},has(i){return eo.call(this,i,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:no(!0,!1)},s={get(i){return Zi(this,i,!0,!0)},get size(){return to(this,!0)},has(i){return eo.call(this,i,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:no(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=so(i,!1,!1),n[i]=so(i,!0,!1),e[i]=so(i,!1,!0),s[i]=so(i,!0,!0)}),[t,n,e,s]}const[D_,x_,M_,L_]=P_();function ga(t,e){const n=e?t?L_:M_:t?x_:D_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const U_={get:ga(!1,!1)},F_={get:ga(!1,!0)},$_={get:ga(!0,!1)},B_={get:ga(!0,!0)};function dp(t,e,n){const s=te(n);if(s!==n&&e.call(t,s)){const r=Gl(t);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const fp=new WeakMap,pp=new WeakMap,gp=new WeakMap,mp=new WeakMap;function V_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function j_(t){return t.__v_skip||!Object.isExtensible(t)?0:V_(Gl(t))}function Ii(t){return Vn(t)?t:ma(t,!1,up,U_,fp)}function H_(t){return ma(t,!1,O_,F_,pp)}function yp(t){return ma(t,!0,hp,$_,gp)}function Ks(t){return ma(t,!0,N_,B_,mp)}function ma(t,e,n,s,r){if(!we(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=j_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ds(t){return Vn(t)?ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function Lo(t){return!!(t&&t.__v_isShallow)}function jc(t){return ds(t)||Vn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function vp(t){return Mo(t,"__v_skip",!0),t}const Jr=t=>we(t)?Ii(t):t,Zl=t=>we(t)?yp(t):t;function _p(t){xn&&ht&&(t=te(t),ap(t.dep||(t.dep=Xl()),{target:t,type:"get",key:"value"}))}function wp(t,e){t=te(t);const n=t.dep;n&&Vc(n,{target:t,type:"set",key:"value",newValue:e})}function Ve(t){return!!(t&&t.__v_isRef===!0)}function q_(t){return bp(t,!1)}function z_(t){return bp(t,!0)}function bp(t,e){return Ve(t)?t:new K_(t,e)}class K_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Jr(e)}get value(){return _p(this),this._value}set value(e){const n=this.__v_isShallow||Lo(e)||Vn(e);e=n?e:te(e),Yr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Jr(e),wp(this,e))}}function Xs(t){return Ve(t)?t.value:t}const W_={get:(t,e,n)=>Xs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ve(r)&&!Ve(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ep(t){return ds(t)?t:new Proxy(t,W_)}var Tp;class G_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Tp]=!1,this._dirty=!0,this.effect=new Yl(e,()=>{this._dirty||(this._dirty=!0,wp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=te(this);return _p(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Tp="__v_isReadonly";function Q_(t,e,n=!1){let s,r;const i=Q(t);i?(s=t,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=t.get,r=t.set);const o=new G_(s,r,i||!r,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const fs=[];function wo(t){fs.push(t)}function bo(){fs.pop()}function k(t,...e){Rs();const n=fs.length?fs[fs.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=X_();if(s)un(s,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${Ta(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${t}`,...e];r.length&&i.push(`
`,...Y_(r)),console.warn(...i)}Os()}function X_(){let t=fs[fs.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function Y_(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...J_(n))}),e}function J_({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,r=` at <${Ta(t.component,t.type,s)}`,i=">"+n;return t.props?[r,...Z_(t.props),i]:[r+i]}function Z_(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...Ip(s,t[s]))}),n.length>3&&e.push(" ..."),e}function Ip(t,e,n){return De(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Ve(e)?(e=Ip(t,te(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):Q(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=te(e),n?e:[`${t}=`,e])}const eu={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function un(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ya(i,e,n)}return r}function Ct(t,e,n,s){if(Q(t)){const i=un(t,e,n,s);return i&&Wl(i)&&i.catch(o=>{ya(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ct(t[i],e,n,s));return r}function ya(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=eu[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){un(c,null,10,[t,o,a]);return}}ew(t,n,r,s)}function ew(t,e,n,s=!0){{const r=eu[e];if(n&&wo(n),k(`Unhandled error${r?` during execution of ${r}`:""}`),n&&bo(),s)throw t;console.error(t)}}let Zr=!1,Hc=!1;const nt=[];let jt=0;const Ys=[];let Vt=null,An=0;const Ap=Promise.resolve();let tu=null;const tw=100;function Sp(t){const e=tu||Ap;return t?e.then(this?t.bind(this):t):e}function nw(t){let e=jt+1,n=nt.length;for(;e<n;){const s=e+n>>>1;ei(nt[s])<t?e=s+1:n=s}return e}function va(t){(!nt.length||!nt.includes(t,Zr&&t.allowRecurse?jt+1:jt))&&(t.id==null?nt.push(t):nt.splice(nw(t.id),0,t),Cp())}function Cp(){!Zr&&!Hc&&(Hc=!0,tu=Ap.then(Op))}function sw(t){const e=nt.indexOf(t);e>jt&&nt.splice(e,1)}function kp(t){W(t)?Ys.push(...t):(!Vt||!Vt.includes(t,t.allowRecurse?An+1:An))&&Ys.push(t),Cp()}function Mh(t,e=Zr?jt+1:0){for(t=t||new Map;e<nt.length;e++){const n=nt[e];if(n&&n.pre){if(nu(t,n))continue;nt.splice(e,1),e--,n()}}}function Rp(t){if(Ys.length){const e=[...new Set(Ys)];if(Ys.length=0,Vt){Vt.push(...e);return}for(Vt=e,t=t||new Map,Vt.sort((n,s)=>ei(n)-ei(s)),An=0;An<Vt.length;An++)nu(t,Vt[An])||Vt[An]();Vt=null,An=0}}const ei=t=>t.id==null?1/0:t.id,rw=(t,e)=>{const n=ei(t)-ei(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Op(t){Hc=!1,Zr=!0,t=t||new Map,nt.sort(rw);const e=n=>nu(t,n);try{for(jt=0;jt<nt.length;jt++){const n=nt[jt];if(n&&n.active!==!1){if(e(n))continue;un(n,null,14)}}}finally{jt=0,nt.length=0,Rp(t),Zr=!1,tu=null,(nt.length||Ys.length)&&Op(t)}}function nu(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>tw){const s=e.ownerInstance,r=s&&uu(s.type);return k(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let ps=!1;const js=new Set;sp().__VUE_HMR_RUNTIME__={createRecord:rc(Np),rerender:rc(aw),reload:rc(cw)};const Es=new Map;function iw(t){const e=t.type.__hmrId;let n=Es.get(e);n||(Np(e,t.type),n=Es.get(e)),n.instances.add(t)}function ow(t){Es.get(t.type.__hmrId).instances.delete(t)}function Np(t,e){return Es.has(t)?!1:(Es.set(t,{initialDef:Ur(e),instances:new Set}),!0)}function Ur(t){return lg(t)?t.__vccOpts:t}function aw(t,e){const n=Es.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(s=>{e&&(s.render=e,Ur(s.type).render=e),s.renderCache=[],ps=!0,s.update(),ps=!1}))}function cw(t,e){const n=Es.get(t);if(!n)return;e=Ur(e),Lh(n.initialDef,e);const s=[...n.instances];for(const r of s){const i=Ur(r.type);js.has(i)||(i!==n.initialDef&&Lh(i,e),js.add(i)),r.appContext.optionsCache.delete(r.type),r.ceReload?(js.add(i),r.ceReload(e.styles),js.delete(i)):r.parent?va(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}kp(()=>{for(const r of s)js.delete(Ur(r.type))})}function Lh(t,e){Pe(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function rc(t){return(e,n)=>{try{return t(e,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Ht,Rr=[],qc=!1;function Ai(t,...e){Ht?Ht.emit(t,...e):qc||Rr.push({event:t,args:e})}function Pp(t,e){var n,s;Ht=t,Ht?(Ht.enabled=!0,Rr.forEach(({event:r,args:i})=>Ht.emit(r,...i)),Rr=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Pp(i,e)}),setTimeout(()=>{Ht||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,qc=!0,Rr=[])},3e3)):(qc=!0,Rr=[])}function lw(t,e){Ai("app:init",t,e,{Fragment:It,Text:Ci,Comment:Xe,Static:$r})}function uw(t){Ai("app:unmount",t)}const hw=su("component:added"),Dp=su("component:updated"),dw=su("component:removed"),fw=t=>{Ht&&typeof Ht.cleanupBuffer=="function"&&!Ht.cleanupBuffer(t)&&dw(t)};function su(t){return e=>{Ai(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const pw=xp("perf:start"),gw=xp("perf:end");function xp(t){return(e,n,s)=>{Ai(t,e.appContext.app,e.uid,e,n,s)}}function mw(t,e,n){Ai("component:emit",t.appContext.app,t,e,n)}function yw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(es(e)in h))&&k(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${es(e)}" prop.`);else{const d=u[e];Q(d)&&(d(...n)||k(`Invalid event arguments: event validation failed for event "${e}".`))}}let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||_e;d&&(r=n.map(p=>De(p)?p.trim():p)),h&&(r=n.map(Lc))}mw(t,e,r);{const u=e.toLowerCase();u!==e&&s[es(u)]&&k(`Event "${u}" is emitted in component ${Ta(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${$n(e)}" instead of "${e}".`)}let a,c=s[a=es(e)]||s[a=es(Xt(e))];!c&&i&&(c=s[a=es($n(e))]),c&&Ct(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(l,t,6,r)}}function Mp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Q(t)){const c=l=>{const u=Mp(l,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Pe(o,i),we(t)&&s.set(t,o),o)}function _a(t,e){return!t||!Ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,$n(e))||oe(t,e))}let dt=null,Lp=null;function Uo(t){const e=dt;return dt=t,Lp=t&&t.type.__scopeId||null,e}function Or(t,e=dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Gh(-1);const i=Uo(e);let o;try{o=t(...r)}finally{Uo(i),s._d&&Gh(1)}return Dp(e),o};return s._n=!0,s._c=!0,s._d=!0,s}let zc=!1;function Fo(){zc=!0}function ic(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:v}=t;let w,C;const O=Uo(t);zc=!1;try{if(n.shapeFlag&4){const q=r||s;w=xt(u.call(q,q,h,i,p,d,m)),C=c}else{const q=e;c===i&&Fo(),w=xt(q.length>1?q(i,{get attrs(){return Fo(),c},slots:a,emit:l}):q(i,null)),C=e.props?c:_w(c)}}catch(q){Br.length=0,ya(q,t,1),w=je(Xe)}let D=w,P;if(w.patchFlag>0&&w.patchFlag&2048&&([D,P]=vw(w)),C&&v!==!1){const q=Object.keys(C),{shapeFlag:ue}=D;if(q.length){if(ue&7)o&&q.some(xo)&&(C=ww(C,o)),D=Yt(D,C);else if(!zc&&D.type!==Xe){const Te=Object.keys(c),z=[],re=[];for(let ye=0,Fe=Te.length;ye<Fe;ye++){const ke=Te[ye];Ti(ke)?xo(ke)||z.push(ke[2].toLowerCase()+ke.slice(3)):re.push(ke)}re.length&&k(`Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),z.length&&k(`Extraneous non-emits event listeners (${z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Uh(D)||k("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=Yt(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(Uh(D)||k("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=n.transition),P?P(D):w=D,Uo(O),w}const vw=t=>{const e=t.children,n=t.dynamicChildren,s=Up(e);if(!s)return[t,void 0];const r=e.indexOf(s),i=n?n.indexOf(s):-1,o=a=>{e[r]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[xt(s),o]};function Up(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ni(s)){if(s.type!==Xe||s.children==="v-if"){if(e)return;e=s}}else return}return e}const _w=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ti(n))&&((e||(e={}))[n]=t[n]);return e},ww=(t,e)=>{const n={};for(const s in t)(!xo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n},Uh=t=>t.shapeFlag&7||t.type===Xe;function bw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((r||a)&&ps||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Fh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!_a(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Fh(s,o,l):!0:!!o;return!1}function Fh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function Ew({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Tw=t=>t.__isSuspense;function Iw(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):kp(t)}function Eo(t,e){if(!Oe)k("provide() can only be used inside setup().");else{let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function hn(t,e,n=!1){const s=Oe||dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Q(e)?e.call(s.proxy):e;k(`injection "${String(t)}" not found.`)}else k("inject() can only be used inside setup() or functional components.")}function Aw(t,e){return ru(t,null,e)}const ro={};function Fr(t,e,n){return Q(e)||k("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ru(t,e,n)}function ru(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=_e){e||(n!==void 0&&k('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&k('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=P=>{k("Invalid watch source: ",P,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=g_()===(Oe==null?void 0:Oe.scope)?Oe:null;let l,u=!1,h=!1;if(Ve(t)?(l=()=>t.value,u=Lo(t)):ds(t)?(l=()=>t,s=!0):W(t)?(h=!0,u=t.some(P=>ds(P)||Lo(P)),l=()=>t.map(P=>{if(Ve(P))return P.value;if(ds(P))return os(P);if(Q(P))return un(P,c,2);a(P)})):Q(t)?e?l=()=>un(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ct(t,c,3,[p])}:(l=vt,a(t)),e&&s){const P=l;l=()=>os(P())}let d,p=P=>{d=O.onStop=()=>{un(P,c,4)}},m;if(si)if(p=vt,e?n&&Ct(e,c,3,[l(),h?[]:void 0,p]):l(),r==="sync"){const P=Nb();m=P.__watcherHandles||(P.__watcherHandles=[])}else return vt;let v=h?new Array(t.length).fill(ro):ro;const w=()=>{if(O.active)if(e){const P=O.run();(s||u||(h?P.some((q,ue)=>Yr(q,v[ue])):Yr(P,v)))&&(d&&d(),Ct(e,c,3,[P,v===ro?void 0:h&&v[0]===ro?[]:v,p]),v=P)}else O.run()};w.allowRecurse=!!e;let C;r==="sync"?C=w:r==="post"?C=()=>mt(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),C=()=>va(w));const O=new Yl(l,C);O.onTrack=i,O.onTrigger=o,e?n?w():v=O.run():r==="post"?mt(O.run.bind(O),c&&c.suspense):O.run();const D=()=>{O.stop(),c&&c.scope&&zl(c.scope.effects,O)};return m&&m.push(D),D}function Sw(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?Fp(s,t):()=>s[t]:t.bind(s,s);let i;Q(e)?i=e:(i=e.handler,n=e);const o=Oe;nr(this);const a=ru(r,i.bind(s),n);return o?nr(o):ms(),a}function Fp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function os(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))os(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)os(t[n],e);else if(ep(t)||us(t))t.forEach(n=>{os(n,e)});else if(np(t))for(const n in t)os(t[n],e);return t}function Cw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hp(()=>{t.isMounted=!0}),qp(()=>{t.isUnmounting=!0}),t}const Tt=[Function,Array],kw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},setup(t,{slots:e}){const n=lu(),s=Cw();let r;return()=>{const i=e.default&&Bp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){let v=!1;for(const w of i)if(w.type!==Xe){if(v){k("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}o=w,v=!0}}const a=te(t),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&k(`invalid <transition> mode: ${c}`),s.isLeaving)return oc(o);const l=$h(o);if(!l)return oc(o);const u=Kc(l,a,s,n);Wc(l,u);const h=n.subTree,d=h&&$h(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(d&&d.type!==Xe&&(!ss(l,d)||p)){const v=Kc(d,a,s,n);if(Wc(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},oc(o);c==="in-out"&&l.type!==Xe&&(v.delayLeave=(w,C,O)=>{const D=$p(s,d);D[String(d.key)]=d,w._leaveCb=()=>{C(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},Rw=kw;function $p(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Kc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:v,onAppear:w,onAfterAppear:C,onAppearCancelled:O}=e,D=String(t.key),P=$p(n,t),q=(z,re)=>{z&&Ct(z,s,9,re)},ue=(z,re)=>{const ye=re[1];q(z,re),W(z)?z.every(Fe=>Fe.length<=1)&&ye():z.length<=1&&ye()},Te={mode:i,persisted:o,beforeEnter(z){let re=a;if(!n.isMounted)if(r)re=v||a;else return;z._leaveCb&&z._leaveCb(!0);const ye=P[D];ye&&ss(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),q(re,[z])},enter(z){let re=c,ye=l,Fe=u;if(!n.isMounted)if(r)re=w||c,ye=C||l,Fe=O||u;else return;let ke=!1;const Ot=z._enterCb=bn=>{ke||(ke=!0,bn?q(Fe,[z]):q(ye,[z]),Te.delayedLeave&&Te.delayedLeave(),z._enterCb=void 0)};re?ue(re,[z,Ot]):Ot()},leave(z,re){const ye=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return re();q(h,[z]);let Fe=!1;const ke=z._leaveCb=Ot=>{Fe||(Fe=!0,re(),Ot?q(m,[z]):q(p,[z]),z._leaveCb=void 0,P[ye]===t&&delete P[ye])};P[ye]=t,d?ue(d,[z,ke]):ke()},clone(z){return Kc(z,e,n,s)}};return Te}function oc(t){if(Si(t))return t=Yt(t),t.children=null,t}function $h(t){return Si(t)?t.children?t.children[0]:void 0:t}function Wc(t,e){t.shapeFlag&6&&t.component?Wc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===It?(o.patchFlag&128&&r++,s=s.concat(Bp(o.children,e,a))):(e||o.type!==Xe)&&s.push(a!=null?Yt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Vp(t){return Q(t)?{setup:t,name:t.name}:t}const To=t=>!!t.type.__asyncLoader,Si=t=>t.type.__isKeepAlive;function Ow(t,e){jp(t,"a",e)}function Nw(t,e){jp(t,"da",e)}function jp(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(wa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Si(r.parent.vnode)&&Pw(s,e,n,r),r=r.parent}}function Pw(t,e,n,s){const r=wa(e,t,s,!0);zp(()=>{zl(s[e],r)},n)}function wa(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Rs(),nr(n);const a=Ct(e,n,t,o);return ms(),Os(),a});return s?r.unshift(i):r.push(i),i}else{const r=es(eu[t].replace(/ hook$/,""));k(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const wn=t=>(e,n=Oe)=>(!si||t==="sp")&&wa(t,(...s)=>e(...s),n),Dw=wn("bm"),Hp=wn("m"),xw=wn("bu"),Mw=wn("u"),qp=wn("bum"),zp=wn("um"),Lw=wn("sp"),Uw=wn("rtg"),Fw=wn("rtc");function $w(t,e=Oe){wa("ec",t,e)}function Kp(t){u_(t)&&k("Do not use built-in directive ids as custom directive id: "+t)}function pP(t,e){const n=dt;if(n===null)return k("withDirectives can only be used inside render functions."),t;const s=Ea(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=_e]=e[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&os(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Rs(),Ct(c,n,8,[t.el,a,t,e]),Os())}}const Gc="components";function Qc(t,e){return Vw(Gc,t,!0,e)||t}const Bw=Symbol();function Vw(t,e,n=!0,s=!1){const r=dt||Oe;if(r){const i=r.type;if(t===Gc){const a=uu(i,!1);if(a&&(a===e||a===Xt(e)||a===bs(Xt(e))))return i}const o=Bh(r[t]||i[t],e)||Bh(r.appContext[t],e);if(!o&&s)return i;if(n&&!o){const a=t===Gc?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";k(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else k(`resolve${bs(t.slice(0,-1))} can only be used in render() or setup().`)}function Bh(t,e){return t&&(t[e]||t[Xt(e)]||t[bs(Xt(e))])}const Xc=t=>t?og(t)?Ea(t)||t.proxy:Xc(t.parent):null,gs=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>Ks(t.props),$attrs:t=>Ks(t.attrs),$slots:t=>Ks(t.slots),$refs:t=>Ks(t.refs),$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$emit:t=>t.emit,$options:t=>ou(t),$forceUpdate:t=>t.f||(t.f=()=>va(t.update)),$nextTick:t=>t.n||(t.n=Sp.bind(t.proxy)),$watch:t=>Sw.bind(t)}),iu=t=>t==="_"||t==="$",ac=(t,e)=>t!==_e&&!t.__isScriptSetup&&oe(t,e),Wp={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ac(s,e))return o[e]=1,s[e];if(r!==_e&&oe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==_e&&oe(n,e))return o[e]=4,n[e];Yc&&(o[e]=0)}}const u=gs[e];let h,d;if(u)return e==="$attrs"&&(_t(t,"get",e),Fo()),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e];dt&&(!De(e)||e.indexOf("__v")!==0)&&(r!==_e&&iu(e[0])&&oe(r,e)?k(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===dt&&k(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ac(r,e)?(r[e]=n,!0):r.__isScriptSetup&&oe(r,e)?(k(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):s!==_e&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)?(k(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(k(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&oe(t,o)||ac(e,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(gs,o)||oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};Wp.ownKeys=t=>(k("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function jw(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(gs).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>gs[n](t),set:vt})}),e}function Hw(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(s=>{Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>t.props[s],set:vt})})}function qw(t){const{ctx:e,setupState:n}=t;Object.keys(te(n)).forEach(s=>{if(!n.__isScriptSetup){if(iu(s[0])){k(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:vt})}})}function zw(){const t=Object.create(null);return(e,n)=>{t[n]?k(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Yc=!0;function Kw(t){const e=ou(t),n=t.proxy,s=t.ctx;Yc=!1,e.beforeCreate&&Vh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:v,deactivated:w,beforeDestroy:C,beforeUnmount:O,destroyed:D,unmounted:P,render:q,renderTracked:ue,renderTriggered:Te,errorCaptured:z,serverPrefetch:re,expose:ye,inheritAttrs:Fe,components:ke,directives:Ot,filters:bn}=e,Nt=zw();{const[ie]=t.propsOptions;if(ie)for(const le in ie)Nt("Props",le)}if(l&&Ww(l,s,Nt,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const le=o[ie];Q(le)?(Object.defineProperty(s,ie,{value:le.bind(n),configurable:!0,enumerable:!0,writable:!0}),Nt("Methods",ie)):k(`Method "${ie}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`)}if(r){Q(r)||k("The data option must be a function. Plain object usage is no longer supported.");const ie=r.call(n,n);if(Wl(ie)&&k("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!we(ie))k("data() should return an object.");else{t.data=Ii(ie);for(const le in ie)Nt("Data",le),iu(le[0])||Object.defineProperty(s,le,{configurable:!0,enumerable:!0,get:()=>ie[le],set:vt})}}if(Yc=!0,i)for(const ie in i){const le=i[ie],gt=Q(le)?le.bind(n,n):Q(le.get)?le.get.bind(n,n):vt;gt===vt&&k(`Computed property "${ie}" has no getter.`);const Ms=!Q(le)&&Q(le.set)?le.set.bind(n):()=>{k(`Write operation failed: computed property "${ie}" is readonly.`)},tn=At({get:gt,set:Ms});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ft=>tn.value=Ft}),Nt("Computed",ie)}if(a)for(const ie in a)Gp(a[ie],s,n,ie);if(c){const ie=Q(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(le=>{Eo(le,ie[le])})}u&&Vh(u,t,"c");function $e(ie,le){W(le)?le.forEach(gt=>ie(gt.bind(n))):le&&ie(le.bind(n))}if($e(Dw,h),$e(Hp,d),$e(xw,p),$e(Mw,m),$e(Ow,v),$e(Nw,w),$e($w,z),$e(Fw,ue),$e(Uw,Te),$e(qp,O),$e(zp,P),$e(Lw,re),W(ye))if(ye.length){const ie=t.exposed||(t.exposed={});ye.forEach(le=>{Object.defineProperty(ie,le,{get:()=>n[le],set:gt=>n[le]=gt})})}else t.exposed||(t.exposed={});q&&t.render===vt&&(t.render=q),Fe!=null&&(t.inheritAttrs=Fe),ke&&(t.components=ke),Ot&&(t.directives=Ot)}function Ww(t,e,n=vt,s=!1){W(t)&&(t=Jc(t));for(const r in t){const i=t[r];let o;we(i)?"default"in i?o=hn(i.from||r,i.default,!0):o=hn(i.from||r):o=hn(i),Ve(o)?s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):(k(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),e[r]=o):e[r]=o,n("Inject",r)}}function Vh(t,e,n){Ct(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gp(t,e,n,s){const r=s.includes(".")?Fp(n,s):()=>n[s];if(De(t)){const i=e[t];Q(i)?Fr(r,i):k(`Invalid watch handler specified by key "${t}"`,i)}else if(Q(t))Fr(r,t.bind(n));else if(we(t))if(W(t))t.forEach(i=>Gp(i,e,n,s));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)?Fr(r,i,t):k(`Invalid watch handler specified by key "${t.handler}"`,i)}else k(`Invalid watch option: "${s}"`,t)}function ou(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>$o(c,l,o,!0)),$o(c,e,o)),we(e)&&i.set(e,c),c}function $o(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&$o(t,i,n,!0),r&&r.forEach(o=>$o(t,o,n,!0));for(const o in e)if(s&&o==="expose")k('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Gw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gw={data:jh,props:ts,emits:ts,methods:ts,computed:ts,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:ts,directives:ts,watch:Xw,provide:jh,inject:Qw};function jh(t,e){return e?t?function(){return Pe(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function Qw(t,e){return ts(Jc(t),Jc(e))}function Jc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?Pe(Pe(Object.create(null),t),e):e}function Xw(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=ut(t[s],e[s]);return n}function Yw(t,e,n,s=!1){const r={},i={};Mo(i,ba,1),t.propsDefaults=Object.create(null),Qp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);Yp(e||{},r,t),n?t.props=s?r:H_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Jw(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Zw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=te(r),[c]=t.propsOptions;let l=!1;if(!Jw(t)&&(s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(_a(t.emitsOptions,d))continue;const p=e[d];if(c)if(oe(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const m=Xt(d);r[m]=Zc(c,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Qp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=$n(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Zc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&fn(t,"set","$attrs"),Yp(e||{},r,t)}function Qp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(_o(c))continue;const l=e[c];let u;r&&oe(r,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:_a(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=te(n),l=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Zc(r,c,h,l[h],t,!oe(l,h))}}return o}function Zc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Q(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(nr(r),s=l[n]=c.call(null,e),ms())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function Xp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Q(t)){const u=h=>{c=!0;const[d,p]=Xp(h,e,!0);Pe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&s.set(t,Qs),Qs;if(W(i))for(let u=0;u<i.length;u++){De(i[u])||k("props must be strings when using array syntax.",i[u]);const h=Xt(i[u]);Hh(h)&&(o[h]=_e)}else if(i){we(i)||k("invalid props options",i);for(const u in i){const h=Xt(u);if(Hh(h)){const d=i[u],p=o[h]=W(d)||Q(d)?{type:d}:Object.assign({},d);if(p){const m=zh(Boolean,p.type),v=zh(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||oe(p,"default"))&&a.push(h)}}}}const l=[o,a];return we(t)&&s.set(t,l),l}function Hh(t){return t[0]!=="$"?!0:(k(`Invalid prop name: "${t}" is a reserved property.`),!1)}function el(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function qh(t,e){return el(t)===el(e)}function zh(t,e){return W(e)?e.findIndex(n=>qh(n,t)):Q(e)&&qh(e,t)?0:-1}function Yp(t,e,n){const s=te(e),r=n.propsOptions[0];for(const i in r){let o=r[i];o!=null&&eb(i,s[i],o,!oe(t,i)&&!oe(t,$n(i)))}}function eb(t,e,n,s){const{type:r,required:i,validator:o}=n;if(i&&s){k('Missing required prop: "'+t+'"');return}if(!(e==null&&!n.required)){if(r!=null&&r!==!0){let a=!1;const c=W(r)?r:[r],l=[];for(let u=0;u<c.length&&!a;u++){const{valid:h,expectedType:d}=nb(e,c[u]);l.push(d||""),a=h}if(!a){k(sb(t,e,l));return}}o&&!o(e)&&k('Invalid prop: custom validator check failed for prop "'+t+'".')}}const tb=Wn("String,Number,Boolean,Function,Symbol,BigInt");function nb(t,e){let n;const s=el(e);if(tb(s)){const r=typeof t;n=r===s.toLowerCase(),!n&&r==="object"&&(n=t instanceof e)}else s==="Object"?n=we(t):s==="Array"?n=W(t):s==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:s}}function sb(t,e,n){let s=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(bs).join(" | ")}`;const r=n[0],i=Gl(e),o=Kh(e,r),a=Kh(e,i);return n.length===1&&Wh(r)&&!rb(r,i)&&(s+=` with value ${o}`),s+=`, got ${i} `,Wh(i)&&(s+=`with value ${a}.`),s}function Kh(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Wh(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function rb(...t){return t.some(e=>e.toLowerCase()==="boolean")}const Jp=t=>t[0]==="_"||t==="$stable",au=t=>W(t)?t.map(xt):[xt(t)],ib=(t,e,n)=>{if(e._n)return e;const s=Or((...r)=>(Oe&&k(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),au(e(...r))),n);return s._c=!1,s},Zp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Jp(r))continue;const i=t[r];if(Q(i))e[r]=ib(r,i,s);else if(i!=null){k(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const o=au(i);e[r]=()=>o}}},eg=(t,e)=>{Si(t.vnode)||k("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=au(e);t.slots.default=()=>n},ob=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),Mo(e,"_",n)):Zp(e,t.slots={})}else t.slots={},e&&eg(t,e);Mo(t.slots,ba,1)},ab=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?ps?Pe(r,e):n&&a===1?i=!1:(Pe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Zp(e,r)),o=e}else e&&(eg(t,e),o={default:1});if(i)for(const a in r)!Jp(a)&&!(a in o)&&delete r[a]};function tg(){return{app:null,config:{isNativeTag:Zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cb=0;function lb(t,e){return function(s,r=null){Q(s)||(s=Object.assign({},s)),r!=null&&!we(r)&&(k("root props passed to app.mount() must be an object."),r=null);const i=tg(),o=new Set;let a=!1;const c=i.app={_uid:cb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Yh,get config(){return i.config},set config(l){k("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?k("Plugin has already been applied to target app."):l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)?(o.add(l),l(c,...u)):k('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?k("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return sl(l,i.config),u?(i.components[l]&&k(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return Kp(l),u?(i.directives[l]&&k(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)k("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&k("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=je(s,r);return d.appContext=i,i.reload=()=>{t(Yt(d),l,h)},u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=d.component,lw(c,Yh),Ea(d.component)||d.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,uw(c),delete c._container.__vue_app__):k("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&k(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c}};return c}}function tl(t,e,n,s,r=!1){if(W(t)){t.forEach((d,p)=>tl(d,e&&(W(e)?e[p]:e),n,s,r));return}if(To(s)&&!r)return;const i=s.shapeFlag&4?Ea(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t;if(!a){k("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):Ve(l)&&(l.value=null)),Q(c))un(c,a,12,[o,u]);else{const d=De(c),p=Ve(c);if(d||p){const m=()=>{if(t.f){const v=d?oe(h,c)?h[c]:u[c]:c.value;r?W(v)&&zl(v,i):W(v)?v.includes(i)||v.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):k("Invalid template ref type:",c,`(${typeof c})`)};o?(m.id=-1,mt(m,n)):m()}else k("Invalid template ref type:",c,`(${typeof c})`)}}let Tr,kn;function sn(t,e){t.appContext.config.performance&&Bo()&&kn.mark(`vue-${e}-${t.uid}`),pw(t,e,Bo()?kn.now():Date.now())}function rn(t,e){if(t.appContext.config.performance&&Bo()){const n=`vue-${e}-${t.uid}`,s=n+":end";kn.mark(s),kn.measure(`<${Ta(t,t.type)}> ${e}`,n,s),kn.clearMarks(n),kn.clearMarks(s)}gw(t,e,Bo()?kn.now():Date.now())}function Bo(){return Tr!==void 0||(typeof window<"u"&&window.performance?(Tr=!0,kn=window.performance):Tr=!1),Tr}function ub(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const mt=Iw;function hb(t){return db(t)}function db(t,e){ub();const n=sp();n.__VUE__=!0,Pp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=vt,insertStaticContent:m}=t,v=(f,g,y,E=null,b=null,R=null,M=!1,S=null,N=ps?!1:!!g.dynamicChildren)=>{if(f===g)return;f&&!ss(f,g)&&(E=F(f),Et(f,b,R,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:T,ref:V,shapeFlag:U}=g;switch(T){case Ci:w(f,g,y,E);break;case Xe:C(f,g,y,E);break;case $r:f==null?O(g,y,E,M):D(f,g,y,M);break;case It:Ot(f,g,y,E,b,R,M,S,N);break;default:U&1?ue(f,g,y,E,b,R,M,S,N):U&6?bn(f,g,y,E,b,R,M,S,N):U&64||U&128?T.process(f,g,y,E,b,R,M,S,N,Ee):k("Invalid VNode type:",T,`(${typeof T})`)}V!=null&&b&&tl(V,f&&f.ref,R,g||f,!g)},w=(f,g,y,E)=>{if(f==null)s(g.el=a(g.children),y,E);else{const b=g.el=f.el;g.children!==f.children&&l(b,g.children)}},C=(f,g,y,E)=>{f==null?s(g.el=c(g.children||""),y,E):g.el=f.el},O=(f,g,y,E)=>{[f.el,f.anchor]=m(f.children,g,y,E,f.el,f.anchor)},D=(f,g,y,E)=>{if(g.children!==f.children){const b=d(f.anchor);q(f),[g.el,g.anchor]=m(g.children,y,b,E)}else g.el=f.el,g.anchor=f.anchor},P=({el:f,anchor:g},y,E)=>{let b;for(;f&&f!==g;)b=d(f),s(f,y,E),f=b;s(g,y,E)},q=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},ue=(f,g,y,E,b,R,M,S,N)=>{M=M||g.type==="svg",f==null?Te(g,y,E,b,R,M,S,N):ye(f,g,b,R,M,S,N)},Te=(f,g,y,E,b,R,M,S)=>{let N,T;const{type:V,props:U,shapeFlag:j,transition:J,dirs:ae}=f;if(N=f.el=o(f.type,R,U&&U.is,U),j&8?u(N,f.children):j&16&&re(f.children,N,null,E,b,R&&V!=="foreignObject",M,S),ae&&Xn(f,null,E,"created"),z(N,f,f.scopeId,M,E),U){for(const ve in U)ve!=="value"&&!_o(ve)&&i(N,ve,null,U[ve],R,f.children,E,b,x);"value"in U&&i(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&Bt(T,E,f)}Object.defineProperty(N,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:E,enumerable:!1}),ae&&Xn(f,null,E,"beforeMount");const be=(!b||b&&!b.pendingBranch)&&J&&!J.persisted;be&&J.beforeEnter(N),s(N,g,y),((T=U&&U.onVnodeMounted)||be||ae)&&mt(()=>{T&&Bt(T,E,f),be&&J.enter(N),ae&&Xn(f,null,E,"mounted")},b)},z=(f,g,y,E,b)=>{if(y&&p(f,y),E)for(let R=0;R<E.length;R++)p(f,E[R]);if(b){let R=b.subTree;if(R.patchFlag>0&&R.patchFlag&2048&&(R=Up(R.children)||R),g===R){const M=b.vnode;z(f,M,M.scopeId,M.slotScopeIds,b.parent)}}},re=(f,g,y,E,b,R,M,S,N=0)=>{for(let T=N;T<f.length;T++){const V=f[T]=S?Sn(f[T]):xt(f[T]);v(null,V,g,y,E,b,R,M,S)}},ye=(f,g,y,E,b,R,M)=>{const S=g.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:V}=g;N|=f.patchFlag&16;const U=f.props||_e,j=g.props||_e;let J;y&&Yn(y,!1),(J=j.onVnodeBeforeUpdate)&&Bt(J,y,g,f),V&&Xn(g,f,y,"beforeUpdate"),y&&Yn(y,!0),ps&&(N=0,M=!1,T=null);const ae=b&&g.type!=="foreignObject";if(T?(Fe(f.dynamicChildren,T,S,y,E,ae,R),y&&y.type.__hmrId&&Io(f,g)):M||gt(f,g,S,null,y,E,ae,R,!1),N>0){if(N&16)ke(S,g,U,j,y,E,b);else if(N&2&&U.class!==j.class&&i(S,"class",null,j.class,b),N&4&&i(S,"style",U.style,j.style,b),N&8){const be=g.dynamicProps;for(let ve=0;ve<be.length;ve++){const xe=be[ve],Pt=U[xe],Us=j[xe];(Us!==Pt||xe==="value")&&i(S,xe,Pt,Us,b,f.children,y,E,x)}}N&1&&f.children!==g.children&&u(S,g.children)}else!M&&T==null&&ke(S,g,U,j,y,E,b);((J=j.onVnodeUpdated)||V)&&mt(()=>{J&&Bt(J,y,g,f),V&&Xn(g,f,y,"updated")},E)},Fe=(f,g,y,E,b,R,M)=>{for(let S=0;S<g.length;S++){const N=f[S],T=g[S],V=N.el&&(N.type===It||!ss(N,T)||N.shapeFlag&70)?h(N.el):y;v(N,T,V,null,E,b,R,M,!0)}},ke=(f,g,y,E,b,R,M)=>{if(y!==E){if(y!==_e)for(const S in y)!_o(S)&&!(S in E)&&i(f,S,y[S],null,M,g.children,b,R,x);for(const S in E){if(_o(S))continue;const N=E[S],T=y[S];N!==T&&S!=="value"&&i(f,S,T,N,M,g.children,b,R,x)}"value"in E&&i(f,"value",y.value,E.value)}},Ot=(f,g,y,E,b,R,M,S,N)=>{const T=g.el=f?f.el:a(""),V=g.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:j,slotScopeIds:J}=g;(ps||U&2048)&&(U=0,N=!1,j=null),J&&(S=S?S.concat(J):J),f==null?(s(T,y,E),s(V,y,E),re(g.children,y,V,b,R,M,S,N)):U>0&&U&64&&j&&f.dynamicChildren?(Fe(f.dynamicChildren,j,y,b,R,M,S),b&&b.type.__hmrId?Io(f,g):(g.key!=null||b&&g===b.subTree)&&Io(f,g,!0)):gt(f,g,y,V,b,R,M,S,N)},bn=(f,g,y,E,b,R,M,S,N)=>{g.slotScopeIds=S,f==null?g.shapeFlag&512?b.ctx.activate(g,y,E,M,N):Nt(g,y,E,b,R,M,N):$e(f,g,N)},Nt=(f,g,y,E,b,R,M)=>{const S=f.component=Eb(f,E,b);if(S.type.__hmrId&&iw(S),wo(f),sn(S,"mount"),Si(f)&&(S.ctx.renderer=Ee),sn(S,"init"),Ib(S),rn(S,"init"),S.asyncDep){if(b&&b.registerDep(S,ie),!f.el){const N=S.subTree=je(Xe);C(null,N,g,y)}return}ie(S,f,g,y,b,R,M),bo(),rn(S,"mount")},$e=(f,g,y)=>{const E=g.component=f.component;if(bw(f,g,y))if(E.asyncDep&&!E.asyncResolved){wo(g),le(E,g,y),bo();return}else E.next=g,sw(E.update),E.update();else g.el=f.el,E.vnode=g},ie=(f,g,y,E,b,R,M)=>{const S=()=>{if(f.isMounted){let{next:V,bu:U,u:j,parent:J,vnode:ae}=f,be=V,ve;wo(V||f.vnode),Yn(f,!1),V?(V.el=ae.el,le(f,V,M)):V=ae,U&&Vs(U),(ve=V.props&&V.props.onVnodeBeforeUpdate)&&Bt(ve,J,V,ae),Yn(f,!0),sn(f,"render");const xe=ic(f);rn(f,"render");const Pt=f.subTree;f.subTree=xe,sn(f,"patch"),v(Pt,xe,h(Pt.el),F(Pt),f,b,R),rn(f,"patch"),V.el=xe.el,be===null&&Ew(f,xe.el),j&&mt(j,b),(ve=V.props&&V.props.onVnodeUpdated)&&mt(()=>Bt(ve,J,V,ae),b),Dp(f),bo()}else{let V;const{el:U,props:j}=g,{bm:J,m:ae,parent:be}=f,ve=To(g);if(Yn(f,!1),J&&Vs(J),!ve&&(V=j&&j.onVnodeBeforeMount)&&Bt(V,be,g),Yn(f,!0),U&&ee){const xe=()=>{sn(f,"render"),f.subTree=ic(f),rn(f,"render"),sn(f,"hydrate"),ee(U,f.subTree,f,b,null),rn(f,"hydrate")};ve?g.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{sn(f,"render");const xe=f.subTree=ic(f);rn(f,"render"),sn(f,"patch"),v(null,xe,y,E,f,b,R),rn(f,"patch"),g.el=xe.el}if(ae&&mt(ae,b),!ve&&(V=j&&j.onVnodeMounted)){const xe=g;mt(()=>Bt(V,be,xe),b)}(g.shapeFlag&256||be&&To(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&mt(f.a,b),f.isMounted=!0,hw(f),g=y=E=null}},N=f.effect=new Yl(S,()=>va(T),f.scope),T=f.update=()=>N.run();T.id=f.uid,Yn(f,!0),N.onTrack=f.rtc?V=>Vs(f.rtc,V):void 0,N.onTrigger=f.rtg?V=>Vs(f.rtg,V):void 0,T.ownerInstance=f,T()},le=(f,g,y)=>{g.component=f;const E=f.vnode.props;f.vnode=g,f.next=null,Zw(f,g.props,E,y),ab(f,g.children,y),Rs(),Mh(),Os()},gt=(f,g,y,E,b,R,M,S,N=!1)=>{const T=f&&f.children,V=f?f.shapeFlag:0,U=g.children,{patchFlag:j,shapeFlag:J}=g;if(j>0){if(j&128){tn(T,U,y,E,b,R,M,S,N);return}else if(j&256){Ms(T,U,y,E,b,R,M,S,N);return}}J&8?(V&16&&x(T,b,R),U!==T&&u(y,U)):V&16?J&16?tn(T,U,y,E,b,R,M,S,N):x(T,b,R,!0):(V&8&&u(y,""),J&16&&re(U,y,E,b,R,M,S,N))},Ms=(f,g,y,E,b,R,M,S,N)=>{f=f||Qs,g=g||Qs;const T=f.length,V=g.length,U=Math.min(T,V);let j;for(j=0;j<U;j++){const J=g[j]=N?Sn(g[j]):xt(g[j]);v(f[j],J,y,null,b,R,M,S,N)}T>V?x(f,b,R,!0,!1,U):re(g,y,E,b,R,M,S,N,U)},tn=(f,g,y,E,b,R,M,S,N)=>{let T=0;const V=g.length;let U=f.length-1,j=V-1;for(;T<=U&&T<=j;){const J=f[T],ae=g[T]=N?Sn(g[T]):xt(g[T]);if(ss(J,ae))v(J,ae,y,null,b,R,M,S,N);else break;T++}for(;T<=U&&T<=j;){const J=f[U],ae=g[j]=N?Sn(g[j]):xt(g[j]);if(ss(J,ae))v(J,ae,y,null,b,R,M,S,N);else break;U--,j--}if(T>U){if(T<=j){const J=j+1,ae=J<V?g[J].el:E;for(;T<=j;)v(null,g[T]=N?Sn(g[T]):xt(g[T]),y,ae,b,R,M,S,N),T++}}else if(T>j)for(;T<=U;)Et(f[T],b,R,!0),T++;else{const J=T,ae=T,be=new Map;for(T=ae;T<=j;T++){const ct=g[T]=N?Sn(g[T]):xt(g[T]);ct.key!=null&&(be.has(ct.key)&&k("Duplicate keys found during update:",JSON.stringify(ct.key),"Make sure keys are unique."),be.set(ct.key,T))}let ve,xe=0;const Pt=j-ae+1;let Us=!1,Ih=0;const Er=new Array(Pt);for(T=0;T<Pt;T++)Er[T]=0;for(T=J;T<=U;T++){const ct=f[T];if(xe>=Pt){Et(ct,b,R,!0);continue}let $t;if(ct.key!=null)$t=be.get(ct.key);else for(ve=ae;ve<=j;ve++)if(Er[ve-ae]===0&&ss(ct,g[ve])){$t=ve;break}$t===void 0?Et(ct,b,R,!0):(Er[$t-ae]=T+1,$t>=Ih?Ih=$t:Us=!0,v(ct,g[$t],y,null,b,R,M,S,N),xe++)}const Ah=Us?fb(Er):Qs;for(ve=Ah.length-1,T=Pt-1;T>=0;T--){const ct=ae+T,$t=g[ct],Sh=ct+1<V?g[ct+1].el:E;Er[T]===0?v(null,$t,y,Sh,b,R,M,S,N):Us&&(ve<0||T!==Ah[ve]?Ft($t,y,Sh,2):ve--)}}},Ft=(f,g,y,E,b=null)=>{const{el:R,type:M,transition:S,children:N,shapeFlag:T}=f;if(T&6){Ft(f.component.subTree,g,y,E);return}if(T&128){f.suspense.move(g,y,E);return}if(T&64){M.move(f,g,y,Ee);return}if(M===It){s(R,g,y);for(let U=0;U<N.length;U++)Ft(N[U],g,y,E);s(f.anchor,g,y);return}if(M===$r){P(f,g,y);return}if(E!==2&&T&1&&S)if(E===0)S.beforeEnter(R),s(R,g,y),mt(()=>S.enter(R),b);else{const{leave:U,delayLeave:j,afterLeave:J}=S,ae=()=>s(R,g,y),be=()=>{U(R,()=>{ae(),J&&J()})};j?j(R,ae,be):be()}else s(R,g,y)},Et=(f,g,y,E=!1,b=!1)=>{const{type:R,props:M,ref:S,children:N,dynamicChildren:T,shapeFlag:V,patchFlag:U,dirs:j}=f;if(S!=null&&tl(S,null,y,f,!0),V&256){g.ctx.deactivate(f);return}const J=V&1&&j,ae=!To(f);let be;if(ae&&(be=M&&M.onVnodeBeforeUnmount)&&Bt(be,g,f),V&6)L(f.component,y,E);else{if(V&128){f.suspense.unmount(y,E);return}J&&Xn(f,null,g,"beforeUnmount"),V&64?f.type.remove(f,g,y,b,Ee,E):T&&(R!==It||U>0&&U&64)?x(T,g,y,!1,!0):(R===It&&U&384||!b&&V&16)&&x(N,g,y),E&&Ls(f)}(ae&&(be=M&&M.onVnodeUnmounted)||J)&&mt(()=>{be&&Bt(be,g,f),J&&Xn(f,null,g,"unmounted")},y)},Ls=f=>{const{type:g,el:y,anchor:E,transition:b}=f;if(g===It){f.patchFlag>0&&f.patchFlag&2048&&b&&!b.persisted?f.children.forEach(M=>{M.type===Xe?r(M.el):Ls(M)}):_(y,E);return}if(g===$r){q(f);return}const R=()=>{r(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:M,delayLeave:S}=b,N=()=>M(y,R);S?S(f.el,R,N):N()}else R()},_=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},L=(f,g,y)=>{f.type.__hmrId&&ow(f);const{bum:E,scope:b,update:R,subTree:M,um:S}=f;E&&Vs(E),b.stop(),R&&(R.active=!1,Et(M,f,g,y)),S&&mt(S,g),mt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),fw(f)},x=(f,g,y,E=!1,b=!1,R=0)=>{for(let M=R;M<f.length;M++)Et(f[M],g,y,E,b)},F=f=>f.shapeFlag&6?F(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),he=(f,g,y)=>{f==null?g._vnode&&Et(g._vnode,null,null,!0):v(g._vnode||null,f,g,null,null,null,y),Mh(),Rp(),g._vnode=f},Ee={p:v,um:Et,m:Ft,r:Ls,mt:Nt,mc:re,pc:gt,pbc:Fe,n:F,o:t};let se,ee;return e&&([se,ee]=e(Ee)),{render:he,hydrate:se,createApp:lb(he,se)}}function Yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Io(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Sn(r[i]),a.el=o.el),n||Io(o,a)),a.type===Ci&&(a.el=o.el),a.type===Xe&&!a.el&&(a.el=o.el)}}function fb(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const pb=t=>t.__isTeleport,It=Symbol("Fragment"),Ci=Symbol("Text"),Xe=Symbol("Comment"),$r=Symbol("Static"),Br=[];let Mt=null;function Vr(t=!1){Br.push(Mt=t?null:[])}function gb(){Br.pop(),Mt=Br[Br.length-1]||null}let ti=1;function Gh(t){ti+=t}function ng(t){return t.dynamicChildren=ti>0?Mt||Qs:null,gb(),ti>0&&Mt&&Mt.push(t),t}function nl(t,e,n,s,r,i){return ng(We(t,e,n,s,r,i,!0))}function sg(t,e,n,s,r){return ng(je(t,e,n,s,r,!0))}function ni(t){return t?t.__v_isVNode===!0:!1}function ss(t,e){return e.shapeFlag&6&&js.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const mb=(...t)=>yb(...t),ba="__vInternal",rg=({key:t})=>t??null,Ao=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Ve(t)||Q(t)?{i:dt,r:t,k:e,f:!!n}:t:null;function We(t,e=null,n=null,s=0,r=null,i=t===It?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rg(e),ref:e&&Ao(e),scopeId:Lp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dt};return a?(cu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),c.key!==c.key&&k("VNode created with invalid key (NaN). VNode type:",c.type),ti>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const je=mb;function yb(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Bw)&&(t||k(`Invalid vnode type when creating vnode: ${t}.`),t=Xe),ni(t)){const a=Yt(t,e,!0);return n&&cu(a,n),ti>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(lg(t)&&(t=t.__vccOpts),e){e=vb(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Ei(a)),we(c)&&(jc(c)&&!W(c)&&(c=Pe({},c)),e.style=ql(c))}const o=De(t)?1:Tw(t)?128:pb(t)?64:we(t)?4:Q(t)?2:0;return o&4&&jc(t)&&(t=te(t),k("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),We(t,e,n,s,r,o,i,!0)}function vb(t){return t?jc(t)||ba in t?Pe({},t):t:null}function Yt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?_b(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rg(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Ao(e)):[r,Ao(e)]:Ao(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&W(o)?o.map(ig):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ig(t){const e=Yt(t);return W(t.children)&&(e.children=t.children.map(ig)),e}function Nr(t=" ",e=0){return je(Ci,null,t,e)}function gP(t,e){const n=je($r,null,t);return n.staticCount=e,n}function Qh(t="",e=!1){return e?(Vr(),sg(Xe,null,t)):je(Xe,null,t)}function xt(t){return t==null||typeof t=="boolean"?je(Xe):W(t)?je(It,null,t.slice()):typeof t=="object"?Sn(t):je(Ci,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function cu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),cu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ba in e)?e._ctx=dt:r===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),s&64?(n=16,e=[Nr(e)]):n=8);t.children=e,t.shapeFlag|=n}function _b(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ei([e.class,s.class]));else if(r==="style")e.style=ql([e.style,s.style]);else if(Ti(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Bt(t,e,n,s=null){Ct(t,e,7,[n,s])}const wb=tg();let bb=0;function Eb(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||wb,i={uid:bb++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new f_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xp(s,r),emitsOptions:Mp(s,r),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=jw(i),i.root=e?e.root:i,i.emit=yw.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const lu=()=>Oe||dt,nr=t=>{Oe=t,t.scope.on()},ms=()=>{Oe&&Oe.scope.off(),Oe=null},Tb=Wn("slot,component");function sl(t,e){const n=e.isNativeTag||Zf;(Tb(t)||n(t))&&k("Do not use built-in or reserved HTML elements as component id: "+t)}function og(t){return t.vnode.shapeFlag&4}let si=!1;function Ib(t,e=!1){si=e;const{props:n,children:s}=t.vnode,r=og(t);Yw(t,n,r,e),ob(t,s);const i=r?Ab(t,e):void 0;return si=!1,i}function Ab(t,e){var n;const s=t.type;{if(s.name&&sl(s.name,t.appContext.config),s.components){const i=Object.keys(s.components);for(let o=0;o<i.length;o++)sl(i[o],t.appContext.config)}if(s.directives){const i=Object.keys(s.directives);for(let o=0;o<i.length;o++)Kp(i[o])}s.compilerOptions&&ag()&&k('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=vp(new Proxy(t.ctx,Wp)),Hw(t);const{setup:r}=s;if(r){const i=t.setupContext=r.length>1?Cb(t):null;nr(t),Rs();const o=un(r,t,0,[Ks(t.props),i]);if(Os(),ms(),Wl(o)){if(o.then(ms,ms),e)return o.then(a=>{Xh(t,a,e)}).catch(a=>{ya(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=s.name)!==null&&n!==void 0?n:"Anonymous";k(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Xh(t,o,e)}else cg(t,e)}function Xh(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)?(ni(e)&&k("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=Ep(e),qw(t)):e!==void 0&&k(`setup() should return an object. Received: ${e===null?"null":typeof e}`),cg(t,n)}let rl;const ag=()=>!rl;function cg(t,e,n){const s=t.type;if(!t.render){if(!e&&rl&&!s.render){const r=s.template||ou(t).template;if(r){sn(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Pe(Pe({isCustomElement:i,delimiters:a},o),c);s.render=rl(r,l),rn(t,"compile")}}t.render=s.render||vt}nr(t),Rs(),Kw(t),Os(),ms(),!s.render&&t.render===vt&&!e&&(s.template?k('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):k("Component is missing template or render function."))}function Sb(t){return new Proxy(t.attrs,{get(e,n){return Fo(),_t(t,"get","$attrs"),e[n]},set(){return k("setupContext.attrs is readonly."),!1},deleteProperty(){return k("setupContext.attrs is readonly."),!1}})}function Cb(t){const e=s=>{if(t.exposed&&k("expose() should be called only once per setup()."),s!=null){let r=typeof s;r==="object"&&(W(s)?r="array":Ve(s)&&(r="ref")),r!=="object"&&k(`expose() should be passed a plain object, received ${r}.`)}t.exposed=s||{}};let n;return Object.freeze({get attrs(){return n||(n=Sb(t))},get slots(){return Ks(t.slots)},get emit(){return(s,...r)=>t.emit(s,...r)},expose:e})}function Ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ep(vp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}}))}const kb=/(?:^|[-_])(\w)/g,Rb=t=>t.replace(kb,e=>e.toUpperCase()).replace(/[-_]/g,"");function uu(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function Ta(t,e,n=!1){let s=uu(e);if(!s&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&t&&t.parent){const r=i=>{for(const o in i)if(i[o]===e)return o};s=r(t.components||t.parent.type.components)||r(t.appContext.components)}return s?Rb(s):n?"App":"Anonymous"}function lg(t){return Q(t)&&"__vccOpts"in t}const At=(t,e)=>Q_(t,e,si);function ug(t,e,n){const s=arguments.length;return s===2?we(e)&&!W(e)?ni(e)?je(t,null,[e]):je(t,e):je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ni(n)&&(n=[n]),je(t,e,n))}const Ob=Symbol("ssrContext"),Nb=()=>{{const t=hn(Ob);return t||k("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function cc(t){return!!(t&&t.__v_isShallow)}function Pb(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(h){return we(h)?h.__isVue?["div",t,"VueInstance"]:Ve(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:ds(h)?["div",{},["span",t,cc(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${Vn(h)?" (readonly)":""}`]:Vn(h)?["div",{},["span",t,cc(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",te(h.props))),h.setupState!==_e&&d.push(o("setup",h.setupState)),h.data!==_e&&d.push(o("data",te(h.data)));const p=c(h,"computed");p&&d.push(o("computed",p));const m=c(h,"inject");return m&&d.push(o("injected",m)),d.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=Pe({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",s,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",s,h]:we(h)?["object",{object:d?te(h):h}]:["span",n,String(h)]}function c(h,d){const p=h.type;if(Q(p))return;const m={};for(const v in h.ctx)l(p,v,d)&&(m[v]=h.ctx[v]);return m}function l(h,d,p){const m=h[p];if(W(m)&&m.includes(d)||we(m)&&d in m||h.extends&&l(h.extends,d,p)||h.mixins&&h.mixins.some(v=>l(v,d,p)))return!0}function u(h){return cc(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Yh="3.2.47",Db="http://www.w3.org/2000/svg",rs=typeof document<"u"?document:null,Jh=rs&&rs.createElement("template"),xb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?rs.createElementNS(Db,t):rs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>rs.createTextNode(t),createComment:t=>rs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Jh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Jh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Mb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Lb(t,e,n){const s=t.style,r=De(n);if(n&&!r){if(e&&!De(e))for(const i in e)n[i]==null&&il(s,i,"");for(const i in n)il(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Ub=/[^\\];\s*$/,Zh=/\s*!important$/;function il(t,e,n){if(W(n))n.forEach(s=>il(t,e,s));else if(n==null&&(n=""),Ub.test(n)&&k(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const s=Fb(t,e);Zh.test(n)?t.setProperty($n(s),n.replace(Zh,""),"important"):t[s]=n}}const ed=["Webkit","Moz","ms"],lc={};function Fb(t,e){const n=lc[e];if(n)return n;let s=Xt(e);if(s!=="filter"&&s in t)return lc[e]=s;s=bs(s);for(let r=0;r<ed.length;r++){const i=ed[r]+s;if(i in t)return lc[e]=i}return e}const td="http://www.w3.org/1999/xlink";function $b(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(td,e.slice(6,e.length)):t.setAttributeNS(td,e,n);else{const i=a_(e);n==null||i&&!Yf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Bb(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch(c){a||k(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&t.removeAttribute(e)}function Hs(t,e,n,s){t.addEventListener(e,n,s)}function Vb(t,e,n,s){t.removeEventListener(e,n,s)}function jb(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Hb(e);if(s){const l=i[e]=Kb(s,r);Hs(t,a,l,c)}else o&&(Vb(t,a,o,c),i[e]=void 0)}}const nd=/(?:Once|Passive|Capture)$/;function Hb(t){let e;if(nd.test(t)){e={};let s;for(;s=t.match(nd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$n(t.slice(2)),e]}let uc=0;const qb=Promise.resolve(),zb=()=>uc||(qb.then(()=>uc=0),uc=Date.now());function Kb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ct(Wb(s,n.value),e,5,[s])};return n.value=t,n.attached=zb(),n}function Wb(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const sd=/^on[a-z]/,Gb=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Mb(t,s,r):e==="style"?Lb(t,n,s):Ti(e)?xo(e)||jb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qb(t,e,s,r))?Bb(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$b(t,e,s,r))};function Qb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&sd.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sd.test(e)&&De(n)?!1:e in t}const Xb={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rw.props;const rd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Vs(e,n):e};function Yb(t){t.target.composing=!0}function id(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mP={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=rd(r);const i=s||r.props&&r.props.type==="number";Hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Lc(a)),t._assign(a)}),n&&Hs(t,"change",()=>{t.value=t.value.trim()}),e||(Hs(t,"compositionstart",Yb),Hs(t,"compositionend",id),Hs(t,"change",id))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=rd(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Lc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Jb=Pe({patchProp:Gb},xb);let od;function Zb(){return od||(od=hb(Jb))}const eE=(...t)=>{const e=Zb().createApp(...t);tE(e),nE(e);const{mount:n}=e;return e.mount=s=>{const r=sE(s);if(!r)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function tE(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>r_(e)||i_(e),writable:!1})}function nE(t){if(ag()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){k("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return k(s),n},set(){k(s)}})}}function sE(t){if(De(t)){const e=document.querySelector(t);return e||k(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&k('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function rE(){Pb()}rE();const hu=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},iE={};function oE(t,e){return null}const aE=hu(iE,[["render",oE],["__file","/home/dave/Documents/VueFleet/vue-project/src/components/header.vue"]]);/**
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
 */const hg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},cE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new lE;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(t){const e=hg(t);return dg.encodeByteArray(e,!0)},Vo=function(t){return uE(t).replace(/\./g,"")},fg=function(t){try{return dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dE=()=>hE().__FIREBASE_DEFAULTS__,fE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fg(t[1]);return e&&JSON.parse(e)},Ia=()=>{try{return dE()||fE()||pE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pg=t=>{var e,n;return(n=(e=Ia())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},du=t=>{const e=pg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},gE=()=>{var t;return(t=Ia())===null||t===void 0?void 0:t.config},gg=t=>{var e;return(e=Ia())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function mg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),a].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function vE(){var t;const e=(t=Ia())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _E(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bE(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EE(){try{return typeof indexedDB=="object"}catch{return!1}}function TE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const IE="FirebaseError";class en extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=IE,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?AE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new en(r,a,s)}}function AE(t,e){return t.replace(SE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const SE=/\{\$([^}]+)}/g;function CE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ad(i)&&ad(o)){if(!jo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ad(t){return t!==null&&typeof t=="object"}/**
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
 */function Ri(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Dr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kE(t,e){const n=new RE(t,e);return n.subscribe.bind(n)}class RE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");OE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=hc),r.error===void 0&&(r.error=hc),r.complete===void 0&&(r.complete=hc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hc(){}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class NE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DE(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PE(t){return t===ns?void 0:t}function DE(t){return t.instantiationMode==="EAGER"}/**
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
 */class xE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const ME={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},LE=pe.INFO,UE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},FE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=UE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fu{constructor(e){this.name=e,this._logLevel=LE,this._logHandler=FE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ME[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $E=(t,e)=>e.some(n=>t instanceof n);let cd,ld;function BE(){return cd||(cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VE(){return ld||(ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yg=new WeakMap,ol=new WeakMap,vg=new WeakMap,dc=new WeakMap,pu=new WeakMap;function jE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yg.set(n,t)}).catch(()=>{}),pu.set(e,t),e}function HE(t){if(ol.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ol.set(t,e)}let al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qE(t){al=t(al)}function zE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(fc(this),e,...n);return vg.set(s,e.sort?e.sort():[e]),Mn(s)}:VE().includes(t)?function(...e){return t.apply(fc(this),e),Mn(yg.get(this))}:function(...e){return Mn(t.apply(fc(this),e))}}function KE(t){return typeof t=="function"?zE(t):(t instanceof IDBTransaction&&HE(t),$E(t,BE())?new Proxy(t,al):t)}function Mn(t){if(t instanceof IDBRequest)return jE(t);if(dc.has(t))return dc.get(t);const e=KE(t);return e!==t&&(dc.set(t,e),pu.set(e,t)),e}const fc=t=>pu.get(t);function WE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const GE=["get","getKey","getAll","getAllKeys","count"],QE=["put","add","delete","clear"],pc=new Map;function ud(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=QE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||GE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return pc.set(e,i),i}qE(t=>({...t,get:(e,n,s)=>ud(e,n)||t.get(e,n,s),has:(e,n)=>!!ud(e,n)||t.has(e,n)}));/**
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
 */class XE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function YE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cl="@firebase/app",hd="0.9.7";/**
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
 */const Ts=new fu("@firebase/app"),JE="@firebase/app-compat",ZE="@firebase/analytics-compat",eT="@firebase/analytics",tT="@firebase/app-check-compat",nT="@firebase/app-check",sT="@firebase/auth",rT="@firebase/auth-compat",iT="@firebase/database",oT="@firebase/database-compat",aT="@firebase/functions",cT="@firebase/functions-compat",lT="@firebase/installations",uT="@firebase/installations-compat",hT="@firebase/messaging",dT="@firebase/messaging-compat",fT="@firebase/performance",pT="@firebase/performance-compat",gT="@firebase/remote-config",mT="@firebase/remote-config-compat",yT="@firebase/storage",vT="@firebase/storage-compat",_T="@firebase/firestore",wT="@firebase/firestore-compat",bT="firebase",ET="9.19.1";/**
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
 */const ll="[DEFAULT]",TT={[cl]:"fire-core",[JE]:"fire-core-compat",[eT]:"fire-analytics",[ZE]:"fire-analytics-compat",[nT]:"fire-app-check",[tT]:"fire-app-check-compat",[sT]:"fire-auth",[rT]:"fire-auth-compat",[iT]:"fire-rtdb",[oT]:"fire-rtdb-compat",[aT]:"fire-fn",[cT]:"fire-fn-compat",[lT]:"fire-iid",[uT]:"fire-iid-compat",[hT]:"fire-fcm",[dT]:"fire-fcm-compat",[fT]:"fire-perf",[pT]:"fire-perf-compat",[gT]:"fire-rc",[mT]:"fire-rc-compat",[yT]:"fire-gcs",[vT]:"fire-gcs-compat",[_T]:"fire-fst",[wT]:"fire-fst-compat","fire-js":"fire-js",[bT]:"fire-js-all"};/**
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
 */const Ho=new Map,ul=new Map;function IT(t,e){try{t.container.addComponent(e)}catch(n){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if(ul.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of Ho.values())IT(n,t);return!0}function Oi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const AT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new ki("app","Firebase",AT);/**
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
 */class ST{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const dr=ET;function _g(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ln.create("bad-app-name",{appName:String(r)});if(n||(n=gE()),!n)throw Ln.create("no-options");const i=Ho.get(r);if(i){if(jo(n,i.options)&&jo(s,i.config))return i;throw Ln.create("duplicate-app",{appName:r})}const o=new xE(r);for(const c of ul.values())o.addComponent(c);const a=new ST(n,s,o);return Ho.set(r,a),a}function Aa(t=ll){const e=Ho.get(t);if(!e&&t===ll)return _g();if(!e)throw Ln.create("no-app",{appName:t});return e}function kt(t,e,n){var s;let r=(s=TT[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(a.join(" "));return}jn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const CT="firebase-heartbeat-database",kT=1,ri="firebase-heartbeat-store";let gc=null;function wg(){return gc||(gc=WE(CT,kT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ri)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),gc}async function RT(t){try{return(await wg()).transaction(ri).objectStore(ri).get(bg(t))}catch(e){if(e instanceof en)Ts.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ts.warn(n.message)}}}async function dd(t,e){try{const s=(await wg()).transaction(ri,"readwrite");return await s.objectStore(ri).put(e,bg(t)),s.done}catch(n){if(n instanceof en)Ts.warn(n.message);else{const s=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ts.warn(s.message)}}}function bg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OT=1024,NT=30*24*60*60*1e3;class PT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=NT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fd(),{heartbeatsToSend:n,unsentEntries:s}=DT(this._heartbeatsCache.heartbeats),r=Vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function fd(){return new Date().toISOString().substring(0,10)}function DT(t,e=OT){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),pd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),pd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EE()?TE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pd(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MT(t){jn(new pn("platform-logger",e=>new XE(e),"PRIVATE")),jn(new pn("heartbeat",e=>new PT(e),"PRIVATE")),kt(cl,hd,t),kt(cl,hd,"esm2017"),kt("fire-js","")}MT("");var LT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,gu=gu||{},Y=LT||self;function qo(){}function Sa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ni(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UT(t){return Object.prototype.hasOwnProperty.call(t,mc)&&t[mc]||(t[mc]=++FT)}var mc="closure_uid_"+(1e9*Math.random()>>>0),FT=0;function $T(t,e,n){return t.call.apply(t.bind,arguments)}function BT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=$T:rt=BT,rt.apply(null,arguments)}function io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Gn(){this.s=this.s,this.o=this.o}var VT=0;Gn.prototype.s=!1;Gn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),VT!=0)&&UT(this)};Gn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Sa(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var jT=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",qo,e),Y.removeEventListener("test",qo,e)}catch{}return t}();function zo(t){return/^[\s\xa0]*$/.test(t)}var md=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function yc(t,e){return t<e?-1:t>e?1:0}function Ca(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return Ca().indexOf(t)!=-1}function yu(t){return yu[" "](t),t}yu[" "]=qo;function HT(t){var e=KT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var qT=qt("Opera"),sr=qt("Trident")||qt("MSIE"),Tg=qt("Edge"),hl=Tg||sr,Ig=qt("Gecko")&&!(Ca().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),zT=Ca().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function Ag(){var t=Y.document;return t?t.documentMode:void 0}var Ko;e:{var vc="",_c=function(){var t=Ca();if(Ig)return/rv:([^\);]+)(\)|;)/.exec(t);if(Tg)return/Edge\/([\d\.]+)/.exec(t);if(sr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zT)return/WebKit\/(\S+)/.exec(t);if(qT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_c&&(vc=_c?_c[1]:""),sr){var wc=Ag();if(wc!=null&&wc>parseFloat(vc)){Ko=String(wc);break e}}Ko=vc}var KT={};function WT(){return HT(function(){let t=0;const e=md(String(Ko)).split("."),n=md("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=yc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||yc(r[2].length==0,i[2].length==0)||yc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var dl;if(Y.document&&sr){var yd=Ag();dl=yd||parseInt(Ko,10)||void 0}else dl=void 0;var GT=dl;function ii(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ig){e:{try{yu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ii.X.h.call(this)}}Je(ii,it);var QT={2:"touch",3:"pen",4:"mouse"};ii.prototype.h=function(){ii.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pi="closure_listenable_"+(1e6*Math.random()|0),XT=0;function YT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++XT,this.ba=this.ea=!1}function ka(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function vu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Sg(t){const e={};for(const n in t)e[n]=t[n];return e}const vd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vd.length;i++)n=vd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ra(t){this.src=t,this.g={},this.h=0}Ra.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=pl(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new YT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function fl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Eg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ka(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var _u="closure_lm_"+(1e6*Math.random()|0),bc={};function kg(t,e,n,s,r){if(s&&s.once)return Og(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)kg(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[Pi]?t.N(e,n,Ni(s)?!!s.capture:!!s,r):Rg(t,e,n,!1,s,r)}function Rg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ni(r)?!!r.capture:!!r,a=bu(t);if(a||(t[_u]=a=new Ra(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=JT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Pg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JT(){function t(n){return e.call(t.src,t.listener,n)}const e=ZT;return t}function Og(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Og(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[Pi]?t.O(e,n,Ni(s)?!!s.capture:!!s,r):Rg(t,e,n,!0,s,r)}function Ng(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ng(t,e[i],n,s,r);else s=Ni(s)?!!s.capture:!!s,n=Eu(n),t&&t[Pi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=pl(i,n,s,r),-1<n&&(ka(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pl(e,n,s,r)),(n=-1<t?e[t]:null)&&wu(n))}function wu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Pi])fl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Pg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=bu(e))?(fl(n,t),n.h==0&&(n.src=null,e[_u]=null)):ka(t)}}}function Pg(t){return t in bc?bc[t]:bc[t]="on"+t}function ZT(t,e){if(t.ba)t=!0;else{e=new ii(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wu(t),t=n.call(s,e)}return t}function bu(t){return t=t[_u],t instanceof Ra?t:null}var Ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(t){return typeof t=="function"?t:(t[Ec]||(t[Ec]=function(e){return t.handleEvent(e)}),t[Ec])}function Ge(){Gn.call(this),this.i=new Ra(this),this.P=this,this.I=null}Je(Ge,Gn);Ge.prototype[Pi]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){Ng(this,t,e,n,s)};function Ye(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var r=e;e=new it(s,t),Cg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=oo(o,s,!0,e)&&r}if(o=e.g=t,r=oo(o,s,!0,e)&&r,r=oo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=oo(o,s,!1,e)&&r}Ge.prototype.M=function(){if(Ge.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ka(n[s]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function oo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&fl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Tu=Y.JSON.stringify;function eI(){var t=Mg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tI{constructor(){this.h=this.g=null}add(e,n){const s=Dg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Dg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nI,t=>t.reset());class nI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sI(t){Y.setTimeout(()=>{throw t},0)}function xg(t,e){gl||rI(),ml||(gl(),ml=!0),Mg.add(t,e)}var gl;function rI(){var t=Y.Promise.resolve(void 0);gl=function(){t.then(iI)}}var ml=!1,Mg=new tI;function iI(){for(var t;t=eI();){try{t.h.call(t.g)}catch(n){sI(n)}var e=Dg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ml=!1}function Oa(t,e){Ge.call(this),this.h=t||1,this.g=e||Y,this.j=rt(this.lb,this),this.l=Date.now()}Je(Oa,Ge);$=Oa.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ye(this,"tick"),this.ca&&(Iu(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Iu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){Oa.X.M.call(this),Iu(this),delete this.g};function Au(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function Lg(t){t.g=Au(()=>{t.g=null,t.i&&(t.i=!1,Lg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oI extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lg(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(t){Gn.call(this),this.h=t,this.g={}}Je(oi,Gn);var _d=[];function Ug(t,e,n,s){Array.isArray(n)||(n&&(_d[0]=n.toString()),n=_d);for(var r=0;r<n.length;r++){var i=kg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Fg(t){vu(t.g,function(e,n){this.g.hasOwnProperty(n)&&wu(e)},t),t.g={}}oi.prototype.M=function(){oi.X.M.call(this),Fg(this)};oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Na(){this.g=!0}Na.prototype.Aa=function(){this.g=!1};function aI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function cI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ws(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+uI(t,n)+(s?" "+s:"")})}function lI(t,e){t.info(function(){return"TIMEOUT: "+e})}Na.prototype.info=function(){};function uI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Tu(n)}catch{return e}}var Ns={},wd=null;function Pa(){return wd=wd||new Ge}Ns.Pa="serverreachability";function $g(t){it.call(this,Ns.Pa,t)}Je($g,it);function ai(t){const e=Pa();Ye(e,new $g(e))}Ns.STAT_EVENT="statevent";function Bg(t,e){it.call(this,Ns.STAT_EVENT,t),this.stat=e}Je(Bg,it);function ft(t){const e=Pa();Ye(e,new Bg(e,t))}Ns.Qa="timingevent";function Vg(t,e){it.call(this,Ns.Qa,t),this.size=e}Je(Vg,it);function Di(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Da={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Su(){}Su.prototype.h=null;function bd(t){return t.h||(t.h=t.i())}function Hg(){}var xi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cu(){it.call(this,"d")}Je(Cu,it);function ku(){it.call(this,"c")}Je(ku,it);var yl;function xa(){}Je(xa,Su);xa.prototype.g=function(){return new XMLHttpRequest};xa.prototype.i=function(){return{}};yl=new xa;function Mi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new oi(this),this.O=hI,t=hl?125:void 0,this.T=new Oa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new qg}function qg(){this.i=null,this.g="",this.h=!1}var hI=45e3,vl={},Wo={};$=Mi.prototype;$.setTimeout=function(t){this.O=t};function _l(t,e,n){t.K=1,t.v=La(gn(e)),t.s=n,t.P=!0,zg(t,null)}function zg(t,e){t.F=Date.now(),Li(t),t.A=gn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Zg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new qg,t.g=wm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new oI(rt(t.La,t,t.g),t.N)),Ug(t.S,t.g,"readystatechange",t.ib),e=t.H?Sg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ai(),aI(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&an(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const u=an(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||hl||this.g&&(this.h.h||this.g.fa()||Ad(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ai(3):ai(2)),Ma(this);var n=this.g.aa();this.Y=n;t:if(Kg(this)){var s=Ad(this.g);t="";var r=s.length,i=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),jr(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,cI(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zo(a)){var l=a;break t}}l=null}if(n=l)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wl(this,n);else{this.i=!1,this.o=3,ft(12),as(this),jr(this);break e}}this.P?(Wg(this,u,o),hl&&this.i&&u==3&&(Ug(this.S,this.T,"tick",this.hb),this.T.start())):(Ws(this.j,this.m,o,null),wl(this,o)),u==4&&as(this),this.i&&!this.I&&(u==4?mm(this.l,this):(this.i=!1,Li(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),as(this),jr(this)}}}catch{}finally{}};function Kg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Wg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=dI(t,n),r==Wo){e==4&&(t.o=4,ft(14),s=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}else if(r==vl){t.o=4,ft(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ws(t.j,t.m,r,null),wl(t,r);Kg(t)&&r!=Wo&&r!=vl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ft(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mu(e),e.K=!0,ft(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),as(t),jr(t))}$.hb=function(){if(this.g){var t=an(this.g),e=this.g.fa();this.C<e.length&&(Ma(this),Wg(this,t,e),this.i&&t!=4&&Li(this))}};function dI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Wo:(n=Number(e.substring(n,s)),isNaN(n)?vl:(s+=1,s+n>e.length?Wo:(e=e.substr(s,n),t.C=s+n,e)))}$.cancel=function(){this.I=!0,as(this)};function Li(t){t.V=Date.now()+t.O,Gg(t,t.O)}function Gg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Di(rt(t.gb,t),e)}function Ma(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(lI(this.j,this.A),this.K!=2&&(ai(),ft(17)),as(this),this.o=2,jr(this)):Gg(this,this.V-t)};function jr(t){t.l.G==0||t.I||mm(t.l,t)}function as(t){Ma(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Iu(t.T),Fg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bl(n.h,t))){if(!t.J&&bl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Xo(n),$a(n);else break e;xu(n),ft(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Di(rt(n.cb,n),6e3));if(1>=nm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else cs(n,11)}else if((t.J||n.g==t)&&Xo(n),!zo(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ru(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Se(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=_m(s,s.H?s.ka:null,s.V),o.J){sm(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ma(a),Li(a)),s.g=o}else pm(s);0<n.i.length&&Ba(n)}else l[0]!="stop"&&l[0]!="close"||cs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?cs(n,7):Du(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ai(4)}catch{}}function fI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function pI(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Qg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pI(t),s=fI(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Xg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ys(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ys){this.h=e!==void 0?e:t.h,Go(this,t.j),this.s=t.s,this.g=t.g,Qo(this,t.m),this.l=t.l,e=t.i;var n=new ci;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ed(this,n),this.o=t.o}else t&&(n=String(t).match(Xg))?(this.h=!!e,Go(this,n[1]||"",!0),this.s=xr(n[2]||""),this.g=xr(n[3]||"",!0),Qo(this,n[4]),this.l=xr(n[5]||"",!0),Ed(this,n[6]||"",!0),this.o=xr(n[7]||"")):(this.h=!!e,this.i=new ci(null,this.h))}ys.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Mr(e,Td,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Mr(e,Td,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Mr(n,n.charAt(0)=="/"?vI:yI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Mr(n,wI)),t.join("")};function gn(t){return new ys(t)}function Go(t,e,n){t.j=n?xr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ed(t,e,n){e instanceof ci?(t.i=e,bI(t.i,t.h)):(n||(e=Mr(e,_I)),t.i=new ci(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function La(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Mr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Td=/[#\/\?@]/g,yI=/[#\?:]/g,vI=/[#\?]/g,_I=/[#\?@]/g,wI=/#/g;function ci(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&gI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=ci.prototype;$.add=function(t,e){Qn(this),this.i=null,t=fr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yg(t,e){Qn(t),e=fr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jg(t,e){return Qn(t),e=fr(t,e),t.g.has(e)}$.forEach=function(t,e){Qn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};$.oa=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};$.W=function(t){Qn(this);let e=[];if(typeof t=="string")Jg(this,t)&&(e=e.concat(this.g.get(fr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Qn(this),this.i=null,t=fr(this,t),Jg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Zg(t,e,n){Yg(t,e),0<n.length&&(t.i=null,t.g.set(fr(t,e),mu(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function fr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bI(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Yg(this,s),Zg(this,r,n))},t)),t.j=e}var EI=class{constructor(e,n){this.h=e,this.g=n}};function em(t){this.l=t||TI,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TI=10;function tm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function nm(t){return t.h?1:t.g?t.g.size:0}function bl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ru(t,e){t.g?t.g.add(e):t.h=e}function sm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}em.prototype.cancel=function(){if(this.i=rm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mu(t.i)}function Ou(){}Ou.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};Ou.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function II(){this.g=new Ou}function AI(t,e,n){const s=n||"";try{Qg(t,function(r,i){let o=r;Ni(r)&&(o=Tu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function SI(t,e){const n=new Na;if(Y.Image){const s=new Image;s.onload=io(ao,n,s,"TestLoadImage: loaded",!0,e),s.onerror=io(ao,n,s,"TestLoadImage: error",!1,e),s.onabort=io(ao,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=io(ao,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ao(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ui(t){this.l=t.ac||null,this.j=t.jb||!1}Je(Ui,Su);Ui.prototype.g=function(){return new Ua(this.l,this.j)};Ui.prototype.i=function(t){return function(){return t}}({});function Ua(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Ua,Ge);var Nu=0;$=Ua.prototype;$.open=function(t,e){if(this.readyState!=Nu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,li(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=Nu};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;im(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function im(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fi(this):li(this),this.readyState==3&&im(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,Fi(this))};$.Ua=function(t){this.g&&(this.response=t,Fi(this))};$.ga=function(){this.g&&Fi(this)};function Fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,li(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function li(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CI=Y.JSON.parse;function Ne(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=om,this.K=this.L=!1}Je(Ne,Ge);var om="",kI=/^https?$/i,RI=["POST","PUT"];$=Ne.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yl.g(),this.C=this.u?bd(this.u):bd(yl),this.g.onreadystatechange=rt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Id(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Y.FormData&&t instanceof Y.FormData,!(0<=Eg(RI,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lm(this),0<this.B&&((this.K=OI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.qa,this)):this.A=Au(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Id(this,i)}};function OI(t){return sr&&WT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof gu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Id(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,am(t),Fa(t)}function am(t){t.D||(t.D=!0,Ye(t,"complete"),Ye(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),Fa(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fa(this,!0)),Ne.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?cm(this):this.fb())};$.fb=function(){cm(this)};function cm(t){if(t.h&&typeof gu<"u"&&(!t.C[1]||an(t)!=4||t.aa()!=2)){if(t.v&&an(t)==4)Au(t.Ha,0,t);else if(Ye(t,"readystatechange"),an(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Xg)[1]||null;if(!r&&Y.self&&Y.self.location){var i=Y.self.location.protocol;r=i.substr(0,i.length-1)}s=!kI.test(r?r.toLowerCase():"")}n=s}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var o=2<an(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",am(t)}}finally{Fa(t)}}}}function Fa(t,e){if(t.g){lm(t);const n=t.g,s=t.C[0]?qo:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=s}catch{}}}function lm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function an(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CI(e)}};function Ad(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case om:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function um(t){let e="";return vu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Pu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=um(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Ir(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hm(t){this.Ca=0,this.i=[],this.j=new Na,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ir("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ir("baseRetryDelayMs",5e3,t),this.bb=Ir("retryDelaySeedMs",1e4,t),this.$a=Ir("forwardChannelMaxRetries",2,t),this.ta=Ir("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new em(t&&t.concurrentRequestLimit),this.Fa=new II,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=hm.prototype;$.ma=8;$.G=1;function Du(t){if(dm(t),t.G==3){var e=t.U++,n=gn(t.F);Se(n,"SID",t.I),Se(n,"RID",e),Se(n,"TYPE","terminate"),$i(t,n),e=new Mi(t,t.j,e,void 0),e.K=2,e.v=La(gn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=wm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Li(e)}vm(t)}function $a(t){t.g&&(Mu(t),t.g.cancel(),t.g=null)}function dm(t){$a(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Xo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Ba(t){tm(t.h)||t.m||(t.m=!0,xg(t.Ja,t),t.C=0)}function NI(t,e){return nm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Di(rt(t.Ja,t,e),ym(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Mi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Sg(i),Cg(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fm(this,r,e),n=gn(this.F),Se(n,"RID",t),Se(n,"CVER",22),this.D&&Se(n,"X-HTTP-Session-Id",this.D),$i(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(um(i)))+"&"+e:this.o&&Pu(n,this.o,i)),Ru(this.h,r),this.Ya&&Se(n,"TYPE","init"),this.O?(Se(n,"$req",e),Se(n,"SID","null"),r.Z=!0,_l(r,n,null)):_l(r,n,e),this.G=2}}else this.G==3&&(t?Sd(this,t):this.i.length==0||tm(this.h)||Sd(this))};function Sd(t,e){var n;e?n=e.m:n=t.U++;const s=gn(t.F);Se(s,"SID",t.I),Se(s,"RID",n),Se(s,"AID",t.T),$i(t,s),t.o&&t.s&&Pu(s,t.o,t.s),n=new Mi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=fm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ru(t.h,n),_l(n,s,e)}function $i(t,e){t.ia&&vu(t.ia,function(n,s){Se(e,s,n)}),t.l&&Qg({},function(n,s){Se(e,s,n)})}function fm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?rt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{AI(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function pm(t){t.g||t.u||(t.Z=1,xg(t.Ia,t),t.A=0)}function xu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Di(rt(t.Ia,t),ym(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,gm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Di(rt(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ft(10),$a(this),gm(this))};function Mu(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function gm(t){t.g=new Mi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=gn(t.sa);Se(e,"RID","rpc"),Se(e,"SID",t.I),Se(e,"CI",t.L?"0":"1"),Se(e,"AID",t.T),Se(e,"TYPE","xmlhttp"),$i(t,e),t.o&&t.s&&Pu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=La(gn(e)),n.s=null,n.P=!0,zg(n,t)}$.cb=function(){this.v!=null&&(this.v=null,$a(this),xu(this),ft(19))};function Xo(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function mm(t,e){var n=null;if(t.g==e){Xo(t),Mu(t),t.g=null;var s=2}else if(bl(t.h,e))n=e.D,sm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Pa(),Ye(s,new Vg(s,n)),Ba(t)}else pm(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&NI(t,e)||s==2&&xu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:cs(t,5);break;case 4:cs(t,10);break;case 3:cs(t,6);break;default:cs(t,2)}}}function ym(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function cs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=rt(t.kb,t);n||(n=new ys("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Go(n,"https"),La(n)),SI(n.toString(),s)}else ft(2);t.G=0,t.l&&t.l.va(e),vm(t),dm(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function vm(t){if(t.G=0,t.la=[],t.l){const e=rm(t.h);(e.length!=0||t.i.length!=0)&&(gd(t.la,e),gd(t.la,t.i),t.h.i.length=0,mu(t.i),t.i.length=0),t.l.ua()}}function _m(t,e,n){var s=n instanceof ys?gn(n):new ys(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Qo(s,s.m);else{var r=Y.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ys(null,void 0);s&&Go(i,s),e&&(i.g=e),r&&Qo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Se(s,n,e),Se(s,"VER",t.ma),$i(t,s),s}function wm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ne(new Ui({jb:!0})):new Ne(t.ra),e.Ka(t.H),e}function bm(){}$=bm.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Yo(){if(sr&&!(10<=Number(GT)))throw Error("Environmental error: no available transport.")}Yo.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Ge.call(this),this.g=new hm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!zo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pr(this)}Je(wt,Ge);wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ft(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=_m(t,null,t.V),Ba(t)};wt.prototype.close=function(){Du(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tu(t),t=n);e.i.push(new EI(e.ab++,t)),e.G==3&&Ba(e)};wt.prototype.M=function(){this.g.l=null,delete this.j,Du(this.g),delete this.g,wt.X.M.call(this)};function Em(t){Cu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(Em,Cu);function Tm(){ku.call(this),this.status=1}Je(Tm,ku);function pr(t){this.g=t}Je(pr,bm);pr.prototype.xa=function(){Ye(this.g,"a")};pr.prototype.wa=function(t){Ye(this.g,new Em(t))};pr.prototype.va=function(t){Ye(this.g,new Tm)};pr.prototype.ua=function(){Ye(this.g,"b")};Yo.prototype.createWebChannel=Yo.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Da.NO_ERROR=0;Da.TIMEOUT=8;Da.HTTP_ERROR=6;jg.COMPLETE="complete";Hg.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.Oa;Ne.prototype.getLastErrorCode=Ne.prototype.Ea;Ne.prototype.getStatus=Ne.prototype.aa;Ne.prototype.getResponseJson=Ne.prototype.Sa;Ne.prototype.getResponseText=Ne.prototype.fa;Ne.prototype.send=Ne.prototype.da;Ne.prototype.setWithCredentials=Ne.prototype.Ka;var PI=function(){return new Yo},DI=function(){return Pa()},Tc=Da,xI=jg,MI=Ns,Cd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},LI=Ui,co=Hg,UI=Ne;const kd="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let gr="9.19.0";/**
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
 */const Is=new fu("@firebase/firestore");function Rd(){return Is.logLevel}function B(t,...e){if(Is.logLevel<=pe.DEBUG){const n=e.map(Lu);Is.debug(`Firestore (${gr}): ${t}`,...n)}}function mn(t,...e){if(Is.logLevel<=pe.ERROR){const n=e.map(Lu);Is.error(`Firestore (${gr}): ${t}`,...n)}}function Jo(t,...e){if(Is.logLevel<=pe.WARN){const n=e.map(Lu);Is.warn(`Firestore (${gr}): ${t}`,...n)}}function Lu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Ie(t,e){t||X()}function ne(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Im{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class $I{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BI{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new Im(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new et(e)}}class VI{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class jI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new VI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new HI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function zI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Am{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=zI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function rr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new He(0,0))}static max(){return new Z(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ui{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends ui{construct(e,n,s){return new Ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const KI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends ui{construct(e,n,s){return new st(e,n,s)}static isValidIdentifier(e){return KI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new K(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new K(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new K(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ce.fromString(e))}static fromName(e){return new H(Ce.fromString(e).popFirst(5))}static empty(){return new H(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ce(e.slice()))}}function WI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new Hn(r,H.empty(),e)}function GI(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Hn(Z.min(),H.empty(),-1)}static max(){return new Hn(Z.max(),H.empty(),-1)}}function QI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const XI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==XI)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Uu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Uu.ct=-1;function Va(t){return t==null}function Zo(t){return t===0&&1/t==-1/0}function JI(t){return typeof t=="number"&&Number.isInteger(t)&&!Zo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Qe.RED,this.left=r??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Qe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nd(this.data.getIterator())}getIteratorFrom(e){return new Nd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Nd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new qe(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ZI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ZI("Invalid base64 string: "+r):r}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const e0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=e0.exec(t);if(Ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function Cm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function km(t){const e=t.mapValue.fields.__previous_value__;return Cm(e)?km(e):e}function hi(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class t0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const uo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cm(t)?4:n0(t)?9007199254740991:10:X()}function Jt(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=qn(s.timestampValue),o=qn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ir(s.bytesValue).isEqual(ir(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Le(s.geoPointValue.latitude)===Le(r.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Le(s.integerValue)===Le(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Le(s.doubleValue),o=Le(r.doubleValue);return i===o?Zo(i)===Zo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return rr(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Od(i)!==Od(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Jt(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function fi(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function or(t,e){if(t===e)return 0;const n=As(t),s=As(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Le(r.integerValue||r.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pd(t.timestampValue,e.timestampValue);case 4:return Pd(hi(t),hi(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ir(r),a=ir(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=me(Le(r.latitude),Le(i.latitude));return o!==0?o:me(Le(r.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=or(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===uo.mapValue&&i===uo.mapValue)return 0;if(r===uo.mapValue)return 1;if(i===uo.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const d=or(o[a[u]],c[l[u]]);if(d!==0)return d}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function Pd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=qn(t),s=qn(e),r=me(n.seconds,s.seconds);return r!==0?r:me(n.nanos,s.nanos)}function ar(t){return El(t)}function El(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=qn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ir(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=El(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${El(s.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function Tl(t){return!!t&&"integerValue"in t}function Fu(t){return!!t&&"arrayValue"in t}function Dd(t){return!!t&&"nullValue"in t}function xd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function So(t){return!!t&&"mapValue"in t}function Hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Hr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function n0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!So(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(n)}setAll(e){let n=st.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Hr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());So(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];So(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){mr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new St(Hr(this.value))}}function Rm(t){const e=[];return mr(t.fields,(n,s)=>{const r=new st([n]);if(So(s)){const i=Rm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Lt(e)}/**
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
 */class tt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,Z.min(),Z.min(),Z.min(),St.empty(),0)}static newFoundDocument(e,n,s,r){return new tt(e,1,n,Z.min(),s,r,0)}static newNoDocument(e,n){return new tt(e,2,n,Z.min(),Z.min(),St.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Z.min(),Z.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ea{constructor(e,n){this.position=e,this.inclusive=n}}function Md(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=or(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ld(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qr{constructor(e,n="asc"){this.field=e,this.dir=n}}function s0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Om{}class Be extends Om{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new i0(e,n,s):n==="array-contains"?new c0(e,s):n==="in"?new l0(e,s):n==="not-in"?new u0(e,s):n==="array-contains-any"?new h0(e,s):new Be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new o0(e,s):new a0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(or(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Zt extends Om{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Zt(e,n)}matches(e){return Nm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Nm(t){return t.op==="and"}function Pm(t){return r0(t)&&Nm(t)}function r0(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function Il(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+ar(t.value);if(Pm(t))return t.filters.map(e=>Il(e)).join(",");{const e=t.filters.map(n=>Il(n)).join(",");return`${t.op}(${e})`}}function Dm(t,e){return t instanceof Be?function(n,s){return s instanceof Be&&n.op===s.op&&n.field.isEqual(s.field)&&Jt(n.value,s.value)}(t,e):t instanceof Zt?function(n,s){return s instanceof Zt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Dm(i,s.filters[o]),!0):!1}(t,e):void X()}function xm(t){return t instanceof Be?function(e){return`${e.field.canonicalString()} ${e.op} ${ar(e.value)}`}(t):t instanceof Zt?function(e){return e.op.toString()+" {"+e.getFilters().map(xm).join(" ,")+"}"}(t):"Filter"}class i0 extends Be{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class o0 extends Be{constructor(e,n){super(e,"in",n),this.keys=Mm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a0 extends Be{constructor(e,n){super(e,"not-in",n),this.keys=Mm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Mm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class c0 extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fu(n)&&fi(n.arrayValue,this.value)}}class l0 extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class u0 extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class h0 extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fi(this.value.arrayValue,s))}}/**
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
 */class d0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ud(t,e=null,n=[],s=[],r=null,i=null,o=null){return new d0(t,e,n,s,r,i,o)}function $u(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Il(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ar(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ar(s)).join(",")),e.ft=n}return e.ft}function Bu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!s0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Dm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ld(t.startAt,e.startAt)&&Ld(t.endAt,e.endAt)}function Al(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ja{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function f0(t,e,n,s,r,i,o,a){return new ja(t,e,n,s,r,i,o,a)}function Lm(t){return new ja(t)}function Fd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function g0(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function m0(t){return t.collectionGroup!==null}function Js(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=g0(e),s=p0(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new qr(n)),e.dt.push(new qr(st.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new qr(st.keyField(),i))}}}return e.dt}function yn(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=Ud(e.path,e.collectionGroup,Js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Js(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new qr(i.field,o))}const s=e.endAt?new ea(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ea(e.startAt.position,e.startAt.inclusive):null;e.wt=Ud(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Sl(t,e,n){return new ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return Bu(yn(t),yn(e))&&t.limitType===e.limitType}function Um(t){return`${$u(yn(t))}|lt:${t.limitType}`}function Cl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>xm(s)).join(", ")}]`),Va(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ar(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ar(s)).join(",")),`Target(${n})`}(yn(t))}; limitType=${t.limitType})`}function qa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Js(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Md(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Js(n),s)||n.endAt&&!function(r,i,o){const a=Md(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Js(n),s))}(t,e)}function y0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fm(t){return(e,n)=>{let s=!1;for(const r of Js(t)){const i=v0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function v0(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?or(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
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
 */class yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Sm(this.inner)}size(){return this.innerSize}}/**
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
 */const _0=new ze(H.comparator);function vn(){return _0}const $m=new ze(H.comparator);function Lr(...t){let e=$m;for(const n of t)e=e.insert(n.key,n);return e}function Bm(t){let e=$m;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ls(){return zr()}function Vm(){return zr()}function zr(){return new yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const w0=new ze(H.comparator),b0=new qe(H.comparator);function ce(...t){let e=b0;for(const n of t)e=e.add(n);return e}const E0=new qe(me);function jm(){return E0}/**
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
 */function Hm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zo(e)?"-0":e}}function qm(t){return{integerValue:""+t}}function T0(t,e){return JI(e)?qm(e):Hm(t,e)}/**
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
 */class za{constructor(){this._=void 0}}function I0(t,e,n){return t instanceof ta?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof pi?Km(t,e):t instanceof gi?Wm(t,e):function(s,r){const i=zm(s,r),o=$d(i)+$d(s._t);return Tl(i)&&Tl(s._t)?qm(o):Hm(s.serializer,o)}(t,e)}function A0(t,e,n){return t instanceof pi?Km(t,e):t instanceof gi?Wm(t,e):n}function zm(t,e){return t instanceof na?Tl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ta extends za{}class pi extends za{constructor(e){super(),this.elements=e}}function Km(t,e){const n=Gm(e);for(const s of t.elements)n.some(r=>Jt(r,s))||n.push(s);return{arrayValue:{values:n}}}class gi extends za{constructor(e){super(),this.elements=e}}function Wm(t,e){let n=Gm(e);for(const s of t.elements)n=n.filter(r=>!Jt(r,s));return{arrayValue:{values:n}}}class na extends za{constructor(e,n){super(),this.serializer=e,this._t=n}}function $d(t){return Le(t.integerValue||t.doubleValue)}function Gm(t){return Fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function S0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof pi&&s instanceof pi||n instanceof gi&&s instanceof gi?rr(n.elements,s.elements,Jt):n instanceof na&&s instanceof na?Jt(n._t,s._t):n instanceof ta&&s instanceof ta}(t.transform,e.transform)}class C0{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function Qm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ym(t.key,dn.none()):new ji(t.key,t.data,dn.none());{const n=t.data,s=St.empty();let r=new qe(st.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ps(t.key,s,new Lt(r.toArray()),dn.none())}}function k0(t,e,n){t instanceof ji?function(s,r,i){const o=s.value.clone(),a=Vd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,r,i){if(!Co(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Vd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Xm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Kr(t,e,n,s){return t instanceof ji?function(r,i,o,a){if(!Co(r.precondition,i))return o;const c=r.value.clone(),l=jd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ps?function(r,i,o,a){if(!Co(r.precondition,i))return o;const c=jd(r.fieldTransforms,a,i),l=i.data;return l.setAll(Xm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Co(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function R0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=zm(s.transform,r||null);i!=null&&(n===null&&(n=St.empty()),n.set(s.field,i))}return n||null}function Bd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&rr(n,s,(r,i)=>S0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ji extends Ka{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ps extends Ka{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Vd(t,e,n){const s=new Map;Ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,A0(o,a,n[r]))}return s}function jd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,I0(i,o,e))}return s}class Ym extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class O0 extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class N0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&k0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Kr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Kr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Vm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Qm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&rr(this.mutations,e.mutations,(n,s)=>Bd(n,s))&&rr(this.baseMutations,e.baseMutations,(n,s)=>Bd(n,s))}}class Vu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ie(e.mutations.length===s.length);let r=w0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Vu(e,n,s,r)}}/**
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
 */class P0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class D0{constructor(e){this.count=e}}/**
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
 */var Me,de;function x0(t){switch(t){default:return X();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Jm(t){if(t===void 0)return mn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Me.OK:return I.OK;case Me.CANCELLED:return I.CANCELLED;case Me.UNKNOWN:return I.UNKNOWN;case Me.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Me.INTERNAL:return I.INTERNAL;case Me.UNAVAILABLE:return I.UNAVAILABLE;case Me.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Me.NOT_FOUND:return I.NOT_FOUND;case Me.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Me.ABORTED:return I.ABORTED;case Me.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Me.DATA_LOSS:return I.DATA_LOSS;default:return X()}}(de=Me||(Me={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ju{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ho}static getOrCreateInstance(){return ho===null&&(ho=new ju),ho}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ho=null;/**
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
 */class Wa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Wa(Z.min(),r,jm(),vn(),ce())}}class Hi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Hi(s,n,ce(),ce(),ce())}}/**
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
 */class ko{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Zm{constructor(e,n){this.targetId=e,this.Et=n}}class ey{constructor(e,n,s=at.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Hd{constructor(){this.At=0,this.Rt=zd(),this.vt=at.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ce(),n=ce(),s=ce();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new Hi(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=zd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class M0{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=vn(),this.qt=qd(),this.Ut=new qe(me)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Al(o))if(r===0){const a=new H(o.path);this.Qt(s,a,tt.newNoDocument(a,Z.min()))}else Ie(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=ju.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Al(a.target)){const c=new H(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,tt.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ce();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Wa(e,n,this.Ut,this.Lt,s);return this.Lt=vn(),this.qt=qd(),this.Ut=new qe(me),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Hd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new qe(me),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Hd),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function qd(){return new ze(H.comparator)}function zd(){return new ze(H.comparator)}/**
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
 */const L0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),U0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),F0=(()=>({and:"AND",or:"OR"}))();class $0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ty(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function B0(t,e){return sa(t,e.toTimestamp())}function Kt(t){return Ie(!!t),Z.fromTimestamp(function(e){const n=qn(e);return new He(n.seconds,n.nanos)}(t))}function Hu(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ny(t){const e=Ce.fromString(t);return Ie(oy(e)),e}function kl(t,e){return Hu(t.databaseId,e.path)}function Ic(t,e){const n=ny(e);if(n.get(1)!==t.databaseId.projectId)throw new K(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(sy(n))}function Rl(t,e){return Hu(t.databaseId,e)}function V0(t){const e=ny(t);return e.length===4?Ce.emptyPath():sy(e)}function Ol(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sy(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kd(t,e,n){return{name:kl(t,e),fields:n.value.mapValue.fields}}function j0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ie(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(Ie(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Jm(c.code);return new K(l,c.message||"")}(o);n=new ey(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ic(t,s.document.name),i=Kt(s.document.updateTime),o=s.document.createTime?Kt(s.document.createTime):Z.min(),a=new St({mapValue:{fields:s.document.fields}}),c=tt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new ko(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ic(t,s.document),i=s.readTime?Kt(s.readTime):Z.min(),o=tt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ko([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ic(t,s.document),i=s.removedTargetIds||[];n=new ko([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new D0(r),o=s.targetId;n=new Zm(o,i)}}return n}function H0(t,e){let n;if(e instanceof ji)n={update:Kd(t,e.key,e.value)};else if(e instanceof Ym)n={delete:kl(t,e.key)};else if(e instanceof Ps)n={update:Kd(t,e.key,e.data),updateMask:J0(e.fieldMask)};else{if(!(e instanceof O0))return X();n={verify:kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ta)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof na)return{fieldPath:i.field.canonicalString(),increment:o._t};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:B0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(t,e.precondition)),n}function q0(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Kt(s.updateTime):Kt(r);return i.isEqual(Z.min())&&(i=Kt(r)),new C0(i,s.transformResults||[])}(n,e))):[]}function z0(t,e){return{documents:[Rl(t,e.path)]}}function K0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Rl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return iy(Zt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:qs(u.field),direction:Q0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Va(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function W0(t){let e=V0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=ry(u);return h instanceof Zt&&Pm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new qr(zs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Va(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ea(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ea(d,h)}(n.endAt)),f0(e,r,o,i,a,"F",c,l)}function G0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ry(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=zs(e.unaryFilter.field);return Be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=zs(e.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zs(e.unaryFilter.field);return Be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zs(e.unaryFilter.field);return Be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(e){return Be.create(zs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Zt.create(e.compositeFilter.filters.map(n=>ry(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(t):X()}function Q0(t){return L0[t]}function X0(t){return U0[t]}function Y0(t){return F0[t]}function qs(t){return{fieldPath:t.canonicalString()}}function zs(t){return st.fromServerFormat(t.fieldPath)}function iy(t){return t instanceof Be?function(e){if(e.op==="=="){if(xd(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NAN"}};if(Dd(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xd(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NOT_NAN"}};if(Dd(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(e.field),op:X0(e.op),value:e.value}}}(t):t instanceof Zt?function(e){const n=e.getFilters().map(s=>iy(s));return n.length===1?n[0]:{compositeFilter:{op:Y0(e.op),filters:n}}}(t):X()}function J0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function oy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class vs{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Z0{constructor(e){this.se=e}}function eA(t){const e=W0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sl(e,e.limit,"L"):e}/**
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
 */class tA{constructor(){this.He=new nA}addToCollectionParentIndex(e,n){return this.He.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Hn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class nA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new qe(Ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new qe(Ce.comparator)).toArray()}}/**
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
 */class cr{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new cr(0)}static bn(){return new cr(-1)}}/**
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
 */class sA{constructor(){this.changes=new yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class iA{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Kr(s.mutation,r,Lt.empty(),He.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ce()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ce()){const r=ls();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Lr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ce()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=vn();const o=zr(),a=zr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Ps)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Kr(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new rA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=zr();let r=new ze((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Lt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ce()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Vm();u.forEach(d=>{if(!i.has(d)){const p=Qm(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):m0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(ls());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:Bm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=Lr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Lr();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new ja(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=Lr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Kr(l.mutation,c,Lt.empty(),He.now()),qa(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class oA{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Kt(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:eA(s.bundledQuery),readTime:Kt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class aA{constructor(){this.overlays=new ze(H.comparator),this.ts=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ls();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=ls(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ze((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ls(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ls(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new P0(n,s));let i=this.ts.get(n);i===void 0&&(i=ce(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class qu{constructor(){this.es=new qe(Ke.ns),this.ss=new qe(Ke.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Ke(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Ke(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new H(new Ce([])),s=new Ke(n,e),r=new Ke(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new H(new Ce([])),s=new Ke(n,e),r=new Ke(n,e+1);let i=ce();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return H.comparator(e.key,n.key)||me(e.ds,n.ds)}static rs(e,n){return me(e.ds,n.ds)||H.comparator(e.key,n.key)}}/**
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
 */class cA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new qe(Ke.ns)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new N0(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ke(n,0),r=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new qe(me);return n.forEach(r=>{const i=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),A.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new H(i),0);let a=new qe(me);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),A.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ie(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return A.forEach(n.mutations,r=>{const i=new Ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Ke(n,0),r=this._s.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class lA{constructor(e){this.Ts=e,this.docs=new ze(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=vn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=vn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||QI(GI(u),s)<=0||(r.has(u.key)||qa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){X()}Es(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new uA(this)}getSize(e){return A.resolve(this.size)}}class uA extends sA{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class hA{constructor(e){this.persistence=e,this.As=new yr(n=>$u(n),Bu),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new qu,this.targetCount=0,this.bs=cr.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),A.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new cr(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Sn(n),A.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.vs.containsKey(n))}}/**
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
 */class dA{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Uu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new hA(this),this.indexManager=new tA,this.remoteDocumentCache=function(s){return new lA(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Z0(n),this.xs=new oA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new cA(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new fA(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return A.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class fA extends YI{constructor(e){super(),this.currentSequenceNumber=e}}class zu{constructor(e){this.persistence=e,this.$s=new qu,this.Ms=null}static Fs(e){return new zu(e)}get Bs(){if(this.Ms)return this.Ms;throw X()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),A.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Bs,s=>{const r=H.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return A.or([()=>A.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Ku{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=ce(),r=ce();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ku(e,n.fromCache,s,r)}}/**
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
 */class pA{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Fd(n))return A.resolve(null);let s=yn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Sl(n,null,"F"),s=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ce(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Sl(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return Fd(n)||r.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Rd()<=pe.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cl(n)),this.Fi(e,o,n,WI(r,-1)))})}$i(e,n){let s=new qe(Fm(e));return n.forEach((r,i)=>{qa(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Rd()<=pe.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Cl(n)),this.xi.getDocumentsMatchingQuery(e,n,Hn.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class gA{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new ze(me),this.qi=new yr(i=>$u(i),Bu),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iA(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function mA(t,e,n,s){return new gA(t,e,n,s)}async function ay(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ce();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function yA(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);Ie(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function cy(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function vA(t,e){const n=ne(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(at.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,v,w){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(n.Ds.updateTargetData(i,p))});let c=vn(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(_A(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(Z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function _A(t,e,n){let s=ce(),r=ce();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function wA(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function bA(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new vs(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Nl(t,e,n){const s=ne(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Vi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Wd(t,e,n){const s=ne(t);let r=Z.min(),i=ce();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),h=u.qi.get(l);return h!==void 0?A.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,yn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:ce())).next(a=>(EA(s,y0(e),a),{documents:a,Wi:i})))}function EA(t,e,n){let s=t.Ui.get(e)||Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class Gd{constructor(){this.activeTargetIds=jm()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TA{constructor(){this.Br=new Gd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Gd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IA{qr(e){}shutdown(){}}/**
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
 */class Qd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fo=null;function Ac(){return fo===null?fo=268435456+Math.round(2147483648*Math.random()):fo++,"0x"+fo.toString(16)}/**
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
 */const AA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class SA{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ze="WebChannelConnection";class CA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=Ac(),a=this.ao(e,n);B("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(B("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Jo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+gr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=AA[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=Ac();return new Promise((o,a)=>{const c=new UI;c.setWithCredentials(!0),c.listenOnce(xI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Tc.NO_ERROR:const u=c.getResponseJson();B(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Tc.TIMEOUT:B(Ze,`RPC '${e}' ${i} timed out`),a(new K(I.DEADLINE_EXCEEDED,"Request time out"));break;case Tc.HTTP_ERROR:const h=c.getStatus();if(B(Ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(w)>=0?w:I.UNKNOWN}(p.status);a(new K(m,p.message))}else a(new K(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(I.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{B(Ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);B(Ze,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=Ac(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PI(),a=DI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new LI({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");B(Ze,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new SA({Wr:v=>{d?B(Ze,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(B(Ze,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),B(Ze,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},Hr:()=>u.close()}),m=(v,w,C)=>{v.listen(w,O=>{try{C(O)}catch(D){setTimeout(()=>{throw D},0)}})};return m(u,co.EventType.OPEN,()=>{d||B(Ze,`RPC '${e}' stream ${r} transport opened.`)}),m(u,co.EventType.CLOSE,()=>{d||(d=!0,B(Ze,`RPC '${e}' stream ${r} transport closed`),p.so())}),m(u,co.EventType.ERROR,v=>{d||(d=!0,Jo(Ze,`RPC '${e}' stream ${r} transport errored:`,v),p.so(new K(I.UNAVAILABLE,"The operation could not be completed")))}),m(u,co.EventType.MESSAGE,v=>{var w;if(!d){const C=v.data[0];Ie(!!C);const O=C,D=O.error||((w=O[0])===null||w===void 0?void 0:w.error);if(D){B(Ze,`RPC '${e}' stream ${r} received error:`,D);const P=D.status;let q=function(Te){const z=Me[Te];if(z!==void 0)return Jm(z)}(P),ue=D.message;q===void 0&&(q=I.INTERNAL,ue="Unknown error status: "+P+" with message "+D.message),d=!0,p.so(new K(q,ue)),u.close()}else B(Ze,`RPC '${e}' stream ${r} received:`,C),p.io(C)}}),m(a,MI.STAT_EVENT,v=>{v.stat===Cd.PROXY?B(Ze,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Cd.NOPROXY&&B(Ze,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function Sc(){return typeof document<"u"?document:null}/**
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
 */function Ga(t){return new $0(t,!0)}/**
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
 */class ly{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class uy{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new ly(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new K(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kA extends uy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=j0(this.serializer,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Kt(i.readTime):Z.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Ol(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Al(a)?{documents:z0(r,a)}:{query:K0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ty(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=sa(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=G0(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Ol(this.serializer),n.removeTarget=e,this.Fo(n)}}class RA extends uy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=q0(e.writeResults,e.commitTime),s=Kt(e.commitTime);return this.listener.Zo(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Ol(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>H0(this.serializer,s))};this.Fo(n)}}/**
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
 */class OA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new K(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(I.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(I.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class NA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(mn(n),this.ru=!1):B("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class PA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Ds(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.du.add(4),await qi(c),c.mu.set("Unknown"),c.du.delete(4),await Qa(c)}(this))})}),this.mu=new NA(s,r)}}async function Qa(t){if(Ds(t))for(const e of t.wu)await e(!0)}async function qi(t){for(const e of t.wu)await e(!1)}function hy(t,e){const n=ne(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Qu(n)?Gu(n):vr(n).No()&&Wu(n,e))}function dy(t,e){const n=ne(t),s=vr(n);n.fu.delete(e),s.No()&&fy(n,e),n.fu.size===0&&(s.No()?s.$o():Ds(n)&&n.mu.set("Unknown"))}function Wu(t,e){t.gu.Ot(e.targetId),vr(t).jo(e)}function fy(t,e){t.gu.Ot(e),vr(t).Wo(e)}function Gu(t){t.gu=new M0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),vr(t).start(),t.mu.ou()}function Qu(t){return Ds(t)&&!vr(t).xo()&&t.fu.size>0}function Ds(t){return ne(t).du.size===0}function py(t){t.gu=void 0}async function DA(t){t.fu.forEach((e,n)=>{Wu(t,e)})}async function xA(t,e){py(t),Qu(t)?(t.mu.au(e),Gu(t)):t.mu.set("Unknown")}async function MA(t,e,n){if(t.mu.set("Online"),e instanceof ey&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ra(t,s)}else if(e instanceof ko?t.gu.Kt(e):e instanceof Zm?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const s=await cy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),fy(r,a);const l=new vs(c.target,a,1,c.sequenceNumber);Wu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await ra(t,s)}}async function ra(t,e,n){if(!Vi(e))throw e;t.du.add(1),await qi(t),t.mu.set("Offline"),n||(n=()=>cy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Qa(t)})}function gy(t,e){return e().catch(n=>ra(t,n,e))}async function Xa(t){const e=ne(t),n=zn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;LA(e);)try{const r=await wA(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,UA(e,r)}catch(r){await ra(e,r)}my(e)&&yy(e)}function LA(t){return Ds(t)&&t.lu.length<10}function UA(t,e){t.lu.push(e);const n=zn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function my(t){return Ds(t)&&!zn(t).xo()&&t.lu.length>0}function yy(t){zn(t).start()}async function FA(t){zn(t).tu()}async function $A(t){const e=zn(t);for(const n of t.lu)e.Yo(n.mutations)}async function BA(t,e,n){const s=t.lu.shift(),r=Vu.from(s,e,n);await gy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Xa(t)}async function VA(t,e){e&&zn(t).Jo&&await async function(n,s){if(r=s.code,x0(r)&&r!==I.ABORTED){const i=n.lu.shift();zn(n).Oo(),await gy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xa(n)}var r}(t,e),my(t)&&yy(t)}async function Xd(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=Ds(n);n.du.add(3),await qi(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Qa(n)}async function jA(t,e){const n=ne(t);e?(n.du.delete(2),await Qa(n)):e||(n.du.add(2),await qi(n),n.mu.set("Unknown"))}function vr(t){return t.yu||(t.yu=function(e,n,s){const r=ne(e);return r.nu(),new kA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:DA.bind(null,t),Zr:xA.bind(null,t),zo:MA.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Qu(t)?Gu(t):t.mu.set("Unknown")):(await t.yu.stop(),py(t))})),t.yu}function zn(t){return t.pu||(t.pu=function(e,n,s){const r=ne(e);return r.nu(),new RA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:FA.bind(null,t),Zr:VA.bind(null,t),Xo:$A.bind(null,t),Zo:BA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Xa(t)):(await t.pu.stop(),t.lu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Xu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Xu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(t,e){if(mn("AsyncQueue",`${e}: ${t}`),Vi(t))return new K(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Lr(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Zs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Yd{constructor(){this.Iu=new ze(H.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):X():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class lr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new lr(e,n,Zs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class HA{constructor(){this.Eu=void 0,this.listeners=[]}}class qA{constructor(){this.queries=new yr(e=>Um(e),Ha),this.onlineState="Unknown",this.Au=new Set}}async function zA(t,e){const n=ne(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new HA),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Yu(o,`Initialization of query '${Cl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Ju(n)}async function KA(t,e){const n=ne(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function WA(t,e){const n=ne(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Ju(n)}function GA(t,e,n){const s=ne(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ju(t){t.Au.forEach(e=>{e.next()})}class QA{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new lr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class vy{constructor(e){this.key=e}}class _y{constructor(e){this.key=e}}class XA{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ce(),this.mutatedKeys=ce(),this.Ku=Fm(e),this.Gu=new Zs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Yd,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=qa(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?m!==v&&(s.track({type:3,doc:p}),w=!0):this.Wu(d,p)||(s.track({type:2,doc:p}),w=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),w=!0):d&&!p&&(s.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return p(h)-p(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new lr(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Yd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ce(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new _y(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new vy(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ce();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return lr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class YA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class JA{constructor(e){this.key=e,this.ec=!1}}class ZA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new yr(a=>Um(a),Ha),this.ic=new Map,this.rc=new Set,this.oc=new ze(H.comparator),this.uc=new Map,this.cc=new qu,this.ac={},this.hc=new Map,this.lc=cr.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function eS(t,e){const n=uS(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await bA(n.localStore,yn(e));n.isPrimaryClient&&hy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await tS(n,e,s,a==="current",o.resumeToken)}return r}async function tS(t,e,n,s,r){t.dc=(h,d,p)=>async function(m,v,w,C){let O=v.view.zu(w);O.Mi&&(O=await Wd(m.localStore,v.query,!1).then(({documents:q})=>v.view.zu(q,O)));const D=C&&C.targetChanges.get(v.targetId),P=v.view.applyChanges(O,m.isPrimaryClient,D);return Zd(m,v.targetId,P.Yu),P.snapshot}(t,h,d,p);const i=await Wd(t.localStore,e,!0),o=new XA(e,i.Wi),a=o.zu(i.documents),c=Hi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Zd(t,n,l.Yu);const u=new YA(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function nS(t,e){const n=ne(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Ha(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Nl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),dy(n.remoteStore,s.targetId),Pl(n,s.targetId)}).catch(Bi)):(Pl(n,s.targetId),await Nl(n.localStore,s.targetId,!0))}async function sS(t,e,n){const s=hS(t);try{const r=await function(i,o){const a=ne(i),c=He.now(),l=o.reduce((d,p)=>d.add(p.key),ce());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=vn(),m=ce();return a.Ki.getEntries(d,l).next(v=>{p=v,p.forEach((w,C)=>{C.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const w=[];for(const C of o){const O=R0(C,u.get(C.key).overlayedDocument);O!=null&&w.push(new Ps(C.key,O,Rm(O.value.mapValue),dn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Bm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new ze(me)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await zi(s,r.changes),await Xa(s.remoteStore)}catch(r){const i=Yu(r,"Failed to persist write");n.reject(i)}}async function wy(t,e){const n=ne(t);try{const s=await vA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Ie(o.ec):r.removedDocuments.size>0&&(Ie(o.ec),o.ec=!1))}),await zi(n,s,e)}catch(s){await Bi(s)}}function Jd(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ne(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Ju(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rS(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new ze(H.comparator);o=o.insert(i,tt.newNoDocument(i,Z.min()));const a=ce().add(i),c=new Wa(Z.min(),new Map,new qe(me),o,a);await wy(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Zu(s)}else await Nl(s.localStore,e,!1).then(()=>Pl(s,e,n)).catch(Bi)}async function iS(t,e){const n=ne(t),s=e.batch.batchId;try{const r=await yA(n.localStore,e);Ey(n,s,null),by(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await zi(n,r)}catch(r){await Bi(r)}}async function oS(t,e,n){const s=ne(t);try{const r=await function(i,o){const a=ne(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Ey(s,e,n),by(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await zi(s,r)}catch(r){await Bi(r)}}function by(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Ey(t,e,n){const s=ne(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Pl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Ty(t,s)})}function Ty(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(dy(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Zu(t))}function Zd(t,e,n){for(const s of n)s instanceof vy?(t.cc.addReference(s.key,e),aS(t,s)):s instanceof _y?(B("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Ty(t,s.key)):X()}function aS(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.rc.add(s),Zu(t))}function Zu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new H(Ce.fromString(e)),s=t.lc.next();t.uc.set(s,new JA(n)),t.oc=t.oc.insert(n,s),hy(t.remoteStore,new vs(yn(Lm(n.path)),s,2,Uu.ct))}}async function zi(t,e,n){const s=ne(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ku.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Vi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>A.forEach(h.Si,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Vi(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Li.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Li=l.Li.insert(h,m)}}}(s.localStore,i))}async function cS(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await ay(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new K(I.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zi(n,s.Qi)}}function lS(t,e){const n=ne(t),s=n.uc.get(e);if(s&&s.ec)return ce().add(s.key);{let r=ce();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function uS(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rS.bind(null,e),e.nc.zo=WA.bind(null,e.eventManager),e.nc.wc=GA.bind(null,e.eventManager),e}function hS(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oS.bind(null,e),e}class ef{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mA(this.persistence,new pA,e.initialUser,this.serializer)}createPersistence(e){return new dA(zu.Fs,this.serializer)}createSharedClientState(e){return new TA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cS.bind(null,this.syncEngine),await jA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qA}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new CA(r));var r;return function(i,o,a,c){return new OA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Jd(this.syncEngine,a,0),o=Qd.D()?new Qd:new IA,new PA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new ZA(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);B("RemoteStore","RemoteStore shutting down."),n.du.add(5),await qi(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class fS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class pS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=Am.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ay(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mS(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Xd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xd(e.remoteStore,i)),t._onlineComponents=e}function gS(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!gS(n))throw n;Jo("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new ef)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Cc(t,new ef);return t._offlineComponents}async function Iy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await tf(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await tf(t,new dS))),t._onlineComponents}function yS(t){return Iy(t).then(e=>e.syncEngine)}async function vS(t){const e=await Iy(t),n=e.eventManager;return n.onListen=eS.bind(null,e.syncEngine),n.onUnlisten=nS.bind(null,e.syncEngine),n}function _S(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new fS({next:h=>{i.enqueueAndForget(()=>KA(r,u)),h.fromCache&&a.source==="server"?c.reject(new K(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new QA(o,l,{includeMetadataChanges:!0,xu:!0});return zA(r,u)}(await vS(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const nf=new Map;/**
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
 */function Ay(t,e,n){if(!n)throw new K(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wS(t,e,n,s){if(e===!0&&s===!0)throw new K(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sf(t){if(!H.isDocumentKey(t))throw new K(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rf(t){if(H.isDocumentKey(t))throw new K(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function eh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eh(t);throw new K(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class of{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,wS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ya{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new FI;switch(n.type){case"firstParty":return new jI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nf.get(e);n&&(B("ComponentProvider","Removing Datastore"),nf.delete(e),n.terminate())}(this),Promise.resolve()}}function bS(t,e,n,s={}){var r;const i=(t=mi(t,Ya))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Jo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=et.MOCK_USER;else{o=mg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new K(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}t._authCredentials=new $I(new Im(o,a))}}/**
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
 */class Rt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Ja{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ja(this.firestore,e,this._query)}}class Fn extends Ja{constructor(e,n,s){super(e,n,Lm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new H(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function vP(t,e,...n){if(t=Ue(t),Ay("collection","path",e),t instanceof Ya){const s=Ce.fromString(e,...n);return rf(s),new Fn(t,null,s)}{if(!(t instanceof Rt||t instanceof Fn))throw new K(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return rf(s),new Fn(t.firestore,null,s)}}function _P(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Am.A()),Ay("doc","path",e),t instanceof Ya){const s=Ce.fromString(e,...n);return sf(s),new Rt(t,null,new H(s))}{if(!(t instanceof Rt||t instanceof Fn))throw new K(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return sf(s),new Rt(t.firestore,t instanceof Fn?t.converter:null,new H(s))}}/**
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
 */class ES{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new ly(this,"async_queue_retry"),this.qc=()=>{const n=Sc();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Un;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Vi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw mn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Xu.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&X()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class th extends Ya{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new ES,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cy(this),this._firestoreClient.terminate()}}function wP(t,e){const n=typeof t=="object"?t:Aa(),s=typeof t=="string"?t:e||"(default)",r=Oi(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=du("firestore");i&&bS(r,...i)}return r}function Sy(t){return t._firestoreClient||Cy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cy(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new t0(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new pS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(at.fromBase64String(e))}catch(n){throw new K(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ky{constructor(e){this._methodName=e}}/**
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
 */class sh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const TS=/^__.*__$/;class IS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new ji(e,this.data,n,this.fieldTransforms)}}function Ry(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class rh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new rh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ia(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Ry(this.Yc)&&TS.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class AS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ga(e)}ua(e,n,s,r=!1){return new rh({Yc:e,methodName:n,oa:s,path:st.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function SS(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new AS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CS(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);Dy("Data must be an object, but it was:",o,s);const a=Ny(s,o);let c,l;if(i.merge)c=new Lt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=kS(e,h,n);if(!o.contains(d))throw new K(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);OS(u,d)||u.push(d)}c=new Lt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new IS(new St(a),c,l)}function Oy(t,e){if(Py(t=Ue(t)))return Dy("Unsupported field value:",e,t),Ny(t,e);if(t instanceof ky)return function(n,s){if(!Ry(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Oy(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return T0(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=He.fromDate(n);return{timestampValue:sa(s.serializer,r)}}if(n instanceof He){const r=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sa(s.serializer,r)}}if(n instanceof sh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ur)return{bytesValue:ty(s.serializer,n._byteString)};if(n instanceof Rt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${eh(n)}`)}(t,e)}function Ny(t,e){const n={};return Sm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,(s,r)=>{const i=Oy(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Py(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof sh||t instanceof ur||t instanceof Rt||t instanceof ky)}function Dy(t,e,n){if(!Py(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=eh(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function kS(t,e,n){if((e=Ue(e))instanceof nh)return e._internalPath;if(typeof e=="string")return xy(t,e);throw ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const RS=new RegExp("[~\\*/\\[\\]]");function xy(t,e,n){if(e.search(RS)>=0)throw ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nh(...e.split("."))._internalPath}catch{throw ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ia(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new K(I.INVALID_ARGUMENT,a+t+c)}function OS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class My{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ly("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NS extends My{data(){return super.data()}}function Ly(t,e){return typeof e=="string"?xy(t,e):e instanceof nh?e._internalPath:e._delegate._internalPath}/**
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
 */function PS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DS{convertValue(e,n="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const s={};return mr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new sh(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=km(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=qn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ce.fromString(e);Ie(oy(s));const r=new di(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function xS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class po{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class MS extends My{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ly("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ro extends MS{data(e={}){return super.data(e)}}class LS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new po(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ro(this._firestore,this._userDataWriter,s.key,s,new po(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new po(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new po(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:US(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function US(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class FS extends DS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function bP(t){t=mi(t,Ja);const e=mi(t.firestore,th),n=Sy(e),s=new FS(e);return PS(t._query),_S(n,t._query).then(r=>new LS(e,s,t,r))}function EP(t,e,n){t=mi(t,Rt);const s=mi(t.firestore,th),r=xS(t.converter,e,n);return $S(s,[CS(SS(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,dn.none())])}function $S(t,e){return function(n,s){const r=new Un;return n.asyncQueue.enqueueAndForget(async()=>sS(await yS(n),s,r)),r.promise}(Sy(t),e)}(function(t,e=!0){(function(n){gr=n})(dr),jn(new pn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new th(new BI(n.getProvider("auth-internal")),new qI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),kt(kd,"3.10.0",t),kt(kd,"3.10.0","esm2017")})();const BS={props:{isOpen:Boolean},methods:{toggleSideBar(){document.body.style.backgroundColor="#5CDB95",this.$emit("close")}},mounted(){document.body.style.backgroundColor="#8EE4AF"}},VS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAABpCAYAAAD88JerAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOzSURBVHgB7d0xUttAFMbxtX0AYk5gYOiTG0BHSU6QpEuqhBMAHbdInQpShc7QpYNcAKtMZ6dLA+S9jJXZIV4SGdu77+n/m9HYlhlg9aTdD0lrQgAAAAAAAAAAAAAAAAAAAAAAACs3GAyebW9vPw8tVELbuyGTXq93ent7e7W5uTmSDTEILaFt7XQ6V9r2jY2NYcgkW+Hv7+/rPX7Q7XaHsj3cH/3aRin6UJaBvpbHbG3OVvi7u7uD6KUWX4/+D8Epadt7bWNddCXPD0ImvZDJZDK5Xltb+yxP92QDPJuu3uv3+2E8Hl8GR6Toh/JwEq2qZMffHY1G5yGTTshsOuYN4yNBhoEzWd5UVTUJhmmIk3Z9lGU/Wv276NK2KmSUvfCq5A00r9J36GxdfUy6/Z+yfJJuXnfEnelq3Rn2ZTi4lPe+B0OmIe5LXHRxLF37O21rKEARha/J2H4hxf8hT/emq7T4b3WdvPc1GKAhTn7nsyi3qIObm5uTUJCiCq+0wFZD3yMh7iwUpogxfhZLoc9iRim28MrCBrX6V0lxXX2s9NBnIcSlFF34Womhz0qISzFReFVS6LMU4lKKHuNnyTmmejrRZK7wKkcBvJ1aNtPVx1Yd+iyHuBSTha+tIvRZD3Eppguvlhn6PIS4FJNj/CyLHIM9Xi18yE3h1SIK5vn+gJj5rj721NDnMcSluCp8bZ7Q5zXEpbgsvGoS+jyHuBRXY/wsj43Z+tx7iEtxX3iVCn1S/OA9xKW0ovA16dKP5OEw8faxjOdHoSVaVXil05bkKN+J18lRfiHj+W5oEbfhbhYNcVL01w/Xa3fvcSLHYxjjWzrGZ5s7tyr17NS46FpgSe4v5FGXP3+y6dfo/LY2zN513dX/60yct4kcTbgtfJMzcR4mcjTlsvDznImzPJFjHlyd+/t7tOLqHNfjZ38v99fjXXT1i76c2obQZ77wy7yc6jn0mS78Ki6neg193Ff//z/TVehjJk2zn+0m9Jnq6nPfE+cp9JkpfEn3xHkIfSYKX+I9cdZDH5+I8URWQx+fgbMAFkNfkV29tYkNFkNfcYW3PLHBUugrqvAeJjZYCX18lu2SlJ5R+PTqJSp5h87a1VsLcU2VHPqyFX5ra+uVbIBziyGuqVToW19fr+S9byGDbF29BLmxPNRF1+7vpfR+18GxaQ93GvVwE9nR+yGDnP+MqC5yPea5LrrSNkq7d2Wp9HW0DdpFjwANQKGF2tx2AAAAAAAAAAAAAAAAAAAAAABy+wUwxtVsM5kDSQAAAABJRU5ErkJggg==",ih="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAABCAYAAACFU4Z4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAdSURBVHgB7cAxAQAABAAwUgmog7qUcG5Z0xsAvDlc9QJR30v6OAAAAABJRU5ErkJggg==";const jS={class:"row"},HS=We("div",{class:"content"},[We("p",{class:"webname"},"CLOSET SNAP")],-1),qS={class:"sidebar-image-container"},zS={class:"router-links"},KS=We("div",{class:"separator"},[We("img",{src:ih})],-1),WS=We("div",{class:"separator"},[We("img",{src:ih})],-1),GS=We("div",{class:"separator"},[We("img",{src:ih})],-1);function QS(t,e,n,s,r,i){const o=Qc("router-link");return Vr(),nl("div",{class:Ei(["sidebar",{"sidebar-open":n.isOpen}])},[We("div",jS,[HS,We("div",qS,[We("img",{class:"sidebar-image",onClick:e[0]||(e[0]=(...a)=>i.toggleSideBar&&i.toggleSideBar(...a)),src:VS})])]),We("div",zS,[je(o,{class:"custom-link",onClick:i.toggleSideBar,to:"/"},{default:Or(()=>[Nr("Home")]),_:1},8,["onClick"]),KS,je(o,{class:"custom-link",onClick:i.toggleSideBar,to:"/About"},{default:Or(()=>[Nr("About")]),_:1},8,["onClick"]),WS,je(o,{class:"custom-link",onClick:i.toggleSideBar,to:"Closet"},{default:Or(()=>[Nr("My Closet")]),_:1},8,["onClick"]),GS,je(o,{class:"custom-link",onClick:i.toggleSideBar,to:"/Account"},{default:Or(()=>[Nr("Account")]),_:1},8,["onClick"])])],2)}const XS=hu(BS,[["render",QS],["__file","/home/dave/Documents/VueFleet/vue-project/src/components/overlay.vue"]]),YS={components:{Header:aE,Sidebar:XS},data(){return{sidebarOpen:!1}},methods:{toggleSidebar(){this.sidebarOpen=!this.sidebarOpen},closeSidebar(){this.sidebarOpen=!1}}},JS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABySURBVHgB7dixCcQwEATAlSpRae7s+cLEt/IOjEMbDiMwzOSXLGxwmwAAAAAA8JCWojHG1nsfeYHW2m/O+U1BKaAjnE9eZA9pq4TUwyUVAwAAWM8vdnebAnMHJxUDAABYzy92d5sCcwcnFQMAAAAAYJU/GgMtEOo8VigAAAAASUVORK5CYII=",ZS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASCSURBVHgB7Zq/dtMwFMZvEvYmGxtOTwc2ysiEOzK1b9B0ZII+QZONreEJkm50ot3Ymm5sTeee05gnSNjo0JbvC5IrcgJYtqW4HP3O8bGsxP8+X+nqXkkkEAgEAoFAIBAIBAK+qckKiaKoWa/X39Vqtfj+/j5ilfpphrox6k7u7u5OEyArYiUCQZio0WgMIECc8ZQhhOqtQqiGeGZ9fZ0W8wnF5xanbeKcTqvVuplOp1/FI3XxCMQ5wK6PranrYEUjWMcetvb19XWNG8ovWccmZpzOcw7VNbzhrYnRcuSXOJqEIqDVjP52HpsjrOcMW2RU70PIvnjAi0B8SXTGF6IsB5bBDngL4swynt9UIm2qqhmtzEef5KWJ4cW68tCsEhtx5ifgvzwHW6KqKNhAPODcgpT1TPQx+5q8Xx6XinGtM+NaLRuh8+DcgvBCO7oMCyg0pmF/xU7duPZ7cYxzgdAUttOb1eufpSAQ6MgovxbHOBcIL6E7Vrm9vb2U4ox0YcGzOcFHJ52OedBExlKQhSYaiWO8DhQfIz6aWKLL9GhSEFxi0zh06sGIDwtKdAEBaizFSQXigFMc48OLnesyxi27UhDTK6J8Ko5xLhBESWMm5n042JOcqLhsx7j2iTjGuUAqTBilN6zXB4ytxBIdjxlVw/8mFoNAe/LQoc6jcxuRjGA1UlUMVnviAS8CqS+dvhCjckb3WbzaxsZGjP9fGJE88ZZd9JpyRU6oi91vCS+8OPuREwh2eXV1NfdKKiUbo7i7JC3bQy6oK57wnpOGSAwwKZJtP8Qm2vOVKNN4z0kzp7y2tnaMYmuh2fwRdvLY3kwmky/imVVP+zBXtI2X31Fi6Yxjgl3CMRSHCa5zPoFAYGV4yUnTZTNxhj7lmUqgNcXeixH2S0z6X3JshATcuevxkBOBFubcY3HLGPfpuxKrVIG0MChyrJPHQopAT9eH1zsqU6jSBGJIgK84WJInZrDKr8yVGt9wzNHyzNZ1q9gtwsaP8EINDeIlf+WM7T6uX0qkX4pAar68a9ZxcKdEOXI1jlGiUaiDJR+mi1F34YC2sEBLxJmpOXfnuRoTiNVZIlRhkQqFGmpBwgd9rEKCV2XMXtgym83GzWaTGUZG/09Vddxqtb4XWTKT24IWp5Q5oYdYqSMVoN1uDyGSTu8WWuiQOx+Esc2hccixifNp4KzwWYyEfqGFDrksiB4LX8VcRNBOEj8JrKxwekgtuZmDZ9z611qkZeSyILjzjnE4rJo4hP2gOY9vLqKwIW8TSxcN0I1LRYFAQ+Mw15STdRNbMN0EbrQtFQaedipqVJ+nK8hjQebMZhmrNZxiTjnlmdm1FgjWkwoE7zCSimPO7JpLcbJiLRBu+EKXYbLeB4S2MD2iy2o1vxXWAuEmZpRe+VwxPG76Ec2Pm5VCE4dMuEvFwTOm3stcipOVJ2IP4x3dlrtqMvBRwEWkYom1BXEaxse6nLLhM8PDW086WkfziJp/IGo+Rnu+YaeHve/MoRVsVnjGj9i/5bNLIBAIBAKBQCAQCAQqz091jj9GumMtBQAAAABJRU5ErkJggg==";const eC={key:0},tC=We("p",{class:"webname"},"CLOSET SNAP",-1),nC=We("img",{class:"menubar user",src:ZS},null,-1);function sC(t,e,n,s,r,i){const o=Qc("router-view"),a=Qc("Sidebar");return Vr(),nl(It,null,[We("div",{class:Ei(["app-nav-bar",{"sidebar-open":r.sidebarOpen}])},[r.sidebarOpen?Qh("v-if",!0):(Vr(),nl("header",eC,[We("img",{id:"menubar",class:"menubar",onClick:e[0]||(e[0]=(...c)=>i.toggleSidebar&&i.toggleSidebar(...c)),src:JS}),tC,nC])),je(o)],2),r.sidebarOpen?(Vr(),sg(a,{key:0,onClose:i.closeSidebar},null,8,["onClose"])):Qh("v-if",!0)],64)}const rC=hu(YS,[["render",sC],["__file","/home/dave/Documents/VueFleet/vue-project/src/App.vue"]]);function iC(){return Uy().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Uy(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const oC=typeof Proxy=="function",aC="devtools-plugin:setup",cC="plugin:settings:set";let Fs,Dl;function lC(){var t;return Fs!==void 0||(typeof window<"u"&&window.performance?(Fs=!0,Dl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Fs=!0,Dl=global.perf_hooks.performance):Fs=!1),Fs}function uC(){return lC()?Dl.now():Date.now()}class hC{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return uC()}},n&&n.on(cC,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function dC(t,e){const n=t,s=Uy(),r=iC(),i=oC&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(aC,t,e);else{const o=i?new hC(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const on=typeof window<"u";function fC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function kc(t,e){const n={};for(const s in e){const r=e[s];n[s]=bt(r)?r.map(t):t(r)}return n}const Wr=()=>{},bt=Array.isArray;function fe(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const pC=/\/$/,gC=t=>t.replace(pC,"");function Rc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=vC(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function mC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function af(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cf(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Kn(e.matched[s],n.matched[r])&&Fy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yC(t[n],e[n]))return!1;return!0}function yC(t,e){return bt(t)?lf(t,e):bt(e)?lf(e,t):t===e}function lf(t,e){return bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function vC(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var yi;(function(t){t.pop="pop",t.push="push"})(yi||(yi={}));var Gr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gr||(Gr={}));function _C(t){if(!t)if(on){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gC(t)}const wC=/^[^#]+#/;function bC(t,e){return t.replace(wC,"#")+e}function EC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Za=()=>({left:window.pageXOffset,top:window.pageYOffset});function TC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!s||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(s&&i){fe(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{fe(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){fe(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=EC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uf(t,e){return(history.state?history.state.position-e:-1)+t}const xl=new Map;function IC(t,e){xl.set(t,e)}function AC(t){const e=xl.get(t);return xl.delete(t),e}let SC=()=>location.protocol+"//"+location.host;function $y(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),af(c,"")}return af(n,t)+s+r}function CC(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=$y(t,location),m=n.value,v=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}w=v?d.position-v.position:0}else s(p);r.forEach(C=>{C(n.value,m,{delta:w,type:yi.pop,direction:w?w>0?Gr.forward:Gr.back:Gr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:Za()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function hf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Za():null}}function kC(t){const{history:e,location:n}=window,s={value:$y(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:SC()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){fe("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ge({},e.state,hf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ge({},r.value,e.state,{forward:c,scroll:Za()});e.state||fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=ge({},hf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function RC(t){t=_C(t);const e=kC(t),n=CC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:bC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function OC(t){return typeof t=="string"||t&&typeof t=="object"}function By(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vy=Symbol("navigation failure");var df;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(df||(df={}));const NC={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${DC(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function hr(t,e){return ge(new Error(NC[t](e)),{type:t,[Vy]:!0},e)}function nn(t,e){return t instanceof Error&&Vy in t&&(e==null||!!(t.type&e))}const PC=["params","query","hash"];function DC(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of PC)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const ff="[^/]+?",xC={sensitive:!1,strict:!1,start:!0,end:!0},MC=/[.+*?^${}()[\]/\\]/g;function LC(t,e){const n=ge({},xC,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(MC,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:v,optional:w,regexp:C}=d;i.push({name:m,repeatable:v,optional:w});const O=C||ff;if(O!==ff){p+=10;try{new RegExp(`(${O})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+P.message)}}let D=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(D=w&&l.length<2?`(?:/${D})`:"/"+D),w&&(D+="?"),r+=D,p+=20,w&&(p+=-8),v&&(p+=-20),O===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:w}=p,C=m in l?l[m]:"";if(bt(C)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=bt(C)?C.join("/"):C;if(!O)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function UC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function FC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=UC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(pf(s))return 1;if(pf(r))return-1}return r.length-s.length}function pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $C={type:0,value:""},BC=/[a-zA-Z0-9_]/;function VC(t){if(!t)return[[]];if(t==="/")return[[$C]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:BC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function jC(t,e,n){const s=LC(VC(t.path),n);{const i=new Set;for(const o of s.keys)i.has(o.name)&&fe(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function HC(t,e){const n=[],s=new Map;e=yf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,m=qC(u);GC(m,h),m.aliasOf=d&&d.record;const v=yf(e,u),w=[m];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of D)w.push(ge({},m,{components:d?d.record.components:m.components,path:P,aliasOf:d?d.record:m}))}let C,O;for(const D of w){const{path:P}=D;if(h&&P[0]!=="/"){const q=h.record.path,ue=q[q.length-1]==="/"?"":"/";D.path=h.record.path+(P&&ue+P)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(C=jC(D,h,v),h&&P[0]==="/"&&QC(C,h),d?(d.alias.push(C),WC(d,C)):(O=O||C,O!==C&&O.alias.push(C),p&&u.name&&!mf(C)&&o(u.name)),m.children){const q=m.children;for(let ue=0;ue<q.length;ue++)i(q[ue],C,d&&d.children[ue])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return O?()=>{o(O)}:Wr}function o(u){if(By(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&FC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!jy(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!mf(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},m,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw hr(1,{location:u});{const O=Object.keys(u.params||{}).filter(D=>!d.keys.find(P=>P.name===D));O.length&&fe(`Discarded invalid param(s) "${O.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=d.record.name,p=ge(gf(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&gf(u.params,d.keys.map(O=>O.name))),m=d.stringify(p)}else if("path"in u)m=u.path,m.startsWith("/")||fe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),d=n.find(O=>O.re.test(m)),d&&(p=d.parse(m),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw hr(1,{location:u,currentLocation:h});v=d.record.name,p=ge({},h.params,u.params),m=d.stringify(p)}const w=[];let C=d;for(;C;)w.unshift(C.record),C=C.parent;return{name:v,path:m,params:p,matched:w,meta:KC(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function gf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function qC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function mf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KC(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function yf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ml(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function WC(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(Ml.bind(null,n)))return fe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(Ml.bind(null,n)))return fe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function GC(t,e){e&&e.record.name&&!t.name&&!t.path&&fe(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function QC(t,e){for(const n of e.keys)if(!t.keys.find(Ml.bind(null,n)))return fe(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function jy(t,e){return e.children.some(n=>n===t||jy(t,n))}const Hy=/#/g,XC=/&/g,YC=/\//g,JC=/=/g,ZC=/\?/g,qy=/\+/g,ek=/%5B/g,tk=/%5D/g,zy=/%5E/g,nk=/%60/g,Ky=/%7B/g,sk=/%7C/g,Wy=/%7D/g,rk=/%20/g;function oh(t){return encodeURI(""+t).replace(sk,"|").replace(ek,"[").replace(tk,"]")}function ik(t){return oh(t).replace(Ky,"{").replace(Wy,"}").replace(zy,"^")}function Ll(t){return oh(t).replace(qy,"%2B").replace(rk,"+").replace(Hy,"%23").replace(XC,"%26").replace(nk,"`").replace(Ky,"{").replace(Wy,"}").replace(zy,"^")}function ok(t){return Ll(t).replace(JC,"%3D")}function ak(t){return oh(t).replace(Hy,"%23").replace(ZC,"%3F")}function ck(t){return t==null?"":ak(t).replace(YC,"%2F")}function vi(t){try{return decodeURIComponent(""+t)}catch{fe(`Error decoding "${t}". Using original value`)}return""+t}function lk(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(qy," "),o=i.indexOf("="),a=vi(o<0?i:i.slice(0,o)),c=o<0?null:vi(i.slice(o+1));if(a in e){let l=e[a];bt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function vf(t){let e="";for(let n in t){const s=t[n];if(n=ok(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bt(s)?s.map(i=>i&&Ll(i)):[s&&Ll(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function uk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const hk=Symbol("router view location matched"),_f=Symbol("router view depth"),ah=Symbol("router"),Gy=Symbol("route location"),Ul=Symbol("router view location");function Ar(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(hr(4,{from:n,to:e})):h instanceof Error?a(h):OC(h)?a(hr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,dk(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(d=>c._called?d:(fe(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){fe(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function dk(t,e,n){let s=0;return function(){s++===1&&fe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,s===1&&t.apply(null,arguments)}}function Oc(t,e,n,s){const r=[];for(const i of t){!i.components&&!i.children.length&&fe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw fe(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){fe(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,fe(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(fk(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Cn(l,n,s,i,o))}else{let c=a();"catch"in c||(fe(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=fC(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Cn(d,n,s,i,o)()}))}}}return r}function fk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wf(t){const e=hn(ah),n=hn(Gy),s=At(()=>e.resolve(Xs(t.to))),r=At(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Kn.bind(null,u));if(d>-1)return d;const p=bf(c[l-2]);return l>1&&bf(u)===p&&h[h.length-1].path!==p?h.findIndex(Kn.bind(null,c[l-2])):d}),i=At(()=>r.value>-1&&yk(n.params,s.value.params)),o=At(()=>r.value>-1&&r.value===n.matched.length-1&&Fy(n.params,s.value.params));function a(c={}){return mk(c)?e[Xs(t.replace)?"replace":"push"](Xs(t.to)).catch(Wr):Promise.resolve()}if(on){const c=lu();if(c){const l={route:s.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),Aw(()=>{l.route=s.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:s,href:At(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const pk=Vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wf,setup(t,{slots:e}){const n=Ii(wf(t)),{options:s}=hn(ah),r=At(()=>({[Ef(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ef(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ug("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),gk=pk;function mk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yk(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!bt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ef=(t,e,n)=>t??e??n,vk=Vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){wk();const s=hn(Ul),r=At(()=>t.route||s.value),i=hn(_f,0),o=At(()=>{let l=Xs(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=At(()=>r.value.matched[o.value]);Eo(_f,At(()=>o.value+1)),Eo(hk,a),Eo(Ul,r);const c=q_();return Fr(()=>[c.value,a.value,t.name],([l,u,h],[d,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Kn(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Tf(n.default,{Component:d,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=ug(d,ge({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(on&&w.ref){const C={depth:o.value,name:h.name,path:h.path,meta:h.meta};(bt(w.ref)?w.ref.map(D=>D.i):[w.ref.i]).forEach(D=>{D.__vrv_devtools=C})}return Tf(n.default,{Component:w,route:l})||w}}});function Tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _k=vk;function wk(){const t=lu(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Sr(t,e){const n=ge({},t,{matched:t.matched.map(s=>Rk(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function go(t){return{_custom:{display:t}}}let bk=0;function Ek(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const s=bk++;dC({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Sr(e.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Qy})}bt(h.__vrl_devtools)&&(h.__devtoolsApi=r,h.__vrl_devtools.forEach(d=>{let p=Jy,m="";d.isExactActive?(p=Yy,m="This is exactly active"):d.isActive&&(p=Xy,m="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:m,backgroundColor:p})}))}),Fr(e.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const i="router:navigations:"+s;r.addTimelineLayer({id:i,label:`Router${s?" "+s:""} Navigations`,color:4237508}),e.onError((u,h)=>{r.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:r.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:go("beforeEach"),from:Sr(h,"Current Location during this navigation"),to:Sr(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),r.addTimelineEvent({layerId:i,event:{time:r.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:go("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=go("❌")):p.status=go("✅"),p.from=Sr(h,"Current Location during this navigation"),p.to=Sr(u,"Target location"),r.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:r.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+s;r.addInspector({id:a,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(d=>!d.parent);h.forEach(tv),u.filter&&(h=h.filter(d=>Fl(d,u.filter.toLowerCase()))),h.forEach(d=>ev(d,e.currentRoute.value)),u.rootNodes=h.map(Zy)}let l;r.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),r.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:Ik(d)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function Tk(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Ik(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(s=>`${s.name}${Tk(s)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(s=>s.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Qy=15485081,Xy=2450411,Yy=8702998,Ak=2282478,Jy=16486972,Sk=6710886;function Zy(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:Ak}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Jy}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Qy}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Yy}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Xy}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Sk});let s=n.__vd_id;return s==null&&(s=String(Ck++),n.__vd_id=s),{id:s,label:n.path,tags:e,children:t.children.map(Zy)}}let Ck=0;const kk=/^\/(.*)\/([a-z]*)$/;function ev(t,e){const n=e.matched.length&&Kn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(s=>Kn(s,t.record))),t.children.forEach(s=>ev(s,e))}function tv(t){t.__vd_match=!1,t.children.forEach(tv)}function Fl(t,e){const n=String(t.re).match(kk);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>Fl(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const r=t.record.path.toLowerCase(),i=vi(r);return!e.startsWith("/")&&(i.includes(e)||r.includes(e))||i.startsWith(e)||r.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>Fl(o,e))}function Rk(t,e){const n={};for(const s in t)e.includes(s)||(n[s]=t[s]);return n}function Ok(t){const e=HC(t.routes,t),n=t.parseQuery||lk,s=t.stringifyQuery||vf,r=t.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Ar(),o=Ar(),a=Ar(),c=z_(Tn);let l=Tn;on&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kc.bind(null,_=>""+_),h=kc.bind(null,ck),d=kc.bind(null,vi);function p(_,L){let x,F;return By(_)?(x=e.getRecordMatcher(_),F=L):F=_,e.addRoute(F,x)}function m(_){const L=e.getRecordMatcher(_);L?e.removeRoute(L):fe(`Cannot remove non-existent route "${String(_)}"`)}function v(){return e.getRoutes().map(_=>_.record)}function w(_){return!!e.getRecordMatcher(_)}function C(_,L){if(L=ge({},L||c.value),typeof _=="string"){const ee=Rc(n,_,L.path),f=e.resolve({path:ee.path},L),g=r.createHref(ee.fullPath);return g.startsWith("//")?fe(`Location "${_}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):f.matched.length||fe(`No match found for location with path "${_}"`),ge(ee,f,{params:d(f.params),hash:vi(ee.hash),redirectedFrom:void 0,href:g})}let x;if("path"in _)"params"in _&&!("name"in _)&&Object.keys(_.params).length&&fe(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),x=ge({},_,{path:Rc(n,_.path,L.path).path});else{const ee=ge({},_.params);for(const f in ee)ee[f]==null&&delete ee[f];x=ge({},_,{params:h(_.params)}),L.params=h(L.params)}const F=e.resolve(x,L),he=_.hash||"";he&&!he.startsWith("#")&&fe(`A \`hash\` should always start with the character "#". Replace "${he}" with "#${he}".`),F.params=u(d(F.params));const Ee=mC(s,ge({},_,{hash:ik(he),path:F.path})),se=r.createHref(Ee);return se.startsWith("//")?fe(`Location "${_}" resolved to "${se}". A resolved location cannot start with multiple slashes.`):F.matched.length||fe(`No match found for location with path "${"path"in _?_.path:_}"`),ge({fullPath:Ee,hash:he,query:s===vf?uk(_.query):_.query||{}},F,{redirectedFrom:void 0,href:se})}function O(_){return typeof _=="string"?Rc(n,_,c.value.path):ge({},_)}function D(_,L){if(l!==_)return hr(8,{from:L,to:_})}function P(_){return Te(_)}function q(_){return P(ge(O(_),{replace:!0}))}function ue(_){const L=_.matched[_.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let F=typeof x=="function"?x(_):x;if(typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=O(F):{path:F},F.params={}),!("path"in F)&&!("name"in F))throw fe(`Invalid redirect found:
${JSON.stringify(F,null,2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ge({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function Te(_,L){const x=l=C(_),F=c.value,he=_.state,Ee=_.force,se=_.replace===!0,ee=ue(x);if(ee)return Te(ge(O(ee),{state:typeof ee=="object"?ge({},he,ee.state):he,force:Ee,replace:se}),L||x);const f=x;f.redirectedFrom=L;let g;return!Ee&&cf(s,F,x)&&(g=hr(16,{to:f,from:F}),Ms(F,F,!0,!1)),(g?Promise.resolve(g):re(f,F)).catch(y=>nn(y)?nn(y,2)?y:gt(y):ie(y,f,F)).then(y=>{if(y){if(nn(y,2))return cf(s,C(y.to),f)&&L&&(L._count=L._count?L._count+1:1)>10?(fe(`Detected an infinite redirection in a navigation guard when going from "${F.fullPath}" to "${f.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Te(ge({replace:se},O(y.to),{state:typeof y.to=="object"?ge({},he,y.to.state):he,force:Ee}),L||f)}else y=Fe(f,F,!0,se,he);return ye(f,F,y),y})}function z(_,L){const x=D(_,L);return x?Promise.reject(x):Promise.resolve()}function re(_,L){let x;const[F,he,Ee]=Nk(_,L);x=Oc(F.reverse(),"beforeRouteLeave",_,L);for(const ee of F)ee.leaveGuards.forEach(f=>{x.push(Cn(f,_,L))});const se=z.bind(null,_,L);return x.push(se),$s(x).then(()=>{x=[];for(const ee of i.list())x.push(Cn(ee,_,L));return x.push(se),$s(x)}).then(()=>{x=Oc(he,"beforeRouteUpdate",_,L);for(const ee of he)ee.updateGuards.forEach(f=>{x.push(Cn(f,_,L))});return x.push(se),$s(x)}).then(()=>{x=[];for(const ee of _.matched)if(ee.beforeEnter&&!L.matched.includes(ee))if(bt(ee.beforeEnter))for(const f of ee.beforeEnter)x.push(Cn(f,_,L));else x.push(Cn(ee.beforeEnter,_,L));return x.push(se),$s(x)}).then(()=>(_.matched.forEach(ee=>ee.enterCallbacks={}),x=Oc(Ee,"beforeRouteEnter",_,L),x.push(se),$s(x))).then(()=>{x=[];for(const ee of o.list())x.push(Cn(ee,_,L));return x.push(se),$s(x)}).catch(ee=>nn(ee,8)?ee:Promise.reject(ee))}function ye(_,L,x){for(const F of a.list())F(_,L,x)}function Fe(_,L,x,F,he){const Ee=D(_,L);if(Ee)return Ee;const se=L===Tn,ee=on?history.state:{};x&&(F||se?r.replace(_.fullPath,ge({scroll:se&&ee&&ee.scroll},he)):r.push(_.fullPath,he)),c.value=_,Ms(_,L,x,se),gt()}let ke;function Ot(){ke||(ke=r.listen((_,L,x)=>{if(!Ls.listening)return;const F=C(_),he=ue(F);if(he){Te(ge(he,{replace:!0}),F).catch(Wr);return}l=F;const Ee=c.value;on&&IC(uf(Ee.fullPath,x.delta),Za()),re(F,Ee).catch(se=>nn(se,12)?se:nn(se,2)?(Te(se.to,F).then(ee=>{nn(ee,20)&&!x.delta&&x.type===yi.pop&&r.go(-1,!1)}).catch(Wr),Promise.reject()):(x.delta&&r.go(-x.delta,!1),ie(se,F,Ee))).then(se=>{se=se||Fe(F,Ee,!1),se&&(x.delta&&!nn(se,8)?r.go(-x.delta,!1):x.type===yi.pop&&nn(se,20)&&r.go(-1,!1)),ye(F,Ee,se)}).catch(Wr)}))}let bn=Ar(),Nt=Ar(),$e;function ie(_,L,x){gt(_);const F=Nt.list();return F.length?F.forEach(he=>he(_,L,x)):(fe("uncaught error during route navigation:"),console.error(_)),Promise.reject(_)}function le(){return $e&&c.value!==Tn?Promise.resolve():new Promise((_,L)=>{bn.add([_,L])})}function gt(_){return $e||($e=!_,Ot(),bn.list().forEach(([L,x])=>_?x(_):L()),bn.reset()),_}function Ms(_,L,x,F){const{scrollBehavior:he}=t;if(!on||!he)return Promise.resolve();const Ee=!x&&AC(uf(_.fullPath,0))||(F||!x)&&history.state&&history.state.scroll||null;return Sp().then(()=>he(_,L,Ee)).then(se=>se&&TC(se)).catch(se=>ie(se,_,L))}const tn=_=>r.go(_);let Ft;const Et=new Set,Ls={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:w,getRoutes:v,resolve:C,options:t,push:P,replace:q,go:tn,back:()=>tn(-1),forward:()=>tn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Nt.add,isReady:le,install(_){const L=this;_.component("RouterLink",gk),_.component("RouterView",_k),_.config.globalProperties.$router=L,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Xs(c)}),on&&!Ft&&c.value===Tn&&(Ft=!0,P(r.location).catch(he=>{fe("Unexpected error when starting the router:",he)}));const x={};for(const he in Tn)x[he]=At(()=>c.value[he]);_.provide(ah,L),_.provide(Gy,Ii(x)),_.provide(Ul,c);const F=_.unmount;Et.add(_),_.unmount=function(){Et.delete(_),Et.size<1&&(l=Tn,ke&&ke(),ke=null,c.value=Tn,Ft=!1,$e=!1),F()},on&&Ek(_,L,e)}};return Ls}function $s(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Nk(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Kn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Kn(l,c))||r.push(c))}return[n,s,r]}const Pk="modulepreload",Dk=function(t){return"/"+t},If={},Jn=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Dk(i),i in If)return;If[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Pk,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},xk=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Zn(t){return()=>xk(Object.assign({"../pages/About.vue":()=>Jn(()=>import("./About-d43d682f.js"),["assets/About-d43d682f.js","assets/About-b73b4ef9.css"]),"../pages/Account.vue":()=>Jn(()=>import("./Account-a4df9171.js"),["assets/Account-a4df9171.js","assets/auth_signout-82c7e78a.js"]),"../pages/AddCloset.vue":()=>Jn(()=>import("./AddCloset-c1b47a66.js"),["assets/AddCloset-c1b47a66.js","assets/AddCloset-4b4b8398.css"]),"../pages/Closet.vue":()=>Jn(()=>import("./Closet-920dd386.js"),["assets/Closet-920dd386.js","assets/auth_signout-82c7e78a.js","assets/Closet-f668ce07.css"]),"../pages/CreateAccount.vue":()=>Jn(()=>import("./CreateAccount-d539b9e4.js"),["assets/CreateAccount-d539b9e4.js","assets/arrow_right-10cea047.js","assets/CreateAccount-dac3c748.css"]),"../pages/Home.vue":()=>Jn(()=>import("./Home-88c0ba4e.js"),["assets/Home-88c0ba4e.js","assets/Home-56efbfe4.css"]),"../pages/Login.vue":()=>Jn(()=>import("./Login-488df3bb.js"),["assets/Login-488df3bb.js","assets/auth_signout-82c7e78a.js","assets/arrow_right-10cea047.js","assets/Login-04ef15d7.css"])}),`../pages/${t}.vue`)}const Mk=[{path:"/",component:Zn("Home")},{path:"/About",component:Zn("About")},{path:"/Closet",component:Zn("Closet")},{path:"/Login",component:Zn("Login")},{path:"/AddCloset",component:Zn("AddCloset")},{path:"/Account",component:Zn("Account")},{path:"/CreateAccount",component:Zn("CreateAccount")}];var Lk="firebase",Uk="9.19.1";/**
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
 */kt(Lk,Uk,"app");function ch(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function nv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=nv,sv=new ki("auth","Firebase",nv());/**
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
 */const Af=new fu("@firebase/auth");function Oo(t,...e){Af.logLevel<=pe.ERROR&&Af.error(`Auth (${dr}): ${t}`,...e)}/**
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
 */function Ut(t,...e){throw lh(t,...e)}function Wt(t,...e){return lh(t,...e)}function $k(t,e,n){const s=Object.assign(Object.assign({},Fk()),{[e]:n});return new ki("auth","Firebase",s).create(e,{appName:t.name})}function lh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return sv.create(t,...e)}function G(t,e,...n){if(!t)throw lh(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function _n(t,e){t||cn(e)}/**
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
 */const Sf=new Map;function ln(t){_n(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
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
 */function Bk(t,e){const n=Oi(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(jo(i,e??{}))return r;Ut(r,"already-initialized")}return n.initialize({options:e})}function Vk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function $l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jk(){return Cf()==="http:"||Cf()==="https:"}function Cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Hk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jk()||_E()||"connection"in navigator)?navigator.onLine:!0}function qk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=yE()||wE()}get(){return Hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uh(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Kk=new Ki(3e4,6e4);function Wi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gi(t,e,n,s,r={}){return iv(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ri(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),rv.fetch()(ov(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function iv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},zk),e);try{const r=new Wk(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $k(t,u,l);Ut(t,u)}}catch(r){if(r instanceof en)throw r;Ut(t,"network-request-failed",{message:String(r)})}}async function Qi(t,e,n,s,r={}){const i=await Gi(t,e,n,s,r);return"mfaPendingCredential"in i&&Ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ov(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?uh(t.config,r):`${t.config.apiScheme}://${r}`}class Wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Wt(this.auth,"network-request-failed")),Kk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Wt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Gk(t,e){return Gi(t,"POST","/v1/accounts:delete",e)}async function Qk(t,e){return Gi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xk(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),r=hh(s);G(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Qr(Nc(r.auth_time)),issuedAtTime:Qr(Nc(r.iat)),expirationTime:Qr(Nc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function hh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=fg(n);return r?JSON.parse(r):(Oo("Failed to decode base64 JWT payload"),null)}catch(r){return Oo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Yk(t){const e=hh(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof en&&Jk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Jk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class av{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oa(t){var e;const n=t.auth,s=await t.getIdToken(),r=await _i(t,Qk(n,{idToken:s}));G(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nR(i.providerUserInfo):[],a=tR(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new av(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function eR(t){const e=Ue(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tR(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function nR(t){return t.map(e=>{var{providerId:n}=e,s=ch(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function sR(t,e){const n=await iv(t,{},async()=>{const s=Ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ov(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await sR(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new wi;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function In(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _s{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new av(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xk(this,e)}reload(){return eR(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _s(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _i(this,Gk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:P,isAnonymous:q,providerData:ue,stsTokenManager:Te}=n;G(D&&Te,e,"internal-error");const z=wi.fromJSON(this.name,Te);G(typeof D=="string",e,"internal-error"),In(h,e.name),In(d,e.name),G(typeof P=="boolean",e,"internal-error"),G(typeof q=="boolean",e,"internal-error"),In(p,e.name),In(m,e.name),In(v,e.name),In(w,e.name),In(C,e.name),In(O,e.name);const re=new _s({uid:D,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:q,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:z,createdAt:C,lastLoginAt:O});return ue&&Array.isArray(ue)&&(re.providerData=ue.map(ye=>Object.assign({},ye))),w&&(re._redirectEventId=w),re}static async _fromIdTokenResponse(e,n,s=!1){const r=new wi;r.updateFromServerResponse(n);const i=new _s({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await oa(i),i}}/**
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
 */class cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cv.type="NONE";const kf=cv;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class er{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=No(this.userKey,r.apiKey,i),this.fullPersistenceKey=No("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_s._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new er(ln(kf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ln(kf);const o=No(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=_s._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new er(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new er(i,e,s))}}/**
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
 */function Rf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fv(e))return"Blackberry";if(pv(e))return"Webos";if(dh(e))return"Safari";if((e.includes("chrome/")||uv(e))&&!e.includes("edge/"))return"Chrome";if(dv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function lv(t=ot()){return/firefox\//i.test(t)}function dh(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uv(t=ot()){return/crios\//i.test(t)}function hv(t=ot()){return/iemobile/i.test(t)}function dv(t=ot()){return/android/i.test(t)}function fv(t=ot()){return/blackberry/i.test(t)}function pv(t=ot()){return/webos/i.test(t)}function ec(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rR(t=ot()){var e;return ec(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iR(){return bE()&&document.documentMode===10}function gv(t=ot()){return ec(t)||dv(t)||pv(t)||fv(t)||/windows phone/i.test(t)||hv(t)}function oR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mv(t,e=[]){let n;switch(t){case"Browser":n=Rf(ot());break;case"Worker":n=`${Rf(ot())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${s}`}/**
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
 */class aR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class cR{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new aR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Xi(t){return Ue(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=kE(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lR(t,e,n){const s=Xi(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=yv(e),{host:o,port:a}=uR(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||hR()}function yv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uR(t){const e=yv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Nf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Nf(o)}}}function Nf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function dR(t,e){return Gi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function fR(t,e){return Qi(t,"POST","/v1/accounts:signInWithPassword",Wi(t,e))}/**
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
 */async function pR(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Wi(t,e))}async function gR(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Wi(t,e))}/**
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
 */class bi extends fh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new bi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new bi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return fR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pR(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return dR(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gR(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function tr(t,e){return Qi(t,"POST","/v1/accounts:signInWithIdp",Wi(t,e))}/**
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
 */const mR="http://localhost";class Ss extends fh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ch(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ss(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,tr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tr(e,n)}buildRequest(){const e={requestUri:mR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ri(n)}return e}}/**
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
 */function yR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vR(t){const e=Pr(Dr(t)).link,n=e?Pr(Dr(e)).deep_link_id:null,s=Pr(Dr(t)).deep_link_id;return(s?Pr(Dr(s)).link:null)||s||n||e||t}class ph{constructor(e){var n,s,r,i,o,a;const c=Pr(Dr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=yR((r=c.mode)!==null&&r!==void 0?r:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vR(e);try{return new ph(n)}catch{return null}}}/**
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
 */class _r{constructor(){this.providerId=_r.PROVIDER_ID}static credential(e,n){return bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ph.parseLink(n);return G(s,"argument-error"),bi._fromEmailAndCode(e,s.code,s.tenantId)}}_r.PROVIDER_ID="password";_r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yi extends vv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rn extends Yi{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
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
 */class On extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ss._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return On.credential(n,s)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
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
 */class Nn extends Yi{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */class Pn extends Yi{constructor(){super("twitter.com")}static credential(e,n){return Ss._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Pn.credential(n,s)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
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
 */async function _R(t,e){return Qi(t,"POST","/v1/accounts:signUp",Wi(t,e))}/**
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
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await _s._fromIdTokenResponse(e,s,r),o=Pf(s);return new Cs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Pf(s);return new Cs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class aa extends en{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new aa(e,n,s,r)}}function _v(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(t,i,e,s):i})}async function wR(t,e,n=!1){const s=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",s)}/**
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
 */async function bR(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await _i(t,_v(s,r,e,t),n);G(i.idToken,s,"internal-error");const o=hh(i.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),Cs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(s,"user-mismatch"),i}}/**
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
 */async function wv(t,e,n=!1){const s="signIn",r=await _v(t,s,e),i=await Cs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function ER(t,e){return wv(Xi(t),e)}async function TP(t,e,n){const s=Xi(t),r=await _R(s,{returnSecureToken:!0,email:e,password:n}),i=await Cs._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function IP(t,e,n){return ER(Ue(t),_r.credential(e,n))}function TR(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function IR(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function AP(t){return Ue(t).signOut()}const ca="__sak";/**
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
 */class bv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function AR(){const t=ot();return dh(t)||ec(t)}const SR=1e3,CR=10;class Ev extends bv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AR()&&oR(),this.fallbackToPolling=gv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);iR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,CR):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},SR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ev.type="LOCAL";const kR=Ev;/**
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
 */class Tv extends bv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tv.type="SESSION";const Iv=Tv;/**
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
 */function RR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new tc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await RR(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
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
 */function gh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=gh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function NR(t){Gt().location.href=t}/**
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
 */function Av(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function PR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xR(){return Av()?self:null}/**
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
 */const Sv="firebaseLocalStorageDb",MR=1,la="firebaseLocalStorage",Cv="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nc(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function LR(){const t=indexedDB.deleteDatabase(Sv);return new Ji(t).toPromise()}function Bl(){const t=indexedDB.open(Sv,MR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(la,{keyPath:Cv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(la)?e(s):(s.close(),await LR(),e(await Bl()))})})}async function Df(t,e,n){const s=nc(t,!0).put({[Cv]:e,value:n});return new Ji(s).toPromise()}async function UR(t,e){const n=nc(t,!1).get(e),s=await new Ji(n).toPromise();return s===void 0?null:s.value}function xf(t,e){const n=nc(t,!0).delete(e);return new Ji(n).toPromise()}const FR=800,$R=3;class kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>$R)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(xR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PR(),!this.activeServiceWorker)return;this.sender=new OR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bl();return await Df(e,ca,"1"),await xf(e,ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Df(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=nc(r,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kv.type="LOCAL";const BR=kv;/**
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
 */function VR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jR(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Wt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",VR().appendChild(s)})}function HR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ki(3e4,6e4);/**
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
 */function qR(t,e){return e?ln(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mh extends fh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zR(t){return wv(t.auth,new mh(t),t.bypassAuthState)}function KR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),bR(n,new mh(t),t.bypassAuthState)}async function WR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),wR(n,new mh(t),t.bypassAuthState)}/**
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
 */class Rv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zR;case"linkViaPopup":case"linkViaRedirect":return WR;case"reauthViaPopup":case"reauthViaRedirect":return KR;default:Ut(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const GR=new Ki(2e3,1e4);class Gs extends Rv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,GR.get())};e()}}Gs.currentPopupAction=null;/**
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
 */const QR="pendingRedirect",Po=new Map;class XR extends Rv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const s=await YR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YR(t,e){const n=eO(e),s=ZR(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function JR(t,e){Po.set(t._key(),e)}function ZR(t){return ln(t._redirectPersistence)}function eO(t){return No(QR,t.config.apiKey,t.name)}async function tO(t,e,n=!1){const s=Xi(t),r=qR(s,e),o=await new XR(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const nO=10*60*1e3;class sO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ov(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ov({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ov(t);default:return!1}}/**
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
 */async function iO(t,e={}){return Gi(t,"GET","/v1/projects",e)}/**
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
 */const oO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aO=/^https?/;async function cO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iO(t);for(const n of e)try{if(lO(n))return}catch{}Ut(t,"unauthorized-domain")}function lO(t){const e=$l(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!aO.test(n))return!1;if(oO.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const uO=new Ki(3e4,6e4);function Lf(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hO(t){return new Promise((e,n)=>{var s,r,i;function o(){Lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lf(),n(Wt(t,"network-request-failed"))},timeout:uO.get()})}if(!((r=(s=Gt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Gt().gapi)===null||i===void 0)&&i.load)o();else{const a=HR("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},jR(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Do=null,e})}let Do=null;function dO(t){return Do=Do||hO(t),Do}/**
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
 */const fO=new Ki(5e3,15e3),pO="__/auth/iframe",gO="emulator/auth/iframe",mO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vO(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uh(e,gO):`https://${t.config.authDomain}/${pO}`,s={apiKey:e.apiKey,appName:t.name,v:dr},r=yO.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ri(s).slice(1)}`}async function _O(t){const e=await dO(t),n=Gt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:vO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mO,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),a=Gt().setTimeout(()=>{i(o)},fO.get());function c(){Gt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const wO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bO=500,EO=600,TO="_blank",IO="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AO(t,e,n,s=bO,r=EO){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},wO),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ot().toLowerCase();n&&(a=uv(l)?TO:n),lv(l)&&(e=e||IO,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(rR(l)&&a!=="_self")return SO(e||"",a),new Uf(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new Uf(h)}function SO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const CO="__/auth/handler",kO="emulator/auth/handler";function Ff(t,e,n,s,r,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:dr,eventId:r};if(e instanceof vv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Yi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${RO(t)}?${Ri(a).slice(1)}`}function RO({config:t}){return t.emulator?uh(t,kO):`https://${t.authDomain}/${CO}`}/**
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
 */const Pc="webStorageSupport";class OO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iv,this._completeRedirectFn=tO,this._overrideRedirectResult=JR}async _openPopup(e,n,s,r){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ff(e,n,s,$l(),r);return AO(e,o,gh())}async _openRedirect(e,n,s,r){return await this._originValidation(e),NR(Ff(e,n,s,$l(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(_n(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _O(e),s=new sO(e);return n.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pc,{type:Pc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Pc];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gv()||dh()||ec()}}const NO=OO;var $f="@firebase/auth",Bf="0.22.0";/**
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
 */class PO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xO(t){jn(new pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mv(t)},u=new cR(a,c,l);return Vk(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),jn(new pn("auth-internal",e=>{const n=Xi(e.getProvider("auth").getImmediate());return(s=>new PO(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt($f,Bf,DO(t)),kt($f,Bf,"esm2017")}/**
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
 */const MO=5*60,LO=gg("authIdTokenMaxAge")||MO;let Vf=null;const UO=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>LO)return;const r=n==null?void 0:n.token;Vf!==r&&(Vf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function FO(t=Aa()){const e=Oi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bk(t,{popupRedirectResolver:NO,persistence:[BR,kR,Iv]}),s=gg("authTokenSyncURL");if(s){const i=UO(s);IR(n,i,()=>i(n.currentUser)),TR(n,o=>i(o))}const r=pg("auth");return r&&lR(n,`http://${r}`),n}xO("Browser");/**
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
 */const Nv="firebasestorage.googleapis.com",Pv="storageBucket",$O=2*60*1e3,BO=10*60*1e3,VO=1e3;/**
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
 */class Re extends en{constructor(e,n,s=0){super(Dc(e),`Firebase Storage: ${n} (${Dc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function Dc(t){return"storage/"+t}function yh(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(Ae.UNKNOWN,t)}function jO(t){return new Re(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function HO(t){return new Re(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(Ae.UNAUTHENTICATED,t)}function zO(){return new Re(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function KO(t){return new Re(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Dv(){return new Re(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xv(){return new Re(Ae.CANCELED,"User canceled the upload/download.")}function WO(t){return new Re(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function GO(t){return new Re(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function QO(){return new Re(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Pv+"' property when initializing the app?")}function Mv(){return new Re(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function XO(){return new Re(Ae.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function YO(){return new Re(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function JO(t){return new Re(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vl(t){return new Re(Ae.INVALID_ARGUMENT,t)}function Lv(){return new Re(Ae.APP_DELETED,"The Firebase app was deleted.")}function ZO(t){return new Re(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xr(t,e){return new Re(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Cr(t){throw new Re(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(s.path==="")return s;throw GO(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},v=n===Nv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",C=new RegExp(`^https?://${v}/${r}/${w}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<D.length;P++){const q=D[P],ue=q.regex.exec(e);if(ue){const Te=ue[q.indices.bucket];let z=ue[q.indices.path];z||(z=""),s=new pt(Te,z),q.postModify(s);break}}if(s==null)throw WO(e);return s}}class eN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tN(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){r=setTimeout(()=>{r=null,t(p,c())},w)}function d(){i&&clearTimeout(i)}function p(w,...C){if(l){d();return}if(w){d(),u.call(null,w,...C);return}if(c()||o){d(),u.call(null,w,...C);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,h(D)}let m=!1;function v(w){m||(m=!0,d(),!l&&(r!==null?(w||(a=2),clearTimeout(r),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function nN(t){t(!1)}/**
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
 */function sN(t){return t!==void 0}function rN(t){return typeof t=="function"}function iN(t){return typeof t=="object"&&!Array.isArray(t)}function sc(t){return typeof t=="string"||t instanceof String}function jf(t){return vh()&&t instanceof Blob}function vh(){return typeof Blob<"u"&&!vE()}function jl(t,e,n,s){if(s<e)throw Vl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Vl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function wr(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Uv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var ws;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ws||(ws={}));/**
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
 */function Fv(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class oN{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new yo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ws.NO_ERROR,c=i.getStatus();if(!a||Fv(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ws.ABORT;s(!1,new yo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new yo(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());sN(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=yh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Lv():xv();o(c)}else{const c=Dv();o(c)}};this.canceled_?n(!1,new yo(!1,null,!0)):this.backoffId_=tN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function aN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hN(t,e,n,s,r,i,o=!0){const a=Uv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return lN(l,e),aN(l,n),cN(l,i),uN(l,s),new oN(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function dN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fN(...t){const e=dN();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(vh())return new Blob(t);throw new Re(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function gN(t){if(typeof atob>"u")throw JO("base-64");return atob(t)}/**
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
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xc{constructor(e,n){this.data=e,this.contentType=n||null}}function mN(t,e){switch(t){case zt.RAW:return new xc($v(e));case zt.BASE64:case zt.BASE64URL:return new xc(Bv(t,e));case zt.DATA_URL:return new xc(vN(e),_N(e))}throw yh()}function $v(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function yN(t){let e;try{e=decodeURIComponent(t)}catch{throw Xr(zt.DATA_URL,"Malformed data URL.")}return $v(e)}function Bv(t,e){switch(t){case zt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Xr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Xr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gN(e)}catch(r){throw r.message.includes("polyfill")?r:Xr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Vv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xr(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=wN(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function vN(t){const e=new Vv(t);return e.base64?Bv(zt.BASE64,e.rest):yN(e.rest)}function _N(t){return new Vv(t).contentType}function wN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Dn{constructor(e,n){let s=0,r="";jf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(jf(this.data_)){const s=this.data_,r=pN(s,e,n);return r===null?null:new Dn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Dn(s,!0)}}static getBlob(...e){if(vh()){const n=e.map(s=>s instanceof Dn?s.data_:s);return new Dn(fN.apply(null,n))}else{const n=e.map(o=>sc(o)?mN(zt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Dn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function _h(t){let e;try{e=JSON.parse(t)}catch{return null}return iN(e)?e:null}/**
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
 */function bN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function EN(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function jv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function TN(t,e){return e}class lt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||TN}}let vo=null;function IN(t){return!sc(t)||t.length<2?t:jv(t)}function Hv(){if(vo)return vo;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(i,o){return IN(o)}const n=new lt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new lt("size");return r.xform=s,t.push(r),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),vo=t,vo}function AN(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new pt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function SN(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return AN(s,t),s}function qv(t,e,n){const s=_h(e);return s===null?null:SN(t,s,n)}function CN(t,e,n,s){const r=_h(e);if(r===null||!sc(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=wr(d,n,s),m=Uv({alt:"media",token:l});return p+m})[0]}function zv(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
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
 */const Hf="prefixes",qf="items";function kN(t,e,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Hf])for(const r of n[Hf]){const i=r.replace(/\/$/,""),o=t._makeStorageReference(new pt(e,i));s.prefixes.push(o)}if(n[qf])for(const r of n[qf]){const i=t._makeStorageReference(new pt(e,r.name));s.items.push(i)}return s}function RN(t,e,n){const s=_h(n);return s===null?null:kN(t,e,s)}class xs{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Qt(t){if(!t)throw yh()}function wh(t,e){function n(s,r){const i=qv(t,r,e);return Qt(i!==null),i}return n}function ON(t,e){function n(s,r){const i=RN(t,e,r);return Qt(i!==null),i}return n}function NN(t,e){function n(s,r){const i=qv(t,r,e);return Qt(i!==null),CN(i,r,t.host,t._protocol)}return n}function br(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=zO():r=qO():n.getStatus()===402?r=HO(t.bucket):n.getStatus()===403?r=KO(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Kv(t){const e=br(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=jO(t.path)),i.serverResponse=r.serverResponse,i}return n}function PN(t,e,n){const s=e.fullServerUrl(),r=wr(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new xs(r,i,wh(t,n),o);return a.errorHandler=Kv(e),a}function DN(t,e,n,s,r){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),s&&(i.pageToken=s),r&&(i.maxResults=r);const o=e.bucketOnlyServerUrl(),a=wr(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,u=new xs(a,c,ON(t,e.bucket),l);return u.urlParams=i,u.errorHandler=br(e),u}function xN(t,e,n){const s=e.fullServerUrl(),r=wr(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new xs(r,i,NN(t,n),o);return a.errorHandler=Kv(e),a}function MN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Wv(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=MN(null,e)),s}function LN(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let P=0;P<2;P++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Wv(e,s,r),u=zv(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Dn.getBlob(h,s,d);if(p===null)throw Mv();const m={name:l.fullPath},v=wr(i,t.host,t._protocol),w="POST",C=t.maxUploadRetryTime,O=new xs(v,w,wh(t,n),C);return O.urlParams=m,O.headers=o,O.body=p.uploadData(),O.errorHandler=br(e),O}class ua{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function bh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Qt(!1)}return Qt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function UN(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Wv(e,s,r),a={name:o.fullPath},c=wr(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=zv(o,n),d=t.maxUploadRetryTime;function p(v){bh(v);let w;try{w=v.getResponseHeader("X-Goog-Upload-URL")}catch{Qt(!1)}return Qt(sc(w)),w}const m=new xs(c,l,p,d);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=br(e),m}function FN(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const u=bh(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Qt(!1)}h||Qt(!1);const d=Number(h);return Qt(!isNaN(d)),new ua(d,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new xs(n,o,i,a);return c.headers=r,c.errorHandler=br(e),c}const zf=256*1024;function $N(t,e,n,s,r,i,o,a){const c=new ua(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw XO();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,d=h+u;let p="";u===0?p="finalize":l===u?p="upload, finalize":p="upload";const m={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,d);if(v===null)throw Mv();function w(P,q){const ue=bh(P,["active","final"]),Te=c.current+u,z=s.size();let re;return ue==="final"?re=wh(e,i)(P,q):re=null,new ua(Te,z,ue==="final",re)}const C="POST",O=e.maxUploadRetryTime,D=new xs(n,C,w,O);return D.headers=m,D.body=v.uploadData(),D.progressCallback=a||null,D.errorHandler=br(t),D}const yt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Mc(t){switch(t){case"running":case"pausing":case"canceling":return yt.RUNNING;case"paused":return yt.PAUSED;case"success":return yt.SUCCESS;case"canceled":return yt.CANCELED;case"error":return yt.ERROR;default:return yt.ERROR}}/**
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
 */class BN{constructor(e,n,s){if(rN(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Bs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class VN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Cr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Cr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Cr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Cr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Cr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jN extends VN{initXhr(){this.xhr_.responseType="text"}}function is(){return new jN}/**
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
 */class HN{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Hv(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(Ae.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Fv(r.status,[]))if(i)r=Dv();else{this.sleepTime=Math.max(this.sleepTime*2,VO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(Ae.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=UN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,is,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=FN(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,is,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zf*this._chunkMultiplier,n=new ua(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=$N(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,is,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=PN(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,is,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=LN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,is,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=xv(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Mc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new BN(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Mc(this._state)){case yt.SUCCESS:Bs(this._resolve.bind(null,this.snapshot))();break;case yt.CANCELED:case yt.ERROR:const n=this._reject;Bs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Mc(this._state)){case yt.RUNNING:case yt.PAUSED:e.next&&Bs(e.next.bind(e,this.snapshot))();break;case yt.SUCCESS:e.complete&&Bs(e.complete.bind(e))();break;case yt.CANCELED:case yt.ERROR:e.error&&Bs(e.error.bind(e,this._error))();break;default:e.error&&Bs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ks{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ks(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jv(this._location.path)}get storage(){return this._service}get parent(){const e=bN(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new ks(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ZO(e)}}function qN(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new HN(t,new Dn(e),n)}function zN(t,e){e!=null&&typeof e.maxResults=="number"&&jl("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=DN(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,is)}function KN(t){t._throwIfRoot("getDownloadURL");const e=xN(t.storage,t._location,Hv());return t.storage.makeRequestWithTokens(e,is).then(n=>{if(n===null)throw YO();return n})}function WN(t,e){const n=EN(t._location.path,e),s=new pt(t._location.bucket,n);return new ks(t.storage,s)}/**
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
 */function GN(t){return/^[A-Za-z]+:\/\//.test(t)}function QN(t,e){return new ks(t,e)}function Gv(t,e){if(t instanceof Eh){const n=t;if(n._bucket==null)throw QO();const s=new ks(n,n._bucket);return e!=null?Gv(s,e):s}else return e!==void 0?WN(t,e):t}function XN(t,e){if(e&&GN(e)){if(t instanceof Eh)return QN(t,e);throw Vl("To use ref(service, url), the first argument must be a Storage instance.")}else return Gv(t,e)}function Kf(t,e){const n=e==null?void 0:e[Pv];return n==null?null:pt.makeFromBucketSpec(n,t)}function YN(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:mg(r,t.app.options.projectId))}class Eh{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Nv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$O,this._maxUploadRetryTime=BO,this._requests=new Set,r!=null?this._bucket=pt.makeFromBucketSpec(r,this._host):this._bucket=Kf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=Kf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ks(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new eN(Lv());{const o=hN(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Wf="@firebase/storage",Gf="0.11.2";/**
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
 */const Qv="storage";function SP(t,e,n){return t=Ue(t),qN(t,e,n)}function CP(t,e){return t=Ue(t),zN(t,e)}function kP(t){return t=Ue(t),KN(t)}function RP(t,e){return t=Ue(t),XN(t,e)}function JN(t=Aa(),e){t=Ue(t);const s=Oi(t,Qv).getImmediate({identifier:e}),r=du("storage");return r&&ZN(s,...r),s}function ZN(t,e,n,s={}){YN(t,e,n,s)}function eP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Eh(n,s,r,e,dr)}function tP(){jn(new pn(Qv,eP,"PUBLIC").setMultipleInstances(!0)),kt(Wf,Gf,""),kt(Wf,Gf,"esm2017")}tP();/**
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
 */const Xv="functions";/**
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
 */class nP{constructor(e,n,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||s.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:s}}}/**
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
 */const Hl="us-central1";class sP{constructor(e,n,s,r,i=Hl,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new nP(n,s,r),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin,this.region=Hl}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function rP(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const Qf="@firebase/functions",Xf="0.9.4";/**
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
 */const iP="auth-internal",oP="app-check-internal",aP="messaging-internal";function cP(t,e){const n=(s,{instanceIdentifier:r})=>{const i=s.getProvider("app").getImmediate(),o=s.getProvider(iP),a=s.getProvider(aP),c=s.getProvider(oP);return new sP(i,o,a,c,r,t)};jn(new pn(Xv,n,"PUBLIC").setMultipleInstances(!0)),kt(Qf,Xf,e),kt(Qf,Xf,"esm2017")}/**
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
 */function lP(t=Aa(),e=Hl){const s=Oi(Ue(t),Xv).getImmediate({identifier:e}),r=du("functions");return r&&uP(s,...r),s}function uP(t,e,n){rP(Ue(t),e,n)}cP(fetch.bind(self));const hP={apiKey:"AIzaSyBDevPI9maQg7zZPO4rUDHj7ZMENqdw3vE",authDomain:"closetsnap-822e7.firebaseapp.com",projectId:"closetsnap-822e7",storageBucket:"closetsnap-822e7.appspot.com",messagingSenderId:"604567787747",appId:"1:604567787747:web:173093122cebf15280cdd6"},Th=_g(hP);FO(Th);JN(Th);lP(Th);let dP=Ok({history:RC(),routes:Mk});const Yv=eE(rC);Yv.use(dP);Yv.mount("#app");export{It as F,hu as _,gP as a,JN as b,nl as c,kP as d,We as e,fP as f,FO as g,Qh as h,TP as i,EP as j,_P as k,CP as l,pP as m,ql as n,Vr as o,ZS as p,ih as q,RP as r,vP as s,bP as t,SP as u,mP as v,wP as w,IP as x,AP as y};
