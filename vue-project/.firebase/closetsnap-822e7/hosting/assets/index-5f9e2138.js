(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Kn(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Fl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?Gv(s):Fl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(we(t))return t}}const zv=/;(?![^(]*\))/g,Kv=/:([^]+)/,Wv=/\/\*.*?\*\//gs;function Gv(t){const e={};return t.replace(Wv,"").split(zv).forEach(n=>{if(n){const s=n.split(Kv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Vl(t){let e="";if(De(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Vl(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qv="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Xv="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Yv=Kn(Qv),Jv=Kn(Xv),Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=Kn(Zv);function qf(t){return!!t||t===""}const ZN=t=>De(t)?t:t==null?"":W(t)||we(t)&&(t.toString===Gf||!Q(t.toString))?JSON.stringify(t,zf,2):String(t),zf=(t,e)=>e&&e.__v_isRef?zf(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Wf(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!W(e)&&!Qf(e)?String(e):e,_e=Object.freeze({}),Ws=Object.freeze([]),yt=()=>{},Kf=()=>!1,t_=/^on[^a-z]/,_i=t=>t_.test(t),Oo=t=>t.startsWith("onUpdate:"),Pe=Object.assign,Bl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},n_=Object.prototype.hasOwnProperty,oe=(t,e)=>n_.call(t,e),W=Array.isArray,as=t=>ca(t)==="[object Map]",Wf=t=>ca(t)==="[object Set]",Q=t=>typeof t=="function",De=t=>typeof t=="string",jl=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",Hl=t=>we(t)&&Q(t.then)&&Q(t.catch),Gf=Object.prototype.toString,ca=t=>Gf.call(t),ql=t=>ca(t).slice(8,-1),Qf=t=>ca(t)==="[object Object]",zl=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mo=Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),s_=Kn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),la=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},r_=/-(\w)/g,Qt=la(t=>t.replace(r_,(e,n)=>n?n.toUpperCase():"")),i_=/\B([A-Z])/g,$n=la(t=>t.replace(i_,"-$1").toLowerCase()),vs=la(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yn=la(t=>t?`on${vs(t)}`:""),Gr=(t,e)=>!Object.is(t,e),$s=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},No=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bh;const Xf=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xc(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Pt;class o_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}else xc("cannot run an inactive effect scope.")}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function a_(t,e=Pt){e&&e.active&&e.effects.push(t)}function c_(){return Pt}const Kl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Yf=t=>(t.w&Fn)>0,Jf=t=>(t.n&Fn)>0,l_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Fn},u_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Yf(r)&&!Jf(r)?r.delete(t):e[n++]=r,r.w&=~Fn,r.n&=~Fn}e.length=n}},Lc=new WeakMap;let Rr=0,Fn=1;const Mc=30;let lt;const cs=Symbol("iterate"),Uc=Symbol("Map key iterate");class Wl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,a_(this,s)}run(){if(!this.active)return this.fn();let e=lt,n=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=lt,lt=this,Dn=!0,Fn=1<<++Rr,Rr<=Mc?l_(this):Eh(this),this.fn()}finally{Rr<=Mc&&u_(this),Fn=1<<--Rr,lt=this.parent,Dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){lt===this?this.deferStop=!0:this.active&&(Eh(this),this.onStop&&this.onStop(),this.active=!1)}}function Eh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dn=!0;const Zf=[];function Cs(){Zf.push(Dn),Dn=!1}function ks(){const t=Zf.pop();Dn=t===void 0?!0:t}function vt(t,e,n){if(Dn&&lt){let s=Lc.get(t);s||Lc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Kl()),ep(r,{effect:lt,target:t,type:e,key:n})}}function ep(t,e){let n=!1;Rr<=Mc?Jf(t)||(t.n|=Fn,n=!Yf(t)):n=!t.has(lt),n&&(t.add(lt),lt.deps.push(t),lt.onTrack&&lt.onTrack(Object.assign({effect:lt},e)))}function dn(t,e,n,s,r,i){const o=Lc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(s);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?zl(n)&&a.push(o.get("length")):(a.push(o.get(cs)),as(t)&&a.push(o.get(Uc)));break;case"delete":W(t)||(a.push(o.get(cs)),as(t)&&a.push(o.get(Uc)));break;case"set":as(t)&&a.push(o.get(cs));break}const c={target:t,type:e,key:n,newValue:s,oldValue:r,oldTarget:i};if(a.length===1)a[0]&&$c(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);$c(Kl(l),c)}}function $c(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Th(s,e);for(const s of n)s.computed||Th(s,e)}function Th(t,e){(t!==lt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Pe({effect:t},e)),t.scheduler?t.scheduler():t.run())}const h_=Kn("__proto__,__v_isRef,__isVue"),tp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jl)),d_=ua(),f_=ua(!1,!0),p_=ua(!0),m_=ua(!0,!0),Ih=g_();function g_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let i=0,o=this.length;i<o;i++)vt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Cs();const s=te(this)[e].apply(this,n);return ks(),s}}),t}function y_(t){const e=te(this);return vt(e,"has",t),e.hasOwnProperty(t)}function ua(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?lp:cp:e?ap:op).get(s))return s;const o=W(s);if(!t){if(o&&oe(Ih,r))return Reflect.get(Ih,r,i);if(r==="hasOwnProperty")return y_}const a=Reflect.get(s,r,i);return(jl(r)?tp.has(r):h_(r))||(t||vt(s,"get",r),e)?a:Be(a)?o&&zl(r)?a:a.value:we(a)?t?up(a):wi(a):a}}const v_=np(),__=np(!0);function np(t=!1){return function(n,s,r,i){let o=n[s];if(Vn(o)&&Be(o)&&!Be(r))return!1;if(!t&&(!Po(r)&&!Vn(r)&&(o=te(o),r=te(r)),!W(n)&&Be(o)&&!Be(r)))return o.value=r,!0;const a=W(n)&&zl(s)?Number(s)<n.length:oe(n,s),c=Reflect.set(n,s,r,i);return n===te(i)&&(a?Gr(r,o)&&dn(n,"set",s,r,o):dn(n,"add",s,r)),c}}function w_(t,e){const n=oe(t,e),s=t[e],r=Reflect.deleteProperty(t,e);return r&&n&&dn(t,"delete",e,void 0,s),r}function b_(t,e){const n=Reflect.has(t,e);return(!jl(e)||!tp.has(e))&&vt(t,"has",e),n}function E_(t){return vt(t,"iterate",W(t)?"length":cs),Reflect.ownKeys(t)}const sp={get:d_,set:v_,deleteProperty:w_,has:b_,ownKeys:E_},rp={get:p_,set(t,e){return xc(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return xc(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},T_=Pe({},sp,{get:f_,set:__}),I_=Pe({},rp,{get:m_}),Gl=t=>t,ha=t=>Reflect.getPrototypeOf(t);function Qi(t,e,n=!1,s=!1){t=t.__v_raw;const r=te(t),i=te(e);n||(e!==i&&vt(r,"get",e),vt(r,"get",i));const{has:o}=ha(r),a=s?Gl:n?Ql:Qr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Xi(t,e=!1){const n=this.__v_raw,s=te(n),r=te(t);return e||(t!==r&&vt(s,"has",t),vt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Yi(t,e=!1){return t=t.__v_raw,!e&&vt(te(t),"iterate",cs),Reflect.get(t,"size",t)}function Sh(t){t=te(t);const e=te(this);return ha(e).has.call(e,t)||(e.add(t),dn(e,"add",t,t)),this}function Ch(t,e){e=te(e);const n=te(this),{has:s,get:r}=ha(n);let i=s.call(n,t);i?ip(n,s,t):(t=te(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Gr(e,o)&&dn(n,"set",t,e,o):dn(n,"add",t,e),this}function kh(t){const e=te(this),{has:n,get:s}=ha(e);let r=n.call(e,t);r?ip(e,n,t):(t=te(t),r=n.call(e,t));const i=s?s.call(e,t):void 0,o=e.delete(t);return r&&dn(e,"delete",t,void 0,i),o}function Rh(){const t=te(this),e=t.size!==0,n=as(t)?new Map(t):new Set(t),s=t.clear();return e&&dn(t,"clear",void 0,void 0,n),s}function Ji(t,e){return function(s,r){const i=this,o=i.__v_raw,a=te(o),c=e?Gl:t?Ql:Qr;return!t&&vt(a,"iterate",cs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Zi(t,e,n){return function(...s){const r=this.__v_raw,i=te(r),o=as(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Gl:e?Ql:Qr;return!e&&vt(i,"iterate",c?Uc:cs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${vs(t)} operation ${n}failed: target is readonly.`,te(this))}return t==="delete"?!1:this}}function S_(){const t={get(i){return Qi(this,i)},get size(){return Yi(this)},has:Xi,add:Sh,set:Ch,delete:kh,clear:Rh,forEach:Ji(!1,!1)},e={get(i){return Qi(this,i,!1,!0)},get size(){return Yi(this)},has:Xi,add:Sh,set:Ch,delete:kh,clear:Rh,forEach:Ji(!1,!0)},n={get(i){return Qi(this,i,!0)},get size(){return Yi(this,!0)},has(i){return Xi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ji(!0,!1)},s={get(i){return Qi(this,i,!0,!0)},get size(){return Yi(this,!0)},has(i){return Xi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Zi(i,!1,!1),n[i]=Zi(i,!0,!1),e[i]=Zi(i,!1,!0),s[i]=Zi(i,!0,!0)}),[t,n,e,s]}const[C_,k_,R_,A_]=S_();function da(t,e){const n=e?t?A_:R_:t?k_:C_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const O_={get:da(!1,!1)},N_={get:da(!1,!0)},P_={get:da(!0,!1)},D_={get:da(!0,!0)};function ip(t,e,n){const s=te(n);if(s!==n&&e.call(t,s)){const r=ql(t);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const op=new WeakMap,ap=new WeakMap,cp=new WeakMap,lp=new WeakMap;function x_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function L_(t){return t.__v_skip||!Object.isExtensible(t)?0:x_(ql(t))}function wi(t){return Vn(t)?t:fa(t,!1,sp,O_,op)}function M_(t){return fa(t,!1,T_,N_,ap)}function up(t){return fa(t,!0,rp,P_,cp)}function Hs(t){return fa(t,!0,I_,D_,lp)}function fa(t,e,n,s,r){if(!we(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=L_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ls(t){return Vn(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function Po(t){return!!(t&&t.__v_isShallow)}function Fc(t){return ls(t)||Vn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function hp(t){return No(t,"__v_skip",!0),t}const Qr=t=>we(t)?wi(t):t,Ql=t=>we(t)?up(t):t;function dp(t){Dn&&lt&&(t=te(t),ep(t.dep||(t.dep=Kl()),{target:t,type:"get",key:"value"}))}function fp(t,e){t=te(t);const n=t.dep;n&&$c(n,{target:t,type:"set",key:"value",newValue:e})}function Be(t){return!!(t&&t.__v_isRef===!0)}function U_(t){return pp(t,!1)}function $_(t){return pp(t,!0)}function pp(t,e){return Be(t)?t:new F_(t,e)}class F_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Qr(e)}get value(){return dp(this),this._value}set value(e){const n=this.__v_isShallow||Po(e)||Vn(e);e=n?e:te(e),Gr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qr(e),fp(this,e))}}function Gs(t){return Be(t)?t.value:t}const V_={get:(t,e,n)=>Gs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Be(r)&&!Be(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function mp(t){return ls(t)?t:new Proxy(t,V_)}var gp;class B_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[gp]=!1,this._dirty=!0,this.effect=new Wl(e,()=>{this._dirty||(this._dirty=!0,fp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=te(this);return dp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}gp="__v_isReadonly";function j_(t,e,n=!1){let s,r;const i=Q(t);i?(s=t,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=t.get,r=t.set);const o=new B_(s,r,i||!r,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const us=[];function go(t){us.push(t)}function yo(){us.pop()}function R(t,...e){Cs();const n=us.length?us[us.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=H_();if(s)ln(s,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${wa(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${t}`,...e];r.length&&i.push(`
`,...q_(r)),console.warn(...i)}ks()}function H_(){let t=us[us.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function q_(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...z_(n))}),e}function z_({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,r=` at <${wa(t.component,t.type,s)}`,i=">"+n;return t.props?[r,...K_(t.props),i]:[r+i]}function K_(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...yp(s,t[s]))}),n.length>3&&e.push(" ..."),e}function yp(t,e,n){return De(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Be(e)?(e=yp(t,te(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):Q(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=te(e),n?e:[`${t}=`,e])}const Xl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ln(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){pa(i,e,n)}return r}function Ct(t,e,n,s){if(Q(t)){const i=ln(t,e,n,s);return i&&Hl(i)&&i.catch(o=>{pa(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ct(t[i],e,n,s));return r}function pa(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Xl[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ln(c,null,10,[t,o,a]);return}}W_(t,n,r,s)}function W_(t,e,n,s=!0){{const r=Xl[e];if(n&&go(n),R(`Unhandled error${r?` during execution of ${r}`:""}`),n&&yo(),s)throw t;console.error(t)}}let Xr=!1,Vc=!1;const et=[];let Bt=0;const Qs=[];let Vt=null,In=0;const vp=Promise.resolve();let Yl=null;const G_=100;function _p(t){const e=Yl||vp;return t?e.then(this?t.bind(this):t):e}function Q_(t){let e=Bt+1,n=et.length;for(;e<n;){const s=e+n>>>1;Yr(et[s])<t?e=s+1:n=s}return e}function ma(t){(!et.length||!et.includes(t,Xr&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?et.push(t):et.splice(Q_(t.id),0,t),wp())}function wp(){!Xr&&!Vc&&(Vc=!0,Yl=vp.then(Tp))}function X_(t){const e=et.indexOf(t);e>Bt&&et.splice(e,1)}function bp(t){W(t)?Qs.push(...t):(!Vt||!Vt.includes(t,t.allowRecurse?In+1:In))&&Qs.push(t),wp()}function Ah(t,e=Xr?Bt+1:0){for(t=t||new Map;e<et.length;e++){const n=et[e];if(n&&n.pre){if(Jl(t,n))continue;et.splice(e,1),e--,n()}}}function Ep(t){if(Qs.length){const e=[...new Set(Qs)];if(Qs.length=0,Vt){Vt.push(...e);return}for(Vt=e,t=t||new Map,Vt.sort((n,s)=>Yr(n)-Yr(s)),In=0;In<Vt.length;In++)Jl(t,Vt[In])||Vt[In]();Vt=null,In=0}}const Yr=t=>t.id==null?1/0:t.id,Y_=(t,e)=>{const n=Yr(t)-Yr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Tp(t){Vc=!1,Xr=!0,t=t||new Map,et.sort(Y_);const e=n=>Jl(t,n);try{for(Bt=0;Bt<et.length;Bt++){const n=et[Bt];if(n&&n.active!==!1){if(e(n))continue;ln(n,null,14)}}}finally{Bt=0,et.length=0,Ep(t),Xr=!1,Yl=null,(et.length||Qs.length)&&Tp(t)}}function Jl(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>G_){const s=e.ownerInstance,r=s&&ou(s.type);return R(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let hs=!1;const Fs=new Set;Xf().__VUE_HMR_RUNTIME__={createRecord:tc(Ip),rerender:tc(ew),reload:tc(tw)};const _s=new Map;function J_(t){const e=t.type.__hmrId;let n=_s.get(e);n||(Ip(e,t.type),n=_s.get(e)),n.instances.add(t)}function Z_(t){_s.get(t.type.__hmrId).instances.delete(t)}function Ip(t,e){return _s.has(t)?!1:(_s.set(t,{initialDef:Lr(e),instances:new Set}),!0)}function Lr(t){return nm(t)?t.__vccOpts:t}function ew(t,e){const n=_s.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(s=>{e&&(s.render=e,Lr(s.type).render=e),s.renderCache=[],hs=!0,s.update(),hs=!1}))}function tw(t,e){const n=_s.get(t);if(!n)return;e=Lr(e),Oh(n.initialDef,e);const s=[...n.instances];for(const r of s){const i=Lr(r.type);Fs.has(i)||(i!==n.initialDef&&Oh(i,e),Fs.add(i)),r.appContext.optionsCache.delete(r.type),r.ceReload?(Fs.add(i),r.ceReload(e.styles),Fs.delete(i)):r.parent?ma(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}bp(()=>{for(const r of s)Fs.delete(Lr(r.type))})}function Oh(t,e){Pe(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function tc(t){return(e,n)=>{try{return t(e,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let jt,Ar=[],Bc=!1;function bi(t,...e){jt?jt.emit(t,...e):Bc||Ar.push({event:t,args:e})}function Sp(t,e){var n,s;jt=t,jt?(jt.enabled=!0,Ar.forEach(({event:r,args:i})=>jt.emit(r,...i)),Ar=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Sp(i,e)}),setTimeout(()=>{jt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Bc=!0,Ar=[])},3e3)):(Bc=!0,Ar=[])}function nw(t,e){bi("app:init",t,e,{Fragment:Tt,Text:Ti,Comment:Ge,Static:Ur})}function sw(t){bi("app:unmount",t)}const rw=Zl("component:added"),Cp=Zl("component:updated"),iw=Zl("component:removed"),ow=t=>{jt&&typeof jt.cleanupBuffer=="function"&&!jt.cleanupBuffer(t)&&iw(t)};function Zl(t){return e=>{bi(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const aw=kp("perf:start"),cw=kp("perf:end");function kp(t){return(e,n,s)=>{bi(t,e.appContext.app,e.uid,e,n,s)}}function lw(t,e,n){bi("component:emit",t.appContext.app,t,e,n)}function uw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(Yn(e)in h))&&R(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Yn(e)}" prop.`);else{const d=u[e];Q(d)&&(d(...n)||R(`Invalid event arguments: event validation failed for event "${e}".`))}}let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||_e;d&&(r=n.map(p=>De(p)?p.trim():p)),h&&(r=n.map(Dc))}lw(t,e,r);{const u=e.toLowerCase();u!==e&&s[Yn(u)]&&R(`Event "${u}" is emitted in component ${wa(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${$n(e)}" instead of "${e}".`)}let a,c=s[a=Yn(e)]||s[a=Yn(Qt(e))];!c&&i&&(c=s[a=Yn($n(e))]),c&&Ct(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(l,t,6,r)}}function Rp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Q(t)){const c=l=>{const u=Rp(l,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Pe(o,i),we(t)&&s.set(t,o),o)}function ga(t,e){return!t||!_i(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,$n(e))||oe(t,e))}let ut=null,Ap=null;function Do(t){const e=ut;return ut=t,Ap=t&&t.type.__scopeId||null,e}function hw(t,e=ut,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&jh(-1);const i=Do(e);let o;try{o=t(...r)}finally{Do(i),s._d&&jh(1)}return Cp(e),o};return s._n=!0,s._c=!0,s._d=!0,s}let jc=!1;function xo(){jc=!0}function nc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=t;let w,k;const O=Do(t);jc=!1;try{if(n.shapeFlag&4){const q=r||s;w=Dt(u.call(q,q,h,i,p,d,g)),k=c}else{const q=e;c===i&&xo(),w=Dt(q.length>1?q(i,{get attrs(){return xo(),c},slots:a,emit:l}):q(i,null)),k=e.props?c:fw(c)}}catch(q){$r.length=0,pa(q,t,1),w=ht(Ge)}let D=w,P;if(w.patchFlag>0&&w.patchFlag&2048&&([D,P]=dw(w)),k&&v!==!1){const q=Object.keys(k),{shapeFlag:ue}=D;if(q.length){if(ue&7)o&&q.some(Oo)&&(k=pw(k,o)),D=Xt(D,k);else if(!jc&&D.type!==Ge){const Te=Object.keys(c),z=[],re=[];for(let ye=0,$e=Te.length;ye<$e;ye++){const Re=Te[ye];_i(Re)?Oo(Re)||z.push(Re[2].toLowerCase()+Re.slice(3)):re.push(Re)}re.length&&R(`Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),z.length&&R(`Extraneous non-emits event listeners (${z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Nh(D)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=Xt(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(Nh(D)||R("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=n.transition),P?P(D):w=D,Do(O),w}const dw=t=>{const e=t.children,n=t.dynamicChildren,s=Op(e);if(!s)return[t,void 0];const r=e.indexOf(s),i=n?n.indexOf(s):-1,o=a=>{e[r]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Dt(s),o]};function Op(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Zr(s)){if(s.type!==Ge||s.children==="v-if"){if(e)return;e=s}}else return}return e}const fw=t=>{let e;for(const n in t)(n==="class"||n==="style"||_i(n))&&((e||(e={}))[n]=t[n]);return e},pw=(t,e)=>{const n={};for(const s in t)(!Oo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n},Nh=t=>t.shapeFlag&7||t.type===Ge;function mw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((r||a)&&hs||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ph(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ga(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ph(s,o,l):!0:!!o;return!1}function Ph(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ga(n,i))return!0}return!1}function gw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yw=t=>t.__isSuspense;function vw(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):bp(t)}function vo(t,e){if(!Oe)R("provide() can only be used inside setup().");else{let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function un(t,e,n=!1){const s=Oe||ut;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Q(e)?e.call(s.proxy):e;R(`injection "${String(t)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function _w(t,e){return eu(t,null,e)}const eo={};function Mr(t,e,n){return Q(e)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),eu(t,e,n)}function eu(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=_e){e||(n!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=P=>{R("Invalid watch source: ",P,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=c_()===(Oe==null?void 0:Oe.scope)?Oe:null;let l,u=!1,h=!1;if(Be(t)?(l=()=>t.value,u=Po(t)):ls(t)?(l=()=>t,s=!0):W(t)?(h=!0,u=t.some(P=>ls(P)||Po(P)),l=()=>t.map(P=>{if(Be(P))return P.value;if(ls(P))return ss(P);if(Q(P))return ln(P,c,2);a(P)})):Q(t)?e?l=()=>ln(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ct(t,c,3,[p])}:(l=yt,a(t)),e&&s){const P=l;l=()=>ss(P())}let d,p=P=>{d=O.onStop=()=>{ln(P,c,4)}},g;if(ei)if(p=yt,e?n&&Ct(e,c,3,[l(),h?[]:void 0,p]):l(),r==="sync"){const P=Ab();g=P.__watcherHandles||(P.__watcherHandles=[])}else return yt;let v=h?new Array(t.length).fill(eo):eo;const w=()=>{if(O.active)if(e){const P=O.run();(s||u||(h?P.some((q,ue)=>Gr(q,v[ue])):Gr(P,v)))&&(d&&d(),Ct(e,c,3,[P,v===eo?void 0:h&&v[0]===eo?[]:v,p]),v=P)}else O.run()};w.allowRecurse=!!e;let k;r==="sync"?k=w:r==="post"?k=()=>mt(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),k=()=>ma(w));const O=new Wl(l,k);O.onTrack=i,O.onTrigger=o,e?n?w():v=O.run():r==="post"?mt(O.run.bind(O),c&&c.suspense):O.run();const D=()=>{O.stop(),c&&c.scope&&Bl(c.scope.effects,O)};return g&&g.push(D),D}function ww(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?Np(s,t):()=>s[t]:t.bind(s,s);let i;Q(e)?i=e:(i=e.handler,n=e);const o=Oe;er(this);const a=eu(r,i.bind(s),n);return o?er(o):fs(),a}function Np(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ss(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))ss(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)ss(t[n],e);else if(Wf(t)||as(t))t.forEach(n=>{ss(n,e)});else if(Qf(t))for(const n in t)ss(t[n],e);return t}function bw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mp(()=>{t.isMounted=!0}),Up(()=>{t.isUnmounting=!0}),t}const Et=[Function,Array],Ew={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et},setup(t,{slots:e}){const n=iu(),s=bw();let r;return()=>{const i=e.default&&Dp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){let v=!1;for(const w of i)if(w.type!==Ge){if(v){R("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}o=w,v=!0}}const a=te(t),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&R(`invalid <transition> mode: ${c}`),s.isLeaving)return sc(o);const l=Dh(o);if(!l)return sc(o);const u=Hc(l,a,s,n);qc(l,u);const h=n.subTree,d=h&&Dh(h);let p=!1;const{getTransitionKey:g}=l.type;if(g){const v=g();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(d&&d.type!==Ge&&(!es(l,d)||p)){const v=Hc(d,a,s,n);if(qc(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},sc(o);c==="in-out"&&l.type!==Ge&&(v.delayLeave=(w,k,O)=>{const D=Pp(s,d);D[String(d.key)]=d,w._leaveCb=()=>{k(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},Tw=Ew;function Pp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Hc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:v,onAppear:w,onAfterAppear:k,onAppearCancelled:O}=e,D=String(t.key),P=Pp(n,t),q=(z,re)=>{z&&Ct(z,s,9,re)},ue=(z,re)=>{const ye=re[1];q(z,re),W(z)?z.every($e=>$e.length<=1)&&ye():z.length<=1&&ye()},Te={mode:i,persisted:o,beforeEnter(z){let re=a;if(!n.isMounted)if(r)re=v||a;else return;z._leaveCb&&z._leaveCb(!0);const ye=P[D];ye&&es(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),q(re,[z])},enter(z){let re=c,ye=l,$e=u;if(!n.isMounted)if(r)re=w||c,ye=k||l,$e=O||u;else return;let Re=!1;const At=z._enterCb=wn=>{Re||(Re=!0,wn?q($e,[z]):q(ye,[z]),Te.delayedLeave&&Te.delayedLeave(),z._enterCb=void 0)};re?ue(re,[z,At]):At()},leave(z,re){const ye=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return re();q(h,[z]);let $e=!1;const Re=z._leaveCb=At=>{$e||($e=!0,re(),At?q(g,[z]):q(p,[z]),z._leaveCb=void 0,P[ye]===t&&delete P[ye])};P[ye]=t,d?ue(d,[z,Re]):Re()},clone(z){return Hc(z,e,n,s)}};return Te}function sc(t){if(Ei(t))return t=Xt(t),t.children=null,t}function Dh(t){return Ei(t)?t.children?t.children[0]:void 0:t}function qc(t,e){t.shapeFlag&6&&t.component?qc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Tt?(o.patchFlag&128&&r++,s=s.concat(Dp(o.children,e,a))):(e||o.type!==Ge)&&s.push(a!=null?Xt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function xp(t){return Q(t)?{setup:t,name:t.name}:t}const _o=t=>!!t.type.__asyncLoader,Ei=t=>t.type.__isKeepAlive;function Iw(t,e){Lp(t,"a",e)}function Sw(t,e){Lp(t,"da",e)}function Lp(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ya(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ei(r.parent.vnode)&&Cw(s,e,n,r),r=r.parent}}function Cw(t,e,n,s){const r=ya(e,t,s,!0);$p(()=>{Bl(s[e],r)},n)}function ya(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Cs(),er(n);const a=Ct(e,n,t,o);return fs(),ks(),a});return s?r.unshift(i):r.push(i),i}else{const r=Yn(Xl[t].replace(/ hook$/,""));R(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const _n=t=>(e,n=Oe)=>(!ei||t==="sp")&&ya(t,(...s)=>e(...s),n),kw=_n("bm"),Mp=_n("m"),Rw=_n("bu"),Aw=_n("u"),Up=_n("bum"),$p=_n("um"),Ow=_n("sp"),Nw=_n("rtg"),Pw=_n("rtc");function Dw(t,e=Oe){ya("ec",t,e)}function Fp(t){s_(t)&&R("Do not use built-in directive ids as custom directive id: "+t)}function eP(t,e){const n=ut;if(n===null)return R("withDirectives can only be used inside render functions."),t;const s=_a(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=_e]=e[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&ss(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Qn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Cs(),Ct(c,n,8,[t.el,a,t,e]),ks())}}const zc="components";function xw(t,e){return Mw(zc,t,!0,e)||t}const Lw=Symbol();function Mw(t,e,n=!0,s=!1){const r=ut||Oe;if(r){const i=r.type;if(t===zc){const a=ou(i,!1);if(a&&(a===e||a===Qt(e)||a===vs(Qt(e))))return i}const o=xh(r[t]||i[t],e)||xh(r.appContext[t],e);if(!o&&s)return i;if(n&&!o){const a=t===zc?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else R(`resolve${vs(t.slice(0,-1))} can only be used in render() or setup().`)}function xh(t,e){return t&&(t[e]||t[Qt(e)]||t[vs(Qt(e))])}const Kc=t=>t?Zp(t)?_a(t)||t.proxy:Kc(t.parent):null,ds=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>Hs(t.props),$attrs:t=>Hs(t.attrs),$slots:t=>Hs(t.slots),$refs:t=>Hs(t.refs),$parent:t=>Kc(t.parent),$root:t=>Kc(t.root),$emit:t=>t.emit,$options:t=>nu(t),$forceUpdate:t=>t.f||(t.f=()=>ma(t.update)),$nextTick:t=>t.n||(t.n=_p.bind(t.proxy)),$watch:t=>ww.bind(t)}),tu=t=>t==="_"||t==="$",rc=(t,e)=>t!==_e&&!t.__isScriptSetup&&oe(t,e),Vp={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(rc(s,e))return o[e]=1,s[e];if(r!==_e&&oe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==_e&&oe(n,e))return o[e]=4,n[e];Wc&&(o[e]=0)}}const u=ds[e];let h,d;if(u)return e==="$attrs"&&(vt(t,"get",e),xo()),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e];ut&&(!De(e)||e.indexOf("__v")!==0)&&(r!==_e&&tu(e[0])&&oe(r,e)?R(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===ut&&R(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return rc(r,e)?(r[e]=n,!0):r.__isScriptSetup&&oe(r,e)?(R(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):s!==_e&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)?(R(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(R(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&oe(t,o)||rc(e,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(ds,o)||oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};Vp.ownKeys=t=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Uw(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(ds).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>ds[n](t),set:yt})}),e}function $w(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(s=>{Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>t.props[s],set:yt})})}function Fw(t){const{ctx:e,setupState:n}=t;Object.keys(te(n)).forEach(s=>{if(!n.__isScriptSetup){if(tu(s[0])){R(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:yt})}})}function Vw(){const t=Object.create(null);return(e,n)=>{t[n]?R(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Wc=!0;function Bw(t){const e=nu(t),n=t.proxy,s=t.ctx;Wc=!1,e.beforeCreate&&Lh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:w,beforeDestroy:k,beforeUnmount:O,destroyed:D,unmounted:P,render:q,renderTracked:ue,renderTriggered:Te,errorCaptured:z,serverPrefetch:re,expose:ye,inheritAttrs:$e,components:Re,directives:At,filters:wn}=e,Ot=Vw();{const[ie]=t.propsOptions;if(ie)for(const le in ie)Ot("Props",le)}if(l&&jw(l,s,Ot,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const le=o[ie];Q(le)?(Object.defineProperty(s,ie,{value:le.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ot("Methods",ie)):R(`Method "${ie}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`)}if(r){Q(r)||R("The data option must be a function. Plain object usage is no longer supported.");const ie=r.call(n,n);if(Hl(ie)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!we(ie))R("data() should return an object.");else{t.data=wi(ie);for(const le in ie)Ot("Data",le),tu(le[0])||Object.defineProperty(s,le,{configurable:!0,enumerable:!0,get:()=>ie[le],set:yt})}}if(Wc=!0,i)for(const ie in i){const le=i[ie],pt=Q(le)?le.bind(n,n):Q(le.get)?le.get.bind(n,n):yt;pt===yt&&R(`Computed property "${ie}" has no getter.`);const Ps=!Q(le)&&Q(le.set)?le.set.bind(n):()=>{R(`Write operation failed: computed property "${ie}" is readonly.`)},en=It({get:pt,set:Ps});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>en.value,set:Ut=>en.value=Ut}),Ot("Computed",ie)}if(a)for(const ie in a)Bp(a[ie],s,n,ie);if(c){const ie=Q(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(le=>{vo(le,ie[le])})}u&&Lh(u,t,"c");function Fe(ie,le){W(le)?le.forEach(pt=>ie(pt.bind(n))):le&&ie(le.bind(n))}if(Fe(kw,h),Fe(Mp,d),Fe(Rw,p),Fe(Aw,g),Fe(Iw,v),Fe(Sw,w),Fe(Dw,z),Fe(Pw,ue),Fe(Nw,Te),Fe(Up,O),Fe($p,P),Fe(Ow,re),W(ye))if(ye.length){const ie=t.exposed||(t.exposed={});ye.forEach(le=>{Object.defineProperty(ie,le,{get:()=>n[le],set:pt=>n[le]=pt})})}else t.exposed||(t.exposed={});q&&t.render===yt&&(t.render=q),$e!=null&&(t.inheritAttrs=$e),Re&&(t.components=Re),At&&(t.directives=At)}function jw(t,e,n=yt,s=!1){W(t)&&(t=Gc(t));for(const r in t){const i=t[r];let o;we(i)?"default"in i?o=un(i.from||r,i.default,!0):o=un(i.from||r):o=un(i),Be(o)?s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):(R(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),e[r]=o):e[r]=o,n("Inject",r)}}function Lh(t,e,n){Ct(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bp(t,e,n,s){const r=s.includes(".")?Np(n,s):()=>n[s];if(De(t)){const i=e[t];Q(i)?Mr(r,i):R(`Invalid watch handler specified by key "${t}"`,i)}else if(Q(t))Mr(r,t.bind(n));else if(we(t))if(W(t))t.forEach(i=>Bp(i,e,n,s));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)?Mr(r,i,t):R(`Invalid watch handler specified by key "${t.handler}"`,i)}else R(`Invalid watch option: "${s}"`,t)}function nu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Lo(c,l,o,!0)),Lo(c,e,o)),we(e)&&i.set(e,c),c}function Lo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Lo(t,i,n,!0),r&&r.forEach(o=>Lo(t,o,n,!0));for(const o in e)if(s&&o==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Hw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hw={data:Mh,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Jn,directives:Jn,watch:zw,provide:Mh,inject:qw};function Mh(t,e){return e?t?function(){return Pe(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function qw(t,e){return Jn(Gc(t),Gc(e))}function Gc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Jn(t,e){return t?Pe(Pe(Object.create(null),t),e):e}function zw(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=ct(t[s],e[s]);return n}function Kw(t,e,n,s=!1){const r={},i={};No(i,va,1),t.propsDefaults=Object.create(null),jp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);qp(e||{},r,t),n?t.props=s?r:M_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Ww(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Gw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=te(r),[c]=t.propsOptions;let l=!1;if(!Ww(t)&&(s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ga(t.emitsOptions,d))continue;const p=e[d];if(c)if(oe(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const g=Qt(d);r[g]=Qc(c,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{jp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=$n(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Qc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&dn(t,"set","$attrs"),qp(e||{},r,t)}function jp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mo(c))continue;const l=e[c];let u;r&&oe(r,u=Qt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ga(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=te(n),l=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Qc(r,c,h,l[h],t,!oe(l,h))}}return o}function Qc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Q(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(er(r),s=l[n]=c.call(null,e),fs())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function Hp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Q(t)){const u=h=>{c=!0;const[d,p]=Hp(h,e,!0);Pe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&s.set(t,Ws),Ws;if(W(i))for(let u=0;u<i.length;u++){De(i[u])||R("props must be strings when using array syntax.",i[u]);const h=Qt(i[u]);Uh(h)&&(o[h]=_e)}else if(i){we(i)||R("invalid props options",i);for(const u in i){const h=Qt(u);if(Uh(h)){const d=i[u],p=o[h]=W(d)||Q(d)?{type:d}:Object.assign({},d);if(p){const g=Fh(Boolean,p.type),v=Fh(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||oe(p,"default"))&&a.push(h)}}}}const l=[o,a];return we(t)&&s.set(t,l),l}function Uh(t){return t[0]!=="$"?!0:(R(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Xc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $h(t,e){return Xc(t)===Xc(e)}function Fh(t,e){return W(e)?e.findIndex(n=>$h(n,t)):Q(e)&&$h(e,t)?0:-1}function qp(t,e,n){const s=te(e),r=n.propsOptions[0];for(const i in r){let o=r[i];o!=null&&Qw(i,s[i],o,!oe(t,i)&&!oe(t,$n(i)))}}function Qw(t,e,n,s){const{type:r,required:i,validator:o}=n;if(i&&s){R('Missing required prop: "'+t+'"');return}if(!(e==null&&!n.required)){if(r!=null&&r!==!0){let a=!1;const c=W(r)?r:[r],l=[];for(let u=0;u<c.length&&!a;u++){const{valid:h,expectedType:d}=Yw(e,c[u]);l.push(d||""),a=h}if(!a){R(Jw(t,e,l));return}}o&&!o(e)&&R('Invalid prop: custom validator check failed for prop "'+t+'".')}}const Xw=Kn("String,Number,Boolean,Function,Symbol,BigInt");function Yw(t,e){let n;const s=Xc(e);if(Xw(s)){const r=typeof t;n=r===s.toLowerCase(),!n&&r==="object"&&(n=t instanceof e)}else s==="Object"?n=we(t):s==="Array"?n=W(t):s==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:s}}function Jw(t,e,n){let s=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(vs).join(" | ")}`;const r=n[0],i=ql(e),o=Vh(e,r),a=Vh(e,i);return n.length===1&&Bh(r)&&!Zw(r,i)&&(s+=` with value ${o}`),s+=`, got ${i} `,Bh(i)&&(s+=`with value ${a}.`),s}function Vh(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Bh(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function Zw(...t){return t.some(e=>e.toLowerCase()==="boolean")}const zp=t=>t[0]==="_"||t==="$stable",su=t=>W(t)?t.map(Dt):[Dt(t)],eb=(t,e,n)=>{if(e._n)return e;const s=hw((...r)=>(Oe&&R(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),su(e(...r))),n);return s._c=!1,s},Kp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zp(r))continue;const i=t[r];if(Q(i))e[r]=eb(r,i,s);else if(i!=null){R(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const o=su(i);e[r]=()=>o}}},Wp=(t,e)=>{Ei(t.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=su(e);t.slots.default=()=>n},tb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),No(e,"_",n)):Kp(e,t.slots={})}else t.slots={},e&&Wp(t,e);No(t.slots,va,1)},nb=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?hs?Pe(r,e):n&&a===1?i=!1:(Pe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Kp(e,r)),o=e}else e&&(Wp(t,e),o={default:1});if(i)for(const a in r)!zp(a)&&!(a in o)&&delete r[a]};function Gp(){return{app:null,config:{isNativeTag:Kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sb=0;function rb(t,e){return function(s,r=null){Q(s)||(s=Object.assign({},s)),r!=null&&!we(r)&&(R("root props passed to app.mount() must be an object."),r=null);const i=Gp(),o=new Set;let a=!1;const c=i.app={_uid:sb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:qh,get config(){return i.config},set config(l){R("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?R("Plugin has already been applied to target app."):l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)?(o.add(l),l(c,...u)):R('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?R("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return Jc(l,i.config),u?(i.components[l]&&R(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return Fp(l),u?(i.directives[l]&&R(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=ht(s,r);return d.appContext=i,i.reload=()=>{t(Xt(d),l,h)},u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=d.component,nw(c,qh),_a(d.component)||d.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,sw(c),delete c._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&R(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c}};return c}}function Yc(t,e,n,s,r=!1){if(W(t)){t.forEach((d,p)=>Yc(d,e&&(W(e)?e[p]:e),n,s,r));return}if(_o(s)&&!r)return;const i=s.shapeFlag&4?_a(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t;if(!a){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):Be(l)&&(l.value=null)),Q(c))ln(c,a,12,[o,u]);else{const d=De(c),p=Be(c);if(d||p){const g=()=>{if(t.f){const v=d?oe(h,c)?h[c]:u[c]:c.value;r?W(v)&&Bl(v,i):W(v)?v.includes(i)||v.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):R("Invalid template ref type:",c,`(${typeof c})`)};o?(g.id=-1,mt(g,n)):g()}else R("Invalid template ref type:",c,`(${typeof c})`)}}let br,kn;function nn(t,e){t.appContext.config.performance&&Mo()&&kn.mark(`vue-${e}-${t.uid}`),aw(t,e,Mo()?kn.now():Date.now())}function sn(t,e){if(t.appContext.config.performance&&Mo()){const n=`vue-${e}-${t.uid}`,s=n+":end";kn.mark(s),kn.measure(`<${wa(t,t.type)}> ${e}`,n,s),kn.clearMarks(n),kn.clearMarks(s)}cw(t,e,Mo()?kn.now():Date.now())}function Mo(){return br!==void 0||(typeof window<"u"&&window.performance?(br=!0,kn=window.performance):br=!1),br}function ib(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const mt=vw;function ob(t){return ab(t)}function ab(t,e){ib();const n=Xf();n.__VUE__=!0,Sp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=yt,insertStaticContent:g}=t,v=(f,m,y,E=null,b=null,A=null,L=!1,C=null,N=hs?!1:!!m.dynamicChildren)=>{if(f===m)return;f&&!es(f,m)&&(E=$(f),bt(f,b,A,!0),f=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:T,ref:B,shapeFlag:U}=m;switch(T){case Ti:w(f,m,y,E);break;case Ge:k(f,m,y,E);break;case Ur:f==null?O(m,y,E,L):D(f,m,y,L);break;case Tt:At(f,m,y,E,b,A,L,C,N);break;default:U&1?ue(f,m,y,E,b,A,L,C,N):U&6?wn(f,m,y,E,b,A,L,C,N):U&64||U&128?T.process(f,m,y,E,b,A,L,C,N,Ee):R("Invalid VNode type:",T,`(${typeof T})`)}B!=null&&b&&Yc(B,f&&f.ref,A,m||f,!m)},w=(f,m,y,E)=>{if(f==null)s(m.el=a(m.children),y,E);else{const b=m.el=f.el;m.children!==f.children&&l(b,m.children)}},k=(f,m,y,E)=>{f==null?s(m.el=c(m.children||""),y,E):m.el=f.el},O=(f,m,y,E)=>{[f.el,f.anchor]=g(f.children,m,y,E,f.el,f.anchor)},D=(f,m,y,E)=>{if(m.children!==f.children){const b=d(f.anchor);q(f),[m.el,m.anchor]=g(m.children,y,b,E)}else m.el=f.el,m.anchor=f.anchor},P=({el:f,anchor:m},y,E)=>{let b;for(;f&&f!==m;)b=d(f),s(f,y,E),f=b;s(m,y,E)},q=({el:f,anchor:m})=>{let y;for(;f&&f!==m;)y=d(f),r(f),f=y;r(m)},ue=(f,m,y,E,b,A,L,C,N)=>{L=L||m.type==="svg",f==null?Te(m,y,E,b,A,L,C,N):ye(f,m,b,A,L,C,N)},Te=(f,m,y,E,b,A,L,C)=>{let N,T;const{type:B,props:U,shapeFlag:j,transition:J,dirs:ae}=f;if(N=f.el=o(f.type,A,U&&U.is,U),j&8?u(N,f.children):j&16&&re(f.children,N,null,E,b,A&&B!=="foreignObject",L,C),ae&&Qn(f,null,E,"created"),z(N,f,f.scopeId,L,E),U){for(const ve in U)ve!=="value"&&!mo(ve)&&i(N,ve,null,U[ve],A,f.children,E,b,x);"value"in U&&i(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&Ft(T,E,f)}Object.defineProperty(N,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:E,enumerable:!1}),ae&&Qn(f,null,E,"beforeMount");const be=(!b||b&&!b.pendingBranch)&&J&&!J.persisted;be&&J.beforeEnter(N),s(N,m,y),((T=U&&U.onVnodeMounted)||be||ae)&&mt(()=>{T&&Ft(T,E,f),be&&J.enter(N),ae&&Qn(f,null,E,"mounted")},b)},z=(f,m,y,E,b)=>{if(y&&p(f,y),E)for(let A=0;A<E.length;A++)p(f,E[A]);if(b){let A=b.subTree;if(A.patchFlag>0&&A.patchFlag&2048&&(A=Op(A.children)||A),m===A){const L=b.vnode;z(f,L,L.scopeId,L.slotScopeIds,b.parent)}}},re=(f,m,y,E,b,A,L,C,N=0)=>{for(let T=N;T<f.length;T++){const B=f[T]=C?Sn(f[T]):Dt(f[T]);v(null,B,m,y,E,b,A,L,C)}},ye=(f,m,y,E,b,A,L)=>{const C=m.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:B}=m;N|=f.patchFlag&16;const U=f.props||_e,j=m.props||_e;let J;y&&Xn(y,!1),(J=j.onVnodeBeforeUpdate)&&Ft(J,y,m,f),B&&Qn(m,f,y,"beforeUpdate"),y&&Xn(y,!0),hs&&(N=0,L=!1,T=null);const ae=b&&m.type!=="foreignObject";if(T?($e(f.dynamicChildren,T,C,y,E,ae,A),y&&y.type.__hmrId&&wo(f,m)):L||pt(f,m,C,null,y,E,ae,A,!1),N>0){if(N&16)Re(C,m,U,j,y,E,b);else if(N&2&&U.class!==j.class&&i(C,"class",null,j.class,b),N&4&&i(C,"style",U.style,j.style,b),N&8){const be=m.dynamicProps;for(let ve=0;ve<be.length;ve++){const xe=be[ve],Nt=U[xe],xs=j[xe];(xs!==Nt||xe==="value")&&i(C,xe,Nt,xs,b,f.children,y,E,x)}}N&1&&f.children!==m.children&&u(C,m.children)}else!L&&T==null&&Re(C,m,U,j,y,E,b);((J=j.onVnodeUpdated)||B)&&mt(()=>{J&&Ft(J,y,m,f),B&&Qn(m,f,y,"updated")},E)},$e=(f,m,y,E,b,A,L)=>{for(let C=0;C<m.length;C++){const N=f[C],T=m[C],B=N.el&&(N.type===Tt||!es(N,T)||N.shapeFlag&70)?h(N.el):y;v(N,T,B,null,E,b,A,L,!0)}},Re=(f,m,y,E,b,A,L)=>{if(y!==E){if(y!==_e)for(const C in y)!mo(C)&&!(C in E)&&i(f,C,y[C],null,L,m.children,b,A,x);for(const C in E){if(mo(C))continue;const N=E[C],T=y[C];N!==T&&C!=="value"&&i(f,C,T,N,L,m.children,b,A,x)}"value"in E&&i(f,"value",y.value,E.value)}},At=(f,m,y,E,b,A,L,C,N)=>{const T=m.el=f?f.el:a(""),B=m.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:j,slotScopeIds:J}=m;(hs||U&2048)&&(U=0,N=!1,j=null),J&&(C=C?C.concat(J):J),f==null?(s(T,y,E),s(B,y,E),re(m.children,y,B,b,A,L,C,N)):U>0&&U&64&&j&&f.dynamicChildren?($e(f.dynamicChildren,j,y,b,A,L,C),b&&b.type.__hmrId?wo(f,m):(m.key!=null||b&&m===b.subTree)&&wo(f,m,!0)):pt(f,m,y,B,b,A,L,C,N)},wn=(f,m,y,E,b,A,L,C,N)=>{m.slotScopeIds=C,f==null?m.shapeFlag&512?b.ctx.activate(m,y,E,L,N):Ot(m,y,E,b,A,L,N):Fe(f,m,N)},Ot=(f,m,y,E,b,A,L)=>{const C=f.component=wb(f,E,b);if(C.type.__hmrId&&J_(C),go(f),nn(C,"mount"),Ei(f)&&(C.ctx.renderer=Ee),nn(C,"init"),Eb(C),sn(C,"init"),C.asyncDep){if(b&&b.registerDep(C,ie),!f.el){const N=C.subTree=ht(Ge);k(null,N,m,y)}return}ie(C,f,m,y,b,A,L),yo(),sn(C,"mount")},Fe=(f,m,y)=>{const E=m.component=f.component;if(mw(f,m,y))if(E.asyncDep&&!E.asyncResolved){go(m),le(E,m,y),yo();return}else E.next=m,X_(E.update),E.update();else m.el=f.el,E.vnode=m},ie=(f,m,y,E,b,A,L)=>{const C=()=>{if(f.isMounted){let{next:B,bu:U,u:j,parent:J,vnode:ae}=f,be=B,ve;go(B||f.vnode),Xn(f,!1),B?(B.el=ae.el,le(f,B,L)):B=ae,U&&$s(U),(ve=B.props&&B.props.onVnodeBeforeUpdate)&&Ft(ve,J,B,ae),Xn(f,!0),nn(f,"render");const xe=nc(f);sn(f,"render");const Nt=f.subTree;f.subTree=xe,nn(f,"patch"),v(Nt,xe,h(Nt.el),$(Nt),f,b,A),sn(f,"patch"),B.el=xe.el,be===null&&gw(f,xe.el),j&&mt(j,b),(ve=B.props&&B.props.onVnodeUpdated)&&mt(()=>Ft(ve,J,B,ae),b),Cp(f),yo()}else{let B;const{el:U,props:j}=m,{bm:J,m:ae,parent:be}=f,ve=_o(m);if(Xn(f,!1),J&&$s(J),!ve&&(B=j&&j.onVnodeBeforeMount)&&Ft(B,be,m),Xn(f,!0),U&&ee){const xe=()=>{nn(f,"render"),f.subTree=nc(f),sn(f,"render"),nn(f,"hydrate"),ee(U,f.subTree,f,b,null),sn(f,"hydrate")};ve?m.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{nn(f,"render");const xe=f.subTree=nc(f);sn(f,"render"),nn(f,"patch"),v(null,xe,y,E,f,b,A),sn(f,"patch"),m.el=xe.el}if(ae&&mt(ae,b),!ve&&(B=j&&j.onVnodeMounted)){const xe=m;mt(()=>Ft(B,be,xe),b)}(m.shapeFlag&256||be&&_o(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&mt(f.a,b),f.isMounted=!0,rw(f),m=y=E=null}},N=f.effect=new Wl(C,()=>ma(T),f.scope),T=f.update=()=>N.run();T.id=f.uid,Xn(f,!0),N.onTrack=f.rtc?B=>$s(f.rtc,B):void 0,N.onTrigger=f.rtg?B=>$s(f.rtg,B):void 0,T.ownerInstance=f,T()},le=(f,m,y)=>{m.component=f;const E=f.vnode.props;f.vnode=m,f.next=null,Gw(f,m.props,E,y),nb(f,m.children,y),Cs(),Ah(),ks()},pt=(f,m,y,E,b,A,L,C,N=!1)=>{const T=f&&f.children,B=f?f.shapeFlag:0,U=m.children,{patchFlag:j,shapeFlag:J}=m;if(j>0){if(j&128){en(T,U,y,E,b,A,L,C,N);return}else if(j&256){Ps(T,U,y,E,b,A,L,C,N);return}}J&8?(B&16&&x(T,b,A),U!==T&&u(y,U)):B&16?J&16?en(T,U,y,E,b,A,L,C,N):x(T,b,A,!0):(B&8&&u(y,""),J&16&&re(U,y,E,b,A,L,C,N))},Ps=(f,m,y,E,b,A,L,C,N)=>{f=f||Ws,m=m||Ws;const T=f.length,B=m.length,U=Math.min(T,B);let j;for(j=0;j<U;j++){const J=m[j]=N?Sn(m[j]):Dt(m[j]);v(f[j],J,y,null,b,A,L,C,N)}T>B?x(f,b,A,!0,!1,U):re(m,y,E,b,A,L,C,N,U)},en=(f,m,y,E,b,A,L,C,N)=>{let T=0;const B=m.length;let U=f.length-1,j=B-1;for(;T<=U&&T<=j;){const J=f[T],ae=m[T]=N?Sn(m[T]):Dt(m[T]);if(es(J,ae))v(J,ae,y,null,b,A,L,C,N);else break;T++}for(;T<=U&&T<=j;){const J=f[U],ae=m[j]=N?Sn(m[j]):Dt(m[j]);if(es(J,ae))v(J,ae,y,null,b,A,L,C,N);else break;U--,j--}if(T>U){if(T<=j){const J=j+1,ae=J<B?m[J].el:E;for(;T<=j;)v(null,m[T]=N?Sn(m[T]):Dt(m[T]),y,ae,b,A,L,C,N),T++}}else if(T>j)for(;T<=U;)bt(f[T],b,A,!0),T++;else{const J=T,ae=T,be=new Map;for(T=ae;T<=j;T++){const ot=m[T]=N?Sn(m[T]):Dt(m[T]);ot.key!=null&&(be.has(ot.key)&&R("Duplicate keys found during update:",JSON.stringify(ot.key),"Make sure keys are unique."),be.set(ot.key,T))}let ve,xe=0;const Nt=j-ae+1;let xs=!1,vh=0;const wr=new Array(Nt);for(T=0;T<Nt;T++)wr[T]=0;for(T=J;T<=U;T++){const ot=f[T];if(xe>=Nt){bt(ot,b,A,!0);continue}let $t;if(ot.key!=null)$t=be.get(ot.key);else for(ve=ae;ve<=j;ve++)if(wr[ve-ae]===0&&es(ot,m[ve])){$t=ve;break}$t===void 0?bt(ot,b,A,!0):(wr[$t-ae]=T+1,$t>=vh?vh=$t:xs=!0,v(ot,m[$t],y,null,b,A,L,C,N),xe++)}const _h=xs?cb(wr):Ws;for(ve=_h.length-1,T=Nt-1;T>=0;T--){const ot=ae+T,$t=m[ot],wh=ot+1<B?m[ot+1].el:E;wr[T]===0?v(null,$t,y,wh,b,A,L,C,N):xs&&(ve<0||T!==_h[ve]?Ut($t,y,wh,2):ve--)}}},Ut=(f,m,y,E,b=null)=>{const{el:A,type:L,transition:C,children:N,shapeFlag:T}=f;if(T&6){Ut(f.component.subTree,m,y,E);return}if(T&128){f.suspense.move(m,y,E);return}if(T&64){L.move(f,m,y,Ee);return}if(L===Tt){s(A,m,y);for(let U=0;U<N.length;U++)Ut(N[U],m,y,E);s(f.anchor,m,y);return}if(L===Ur){P(f,m,y);return}if(E!==2&&T&1&&C)if(E===0)C.beforeEnter(A),s(A,m,y),mt(()=>C.enter(A),b);else{const{leave:U,delayLeave:j,afterLeave:J}=C,ae=()=>s(A,m,y),be=()=>{U(A,()=>{ae(),J&&J()})};j?j(A,ae,be):be()}else s(A,m,y)},bt=(f,m,y,E=!1,b=!1)=>{const{type:A,props:L,ref:C,children:N,dynamicChildren:T,shapeFlag:B,patchFlag:U,dirs:j}=f;if(C!=null&&Yc(C,null,y,f,!0),B&256){m.ctx.deactivate(f);return}const J=B&1&&j,ae=!_o(f);let be;if(ae&&(be=L&&L.onVnodeBeforeUnmount)&&Ft(be,m,f),B&6)M(f.component,y,E);else{if(B&128){f.suspense.unmount(y,E);return}J&&Qn(f,null,m,"beforeUnmount"),B&64?f.type.remove(f,m,y,b,Ee,E):T&&(A!==Tt||U>0&&U&64)?x(T,m,y,!1,!0):(A===Tt&&U&384||!b&&B&16)&&x(N,m,y),E&&Ds(f)}(ae&&(be=L&&L.onVnodeUnmounted)||J)&&mt(()=>{be&&Ft(be,m,f),J&&Qn(f,null,m,"unmounted")},y)},Ds=f=>{const{type:m,el:y,anchor:E,transition:b}=f;if(m===Tt){f.patchFlag>0&&f.patchFlag&2048&&b&&!b.persisted?f.children.forEach(L=>{L.type===Ge?r(L.el):Ds(L)}):_(y,E);return}if(m===Ur){q(f);return}const A=()=>{r(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:L,delayLeave:C}=b,N=()=>L(y,A);C?C(f.el,A,N):N()}else A()},_=(f,m)=>{let y;for(;f!==m;)y=d(f),r(f),f=y;r(m)},M=(f,m,y)=>{f.type.__hmrId&&Z_(f);const{bum:E,scope:b,update:A,subTree:L,um:C}=f;E&&$s(E),b.stop(),A&&(A.active=!1,bt(L,f,m,y)),C&&mt(C,m),mt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve()),ow(f)},x=(f,m,y,E=!1,b=!1,A=0)=>{for(let L=A;L<f.length;L++)bt(f[L],m,y,E,b)},$=f=>f.shapeFlag&6?$(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),he=(f,m,y)=>{f==null?m._vnode&&bt(m._vnode,null,null,!0):v(m._vnode||null,f,m,null,null,null,y),Ah(),Ep(),m._vnode=f},Ee={p:v,um:bt,m:Ut,r:Ds,mt:Ot,mc:re,pc:pt,pbc:$e,n:$,o:t};let se,ee;return e&&([se,ee]=e(Ee)),{render:he,hydrate:se,createApp:rb(he,se)}}function Xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wo(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Sn(r[i]),a.el=o.el),n||wo(o,a)),a.type===Ti&&(a.el=o.el),a.type===Ge&&!a.el&&(a.el=o.el)}}function cb(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const lb=t=>t.__isTeleport,Tt=Symbol("Fragment"),Ti=Symbol("Text"),Ge=Symbol("Comment"),Ur=Symbol("Static"),$r=[];let xt=null;function Qp(t=!1){$r.push(xt=t?null:[])}function ub(){$r.pop(),xt=$r[$r.length-1]||null}let Jr=1;function jh(t){Jr+=t}function Xp(t){return t.dynamicChildren=Jr>0?xt||Ws:null,ub(),Jr>0&&xt&&xt.push(t),t}function hb(t,e,n,s,r,i){return Xp(qs(t,e,n,s,r,i,!0))}function db(t,e,n,s,r){return Xp(ht(t,e,n,s,r,!0))}function Zr(t){return t?t.__v_isVNode===!0:!1}function es(t,e){return e.shapeFlag&6&&Fs.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const fb=(...t)=>pb(...t),va="__vInternal",Yp=({key:t})=>t??null,bo=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Be(t)||Q(t)?{i:ut,r:t,k:e,f:!!n}:t:null;function qs(t,e=null,n=null,s=0,r=null,i=t===Tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yp(e),ref:e&&bo(e),scopeId:Ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ut};return a?(ru(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),c.key!==c.key&&R("VNode created with invalid key (NaN). VNode type:",c.type),Jr>0&&!o&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const ht=fb;function pb(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Lw)&&(t||R(`Invalid vnode type when creating vnode: ${t}.`),t=Ge),Zr(t)){const a=Xt(t,e,!0);return n&&ru(a,n),Jr>0&&!i&&xt&&(a.shapeFlag&6?xt[xt.indexOf(t)]=a:xt.push(a)),a.patchFlag|=-2,a}if(nm(t)&&(t=t.__vccOpts),e){e=mb(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Vl(a)),we(c)&&(Fc(c)&&!W(c)&&(c=Pe({},c)),e.style=Fl(c))}const o=De(t)?1:yw(t)?128:lb(t)?64:we(t)?4:Q(t)?2:0;return o&4&&Fc(t)&&(t=te(t),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),qs(t,e,n,s,r,o,i,!0)}function mb(t){return t?Fc(t)||va in t?Pe({},t):t:null}function Xt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?yb(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yp(a),ref:e&&e.ref?n&&r?W(r)?r.concat(bo(e)):[r,bo(e)]:bo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&W(o)?o.map(Jp):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xt(t.ssContent),ssFallback:t.ssFallback&&Xt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Jp(t){const e=Xt(t);return W(t.children)&&(e.children=t.children.map(Jp)),e}function gb(t=" ",e=0){return ht(Ti,null,t,e)}function tP(t,e){const n=ht(Ur,null,t);return n.staticCount=e,n}function nP(t="",e=!1){return e?(Qp(),db(Ge,null,t)):ht(Ge,null,t)}function Dt(t){return t==null||typeof t=="boolean"?ht(Ge):W(t)?ht(Tt,null,t.slice()):typeof t=="object"?Sn(t):ht(Ti,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xt(t)}function ru(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ru(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(va in e)?e._ctx=ut:r===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),s&64?(n=16,e=[gb(e)]):n=8);t.children=e,t.shapeFlag|=n}function yb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Vl([e.class,s.class]));else if(r==="style")e.style=Fl([e.style,s.style]);else if(_i(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ft(t,e,n,s=null){Ct(t,e,7,[n,s])}const vb=Gp();let _b=0;function wb(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||vb,i={uid:_b++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new o_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hp(s,r),emitsOptions:Rp(s,r),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=Uw(i),i.root=e?e.root:i,i.emit=uw.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const iu=()=>Oe||ut,er=t=>{Oe=t,t.scope.on()},fs=()=>{Oe&&Oe.scope.off(),Oe=null},bb=Kn("slot,component");function Jc(t,e){const n=e.isNativeTag||Kf;(bb(t)||n(t))&&R("Do not use built-in or reserved HTML elements as component id: "+t)}function Zp(t){return t.vnode.shapeFlag&4}let ei=!1;function Eb(t,e=!1){ei=e;const{props:n,children:s}=t.vnode,r=Zp(t);Kw(t,n,r,e),tb(t,s);const i=r?Tb(t,e):void 0;return ei=!1,i}function Tb(t,e){var n;const s=t.type;{if(s.name&&Jc(s.name,t.appContext.config),s.components){const i=Object.keys(s.components);for(let o=0;o<i.length;o++)Jc(i[o],t.appContext.config)}if(s.directives){const i=Object.keys(s.directives);for(let o=0;o<i.length;o++)Fp(i[o])}s.compilerOptions&&em()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=hp(new Proxy(t.ctx,Vp)),$w(t);const{setup:r}=s;if(r){const i=t.setupContext=r.length>1?Sb(t):null;er(t),Cs();const o=ln(r,t,0,[Hs(t.props),i]);if(ks(),fs(),Hl(o)){if(o.then(fs,fs),e)return o.then(a=>{Hh(t,a,e)}).catch(a=>{pa(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=s.name)!==null&&n!==void 0?n:"Anonymous";R(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Hh(t,o,e)}else tm(t,e)}function Hh(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)?(Zr(e)&&R("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=mp(e),Fw(t)):e!==void 0&&R(`setup() should return an object. Received: ${e===null?"null":typeof e}`),tm(t,n)}let Zc;const em=()=>!Zc;function tm(t,e,n){const s=t.type;if(!t.render){if(!e&&Zc&&!s.render){const r=s.template||nu(t).template;if(r){nn(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Pe(Pe({isCustomElement:i,delimiters:a},o),c);s.render=Zc(r,l),sn(t,"compile")}}t.render=s.render||yt}er(t),Cs(),Bw(t),ks(),fs(),!s.render&&t.render===yt&&!e&&(s.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function Ib(t){return new Proxy(t.attrs,{get(e,n){return xo(),vt(t,"get","$attrs"),e[n]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}})}function Sb(t){const e=s=>{if(t.exposed&&R("expose() should be called only once per setup()."),s!=null){let r=typeof s;r==="object"&&(W(s)?r="array":Be(s)&&(r="ref")),r!=="object"&&R(`expose() should be passed a plain object, received ${r}.`)}t.exposed=s||{}};let n;return Object.freeze({get attrs(){return n||(n=Ib(t))},get slots(){return Hs(t.slots)},get emit(){return(s,...r)=>t.emit(s,...r)},expose:e})}function _a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mp(hp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ds)return ds[n](t)},has(e,n){return n in e||n in ds}}))}const Cb=/(?:^|[-_])(\w)/g,kb=t=>t.replace(Cb,e=>e.toUpperCase()).replace(/[-_]/g,"");function ou(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function wa(t,e,n=!1){let s=ou(e);if(!s&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&t&&t.parent){const r=i=>{for(const o in i)if(i[o]===e)return o};s=r(t.components||t.parent.type.components)||r(t.appContext.components)}return s?kb(s):n?"App":"Anonymous"}function nm(t){return Q(t)&&"__vccOpts"in t}const It=(t,e)=>j_(t,e,ei);function sm(t,e,n){const s=arguments.length;return s===2?we(e)&&!W(e)?Zr(e)?ht(t,null,[e]):ht(t,e):ht(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zr(n)&&(n=[n]),ht(t,e,n))}const Rb=Symbol("ssrContext"),Ab=()=>{{const t=un(Rb);return t||R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function ic(t){return!!(t&&t.__v_isShallow)}function Ob(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(h){return we(h)?h.__isVue?["div",t,"VueInstance"]:Be(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:ls(h)?["div",{},["span",t,ic(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${Vn(h)?" (readonly)":""}`]:Vn(h)?["div",{},["span",t,ic(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",te(h.props))),h.setupState!==_e&&d.push(o("setup",h.setupState)),h.data!==_e&&d.push(o("data",te(h.data)));const p=c(h,"computed");p&&d.push(o("computed",p));const g=c(h,"inject");return g&&d.push(o("injected",g)),d.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=Pe({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",s,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",s,h]:we(h)?["object",{object:d?te(h):h}]:["span",n,String(h)]}function c(h,d){const p=h.type;if(Q(p))return;const g={};for(const v in h.ctx)l(p,v,d)&&(g[v]=h.ctx[v]);return g}function l(h,d,p){const g=h[p];if(W(g)&&g.includes(d)||we(g)&&d in g||h.extends&&l(h.extends,d,p)||h.mixins&&h.mixins.some(v=>l(v,d,p)))return!0}function u(h){return ic(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const qh="3.2.47",Nb="http://www.w3.org/2000/svg",ts=typeof document<"u"?document:null,zh=ts&&ts.createElement("template"),Pb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ts.createElementNS(Nb,t):ts.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ts.createTextNode(t),createComment:t=>ts.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ts.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{zh.innerHTML=s?`<svg>${t}</svg>`:t;const a=zh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Db(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function xb(t,e,n){const s=t.style,r=De(n);if(n&&!r){if(e&&!De(e))for(const i in e)n[i]==null&&el(s,i,"");for(const i in n)el(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Lb=/[^\\];\s*$/,Kh=/\s*!important$/;function el(t,e,n){if(W(n))n.forEach(s=>el(t,e,s));else if(n==null&&(n=""),Lb.test(n)&&R(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const s=Mb(t,e);Kh.test(n)?t.setProperty($n(s),n.replace(Kh,""),"important"):t[s]=n}}const Wh=["Webkit","Moz","ms"],oc={};function Mb(t,e){const n=oc[e];if(n)return n;let s=Qt(e);if(s!=="filter"&&s in t)return oc[e]=s;s=vs(s);for(let r=0;r<Wh.length;r++){const i=Wh[r]+s;if(i in t)return oc[e]=i}return e}const Gh="http://www.w3.org/1999/xlink";function Ub(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Gh,e.slice(6,e.length)):t.setAttributeNS(Gh,e,n);else{const i=e_(e);n==null||i&&!qf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function $b(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch(c){a||R(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&t.removeAttribute(e)}function Vs(t,e,n,s){t.addEventListener(e,n,s)}function Fb(t,e,n,s){t.removeEventListener(e,n,s)}function Vb(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Bb(e);if(s){const l=i[e]=qb(s,r);Vs(t,a,l,c)}else o&&(Fb(t,a,o,c),i[e]=void 0)}}const Qh=/(?:Once|Passive|Capture)$/;function Bb(t){let e;if(Qh.test(t)){e={};let s;for(;s=t.match(Qh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$n(t.slice(2)),e]}let ac=0;const jb=Promise.resolve(),Hb=()=>ac||(jb.then(()=>ac=0),ac=Date.now());function qb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ct(zb(s,n.value),e,5,[s])};return n.value=t,n.attached=Hb(),n}function zb(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Xh=/^on[a-z]/,Kb=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Db(t,s,r):e==="style"?xb(t,n,s):_i(e)?Oo(e)||Vb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wb(t,e,s,r))?$b(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ub(t,e,s,r))};function Wb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Xh.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xh.test(e)&&De(n)?!1:e in t}const Gb={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Tw.props;const Yh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>$s(e,n):e};function Qb(t){t.target.composing=!0}function Jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sP={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Yh(r);const i=s||r.props&&r.props.type==="number";Vs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Dc(a)),t._assign(a)}),n&&Vs(t,"change",()=>{t.value=t.value.trim()}),e||(Vs(t,"compositionstart",Qb),Vs(t,"compositionend",Jh),Vs(t,"change",Jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Yh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Dc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Xb=Pe({patchProp:Kb},Pb);let Zh;function Yb(){return Zh||(Zh=ob(Xb))}const Jb=(...t)=>{const e=Yb().createApp(...t);Zb(e),eE(e);const{mount:n}=e;return e.mount=s=>{const r=tE(s);if(!r)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Zb(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>Yv(e)||Jv(e),writable:!1})}function eE(t){if(em()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return R(s),n},set(){R(s)}})}}function tE(t){if(De(t)){const e=document.querySelector(t);return e||R(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function nE(){Ob()}nE();/**
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
 */const rm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new rE;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iE=function(t){const e=rm(t);return im.encodeByteArray(e,!0)},Uo=function(t){return iE(t).replace(/\./g,"")},om=function(t){try{return im.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aE=()=>oE().__FIREBASE_DEFAULTS__,cE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&om(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return aE()||cE()||lE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},am=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},au=t=>{const e=am(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uE=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config},cm=t=>{var e;return(e=ba())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function lm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uo(JSON.stringify(n)),Uo(JSON.stringify(o)),a].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function fE(){var t;const e=(t=ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gE(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yE(){try{return typeof indexedDB=="object"}catch{return!1}}function vE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const _E="FirebaseError";class Zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_E,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Zt(r,a,s)}}function wE(t,e){return t.replace(bE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const bE=/\{\$([^}]+)}/g;function EE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $o(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ed(i)&&ed(o)){if(!$o(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ed(t){return t!==null&&typeof t=="object"}/**
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
 */function Si(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Or(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TE(t,e){const n=new IE(t,e);return n.subscribe.bind(n)}class IE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");SE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=cc),r.error===void 0&&(r.error=cc),r.complete===void 0&&(r.complete=cc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cc(){}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class CE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RE(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kE(t){return t===Zn?void 0:t}function RE(t){return t.instantiationMode==="EAGER"}/**
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
 */class AE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const OE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},NE=pe.INFO,PE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},DE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=PE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cu{constructor(e){this.name=e,this._logLevel=NE,this._logHandler=DE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const xE=(t,e)=>e.some(n=>t instanceof n);let td,nd;function LE(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ME(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const um=new WeakMap,tl=new WeakMap,hm=new WeakMap,lc=new WeakMap,lu=new WeakMap;function UE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&um.set(n,t)}).catch(()=>{}),lu.set(e,t),e}function $E(t){if(tl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tl.set(t,e)}let nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FE(t){nl=t(nl)}function VE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(uc(this),e,...n);return hm.set(s,e.sort?e.sort():[e]),xn(s)}:ME().includes(t)?function(...e){return t.apply(uc(this),e),xn(um.get(this))}:function(...e){return xn(t.apply(uc(this),e))}}function BE(t){return typeof t=="function"?VE(t):(t instanceof IDBTransaction&&$E(t),xE(t,LE())?new Proxy(t,nl):t)}function xn(t){if(t instanceof IDBRequest)return UE(t);if(lc.has(t))return lc.get(t);const e=BE(t);return e!==t&&(lc.set(t,e),lu.set(e,t)),e}const uc=t=>lu.get(t);function jE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=xn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(xn(o.result),c.oldVersion,c.newVersion,xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const HE=["get","getKey","getAll","getAllKeys","count"],qE=["put","add","delete","clear"],hc=new Map;function sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hc.get(e))return hc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=qE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||HE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return hc.set(e,i),i}FE(t=>({...t,get:(e,n,s)=>sd(e,n)||t.get(e,n,s),has:(e,n)=>!!sd(e,n)||t.has(e,n)}));/**
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
 */class zE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function KE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sl="@firebase/app",rd="0.9.7";/**
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
 */const ws=new cu("@firebase/app"),WE="@firebase/app-compat",GE="@firebase/analytics-compat",QE="@firebase/analytics",XE="@firebase/app-check-compat",YE="@firebase/app-check",JE="@firebase/auth",ZE="@firebase/auth-compat",eT="@firebase/database",tT="@firebase/database-compat",nT="@firebase/functions",sT="@firebase/functions-compat",rT="@firebase/installations",iT="@firebase/installations-compat",oT="@firebase/messaging",aT="@firebase/messaging-compat",cT="@firebase/performance",lT="@firebase/performance-compat",uT="@firebase/remote-config",hT="@firebase/remote-config-compat",dT="@firebase/storage",fT="@firebase/storage-compat",pT="@firebase/firestore",mT="@firebase/firestore-compat",gT="firebase",yT="9.19.1";/**
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
 */const rl="[DEFAULT]",vT={[sl]:"fire-core",[WE]:"fire-core-compat",[QE]:"fire-analytics",[GE]:"fire-analytics-compat",[YE]:"fire-app-check",[XE]:"fire-app-check-compat",[JE]:"fire-auth",[ZE]:"fire-auth-compat",[eT]:"fire-rtdb",[tT]:"fire-rtdb-compat",[nT]:"fire-fn",[sT]:"fire-fn-compat",[rT]:"fire-iid",[iT]:"fire-iid-compat",[oT]:"fire-fcm",[aT]:"fire-fcm-compat",[cT]:"fire-perf",[lT]:"fire-perf-compat",[uT]:"fire-rc",[hT]:"fire-rc-compat",[dT]:"fire-gcs",[fT]:"fire-gcs-compat",[pT]:"fire-fst",[mT]:"fire-fst-compat","fire-js":"fire-js",[gT]:"fire-js-all"};/**
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
 */const Fo=new Map,il=new Map;function _T(t,e){try{t.container.addComponent(e)}catch(n){ws.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(il.has(e))return ws.debug(`There were multiple attempts to register component ${e}.`),!1;il.set(e,t);for(const n of Fo.values())_T(n,t);return!0}function Ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new Ii("app","Firebase",wT);/**
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
 */class bT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=yT;function dm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:rl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ln.create("bad-app-name",{appName:String(r)});if(n||(n=uE()),!n)throw Ln.create("no-options");const i=Fo.get(r);if(i){if($o(n,i.options)&&$o(s,i.config))return i;throw Ln.create("duplicate-app",{appName:r})}const o=new AE(r);for(const c of il.values())o.addComponent(c);const a=new bT(n,s,o);return Fo.set(r,a),a}function Ea(t=rl){const e=Fo.get(t);if(!e&&t===rl)return dm();if(!e)throw Ln.create("no-app",{appName:t});return e}function kt(t,e,n){var s;let r=(s=vT[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ws.warn(a.join(" "));return}Bn(new fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ET="firebase-heartbeat-database",TT=1,ti="firebase-heartbeat-store";let dc=null;function fm(){return dc||(dc=jE(ET,TT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ti)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),dc}async function IT(t){try{return(await fm()).transaction(ti).objectStore(ti).get(pm(t))}catch(e){if(e instanceof Zt)ws.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ws.warn(n.message)}}}async function id(t,e){try{const s=(await fm()).transaction(ti,"readwrite");return await s.objectStore(ti).put(e,pm(t)),s.done}catch(n){if(n instanceof Zt)ws.warn(n.message);else{const s=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ws.warn(s.message)}}}function pm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ST=1024,CT=30*24*60*60*1e3;class kT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=od();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=CT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=od(),{heartbeatsToSend:n,unsentEntries:s}=RT(this._heartbeatsCache.heartbeats),r=Uo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function od(){return new Date().toISOString().substring(0,10)}function RT(t,e=ST){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ad(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ad(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class AT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yE()?vE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await IT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ad(t){return Uo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OT(t){Bn(new fn("platform-logger",e=>new zE(e),"PRIVATE")),Bn(new fn("heartbeat",e=>new kT(e),"PRIVATE")),kt(sl,rd,t),kt(sl,rd,"esm2017"),kt("fire-js","")}OT("");function uu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function mm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NT=mm,gm=new Ii("auth","Firebase",mm());/**
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
 */const cd=new cu("@firebase/auth");function Eo(t,...e){cd.logLevel<=pe.ERROR&&cd.error(`Auth (${ur}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw hu(t,...e)}function zt(t,...e){return hu(t,...e)}function PT(t,e,n){const s=Object.assign(Object.assign({},NT()),{[e]:n});return new Ii("auth","Firebase",s).create(e,{appName:t.name})}function hu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return gm.create(t,...e)}function G(t,e,...n){if(!t)throw hu(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function pn(t,e){t||on(e)}/**
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
 */const ld=new Map;function an(t){pn(t instanceof Function,"Expected a class definition");let e=ld.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ld.set(t,e),e)}/**
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
 */function DT(t,e){const n=Ci(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if($o(i,e??{}))return r;Mt(r,"already-initialized")}return n.initialize({options:e})}function xT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LT(){return ud()==="http:"||ud()==="https:"}function ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function MT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LT()||pE()||"connection"in navigator)?navigator.onLine:!0}function UT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=dE()||mE()}get(){return MT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function du(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ym{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const FT=new ki(3e4,6e4);function Ri(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ai(t,e,n,s,r={}){return vm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Si(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ym.fetch()(_m(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function vm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$T),e);try{const r=new VT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw to(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw to(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw to(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw PT(t,u,l);Mt(t,u)}}catch(r){if(r instanceof Zt)throw r;Mt(t,"network-request-failed",{message:String(r)})}}async function Oi(t,e,n,s,r={}){const i=await Ai(t,e,n,s,r);return"mfaPendingCredential"in i&&Mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _m(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?du(t.config,r):`${t.config.apiScheme}://${r}`}class VT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zt(this.auth,"network-request-failed")),FT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=zt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function BT(t,e){return Ai(t,"POST","/v1/accounts:delete",e)}async function jT(t,e){return Ai(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HT(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),r=fu(s);G(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Fr(fc(r.auth_time)),issuedAtTime:Fr(fc(r.iat)),expirationTime:Fr(fc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fc(t){return Number(t)*1e3}function fu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const r=om(n);return r?JSON.parse(r):(Eo("Failed to decode base64 JWT payload"),null)}catch(r){return Eo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function qT(t){const e=fu(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zt&&zT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function zT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fr(this.lastLoginAt),this.creationTime=Fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ni(t,jT(n,{idToken:s}));G(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?QT(i.providerUserInfo):[],a=GT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function WT(t){const e=Ue(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function QT(t){return t.map(e=>{var{providerId:n}=e,s=uu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function XT(t,e){const n=await vm(t,{},async()=>{const s=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=_m(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ym.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await XT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new si;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
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
 */function En(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ps{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ni(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HT(this,e)}reload(){return WT(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ps(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ni(this,BT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:P,isAnonymous:q,providerData:ue,stsTokenManager:Te}=n;G(D&&Te,e,"internal-error");const z=si.fromJSON(this.name,Te);G(typeof D=="string",e,"internal-error"),En(h,e.name),En(d,e.name),G(typeof P=="boolean",e,"internal-error"),G(typeof q=="boolean",e,"internal-error"),En(p,e.name),En(g,e.name),En(v,e.name),En(w,e.name),En(k,e.name),En(O,e.name);const re=new ps({uid:D,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:q,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:z,createdAt:k,lastLoginAt:O});return ue&&Array.isArray(ue)&&(re.providerData=ue.map(ye=>Object.assign({},ye))),w&&(re._redirectEventId=w),re}static async _fromIdTokenResponse(e,n,s=!1){const r=new si;r.updateFromServerResponse(n);const i=new ps({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Vo(i),i}}/**
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
 */class bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bm.type="NONE";const hd=bm;/**
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
 */function To(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=To(this.userKey,r.apiKey,i),this.fullPersistenceKey=To("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ps._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xs(an(hd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||an(hd);const o=To(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ps._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Xs(i,e,s))}}/**
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
 */function dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Im(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Em(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cm(e))return"Blackberry";if(km(e))return"Webos";if(pu(e))return"Safari";if((e.includes("chrome/")||Tm(e))&&!e.includes("edge/"))return"Chrome";if(Sm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Em(t=rt()){return/firefox\//i.test(t)}function pu(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tm(t=rt()){return/crios\//i.test(t)}function Im(t=rt()){return/iemobile/i.test(t)}function Sm(t=rt()){return/android/i.test(t)}function Cm(t=rt()){return/blackberry/i.test(t)}function km(t=rt()){return/webos/i.test(t)}function Ta(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YT(t=rt()){var e;return Ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JT(){return gE()&&document.documentMode===10}function Rm(t=rt()){return Ta(t)||Sm(t)||km(t)||Cm(t)||/windows phone/i.test(t)||Im(t)}function ZT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Am(t,e=[]){let n;switch(t){case"Browser":n=dd(rt());break;case"Worker":n=`${dd(rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${s}`}/**
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
 */class eI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class tI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fd(this),this.idTokenSubscription=new fd(this),this.beforeStateQueue=new eI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Am(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ni(t){return Ue(t)}class fd{constructor(e){this.auth=e,this.observer=null,this.addObserver=TE(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function nI(t,e,n){const s=Ni(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Om(e),{host:o,port:a}=sI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||rI()}function Om(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sI(t){const e=Om(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:pd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:pd(o)}}}function pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function iI(t,e){return Ai(t,"POST","/v1/accounts:update",e)}/**
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
 */async function oI(t,e){return Oi(t,"POST","/v1/accounts:signInWithPassword",Ri(t,e))}/**
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
 */async function aI(t,e){return Oi(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}async function cI(t,e){return Oi(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}/**
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
 */class ri extends mu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ri(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ri(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return oI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aI(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return iI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cI(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(t,e){return Oi(t,"POST","/v1/accounts:signInWithIdp",Ri(t,e))}/**
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
 */const lI="http://localhost";class bs extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=uu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new bs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:lI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
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
 */function uI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hI(t){const e=Or(Nr(t)).link,n=e?Or(Nr(e)).deep_link_id:null,s=Or(Nr(t)).deep_link_id;return(s?Or(Nr(s)).link:null)||s||n||e||t}class gu{constructor(e){var n,s,r,i,o,a;const c=Or(Nr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=uI((r=c.mode)!==null&&r!==void 0?r:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hI(e);try{return new gu(n)}catch{return null}}}/**
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
 */class hr{constructor(){this.providerId=hr.PROVIDER_ID}static credential(e,n){return ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=gu.parseLink(n);return G(s,"argument-error"),ri._fromEmailAndCode(e,s.code,s.tenantId)}}hr.PROVIDER_ID="password";hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends Nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rn extends Pi{constructor(){super("facebook.com")}static credential(e){return bs._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
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
 */class An extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bs._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return An.credential(n,s)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class On extends Pi{constructor(){super("github.com")}static credential(e){return bs._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */class Nn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return bs._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Nn.credential(n,s)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */async function dI(t,e){return Oi(t,"POST","/v1/accounts:signUp",Ri(t,e))}/**
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
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ps._fromIdTokenResponse(e,s,r),o=md(s);return new Es({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=md(s);return new Es({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function md(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bo extends Zt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Bo(e,n,s,r)}}function Pm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(t,i,e,s):i})}async function fI(t,e,n=!1){const s=await ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",s)}/**
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
 */async function pI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ni(t,Pm(s,r,e,t),n);G(i.idToken,s,"internal-error");const o=fu(i.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),Es._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mt(s,"user-mismatch"),i}}/**
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
 */async function Dm(t,e,n=!1){const s="signIn",r=await Pm(t,s,e),i=await Es._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function mI(t,e){return Dm(Ni(t),e)}async function rP(t,e,n){const s=Ni(t),r=await dI(s,{returnSecureToken:!0,email:e,password:n}),i=await Es._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function iP(t,e,n){return mI(Ue(t),hr.credential(e,n))}function gI(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function yI(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function oP(t){return Ue(t).signOut()}const jo="__sak";/**
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
 */class xm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vI(){const t=rt();return pu(t)||Ta(t)}const _I=1e3,wI=10;class Lm extends xm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vI()&&ZT(),this.fallbackToPolling=Rm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);JT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,wI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lm.type="LOCAL";const bI=Lm;/**
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
 */class Mm extends xm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mm.type="SESSION";const Um=Mm;/**
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
 */function EI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ia(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await EI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ia.receivers=[];/**
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
 */function yu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=yu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Kt(){return window}function II(t){Kt().location.href=t}/**
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
 */function $m(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function SI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kI(){return $m()?self:null}/**
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
 */const Fm="firebaseLocalStorageDb",RI=1,Ho="firebaseLocalStorage",Vm="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sa(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function AI(){const t=indexedDB.deleteDatabase(Fm);return new Di(t).toPromise()}function al(){const t=indexedDB.open(Fm,RI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ho,{keyPath:Vm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ho)?e(s):(s.close(),await AI(),e(await al()))})})}async function gd(t,e,n){const s=Sa(t,!0).put({[Vm]:e,value:n});return new Di(s).toPromise()}async function OI(t,e){const n=Sa(t,!1).get(e),s=await new Di(n).toPromise();return s===void 0?null:s.value}function yd(t,e){const n=Sa(t,!0).delete(e);return new Di(n).toPromise()}const NI=800,PI=3;class Bm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>PI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ia._getInstance(kI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SI(),!this.activeServiceWorker)return;this.sender=new TI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await al();return await gd(e,jo,"1"),await yd(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>OI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Sa(r,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bm.type="LOCAL";const DI=Bm;/**
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
 */function xI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function LI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=zt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",xI().appendChild(s)})}function MI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ki(3e4,6e4);/**
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
 */function UI(t,e){return e?an(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vu extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $I(t){return Dm(t.auth,new vu(t),t.bypassAuthState)}function FI(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),pI(n,new vu(t),t.bypassAuthState)}async function VI(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),fI(n,new vu(t),t.bypassAuthState)}/**
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
 */class jm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $I;case"linkViaPopup":case"linkViaRedirect":return VI;case"reauthViaPopup":case"reauthViaRedirect":return FI;default:Mt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BI=new ki(2e3,1e4);class zs extends jm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BI.get())};e()}}zs.currentPopupAction=null;/**
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
 */const jI="pendingRedirect",Io=new Map;class HI extends jm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const s=await qI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qI(t,e){const n=WI(e),s=KI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function zI(t,e){Io.set(t._key(),e)}function KI(t){return an(t._redirectPersistence)}function WI(t){return To(jI,t.config.apiKey,t.name)}async function GI(t,e,n=!1){const s=Ni(t),r=UI(s,e),o=await new HI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const QI=10*60*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QI&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(e))}saveEventToCache(e){this.cachedEventUids.add(vd(e)),this.lastProcessedEventTime=Date.now()}}function vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hm(t);default:return!1}}/**
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
 */async function JI(t,e={}){return Ai(t,"GET","/v1/projects",e)}/**
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
 */const ZI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e0=/^https?/;async function t0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JI(t);for(const n of e)try{if(n0(n))return}catch{}Mt(t,"unauthorized-domain")}function n0(t){const e=ol(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!e0.test(n))return!1;if(ZI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const s0=new ki(3e4,6e4);function _d(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function r0(t){return new Promise((e,n)=>{var s,r,i;function o(){_d(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_d(),n(zt(t,"network-request-failed"))},timeout:s0.get()})}if(!((r=(s=Kt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)o();else{const a=MI("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},LI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw So=null,e})}let So=null;function i0(t){return So=So||r0(t),So}/**
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
 */const o0=new ki(5e3,15e3),a0="__/auth/iframe",c0="emulator/auth/iframe",l0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h0(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?du(e,c0):`https://${t.config.authDomain}/${a0}`,s={apiKey:e.apiKey,appName:t.name,v:ur},r=u0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Si(s).slice(1)}`}async function d0(t){const e=await i0(t),n=Kt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:h0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Kt().setTimeout(()=>{i(o)},o0.get());function c(){Kt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const f0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p0=500,m0=600,g0="_blank",y0="http://localhost";class wd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v0(t,e,n,s=p0,r=m0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},f0),{width:s.toString(),height:r.toString(),top:i,left:o}),l=rt().toLowerCase();n&&(a=Tm(l)?g0:n),Em(l)&&(e=e||y0,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(YT(l)&&a!=="_self")return _0(e||"",a),new wd(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new wd(h)}function _0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const w0="__/auth/handler",b0="emulator/auth/handler";function bd(t,e,n,s,r,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ur,eventId:r};if(e instanceof Nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Pi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${E0(t)}?${Si(a).slice(1)}`}function E0({config:t}){return t.emulator?du(t,b0):`https://${t.authDomain}/${w0}`}/**
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
 */const pc="webStorageSupport";class T0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Um,this._completeRedirectFn=GI,this._overrideRedirectResult=zI}async _openPopup(e,n,s,r){var i;pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=bd(e,n,s,ol(),r);return v0(e,o,yu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),II(bd(e,n,s,ol(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(pn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await d0(e),s=new XI(e);return n.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pc,{type:pc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[pc];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rm()||pu()||Ta()}}const I0=T0;var Ed="@firebase/auth",Td="0.22.0";/**
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
 */class S0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function C0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function k0(t){Bn(new fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Am(t)},u=new tI(a,c,l);return xT(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bn(new fn("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(s=>new S0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Ed,Td,C0(t)),kt(Ed,Td,"esm2017")}/**
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
 */const R0=5*60,A0=cm("authIdTokenMaxAge")||R0;let Id=null;const O0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>A0)return;const r=n==null?void 0:n.token;Id!==r&&(Id=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function qo(t=Ea()){const e=Ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DT(t,{popupRedirectResolver:I0,persistence:[DI,bI,Um]}),s=cm("authTokenSyncURL");if(s){const i=O0(s);yI(n,i,()=>i(n.currentUser)),gI(n,o=>i(o))}const r=am("auth");return r&&nI(n,`http://${r}`),n}k0("Browser");var N0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,_u=_u||{},Y=N0||self;function zo(){}function Ca(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function P0(t){return Object.prototype.hasOwnProperty.call(t,mc)&&t[mc]||(t[mc]=++D0)}var mc="closure_uid_"+(1e9*Math.random()>>>0),D0=0;function x0(t,e,n){return t.call.apply(t.bind,arguments)}function L0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=x0:nt=L0,nt.apply(null,arguments)}function no(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Wn(){this.s=this.s,this.o=this.o}var M0=0;Wn.prototype.s=!1;Wn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),M0!=0)&&P0(this)};Wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Sd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ca(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var U0=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",zo,e),Y.removeEventListener("test",zo,e)}catch{}return t}();function Ko(t){return/^[\s\xa0]*$/.test(t)}var Cd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gc(t,e){return t<e?-1:t>e?1:0}function ka(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return ka().indexOf(t)!=-1}function bu(t){return bu[" "](t),t}bu[" "]=zo;function $0(t){var e=B0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var F0=Ht("Opera"),tr=Ht("Trident")||Ht("MSIE"),zm=Ht("Edge"),cl=zm||tr,Km=Ht("Gecko")&&!(ka().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),V0=ka().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function Wm(){var t=Y.document;return t?t.documentMode:void 0}var Wo;e:{var yc="",vc=function(){var t=ka();if(Km)return/rv:([^\);]+)(\)|;)/.exec(t);if(zm)return/Edge\/([\d\.]+)/.exec(t);if(tr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(V0)return/WebKit\/(\S+)/.exec(t);if(F0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(vc&&(yc=vc?vc[1]:""),tr){var _c=Wm();if(_c!=null&&_c>parseFloat(yc)){Wo=String(_c);break e}}Wo=yc}var B0={};function j0(){return $0(function(){let t=0;const e=Cd(String(Wo)).split("."),n=Cd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=gc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||gc(r[2].length==0,i[2].length==0)||gc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ll;if(Y.document&&tr){var kd=Wm();ll=kd||parseInt(Wo,10)||void 0}else ll=void 0;var H0=ll;function ii(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Km){e:{try{bu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:q0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ii.X.h.call(this)}}Xe(ii,st);var q0={2:"touch",3:"pen",4:"mouse"};ii.prototype.h=function(){ii.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Li="closure_listenable_"+(1e6*Math.random()|0),z0=0;function K0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++z0,this.ba=this.ea=!1}function Ra(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Eu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Gm(t){const e={};for(const n in t)e[n]=t[n];return e}const Rd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Rd.length;i++)n=Rd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Aa(t){this.src=t,this.g={},this.h=0}Aa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=hl(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new K0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function ul(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=qm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ra(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Tu="closure_lm_"+(1e6*Math.random()|0),wc={};function Xm(t,e,n,s,r){if(s&&s.once)return Jm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xm(t,e[i],n,s,r);return null}return n=Cu(n),t&&t[Li]?t.N(e,n,xi(s)?!!s.capture:!!s,r):Ym(t,e,n,!1,s,r)}function Ym(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=xi(r)?!!r.capture:!!r,a=Su(t);if(a||(t[Tu]=a=new Aa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=W0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)U0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(eg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function W0(){function t(n){return e.call(t.src,t.listener,n)}const e=G0;return t}function Jm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jm(t,e[i],n,s,r);return null}return n=Cu(n),t&&t[Li]?t.O(e,n,xi(s)?!!s.capture:!!s,r):Ym(t,e,n,!0,s,r)}function Zm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Zm(t,e[i],n,s,r);else s=xi(s)?!!s.capture:!!s,n=Cu(n),t&&t[Li]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=hl(i,n,s,r),-1<n&&(Ra(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Su(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hl(e,n,s,r)),(n=-1<t?e[t]:null)&&Iu(n))}function Iu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Li])ul(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(eg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Su(e))?(ul(n,t),n.h==0&&(n.src=null,e[Tu]=null)):Ra(t)}}}function eg(t){return t in wc?wc[t]:wc[t]="on"+t}function G0(t,e){if(t.ba)t=!0;else{e=new ii(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Iu(t),t=n.call(s,e)}return t}function Su(t){return t=t[Tu],t instanceof Aa?t:null}var bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cu(t){return typeof t=="function"?t:(t[bc]||(t[bc]=function(e){return t.handleEvent(e)}),t[bc])}function Ke(){Wn.call(this),this.i=new Aa(this),this.P=this,this.I=null}Xe(Ke,Wn);Ke.prototype[Li]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){Zm(this,t,e,n,s)};function Qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var r=e;e=new st(s,t),Qm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=so(o,s,!0,e)&&r}if(o=e.g=t,r=so(o,s,!0,e)&&r,r=so(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=so(o,s,!1,e)&&r}Ke.prototype.M=function(){if(Ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ra(n[s]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function so(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ul(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ku=Y.JSON.stringify;function Q0(){var t=sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class X0{constructor(){this.h=this.g=null}add(e,n){const s=tg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var tg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Y0,t=>t.reset());class Y0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function J0(t){Y.setTimeout(()=>{throw t},0)}function ng(t,e){dl||Z0(),fl||(dl(),fl=!0),sg.add(t,e)}var dl;function Z0(){var t=Y.Promise.resolve(void 0);dl=function(){t.then(eS)}}var fl=!1,sg=new X0;function eS(){for(var t;t=Q0();){try{t.h.call(t.g)}catch(n){J0(n)}var e=tg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fl=!1}function Oa(t,e){Ke.call(this),this.h=t||1,this.g=e||Y,this.j=nt(this.lb,this),this.l=Date.now()}Xe(Oa,Ke);F=Oa.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Qe(this,"tick"),this.ca&&(Ru(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ru(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Oa.X.M.call(this),Ru(this),delete this.g};function Au(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function rg(t){t.g=Au(()=>{t.g=null,t.i&&(t.i=!1,rg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class tS extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rg(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(t){Wn.call(this),this.h=t,this.g={}}Xe(oi,Wn);var Ad=[];function ig(t,e,n,s){Array.isArray(n)||(n&&(Ad[0]=n.toString()),n=Ad);for(var r=0;r<n.length;r++){var i=Xm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function og(t){Eu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Iu(e)},t),t.g={}}oi.prototype.M=function(){oi.X.M.call(this),og(this)};oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Na(){this.g=!0}Na.prototype.Aa=function(){this.g=!1};function nS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function sS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ks(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+iS(t,n)+(s?" "+s:"")})}function rS(t,e){t.info(function(){return"TIMEOUT: "+e})}Na.prototype.info=function(){};function iS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ku(n)}catch{return e}}var Rs={},Od=null;function Pa(){return Od=Od||new Ke}Rs.Pa="serverreachability";function ag(t){st.call(this,Rs.Pa,t)}Xe(ag,st);function ai(t){const e=Pa();Qe(e,new ag(e))}Rs.STAT_EVENT="statevent";function cg(t,e){st.call(this,Rs.STAT_EVENT,t),this.stat=e}Xe(cg,st);function dt(t){const e=Pa();Qe(e,new cg(e,t))}Rs.Qa="timingevent";function lg(t,e){st.call(this,Rs.Qa,t),this.size=e}Xe(lg,st);function Mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Da={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ug={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ou(){}Ou.prototype.h=null;function Nd(t){return t.h||(t.h=t.i())}function hg(){}var Ui={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Nu(){st.call(this,"d")}Xe(Nu,st);function Pu(){st.call(this,"c")}Xe(Pu,st);var pl;function xa(){}Xe(xa,Ou);xa.prototype.g=function(){return new XMLHttpRequest};xa.prototype.i=function(){return{}};pl=new xa;function $i(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new oi(this),this.O=oS,t=cl?125:void 0,this.T=new Oa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new dg}function dg(){this.i=null,this.g="",this.h=!1}var oS=45e3,ml={},Go={};F=$i.prototype;F.setTimeout=function(t){this.O=t};function gl(t,e,n){t.K=1,t.v=Ma(mn(e)),t.s=n,t.P=!0,fg(t,null)}function fg(t,e){t.F=Date.now(),Fi(t),t.A=mn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),bg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new dg,t.g=jg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new tS(nt(t.La,t,t.g),t.N)),ig(t.S,t.g,"readystatechange",t.ib),e=t.H?Gm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ai(),nS(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&cn(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const u=cn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||cl||this.g&&(this.h.h||this.g.fa()||Ld(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ai(3):ai(2)),La(this);var n=this.g.aa();this.Y=n;t:if(pg(this)){var s=Ld(this.g);t="";var r=s.length,i=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),Vr(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,sS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ko(a)){var l=a;break t}}l=null}if(n=l)Ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yl(this,n);else{this.i=!1,this.o=3,dt(12),rs(this),Vr(this);break e}}this.P?(mg(this,u,o),cl&&this.i&&u==3&&(ig(this.S,this.T,"tick",this.hb),this.T.start())):(Ks(this.j,this.m,o,null),yl(this,o)),u==4&&rs(this),this.i&&!this.I&&(u==4?$g(this.l,this):(this.i=!1,Fi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),rs(this),Vr(this)}}}catch{}finally{}};function pg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function mg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=aS(t,n),r==Go){e==4&&(t.o=4,dt(14),s=!1),Ks(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ml){t.o=4,dt(15),Ks(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ks(t.j,t.m,r,null),yl(t,r);pg(t)&&r!=Go&&r!=ml&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fu(e),e.K=!0,dt(11))):(Ks(t.j,t.m,n,"[Invalid Chunked Response]"),rs(t),Vr(t))}F.hb=function(){if(this.g){var t=cn(this.g),e=this.g.fa();this.C<e.length&&(La(this),mg(this,t,e),this.i&&t!=4&&Fi(this))}};function aS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Go:(n=Number(e.substring(n,s)),isNaN(n)?ml:(s+=1,s+n>e.length?Go:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,rs(this)};function Fi(t){t.V=Date.now()+t.O,gg(t,t.O)}function gg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mi(nt(t.gb,t),e)}function La(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(rS(this.j,this.A),this.K!=2&&(ai(),dt(17)),rs(this),this.o=2,Vr(this)):gg(this,this.V-t)};function Vr(t){t.l.G==0||t.I||$g(t.l,t)}function rs(t){La(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ru(t.T),og(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||vl(n.h,t))){if(!t.J&&vl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yo(n),Fa(n);else break e;$u(n),dt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Mi(nt(n.cb,n),6e3));if(1>=Ig(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else is(n,11)}else if((t.J||n.g==t)&&Yo(n),!Ko(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Du(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Ce(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Bg(s,s.H?s.ka:null,s.V),o.J){Sg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(La(a),Fi(a)),s.g=o}else Mg(s);0<n.i.length&&Va(n)}else l[0]!="stop"&&l[0]!="close"||is(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?is(n,7):Uu(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ai(4)}catch{}}function cS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ca(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function lS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ca(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function yg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ca(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lS(t),s=cS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ms(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ms){this.h=e!==void 0?e:t.h,Qo(this,t.j),this.s=t.s,this.g=t.g,Xo(this,t.m),this.l=t.l,e=t.i;var n=new ci;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pd(this,n),this.o=t.o}else t&&(n=String(t).match(vg))?(this.h=!!e,Qo(this,n[1]||"",!0),this.s=Pr(n[2]||""),this.g=Pr(n[3]||"",!0),Xo(this,n[4]),this.l=Pr(n[5]||"",!0),Pd(this,n[6]||"",!0),this.o=Pr(n[7]||"")):(this.h=!!e,this.i=new ci(null,this.h))}ms.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dr(e,Dd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Dr(e,Dd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Dr(n,n.charAt(0)=="/"?fS:dS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dr(n,mS)),t.join("")};function mn(t){return new ms(t)}function Qo(t,e,n){t.j=n?Pr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pd(t,e,n){e instanceof ci?(t.i=e,gS(t.i,t.h)):(n||(e=Dr(e,pS)),t.i=new ci(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Ma(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,hS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Dd=/[#\/\?@]/g,dS=/[#\?:]/g,fS=/[#\?]/g,pS=/[#\?@]/g,mS=/#/g;function ci(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Map,t.h=0,t.i&&uS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=ci.prototype;F.add=function(t,e){Gn(this),this.i=null,t=dr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _g(t,e){Gn(t),e=dr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wg(t,e){return Gn(t),e=dr(t,e),t.g.has(e)}F.forEach=function(t,e){Gn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){Gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){Gn(this);let e=[];if(typeof t=="string")wg(this,t)&&(e=e.concat(this.g.get(dr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Gn(this),this.i=null,t=dr(this,t),wg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function bg(t,e,n){_g(t,e),0<n.length&&(t.i=null,t.g.set(dr(t,e),wu(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function dr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gS(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(_g(this,s),bg(this,r,n))},t)),t.j=e}var yS=class{constructor(e,n){this.h=e,this.g=n}};function Eg(t){this.l=t||vS,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vS=10;function Tg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ig(t){return t.h?1:t.g?t.g.size:0}function vl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Du(t,e){t.g?t.g.add(e):t.h=e}function Sg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Eg.prototype.cancel=function(){if(this.i=Cg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wu(t.i)}function xu(){}xu.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};xu.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function _S(){this.g=new xu}function wS(t,e,n){const s=n||"";try{yg(t,function(r,i){let o=r;xi(r)&&(o=ku(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function bS(t,e){const n=new Na;if(Y.Image){const s=new Image;s.onload=no(ro,n,s,"TestLoadImage: loaded",!0,e),s.onerror=no(ro,n,s,"TestLoadImage: error",!1,e),s.onabort=no(ro,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=no(ro,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ro(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Vi(t){this.l=t.ac||null,this.j=t.jb||!1}Xe(Vi,Ou);Vi.prototype.g=function(){return new Ua(this.l,this.j)};Vi.prototype.i=function(t){return function(){return t}}({});function Ua(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Lu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(Ua,Ke);var Lu=0;F=Ua.prototype;F.open=function(t,e){if(this.readyState!=Lu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,li(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=Lu};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function kg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bi(this):li(this),this.readyState==3&&kg(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,Bi(this))};F.Ua=function(t){this.g&&(this.response=t,Bi(this))};F.ga=function(){this.g&&Bi(this)};function Bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,li(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function li(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ES=Y.JSON.parse;function Ne(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rg,this.K=this.L=!1}Xe(Ne,Ke);var Rg="",TS=/^https?$/i,IS=["POST","PUT"];F=Ne.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pl.g(),this.C=this.u?Nd(this.u):Nd(pl),this.g.onreadystatechange=nt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){xd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Y.FormData&&t instanceof Y.FormData,!(0<=qm(IS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ng(this),0<this.B&&((this.K=SS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.qa,this)):this.A=Au(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){xd(this,i)}};function SS(t){return tr&&j0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof _u<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function xd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ag(t),$a(t)}function Ag(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),$a(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$a(this,!0)),Ne.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?Og(this):this.fb())};F.fb=function(){Og(this)};function Og(t){if(t.h&&typeof _u<"u"&&(!t.C[1]||cn(t)!=4||t.aa()!=2)){if(t.v&&cn(t)==4)Au(t.Ha,0,t);else if(Qe(t,"readystatechange"),cn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(vg)[1]||null;if(!r&&Y.self&&Y.self.location){var i=Y.self.location.protocol;r=i.substr(0,i.length-1)}s=!TS.test(r?r.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ag(t)}}finally{$a(t)}}}}function $a(t,e){if(t.g){Ng(t);const n=t.g,s=t.C[0]?zo:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ng(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function cn(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ES(e)}};function Ld(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Rg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pg(t){let e="";return Eu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Mu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Pg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dg(t){this.Ca=0,this.i=[],this.j=new Na,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Er("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Er("baseRetryDelayMs",5e3,t),this.bb=Er("retryDelaySeedMs",1e4,t),this.$a=Er("forwardChannelMaxRetries",2,t),this.ta=Er("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Eg(t&&t.concurrentRequestLimit),this.Fa=new _S,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=Dg.prototype;F.ma=8;F.G=1;function Uu(t){if(xg(t),t.G==3){var e=t.U++,n=mn(t.F);Ce(n,"SID",t.I),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),ji(t,n),e=new $i(t,t.j,e,void 0),e.K=2,e.v=Ma(mn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=jg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Fi(e)}Vg(t)}function Fa(t){t.g&&(Fu(t),t.g.cancel(),t.g=null)}function xg(t){Fa(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Yo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Va(t){Tg(t.h)||t.m||(t.m=!0,ng(t.Ja,t),t.C=0)}function CS(t,e){return Ig(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Mi(nt(t.Ja,t,e),Fg(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new $i(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Gm(i),Qm(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lg(this,r,e),n=mn(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),ji(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Pg(i)))+"&"+e:this.o&&Mu(n,this.o,i)),Du(this.h,r),this.Ya&&Ce(n,"TYPE","init"),this.O?(Ce(n,"$req",e),Ce(n,"SID","null"),r.Z=!0,gl(r,n,null)):gl(r,n,e),this.G=2}}else this.G==3&&(t?Md(this,t):this.i.length==0||Tg(this.h)||Md(this))};function Md(t,e){var n;e?n=e.m:n=t.U++;const s=mn(t.F);Ce(s,"SID",t.I),Ce(s,"RID",n),Ce(s,"AID",t.T),ji(t,s),t.o&&t.s&&Mu(s,t.o,t.s),n=new $i(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Lg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Du(t.h,n),gl(n,s,e)}function ji(t,e){t.ia&&Eu(t.ia,function(n,s){Ce(e,s,n)}),t.l&&yg({},function(n,s){Ce(e,s,n)})}function Lg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?nt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{wS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Mg(t){t.g||t.u||(t.Z=1,ng(t.Ia,t),t.A=0)}function $u(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Mi(nt(t.Ia,t),Fg(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,Ug(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Mi(nt(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,dt(10),Fa(this),Ug(this))};function Fu(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Ug(t){t.g=new $i(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=mn(t.sa);Ce(e,"RID","rpc"),Ce(e,"SID",t.I),Ce(e,"CI",t.L?"0":"1"),Ce(e,"AID",t.T),Ce(e,"TYPE","xmlhttp"),ji(t,e),t.o&&t.s&&Mu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ma(mn(e)),n.s=null,n.P=!0,fg(n,t)}F.cb=function(){this.v!=null&&(this.v=null,Fa(this),$u(this),dt(19))};function Yo(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function $g(t,e){var n=null;if(t.g==e){Yo(t),Fu(t),t.g=null;var s=2}else if(vl(t.h,e))n=e.D,Sg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Pa(),Qe(s,new lg(s,n)),Va(t)}else Mg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&CS(t,e)||s==2&&$u(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:is(t,5);break;case 4:is(t,10);break;case 3:is(t,6);break;default:is(t,2)}}}function Fg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function is(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=nt(t.kb,t);n||(n=new ms("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Qo(n,"https"),Ma(n)),bS(n.toString(),s)}else dt(2);t.G=0,t.l&&t.l.va(e),Vg(t),xg(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Vg(t){if(t.G=0,t.la=[],t.l){const e=Cg(t.h);(e.length!=0||t.i.length!=0)&&(Sd(t.la,e),Sd(t.la,t.i),t.h.i.length=0,wu(t.i),t.i.length=0),t.l.ua()}}function Bg(t,e,n){var s=n instanceof ms?mn(n):new ms(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Xo(s,s.m);else{var r=Y.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ms(null,void 0);s&&Qo(i,s),e&&(i.g=e),r&&Xo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ce(s,n,e),Ce(s,"VER",t.ma),ji(t,s),s}function jg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ne(new Vi({jb:!0})):new Ne(t.ra),e.Ka(t.H),e}function Hg(){}F=Hg.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function Jo(){if(tr&&!(10<=Number(H0)))throw Error("Environmental error: no available transport.")}Jo.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){Ke.call(this),this.g=new Dg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ko(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ko(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fr(this)}Xe(_t,Ke);_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Bg(t,null,t.V),Va(t)};_t.prototype.close=function(){Uu(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ku(t),t=n);e.i.push(new yS(e.ab++,t)),e.G==3&&Va(e)};_t.prototype.M=function(){this.g.l=null,delete this.j,Uu(this.g),delete this.g,_t.X.M.call(this)};function qg(t){Nu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(qg,Nu);function zg(){Pu.call(this),this.status=1}Xe(zg,Pu);function fr(t){this.g=t}Xe(fr,Hg);fr.prototype.xa=function(){Qe(this.g,"a")};fr.prototype.wa=function(t){Qe(this.g,new qg(t))};fr.prototype.va=function(t){Qe(this.g,new zg)};fr.prototype.ua=function(){Qe(this.g,"b")};Jo.prototype.createWebChannel=Jo.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Da.NO_ERROR=0;Da.TIMEOUT=8;Da.HTTP_ERROR=6;ug.COMPLETE="complete";hg.EventType=Ui;Ui.OPEN="a";Ui.CLOSE="b";Ui.ERROR="c";Ui.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.Oa;Ne.prototype.getLastErrorCode=Ne.prototype.Ea;Ne.prototype.getStatus=Ne.prototype.aa;Ne.prototype.getResponseJson=Ne.prototype.Sa;Ne.prototype.getResponseText=Ne.prototype.fa;Ne.prototype.send=Ne.prototype.da;Ne.prototype.setWithCredentials=Ne.prototype.Ka;var kS=function(){return new Jo},RS=function(){return Pa()},Ec=Da,AS=ug,OS=Rs,Ud={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},NS=Vi,io=hg,PS=Ne;const $d="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let pr="9.19.0";/**
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
 */const Ts=new cu("@firebase/firestore");function Fd(){return Ts.logLevel}function V(t,...e){if(Ts.logLevel<=pe.DEBUG){const n=e.map(Vu);Ts.debug(`Firestore (${pr}): ${t}`,...n)}}function gn(t,...e){if(Ts.logLevel<=pe.ERROR){const n=e.map(Vu);Ts.error(`Firestore (${pr}): ${t}`,...n)}}function Zo(t,...e){if(Ts.logLevel<=pe.WARN){const n=e.map(Vu);Ts.warn(`Firestore (${pr}): ${t}`,...n)}}function Vu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: `+t;throw gn(e),new Error(e)}function Ie(t,e){t||X()}function ne(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class xS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LS{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new Kg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Je(e)}}class MS{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class US{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new MS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $S{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new $S(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function VS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Wg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=VS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function nr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new je(0,0))}static max(){return new Z(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ui{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends ui{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const BS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends ui{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return BS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new K(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new K(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new K(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ke.fromString(e))}static fromName(e){return new H(ke.fromString(e).popFirst(5))}static empty(){return new H(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ke(e.slice()))}}function jS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new je(n+1,0):new je(n,s));return new jn(r,H.empty(),e)}function HS(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new jn(Z.min(),H.empty(),-1)}static max(){return new jn(Z.max(),H.empty(),-1)}}function qS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const zS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==zS)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function qi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Bu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Bu.ct=-1;function Ba(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function WS(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??We.RED,this.left=r??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new We(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return We.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,r){return this}insert(t,e,n){return new We(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bd(this.data.getIterator())}getIteratorFrom(e){return new Bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new He(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return nr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class GS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new GS("Invalid base64 string: "+r):r}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const QS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=QS.exec(t);if(Ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function Qg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xg(t){const e=t.mapValue.fields.__previous_value__;return Qg(e)?Xg(e):e}function hi(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class XS{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qg(t)?4:YS(t)?9007199254740991:10:X()}function Yt(t,e){if(t===e)return!0;const n=Is(t);if(n!==Is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Hn(s.timestampValue),o=Hn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return sr(s.bytesValue).isEqual(sr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Me(s.geoPointValue.latitude)===Me(r.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Me(s.integerValue)===Me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Me(s.doubleValue),o=Me(r.doubleValue);return i===o?ea(i)===ea(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return nr(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Vd(i)!==Vd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Yt(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function fi(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function rr(t,e){if(t===e)return 0;const n=Is(t),s=Is(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Me(r.integerValue||r.doubleValue),a=Me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jd(t.timestampValue,e.timestampValue);case 4:return jd(hi(t),hi(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,i){const o=sr(r),a=sr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ge(Me(r.latitude),Me(i.latitude));return o!==0?o:ge(Me(r.longitude),Me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=rr(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ao.mapValue&&i===ao.mapValue)return 0;if(r===ao.mapValue)return 1;if(i===ao.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const d=rr(o[a[u]],c[l[u]]);if(d!==0)return d}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function jd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Hn(t),s=Hn(e),r=ge(n.seconds,s.seconds);return r!==0?r:ge(n.nanos,s.nanos)}function ir(t){return _l(t)}function _l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Hn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?sr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=_l(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_l(s.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function wl(t){return!!t&&"integerValue"in t}function ju(t){return!!t&&"arrayValue"in t}function Hd(t){return!!t&&"nullValue"in t}function qd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Co(t){return!!t&&"mapValue"in t}function Br(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Br(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Br(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Br(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Br(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Co(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){mr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new St(Br(this.value))}}function Yg(t){const e=[];return mr(t.fields,(n,s)=>{const r=new tt([n]);if(Co(s)){const i=Yg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Lt(e)}/**
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
 */class Ze{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ze(e,0,Z.min(),Z.min(),Z.min(),St.empty(),0)}static newFoundDocument(e,n,s,r){return new Ze(e,1,n,Z.min(),s,r,0)}static newNoDocument(e,n){return new Ze(e,2,n,Z.min(),Z.min(),St.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Z.min(),Z.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function zd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=rr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jr{constructor(e,n="asc"){this.field=e,this.dir=n}}function JS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jg{}class Ve extends Jg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new eC(e,n,s):n==="array-contains"?new sC(e,s):n==="in"?new rC(e,s):n==="not-in"?new iC(e,s):n==="array-contains-any"?new oC(e,s):new Ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new tC(e,s):new nC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(rr(n,this.value)):n!==null&&Is(this.value)===Is(n)&&this.matchesComparison(rr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends Jg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Jt(e,n)}matches(e){return Zg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Zg(t){return t.op==="and"}function ey(t){return ZS(t)&&Zg(t)}function ZS(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function bl(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ir(t.value);if(ey(t))return t.filters.map(e=>bl(e)).join(",");{const e=t.filters.map(n=>bl(n)).join(",");return`${t.op}(${e})`}}function ty(t,e){return t instanceof Ve?function(n,s){return s instanceof Ve&&n.op===s.op&&n.field.isEqual(s.field)&&Yt(n.value,s.value)}(t,e):t instanceof Jt?function(n,s){return s instanceof Jt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ty(i,s.filters[o]),!0):!1}(t,e):void X()}function ny(t){return t instanceof Ve?function(e){return`${e.field.canonicalString()} ${e.op} ${ir(e.value)}`}(t):t instanceof Jt?function(e){return e.op.toString()+" {"+e.getFilters().map(ny).join(" ,")+"}"}(t):"Filter"}class eC extends Ve{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class tC extends Ve{constructor(e,n){super(e,"in",n),this.keys=sy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nC extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=sy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class sC extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ju(n)&&fi(n.arrayValue,this.value)}}class rC extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class iC extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class oC extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ju(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fi(this.value.arrayValue,s))}}/**
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
 */class aC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Wd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new aC(t,e,n,s,r,i,o)}function Hu(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>bl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ir(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ir(s)).join(",")),e.ft=n}return e.ft}function qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ty(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kd(t.startAt,e.startAt)&&Kd(t.endAt,e.endAt)}function El(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ja{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function cC(t,e,n,s,r,i,o,a){return new ja(t,e,n,s,r,i,o,a)}function ry(t){return new ja(t)}function Gd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function uC(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function hC(t){return t.collectionGroup!==null}function Js(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=uC(e),s=lC(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new jr(n)),e.dt.push(new jr(tt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new jr(tt.keyField(),i))}}}return e.dt}function yn(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=Wd(e.path,e.collectionGroup,Js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Js(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new jr(i.field,o))}const s=e.endAt?new ta(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ta(e.startAt.position,e.startAt.inclusive):null;e.wt=Wd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Tl(t,e,n){return new ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return qu(yn(t),yn(e))&&t.limitType===e.limitType}function iy(t){return`${Hu(yn(t))}|lt:${t.limitType}`}function Il(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ny(s)).join(", ")}]`),Ba(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ir(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ir(s)).join(",")),`Target(${n})`}(yn(t))}; limitType=${t.limitType})`}function qa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Js(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=zd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Js(n),s)||n.endAt&&!function(r,i,o){const a=zd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Js(n),s))}(t,e)}function dC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oy(t){return(e,n)=>{let s=!1;for(const r of Js(t)){const i=fC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function fC(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?rr(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
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
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Gg(this.inner)}size(){return this.innerSize}}/**
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
 */const pC=new qe(H.comparator);function vn(){return pC}const ay=new qe(H.comparator);function xr(...t){let e=ay;for(const n of t)e=e.insert(n.key,n);return e}function cy(t){let e=ay;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function os(){return Hr()}function ly(){return Hr()}function Hr(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const mC=new qe(H.comparator),gC=new He(H.comparator);function ce(...t){let e=gC;for(const n of t)e=e.add(n);return e}const yC=new He(ge);function uy(){return yC}/**
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
 */function hy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function dy(t){return{integerValue:""+t}}function vC(t,e){return WS(e)?dy(e):hy(t,e)}/**
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
 */class za{constructor(){this._=void 0}}function _C(t,e,n){return t instanceof na?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof pi?py(t,e):t instanceof mi?my(t,e):function(s,r){const i=fy(s,r),o=Qd(i)+Qd(s._t);return wl(i)&&wl(s._t)?dy(o):hy(s.serializer,o)}(t,e)}function wC(t,e,n){return t instanceof pi?py(t,e):t instanceof mi?my(t,e):n}function fy(t,e){return t instanceof sa?wl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class na extends za{}class pi extends za{constructor(e){super(),this.elements=e}}function py(t,e){const n=gy(e);for(const s of t.elements)n.some(r=>Yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class mi extends za{constructor(e){super(),this.elements=e}}function my(t,e){let n=gy(e);for(const s of t.elements)n=n.filter(r=>!Yt(r,s));return{arrayValue:{values:n}}}class sa extends za{constructor(e,n){super(),this.serializer=e,this._t=n}}function Qd(t){return Me(t.integerValue||t.doubleValue)}function gy(t){return ju(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof pi&&s instanceof pi||n instanceof mi&&s instanceof mi?nr(n.elements,s.elements,Yt):n instanceof sa&&s instanceof sa?Yt(n._t,s._t):n instanceof na&&s instanceof na}(t.transform,e.transform)}class EC{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function yy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _y(t.key,hn.none()):new zi(t.key,t.data,hn.none());{const n=t.data,s=St.empty();let r=new He(tt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new As(t.key,s,new Lt(r.toArray()),hn.none())}}function TC(t,e,n){t instanceof zi?function(s,r,i){const o=s.value.clone(),a=Yd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof As?function(s,r,i){if(!ko(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Yd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(vy(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function qr(t,e,n,s){return t instanceof zi?function(r,i,o,a){if(!ko(r.precondition,i))return o;const c=r.value.clone(),l=Jd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof As?function(r,i,o,a){if(!ko(r.precondition,i))return o;const c=Jd(r.fieldTransforms,a,i),l=i.data;return l.setAll(vy(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return ko(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function IC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=fy(s.transform,r||null);i!=null&&(n===null&&(n=St.empty()),n.set(s.field,i))}return n||null}function Xd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&nr(n,s,(r,i)=>bC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zi extends Ka{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class As extends Ka{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Yd(t,e,n){const s=new Map;Ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,wC(o,a,n[r]))}return s}function Jd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,_C(i,o,e))}return s}class _y extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SC extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&TC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=qr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=qr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ly();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=yy(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&nr(this.mutations,e.mutations,(n,s)=>Xd(n,s))&&nr(this.baseMutations,e.baseMutations,(n,s)=>Xd(n,s))}}class zu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ie(e.mutations.length===s.length);let r=mC;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new zu(e,n,s,r)}}/**
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
 */class kC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RC{constructor(e){this.count=e}}/**
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
 */var Le,de;function AC(t){switch(t){default:return X();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function wy(t){if(t===void 0)return gn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Le.OK:return I.OK;case Le.CANCELLED:return I.CANCELLED;case Le.UNKNOWN:return I.UNKNOWN;case Le.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Le.INTERNAL:return I.INTERNAL;case Le.UNAVAILABLE:return I.UNAVAILABLE;case Le.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Le.NOT_FOUND:return I.NOT_FOUND;case Le.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Le.ABORTED:return I.ABORTED;case Le.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Le.DATA_LOSS:return I.DATA_LOSS;default:return X()}}(de=Le||(Le={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ku{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return co}static getOrCreateInstance(){return co===null&&(co=new Ku),co}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let co=null;/**
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
 */class Wa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ki.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Wa(Z.min(),r,uy(),vn(),ce())}}class Ki{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ki(s,n,ce(),ce(),ce())}}/**
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
 */class Ro{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class by{constructor(e,n){this.targetId=e,this.Et=n}}class Ey{constructor(e,n,s=it.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Zd{constructor(){this.At=0,this.Rt=tf(),this.vt=it.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ce(),n=ce(),s=ce();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new Ki(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=tf()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class OC{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=vn(),this.qt=ef(),this.Ut=new He(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(El(o))if(r===0){const a=new H(o.path);this.Qt(s,a,Ze.newNoDocument(a,Z.min()))}else Ie(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Ku.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&El(a.target)){const c=new H(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ze.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ce();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Wa(e,n,this.Ut,this.Lt,s);return this.Lt=vn(),this.qt=ef(),this.Ut=new He(ge),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Zd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new He(ge),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Zd),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function ef(){return new qe(H.comparator)}function tf(){return new qe(H.comparator)}/**
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
 */const NC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),DC=(()=>({and:"AND",or:"OR"}))();class xC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ra(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ty(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LC(t,e){return ra(t,e.toTimestamp())}function Wt(t){return Ie(!!t),Z.fromTimestamp(function(e){const n=Hn(e);return new je(n.seconds,n.nanos)}(t))}function Wu(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Iy(t){const e=ke.fromString(t);return Ie(Ry(e)),e}function Sl(t,e){return Wu(t.databaseId,e.path)}function Tc(t,e){const n=Iy(e);if(n.get(1)!==t.databaseId.projectId)throw new K(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Sy(n))}function Cl(t,e){return Wu(t.databaseId,e)}function MC(t){const e=Iy(t);return e.length===4?ke.emptyPath():Sy(e)}function kl(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sy(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function nf(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function UC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ie(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(Ie(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:wy(c.code);return new K(l,c.message||"")}(o);n=new Ey(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Tc(t,s.document.name),i=Wt(s.document.updateTime),o=s.document.createTime?Wt(s.document.createTime):Z.min(),a=new St({mapValue:{fields:s.document.fields}}),c=Ze.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ro(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Tc(t,s.document),i=s.readTime?Wt(s.readTime):Z.min(),o=Ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ro([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Tc(t,s.document),i=s.removedTargetIds||[];n=new Ro([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new RC(r),o=s.targetId;n=new by(o,i)}}return n}function $C(t,e){let n;if(e instanceof zi)n={update:nf(t,e.key,e.value)};else if(e instanceof _y)n={delete:Sl(t,e.key)};else if(e instanceof As)n={update:nf(t,e.key,e.data),updateMask:WC(e.fieldMask)};else{if(!(e instanceof SC))return X();n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof na)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof mi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof sa)return{fieldPath:i.field.canonicalString(),increment:o._t};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:LC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(t,e.precondition)),n}function FC(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Wt(s.updateTime):Wt(r);return i.isEqual(Z.min())&&(i=Wt(r)),new EC(i,s.transformResults||[])}(n,e))):[]}function VC(t,e){return{documents:[Cl(t,e.path)]}}function BC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Cl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ky(Jt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Bs(u.field),direction:qC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Ba(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function jC(t){let e=MC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Cy(u);return h instanceof Jt&&ey(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new jr(js(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ba(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ta(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ta(d,h)}(n.endAt)),cC(e,r,o,i,a,"F",c,l)}function HC(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=js(e.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=js(e.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=js(e.unaryFilter.field);return Ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=js(e.unaryFilter.field);return Ve.create(i,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(e){return Ve.create(js(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Jt.create(e.compositeFilter.filters.map(n=>Cy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(t):X()}function qC(t){return NC[t]}function zC(t){return PC[t]}function KC(t){return DC[t]}function Bs(t){return{fieldPath:t.canonicalString()}}function js(t){return tt.fromServerFormat(t.fieldPath)}function ky(t){return t instanceof Ve?function(e){if(e.op==="=="){if(qd(e.value))return{unaryFilter:{field:Bs(e.field),op:"IS_NAN"}};if(Hd(e.value))return{unaryFilter:{field:Bs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qd(e.value))return{unaryFilter:{field:Bs(e.field),op:"IS_NOT_NAN"}};if(Hd(e.value))return{unaryFilter:{field:Bs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(e.field),op:zC(e.op),value:e.value}}}(t):t instanceof Jt?function(e){const n=e.getFilters().map(s=>ky(s));return n.length===1?n[0]:{compositeFilter:{op:KC(e.op),filters:n}}}(t):X()}function WC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ry(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gs{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=it.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class GC{constructor(e){this.se=e}}function QC(t){const e=jC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tl(e,e.limit,"L"):e}/**
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
 */class XC{constructor(){this.He=new YC}addToCollectionParentIndex(e,n){return this.He.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(jn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class YC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new He(ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new He(ke.comparator)).toArray()}}/**
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
 */class or{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new or(0)}static bn(){return new or(-1)}}/**
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
 */class JC{constructor(){this.changes=new gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ek{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&qr(s.mutation,r,Lt.empty(),je.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ce()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ce()){const r=os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=xr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ce()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=vn();const o=Hr(),a=Hr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof As)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),qr(u.mutation,l,u.mutation.getFieldMask(),je.now())):o.set(l.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new ZC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Hr();let r=new qe((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Lt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ce()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ly();u.forEach(d=>{if(!i.has(d)){const p=yy(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(os());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:cy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=xr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=xr();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new ja(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ze.newInvalidDocument(l)))});let o=xr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&qr(l.mutation,c,Lt.empty(),je.now()),qa(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class tk{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Wt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:QC(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),S.resolve()}}/**
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
 */class nk{constructor(){this.overlays=new qe(H.comparator),this.ts=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=os();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=os(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=os(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=os(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new kC(n,s));let i=this.ts.get(n);i===void 0&&(i=ce(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class Gu{constructor(){this.es=new He(ze.ns),this.ss=new He(ze.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new ze(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new ze(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new H(new ke([])),s=new ze(n,e),r=new ze(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new H(new ke([])),s=new ze(n,e),r=new ze(n,e+1);let i=ce();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return H.comparator(e.key,n.key)||ge(e.ds,n.ds)}static rs(e,n){return ge(e.ds,n.ds)||H.comparator(e.key,n.key)}}/**
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
 */class sk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new He(ze.ns)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CC(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),r=new ze(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new He(ge);return n.forEach(r=>{const i=new ze(r,0),o=new ze(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),S.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new ze(new H(i),0);let a=new He(ge);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),S.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ie(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return S.forEach(n.mutations,r=>{const i=new ze(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new ze(n,0),r=this._s.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rk{constructor(e){this.Ts=e,this.docs=new qe(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let s=vn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ze.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=vn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||qS(HS(u),s)<=0||(r.has(u.key)||qa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){X()}Es(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ik(this)}getSize(e){return S.resolve(this.size)}}class ik extends JC{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class ok{constructor(e){this.persistence=e,this.As=new gr(n=>Hu(n),qu),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Gu,this.targetCount=0,this.bs=or.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),S.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new or(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Sn(n),S.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.vs.containsKey(n))}}/**
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
 */class ak{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Bu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ok(this),this.indexManager=new XC,this.remoteDocumentCache=function(s){return new rk(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new GC(n),this.xs=new tk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new sk(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new ck(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return S.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class ck extends KS{constructor(e){super(),this.currentSequenceNumber=e}}class Qu{constructor(e){this.persistence=e,this.$s=new Gu,this.Ms=null}static Fs(e){return new Qu(e)}get Bs(){if(this.Ms)return this.Ms;throw X()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),S.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Bs,s=>{const r=H.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return S.or([()=>S.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Xu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=ce(),r=ce();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Xu(e,n.fromCache,s,r)}}/**
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
 */class lk{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Gd(n))return S.resolve(null);let s=yn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Tl(n,null,"F"),s=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ce(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Tl(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return Gd(n)||r.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Fd()<=pe.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Il(n)),this.Fi(e,o,n,jS(r,-1)))})}$i(e,n){let s=new He(oy(e));return n.forEach((r,i)=>{qa(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Fd()<=pe.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Il(n)),this.xi.getDocumentsMatchingQuery(e,n,jn.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class uk{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new qe(ge),this.qi=new gr(i=>Hu(i),qu),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ek(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function hk(t,e,n,s){return new uk(t,e,n,s)}async function Ay(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ce();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function dk(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const v=c.docVersions.get(p);Ie(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Oy(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function fk(t,e){const n=ne(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(it.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(g,v,w){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(n.Ds.updateTargetData(i,p))});let c=vn(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(pk(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(Z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function pk(t,e,n){let s=ce(),r=ce();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function mk(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function gk(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new gs(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Rl(t,e,n){const s=ne(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qi(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function sf(t,e,n){const s=ne(t);let r=Z.min(),i=ce();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),h=u.qi.get(l);return h!==void 0?S.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,yn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:ce())).next(a=>(yk(s,dC(e),a),{documents:a,Wi:i})))}function yk(t,e,n){let s=t.Ui.get(e)||Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class rf{constructor(){this.activeTargetIds=uy()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vk{constructor(){this.Br=new rf,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new rf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _k{qr(e){}shutdown(){}}/**
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
 */class of{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lo=null;function Ic(){return lo===null?lo=268435456+Math.round(2147483648*Math.random()):lo++,"0x"+lo.toString(16)}/**
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
 */const wk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class bk{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ye="WebChannelConnection";class Ek extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=Ic(),a=this.ao(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Zo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+pr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=wk[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=Ic();return new Promise((o,a)=>{const c=new PS;c.setWithCredentials(!0),c.listenOnce(AS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ec.NO_ERROR:const u=c.getResponseJson();V(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ec.TIMEOUT:V(Ye,`RPC '${e}' ${i} timed out`),a(new K(I.DEADLINE_EXCEEDED,"Request time out"));break;case Ec.HTTP_ERROR:const h=c.getStatus();if(V(Ye,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(w)>=0?w:I.UNKNOWN}(p.status);a(new K(g,p.message))}else a(new K(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(I.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{V(Ye,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);V(Ye,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=Ic(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kS(),a=RS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new NS({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");V(Ye,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new bk({Wr:v=>{d?V(Ye,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(V(Ye,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),V(Ye,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},Hr:()=>u.close()}),g=(v,w,k)=>{v.listen(w,O=>{try{k(O)}catch(D){setTimeout(()=>{throw D},0)}})};return g(u,io.EventType.OPEN,()=>{d||V(Ye,`RPC '${e}' stream ${r} transport opened.`)}),g(u,io.EventType.CLOSE,()=>{d||(d=!0,V(Ye,`RPC '${e}' stream ${r} transport closed`),p.so())}),g(u,io.EventType.ERROR,v=>{d||(d=!0,Zo(Ye,`RPC '${e}' stream ${r} transport errored:`,v),p.so(new K(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,io.EventType.MESSAGE,v=>{var w;if(!d){const k=v.data[0];Ie(!!k);const O=k,D=O.error||((w=O[0])===null||w===void 0?void 0:w.error);if(D){V(Ye,`RPC '${e}' stream ${r} received error:`,D);const P=D.status;let q=function(Te){const z=Le[Te];if(z!==void 0)return wy(z)}(P),ue=D.message;q===void 0&&(q=I.INTERNAL,ue="Unknown error status: "+P+" with message "+D.message),d=!0,p.so(new K(q,ue)),u.close()}else V(Ye,`RPC '${e}' stream ${r} received:`,k),p.io(k)}}),g(a,OS.STAT_EVENT,v=>{v.stat===Ud.PROXY?V(Ye,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Ud.NOPROXY&&V(Ye,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function Sc(){return typeof document<"u"?document:null}/**
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
 */function Ga(t){return new xC(t,!0)}/**
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
 */class Ny{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Py{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Ny(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new K(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tk extends Py{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=UC(this.serializer,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Wt(i.readTime):Z.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=kl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=El(a)?{documents:VC(r,a)}:{query:BC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ty(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=ra(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=HC(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=kl(this.serializer),n.removeTarget=e,this.Fo(n)}}class Ik extends Py{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=FC(e.writeResults,e.commitTime),s=Wt(e.commitTime);return this.listener.Zo(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=kl(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>$C(this.serializer,s))};this.Fo(n)}}/**
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
 */class Sk extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new K(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(I.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(I.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class Ck{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(gn(n),this.ru=!1):V("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class kk{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Os(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.du.add(4),await Wi(c),c.mu.set("Unknown"),c.du.delete(4),await Qa(c)}(this))})}),this.mu=new Ck(s,r)}}async function Qa(t){if(Os(t))for(const e of t.wu)await e(!0)}async function Wi(t){for(const e of t.wu)await e(!1)}function Dy(t,e){const n=ne(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Zu(n)?Ju(n):yr(n).No()&&Yu(n,e))}function xy(t,e){const n=ne(t),s=yr(n);n.fu.delete(e),s.No()&&Ly(n,e),n.fu.size===0&&(s.No()?s.$o():Os(n)&&n.mu.set("Unknown"))}function Yu(t,e){t.gu.Ot(e.targetId),yr(t).jo(e)}function Ly(t,e){t.gu.Ot(e),yr(t).Wo(e)}function Ju(t){t.gu=new OC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),yr(t).start(),t.mu.ou()}function Zu(t){return Os(t)&&!yr(t).xo()&&t.fu.size>0}function Os(t){return ne(t).du.size===0}function My(t){t.gu=void 0}async function Rk(t){t.fu.forEach((e,n)=>{Yu(t,e)})}async function Ak(t,e){My(t),Zu(t)?(t.mu.au(e),Ju(t)):t.mu.set("Unknown")}async function Ok(t,e,n){if(t.mu.set("Online"),e instanceof Ey&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ia(t,s)}else if(e instanceof Ro?t.gu.Kt(e):e instanceof by?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const s=await Oy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),Ly(r,a);const l=new gs(c.target,a,1,c.sequenceNumber);Yu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await ia(t,s)}}async function ia(t,e,n){if(!qi(e))throw e;t.du.add(1),await Wi(t),t.mu.set("Offline"),n||(n=()=>Oy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Qa(t)})}function Uy(t,e){return e().catch(n=>ia(t,n,e))}async function Xa(t){const e=ne(t),n=qn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Nk(e);)try{const r=await mk(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,Pk(e,r)}catch(r){await ia(e,r)}$y(e)&&Fy(e)}function Nk(t){return Os(t)&&t.lu.length<10}function Pk(t,e){t.lu.push(e);const n=qn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function $y(t){return Os(t)&&!qn(t).xo()&&t.lu.length>0}function Fy(t){qn(t).start()}async function Dk(t){qn(t).tu()}async function xk(t){const e=qn(t);for(const n of t.lu)e.Yo(n.mutations)}async function Lk(t,e,n){const s=t.lu.shift(),r=zu.from(s,e,n);await Uy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Xa(t)}async function Mk(t,e){e&&qn(t).Jo&&await async function(n,s){if(r=s.code,AC(r)&&r!==I.ABORTED){const i=n.lu.shift();qn(n).Oo(),await Uy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xa(n)}var r}(t,e),$y(t)&&Fy(t)}async function af(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=Os(n);n.du.add(3),await Wi(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Qa(n)}async function Uk(t,e){const n=ne(t);e?(n.du.delete(2),await Qa(n)):e||(n.du.add(2),await Wi(n),n.mu.set("Unknown"))}function yr(t){return t.yu||(t.yu=function(e,n,s){const r=ne(e);return r.nu(),new Tk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:Rk.bind(null,t),Zr:Ak.bind(null,t),zo:Ok.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Zu(t)?Ju(t):t.mu.set("Unknown")):(await t.yu.stop(),My(t))})),t.yu}function qn(t){return t.pu||(t.pu=function(e,n,s){const r=ne(e);return r.nu(),new Ik(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:Dk.bind(null,t),Zr:Mk.bind(null,t),Xo:xk.bind(null,t),Zo:Lk.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Xa(t)):(await t.pu.stop(),t.lu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class eh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new eh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(t,e){if(gn("AsyncQueue",`${e}: ${t}`),qi(t))return new K(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=xr(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class cf{constructor(){this.Iu=new qe(H.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):X():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ar{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ar(e,n,Zs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class $k{constructor(){this.Eu=void 0,this.listeners=[]}}class Fk{constructor(){this.queries=new gr(e=>iy(e),Ha),this.onlineState="Unknown",this.Au=new Set}}async function Vk(t,e){const n=ne(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new $k),r)try{i.Eu=await n.onListen(s)}catch(o){const a=th(o,`Initialization of query '${Il(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&nh(n)}async function Bk(t,e){const n=ne(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function jk(t,e){const n=ne(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&nh(n)}function Hk(t,e,n){const s=ne(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function nh(t){t.Au.forEach(e=>{e.next()})}class qk{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ar(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Vy{constructor(e){this.key=e}}class By{constructor(e){this.key=e}}class zk{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ce(),this.mutatedKeys=ce(),this.Ku=oy(e),this.Gu=new Zs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new cf,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=qa(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(s.track({type:3,doc:p}),w=!0):this.Wu(d,p)||(s.track({type:2,doc:p}),w=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),w=!0):d&&!p&&(s.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return p(h)-p(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new ar(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new cf,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ce(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new By(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Vy(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ce();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ar.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Kk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Wk{constructor(e){this.key=e,this.ec=!1}}class Gk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new gr(a=>iy(a),Ha),this.ic=new Map,this.rc=new Set,this.oc=new qe(H.comparator),this.uc=new Map,this.cc=new Gu,this.ac={},this.hc=new Map,this.lc=or.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Qk(t,e){const n=iR(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await gk(n.localStore,yn(e));n.isPrimaryClient&&Dy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Xk(n,e,s,a==="current",o.resumeToken)}return r}async function Xk(t,e,n,s,r){t.dc=(h,d,p)=>async function(g,v,w,k){let O=v.view.zu(w);O.Mi&&(O=await sf(g.localStore,v.query,!1).then(({documents:q})=>v.view.zu(q,O)));const D=k&&k.targetChanges.get(v.targetId),P=v.view.applyChanges(O,g.isPrimaryClient,D);return uf(g,v.targetId,P.Yu),P.snapshot}(t,h,d,p);const i=await sf(t.localStore,e,!0),o=new zk(e,i.Wi),a=o.zu(i.documents),c=Ki.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);uf(t,n,l.Yu);const u=new Kk(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function Yk(t,e){const n=ne(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Ha(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),xy(n.remoteStore,s.targetId),Al(n,s.targetId)}).catch(Hi)):(Al(n,s.targetId),await Rl(n.localStore,s.targetId,!0))}async function Jk(t,e,n){const s=oR(t);try{const r=await function(i,o){const a=ne(i),c=je.now(),l=o.reduce((d,p)=>d.add(p.key),ce());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=vn(),g=ce();return a.Ki.getEntries(d,l).next(v=>{p=v,p.forEach((w,k)=>{k.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const w=[];for(const k of o){const O=IC(k,u.get(k.key).overlayedDocument);O!=null&&w.push(new As(k.key,O,Yg(O.value.mapValue),hn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:cy(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new qe(ge)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Gi(s,r.changes),await Xa(s.remoteStore)}catch(r){const i=th(r,"Failed to persist write");n.reject(i)}}async function jy(t,e){const n=ne(t);try{const s=await fk(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Ie(o.ec):r.removedDocuments.size>0&&(Ie(o.ec),o.ec=!1))}),await Gi(n,s,e)}catch(s){await Hi(s)}}function lf(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ne(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&nh(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Zk(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new qe(H.comparator);o=o.insert(i,Ze.newNoDocument(i,Z.min()));const a=ce().add(i),c=new Wa(Z.min(),new Map,new He(ge),o,a);await jy(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),sh(s)}else await Rl(s.localStore,e,!1).then(()=>Al(s,e,n)).catch(Hi)}async function eR(t,e){const n=ne(t),s=e.batch.batchId;try{const r=await dk(n.localStore,e);qy(n,s,null),Hy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Gi(n,r)}catch(r){await Hi(r)}}async function tR(t,e,n){const s=ne(t);try{const r=await function(i,o){const a=ne(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);qy(s,e,n),Hy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Gi(s,r)}catch(r){await Hi(r)}}function Hy(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function qy(t,e,n){const s=ne(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||zy(t,s)})}function zy(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(xy(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),sh(t))}function uf(t,e,n){for(const s of n)s instanceof Vy?(t.cc.addReference(s.key,e),nR(t,s)):s instanceof By?(V("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||zy(t,s.key)):X()}function nR(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.rc.add(s),sh(t))}function sh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new H(ke.fromString(e)),s=t.lc.next();t.uc.set(s,new Wk(n)),t.oc=t.oc.insert(n,s),Dy(t.remoteStore,new gs(yn(ry(n.path)),s,2,Bu.ct))}}async function Gi(t,e,n){const s=ne(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Xu.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Vi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Si,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!qi(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Li.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Li=l.Li.insert(h,g)}}}(s.localStore,i))}async function sR(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Ay(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new K(I.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gi(n,s.Qi)}}function rR(t,e){const n=ne(t),s=n.uc.get(e);if(s&&s.ec)return ce().add(s.key);{let r=ce();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function iR(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zk.bind(null,e),e.nc.zo=jk.bind(null,e.eventManager),e.nc.wc=Hk.bind(null,e.eventManager),e}function oR(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tR.bind(null,e),e}class hf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hk(this.persistence,new lk,e.initialUser,this.serializer)}createPersistence(e){return new ak(Qu.Fs,this.serializer)}createSharedClientState(e){return new vk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>lf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sR.bind(null,this.syncEngine),await Uk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fk}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Ek(r));var r;return function(i,o,a,c){return new Sk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>lf(this.syncEngine,a,0),o=of.D()?new of:new _k,new kk(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Gk(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);V("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Wi(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class cR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class lR{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Je.UNAUTHENTICATED,this.clientId=Wg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=th(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ay(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function df(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hR(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>af(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>af(e.remoteStore,i)),t._onlineComponents=e}function uR(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function hR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uR(n))throw n;Zo("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new hf)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Cc(t,new hf);return t._offlineComponents}async function Ky(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await df(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await df(t,new aR))),t._onlineComponents}function dR(t){return Ky(t).then(e=>e.syncEngine)}async function fR(t){const e=await Ky(t),n=e.eventManager;return n.onListen=Qk.bind(null,e.syncEngine),n.onUnlisten=Yk.bind(null,e.syncEngine),n}function pR(t,e,n={}){const s=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new cR({next:h=>{i.enqueueAndForget(()=>Bk(r,u)),h.fromCache&&a.source==="server"?c.reject(new K(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new qk(o,l,{includeMetadataChanges:!0,xu:!0});return Vk(r,u)}(await fR(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const ff=new Map;/**
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
 */function Wy(t,e,n){if(!n)throw new K(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mR(t,e,n,s){if(e===!0&&s===!0)throw new K(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pf(t){if(!H.isDocumentKey(t))throw new K(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mf(t){if(H.isDocumentKey(t))throw new K(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function gi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rh(t);throw new K(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class gf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ya{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DS;switch(n.type){case"firstParty":return new US(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ff.get(e);n&&(V("ComponentProvider","Removing Datastore"),ff.delete(e),n.terminate())}(this),Promise.resolve()}}function gR(t,e,n,s={}){var r;const i=(t=gi(t,Ya))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Zo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Je.MOCK_USER;else{o=lm(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new K(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Je(c)}t._authCredentials=new xS(new Kg(o,a))}}/**
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
 */class Rt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Ja{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ja(this.firestore,e,this._query)}}class Un extends Ja{constructor(e,n,s){super(e,n,ry(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new H(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function yR(t,e,...n){if(t=Ue(t),Wy("collection","path",e),t instanceof Ya){const s=ke.fromString(e,...n);return mf(s),new Un(t,null,s)}{if(!(t instanceof Rt||t instanceof Un))throw new K(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return mf(s),new Un(t.firestore,null,s)}}function cP(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Wg.A()),Wy("doc","path",e),t instanceof Ya){const s=ke.fromString(e,...n);return pf(s),new Rt(t,null,new H(s))}{if(!(t instanceof Rt||t instanceof Un))throw new K(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return pf(s),new Rt(t.firestore,t instanceof Un?t.converter:null,new H(s))}}/**
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
 */class vR{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Ny(this,"async_queue_retry"),this.qc=()=>{const n=Sc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Mn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!qi(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw gn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=eh.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&X()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class ih extends Ya{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new vR,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qy(this),this._firestoreClient.terminate()}}function _R(t,e){const n=typeof t=="object"?t:Ea(),s=typeof t=="string"?t:e||"(default)",r=Ci(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=au("firestore");i&&gR(r,...i)}return r}function Gy(t){return t._firestoreClient||Qy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Qy(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new XS(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new lR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(it.fromBase64String(e))}catch(n){throw new K(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cr(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xy{constructor(e){this._methodName=e}}/**
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
 */class ah{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const wR=/^__.*__$/;class bR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,n,this.fieldTransforms):new zi(e,this.data,n,this.fieldTransforms)}}function Yy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class ch{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ch(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return oa(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Yy(this.Yc)&&wR.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class ER{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ga(e)}ua(e,n,s,r=!1){return new ch({Yc:e,methodName:n,oa:s,path:tt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TR(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new ER(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IR(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);tv("Data must be an object, but it was:",o,s);const a=Zy(s,o);let c,l;if(i.merge)c=new Lt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=SR(e,h,n);if(!o.contains(d))throw new K(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kR(u,d)||u.push(d)}c=new Lt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new bR(new St(a),c,l)}function Jy(t,e){if(ev(t=Ue(t)))return tv("Unsupported field value:",e,t),Zy(t,e);if(t instanceof Xy)return function(n,s){if(!Yy(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Jy(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vC(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=je.fromDate(n);return{timestampValue:ra(s.serializer,r)}}if(n instanceof je){const r=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ra(s.serializer,r)}}if(n instanceof ah)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof cr)return{bytesValue:Ty(s.serializer,n._byteString)};if(n instanceof Rt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Wu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${rh(n)}`)}(t,e)}function Zy(t,e){const n={};return Gg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,(s,r)=>{const i=Jy(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ev(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof ah||t instanceof cr||t instanceof Rt||t instanceof Xy)}function tv(t,e,n){if(!ev(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=rh(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function SR(t,e,n){if((e=Ue(e))instanceof oh)return e._internalPath;if(typeof e=="string")return nv(t,e);throw oa("Field path arguments must be of type string or ",t,!1,void 0,n)}const CR=new RegExp("[~\\*/\\[\\]]");function nv(t,e,n){if(e.search(CR)>=0)throw oa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oh(...e.split("."))._internalPath}catch{throw oa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new K(I.INVALID_ARGUMENT,a+t+c)}function kR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RR extends sv{data(){return super.data()}}function rv(t,e){return typeof e=="string"?nv(t,e):e instanceof oh?e._internalPath:e._delegate._internalPath}/**
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
 */function AR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class OR{convertValue(e,n="none"){switch(Is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const s={};return mr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ah(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);Ie(Ry(s));const r=new di(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||gn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function NR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PR extends sv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(rv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ao extends PR{data(e={}){return super.data(e)}}class DR{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new uo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ao(this._firestore,this._userDataWriter,s.key,s,new uo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ao(s._firestore,s._userDataWriter,o.doc.key,o.doc,new uo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ao(s._firestore,s._userDataWriter,o.doc.key,o.doc,new uo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:xR(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class LR extends OR{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function MR(t){t=gi(t,Ja);const e=gi(t.firestore,ih),n=Gy(e),s=new LR(e);return AR(t._query),pR(n,t._query).then(r=>new DR(e,s,t,r))}function lP(t,e,n){t=gi(t,Rt);const s=gi(t.firestore,ih),r=NR(t.converter,e,n);return UR(s,[IR(TR(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,hn.none())])}function UR(t,e){return function(n,s){const r=new Mn;return n.asyncQueue.enqueueAndForget(async()=>Jk(await dR(n),s,r)),r.promise}(Gy(t),e)}(function(t,e=!0){(function(n){pr=n})(ur),Bn(new fn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ih(new LS(n.getProvider("auth-internal")),new FS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),kt($d,"3.10.0",t),kt($d,"3.10.0","esm2017")})();async function $R(t){var o;let n=qo();for(let a=0;a<5&&n.currentUser==null;a++)console.log("Waiting for authentication..."),await new Promise(c=>setTimeout(c,1e3)),n=qo();if(n===null||!((o=n.currentUser)!=null&&o.email))return console.log("Authentication failed or user email is null"),"undefined";const s=yR(_R(),"users"),r=await MR(s);let i;return r.forEach(a=>{a.data().email===n.currentUser.email&&(i=a.data()[t])}),i}const FR={data(){return{logState:"",sideBarDisplay:!1,auth:!1,name:""}},mounted(){this.sideBarDisplay=!1,qo().onAuthStateChanged(t=>{t?(this.auth=!0,$R("name").then(e=>{this.name=e})):this.auth=!1})},methods:{goHome(){this.$router.push("/")}}},VR="/assets/logo-d503e1ea.png";const BR=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},jR={class:"container"},HR={class:"logo"};function qR(t,e,n,s,r,i){const o=xw("router-view");return Qp(),hb(Tt,null,[qs("div",jR,[qs("header",null,[qs("div",HR,[qs("img",{onClick:e[0]||(e[0]=(...a)=>i.goHome&&i.goHome(...a)),class:"img-responsive",src:VR})])])]),ht(o)],64)}const zR=BR(FR,[["render",qR],["__file","/home/dave/Documents/VueFleet/vue-project/src/App.vue"]]);function KR(){return iv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function iv(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const WR=typeof Proxy=="function",GR="devtools-plugin:setup",QR="plugin:settings:set";let Ls,Ol;function XR(){var t;return Ls!==void 0||(typeof window<"u"&&window.performance?(Ls=!0,Ol=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Ls=!0,Ol=global.perf_hooks.performance):Ls=!1),Ls}function YR(){return XR()?Ol.now():Date.now()}class JR{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return YR()}},n&&n.on(QR,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function ZR(t,e){const n=t,s=iv(),r=KR(),i=WR&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(GR,t,e);else{const o=i?new JR(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof window<"u";function eA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function kc(t,e){const n={};for(const s in e){const r=e[s];n[s]=wt(r)?r.map(t):t(r)}return n}const zr=()=>{},wt=Array.isArray;function fe(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const tA=/\/$/,nA=t=>t.replace(tA,"");function Rc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=iA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function sA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vf(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&zn(e.matched[s],n.matched[r])&&ov(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ov(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rA(t[n],e[n]))return!1;return!0}function rA(t,e){return wt(t)?_f(t,e):wt(e)?_f(e,t):t===e}function _f(t,e){return wt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function iA(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var yi;(function(t){t.pop="pop",t.push="push"})(yi||(yi={}));var Kr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kr||(Kr={}));function oA(t){if(!t)if(rn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nA(t)}const aA=/^[^#]+#/;function cA(t,e){return t.replace(aA,"#")+e}function lA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Za=()=>({left:window.pageXOffset,top:window.pageYOffset});function uA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!s||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(s&&i){fe(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{fe(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){fe(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=lA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wf(t,e){return(history.state?history.state.position-e:-1)+t}const Nl=new Map;function hA(t,e){Nl.set(t,e)}function dA(t){const e=Nl.get(t);return Nl.delete(t),e}let fA=()=>location.protocol+"//"+location.host;function av(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),yf(c,"")}return yf(n,t)+s+r}function pA(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=av(t,location),g=n.value,v=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}w=v?d.position-v.position:0}else s(p);r.forEach(k=>{k(n.value,g,{delta:w,type:yi.pop,direction:w?w>0?Kr.forward:Kr.back:Kr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:Za()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function bf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Za():null}}function mA(t){const{history:e,location:n}=window,s={value:av(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:fA()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){fe("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,bf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=me({},r.value,e.state,{forward:c,scroll:Za()});e.state||fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=me({},bf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function gA(t){t=oA(t);const e=mA(t),n=pA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=me({location:"",base:t,go:s,createHref:cA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function yA(t){return typeof t=="string"||t&&typeof t=="object"}function cv(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lv=Symbol("navigation failure");var Ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ef||(Ef={}));const vA={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${wA(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function lr(t,e){return me(new Error(vA[t](e)),{type:t,[lv]:!0},e)}function tn(t,e){return t instanceof Error&&lv in t&&(e==null||!!(t.type&e))}const _A=["params","query","hash"];function wA(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of _A)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Tf="[^/]+?",bA={sensitive:!1,strict:!1,start:!0,end:!0},EA=/[.+*?^${}()[\]/\\]/g;function TA(t,e){const n=me({},bA,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(EA,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:v,optional:w,regexp:k}=d;i.push({name:g,repeatable:v,optional:w});const O=k||Tf;if(O!==Tf){p+=10;try{new RegExp(`(${O})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${O}): `+P.message)}}let D=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(D=w&&l.length<2?`(?:/${D})`:"/"+D),w&&(D+="?"),r+=D,p+=20,w&&(p+=-8),v&&(p+=-20),O===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:w}=p,k=g in l?l[g]:"";if(wt(k)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const O=wt(k)?k.join("/"):k;if(!O)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function IA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function SA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=IA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(If(s))return 1;if(If(r))return-1}return r.length-s.length}function If(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const CA={type:0,value:""},kA=/[a-zA-Z0-9_]/;function RA(t){if(!t)return[[]];if(t==="/")return[[CA]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:kA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function AA(t,e,n){const s=TA(RA(t.path),n);{const i=new Set;for(const o of s.keys)i.has(o.name)&&fe(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const r=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function OA(t,e){const n=[],s=new Map;e=kf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,g=NA(u);LA(g,h),g.aliasOf=d&&d.record;const v=kf(e,u),w=[g];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of D)w.push(me({},g,{components:d?d.record.components:g.components,path:P,aliasOf:d?d.record:g}))}let k,O;for(const D of w){const{path:P}=D;if(h&&P[0]!=="/"){const q=h.record.path,ue=q[q.length-1]==="/"?"":"/";D.path=h.record.path+(P&&ue+P)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=AA(D,h,v),h&&P[0]==="/"&&MA(k,h),d?(d.alias.push(k),xA(d,k)):(O=O||k,O!==k&&O.alias.push(k),p&&u.name&&!Cf(k)&&o(u.name)),g.children){const q=g.children;for(let ue=0;ue<q.length;ue++)i(q[ue],k,d&&d.children[ue])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return O?()=>{o(O)}:zr}function o(u){if(cv(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&SA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!uv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Cf(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},g,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw lr(1,{location:u});{const O=Object.keys(u.params||{}).filter(D=>!d.keys.find(P=>P.name===D));O.length&&fe(`Discarded invalid param(s) "${O.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=d.record.name,p=me(Sf(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&Sf(u.params,d.keys.map(O=>O.name))),g=d.stringify(p)}else if("path"in u)g=u.path,g.startsWith("/")||fe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),d=n.find(O=>O.re.test(g)),d&&(p=d.parse(g),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw lr(1,{location:u,currentLocation:h});v=d.record.name,p=me({},h.params,u.params),g=d.stringify(p)}const w=[];let k=d;for(;k;)w.unshift(k.record),k=k.parent;return{name:v,path:g,params:p,matched:w,meta:DA(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Sf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function NA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:PA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function PA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Cf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function DA(t){return t.reduce((e,n)=>me(e,n.meta),{})}function kf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Pl(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function xA(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(Pl.bind(null,n)))return fe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(Pl.bind(null,n)))return fe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function LA(t,e){e&&e.record.name&&!t.name&&!t.path&&fe(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function MA(t,e){for(const n of e.keys)if(!t.keys.find(Pl.bind(null,n)))return fe(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function uv(t,e){return e.children.some(n=>n===t||uv(t,n))}const hv=/#/g,UA=/&/g,$A=/\//g,FA=/=/g,VA=/\?/g,dv=/\+/g,BA=/%5B/g,jA=/%5D/g,fv=/%5E/g,HA=/%60/g,pv=/%7B/g,qA=/%7C/g,mv=/%7D/g,zA=/%20/g;function lh(t){return encodeURI(""+t).replace(qA,"|").replace(BA,"[").replace(jA,"]")}function KA(t){return lh(t).replace(pv,"{").replace(mv,"}").replace(fv,"^")}function Dl(t){return lh(t).replace(dv,"%2B").replace(zA,"+").replace(hv,"%23").replace(UA,"%26").replace(HA,"`").replace(pv,"{").replace(mv,"}").replace(fv,"^")}function WA(t){return Dl(t).replace(FA,"%3D")}function GA(t){return lh(t).replace(hv,"%23").replace(VA,"%3F")}function QA(t){return t==null?"":GA(t).replace($A,"%2F")}function vi(t){try{return decodeURIComponent(""+t)}catch{fe(`Error decoding "${t}". Using original value`)}return""+t}function XA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(dv," "),o=i.indexOf("="),a=vi(o<0?i:i.slice(0,o)),c=o<0?null:vi(i.slice(o+1));if(a in e){let l=e[a];wt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Rf(t){let e="";for(let n in t){const s=t[n];if(n=WA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(wt(s)?s.map(i=>i&&Dl(i)):[s&&Dl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=wt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const JA=Symbol("router view location matched"),Af=Symbol("router view depth"),uh=Symbol("router"),gv=Symbol("route location"),xl=Symbol("router view location");function Tr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(lr(4,{from:n,to:e})):h instanceof Error?a(h):yA(h)?a(lr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,ZA(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(d=>c._called?d:(fe(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){fe(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function ZA(t,e,n){let s=0;return function(){s++===1&&fe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,s===1&&t.apply(null,arguments)}}function Ac(t,e,n,s){const r=[];for(const i of t){!i.components&&!i.children.length&&fe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw fe(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){fe(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,fe(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(eO(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Cn(l,n,s,i,o))}else{let c=a();"catch"in c||(fe(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=eA(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Cn(d,n,s,i,o)()}))}}}return r}function eO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Of(t){const e=un(uh),n=un(gv),s=It(()=>e.resolve(Gs(t.to))),r=It(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(zn.bind(null,u));if(d>-1)return d;const p=Nf(c[l-2]);return l>1&&Nf(u)===p&&h[h.length-1].path!==p?h.findIndex(zn.bind(null,c[l-2])):d}),i=It(()=>r.value>-1&&rO(n.params,s.value.params)),o=It(()=>r.value>-1&&r.value===n.matched.length-1&&ov(n.params,s.value.params));function a(c={}){return sO(c)?e[Gs(t.replace)?"replace":"push"](Gs(t.to)).catch(zr):Promise.resolve()}if(rn){const c=iu();if(c){const l={route:s.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),_w(()=>{l.route=s.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:s,href:It(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const tO=xp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Of,setup(t,{slots:e}){const n=wi(Of(t)),{options:s}=un(uh),r=It(()=>({[Pf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Pf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:sm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),nO=tO;function sO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rO(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!wt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Nf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pf=(t,e,n)=>t??e??n,iO=xp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){aO();const s=un(xl),r=It(()=>t.route||s.value),i=un(Af,0),o=It(()=>{let l=Gs(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=It(()=>r.value.matched[o.value]);vo(Af,It(()=>o.value+1)),vo(JA,a),vo(xl,r);const c=U_();return Mr(()=>[c.value,a.value,t.name],([l,u,h],[d,p,g])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!zn(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Df(n.default,{Component:d,route:l});const p=h.props[u],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=sm(d,me({},g,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(rn&&w.ref){const k={depth:o.value,name:h.name,path:h.path,meta:h.meta};(wt(w.ref)?w.ref.map(D=>D.i):[w.ref.i]).forEach(D=>{D.__vrv_devtools=k})}return Df(n.default,{Component:w,route:l})||w}}});function Df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oO=iO;function aO(){const t=iu(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Ir(t,e){const n=me({},t,{matched:t.matched.map(s=>gO(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function ho(t){return{_custom:{display:t}}}let cO=0;function lO(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const s=cO++;ZR({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ir(e.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:yv})}wt(h.__vrl_devtools)&&(h.__devtoolsApi=r,h.__vrl_devtools.forEach(d=>{let p=wv,g="";d.isExactActive?(p=_v,g="This is exactly active"):d.isActive&&(p=vv,g="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:p})}))}),Mr(e.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const i="router:navigations:"+s;r.addTimelineLayer({id:i,label:`Router${s?" "+s:""} Navigations`,color:4237508}),e.onError((u,h)=>{r.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:r.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:ho("beforeEach"),from:Ir(h,"Current Location during this navigation"),to:Ir(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),r.addTimelineEvent({layerId:i,event:{time:r.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:ho("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=ho("❌")):p.status=ho("✅"),p.from=Ir(h,"Current Location during this navigation"),p.to=Ir(u,"Target location"),r.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:r.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+s;r.addInspector({id:a,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(d=>!d.parent);h.forEach(Tv),u.filter&&(h=h.filter(d=>Ll(d,u.filter.toLowerCase()))),h.forEach(d=>Ev(d,e.currentRoute.value)),u.rootNodes=h.map(bv)}let l;r.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),r.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:hO(d)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function uO(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function hO(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(s=>`${s.name}${uO(s)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(s=>s.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const yv=15485081,vv=2450411,_v=8702998,dO=2282478,wv=16486972,fO=6710886;function bv(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:dO}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:wv}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:yv}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:_v}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:vv}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:fO});let s=n.__vd_id;return s==null&&(s=String(pO++),n.__vd_id=s),{id:s,label:n.path,tags:e,children:t.children.map(bv)}}let pO=0;const mO=/^\/(.*)\/([a-z]*)$/;function Ev(t,e){const n=e.matched.length&&zn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(s=>zn(s,t.record))),t.children.forEach(s=>Ev(s,e))}function Tv(t){t.__vd_match=!1,t.children.forEach(Tv)}function Ll(t,e){const n=String(t.re).match(mO);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>Ll(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const r=t.record.path.toLowerCase(),i=vi(r);return!e.startsWith("/")&&(i.includes(e)||r.includes(e))||i.startsWith(e)||r.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>Ll(o,e))}function gO(t,e){const n={};for(const s in t)e.includes(s)||(n[s]=t[s]);return n}function yO(t){const e=OA(t.routes,t),n=t.parseQuery||XA,s=t.stringifyQuery||Rf,r=t.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Tr(),o=Tr(),a=Tr(),c=$_(Tn);let l=Tn;rn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kc.bind(null,_=>""+_),h=kc.bind(null,QA),d=kc.bind(null,vi);function p(_,M){let x,$;return cv(_)?(x=e.getRecordMatcher(_),$=M):$=_,e.addRoute($,x)}function g(_){const M=e.getRecordMatcher(_);M?e.removeRoute(M):fe(`Cannot remove non-existent route "${String(_)}"`)}function v(){return e.getRoutes().map(_=>_.record)}function w(_){return!!e.getRecordMatcher(_)}function k(_,M){if(M=me({},M||c.value),typeof _=="string"){const ee=Rc(n,_,M.path),f=e.resolve({path:ee.path},M),m=r.createHref(ee.fullPath);return m.startsWith("//")?fe(`Location "${_}" resolved to "${m}". A resolved location cannot start with multiple slashes.`):f.matched.length||fe(`No match found for location with path "${_}"`),me(ee,f,{params:d(f.params),hash:vi(ee.hash),redirectedFrom:void 0,href:m})}let x;if("path"in _)"params"in _&&!("name"in _)&&Object.keys(_.params).length&&fe(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),x=me({},_,{path:Rc(n,_.path,M.path).path});else{const ee=me({},_.params);for(const f in ee)ee[f]==null&&delete ee[f];x=me({},_,{params:h(_.params)}),M.params=h(M.params)}const $=e.resolve(x,M),he=_.hash||"";he&&!he.startsWith("#")&&fe(`A \`hash\` should always start with the character "#". Replace "${he}" with "#${he}".`),$.params=u(d($.params));const Ee=sA(s,me({},_,{hash:KA(he),path:$.path})),se=r.createHref(Ee);return se.startsWith("//")?fe(`Location "${_}" resolved to "${se}". A resolved location cannot start with multiple slashes.`):$.matched.length||fe(`No match found for location with path "${"path"in _?_.path:_}"`),me({fullPath:Ee,hash:he,query:s===Rf?YA(_.query):_.query||{}},$,{redirectedFrom:void 0,href:se})}function O(_){return typeof _=="string"?Rc(n,_,c.value.path):me({},_)}function D(_,M){if(l!==_)return lr(8,{from:M,to:_})}function P(_){return Te(_)}function q(_){return P(me(O(_),{replace:!0}))}function ue(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:x}=M;let $=typeof x=="function"?x(_):x;if(typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=O($):{path:$},$.params={}),!("path"in $)&&!("name"in $))throw fe(`Invalid redirect found:
${JSON.stringify($,null,2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return me({query:_.query,hash:_.hash,params:"path"in $?{}:_.params},$)}}function Te(_,M){const x=l=k(_),$=c.value,he=_.state,Ee=_.force,se=_.replace===!0,ee=ue(x);if(ee)return Te(me(O(ee),{state:typeof ee=="object"?me({},he,ee.state):he,force:Ee,replace:se}),M||x);const f=x;f.redirectedFrom=M;let m;return!Ee&&vf(s,$,x)&&(m=lr(16,{to:f,from:$}),Ps($,$,!0,!1)),(m?Promise.resolve(m):re(f,$)).catch(y=>tn(y)?tn(y,2)?y:pt(y):ie(y,f,$)).then(y=>{if(y){if(tn(y,2))return vf(s,k(y.to),f)&&M&&(M._count=M._count?M._count+1:1)>10?(fe(`Detected an infinite redirection in a navigation guard when going from "${$.fullPath}" to "${f.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Te(me({replace:se},O(y.to),{state:typeof y.to=="object"?me({},he,y.to.state):he,force:Ee}),M||f)}else y=$e(f,$,!0,se,he);return ye(f,$,y),y})}function z(_,M){const x=D(_,M);return x?Promise.reject(x):Promise.resolve()}function re(_,M){let x;const[$,he,Ee]=vO(_,M);x=Ac($.reverse(),"beforeRouteLeave",_,M);for(const ee of $)ee.leaveGuards.forEach(f=>{x.push(Cn(f,_,M))});const se=z.bind(null,_,M);return x.push(se),Ms(x).then(()=>{x=[];for(const ee of i.list())x.push(Cn(ee,_,M));return x.push(se),Ms(x)}).then(()=>{x=Ac(he,"beforeRouteUpdate",_,M);for(const ee of he)ee.updateGuards.forEach(f=>{x.push(Cn(f,_,M))});return x.push(se),Ms(x)}).then(()=>{x=[];for(const ee of _.matched)if(ee.beforeEnter&&!M.matched.includes(ee))if(wt(ee.beforeEnter))for(const f of ee.beforeEnter)x.push(Cn(f,_,M));else x.push(Cn(ee.beforeEnter,_,M));return x.push(se),Ms(x)}).then(()=>(_.matched.forEach(ee=>ee.enterCallbacks={}),x=Ac(Ee,"beforeRouteEnter",_,M),x.push(se),Ms(x))).then(()=>{x=[];for(const ee of o.list())x.push(Cn(ee,_,M));return x.push(se),Ms(x)}).catch(ee=>tn(ee,8)?ee:Promise.reject(ee))}function ye(_,M,x){for(const $ of a.list())$(_,M,x)}function $e(_,M,x,$,he){const Ee=D(_,M);if(Ee)return Ee;const se=M===Tn,ee=rn?history.state:{};x&&($||se?r.replace(_.fullPath,me({scroll:se&&ee&&ee.scroll},he)):r.push(_.fullPath,he)),c.value=_,Ps(_,M,x,se),pt()}let Re;function At(){Re||(Re=r.listen((_,M,x)=>{if(!Ds.listening)return;const $=k(_),he=ue($);if(he){Te(me(he,{replace:!0}),$).catch(zr);return}l=$;const Ee=c.value;rn&&hA(wf(Ee.fullPath,x.delta),Za()),re($,Ee).catch(se=>tn(se,12)?se:tn(se,2)?(Te(se.to,$).then(ee=>{tn(ee,20)&&!x.delta&&x.type===yi.pop&&r.go(-1,!1)}).catch(zr),Promise.reject()):(x.delta&&r.go(-x.delta,!1),ie(se,$,Ee))).then(se=>{se=se||$e($,Ee,!1),se&&(x.delta&&!tn(se,8)?r.go(-x.delta,!1):x.type===yi.pop&&tn(se,20)&&r.go(-1,!1)),ye($,Ee,se)}).catch(zr)}))}let wn=Tr(),Ot=Tr(),Fe;function ie(_,M,x){pt(_);const $=Ot.list();return $.length?$.forEach(he=>he(_,M,x)):(fe("uncaught error during route navigation:"),console.error(_)),Promise.reject(_)}function le(){return Fe&&c.value!==Tn?Promise.resolve():new Promise((_,M)=>{wn.add([_,M])})}function pt(_){return Fe||(Fe=!_,At(),wn.list().forEach(([M,x])=>_?x(_):M()),wn.reset()),_}function Ps(_,M,x,$){const{scrollBehavior:he}=t;if(!rn||!he)return Promise.resolve();const Ee=!x&&dA(wf(_.fullPath,0))||($||!x)&&history.state&&history.state.scroll||null;return _p().then(()=>he(_,M,Ee)).then(se=>se&&uA(se)).catch(se=>ie(se,_,M))}const en=_=>r.go(_);let Ut;const bt=new Set,Ds={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:w,getRoutes:v,resolve:k,options:t,push:P,replace:q,go:en,back:()=>en(-1),forward:()=>en(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ot.add,isReady:le,install(_){const M=this;_.component("RouterLink",nO),_.component("RouterView",oO),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Gs(c)}),rn&&!Ut&&c.value===Tn&&(Ut=!0,P(r.location).catch(he=>{fe("Unexpected error when starting the router:",he)}));const x={};for(const he in Tn)x[he]=It(()=>c.value[he]);_.provide(uh,M),_.provide(gv,wi(x)),_.provide(xl,c);const $=_.unmount;bt.add(_),_.unmount=function(){bt.delete(_),bt.size<1&&(l=Tn,Re&&Re(),Re=null,c.value=Tn,Ut=!1,Fe=!1),$()},rn&&lO(_,M,e)}};return Ds}function Ms(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function vO(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>zn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>zn(l,c))||r.push(c))}return[n,s,r]}const _O="modulepreload",wO=function(t){return"/"+t},xf={},Sr=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=wO(i),i in xf)return;xf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":_O,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},bO=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Cr(t){return()=>bO(Object.assign({"../pages/About.vue":()=>Sr(()=>import("./About-fbe9ae68.js"),["assets/About-fbe9ae68.js","assets/Sidebar-b6189e1a.js","assets/About-6511fcdf.css"]),"../pages/AddCloset.vue":()=>Sr(()=>import("./AddCloset-8675634a.js"),["assets/AddCloset-8675634a.js","assets/AddCloset-4b4b8398.css"]),"../pages/Closet.vue":()=>Sr(()=>import("./Closet-5618ecaa.js"),["assets/Closet-5618ecaa.js","assets/Sidebar-b6189e1a.js","assets/Closet-45181ce9.css"]),"../pages/Home.vue":()=>Sr(()=>import("./Home-710a93a3.js"),["assets/Home-710a93a3.js","assets/Sidebar-b6189e1a.js","assets/Home-a44eba66.css"]),"../pages/Login.vue":()=>Sr(()=>import("./Login-658f32dd.js"),["assets/Login-658f32dd.js","assets/Sidebar-b6189e1a.js","assets/Login-bac4bc3c.css"])}),`../pages/${t}.vue`)}const EO=[{path:"/",component:Cr("Home")},{path:"/About",component:Cr("About")},{path:"/Closet",component:Cr("Closet")},{path:"/Login",component:Cr("Login")},{path:"/AddCloset",component:Cr("AddCloset")}];var TO="firebase",IO="9.19.1";/**
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
 */kt(TO,IO,"app");/**
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
 */const Iv="firebasestorage.googleapis.com",Sv="storageBucket",SO=2*60*1e3,CO=10*60*1e3,kO=1e3;/**
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
 */class Ae extends Zt{constructor(e,n,s=0){super(Oc(e),`Firebase Storage: ${n} (${Oc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function Oc(t){return"storage/"+t}function hh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae(Se.UNKNOWN,t)}function RO(t){return new Ae(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function AO(t){return new Ae(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae(Se.UNAUTHENTICATED,t)}function NO(){return new Ae(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PO(t){return new Ae(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Cv(){return new Ae(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kv(){return new Ae(Se.CANCELED,"User canceled the upload/download.")}function DO(t){return new Ae(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function xO(t){return new Ae(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LO(){return new Ae(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sv+"' property when initializing the app?")}function Rv(){return new Ae(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function MO(){return new Ae(Se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function UO(){return new Ae(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $O(t){return new Ae(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ml(t){return new Ae(Se.INVALID_ARGUMENT,t)}function Av(){return new Ae(Se.APP_DELETED,"The Firebase app was deleted.")}function FO(t){return new Ae(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wr(t,e){return new Ae(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function kr(t){throw new Ae(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ft.makeFromUrl(e,n)}catch{return new ft(e,"")}if(s.path==="")return s;throw xO(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},v=n===Iv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",k=new RegExp(`^https?://${v}/${r}/${w}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:p,indices:g,postModify:l},{regex:k,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<D.length;P++){const q=D[P],ue=q.regex.exec(e);if(ue){const Te=ue[q.indices.bucket];let z=ue[q.indices.path];z||(z=""),s=new ft(Te,z),q.postModify(s);break}}if(s==null)throw DO(e);return s}}class VO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function BO(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){r=setTimeout(()=>{r=null,t(p,c())},w)}function d(){i&&clearTimeout(i)}function p(w,...k){if(l){d();return}if(w){d(),u.call(null,w,...k);return}if(c()||o){d(),u.call(null,w,...k);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,h(D)}let g=!1;function v(w){g||(g=!0,d(),!l&&(r!==null?(w||(a=2),clearTimeout(r),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function jO(t){t(!1)}/**
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
 */function HO(t){return t!==void 0}function qO(t){return typeof t=="function"}function zO(t){return typeof t=="object"&&!Array.isArray(t)}function ec(t){return typeof t=="string"||t instanceof String}function Lf(t){return dh()&&t instanceof Blob}function dh(){return typeof Blob<"u"&&!fE()}function Ul(t,e,n,s){if(s<e)throw Ml(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ml(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function vr(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Ov(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var ys;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ys||(ys={}));/**
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
 */function Nv(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class KO{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new fo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ys.NO_ERROR,c=i.getStatus();if(!a||Nv(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ys.ABORT;s(!1,new fo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new fo(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());HO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=hh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Av():kv();o(c)}else{const c=Cv();o(c)}};this.canceled_?n(!1,new fo(!1,null,!0)):this.backoffId_=BO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function WO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function XO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YO(t,e,n,s,r,i,o=!0){const a=Ov(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return QO(l,e),WO(l,n),GO(l,i),XO(l,s),new KO(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function JO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZO(...t){const e=JO();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(dh())return new Blob(t);throw new Ae(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function eN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function tN(t){if(typeof atob>"u")throw $O("base-64");return atob(t)}/**
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
 */const qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nc{constructor(e,n){this.data=e,this.contentType=n||null}}function nN(t,e){switch(t){case qt.RAW:return new Nc(Pv(e));case qt.BASE64:case qt.BASE64URL:return new Nc(Dv(t,e));case qt.DATA_URL:return new Nc(rN(e),iN(e))}throw hh()}function Pv(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function sN(t){let e;try{e=decodeURIComponent(t)}catch{throw Wr(qt.DATA_URL,"Malformed data URL.")}return Pv(e)}function Dv(t,e){switch(t){case qt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Wr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case qt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Wr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tN(e)}catch(r){throw r.message.includes("polyfill")?r:Wr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class xv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Wr(qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=oN(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function rN(t){const e=new xv(t);return e.base64?Dv(qt.BASE64,e.rest):sN(e.rest)}function iN(t){return new xv(t).contentType}function oN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Pn{constructor(e,n){let s=0,r="";Lf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Lf(this.data_)){const s=this.data_,r=eN(s,e,n);return r===null?null:new Pn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Pn(s,!0)}}static getBlob(...e){if(dh()){const n=e.map(s=>s instanceof Pn?s.data_:s);return new Pn(ZO.apply(null,n))}else{const n=e.map(o=>ec(o)?nN(qt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Pn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function fh(t){let e;try{e=JSON.parse(t)}catch{return null}return zO(e)?e:null}/**
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
 */function aN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cN(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Lv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function lN(t,e){return e}class at{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||lN}}let po=null;function uN(t){return!ec(t)||t.length<2?t:Lv(t)}function Mv(){if(po)return po;const t=[];t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));function e(i,o){return uN(o)}const n=new at("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new at("size");return r.xform=s,t.push(r),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),po=t,po}function hN(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new ft(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function dN(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return hN(s,t),s}function Uv(t,e,n){const s=fh(e);return s===null?null:dN(t,s,n)}function fN(t,e,n,s){const r=fh(e);if(r===null||!ec(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=vr(d,n,s),g=Ov({alt:"media",token:l});return p+g})[0]}function $v(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
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
 */const Mf="prefixes",Uf="items";function pN(t,e,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Mf])for(const r of n[Mf]){const i=r.replace(/\/$/,""),o=t._makeStorageReference(new ft(e,i));s.prefixes.push(o)}if(n[Uf])for(const r of n[Uf]){const i=t._makeStorageReference(new ft(e,r.name));s.items.push(i)}return s}function mN(t,e,n){const s=fh(n);return s===null?null:pN(t,e,s)}class Ns{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Gt(t){if(!t)throw hh()}function ph(t,e){function n(s,r){const i=Uv(t,r,e);return Gt(i!==null),i}return n}function gN(t,e){function n(s,r){const i=mN(t,e,r);return Gt(i!==null),i}return n}function yN(t,e){function n(s,r){const i=Uv(t,r,e);return Gt(i!==null),fN(i,r,t.host,t._protocol)}return n}function _r(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=NO():r=OO():n.getStatus()===402?r=AO(t.bucket):n.getStatus()===403?r=PO(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Fv(t){const e=_r(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=RO(t.path)),i.serverResponse=r.serverResponse,i}return n}function vN(t,e,n){const s=e.fullServerUrl(),r=vr(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ns(r,i,ph(t,n),o);return a.errorHandler=Fv(e),a}function _N(t,e,n,s,r){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),s&&(i.pageToken=s),r&&(i.maxResults=r);const o=e.bucketOnlyServerUrl(),a=vr(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,u=new Ns(a,c,gN(t,e.bucket),l);return u.urlParams=i,u.errorHandler=_r(e),u}function wN(t,e,n){const s=e.fullServerUrl(),r=vr(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ns(r,i,yN(t,n),o);return a.errorHandler=Fv(e),a}function bN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Vv(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=bN(null,e)),s}function EN(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let P=0;P<2;P++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Vv(e,s,r),u=$v(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Pn.getBlob(h,s,d);if(p===null)throw Rv();const g={name:l.fullPath},v=vr(i,t.host,t._protocol),w="POST",k=t.maxUploadRetryTime,O=new Ns(v,w,ph(t,n),k);return O.urlParams=g,O.headers=o,O.body=p.uploadData(),O.errorHandler=_r(e),O}class aa{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function mh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Gt(!1)}return Gt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function TN(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Vv(e,s,r),a={name:o.fullPath},c=vr(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=$v(o,n),d=t.maxUploadRetryTime;function p(v){mh(v);let w;try{w=v.getResponseHeader("X-Goog-Upload-URL")}catch{Gt(!1)}return Gt(ec(w)),w}const g=new Ns(c,l,p,d);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=_r(e),g}function IN(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const u=mh(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Gt(!1)}h||Gt(!1);const d=Number(h);return Gt(!isNaN(d)),new aa(d,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Ns(n,o,i,a);return c.headers=r,c.errorHandler=_r(e),c}const $f=256*1024;function SN(t,e,n,s,r,i,o,a){const c=new aa(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw MO();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,d=h+u;let p="";u===0?p="finalize":l===u?p="upload, finalize":p="upload";const g={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,d);if(v===null)throw Rv();function w(P,q){const ue=mh(P,["active","final"]),Te=c.current+u,z=s.size();let re;return ue==="final"?re=ph(e,i)(P,q):re=null,new aa(Te,z,ue==="final",re)}const k="POST",O=e.maxUploadRetryTime,D=new Ns(n,k,w,O);return D.headers=g,D.body=v.uploadData(),D.progressCallback=a||null,D.errorHandler=_r(t),D}const gt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Pc(t){switch(t){case"running":case"pausing":case"canceling":return gt.RUNNING;case"paused":return gt.PAUSED;case"success":return gt.SUCCESS;case"canceled":return gt.CANCELED;case"error":return gt.ERROR;default:return gt.ERROR}}/**
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
 */class CN{constructor(e,n,s){if(qO(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Us(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class kN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw kr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw kr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw kr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw kr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw kr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class RN extends kN{initXhr(){this.xhr_.responseType="text"}}function ns(){return new RN}/**
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
 */class AN{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Mv(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(Se.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Nv(r.status,[]))if(i)r=Cv();else{this.sleepTime=Math.max(this.sleepTime*2,kO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(Se.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=TN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,ns,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=IN(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,ns,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=$f*this._chunkMultiplier,n=new aa(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=SN(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ns,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){$f*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=vN(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,ns,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=EN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,ns,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=kv(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Pc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new CN(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Pc(this._state)){case gt.SUCCESS:Us(this._resolve.bind(null,this.snapshot))();break;case gt.CANCELED:case gt.ERROR:const n=this._reject;Us(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Pc(this._state)){case gt.RUNNING:case gt.PAUSED:e.next&&Us(e.next.bind(e,this.snapshot))();break;case gt.SUCCESS:e.complete&&Us(e.complete.bind(e))();break;case gt.CANCELED:case gt.ERROR:e.error&&Us(e.error.bind(e,this._error))();break;default:e.error&&Us(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ss{constructor(e,n){this._service=e,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ss(e,n)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lv(this._location.path)}get storage(){return this._service}get parent(){const e=aN(this._location.path);if(e===null)return null;const n=new ft(this._location.bucket,e);return new Ss(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FO(e)}}function ON(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new AN(t,new Pn(e),n)}function NN(t,e){e!=null&&typeof e.maxResults=="number"&&Ul("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=_N(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,ns)}function PN(t){t._throwIfRoot("getDownloadURL");const e=wN(t.storage,t._location,Mv());return t.storage.makeRequestWithTokens(e,ns).then(n=>{if(n===null)throw UO();return n})}function DN(t,e){const n=cN(t._location.path,e),s=new ft(t._location.bucket,n);return new Ss(t.storage,s)}/**
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
 */function xN(t){return/^[A-Za-z]+:\/\//.test(t)}function LN(t,e){return new Ss(t,e)}function Bv(t,e){if(t instanceof gh){const n=t;if(n._bucket==null)throw LO();const s=new Ss(n,n._bucket);return e!=null?Bv(s,e):s}else return e!==void 0?DN(t,e):t}function MN(t,e){if(e&&xN(e)){if(t instanceof gh)return LN(t,e);throw Ml("To use ref(service, url), the first argument must be a Storage instance.")}else return Bv(t,e)}function Ff(t,e){const n=e==null?void 0:e[Sv];return n==null?null:ft.makeFromBucketSpec(n,t)}function UN(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:lm(r,t.app.options.projectId))}class gh{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Iv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SO,this._maxUploadRetryTime=CO,this._requests=new Set,r!=null?this._bucket=ft.makeFromBucketSpec(r,this._host):this._bucket=Ff(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=Ff(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ul("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ul("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ss(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new VO(Av());{const o=YO(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Vf="@firebase/storage",Bf="0.11.2";/**
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
 */const jv="storage";function uP(t,e,n){return t=Ue(t),ON(t,e,n)}function hP(t,e){return t=Ue(t),NN(t,e)}function dP(t){return t=Ue(t),PN(t)}function fP(t,e){return t=Ue(t),MN(t,e)}function $N(t=Ea(),e){t=Ue(t);const s=Ci(t,jv).getImmediate({identifier:e}),r=au("storage");return r&&FN(s,...r),s}function FN(t,e,n,s={}){UN(t,e,n,s)}function VN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new gh(n,s,r,e,ur)}function BN(){Bn(new fn(jv,VN,"PUBLIC").setMultipleInstances(!0)),kt(Vf,Bf,""),kt(Vf,Bf,"esm2017")}BN();/**
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
 */const Hv="functions";/**
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
 */class jN{constructor(e,n,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||s.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:s}}}/**
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
 */const $l="us-central1";class HN{constructor(e,n,s,r,i=$l,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new jN(n,s,r),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin,this.region=$l}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function qN(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const jf="@firebase/functions",Hf="0.9.4";/**
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
 */const zN="auth-internal",KN="app-check-internal",WN="messaging-internal";function GN(t,e){const n=(s,{instanceIdentifier:r})=>{const i=s.getProvider("app").getImmediate(),o=s.getProvider(zN),a=s.getProvider(WN),c=s.getProvider(KN);return new HN(i,o,a,c,r,t)};Bn(new fn(Hv,n,"PUBLIC").setMultipleInstances(!0)),kt(jf,Hf,e),kt(jf,Hf,"esm2017")}/**
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
 */function QN(t=Ea(),e=$l){const s=Ci(Ue(t),Hv).getImmediate({identifier:e}),r=au("functions");return r&&XN(s,...r),s}function XN(t,e,n){qN(Ue(t),e,n)}GN(fetch.bind(self));const YN={apiKey:"AIzaSyBDevPI9maQg7zZPO4rUDHj7ZMENqdw3vE",authDomain:"closetsnap-822e7.firebaseapp.com",projectId:"closetsnap-822e7",storageBucket:"closetsnap-822e7.appspot.com",messagingSenderId:"604567787747",appId:"1:604567787747:web:173093122cebf15280cdd6"},yh=dm(YN);qo(yh);$N(yh);QN(yh);let JN=yO({history:gA(),routes:EO});const qv=Jb(zR);qv.use(JN);qv.mount("#app");export{Tt as F,BR as _,ht as a,qs as b,hb as c,$N as d,fP as e,dP as f,qo as g,tP as h,$R as i,nP as j,rP as k,hP as l,lP as m,cP as n,Qp as o,eP as p,oP as q,xw as r,iP as s,ZN as t,uP as u,sP as v,_R as w,hw as x,db as y,gb as z};
