(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pt(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function fs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=he(r)?Vl(r):fs(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(he(t))return t;if(se(t))return t}}const jl=/;(?![^(]*\))/g,Bl=/:([^]+)/,Hl=/\/\*.*?\*\//gs;function Vl(t){const e={};return t.replace(Hl,"").split(jl).forEach(n=>{if(n){const r=n.split(Bl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ds(t){let e="";if(he(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=ds(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wl="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Kl="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",zl=Pt(Wl),ql=Pt(Kl),Gl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jl=Pt(Gl);function va(t){return!!t||t===""}const gv=t=>he(t)?t:t==null?"":F(t)||se(t)&&(t.toString===Ia||!B(t.toString))?JSON.stringify(t,ya,2):String(t),ya=(t,e)=>e&&e.__v_isRef?ya(t,e.value):Ht(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:wa(e)?{[`Set(${e.size})`]:[...e.values()]}:se(e)&&!F(e)&&!Ea(e)?String(e):e,ie=Object.freeze({}),mn=Object.freeze([]),Oe=()=>{},ba=()=>!1,Yl=/^on[^a-z]/,Zn=t=>Yl.test(t),Mr=t=>t.startsWith("onUpdate:"),de=Object.assign,hs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ql=Object.prototype.hasOwnProperty,J=(t,e)=>Ql.call(t,e),F=Array.isArray,Ht=t=>Jr(t)==="[object Map]",wa=t=>Jr(t)==="[object Set]",B=t=>typeof t=="function",he=t=>typeof t=="string",ps=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",ms=t=>se(t)&&B(t.then)&&B(t.catch),Ia=Object.prototype.toString,Jr=t=>Ia.call(t),gs=t=>Jr(t).slice(8,-1),Ea=t=>Jr(t)==="[object Object]",_s=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Er=Pt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xl=Pt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Yr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zl=/-(\w)/g,Xe=Yr(t=>t.replace(Zl,(e,n)=>n?n.toUpperCase():"")),eu=/\B([A-Z])/g,Rt=Yr(t=>t.replace(eu,"-$1").toLowerCase()),Yt=Yr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lt=Yr(t=>t?`on${Yt(t)}`:""),Fn=(t,e)=>!Object.is(t,e),ln=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ki=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Js;const Ta=()=>Js||(Js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pi(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let je;class tu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}else Pi("cannot run an inactive effect scope.")}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function nu(t,e=je){e&&e.active&&e.effects.push(t)}function ru(){return je}const vs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sa=t=>(t.w&Ot)>0,Ca=t=>(t.n&Ot)>0,iu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},su=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Sa(i)&&!Ca(i)?i.delete(t):e[n++]=i,i.w&=~Ot,i.n&=~Ot}e.length=n}},xi=new WeakMap;let An=0,Ot=1;const Ni=30;let Te;const Vt=Symbol("iterate"),Di=Symbol("Map key iterate");class ys{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nu(this,r)}run(){if(!this.active)return this.fn();let e=Te,n=Tt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Te,Te=this,Tt=!0,Ot=1<<++An,An<=Ni?iu(this):Ys(this),this.fn()}finally{An<=Ni&&su(this),Ot=1<<--An,Te=this.parent,Tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(Ys(this),this.onStop&&this.onStop(),this.active=!1)}}function Ys(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tt=!0;const Ra=[];function tn(){Ra.push(Tt),Tt=!1}function nn(){const t=Ra.pop();Tt=t===void 0?!0:t}function ke(t,e,n){if(Tt&&Te){let r=xi.get(t);r||xi.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=vs()),Oa(i,{effect:Te,target:t,type:e,key:n})}}function Oa(t,e){let n=!1;An<=Ni?Ca(t)||(t.n|=Ot,n=!Sa(t)):n=!t.has(Te),n&&(t.add(Te),Te.deps.push(t),Te.onTrack&&Te.onTrack(Object.assign({effect:Te},e)))}function lt(t,e,n,r,i,s){const o=xi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const l=Number(r);o.forEach((u,f)=>{(f==="length"||f>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?_s(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),Ht(t)&&a.push(o.get(Di)));break;case"delete":F(t)||(a.push(o.get(Vt)),Ht(t)&&a.push(o.get(Di)));break;case"set":Ht(t)&&a.push(o.get(Vt));break}const c={target:t,type:e,key:n,newValue:r,oldValue:i,oldTarget:s};if(a.length===1)a[0]&&Mi(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);Mi(vs(l),c)}}function Mi(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&Qs(r,e);for(const r of n)r.computed||Qs(r,e)}function Qs(t,e){(t!==Te||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(de({effect:t},e)),t.scheduler?t.scheduler():t.run())}const ou=Pt("__proto__,__v_isRef,__isVue"),Aa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ps)),au=Qr(),cu=Qr(!1,!0),lu=Qr(!0),uu=Qr(!0,!0),Xs=fu();function fu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=W(this);for(let s=0,o=this.length;s<o;s++)ke(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tn();const r=W(this)[e].apply(this,n);return nn(),r}}),t}function du(t){const e=W(this);return ke(e,"has",t),e.hasOwnProperty(t)}function Qr(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?$a:La:e?Ma:Da).get(r))return r;const o=F(r);if(!t){if(o&&J(Xs,i))return Reflect.get(Xs,i,s);if(i==="hasOwnProperty")return du}const a=Reflect.get(r,i,s);return(ps(i)?Aa.has(i):ou(i))||(t||ke(r,"get",i),e)?a:ve(a)?o&&_s(i)?a:a.value:se(a)?t?Ua(a):er(a):a}}const hu=ka(),pu=ka(!0);function ka(t=!1){return function(n,r,i,s){let o=n[r];if(At(o)&&ve(o)&&!ve(i))return!1;if(!t&&(!$r(i)&&!At(i)&&(o=W(o),i=W(i)),!F(n)&&ve(o)&&!ve(i)))return o.value=i,!0;const a=F(n)&&_s(r)?Number(r)<n.length:J(n,r),c=Reflect.set(n,r,i,s);return n===W(s)&&(a?Fn(i,o)&&lt(n,"set",r,i,o):lt(n,"add",r,i)),c}}function mu(t,e){const n=J(t,e),r=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&lt(t,"delete",e,void 0,r),i}function gu(t,e){const n=Reflect.has(t,e);return(!ps(e)||!Aa.has(e))&&ke(t,"has",e),n}function _u(t){return ke(t,"iterate",F(t)?"length":Vt),Reflect.ownKeys(t)}const Pa={get:au,set:hu,deleteProperty:mu,has:gu,ownKeys:_u},xa={get:lu,set(t,e){return Pi(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Pi(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},vu=de({},Pa,{get:cu,set:pu}),yu=de({},xa,{get:uu}),bs=t=>t,Xr=t=>Reflect.getPrototypeOf(t);function hr(t,e,n=!1,r=!1){t=t.__v_raw;const i=W(t),s=W(e);n||(e!==s&&ke(i,"get",e),ke(i,"get",s));const{has:o}=Xr(i),a=r?bs:n?ws:jn;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function pr(t,e=!1){const n=this.__v_raw,r=W(n),i=W(t);return e||(t!==i&&ke(r,"has",t),ke(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function mr(t,e=!1){return t=t.__v_raw,!e&&ke(W(t),"iterate",Vt),Reflect.get(t,"size",t)}function Zs(t){t=W(t);const e=W(this);return Xr(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function eo(t,e){e=W(e);const n=W(this),{has:r,get:i}=Xr(n);let s=r.call(n,t);s?Na(n,r,t):(t=W(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Fn(e,o)&&lt(n,"set",t,e,o):lt(n,"add",t,e),this}function to(t){const e=W(this),{has:n,get:r}=Xr(e);let i=n.call(e,t);i?Na(e,n,t):(t=W(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&lt(e,"delete",t,void 0,s),o}function no(){const t=W(this),e=t.size!==0,n=Ht(t)?new Map(t):new Set(t),r=t.clear();return e&&lt(t,"clear",void 0,void 0,n),r}function gr(t,e){return function(r,i){const s=this,o=s.__v_raw,a=W(o),c=e?bs:t?ws:jn;return!t&&ke(a,"iterate",Vt),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function _r(t,e,n){return function(...r){const i=this.__v_raw,s=W(i),o=Ht(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?bs:e?ws:jn;return!e&&ke(s,"iterate",c?Di:Vt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Yt(t)} operation ${n}failed: target is readonly.`,W(this))}return t==="delete"?!1:this}}function bu(){const t={get(s){return hr(this,s)},get size(){return mr(this)},has:pr,add:Zs,set:eo,delete:to,clear:no,forEach:gr(!1,!1)},e={get(s){return hr(this,s,!1,!0)},get size(){return mr(this)},has:pr,add:Zs,set:eo,delete:to,clear:no,forEach:gr(!1,!0)},n={get(s){return hr(this,s,!0)},get size(){return mr(this,!0)},has(s){return pr.call(this,s,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:gr(!0,!1)},r={get(s){return hr(this,s,!0,!0)},get size(){return mr(this,!0)},has(s){return pr.call(this,s,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=_r(s,!1,!1),n[s]=_r(s,!0,!1),e[s]=_r(s,!1,!0),r[s]=_r(s,!0,!0)}),[t,n,e,r]}const[wu,Iu,Eu,Tu]=bu();function Zr(t,e){const n=e?t?Tu:Eu:t?Iu:wu;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(J(n,i)&&i in r?n:r,i,s)}const Su={get:Zr(!1,!1)},Cu={get:Zr(!1,!0)},Ru={get:Zr(!0,!1)},Ou={get:Zr(!0,!0)};function Na(t,e,n){const r=W(n);if(r!==n&&e.call(t,r)){const i=gs(t);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Da=new WeakMap,Ma=new WeakMap,La=new WeakMap,$a=new WeakMap;function Au(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ku(t){return t.__v_skip||!Object.isExtensible(t)?0:Au(gs(t))}function er(t){return At(t)?t:ei(t,!1,Pa,Su,Da)}function Pu(t){return ei(t,!1,vu,Cu,Ma)}function Ua(t){return ei(t,!0,xa,Ru,La)}function dn(t){return ei(t,!0,yu,Ou,$a)}function ei(t,e,n,r,i){if(!se(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=ku(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Wt(t){return At(t)?Wt(t.__v_raw):!!(t&&t.__v_isReactive)}function At(t){return!!(t&&t.__v_isReadonly)}function $r(t){return!!(t&&t.__v_isShallow)}function Li(t){return Wt(t)||At(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Fa(t){return Lr(t,"__v_skip",!0),t}const jn=t=>se(t)?er(t):t,ws=t=>se(t)?Ua(t):t;function ja(t){Tt&&Te&&(t=W(t),Oa(t.dep||(t.dep=vs()),{target:t,type:"get",key:"value"}))}function Ba(t,e){t=W(t);const n=t.dep;n&&Mi(n,{target:t,type:"set",key:"value",newValue:e})}function ve(t){return!!(t&&t.__v_isRef===!0)}function xu(t){return Ha(t,!1)}function Nu(t){return Ha(t,!0)}function Ha(t,e){return ve(t)?t:new Du(t,e)}class Du{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:jn(e)}get value(){return ja(this),this._value}set value(e){const n=this.__v_isShallow||$r(e)||At(e);e=n?e:W(e),Fn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jn(e),Ba(this,e))}}function gn(t){return ve(t)?t.value:t}const Mu={get:(t,e,n)=>gn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ve(i)&&!ve(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Va(t){return Wt(t)?t:new Proxy(t,Mu)}var Wa;class Lu{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Wa]=!1,this._dirty=!0,this.effect=new ys(e,()=>{this._dirty||(this._dirty=!0,Ba(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=W(this);return ja(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Wa="__v_isReadonly";function $u(t,e,n=!1){let r,i;const s=B(t);s?(r=t,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,i=t.set);const o=new Lu(r,i,s||!i,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const Kt=[];function Tr(t){Kt.push(t)}function Sr(){Kt.pop()}function E(t,...e){tn();const n=Kt.length?Kt[Kt.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=Uu();if(r)at(r,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:s})=>`at <${ai(n,s.type)}>`).join(`
`),i]);else{const s=[`[Vue warn]: ${t}`,...e];i.length&&s.push(`
`,...Fu(i)),console.warn(...s)}nn()}function Uu(){let t=Kt[Kt.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function Fu(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...ju(n))}),e}function ju({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,i=` at <${ai(t.component,t.type,r)}`,s=">"+n;return t.props?[i,...Bu(t.props),s]:[i+s]}function Bu(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...Ka(r,t[r]))}),n.length>3&&e.push(" ..."),e}function Ka(t,e,n){return he(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:ve(e)?(e=Ka(t,W(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):B(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=W(e),n?e:[`${t}=`,e])}const Is={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function at(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ti(s,e,n)}return i}function Le(t,e,n,r){if(B(t)){const s=at(t,e,n,r);return s&&ms(s)&&s.catch(o=>{ti(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Le(t[s],e,n,r));return i}function ti(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=Is[n];for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){at(c,null,10,[t,o,a]);return}}Hu(t,n,i,r)}function Hu(t,e,n,r=!0){{const i=Is[e];if(n&&Tr(n),E(`Unhandled error${i?` during execution of ${i}`:""}`),n&&Sr(),r)throw t;console.error(t)}}let Bn=!1,$i=!1;const be=[];let Ge=0;const _n=[];let qe=null,gt=0;const za=Promise.resolve();let Es=null;const Vu=100;function qa(t){const e=Es||za;return t?e.then(this?t.bind(this):t):e}function Wu(t){let e=Ge+1,n=be.length;for(;e<n;){const r=e+n>>>1;Hn(be[r])<t?e=r+1:n=r}return e}function ni(t){(!be.length||!be.includes(t,Bn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?be.push(t):be.splice(Wu(t.id),0,t),Ga())}function Ga(){!Bn&&!$i&&($i=!0,Es=za.then(Qa))}function Ku(t){const e=be.indexOf(t);e>Ge&&be.splice(e,1)}function Ja(t){F(t)?_n.push(...t):(!qe||!qe.includes(t,t.allowRecurse?gt+1:gt))&&_n.push(t),Ga()}function ro(t,e=Bn?Ge+1:0){for(t=t||new Map;e<be.length;e++){const n=be[e];if(n&&n.pre){if(Ts(t,n))continue;be.splice(e,1),e--,n()}}}function Ya(t){if(_n.length){const e=[...new Set(_n)];if(_n.length=0,qe){qe.push(...e);return}for(qe=e,t=t||new Map,qe.sort((n,r)=>Hn(n)-Hn(r)),gt=0;gt<qe.length;gt++)Ts(t,qe[gt])||qe[gt]();qe=null,gt=0}}const Hn=t=>t.id==null?1/0:t.id,zu=(t,e)=>{const n=Hn(t)-Hn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qa(t){$i=!1,Bn=!0,t=t||new Map,be.sort(zu);const e=n=>Ts(t,n);try{for(Ge=0;Ge<be.length;Ge++){const n=be[Ge];if(n&&n.active!==!1){if(e(n))continue;at(n,null,14)}}}finally{Ge=0,be.length=0,Ya(t),Bn=!1,Es=null,(be.length||_n.length)&&Qa(t)}}function Ts(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>Vu){const r=e.ownerInstance,i=r&&xs(r.type);return E(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let zt=!1;const un=new Set;Ta().__VUE_HMR_RUNTIME__={createRecord:hi(Xa),rerender:hi(Ju),reload:hi(Yu)};const Qt=new Map;function qu(t){const e=t.type.__hmrId;let n=Qt.get(e);n||(Xa(e,t.type),n=Qt.get(e)),n.instances.add(t)}function Gu(t){Qt.get(t.type.__hmrId).instances.delete(t)}function Xa(t,e){return Qt.has(t)?!1:(Qt.set(t,{initialDef:Nn(e),instances:new Set}),!0)}function Nn(t){return kc(t)?t.__vccOpts:t}function Ju(t,e){const n=Qt.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,Nn(r.type).render=e),r.renderCache=[],zt=!0,r.update(),zt=!1}))}function Yu(t,e){const n=Qt.get(t);if(!n)return;e=Nn(e),io(n.initialDef,e);const r=[...n.instances];for(const i of r){const s=Nn(i.type);un.has(s)||(s!==n.initialDef&&io(s,e),un.add(s)),i.appContext.optionsCache.delete(i.type),i.ceReload?(un.add(s),i.ceReload(e.styles),un.delete(s)):i.parent?ni(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Ja(()=>{for(const i of r)un.delete(Nn(i.type))})}function io(t,e){de(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function hi(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Je,kn=[],Ui=!1;function tr(t,...e){Je?Je.emit(t,...e):Ui||kn.push({event:t,args:e})}function Za(t,e){var n,r;Je=t,Je?(Je.enabled=!0,kn.forEach(({event:i,args:s})=>Je.emit(i,...s)),kn=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{Za(s,e)}),setTimeout(()=>{Je||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ui=!0,kn=[])},3e3)):(Ui=!0,kn=[])}function Qu(t,e){tr("app:init",t,e,{Fragment:De,Text:rr,Comment:ye,Static:Ar})}function Xu(t){tr("app:unmount",t)}const Zu=Ss("component:added"),ec=Ss("component:updated"),ef=Ss("component:removed"),tf=t=>{Je&&typeof Je.cleanupBuffer=="function"&&!Je.cleanupBuffer(t)&&ef(t)};function Ss(t){return e=>{tr(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const nf=tc("perf:start"),rf=tc("perf:end");function tc(t){return(e,n,r)=>{tr(t,e.appContext.app,e.uid,e,n,r)}}function sf(t,e,n){tr("component:emit",t.appContext.app,t,e,n)}function of(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;{const{emitsOptions:u,propsOptions:[f]}=t;if(u)if(!(e in u))(!f||!(Lt(e)in f))&&E(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Lt(e)}" prop.`);else{const h=u[e];B(h)&&(h(...n)||E(`Invalid event arguments: event validation failed for event "${e}".`))}}let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||ie;h&&(i=n.map(g=>he(g)?g.trim():g)),f&&(i=n.map(ki))}sf(t,e,i);{const u=e.toLowerCase();u!==e&&r[Lt(u)]&&E(`Event "${u}" is emitted in component ${ai(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Rt(e)}" instead of "${e}".`)}let a,c=r[a=Lt(e)]||r[a=Lt(Xe(e))];!c&&s&&(c=r[a=Lt(Rt(e))]),c&&Le(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Le(l,t,6,i)}}function nc(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const u=nc(l,e,!0);u&&(a=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(se(t)&&r.set(t,null),null):(F(s)?s.forEach(c=>o[c]=null):de(o,s),se(t)&&r.set(t,o),o)}function ri(t,e){return!t||!Zn(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Rt(e))||J(t,e))}let Se=null,rc=null;function Ur(t){const e=Se;return Se=t,rc=t&&t.type.__scopeId||null,e}function af(t,e=Se,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&_o(-1);const s=Ur(e);let o;try{o=t(...i)}finally{Ur(s),r._d&&_o(1)}return ec(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let Fi=!1;function Fr(){Fi=!0}function pi(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:g,ctx:I,inheritAttrs:R}=t;let N,k;const P=Ur(t);Fi=!1;try{if(n.shapeFlag&4){const q=i||r;N=Be(u.call(q,q,f,s,g,h,I)),k=c}else{const q=e;c===s&&Fr(),N=Be(q.length>1?q(s,{get attrs(){return Fr(),c},slots:a,emit:l}):q(s,null)),k=e.props?c:lf(c)}}catch(q){Mn.length=0,ti(q,t,1),N=Ae(ye)}let U=N,L;if(N.patchFlag>0&&N.patchFlag&2048&&([U,L]=cf(N)),k&&R!==!1){const q=Object.keys(k),{shapeFlag:le}=U;if(q.length){if(le&7)o&&q.some(Mr)&&(k=uf(k,o)),U=Ze(U,k);else if(!Fi&&U.type!==ye){const me=Object.keys(c),K=[],ee=[];for(let ne=0,ge=me.length;ne<ge;ne++){const ue=me[ne];Zn(ue)?Mr(ue)||K.push(ue[2].toLowerCase()+ue.slice(3)):ee.push(ue)}ee.length&&E(`Extraneous non-props attributes (${ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),K.length&&E(`Extraneous non-emits event listeners (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(so(U)||E("Runtime directive used on component with non-element root node. The directives will not function as intended."),U=Ze(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(so(U)||E("Component inside <Transition> renders non-element root node that cannot be animated."),U.transition=n.transition),L?L(U):N=U,Ur(P),N}const cf=t=>{const e=t.children,n=t.dynamicChildren,r=ic(e);if(!r)return[t,void 0];const i=e.indexOf(r),s=n?n.indexOf(r):-1,o=a=>{e[i]=a,n&&(s>-1?n[s]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Be(r),o]};function ic(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Wn(r)){if(r.type!==ye||r.children==="v-if"){if(e)return;e=r}}else return}return e}const lf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zn(n))&&((e||(e={}))[n]=t[n]);return e},uf=(t,e)=>{const n={};for(const r in t)(!Mr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},so=t=>t.shapeFlag&7||t.type===ye;function ff(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if((i||a)&&zt||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!ri(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?oo(r,o,l):!0:!!o;return!1}function oo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ri(n,s))return!0}return!1}function df({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hf=t=>t.__isSuspense;function pf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Ja(t)}function Cr(t,e){if(!fe)E("provide() can only be used inside setup().");else{let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function ct(t,e,n=!1){const r=fe||Se;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e;E(`injection "${String(t)}" not found.`)}else E("inject() can only be used inside setup() or functional components.")}function mf(t,e){return Cs(t,null,e)}const vr={};function Dn(t,e,n){return B(e)||E("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Cs(t,e,n)}function Cs(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ie){e||(n!==void 0&&E('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&E('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=L=>{E("Invalid watch source: ",L,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=ru()===(fe==null?void 0:fe.scope)?fe:null;let l,u=!1,f=!1;if(ve(t)?(l=()=>t.value,u=$r(t)):Wt(t)?(l=()=>t,r=!0):F(t)?(f=!0,u=t.some(L=>Wt(L)||$r(L)),l=()=>t.map(L=>{if(ve(L))return L.value;if(Wt(L))return Bt(L);if(B(L))return at(L,c,2);a(L)})):B(t)?e?l=()=>at(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return h&&h(),Le(t,c,3,[g])}:(l=Oe,a(t)),e&&r){const L=l;l=()=>Bt(L())}let h,g=L=>{h=P.onStop=()=>{at(L,c,4)}},I;if(Kn)if(g=Oe,e?n&&Le(e,c,3,[l(),f?[]:void 0,g]):l(),i==="sync"){const L=Sd();I=L.__watcherHandles||(L.__watcherHandles=[])}else return Oe;let R=f?new Array(t.length).fill(vr):vr;const N=()=>{if(P.active)if(e){const L=P.run();(r||u||(f?L.some((q,le)=>Fn(q,R[le])):Fn(L,R)))&&(h&&h(),Le(e,c,3,[L,R===vr?void 0:f&&R[0]===vr?[]:R,g]),R=L)}else P.run()};N.allowRecurse=!!e;let k;i==="sync"?k=N:i==="post"?k=()=>Re(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),k=()=>ni(N));const P=new ys(l,k);P.onTrack=s,P.onTrigger=o,e?n?N():R=P.run():i==="post"?Re(P.run.bind(P),c&&c.suspense):P.run();const U=()=>{P.stop(),c&&c.scope&&hs(c.scope.effects,P)};return I&&I.push(U),U}function gf(t,e,n){const r=this.proxy,i=he(t)?t.includes(".")?sc(r,t):()=>r[t]:t.bind(r,r);let s;B(e)?s=e:(s=e.handler,n=e);const o=fe;wn(this);const a=Cs(i,s.bind(r),n);return o?wn(o):Gt(),a}function sc(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Bt(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ve(t))Bt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Bt(t[n],e);else if(wa(t)||Ht(t))t.forEach(n=>{Bt(n,e)});else if(Ea(t))for(const n in t)Bt(t[n],e);return t}function _f(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return uc(()=>{t.isMounted=!0}),fc(()=>{t.isUnmounting=!0}),t}const Ne=[Function,Array],vf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ne,onEnter:Ne,onAfterEnter:Ne,onEnterCancelled:Ne,onBeforeLeave:Ne,onLeave:Ne,onAfterLeave:Ne,onLeaveCancelled:Ne,onBeforeAppear:Ne,onAppear:Ne,onAfterAppear:Ne,onAppearCancelled:Ne},setup(t,{slots:e}){const n=Ps(),r=_f();let i;return()=>{const s=e.default&&ac(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let R=!1;for(const N of s)if(N.type!==ye){if(R){E("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}o=N,R=!0}}const a=W(t),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&E(`invalid <transition> mode: ${c}`),r.isLeaving)return mi(o);const l=ao(o);if(!l)return mi(o);const u=ji(l,a,r,n);Bi(l,u);const f=n.subTree,h=f&&ao(f);let g=!1;const{getTransitionKey:I}=l.type;if(I){const R=I();i===void 0?i=R:R!==i&&(i=R,g=!0)}if(h&&h.type!==ye&&(!Ft(l,h)||g)){const R=ji(h,a,r,n);if(Bi(h,R),c==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},mi(o);c==="in-out"&&l.type!==ye&&(R.delayLeave=(N,k,P)=>{const U=oc(r,h);U[String(h.key)]=h,N._leaveCb=()=>{k(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},yf=vf;function oc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ji(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:I,onBeforeAppear:R,onAppear:N,onAfterAppear:k,onAppearCancelled:P}=e,U=String(t.key),L=oc(n,t),q=(K,ee)=>{K&&Le(K,r,9,ee)},le=(K,ee)=>{const ne=ee[1];q(K,ee),F(K)?K.every(ge=>ge.length<=1)&&ne():K.length<=1&&ne()},me={mode:s,persisted:o,beforeEnter(K){let ee=a;if(!n.isMounted)if(i)ee=R||a;else return;K._leaveCb&&K._leaveCb(!0);const ne=L[U];ne&&Ft(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),q(ee,[K])},enter(K){let ee=c,ne=l,ge=u;if(!n.isMounted)if(i)ee=N||c,ne=k||l,ge=P||u;else return;let ue=!1;const $e=K._enterCb=dt=>{ue||(ue=!0,dt?q(ge,[K]):q(ne,[K]),me.delayedLeave&&me.delayedLeave(),K._enterCb=void 0)};ee?le(ee,[K,$e]):$e()},leave(K,ee){const ne=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return ee();q(f,[K]);let ge=!1;const ue=K._leaveCb=$e=>{ge||(ge=!0,ee(),$e?q(I,[K]):q(g,[K]),K._leaveCb=void 0,L[ne]===t&&delete L[ne])};L[ne]=t,h?le(h,[K,ue]):ue()},clone(K){return ji(K,e,n,r)}};return me}function mi(t){if(nr(t))return t=Ze(t),t.children=null,t}function ao(t){return nr(t)?t.children?t.children[0]:void 0:t}function Bi(t,e){t.shapeFlag&6&&t.component?Bi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ac(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===De?(o.patchFlag&128&&i++,r=r.concat(ac(o.children,e,a))):(e||o.type!==ye)&&r.push(a!=null?Ze(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function cc(t){return B(t)?{setup:t,name:t.name}:t}const Rr=t=>!!t.type.__asyncLoader,nr=t=>t.type.__isKeepAlive;function bf(t,e){lc(t,"a",e)}function wf(t,e){lc(t,"da",e)}function lc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ii(e,r,n),n){let i=n.parent;for(;i&&i.parent;)nr(i.parent.vnode)&&If(r,e,n,i),i=i.parent}}function If(t,e,n,r){const i=ii(e,t,r,!0);dc(()=>{hs(r[e],i)},n)}function ii(t,e,n=fe,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tn(),wn(n);const a=Le(e,n,t,o);return Gt(),nn(),a});return r?i.unshift(s):i.push(s),s}else{const i=Lt(Is[t].replace(/ hook$/,""));E(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ft=t=>(e,n=fe)=>(!Kn||t==="sp")&&ii(t,(...r)=>e(...r),n),Ef=ft("bm"),uc=ft("m"),Tf=ft("bu"),Sf=ft("u"),fc=ft("bum"),dc=ft("um"),Cf=ft("sp"),Rf=ft("rtg"),Of=ft("rtc");function Af(t,e=fe){ii("ec",t,e)}function hc(t){Xl(t)&&E("Do not use built-in directive ids as custom directive id: "+t)}function _v(t,e){const n=Se;if(n===null)return E("withDirectives can only be used inside render functions."),t;const r=oi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=ie]=e[s];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&Bt(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Dt(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(tn(),Le(c,n,8,[t.el,a,t,e]),nn())}}const Hi="components";function kf(t,e){return xf(Hi,t,!0,e)||t}const Pf=Symbol();function xf(t,e,n=!0,r=!1){const i=Se||fe;if(i){const s=i.type;if(t===Hi){const a=xs(s,!1);if(a&&(a===e||a===Xe(e)||a===Yt(Xe(e))))return s}const o=co(i[t]||s[t],e)||co(i.appContext[t],e);if(!o&&r)return s;if(n&&!o){const a=t===Hi?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";E(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else E(`resolve${Yt(t.slice(0,-1))} can only be used in render() or setup().`)}function co(t,e){return t&&(t[e]||t[Xe(e)]||t[Yt(Xe(e))])}const Vi=t=>t?Rc(t)?oi(t)||t.proxy:Vi(t.parent):null,qt=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>dn(t.props),$attrs:t=>dn(t.attrs),$slots:t=>dn(t.slots),$refs:t=>dn(t.refs),$parent:t=>Vi(t.parent),$root:t=>Vi(t.root),$emit:t=>t.emit,$options:t=>Os(t),$forceUpdate:t=>t.f||(t.f=()=>ni(t.update)),$nextTick:t=>t.n||(t.n=qa.bind(t.proxy)),$watch:t=>gf.bind(t)}),Rs=t=>t==="_"||t==="$",gi=(t,e)=>t!==ie&&!t.__isScriptSetup&&J(t,e),pc={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(gi(r,e))return o[e]=1,r[e];if(i!==ie&&J(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,s[e];if(n!==ie&&J(n,e))return o[e]=4,n[e];Wi&&(o[e]=0)}}const u=qt[e];let f,h;if(u)return e==="$attrs"&&(ke(t,"get",e),Fr()),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&J(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,J(h,e))return h[e];Se&&(!he(e)||e.indexOf("__v")!==0)&&(i!==ie&&Rs(e[0])&&J(i,e)?E(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Se&&E(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return gi(i,e)?(i[e]=n,!0):i.__isScriptSetup&&J(i,e)?(E(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==ie&&J(r,e)?(r[e]=n,!0):J(t.props,e)?(E(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(E(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(s,e,{enumerable:!0,configurable:!0,value:n}):s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ie&&J(t,o)||gi(e,o)||(a=s[0])&&J(a,o)||J(r,o)||J(qt,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};pc.ownKeys=t=>(E("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Nf(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(qt).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>qt[n](t),set:Oe})}),e}function Df(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:Oe})})}function Mf(t){const{ctx:e,setupState:n}=t;Object.keys(W(n)).forEach(r=>{if(!n.__isScriptSetup){if(Rs(r[0])){E(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:Oe})}})}function Lf(){const t=Object.create(null);return(e,n)=>{t[n]?E(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Wi=!0;function $f(t){const e=Os(t),n=t.proxy,r=t.ctx;Wi=!1,e.beforeCreate&&lo(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:I,activated:R,deactivated:N,beforeDestroy:k,beforeUnmount:P,destroyed:U,unmounted:L,render:q,renderTracked:le,renderTriggered:me,errorCaptured:K,serverPrefetch:ee,expose:ne,inheritAttrs:ge,components:ue,directives:$e,filters:dt}=e,Ue=Lf();{const[G]=t.propsOptions;if(G)for(const Q in G)Ue("Props",Q)}if(l&&Uf(l,r,Ue,t.appContext.config.unwrapInjectedRef),o)for(const G in o){const Q=o[G];B(Q)?(Object.defineProperty(r,G,{value:Q.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ue("Methods",G)):E(`Method "${G}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`)}if(i){B(i)||E("The data option must be a function. Plain object usage is no longer supported.");const G=i.call(n,n);if(ms(G)&&E("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!se(G))E("data() should return an object.");else{t.data=er(G);for(const Q in G)Ue("Data",Q),Rs(Q[0])||Object.defineProperty(r,Q,{configurable:!0,enumerable:!0,get:()=>G[Q],set:Oe})}}if(Wi=!0,s)for(const G in s){const Q=s[G],Ce=B(Q)?Q.bind(n,n):B(Q.get)?Q.get.bind(n,n):Oe;Ce===Oe&&E(`Computed property "${G}" has no getter.`);const rn=!B(Q)&&B(Q.set)?Q.set.bind(n):()=>{E(`Write operation failed: computed property "${G}" is readonly.`)},et=Me({get:Ce,set:rn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>et.value,set:We=>et.value=We}),Ue("Computed",G)}if(a)for(const G in a)mc(a[G],r,n,G);if(c){const G=B(c)?c.call(n):c;Reflect.ownKeys(G).forEach(Q=>{Cr(Q,G[Q])})}u&&lo(u,t,"c");function _e(G,Q){F(Q)?Q.forEach(Ce=>G(Ce.bind(n))):Q&&G(Q.bind(n))}if(_e(Ef,f),_e(uc,h),_e(Tf,g),_e(Sf,I),_e(bf,R),_e(wf,N),_e(Af,K),_e(Of,le),_e(Rf,me),_e(fc,P),_e(dc,L),_e(Cf,ee),F(ne))if(ne.length){const G=t.exposed||(t.exposed={});ne.forEach(Q=>{Object.defineProperty(G,Q,{get:()=>n[Q],set:Ce=>n[Q]=Ce})})}else t.exposed||(t.exposed={});q&&t.render===Oe&&(t.render=q),ge!=null&&(t.inheritAttrs=ge),ue&&(t.components=ue),$e&&(t.directives=$e)}function Uf(t,e,n=Oe,r=!1){F(t)&&(t=Ki(t));for(const i in t){const s=t[i];let o;se(s)?"default"in s?o=ct(s.from||i,s.default,!0):o=ct(s.from||i):o=ct(s),ve(o)?r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):(E(`injected property "${i}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),e[i]=o):e[i]=o,n("Inject",i)}}function lo(t,e,n){Le(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mc(t,e,n,r){const i=r.includes(".")?sc(n,r):()=>n[r];if(he(t)){const s=e[t];B(s)?Dn(i,s):E(`Invalid watch handler specified by key "${t}"`,s)}else if(B(t))Dn(i,t.bind(n));else if(se(t))if(F(t))t.forEach(s=>mc(s,e,n,r));else{const s=B(t.handler)?t.handler.bind(n):e[t.handler];B(s)?Dn(i,s,t):E(`Invalid watch handler specified by key "${t.handler}"`,s)}else E(`Invalid watch option: "${r}"`,t)}function Os(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>jr(c,l,o,!0)),jr(c,e,o)),se(e)&&s.set(e,c),c}function jr(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&jr(t,s,n,!0),i&&i.forEach(o=>jr(t,o,n,!0));for(const o in e)if(r&&o==="expose")E('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Ff[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ff={data:uo,props:$t,emits:$t,methods:$t,computed:$t,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:$t,directives:$t,watch:Bf,provide:uo,inject:jf};function uo(t,e){return e?t?function(){return de(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function jf(t,e){return $t(Ki(t),Ki(e))}function Ki(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function $t(t,e){return t?de(de(Object.create(null),t),e):e}function Bf(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=Ee(t[r],e[r]);return n}function Hf(t,e,n,r=!1){const i={},s={};Lr(s,si,1),t.propsDefaults=Object.create(null),gc(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);vc(e||{},i,t),n?t.props=r?i:Pu(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Vf(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Wf(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=W(i),[c]=t.propsOptions;let l=!1;if(!Vf(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ri(t.emitsOptions,h))continue;const g=e[h];if(c)if(J(s,h))g!==s[h]&&(s[h]=g,l=!0);else{const I=Xe(h);i[I]=zi(c,a,I,g,t,!1)}else g!==s[h]&&(s[h]=g,l=!0)}}}else{gc(t,e,i,s)&&(l=!0);let u;for(const f in a)(!e||!J(e,f)&&((u=Rt(f))===f||!J(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=zi(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!J(e,f))&&(delete s[f],l=!0)}l&&lt(t,"set","$attrs"),vc(e||{},i,t)}function gc(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Er(c))continue;const l=e[c];let u;i&&J(i,u=Xe(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:ri(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=W(n),l=a||ie;for(let u=0;u<s.length;u++){const f=s[u];n[f]=zi(i,c,f,l[f],t,!J(l,f))}}return o}function zi(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(wn(i),r=l[n]=c.call(null,e),Gt())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Rt(n))&&(r=!0))}return r}function _c(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!B(t)){const u=f=>{c=!0;const[h,g]=_c(f,e,!0);de(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return se(t)&&r.set(t,mn),mn;if(F(s))for(let u=0;u<s.length;u++){he(s[u])||E("props must be strings when using array syntax.",s[u]);const f=Xe(s[u]);fo(f)&&(o[f]=ie)}else if(s){se(s)||E("invalid props options",s);for(const u in s){const f=Xe(u);if(fo(f)){const h=s[u],g=o[f]=F(h)||B(h)?{type:h}:Object.assign({},h);if(g){const I=po(Boolean,g.type),R=po(String,g.type);g[0]=I>-1,g[1]=R<0||I<R,(I>-1||J(g,"default"))&&a.push(f)}}}}const l=[o,a];return se(t)&&r.set(t,l),l}function fo(t){return t[0]!=="$"?!0:(E(`Invalid prop name: "${t}" is a reserved property.`),!1)}function qi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ho(t,e){return qi(t)===qi(e)}function po(t,e){return F(e)?e.findIndex(n=>ho(n,t)):B(e)&&ho(e,t)?0:-1}function vc(t,e,n){const r=W(e),i=n.propsOptions[0];for(const s in i){let o=i[s];o!=null&&Kf(s,r[s],o,!J(t,s)&&!J(t,Rt(s)))}}function Kf(t,e,n,r){const{type:i,required:s,validator:o}=n;if(s&&r){E('Missing required prop: "'+t+'"');return}if(!(e==null&&!n.required)){if(i!=null&&i!==!0){let a=!1;const c=F(i)?i:[i],l=[];for(let u=0;u<c.length&&!a;u++){const{valid:f,expectedType:h}=qf(e,c[u]);l.push(h||""),a=f}if(!a){E(Gf(t,e,l));return}}o&&!o(e)&&E('Invalid prop: custom validator check failed for prop "'+t+'".')}}const zf=Pt("String,Number,Boolean,Function,Symbol,BigInt");function qf(t,e){let n;const r=qi(e);if(zf(r)){const i=typeof t;n=i===r.toLowerCase(),!n&&i==="object"&&(n=t instanceof e)}else r==="Object"?n=se(t):r==="Array"?n=F(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function Gf(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Yt).join(" | ")}`;const i=n[0],s=gs(e),o=mo(e,i),a=mo(e,s);return n.length===1&&go(i)&&!Jf(i,s)&&(r+=` with value ${o}`),r+=`, got ${s} `,go(s)&&(r+=`with value ${a}.`),r}function mo(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function go(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function Jf(...t){return t.some(e=>e.toLowerCase()==="boolean")}const yc=t=>t[0]==="_"||t==="$stable",As=t=>F(t)?t.map(Be):[Be(t)],Yf=(t,e,n)=>{if(e._n)return e;const r=af((...i)=>(fe&&E(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),As(e(...i))),n);return r._c=!1,r},bc=(t,e,n)=>{const r=t._ctx;for(const i in t){if(yc(i))continue;const s=t[i];if(B(s))e[i]=Yf(i,s,r);else if(s!=null){E(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const o=As(s);e[i]=()=>o}}},wc=(t,e)=>{nr(t.vnode)||E("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=As(e);t.slots.default=()=>n},Qf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),Lr(e,"_",n)):bc(e,t.slots={})}else t.slots={},e&&wc(t,e);Lr(t.slots,si,1)},Xf=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?zt?de(i,e):n&&a===1?s=!1:(de(i,e),!n&&a===1&&delete i._):(s=!e.$stable,bc(e,i)),o=e}else e&&(wc(t,e),o={default:1});if(s)for(const a in i)!yc(a)&&!(a in o)&&delete i[a]};function Ic(){return{app:null,config:{isNativeTag:ba,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zf=0;function ed(t,e){return function(r,i=null){B(r)||(r=Object.assign({},r)),i!=null&&!se(i)&&(E("root props passed to app.mount() must be an object."),i=null);const s=Ic(),o=new Set;let a=!1;const c=s.app={_uid:Zf++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:yo,get config(){return s.config},set config(l){E("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?E("Plugin has already been applied to target app."):l&&B(l.install)?(o.add(l),l.install(c,...u)):B(l)?(o.add(l),l(c,...u)):E('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return s.mixins.includes(l)?E("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):s.mixins.push(l),c},component(l,u){return Ji(l,s.config),u?(s.components[l]&&E(`Component "${l}" has already been registered in target app.`),s.components[l]=u,c):s.components[l]},directive(l,u){return hc(l),u?(s.directives[l]&&E(`Directive "${l}" has already been registered in target app.`),s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(a)E("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&E("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=Ae(r,i);return h.appContext=s,s.reload=()=>{t(Ze(h),l,f)},u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,c._instance=h.component,Qu(c,yo),oi(h.component)||h.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,Xu(c),delete c._container.__vue_app__):E("Cannot unmount an app that is not mounted.")},provide(l,u){return l in s.provides&&E(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),s.provides[l]=u,c}};return c}}function Gi(t,e,n,r,i=!1){if(F(t)){t.forEach((h,g)=>Gi(h,e&&(F(e)?e[g]:e),n,r,i));return}if(Rr(r)&&!i)return;const s=r.shapeFlag&4?oi(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t;if(!a){E("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(he(l)?(u[l]=null,J(f,l)&&(f[l]=null)):ve(l)&&(l.value=null)),B(c))at(c,a,12,[o,u]);else{const h=he(c),g=ve(c);if(h||g){const I=()=>{if(t.f){const R=h?J(f,c)?f[c]:u[c]:c.value;i?F(R)&&hs(R,s):F(R)?R.includes(s)||R.push(s):h?(u[c]=[s],J(f,c)&&(f[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,J(f,c)&&(f[c]=o)):g?(c.value=o,t.k&&(u[t.k]=o)):E("Invalid template ref type:",c,`(${typeof c})`)};o?(I.id=-1,Re(I,n)):I()}else E("Invalid template ref type:",c,`(${typeof c})`)}}let Cn,yt;function nt(t,e){t.appContext.config.performance&&Br()&&yt.mark(`vue-${e}-${t.uid}`),nf(t,e,Br()?yt.now():Date.now())}function rt(t,e){if(t.appContext.config.performance&&Br()){const n=`vue-${e}-${t.uid}`,r=n+":end";yt.mark(r),yt.measure(`<${ai(t,t.type)}> ${e}`,n,r),yt.clearMarks(n),yt.clearMarks(r)}rf(t,e,Br()?yt.now():Date.now())}function Br(){return Cn!==void 0||(typeof window<"u"&&window.performance?(Cn=!0,yt=window.performance):Cn=!1),Cn}function td(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Re=pf;function nd(t){return rd(t)}function rd(t,e){td();const n=Ta();n.__VUE__=!0,Za(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=Oe,insertStaticContent:I}=t,R=(d,p,m,y=null,v=null,T=null,O=!1,w=null,S=zt?!1:!!p.dynamicChildren)=>{if(d===p)return;d&&!Ft(d,p)&&(y=D(d),xe(d,v,T,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:x}=p;switch(b){case rr:N(d,p,m,y);break;case ye:k(d,p,m,y);break;case Ar:d==null?P(p,m,y,O):U(d,p,m,O);break;case De:$e(d,p,m,y,v,T,O,w,S);break;default:x&1?le(d,p,m,y,v,T,O,w,S):x&6?dt(d,p,m,y,v,T,O,w,S):x&64||x&128?b.process(d,p,m,y,v,T,O,w,S,ae):E("Invalid VNode type:",b,`(${typeof b})`)}M!=null&&v&&Gi(M,d&&d.ref,T,p||d,!p)},N=(d,p,m,y)=>{if(d==null)r(p.el=a(p.children),m,y);else{const v=p.el=d.el;p.children!==d.children&&l(v,p.children)}},k=(d,p,m,y)=>{d==null?r(p.el=c(p.children||""),m,y):p.el=d.el},P=(d,p,m,y)=>{[d.el,d.anchor]=I(d.children,p,m,y,d.el,d.anchor)},U=(d,p,m,y)=>{if(p.children!==d.children){const v=h(d.anchor);q(d),[p.el,p.anchor]=I(p.children,m,v,y)}else p.el=d.el,p.anchor=d.anchor},L=({el:d,anchor:p},m,y)=>{let v;for(;d&&d!==p;)v=h(d),r(d,m,y),d=v;r(p,m,y)},q=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),i(d),d=m;i(p)},le=(d,p,m,y,v,T,O,w,S)=>{O=O||p.type==="svg",d==null?me(p,m,y,v,T,O,w,S):ne(d,p,v,T,O,w,S)},me=(d,p,m,y,v,T,O,w)=>{let S,b;const{type:M,props:x,shapeFlag:$,transition:H,dirs:Y}=d;if(S=d.el=o(d.type,T,x&&x.is,x),$&8?u(S,d.children):$&16&&ee(d.children,S,null,y,v,T&&M!=="foreignObject",O,w),Y&&Dt(d,null,y,"created"),K(S,d,d.scopeId,O,y),x){for(const re in x)re!=="value"&&!Er(re)&&s(S,re,null,x[re],T,d.children,y,v,C);"value"in x&&s(S,"value",null,x.value),(b=x.onVnodeBeforeMount)&&ze(b,y,d)}Object.defineProperty(S,"__vnode",{value:d,enumerable:!1}),Object.defineProperty(S,"__vueParentComponent",{value:y,enumerable:!1}),Y&&Dt(d,null,y,"beforeMount");const oe=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(S),r(S,p,m),((b=x&&x.onVnodeMounted)||oe||Y)&&Re(()=>{b&&ze(b,y,d),oe&&H.enter(S),Y&&Dt(d,null,y,"mounted")},v)},K=(d,p,m,y,v)=>{if(m&&g(d,m),y)for(let T=0;T<y.length;T++)g(d,y[T]);if(v){let T=v.subTree;if(T.patchFlag>0&&T.patchFlag&2048&&(T=ic(T.children)||T),p===T){const O=v.vnode;K(d,O,O.scopeId,O.slotScopeIds,v.parent)}}},ee=(d,p,m,y,v,T,O,w,S=0)=>{for(let b=S;b<d.length;b++){const M=d[b]=w?_t(d[b]):Be(d[b]);R(null,M,p,m,y,v,T,O,w)}},ne=(d,p,m,y,v,T,O)=>{const w=p.el=d.el;let{patchFlag:S,dynamicChildren:b,dirs:M}=p;S|=d.patchFlag&16;const x=d.props||ie,$=p.props||ie;let H;m&&Mt(m,!1),(H=$.onVnodeBeforeUpdate)&&ze(H,m,p,d),M&&Dt(p,d,m,"beforeUpdate"),m&&Mt(m,!0),zt&&(S=0,O=!1,b=null);const Y=v&&p.type!=="foreignObject";if(b?(ge(d.dynamicChildren,b,w,m,y,Y,T),m&&m.type.__hmrId&&Or(d,p)):O||Ce(d,p,w,null,m,y,Y,T,!1),S>0){if(S&16)ue(w,p,x,$,m,y,v);else if(S&2&&x.class!==$.class&&s(w,"class",null,$.class,v),S&4&&s(w,"style",x.style,$.style,v),S&8){const oe=p.dynamicProps;for(let re=0;re<oe.length;re++){const pe=oe[re],Fe=x[pe],on=$[pe];(on!==Fe||pe==="value")&&s(w,pe,Fe,on,v,d.children,m,y,C)}}S&1&&d.children!==p.children&&u(w,p.children)}else!O&&b==null&&ue(w,p,x,$,m,y,v);((H=$.onVnodeUpdated)||M)&&Re(()=>{H&&ze(H,m,p,d),M&&Dt(p,d,m,"updated")},y)},ge=(d,p,m,y,v,T,O)=>{for(let w=0;w<p.length;w++){const S=d[w],b=p[w],M=S.el&&(S.type===De||!Ft(S,b)||S.shapeFlag&70)?f(S.el):m;R(S,b,M,null,y,v,T,O,!0)}},ue=(d,p,m,y,v,T,O)=>{if(m!==y){if(m!==ie)for(const w in m)!Er(w)&&!(w in y)&&s(d,w,m[w],null,O,p.children,v,T,C);for(const w in y){if(Er(w))continue;const S=y[w],b=m[w];S!==b&&w!=="value"&&s(d,w,b,S,O,p.children,v,T,C)}"value"in y&&s(d,"value",m.value,y.value)}},$e=(d,p,m,y,v,T,O,w,S)=>{const b=p.el=d?d.el:a(""),M=p.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:$,slotScopeIds:H}=p;(zt||x&2048)&&(x=0,S=!1,$=null),H&&(w=w?w.concat(H):H),d==null?(r(b,m,y),r(M,m,y),ee(p.children,m,M,v,T,O,w,S)):x>0&&x&64&&$&&d.dynamicChildren?(ge(d.dynamicChildren,$,m,v,T,O,w),v&&v.type.__hmrId?Or(d,p):(p.key!=null||v&&p===v.subTree)&&Or(d,p,!0)):Ce(d,p,m,M,v,T,O,w,S)},dt=(d,p,m,y,v,T,O,w,S)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,m,y,O,S):Ue(p,m,y,v,T,O,S):_e(d,p,S)},Ue=(d,p,m,y,v,T,O)=>{const w=d.component=gd(d,y,v);if(w.type.__hmrId&&qu(w),Tr(d),nt(w,"mount"),nr(d)&&(w.ctx.renderer=ae),nt(w,"init"),vd(w),rt(w,"init"),w.asyncDep){if(v&&v.registerDep(w,G),!d.el){const S=w.subTree=Ae(ye);k(null,S,p,m)}return}G(w,d,p,m,v,T,O),Sr(),rt(w,"mount")},_e=(d,p,m)=>{const y=p.component=d.component;if(ff(d,p,m))if(y.asyncDep&&!y.asyncResolved){Tr(p),Q(y,p,m),Sr();return}else y.next=p,Ku(y.update),y.update();else p.el=d.el,y.vnode=p},G=(d,p,m,y,v,T,O)=>{const w=()=>{if(d.isMounted){let{next:M,bu:x,u:$,parent:H,vnode:Y}=d,oe=M,re;Tr(M||d.vnode),Mt(d,!1),M?(M.el=Y.el,Q(d,M,O)):M=Y,x&&ln(x),(re=M.props&&M.props.onVnodeBeforeUpdate)&&ze(re,H,M,Y),Mt(d,!0),nt(d,"render");const pe=pi(d);rt(d,"render");const Fe=d.subTree;d.subTree=pe,nt(d,"patch"),R(Fe,pe,f(Fe.el),D(Fe),d,v,T),rt(d,"patch"),M.el=pe.el,oe===null&&df(d,pe.el),$&&Re($,v),(re=M.props&&M.props.onVnodeUpdated)&&Re(()=>ze(re,H,M,Y),v),ec(d),Sr()}else{let M;const{el:x,props:$}=p,{bm:H,m:Y,parent:oe}=d,re=Rr(p);if(Mt(d,!1),H&&ln(H),!re&&(M=$&&$.onVnodeBeforeMount)&&ze(M,oe,p),Mt(d,!0),x&&V){const pe=()=>{nt(d,"render"),d.subTree=pi(d),rt(d,"render"),nt(d,"hydrate"),V(x,d.subTree,d,v,null),rt(d,"hydrate")};re?p.type.__asyncLoader().then(()=>!d.isUnmounted&&pe()):pe()}else{nt(d,"render");const pe=d.subTree=pi(d);rt(d,"render"),nt(d,"patch"),R(null,pe,m,y,d,v,T),rt(d,"patch"),p.el=pe.el}if(Y&&Re(Y,v),!re&&(M=$&&$.onVnodeMounted)){const pe=p;Re(()=>ze(M,oe,pe),v)}(p.shapeFlag&256||oe&&Rr(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&Re(d.a,v),d.isMounted=!0,Zu(d),p=m=y=null}},S=d.effect=new ys(w,()=>ni(b),d.scope),b=d.update=()=>S.run();b.id=d.uid,Mt(d,!0),S.onTrack=d.rtc?M=>ln(d.rtc,M):void 0,S.onTrigger=d.rtg?M=>ln(d.rtg,M):void 0,b.ownerInstance=d,b()},Q=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Wf(d,p.props,y,m),Xf(d,p.children,m),tn(),ro(),nn()},Ce=(d,p,m,y,v,T,O,w,S=!1)=>{const b=d&&d.children,M=d?d.shapeFlag:0,x=p.children,{patchFlag:$,shapeFlag:H}=p;if($>0){if($&128){et(b,x,m,y,v,T,O,w,S);return}else if($&256){rn(b,x,m,y,v,T,O,w,S);return}}H&8?(M&16&&C(b,v,T),x!==b&&u(m,x)):M&16?H&16?et(b,x,m,y,v,T,O,w,S):C(b,v,T,!0):(M&8&&u(m,""),H&16&&ee(x,m,y,v,T,O,w,S))},rn=(d,p,m,y,v,T,O,w,S)=>{d=d||mn,p=p||mn;const b=d.length,M=p.length,x=Math.min(b,M);let $;for($=0;$<x;$++){const H=p[$]=S?_t(p[$]):Be(p[$]);R(d[$],H,m,null,v,T,O,w,S)}b>M?C(d,v,T,!0,!1,x):ee(p,m,y,v,T,O,w,S,x)},et=(d,p,m,y,v,T,O,w,S)=>{let b=0;const M=p.length;let x=d.length-1,$=M-1;for(;b<=x&&b<=$;){const H=d[b],Y=p[b]=S?_t(p[b]):Be(p[b]);if(Ft(H,Y))R(H,Y,m,null,v,T,O,w,S);else break;b++}for(;b<=x&&b<=$;){const H=d[x],Y=p[$]=S?_t(p[$]):Be(p[$]);if(Ft(H,Y))R(H,Y,m,null,v,T,O,w,S);else break;x--,$--}if(b>x){if(b<=$){const H=$+1,Y=H<M?p[H].el:y;for(;b<=$;)R(null,p[b]=S?_t(p[b]):Be(p[b]),m,Y,v,T,O,w,S),b++}}else if(b>$)for(;b<=x;)xe(d[b],v,T,!0),b++;else{const H=b,Y=b,oe=new Map;for(b=Y;b<=$;b++){const Ie=p[b]=S?_t(p[b]):Be(p[b]);Ie.key!=null&&(oe.has(Ie.key)&&E("Duplicate keys found during update:",JSON.stringify(Ie.key),"Make sure keys are unique."),oe.set(Ie.key,b))}let re,pe=0;const Fe=$-Y+1;let on=!1,zs=0;const Sn=new Array(Fe);for(b=0;b<Fe;b++)Sn[b]=0;for(b=H;b<=x;b++){const Ie=d[b];if(pe>=Fe){xe(Ie,v,T,!0);continue}let Ke;if(Ie.key!=null)Ke=oe.get(Ie.key);else for(re=Y;re<=$;re++)if(Sn[re-Y]===0&&Ft(Ie,p[re])){Ke=re;break}Ke===void 0?xe(Ie,v,T,!0):(Sn[Ke-Y]=b+1,Ke>=zs?zs=Ke:on=!0,R(Ie,p[Ke],m,null,v,T,O,w,S),pe++)}const qs=on?id(Sn):mn;for(re=qs.length-1,b=Fe-1;b>=0;b--){const Ie=Y+b,Ke=p[Ie],Gs=Ie+1<M?p[Ie+1].el:y;Sn[b]===0?R(null,Ke,m,Gs,v,T,O,w,S):on&&(re<0||b!==qs[re]?We(Ke,m,Gs,2):re--)}}},We=(d,p,m,y,v=null)=>{const{el:T,type:O,transition:w,children:S,shapeFlag:b}=d;if(b&6){We(d.component.subTree,p,m,y);return}if(b&128){d.suspense.move(p,m,y);return}if(b&64){O.move(d,p,m,ae);return}if(O===De){r(T,p,m);for(let x=0;x<S.length;x++)We(S[x],p,m,y);r(d.anchor,p,m);return}if(O===Ar){L(d,p,m);return}if(y!==2&&b&1&&w)if(y===0)w.beforeEnter(T),r(T,p,m),Re(()=>w.enter(T),v);else{const{leave:x,delayLeave:$,afterLeave:H}=w,Y=()=>r(T,p,m),oe=()=>{x(T,()=>{Y(),H&&H()})};$?$(T,Y,oe):oe()}else r(T,p,m)},xe=(d,p,m,y=!1,v=!1)=>{const{type:T,props:O,ref:w,children:S,dynamicChildren:b,shapeFlag:M,patchFlag:x,dirs:$}=d;if(w!=null&&Gi(w,null,m,d,!0),M&256){p.ctx.deactivate(d);return}const H=M&1&&$,Y=!Rr(d);let oe;if(Y&&(oe=O&&O.onVnodeBeforeUnmount)&&ze(oe,p,d),M&6)A(d.component,m,y);else{if(M&128){d.suspense.unmount(m,y);return}H&&Dt(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,m,v,ae,y):b&&(T!==De||x>0&&x&64)?C(b,p,m,!1,!0):(T===De&&x&384||!v&&M&16)&&C(S,p,m),y&&sn(d)}(Y&&(oe=O&&O.onVnodeUnmounted)||H)&&Re(()=>{oe&&ze(oe,p,d),H&&Dt(d,null,p,"unmounted")},m)},sn=d=>{const{type:p,el:m,anchor:y,transition:v}=d;if(p===De){d.patchFlag>0&&d.patchFlag&2048&&v&&!v.persisted?d.children.forEach(O=>{O.type===ye?i(O.el):sn(O)}):_(m,y);return}if(p===Ar){q(d);return}const T=()=>{i(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:w}=v,S=()=>O(m,T);w?w(d.el,T,S):S()}else T()},_=(d,p)=>{let m;for(;d!==p;)m=h(d),i(d),d=m;i(p)},A=(d,p,m)=>{d.type.__hmrId&&Gu(d);const{bum:y,scope:v,update:T,subTree:O,um:w}=d;y&&ln(y),v.stop(),T&&(T.active=!1,xe(O,d,p,m)),w&&Re(w,p),Re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve()),tf(d)},C=(d,p,m,y=!1,v=!1,T=0)=>{for(let O=T;O<d.length;O++)xe(d[O],p,m,y,v)},D=d=>d.shapeFlag&6?D(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),X=(d,p,m)=>{d==null?p._vnode&&xe(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,m),ro(),Ya(),p._vnode=d},ae={p:R,um:xe,m:We,r:sn,mt:Ue,mc:ee,pc:Ce,pbc:ge,n:D,o:t};let z,V;return e&&([z,V]=e(ae)),{render:X,hydrate:z,createApp:ed(X,z)}}function Mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Or(t,e,n=!1){const r=t.children,i=e.children;if(F(r)&&F(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=_t(i[s]),a.el=o.el),n||Or(o,a)),a.type===rr&&(a.el=o.el),a.type===ye&&!a.el&&(a.el=o.el)}}function id(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const sd=t=>t.__isTeleport,De=Symbol("Fragment"),rr=Symbol("Text"),ye=Symbol("Comment"),Ar=Symbol("Static"),Mn=[];let He=null;function Ec(t=!1){Mn.push(He=t?null:[])}function od(){Mn.pop(),He=Mn[Mn.length-1]||null}let Vn=1;function _o(t){Vn+=t}function Tc(t){return t.dynamicChildren=Vn>0?He||mn:null,od(),Vn>0&&He&&He.push(t),t}function ad(t,e,n,r,i,s){return Tc(hn(t,e,n,r,i,s,!0))}function cd(t,e,n,r,i){return Tc(Ae(t,e,n,r,i,!0))}function Wn(t){return t?t.__v_isVNode===!0:!1}function Ft(t,e){return e.shapeFlag&6&&un.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const ld=(...t)=>ud(...t),si="__vInternal",Sc=({key:t})=>t??null,kr=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||ve(t)||B(t)?{i:Se,r:t,k:e,f:!!n}:t:null;function hn(t,e=null,n=null,r=0,i=null,s=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sc(e),ref:e&&kr(e),scopeId:rc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Se};return a?(ks(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),c.key!==c.key&&E("VNode created with invalid key (NaN). VNode type:",c.type),Vn>0&&!o&&He&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&He.push(c),c}const Ae=ld;function ud(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Pf)&&(t||E(`Invalid vnode type when creating vnode: ${t}.`),t=ye),Wn(t)){const a=Ze(t,e,!0);return n&&ks(a,n),Vn>0&&!s&&He&&(a.shapeFlag&6?He[He.indexOf(t)]=a:He.push(a)),a.patchFlag|=-2,a}if(kc(t)&&(t=t.__vccOpts),e){e=fd(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=ds(a)),se(c)&&(Li(c)&&!F(c)&&(c=de({},c)),e.style=fs(c))}const o=he(t)?1:hf(t)?128:sd(t)?64:se(t)?4:B(t)?2:0;return o&4&&Li(t)&&(t=W(t),E("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),hn(t,e,n,r,i,o,s,!0)}function fd(t){return t?Li(t)||si in t?de({},t):t:null}function Ze(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?hd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sc(a),ref:e&&e.ref?n&&i?F(i)?i.concat(kr(e)):[i,kr(e)]:kr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s===-1&&F(o)?o.map(Cc):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ze(t.ssContent),ssFallback:t.ssFallback&&Ze(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Cc(t){const e=Ze(t);return F(t.children)&&(e.children=t.children.map(Cc)),e}function dd(t=" ",e=0){return Ae(rr,null,t,e)}function vv(t="",e=!1){return e?(Ec(),cd(ye,null,t)):Ae(ye,null,t)}function Be(t){return t==null||typeof t=="boolean"?Ae(ye):F(t)?Ae(De,null,t.slice()):typeof t=="object"?_t(t):Ae(rr,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ze(t)}function ks(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),ks(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(si in e)?e._ctx=Se:i===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[dd(e)]):n=8);t.children=e,t.shapeFlag|=n}function hd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ds([e.class,r.class]));else if(i==="style")e.style=fs([e.style,r.style]);else if(Zn(i)){const s=e[i],o=r[i];o&&s!==o&&!(F(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function ze(t,e,n,r=null){Le(t,e,7,[n,r])}const pd=Ic();let md=0;function gd(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||pd,s={uid:md++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new tu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_c(r,i),emitsOptions:nc(r,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx=Nf(s),s.root=e?e.root:s,s.emit=of.bind(null,s),t.ce&&t.ce(s),s}let fe=null;const Ps=()=>fe||Se,wn=t=>{fe=t,t.scope.on()},Gt=()=>{fe&&fe.scope.off(),fe=null},_d=Pt("slot,component");function Ji(t,e){const n=e.isNativeTag||ba;(_d(t)||n(t))&&E("Do not use built-in or reserved HTML elements as component id: "+t)}function Rc(t){return t.vnode.shapeFlag&4}let Kn=!1;function vd(t,e=!1){Kn=e;const{props:n,children:r}=t.vnode,i=Rc(t);Hf(t,n,i,e),Qf(t,r);const s=i?yd(t,e):void 0;return Kn=!1,s}function yd(t,e){var n;const r=t.type;{if(r.name&&Ji(r.name,t.appContext.config),r.components){const s=Object.keys(r.components);for(let o=0;o<s.length;o++)Ji(s[o],t.appContext.config)}if(r.directives){const s=Object.keys(r.directives);for(let o=0;o<s.length;o++)hc(s[o])}r.compilerOptions&&Oc()&&E('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Fa(new Proxy(t.ctx,pc)),Df(t);const{setup:i}=r;if(i){const s=t.setupContext=i.length>1?wd(t):null;wn(t),tn();const o=at(i,t,0,[dn(t.props),s]);if(nn(),Gt(),ms(o)){if(o.then(Gt,Gt),e)return o.then(a=>{vo(t,a,e)}).catch(a=>{ti(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!==null&&n!==void 0?n:"Anonymous";E(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else vo(t,o,e)}else Ac(t,e)}function vo(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)?(Wn(e)&&E("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=Va(e),Mf(t)):e!==void 0&&E(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Ac(t,n)}let Yi;const Oc=()=>!Yi;function Ac(t,e,n){const r=t.type;if(!t.render){if(!e&&Yi&&!r.render){const i=r.template||Os(t).template;if(i){nt(t,"compile");const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=de(de({isCustomElement:s,delimiters:a},o),c);r.render=Yi(i,l),rt(t,"compile")}}t.render=r.render||Oe}wn(t),tn(),$f(t),nn(),Gt(),!r.render&&t.render===Oe&&!e&&(r.template?E('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):E("Component is missing template or render function."))}function bd(t){return new Proxy(t.attrs,{get(e,n){return Fr(),ke(t,"get","$attrs"),e[n]},set(){return E("setupContext.attrs is readonly."),!1},deleteProperty(){return E("setupContext.attrs is readonly."),!1}})}function wd(t){const e=r=>{if(t.exposed&&E("expose() should be called only once per setup()."),r!=null){let i=typeof r;i==="object"&&(F(r)?i="array":ve(r)&&(i="ref")),i!=="object"&&E(`expose() should be passed a plain object, received ${i}.`)}t.exposed=r||{}};let n;return Object.freeze({get attrs(){return n||(n=bd(t))},get slots(){return dn(t.slots)},get emit(){return(r,...i)=>t.emit(r,...i)},expose:e})}function oi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Va(Fa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qt)return qt[n](t)},has(e,n){return n in e||n in qt}}))}const Id=/(?:^|[-_])(\w)/g,Ed=t=>t.replace(Id,e=>e.toUpperCase()).replace(/[-_]/g,"");function xs(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function ai(t,e,n=!1){let r=xs(e);if(!r&&e.__file){const i=e.__file.match(/([^/\\]+)\.\w+$/);i&&(r=i[1])}if(!r&&t&&t.parent){const i=s=>{for(const o in s)if(s[o]===e)return o};r=i(t.components||t.parent.type.components)||i(t.appContext.components)}return r?Ed(r):n?"App":"Anonymous"}function kc(t){return B(t)&&"__vccOpts"in t}const Me=(t,e)=>$u(t,e,Kn);function Pc(t,e,n){const r=arguments.length;return r===2?se(e)&&!F(e)?Wn(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wn(n)&&(n=[n]),Ae(t,e,n))}const Td=Symbol("ssrContext"),Sd=()=>{{const t=ct(Td);return t||E("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function _i(t){return!!(t&&t.__v_isShallow)}function Cd(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},i={header(f){return se(f)?f.__isVue?["div",t,"VueInstance"]:ve(f)?["div",{},["span",t,u(f)],"<",a(f.value),">"]:Wt(f)?["div",{},["span",t,_i(f)?"ShallowReactive":"Reactive"],"<",a(f),`>${At(f)?" (readonly)":""}`]:At(f)?["div",{},["span",t,_i(f)?"ShallowReadonly":"Readonly"],"<",a(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...s(f.$)]}};function s(f){const h=[];f.type.props&&f.props&&h.push(o("props",W(f.props))),f.setupState!==ie&&h.push(o("setup",f.setupState)),f.data!==ie&&h.push(o("data",W(f.data)));const g=c(f,"computed");g&&h.push(o("computed",g));const I=c(f,"inject");return I&&h.push(o("injected",I)),h.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function o(f,h){return h=de({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(g=>["div",{},["span",r,g+": "],a(h[g],!1)])]]:["span",{}]}function a(f,h=!0){return typeof f=="number"?["span",e,f]:typeof f=="string"?["span",n,JSON.stringify(f)]:typeof f=="boolean"?["span",r,f]:se(f)?["object",{object:h?W(f):f}]:["span",n,String(f)]}function c(f,h){const g=f.type;if(B(g))return;const I={};for(const R in f.ctx)l(g,R,h)&&(I[R]=f.ctx[R]);return I}function l(f,h,g){const I=f[g];if(F(I)&&I.includes(h)||se(I)&&h in I||f.extends&&l(f.extends,h,g)||f.mixins&&f.mixins.some(R=>l(R,h,g)))return!0}function u(f){return _i(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const yo="3.2.47",Rd="http://www.w3.org/2000/svg",jt=typeof document<"u"?document:null,bo=jt&&jt.createElement("template"),Od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?jt.createElementNS(Rd,t):jt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{bo.innerHTML=r?`<svg>${t}</svg>`:t;const a=bo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ad(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kd(t,e,n){const r=t.style,i=he(n);if(n&&!i){if(e&&!he(e))for(const s in e)n[s]==null&&Qi(r,s,"");for(const s in n)Qi(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Pd=/[^\\];\s*$/,wo=/\s*!important$/;function Qi(t,e,n){if(F(n))n.forEach(r=>Qi(t,e,r));else if(n==null&&(n=""),Pd.test(n)&&E(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=xd(t,e);wo.test(n)?t.setProperty(Rt(r),n.replace(wo,""),"important"):t[r]=n}}const Io=["Webkit","Moz","ms"],vi={};function xd(t,e){const n=vi[e];if(n)return n;let r=Xe(e);if(r!=="filter"&&r in t)return vi[e]=r;r=Yt(r);for(let i=0;i<Io.length;i++){const s=Io[i]+r;if(s in t)return vi[e]=s}return e}const Eo="http://www.w3.org/1999/xlink";function Nd(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Eo,e.slice(6,e.length)):t.setAttributeNS(Eo,e,n);else{const s=Jl(e);n==null||s&&!va(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Dd(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=va(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch(c){a||E(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&t.removeAttribute(e)}function fn(t,e,n,r){t.addEventListener(e,n,r)}function Md(t,e,n,r){t.removeEventListener(e,n,r)}function Ld(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=$d(e);if(r){const l=s[e]=jd(r,i);fn(t,a,l,c)}else o&&(Md(t,a,o,c),s[e]=void 0)}}const To=/(?:Once|Passive|Capture)$/;function $d(t){let e;if(To.test(t)){e={};let r;for(;r=t.match(To);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rt(t.slice(2)),e]}let yi=0;const Ud=Promise.resolve(),Fd=()=>yi||(Ud.then(()=>yi=0),yi=Date.now());function jd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(Bd(r,n.value),e,5,[r])};return n.value=t,n.attached=Fd(),n}function Bd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const So=/^on[a-z]/,Hd=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?Ad(t,r,i):e==="style"?kd(t,n,r):Zn(e)?Mr(e)||Ld(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vd(t,e,r,i))?Dd(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nd(t,e,r,i))};function Vd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&So.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||So.test(e)&&he(n)?!1:e in t}const Wd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yf.props;const Co=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>ln(e,n):e};function Kd(t){t.target.composing=!0}function Ro(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yv={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Co(i);const s=r||i.props&&i.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=ki(a)),t._assign(a)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",Kd),fn(t,"compositionend",Ro),fn(t,"change",Ro))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Co(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&ki(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zd=de({patchProp:Hd},Od);let Oo;function qd(){return Oo||(Oo=nd(zd))}const Gd=(...t)=>{const e=qd().createApp(...t);Jd(e),Yd(e);const{mount:n}=e;return e.mount=r=>{const i=Qd(r);if(!i)return;const s=e._component;!B(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Jd(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>zl(e)||ql(e),writable:!1})}function Yd(t){if(Oc()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){E("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return E(r),n},set(){E(r)}})}}function Qd(t){if(he(t)){const e=document.querySelector(t);return e||E(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&E('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function Xd(){Cd()}Xd();/**
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
 */const xc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new eh;const h=s<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const th=function(t){const e=xc(t);return Nc.encodeByteArray(e,!0)},Hr=function(t){return th(t).replace(/\./g,"")},Dc=function(t){try{return Nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rh=()=>nh().__FIREBASE_DEFAULTS__,ih=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dc(t[1]);return e&&JSON.parse(e)},Ns=()=>{try{return rh()||ih()||sh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mc=t=>{var e,n;return(n=(e=Ns())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bv=t=>{const e=Mc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oh=()=>{var t;return(t=Ns())===null||t===void 0?void 0:t.config},Lc=t=>{var e;return(e=Ns())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ah{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Hr(JSON.stringify(n)),Hr(JSON.stringify(o)),a].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function lh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fh(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dh(){try{return typeof indexedDB=="object"}catch{return!1}}function hh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ph="FirebaseError";class xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ph,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ir.prototype.create)}}class ir{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xt(i,a,r)}}function mh(t,e){return t.replace(gh,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gh=/\{\$([^}]+)}/g;function _h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ao(s)&&Ao(o)){if(!Vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ao(t){return t!==null&&typeof t=="object"}/**
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
 */function sr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vh(t,e){const n=new yh(t,e);return n.subscribe.bind(n)}class yh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bh(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bi),i.error===void 0&&(i.error=bi),i.complete===void 0&&(i.complete=bi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bi(){}/**
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class wh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ah;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eh(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ih(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ih(t){return t===Ut?void 0:t}function Eh(t){return t.instantiationMode==="EAGER"}/**
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
 */class Th{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Sh={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Ch=ce.INFO,Rh={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Oh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Rh[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=Ch,this._logHandler=Oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Ah=(t,e)=>e.some(n=>t instanceof n);let ko,Po;function kh(){return ko||(ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ph(){return Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uc=new WeakMap,Xi=new WeakMap,Fc=new WeakMap,wi=new WeakMap,Ds=new WeakMap;function xh(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(St(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uc.set(n,t)}).catch(()=>{}),Ds.set(e,t),e}function Nh(t){if(Xi.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xi.set(t,e)}let Zi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dh(t){Zi=t(Zi)}function Mh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ii(this),e,...n);return Fc.set(r,e.sort?e.sort():[e]),St(r)}:Ph().includes(t)?function(...e){return t.apply(Ii(this),e),St(Uc.get(this))}:function(...e){return St(t.apply(Ii(this),e))}}function Lh(t){return typeof t=="function"?Mh(t):(t instanceof IDBTransaction&&Nh(t),Ah(t,kh())?new Proxy(t,Zi):t)}function St(t){if(t instanceof IDBRequest)return xh(t);if(wi.has(t))return wi.get(t);const e=Lh(t);return e!==t&&(wi.set(t,e),Ds.set(e,t)),e}const Ii=t=>Ds.get(t);function $h(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Uh=["get","getKey","getAll","getAllKeys","count"],Fh=["put","add","delete","clear"],Ei=new Map;function xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ei.get(e))return Ei.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Fh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Uh.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ei.set(e,s),s}Dh(t=>({...t,get:(e,n,r)=>xo(e,n)||t.get(e,n,r),has:(e,n)=>!!xo(e,n)||t.has(e,n)}));/**
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
 */class jh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const es="@firebase/app",No="0.9.7";/**
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
 */const Xt=new $c("@firebase/app"),Hh="@firebase/app-compat",Vh="@firebase/analytics-compat",Wh="@firebase/analytics",Kh="@firebase/app-check-compat",zh="@firebase/app-check",qh="@firebase/auth",Gh="@firebase/auth-compat",Jh="@firebase/database",Yh="@firebase/database-compat",Qh="@firebase/functions",Xh="@firebase/functions-compat",Zh="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",rp="@firebase/performance",ip="@firebase/performance-compat",sp="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",cp="@firebase/storage-compat",lp="@firebase/firestore",up="@firebase/firestore-compat",fp="firebase",dp="9.19.1";/**
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
 */const ts="[DEFAULT]",hp={[es]:"fire-core",[Hh]:"fire-core-compat",[Wh]:"fire-analytics",[Vh]:"fire-analytics-compat",[zh]:"fire-app-check",[Kh]:"fire-app-check-compat",[qh]:"fire-auth",[Gh]:"fire-auth-compat",[Jh]:"fire-rtdb",[Yh]:"fire-rtdb-compat",[Qh]:"fire-fn",[Xh]:"fire-fn-compat",[Zh]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[rp]:"fire-perf",[ip]:"fire-perf-compat",[sp]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[cp]:"fire-gcs-compat",[lp]:"fire-fst",[up]:"fire-fst-compat","fire-js":"fire-js",[fp]:"fire-js-all"};/**
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
 */const Wr=new Map,ns=new Map;function pp(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(ns.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;ns.set(e,t);for(const n of Wr.values())pp(n,t);return!0}function jc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const mp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new ir("app","Firebase",mp);/**
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
 */class gp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=dp;function Bc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ts,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ct.create("bad-app-name",{appName:String(i)});if(n||(n=oh()),!n)throw Ct.create("no-options");const s=Wr.get(i);if(s){if(Vr(n,s.options)&&Vr(r,s.config))return s;throw Ct.create("duplicate-app",{appName:i})}const o=new Th(i);for(const c of ns.values())o.addComponent(c);const a=new gp(n,r,o);return Wr.set(i,a),a}function _p(t=ts){const e=Wr.get(t);if(!e&&t===ts)return Bc();if(!e)throw Ct.create("no-app",{appName:t});return e}function vn(t,e,n){var r;let i=(r=hp[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}zn(new In(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vp="firebase-heartbeat-database",yp=1,qn="firebase-heartbeat-store";let Ti=null;function Hc(){return Ti||(Ti=$h(vp,yp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),Ti}async function bp(t){try{return(await Hc()).transaction(qn).objectStore(qn).get(Vc(t))}catch(e){if(e instanceof xt)Xt.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function Do(t,e){try{const r=(await Hc()).transaction(qn,"readwrite");return await r.objectStore(qn).put(e,Vc(t)),r.done}catch(n){if(n instanceof xt)Xt.warn(n.message);else{const r=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(r.message)}}}function Vc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wp=1024,Ip=30*24*60*60*1e3;class Ep{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ip}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mo(),{heartbeatsToSend:n,unsentEntries:r}=Tp(this._heartbeatsCache.heartbeats),i=Hr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mo(){return new Date().toISOString().substring(0,10)}function Tp(t,e=wp){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lo(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dh()?hh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Do(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Do(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lo(t){return Hr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Cp(t){zn(new In("platform-logger",e=>new jh(e),"PRIVATE")),zn(new In("heartbeat",e=>new Ep(e),"PRIVATE")),vn(es,No,t),vn(es,No,"esm2017"),vn("fire-js","")}Cp("");function Ms(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Wc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rp=Wc,Kc=new ir("auth","Firebase",Wc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new $c("@firebase/auth");function Pr(t,...e){$o.logLevel<=ce.ERROR&&$o.error(`Auth (${ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw Ls(t,...e)}function Ye(t,...e){return Ls(t,...e)}function Op(t,e,n){const r=Object.assign(Object.assign({},Rp()),{[e]:n});return new ir("auth","Firebase",r).create(e,{appName:t.name})}function Ls(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Kc.create(t,...e)}function j(t,e,...n){if(!t)throw Ls(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pr(e),new Error(e)}function ut(t,e){t||st(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Map;function ot(t){ut(t instanceof Function,"Expected a class definition");let e=Uo.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e){const n=jc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vr(s,e??{}))return i;Ve(i,"already-initialized")}return n.initialize({options:e})}function kp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pp(){return Fo()==="http:"||Fo()==="https:"}function Fo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pp()||lh()||"connection"in navigator)?navigator.onLine:!0}function Np(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=ch()||uh()}get(){return xp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new or(3e4,6e4);function ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,i={}){return qc(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),zc.fetch()(Gc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function qc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dp),e);try{const i=new Lp(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw yr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Op(t,u,l);Ve(t,u)}}catch(i){if(i instanceof xt)throw i;Ve(t,"network-request-failed",{message:String(i)})}}async function lr(t,e,n,r,i={}){const s=await cr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ve(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Gc(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$s(t.config,i):`${t.config.apiScheme}://${i}`}class Lp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Mp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function Up(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fp(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),i=Us(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ln(Si(i.auth_time)),issuedAtTime:Ln(Si(i.iat)),expirationTime:Ln(Si(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Si(t){return Number(t)*1e3}function Us(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dc(n);return i?JSON.parse(i):(Pr("Failed to decode base64 JWT payload"),null)}catch(i){return Pr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jp(t){const e=Us(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&Bp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Bp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kr(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gn(t,Up(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Kp(s.providerUserInfo):[],a=Wp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Vp(t){const e=Nt(t);await Kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wp(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kp(t){return t.map(e=>{var{providerId:n}=e,r=Ms(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(t,e){const n=await qc(t,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Gc(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zp(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Jn;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ms(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fp(this,e)}reload(){return Vp(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,$p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:L,isAnonymous:q,providerData:le,stsTokenManager:me}=n;j(U&&me,e,"internal-error");const K=Jn.fromJSON(this.name,me);j(typeof U=="string",e,"internal-error"),pt(f,e.name),pt(h,e.name),j(typeof L=="boolean",e,"internal-error"),j(typeof q=="boolean",e,"internal-error"),pt(g,e.name),pt(I,e.name),pt(R,e.name),pt(N,e.name),pt(k,e.name),pt(P,e.name);const ee=new Jt({uid:U,auth:e,email:h,emailVerified:L,displayName:f,isAnonymous:q,photoURL:I,phoneNumber:g,tenantId:R,stsTokenManager:K,createdAt:k,lastLoginAt:P});return le&&Array.isArray(le)&&(ee.providerData=le.map(ne=>Object.assign({},ne))),N&&(ee._redirectEventId=N),ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new Jn;i.updateFromServerResponse(n);const s=new Jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kr(s),s}}/**
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
 */class Yc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yc.type="NONE";const jo=Yc;/**
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
 */function xr(t,e,n){return`firebase:${t}:${e}:${n}`}class yn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xr(this.userKey,i.apiKey,s),this.fullPersistenceKey=xr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yn(ot(jo),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||ot(jo);const o=xr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Jt._fromJSON(e,u);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new yn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new yn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tl(e))return"Blackberry";if(nl(e))return"Webos";if(Fs(e))return"Safari";if((e.includes("chrome/")||Xc(e))&&!e.includes("edge/"))return"Chrome";if(el(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qc(t=we()){return/firefox\//i.test(t)}function Fs(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xc(t=we()){return/crios\//i.test(t)}function Zc(t=we()){return/iemobile/i.test(t)}function el(t=we()){return/android/i.test(t)}function tl(t=we()){return/blackberry/i.test(t)}function nl(t=we()){return/webos/i.test(t)}function li(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qp(t=we()){var e;return li(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gp(){return fh()&&document.documentMode===10}function rl(t=we()){return li(t)||el(t)||nl(t)||tl(t)||/windows phone/i.test(t)||Zc(t)}function Jp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e=[]){let n;switch(t){case"Browser":n=Bo(we());break;case"Worker":n=`${Bo(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
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
 */class Yp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ho(this),this.idTokenSubscription=new Ho(this),this.beforeStateQueue=new Yp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Np()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ir("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await yn.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=il(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ur(t){return Nt(t)}class Ho{constructor(e){this.auth=e,this.observer=null,this.addObserver=vh(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Xp(t,e,n){const r=ur(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=sl(e),{host:o,port:a}=Zp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||em()}function sl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zp(t){const e=sl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vo(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vo(o)}}}function Vo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function em(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function tm(t,e){return cr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e){return lr(t,"POST","/v1/accounts:signInWithPassword",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(t,e){return lr(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}async function im(t,e){return lr(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends js{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rm(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return im(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e){return lr(t,"POST","/v1/accounts:signInWithIdp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="http://localhost";class Zt extends js{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ms(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:sm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function am(t){const e=Pn(xn(t)).link,n=e?Pn(xn(e)).deep_link_id:null,r=Pn(xn(t)).deep_link_id;return(r?Pn(xn(r)).link:null)||r||n||e||t}class Bs{constructor(e){var n,r,i,s,o,a;const c=Pn(xn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=om((i=c.mode)!==null&&i!==void 0?i:null);j(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=am(e);try{return new Bs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.providerId=Tn.PROVIDER_ID}static credential(e,n){return Yn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bs.parseLink(n);return j(r,"argument-error"),Yn._fromEmailAndCode(e,r.code,r.tenantId)}}Tn.PROVIDER_ID="password";Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fr extends ol{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends fr{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends fr{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends fr{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(t,e){return lr(t,"POST","/v1/accounts:signUp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jt._fromIdTokenResponse(e,r,i),o=Wo(r);return new en({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wo(r);return new en({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zr(e,n,r,i)}}function al(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zr._fromErrorAndOperation(t,s,e,r):s})}async function lm(t,e,n=!1){const r=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return en._forOperation(t,"link",r)}/**
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
 */async function um(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Gn(t,al(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=Us(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),en._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t,e,n=!1){const r="signIn",i=await al(t,r,e),s=await en._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fm(t,e){return cl(ur(t),e)}async function Iv(t,e,n){const r=ur(t),i=await cm(r,{returnSecureToken:!0,email:e,password:n}),s=await en._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ev(t,e,n){return fm(Nt(t),Tn.credential(e,n))}function dm(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function hm(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}function Tv(t){return Nt(t).signOut()}const qr="__sak";/**
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
 */class ll{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qr,"1"),this.storage.removeItem(qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){const t=we();return Fs(t)||li(t)}const mm=1e3,gm=10;class ul extends ll{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pm()&&Jp(),this.fallbackToPolling=rl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Gp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gm):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ul.type="LOCAL";const _m=ul;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends ll{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fl.type="SESSION";const dl=fl;/**
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
 */function vm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ui{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ui(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await vm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ui.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ym{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Hs("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function bm(t){Qe().location.href=t}/**
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
 */function hl(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function wm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Im(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Em(){return hl()?self:null}/**
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
 */const pl="firebaseLocalStorageDb",Tm=1,Gr="firebaseLocalStorage",ml="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fi(t,e){return t.transaction([Gr],e?"readwrite":"readonly").objectStore(Gr)}function Sm(){const t=indexedDB.deleteDatabase(pl);return new dr(t).toPromise()}function is(){const t=indexedDB.open(pl,Tm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gr,{keyPath:ml})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gr)?e(r):(r.close(),await Sm(),e(await is()))})})}async function Ko(t,e,n){const r=fi(t,!0).put({[ml]:e,value:n});return new dr(r).toPromise()}async function Cm(t,e){const n=fi(t,!1).get(e),r=await new dr(n).toPromise();return r===void 0?null:r.value}function zo(t,e){const n=fi(t,!0).delete(e);return new dr(n).toPromise()}const Rm=800,Om=3;class gl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await is(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Om)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ui._getInstance(Em()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wm(),!this.activeServiceWorker)return;this.sender=new ym(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Im()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await is();return await Ko(e,qr,"1"),await zo(e,qr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ko(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fi(i,!1).getAll();return new dr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gl.type="LOCAL";const Am=gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",km().appendChild(r)})}function xm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new or(3e4,6e4);/**
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
 */function Nm(t,e){return e?ot(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vs extends js{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Dm(t){return cl(t.auth,new Vs(t),t.bypassAuthState)}function Mm(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),um(n,new Vs(t),t.bypassAuthState)}async function Lm(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),lm(n,new Vs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dm;case"linkViaPopup":case"linkViaRedirect":return Lm;case"reauthViaPopup":case"reauthViaRedirect":return Mm;default:Ve(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new or(2e3,1e4);class pn extends _l{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$m.get())};e()}}pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="pendingRedirect",Nr=new Map;class Fm extends _l{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nr.get(this.auth._key());if(!e){try{const r=await jm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nr.set(this.auth._key(),e)}return this.bypassAuthState||Nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jm(t,e){const n=Vm(e),r=Hm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Bm(t,e){Nr.set(t._key(),e)}function Hm(t){return ot(t._redirectPersistence)}function Vm(t){return xr(Um,t.config.apiKey,t.name)}async function Wm(t,e,n=!1){const r=ur(t),i=Nm(r,e),o=await new Fm(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=10*60*1e3;class zm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Km&&this.cachedEventUids.clear(),this.cachedEventUids.has(qo(e))}saveEventToCache(e){this.cachedEventUids.add(qo(e)),this.lastProcessedEventTime=Date.now()}}function qo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ym=/^https?/;async function Qm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gm(t);for(const n of e)try{if(Xm(n))return}catch{}Ve(t,"unauthorized-domain")}function Xm(t){const e=rs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ym.test(n))return!1;if(Jm.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Zm=new or(3e4,6e4);function Go(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eg(t){return new Promise((e,n)=>{var r,i,s;function o(){Go(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Go(),n(Ye(t,"network-request-failed"))},timeout:Zm.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=xm("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},Pm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Dr=null,e})}let Dr=null;function tg(t){return Dr=Dr||eg(t),Dr}/**
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
 */const ng=new or(5e3,15e3),rg="__/auth/iframe",ig="emulator/auth/iframe",sg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ag(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$s(e,ig):`https://${t.config.authDomain}/${rg}`,r={apiKey:e.apiKey,appName:t.name,v:ci},i=og.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sr(r).slice(1)}`}async function cg(t){const e=await tg(t),n=Qe().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:ag(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},ng.get());function c(){Qe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ug=500,fg=600,dg="_blank",hg="http://localhost";class Jo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pg(t,e,n,r=ug,i=fg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lg),{width:r.toString(),height:i.toString(),top:s,left:o}),l=we().toLowerCase();n&&(a=Xc(l)?dg:n),Qc(l)&&(e=e||hg,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,I])=>`${h}${g}=${I},`,"");if(qp(l)&&a!=="_self")return mg(e||"",a),new Jo(null);const f=window.open(e||"",a,u);j(f,t,"popup-blocked");try{f.focus()}catch{}return new Jo(f)}function mg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gg="__/auth/handler",_g="emulator/auth/handler";function Yo(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:i};if(e instanceof ol){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof fr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${vg(t)}?${sr(a).slice(1)}`}function vg({config:t}){return t.emulator?$s(t,_g):`https://${t.authDomain}/${gg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="webStorageSupport";class yg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dl,this._completeRedirectFn=Wm,this._overrideRedirectResult=Bm}async _openPopup(e,n,r,i){var s;ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Yo(e,n,r,rs(),i);return pg(e,o,Hs())}async _openRedirect(e,n,r,i){return await this._originValidation(e),bm(Yo(e,n,r,rs(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cg(e),r=new zm(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ci,{type:Ci},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ci];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rl()||Fs()||li()}}const bg=yg;var Qo="@firebase/auth",Xo="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Eg(t){zn(new In("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{j(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:il(t)},u=new Qp(a,c,l);return kp(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new In("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(r=>new wg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Qo,Xo,Ig(t)),vn(Qo,Xo,"esm2017")}/**
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
 */const Tg=5*60,Sg=Lc("authIdTokenMaxAge")||Tg;let Zo=null;const Cg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sg)return;const i=n==null?void 0:n.token;Zo!==i&&(Zo=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yl(t=_p()){const e=jc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ap(t,{popupRedirectResolver:bg,persistence:[Am,_m,dl]}),r=Lc("authTokenSyncURL");if(r){const s=Cg(r);hm(n,s,()=>s(n.currentUser)),dm(n,o=>s(o))}const i=Mc("auth");return i&&Xp(n,`http://${i}`),n}Eg("Browser");const Rg={data(){return{logState:""}},mounted(){yl().currentUser==null?this.logState="Log in":this.logState="Log out"},methods:{goHome(){this.$router.push("/")}}},Og="/assets/logo-d503e1ea.png";const Ag=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},kg={class:"container"},Pg={class:"logo"};function xg(t,e,n,r,i,s){const o=kf("router-view");return Ec(),ad(De,null,[hn("div",kg,[hn("header",null,[hn("div",Pg,[hn("img",{onClick:e[0]||(e[0]=(...a)=>s.goHome&&s.goHome(...a)),class:"img-responsive",src:Og})])])]),Ae(o)],64)}const Ng=Ag(Rg,[["render",xg],["__scopeId","data-v-7a7a37b1"],["__file","/home/dave/Documents/VueFleet/vue-project/src/App.vue"]]);function Dg(){return bl().__VUE_DEVTOOLS_GLOBAL_HOOK__}function bl(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Mg=typeof Proxy=="function",Lg="devtools-plugin:setup",$g="plugin:settings:set";let an,ss;function Ug(){var t;return an!==void 0||(typeof window<"u"&&window.performance?(an=!0,ss=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(an=!0,ss=global.perf_hooks.performance):an=!1),an}function Fg(){return Ug()?ss.now():Date.now()}class jg{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}s=o},now(){return Fg()}},n&&n.on($g,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Bg(t,e){const n=t,r=bl(),i=Dg(),s=Mg&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(Lg,t,e);else{const o=s?new jg(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const it=typeof window<"u";function Hg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Ri(t,e){const n={};for(const r in e){const i=e[r];n[r]=Pe(i)?i.map(t):t(i)}return n}const $n=()=>{},Pe=Array.isArray;function Z(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const Vg=/\/$/,Wg=t=>t.replace(Vg,"");function Oi(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=qg(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Kg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ea(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ta(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&kt(e.matched[r],n.matched[i])&&wl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function kt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zg(t[n],e[n]))return!1;return!0}function zg(t,e){return Pe(t)?na(t,e):Pe(e)?na(e,t):t===e}function na(t,e){return Pe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qg(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return Z(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Qn;(function(t){t.pop="pop",t.push="push"})(Qn||(Qn={}));var Un;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Un||(Un={}));function Gg(t){if(!t)if(it){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wg(t)}const Jg=/^[^#]+#/;function Yg(t,e){return t.replace(Jg,"#")+e}function Qg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const di=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const s=document.querySelector(t.el);if(r&&s){Z(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Z(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i){Z(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=Qg(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ra(t,e){return(history.state?history.state.position-e:-1)+t}const os=new Map;function Zg(t,e){os.set(t,e)}function e_(t){const e=os.get(t);return os.delete(t),e}let t_=()=>location.protocol+"//"+location.host;function Il(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ea(c,"")}return ea(n,t)+r+i}function n_(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const g=Il(t,location),I=n.value,R=e.value;let N=0;if(h){if(n.value=g,e.value=h,o&&o===I){o=null;return}N=R?h.position-R.position:0}else r(g);i.forEach(k=>{k(n.value,I,{delta:N,type:Qn.pop,direction:N?N>0?Un.forward:Un.back:Un.unknown})})};function c(){o=n.value}function l(h){i.push(h);const g=()=>{const I=i.indexOf(h);I>-1&&i.splice(I,1)};return s.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(te({},h.state,{scroll:di()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function ia(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?di():null}}function r_(t){const{history:e,location:n}=window,r={value:Il(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:t_()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(g){Z("Error with push/replace State",g),n[u?"replace":"assign"](h)}}function o(c,l){const u=te({},e.state,ia(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=te({},i.value,e.state,{forward:c,scroll:di()});e.state||Z(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),s(u.current,u,!0);const f=te({},ia(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function i_(t){t=Gg(t);const e=r_(t),n=n_(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=te({location:"",base:t,go:r,createHref:Yg.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function s_(t){return typeof t=="string"||t&&typeof t=="object"}function El(t){return typeof t=="string"||typeof t=="symbol"}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tl=Symbol("navigation failure");var sa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sa||(sa={}));const o_={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${c_(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function En(t,e){return te(new Error(o_[t](e)),{type:t,[Tl]:!0},e)}function tt(t,e){return t instanceof Error&&Tl in t&&(e==null||!!(t.type&e))}const a_=["params","query","hash"];function c_(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of a_)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const oa="[^/]+?",l_={sensitive:!1,strict:!1,start:!0,end:!0},u_=/[.+*?^${}()[\]/\\]/g;function f_(t,e){const n=te({},l_,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(u_,"\\$&"),g+=40;else if(h.type===1){const{value:I,repeatable:R,optional:N,regexp:k}=h;s.push({name:I,repeatable:R,optional:N});const P=k||oa;if(P!==oa){g+=10;try{new RegExp(`(${P})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${I}" (${P}): `+L.message)}}let U=R?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(U=N&&l.length<2?`(?:/${U})`:"/"+U),N&&(U+="?"),i+=U,g+=20,N&&(g+=-8),R&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",I=s[h-1];f[I.name]=g&&I.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:I,repeatable:R,optional:N}=g,k=I in l?l[I]:"";if(Pe(k)&&!R)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const P=Pe(k)?k.join("/"):k;if(!P)if(N)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=P}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function d_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function h_(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=d_(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(aa(r))return 1;if(aa(i))return-1}return i.length-r.length}function aa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const p_={type:0,value:""},m_=/[a-zA-Z0-9_]/;function g_(t){if(!t)return[[]];if(t==="/")return[[p_]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:m_.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function __(t,e,n){const r=f_(g_(t.path),n);{const s=new Set;for(const o of r.keys)s.has(o.name)&&Z(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),s.add(o.name)}const i=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function v_(t,e){const n=[],r=new Map;e=ua({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,h){const g=!h,I=y_(u);E_(I,f),I.aliasOf=h&&h.record;const R=ua(e,u),N=[I];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of U)N.push(te({},I,{components:h?h.record.components:I.components,path:L,aliasOf:h?h.record:I}))}let k,P;for(const U of N){const{path:L}=U;if(f&&L[0]!=="/"){const q=f.record.path,le=q[q.length-1]==="/"?"":"/";U.path=f.record.path+(L&&le+L)}if(U.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=__(U,f,R),f&&L[0]==="/"&&T_(k,f),h?(h.alias.push(k),I_(h,k)):(P=P||k,P!==k&&P.alias.push(k),g&&u.name&&!la(k)&&o(u.name)),I.children){const q=I.children;for(let le=0;le<q.length;le++)s(q[le],k,h&&h.children[le])}h=h||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return P?()=>{o(P)}:$n}function o(u){if(El(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&h_(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Sl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!la(u)&&r.set(u.record.name,u)}function l(u,f){let h,g={},I,R;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw En(1,{location:u});{const P=Object.keys(u.params||{}).filter(U=>!h.keys.find(L=>L.name===U));P.length&&Z(`Discarded invalid param(s) "${P.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}R=h.record.name,g=te(ca(f.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&ca(u.params,h.keys.map(P=>P.name))),I=h.stringify(g)}else if("path"in u)I=u.path,I.startsWith("/")||Z(`The Matcher cannot resolve relative paths but received "${I}". Unless you directly called \`matcher.resolve("${I}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=n.find(P=>P.re.test(I)),h&&(g=h.parse(I),R=h.record.name);else{if(h=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!h)throw En(1,{location:u,currentLocation:f});R=h.record.name,g=te({},f.params,u.params),I=h.stringify(g)}const N=[];let k=h;for(;k;)N.unshift(k.record),k=k.parent;return{name:R,path:I,params:g,matched:N,meta:w_(N)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ca(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function y_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:b_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function b_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function la(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function w_(t){return t.reduce((e,n)=>te(e,n.meta),{})}function ua(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function as(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function I_(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(as.bind(null,n)))return Z(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(as.bind(null,n)))return Z(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function E_(t,e){e&&e.record.name&&!t.name&&!t.path&&Z(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function T_(t,e){for(const n of e.keys)if(!t.keys.find(as.bind(null,n)))return Z(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Sl(t,e){return e.children.some(n=>n===t||Sl(t,n))}const Cl=/#/g,S_=/&/g,C_=/\//g,R_=/=/g,O_=/\?/g,Rl=/\+/g,A_=/%5B/g,k_=/%5D/g,Ol=/%5E/g,P_=/%60/g,Al=/%7B/g,x_=/%7C/g,kl=/%7D/g,N_=/%20/g;function Ws(t){return encodeURI(""+t).replace(x_,"|").replace(A_,"[").replace(k_,"]")}function D_(t){return Ws(t).replace(Al,"{").replace(kl,"}").replace(Ol,"^")}function cs(t){return Ws(t).replace(Rl,"%2B").replace(N_,"+").replace(Cl,"%23").replace(S_,"%26").replace(P_,"`").replace(Al,"{").replace(kl,"}").replace(Ol,"^")}function M_(t){return cs(t).replace(R_,"%3D")}function L_(t){return Ws(t).replace(Cl,"%23").replace(O_,"%3F")}function $_(t){return t==null?"":L_(t).replace(C_,"%2F")}function Xn(t){try{return decodeURIComponent(""+t)}catch{Z(`Error decoding "${t}". Using original value`)}return""+t}function U_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Rl," "),o=s.indexOf("="),a=Xn(o<0?s:s.slice(0,o)),c=o<0?null:Xn(s.slice(o+1));if(a in e){let l=e[a];Pe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function fa(t){let e="";for(let n in t){const r=t[n];if(n=M_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pe(r)?r.map(s=>s&&cs(s)):[r&&cs(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function F_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const j_=Symbol("router view location matched"),da=Symbol("router view depth"),Ks=Symbol("router"),Pl=Symbol("route location"),ls=Symbol("router view location");function Rn(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function vt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(En(4,{from:n,to:e})):f instanceof Error?a(f):s_(f)?a(En(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=t.call(r&&r.instances[i],e,n,B_(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const f=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(h=>c._called?h:(Z(f),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){Z(f),a(new Error("Invalid navigation guard"));return}}u.catch(f=>a(f))})}function B_(t,e,n){let r=0;return function(){r++===1&&Z(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function Ai(t,e,n,r){const i=[];for(const s of t){!s.components&&!s.children.length&&Z(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);for(const o in s.components){let a=s.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw Z(`Component "${o}" in record with path "${s.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){Z(`Component "${o}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,Z(`Component "${o}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(H_(a)){const l=(a.__vccOpts||a)[e];l&&i.push(vt(l,n,r,s,o))}else{let c=a();"catch"in c||(Z(`Component "${o}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Hg(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&vt(h,n,r,s,o)()}))}}}return i}function H_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ha(t){const e=ct(Ks),n=ct(Pl),r=Me(()=>e.resolve(gn(t.to))),i=Me(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(kt.bind(null,u));if(h>-1)return h;const g=pa(c[l-2]);return l>1&&pa(u)===g&&f[f.length-1].path!==g?f.findIndex(kt.bind(null,c[l-2])):h}),s=Me(()=>i.value>-1&&z_(n.params,r.value.params)),o=Me(()=>i.value>-1&&i.value===n.matched.length-1&&wl(n.params,r.value.params));function a(c={}){return K_(c)?e[gn(t.replace)?"replace":"push"](gn(t.to)).catch($n):Promise.resolve()}if(it){const c=Ps();if(c){const l={route:r.value,isActive:s.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),mf(()=>{l.route=r.value,l.isActive=s.value,l.isExactActive=o.value},{flush:"post"})}}return{route:r,href:Me(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const V_=cc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ha,setup(t,{slots:e}){const n=er(ha(t)),{options:r}=ct(Ks),i=Me(()=>({[ma(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ma(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Pc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),W_=V_;function K_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z_(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Pe(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function pa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ma=(t,e,n)=>t??e??n,q_=cc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){J_();const r=ct(ls),i=Me(()=>t.route||r.value),s=ct(da,0),o=Me(()=>{let l=gn(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Me(()=>i.value.matched[o.value]);Cr(da,Me(()=>o.value+1)),Cr(j_,a),Cr(ls,i);const c=xu();return Dn(()=>[c.value,a.value,t.name],([l,u,f],[h,g,I])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!kt(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return ga(n.default,{Component:h,route:l});const g=f.props[u],I=g?g===!0?l.params:typeof g=="function"?g(l):g:null,N=Pc(h,te({},I,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));if(it&&N.ref){const k={depth:o.value,name:f.name,path:f.path,meta:f.meta};(Pe(N.ref)?N.ref.map(U=>U.i):[N.ref.i]).forEach(U=>{U.__vrv_devtools=k})}return ga(n.default,{Component:N,route:l})||N}}});function ga(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const G_=q_;function J_(){const t=Ps(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";Z(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function On(t,e){const n=te({},t,{matched:t.matched.map(r=>iv(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function br(t){return{_custom:{display:t}}}let Y_=0;function Q_(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=Y_++;Bg({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((u,f)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:On(e.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:u,componentInstance:f})=>{if(f.__vrv_devtools){const h=f.__vrv_devtools;u.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:xl})}Pe(f.__vrl_devtools)&&(f.__devtoolsApi=i,f.__vrl_devtools.forEach(h=>{let g=Ml,I="";h.isExactActive?(g=Dl,I="This is exactly active"):h.isActive&&(g=Nl,I="This link is active"),u.tags.push({label:h.route.path,textColor:0,tooltip:I,backgroundColor:g})}))}),Dn(e.currentRoute,()=>{c(),i.notifyComponentUpdate(),i.sendInspectorTree(a),i.sendInspectorState(a)});const s="router:navigations:"+r;i.addTimelineLayer({id:s,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,f)=>{i.addTimelineEvent({layerId:s,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:i.now(),data:{error:u},groupId:f.meta.__navigationId}})});let o=0;e.beforeEach((u,f)=>{const h={guard:br("beforeEach"),from:On(f,"Current Location during this navigation"),to:On(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),i.addTimelineEvent({layerId:s,event:{time:i.now(),title:"Start of navigation",subtitle:u.fullPath,data:h,groupId:u.meta.__navigationId}})}),e.afterEach((u,f,h)=>{const g={guard:br("afterEach")};h?(g.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},g.status=br("❌")):g.status=br("✅"),g.from=On(f,"Current Location during this navigation"),g.to=On(u,"Target location"),i.addTimelineEvent({layerId:s,event:{title:"End of navigation",subtitle:u.fullPath,time:i.now(),data:g,logType:h?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;i.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let f=n.getRoutes().filter(h=>!h.parent);f.forEach(Ul),u.filter&&(f=f.filter(h=>us(h,u.filter.toLowerCase()))),f.forEach(h=>$l(h,e.currentRoute.value)),u.rootNodes=f.map(Ll)}let l;i.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),i.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const h=n.getRoutes().find(g=>g.record.__vd_id===u.nodeId);h&&(u.state={options:Z_(h)})}}),i.sendInspectorTree(a),i.sendInspectorState(a)})}function X_(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Z_(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${X_(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const xl=15485081,Nl=2450411,Dl=8702998,ev=2282478,Ml=16486972,tv=6710886;function Ll(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:ev}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Ml}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:xl}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Dl}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Nl}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:tv});let r=n.__vd_id;return r==null&&(r=String(nv++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(Ll)}}let nv=0;const rv=/^\/(.*)\/([a-z]*)$/;function $l(t,e){const n=e.matched.length&&kt(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>kt(r,t.record))),t.children.forEach(r=>$l(r,e))}function Ul(t){t.__vd_match=!1,t.children.forEach(Ul)}function us(t,e){const n=String(t.re).match(rv);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>us(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const i=t.record.path.toLowerCase(),s=Xn(i);return!e.startsWith("/")&&(s.includes(e)||i.includes(e))||s.startsWith(e)||i.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>us(o,e))}function iv(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function sv(t){const e=v_(t.routes,t),n=t.parseQuery||U_,r=t.stringifyQuery||fa,i=t.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const s=Rn(),o=Rn(),a=Rn(),c=Nu(mt);let l=mt;it&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ri.bind(null,_=>""+_),f=Ri.bind(null,$_),h=Ri.bind(null,Xn);function g(_,A){let C,D;return El(_)?(C=e.getRecordMatcher(_),D=A):D=_,e.addRoute(D,C)}function I(_){const A=e.getRecordMatcher(_);A?e.removeRoute(A):Z(`Cannot remove non-existent route "${String(_)}"`)}function R(){return e.getRoutes().map(_=>_.record)}function N(_){return!!e.getRecordMatcher(_)}function k(_,A){if(A=te({},A||c.value),typeof _=="string"){const V=Oi(n,_,A.path),d=e.resolve({path:V.path},A),p=i.createHref(V.fullPath);return p.startsWith("//")?Z(`Location "${_}" resolved to "${p}". A resolved location cannot start with multiple slashes.`):d.matched.length||Z(`No match found for location with path "${_}"`),te(V,d,{params:h(d.params),hash:Xn(V.hash),redirectedFrom:void 0,href:p})}let C;if("path"in _)"params"in _&&!("name"in _)&&Object.keys(_.params).length&&Z(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),C=te({},_,{path:Oi(n,_.path,A.path).path});else{const V=te({},_.params);for(const d in V)V[d]==null&&delete V[d];C=te({},_,{params:f(_.params)}),A.params=f(A.params)}const D=e.resolve(C,A),X=_.hash||"";X&&!X.startsWith("#")&&Z(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`),D.params=u(h(D.params));const ae=Kg(r,te({},_,{hash:D_(X),path:D.path})),z=i.createHref(ae);return z.startsWith("//")?Z(`Location "${_}" resolved to "${z}". A resolved location cannot start with multiple slashes.`):D.matched.length||Z(`No match found for location with path "${"path"in _?_.path:_}"`),te({fullPath:ae,hash:X,query:r===fa?F_(_.query):_.query||{}},D,{redirectedFrom:void 0,href:z})}function P(_){return typeof _=="string"?Oi(n,_,c.value.path):te({},_)}function U(_,A){if(l!==_)return En(8,{from:A,to:_})}function L(_){return me(_)}function q(_){return L(te(P(_),{replace:!0}))}function le(_){const A=_.matched[_.matched.length-1];if(A&&A.redirect){const{redirect:C}=A;let D=typeof C=="function"?C(_):C;if(typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=P(D):{path:D},D.params={}),!("path"in D)&&!("name"in D))throw Z(`Invalid redirect found:
${JSON.stringify(D,null,2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return te({query:_.query,hash:_.hash,params:"path"in D?{}:_.params},D)}}function me(_,A){const C=l=k(_),D=c.value,X=_.state,ae=_.force,z=_.replace===!0,V=le(C);if(V)return me(te(P(V),{state:typeof V=="object"?te({},X,V.state):X,force:ae,replace:z}),A||C);const d=C;d.redirectedFrom=A;let p;return!ae&&ta(r,D,C)&&(p=En(16,{to:d,from:D}),rn(D,D,!0,!1)),(p?Promise.resolve(p):ee(d,D)).catch(m=>tt(m)?tt(m,2)?m:Ce(m):G(m,d,D)).then(m=>{if(m){if(tt(m,2))return ta(r,k(m.to),d)&&A&&(A._count=A._count?A._count+1:1)>10?(Z(`Detected an infinite redirection in a navigation guard when going from "${D.fullPath}" to "${d.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):me(te({replace:z},P(m.to),{state:typeof m.to=="object"?te({},X,m.to.state):X,force:ae}),A||d)}else m=ge(d,D,!0,z,X);return ne(d,D,m),m})}function K(_,A){const C=U(_,A);return C?Promise.reject(C):Promise.resolve()}function ee(_,A){let C;const[D,X,ae]=ov(_,A);C=Ai(D.reverse(),"beforeRouteLeave",_,A);for(const V of D)V.leaveGuards.forEach(d=>{C.push(vt(d,_,A))});const z=K.bind(null,_,A);return C.push(z),cn(C).then(()=>{C=[];for(const V of s.list())C.push(vt(V,_,A));return C.push(z),cn(C)}).then(()=>{C=Ai(X,"beforeRouteUpdate",_,A);for(const V of X)V.updateGuards.forEach(d=>{C.push(vt(d,_,A))});return C.push(z),cn(C)}).then(()=>{C=[];for(const V of _.matched)if(V.beforeEnter&&!A.matched.includes(V))if(Pe(V.beforeEnter))for(const d of V.beforeEnter)C.push(vt(d,_,A));else C.push(vt(V.beforeEnter,_,A));return C.push(z),cn(C)}).then(()=>(_.matched.forEach(V=>V.enterCallbacks={}),C=Ai(ae,"beforeRouteEnter",_,A),C.push(z),cn(C))).then(()=>{C=[];for(const V of o.list())C.push(vt(V,_,A));return C.push(z),cn(C)}).catch(V=>tt(V,8)?V:Promise.reject(V))}function ne(_,A,C){for(const D of a.list())D(_,A,C)}function ge(_,A,C,D,X){const ae=U(_,A);if(ae)return ae;const z=A===mt,V=it?history.state:{};C&&(D||z?i.replace(_.fullPath,te({scroll:z&&V&&V.scroll},X)):i.push(_.fullPath,X)),c.value=_,rn(_,A,C,z),Ce()}let ue;function $e(){ue||(ue=i.listen((_,A,C)=>{if(!sn.listening)return;const D=k(_),X=le(D);if(X){me(te(X,{replace:!0}),D).catch($n);return}l=D;const ae=c.value;it&&Zg(ra(ae.fullPath,C.delta),di()),ee(D,ae).catch(z=>tt(z,12)?z:tt(z,2)?(me(z.to,D).then(V=>{tt(V,20)&&!C.delta&&C.type===Qn.pop&&i.go(-1,!1)}).catch($n),Promise.reject()):(C.delta&&i.go(-C.delta,!1),G(z,D,ae))).then(z=>{z=z||ge(D,ae,!1),z&&(C.delta&&!tt(z,8)?i.go(-C.delta,!1):C.type===Qn.pop&&tt(z,20)&&i.go(-1,!1)),ne(D,ae,z)}).catch($n)}))}let dt=Rn(),Ue=Rn(),_e;function G(_,A,C){Ce(_);const D=Ue.list();return D.length?D.forEach(X=>X(_,A,C)):(Z("uncaught error during route navigation:"),console.error(_)),Promise.reject(_)}function Q(){return _e&&c.value!==mt?Promise.resolve():new Promise((_,A)=>{dt.add([_,A])})}function Ce(_){return _e||(_e=!_,$e(),dt.list().forEach(([A,C])=>_?C(_):A()),dt.reset()),_}function rn(_,A,C,D){const{scrollBehavior:X}=t;if(!it||!X)return Promise.resolve();const ae=!C&&e_(ra(_.fullPath,0))||(D||!C)&&history.state&&history.state.scroll||null;return qa().then(()=>X(_,A,ae)).then(z=>z&&Xg(z)).catch(z=>G(z,_,A))}const et=_=>i.go(_);let We;const xe=new Set,sn={currentRoute:c,listening:!0,addRoute:g,removeRoute:I,hasRoute:N,getRoutes:R,resolve:k,options:t,push:L,replace:q,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:Q,install(_){const A=this;_.component("RouterLink",W_),_.component("RouterView",G_),_.config.globalProperties.$router=A,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(c)}),it&&!We&&c.value===mt&&(We=!0,L(i.location).catch(X=>{Z("Unexpected error when starting the router:",X)}));const C={};for(const X in mt)C[X]=Me(()=>c.value[X]);_.provide(Ks,A),_.provide(Pl,er(C)),_.provide(ls,c);const D=_.unmount;xe.add(_),_.unmount=function(){xe.delete(_),xe.size<1&&(l=mt,ue&&ue(),ue=null,c.value=mt,We=!1,_e=!1),D()},it&&Q_(_,A,e)}};return sn}function cn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ov(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>kt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>kt(l,c))||i.push(c))}return[n,r,i]}const av="modulepreload",cv=function(t){return"/"+t},_a={},wr=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=cv(s),s in _a)return;_a[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":av,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},lv=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Ir(t){return()=>lv(Object.assign({"../pages/About.vue":()=>wr(()=>import("./About-ecbc7726.js"),["assets/About-ecbc7726.js","assets/auth_signout-cda706aa.js"]),"../pages/Closet.vue":()=>wr(()=>import("./Closet-ef552712.js"),["assets/Closet-ef552712.js","assets/db_read_user-94eb3e49.js","assets/index.esm2017-e1f5add9.js","assets/auth_signout-cda706aa.js"]),"../pages/Home.vue":()=>wr(()=>import("./Home-b143143f.js"),["assets/Home-b143143f.js","assets/auth_signout-cda706aa.js","assets/db_read_user-94eb3e49.js","assets/index.esm2017-e1f5add9.js","assets/Home-1b23dc66.css"]),"../pages/Login.vue":()=>wr(()=>import("./Login-6ac2be3a.js"),["assets/Login-6ac2be3a.js","assets/index.esm2017-e1f5add9.js","assets/auth_signout-cda706aa.js","assets/Login-bac4bc3c.css"])}),`../pages/${t}.vue`)}const uv=[{path:"/",component:Ir("Home")},{path:"/About",component:Ir("About")},{path:"/Closet",component:Ir("Closet")},{path:"/Login",component:Ir("Login")}];var fv="firebase",dv="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(fv,dv,"app");const hv={apiKey:"AIzaSyBDevPI9maQg7zZPO4rUDHj7ZMENqdw3vE",authDomain:"closetsnap-822e7.firebaseapp.com",projectId:"closetsnap-822e7",storageBucket:"closetsnap-822e7.appspot.com",messagingSenderId:"604567787747",appId:"1:604567787747:web:173093122cebf15280cdd6"},pv=Bc(hv);yl(pv);let mv=sv({history:i_(),routes:uv});const Fl=Gd(Ng);Fl.use(mv);Fl.mount("#app");export{In as C,De as F,ce as L,ci as S,Ag as _,Ae as a,cd as b,ad as c,vv as d,dd as e,hn as f,yl as g,Iv as h,_v as i,zn as j,vn as k,xt as l,Nt as m,_p as n,Ec as o,jc as p,bv as q,kf as r,Ev as s,gv as t,wv as u,yv as v,af as w,$c as x,Tv as y};
