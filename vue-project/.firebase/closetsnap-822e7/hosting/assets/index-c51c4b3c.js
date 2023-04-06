(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function $n(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function pl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?Hy(s):pl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(we(t))return t}}const Vy=/;(?![^(]*\))/g,By=/:([^]+)/,jy=/\/\*.*?\*\//gs;function Hy(t){const e={};return t.replace(jy,"").split(Vy).forEach(n=>{if(n){const s=n.split(By);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function gl(t){let e="";if(De(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=gl(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qy="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Ky="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",zy=$n(qy),Wy=$n(Ky),Gy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qy=$n(Gy);function od(t){return!!t||t===""}const SR=t=>De(t)?t:t==null?"":K(t)||we(t)&&(t.toString===ud||!W(t.toString))?JSON.stringify(t,ad,2):String(t),ad=(t,e)=>e&&e.__v_isRef?ad(t,e.value):Jn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ld(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!K(e)&&!hd(e)?String(e):e,ve=Object.freeze({}),Ms=Object.freeze([]),ht=()=>{},cd=()=>!1,Yy=/^on[^a-z]/,ni=t=>Yy.test(t),po=t=>t.startsWith("onUpdate:"),Oe=Object.assign,ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jy=Object.prototype.hasOwnProperty,ie=(t,e)=>Jy.call(t,e),K=Array.isArray,Jn=t=>qo(t)==="[object Map]",ld=t=>qo(t)==="[object Set]",W=t=>typeof t=="function",De=t=>typeof t=="string",yl=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",vl=t=>we(t)&&W(t.then)&&W(t.catch),ud=Object.prototype.toString,qo=t=>ud.call(t),wl=t=>qo(t).slice(8,-1),hd=t=>qo(t)==="[object Object]",_l=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ji=$n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xy=$n("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zy=/-(\w)/g,jt=Ko(t=>t.replace(Zy,(e,n)=>n?n.toUpperCase():"")),ev=/\B([A-Z])/g,On=Ko(t=>t.replace(ev,"-$1").toLowerCase()),as=Ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),jn=Ko(t=>t?`on${as(t)}`:""),Or=(t,e)=>!Object.is(t,e),Ss=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},go=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},uc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qu;const fd=()=>qu||(qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hc(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Ct;class tv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}else hc("cannot run an inactive effect scope.")}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function nv(t,e=Ct){e&&e.active&&e.effects.push(t)}function sv(){return Ct}const El=t=>{const e=new Set(t);return e.w=0,e.n=0,e},dd=t=>(t.w&Dn)>0,pd=t=>(t.n&Dn)>0,rv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},iv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];dd(r)&&!pd(r)?r.delete(t):e[n++]=r,r.w&=~Dn,r.n&=~Dn}e.length=n}},fc=new WeakMap;let hr=0,Dn=1;const dc=30;let ot;const Xn=Symbol("iterate"),pc=Symbol("Map key iterate");class bl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nv(this,s)}run(){if(!this.active)return this.fn();let e=ot,n=Tn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ot,ot=this,Tn=!0,Dn=1<<++hr,hr<=dc?rv(this):Ku(this),this.fn()}finally{hr<=dc&&iv(this),Dn=1<<--hr,ot=this.parent,Tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(Ku(this),this.onStop&&this.onStop(),this.active=!1)}}function Ku(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tn=!0;const gd=[];function gs(){gd.push(Tn),Tn=!1}function ms(){const t=gd.pop();Tn=t===void 0?!0:t}function ft(t,e,n){if(Tn&&ot){let s=fc.get(t);s||fc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=El()),md(r,{effect:ot,target:t,type:e,key:n})}}function md(t,e){let n=!1;hr<=dc?pd(t)||(t.n|=Dn,n=!dd(t)):n=!t.has(ot),n&&(t.add(ot),ot.deps.push(t),ot.onTrack&&ot.onTrack(Object.assign({effect:ot},e)))}function sn(t,e,n,s,r,i){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const l=Number(s);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?_l(n)&&a.push(o.get("length")):(a.push(o.get(Xn)),Jn(t)&&a.push(o.get(pc)));break;case"delete":K(t)||(a.push(o.get(Xn)),Jn(t)&&a.push(o.get(pc)));break;case"set":Jn(t)&&a.push(o.get(Xn));break}const c={target:t,type:e,key:n,newValue:s,oldValue:r,oldTarget:i};if(a.length===1)a[0]&&gc(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);gc(El(l),c)}}function gc(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&zu(s,e);for(const s of n)s.computed||zu(s,e)}function zu(t,e){(t!==ot||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Oe({effect:t},e)),t.scheduler?t.scheduler():t.run())}const ov=$n("__proto__,__v_isRef,__isVue"),yd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yl)),av=zo(),cv=zo(!1,!0),lv=zo(!0),uv=zo(!0,!0),Wu=hv();function hv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let i=0,o=this.length;i<o;i++)ft(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gs();const s=te(this)[e].apply(this,n);return ms(),s}}),t}function fv(t){const e=te(this);return ft(e,"has",t),e.hasOwnProperty(t)}function zo(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Sd:Td:e?Id:bd).get(s))return s;const o=K(s);if(!t){if(o&&ie(Wu,r))return Reflect.get(Wu,r,i);if(r==="hasOwnProperty")return fv}const a=Reflect.get(s,r,i);return(yl(r)?yd.has(r):ov(r))||(t||ft(s,"get",r),e)?a:Fe(a)?o&&_l(r)?a:a.value:we(a)?t?Cd(a):si(a):a}}const dv=vd(),pv=vd(!0);function vd(t=!1){return function(n,s,r,i){let o=n[s];if(Nn(o)&&Fe(o)&&!Fe(r))return!1;if(!t&&(!mo(r)&&!Nn(r)&&(o=te(o),r=te(r)),!K(n)&&Fe(o)&&!Fe(r)))return o.value=r,!0;const a=K(n)&&_l(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===te(i)&&(a?Or(r,o)&&sn(n,"set",s,r,o):sn(n,"add",s,r)),c}}function gv(t,e){const n=ie(t,e),s=t[e],r=Reflect.deleteProperty(t,e);return r&&n&&sn(t,"delete",e,void 0,s),r}function mv(t,e){const n=Reflect.has(t,e);return(!yl(e)||!yd.has(e))&&ft(t,"has",e),n}function yv(t){return ft(t,"iterate",K(t)?"length":Xn),Reflect.ownKeys(t)}const wd={get:av,set:dv,deleteProperty:gv,has:mv,ownKeys:yv},_d={get:lv,set(t,e){return hc(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return hc(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},vv=Oe({},wd,{get:cv,set:pv}),wv=Oe({},_d,{get:uv}),Il=t=>t,Wo=t=>Reflect.getPrototypeOf(t);function Ni(t,e,n=!1,s=!1){t=t.__v_raw;const r=te(t),i=te(e);n||(e!==i&&ft(r,"get",e),ft(r,"get",i));const{has:o}=Wo(r),a=s?Il:n?Tl:Dr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Pi(t,e=!1){const n=this.__v_raw,s=te(n),r=te(t);return e||(t!==r&&ft(s,"has",t),ft(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function xi(t,e=!1){return t=t.__v_raw,!e&&ft(te(t),"iterate",Xn),Reflect.get(t,"size",t)}function Gu(t){t=te(t);const e=te(this);return Wo(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function Qu(t,e){e=te(e);const n=te(this),{has:s,get:r}=Wo(n);let i=s.call(n,t);i?Ed(n,s,t):(t=te(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Or(e,o)&&sn(n,"set",t,e,o):sn(n,"add",t,e),this}function Yu(t){const e=te(this),{has:n,get:s}=Wo(e);let r=n.call(e,t);r?Ed(e,n,t):(t=te(t),r=n.call(e,t));const i=s?s.call(e,t):void 0,o=e.delete(t);return r&&sn(e,"delete",t,void 0,i),o}function Ju(){const t=te(this),e=t.size!==0,n=Jn(t)?new Map(t):new Set(t),s=t.clear();return e&&sn(t,"clear",void 0,void 0,n),s}function Mi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=te(o),c=e?Il:t?Tl:Dr;return!t&&ft(a,"iterate",Xn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Li(t,e,n){return function(...s){const r=this.__v_raw,i=te(r),o=Jn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Il:e?Tl:Dr;return!e&&ft(i,"iterate",c?pc:Xn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function dn(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${as(t)} operation ${n}failed: target is readonly.`,te(this))}return t==="delete"?!1:this}}function _v(){const t={get(i){return Ni(this,i)},get size(){return xi(this)},has:Pi,add:Gu,set:Qu,delete:Yu,clear:Ju,forEach:Mi(!1,!1)},e={get(i){return Ni(this,i,!1,!0)},get size(){return xi(this)},has:Pi,add:Gu,set:Qu,delete:Yu,clear:Ju,forEach:Mi(!1,!0)},n={get(i){return Ni(this,i,!0)},get size(){return xi(this,!0)},has(i){return Pi.call(this,i,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Mi(!0,!1)},s={get(i){return Ni(this,i,!0,!0)},get size(){return xi(this,!0)},has(i){return Pi.call(this,i,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Li(i,!1,!1),n[i]=Li(i,!0,!1),e[i]=Li(i,!1,!0),s[i]=Li(i,!0,!0)}),[t,n,e,s]}const[Ev,bv,Iv,Tv]=_v();function Go(t,e){const n=e?t?Tv:Iv:t?bv:Ev;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const Sv={get:Go(!1,!1)},Cv={get:Go(!1,!0)},Av={get:Go(!0,!1)},kv={get:Go(!0,!0)};function Ed(t,e,n){const s=te(n);if(s!==n&&e.call(t,s)){const r=wl(t);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const bd=new WeakMap,Id=new WeakMap,Td=new WeakMap,Sd=new WeakMap;function Rv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ov(t){return t.__v_skip||!Object.isExtensible(t)?0:Rv(wl(t))}function si(t){return Nn(t)?t:Qo(t,!1,wd,Sv,bd)}function Dv(t){return Qo(t,!1,vv,Cv,Id)}function Cd(t){return Qo(t,!0,_d,Av,Td)}function Ns(t){return Qo(t,!0,wv,kv,Sd)}function Qo(t,e,n,s,r){if(!we(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ov(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Zn(t){return Nn(t)?Zn(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function mo(t){return!!(t&&t.__v_isShallow)}function mc(t){return Zn(t)||Nn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Ad(t){return go(t,"__v_skip",!0),t}const Dr=t=>we(t)?si(t):t,Tl=t=>we(t)?Cd(t):t;function kd(t){Tn&&ot&&(t=te(t),md(t.dep||(t.dep=El()),{target:t,type:"get",key:"value"}))}function Rd(t,e){t=te(t);const n=t.dep;n&&gc(n,{target:t,type:"set",key:"value",newValue:e})}function Fe(t){return!!(t&&t.__v_isRef===!0)}function Nv(t){return Od(t,!1)}function Pv(t){return Od(t,!0)}function Od(t,e){return Fe(t)?t:new xv(t,e)}class xv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Dr(e)}get value(){return kd(this),this._value}set value(e){const n=this.__v_isShallow||mo(e)||Nn(e);e=n?e:te(e),Or(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Dr(e),Rd(this,e))}}function Ls(t){return Fe(t)?t.value:t}const Mv={get:(t,e,n)=>Ls(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Fe(r)&&!Fe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Dd(t){return Zn(t)?t:new Proxy(t,Mv)}var Nd;class Lv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Nd]=!1,this._dirty=!0,this.effect=new bl(e,()=>{this._dirty||(this._dirty=!0,Rd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=te(this);return kd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Nd="__v_isReadonly";function $v(t,e,n=!1){let s,r;const i=W(t);i?(s=t,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=t.get,r=t.set);const o=new Lv(s,r,i||!r,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const es=[];function Xi(t){es.push(t)}function Zi(){es.pop()}function A(t,...e){gs();const n=es.length?es[es.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=Fv();if(s)en(s,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${na(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${t}`,...e];r.length&&i.push(`
`,...Uv(r)),console.warn(...i)}ms()}function Fv(){let t=es[es.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function Uv(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...Vv(n))}),e}function Vv({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,r=` at <${na(t.component,t.type,s)}`,i=">"+n;return t.props?[r,...Bv(t.props),i]:[r+i]}function Bv(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...Pd(s,t[s]))}),n.length>3&&e.push(" ..."),e}function Pd(t,e,n){return De(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Fe(e)?(e=Pd(t,te(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):W(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=te(e),n?e:[`${t}=`,e])}const Sl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function en(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Yo(i,e,n)}return r}function Et(t,e,n,s){if(W(t)){const i=en(t,e,n,s);return i&&vl(i)&&i.catch(o=>{Yo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Et(t[i],e,n,s));return r}function Yo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Sl[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){en(c,null,10,[t,o,a]);return}}jv(t,n,r,s)}function jv(t,e,n,s=!0){{const r=Sl[e];if(n&&Xi(n),A(`Unhandled error${r?` during execution of ${r}`:""}`),n&&Zi(),s)throw t;console.error(t)}}let Nr=!1,yc=!1;const Xe=[];let Lt=0;const $s=[];let xt=null,mn=0;const xd=Promise.resolve();let Cl=null;const Hv=100;function Md(t){const e=Cl||xd;return t?e.then(this?t.bind(this):t):e}function qv(t){let e=Lt+1,n=Xe.length;for(;e<n;){const s=e+n>>>1;Pr(Xe[s])<t?e=s+1:n=s}return e}function Jo(t){(!Xe.length||!Xe.includes(t,Nr&&t.allowRecurse?Lt+1:Lt))&&(t.id==null?Xe.push(t):Xe.splice(qv(t.id),0,t),Ld())}function Ld(){!Nr&&!yc&&(yc=!0,Cl=xd.then(Ud))}function Kv(t){const e=Xe.indexOf(t);e>Lt&&Xe.splice(e,1)}function $d(t){K(t)?$s.push(...t):(!xt||!xt.includes(t,t.allowRecurse?mn+1:mn))&&$s.push(t),Ld()}function Xu(t,e=Nr?Lt+1:0){for(t=t||new Map;e<Xe.length;e++){const n=Xe[e];if(n&&n.pre){if(Al(t,n))continue;Xe.splice(e,1),e--,n()}}}function Fd(t){if($s.length){const e=[...new Set($s)];if($s.length=0,xt){xt.push(...e);return}for(xt=e,t=t||new Map,xt.sort((n,s)=>Pr(n)-Pr(s)),mn=0;mn<xt.length;mn++)Al(t,xt[mn])||xt[mn]();xt=null,mn=0}}const Pr=t=>t.id==null?1/0:t.id,zv=(t,e)=>{const n=Pr(t)-Pr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ud(t){yc=!1,Nr=!0,t=t||new Map,Xe.sort(zv);const e=n=>Al(t,n);try{for(Lt=0;Lt<Xe.length;Lt++){const n=Xe[Lt];if(n&&n.active!==!1){if(e(n))continue;en(n,null,14)}}}finally{Lt=0,Xe.length=0,Fd(t),Nr=!1,Cl=null,(Xe.length||$s.length)&&Ud(t)}}function Al(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>Hv){const s=e.ownerInstance,r=s&&Ml(s.type);return A(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let ts=!1;const Cs=new Set;fd().__VUE_HMR_RUNTIME__={createRecord:xa(Vd),rerender:xa(Qv),reload:xa(Yv)};const cs=new Map;function Wv(t){const e=t.type.__hmrId;let n=cs.get(e);n||(Vd(e,t.type),n=cs.get(e)),n.instances.add(t)}function Gv(t){cs.get(t.type.__hmrId).instances.delete(t)}function Vd(t,e){return cs.has(t)?!1:(cs.set(t,{initialDef:wr(e),instances:new Set}),!0)}function wr(t){return yp(t)?t.__vccOpts:t}function Qv(t,e){const n=cs.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(s=>{e&&(s.render=e,wr(s.type).render=e),s.renderCache=[],ts=!0,s.update(),ts=!1}))}function Yv(t,e){const n=cs.get(t);if(!n)return;e=wr(e),Zu(n.initialDef,e);const s=[...n.instances];for(const r of s){const i=wr(r.type);Cs.has(i)||(i!==n.initialDef&&Zu(i,e),Cs.add(i)),r.appContext.optionsCache.delete(r.type),r.ceReload?(Cs.add(i),r.ceReload(e.styles),Cs.delete(i)):r.parent?Jo(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}$d(()=>{for(const r of s)Cs.delete(wr(r.type))})}function Zu(t,e){Oe(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function xa(t){return(e,n)=>{try{return t(e,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let $t,fr=[],vc=!1;function ri(t,...e){$t?$t.emit(t,...e):vc||fr.push({event:t,args:e})}function Bd(t,e){var n,s;$t=t,$t?($t.enabled=!0,fr.forEach(({event:r,args:i})=>$t.emit(r,...i)),fr=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Bd(i,e)}),setTimeout(()=>{$t||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,vc=!0,fr=[])},3e3)):(vc=!0,fr=[])}function Jv(t,e){ri("app:init",t,e,{Fragment:vt,Text:oi,Comment:ze,Static:so})}function Xv(t){ri("app:unmount",t)}const Zv=kl("component:added"),jd=kl("component:updated"),ew=kl("component:removed"),tw=t=>{$t&&typeof $t.cleanupBuffer=="function"&&!$t.cleanupBuffer(t)&&ew(t)};function kl(t){return e=>{ri(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const nw=Hd("perf:start"),sw=Hd("perf:end");function Hd(t){return(e,n,s)=>{ri(t,e.appContext.app,e.uid,e,n,s)}}function rw(t,e,n){ri("component:emit",t.appContext.app,t,e,n)}function iw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(jn(e)in h))&&A(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${jn(e)}" prop.`);else{const f=u[e];W(f)&&(f(...n)||A(`Invalid event arguments: event validation failed for event "${e}".`))}}let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ve;f&&(r=n.map(p=>De(p)?p.trim():p)),h&&(r=n.map(uc))}rw(t,e,r);{const u=e.toLowerCase();u!==e&&s[jn(u)]&&A(`Event "${u}" is emitted in component ${na(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${On(e)}" instead of "${e}".`)}let a,c=s[a=jn(e)]||s[a=jn(jt(e))];!c&&i&&(c=s[a=jn(On(e))]),c&&Et(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(l,t,6,r)}}function qd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=qd(l,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&s.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):Oe(o,i),we(t)&&s.set(t,o),o)}function Xo(t,e){return!t||!ni(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,On(e))||ie(t,e))}let at=null,Kd=null;function yo(t){const e=at;return at=t,Kd=t&&t.type.__scopeId||null,e}function As(t,e=at,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&fh(-1);const i=yo(e);let o;try{o=t(...r)}finally{yo(i),s._d&&fh(1)}return jd(e),o};return s._n=!0,s._c=!0,s._d=!0,s}let wc=!1;function vo(){wc=!0}function Ma(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:y,inheritAttrs:v}=t;let C,O;const N=yo(t);wc=!1;try{if(n.shapeFlag&4){const Y=r||s;C=At(u.call(Y,Y,h,i,p,f,y)),O=c}else{const Y=e;c===i&&vo(),C=At(Y.length>1?Y(i,{get attrs(){return vo(),c},slots:a,emit:l}):Y(i,null)),O=e.props?c:aw(c)}}catch(Y){Er.length=0,Yo(Y,t,1),C=Ke(ze)}let L=C,$;if(C.patchFlag>0&&C.patchFlag&2048&&([L,$]=ow(C)),O&&v!==!1){const Y=Object.keys(O),{shapeFlag:_e}=L;if(Y.length){if(_e&7)o&&Y.some(po)&&(O=cw(O,o)),L=Ht(L,O);else if(!wc&&L.type!==ze){const Re=Object.keys(c),J=[],fe=[];for(let me=0,Me=Re.length;me<Me;me++){const Ce=Re[me];ni(Ce)?po(Ce)||J.push(Ce[2].toLowerCase()+Ce.slice(3)):fe.push(Ce)}fe.length&&A(`Extraneous non-props attributes (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),J.length&&A(`Extraneous non-emits event listeners (${J.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(eh(L)||A("Runtime directive used on component with non-element root node. The directives will not function as intended."),L=Ht(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(eh(L)||A("Component inside <Transition> renders non-element root node that cannot be animated."),L.transition=n.transition),$?$(L):C=L,yo(N),C}const ow=t=>{const e=t.children,n=t.dynamicChildren,s=zd(e);if(!s)return[t,void 0];const r=e.indexOf(s),i=n?n.indexOf(s):-1,o=a=>{e[r]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[At(s),o]};function zd(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Mr(s)){if(s.type!==ze||s.children==="v-if"){if(e)return;e=s}}else return}return e}const aw=t=>{let e;for(const n in t)(n==="class"||n==="style"||ni(n))&&((e||(e={}))[n]=t[n]);return e},cw=(t,e)=>{const n={};for(const s in t)(!po(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n},eh=t=>t.shapeFlag&7||t.type===ze;function lw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((r||a)&&ts||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?th(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Xo(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?th(s,o,l):!0:!!o;return!1}function th(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Xo(n,i))return!0}return!1}function uw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hw=t=>t.__isSuspense;function fw(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):$d(t)}function eo(t,e){if(!Ae)A("provide() can only be used inside setup().");else{let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function tn(t,e,n=!1){const s=Ae||at;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e;A(`injection "${String(t)}" not found.`)}else A("inject() can only be used inside setup() or functional components.")}function dw(t,e){return Rl(t,null,e)}const $i={};function _r(t,e,n){return W(e)||A("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Rl(t,e,n)}function Rl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){e||(n!==void 0&&A('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&A('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=$=>{A("Invalid watch source: ",$,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=sv()===(Ae==null?void 0:Ae.scope)?Ae:null;let l,u=!1,h=!1;if(Fe(t)?(l=()=>t.value,u=mo(t)):Zn(t)?(l=()=>t,s=!0):K(t)?(h=!0,u=t.some($=>Zn($)||mo($)),l=()=>t.map($=>{if(Fe($))return $.value;if(Zn($))return Wn($);if(W($))return en($,c,2);a($)})):W(t)?e?l=()=>en(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Et(t,c,3,[p])}:(l=ht,a(t)),e&&s){const $=l;l=()=>Wn($())}let f,p=$=>{f=N.onStop=()=>{en($,c,4)}},y;if(Lr)if(p=ht,e?n&&Et(e,c,3,[l(),h?[]:void 0,p]):l(),r==="sync"){const $=w_();y=$.__watcherHandles||($.__watcherHandles=[])}else return ht;let v=h?new Array(t.length).fill($i):$i;const C=()=>{if(N.active)if(e){const $=N.run();(s||u||(h?$.some((Y,_e)=>Or(Y,v[_e])):Or($,v)))&&(f&&f(),Et(e,c,3,[$,v===$i?void 0:h&&v[0]===$i?[]:v,p]),v=$)}else N.run()};C.allowRecurse=!!e;let O;r==="sync"?O=C:r==="post"?O=()=>ut(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),O=()=>Jo(C));const N=new bl(l,O);N.onTrack=i,N.onTrigger=o,e?n?C():v=N.run():r==="post"?ut(N.run.bind(N),c&&c.suspense):N.run();const L=()=>{N.stop(),c&&c.scope&&ml(c.scope.effects,N)};return y&&y.push(L),L}function pw(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?Wd(s,t):()=>s[t]:t.bind(s,s);let i;W(e)?i=e:(i=e.handler,n=e);const o=Ae;js(this);const a=Rl(r,i.bind(s),n);return o?js(o):ss(),a}function Wd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Wn(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Fe(t))Wn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Wn(t[n],e);else if(ld(t)||Jn(t))t.forEach(n=>{Wn(n,e)});else if(hd(t))for(const n in t)Wn(t[n],e);return t}function gw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xd(()=>{t.isMounted=!0}),Zd(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],mw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},setup(t,{slots:e}){const n=xl(),s=gw();let r;return()=>{const i=e.default&&Qd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){let v=!1;for(const C of i)if(C.type!==ze){if(v){A("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}o=C,v=!0}}const a=te(t),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&A(`invalid <transition> mode: ${c}`),s.isLeaving)return La(o);const l=nh(o);if(!l)return La(o);const u=_c(l,a,s,n);Ec(l,u);const h=n.subTree,f=h&&nh(h);let p=!1;const{getTransitionKey:y}=l.type;if(y){const v=y();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(f&&f.type!==ze&&(!Kn(l,f)||p)){const v=_c(f,a,s,n);if(Ec(f,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},La(o);c==="in-out"&&l.type!==ze&&(v.delayLeave=(C,O,N)=>{const L=Gd(s,f);L[String(f.key)]=f,C._leaveCb=()=>{O(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},yw=mw;function Gd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function _c(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:v,onAppear:C,onAfterAppear:O,onAppearCancelled:N}=e,L=String(t.key),$=Gd(n,t),Y=(J,fe)=>{J&&Et(J,s,9,fe)},_e=(J,fe)=>{const me=fe[1];Y(J,fe),K(J)?J.every(Me=>Me.length<=1)&&me():J.length<=1&&me()},Re={mode:i,persisted:o,beforeEnter(J){let fe=a;if(!n.isMounted)if(r)fe=v||a;else return;J._leaveCb&&J._leaveCb(!0);const me=$[L];me&&Kn(t,me)&&me.el._leaveCb&&me.el._leaveCb(),Y(fe,[J])},enter(J){let fe=c,me=l,Me=u;if(!n.isMounted)if(r)fe=C||c,me=O||l,Me=N||u;else return;let Ce=!1;const It=J._enterCb=fn=>{Ce||(Ce=!0,fn?Y(Me,[J]):Y(me,[J]),Re.delayedLeave&&Re.delayedLeave(),J._enterCb=void 0)};fe?_e(fe,[J,It]):It()},leave(J,fe){const me=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return fe();Y(h,[J]);let Me=!1;const Ce=J._leaveCb=It=>{Me||(Me=!0,fe(),It?Y(y,[J]):Y(p,[J]),J._leaveCb=void 0,$[me]===t&&delete $[me])};$[me]=t,f?_e(f,[J,Ce]):Ce()},clone(J){return _c(J,e,n,s)}};return Re}function La(t){if(ii(t))return t=Ht(t),t.children=null,t}function nh(t){return ii(t)?t.children?t.children[0]:void 0:t}function Ec(t,e){t.shapeFlag&6&&t.component?Ec(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===vt?(o.patchFlag&128&&r++,s=s.concat(Qd(o.children,e,a))):(e||o.type!==ze)&&s.push(a!=null?Ht(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Yd(t){return W(t)?{setup:t,name:t.name}:t}const to=t=>!!t.type.__asyncLoader,ii=t=>t.type.__isKeepAlive;function vw(t,e){Jd(t,"a",e)}function ww(t,e){Jd(t,"da",e)}function Jd(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Zo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ii(r.parent.vnode)&&_w(s,e,n,r),r=r.parent}}function _w(t,e,n,s){const r=Zo(e,t,s,!0);ep(()=>{ml(s[e],r)},n)}function Zo(t,e,n=Ae,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gs(),js(n);const a=Et(e,n,t,o);return ss(),ms(),a});return s?r.unshift(i):r.push(i),i}else{const r=jn(Sl[t].replace(/ hook$/,""));A(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const un=t=>(e,n=Ae)=>(!Lr||t==="sp")&&Zo(t,(...s)=>e(...s),n),Ew=un("bm"),Xd=un("m"),bw=un("bu"),Iw=un("u"),Zd=un("bum"),ep=un("um"),Tw=un("sp"),Sw=un("rtg"),Cw=un("rtc");function Aw(t,e=Ae){Zo("ec",t,e)}function tp(t){Xy(t)&&A("Do not use built-in directive ids as custom directive id: "+t)}function CR(t,e){const n=at;if(n===null)return A("withDirectives can only be used inside render functions."),t;const s=ta(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ve]=e[i];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&Wn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Vn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(gs(),Et(c,n,8,[t.el,a,t,e]),ms())}}const bc="components";function sh(t,e){return Rw(bc,t,!0,e)||t}const kw=Symbol();function Rw(t,e,n=!0,s=!1){const r=at||Ae;if(r){const i=r.type;if(t===bc){const a=Ml(i,!1);if(a&&(a===e||a===jt(e)||a===as(jt(e))))return i}const o=rh(r[t]||i[t],e)||rh(r.appContext[t],e);if(!o&&s)return i;if(n&&!o){const a=t===bc?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";A(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else A(`resolve${as(t.slice(0,-1))} can only be used in render() or setup().`)}function rh(t,e){return t&&(t[e]||t[jt(e)]||t[as(jt(e))])}const Ic=t=>t?pp(t)?ta(t)||t.proxy:Ic(t.parent):null,ns=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>Ns(t.props),$attrs:t=>Ns(t.attrs),$slots:t=>Ns(t.slots),$refs:t=>Ns(t.refs),$parent:t=>Ic(t.parent),$root:t=>Ic(t.root),$emit:t=>t.emit,$options:t=>Dl(t),$forceUpdate:t=>t.f||(t.f=()=>Jo(t.update)),$nextTick:t=>t.n||(t.n=Md.bind(t.proxy)),$watch:t=>pw.bind(t)}),Ol=t=>t==="_"||t==="$",$a=(t,e)=>t!==ve&&!t.__isScriptSetup&&ie(t,e),np={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if($a(s,e))return o[e]=1,s[e];if(r!==ve&&ie(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];Tc&&(o[e]=0)}}const u=ns[e];let h,f;if(u)return e==="$attrs"&&(ft(t,"get",e),vo()),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e];at&&(!De(e)||e.indexOf("__v")!==0)&&(r!==ve&&Ol(e[0])&&ie(r,e)?A(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===at&&A(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return $a(r,e)?(r[e]=n,!0):r.__isScriptSetup&&ie(r,e)?(A(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):s!==ve&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)?(A(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(A(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||$a(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(ns,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};np.ownKeys=t=>(A("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Ow(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(ns).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>ns[n](t),set:ht})}),e}function Dw(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(s=>{Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>t.props[s],set:ht})})}function Nw(t){const{ctx:e,setupState:n}=t;Object.keys(te(n)).forEach(s=>{if(!n.__isScriptSetup){if(Ol(s[0])){A(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:ht})}})}function Pw(){const t=Object.create(null);return(e,n)=>{t[n]?A(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Tc=!0;function xw(t){const e=Dl(t),n=t.proxy,s=t.ctx;Tc=!1,e.beforeCreate&&ih(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:y,activated:v,deactivated:C,beforeDestroy:O,beforeUnmount:N,destroyed:L,unmounted:$,render:Y,renderTracked:_e,renderTriggered:Re,errorCaptured:J,serverPrefetch:fe,expose:me,inheritAttrs:Me,components:Ce,directives:It,filters:fn}=e,Tt=Pw();{const[re]=t.propsOptions;if(re)for(const ce in re)Tt("Props",ce)}if(l&&Mw(l,s,Tt,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const ce=o[re];W(ce)?(Object.defineProperty(s,re,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),Tt("Methods",re)):A(`Method "${re}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(r){W(r)||A("The data option must be a function. Plain object usage is no longer supported.");const re=r.call(n,n);if(vl(re)&&A("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!we(re))A("data() should return an object.");else{t.data=si(re);for(const ce in re)Tt("Data",ce),Ol(ce[0])||Object.defineProperty(s,ce,{configurable:!0,enumerable:!0,get:()=>re[ce],set:ht})}}if(Tc=!0,i)for(const re in i){const ce=i[re],lt=W(ce)?ce.bind(n,n):W(ce.get)?ce.get.bind(n,n):ht;lt===ht&&A(`Computed property "${re}" has no getter.`);const _s=!W(ce)&&W(ce.set)?ce.set.bind(n):()=>{A(`Write operation failed: computed property "${re}" is readonly.`)},zt=wt({get:lt,set:_s});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>zt.value,set:Dt=>zt.value=Dt}),Tt("Computed",re)}if(a)for(const re in a)sp(a[re],s,n,re);if(c){const re=W(c)?c.call(n):c;Reflect.ownKeys(re).forEach(ce=>{eo(ce,re[ce])})}u&&ih(u,t,"c");function Le(re,ce){K(ce)?ce.forEach(lt=>re(lt.bind(n))):ce&&re(ce.bind(n))}if(Le(Ew,h),Le(Xd,f),Le(bw,p),Le(Iw,y),Le(vw,v),Le(ww,C),Le(Aw,J),Le(Cw,_e),Le(Sw,Re),Le(Zd,N),Le(ep,$),Le(Tw,fe),K(me))if(me.length){const re=t.exposed||(t.exposed={});me.forEach(ce=>{Object.defineProperty(re,ce,{get:()=>n[ce],set:lt=>n[ce]=lt})})}else t.exposed||(t.exposed={});Y&&t.render===ht&&(t.render=Y),Me!=null&&(t.inheritAttrs=Me),Ce&&(t.components=Ce),It&&(t.directives=It)}function Mw(t,e,n=ht,s=!1){K(t)&&(t=Sc(t));for(const r in t){const i=t[r];let o;we(i)?"default"in i?o=tn(i.from||r,i.default,!0):o=tn(i.from||r):o=tn(i),Fe(o)?s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):(A(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),e[r]=o):e[r]=o,n("Inject",r)}}function ih(t,e,n){Et(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sp(t,e,n,s){const r=s.includes(".")?Wd(n,s):()=>n[s];if(De(t)){const i=e[t];W(i)?_r(r,i):A(`Invalid watch handler specified by key "${t}"`,i)}else if(W(t))_r(r,t.bind(n));else if(we(t))if(K(t))t.forEach(i=>sp(i,e,n,s));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)?_r(r,i,t):A(`Invalid watch handler specified by key "${t.handler}"`,i)}else A(`Invalid watch option: "${s}"`,t)}function Dl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>wo(c,l,o,!0)),wo(c,e,o)),we(e)&&i.set(e,c),c}function wo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&wo(t,i,n,!0),r&&r.forEach(o=>wo(t,o,n,!0));for(const o in e)if(s&&o==="expose")A('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Lw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lw={data:oh,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Hn,directives:Hn,watch:Fw,provide:oh,inject:$w};function oh(t,e){return e?t?function(){return Oe(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function $w(t,e){return Hn(Sc(t),Sc(e))}function Sc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function Fw(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function Uw(t,e,n,s=!1){const r={},i={};go(i,ea,1),t.propsDefaults=Object.create(null),rp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);op(e||{},r,t),n?t.props=s?r:Dv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Vw(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Bw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=te(r),[c]=t.propsOptions;let l=!1;if(!Vw(t)&&(s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Xo(t.emitsOptions,f))continue;const p=e[f];if(c)if(ie(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const y=jt(f);r[y]=Cc(c,a,y,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{rp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=On(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Cc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&sn(t,"set","$attrs"),op(e||{},r,t)}function rp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ji(c))continue;const l=e[c];let u;r&&ie(r,u=jt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Xo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=te(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Cc(r,c,h,l[h],t,!ie(l,h))}}return o}function Cc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(js(r),s=l[n]=c.call(null,e),ss())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===On(n))&&(s=!0))}return s}function ip(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=h=>{c=!0;const[f,p]=ip(h,e,!0);Oe(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&s.set(t,Ms),Ms;if(K(i))for(let u=0;u<i.length;u++){De(i[u])||A("props must be strings when using array syntax.",i[u]);const h=jt(i[u]);ah(h)&&(o[h]=ve)}else if(i){we(i)||A("invalid props options",i);for(const u in i){const h=jt(u);if(ah(h)){const f=i[u],p=o[h]=K(f)||W(f)?{type:f}:Object.assign({},f);if(p){const y=lh(Boolean,p.type),v=lh(String,p.type);p[0]=y>-1,p[1]=v<0||y<v,(y>-1||ie(p,"default"))&&a.push(h)}}}}const l=[o,a];return we(t)&&s.set(t,l),l}function ah(t){return t[0]!=="$"?!0:(A(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Ac(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ch(t,e){return Ac(t)===Ac(e)}function lh(t,e){return K(e)?e.findIndex(n=>ch(n,t)):W(e)&&ch(e,t)?0:-1}function op(t,e,n){const s=te(e),r=n.propsOptions[0];for(const i in r){let o=r[i];o!=null&&jw(i,s[i],o,!ie(t,i)&&!ie(t,On(i)))}}function jw(t,e,n,s){const{type:r,required:i,validator:o}=n;if(i&&s){A('Missing required prop: "'+t+'"');return}if(!(e==null&&!n.required)){if(r!=null&&r!==!0){let a=!1;const c=K(r)?r:[r],l=[];for(let u=0;u<c.length&&!a;u++){const{valid:h,expectedType:f}=qw(e,c[u]);l.push(f||""),a=h}if(!a){A(Kw(t,e,l));return}}o&&!o(e)&&A('Invalid prop: custom validator check failed for prop "'+t+'".')}}const Hw=$n("String,Number,Boolean,Function,Symbol,BigInt");function qw(t,e){let n;const s=Ac(e);if(Hw(s)){const r=typeof t;n=r===s.toLowerCase(),!n&&r==="object"&&(n=t instanceof e)}else s==="Object"?n=we(t):s==="Array"?n=K(t):s==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:s}}function Kw(t,e,n){let s=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(as).join(" | ")}`;const r=n[0],i=wl(e),o=uh(e,r),a=uh(e,i);return n.length===1&&hh(r)&&!zw(r,i)&&(s+=` with value ${o}`),s+=`, got ${i} `,hh(i)&&(s+=`with value ${a}.`),s}function uh(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function hh(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function zw(...t){return t.some(e=>e.toLowerCase()==="boolean")}const ap=t=>t[0]==="_"||t==="$stable",Nl=t=>K(t)?t.map(At):[At(t)],Ww=(t,e,n)=>{if(e._n)return e;const s=As((...r)=>(Ae&&A(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Nl(e(...r))),n);return s._c=!1,s},cp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ap(r))continue;const i=t[r];if(W(i))e[r]=Ww(r,i,s);else if(i!=null){A(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const o=Nl(i);e[r]=()=>o}}},lp=(t,e)=>{ii(t.vnode)||A("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Nl(e);t.slots.default=()=>n},Gw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),go(e,"_",n)):cp(e,t.slots={})}else t.slots={},e&&lp(t,e);go(t.slots,ea,1)},Qw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?ts?Oe(r,e):n&&a===1?i=!1:(Oe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,cp(e,r)),o=e}else e&&(lp(t,e),o={default:1});if(i)for(const a in r)!ap(a)&&!(a in o)&&delete r[a]};function up(){return{app:null,config:{isNativeTag:cd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yw=0;function Jw(t,e){return function(s,r=null){W(s)||(s=Object.assign({},s)),r!=null&&!we(r)&&(A("root props passed to app.mount() must be an object."),r=null);const i=up(),o=new Set;let a=!1;const c=i.app={_uid:Yw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:gh,get config(){return i.config},set config(l){A("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?A("Plugin has already been applied to target app."):l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)?(o.add(l),l(c,...u)):A('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?A("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return Oc(l,i.config),u?(i.components[l]&&A(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return tp(l),u?(i.directives[l]&&A(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)A("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&A("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=Ke(s,r);return f.appContext=i,i.reload=()=>{t(Ht(f),l,h)},u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=f.component,Jv(c,gh),ta(f.component)||f.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,Xv(c),delete c._container.__vue_app__):A("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&A(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c}};return c}}function kc(t,e,n,s,r=!1){if(K(t)){t.forEach((f,p)=>kc(f,e&&(K(e)?e[p]:e),n,s,r));return}if(to(s)&&!r)return;const i=s.shapeFlag&4?ta(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t;if(!a){A("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Fe(l)&&(l.value=null)),W(c))en(c,a,12,[o,u]);else{const f=De(c),p=Fe(c);if(f||p){const y=()=>{if(t.f){const v=f?ie(h,c)?h[c]:u[c]:c.value;r?K(v)&&ml(v,i):K(v)?v.includes(i)||v.push(i):f?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):A("Invalid template ref type:",c,`(${typeof c})`)};o?(y.id=-1,ut(y,n)):y()}else A("Invalid template ref type:",c,`(${typeof c})`)}}let ar,wn;function Gt(t,e){t.appContext.config.performance&&_o()&&wn.mark(`vue-${e}-${t.uid}`),nw(t,e,_o()?wn.now():Date.now())}function Qt(t,e){if(t.appContext.config.performance&&_o()){const n=`vue-${e}-${t.uid}`,s=n+":end";wn.mark(s),wn.measure(`<${na(t,t.type)}> ${e}`,n,s),wn.clearMarks(n),wn.clearMarks(s)}sw(t,e,_o()?wn.now():Date.now())}function _o(){return ar!==void 0||(typeof window<"u"&&window.performance?(ar=!0,wn=window.performance):ar=!1),ar}function Xw(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const ut=fw;function Zw(t){return e_(t)}function e_(t,e){Xw();const n=fd();n.__VUE__=!0,Bd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=ht,insertStaticContent:y}=t,v=(d,g,m,E=null,_=null,k=null,P=!1,S=null,R=ts?!1:!!g.dynamicChildren)=>{if(d===g)return;d&&!Kn(d,g)&&(E=F(d),mt(d,_,k,!0),d=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:b,ref:B,shapeFlag:M}=g;switch(b){case oi:C(d,g,m,E);break;case ze:O(d,g,m,E);break;case so:d==null?N(g,m,E,P):L(d,g,m,P);break;case vt:It(d,g,m,E,_,k,P,S,R);break;default:M&1?_e(d,g,m,E,_,k,P,S,R):M&6?fn(d,g,m,E,_,k,P,S,R):M&64||M&128?b.process(d,g,m,E,_,k,P,S,R,be):A("Invalid VNode type:",b,`(${typeof b})`)}B!=null&&_&&kc(B,d&&d.ref,k,g||d,!g)},C=(d,g,m,E)=>{if(d==null)s(g.el=a(g.children),m,E);else{const _=g.el=d.el;g.children!==d.children&&l(_,g.children)}},O=(d,g,m,E)=>{d==null?s(g.el=c(g.children||""),m,E):g.el=d.el},N=(d,g,m,E)=>{[d.el,d.anchor]=y(d.children,g,m,E,d.el,d.anchor)},L=(d,g,m,E)=>{if(g.children!==d.children){const _=f(d.anchor);Y(d),[g.el,g.anchor]=y(g.children,m,_,E)}else g.el=d.el,g.anchor=d.anchor},$=({el:d,anchor:g},m,E)=>{let _;for(;d&&d!==g;)_=f(d),s(d,m,E),d=_;s(g,m,E)},Y=({el:d,anchor:g})=>{let m;for(;d&&d!==g;)m=f(d),r(d),d=m;r(g)},_e=(d,g,m,E,_,k,P,S,R)=>{P=P||g.type==="svg",d==null?Re(g,m,E,_,k,P,S,R):me(d,g,_,k,P,S,R)},Re=(d,g,m,E,_,k,P,S)=>{let R,b;const{type:B,props:M,shapeFlag:j,transition:X,dirs:oe}=d;if(R=d.el=o(d.type,k,M&&M.is,M),j&8?u(R,d.children):j&16&&fe(d.children,R,null,E,_,k&&B!=="foreignObject",P,S),oe&&Vn(d,null,E,"created"),J(R,d,d.scopeId,P,E),M){for(const ye in M)ye!=="value"&&!Ji(ye)&&i(R,ye,null,M[ye],k,d.children,E,_,D);"value"in M&&i(R,"value",null,M.value),(b=M.onVnodeBeforeMount)&&Pt(b,E,d)}Object.defineProperty(R,"__vnode",{value:d,enumerable:!1}),Object.defineProperty(R,"__vueParentComponent",{value:E,enumerable:!1}),oe&&Vn(d,null,E,"beforeMount");const Ee=(!_||_&&!_.pendingBranch)&&X&&!X.persisted;Ee&&X.beforeEnter(R),s(R,g,m),((b=M&&M.onVnodeMounted)||Ee||oe)&&ut(()=>{b&&Pt(b,E,d),Ee&&X.enter(R),oe&&Vn(d,null,E,"mounted")},_)},J=(d,g,m,E,_)=>{if(m&&p(d,m),E)for(let k=0;k<E.length;k++)p(d,E[k]);if(_){let k=_.subTree;if(k.patchFlag>0&&k.patchFlag&2048&&(k=zd(k.children)||k),g===k){const P=_.vnode;J(d,P,P.scopeId,P.slotScopeIds,_.parent)}}},fe=(d,g,m,E,_,k,P,S,R=0)=>{for(let b=R;b<d.length;b++){const B=d[b]=S?yn(d[b]):At(d[b]);v(null,B,g,m,E,_,k,P,S)}},me=(d,g,m,E,_,k,P)=>{const S=g.el=d.el;let{patchFlag:R,dynamicChildren:b,dirs:B}=g;R|=d.patchFlag&16;const M=d.props||ve,j=g.props||ve;let X;m&&Bn(m,!1),(X=j.onVnodeBeforeUpdate)&&Pt(X,m,g,d),B&&Vn(g,d,m,"beforeUpdate"),m&&Bn(m,!0),ts&&(R=0,P=!1,b=null);const oe=_&&g.type!=="foreignObject";if(b?(Me(d.dynamicChildren,b,S,m,E,oe,k),m&&m.type.__hmrId&&no(d,g)):P||lt(d,g,S,null,m,E,oe,k,!1),R>0){if(R&16)Ce(S,g,M,j,m,E,_);else if(R&2&&M.class!==j.class&&i(S,"class",null,j.class,_),R&4&&i(S,"style",M.style,j.style,_),R&8){const Ee=g.dynamicProps;for(let ye=0;ye<Ee.length;ye++){const Ne=Ee[ye],St=M[Ne],bs=j[Ne];(bs!==St||Ne==="value")&&i(S,Ne,St,bs,_,d.children,m,E,D)}}R&1&&d.children!==g.children&&u(S,g.children)}else!P&&b==null&&Ce(S,g,M,j,m,E,_);((X=j.onVnodeUpdated)||B)&&ut(()=>{X&&Pt(X,m,g,d),B&&Vn(g,d,m,"updated")},E)},Me=(d,g,m,E,_,k,P)=>{for(let S=0;S<g.length;S++){const R=d[S],b=g[S],B=R.el&&(R.type===vt||!Kn(R,b)||R.shapeFlag&70)?h(R.el):m;v(R,b,B,null,E,_,k,P,!0)}},Ce=(d,g,m,E,_,k,P)=>{if(m!==E){if(m!==ve)for(const S in m)!Ji(S)&&!(S in E)&&i(d,S,m[S],null,P,g.children,_,k,D);for(const S in E){if(Ji(S))continue;const R=E[S],b=m[S];R!==b&&S!=="value"&&i(d,S,b,R,P,g.children,_,k,D)}"value"in E&&i(d,"value",m.value,E.value)}},It=(d,g,m,E,_,k,P,S,R)=>{const b=g.el=d?d.el:a(""),B=g.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:X}=g;(ts||M&2048)&&(M=0,R=!1,j=null),X&&(S=S?S.concat(X):X),d==null?(s(b,m,E),s(B,m,E),fe(g.children,m,B,_,k,P,S,R)):M>0&&M&64&&j&&d.dynamicChildren?(Me(d.dynamicChildren,j,m,_,k,P,S),_&&_.type.__hmrId?no(d,g):(g.key!=null||_&&g===_.subTree)&&no(d,g,!0)):lt(d,g,m,B,_,k,P,S,R)},fn=(d,g,m,E,_,k,P,S,R)=>{g.slotScopeIds=S,d==null?g.shapeFlag&512?_.ctx.activate(g,m,E,P,R):Tt(g,m,E,_,k,P,R):Le(d,g,R)},Tt=(d,g,m,E,_,k,P)=>{const S=d.component=u_(d,E,_);if(S.type.__hmrId&&Wv(S),Xi(d),Gt(S,"mount"),ii(d)&&(S.ctx.renderer=be),Gt(S,"init"),f_(S),Qt(S,"init"),S.asyncDep){if(_&&_.registerDep(S,re),!d.el){const R=S.subTree=Ke(ze);O(null,R,g,m)}return}re(S,d,g,m,_,k,P),Zi(),Qt(S,"mount")},Le=(d,g,m)=>{const E=g.component=d.component;if(lw(d,g,m))if(E.asyncDep&&!E.asyncResolved){Xi(g),ce(E,g,m),Zi();return}else E.next=g,Kv(E.update),E.update();else g.el=d.el,E.vnode=g},re=(d,g,m,E,_,k,P)=>{const S=()=>{if(d.isMounted){let{next:B,bu:M,u:j,parent:X,vnode:oe}=d,Ee=B,ye;Xi(B||d.vnode),Bn(d,!1),B?(B.el=oe.el,ce(d,B,P)):B=oe,M&&Ss(M),(ye=B.props&&B.props.onVnodeBeforeUpdate)&&Pt(ye,X,B,oe),Bn(d,!0),Gt(d,"render");const Ne=Ma(d);Qt(d,"render");const St=d.subTree;d.subTree=Ne,Gt(d,"patch"),v(St,Ne,h(St.el),F(St),d,_,k),Qt(d,"patch"),B.el=Ne.el,Ee===null&&uw(d,Ne.el),j&&ut(j,_),(ye=B.props&&B.props.onVnodeUpdated)&&ut(()=>Pt(ye,X,B,oe),_),jd(d),Zi()}else{let B;const{el:M,props:j}=g,{bm:X,m:oe,parent:Ee}=d,ye=to(g);if(Bn(d,!1),X&&Ss(X),!ye&&(B=j&&j.onVnodeBeforeMount)&&Pt(B,Ee,g),Bn(d,!0),M&&ee){const Ne=()=>{Gt(d,"render"),d.subTree=Ma(d),Qt(d,"render"),Gt(d,"hydrate"),ee(M,d.subTree,d,_,null),Qt(d,"hydrate")};ye?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ne()):Ne()}else{Gt(d,"render");const Ne=d.subTree=Ma(d);Qt(d,"render"),Gt(d,"patch"),v(null,Ne,m,E,d,_,k),Qt(d,"patch"),g.el=Ne.el}if(oe&&ut(oe,_),!ye&&(B=j&&j.onVnodeMounted)){const Ne=g;ut(()=>Pt(B,Ee,Ne),_)}(g.shapeFlag&256||Ee&&to(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&d.a&&ut(d.a,_),d.isMounted=!0,Zv(d),g=m=E=null}},R=d.effect=new bl(S,()=>Jo(b),d.scope),b=d.update=()=>R.run();b.id=d.uid,Bn(d,!0),R.onTrack=d.rtc?B=>Ss(d.rtc,B):void 0,R.onTrigger=d.rtg?B=>Ss(d.rtg,B):void 0,b.ownerInstance=d,b()},ce=(d,g,m)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,Bw(d,g.props,E,m),Qw(d,g.children,m),gs(),Xu(),ms()},lt=(d,g,m,E,_,k,P,S,R=!1)=>{const b=d&&d.children,B=d?d.shapeFlag:0,M=g.children,{patchFlag:j,shapeFlag:X}=g;if(j>0){if(j&128){zt(b,M,m,E,_,k,P,S,R);return}else if(j&256){_s(b,M,m,E,_,k,P,S,R);return}}X&8?(B&16&&D(b,_,k),M!==b&&u(m,M)):B&16?X&16?zt(b,M,m,E,_,k,P,S,R):D(b,_,k,!0):(B&8&&u(m,""),X&16&&fe(M,m,E,_,k,P,S,R))},_s=(d,g,m,E,_,k,P,S,R)=>{d=d||Ms,g=g||Ms;const b=d.length,B=g.length,M=Math.min(b,B);let j;for(j=0;j<M;j++){const X=g[j]=R?yn(g[j]):At(g[j]);v(d[j],X,m,null,_,k,P,S,R)}b>B?D(d,_,k,!0,!1,M):fe(g,m,E,_,k,P,S,R,M)},zt=(d,g,m,E,_,k,P,S,R)=>{let b=0;const B=g.length;let M=d.length-1,j=B-1;for(;b<=M&&b<=j;){const X=d[b],oe=g[b]=R?yn(g[b]):At(g[b]);if(Kn(X,oe))v(X,oe,m,null,_,k,P,S,R);else break;b++}for(;b<=M&&b<=j;){const X=d[M],oe=g[j]=R?yn(g[j]):At(g[j]);if(Kn(X,oe))v(X,oe,m,null,_,k,P,S,R);else break;M--,j--}if(b>M){if(b<=j){const X=j+1,oe=X<B?g[X].el:E;for(;b<=j;)v(null,g[b]=R?yn(g[b]):At(g[b]),m,oe,_,k,P,S,R),b++}}else if(b>j)for(;b<=M;)mt(d[b],_,k,!0),b++;else{const X=b,oe=b,Ee=new Map;for(b=oe;b<=j;b++){const rt=g[b]=R?yn(g[b]):At(g[b]);rt.key!=null&&(Ee.has(rt.key)&&A("Duplicate keys found during update:",JSON.stringify(rt.key),"Make sure keys are unique."),Ee.set(rt.key,b))}let ye,Ne=0;const St=j-oe+1;let bs=!1,Bu=0;const or=new Array(St);for(b=0;b<St;b++)or[b]=0;for(b=X;b<=M;b++){const rt=d[b];if(Ne>=St){mt(rt,_,k,!0);continue}let Nt;if(rt.key!=null)Nt=Ee.get(rt.key);else for(ye=oe;ye<=j;ye++)if(or[ye-oe]===0&&Kn(rt,g[ye])){Nt=ye;break}Nt===void 0?mt(rt,_,k,!0):(or[Nt-oe]=b+1,Nt>=Bu?Bu=Nt:bs=!0,v(rt,g[Nt],m,null,_,k,P,S,R),Ne++)}const ju=bs?t_(or):Ms;for(ye=ju.length-1,b=St-1;b>=0;b--){const rt=oe+b,Nt=g[rt],Hu=rt+1<B?g[rt+1].el:E;or[b]===0?v(null,Nt,m,Hu,_,k,P,S,R):bs&&(ye<0||b!==ju[ye]?Dt(Nt,m,Hu,2):ye--)}}},Dt=(d,g,m,E,_=null)=>{const{el:k,type:P,transition:S,children:R,shapeFlag:b}=d;if(b&6){Dt(d.component.subTree,g,m,E);return}if(b&128){d.suspense.move(g,m,E);return}if(b&64){P.move(d,g,m,be);return}if(P===vt){s(k,g,m);for(let M=0;M<R.length;M++)Dt(R[M],g,m,E);s(d.anchor,g,m);return}if(P===so){$(d,g,m);return}if(E!==2&&b&1&&S)if(E===0)S.beforeEnter(k),s(k,g,m),ut(()=>S.enter(k),_);else{const{leave:M,delayLeave:j,afterLeave:X}=S,oe=()=>s(k,g,m),Ee=()=>{M(k,()=>{oe(),X&&X()})};j?j(k,oe,Ee):Ee()}else s(k,g,m)},mt=(d,g,m,E=!1,_=!1)=>{const{type:k,props:P,ref:S,children:R,dynamicChildren:b,shapeFlag:B,patchFlag:M,dirs:j}=d;if(S!=null&&kc(S,null,m,d,!0),B&256){g.ctx.deactivate(d);return}const X=B&1&&j,oe=!to(d);let Ee;if(oe&&(Ee=P&&P.onVnodeBeforeUnmount)&&Pt(Ee,g,d),B&6)x(d.component,m,E);else{if(B&128){d.suspense.unmount(m,E);return}X&&Vn(d,null,g,"beforeUnmount"),B&64?d.type.remove(d,g,m,_,be,E):b&&(k!==vt||M>0&&M&64)?D(b,g,m,!1,!0):(k===vt&&M&384||!_&&B&16)&&D(R,g,m),E&&Es(d)}(oe&&(Ee=P&&P.onVnodeUnmounted)||X)&&ut(()=>{Ee&&Pt(Ee,g,d),X&&Vn(d,null,g,"unmounted")},m)},Es=d=>{const{type:g,el:m,anchor:E,transition:_}=d;if(g===vt){d.patchFlag>0&&d.patchFlag&2048&&_&&!_.persisted?d.children.forEach(P=>{P.type===ze?r(P.el):Es(P)}):w(m,E);return}if(g===so){Y(d);return}const k=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:P,delayLeave:S}=_,R=()=>P(m,k);S?S(d.el,k,R):R()}else k()},w=(d,g)=>{let m;for(;d!==g;)m=f(d),r(d),d=m;r(g)},x=(d,g,m)=>{d.type.__hmrId&&Gv(d);const{bum:E,scope:_,update:k,subTree:P,um:S}=d;E&&Ss(E),_.stop(),k&&(k.active=!1,mt(P,d,g,m)),S&&ut(S,g),ut(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),tw(d)},D=(d,g,m,E=!1,_=!1,k=0)=>{for(let P=k;P<d.length;P++)mt(d[P],g,m,E,_)},F=d=>d.shapeFlag&6?F(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),le=(d,g,m)=>{d==null?g._vnode&&mt(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,m),Xu(),Fd(),g._vnode=d},be={p:v,um:mt,m:Dt,r:Es,mt:Tt,mc:fe,pc:lt,pbc:Me,n:F,o:t};let se,ee;return e&&([se,ee]=e(be)),{render:le,hydrate:se,createApp:Jw(le,se)}}function Bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function no(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=yn(r[i]),a.el=o.el),n||no(o,a)),a.type===oi&&(a.el=o.el),a.type===ze&&!a.el&&(a.el=o.el)}}function t_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const n_=t=>t.__isTeleport,vt=Symbol("Fragment"),oi=Symbol("Text"),ze=Symbol("Comment"),so=Symbol("Static"),Er=[];let kt=null;function dr(t=!1){Er.push(kt=t?null:[])}function s_(){Er.pop(),kt=Er[Er.length-1]||null}let xr=1;function fh(t){xr+=t}function hp(t){return t.dynamicChildren=xr>0?kt||Ms:null,s_(),xr>0&&kt&&kt.push(t),t}function dh(t,e,n,s,r,i){return hp(Mt(t,e,n,s,r,i,!0))}function Rc(t,e,n,s,r){return hp(Ke(t,e,n,s,r,!0))}function Mr(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return e.shapeFlag&6&&Cs.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const r_=(...t)=>i_(...t),ea="__vInternal",fp=({key:t})=>t??null,ro=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Fe(t)||W(t)?{i:at,r:t,k:e,f:!!n}:t:null;function Mt(t,e=null,n=null,s=0,r=null,i=t===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fp(e),ref:e&&ro(e),scopeId:Kd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:at};return a?(Pl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),c.key!==c.key&&A("VNode created with invalid key (NaN). VNode type:",c.type),xr>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const Ke=r_;function i_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===kw)&&(t||A(`Invalid vnode type when creating vnode: ${t}.`),t=ze),Mr(t)){const a=Ht(t,e,!0);return n&&Pl(a,n),xr>0&&!i&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(yp(t)&&(t=t.__vccOpts),e){e=o_(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=gl(a)),we(c)&&(mc(c)&&!K(c)&&(c=Oe({},c)),e.style=pl(c))}const o=De(t)?1:hw(t)?128:n_(t)?64:we(t)?4:W(t)?2:0;return o&4&&mc(t)&&(t=te(t),A("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),Mt(t,e,n,s,r,o,i,!0)}function o_(t){return t?mc(t)||ea in t?Oe({},t):t:null}function Ht(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?a_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fp(a),ref:e&&e.ref?n&&r?K(r)?r.concat(ro(e)):[r,ro(e)]:ro(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&K(o)?o.map(dp):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ht(t.ssContent),ssFallback:t.ssFallback&&Ht(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function dp(t){const e=Ht(t);return K(t.children)&&(e.children=t.children.map(dp)),e}function ks(t=" ",e=0){return Ke(oi,null,t,e)}function Fa(t="",e=!1){return e?(dr(),Rc(ze,null,t)):Ke(ze,null,t)}function At(t){return t==null||typeof t=="boolean"?Ke(ze):K(t)?Ke(vt,null,t.slice()):typeof t=="object"?yn(t):Ke(oi,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ht(t)}function Pl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Pl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ea in e)?e._ctx=at:r===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[ks(e)]):n=8);t.children=e,t.shapeFlag|=n}function a_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=gl([e.class,s.class]));else if(r==="style")e.style=pl([e.style,s.style]);else if(ni(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Pt(t,e,n,s=null){Et(t,e,7,[n,s])}const c_=up();let l_=0;function u_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||c_,i={uid:l_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new tv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ip(s,r),emitsOptions:qd(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=Ow(i),i.root=e?e.root:i,i.emit=iw.bind(null,i),t.ce&&t.ce(i),i}let Ae=null;const xl=()=>Ae||at,js=t=>{Ae=t,t.scope.on()},ss=()=>{Ae&&Ae.scope.off(),Ae=null},h_=$n("slot,component");function Oc(t,e){const n=e.isNativeTag||cd;(h_(t)||n(t))&&A("Do not use built-in or reserved HTML elements as component id: "+t)}function pp(t){return t.vnode.shapeFlag&4}let Lr=!1;function f_(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,r=pp(t);Uw(t,n,r,e),Gw(t,s);const i=r?d_(t,e):void 0;return Lr=!1,i}function d_(t,e){var n;const s=t.type;{if(s.name&&Oc(s.name,t.appContext.config),s.components){const i=Object.keys(s.components);for(let o=0;o<i.length;o++)Oc(i[o],t.appContext.config)}if(s.directives){const i=Object.keys(s.directives);for(let o=0;o<i.length;o++)tp(i[o])}s.compilerOptions&&gp()&&A('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Ad(new Proxy(t.ctx,np)),Dw(t);const{setup:r}=s;if(r){const i=t.setupContext=r.length>1?g_(t):null;js(t),gs();const o=en(r,t,0,[Ns(t.props),i]);if(ms(),ss(),vl(o)){if(o.then(ss,ss),e)return o.then(a=>{ph(t,a,e)}).catch(a=>{Yo(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=s.name)!==null&&n!==void 0?n:"Anonymous";A(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ph(t,o,e)}else mp(t,e)}function ph(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)?(Mr(e)&&A("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=Dd(e),Nw(t)):e!==void 0&&A(`setup() should return an object. Received: ${e===null?"null":typeof e}`),mp(t,n)}let Dc;const gp=()=>!Dc;function mp(t,e,n){const s=t.type;if(!t.render){if(!e&&Dc&&!s.render){const r=s.template||Dl(t).template;if(r){Gt(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Oe(Oe({isCustomElement:i,delimiters:a},o),c);s.render=Dc(r,l),Qt(t,"compile")}}t.render=s.render||ht}js(t),gs(),xw(t),ms(),ss(),!s.render&&t.render===ht&&!e&&(s.template?A('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):A("Component is missing template or render function."))}function p_(t){return new Proxy(t.attrs,{get(e,n){return vo(),ft(t,"get","$attrs"),e[n]},set(){return A("setupContext.attrs is readonly."),!1},deleteProperty(){return A("setupContext.attrs is readonly."),!1}})}function g_(t){const e=s=>{if(t.exposed&&A("expose() should be called only once per setup()."),s!=null){let r=typeof s;r==="object"&&(K(s)?r="array":Fe(s)&&(r="ref")),r!=="object"&&A(`expose() should be passed a plain object, received ${r}.`)}t.exposed=s||{}};let n;return Object.freeze({get attrs(){return n||(n=p_(t))},get slots(){return Ns(t.slots)},get emit(){return(s,...r)=>t.emit(s,...r)},expose:e})}function ta(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dd(Ad(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ns)return ns[n](t)},has(e,n){return n in e||n in ns}}))}const m_=/(?:^|[-_])(\w)/g,y_=t=>t.replace(m_,e=>e.toUpperCase()).replace(/[-_]/g,"");function Ml(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function na(t,e,n=!1){let s=Ml(e);if(!s&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&t&&t.parent){const r=i=>{for(const o in i)if(i[o]===e)return o};s=r(t.components||t.parent.type.components)||r(t.appContext.components)}return s?y_(s):n?"App":"Anonymous"}function yp(t){return W(t)&&"__vccOpts"in t}const wt=(t,e)=>$v(t,e,Lr);function vp(t,e,n){const s=arguments.length;return s===2?we(e)&&!K(e)?Mr(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Mr(n)&&(n=[n]),Ke(t,e,n))}const v_=Symbol("ssrContext"),w_=()=>{{const t=tn(v_);return t||A("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Ua(t){return!!(t&&t.__v_isShallow)}function __(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(h){return we(h)?h.__isVue?["div",t,"VueInstance"]:Fe(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:Zn(h)?["div",{},["span",t,Ua(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${Nn(h)?" (readonly)":""}`]:Nn(h)?["div",{},["span",t,Ua(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const f=[];h.type.props&&h.props&&f.push(o("props",te(h.props))),h.setupState!==ve&&f.push(o("setup",h.setupState)),h.data!==ve&&f.push(o("data",te(h.data)));const p=c(h,"computed");p&&f.push(o("computed",p));const y=c(h,"inject");return y&&f.push(o("injected",y)),f.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),f}function o(h,f){return f=Oe({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(p=>["div",{},["span",s,p+": "],a(f[p],!1)])]]:["span",{}]}function a(h,f=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",s,h]:we(h)?["object",{object:f?te(h):h}]:["span",n,String(h)]}function c(h,f){const p=h.type;if(W(p))return;const y={};for(const v in h.ctx)l(p,v,f)&&(y[v]=h.ctx[v]);return y}function l(h,f,p){const y=h[p];if(K(y)&&y.includes(f)||we(y)&&f in y||h.extends&&l(h.extends,f,p)||h.mixins&&h.mixins.some(v=>l(v,f,p)))return!0}function u(h){return Ua(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const gh="3.2.47",E_="http://www.w3.org/2000/svg",zn=typeof document<"u"?document:null,mh=zn&&zn.createElement("template"),b_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?zn.createElementNS(E_,t):zn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>zn.createTextNode(t),createComment:t=>zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{mh.innerHTML=s?`<svg>${t}</svg>`:t;const a=mh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function I_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function T_(t,e,n){const s=t.style,r=De(n);if(n&&!r){if(e&&!De(e))for(const i in e)n[i]==null&&Nc(s,i,"");for(const i in n)Nc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const S_=/[^\\];\s*$/,yh=/\s*!important$/;function Nc(t,e,n){if(K(n))n.forEach(s=>Nc(t,e,s));else if(n==null&&(n=""),S_.test(n)&&A(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const s=C_(t,e);yh.test(n)?t.setProperty(On(s),n.replace(yh,""),"important"):t[s]=n}}const vh=["Webkit","Moz","ms"],Va={};function C_(t,e){const n=Va[e];if(n)return n;let s=jt(e);if(s!=="filter"&&s in t)return Va[e]=s;s=as(s);for(let r=0;r<vh.length;r++){const i=vh[r]+s;if(i in t)return Va[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function A_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,n);else{const i=Qy(e);n==null||i&&!od(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function k_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=od(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch(c){a||A(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&t.removeAttribute(e)}function Rs(t,e,n,s){t.addEventListener(e,n,s)}function R_(t,e,n,s){t.removeEventListener(e,n,s)}function O_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=D_(e);if(s){const l=i[e]=x_(s,r);Rs(t,a,l,c)}else o&&(R_(t,a,o,c),i[e]=void 0)}}const _h=/(?:Once|Passive|Capture)$/;function D_(t){let e;if(_h.test(t)){e={};let s;for(;s=t.match(_h);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}let Ba=0;const N_=Promise.resolve(),P_=()=>Ba||(N_.then(()=>Ba=0),Ba=Date.now());function x_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Et(M_(s,n.value),e,5,[s])};return n.value=t,n.attached=P_(),n}function M_(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Eh=/^on[a-z]/,L_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?I_(t,s,r):e==="style"?T_(t,n,s):ni(e)?po(e)||O_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$_(t,e,s,r))?k_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),A_(t,e,s,r))};function $_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Eh.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Eh.test(e)&&De(n)?!1:e in t}const F_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yw.props;const bh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Ss(e,n):e};function U_(t){t.target.composing=!0}function Ih(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const AR={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=bh(r);const i=s||r.props&&r.props.type==="number";Rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=uc(a)),t._assign(a)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",U_),Rs(t,"compositionend",Ih),Rs(t,"change",Ih))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=bh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&uc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},V_=Oe({patchProp:L_},b_);let Th;function B_(){return Th||(Th=Zw(V_))}const j_=(...t)=>{const e=B_().createApp(...t);H_(e),q_(e);const{mount:n}=e;return e.mount=s=>{const r=K_(s);if(!r)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function H_(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>zy(e)||Wy(e),writable:!1})}function q_(t){if(gp()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){A("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return A(s),n},set(){A(s)}})}}function K_(t){if(De(t)){const e=document.querySelector(t);return e||A(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&A('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function z_(){__()}z_();/**
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
 */const wp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},W_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):W_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new G_;const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q_=function(t){const e=wp(t);return _p.encodeByteArray(e,!0)},Eo=function(t){return Q_(t).replace(/\./g,"")},Ep=function(t){try{return _p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Y_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const J_=()=>Y_().__FIREBASE_DEFAULTS__,X_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ep(t[1]);return e&&JSON.parse(e)},Ll=()=>{try{return J_()||X_()||Z_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=Ll())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eE=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tE=()=>{var t;return(t=Ll())===null||t===void 0?void 0:t.config},Ip=t=>{var e;return(e=Ll())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class nE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function sE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Eo(JSON.stringify(n)),Eo(JSON.stringify(o)),a].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function iE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aE(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cE(){try{return typeof indexedDB=="object"}catch{return!1}}function lE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const uE="FirebaseError";class hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uE,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?hE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new hn(r,a,s)}}function hE(t,e){return t.replace(fE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const fE=/\{\$([^}]+)}/g;function dE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Sh(i)&&Sh(o)){if(!bo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Sh(t){return t!==null&&typeof t=="object"}/**
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
 */function ci(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function gr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pE(t,e){const n=new gE(t,e);return n.subscribe.bind(n)}class gE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");mE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ja),r.error===void 0&&(r.error=ja),r.complete===void 0&&(r.complete=ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ja(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class yE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new nE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wE(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vE(t){return t===qn?void 0:t}function wE(t){return t.instantiationMode==="EAGER"}/**
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
 */class _E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const EE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},bE=de.INFO,IE={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},TE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=IE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=bE,this._logHandler=TE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const SE=(t,e)=>e.some(n=>t instanceof n);let Ch,Ah;function CE(){return Ch||(Ch=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AE(){return Ah||(Ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tp=new WeakMap,Pc=new WeakMap,Sp=new WeakMap,Ha=new WeakMap,Fl=new WeakMap;function kE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tp.set(n,t)}).catch(()=>{}),Fl.set(e,t),e}function RE(t){if(Pc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pc.set(t,e)}let xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OE(t){xc=t(xc)}function DE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qa(this),e,...n);return Sp.set(s,e.sort?e.sort():[e]),Sn(s)}:AE().includes(t)?function(...e){return t.apply(qa(this),e),Sn(Tp.get(this))}:function(...e){return Sn(t.apply(qa(this),e))}}function NE(t){return typeof t=="function"?DE(t):(t instanceof IDBTransaction&&RE(t),SE(t,CE())?new Proxy(t,xc):t)}function Sn(t){if(t instanceof IDBRequest)return kE(t);if(Ha.has(t))return Ha.get(t);const e=NE(t);return e!==t&&(Ha.set(t,e),Fl.set(e,t)),e}const qa=t=>Fl.get(t);function PE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Sn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const xE=["get","getKey","getAll","getAllKeys","count"],ME=["put","add","delete","clear"],Ka=new Map;function kh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ME.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||xE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ka.set(e,i),i}OE(t=>({...t,get:(e,n,s)=>kh(e,n)||t.get(e,n,s),has:(e,n)=>!!kh(e,n)||t.has(e,n)}));/**
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
 */class LE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($E(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function $E(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Rh="0.9.7";/**
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
 */const us=new $l("@firebase/app"),FE="@firebase/app-compat",UE="@firebase/analytics-compat",VE="@firebase/analytics",BE="@firebase/app-check-compat",jE="@firebase/app-check",HE="@firebase/auth",qE="@firebase/auth-compat",KE="@firebase/database",zE="@firebase/database-compat",WE="@firebase/functions",GE="@firebase/functions-compat",QE="@firebase/installations",YE="@firebase/installations-compat",JE="@firebase/messaging",XE="@firebase/messaging-compat",ZE="@firebase/performance",eb="@firebase/performance-compat",tb="@firebase/remote-config",nb="@firebase/remote-config-compat",sb="@firebase/storage",rb="@firebase/storage-compat",ib="@firebase/firestore",ob="@firebase/firestore-compat",ab="firebase",cb="9.19.1";/**
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
 */const Lc="[DEFAULT]",lb={[Mc]:"fire-core",[FE]:"fire-core-compat",[VE]:"fire-analytics",[UE]:"fire-analytics-compat",[jE]:"fire-app-check",[BE]:"fire-app-check-compat",[HE]:"fire-auth",[qE]:"fire-auth-compat",[KE]:"fire-rtdb",[zE]:"fire-rtdb-compat",[WE]:"fire-fn",[GE]:"fire-fn-compat",[QE]:"fire-iid",[YE]:"fire-iid-compat",[JE]:"fire-fcm",[XE]:"fire-fcm-compat",[ZE]:"fire-perf",[eb]:"fire-perf-compat",[tb]:"fire-rc",[nb]:"fire-rc-compat",[sb]:"fire-gcs",[rb]:"fire-gcs-compat",[ib]:"fire-fst",[ob]:"fire-fst-compat","fire-js":"fire-js",[ab]:"fire-js-all"};/**
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
 */const Io=new Map,$c=new Map;function ub(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hs(t){const e=t.name;if($c.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;$c.set(e,t);for(const n of Io.values())ub(n,t);return!0}function Ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new ai("app","Firebase",hb);/**
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
 */class fb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const li=cb;function Cp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Lc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Cn.create("bad-app-name",{appName:String(r)});if(n||(n=tE()),!n)throw Cn.create("no-options");const i=Io.get(r);if(i){if(bo(n,i.options)&&bo(s,i.config))return i;throw Cn.create("duplicate-app",{appName:r})}const o=new _E(r);for(const c of $c.values())o.addComponent(c);const a=new fb(n,s,o);return Io.set(r,a),a}function Ap(t=Lc){const e=Io.get(t);if(!e&&t===Lc)return Cp();if(!e)throw Cn.create("no-app",{appName:t});return e}function An(t,e,n){var s;let r=(s=lb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}Hs(new ls(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const db="firebase-heartbeat-database",pb=1,$r="firebase-heartbeat-store";let za=null;function kp(){return za||(za=PE(db,pb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($r)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),za}async function gb(t){try{return(await kp()).transaction($r).objectStore($r).get(Rp(t))}catch(e){if(e instanceof hn)us.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function Oh(t,e){try{const s=(await kp()).transaction($r,"readwrite");return await s.objectStore($r).put(e,Rp(t)),s.done}catch(n){if(n instanceof hn)us.warn(n.message);else{const s=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(s.message)}}}function Rp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mb=1024,yb=30*24*60*60*1e3;class vb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _b(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=yb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dh(),{heartbeatsToSend:n,unsentEntries:s}=wb(this._heartbeatsCache.heartbeats),r=Eo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Dh(){return new Date().toISOString().substring(0,10)}function wb(t,e=mb){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Nh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Nh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _b{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cE()?lE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Nh(t){return Eo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Eb(t){Hs(new ls("platform-logger",e=>new LE(e),"PRIVATE")),Hs(new ls("heartbeat",e=>new vb(e),"PRIVATE")),An(Mc,Rh,t),An(Mc,Rh,"esm2017"),An("fire-js","")}Eb("");function Vl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Op(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bb=Op,Dp=new ai("auth","Firebase",Op());/**
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
 */const Ph=new $l("@firebase/auth");function io(t,...e){Ph.logLevel<=de.ERROR&&Ph.error(`Auth (${li}): ${t}`,...e)}/**
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
 */function Ot(t,...e){throw Bl(t,...e)}function Ut(t,...e){return Bl(t,...e)}function Ib(t,e,n){const s=Object.assign(Object.assign({},bb()),{[e]:n});return new ai("auth","Firebase",s).create(e,{appName:t.name})}function Bl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Dp.create(t,...e)}function z(t,e,...n){if(!t)throw Bl(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw io(e),new Error(e)}function rn(t,e){t||Jt(e)}/**
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
 */const xh=new Map;function Xt(t){rn(t instanceof Function,"Expected a class definition");let e=xh.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xh.set(t,e),e)}/**
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
 */function Tb(t,e){const n=Ul(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(bo(i,e??{}))return r;Ot(r,"already-initialized")}return n.initialize({options:e})}function Sb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Cb(){return Mh()==="http:"||Mh()==="https:"}function Mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ab(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cb()||iE()||"connection"in navigator)?navigator.onLine:!0}function kb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=rE()||oE()}get(){return Ab()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jl(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Np{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ob=new ui(3e4,6e4);function hi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fi(t,e,n,s,r={}){return Pp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ci(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Np.fetch()(xp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Pp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rb),e);try{const r=new Db(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ib(t,u,l);Ot(t,u)}}catch(r){if(r instanceof hn)throw r;Ot(t,"network-request-failed",{message:String(r)})}}async function di(t,e,n,s,r={}){const i=await fi(t,e,n,s,r);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function xp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?jl(t.config,r):`${t.config.apiScheme}://${r}`}class Db{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ut(this.auth,"network-request-failed")),Ob.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ut(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Nb(t,e){return fi(t,"POST","/v1/accounts:delete",e)}async function Pb(t,e){return fi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xb(t,e=!1){const n=dt(t),s=await n.getIdToken(e),r=Hl(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:br(Wa(r.auth_time)),issuedAtTime:br(Wa(r.iat)),expirationTime:br(Wa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wa(t){return Number(t)*1e3}function Hl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ep(n);return r?JSON.parse(r):(io("Failed to decode base64 JWT payload"),null)}catch(r){return io("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Mb(t){const e=Hl(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof hn&&Lb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Lb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function To(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Fr(t,Pb(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vb(i.providerUserInfo):[],a=Ub(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Fb(t){const e=dt(t);await To(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ub(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Vb(t){return t.map(e=>{var{providerId:n}=e,s=Vl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Bb(t,e){const n=await Pp(t,{},async()=>{const s=ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=xp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Np.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Bb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ur;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function pn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xb(this,e)}reload(){return Fb(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await To(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fr(this,Nb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:$,isAnonymous:Y,providerData:_e,stsTokenManager:Re}=n;z(L&&Re,e,"internal-error");const J=Ur.fromJSON(this.name,Re);z(typeof L=="string",e,"internal-error"),pn(h,e.name),pn(f,e.name),z(typeof $=="boolean",e,"internal-error"),z(typeof Y=="boolean",e,"internal-error"),pn(p,e.name),pn(y,e.name),pn(v,e.name),pn(C,e.name),pn(O,e.name),pn(N,e.name);const fe=new rs({uid:L,auth:e,email:f,emailVerified:$,displayName:h,isAnonymous:Y,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:J,createdAt:O,lastLoginAt:N});return _e&&Array.isArray(_e)&&(fe.providerData=_e.map(me=>Object.assign({},me))),C&&(fe._redirectEventId=C),fe}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ur;r.updateFromServerResponse(n);const i=new rs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await To(i),i}}/**
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
 */class Lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lp.type="NONE";const Lh=Lp;/**
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
 */function oo(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=oo(this.userKey,r.apiKey,i),this.fullPersistenceKey=oo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Fs(Xt(Lh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Xt(Lh);const o=oo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Fs(i,e,s))}}/**
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
 */function $h(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Up(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bp(e))return"Blackberry";if(jp(e))return"Webos";if(ql(e))return"Safari";if((e.includes("chrome/")||Fp(e))&&!e.includes("edge/"))return"Chrome";if(Vp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $p(t=nt()){return/firefox\//i.test(t)}function ql(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fp(t=nt()){return/crios\//i.test(t)}function Up(t=nt()){return/iemobile/i.test(t)}function Vp(t=nt()){return/android/i.test(t)}function Bp(t=nt()){return/blackberry/i.test(t)}function jp(t=nt()){return/webos/i.test(t)}function sa(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jb(t=nt()){var e;return sa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hb(){return aE()&&document.documentMode===10}function Hp(t=nt()){return sa(t)||Vp(t)||jp(t)||Bp(t)||/windows phone/i.test(t)||Up(t)}function qb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qp(t,e=[]){let n;switch(t){case"Browser":n=$h(nt());break;case"Worker":n=`${$h(nt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${s}`}/**
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
 */class Kb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class zb{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fh(this),this.idTokenSubscription=new Fh(this),this.beforeStateQueue=new Kb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await To(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function pi(t){return dt(t)}class Fh{constructor(e){this.auth=e,this.observer=null,this.addObserver=pE(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Wb(t,e,n){const s=pi(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Kp(e),{host:o,port:a}=Gb(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Qb()}function Kp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gb(t){const e=Kp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Uh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Uh(o)}}}function Uh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function Yb(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Jb(t,e){return di(t,"POST","/v1/accounts:signInWithPassword",hi(t,e))}/**
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
 */async function Xb(t,e){return di(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}async function Zb(t,e){return di(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}/**
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
 */class Vr extends Kl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Vr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Vr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Jb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xb(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Yb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zb(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Us(t,e){return di(t,"POST","/v1/accounts:signInWithIdp",hi(t,e))}/**
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
 */const e0="http://localhost";class hs extends Kl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Vl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new hs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:e0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ci(n)}return e}}/**
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
 */function t0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n0(t){const e=pr(gr(t)).link,n=e?pr(gr(e)).deep_link_id:null,s=pr(gr(t)).deep_link_id;return(s?pr(gr(s)).link:null)||s||n||e||t}class zl{constructor(e){var n,s,r,i,o,a;const c=pr(gr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=t0((r=c.mode)!==null&&r!==void 0?r:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=n0(e);try{return new zl(n)}catch{return null}}}/**
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
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return Vr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zl.parseLink(n);return z(s,"argument-error"),Vr._fromEmailAndCode(e,s.code,s.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gi extends zp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _n extends gi{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
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
 */class En extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return En.credential(n,s)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class bn extends gi{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class In extends gi{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return In.credential(n,s)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */async function s0(t,e){return di(t,"POST","/v1/accounts:signUp",hi(t,e))}/**
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
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await rs._fromIdTokenResponse(e,s,r),o=Vh(s);return new fs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Vh(s);return new fs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Vh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class So extends hn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,So.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new So(e,n,s,r)}}function Wp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(t,i,e,s):i})}async function r0(t,e,n=!1){const s=await Fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",s)}/**
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
 */async function i0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Fr(t,Wp(s,r,e,t),n);z(i.idToken,s,"internal-error");const o=Hl(i.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),fs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(s,"user-mismatch"),i}}/**
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
 */async function Gp(t,e,n=!1){const s="signIn",r=await Wp(t,s,e),i=await fs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function o0(t,e){return Gp(pi(t),e)}async function kR(t,e,n){const s=pi(t),r=await s0(s,{returnSecureToken:!0,email:e,password:n}),i=await fs._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function RR(t,e,n){return o0(dt(t),Zs.credential(e,n))}function a0(t,e,n,s){return dt(t).onIdTokenChanged(e,n,s)}function c0(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function l0(t){return dt(t).signOut()}const Co="__sak";/**
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
 */class Qp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function u0(){const t=nt();return ql(t)||sa(t)}const h0=1e3,f0=10;class Yp extends Qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=u0()&&qb(),this.fallbackToPolling=Hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Hb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,f0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},h0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yp.type="LOCAL";const d0=Yp;/**
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
 */class Jp extends Qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jp.type="SESSION";const Xp=Jp;/**
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
 */function p0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ra(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await p0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
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
 */function Wl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class g0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Wl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Vt(){return window}function m0(t){Vt().location.href=t}/**
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
 */function Zp(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function y0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w0(){return Zp()?self:null}/**
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
 */const eg="firebaseLocalStorageDb",_0=1,Ao="firebaseLocalStorage",tg="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ia(t,e){return t.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function E0(){const t=indexedDB.deleteDatabase(eg);return new mi(t).toPromise()}function Uc(){const t=indexedDB.open(eg,_0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ao,{keyPath:tg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ao)?e(s):(s.close(),await E0(),e(await Uc()))})})}async function Bh(t,e,n){const s=ia(t,!0).put({[tg]:e,value:n});return new mi(s).toPromise()}async function b0(t,e){const n=ia(t,!1).get(e),s=await new mi(n).toPromise();return s===void 0?null:s.value}function jh(t,e){const n=ia(t,!0).delete(e);return new mi(n).toPromise()}const I0=800,T0=3;class ng{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>T0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y0(),!this.activeServiceWorker)return;this.sender=new g0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uc();return await Bh(e,Co,"1"),await jh(e,Co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>b0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ia(r,!1).getAll();return new mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ng.type="LOCAL";const S0=ng;/**
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
 */function C0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function A0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ut("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",C0().appendChild(s)})}function k0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ui(3e4,6e4);/**
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
 */function R0(t,e){return e?Xt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gl extends Kl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function O0(t){return Gp(t.auth,new Gl(t),t.bypassAuthState)}function D0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),i0(n,new Gl(t),t.bypassAuthState)}async function N0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),r0(n,new Gl(t),t.bypassAuthState)}/**
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
 */class sg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O0;case"linkViaPopup":case"linkViaRedirect":return N0;case"reauthViaPopup":case"reauthViaRedirect":return D0;default:Ot(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const P0=new ui(2e3,1e4);class Ps extends sg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Wl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,P0.get())};e()}}Ps.currentPopupAction=null;/**
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
 */const x0="pendingRedirect",ao=new Map;class M0 extends sg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const s=await L0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L0(t,e){const n=U0(e),s=F0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function $0(t,e){ao.set(t._key(),e)}function F0(t){return Xt(t._redirectPersistence)}function U0(t){return oo(x0,t.config.apiKey,t.name)}async function V0(t,e,n=!1){const s=pi(t),r=R0(s,e),o=await new M0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const B0=10*60*1e3;class j0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=B0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hh(e))}saveEventToCache(e){this.cachedEventUids.add(Hh(e)),this.lastProcessedEventTime=Date.now()}}function Hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rg(t);default:return!1}}/**
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
 */async function q0(t,e={}){return fi(t,"GET","/v1/projects",e)}/**
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
 */const K0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z0=/^https?/;async function W0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await q0(t);for(const n of e)try{if(G0(n))return}catch{}Ot(t,"unauthorized-domain")}function G0(t){const e=Fc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!z0.test(n))return!1;if(K0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Q0=new ui(3e4,6e4);function qh(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y0(t){return new Promise((e,n)=>{var s,r,i;function o(){qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qh(),n(Ut(t,"network-request-failed"))},timeout:Q0.get()})}if(!((r=(s=Vt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Vt().gapi)===null||i===void 0)&&i.load)o();else{const a=k0("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},A0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw co=null,e})}let co=null;function J0(t){return co=co||Y0(t),co}/**
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
 */const X0=new ui(5e3,15e3),Z0="__/auth/iframe",eI="emulator/auth/iframe",tI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sI(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jl(e,eI):`https://${t.config.authDomain}/${Z0}`,s={apiKey:e.apiKey,appName:t.name,v:li},r=nI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ci(s).slice(1)}`}async function rI(t){const e=await J0(t),n=Vt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:sI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=Vt().setTimeout(()=>{i(o)},X0.get());function c(){Vt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const iI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oI=500,aI=600,cI="_blank",lI="http://localhost";class Kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uI(t,e,n,s=oI,r=aI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iI),{width:s.toString(),height:r.toString(),top:i,left:o}),l=nt().toLowerCase();n&&(a=Fp(l)?cI:n),$p(l)&&(e=e||lI,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(jb(l)&&a!=="_self")return hI(e||"",a),new Kh(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Kh(h)}function hI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fI="__/auth/handler",dI="emulator/auth/handler";function zh(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:li,eventId:r};if(e instanceof zp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof gi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${pI(t)}?${ci(a).slice(1)}`}function pI({config:t}){return t.emulator?jl(t,dI):`https://${t.authDomain}/${fI}`}/**
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
 */const Ga="webStorageSupport";class gI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xp,this._completeRedirectFn=V0,this._overrideRedirectResult=$0}async _openPopup(e,n,s,r){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=zh(e,n,s,Fc(),r);return uI(e,o,Wl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),m0(zh(e,n,s,Fc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rI(e),s=new j0(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ga,{type:Ga},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ga];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=W0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hp()||ql()||sa()}}const mI=gI;var Wh="@firebase/auth",Gh="0.22.0";/**
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
 */class yI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wI(t){Hs(new ls("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qp(t)},u=new zb(a,c,l);return Sb(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Hs(new ls("auth-internal",e=>{const n=pi(e.getProvider("auth").getImmediate());return(s=>new yI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Wh,Gh,vI(t)),An(Wh,Gh,"esm2017")}/**
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
 */const _I=5*60,EI=Ip("authIdTokenMaxAge")||_I;let Qh=null;const bI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>EI)return;const r=n==null?void 0:n.token;Qh!==r&&(Qh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Br(t=Ap()){const e=Ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tb(t,{popupRedirectResolver:mI,persistence:[S0,d0,Xp]}),s=Ip("authTokenSyncURL");if(s){const i=bI(s);c0(n,i,()=>i(n.currentUser)),a0(n,o=>i(o))}const r=bp("auth");return r&&Wb(n,`http://${r}`),n}wI("Browser");function II(){const t=Br();l0(t).then(()=>{}).catch(e=>{console.error(e.message)})}var TI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Ql=Ql||{},Q=TI||self;function ko(){}function oa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SI(t){return Object.prototype.hasOwnProperty.call(t,Qa)&&t[Qa]||(t[Qa]=++CI)}var Qa="closure_uid_"+(1e9*Math.random()>>>0),CI=0;function AI(t,e,n){return t.call.apply(t.bind,arguments)}function kI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=AI:et=kI,et.apply(null,arguments)}function Ui(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Fn(){this.s=this.s,this.o=this.o}var RI=0;Fn.prototype.s=!1;Fn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),RI!=0)&&SI(this)};Fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ig=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(oa(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var OI=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",ko,e),Q.removeEventListener("test",ko,e)}catch{}return t}();function Ro(t){return/^[\s\xa0]*$/.test(t)}var Jh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ya(t,e){return t<e?-1:t>e?1:0}function aa(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return aa().indexOf(t)!=-1}function Jl(t){return Jl[" "](t),t}Jl[" "]=ko;function DI(t){var e=xI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var NI=Ft("Opera"),qs=Ft("Trident")||Ft("MSIE"),og=Ft("Edge"),Vc=og||qs,ag=Ft("Gecko")&&!(aa().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),PI=aa().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function cg(){var t=Q.document;return t?t.documentMode:void 0}var Oo;e:{var Ja="",Xa=function(){var t=aa();if(ag)return/rv:([^\);]+)(\)|;)/.exec(t);if(og)return/Edge\/([\d\.]+)/.exec(t);if(qs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PI)return/WebKit\/(\S+)/.exec(t);if(NI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xa&&(Ja=Xa?Xa[1]:""),qs){var Za=cg();if(Za!=null&&Za>parseFloat(Ja)){Oo=String(Za);break e}}Oo=Ja}var xI={};function MI(){return DI(function(){let t=0;const e=Jh(String(Oo)).split("."),n=Jh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ya(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ya(r[2].length==0,i[2].length==0)||Ya(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Bc;if(Q.document&&qs){var Xh=cg();Bc=Xh||parseInt(Oo,10)||void 0}else Bc=void 0;var LI=Bc;function jr(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ag){e:{try{Jl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$I[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jr.X.h.call(this)}}Ge(jr,tt);var $I={2:"touch",3:"pen",4:"mouse"};jr.prototype.h=function(){jr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vi="closure_listenable_"+(1e6*Math.random()|0),FI=0;function UI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++FI,this.ba=this.ea=!1}function ca(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Xl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lg(t){const e={};for(const n in t)e[n]=t[n];return e}const Zh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ug(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Zh.length;i++)n=Zh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function la(t){this.src=t,this.g={},this.h=0}la.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Hc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new UI(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function jc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ig(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ca(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Zl="closure_lm_"+(1e6*Math.random()|0),ec={};function hg(t,e,n,s,r){if(s&&s.once)return dg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)hg(t,e[i],n,s,r);return null}return n=nu(n),t&&t[vi]?t.N(e,n,yi(s)?!!s.capture:!!s,r):fg(t,e,n,!1,s,r)}function fg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=yi(r)?!!r.capture:!!r,a=tu(t);if(a||(t[Zl]=a=new la(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=VI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)OI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(gg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VI(){function t(n){return e.call(t.src,t.listener,n)}const e=BI;return t}function dg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)dg(t,e[i],n,s,r);return null}return n=nu(n),t&&t[vi]?t.O(e,n,yi(s)?!!s.capture:!!s,r):fg(t,e,n,!0,s,r)}function pg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)pg(t,e[i],n,s,r);else s=yi(s)?!!s.capture:!!s,n=nu(n),t&&t[vi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Hc(i,n,s,r),-1<n&&(ca(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=tu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hc(e,n,s,r)),(n=-1<t?e[t]:null)&&eu(n))}function eu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[vi])jc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(gg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=tu(e))?(jc(n,t),n.h==0&&(n.src=null,e[Zl]=null)):ca(t)}}}function gg(t){return t in ec?ec[t]:ec[t]="on"+t}function BI(t,e){if(t.ba)t=!0;else{e=new jr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&eu(t),t=n.call(s,e)}return t}function tu(t){return t=t[Zl],t instanceof la?t:null}var tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function nu(t){return typeof t=="function"?t:(t[tc]||(t[tc]=function(e){return t.handleEvent(e)}),t[tc])}function He(){Fn.call(this),this.i=new la(this),this.P=this,this.I=null}Ge(He,Fn);He.prototype[vi]=!0;He.prototype.removeEventListener=function(t,e,n,s){pg(this,t,e,n,s)};function We(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var r=e;e=new tt(s,t),ug(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Vi(o,s,!0,e)&&r}if(o=e.g=t,r=Vi(o,s,!0,e)&&r,r=Vi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Vi(o,s,!1,e)&&r}He.prototype.M=function(){if(He.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ca(n[s]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};He.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Vi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&jc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var su=Q.JSON.stringify;function jI(){var t=vg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HI{constructor(){this.h=this.g=null}add(e,n){const s=mg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var mg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qI,t=>t.reset());class qI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KI(t){Q.setTimeout(()=>{throw t},0)}function yg(t,e){qc||zI(),Kc||(qc(),Kc=!0),vg.add(t,e)}var qc;function zI(){var t=Q.Promise.resolve(void 0);qc=function(){t.then(WI)}}var Kc=!1,vg=new HI;function WI(){for(var t;t=jI();){try{t.h.call(t.g)}catch(n){KI(n)}var e=mg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Kc=!1}function ua(t,e){He.call(this),this.h=t||1,this.g=e||Q,this.j=et(this.lb,this),this.l=Date.now()}Ge(ua,He);U=ua.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),We(this,"tick"),this.ca&&(ru(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ru(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){ua.X.M.call(this),ru(this),delete this.g};function iu(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function wg(t){t.g=iu(()=>{t.g=null,t.i&&(t.i=!1,wg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GI extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wg(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(t){Fn.call(this),this.h=t,this.g={}}Ge(Hr,Fn);var ef=[];function _g(t,e,n,s){Array.isArray(n)||(n&&(ef[0]=n.toString()),n=ef);for(var r=0;r<n.length;r++){var i=hg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Eg(t){Xl(t.g,function(e,n){this.g.hasOwnProperty(n)&&eu(e)},t),t.g={}}Hr.prototype.M=function(){Hr.X.M.call(this),Eg(this)};Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ha(){this.g=!0}ha.prototype.Aa=function(){this.g=!1};function QI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function YI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function xs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XI(t,n)+(s?" "+s:"")})}function JI(t,e){t.info(function(){return"TIMEOUT: "+e})}ha.prototype.info=function(){};function XI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return su(n)}catch{return e}}var ys={},tf=null;function fa(){return tf=tf||new He}ys.Pa="serverreachability";function bg(t){tt.call(this,ys.Pa,t)}Ge(bg,tt);function qr(t){const e=fa();We(e,new bg(e))}ys.STAT_EVENT="statevent";function Ig(t,e){tt.call(this,ys.STAT_EVENT,t),this.stat=e}Ge(Ig,tt);function ct(t){const e=fa();We(e,new Ig(e,t))}ys.Qa="timingevent";function Tg(t,e){tt.call(this,ys.Qa,t),this.size=e}Ge(Tg,tt);function wi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var da={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Sg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ou(){}ou.prototype.h=null;function nf(t){return t.h||(t.h=t.i())}function Cg(){}var _i={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function au(){tt.call(this,"d")}Ge(au,tt);function cu(){tt.call(this,"c")}Ge(cu,tt);var zc;function pa(){}Ge(pa,ou);pa.prototype.g=function(){return new XMLHttpRequest};pa.prototype.i=function(){return{}};zc=new pa;function Ei(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Hr(this),this.O=ZI,t=Vc?125:void 0,this.T=new ua(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ag}function Ag(){this.i=null,this.g="",this.h=!1}var ZI=45e3,Wc={},Do={};U=Ei.prototype;U.setTimeout=function(t){this.O=t};function Gc(t,e,n){t.K=1,t.v=ma(on(e)),t.s=n,t.P=!0,kg(t,null)}function kg(t,e){t.F=Date.now(),bi(t),t.A=on(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Lg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ag,t.g=sm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new GI(et(t.La,t,t.g),t.N)),_g(t.S,t.g,"readystatechange",t.ib),e=t.H?lg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),qr(),QI(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Zt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=Zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Vc||this.g&&(this.h.h||this.g.fa()||af(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?qr(3):qr(2)),ga(this);var n=this.g.aa();this.Y=n;t:if(Rg(this)){var s=af(this.g);t="";var r=s.length,i=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),Ir(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,YI(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ro(a)){var l=a;break t}}l=null}if(n=l)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qc(this,n);else{this.i=!1,this.o=3,ct(12),Gn(this),Ir(this);break e}}this.P?(Og(this,u,o),Vc&&this.i&&u==3&&(_g(this.S,this.T,"tick",this.hb),this.T.start())):(xs(this.j,this.m,o,null),Qc(this,o)),u==4&&Gn(this),this.i&&!this.I&&(u==4?Zg(this.l,this):(this.i=!1,bi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Gn(this),Ir(this)}}}catch{}finally{}};function Rg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Og(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=eT(t,n),r==Do){e==4&&(t.o=4,ct(14),s=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Wc){t.o=4,ct(15),xs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else xs(t.j,t.m,r,null),Qc(t,r);Rg(t)&&r!=Do&&r!=Wc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),gu(e),e.K=!0,ct(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),Ir(t))}U.hb=function(){if(this.g){var t=Zt(this.g),e=this.g.fa();this.C<e.length&&(ga(this),Og(this,t,e),this.i&&t!=4&&bi(this))}};function eT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Do:(n=Number(e.substring(n,s)),isNaN(n)?Wc:(s+=1,s+n>e.length?Do:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,Gn(this)};function bi(t){t.V=Date.now()+t.O,Dg(t,t.O)}function Dg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wi(et(t.gb,t),e)}function ga(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(JI(this.j,this.A),this.K!=2&&(qr(),ct(17)),Gn(this),this.o=2,Ir(this)):Dg(this,this.V-t)};function Ir(t){t.l.G==0||t.I||Zg(t.l,t)}function Gn(t){ga(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ru(t.T),Eg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Qc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yc(n.h,t))){if(!t.J&&Yc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)xo(n),wa(n);else break e;pu(n),ct(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=wi(et(n.cb,n),6e3));if(1>=Ug(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Qn(n,11)}else if((t.J||n.g==t)&&xo(n),!Ro(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(lu(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Te(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=nm(s,s.H?s.ka:null,s.V),o.J){Vg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ga(a),bi(a)),s.g=o}else Jg(s);0<n.i.length&&_a(n)}else l[0]!="stop"&&l[0]!="close"||Qn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qn(n,7):du(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}qr(4)}catch{}}function tT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(oa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function nT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(oa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ng(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(oa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nT(t),s=tT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Pg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function is(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof is){this.h=e!==void 0?e:t.h,No(this,t.j),this.s=t.s,this.g=t.g,Po(this,t.m),this.l=t.l,e=t.i;var n=new Kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sf(this,n),this.o=t.o}else t&&(n=String(t).match(Pg))?(this.h=!!e,No(this,n[1]||"",!0),this.s=mr(n[2]||""),this.g=mr(n[3]||"",!0),Po(this,n[4]),this.l=mr(n[5]||"",!0),sf(this,n[6]||"",!0),this.o=mr(n[7]||"")):(this.h=!!e,this.i=new Kr(null,this.h))}is.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yr(e,rf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yr(e,rf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(yr(n,n.charAt(0)=="/"?oT:iT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yr(n,cT)),t.join("")};function on(t){return new is(t)}function No(t,e,n){t.j=n?mr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Po(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sf(t,e,n){e instanceof Kr?(t.i=e,lT(t.i,t.h)):(n||(e=yr(e,aT)),t.i=new Kr(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function ma(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rf=/[#\/\?@]/g,iT=/[#\?:]/g,oT=/[#\?]/g,aT=/[#\?@]/g,cT=/#/g;function Kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new Map,t.h=0,t.i&&sT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Kr.prototype;U.add=function(t,e){Un(this),this.i=null,t=er(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xg(t,e){Un(t),e=er(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Mg(t,e){return Un(t),e=er(t,e),t.g.has(e)}U.forEach=function(t,e){Un(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Un(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Un(this);let e=[];if(typeof t=="string")Mg(this,t)&&(e=e.concat(this.g.get(er(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Un(this),this.i=null,t=er(this,t),Mg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Lg(t,e,n){xg(t,e),0<n.length&&(t.i=null,t.g.set(er(t,e),Yl(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function er(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lT(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(xg(this,s),Lg(this,r,n))},t)),t.j=e}var uT=class{constructor(e,n){this.h=e,this.g=n}};function $g(t){this.l=t||hT,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hT=10;function Fg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ug(t){return t.h?1:t.g?t.g.size:0}function Yc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function lu(t,e){t.g?t.g.add(e):t.h=e}function Vg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$g.prototype.cancel=function(){if(this.i=Bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Yl(t.i)}function uu(){}uu.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};uu.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function fT(){this.g=new uu}function dT(t,e,n){const s=n||"";try{Ng(t,function(r,i){let o=r;yi(r)&&(o=su(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function pT(t,e){const n=new ha;if(Q.Image){const s=new Image;s.onload=Ui(Bi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ui(Bi,n,s,"TestLoadImage: error",!1,e),s.onabort=Ui(Bi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ui(Bi,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Bi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ii(t){this.l=t.ac||null,this.j=t.jb||!1}Ge(Ii,ou);Ii.prototype.g=function(){return new ya(this.l,this.j)};Ii.prototype.i=function(t){return function(){return t}}({});function ya(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=hu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(ya,He);var hu=0;U=ya.prototype;U.open=function(t,e){if(this.readyState!=hu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=hu};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function jg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ti(this):zr(this),this.readyState==3&&jg(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Ti(this))};U.Ua=function(t){this.g&&(this.response=t,Ti(this))};U.ga=function(){this.g&&Ti(this)};function Ti(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gT=Q.JSON.parse;function ke(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hg,this.K=this.L=!1}Ge(ke,He);var Hg="",mT=/^https?$/i,yT=["POST","PUT"];U=ke.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zc.g(),this.C=this.u?nf(this.u):nf(zc),this.g.onreadystatechange=et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){of(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Q.FormData&&t instanceof Q.FormData,!(0<=ig(yT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zg(this),0<this.B&&((this.K=vT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.qa,this)):this.A=iu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){of(this,i)}};function vT(t){return qs&&MI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof Ql<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function of(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qg(t),va(t)}function qg(t){t.D||(t.D=!0,We(t,"complete"),We(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),va(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),va(this,!0)),ke.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Kg(this):this.fb())};U.fb=function(){Kg(this)};function Kg(t){if(t.h&&typeof Ql<"u"&&(!t.C[1]||Zt(t)!=4||t.aa()!=2)){if(t.v&&Zt(t)==4)iu(t.Ha,0,t);else if(We(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Pg)[1]||null;if(!r&&Q.self&&Q.self.location){var i=Q.self.location.protocol;r=i.substr(0,i.length-1)}s=!mT.test(r?r.toLowerCase():"")}n=s}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var o=2<Zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qg(t)}}finally{va(t)}}}}function va(t,e){if(t.g){zg(t);const n=t.g,s=t.C[0]?ko:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=s}catch{}}}function zg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Zt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gT(e)}};function af(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wg(t){let e="";return Xl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function fu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Wg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function cr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gg(t){this.Ca=0,this.i=[],this.j=new ha,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=cr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=cr("baseRetryDelayMs",5e3,t),this.bb=cr("retryDelaySeedMs",1e4,t),this.$a=cr("forwardChannelMaxRetries",2,t),this.ta=cr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new $g(t&&t.concurrentRequestLimit),this.Fa=new fT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=Gg.prototype;U.ma=8;U.G=1;function du(t){if(Qg(t),t.G==3){var e=t.U++,n=on(t.F);Te(n,"SID",t.I),Te(n,"RID",e),Te(n,"TYPE","terminate"),Si(t,n),e=new Ei(t,t.j,e,void 0),e.K=2,e.v=ma(on(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=sm(e.l,null),e.g.da(e.v)),e.F=Date.now(),bi(e)}tm(t)}function wa(t){t.g&&(gu(t),t.g.cancel(),t.g=null)}function Qg(t){wa(t),t.u&&(Q.clearTimeout(t.u),t.u=null),xo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function _a(t){Fg(t.h)||t.m||(t.m=!0,yg(t.Ja,t),t.C=0)}function wT(t,e){return Ug(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=wi(et(t.Ja,t,e),em(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ei(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=lg(i),ug(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yg(this,r,e),n=on(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),Si(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Wg(i)))+"&"+e:this.o&&fu(n,this.o,i)),lu(this.h,r),this.Ya&&Te(n,"TYPE","init"),this.O?(Te(n,"$req",e),Te(n,"SID","null"),r.Z=!0,Gc(r,n,null)):Gc(r,n,e),this.G=2}}else this.G==3&&(t?cf(this,t):this.i.length==0||Fg(this.h)||cf(this))};function cf(t,e){var n;e?n=e.m:n=t.U++;const s=on(t.F);Te(s,"SID",t.I),Te(s,"RID",n),Te(s,"AID",t.T),Si(t,s),t.o&&t.s&&fu(s,t.o,t.s),n=new Ei(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Yg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),lu(t.h,n),Gc(n,s,e)}function Si(t,e){t.ia&&Xl(t.ia,function(n,s){Te(e,s,n)}),t.l&&Ng({},function(n,s){Te(e,s,n)})}function Yg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?et(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{dT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Jg(t){t.g||t.u||(t.Z=1,yg(t.Ia,t),t.A=0)}function pu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=wi(et(t.Ia,t),em(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Xg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=wi(et(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ct(10),wa(this),Xg(this))};function gu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Xg(t){t.g=new Ei(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=on(t.sa);Te(e,"RID","rpc"),Te(e,"SID",t.I),Te(e,"CI",t.L?"0":"1"),Te(e,"AID",t.T),Te(e,"TYPE","xmlhttp"),Si(t,e),t.o&&t.s&&fu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ma(on(e)),n.s=null,n.P=!0,kg(n,t)}U.cb=function(){this.v!=null&&(this.v=null,wa(this),pu(this),ct(19))};function xo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Zg(t,e){var n=null;if(t.g==e){xo(t),gu(t),t.g=null;var s=2}else if(Yc(t.h,e))n=e.D,Vg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=fa(),We(s,new Tg(s,n)),_a(t)}else Jg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&wT(t,e)||s==2&&pu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Qn(t,5);break;case 4:Qn(t,10);break;case 3:Qn(t,6);break;default:Qn(t,2)}}}function em(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Qn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=et(t.kb,t);n||(n=new is("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||No(n,"https"),ma(n)),pT(n.toString(),s)}else ct(2);t.G=0,t.l&&t.l.va(e),tm(t),Qg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function tm(t){if(t.G=0,t.la=[],t.l){const e=Bg(t.h);(e.length!=0||t.i.length!=0)&&(Yh(t.la,e),Yh(t.la,t.i),t.h.i.length=0,Yl(t.i),t.i.length=0),t.l.ua()}}function nm(t,e,n){var s=n instanceof is?on(n):new is(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Po(s,s.m);else{var r=Q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new is(null,void 0);s&&No(i,s),e&&(i.g=e),r&&Po(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Te(s,n,e),Te(s,"VER",t.ma),Si(t,s),s}function sm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ke(new Ii({jb:!0})):new ke(t.ra),e.Ka(t.H),e}function rm(){}U=rm.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Mo(){if(qs&&!(10<=Number(LI)))throw Error("Environmental error: no available transport.")}Mo.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){He.call(this),this.g=new Gg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ro(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ro(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new tr(this)}Ge(pt,He);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=nm(t,null,t.V),_a(t)};pt.prototype.close=function(){du(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=su(t),t=n);e.i.push(new uT(e.ab++,t)),e.G==3&&_a(e)};pt.prototype.M=function(){this.g.l=null,delete this.j,du(this.g),delete this.g,pt.X.M.call(this)};function im(t){au.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(im,au);function om(){cu.call(this),this.status=1}Ge(om,cu);function tr(t){this.g=t}Ge(tr,rm);tr.prototype.xa=function(){We(this.g,"a")};tr.prototype.wa=function(t){We(this.g,new im(t))};tr.prototype.va=function(t){We(this.g,new om)};tr.prototype.ua=function(){We(this.g,"b")};Mo.prototype.createWebChannel=Mo.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;da.NO_ERROR=0;da.TIMEOUT=8;da.HTTP_ERROR=6;Sg.COMPLETE="complete";Cg.EventType=_i;_i.OPEN="a";_i.CLOSE="b";_i.ERROR="c";_i.MESSAGE="d";He.prototype.listen=He.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.Oa;ke.prototype.getLastErrorCode=ke.prototype.Ea;ke.prototype.getStatus=ke.prototype.aa;ke.prototype.getResponseJson=ke.prototype.Sa;ke.prototype.getResponseText=ke.prototype.fa;ke.prototype.send=ke.prototype.da;ke.prototype.setWithCredentials=ke.prototype.Ka;var _T=function(){return new Mo},ET=function(){return fa()},nc=da,bT=Sg,IT=ys,lf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},TT=Ii,ji=Cg,ST=ke;const uf="@firebase/firestore";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let nr="9.19.0";/**
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
 */const ds=new $l("@firebase/firestore");function hf(){return ds.logLevel}function V(t,...e){if(ds.logLevel<=de.DEBUG){const n=e.map(mu);ds.debug(`Firestore (${nr}): ${t}`,...n)}}function an(t,...e){if(ds.logLevel<=de.ERROR){const n=e.map(mu);ds.error(`Firestore (${nr}): ${t}`,...n)}}function Lo(t,...e){if(ds.logLevel<=de.WARN){const n=e.map(mu);ds.warn(`Firestore (${nr}): ${t}`,...n)}}function mu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function Ie(t,e){t||G()}function ne(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class AT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kT{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new am(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Ye(e)}}class RT{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class OT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new RT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NT{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new DT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function PT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class cm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=PT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function Ks(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ue(0,0))}static max(){return new Z(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wr{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Wr{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const xT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Wr{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return xT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Se.fromString(e))}static fromName(e){return new H(Se.fromString(e).popFirst(5))}static empty(){return new H(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Se(e.slice()))}}function MT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new Ue(n+1,0):new Ue(n,s));return new Pn(r,H.empty(),e)}function LT(t){return new Pn(t.readTime,t.key,-1)}class Pn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Pn(Z.min(),H.empty(),-1)}static max(){return new Pn(Z.max(),H.empty(),-1)}}function $T(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ci(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==FT)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}yu.ct=-1;function Ea(t){return t==null}function $o(t){return t===0&&1/t==-1/0}function VT(t){return typeof t=="number"&&Number.isInteger(t)&&!$o(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ff(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??qe.RED,this.left=r??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new df(this.data.getIterator())}getIteratorFrom(e){return new df(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class df{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new Ve(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class BT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new BT("Invalid base64 string: "+r):r}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const jT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=jT.exec(t);if(Ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zs(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hm(t){const e=t.mapValue.fields.__previous_value__;return um(e)?hm(e):e}function Gr(t){const e=xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class HT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?um(t)?4:qT(t)?9007199254740991:10:G()}function qt(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gr(t).isEqual(Gr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=xn(s.timestampValue),o=xn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return zs(s.bytesValue).isEqual(zs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return xe(s.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return xe(s.integerValue)===xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=xe(s.doubleValue),o=xe(r.doubleValue);return i===o?$o(i)===$o(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ff(i)!==ff(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Yr(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=ps(t),s=ps(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=xe(r.integerValue||r.doubleValue),a=xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return pf(t.timestampValue,e.timestampValue);case 4:return pf(Gr(t),Gr(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,i){const o=zs(r),a=zs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ge(xe(r.latitude),xe(i.latitude));return o!==0?o:ge(xe(r.longitude),xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ws(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===qi.mapValue&&i===qi.mapValue)return 0;if(r===qi.mapValue)return 1;if(i===qi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const f=Ws(o[a[u]],c[l[u]]);if(f!==0)return f}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function pf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=xn(t),s=xn(e),r=ge(n.seconds,s.seconds);return r!==0?r:ge(n.nanos,s.nanos)}function Gs(t){return Jc(t)}function Jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=xn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Jc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Jc(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Xc(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function gf(t){return!!t&&"nullValue"in t}function mf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function Tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Tr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tr(n)}setAll(e){let n=Ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Tr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];lo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){sr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new _t(Tr(this.value))}}function fm(t){const e=[];return sr(t.fields,(n,s)=>{const r=new Ze([n]);if(lo(s)){const i=fm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Rt(e)}/**
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
 */class Je{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,Z.min(),Z.min(),Z.min(),_t.empty(),0)}static newFoundDocument(e,n,s,r){return new Je(e,1,n,Z.min(),s,r,0)}static newNoDocument(e,n){return new Je(e,2,n,Z.min(),Z.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Z.min(),Z.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fo{constructor(e,n){this.position=e,this.inclusive=n}}function yf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sr{constructor(e,n="asc"){this.field=e,this.dir=n}}function KT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class dm{}class $e extends dm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new WT(e,n,s):n==="array-contains"?new YT(e,s):n==="in"?new JT(e,s):n==="not-in"?new XT(e,s):n==="array-contains-any"?new ZT(e,s):new $e(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new GT(e,s):new QT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ws(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Kt extends dm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Kt(e,n)}matches(e){return pm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function pm(t){return t.op==="and"}function gm(t){return zT(t)&&pm(t)}function zT(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function Zc(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(gm(t))return t.filters.map(e=>Zc(e)).join(",");{const e=t.filters.map(n=>Zc(n)).join(",");return`${t.op}(${e})`}}function mm(t,e){return t instanceof $e?function(n,s){return s instanceof $e&&n.op===s.op&&n.field.isEqual(s.field)&&qt(n.value,s.value)}(t,e):t instanceof Kt?function(n,s){return s instanceof Kt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&mm(i,s.filters[o]),!0):!1}(t,e):void G()}function ym(t){return t instanceof $e?function(e){return`${e.field.canonicalString()} ${e.op} ${Gs(e.value)}`}(t):t instanceof Kt?function(e){return e.op.toString()+" {"+e.getFilters().map(ym).join(" ,")+"}"}(t):"Filter"}class WT extends $e{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class GT extends $e{constructor(e,n){super(e,"in",n),this.keys=vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QT extends $e{constructor(e,n){super(e,"not-in",n),this.keys=vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class YT extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&Yr(n.arrayValue,this.value)}}class JT extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yr(this.value.arrayValue,n)}}class XT extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yr(this.value.arrayValue,n)}}class ZT extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Yr(this.value.arrayValue,s))}}/**
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
 */class eS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function wf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new eS(t,e,n,s,r,i,o)}function wu(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Zc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ea(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Gs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Gs(s)).join(",")),e.ft=n}return e.ft}function _u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vf(t.startAt,e.startAt)&&vf(t.endAt,e.endAt)}function el(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ba{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function tS(t,e,n,s,r,i,o,a){return new ba(t,e,n,s,r,i,o,a)}function wm(t){return new ba(t)}function _f(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sS(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rS(t){return t.collectionGroup!==null}function Vs(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=sS(e),s=nS(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Sr(n)),e.dt.push(new Sr(Ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Sr(Ze.keyField(),i))}}}return e.dt}function cn(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=wf(e.path,e.collectionGroup,Vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Vs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Sr(i.field,o))}const s=e.endAt?new Fo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fo(e.startAt.position,e.startAt.inclusive):null;e.wt=wf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function tl(t,e,n){return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ia(t,e){return _u(cn(t),cn(e))&&t.limitType===e.limitType}function _m(t){return`${wu(cn(t))}|lt:${t.limitType}`}function nl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ym(s)).join(", ")}]`),Ea(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Gs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Gs(s)).join(",")),`Target(${n})`}(cn(t))}; limitType=${t.limitType})`}function Ta(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Vs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=yf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Vs(n),s)||n.endAt&&!function(r,i,o){const a=yf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Vs(n),s))}(t,e)}function iS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Em(t){return(e,n)=>{let s=!1;for(const r of Vs(t)){const i=oS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function oS(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ws(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */class rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return lm(this.inner)}size(){return this.innerSize}}/**
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
 */const aS=new Be(H.comparator);function ln(){return aS}const bm=new Be(H.comparator);function vr(...t){let e=bm;for(const n of t)e=e.insert(n.key,n);return e}function Im(t){let e=bm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Yn(){return Cr()}function Tm(){return Cr()}function Cr(){return new rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const cS=new Be(H.comparator),lS=new Ve(H.comparator);function ae(...t){let e=lS;for(const n of t)e=e.add(n);return e}const uS=new Ve(ge);function Sm(){return uS}/**
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
 */function Cm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$o(e)?"-0":e}}function Am(t){return{integerValue:""+t}}function hS(t,e){return VT(e)?Am(e):Cm(t,e)}/**
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
 */class Sa{constructor(){this._=void 0}}function fS(t,e,n){return t instanceof Uo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Jr?Rm(t,e):t instanceof Xr?Om(t,e):function(s,r){const i=km(s,r),o=Ef(i)+Ef(s._t);return Xc(i)&&Xc(s._t)?Am(o):Cm(s.serializer,o)}(t,e)}function dS(t,e,n){return t instanceof Jr?Rm(t,e):t instanceof Xr?Om(t,e):n}function km(t,e){return t instanceof Vo?Xc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Uo extends Sa{}class Jr extends Sa{constructor(e){super(),this.elements=e}}function Rm(t,e){const n=Dm(e);for(const s of t.elements)n.some(r=>qt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Xr extends Sa{constructor(e){super(),this.elements=e}}function Om(t,e){let n=Dm(e);for(const s of t.elements)n=n.filter(r=>!qt(r,s));return{arrayValue:{values:n}}}class Vo extends Sa{constructor(e,n){super(),this.serializer=e,this._t=n}}function Ef(t){return xe(t.integerValue||t.doubleValue)}function Dm(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Jr&&s instanceof Jr||n instanceof Xr&&s instanceof Xr?Ks(n.elements,s.elements,qt):n instanceof Vo&&s instanceof Vo?qt(n._t,s._t):n instanceof Uo&&s instanceof Uo}(t.transform,e.transform)}class gS{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function Nm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xm(t.key,nn.none()):new ki(t.key,t.data,nn.none());{const n=t.data,s=_t.empty();let r=new Ve(Ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new vs(t.key,s,new Rt(r.toArray()),nn.none())}}function mS(t,e,n){t instanceof ki?function(s,r,i){const o=s.value.clone(),a=If(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(s,r,i){if(!uo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=If(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Pm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ar(t,e,n,s){return t instanceof ki?function(r,i,o,a){if(!uo(r.precondition,i))return o;const c=r.value.clone(),l=Tf(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof vs?function(r,i,o,a){if(!uo(r.precondition,i))return o;const c=Tf(r.fieldTransforms,a,i),l=i.data;return l.setAll(Pm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return uo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function yS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=km(s.transform,r||null);i!=null&&(n===null&&(n=_t.empty()),n.set(s.field,i))}return n||null}function bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ks(n,s,(r,i)=>pS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ki extends Ca{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vs extends Ca{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function If(t,e,n){const s=new Map;Ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,dS(o,a,n[r]))}return s}function Tf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,fS(i,o,e))}return s}class xm extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vS extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&mS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ar(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ar(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Tm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Nm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,s)=>bf(n,s))&&Ks(this.baseMutations,e.baseMutations,(n,s)=>bf(n,s))}}class Eu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ie(e.mutations.length===s.length);let r=cS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Eu(e,n,s,r)}}/**
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
 */class _S{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ES{constructor(e){this.count=e}}/**
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
 */var Pe,ue;function bS(t){switch(t){default:return G();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Mm(t){if(t===void 0)return an("GRPC error has no .code"),I.UNKNOWN;switch(t){case Pe.OK:return I.OK;case Pe.CANCELLED:return I.CANCELLED;case Pe.UNKNOWN:return I.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return I.INTERNAL;case Pe.UNAVAILABLE:return I.UNAVAILABLE;case Pe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Pe.NOT_FOUND:return I.NOT_FOUND;case Pe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Pe.ABORTED:return I.ABORTED;case Pe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Pe.DATA_LOSS:return I.DATA_LOSS;default:return G()}}(ue=Pe||(Pe={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class bu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ki}static getOrCreateInstance(){return Ki===null&&(Ki=new bu),Ki}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ki=null;/**
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
 */class Aa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Aa(Z.min(),r,Sm(),ln(),ae())}}class Ri{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ri(s,n,ae(),ae(),ae())}}/**
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
 */class ho{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Lm{constructor(e,n){this.targetId=e,this.Et=n}}class $m{constructor(e,n,s=st.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Sf{constructor(){this.At=0,this.Rt=Af(),this.vt=st.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ae(),n=ae(),s=ae();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new Ri(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Af()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class IS{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=ln(),this.qt=Cf(),this.Ut=new Ve(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(el(o))if(r===0){const a=new H(o.path);this.Qt(s,a,Je.newNoDocument(a,Z.min()))}else Ie(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=bu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&el(a.target)){const c=new H(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Je.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ae();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Aa(e,n,this.Ut,this.Lt,s);return this.Lt=ln(),this.qt=Cf(),this.Ut=new Ve(ge),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Sf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ve(ge),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Sf),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Cf(){return new Be(H.comparator)}function Af(){return new Be(H.comparator)}/**
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
 */const TS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),SS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),CS=(()=>({and:"AND",or:"OR"}))();class AS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kS(t,e){return Bo(t,e.toTimestamp())}function Bt(t){return Ie(!!t),Z.fromTimestamp(function(e){const n=xn(e);return new Ue(n.seconds,n.nanos)}(t))}function Iu(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Um(t){const e=Se.fromString(t);return Ie(Hm(e)),e}function sl(t,e){return Iu(t.databaseId,e.path)}function sc(t,e){const n=Um(e);if(n.get(1)!==t.databaseId.projectId)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Vm(n))}function rl(t,e){return Iu(t.databaseId,e)}function RS(t){const e=Um(t);return e.length===4?Se.emptyPath():Vm(e)}function il(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vm(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kf(t,e,n){return{name:sl(t,e),fields:n.value.mapValue.fields}}function OS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ie(l===void 0||typeof l=="string"),st.fromBase64String(l||"")):(Ie(l===void 0||l instanceof Uint8Array),st.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Mm(c.code);return new q(l,c.message||"")}(o);n=new $m(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=sc(t,s.document.name),i=Bt(s.document.updateTime),o=s.document.createTime?Bt(s.document.createTime):Z.min(),a=new _t({mapValue:{fields:s.document.fields}}),c=Je.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new ho(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=sc(t,s.document),i=s.readTime?Bt(s.readTime):Z.min(),o=Je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=sc(t,s.document),i=s.removedTargetIds||[];n=new ho([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new ES(r),o=s.targetId;n=new Lm(o,i)}}return n}function DS(t,e){let n;if(e instanceof ki)n={update:kf(t,e.key,e.value)};else if(e instanceof xm)n={delete:sl(t,e.key)};else if(e instanceof vs)n={update:kf(t,e.key,e.data),updateMask:VS(e.fieldMask)};else{if(!(e instanceof vS))return G();n={verify:sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Uo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Jr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:kS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function NS(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Bt(s.updateTime):Bt(r);return i.isEqual(Z.min())&&(i=Bt(r)),new gS(i,s.transformResults||[])}(n,e))):[]}function PS(t,e){return{documents:[rl(t,e.path)]}}function xS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=rl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=rl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return jm(Kt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Os(u.field),direction:$S(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Ea(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function MS(t){let e=RS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Bm(u);return h instanceof Kt&&gm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Sr(Ds(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ea(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Fo(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Fo(f,h)}(n.endAt)),tS(e,r,o,i,a,"F",c,l)}function LS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ds(e.unaryFilter.field);return $e.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(e.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ds(e.unaryFilter.field);return $e.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ds(e.unaryFilter.field);return $e.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return $e.create(Ds(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Kt.create(e.compositeFilter.filters.map(n=>Bm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function $S(t){return TS[t]}function FS(t){return SS[t]}function US(t){return CS[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ds(t){return Ze.fromServerFormat(t.fieldPath)}function jm(t){return t instanceof $e?function(e){if(e.op==="=="){if(mf(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NAN"}};if(gf(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(mf(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NOT_NAN"}};if(gf(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(e.field),op:FS(e.op),value:e.value}}}(t):t instanceof Kt?function(e){const n=e.getFilters().map(s=>jm(s));return n.length===1?n[0]:{compositeFilter:{op:US(e.op),filters:n}}}(t):G()}function VS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class os{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=st.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new os(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class BS{constructor(e){this.se=e}}function jS(t){const e=MS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tl(e,e.limit,"L"):e}/**
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
 */class HS{constructor(){this.He=new qS}addToCollectionParentIndex(e,n){return this.He.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Pn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class qS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ve(Se.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(Se.comparator)).toArray()}}/**
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
 */class Qs{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Qs(0)}static bn(){return new Qs(-1)}}/**
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
 */class KS{constructor(){this.changes=new rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class WS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ar(s.mutation,r,Rt.empty(),Ue.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const r=Yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=vr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=ln();const o=Cr(),a=Cr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof vs)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ar(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new zS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Cr();let r=new Be((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Rt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ae()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Tm();u.forEach(f=>{if(!i.has(f)){const p=Nm(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Yn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:Im(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=vr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=vr();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new ba(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Je.newInvalidDocument(l)))});let o=vr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Ar(l.mutation,c,Rt.empty(),Ue.now()),Ta(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class GS{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Bt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:jS(s.bundledQuery),readTime:Bt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class QS{constructor(){this.overlays=new Be(H.comparator),this.ts=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Yn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Yn(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Yn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _S(n,s));let i=this.ts.get(n);i===void 0&&(i=ae(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class Tu{constructor(){this.es=new Ve(je.ns),this.ss=new Ve(je.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new je(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new je(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new H(new Se([])),s=new je(n,e),r=new je(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new H(new Se([])),s=new je(n,e),r=new je(n,e+1);let i=ae();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return H.comparator(e.key,n.key)||ge(e.ds,n.ds)}static rs(e,n){return ge(e.ds,n.ds)||H.comparator(e.key,n.key)}}/**
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
 */class YS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ve(je.ns)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ve(ge);return n.forEach(r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),T.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new je(new H(i),0);let a=new Ve(ge);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),T.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ie(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return T.forEach(n.mutations,r=>{const i=new je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new je(n,0),r=this._s.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class JS{constructor(e){this.Ts=e,this.docs=new Be(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let s=ln();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Je.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ln();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||$T(LT(u),s)<=0||(r.has(u.key)||Ta(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){G()}Es(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new XS(this)}getSize(e){return T.resolve(this.size)}}class XS extends KS{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class ZS{constructor(e){this.persistence=e,this.As=new rr(n=>wu(n),_u),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Tu,this.targetCount=0,this.bs=Qs.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),T.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Sn(n),T.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.vs.containsKey(n))}}/**
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
 */class eC{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new yu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ZS(this),this.indexManager=new HS,this.remoteDocumentCache=function(s){return new JS(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new BS(n),this.xs=new GS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new YS(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new tC(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return T.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class tC extends UT{constructor(e){super(),this.currentSequenceNumber=e}}class Su{constructor(e){this.persistence=e,this.$s=new Tu,this.Ms=null}static Fs(e){return new Su(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),T.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Bs,s=>{const r=H.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return T.or([()=>T.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Cu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=ae(),r=ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Cu(e,n.fromCache,s,r)}}/**
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
 */class nC{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(_f(n))return T.resolve(null);let s=cn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=tl(n,null,"F"),s=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ae(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,tl(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return _f(n)||r.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(hf()<=de.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),nl(n)),this.Fi(e,o,n,MT(r,-1)))})}$i(e,n){let s=new Ve(Em(e));return n.forEach((r,i)=>{Ta(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return hf()<=de.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",nl(n)),this.xi.getDocumentsMatchingQuery(e,n,Pn.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class sC{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Be(ge),this.qi=new rr(i=>wu(i),_u),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WS(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function rC(t,e,n,s){return new sC(t,e,n,s)}async function qm(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ae();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function iC(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=T.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(y=>{const v=c.docVersions.get(p);Ie(v!==null),y.version.compareTo(v)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Km(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function oC(t,e){const n=ne(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(st.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(y,v,C){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,p,u)&&a.push(n.Ds.updateTargetData(i,p))});let c=ln(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(aC(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(Z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function aC(t,e,n){let s=ae(),r=ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=ln();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function cC(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function lC(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new os(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function ol(t,e,n){const s=ne(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ai(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Rf(t,e,n){const s=ne(t);let r=Z.min(),i=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),h=u.qi.get(l);return h!==void 0?T.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,cn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:ae())).next(a=>(uC(s,iS(e),a),{documents:a,Wi:i})))}function uC(t,e,n){let s=t.Ui.get(e)||Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class Of{constructor(){this.activeTargetIds=Sm()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hC{constructor(){this.Br=new Of,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Of,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fC{qr(e){}shutdown(){}}/**
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
 */class Df{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zi=null;function rc(){return zi===null?zi=268435456+Math.round(2147483648*Math.random()):zi++,"0x"+zi.toString(16)}/**
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
 */const dC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pC{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Qe="WebChannelConnection";class gC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=rc(),a=this.ao(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Lo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+nr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=dC[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=rc();return new Promise((o,a)=>{const c=new ST;c.setWithCredentials(!0),c.listenOnce(bT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case nc.NO_ERROR:const u=c.getResponseJson();V(Qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case nc.TIMEOUT:V(Qe,`RPC '${e}' ${i} timed out`),a(new q(I.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const h=c.getStatus();if(V(Qe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(v){const C=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(C)>=0?C:I.UNKNOWN}(p.status);a(new q(y,p.message))}else a(new q(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(I.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{V(Qe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);V(Qe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=rc(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_T(),a=ET(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new TT({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");V(Qe,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const p=new pC({Wr:v=>{f?V(Qe,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(V(Qe,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),V(Qe,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},Hr:()=>u.close()}),y=(v,C,O)=>{v.listen(C,N=>{try{O(N)}catch(L){setTimeout(()=>{throw L},0)}})};return y(u,ji.EventType.OPEN,()=>{f||V(Qe,`RPC '${e}' stream ${r} transport opened.`)}),y(u,ji.EventType.CLOSE,()=>{f||(f=!0,V(Qe,`RPC '${e}' stream ${r} transport closed`),p.so())}),y(u,ji.EventType.ERROR,v=>{f||(f=!0,Lo(Qe,`RPC '${e}' stream ${r} transport errored:`,v),p.so(new q(I.UNAVAILABLE,"The operation could not be completed")))}),y(u,ji.EventType.MESSAGE,v=>{var C;if(!f){const O=v.data[0];Ie(!!O);const N=O,L=N.error||((C=N[0])===null||C===void 0?void 0:C.error);if(L){V(Qe,`RPC '${e}' stream ${r} received error:`,L);const $=L.status;let Y=function(Re){const J=Pe[Re];if(J!==void 0)return Mm(J)}($),_e=L.message;Y===void 0&&(Y=I.INTERNAL,_e="Unknown error status: "+$+" with message "+L.message),f=!0,p.so(new q(Y,_e)),u.close()}else V(Qe,`RPC '${e}' stream ${r} received:`,O),p.io(O)}}),y(a,IT.STAT_EVENT,v=>{v.stat===lf.PROXY?V(Qe,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===lf.NOPROXY&&V(Qe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function ic(){return typeof document<"u"?document:null}/**
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
 */function ka(t){return new AS(t,!0)}/**
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
 */class zm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Wm{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new zm(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new q(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mC extends Wm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=OS(this.serializer,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Bt(i.readTime):Z.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=il(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=el(a)?{documents:PS(r,a)}:{query:xS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Fm(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Bo(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=LS(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=il(this.serializer),n.removeTarget=e,this.Fo(n)}}class yC extends Wm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=NS(e.writeResults,e.commitTime),s=Bt(e.commitTime);return this.listener.Zo(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=il(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>DS(this.serializer,s))};this.Fo(n)}}/**
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
 */class vC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(I.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(I.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class wC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(an(n),this.ru=!1):V("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class _C{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{ws(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.du.add(4),await Oi(c),c.mu.set("Unknown"),c.du.delete(4),await Ra(c)}(this))})}),this.mu=new wC(s,r)}}async function Ra(t){if(ws(t))for(const e of t.wu)await e(!0)}async function Oi(t){for(const e of t.wu)await e(!1)}function Gm(t,e){const n=ne(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Ru(n)?ku(n):ir(n).No()&&Au(n,e))}function Qm(t,e){const n=ne(t),s=ir(n);n.fu.delete(e),s.No()&&Ym(n,e),n.fu.size===0&&(s.No()?s.$o():ws(n)&&n.mu.set("Unknown"))}function Au(t,e){t.gu.Ot(e.targetId),ir(t).jo(e)}function Ym(t,e){t.gu.Ot(e),ir(t).Wo(e)}function ku(t){t.gu=new IS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ir(t).start(),t.mu.ou()}function Ru(t){return ws(t)&&!ir(t).xo()&&t.fu.size>0}function ws(t){return ne(t).du.size===0}function Jm(t){t.gu=void 0}async function EC(t){t.fu.forEach((e,n)=>{Au(t,e)})}async function bC(t,e){Jm(t),Ru(t)?(t.mu.au(e),ku(t)):t.mu.set("Unknown")}async function IC(t,e,n){if(t.mu.set("Online"),e instanceof $m&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await jo(t,s)}else if(e instanceof ho?t.gu.Kt(e):e instanceof Lm?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const s=await Km(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(st.EMPTY_BYTE_STRING,c.snapshotVersion)),Ym(r,a);const l=new os(c.target,a,1,c.sequenceNumber);Au(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await jo(t,s)}}async function jo(t,e,n){if(!Ai(e))throw e;t.du.add(1),await Oi(t),t.mu.set("Offline"),n||(n=()=>Km(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ra(t)})}function Xm(t,e){return e().catch(n=>jo(t,n,e))}async function Oa(t){const e=ne(t),n=Mn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;TC(e);)try{const r=await cC(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,SC(e,r)}catch(r){await jo(e,r)}Zm(e)&&ey(e)}function TC(t){return ws(t)&&t.lu.length<10}function SC(t,e){t.lu.push(e);const n=Mn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Zm(t){return ws(t)&&!Mn(t).xo()&&t.lu.length>0}function ey(t){Mn(t).start()}async function CC(t){Mn(t).tu()}async function AC(t){const e=Mn(t);for(const n of t.lu)e.Yo(n.mutations)}async function kC(t,e,n){const s=t.lu.shift(),r=Eu.from(s,e,n);await Xm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Oa(t)}async function RC(t,e){e&&Mn(t).Jo&&await async function(n,s){if(r=s.code,bS(r)&&r!==I.ABORTED){const i=n.lu.shift();Mn(n).Oo(),await Xm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Oa(n)}var r}(t,e),Zm(t)&&ey(t)}async function Nf(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=ws(n);n.du.add(3),await Oi(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ra(n)}async function OC(t,e){const n=ne(t);e?(n.du.delete(2),await Ra(n)):e||(n.du.add(2),await Oi(n),n.mu.set("Unknown"))}function ir(t){return t.yu||(t.yu=function(e,n,s){const r=ne(e);return r.nu(),new mC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:EC.bind(null,t),Zr:bC.bind(null,t),zo:IC.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Ru(t)?ku(t):t.mu.set("Unknown")):(await t.yu.stop(),Jm(t))})),t.yu}function Mn(t){return t.pu||(t.pu=function(e,n,s){const r=ne(e);return r.nu(),new yC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:CC.bind(null,t),Zr:RC.bind(null,t),Xo:AC.bind(null,t),Zo:kC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Oa(t)):(await t.pu.stop(),t.lu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Ou{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ou(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Du(t,e){if(an("AsyncQueue",`${e}: ${t}`),Ai(t))return new q(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=vr(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Bs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Pf{constructor(){this.Iu=new Be(H.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ys{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ys(e,n,Bs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class DC{constructor(){this.Eu=void 0,this.listeners=[]}}class NC{constructor(){this.queries=new rr(e=>_m(e),Ia),this.onlineState="Unknown",this.Au=new Set}}async function PC(t,e){const n=ne(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new DC),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Du(o,`Initialization of query '${nl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Nu(n)}async function xC(t,e){const n=ne(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function MC(t,e){const n=ne(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Nu(n)}function LC(t,e,n){const s=ne(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Nu(t){t.Au.forEach(e=>{e.next()})}class $C{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ys(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class ty{constructor(e){this.key=e}}class ny{constructor(e){this.key=e}}class FC{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ae(),this.mutatedKeys=ae(),this.Ku=Em(e),this.Gu=new Bs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Pf,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=Ta(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let C=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(s.track({type:3,doc:p}),C=!0):this.Wu(f,p)||(s.track({type:2,doc:p}),C=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),C=!0):f&&!p&&(s.track({type:1,doc:f}),C=!0,(c||l)&&(a=!0)),C&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,f){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ys(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Pf,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ae(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new ny(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new ty(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ae();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Ys.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class UC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class VC{constructor(e){this.key=e,this.ec=!1}}class BC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new rr(a=>_m(a),Ia),this.ic=new Map,this.rc=new Set,this.oc=new Be(H.comparator),this.uc=new Map,this.cc=new Tu,this.ac={},this.hc=new Map,this.lc=Qs.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function jC(t,e){const n=XC(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await lC(n.localStore,cn(e));n.isPrimaryClient&&Gm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await HC(n,e,s,a==="current",o.resumeToken)}return r}async function HC(t,e,n,s,r){t.dc=(h,f,p)=>async function(y,v,C,O){let N=v.view.zu(C);N.Mi&&(N=await Rf(y.localStore,v.query,!1).then(({documents:Y})=>v.view.zu(Y,N)));const L=O&&O.targetChanges.get(v.targetId),$=v.view.applyChanges(N,y.isPrimaryClient,L);return Mf(y,v.targetId,$.Yu),$.snapshot}(t,h,f,p);const i=await Rf(t.localStore,e,!0),o=new FC(e,i.Wi),a=o.zu(i.documents),c=Ri.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Mf(t,n,l.Yu);const u=new UC(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function qC(t,e){const n=ne(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Ia(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ol(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Qm(n.remoteStore,s.targetId),al(n,s.targetId)}).catch(Ci)):(al(n,s.targetId),await ol(n.localStore,s.targetId,!0))}async function KC(t,e,n){const s=ZC(t);try{const r=await function(i,o){const a=ne(i),c=Ue.now(),l=o.reduce((f,p)=>f.add(p.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=ln(),y=ae();return a.Ki.getEntries(f,l).next(v=>{p=v,p.forEach((C,O)=>{O.isValidDocument()||(y=y.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{u=v;const C=[];for(const O of o){const N=yS(O,u.get(O.key).overlayedDocument);N!=null&&C.push(new vs(O.key,N,fm(N.value.mapValue),nn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,o)}).next(v=>{h=v;const C=v.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,C)})}).then(()=>({batchId:h.batchId,changes:Im(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Be(ge)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Di(s,r.changes),await Oa(s.remoteStore)}catch(r){const i=Du(r,"Failed to persist write");n.reject(i)}}async function sy(t,e){const n=ne(t);try{const s=await oC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Ie(o.ec):r.removedDocuments.size>0&&(Ie(o.ec),o.ec=!1))}),await Di(n,s,e)}catch(s){await Ci(s)}}function xf(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ne(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Nu(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zC(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Be(H.comparator);o=o.insert(i,Je.newNoDocument(i,Z.min()));const a=ae().add(i),c=new Aa(Z.min(),new Map,new Ve(ge),o,a);await sy(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Pu(s)}else await ol(s.localStore,e,!1).then(()=>al(s,e,n)).catch(Ci)}async function WC(t,e){const n=ne(t),s=e.batch.batchId;try{const r=await iC(n.localStore,e);iy(n,s,null),ry(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Di(n,r)}catch(r){await Ci(r)}}async function GC(t,e,n){const s=ne(t);try{const r=await function(i,o){const a=ne(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);iy(s,e,n),ry(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Di(s,r)}catch(r){await Ci(r)}}function ry(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function iy(t,e,n){const s=ne(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||oy(t,s)})}function oy(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Qm(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Pu(t))}function Mf(t,e,n){for(const s of n)s instanceof ty?(t.cc.addReference(s.key,e),QC(t,s)):s instanceof ny?(V("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||oy(t,s.key)):G()}function QC(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.rc.add(s),Pu(t))}function Pu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new H(Se.fromString(e)),s=t.lc.next();t.uc.set(s,new VC(n)),t.oc=t.oc.insert(n,s),Gm(t.remoteStore,new os(cn(wm(n.path)),s,2,yu.ct))}}async function Di(t,e,n){const s=ne(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Cu.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>T.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ai(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),p=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(p);l.Li=l.Li.insert(h,y)}}}(s.localStore,i))}async function YC(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await qm(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(I.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Di(n,s.Qi)}}function JC(t,e){const n=ne(t),s=n.uc.get(e);if(s&&s.ec)return ae().add(s.key);{let r=ae();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function XC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zC.bind(null,e),e.nc.zo=MC.bind(null,e.eventManager),e.nc.wc=LC.bind(null,e.eventManager),e}function ZC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GC.bind(null,e),e}class Lf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ka(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return rC(this.persistence,new nC,e.initialUser,this.serializer)}createPersistence(e){return new eC(Su.Fs,this.serializer)}createSharedClientState(e){return new hC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=YC.bind(null,this.syncEngine),await OC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NC}createDatastore(e){const n=ka(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new gC(r));var r;return function(i,o,a,c){return new vC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>xf(this.syncEngine,a,0),o=Df.D()?new Df:new fC,new _C(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new BC(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);V("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Oi(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class tA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class nA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ye.UNAUTHENTICATED,this.clientId=cm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Du(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function oc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await qm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rA(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Nf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Nf(e.remoteStore,i)),t._onlineComponents=e}function sA(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!sA(n))throw n;Lo("Error using user provided cache. Falling back to memory cache: "+n),await oc(t,new Lf)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await oc(t,new Lf);return t._offlineComponents}async function ay(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await $f(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await $f(t,new eA))),t._onlineComponents}function iA(t){return ay(t).then(e=>e.syncEngine)}async function oA(t){const e=await ay(t),n=e.eventManager;return n.onListen=jC.bind(null,e.syncEngine),n.onUnlisten=qC.bind(null,e.syncEngine),n}function aA(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new tA({next:h=>{i.enqueueAndForget(()=>xC(r,u)),h.fromCache&&a.source==="server"?c.reject(new q(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $C(o,l,{includeMetadataChanges:!0,xu:!0});return PC(r,u)}(await oA(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Ff=new Map;/**
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
 */function cy(t,e,n){if(!n)throw new q(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cA(t,e,n,s){if(e===!0&&s===!0)throw new q(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uf(t){if(!H.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(H.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Zr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(t);throw new q(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Bf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,cA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Da{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CT;switch(n.type){case"firstParty":return new OT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ff.get(e);n&&(V("ComponentProvider","Removing Datastore"),Ff.delete(e),n.terminate())}(this),Promise.resolve()}}function lA(t,e,n,s={}){var r;const i=(t=Zr(t,Da))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Lo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ye.MOCK_USER;else{o=sE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ye(c)}t._authCredentials=new AT(new am(o,a))}}/**
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
 */class bt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class Na{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Na(this.firestore,e,this._query)}}class Rn extends Na{constructor(e,n,s){super(e,n,wm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new H(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function uA(t,e,...n){if(t=dt(t),cy("collection","path",e),t instanceof Da){const s=Se.fromString(e,...n);return Vf(s),new Rn(t,null,s)}{if(!(t instanceof bt||t instanceof Rn))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return Vf(s),new Rn(t.firestore,null,s)}}function DR(t,e,...n){if(t=dt(t),arguments.length===1&&(e=cm.A()),cy("doc","path",e),t instanceof Da){const s=Se.fromString(e,...n);return Uf(s),new bt(t,null,new H(s))}{if(!(t instanceof bt||t instanceof Rn))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return Uf(s),new bt(t.firestore,t instanceof Rn?t.converter:null,new H(s))}}/**
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
 */class hA{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new zm(this,"async_queue_retry"),this.qc=()=>{const n=ic();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new kn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Ai(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw an("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Ou.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Mu extends Da{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new hA,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uy(this),this._firestoreClient.terminate()}}function fA(t,e){const n=typeof t=="object"?t:Ap(),s=typeof t=="string"?t:e||"(default)",r=Ul(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=eE("firestore");i&&lA(r,...i)}return r}function ly(t){return t._firestoreClient||uy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uy(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new HT(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new nA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Js(st.fromBase64String(e))}catch(n){throw new q(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Js(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hy{constructor(e){this._methodName=e}}/**
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
 */class $u{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const dA=/^__.*__$/;class pA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ki(e,this.data,n,this.fieldTransforms)}}function fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Fu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Fu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ho(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(fy(this.Yc)&&dA.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class gA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ka(e)}ua(e,n,s,r=!1){return new Fu({Yc:e,methodName:n,oa:s,path:Ze.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mA(t){const e=t._freezeSettings(),n=ka(t._databaseId);return new gA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yA(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);my("Data must be an object, but it was:",o,s);const a=py(s,o);let c,l;if(i.merge)c=new Rt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=vA(e,h,n);if(!o.contains(f))throw new q(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_A(u,f)||u.push(f)}c=new Rt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new pA(new _t(a),c,l)}function dy(t,e){if(gy(t=dt(t)))return my("Unsupported field value:",e,t),py(t,e);if(t instanceof hy)return function(n,s){if(!fy(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=dy(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hS(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ue.fromDate(n);return{timestampValue:Bo(s.serializer,r)}}if(n instanceof Ue){const r=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bo(s.serializer,r)}}if(n instanceof $u)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Js)return{bytesValue:Fm(s.serializer,n._byteString)};if(n instanceof bt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Iu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${xu(n)}`)}(t,e)}function py(t,e){const n={};return lm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(t,(s,r)=>{const i=dy(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function gy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof $u||t instanceof Js||t instanceof bt||t instanceof hy)}function my(t,e,n){if(!gy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=xu(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function vA(t,e,n){if((e=dt(e))instanceof Lu)return e._internalPath;if(typeof e=="string")return yy(t,e);throw Ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const wA=new RegExp("[~\\*/\\[\\]]");function yy(t,e,n){if(e.search(wA)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lu(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ho(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(I.INVALID_ARGUMENT,a+t+c)}function _A(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EA extends vy{data(){return super.data()}}function wy(t,e){return typeof e=="string"?yy(t,e):e instanceof Lu?e._internalPath:e._delegate._internalPath}/**
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
 */function bA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class IA{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return sr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new $u(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Gr(e));default:return null}}convertTimestamp(e){const n=xn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);Ie(Hm(s));const r=new Qr(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||an(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function TA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SA extends vy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(wy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fo extends SA{data(e={}){return super.data(e)}}class CA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Wi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fo(this._firestore,this._userDataWriter,s.key,s,new Wi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new fo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Wi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new fo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Wi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:AA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class kA extends IA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function RA(t){t=Zr(t,Na);const e=Zr(t.firestore,Mu),n=ly(e),s=new kA(e);return bA(t._query),aA(n,t._query).then(r=>new CA(e,s,t,r))}function NR(t,e,n){t=Zr(t,bt);const s=Zr(t.firestore,Mu),r=TA(t.converter,e,n);return OA(s,[yA(mA(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,nn.none())])}function OA(t,e){return function(n,s){const r=new kn;return n.asyncQueue.enqueueAndForget(async()=>KC(await iA(n),s,r)),r.promise}(ly(t),e)}(function(t,e=!0){(function(n){nr=n})(li),Hs(new ls("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Mu(new kT(n.getProvider("auth-internal")),new NT(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),An(uf,"3.10.0",t),An(uf,"3.10.0","esm2017")})();async function DA(t){var o;let n=Br();for(let a=0;a<5&&n.currentUser==null;a++)console.log("Waiting for authentication..."),await new Promise(c=>setTimeout(c,1e3)),n=Br();if(n===null||!((o=n.currentUser)!=null&&o.email))return console.log("Authentication failed or user email is null"),"undefined";const s=uA(fA(),"users"),r=await RA(s);let i;return r.forEach(a=>{a.data().email===n.currentUser.email&&(i=a.data()[t])}),i}const NA={data(){return{logState:"",sideBarDisplay:!1,auth:!1,name:""}},mounted(){this.sideBarDisplay=!1,Br().onAuthStateChanged(t=>{t?(this.auth=!0,DA("name").then(e=>{this.name=e})):this.auth=!1})},methods:{goHome(){this.$router.push("/")},authLogOut(){II()},toggleLocalSideBar(){this.sideBarDisplay=!this.sideBarDisplay}}},PA="/assets/logo-d503e1ea.png";const xA=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},MA={class:"container"},LA={class:"logo"},$A={class:"wrapper"},FA={key:0,class:"sidebar"},UA=Mt("hr",null,null,-1),VA=Mt("p",{class:"nav-link"},"Clothes",-1);function BA(t,e,n,s,r,i){const o=sh("router-link"),a=sh("router-view");return dr(),dh(vt,null,[Mt("div",MA,[Mt("header",null,[Mt("div",LA,[Mt("img",{onClick:e[0]||(e[0]=(...c)=>i.goHome&&i.goHome(...c)),class:"img-responsive",src:PA})])]),Mt("button",{class:"sidebarButton",onClick:e[1]||(e[1]=(...c)=>i.toggleLocalSideBar&&i.toggleLocalSideBar(...c))},"☰"),Mt("div",$A,[r.sideBarDisplay==!0?(dr(),dh("nav",FA,[Ke(o,{to:"/",class:"nav-link"},{default:As(()=>[ks("Home")]),_:1}),Ke(o,{to:"Closet",class:"nav-link"},{default:As(()=>[ks("My Closet")]),_:1}),Ke(o,{to:"/About",class:"nav-link"},{default:As(()=>[ks("About")]),_:1}),r.auth==!1?(dr(),Rc(o,{key:0,to:"/Login",class:"nav-link"},{default:As(()=>[ks("Log in")]),_:1})):Fa("v-if",!0),r.auth==!0?(dr(),Rc(o,{key:1,onClick:i.authLogOut,to:"/",class:"nav-link"},{default:As(()=>[ks("Log out")]),_:1},8,["onClick"])):Fa("v-if",!0),UA,VA])):Fa("v-if",!0)])]),Ke(a)],64)}const jA=xA(NA,[["render",BA],["__file","/home/dave/Documents/VueFleet/vue-project/src/App.vue"]]);function HA(){return _y().__VUE_DEVTOOLS_GLOBAL_HOOK__}function _y(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const qA=typeof Proxy=="function",KA="devtools-plugin:setup",zA="plugin:settings:set";let Is,cl;function WA(){var t;return Is!==void 0||(typeof window<"u"&&window.performance?(Is=!0,cl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Is=!0,cl=global.perf_hooks.performance):Is=!1),Is}function GA(){return WA()?cl.now():Date.now()}class QA{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return GA()}},n&&n.on(zA,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function YA(t,e){const n=t,s=_y(),r=HA(),i=qA&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(KA,t,e);else{const o=i?new QA(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof window<"u";function JA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function ac(t,e){const n={};for(const s in e){const r=e[s];n[s]=gt(r)?r.map(t):t(r)}return n}const kr=()=>{},gt=Array.isArray;function he(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const XA=/\/$/,ZA=t=>t.replace(XA,"");function cc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=nk(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function ek(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hf(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ln(e.matched[s],n.matched[r])&&Ey(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ey(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tk(t[n],e[n]))return!1;return!0}function tk(t,e){return gt(t)?qf(t,e):gt(e)?qf(e,t):t===e}function qf(t,e){return gt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function nk(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return he(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ei;(function(t){t.pop="pop",t.push="push"})(ei||(ei={}));var Rr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Rr||(Rr={}));function sk(t){if(!t)if(Yt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZA(t)}const rk=/^[^#]+#/;function ik(t,e){return t.replace(rk,"#")+e}function ok(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Pa=()=>({left:window.pageXOffset,top:window.pageYOffset});function ak(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!s||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(s&&i){he(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{he(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){he(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=ok(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Kf(t,e){return(history.state?history.state.position-e:-1)+t}const ll=new Map;function ck(t,e){ll.set(t,e)}function lk(t){const e=ll.get(t);return ll.delete(t),e}let uk=()=>location.protocol+"//"+location.host;function by(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),jf(c,"")}return jf(n,t)+s+r}function hk(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=by(t,location),y=n.value,v=e.value;let C=0;if(f){if(n.value=p,e.value=f,o&&o===y){o=null;return}C=v?f.position-v.position:0}else s(p);r.forEach(O=>{O(n.value,y,{delta:C,type:ei.pop,direction:C?C>0?Rr.forward:Rr.back:Rr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const p=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:Pa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function zf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Pa():null}}function fk(t){const{history:e,location:n}=window,s={value:by(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:uk()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(p){he("Error with push/replace State",p),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,zf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=pe({},r.value,e.state,{forward:c,scroll:Pa()});e.state||he(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=pe({},zf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function dk(t){t=sk(t);const e=fk(t),n=hk(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:t,go:s,createHref:ik.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function pk(t){return typeof t=="string"||t&&typeof t=="object"}function Iy(t){return typeof t=="string"||typeof t=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ty=Symbol("navigation failure");var Wf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wf||(Wf={}));const gk={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${yk(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Xs(t,e){return pe(new Error(gk[t](e)),{type:t,[Ty]:!0},e)}function Wt(t,e){return t instanceof Error&&Ty in t&&(e==null||!!(t.type&e))}const mk=["params","query","hash"];function yk(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of mk)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Gf="[^/]+?",vk={sensitive:!1,strict:!1,start:!0,end:!0},wk=/[.+*?^${}()[\]/\\]/g;function _k(t,e){const n=pe({},vk,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(wk,"\\$&"),p+=40;else if(f.type===1){const{value:y,repeatable:v,optional:C,regexp:O}=f;i.push({name:y,repeatable:v,optional:C});const N=O||Gf;if(N!==Gf){p+=10;try{new RegExp(`(${N})`)}catch($){throw new Error(`Invalid custom RegExp for param "${y}" (${N}): `+$.message)}}let L=v?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(L=C&&l.length<2?`(?:/${L})`:"/"+L),C&&(L+="?"),r+=L,p+=20,C&&(p+=-8),v&&(p+=-20),N===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",y=i[f-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:v,optional:C}=p,O=y in l?l[y]:"";if(gt(O)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const N=gt(O)?O.join("/"):O;if(!N)if(C)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Ek(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function bk(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Ek(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Qf(s))return 1;if(Qf(r))return-1}return r.length-s.length}function Qf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ik={type:0,value:""},Tk=/[a-zA-Z0-9_]/;function Sk(t){if(!t)return[[]];if(t==="/")return[[Ik]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Tk.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Ck(t,e,n){const s=_k(Sk(t.path),n);{const i=new Set;for(const o of s.keys)i.has(o.name)&&he(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ak(t,e){const n=[],s=new Map;e=Xf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const p=!f,y=kk(u);Nk(y,h),y.aliasOf=f&&f.record;const v=Xf(e,u),C=[y];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of L)C.push(pe({},y,{components:f?f.record.components:y.components,path:$,aliasOf:f?f.record:y}))}let O,N;for(const L of C){const{path:$}=L;if(h&&$[0]!=="/"){const Y=h.record.path,_e=Y[Y.length-1]==="/"?"":"/";L.path=h.record.path+($&&_e+$)}if(L.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(O=Ck(L,h,v),h&&$[0]==="/"&&Pk(O,h),f?(f.alias.push(O),Dk(f,O)):(N=N||O,N!==O&&N.alias.push(O),p&&u.name&&!Jf(O)&&o(u.name)),y.children){const Y=y.children;for(let _e=0;_e<Y.length;_e++)i(Y[_e],O,f&&f.children[_e])}f=f||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return N?()=>{o(N)}:kr}function o(u){if(Iy(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&bk(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Sy(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Jf(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},y,v;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Xs(1,{location:u});{const N=Object.keys(u.params||{}).filter(L=>!f.keys.find($=>$.name===L));N.length&&he(`Discarded invalid param(s) "${N.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=f.record.name,p=pe(Yf(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Yf(u.params,f.keys.map(N=>N.name))),y=f.stringify(p)}else if("path"in u)y=u.path,y.startsWith("/")||he(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(N=>N.re.test(y)),f&&(p=f.parse(y),v=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw Xs(1,{location:u,currentLocation:h});v=f.record.name,p=pe({},h.params,u.params),y=f.stringify(p)}const C=[];let O=f;for(;O;)C.unshift(O.record),O=O.parent;return{name:v,path:y,params:p,matched:C,meta:Ok(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Yf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function kk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Rk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Rk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Jf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ok(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Xf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ul(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function Dk(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(ul.bind(null,n)))return he(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(ul.bind(null,n)))return he(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function Nk(t,e){e&&e.record.name&&!t.name&&!t.path&&he(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Pk(t,e){for(const n of e.keys)if(!t.keys.find(ul.bind(null,n)))return he(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Sy(t,e){return e.children.some(n=>n===t||Sy(t,n))}const Cy=/#/g,xk=/&/g,Mk=/\//g,Lk=/=/g,$k=/\?/g,Ay=/\+/g,Fk=/%5B/g,Uk=/%5D/g,ky=/%5E/g,Vk=/%60/g,Ry=/%7B/g,Bk=/%7C/g,Oy=/%7D/g,jk=/%20/g;function Uu(t){return encodeURI(""+t).replace(Bk,"|").replace(Fk,"[").replace(Uk,"]")}function Hk(t){return Uu(t).replace(Ry,"{").replace(Oy,"}").replace(ky,"^")}function hl(t){return Uu(t).replace(Ay,"%2B").replace(jk,"+").replace(Cy,"%23").replace(xk,"%26").replace(Vk,"`").replace(Ry,"{").replace(Oy,"}").replace(ky,"^")}function qk(t){return hl(t).replace(Lk,"%3D")}function Kk(t){return Uu(t).replace(Cy,"%23").replace($k,"%3F")}function zk(t){return t==null?"":Kk(t).replace(Mk,"%2F")}function ti(t){try{return decodeURIComponent(""+t)}catch{he(`Error decoding "${t}". Using original value`)}return""+t}function Wk(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ay," "),o=i.indexOf("="),a=ti(o<0?i:i.slice(0,o)),c=o<0?null:ti(i.slice(o+1));if(a in e){let l=e[a];gt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Zf(t){let e="";for(let n in t){const s=t[n];if(n=qk(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(gt(s)?s.map(i=>i&&hl(i)):[s&&hl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Gk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=gt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Qk=Symbol("router view location matched"),ed=Symbol("router view depth"),Vu=Symbol("router"),Dy=Symbol("route location"),fl=Symbol("router view location");function lr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function vn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Xs(4,{from:n,to:e})):h instanceof Error?a(h):pk(h)?a(Xs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,Yk(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(f=>c._called?f:(he(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){he(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function Yk(t,e,n){let s=0;return function(){s++===1&&he(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,s===1&&t.apply(null,arguments)}}function lc(t,e,n,s){const r=[];for(const i of t){!i.components&&!i.children.length&&he(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw he(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){he(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,he(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Jk(a)){const l=(a.__vccOpts||a)[e];l&&r.push(vn(l,n,s,i,o))}else{let c=a();"catch"in c||(he(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=JA(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&vn(f,n,s,i,o)()}))}}}return r}function Jk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function td(t){const e=tn(Vu),n=tn(Dy),s=wt(()=>e.resolve(Ls(t.to))),r=wt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ln.bind(null,u));if(f>-1)return f;const p=nd(c[l-2]);return l>1&&nd(u)===p&&h[h.length-1].path!==p?h.findIndex(Ln.bind(null,c[l-2])):f}),i=wt(()=>r.value>-1&&tR(n.params,s.value.params)),o=wt(()=>r.value>-1&&r.value===n.matched.length-1&&Ey(n.params,s.value.params));function a(c={}){return eR(c)?e[Ls(t.replace)?"replace":"push"](Ls(t.to)).catch(kr):Promise.resolve()}if(Yt){const c=xl();if(c){const l={route:s.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),dw(()=>{l.route=s.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:s,href:wt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Xk=Yd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:td,setup(t,{slots:e}){const n=si(td(t)),{options:s}=tn(Vu),r=wt(()=>({[sd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[sd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:vp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Zk=Xk;function eR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tR(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!gt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function nd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sd=(t,e,n)=>t??e??n,nR=Yd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){rR();const s=tn(fl),r=wt(()=>t.route||s.value),i=tn(ed,0),o=wt(()=>{let l=Ls(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=wt(()=>r.value.matched[o.value]);eo(ed,wt(()=>o.value+1)),eo(Qk,a),eo(fl,r);const c=Nv();return _r(()=>[c.value,a.value,t.name],([l,u,h],[f,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Ln(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return rd(n.default,{Component:f,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,C=vp(f,pe({},y,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(Yt&&C.ref){const O={depth:o.value,name:h.name,path:h.path,meta:h.meta};(gt(C.ref)?C.ref.map(L=>L.i):[C.ref.i]).forEach(L=>{L.__vrv_devtools=O})}return rd(n.default,{Component:C,route:l})||C}}});function rd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sR=nR;function rR(){const t=xl(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";he(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function ur(t,e){const n=pe({},t,{matched:t.matched.map(s=>dR(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Gi(t){return{_custom:{display:t}}}let iR=0;function oR(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const s=iR++;YA({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ur(e.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const f=h.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Ny})}gt(h.__vrl_devtools)&&(h.__devtoolsApi=r,h.__vrl_devtools.forEach(f=>{let p=My,y="";f.isExactActive?(p=xy,y="This is exactly active"):f.isActive&&(p=Py,y="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:y,backgroundColor:p})}))}),_r(e.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const i="router:navigations:"+s;r.addTimelineLayer({id:i,label:`Router${s?" "+s:""} Navigations`,color:4237508}),e.onError((u,h)=>{r.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:r.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const f={guard:Gi("beforeEach"),from:ur(h,"Current Location during this navigation"),to:ur(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),r.addTimelineEvent({layerId:i,event:{time:r.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,f)=>{const p={guard:Gi("afterEach")};f?(p.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},p.status=Gi("❌")):p.status=Gi("✅"),p.from=ur(h,"Current Location during this navigation"),p.to=ur(u,"Target location"),r.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:r.now(),data:p,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+s;r.addInspector({id:a,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(f=>!f.parent);h.forEach(Fy),u.filter&&(h=h.filter(f=>dl(f,u.filter.toLowerCase()))),h.forEach(f=>$y(f,e.currentRoute.value)),u.rootNodes=h.map(Ly)}let l;r.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),r.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const f=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);f&&(u.state={options:cR(f)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function aR(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function cR(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(s=>`${s.name}${aR(s)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(s=>s.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Ny=15485081,Py=2450411,xy=8702998,lR=2282478,My=16486972,uR=6710886;function Ly(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:lR}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:My}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Ny}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:xy}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Py}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:uR});let s=n.__vd_id;return s==null&&(s=String(hR++),n.__vd_id=s),{id:s,label:n.path,tags:e,children:t.children.map(Ly)}}let hR=0;const fR=/^\/(.*)\/([a-z]*)$/;function $y(t,e){const n=e.matched.length&&Ln(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(s=>Ln(s,t.record))),t.children.forEach(s=>$y(s,e))}function Fy(t){t.__vd_match=!1,t.children.forEach(Fy)}function dl(t,e){const n=String(t.re).match(fR);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>dl(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const r=t.record.path.toLowerCase(),i=ti(r);return!e.startsWith("/")&&(i.includes(e)||r.includes(e))||i.startsWith(e)||r.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>dl(o,e))}function dR(t,e){const n={};for(const s in t)e.includes(s)||(n[s]=t[s]);return n}function pR(t){const e=Ak(t.routes,t),n=t.parseQuery||Wk,s=t.stringifyQuery||Zf,r=t.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=lr(),o=lr(),a=lr(),c=Pv(gn);let l=gn;Yt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ac.bind(null,w=>""+w),h=ac.bind(null,zk),f=ac.bind(null,ti);function p(w,x){let D,F;return Iy(w)?(D=e.getRecordMatcher(w),F=x):F=w,e.addRoute(F,D)}function y(w){const x=e.getRecordMatcher(w);x?e.removeRoute(x):he(`Cannot remove non-existent route "${String(w)}"`)}function v(){return e.getRoutes().map(w=>w.record)}function C(w){return!!e.getRecordMatcher(w)}function O(w,x){if(x=pe({},x||c.value),typeof w=="string"){const ee=cc(n,w,x.path),d=e.resolve({path:ee.path},x),g=r.createHref(ee.fullPath);return g.startsWith("//")?he(`Location "${w}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):d.matched.length||he(`No match found for location with path "${w}"`),pe(ee,d,{params:f(d.params),hash:ti(ee.hash),redirectedFrom:void 0,href:g})}let D;if("path"in w)"params"in w&&!("name"in w)&&Object.keys(w.params).length&&he(`Path "${w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),D=pe({},w,{path:cc(n,w.path,x.path).path});else{const ee=pe({},w.params);for(const d in ee)ee[d]==null&&delete ee[d];D=pe({},w,{params:h(w.params)}),x.params=h(x.params)}const F=e.resolve(D,x),le=w.hash||"";le&&!le.startsWith("#")&&he(`A \`hash\` should always start with the character "#". Replace "${le}" with "#${le}".`),F.params=u(f(F.params));const be=ek(s,pe({},w,{hash:Hk(le),path:F.path})),se=r.createHref(be);return se.startsWith("//")?he(`Location "${w}" resolved to "${se}". A resolved location cannot start with multiple slashes.`):F.matched.length||he(`No match found for location with path "${"path"in w?w.path:w}"`),pe({fullPath:be,hash:le,query:s===Zf?Gk(w.query):w.query||{}},F,{redirectedFrom:void 0,href:se})}function N(w){return typeof w=="string"?cc(n,w,c.value.path):pe({},w)}function L(w,x){if(l!==w)return Xs(8,{from:x,to:w})}function $(w){return Re(w)}function Y(w){return $(pe(N(w),{replace:!0}))}function _e(w){const x=w.matched[w.matched.length-1];if(x&&x.redirect){const{redirect:D}=x;let F=typeof D=="function"?D(w):D;if(typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=N(F):{path:F},F.params={}),!("path"in F)&&!("name"in F))throw he(`Invalid redirect found:
${JSON.stringify(F,null,2)}
 when navigating to "${w.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return pe({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function Re(w,x){const D=l=O(w),F=c.value,le=w.state,be=w.force,se=w.replace===!0,ee=_e(D);if(ee)return Re(pe(N(ee),{state:typeof ee=="object"?pe({},le,ee.state):le,force:be,replace:se}),x||D);const d=D;d.redirectedFrom=x;let g;return!be&&Hf(s,F,D)&&(g=Xs(16,{to:d,from:F}),_s(F,F,!0,!1)),(g?Promise.resolve(g):fe(d,F)).catch(m=>Wt(m)?Wt(m,2)?m:lt(m):re(m,d,F)).then(m=>{if(m){if(Wt(m,2))return Hf(s,O(m.to),d)&&x&&(x._count=x._count?x._count+1:1)>10?(he(`Detected an infinite redirection in a navigation guard when going from "${F.fullPath}" to "${d.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Re(pe({replace:se},N(m.to),{state:typeof m.to=="object"?pe({},le,m.to.state):le,force:be}),x||d)}else m=Me(d,F,!0,se,le);return me(d,F,m),m})}function J(w,x){const D=L(w,x);return D?Promise.reject(D):Promise.resolve()}function fe(w,x){let D;const[F,le,be]=gR(w,x);D=lc(F.reverse(),"beforeRouteLeave",w,x);for(const ee of F)ee.leaveGuards.forEach(d=>{D.push(vn(d,w,x))});const se=J.bind(null,w,x);return D.push(se),Ts(D).then(()=>{D=[];for(const ee of i.list())D.push(vn(ee,w,x));return D.push(se),Ts(D)}).then(()=>{D=lc(le,"beforeRouteUpdate",w,x);for(const ee of le)ee.updateGuards.forEach(d=>{D.push(vn(d,w,x))});return D.push(se),Ts(D)}).then(()=>{D=[];for(const ee of w.matched)if(ee.beforeEnter&&!x.matched.includes(ee))if(gt(ee.beforeEnter))for(const d of ee.beforeEnter)D.push(vn(d,w,x));else D.push(vn(ee.beforeEnter,w,x));return D.push(se),Ts(D)}).then(()=>(w.matched.forEach(ee=>ee.enterCallbacks={}),D=lc(be,"beforeRouteEnter",w,x),D.push(se),Ts(D))).then(()=>{D=[];for(const ee of o.list())D.push(vn(ee,w,x));return D.push(se),Ts(D)}).catch(ee=>Wt(ee,8)?ee:Promise.reject(ee))}function me(w,x,D){for(const F of a.list())F(w,x,D)}function Me(w,x,D,F,le){const be=L(w,x);if(be)return be;const se=x===gn,ee=Yt?history.state:{};D&&(F||se?r.replace(w.fullPath,pe({scroll:se&&ee&&ee.scroll},le)):r.push(w.fullPath,le)),c.value=w,_s(w,x,D,se),lt()}let Ce;function It(){Ce||(Ce=r.listen((w,x,D)=>{if(!Es.listening)return;const F=O(w),le=_e(F);if(le){Re(pe(le,{replace:!0}),F).catch(kr);return}l=F;const be=c.value;Yt&&ck(Kf(be.fullPath,D.delta),Pa()),fe(F,be).catch(se=>Wt(se,12)?se:Wt(se,2)?(Re(se.to,F).then(ee=>{Wt(ee,20)&&!D.delta&&D.type===ei.pop&&r.go(-1,!1)}).catch(kr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),re(se,F,be))).then(se=>{se=se||Me(F,be,!1),se&&(D.delta&&!Wt(se,8)?r.go(-D.delta,!1):D.type===ei.pop&&Wt(se,20)&&r.go(-1,!1)),me(F,be,se)}).catch(kr)}))}let fn=lr(),Tt=lr(),Le;function re(w,x,D){lt(w);const F=Tt.list();return F.length?F.forEach(le=>le(w,x,D)):(he("uncaught error during route navigation:"),console.error(w)),Promise.reject(w)}function ce(){return Le&&c.value!==gn?Promise.resolve():new Promise((w,x)=>{fn.add([w,x])})}function lt(w){return Le||(Le=!w,It(),fn.list().forEach(([x,D])=>w?D(w):x()),fn.reset()),w}function _s(w,x,D,F){const{scrollBehavior:le}=t;if(!Yt||!le)return Promise.resolve();const be=!D&&lk(Kf(w.fullPath,0))||(F||!D)&&history.state&&history.state.scroll||null;return Md().then(()=>le(w,x,be)).then(se=>se&&ak(se)).catch(se=>re(se,w,x))}const zt=w=>r.go(w);let Dt;const mt=new Set,Es={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:C,getRoutes:v,resolve:O,options:t,push:$,replace:Y,go:zt,back:()=>zt(-1),forward:()=>zt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Tt.add,isReady:ce,install(w){const x=this;w.component("RouterLink",Zk),w.component("RouterView",sR),w.config.globalProperties.$router=x,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Ls(c)}),Yt&&!Dt&&c.value===gn&&(Dt=!0,$(r.location).catch(le=>{he("Unexpected error when starting the router:",le)}));const D={};for(const le in gn)D[le]=wt(()=>c.value[le]);w.provide(Vu,x),w.provide(Dy,si(D)),w.provide(fl,c);const F=w.unmount;mt.add(w),w.unmount=function(){mt.delete(w),mt.size<1&&(l=gn,Ce&&Ce(),Ce=null,c.value=gn,Dt=!1,Le=!1),F()},Yt&&oR(w,x,e)}};return Es}function Ts(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function gR(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ln(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ln(l,c))||r.push(c))}return[n,s,r]}const mR="modulepreload",yR=function(t){return"/"+t},id={},Qi=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=yR(i),i in id)return;id[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":mR,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},vR=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Yi(t){return()=>vR(Object.assign({"../pages/About.vue":()=>Qi(()=>import("./About-ebc2d80c.js"),["assets/About-ebc2d80c.js","assets/About-6511fcdf.css"]),"../pages/Closet.vue":()=>Qi(()=>import("./Closet-7e751b1c.js"),[]),"../pages/Home.vue":()=>Qi(()=>import("./Home-3a29509c.js"),["assets/Home-3a29509c.js","assets/Home-a44eba66.css"]),"../pages/Login.vue":()=>Qi(()=>import("./Login-353513b3.js"),["assets/Login-353513b3.js","assets/Login-bac4bc3c.css"])}),`../pages/${t}.vue`)}const wR=[{path:"/",component:Yi("Home")},{path:"/About",component:Yi("About")},{path:"/Closet",component:Yi("Closet")},{path:"/Login",component:Yi("Login")}];var _R="firebase",ER="9.19.1";/**
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
 */An(_R,ER,"app");const bR={apiKey:"AIzaSyBDevPI9maQg7zZPO4rUDHj7ZMENqdw3vE",authDomain:"closetsnap-822e7.firebaseapp.com",projectId:"closetsnap-822e7",storageBucket:"closetsnap-822e7.appspot.com",messagingSenderId:"604567787747",appId:"1:604567787747:web:173093122cebf15280cdd6"},IR=Cp(bR);Br(IR);let TR=pR({history:dk(),routes:wR});const Uy=j_(jA);Uy.use(TR);Uy.mount("#app");export{vt as F,xA as _,Mt as a,DA as b,dh as c,Fa as d,kR as e,NR as f,Br as g,sh as h,Ke as i,As as j,Rc as k,II as l,CR as m,ks as n,dr as o,DR as r,RR as s,SR as t,AR as v,fA as w};
