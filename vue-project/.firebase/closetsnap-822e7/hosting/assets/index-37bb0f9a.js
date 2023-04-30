(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function qn(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Pl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Pe(r)?Vv(r):Pl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Pe(t))return t;if(we(t))return t}}const Uv=/;(?![^(]*\))/g,$v=/:([^]+)/,Fv=/\/\*.*?\*\//gs;function Vv(t){const e={};return t.replace(Fv,"").split(Uv).forEach(n=>{if(n){const r=n.split($v);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xl(t){let e="";if(Pe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=xl(t[n]);r&&(e+=r+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bv="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",jv="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Hv=qn(Bv),qv=qn(jv),Kv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zv=qn(Kv);function jd(t){return!!t||t===""}const eD=t=>Pe(t)?t:t==null?"":z(t)||we(t)&&(t.toString===zd||!Q(t.toString))?JSON.stringify(t,Hd,2):String(t),Hd=(t,e)=>e&&e.__v_isRef?Hd(t,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Kd(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!z(e)&&!Wd(e)?String(e):e,_e=Object.freeze({}),jr=Object.freeze([]),gt=()=>{},qd=()=>!1,Wv=/^on[^a-z]/,ui=t=>Wv.test(t),Io=t=>t.startsWith("onUpdate:"),De=Object.assign,Ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gv=Object.prototype.hasOwnProperty,ie=(t,e)=>Gv.call(t,e),z=Array.isArray,sr=t=>na(t)==="[object Map]",Kd=t=>na(t)==="[object Set]",Q=t=>typeof t=="function",Pe=t=>typeof t=="string",Ml=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",Ul=t=>we(t)&&Q(t.then)&&Q(t.catch),zd=Object.prototype.toString,na=t=>zd.call(t),$l=t=>na(t).slice(8,-1),Wd=t=>na(t)==="[object Object]",Fl=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ao=qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qv=qn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yv=/-(\w)/g,Gt=ra(t=>t.replace(Yv,(e,n)=>n?n.toUpperCase():"")),Jv=/\B([A-Z])/g,Mn=ra(t=>t.replace(Jv,"-$1").toLowerCase()),gr=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qn=ra(t=>t?`on${gr(t)}`:""),Fs=(t,e)=>!Object.is(t,e),Pr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},So=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Cc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _h;const Gd=()=>_h||(_h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ac(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Nt;class Xv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}else Ac("cannot run an inactive effect scope.")}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Zv(t,e=Nt){e&&e.active&&e.effects.push(t)}function e_(){return Nt}const Vl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qd=t=>(t.w&Un)>0,Yd=t=>(t.n&Un)>0,t_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Un},n_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Qd(s)&&!Yd(s)?s.delete(t):e[n++]=s,s.w&=~Un,s.n&=~Un}e.length=n}},kc=new WeakMap;let ws=0,Un=1;const Rc=30;let lt;const ir=Symbol("iterate"),Oc=Symbol("Map key iterate");class Bl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zv(this,r)}run(){if(!this.active)return this.fn();let e=lt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=lt,lt=this,Nn=!0,Un=1<<++ws,ws<=Rc?t_(this):wh(this),this.fn()}finally{ws<=Rc&&n_(this),Un=1<<--ws,lt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){lt===this?this.deferStop=!0:this.active&&(wh(this),this.onStop&&this.onStop(),this.active=!1)}}function wh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const Jd=[];function Tr(){Jd.push(Nn),Nn=!1}function Ir(){const t=Jd.pop();Nn=t===void 0?!0:t}function yt(t,e,n){if(Nn&&lt){let r=kc.get(t);r||kc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Vl()),Xd(s,{effect:lt,target:t,type:e,key:n})}}function Xd(t,e){let n=!1;ws<=Rc?Yd(t)||(t.n|=Un,n=!Qd(t)):n=!t.has(lt),n&&(t.add(lt),lt.deps.push(t),lt.onTrack&&lt.onTrack(Object.assign({effect:lt},e)))}function un(t,e,n,r,s,i){const o=kc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Fl(n)&&a.push(o.get("length")):(a.push(o.get(ir)),sr(t)&&a.push(o.get(Oc)));break;case"delete":z(t)||(a.push(o.get(ir)),sr(t)&&a.push(o.get(Oc)));break;case"set":sr(t)&&a.push(o.get(ir));break}const c={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&Nc(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);Nc(Vl(l),c)}}function Nc(t,e){const n=z(t)?t:[...t];for(const r of n)r.computed&&Eh(r,e);for(const r of n)r.computed||Eh(r,e)}function Eh(t,e){(t!==lt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(De({effect:t},e)),t.scheduler?t.scheduler():t.run())}const r_=qn("__proto__,__v_isRef,__isVue"),Zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ml)),s_=sa(),i_=sa(!1,!0),o_=sa(!0),a_=sa(!0,!0),bh=c_();function c_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)yt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tr();const r=te(this)[e].apply(this,n);return Ir(),r}}),t}function l_(t){const e=te(this);return yt(e,"has",t),e.hasOwnProperty(t)}function sa(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ap:op:e?ip:sp).get(r))return r;const o=z(r);if(!t){if(o&&ie(bh,s))return Reflect.get(bh,s,i);if(s==="hasOwnProperty")return l_}const a=Reflect.get(r,s,i);return(Ml(s)?Zd.has(s):r_(s))||(t||yt(r,"get",s),e)?a:Be(a)?o&&Fl(s)?a:a.value:we(a)?t?cp(a):hi(a):a}}const u_=ep(),h_=ep(!0);function ep(t=!1){return function(n,r,s,i){let o=n[r];if($n(o)&&Be(o)&&!Be(s))return!1;if(!t&&(!Co(s)&&!$n(s)&&(o=te(o),s=te(s)),!z(n)&&Be(o)&&!Be(s)))return o.value=s,!0;const a=z(n)&&Fl(r)?Number(r)<n.length:ie(n,r),c=Reflect.set(n,r,s,i);return n===te(i)&&(a?Fs(s,o)&&un(n,"set",r,s,o):un(n,"add",r,s)),c}}function f_(t,e){const n=ie(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&un(t,"delete",e,void 0,r),s}function d_(t,e){const n=Reflect.has(t,e);return(!Ml(e)||!Zd.has(e))&&yt(t,"has",e),n}function p_(t){return yt(t,"iterate",z(t)?"length":ir),Reflect.ownKeys(t)}const tp={get:s_,set:u_,deleteProperty:f_,has:d_,ownKeys:p_},np={get:o_,set(t,e){return Ac(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Ac(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},g_=De({},tp,{get:i_,set:h_}),m_=De({},np,{get:a_}),jl=t=>t,ia=t=>Reflect.getPrototypeOf(t);function Vi(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(e!==i&&yt(s,"get",e),yt(s,"get",i));const{has:o}=ia(s),a=r?jl:n?Hl:Vs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Bi(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(t!==s&&yt(r,"has",t),yt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ji(t,e=!1){return t=t.__v_raw,!e&&yt(te(t),"iterate",ir),Reflect.get(t,"size",t)}function Th(t){t=te(t);const e=te(this);return ia(e).has.call(e,t)||(e.add(t),un(e,"add",t,t)),this}function Ih(t,e){e=te(e);const n=te(this),{has:r,get:s}=ia(n);let i=r.call(n,t);i?rp(n,r,t):(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Fs(e,o)&&un(n,"set",t,e,o):un(n,"add",t,e),this}function Sh(t){const e=te(this),{has:n,get:r}=ia(e);let s=n.call(e,t);s?rp(e,n,t):(t=te(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&un(e,"delete",t,void 0,i),o}function Ch(){const t=te(this),e=t.size!==0,n=sr(t)?new Map(t):new Set(t),r=t.clear();return e&&un(t,"clear",void 0,void 0,n),r}function Hi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),c=e?jl:t?Hl:Vs;return!t&&yt(a,"iterate",ir),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function qi(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=sr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?jl:e?Hl:Vs;return!e&&yt(i,"iterate",c?Oc:ir),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function _n(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${gr(t)} operation ${n}failed: target is readonly.`,te(this))}return t==="delete"?!1:this}}function y_(){const t={get(i){return Vi(this,i)},get size(){return ji(this)},has:Bi,add:Th,set:Ih,delete:Sh,clear:Ch,forEach:Hi(!1,!1)},e={get(i){return Vi(this,i,!1,!0)},get size(){return ji(this)},has:Bi,add:Th,set:Ih,delete:Sh,clear:Ch,forEach:Hi(!1,!0)},n={get(i){return Vi(this,i,!0)},get size(){return ji(this,!0)},has(i){return Bi.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Hi(!0,!1)},r={get(i){return Vi(this,i,!0,!0)},get size(){return ji(this,!0)},has(i){return Bi.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qi(i,!1,!1),n[i]=qi(i,!0,!1),e[i]=qi(i,!1,!0),r[i]=qi(i,!0,!0)}),[t,n,e,r]}const[v_,__,w_,E_]=y_();function oa(t,e){const n=e?t?E_:w_:t?__:v_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const b_={get:oa(!1,!1)},T_={get:oa(!1,!0)},I_={get:oa(!0,!1)},S_={get:oa(!0,!0)};function rp(t,e,n){const r=te(n);if(r!==n&&e.call(t,r)){const s=$l(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const sp=new WeakMap,ip=new WeakMap,op=new WeakMap,ap=new WeakMap;function C_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A_(t){return t.__v_skip||!Object.isExtensible(t)?0:C_($l(t))}function hi(t){return $n(t)?t:aa(t,!1,tp,b_,sp)}function k_(t){return aa(t,!1,g_,T_,ip)}function cp(t){return aa(t,!0,np,I_,op)}function $r(t){return aa(t,!0,m_,S_,ap)}function aa(t,e,n,r,s){if(!we(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=A_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function or(t){return $n(t)?or(t.__v_raw):!!(t&&t.__v_isReactive)}function $n(t){return!!(t&&t.__v_isReadonly)}function Co(t){return!!(t&&t.__v_isShallow)}function Dc(t){return or(t)||$n(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function lp(t){return So(t,"__v_skip",!0),t}const Vs=t=>we(t)?hi(t):t,Hl=t=>we(t)?cp(t):t;function up(t){Nn&&lt&&(t=te(t),Xd(t.dep||(t.dep=Vl()),{target:t,type:"get",key:"value"}))}function hp(t,e){t=te(t);const n=t.dep;n&&Nc(n,{target:t,type:"set",key:"value",newValue:e})}function Be(t){return!!(t&&t.__v_isRef===!0)}function R_(t){return fp(t,!1)}function O_(t){return fp(t,!0)}function fp(t,e){return Be(t)?t:new N_(t,e)}class N_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Vs(e)}get value(){return up(this),this._value}set value(e){const n=this.__v_isShallow||Co(e)||$n(e);e=n?e:te(e),Fs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vs(e),hp(this,e))}}function Hr(t){return Be(t)?t.value:t}const D_={get:(t,e,n)=>Hr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Be(s)&&!Be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dp(t){return or(t)?t:new Proxy(t,D_)}var pp;class P_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[pp]=!1,this._dirty=!0,this.effect=new Bl(e,()=>{this._dirty||(this._dirty=!0,hp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return up(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}pp="__v_isReadonly";function x_(t,e,n=!1){let r,s;const i=Q(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new P_(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const ar=[];function co(t){ar.push(t)}function lo(){ar.pop()}function A(t,...e){Tr();const n=ar.length?ar[ar.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=L_();if(r)an(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${pa(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...M_(s)),console.warn(...i)}Ir()}function L_(){let t=ar[ar.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function M_(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...U_(n))}),e}function U_({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${pa(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...$_(t.props),i]:[s+i]}function $_(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...gp(r,t[r]))}),n.length>3&&e.push(" ..."),e}function gp(t,e,n){return Pe(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Be(e)?(e=gp(t,te(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):Q(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=te(e),n?e:[`${t}=`,e])}const ql={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function an(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ca(i,e,n)}return s}function St(t,e,n,r){if(Q(t)){const i=an(t,e,n,r);return i&&Ul(i)&&i.catch(o=>{ca(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(St(t[i],e,n,r));return s}function ca(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=ql[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){an(c,null,10,[t,o,a]);return}}F_(t,n,s,r)}function F_(t,e,n,r=!0){{const s=ql[e];if(n&&co(n),A(`Unhandled error${s?` during execution of ${s}`:""}`),n&&lo(),r)throw t;console.error(t)}}let Bs=!1,Pc=!1;const et=[];let Bt=0;const qr=[];let Vt=null,bn=0;const mp=Promise.resolve();let Kl=null;const V_=100;function yp(t){const e=Kl||mp;return t?e.then(this?t.bind(this):t):e}function B_(t){let e=Bt+1,n=et.length;for(;e<n;){const r=e+n>>>1;js(et[r])<t?e=r+1:n=r}return e}function la(t){(!et.length||!et.includes(t,Bs&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?et.push(t):et.splice(B_(t.id),0,t),vp())}function vp(){!Bs&&!Pc&&(Pc=!0,Kl=mp.then(Ep))}function j_(t){const e=et.indexOf(t);e>Bt&&et.splice(e,1)}function _p(t){z(t)?qr.push(...t):(!Vt||!Vt.includes(t,t.allowRecurse?bn+1:bn))&&qr.push(t),vp()}function Ah(t,e=Bs?Bt+1:0){for(t=t||new Map;e<et.length;e++){const n=et[e];if(n&&n.pre){if(zl(t,n))continue;et.splice(e,1),e--,n()}}}function wp(t){if(qr.length){const e=[...new Set(qr)];if(qr.length=0,Vt){Vt.push(...e);return}for(Vt=e,t=t||new Map,Vt.sort((n,r)=>js(n)-js(r)),bn=0;bn<Vt.length;bn++)zl(t,Vt[bn])||Vt[bn]();Vt=null,bn=0}}const js=t=>t.id==null?1/0:t.id,H_=(t,e)=>{const n=js(t)-js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ep(t){Pc=!1,Bs=!0,t=t||new Map,et.sort(H_);const e=n=>zl(t,n);try{for(Bt=0;Bt<et.length;Bt++){const n=et[Bt];if(n&&n.active!==!1){if(e(n))continue;an(n,null,14)}}}finally{Bt=0,et.length=0,wp(t),Bs=!1,Kl=null,(et.length||qr.length)&&Ep(t)}}function zl(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>V_){const r=e.ownerInstance,s=r&&eu(r.type);return A(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let cr=!1;const xr=new Set;Gd().__VUE_HMR_RUNTIME__={createRecord:Qa(bp),rerender:Qa(z_),reload:Qa(W_)};const mr=new Map;function q_(t){const e=t.type.__hmrId;let n=mr.get(e);n||(bp(e,t.type),n=mr.get(e)),n.instances.add(t)}function K_(t){mr.get(t.type.__hmrId).instances.delete(t)}function bp(t,e){return mr.has(t)?!1:(mr.set(t,{initialDef:As(e),instances:new Set}),!0)}function As(t){return eg(t)?t.__vccOpts:t}function z_(t,e){const n=mr.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,As(r.type).render=e),r.renderCache=[],cr=!0,r.update(),cr=!1}))}function W_(t,e){const n=mr.get(t);if(!n)return;e=As(e),kh(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=As(s.type);xr.has(i)||(i!==n.initialDef&&kh(i,e),xr.add(i)),s.appContext.optionsCache.delete(s.type),s.ceReload?(xr.add(i),s.ceReload(e.styles),xr.delete(i)):s.parent?la(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}_p(()=>{for(const s of r)xr.delete(As(s.type))})}function kh(t,e){De(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Qa(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let jt,Es=[],xc=!1;function fi(t,...e){jt?jt.emit(t,...e):xc||Es.push({event:t,args:e})}function Tp(t,e){var n,r;jt=t,jt?(jt.enabled=!0,Es.forEach(({event:s,args:i})=>jt.emit(s,...i)),Es=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Tp(i,e)}),setTimeout(()=>{jt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,xc=!0,Es=[])},3e3)):(xc=!0,Es=[])}function G_(t,e){fi("app:init",t,e,{Fragment:bt,Text:pi,Comment:Ge,Static:po})}function Q_(t){fi("app:unmount",t)}const Y_=Wl("component:added"),Ip=Wl("component:updated"),J_=Wl("component:removed"),X_=t=>{jt&&typeof jt.cleanupBuffer=="function"&&!jt.cleanupBuffer(t)&&J_(t)};function Wl(t){return e=>{fi(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const Z_=Sp("perf:start"),ew=Sp("perf:end");function Sp(t){return(e,n,r)=>{fi(t,e.appContext.app,e.uid,e,n,r)}}function tw(t,e,n){fi("component:emit",t.appContext.app,t,e,n)}function nw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||_e;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(Qn(e)in h))&&A(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Qn(e)}" prop.`);else{const f=u[e];Q(f)&&(f(...n)||A(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||_e;f&&(s=n.map(p=>Pe(p)?p.trim():p)),h&&(s=n.map(Cc))}tw(t,e,s);{const u=e.toLowerCase();u!==e&&r[Qn(u)]&&A(`Event "${u}" is emitted in component ${pa(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Mn(e)}" instead of "${e}".`)}let a,c=r[a=Qn(e)]||r[a=Qn(Gt(e))];!c&&i&&(c=r[a=Qn(Mn(e))]),c&&St(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(l,t,6,s)}}function Cp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Q(t)){const c=l=>{const u=Cp(l,e,!0);u&&(a=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&r.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):De(o,i),we(t)&&r.set(t,o),o)}function ua(t,e){return!t||!ui(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Mn(e))||ie(t,e))}let ut=null,Ap=null;function Ao(t){const e=ut;return ut=t,Ap=t&&t.type.__scopeId||null,e}function rw(t,e=ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Vh(-1);const i=Ao(e);let o;try{o=t(...s)}finally{Ao(i),r._d&&Vh(1)}return Ip(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let Lc=!1;function ko(){Lc=!0}function Ya(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:y,inheritAttrs:v}=t;let E,R;const O=Ao(t);Lc=!1;try{if(n.shapeFlag&4){const K=s||r;E=Dt(u.call(K,K,h,i,p,f,y)),R=c}else{const K=e;c===i&&ko(),E=Dt(K.length>1?K(i,{get attrs(){return ko(),c},slots:a,emit:l}):K(i,null)),R=e.props?c:iw(c)}}catch(K){Rs.length=0,ca(K,t,1),E=mt(Ge)}let L=E,P;if(E.patchFlag>0&&E.patchFlag&2048&&([L,P]=sw(E)),R&&v!==!1){const K=Object.keys(R),{shapeFlag:de}=L;if(K.length){if(de&7)o&&K.some(Io)&&(R=ow(R,o)),L=Qt(L,R);else if(!Lc&&L.type!==Ge){const Ce=Object.keys(c),W=[],fe=[];for(let ye=0,$e=Ce.length;ye<$e;ye++){const Ae=Ce[ye];ui(Ae)?Io(Ae)||W.push(Ae[2].toLowerCase()+Ae.slice(3)):fe.push(Ae)}fe.length&&A(`Extraneous non-props attributes (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),W.length&&A(`Extraneous non-emits event listeners (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Rh(L)||A("Runtime directive used on component with non-element root node. The directives will not function as intended."),L=Qt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(Rh(L)||A("Component inside <Transition> renders non-element root node that cannot be animated."),L.transition=n.transition),P?P(L):E=L,Ao(O),E}const sw=t=>{const e=t.children,n=t.dynamicChildren,r=kp(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Dt(r),o]};function kp(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(qs(r)){if(r.type!==Ge||r.children==="v-if"){if(e)return;e=r}}else return}return e}const iw=t=>{let e;for(const n in t)(n==="class"||n==="style"||ui(n))&&((e||(e={}))[n]=t[n]);return e},ow=(t,e)=>{const n={};for(const r in t)(!Io(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},Rh=t=>t.shapeFlag&7||t.type===Ge;function aw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((s||a)&&cr||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Oh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ua(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Oh(r,o,l):!0:!!o;return!1}function Oh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ua(n,i))return!0}return!1}function cw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lw=t=>t.__isSuspense;function uw(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):_p(t)}function uo(t,e){if(!ke)A("provide() can only be used inside setup().");else{let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=ke||ut;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Q(e)?e.call(r.proxy):e;A(`injection "${String(t)}" not found.`)}else A("inject() can only be used inside setup() or functional components.")}function hw(t,e){return Gl(t,null,e)}const Ki={};function ks(t,e,n){return Q(e)||A("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Gl(t,e,n)}function Gl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=_e){e||(n!==void 0&&A('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&A('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=P=>{A("Invalid watch source: ",P,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=e_()===(ke==null?void 0:ke.scope)?ke:null;let l,u=!1,h=!1;if(Be(t)?(l=()=>t.value,u=Co(t)):or(t)?(l=()=>t,r=!0):z(t)?(h=!0,u=t.some(P=>or(P)||Co(P)),l=()=>t.map(P=>{if(Be(P))return P.value;if(or(P))return er(P);if(Q(P))return an(P,c,2);a(P)})):Q(t)?e?l=()=>an(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),St(t,c,3,[p])}:(l=gt,a(t)),e&&r){const P=l;l=()=>er(P())}let f,p=P=>{f=O.onStop=()=>{an(P,c,4)}},y;if(Ks)if(p=gt,e?n&&St(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const P=EE();y=P.__watcherHandles||(P.__watcherHandles=[])}else return gt;let v=h?new Array(t.length).fill(Ki):Ki;const E=()=>{if(O.active)if(e){const P=O.run();(r||u||(h?P.some((K,de)=>Fs(K,v[de])):Fs(P,v)))&&(f&&f(),St(e,c,3,[P,v===Ki?void 0:h&&v[0]===Ki?[]:v,p]),v=P)}else O.run()};E.allowRecurse=!!e;let R;s==="sync"?R=E:s==="post"?R=()=>pt(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),R=()=>la(E));const O=new Bl(l,R);O.onTrack=i,O.onTrigger=o,e?n?E():v=O.run():s==="post"?pt(O.run.bind(O),c&&c.suspense):O.run();const L=()=>{O.stop(),c&&c.scope&&Ll(c.scope.effects,O)};return y&&y.push(L),L}function fw(t,e,n){const r=this.proxy,s=Pe(t)?t.includes(".")?Rp(r,t):()=>r[t]:t.bind(r,r);let i;Q(e)?i=e:(i=e.handler,n=e);const o=ke;Yr(this);const a=Gl(s,i.bind(r),n);return o?Yr(o):ur(),a}function Rp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function er(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))er(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)er(t[n],e);else if(Kd(t)||sr(t))t.forEach(n=>{er(n,e)});else if(Wd(t))for(const n in t)er(t[n],e);return t}function dw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xp(()=>{t.isMounted=!0}),Lp(()=>{t.isUnmounting=!0}),t}const Et=[Function,Array],pw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et},setup(t,{slots:e}){const n=Zl(),r=dw();let s;return()=>{const i=e.default&&Np(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){let v=!1;for(const E of i)if(E.type!==Ge){if(v){A("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}o=E,v=!0}}const a=te(t),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&A(`invalid <transition> mode: ${c}`),r.isLeaving)return Ja(o);const l=Nh(o);if(!l)return Ja(o);const u=Mc(l,a,r,n);Uc(l,u);const h=n.subTree,f=h&&Nh(h);let p=!1;const{getTransitionKey:y}=l.type;if(y){const v=y();s===void 0?s=v:v!==s&&(s=v,p=!0)}if(f&&f.type!==Ge&&(!Xn(l,f)||p)){const v=Mc(f,a,r,n);if(Uc(f,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ja(o);c==="in-out"&&l.type!==Ge&&(v.delayLeave=(E,R,O)=>{const L=Op(r,f);L[String(f.key)]=f,E._leaveCb=()=>{R(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},gw=pw;function Op(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Mc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:v,onAppear:E,onAfterAppear:R,onAppearCancelled:O}=e,L=String(t.key),P=Op(n,t),K=(W,fe)=>{W&&St(W,r,9,fe)},de=(W,fe)=>{const ye=fe[1];K(W,fe),z(W)?W.every($e=>$e.length<=1)&&ye():W.length<=1&&ye()},Ce={mode:i,persisted:o,beforeEnter(W){let fe=a;if(!n.isMounted)if(s)fe=v||a;else return;W._leaveCb&&W._leaveCb(!0);const ye=P[L];ye&&Xn(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),K(fe,[W])},enter(W){let fe=c,ye=l,$e=u;if(!n.isMounted)if(s)fe=E||c,ye=R||l,$e=O||u;else return;let Ae=!1;const kt=W._enterCb=vn=>{Ae||(Ae=!0,vn?K($e,[W]):K(ye,[W]),Ce.delayedLeave&&Ce.delayedLeave(),W._enterCb=void 0)};fe?de(fe,[W,kt]):kt()},leave(W,fe){const ye=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return fe();K(h,[W]);let $e=!1;const Ae=W._leaveCb=kt=>{$e||($e=!0,fe(),kt?K(y,[W]):K(p,[W]),W._leaveCb=void 0,P[ye]===t&&delete P[ye])};P[ye]=t,f?de(f,[W,Ae]):Ae()},clone(W){return Mc(W,e,n,r)}};return Ce}function Ja(t){if(di(t))return t=Qt(t),t.children=null,t}function Nh(t){return di(t)?t.children?t.children[0]:void 0:t}function Uc(t,e){t.shapeFlag&6&&t.component?Uc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Np(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===bt?(o.patchFlag&128&&s++,r=r.concat(Np(o.children,e,a))):(e||o.type!==Ge)&&r.push(a!=null?Qt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Dp(t){return Q(t)?{setup:t,name:t.name}:t}const ho=t=>!!t.type.__asyncLoader,di=t=>t.type.__isKeepAlive;function mw(t,e){Pp(t,"a",e)}function yw(t,e){Pp(t,"da",e)}function Pp(t,e,n=ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)di(s.parent.vnode)&&vw(r,e,n,s),s=s.parent}}function vw(t,e,n,r){const s=ha(e,t,r,!0);Mp(()=>{Ll(r[e],s)},n)}function ha(t,e,n=ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Tr(),Yr(n);const a=St(e,n,t,o);return ur(),Ir(),a});return r?s.unshift(i):s.push(i),i}else{const s=Qn(ql[t].replace(/ hook$/,""));A(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const yn=t=>(e,n=ke)=>(!Ks||t==="sp")&&ha(t,(...r)=>e(...r),n),_w=yn("bm"),xp=yn("m"),ww=yn("bu"),Ew=yn("u"),Lp=yn("bum"),Mp=yn("um"),bw=yn("sp"),Tw=yn("rtg"),Iw=yn("rtc");function Sw(t,e=ke){ha("ec",t,e)}function Up(t){Qv(t)&&A("Do not use built-in directive ids as custom directive id: "+t)}function tD(t,e){const n=ut;if(n===null)return A("withDirectives can only be used inside render functions."),t;const r=da(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=_e]=e[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&er(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Wn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Tr(),St(c,n,8,[t.el,a,t,e]),Ir())}}const $c="components";function Cw(t,e){return kw($c,t,!0,e)||t}const Aw=Symbol();function kw(t,e,n=!0,r=!1){const s=ut||ke;if(s){const i=s.type;if(t===$c){const a=eu(i,!1);if(a&&(a===e||a===Gt(e)||a===gr(Gt(e))))return i}const o=Dh(s[t]||i[t],e)||Dh(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===$c?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";A(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else A(`resolve${gr(t.slice(0,-1))} can only be used in render() or setup().`)}function Dh(t,e){return t&&(t[e]||t[Gt(e)]||t[gr(Gt(e))])}const Fc=t=>t?Jp(t)?da(t)||t.proxy:Fc(t.parent):null,lr=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>$r(t.props),$attrs:t=>$r(t.attrs),$slots:t=>$r(t.slots),$refs:t=>$r(t.refs),$parent:t=>Fc(t.parent),$root:t=>Fc(t.root),$emit:t=>t.emit,$options:t=>Yl(t),$forceUpdate:t=>t.f||(t.f=()=>la(t.update)),$nextTick:t=>t.n||(t.n=yp.bind(t.proxy)),$watch:t=>fw.bind(t)}),Ql=t=>t==="_"||t==="$",Xa=(t,e)=>t!==_e&&!t.__isScriptSetup&&ie(t,e),$p={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xa(r,e))return o[e]=1,r[e];if(s!==_e&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==_e&&ie(n,e))return o[e]=4,n[e];Vc&&(o[e]=0)}}const u=lr[e];let h,f;if(u)return e==="$attrs"&&(yt(t,"get",e),ko()),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e];ut&&(!Pe(e)||e.indexOf("__v")!==0)&&(s!==_e&&Ql(e[0])&&ie(s,e)?A(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===ut&&A(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xa(s,e)?(s[e]=n,!0):s.__isScriptSetup&&ie(s,e)?(A(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==_e&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)?(A(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(A(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&ie(t,o)||Xa(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(lr,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};$p.ownKeys=t=>(A("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Rw(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(lr).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>lr[n](t),set:gt})}),e}function Ow(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:gt})})}function Nw(t){const{ctx:e,setupState:n}=t;Object.keys(te(n)).forEach(r=>{if(!n.__isScriptSetup){if(Ql(r[0])){A(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:gt})}})}function Dw(){const t=Object.create(null);return(e,n)=>{t[n]?A(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Vc=!0;function Pw(t){const e=Yl(t),n=t.proxy,r=t.ctx;Vc=!1,e.beforeCreate&&Ph(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:y,activated:v,deactivated:E,beforeDestroy:R,beforeUnmount:O,destroyed:L,unmounted:P,render:K,renderTracked:de,renderTriggered:Ce,errorCaptured:W,serverPrefetch:fe,expose:ye,inheritAttrs:$e,components:Ae,directives:kt,filters:vn}=e,Rt=Dw();{const[se]=t.propsOptions;if(se)for(const ce in se)Rt("Props",ce)}if(l&&xw(l,r,Rt,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const ce=o[se];Q(ce)?(Object.defineProperty(r,se,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),Rt("Methods",se)):A(`Method "${se}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(s){Q(s)||A("The data option must be a function. Plain object usage is no longer supported.");const se=s.call(n,n);if(Ul(se)&&A("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!we(se))A("data() should return an object.");else{t.data=hi(se);for(const ce in se)Rt("Data",ce),Ql(ce[0])||Object.defineProperty(r,ce,{configurable:!0,enumerable:!0,get:()=>se[ce],set:gt})}}if(Vc=!0,i)for(const se in i){const ce=i[se],dt=Q(ce)?ce.bind(n,n):Q(ce.get)?ce.get.bind(n,n):gt;dt===gt&&A(`Computed property "${se}" has no getter.`);const kr=!Q(ce)&&Q(ce.set)?ce.set.bind(n):()=>{A(`Write operation failed: computed property "${se}" is readonly.`)},Xt=Tt({get:dt,set:kr});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Ut=>Xt.value=Ut}),Rt("Computed",se)}if(a)for(const se in a)Fp(a[se],r,n,se);if(c){const se=Q(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ce=>{uo(ce,se[ce])})}u&&Ph(u,t,"c");function Fe(se,ce){z(ce)?ce.forEach(dt=>se(dt.bind(n))):ce&&se(ce.bind(n))}if(Fe(_w,h),Fe(xp,f),Fe(ww,p),Fe(Ew,y),Fe(mw,v),Fe(yw,E),Fe(Sw,W),Fe(Iw,de),Fe(Tw,Ce),Fe(Lp,O),Fe(Mp,P),Fe(bw,fe),z(ye))if(ye.length){const se=t.exposed||(t.exposed={});ye.forEach(ce=>{Object.defineProperty(se,ce,{get:()=>n[ce],set:dt=>n[ce]=dt})})}else t.exposed||(t.exposed={});K&&t.render===gt&&(t.render=K),$e!=null&&(t.inheritAttrs=$e),Ae&&(t.components=Ae),kt&&(t.directives=kt)}function xw(t,e,n=gt,r=!1){z(t)&&(t=Bc(t));for(const s in t){const i=t[s];let o;we(i)?"default"in i?o=cn(i.from||s,i.default,!0):o=cn(i.from||s):o=cn(i),Be(o)?r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):(A(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),e[s]=o):e[s]=o,n("Inject",s)}}function Ph(t,e,n){St(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fp(t,e,n,r){const s=r.includes(".")?Rp(n,r):()=>n[r];if(Pe(t)){const i=e[t];Q(i)?ks(s,i):A(`Invalid watch handler specified by key "${t}"`,i)}else if(Q(t))ks(s,t.bind(n));else if(we(t))if(z(t))t.forEach(i=>Fp(i,e,n,r));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)?ks(s,i,t):A(`Invalid watch handler specified by key "${t.handler}"`,i)}else A(`Invalid watch option: "${r}"`,t)}function Yl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ro(c,l,o,!0)),Ro(c,e,o)),we(e)&&i.set(e,c),c}function Ro(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ro(t,i,n,!0),s&&s.forEach(o=>Ro(t,o,n,!0));for(const o in e)if(r&&o==="expose")A('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Lw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lw={data:xh,props:Yn,emits:Yn,methods:Yn,computed:Yn,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Yn,directives:Yn,watch:Uw,provide:xh,inject:Mw};function xh(t,e){return e?t?function(){return De(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function Mw(t,e){return Yn(Bc(t),Bc(e))}function Bc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Yn(t,e){return t?De(De(Object.create(null),t),e):e}function Uw(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function $w(t,e,n,r=!1){const s={},i={};So(i,fa,1),t.propsDefaults=Object.create(null),Vp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);jp(e||{},s,t),n?t.props=r?s:k_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Fw(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Vw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[c]=t.propsOptions;let l=!1;if(!Fw(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ua(t.emitsOptions,f))continue;const p=e[f];if(c)if(ie(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const y=Gt(f);s[y]=jc(c,a,y,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{Vp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Mn(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=jc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&un(t,"set","$attrs"),jp(e||{},s,t)}function Vp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ao(c))continue;const l=e[c];let u;s&&ie(s,u=Gt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ua(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=te(n),l=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=jc(s,c,h,l[h],t,!ie(l,h))}}return o}function jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Q(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Yr(s),r=l[n]=c.call(null,e),ur())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Mn(n))&&(r=!0))}return r}function Bp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Q(t)){const u=h=>{c=!0;const[f,p]=Bp(h,e,!0);De(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&r.set(t,jr),jr;if(z(i))for(let u=0;u<i.length;u++){Pe(i[u])||A("props must be strings when using array syntax.",i[u]);const h=Gt(i[u]);Lh(h)&&(o[h]=_e)}else if(i){we(i)||A("invalid props options",i);for(const u in i){const h=Gt(u);if(Lh(h)){const f=i[u],p=o[h]=z(f)||Q(f)?{type:f}:Object.assign({},f);if(p){const y=Uh(Boolean,p.type),v=Uh(String,p.type);p[0]=y>-1,p[1]=v<0||y<v,(y>-1||ie(p,"default"))&&a.push(h)}}}}const l=[o,a];return we(t)&&r.set(t,l),l}function Lh(t){return t[0]!=="$"?!0:(A(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Hc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Mh(t,e){return Hc(t)===Hc(e)}function Uh(t,e){return z(e)?e.findIndex(n=>Mh(n,t)):Q(e)&&Mh(e,t)?0:-1}function jp(t,e,n){const r=te(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&Bw(i,r[i],o,!ie(t,i)&&!ie(t,Mn(i)))}}function Bw(t,e,n,r){const{type:s,required:i,validator:o}=n;if(i&&r){A('Missing required prop: "'+t+'"');return}if(!(e==null&&!n.required)){if(s!=null&&s!==!0){let a=!1;const c=z(s)?s:[s],l=[];for(let u=0;u<c.length&&!a;u++){const{valid:h,expectedType:f}=Hw(e,c[u]);l.push(f||""),a=h}if(!a){A(qw(t,e,l));return}}o&&!o(e)&&A('Invalid prop: custom validator check failed for prop "'+t+'".')}}const jw=qn("String,Number,Boolean,Function,Symbol,BigInt");function Hw(t,e){let n;const r=Hc(e);if(jw(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=we(t):r==="Array"?n=z(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function qw(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(gr).join(" | ")}`;const s=n[0],i=$l(e),o=$h(e,s),a=$h(e,i);return n.length===1&&Fh(s)&&!Kw(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,Fh(i)&&(r+=`with value ${a}.`),r}function $h(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Fh(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function Kw(...t){return t.some(e=>e.toLowerCase()==="boolean")}const Hp=t=>t[0]==="_"||t==="$stable",Jl=t=>z(t)?t.map(Dt):[Dt(t)],zw=(t,e,n)=>{if(e._n)return e;const r=rw((...s)=>(ke&&A(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Jl(e(...s))),n);return r._c=!1,r},qp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Hp(s))continue;const i=t[s];if(Q(i))e[s]=zw(s,i,r);else if(i!=null){A(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=Jl(i);e[s]=()=>o}}},Kp=(t,e)=>{di(t.vnode)||A("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Jl(e);t.slots.default=()=>n},Ww=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),So(e,"_",n)):qp(e,t.slots={})}else t.slots={},e&&Kp(t,e);So(t.slots,fa,1)},Gw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=_e;if(r.shapeFlag&32){const a=e._;a?cr?De(s,e):n&&a===1?i=!1:(De(s,e),!n&&a===1&&delete s._):(i=!e.$stable,qp(e,s)),o=e}else e&&(Kp(t,e),o={default:1});if(i)for(const a in s)!Hp(a)&&!(a in o)&&delete s[a]};function zp(){return{app:null,config:{isNativeTag:qd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qw=0;function Yw(t,e){return function(r,s=null){Q(r)||(r=Object.assign({},r)),s!=null&&!we(s)&&(A("root props passed to app.mount() must be an object."),s=null);const i=zp(),o=new Set;let a=!1;const c=i.app={_uid:Qw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:jh,get config(){return i.config},set config(l){A("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?A("Plugin has already been applied to target app."):l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)?(o.add(l),l(c,...u)):A('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?A("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return Kc(l,i.config),u?(i.components[l]&&A(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return Up(l),u?(i.directives[l]&&A(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)A("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&A("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=mt(r,s);return f.appContext=i,i.reload=()=>{t(Qt(f),l,h)},u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=f.component,G_(c,jh),da(f.component)||f.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,Q_(c),delete c._container.__vue_app__):A("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&A(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c}};return c}}function qc(t,e,n,r,s=!1){if(z(t)){t.forEach((f,p)=>qc(f,e&&(z(e)?e[p]:e),n,r,s));return}if(ho(r)&&!s)return;const i=r.shapeFlag&4?da(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t;if(!a){A("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Be(l)&&(l.value=null)),Q(c))an(c,a,12,[o,u]);else{const f=Pe(c),p=Be(c);if(f||p){const y=()=>{if(t.f){const v=f?ie(h,c)?h[c]:u[c]:c.value;s?z(v)&&Ll(v,i):z(v)?v.includes(i)||v.push(i):f?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):A("Invalid template ref type:",c,`(${typeof c})`)};o?(y.id=-1,pt(y,n)):y()}else A("Invalid template ref type:",c,`(${typeof c})`)}}let gs,Sn;function en(t,e){t.appContext.config.performance&&Oo()&&Sn.mark(`vue-${e}-${t.uid}`),Z_(t,e,Oo()?Sn.now():Date.now())}function tn(t,e){if(t.appContext.config.performance&&Oo()){const n=`vue-${e}-${t.uid}`,r=n+":end";Sn.mark(r),Sn.measure(`<${pa(t,t.type)}> ${e}`,n,r),Sn.clearMarks(n),Sn.clearMarks(r)}ew(t,e,Oo()?Sn.now():Date.now())}function Oo(){return gs!==void 0||(typeof window<"u"&&window.performance?(gs=!0,Sn=window.performance):gs=!1),gs}function Jw(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const pt=uw;function Xw(t){return Zw(t)}function Zw(t,e){Jw();const n=Gd();n.__VUE__=!0,Tp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=gt,insertStaticContent:y}=t,v=(d,g,m,b=null,w=null,k=null,x=!1,C=null,N=cr?!1:!!g.dynamicChildren)=>{if(d===g)return;d&&!Xn(d,g)&&(b=$(d),wt(d,w,k,!0),d=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:T,ref:B,shapeFlag:U}=g;switch(T){case pi:E(d,g,m,b);break;case Ge:R(d,g,m,b);break;case po:d==null?O(g,m,b,x):L(d,g,m,x);break;case bt:kt(d,g,m,b,w,k,x,C,N);break;default:U&1?de(d,g,m,b,w,k,x,C,N):U&6?vn(d,g,m,b,w,k,x,C,N):U&64||U&128?T.process(d,g,m,b,w,k,x,C,N,be):A("Invalid VNode type:",T,`(${typeof T})`)}B!=null&&w&&qc(B,d&&d.ref,k,g||d,!g)},E=(d,g,m,b)=>{if(d==null)r(g.el=a(g.children),m,b);else{const w=g.el=d.el;g.children!==d.children&&l(w,g.children)}},R=(d,g,m,b)=>{d==null?r(g.el=c(g.children||""),m,b):g.el=d.el},O=(d,g,m,b)=>{[d.el,d.anchor]=y(d.children,g,m,b,d.el,d.anchor)},L=(d,g,m,b)=>{if(g.children!==d.children){const w=f(d.anchor);K(d),[g.el,g.anchor]=y(g.children,m,w,b)}else g.el=d.el,g.anchor=d.anchor},P=({el:d,anchor:g},m,b)=>{let w;for(;d&&d!==g;)w=f(d),r(d,m,b),d=w;r(g,m,b)},K=({el:d,anchor:g})=>{let m;for(;d&&d!==g;)m=f(d),s(d),d=m;s(g)},de=(d,g,m,b,w,k,x,C,N)=>{x=x||g.type==="svg",d==null?Ce(g,m,b,w,k,x,C,N):ye(d,g,w,k,x,C,N)},Ce=(d,g,m,b,w,k,x,C)=>{let N,T;const{type:B,props:U,shapeFlag:j,transition:X,dirs:oe}=d;if(N=d.el=o(d.type,k,U&&U.is,U),j&8?u(N,d.children):j&16&&fe(d.children,N,null,b,w,k&&B!=="foreignObject",x,C),oe&&Wn(d,null,b,"created"),W(N,d,d.scopeId,x,b),U){for(const ve in U)ve!=="value"&&!ao(ve)&&i(N,ve,null,U[ve],k,d.children,b,w,D);"value"in U&&i(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&Ft(T,b,d)}Object.defineProperty(N,"__vnode",{value:d,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:b,enumerable:!1}),oe&&Wn(d,null,b,"beforeMount");const Ee=(!w||w&&!w.pendingBranch)&&X&&!X.persisted;Ee&&X.beforeEnter(N),r(N,g,m),((T=U&&U.onVnodeMounted)||Ee||oe)&&pt(()=>{T&&Ft(T,b,d),Ee&&X.enter(N),oe&&Wn(d,null,b,"mounted")},w)},W=(d,g,m,b,w)=>{if(m&&p(d,m),b)for(let k=0;k<b.length;k++)p(d,b[k]);if(w){let k=w.subTree;if(k.patchFlag>0&&k.patchFlag&2048&&(k=kp(k.children)||k),g===k){const x=w.vnode;W(d,x,x.scopeId,x.slotScopeIds,w.parent)}}},fe=(d,g,m,b,w,k,x,C,N=0)=>{for(let T=N;T<d.length;T++){const B=d[T]=C?Tn(d[T]):Dt(d[T]);v(null,B,g,m,b,w,k,x,C)}},ye=(d,g,m,b,w,k,x)=>{const C=g.el=d.el;let{patchFlag:N,dynamicChildren:T,dirs:B}=g;N|=d.patchFlag&16;const U=d.props||_e,j=g.props||_e;let X;m&&Gn(m,!1),(X=j.onVnodeBeforeUpdate)&&Ft(X,m,g,d),B&&Wn(g,d,m,"beforeUpdate"),m&&Gn(m,!0),cr&&(N=0,x=!1,T=null);const oe=w&&g.type!=="foreignObject";if(T?($e(d.dynamicChildren,T,C,m,b,oe,k),m&&m.type.__hmrId&&fo(d,g)):x||dt(d,g,C,null,m,b,oe,k,!1),N>0){if(N&16)Ae(C,g,U,j,m,b,w);else if(N&2&&U.class!==j.class&&i(C,"class",null,j.class,w),N&4&&i(C,"style",U.style,j.style,w),N&8){const Ee=g.dynamicProps;for(let ve=0;ve<Ee.length;ve++){const Le=Ee[ve],Ot=U[Le],Or=j[Le];(Or!==Ot||Le==="value")&&i(C,Le,Ot,Or,w,d.children,m,b,D)}}N&1&&d.children!==g.children&&u(C,g.children)}else!x&&T==null&&Ae(C,g,U,j,m,b,w);((X=j.onVnodeUpdated)||B)&&pt(()=>{X&&Ft(X,m,g,d),B&&Wn(g,d,m,"updated")},b)},$e=(d,g,m,b,w,k,x)=>{for(let C=0;C<g.length;C++){const N=d[C],T=g[C],B=N.el&&(N.type===bt||!Xn(N,T)||N.shapeFlag&70)?h(N.el):m;v(N,T,B,null,b,w,k,x,!0)}},Ae=(d,g,m,b,w,k,x)=>{if(m!==b){if(m!==_e)for(const C in m)!ao(C)&&!(C in b)&&i(d,C,m[C],null,x,g.children,w,k,D);for(const C in b){if(ao(C))continue;const N=b[C],T=m[C];N!==T&&C!=="value"&&i(d,C,T,N,x,g.children,w,k,D)}"value"in b&&i(d,"value",m.value,b.value)}},kt=(d,g,m,b,w,k,x,C,N)=>{const T=g.el=d?d.el:a(""),B=g.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:j,slotScopeIds:X}=g;(cr||U&2048)&&(U=0,N=!1,j=null),X&&(C=C?C.concat(X):X),d==null?(r(T,m,b),r(B,m,b),fe(g.children,m,B,w,k,x,C,N)):U>0&&U&64&&j&&d.dynamicChildren?($e(d.dynamicChildren,j,m,w,k,x,C),w&&w.type.__hmrId?fo(d,g):(g.key!=null||w&&g===w.subTree)&&fo(d,g,!0)):dt(d,g,m,B,w,k,x,C,N)},vn=(d,g,m,b,w,k,x,C,N)=>{g.slotScopeIds=C,d==null?g.shapeFlag&512?w.ctx.activate(g,m,b,x,N):Rt(g,m,b,w,k,x,N):Fe(d,g,N)},Rt=(d,g,m,b,w,k,x)=>{const C=d.component=fE(d,b,w);if(C.type.__hmrId&&q_(C),co(d),en(C,"mount"),di(d)&&(C.ctx.renderer=be),en(C,"init"),pE(C),tn(C,"init"),C.asyncDep){if(w&&w.registerDep(C,se),!d.el){const N=C.subTree=mt(Ge);R(null,N,g,m)}return}se(C,d,g,m,w,k,x),lo(),tn(C,"mount")},Fe=(d,g,m)=>{const b=g.component=d.component;if(aw(d,g,m))if(b.asyncDep&&!b.asyncResolved){co(g),ce(b,g,m),lo();return}else b.next=g,j_(b.update),b.update();else g.el=d.el,b.vnode=g},se=(d,g,m,b,w,k,x)=>{const C=()=>{if(d.isMounted){let{next:B,bu:U,u:j,parent:X,vnode:oe}=d,Ee=B,ve;co(B||d.vnode),Gn(d,!1),B?(B.el=oe.el,ce(d,B,x)):B=oe,U&&Pr(U),(ve=B.props&&B.props.onVnodeBeforeUpdate)&&Ft(ve,X,B,oe),Gn(d,!0),en(d,"render");const Le=Ya(d);tn(d,"render");const Ot=d.subTree;d.subTree=Le,en(d,"patch"),v(Ot,Le,h(Ot.el),$(Ot),d,w,k),tn(d,"patch"),B.el=Le.el,Ee===null&&cw(d,Le.el),j&&pt(j,w),(ve=B.props&&B.props.onVnodeUpdated)&&pt(()=>Ft(ve,X,B,oe),w),Ip(d),lo()}else{let B;const{el:U,props:j}=g,{bm:X,m:oe,parent:Ee}=d,ve=ho(g);if(Gn(d,!1),X&&Pr(X),!ve&&(B=j&&j.onVnodeBeforeMount)&&Ft(B,Ee,g),Gn(d,!0),U&&ee){const Le=()=>{en(d,"render"),d.subTree=Ya(d),tn(d,"render"),en(d,"hydrate"),ee(U,d.subTree,d,w,null),tn(d,"hydrate")};ve?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Le()):Le()}else{en(d,"render");const Le=d.subTree=Ya(d);tn(d,"render"),en(d,"patch"),v(null,Le,m,b,d,w,k),tn(d,"patch"),g.el=Le.el}if(oe&&pt(oe,w),!ve&&(B=j&&j.onVnodeMounted)){const Le=g;pt(()=>Ft(B,Ee,Le),w)}(g.shapeFlag&256||Ee&&ho(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&d.a&&pt(d.a,w),d.isMounted=!0,Y_(d),g=m=b=null}},N=d.effect=new Bl(C,()=>la(T),d.scope),T=d.update=()=>N.run();T.id=d.uid,Gn(d,!0),N.onTrack=d.rtc?B=>Pr(d.rtc,B):void 0,N.onTrigger=d.rtg?B=>Pr(d.rtg,B):void 0,T.ownerInstance=d,T()},ce=(d,g,m)=>{g.component=d;const b=d.vnode.props;d.vnode=g,d.next=null,Vw(d,g.props,b,m),Gw(d,g.children,m),Tr(),Ah(),Ir()},dt=(d,g,m,b,w,k,x,C,N=!1)=>{const T=d&&d.children,B=d?d.shapeFlag:0,U=g.children,{patchFlag:j,shapeFlag:X}=g;if(j>0){if(j&128){Xt(T,U,m,b,w,k,x,C,N);return}else if(j&256){kr(T,U,m,b,w,k,x,C,N);return}}X&8?(B&16&&D(T,w,k),U!==T&&u(m,U)):B&16?X&16?Xt(T,U,m,b,w,k,x,C,N):D(T,w,k,!0):(B&8&&u(m,""),X&16&&fe(U,m,b,w,k,x,C,N))},kr=(d,g,m,b,w,k,x,C,N)=>{d=d||jr,g=g||jr;const T=d.length,B=g.length,U=Math.min(T,B);let j;for(j=0;j<U;j++){const X=g[j]=N?Tn(g[j]):Dt(g[j]);v(d[j],X,m,null,w,k,x,C,N)}T>B?D(d,w,k,!0,!1,U):fe(g,m,b,w,k,x,C,N,U)},Xt=(d,g,m,b,w,k,x,C,N)=>{let T=0;const B=g.length;let U=d.length-1,j=B-1;for(;T<=U&&T<=j;){const X=d[T],oe=g[T]=N?Tn(g[T]):Dt(g[T]);if(Xn(X,oe))v(X,oe,m,null,w,k,x,C,N);else break;T++}for(;T<=U&&T<=j;){const X=d[U],oe=g[j]=N?Tn(g[j]):Dt(g[j]);if(Xn(X,oe))v(X,oe,m,null,w,k,x,C,N);else break;U--,j--}if(T>U){if(T<=j){const X=j+1,oe=X<B?g[X].el:b;for(;T<=j;)v(null,g[T]=N?Tn(g[T]):Dt(g[T]),m,oe,w,k,x,C,N),T++}}else if(T>j)for(;T<=U;)wt(d[T],w,k,!0),T++;else{const X=T,oe=T,Ee=new Map;for(T=oe;T<=j;T++){const ot=g[T]=N?Tn(g[T]):Dt(g[T]);ot.key!=null&&(Ee.has(ot.key)&&A("Duplicate keys found during update:",JSON.stringify(ot.key),"Make sure keys are unique."),Ee.set(ot.key,T))}let ve,Le=0;const Ot=j-oe+1;let Or=!1,mh=0;const ps=new Array(Ot);for(T=0;T<Ot;T++)ps[T]=0;for(T=X;T<=U;T++){const ot=d[T];if(Le>=Ot){wt(ot,w,k,!0);continue}let $t;if(ot.key!=null)$t=Ee.get(ot.key);else for(ve=oe;ve<=j;ve++)if(ps[ve-oe]===0&&Xn(ot,g[ve])){$t=ve;break}$t===void 0?wt(ot,w,k,!0):(ps[$t-oe]=T+1,$t>=mh?mh=$t:Or=!0,v(ot,g[$t],m,null,w,k,x,C,N),Le++)}const yh=Or?eE(ps):jr;for(ve=yh.length-1,T=Ot-1;T>=0;T--){const ot=oe+T,$t=g[ot],vh=ot+1<B?g[ot+1].el:b;ps[T]===0?v(null,$t,m,vh,w,k,x,C,N):Or&&(ve<0||T!==yh[ve]?Ut($t,m,vh,2):ve--)}}},Ut=(d,g,m,b,w=null)=>{const{el:k,type:x,transition:C,children:N,shapeFlag:T}=d;if(T&6){Ut(d.component.subTree,g,m,b);return}if(T&128){d.suspense.move(g,m,b);return}if(T&64){x.move(d,g,m,be);return}if(x===bt){r(k,g,m);for(let U=0;U<N.length;U++)Ut(N[U],g,m,b);r(d.anchor,g,m);return}if(x===po){P(d,g,m);return}if(b!==2&&T&1&&C)if(b===0)C.beforeEnter(k),r(k,g,m),pt(()=>C.enter(k),w);else{const{leave:U,delayLeave:j,afterLeave:X}=C,oe=()=>r(k,g,m),Ee=()=>{U(k,()=>{oe(),X&&X()})};j?j(k,oe,Ee):Ee()}else r(k,g,m)},wt=(d,g,m,b=!1,w=!1)=>{const{type:k,props:x,ref:C,children:N,dynamicChildren:T,shapeFlag:B,patchFlag:U,dirs:j}=d;if(C!=null&&qc(C,null,m,d,!0),B&256){g.ctx.deactivate(d);return}const X=B&1&&j,oe=!ho(d);let Ee;if(oe&&(Ee=x&&x.onVnodeBeforeUnmount)&&Ft(Ee,g,d),B&6)M(d.component,m,b);else{if(B&128){d.suspense.unmount(m,b);return}X&&Wn(d,null,g,"beforeUnmount"),B&64?d.type.remove(d,g,m,w,be,b):T&&(k!==bt||U>0&&U&64)?D(T,g,m,!1,!0):(k===bt&&U&384||!w&&B&16)&&D(N,g,m),b&&Rr(d)}(oe&&(Ee=x&&x.onVnodeUnmounted)||X)&&pt(()=>{Ee&&Ft(Ee,g,d),X&&Wn(d,null,g,"unmounted")},m)},Rr=d=>{const{type:g,el:m,anchor:b,transition:w}=d;if(g===bt){d.patchFlag>0&&d.patchFlag&2048&&w&&!w.persisted?d.children.forEach(x=>{x.type===Ge?s(x.el):Rr(x)}):_(m,b);return}if(g===po){K(d);return}const k=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:C}=w,N=()=>x(m,k);C?C(d.el,k,N):N()}else k()},_=(d,g)=>{let m;for(;d!==g;)m=f(d),s(d),d=m;s(g)},M=(d,g,m)=>{d.type.__hmrId&&K_(d);const{bum:b,scope:w,update:k,subTree:x,um:C}=d;b&&Pr(b),w.stop(),k&&(k.active=!1,wt(x,d,g,m)),C&&pt(C,g),pt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),X_(d)},D=(d,g,m,b=!1,w=!1,k=0)=>{for(let x=k;x<d.length;x++)wt(d[x],g,m,b,w)},$=d=>d.shapeFlag&6?$(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),le=(d,g,m)=>{d==null?g._vnode&&wt(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,m),Ah(),wp(),g._vnode=d},be={p:v,um:wt,m:Ut,r:Rr,mt:Rt,mc:fe,pc:dt,pbc:$e,n:$,o:t};let re,ee;return e&&([re,ee]=e(be)),{render:le,hydrate:re,createApp:Yw(le,re)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fo(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tn(s[i]),a.el=o.el),n||fo(o,a)),a.type===pi&&(a.el=o.el),a.type===Ge&&!a.el&&(a.el=o.el)}}function eE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const tE=t=>t.__isTeleport,bt=Symbol("Fragment"),pi=Symbol("Text"),Ge=Symbol("Comment"),po=Symbol("Static"),Rs=[];let Pt=null;function Wp(t=!1){Rs.push(Pt=t?null:[])}function nE(){Rs.pop(),Pt=Rs[Rs.length-1]||null}let Hs=1;function Vh(t){Hs+=t}function Gp(t){return t.dynamicChildren=Hs>0?Pt||jr:null,nE(),Hs>0&&Pt&&Pt.push(t),t}function rE(t,e,n,r,s,i){return Gp(Fr(t,e,n,r,s,i,!0))}function sE(t,e,n,r,s){return Gp(mt(t,e,n,r,s,!0))}function qs(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return e.shapeFlag&6&&xr.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const iE=(...t)=>oE(...t),fa="__vInternal",Qp=({key:t})=>t??null,go=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||Be(t)||Q(t)?{i:ut,r:t,k:e,f:!!n}:t:null;function Fr(t,e=null,n=null,r=0,s=null,i=t===bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qp(e),ref:e&&go(e),scopeId:Ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ut};return a?(Xl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),c.key!==c.key&&A("VNode created with invalid key (NaN). VNode type:",c.type),Hs>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const mt=iE;function oE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Aw)&&(t||A(`Invalid vnode type when creating vnode: ${t}.`),t=Ge),qs(t)){const a=Qt(t,e,!0);return n&&Xl(a,n),Hs>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(eg(t)&&(t=t.__vccOpts),e){e=aE(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=xl(a)),we(c)&&(Dc(c)&&!z(c)&&(c=De({},c)),e.style=Pl(c))}const o=Pe(t)?1:lw(t)?128:tE(t)?64:we(t)?4:Q(t)?2:0;return o&4&&Dc(t)&&(t=te(t),A("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),Fr(t,e,n,r,s,o,i,!0)}function aE(t){return t?Dc(t)||fa in t?De({},t):t:null}function Qt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?lE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qp(a),ref:e&&e.ref?n&&s?z(s)?s.concat(go(e)):[s,go(e)]:go(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&z(o)?o.map(Yp):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yp(t){const e=Qt(t);return z(t.children)&&(e.children=t.children.map(Yp)),e}function cE(t=" ",e=0){return mt(pi,null,t,e)}function nD(t="",e=!1){return e?(Wp(),sE(Ge,null,t)):mt(Ge,null,t)}function Dt(t){return t==null||typeof t=="boolean"?mt(Ge):z(t)?mt(bt,null,t.slice()):typeof t=="object"?Tn(t):mt(pi,null,String(t))}function Tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function Xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(fa in e)?e._ctx=ut:s===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),r&64?(n=16,e=[cE(e)]):n=8);t.children=e,t.shapeFlag|=n}function lE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xl([e.class,r.class]));else if(s==="style")e.style=Pl([e.style,r.style]);else if(ui(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){St(t,e,7,[n,r])}const uE=zp();let hE=0;function fE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uE,i={uid:hE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(r,s),emitsOptions:Cp(r,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=Rw(i),i.root=e?e.root:i,i.emit=nw.bind(null,i),t.ce&&t.ce(i),i}let ke=null;const Zl=()=>ke||ut,Yr=t=>{ke=t,t.scope.on()},ur=()=>{ke&&ke.scope.off(),ke=null},dE=qn("slot,component");function Kc(t,e){const n=e.isNativeTag||qd;(dE(t)||n(t))&&A("Do not use built-in or reserved HTML elements as component id: "+t)}function Jp(t){return t.vnode.shapeFlag&4}let Ks=!1;function pE(t,e=!1){Ks=e;const{props:n,children:r}=t.vnode,s=Jp(t);$w(t,n,s,e),Ww(t,r);const i=s?gE(t,e):void 0;return Ks=!1,i}function gE(t,e){var n;const r=t.type;{if(r.name&&Kc(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)Kc(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)Up(i[o])}r.compilerOptions&&Xp()&&A('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=lp(new Proxy(t.ctx,$p)),Ow(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?yE(t):null;Yr(t),Tr();const o=an(s,t,0,[$r(t.props),i]);if(Ir(),ur(),Ul(o)){if(o.then(ur,ur),e)return o.then(a=>{Bh(t,a,e)}).catch(a=>{ca(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!==null&&n!==void 0?n:"Anonymous";A(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Bh(t,o,e)}else Zp(t,e)}function Bh(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)?(qs(e)&&A("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=dp(e),Nw(t)):e!==void 0&&A(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Zp(t,n)}let zc;const Xp=()=>!zc;function Zp(t,e,n){const r=t.type;if(!t.render){if(!e&&zc&&!r.render){const s=r.template||Yl(t).template;if(s){en(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=De(De({isCustomElement:i,delimiters:a},o),c);r.render=zc(s,l),tn(t,"compile")}}t.render=r.render||gt}Yr(t),Tr(),Pw(t),Ir(),ur(),!r.render&&t.render===gt&&!e&&(r.template?A('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):A("Component is missing template or render function."))}function mE(t){return new Proxy(t.attrs,{get(e,n){return ko(),yt(t,"get","$attrs"),e[n]},set(){return A("setupContext.attrs is readonly."),!1},deleteProperty(){return A("setupContext.attrs is readonly."),!1}})}function yE(t){const e=r=>{if(t.exposed&&A("expose() should be called only once per setup()."),r!=null){let s=typeof r;s==="object"&&(z(r)?s="array":Be(r)&&(s="ref")),s!=="object"&&A(`expose() should be passed a plain object, received ${s}.`)}t.exposed=r||{}};let n;return Object.freeze({get attrs(){return n||(n=mE(t))},get slots(){return $r(t.slots)},get emit(){return(r,...s)=>t.emit(r,...s)},expose:e})}function da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dp(lp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lr)return lr[n](t)},has(e,n){return n in e||n in lr}}))}const vE=/(?:^|[-_])(\w)/g,_E=t=>t.replace(vE,e=>e.toUpperCase()).replace(/[-_]/g,"");function eu(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function pa(t,e,n=!1){let r=eu(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?_E(r):n?"App":"Anonymous"}function eg(t){return Q(t)&&"__vccOpts"in t}const Tt=(t,e)=>x_(t,e,Ks);function tg(t,e,n){const r=arguments.length;return r===2?we(e)&&!z(e)?qs(e)?mt(t,null,[e]):mt(t,e):mt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qs(n)&&(n=[n]),mt(t,e,n))}const wE=Symbol("ssrContext"),EE=()=>{{const t=cn(wE);return t||A("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Za(t){return!!(t&&t.__v_isShallow)}function bE(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return we(h)?h.__isVue?["div",t,"VueInstance"]:Be(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:or(h)?["div",{},["span",t,Za(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${$n(h)?" (readonly)":""}`]:$n(h)?["div",{},["span",t,Za(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const f=[];h.type.props&&h.props&&f.push(o("props",te(h.props))),h.setupState!==_e&&f.push(o("setup",h.setupState)),h.data!==_e&&f.push(o("data",te(h.data)));const p=c(h,"computed");p&&f.push(o("computed",p));const y=c(h,"inject");return y&&f.push(o("injected",y)),f.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),f}function o(h,f){return f=De({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(p=>["div",{},["span",r,p+": "],a(f[p],!1)])]]:["span",{}]}function a(h,f=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:we(h)?["object",{object:f?te(h):h}]:["span",n,String(h)]}function c(h,f){const p=h.type;if(Q(p))return;const y={};for(const v in h.ctx)l(p,v,f)&&(y[v]=h.ctx[v]);return y}function l(h,f,p){const y=h[p];if(z(y)&&y.includes(f)||we(y)&&f in y||h.extends&&l(h.extends,f,p)||h.mixins&&h.mixins.some(v=>l(v,f,p)))return!0}function u(h){return Za(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const jh="3.2.47",TE="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,Hh=Zn&&Zn.createElement("template"),IE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Zn.createElementNS(TE,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hh.innerHTML=r?`<svg>${t}</svg>`:t;const a=Hh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function SE(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function CE(t,e,n){const r=t.style,s=Pe(n);if(n&&!s){if(e&&!Pe(e))for(const i in e)n[i]==null&&Wc(r,i,"");for(const i in n)Wc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const AE=/[^\\];\s*$/,qh=/\s*!important$/;function Wc(t,e,n){if(z(n))n.forEach(r=>Wc(t,e,r));else if(n==null&&(n=""),AE.test(n)&&A(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=kE(t,e);qh.test(n)?t.setProperty(Mn(r),n.replace(qh,""),"important"):t[r]=n}}const Kh=["Webkit","Moz","ms"],ec={};function kE(t,e){const n=ec[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return ec[e]=r;r=gr(r);for(let s=0;s<Kh.length;s++){const i=Kh[s]+r;if(i in t)return ec[e]=i}return e}const zh="http://www.w3.org/1999/xlink";function RE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zh,e.slice(6,e.length)):t.setAttributeNS(zh,e,n);else{const i=zv(e);n==null||i&&!jd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function OE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch(c){a||A(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&t.removeAttribute(e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function NE(t,e,n,r){t.removeEventListener(e,n,r)}function DE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=PE(e);if(r){const l=i[e]=ME(r,s);Lr(t,a,l,c)}else o&&(NE(t,a,o,c),i[e]=void 0)}}const Wh=/(?:Once|Passive|Capture)$/;function PE(t){let e;if(Wh.test(t)){e={};let r;for(;r=t.match(Wh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mn(t.slice(2)),e]}let tc=0;const xE=Promise.resolve(),LE=()=>tc||(xE.then(()=>tc=0),tc=Date.now());function ME(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;St(UE(r,n.value),e,5,[r])};return n.value=t,n.attached=LE(),n}function UE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gh=/^on[a-z]/,$E=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?SE(t,r,s):e==="style"?CE(t,n,r):ui(e)?Io(e)||DE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):FE(t,e,r,s))?OE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),RE(t,e,r,s))};function FE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Gh.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Gh.test(e)&&Pe(n)?!1:e in t}const VE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};gw.props;const Qh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Pr(e,n):e};function BE(t){t.target.composing=!0}function Yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rD={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Qh(s);const i=r||s.props&&s.props.type==="number";Lr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Cc(a)),t._assign(a)}),n&&Lr(t,"change",()=>{t.value=t.value.trim()}),e||(Lr(t,"compositionstart",BE),Lr(t,"compositionend",Yh),Lr(t,"change",Yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Qh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Cc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},jE=De({patchProp:$E},IE);let Jh;function HE(){return Jh||(Jh=Xw(jE))}const qE=(...t)=>{const e=HE().createApp(...t);KE(e),zE(e);const{mount:n}=e;return e.mount=r=>{const s=WE(r);if(!s)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function KE(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>Hv(e)||qv(e),writable:!1})}function zE(t){if(Xp()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){A("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return A(r),n},set(){A(r)}})}}function WE(t){if(Pe(t)){const e=document.querySelector(t);return e||A(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&A('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function GE(){bE()}GE();/**
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
 */const ng=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ng(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new YE;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JE=function(t){const e=ng(t);return rg.encodeByteArray(e,!0)},No=function(t){return JE(t).replace(/\./g,"")},sg=function(t){try{return rg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZE=()=>XE().__FIREBASE_DEFAULTS__,eb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sg(t[1]);return e&&JSON.parse(e)},ga=()=>{try{return ZE()||eb()||tb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ig=t=>{var e,n;return(n=(e=ga())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tu=t=>{const e=ig(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nb=()=>{var t;return(t=ga())===null||t===void 0?void 0:t.config},og=t=>{var e;return(e=ga())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ag(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[No(JSON.stringify(n)),No(JSON.stringify(o)),a].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function ib(){var t;const e=(t=ga())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ob(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ab(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cb(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lb(){try{return typeof indexedDB=="object"}catch{return!1}}function ub(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const hb="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hb,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,a,r)}}function fb(t,e){return t.replace(db,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const db=/\{\$([^}]+)}/g;function pb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xh(i)&&Xh(o)){if(!Do(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xh(t){return t!==null&&typeof t=="object"}/**
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
 */function mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ts(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gb(t,e){const n=new mb(t,e);return n.subscribe.bind(n)}class mb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nc),s.error===void 0&&(s.error=nc),s.complete===void 0&&(s.complete=nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nc(){}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class vb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wb(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_b(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _b(t){return t===Jn?void 0:t}function wb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Eb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const bb={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Tb=pe.INFO,Ib={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Sb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ib[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nu{constructor(e){this.name=e,this._logLevel=Tb,this._logHandler=Sb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Cb=(t,e)=>e.some(n=>t instanceof n);let Zh,ef;function Ab(){return Zh||(Zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kb(){return ef||(ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cg=new WeakMap,Gc=new WeakMap,lg=new WeakMap,rc=new WeakMap,ru=new WeakMap;function Rb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cg.set(n,t)}).catch(()=>{}),ru.set(e,t),e}function Ob(t){if(Gc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gc.set(t,e)}let Qc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nb(t){Qc=t(Qc)}function Db(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sc(this),e,...n);return lg.set(r,e.sort?e.sort():[e]),Dn(r)}:kb().includes(t)?function(...e){return t.apply(sc(this),e),Dn(cg.get(this))}:function(...e){return Dn(t.apply(sc(this),e))}}function Pb(t){return typeof t=="function"?Db(t):(t instanceof IDBTransaction&&Ob(t),Cb(t,Ab())?new Proxy(t,Qc):t)}function Dn(t){if(t instanceof IDBRequest)return Rb(t);if(rc.has(t))return rc.get(t);const e=Pb(t);return e!==t&&(rc.set(t,e),ru.set(e,t)),e}const sc=t=>ru.get(t);function xb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Dn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dn(o.result),c.oldVersion,c.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Lb=["get","getKey","getAll","getAllKeys","count"],Mb=["put","add","delete","clear"],ic=new Map;function tf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Mb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Lb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ic.set(e,i),i}Nb(t=>({...t,get:(e,n,r)=>tf(e,n)||t.get(e,n,r),has:(e,n)=>!!tf(e,n)||t.has(e,n)}));/**
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
 */class Ub{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($b(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $b(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yc="@firebase/app",nf="0.9.7";/**
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
 */const yr=new nu("@firebase/app"),Fb="@firebase/app-compat",Vb="@firebase/analytics-compat",Bb="@firebase/analytics",jb="@firebase/app-check-compat",Hb="@firebase/app-check",qb="@firebase/auth",Kb="@firebase/auth-compat",zb="@firebase/database",Wb="@firebase/database-compat",Gb="@firebase/functions",Qb="@firebase/functions-compat",Yb="@firebase/installations",Jb="@firebase/installations-compat",Xb="@firebase/messaging",Zb="@firebase/messaging-compat",eT="@firebase/performance",tT="@firebase/performance-compat",nT="@firebase/remote-config",rT="@firebase/remote-config-compat",sT="@firebase/storage",iT="@firebase/storage-compat",oT="@firebase/firestore",aT="@firebase/firestore-compat",cT="firebase",lT="9.19.1";/**
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
 */const Jc="[DEFAULT]",uT={[Yc]:"fire-core",[Fb]:"fire-core-compat",[Bb]:"fire-analytics",[Vb]:"fire-analytics-compat",[Hb]:"fire-app-check",[jb]:"fire-app-check-compat",[qb]:"fire-auth",[Kb]:"fire-auth-compat",[zb]:"fire-rtdb",[Wb]:"fire-rtdb-compat",[Gb]:"fire-fn",[Qb]:"fire-fn-compat",[Yb]:"fire-iid",[Jb]:"fire-iid-compat",[Xb]:"fire-fcm",[Zb]:"fire-fcm-compat",[eT]:"fire-perf",[tT]:"fire-perf-compat",[nT]:"fire-rc",[rT]:"fire-rc-compat",[sT]:"fire-gcs",[iT]:"fire-gcs-compat",[oT]:"fire-fst",[aT]:"fire-fst-compat","fire-js":"fire-js",[cT]:"fire-js-all"};/**
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
 */const Po=new Map,Xc=new Map;function hT(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(Xc.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;Xc.set(e,t);for(const n of Po.values())hT(n,t);return!0}function yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new gi("app","Firebase",fT);/**
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
 */class dT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const os=lT;function ug(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(n||(n=nb()),!n)throw Pn.create("no-options");const i=Po.get(s);if(i){if(Do(n,i.options)&&Do(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const o=new Eb(s);for(const c of Xc.values())o.addComponent(c);const a=new dT(n,r,o);return Po.set(s,a),a}function ma(t=Jc){const e=Po.get(t);if(!e&&t===Jc)return ug();if(!e)throw Pn.create("no-app",{appName:t});return e}function Ct(t,e,n){var r;let s=(r=uT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}Fn(new hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pT="firebase-heartbeat-database",gT=1,zs="firebase-heartbeat-store";let oc=null;function hg(){return oc||(oc=xb(pT,gT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zs)}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),oc}async function mT(t){try{return(await hg()).transaction(zs).objectStore(zs).get(fg(t))}catch(e){if(e instanceof Mt)yr.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function rf(t,e){try{const r=(await hg()).transaction(zs,"readwrite");return await r.objectStore(zs).put(e,fg(t)),r.done}catch(n){if(n instanceof Mt)yr.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function fg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yT=1024,vT=30*24*60*60*1e3;class _T{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ET(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=vT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sf(),{heartbeatsToSend:n,unsentEntries:r}=wT(this._heartbeatsCache.heartbeats),s=No(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sf(){return new Date().toISOString().substring(0,10)}function wT(t,e=yT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),of(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ET{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lb()?ub().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function of(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bT(t){Fn(new hn("platform-logger",e=>new Ub(e),"PRIVATE")),Fn(new hn("heartbeat",e=>new _T(e),"PRIVATE")),Ct(Yc,nf,t),Ct(Yc,nf,"esm2017"),Ct("fire-js","")}bT("");function su(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function dg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TT=dg,pg=new gi("auth","Firebase",dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new nu("@firebase/auth");function mo(t,...e){af.logLevel<=pe.ERROR&&af.error(`Auth (${os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw iu(t,...e)}function Kt(t,...e){return iu(t,...e)}function IT(t,e,n){const r=Object.assign(Object.assign({},TT()),{[e]:n});return new gi("auth","Firebase",r).create(e,{appName:t.name})}function iu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pg.create(t,...e)}function G(t,e,...n){if(!t)throw iu(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function fn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Map;function sn(t){fn(t instanceof Function,"Expected a class definition");let e=cf.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e){const n=yi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Do(i,e??{}))return s;Lt(s,"already-initialized")}return n.initialize({options:e})}function CT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AT(){return lf()==="http:"||lf()==="https:"}function lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AT()||ob()||"connection"in navigator)?navigator.onLine:!0}function RT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=sb()||ab()}get(){return kT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new vi(3e4,6e4);function _i(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wi(t,e,n,r,s={}){return mg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=mi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gg.fetch()(yg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function mg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OT),e);try{const s=new DT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw IT(t,u,l);Lt(t,u)}}catch(s){if(s instanceof Mt)throw s;Lt(t,"network-request-failed",{message:String(s)})}}async function Ei(t,e,n,r,s={}){const i=await wi(t,e,n,r,s);return"mfaPendingCredential"in i&&Lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ou(t.config,s):`${t.config.apiScheme}://${s}`}class DT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),NT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Kt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e){return wi(t,"POST","/v1/accounts:delete",e)}async function xT(t,e){return wi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LT(t,e=!1){const n=xe(t),r=await n.getIdToken(e),s=au(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Os(ac(s.auth_time)),issuedAtTime:Os(ac(s.iat)),expirationTime:Os(ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function au(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=sg(n);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function MT(t){const e=au(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&UT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ws(t,xT(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?BT(i.providerUserInfo):[],a=VT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function FT(t){const e=xe(t);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function BT(t){return t.map(e=>{var{providerId:n}=e,r=su(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){const n=await mg(t,{},async()=>{const r=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=yg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gs;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $T(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ws(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LT(this,e)}reload(){return FT(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ws(this,PT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:P,isAnonymous:K,providerData:de,stsTokenManager:Ce}=n;G(L&&Ce,e,"internal-error");const W=Gs.fromJSON(this.name,Ce);G(typeof L=="string",e,"internal-error"),wn(h,e.name),wn(f,e.name),G(typeof P=="boolean",e,"internal-error"),G(typeof K=="boolean",e,"internal-error"),wn(p,e.name),wn(y,e.name),wn(v,e.name),wn(E,e.name),wn(R,e.name),wn(O,e.name);const fe=new hr({uid:L,auth:e,email:f,emailVerified:P,displayName:h,isAnonymous:K,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:W,createdAt:R,lastLoginAt:O});return de&&Array.isArray(de)&&(fe.providerData=de.map(ye=>Object.assign({},ye))),E&&(fe._redirectEventId=E),fe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gs;s.updateFromServerResponse(n);const i=new hr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}}/**
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
 */class _g{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_g.type="NONE";const uf=_g;/**
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
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kr(sn(uf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||sn(uf);const o=yo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=hr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Kr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ig(e))return"Blackberry";if(Sg(e))return"Webos";if(cu(e))return"Safari";if((e.includes("chrome/")||Eg(e))&&!e.includes("edge/"))return"Chrome";if(Tg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wg(t=st()){return/firefox\//i.test(t)}function cu(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eg(t=st()){return/crios\//i.test(t)}function bg(t=st()){return/iemobile/i.test(t)}function Tg(t=st()){return/android/i.test(t)}function Ig(t=st()){return/blackberry/i.test(t)}function Sg(t=st()){return/webos/i.test(t)}function ya(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HT(t=st()){var e;return ya(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qT(){return cb()&&document.documentMode===10}function Cg(t=st()){return ya(t)||Tg(t)||Sg(t)||Ig(t)||/windows phone/i.test(t)||bg(t)}function KT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t,e=[]){let n;switch(t){case"Browser":n=hf(st());break;case"Worker":n=`${hf(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
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
 */class zT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ff(this),this.idTokenSubscription=new ff(this),this.beforeStateQueue=new zT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ag(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bi(t){return xe(t)}class ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=gb(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function GT(t,e,n){const r=bi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=kg(e),{host:o,port:a}=QT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||YT()}function kg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QT(t){const e=kg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:df(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:df(o)}}}function df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function JT(t,e){return wi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e){return Ei(t,"POST","/v1/accounts:signInWithPassword",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e){return Ei(t,"POST","/v1/accounts:signInWithEmailLink",_i(t,e))}async function eI(t,e){return Ei(t,"POST","/v1/accounts:signInWithEmailLink",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends lu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Qs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return XT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZT(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return JT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eI(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t,e){return Ei(t,"POST","/v1/accounts:signInWithIdp",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="http://localhost";class vr extends lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=su(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:tI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rI(t){const e=bs(Ts(t)).link,n=e?bs(Ts(e)).deep_link_id:null,r=bs(Ts(t)).deep_link_id;return(r?bs(Ts(r)).link:null)||r||n||e||t}class uu{constructor(e){var n,r,s,i,o,a;const c=bs(Ts(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=nI((s=c.mode)!==null&&s!==void 0?s:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rI(e);try{return new uu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,n){return Qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=uu.parseLink(n);return G(r,"argument-error"),Qs._fromEmailAndCode(e,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends Rg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ti{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ti{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ti{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e){return Ei(t,"POST","/v1/accounts:signUp",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hr._fromIdTokenResponse(e,r,s),o=pf(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=pf(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Lo(e,n,r,s)}}function Og(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(t,i,e,r):i})}async function iI(t,e,n=!1){const r=await Ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function oI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ws(t,Og(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=au(i.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(t,e,n=!1){const r="signIn",s=await Og(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function aI(t,e){return Ng(bi(t),e)}async function sD(t,e,n){const r=bi(t),s=await sI(r,{returnSecureToken:!0,email:e,password:n}),i=await _r._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function iD(t,e,n){return aI(xe(t),as.credential(e,n))}function cI(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function lI(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function oD(t){return xe(t).signOut()}const Mo="__sak";/**
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
 */class Dg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){const t=st();return cu(t)||ya(t)}const hI=1e3,fI=10;class Pg extends Dg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uI()&&KT(),this.fallbackToPolling=Cg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pg.type="LOCAL";const dI=Pg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends Dg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xg.type="SESSION";const Lg=xg;/**
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
 */function pI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await pI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=hu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function mI(t){zt().location.href=t}/**
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
 */function Mg(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function yI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _I(){return Mg()?self:null}/**
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
 */const Ug="firebaseLocalStorageDb",wI=1,Uo="firebaseLocalStorage",$g="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _a(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function EI(){const t=indexedDB.deleteDatabase(Ug);return new Ii(t).toPromise()}function el(){const t=indexedDB.open(Ug,wI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:$g})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await EI(),e(await el()))})})}async function gf(t,e,n){const r=_a(t,!0).put({[$g]:e,value:n});return new Ii(r).toPromise()}async function bI(t,e){const n=_a(t,!1).get(e),r=await new Ii(n).toPromise();return r===void 0?null:r.value}function mf(t,e){const n=_a(t,!0).delete(e);return new Ii(n).toPromise()}const TI=800,II=3;class Fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await el(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>II)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(_I()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yI(),!this.activeServiceWorker)return;this.sender=new gI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await el();return await gf(e,Mo,"1"),await mf(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_a(s,!1).getAll();return new Ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fg.type="LOCAL";const SI=Fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function AI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",CI().appendChild(r)})}function kI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new vi(3e4,6e4);/**
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
 */function RI(t,e){return e?sn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fu extends lu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OI(t){return Ng(t.auth,new fu(t),t.bypassAuthState)}function NI(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),oI(n,new fu(t),t.bypassAuthState)}async function DI(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),iI(n,new fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OI;case"linkViaPopup":case"linkViaRedirect":return DI;case"reauthViaPopup":case"reauthViaRedirect":return NI;default:Lt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new vi(2e3,1e4);class Vr extends Vg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,PI.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="pendingRedirect",vo=new Map;class LI extends Vg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await MI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MI(t,e){const n=FI(e),r=$I(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function UI(t,e){vo.set(t._key(),e)}function $I(t){return sn(t._redirectPersistence)}function FI(t){return yo(xI,t.config.apiKey,t.name)}async function VI(t,e,n=!1){const r=bi(t),s=RI(r,e),o=await new LI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=10*60*1e3;class jI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BI&&this.cachedEventUids.clear(),this.cachedEventUids.has(yf(e))}saveEventToCache(e){this.cachedEventUids.add(yf(e)),this.lastProcessedEventTime=Date.now()}}function yf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e={}){return wi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zI=/^https?/;async function WI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qI(t);for(const n of e)try{if(GI(n))return}catch{}Lt(t,"unauthorized-domain")}function GI(t){const e=Zc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zI.test(n))return!1;if(KI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const QI=new vi(3e4,6e4);function vf(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YI(t){return new Promise((e,n)=>{var r,s,i;function o(){vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vf(),n(Kt(t,"network-request-failed"))},timeout:QI.get()})}if(!((s=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=zt().gapi)===null||i===void 0)&&i.load)o();else{const a=kI("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},AI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _o=null,e})}let _o=null;function JI(t){return _o=_o||YI(t),_o}/**
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
 */const XI=new vi(5e3,15e3),ZI="__/auth/iframe",e0="emulator/auth/iframe",t0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r0(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ou(e,e0):`https://${t.config.authDomain}/${ZI}`,r={apiKey:e.apiKey,appName:t.name,v:os},s=n0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mi(r).slice(1)}`}async function s0(t){const e=await JI(t),n=zt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:r0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},XI.get());function c(){zt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const i0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o0=500,a0=600,c0="_blank",l0="http://localhost";class _f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u0(t,e,n,r=o0,s=a0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},i0),{width:r.toString(),height:s.toString(),top:i,left:o}),l=st().toLowerCase();n&&(a=Eg(l)?c0:n),wg(l)&&(e=e||l0,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(HT(l)&&a!=="_self")return h0(e||"",a),new _f(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new _f(h)}function h0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const f0="__/auth/handler",d0="emulator/auth/handler";function wf(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:s};if(e instanceof Rg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ti){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${p0(t)}?${mi(a).slice(1)}`}function p0({config:t}){return t.emulator?ou(t,d0):`https://${t.authDomain}/${f0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="webStorageSupport";class g0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lg,this._completeRedirectFn=VI,this._overrideRedirectResult=UI}async _openPopup(e,n,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=wf(e,n,r,Zc(),s);return u0(e,o,hu())}async _openRedirect(e,n,r,s){return await this._originValidation(e),mI(wf(e,n,r,Zc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await s0(e),r=new jI(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cc];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cg()||cu()||ya()}}const m0=g0;var Ef="@firebase/auth",bf="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _0(t){Fn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ag(t)},u=new WT(a,c,l);return CT(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new hn("auth-internal",e=>{const n=bi(e.getProvider("auth").getImmediate());return(r=>new y0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Ef,bf,v0(t)),Ct(Ef,bf,"esm2017")}/**
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
 */const w0=5*60,E0=og("authIdTokenMaxAge")||w0;let Tf=null;const b0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>E0)return;const s=n==null?void 0:n.token;Tf!==s&&(Tf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $o(t=ma()){const e=yi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ST(t,{popupRedirectResolver:m0,persistence:[SI,dI,Lg]}),r=og("authTokenSyncURL");if(r){const i=b0(r);lI(n,i,()=>i(n.currentUser)),cI(n,o=>i(o))}const s=ig("auth");return s&&GT(n,`http://${s}`),n}_0("Browser");var T0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,du=du||{},J=T0||self;function Fo(){}function wa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function I0(t){return Object.prototype.hasOwnProperty.call(t,lc)&&t[lc]||(t[lc]=++S0)}var lc="closure_uid_"+(1e9*Math.random()>>>0),S0=0;function C0(t,e,n){return t.call.apply(t.bind,arguments)}function A0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=C0:nt=A0,nt.apply(null,arguments)}function Wi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Kn(){this.s=this.s,this.o=this.o}var k0=0;Kn.prototype.s=!1;Kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),k0!=0)&&I0(this)};Kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function If(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var R0=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",Fo,e),J.removeEventListener("test",Fo,e)}catch{}return t}();function Vo(t){return/^[\s\xa0]*$/.test(t)}var Sf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function uc(t,e){return t<e?-1:t>e?1:0}function Ea(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return Ea().indexOf(t)!=-1}function gu(t){return gu[" "](t),t}gu[" "]=Fo;function O0(t){var e=P0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var N0=Ht("Opera"),Jr=Ht("Trident")||Ht("MSIE"),Hg=Ht("Edge"),tl=Hg||Jr,qg=Ht("Gecko")&&!(Ea().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),D0=Ea().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function Kg(){var t=J.document;return t?t.documentMode:void 0}var Bo;e:{var hc="",fc=function(){var t=Ea();if(qg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hg)return/Edge\/([\d\.]+)/.exec(t);if(Jr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(D0)return/WebKit\/(\S+)/.exec(t);if(N0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fc&&(hc=fc?fc[1]:""),Jr){var dc=Kg();if(dc!=null&&dc>parseFloat(hc)){Bo=String(dc);break e}}Bo=hc}var P0={};function x0(){return O0(function(){let t=0;const e=Sf(String(Bo)).split("."),n=Sf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=uc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||uc(s[2].length==0,i[2].length==0)||uc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var nl;if(J.document&&Jr){var Cf=Kg();nl=Cf||parseInt(Bo,10)||void 0}else nl=void 0;var L0=nl;function Ys(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qg){e:{try{gu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:M0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ys.X.h.call(this)}}Ye(Ys,rt);var M0={2:"touch",3:"pen",4:"mouse"};Ys.prototype.h=function(){Ys.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ci="closure_listenable_"+(1e6*Math.random()|0),U0=0;function $0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++U0,this.ba=this.ea=!1}function ba(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function mu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function zg(t){const e={};for(const n in t)e[n]=t[n];return e}const Af="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Af.length;i++)n=Af[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ta(t){this.src=t,this.g={},this.h=0}Ta.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=sl(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new $0(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function rl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=jg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ba(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var yu="closure_lm_"+(1e6*Math.random()|0),pc={};function Gg(t,e,n,r,s){if(r&&r.once)return Yg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gg(t,e[i],n,r,s);return null}return n=wu(n),t&&t[Ci]?t.N(e,n,Si(r)?!!r.capture:!!r,s):Qg(t,e,n,!1,r,s)}function Qg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Si(s)?!!s.capture:!!s,a=_u(t);if(a||(t[yu]=a=new Ta(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=F0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)R0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Xg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function F0(){function t(n){return e.call(t.src,t.listener,n)}const e=V0;return t}function Yg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yg(t,e[i],n,r,s);return null}return n=wu(n),t&&t[Ci]?t.O(e,n,Si(r)?!!r.capture:!!r,s):Qg(t,e,n,!0,r,s)}function Jg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Jg(t,e[i],n,r,s);else r=Si(r)?!!r.capture:!!r,n=wu(n),t&&t[Ci]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=sl(i,n,r,s),-1<n&&(ba(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=_u(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sl(e,n,r,s)),(n=-1<t?e[t]:null)&&vu(n))}function vu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ci])rl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=_u(e))?(rl(n,t),n.h==0&&(n.src=null,e[yu]=null)):ba(t)}}}function Xg(t){return t in pc?pc[t]:pc[t]="on"+t}function V0(t,e){if(t.ba)t=!0;else{e=new Ys(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&vu(t),t=n.call(r,e)}return t}function _u(t){return t=t[yu],t instanceof Ta?t:null}var gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wu(t){return typeof t=="function"?t:(t[gc]||(t[gc]=function(e){return t.handleEvent(e)}),t[gc])}function ze(){Kn.call(this),this.i=new Ta(this),this.P=this,this.I=null}Ye(ze,Kn);ze.prototype[Ci]=!0;ze.prototype.removeEventListener=function(t,e,n,r){Jg(this,t,e,n,r)};function Qe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var s=e;e=new rt(r,t),Wg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Gi(o,r,!0,e)&&s}if(o=e.g=t,s=Gi(o,r,!0,e)&&s,s=Gi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Gi(o,r,!1,e)&&s}ze.prototype.M=function(){if(ze.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ba(n[r]);delete t.g[e],t.h--}}this.I=null};ze.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Gi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&rl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Eu=J.JSON.stringify;function B0(){var t=tm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class j0{constructor(){this.h=this.g=null}add(e,n){const r=Zg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Zg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new H0,t=>t.reset());class H0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function q0(t){J.setTimeout(()=>{throw t},0)}function em(t,e){il||K0(),ol||(il(),ol=!0),tm.add(t,e)}var il;function K0(){var t=J.Promise.resolve(void 0);il=function(){t.then(z0)}}var ol=!1,tm=new j0;function z0(){for(var t;t=B0();){try{t.h.call(t.g)}catch(n){q0(n)}var e=Zg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ol=!1}function Ia(t,e){ze.call(this),this.h=t||1,this.g=e||J,this.j=nt(this.lb,this),this.l=Date.now()}Ye(Ia,ze);F=Ia.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Qe(this,"tick"),this.ca&&(bu(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Ia.X.M.call(this),bu(this),delete this.g};function Tu(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function nm(t){t.g=Tu(()=>{t.g=null,t.i&&(t.i=!1,nm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class W0 extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nm(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Js(t){Kn.call(this),this.h=t,this.g={}}Ye(Js,Kn);var kf=[];function rm(t,e,n,r){Array.isArray(n)||(n&&(kf[0]=n.toString()),n=kf);for(var s=0;s<n.length;s++){var i=Gg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function sm(t){mu(t.g,function(e,n){this.g.hasOwnProperty(n)&&vu(e)},t),t.g={}}Js.prototype.M=function(){Js.X.M.call(this),sm(this)};Js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sa(){this.g=!0}Sa.prototype.Aa=function(){this.g=!1};function G0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Q0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+J0(t,n)+(r?" "+r:"")})}function Y0(t,e){t.info(function(){return"TIMEOUT: "+e})}Sa.prototype.info=function(){};function J0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Eu(n)}catch{return e}}var Sr={},Rf=null;function Ca(){return Rf=Rf||new ze}Sr.Pa="serverreachability";function im(t){rt.call(this,Sr.Pa,t)}Ye(im,rt);function Xs(t){const e=Ca();Qe(e,new im(e))}Sr.STAT_EVENT="statevent";function om(t,e){rt.call(this,Sr.STAT_EVENT,t),this.stat=e}Ye(om,rt);function ht(t){const e=Ca();Qe(e,new om(e,t))}Sr.Qa="timingevent";function am(t,e){rt.call(this,Sr.Qa,t),this.size=e}Ye(am,rt);function Ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Aa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},cm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Iu(){}Iu.prototype.h=null;function Of(t){return t.h||(t.h=t.i())}function lm(){}var ki={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Su(){rt.call(this,"d")}Ye(Su,rt);function Cu(){rt.call(this,"c")}Ye(Cu,rt);var al;function ka(){}Ye(ka,Iu);ka.prototype.g=function(){return new XMLHttpRequest};ka.prototype.i=function(){return{}};al=new ka;function Ri(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Js(this),this.O=X0,t=tl?125:void 0,this.T=new Ia(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new um}function um(){this.i=null,this.g="",this.h=!1}var X0=45e3,cl={},jo={};F=Ri.prototype;F.setTimeout=function(t){this.O=t};function ll(t,e,n){t.K=1,t.v=Oa(dn(e)),t.s=n,t.P=!0,hm(t,null)}function hm(t,e){t.F=Date.now(),Oi(t),t.A=dn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),_m(n.i,"t",r),t.C=0,n=t.l.H,t.h=new um,t.g=Vm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new W0(nt(t.La,t,t.g),t.N)),rm(t.S,t.g,"readystatechange",t.ib),e=t.H?zg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Xs(),G0(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&on(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const u=on(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||tl||this.g&&(this.h.h||this.g.fa()||xf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Xs(3):Xs(2)),Ra(this);var n=this.g.aa();this.Y=n;t:if(fm(this)){var r=xf(this.g);t="";var s=r.length,i=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),Ns(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Q0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vo(a)){var l=a;break t}}l=null}if(n=l)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ul(this,n);else{this.i=!1,this.o=3,ht(12),tr(this),Ns(this);break e}}this.P?(dm(this,u,o),tl&&this.i&&u==3&&(rm(this.S,this.T,"tick",this.hb),this.T.start())):(Br(this.j,this.m,o,null),ul(this,o)),u==4&&tr(this),this.i&&!this.I&&(u==4?Mm(this.l,this):(this.i=!1,Oi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),tr(this),Ns(this)}}}catch{}finally{}};function fm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function dm(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=Z0(t,n),s==jo){e==4&&(t.o=4,ht(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(s==cl){t.o=4,ht(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,s,null),ul(t,s);fm(t)&&s!=jo&&s!=cl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pu(e),e.K=!0,ht(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),tr(t),Ns(t))}F.hb=function(){if(this.g){var t=on(this.g),e=this.g.fa();this.C<e.length&&(Ra(this),dm(this,t,e),this.i&&t!=4&&Oi(this))}};function Z0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?jo:(n=Number(e.substring(n,r)),isNaN(n)?cl:(r+=1,r+n>e.length?jo:(e=e.substr(r,n),t.C=r+n,e)))}F.cancel=function(){this.I=!0,tr(this)};function Oi(t){t.V=Date.now()+t.O,pm(t,t.O)}function pm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ai(nt(t.gb,t),e)}function Ra(t){t.B&&(J.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Y0(this.j,this.A),this.K!=2&&(Xs(),ht(17)),tr(this),this.o=2,Ns(this)):pm(this,this.V-t)};function Ns(t){t.l.G==0||t.I||Mm(t.l,t)}function tr(t){Ra(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,bu(t.T),sm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ul(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||hl(n.h,t))){if(!t.J&&hl(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ko(n),Pa(n);else break e;Du(n),ht(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ai(nt(n.cb,n),6e3));if(1>=bm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else nr(n,11)}else if((t.J||n.g==t)&&Ko(n),!Vo(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Au(i,i.h),i.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ie(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Fm(r,r.H?r.ka:null,r.V),o.J){Tm(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ra(a),Oi(a)),r.g=o}else xm(r);0<n.i.length&&xa(n)}else l[0]!="stop"&&l[0]!="close"||nr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?nr(n,7):Nu(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Xs(4)}catch{}}function eS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function gm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tS(t),r=eS(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var mm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function fr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fr){this.h=e!==void 0?e:t.h,Ho(this,t.j),this.s=t.s,this.g=t.g,qo(this,t.m),this.l=t.l,e=t.i;var n=new Zs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Nf(this,n),this.o=t.o}else t&&(n=String(t).match(mm))?(this.h=!!e,Ho(this,n[1]||"",!0),this.s=Is(n[2]||""),this.g=Is(n[3]||"",!0),qo(this,n[4]),this.l=Is(n[5]||"",!0),Nf(this,n[6]||"",!0),this.o=Is(n[7]||"")):(this.h=!!e,this.i=new Zs(null,this.h))}fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ss(e,Df,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ss(e,Df,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ss(n,n.charAt(0)=="/"?iS:sS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ss(n,aS)),t.join("")};function dn(t){return new fr(t)}function Ho(t,e,n){t.j=n?Is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Nf(t,e,n){e instanceof Zs?(t.i=e,cS(t.i,t.h)):(n||(e=Ss(e,oS)),t.i=new Zs(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function Oa(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ss(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Df=/[#\/\?@]/g,sS=/[#\?:]/g,iS=/[#\?]/g,oS=/[#\?@]/g,aS=/#/g;function Zs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Map,t.h=0,t.i&&nS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Zs.prototype;F.add=function(t,e){zn(this),this.i=null,t=cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ym(t,e){zn(t),e=cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vm(t,e){return zn(t),e=cs(t,e),t.g.has(e)}F.forEach=function(t,e){zn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};F.oa=function(){zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};F.W=function(t){zn(this);let e=[];if(typeof t=="string")vm(this,t)&&(e=e.concat(this.g.get(cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return zn(this),this.i=null,t=cs(this,t),vm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function _m(t,e,n){ym(t,e),0<n.length&&(t.i=null,t.g.set(cs(t,e),pu(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cS(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ym(this,r),_m(this,s,n))},t)),t.j=e}var lS=class{constructor(e,n){this.h=e,this.g=n}};function wm(t){this.l=t||uS,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ga&&J.g.Ga()&&J.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uS=10;function Em(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bm(t){return t.h?1:t.g?t.g.size:0}function hl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Au(t,e){t.g?t.g.add(e):t.h=e}function Tm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wm.prototype.cancel=function(){if(this.i=Im(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Im(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return pu(t.i)}function ku(){}ku.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};ku.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function hS(){this.g=new ku}function fS(t,e,n){const r=n||"";try{gm(t,function(s,i){let o=s;Si(s)&&(o=Eu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function dS(t,e){const n=new Sa;if(J.Image){const r=new Image;r.onload=Wi(Qi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wi(Qi,n,r,"TestLoadImage: error",!1,e),r.onabort=Wi(Qi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wi(Qi,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Qi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ni(t){this.l=t.ac||null,this.j=t.jb||!1}Ye(Ni,Iu);Ni.prototype.g=function(){return new Na(this.l,this.j)};Ni.prototype.i=function(t){return function(){return t}}({});function Na(t,e){ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ru,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Na,ze);var Ru=0;F=Na.prototype;F.open=function(t,e){if(this.readyState!=Ru)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ei(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=Ru};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Sm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Di(this):ei(this),this.readyState==3&&Sm(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,Di(this))};F.Ua=function(t){this.g&&(this.response=t,Di(this))};F.ga=function(){this.g&&Di(this)};function Di(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ei(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pS=J.JSON.parse;function Re(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Cm,this.K=this.L=!1}Ye(Re,ze);var Cm="",gS=/^https?$/i,mS=["POST","PUT"];F=Re.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():al.g(),this.C=this.u?Of(this.u):Of(al),this.g.onreadystatechange=nt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Pf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=jg(mS,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rm(this),0<this.B&&((this.K=yS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.qa,this)):this.A=Tu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pf(this,i)}};function yS(t){return Jr&&x0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof du<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Pf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Am(t),Da(t)}function Am(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Da(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Da(this,!0)),Re.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?km(this):this.fb())};F.fb=function(){km(this)};function km(t){if(t.h&&typeof du<"u"&&(!t.C[1]||on(t)!=4||t.aa()!=2)){if(t.v&&on(t)==4)Tu(t.Ha,0,t);else if(Qe(t,"readystatechange"),on(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(mm)[1]||null;if(!s&&J.self&&J.self.location){var i=J.self.location.protocol;s=i.substr(0,i.length-1)}r=!gS.test(s?s.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<on(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Am(t)}}finally{Da(t)}}}}function Da(t,e){if(t.g){Rm(t);const n=t.g,r=t.C[0]?Fo:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Rm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function on(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pS(e)}};function xf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Cm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Om(t){let e="";return mu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ou(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Om(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Nm(t){this.Ca=0,this.i=[],this.j=new Sa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ms("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ms("baseRetryDelayMs",5e3,t),this.bb=ms("retryDelaySeedMs",1e4,t),this.$a=ms("forwardChannelMaxRetries",2,t),this.ta=ms("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new wm(t&&t.concurrentRequestLimit),this.Fa=new hS,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=Nm.prototype;F.ma=8;F.G=1;function Nu(t){if(Dm(t),t.G==3){var e=t.U++,n=dn(t.F);Ie(n,"SID",t.I),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Pi(t,n),e=new Ri(t,t.j,e,void 0),e.K=2,e.v=Oa(dn(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Oi(e)}$m(t)}function Pa(t){t.g&&(Pu(t),t.g.cancel(),t.g=null)}function Dm(t){Pa(t),t.u&&(J.clearTimeout(t.u),t.u=null),Ko(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function xa(t){Em(t.h)||t.m||(t.m=!0,em(t.Ja,t),t.C=0)}function vS(t,e){return bm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ai(nt(t.Ja,t,e),Um(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ri(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=zg(i),Wg(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Pm(this,s,e),n=dn(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),Pi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Om(i)))+"&"+e:this.o&&Ou(n,this.o,i)),Au(this.h,s),this.Ya&&Ie(n,"TYPE","init"),this.O?(Ie(n,"$req",e),Ie(n,"SID","null"),s.Z=!0,ll(s,n,null)):ll(s,n,e),this.G=2}}else this.G==3&&(t?Lf(this,t):this.i.length==0||Em(this.h)||Lf(this))};function Lf(t,e){var n;e?n=e.m:n=t.U++;const r=dn(t.F);Ie(r,"SID",t.I),Ie(r,"RID",n),Ie(r,"AID",t.T),Pi(t,r),t.o&&t.s&&Ou(r,t.o,t.s),n=new Ri(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Pm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Au(t.h,n),ll(n,r,e)}function Pi(t,e){t.ia&&mu(t.ia,function(n,r){Ie(e,r,n)}),t.l&&gm({},function(n,r){Ie(e,r,n)})}function Pm(t,e,n){n=Math.min(t.i.length,n);var r=t.l?nt(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{fS(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function xm(t){t.g||t.u||(t.Z=1,em(t.Ia,t),t.A=0)}function Du(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ai(nt(t.Ia,t),Um(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,Lm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ai(nt(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ht(10),Pa(this),Lm(this))};function Pu(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Lm(t){t.g=new Ri(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=dn(t.sa);Ie(e,"RID","rpc"),Ie(e,"SID",t.I),Ie(e,"CI",t.L?"0":"1"),Ie(e,"AID",t.T),Ie(e,"TYPE","xmlhttp"),Pi(t,e),t.o&&t.s&&Ou(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Oa(dn(e)),n.s=null,n.P=!0,hm(n,t)}F.cb=function(){this.v!=null&&(this.v=null,Pa(this),Du(this),ht(19))};function Ko(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Mm(t,e){var n=null;if(t.g==e){Ko(t),Pu(t),t.g=null;var r=2}else if(hl(t.h,e))n=e.D,Tm(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Ca(),Qe(r,new am(r,n)),xa(t)}else xm(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&vS(t,e)||r==2&&Du(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:nr(t,5);break;case 4:nr(t,10);break;case 3:nr(t,6);break;default:nr(t,2)}}}function Um(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function nr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=nt(t.kb,t);n||(n=new fr("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Ho(n,"https"),Oa(n)),dS(n.toString(),r)}else ht(2);t.G=0,t.l&&t.l.va(e),$m(t),Dm(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function $m(t){if(t.G=0,t.la=[],t.l){const e=Im(t.h);(e.length!=0||t.i.length!=0)&&(If(t.la,e),If(t.la,t.i),t.h.i.length=0,pu(t.i),t.i.length=0),t.l.ua()}}function Fm(t,e,n){var r=n instanceof fr?dn(n):new fr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),qo(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new fr(null,void 0);r&&Ho(i,r),e&&(i.g=e),s&&qo(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ma),Pi(t,r),r}function Vm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Re(new Ni({jb:!0})):new Re(t.ra),e.Ka(t.H),e}function Bm(){}F=Bm.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function zo(){if(Jr&&!(10<=Number(L0)))throw Error("Environmental error: no available transport.")}zo.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){ze.call(this),this.g=new Nm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ls(this)}Ye(vt,ze);vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Fm(t,null,t.V),xa(t)};vt.prototype.close=function(){Nu(this.g)};vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eu(t),t=n);e.i.push(new lS(e.ab++,t)),e.G==3&&xa(e)};vt.prototype.M=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,vt.X.M.call(this)};function jm(t){Su.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(jm,Su);function Hm(){Cu.call(this),this.status=1}Ye(Hm,Cu);function ls(t){this.g=t}Ye(ls,Bm);ls.prototype.xa=function(){Qe(this.g,"a")};ls.prototype.wa=function(t){Qe(this.g,new jm(t))};ls.prototype.va=function(t){Qe(this.g,new Hm)};ls.prototype.ua=function(){Qe(this.g,"b")};zo.prototype.createWebChannel=zo.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;Aa.NO_ERROR=0;Aa.TIMEOUT=8;Aa.HTTP_ERROR=6;cm.COMPLETE="complete";lm.EventType=ki;ki.OPEN="a";ki.CLOSE="b";ki.ERROR="c";ki.MESSAGE="d";ze.prototype.listen=ze.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.Oa;Re.prototype.getLastErrorCode=Re.prototype.Ea;Re.prototype.getStatus=Re.prototype.aa;Re.prototype.getResponseJson=Re.prototype.Sa;Re.prototype.getResponseText=Re.prototype.fa;Re.prototype.send=Re.prototype.da;Re.prototype.setWithCredentials=Re.prototype.Ka;var _S=function(){return new zo},wS=function(){return Ca()},mc=Aa,ES=cm,bS=Sr,Mf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},TS=Ni,Yi=lm,IS=Re;const Uf="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let us="9.19.0";/**
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
 */const wr=new nu("@firebase/firestore");function $f(){return wr.logLevel}function V(t,...e){if(wr.logLevel<=pe.DEBUG){const n=e.map(xu);wr.debug(`Firestore (${us}): ${t}`,...n)}}function pn(t,...e){if(wr.logLevel<=pe.ERROR){const n=e.map(xu);wr.error(`Firestore (${us}): ${t}`,...n)}}function Wo(t,...e){if(wr.logLevel<=pe.WARN){const n=e.map(xu);wr.warn(`Firestore (${us}): ${t}`,...n)}}function xu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function Te(t,e){t||Y()}function ne(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class CS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AS{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new qm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Xe(e)}}class kS{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class RS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new kS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.T=n.token,new OS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Km{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Xr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ti{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ti?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ti{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const PS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends ti{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return PS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Se.fromString(e))}static fromName(e){return new H(Se.fromString(e).popFirst(5))}static empty(){return new H(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Se(e.slice()))}}function xS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Vn(s,H.empty(),e)}function LS(t){return new Vn(t.readTime,t.key,-1)}class Vn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vn(Z.min(),H.empty(),-1)}static max(){return new Vn(Z.max(),H.empty(),-1)}}function MS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $S{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==US)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Li(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Lu.ct=-1;function La(t){return t==null}function Go(t){return t===0&&1/t==-1/0}function FS(t){return typeof t=="number"&&Number.isInteger(t)&&!Go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ff(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,r,s){return this}insert(t,e,n){return new We(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vf(this.data.getIterator())}getIteratorFrom(e){return new Vf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Vf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new xt([])}unionWith(e){let n=new He(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class VS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VS("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const BS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=BS.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gm(t){const e=t.mapValue.fields.__previous_value__;return Wm(e)?Gm(e):e}function ni(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class jS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ri{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wm(t)?4:HS(t)?9007199254740991:10:Y()}function Yt(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ni(t).isEqual(ni(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Bn(r.timestampValue),o=Bn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Zr(r.bytesValue).isEqual(Zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ue(r.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ue(r.integerValue)===Ue(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ue(r.doubleValue),o=Ue(s.doubleValue);return i===o?Go(i)===Go(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Xr(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ff(i)!==Ff(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Yt(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function si(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ue(s.integerValue||s.doubleValue),a=Ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bf(t.timestampValue,e.timestampValue);case 4:return Bf(ni(t),ni(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Zr(s),a=Zr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=me(Ue(s.latitude),Ue(i.latitude));return o!==0?o:me(Ue(s.longitude),Ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=es(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Xi.mapValue&&i===Xi.mapValue)return 0;if(s===Xi.mapValue)return 1;if(i===Xi.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const f=es(o[a[u]],c[l[u]]);if(f!==0)return f}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Bf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Bn(t),r=Bn(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function ts(t){return fl(t)}function fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Bn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=fl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${fl(r.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function dl(t){return!!t&&"integerValue"in t}function Mu(t){return!!t&&"arrayValue"in t}function jf(t){return!!t&&"nullValue"in t}function Hf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wo(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ds(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Ds(this.value))}}function Qm(t){const e=[];return hs(t.fields,(n,r)=>{const s=new tt([n]);if(wo(r)){const i=Qm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
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
 */class Ze{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ze(e,0,Z.min(),Z.min(),Z.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new Ze(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new Ze(e,2,n,Z.min(),Z.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Z.min(),Z.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qo{constructor(e,n){this.position=e,this.inclusive=n}}function qf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=es(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function qS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ym{}class Ve extends Ym{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zS(e,n,r):n==="array-contains"?new QS(e,r):n==="in"?new YS(e,r):n==="not-in"?new JS(e,r):n==="array-contains-any"?new XS(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WS(e,r):new GS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends Ym{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Jt(e,n)}matches(e){return Jm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Jm(t){return t.op==="and"}function Xm(t){return KS(t)&&Jm(t)}function KS(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function pl(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(Xm(t))return t.filters.map(e=>pl(e)).join(",");{const e=t.filters.map(n=>pl(n)).join(",");return`${t.op}(${e})`}}function Zm(t,e){return t instanceof Ve?function(n,r){return r instanceof Ve&&n.op===r.op&&n.field.isEqual(r.field)&&Yt(n.value,r.value)}(t,e):t instanceof Jt?function(n,r){return r instanceof Jt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&Zm(i,r.filters[o]),!0):!1}(t,e):void Y()}function ey(t){return t instanceof Ve?function(e){return`${e.field.canonicalString()} ${e.op} ${ts(e.value)}`}(t):t instanceof Jt?function(e){return e.op.toString()+" {"+e.getFilters().map(ey).join(" ,")+"}"}(t):"Filter"}class zS extends Ve{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class WS extends Ve{constructor(e,n){super(e,"in",n),this.keys=ty("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GS extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=ty("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ty(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class QS extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mu(n)&&si(n.arrayValue,this.value)}}class YS extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&si(this.value.arrayValue,n)}}class JS extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!si(this.value.arrayValue,n)}}class XS extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>si(this.value.arrayValue,r))}}/**
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
 */class ZS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function zf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ZS(t,e,n,r,s,i,o)}function Uu(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),La(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.ft=n}return e.ft}function $u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kf(t.startAt,e.startAt)&&Kf(t.endAt,e.endAt)}function gl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ma{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function eC(t,e,n,r,s,i,o,a){return new Ma(t,e,n,r,s,i,o,a)}function ny(t){return new Ma(t)}function Wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nC(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rC(t){return t.collectionGroup!==null}function Wr(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=nC(e),r=tC(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ps(n)),e.dt.push(new Ps(tt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ps(tt.keyField(),i))}}}return e.dt}function gn(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=zf(e.path,e.collectionGroup,Wr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Wr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ps(i.field,o))}const r=e.endAt?new Qo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Qo(e.startAt.position,e.startAt.inclusive):null;e.wt=zf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function ml(t,e,n){return new Ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ua(t,e){return $u(gn(t),gn(e))&&t.limitType===e.limitType}function ry(t){return`${Uu(gn(t))}|lt:${t.limitType}`}function yl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>ey(r)).join(", ")}]`),La(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),`Target(${n})`}(gn(t))}; limitType=${t.limitType})`}function $a(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):H.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Wr(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=qf(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Wr(n),r)||n.endAt&&!function(s,i,o){const a=qf(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Wr(n),r))}(t,e)}function sC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sy(t){return(e,n)=>{let r=!1;for(const s of Wr(t)){const i=iC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?es(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zm(this.inner)}size(){return this.innerSize}}/**
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
 */const oC=new qe(H.comparator);function mn(){return oC}const iy=new qe(H.comparator);function Cs(...t){let e=iy;for(const n of t)e=e.insert(n.key,n);return e}function oy(t){let e=iy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rr(){return xs()}function ay(){return xs()}function xs(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const aC=new qe(H.comparator),cC=new He(H.comparator);function ae(...t){let e=cC;for(const n of t)e=e.add(n);return e}const lC=new He(me);function cy(){return lC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function uy(t){return{integerValue:""+t}}function uC(t,e){return FS(e)?uy(e):ly(t,e)}/**
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
 */class Fa{constructor(){this._=void 0}}function hC(t,e,n){return t instanceof Yo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof ii?fy(t,e):t instanceof oi?dy(t,e):function(r,s){const i=hy(r,s),o=Gf(i)+Gf(r._t);return dl(i)&&dl(r._t)?uy(o):ly(r.serializer,o)}(t,e)}function fC(t,e,n){return t instanceof ii?fy(t,e):t instanceof oi?dy(t,e):n}function hy(t,e){return t instanceof Jo?dl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Yo extends Fa{}class ii extends Fa{constructor(e){super(),this.elements=e}}function fy(t,e){const n=py(e);for(const r of t.elements)n.some(s=>Yt(s,r))||n.push(r);return{arrayValue:{values:n}}}class oi extends Fa{constructor(e){super(),this.elements=e}}function dy(t,e){let n=py(e);for(const r of t.elements)n=n.filter(s=>!Yt(s,r));return{arrayValue:{values:n}}}class Jo extends Fa{constructor(e,n){super(),this.serializer=e,this._t=n}}function Gf(t){return Ue(t.integerValue||t.doubleValue)}function py(t){return Mu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ii&&r instanceof ii||n instanceof oi&&r instanceof oi?Xr(n.elements,r.elements,Yt):n instanceof Jo&&r instanceof Jo?Yt(n._t,r._t):n instanceof Yo&&r instanceof Yo}(t.transform,e.transform)}class pC{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Va{}function gy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yy(t.key,ln.none()):new Mi(t.key,t.data,ln.none());{const n=t.data,r=It.empty();let s=new He(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cr(t.key,r,new xt(s.toArray()),ln.none())}}function gC(t,e,n){t instanceof Mi?function(r,s,i){const o=r.value.clone(),a=Yf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(r,s,i){if(!Eo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Yf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(my(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ls(t,e,n,r){return t instanceof Mi?function(s,i,o,a){if(!Eo(s.precondition,i))return o;const c=s.value.clone(),l=Jf(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,i,o,a){if(!Eo(s.precondition,i))return o;const c=Jf(s.fieldTransforms,a,i),l=i.data;return l.setAll(my(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Eo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function mC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hy(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Qf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Xr(n,r,(s,i)=>dC(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mi extends Va{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends Va{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function my(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yf(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,fC(o,a,n[s]))}return r}function Jf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,hC(i,o,e))}return r}class yy extends Va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yC extends Va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ls(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ls(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ay();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=gy(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,(n,r)=>Qf(n,r))&&Xr(this.baseMutations,e.baseMutations,(n,r)=>Qf(n,r))}}class Fu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=aC;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fu(e,n,r,s)}}/**
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
 */class _C{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wC{constructor(e){this.count=e}}/**
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
 */var Me,ue;function EC(t){switch(t){default:return Y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function vy(t){if(t===void 0)return pn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Me.OK:return I.OK;case Me.CANCELLED:return I.CANCELLED;case Me.UNKNOWN:return I.UNKNOWN;case Me.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Me.INTERNAL:return I.INTERNAL;case Me.UNAVAILABLE:return I.UNAVAILABLE;case Me.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Me.NOT_FOUND:return I.NOT_FOUND;case Me.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Me.ABORTED:return I.ABORTED;case Me.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Me.DATA_LOSS:return I.DATA_LOSS;default:return Y()}}(ue=Me||(Me={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Vu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zi}static getOrCreateInstance(){return Zi===null&&(Zi=new Vu),Zi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Zi=null;/**
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
 */class Ba{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ba(Z.min(),s,cy(),mn(),ae())}}class Ui{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ui(r,n,ae(),ae(),ae())}}/**
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
 */class bo{constructor(e,n,r,s){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=s}}class _y{constructor(e,n){this.targetId=e,this.Et=n}}class wy{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xf{constructor(){this.At=0,this.Rt=ed(),this.vt=it.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ae(),n=ae(),r=ae();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new Ui(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=ed()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class bC{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=mn(),this.qt=Zf(),this.Ut=new He(me)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const r=e.targetId,s=e.Et.count,i=this.Yt(r);if(i){const o=i.target;if(gl(o))if(s===0){const a=new H(o.path);this.Qt(r,a,Ze.newNoDocument(a,Z.min()))}else Te(s===1);else{const a=this.Zt(r);a!==s&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=Vu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&gl(a.target)){const c=new H(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ze.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let r=ae();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new Ba(e,n,this.Ut,this.Lt,r);return this.Lt=mn(),this.qt=Zf(),this.Ut=new He(me),s}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Xf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new He(me),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Xf),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Zf(){return new qe(H.comparator)}function ed(){return new qe(H.comparator)}/**
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
 */const TC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),IC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),SC=(()=>({and:"AND",or:"OR"}))();class CC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ey(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AC(t,e){return Xo(t,e.toTimestamp())}function Wt(t){return Te(!!t),Z.fromTimestamp(function(e){const n=Bn(e);return new je(n.seconds,n.nanos)}(t))}function Bu(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function by(t){const e=Se.fromString(t);return Te(Cy(e)),e}function vl(t,e){return Bu(t.databaseId,e.path)}function yc(t,e){const n=by(e);if(n.get(1)!==t.databaseId.projectId)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Ty(n))}function _l(t,e){return Bu(t.databaseId,e)}function kC(t){const e=by(t);return e.length===4?Se.emptyPath():Ty(e)}function wl(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ty(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function td(t,e,n){return{name:vl(t,e),fields:n.value.mapValue.fields}}function RC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Te(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:vy(c.code);return new q(l,c.message||"")}(o);n=new wy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yc(t,r.document.name),i=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):Z.min(),a=new It({mapValue:{fields:r.document.fields}}),c=Ze.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new bo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yc(t,r.document),i=r.readTime?Wt(r.readTime):Z.min(),o=Ze.newNoDocument(s,i),a=r.removedTargetIds||[];n=new bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yc(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new wC(s),o=r.targetId;n=new _y(o,i)}}return n}function OC(t,e){let n;if(e instanceof Mi)n={update:td(t,e.key,e.value)};else if(e instanceof yy)n={delete:vl(t,e.key)};else if(e instanceof Cr)n={update:td(t,e.key,e.data),updateMask:FC(e.fieldMask)};else{if(!(e instanceof yC))return Y();n={verify:vl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Yo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ii)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof oi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Jo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:AC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function NC(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Wt(r.updateTime):Wt(s);return i.isEqual(Z.min())&&(i=Wt(s)),new pC(i,r.transformResults||[])}(n,e))):[]}function DC(t,e){return{documents:[_l(t,e.path)]}}function PC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_l(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_l(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Sy(Jt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Mr(u.field),direction:MC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||La(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function xC(t){let e=kC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Iy(u);return h instanceof Jt&&Xm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ps(Ur(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,La(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Qo(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Qo(f,h)}(n.endAt)),eC(e,s,o,i,a,"F",c,l)}function LC(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Iy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ur(e.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ur(e.unaryFilter.field);return Ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ur(e.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ur(e.unaryFilter.field);return Ve.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Ve.create(Ur(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Jt.create(e.compositeFilter.filters.map(n=>Iy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function MC(t){return TC[t]}function UC(t){return IC[t]}function $C(t){return SC[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function Ur(t){return tt.fromServerFormat(t.fieldPath)}function Sy(t){return t instanceof Ve?function(e){if(e.op==="=="){if(Hf(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NAN"}};if(jf(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Hf(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NAN"}};if(jf(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(e.field),op:UC(e.op),value:e.value}}}(t):t instanceof Jt?function(e){const n=e.getFilters().map(r=>Sy(r));return n.length===1?n[0]:{compositeFilter:{op:$C(e.op),filters:n}}}(t):Y()}function FC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class dr{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=it.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class VC{constructor(e){this.se=e}}function BC(t){const e=xC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ml(e,e.limit,"L"):e}/**
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
 */class jC{constructor(){this.He=new HC}addToCollectionParentIndex(e,n){return this.He.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Vn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class HC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Se.comparator)).toArray()}}/**
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
 */class ns{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ns(0)}static bn(){return new ns(-1)}}/**
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
 */class qC{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ls(r.mutation,s,xt.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const s=rr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Cs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=mn();const o=xs(),a=xs();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Cr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ls(u.mutation,l,u.mutation.getFieldMask(),je.now())):o.set(l.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new KC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=xs();let s=new qe((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||xt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ae()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ay();u.forEach(f=>{if(!i.has(f)){const p=gy(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(rr());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:oy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Cs();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Ma(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ze.newInvalidDocument(l)))});let o=Cs();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ls(l.mutation,c,xt.empty(),je.now()),$a(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Wt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:BC(r.bundledQuery),readTime:Wt(r.readTime)}}(n)),S.resolve()}}/**
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
 */class GC{constructor(){this.overlays=new qe(H.comparator),this.ts=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rr();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.re(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ts.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=rr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=rr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=rr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}re(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(r.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _C(n,r));let i=this.ts.get(n);i===void 0&&(i=ae(),this.ts.set(n,i)),this.ts.set(n,i.add(r.key))}}/**
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
 */class ju{constructor(){this.es=new He(Ke.ns),this.ss=new He(Ke.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new Ke(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new H(new Se([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.ss.forEachInRange([r,s],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new H(new Se([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=ae();return this.ss.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return H.comparator(e.key,n.key)||me(e.ds,n.ds)}static rs(e,n){return me(e.ds,n.ds)||H.comparator(e.key,n.key)}}/**
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
 */class QC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new He(Ke.ns)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ys(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([r,s],o=>{const a=this.gs(o.ds);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(me);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{r=r.add(a.ds)})}),S.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new H(i),0);let a=new He(me);return this._s.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ds)),!0)},o),S.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const s=this.gs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return S.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new Ke(n,0),s=this._s.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class YC{constructor(e){this.Ts=e,this.docs=new qe(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||MS(LS(u),r)<=0||(s.has(u.key)||$a(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}Es(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new JC(this)}getSize(e){return S.resolve(this.size)}}class JC extends qC{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class XC{constructor(e){this.persistence=e,this.As=new fs(n=>Uu(n),$u),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new ju,this.targetCount=0,this.bs=ns.vn()}forEachTarget(e,n){return this.As.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),S.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Sn(n),S.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.vs.containsKey(n))}}/**
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
 */class ZC{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Lu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new XC(this),this.indexManager=new jC,this.remoteDocumentCache=function(r){return new YC(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new VC(n),this.xs=new WC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new QC(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new eA(this.Vs.next());return this.referenceDelegate.Ns(),r(s).next(i=>this.referenceDelegate.ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Os(e,n){return S.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class eA extends $S{constructor(e){super(),this.currentSequenceNumber=e}}class Hu{constructor(e){this.persistence=e,this.$s=new ju,this.Ms=null}static Fs(e){return new Hu(e)}get Bs(){if(this.Ms)return this.Ms;throw Y()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),S.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Bs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Bs,r=>{const s=H.fromPath(r);return this.Ls(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return S.or([()=>S.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class qu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=s}static Di(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qu(e,n.fromCache,r,s)}}/**
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
 */class tA{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ni(e,n).next(i=>i||this.ki(e,n,s,r)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Wf(n))return S.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ml(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ae(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,ml(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,r,s){return Wf(n)||s.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,r,s)?this.Oi(e,n):($f()<=pe.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),yl(n)),this.Fi(e,o,n,xS(s,-1)))})}$i(e,n){let r=new He(sy(e));return n.forEach((s,i)=>{$a(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(e,n){return $f()<=pe.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",yl(n)),this.xi.getDocumentsMatchingQuery(e,n,Vn.min())}Fi(e,n,r,s){return this.xi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new qe(me),this.qi=new fs(i=>Uu(i),$u),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zC(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function rA(t,e,n,r){return new nA(t,e,n,r)}async function Ay(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ae();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function sA(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=S.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(y=>{const v=c.docVersions.get(p);Te(v!==null),y.version.compareTo(v)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ky(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function iA(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(it.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,p,u)&&a.push(n.Ds.updateTargetData(i,p))});let c=mn(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(oA(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!r.isEqual(Z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=s,i))}function oA(t,e,n){let r=ae(),s=ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:s}})}function aA(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cA(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ds.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.Ds.allocateTargetId(r).next(o=>(s=new dr(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Li.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function El(t,e,n){const r=ne(t),s=r.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Li(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(s.target)}function nd(t,e,n){const r=ne(t);let s=Z.min(),i=ae();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),h=u.qi.get(l);return h!==void 0?S.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(r,o,gn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:ae())).next(a=>(lA(r,sC(e),a),{documents:a,Wi:i})))}function lA(t,e,n){let r=t.Ui.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ui.set(e,r)}class rd{constructor(){this.activeTargetIds=cy()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uA{constructor(){this.Br=new rd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new rd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hA{qr(e){}shutdown(){}}/**
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
 */class sd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eo=null;function vc(){return eo===null?eo=268435456+Math.round(2147483648*Math.random()):eo++,"0x"+eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dA{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Je="WebChannelConnection";class pA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,s,i){const o=vc(),a=this.ao(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,s,i),this.lo(e,a,c,r).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Wo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}fo(e,n,r,s,i,o){return this.co(e,n,r,s,i)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+us,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ao(e,n){const r=fA[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,s){const i=vc();return new Promise((o,a)=>{const c=new IS;c.setWithCredentials(!0),c.listenOnce(ES.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mc.NO_ERROR:const u=c.getResponseJson();V(Je,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case mc.TIMEOUT:V(Je,`RPC '${e}' ${i} timed out`),a(new q(I.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const h=c.getStatus();if(V(Je,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(E)>=0?E:I.UNKNOWN}(p.status);a(new q(y,p.message))}else a(new q(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(I.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{V(Je,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);V(Je,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(e,n,r){const s=vc(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_S(),a=wS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new TS({})),this.ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");V(Je,`Creating RPC '${e}' stream ${s}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const p=new dA({Wr:v=>{f?V(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(h||(V(Je,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),V(Je,`RPC '${e}' stream ${s} sending:`,v),u.send(v))},Hr:()=>u.close()}),y=(v,E,R)=>{v.listen(E,O=>{try{R(O)}catch(L){setTimeout(()=>{throw L},0)}})};return y(u,Yi.EventType.OPEN,()=>{f||V(Je,`RPC '${e}' stream ${s} transport opened.`)}),y(u,Yi.EventType.CLOSE,()=>{f||(f=!0,V(Je,`RPC '${e}' stream ${s} transport closed`),p.so())}),y(u,Yi.EventType.ERROR,v=>{f||(f=!0,Wo(Je,`RPC '${e}' stream ${s} transport errored:`,v),p.so(new q(I.UNAVAILABLE,"The operation could not be completed")))}),y(u,Yi.EventType.MESSAGE,v=>{var E;if(!f){const R=v.data[0];Te(!!R);const O=R,L=O.error||((E=O[0])===null||E===void 0?void 0:E.error);if(L){V(Je,`RPC '${e}' stream ${s} received error:`,L);const P=L.status;let K=function(Ce){const W=Me[Ce];if(W!==void 0)return vy(W)}(P),de=L.message;K===void 0&&(K=I.INTERNAL,de="Unknown error status: "+P+" with message "+L.message),f=!0,p.so(new q(K,de)),u.close()}else V(Je,`RPC '${e}' stream ${s} received:`,R),p.io(R)}}),y(a,bS.STAT_EVENT,v=>{v.stat===Mf.PROXY?V(Je,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Mf.NOPROXY&&V(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function _c(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){return new CC(t,!0)}/**
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
 */class Ry{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Oy{constructor(e,n,r,s,i,o,a,c){this.Ws=e,this.bo=r,this.Po=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Ry(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===n&&this.Ko(r,s)},r=>{e(()=>{const s=new q(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(s)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{r(()=>this.Go(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gA extends Oy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=RC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Wt(i.readTime):Z.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=wl(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;return o=gl(a)?{documents:DC(s,a)}:{query:PC(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ey(s,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Xo(s,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=LC(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=wl(this.serializer),n.removeTarget=e,this.Fo(n)}}class mA extends Oy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=NC(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.Zo(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=wl(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OC(this.serializer,r))};this.Fo(n)}}/**
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
 */class yA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(I.UNKNOWN,s.toString())})}fo(e,n,r,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(I.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class vA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(pn(n),this.ru=!1):V("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class _A{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{r.enqueueAndForget(async()=>{Ar(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.du.add(4),await $i(c),c.mu.set("Unknown"),c.du.delete(4),await Ha(c)}(this))})}),this.mu=new vA(r,s)}}async function Ha(t){if(Ar(t))for(const e of t.wu)await e(!0)}async function $i(t){for(const e of t.wu)await e(!1)}function Ny(t,e){const n=ne(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Wu(n)?zu(n):ds(n).No()&&Ku(n,e))}function Dy(t,e){const n=ne(t),r=ds(n);n.fu.delete(e),r.No()&&Py(n,e),n.fu.size===0&&(r.No()?r.$o():Ar(n)&&n.mu.set("Unknown"))}function Ku(t,e){t.gu.Ot(e.targetId),ds(t).jo(e)}function Py(t,e){t.gu.Ot(e),ds(t).Wo(e)}function zu(t){t.gu=new bC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ds(t).start(),t.mu.ou()}function Wu(t){return Ar(t)&&!ds(t).xo()&&t.fu.size>0}function Ar(t){return ne(t).du.size===0}function xy(t){t.gu=void 0}async function wA(t){t.fu.forEach((e,n)=>{Ku(t,e)})}async function EA(t,e){xy(t),Wu(t)?(t.mu.au(e),zu(t)):t.mu.set("Unknown")}async function bA(t,e,n){if(t.mu.set("Online"),e instanceof wy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zo(t,r)}else if(e instanceof bo?t.gu.Kt(e):e instanceof _y?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const r=await ky(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.fu.get(c);l&&s.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.fu.get(a);if(!c)return;s.fu.set(a,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),Py(s,a);const l=new dr(c.target,a,1,c.sequenceNumber);Ku(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Zo(t,r)}}async function Zo(t,e,n){if(!Li(e))throw e;t.du.add(1),await $i(t),t.mu.set("Offline"),n||(n=()=>ky(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ha(t)})}function Ly(t,e){return e().catch(n=>Zo(t,n,e))}async function qa(t){const e=ne(t),n=jn(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;TA(e);)try{const s=await aA(e.localStore,r);if(s===null){e.lu.length===0&&n.$o();break}r=s.batchId,IA(e,s)}catch(s){await Zo(e,s)}My(e)&&Uy(e)}function TA(t){return Ar(t)&&t.lu.length<10}function IA(t,e){t.lu.push(e);const n=jn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function My(t){return Ar(t)&&!jn(t).xo()&&t.lu.length>0}function Uy(t){jn(t).start()}async function SA(t){jn(t).tu()}async function CA(t){const e=jn(t);for(const n of t.lu)e.Yo(n.mutations)}async function AA(t,e,n){const r=t.lu.shift(),s=Fu.from(r,e,n);await Ly(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qa(t)}async function kA(t,e){e&&jn(t).Jo&&await async function(n,r){if(s=r.code,EC(s)&&s!==I.ABORTED){const i=n.lu.shift();jn(n).Oo(),await Ly(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await qa(n)}var s}(t,e),My(t)&&Uy(t)}async function id(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.du.add(3),await $i(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ha(n)}async function RA(t,e){const n=ne(t);e?(n.du.delete(2),await Ha(n)):e||(n.du.add(2),await $i(n),n.mu.set("Unknown"))}function ds(t){return t.yu||(t.yu=function(e,n,r){const s=ne(e);return s.nu(),new gA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Jr:wA.bind(null,t),Zr:EA.bind(null,t),zo:bA.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Wu(t)?zu(t):t.mu.set("Unknown")):(await t.yu.stop(),xy(t))})),t.yu}function jn(t){return t.pu||(t.pu=function(e,n,r){const s=ne(e);return s.nu(),new mA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Jr:SA.bind(null,t),Zr:kA.bind(null,t),Xo:CA.bind(null,t),Zo:AA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await qa(t)):(await t.pu.stop(),t.lu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Gu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Gu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(t,e){if(pn("AsyncQueue",`${e}: ${t}`),Li(t))return new q(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class od{constructor(){this.Iu=new qe(H.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Y():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new rs(e,n,Gr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class OA{constructor(){this.Eu=void 0,this.listeners=[]}}class NA{constructor(){this.queries=new fs(e=>ry(e),Ua),this.onlineState="Unknown",this.Au=new Set}}async function DA(t,e){const n=ne(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new OA),s)try{i.Eu=await n.onListen(r)}catch(o){const a=Qu(o,`Initialization of query '${yl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Yu(n)}async function PA(t,e){const n=ne(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xA(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(s)&&(r=!0);o.Eu=s}}r&&Yu(n)}function LA(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Yu(t){t.Au.forEach(e=>{e.next()})}class MA{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class $y{constructor(e){this.key=e}}class Fy{constructor(e){this.key=e}}class UA{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ae(),this.mutatedKeys=ae(),this.Ku=sy(e),this.Gu=new Gr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new od,s=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=$a(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),E=!0):this.Wu(f,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),E=!0):f&&!p&&(r.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Gu:o,ju:r,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,f){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return p(h)-p(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new rs(this.query,e.Gu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new od,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ae(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new Fy(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new $y(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ae();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return rs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class $A{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FA{constructor(e){this.key=e,this.ec=!1}}class VA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new fs(a=>ry(a),Ua),this.ic=new Map,this.rc=new Set,this.oc=new qe(H.comparator),this.uc=new Map,this.cc=new ju,this.ac={},this.hc=new Map,this.lc=ns.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function BA(t,e){const n=JA(t);let r,s;const i=n.sc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.tc();else{const o=await cA(n.localStore,gn(e));n.isPrimaryClient&&Ny(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await jA(n,e,r,a==="current",o.resumeToken)}return s}async function jA(t,e,n,r,s){t.dc=(h,f,p)=>async function(y,v,E,R){let O=v.view.zu(E);O.Mi&&(O=await nd(y.localStore,v.query,!1).then(({documents:K})=>v.view.zu(K,O)));const L=R&&R.targetChanges.get(v.targetId),P=v.view.applyChanges(O,y.isPrimaryClient,L);return cd(y,v.targetId,P.Yu),P.snapshot}(t,h,f,p);const i=await nd(t.localStore,e,!0),o=new UA(e,i.Wi),a=o.zu(i.documents),c=Ui.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);cd(t,n,l.Yu);const u=new $A(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function HA(t,e){const n=ne(t),r=n.sc.get(e),s=n.ic.get(r.targetId);if(s.length>1)return n.ic.set(r.targetId,s.filter(i=>!Ua(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await El(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Dy(n.remoteStore,r.targetId),bl(n,r.targetId)}).catch(xi)):(bl(n,r.targetId),await El(n.localStore,r.targetId,!0))}async function qA(t,e,n){const r=XA(t);try{const s=await function(i,o){const a=ne(i),c=je.now(),l=o.reduce((f,p)=>f.add(p.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=mn(),y=ae();return a.Ki.getEntries(f,l).next(v=>{p=v,p.forEach((E,R)=>{R.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{u=v;const E=[];for(const R of o){const O=mC(R,u.get(R.key).overlayedDocument);O!=null&&E.push(new Cr(R.key,O,Qm(O.value.mapValue),ln.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:oy(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new qe(me)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(r,s.batchId,n),await Fi(r,s.changes),await qa(r.remoteStore)}catch(s){const i=Qu(s,"Failed to persist write");n.reject(i)}}async function Vy(t,e){const n=ne(t);try{const r=await iA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.uc.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?Te(o.ec):s.removedDocuments.size>0&&(Te(o.ec),o.ec=!1))}),await Fi(n,r,e)}catch(r){await xi(r)}}function ad(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ne(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Yu(a)}(r.eventManager,e),s.length&&r.nc.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KA(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.uc.get(e),i=s&&s.key;if(i){let o=new qe(H.comparator);o=o.insert(i,Ze.newNoDocument(i,Z.min()));const a=ae().add(i),c=new Ba(Z.min(),new Map,new He(me),o,a);await Vy(r,c),r.oc=r.oc.remove(i),r.uc.delete(e),Ju(r)}else await El(r.localStore,e,!1).then(()=>bl(r,e,n)).catch(xi)}async function zA(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await sA(n.localStore,e);jy(n,r,null),By(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fi(n,s)}catch(s){await xi(s)}}async function WA(t,e,n){const r=ne(t);try{const s=await function(i,o){const a=ne(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);jy(r,e,n),By(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fi(r,s)}catch(s){await xi(s)}}function By(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function jy(t,e,n){const r=ne(t);let s=r.ac[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ac[r.currentUser.toKey()]=s}}function bl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||Hy(t,r)})}function Hy(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Dy(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ju(t))}function cd(t,e,n){for(const r of n)r instanceof $y?(t.cc.addReference(r.key,e),GA(t,r)):r instanceof Fy?(V("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||Hy(t,r.key)):Y()}function GA(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.rc.add(r),Ju(t))}function Ju(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new H(Se.fromString(e)),r=t.lc.next();t.uc.set(r,new FA(n)),t.oc=t.oc.insert(n,r),Ny(t.remoteStore,new dr(gn(ny(n.path)),r,2,Lu.ct))}}async function Fi(t,e,n){const r=ne(t),s=[],i=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=qu.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.nc.zo(s),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>S.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Li(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),p=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(p);l.Li=l.Li.insert(h,y)}}}(r.localStore,i))}async function QA(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Ay(n.localStore,e);n.currentUser=e,function(s,i){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(I.CANCELLED,i))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fi(n,r.Qi)}}function YA(t,e){const n=ne(t),r=n.uc.get(e);if(r&&r.ec)return ae().add(r.key);{let s=ae();const i=n.ic.get(e);if(!i)return s;for(const o of i){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function JA(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KA.bind(null,e),e.nc.zo=xA.bind(null,e.eventManager),e.nc.wc=LA.bind(null,e.eventManager),e}function XA(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WA.bind(null,e),e}class ld{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ja(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return rA(this.persistence,new tA,e.initialUser,this.serializer)}createPersistence(e){return new ZC(Hu.Fs,this.serializer)}createSharedClientState(e){return new uA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ad(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QA.bind(null,this.syncEngine),await RA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NA}createDatastore(e){const n=ja(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new pA(s));var s;return function(i,o,a,c){return new yA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ad(this.syncEngine,a,0),o=sd.D()?new sd:new hA,new _A(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new VA(r,s,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);V("RemoteStore","RemoteStore shutting down."),n.du.add(5),await $i(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ek{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tk{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=Km.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ay(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ud(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rk(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>id(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>id(e.remoteStore,i)),t._onlineComponents=e}function nk(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nk(n))throw n;Wo("Error using user provided cache. Falling back to memory cache: "+n),await wc(t,new ld)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await wc(t,new ld);return t._offlineComponents}async function qy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await ud(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await ud(t,new ZA))),t._onlineComponents}function sk(t){return qy(t).then(e=>e.syncEngine)}async function ik(t){const e=await qy(t),n=e.eventManager;return n.onListen=BA.bind(null,e.syncEngine),n.onUnlisten=HA.bind(null,e.syncEngine),n}function ok(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new ek({next:h=>{i.enqueueAndForget(()=>PA(s,u)),h.fromCache&&a.source==="server"?c.reject(new q(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new MA(o,l,{includeMetadataChanges:!0,xu:!0});return DA(s,u)}(await ik(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new Map;/**
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
 */function Ky(t,e,n){if(!n)throw new q(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ak(t,e,n,r){if(e===!0&&r===!0)throw new q(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fd(t){if(!H.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dd(t){if(H.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ai(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xu(t);throw new q(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ak("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new SS;switch(n.type){case"firstParty":return new RS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hd.get(e);n&&(V("ComponentProvider","Removing Datastore"),hd.delete(e),n.terminate())}(this),Promise.resolve()}}function ck(t,e,n,r={}){var s;const i=(t=ai(t,Ka))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Wo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Xe.MOCK_USER;else{o=ag(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Xe(c)}t._authCredentials=new CS(new qm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class za{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new za(this.firestore,e,this._query)}}class Ln extends za{constructor(e,n,r){super(e,n,ny(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new H(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function lk(t,e,...n){if(t=xe(t),Ky("collection","path",e),t instanceof Ka){const r=Se.fromString(e,...n);return dd(r),new Ln(t,null,r)}{if(!(t instanceof At||t instanceof Ln))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return dd(r),new Ln(t.firestore,null,r)}}function cD(t,e,...n){if(t=xe(t),arguments.length===1&&(e=Km.A()),Ky("doc","path",e),t instanceof Ka){const r=Se.fromString(e,...n);return fd(r),new At(t,null,new H(r))}{if(!(t instanceof At||t instanceof Ln))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return fd(r),new At(t.firestore,t instanceof Ln?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Ry(this,"async_queue_retry"),this.qc=()=>{const n=_c();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=_c();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=_c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new xn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Li(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=Gu.createAndSchedule(this,e,n,r,i=>this.Qc(i));return this.$c.push(s),s}Uc(){this.Mc&&Y()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Zu extends Ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new uk,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wy(this),this._firestoreClient.terminate()}}function hk(t,e){const n=typeof t=="object"?t:ma(),r=typeof t=="string"?t:e||"(default)",s=yi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tu("firestore");i&&ck(s,...i)}return s}function zy(t){return t._firestoreClient||Wy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wy(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,c,l){return new jS(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new tk(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ss(it.fromBase64String(e))}catch(n){throw new q(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ss(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this._methodName=e}}/**
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
 */class th{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const fk=/^__.*__$/;class dk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mi(e,this.data,n,this.fieldTransforms)}}function Qy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class nh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:r,ta:!1});return s.ea(e),s}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:r,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ea(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Qy(this.Yc)&&fk.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class pk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ja(e)}ua(e,n,r,s=!1){return new nh({Yc:e,methodName:n,oa:r,path:tt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gk(t){const e=t._freezeSettings(),n=ja(t._databaseId);return new pk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mk(t,e,n,r,s,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,s);Zy("Data must be an object, but it was:",o,r);const a=Jy(r,o);let c,l;if(i.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=yk(e,h,n);if(!o.contains(f))throw new q(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_k(u,f)||u.push(f)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new dk(new It(a),c,l)}function Yy(t,e){if(Xy(t=xe(t)))return Zy("Unsupported field value:",e,t),Jy(t,e);if(t instanceof Gy)return function(n,r){if(!Qy(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Yy(o,r.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uC(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=je.fromDate(n);return{timestampValue:Xo(r.serializer,s)}}if(n instanceof je){const s=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xo(r.serializer,s)}}if(n instanceof th)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ss)return{bytesValue:Ey(r.serializer,n._byteString)};if(n instanceof At){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Xu(n)}`)}(t,e)}function Jy(t,e){const n={};return zm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,s)=>{const i=Yy(s,e.Xc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Xy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof th||t instanceof ss||t instanceof At||t instanceof Gy)}function Zy(t,e,n){if(!Xy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xu(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function yk(t,e,n){if((e=xe(e))instanceof eh)return e._internalPath;if(typeof e=="string")return ev(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const vk=new RegExp("[~\\*/\\[\\]]");function ev(t,e,n){if(e.search(vk)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eh(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new q(I.INVALID_ARGUMENT,a+t+c)}function _k(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wk extends tv{data(){return super.data()}}function nv(t,e){return typeof e=="string"?ev(t,e):e instanceof eh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bk{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const r={};return hs(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new th(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Te(Cy(r));const s=new ri(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ik extends tv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class To extends Ik{data(e={}){return super.data(e)}}class Sk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new to(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new To(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new To(r._firestore,r._userDataWriter,o.doc.key,o.doc,new to(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new To(r._firestore,r._userDataWriter,o.doc.key,o.doc,new to(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Ck(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ck(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class Ak extends bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function kk(t){t=ai(t,za);const e=ai(t.firestore,Zu),n=zy(e),r=new Ak(e);return Ek(t._query),ok(n,t._query).then(s=>new Sk(e,r,t,s))}function lD(t,e,n){t=ai(t,At);const r=ai(t.firestore,Zu),s=Tk(t.converter,e,n);return Rk(r,[mk(gk(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ln.none())])}function Rk(t,e){return function(n,r){const s=new xn;return n.asyncQueue.enqueueAndForget(async()=>qA(await sk(n),r,s)),s.promise}(zy(t),e)}(function(t,e=!0){(function(n){us=n})(os),Fn(new hn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Zu(new AS(n.getProvider("auth-internal")),new NS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Ct(Uf,"3.10.0",t),Ct(Uf,"3.10.0","esm2017")})();async function Ok(t){var o;let n=$o();for(let a=0;a<5&&n.currentUser==null;a++)console.log("Waiting for authentication..."),await new Promise(c=>setTimeout(c,1e3)),n=$o();if(n===null||!((o=n.currentUser)!=null&&o.email))return console.log("Authentication failed or user email is null"),"undefined";const r=lk(hk(),"users"),s=await kk(r);let i;return s.forEach(a=>{a.data().email===n.currentUser.email&&(i=a.data()[t])}),i}const Nk={data(){return{logState:"",sideBarDisplay:!1,auth:!1,name:""}},mounted(){this.sideBarDisplay=!1,$o().onAuthStateChanged(t=>{t?(this.auth=!0,Ok("name").then(e=>{this.name=e})):this.auth=!1})},methods:{goHome(){this.$router.push("/")}}},Dk="/assets/logo-d503e1ea.png";const Pk=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xk={class:"container"},Lk={class:"logo"};function Mk(t,e,n,r,s,i){const o=Cw("router-view");return Wp(),rE(bt,null,[Fr("div",xk,[Fr("header",null,[Fr("div",Lk,[Fr("img",{onClick:e[0]||(e[0]=(...a)=>i.goHome&&i.goHome(...a)),class:"img-responsive",src:Dk})])])]),mt(o)],64)}const Uk=Pk(Nk,[["render",Mk],["__file","/home/dave/Documents/VueFleet/vue-project/src/App.vue"]]);function $k(){return rv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function rv(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Fk=typeof Proxy=="function",Vk="devtools-plugin:setup",Bk="plugin:settings:set";let Nr,Tl;function jk(){var t;return Nr!==void 0||(typeof window<"u"&&window.performance?(Nr=!0,Tl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Nr=!0,Tl=global.perf_hooks.performance):Nr=!1),Nr}function Hk(){return jk()?Tl.now():Date.now()}class qk{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Hk()}},n&&n.on(Bk,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Kk(t,e){const n=t,r=rv(),s=$k(),i=Fk&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Vk,t,e);else{const o=i?new qk(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const nn=typeof window<"u";function zk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Ec(t,e){const n={};for(const r in e){const s=e[r];n[r]=_t(s)?s.map(t):t(s)}return n}const Ms=()=>{},_t=Array.isArray;function he(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const Wk=/\/$/,Gk=t=>t.replace(Wk,"");function bc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Jk(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Qk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function md(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Hn(e.matched[r],n.matched[s])&&sv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Yk(t[n],e[n]))return!1;return!0}function Yk(t,e){return _t(t)?yd(t,e):_t(e)?yd(e,t):t===e}function yd(t,e){return _t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Jk(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return he(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ci;(function(t){t.pop="pop",t.push="push"})(ci||(ci={}));var Us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Us||(Us={}));function Xk(t){if(!t)if(nn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gk(t)}const Zk=/^[^#]+#/;function eR(t,e){return t.replace(Zk,"#")+e}function tR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function nR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){he(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{he(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){he(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=tR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vd(t,e){return(history.state?history.state.position-e:-1)+t}const Il=new Map;function rR(t,e){Il.set(t,e)}function sR(t){const e=Il.get(t);return Il.delete(t),e}let iR=()=>location.protocol+"//"+location.host;function iv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),gd(c,"")}return gd(n,t)+r+s}function oR(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=iv(t,location),y=n.value,v=e.value;let E=0;if(f){if(n.value=p,e.value=f,o&&o===y){o=null;return}E=v?f.position-v.position:0}else r(p);s.forEach(R=>{R(n.value,y,{delta:E,type:ci.pop,direction:E?E>0?Us.forward:Us.back:Us.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:Wa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function _d(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wa():null}}function aR(t){const{history:e,location:n}=window,r={value:iv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:iR()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){he("Error with push/replace State",p),n[u?"replace":"assign"](f)}}function o(c,l){const u=ge({},e.state,_d(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ge({},s.value,e.state,{forward:c,scroll:Wa()});e.state||he(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=ge({},_d(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function cR(t){t=Xk(t);const e=aR(t),n=oR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ge({location:"",base:t,go:r,createHref:eR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function lR(t){return typeof t=="string"||t&&typeof t=="object"}function ov(t){return typeof t=="string"||typeof t=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},av=Symbol("navigation failure");var wd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wd||(wd={}));const uR={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${fR(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function is(t,e){return ge(new Error(uR[t](e)),{type:t,[av]:!0},e)}function Zt(t,e){return t instanceof Error&&av in t&&(e==null||!!(t.type&e))}const hR=["params","query","hash"];function fR(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of hR)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Ed="[^/]+?",dR={sensitive:!1,strict:!1,start:!0,end:!0},pR=/[.+*?^${}()[\]/\\]/g;function gR(t,e){const n=ge({},dR,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(pR,"\\$&"),p+=40;else if(f.type===1){const{value:y,repeatable:v,optional:E,regexp:R}=f;i.push({name:y,repeatable:v,optional:E});const O=R||Ed;if(O!==Ed){p+=10;try{new RegExp(`(${O})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${O}): `+P.message)}}let L=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(L=E&&l.length<2?`(?:/${L})`:"/"+L),E&&(L+="?"),s+=L,p+=20,E&&(p+=-8),v&&(p+=-20),O===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",y=i[f-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:v,optional:E}=p,R=y in l?l[y]:"";if(_t(R)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const O=_t(R)?R.join("/"):R;if(!O)if(E)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function mR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yR(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(bd(r))return 1;if(bd(s))return-1}return s.length-r.length}function bd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vR={type:0,value:""},_R=/[a-zA-Z0-9_]/;function wR(t){if(!t)return[[]];if(t==="/")return[[vR]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:_R.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function ER(t,e,n){const r=gR(wR(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&he(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bR(t,e){const n=[],r=new Map;e=Sd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,y=TR(u);AR(y,h),y.aliasOf=f&&f.record;const v=Sd(e,u),E=[y];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of L)E.push(ge({},y,{components:f?f.record.components:y.components,path:P,aliasOf:f?f.record:y}))}let R,O;for(const L of E){const{path:P}=L;if(h&&P[0]!=="/"){const K=h.record.path,de=K[K.length-1]==="/"?"":"/";L.path=h.record.path+(P&&de+P)}if(L.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(R=ER(L,h,v),h&&P[0]==="/"&&kR(R,h),f?(f.alias.push(R),CR(f,R)):(O=O||R,O!==R&&O.alias.push(R),p&&u.name&&!Id(R)&&o(u.name)),y.children){const K=y.children;for(let de=0;de<K.length;de++)i(K[de],R,f&&f.children[de])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return O?()=>{o(O)}:Ms}function o(u){if(ov(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&yR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!cv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Id(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},y,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw is(1,{location:u});{const O=Object.keys(u.params||{}).filter(L=>!f.keys.find(P=>P.name===L));O.length&&he(`Discarded invalid param(s) "${O.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=f.record.name,p=ge(Td(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&Td(u.params,f.keys.map(O=>O.name))),y=f.stringify(p)}else if("path"in u)y=u.path,y.startsWith("/")||he(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(O=>O.re.test(y)),f&&(p=f.parse(y),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw is(1,{location:u,currentLocation:h});v=f.record.name,p=ge({},h.params,u.params),y=f.stringify(p)}const E=[];let R=f;for(;R;)E.unshift(R.record),R=R.parent;return{name:v,path:y,params:p,matched:E,meta:SR(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Td(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function TR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:IR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function IR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Id(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function SR(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Sd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sl(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function CR(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(Sl.bind(null,n)))return he(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(Sl.bind(null,n)))return he(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function AR(t,e){e&&e.record.name&&!t.name&&!t.path&&he(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function kR(t,e){for(const n of e.keys)if(!t.keys.find(Sl.bind(null,n)))return he(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function cv(t,e){return e.children.some(n=>n===t||cv(t,n))}const lv=/#/g,RR=/&/g,OR=/\//g,NR=/=/g,DR=/\?/g,uv=/\+/g,PR=/%5B/g,xR=/%5D/g,hv=/%5E/g,LR=/%60/g,fv=/%7B/g,MR=/%7C/g,dv=/%7D/g,UR=/%20/g;function rh(t){return encodeURI(""+t).replace(MR,"|").replace(PR,"[").replace(xR,"]")}function $R(t){return rh(t).replace(fv,"{").replace(dv,"}").replace(hv,"^")}function Cl(t){return rh(t).replace(uv,"%2B").replace(UR,"+").replace(lv,"%23").replace(RR,"%26").replace(LR,"`").replace(fv,"{").replace(dv,"}").replace(hv,"^")}function FR(t){return Cl(t).replace(NR,"%3D")}function VR(t){return rh(t).replace(lv,"%23").replace(DR,"%3F")}function BR(t){return t==null?"":VR(t).replace(OR,"%2F")}function li(t){try{return decodeURIComponent(""+t)}catch{he(`Error decoding "${t}". Using original value`)}return""+t}function jR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(uv," "),o=i.indexOf("="),a=li(o<0?i:i.slice(0,o)),c=o<0?null:li(i.slice(o+1));if(a in e){let l=e[a];_t(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Cd(t){let e="";for(let n in t){const r=t[n];if(n=FR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(_t(r)?r.map(i=>i&&Cl(i)):[r&&Cl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=_t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qR=Symbol("router view location matched"),Ad=Symbol("router view depth"),sh=Symbol("router"),pv=Symbol("route location"),Al=Symbol("router view location");function ys(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function In(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(is(4,{from:n,to:e})):h instanceof Error?a(h):lR(h)?a(is(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,KR(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(f=>c._called?f:(he(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){he(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function KR(t,e,n){let r=0;return function(){r++===1&&he(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function Tc(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&he(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw he(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){he(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,he(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(zR(a)){const l=(a.__vccOpts||a)[e];l&&s.push(In(l,n,r,i,o))}else{let c=a();"catch"in c||(he(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=zk(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&In(f,n,r,i,o)()}))}}}return s}function zR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kd(t){const e=cn(sh),n=cn(pv),r=Tt(()=>e.resolve(Hr(t.to))),s=Tt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Hn.bind(null,u));if(f>-1)return f;const p=Rd(c[l-2]);return l>1&&Rd(u)===p&&h[h.length-1].path!==p?h.findIndex(Hn.bind(null,c[l-2])):f}),i=Tt(()=>s.value>-1&&YR(n.params,r.value.params)),o=Tt(()=>s.value>-1&&s.value===n.matched.length-1&&sv(n.params,r.value.params));function a(c={}){return QR(c)?e[Hr(t.replace)?"replace":"push"](Hr(t.to)).catch(Ms):Promise.resolve()}if(nn){const c=Zl();if(c){const l={route:r.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),hw(()=>{l.route=r.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:r,href:Tt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const WR=Dp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kd,setup(t,{slots:e}){const n=hi(kd(t)),{options:r}=cn(sh),s=Tt(()=>({[Od(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Od(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GR=WR;function QR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!_t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Od=(t,e,n)=>t??e??n,JR=Dp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){ZR();const r=cn(Al),s=Tt(()=>t.route||r.value),i=cn(Ad,0),o=Tt(()=>{let l=Hr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Tt(()=>s.value.matched[o.value]);uo(Ad,Tt(()=>o.value+1)),uo(qR,a),uo(Al,s);const c=R_();return ks(()=>[c.value,a.value,t.name],([l,u,h],[f,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Hn(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Nd(n.default,{Component:f,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,E=tg(f,ge({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(nn&&E.ref){const R={depth:o.value,name:h.name,path:h.path,meta:h.meta};(_t(E.ref)?E.ref.map(L=>L.i):[E.ref.i]).forEach(L=>{L.__vrv_devtools=R})}return Nd(n.default,{Component:E,route:l})||E}}});function Nd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const XR=JR;function ZR(){const t=Zl(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";he(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function vs(t,e){const n=ge({},t,{matched:t.matched.map(r=>cO(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function no(t){return{_custom:{display:t}}}let eO=0;function tO(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=eO++;Kk({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:vs(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const f=h.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:gv})}_t(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(f=>{let p=vv,y="";f.isExactActive?(p=yv,y="This is exactly active"):f.isActive&&(p=mv,y="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:y,backgroundColor:p})}))}),ks(e.currentRoute,()=>{c(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const f={guard:no("beforeEach"),from:vs(h,"Current Location during this navigation"),to:vs(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,f)=>{const p={guard:no("afterEach")};f?(p.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},p.status=no("❌")):p.status=no("✅"),p.from=vs(h,"Current Location during this navigation"),p.to=vs(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(f=>!f.parent);h.forEach(Ev),u.filter&&(h=h.filter(f=>kl(f,u.filter.toLowerCase()))),h.forEach(f=>wv(f,e.currentRoute.value)),u.rootNodes=h.map(_v)}let l;s.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const f=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);f&&(u.state={options:rO(f)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function nO(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function rO(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${nO(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const gv=15485081,mv=2450411,yv=8702998,sO=2282478,vv=16486972,iO=6710886;function _v(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:sO}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:vv}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:gv}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:yv}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:mv}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:iO});let r=n.__vd_id;return r==null&&(r=String(oO++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(_v)}}let oO=0;const aO=/^\/(.*)\/([a-z]*)$/;function wv(t,e){const n=e.matched.length&&Hn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>Hn(r,t.record))),t.children.forEach(r=>wv(r,e))}function Ev(t){t.__vd_match=!1,t.children.forEach(Ev)}function kl(t,e){const n=String(t.re).match(aO);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>kl(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=li(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>kl(o,e))}function cO(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function lO(t){const e=bR(t.routes,t),n=t.parseQuery||jR,r=t.stringifyQuery||Cd,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=ys(),o=ys(),a=ys(),c=O_(En);let l=En;nn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ec.bind(null,_=>""+_),h=Ec.bind(null,BR),f=Ec.bind(null,li);function p(_,M){let D,$;return ov(_)?(D=e.getRecordMatcher(_),$=M):$=_,e.addRoute($,D)}function y(_){const M=e.getRecordMatcher(_);M?e.removeRoute(M):he(`Cannot remove non-existent route "${String(_)}"`)}function v(){return e.getRoutes().map(_=>_.record)}function E(_){return!!e.getRecordMatcher(_)}function R(_,M){if(M=ge({},M||c.value),typeof _=="string"){const ee=bc(n,_,M.path),d=e.resolve({path:ee.path},M),g=s.createHref(ee.fullPath);return g.startsWith("//")?he(`Location "${_}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):d.matched.length||he(`No match found for location with path "${_}"`),ge(ee,d,{params:f(d.params),hash:li(ee.hash),redirectedFrom:void 0,href:g})}let D;if("path"in _)"params"in _&&!("name"in _)&&Object.keys(_.params).length&&he(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),D=ge({},_,{path:bc(n,_.path,M.path).path});else{const ee=ge({},_.params);for(const d in ee)ee[d]==null&&delete ee[d];D=ge({},_,{params:h(_.params)}),M.params=h(M.params)}const $=e.resolve(D,M),le=_.hash||"";le&&!le.startsWith("#")&&he(`A \`hash\` should always start with the character "#". Replace "${le}" with "#${le}".`),$.params=u(f($.params));const be=Qk(r,ge({},_,{hash:$R(le),path:$.path})),re=s.createHref(be);return re.startsWith("//")?he(`Location "${_}" resolved to "${re}". A resolved location cannot start with multiple slashes.`):$.matched.length||he(`No match found for location with path "${"path"in _?_.path:_}"`),ge({fullPath:be,hash:le,query:r===Cd?HR(_.query):_.query||{}},$,{redirectedFrom:void 0,href:re})}function O(_){return typeof _=="string"?bc(n,_,c.value.path):ge({},_)}function L(_,M){if(l!==_)return is(8,{from:M,to:_})}function P(_){return Ce(_)}function K(_){return P(ge(O(_),{replace:!0}))}function de(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let $=typeof D=="function"?D(_):D;if(typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=O($):{path:$},$.params={}),!("path"in $)&&!("name"in $))throw he(`Invalid redirect found:
${JSON.stringify($,null,2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ge({query:_.query,hash:_.hash,params:"path"in $?{}:_.params},$)}}function Ce(_,M){const D=l=R(_),$=c.value,le=_.state,be=_.force,re=_.replace===!0,ee=de(D);if(ee)return Ce(ge(O(ee),{state:typeof ee=="object"?ge({},le,ee.state):le,force:be,replace:re}),M||D);const d=D;d.redirectedFrom=M;let g;return!be&&md(r,$,D)&&(g=is(16,{to:d,from:$}),kr($,$,!0,!1)),(g?Promise.resolve(g):fe(d,$)).catch(m=>Zt(m)?Zt(m,2)?m:dt(m):se(m,d,$)).then(m=>{if(m){if(Zt(m,2))return md(r,R(m.to),d)&&M&&(M._count=M._count?M._count+1:1)>10?(he(`Detected an infinite redirection in a navigation guard when going from "${$.fullPath}" to "${d.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Ce(ge({replace:re},O(m.to),{state:typeof m.to=="object"?ge({},le,m.to.state):le,force:be}),M||d)}else m=$e(d,$,!0,re,le);return ye(d,$,m),m})}function W(_,M){const D=L(_,M);return D?Promise.reject(D):Promise.resolve()}function fe(_,M){let D;const[$,le,be]=uO(_,M);D=Tc($.reverse(),"beforeRouteLeave",_,M);for(const ee of $)ee.leaveGuards.forEach(d=>{D.push(In(d,_,M))});const re=W.bind(null,_,M);return D.push(re),Dr(D).then(()=>{D=[];for(const ee of i.list())D.push(In(ee,_,M));return D.push(re),Dr(D)}).then(()=>{D=Tc(le,"beforeRouteUpdate",_,M);for(const ee of le)ee.updateGuards.forEach(d=>{D.push(In(d,_,M))});return D.push(re),Dr(D)}).then(()=>{D=[];for(const ee of _.matched)if(ee.beforeEnter&&!M.matched.includes(ee))if(_t(ee.beforeEnter))for(const d of ee.beforeEnter)D.push(In(d,_,M));else D.push(In(ee.beforeEnter,_,M));return D.push(re),Dr(D)}).then(()=>(_.matched.forEach(ee=>ee.enterCallbacks={}),D=Tc(be,"beforeRouteEnter",_,M),D.push(re),Dr(D))).then(()=>{D=[];for(const ee of o.list())D.push(In(ee,_,M));return D.push(re),Dr(D)}).catch(ee=>Zt(ee,8)?ee:Promise.reject(ee))}function ye(_,M,D){for(const $ of a.list())$(_,M,D)}function $e(_,M,D,$,le){const be=L(_,M);if(be)return be;const re=M===En,ee=nn?history.state:{};D&&($||re?s.replace(_.fullPath,ge({scroll:re&&ee&&ee.scroll},le)):s.push(_.fullPath,le)),c.value=_,kr(_,M,D,re),dt()}let Ae;function kt(){Ae||(Ae=s.listen((_,M,D)=>{if(!Rr.listening)return;const $=R(_),le=de($);if(le){Ce(ge(le,{replace:!0}),$).catch(Ms);return}l=$;const be=c.value;nn&&rR(vd(be.fullPath,D.delta),Wa()),fe($,be).catch(re=>Zt(re,12)?re:Zt(re,2)?(Ce(re.to,$).then(ee=>{Zt(ee,20)&&!D.delta&&D.type===ci.pop&&s.go(-1,!1)}).catch(Ms),Promise.reject()):(D.delta&&s.go(-D.delta,!1),se(re,$,be))).then(re=>{re=re||$e($,be,!1),re&&(D.delta&&!Zt(re,8)?s.go(-D.delta,!1):D.type===ci.pop&&Zt(re,20)&&s.go(-1,!1)),ye($,be,re)}).catch(Ms)}))}let vn=ys(),Rt=ys(),Fe;function se(_,M,D){dt(_);const $=Rt.list();return $.length?$.forEach(le=>le(_,M,D)):(he("uncaught error during route navigation:"),console.error(_)),Promise.reject(_)}function ce(){return Fe&&c.value!==En?Promise.resolve():new Promise((_,M)=>{vn.add([_,M])})}function dt(_){return Fe||(Fe=!_,kt(),vn.list().forEach(([M,D])=>_?D(_):M()),vn.reset()),_}function kr(_,M,D,$){const{scrollBehavior:le}=t;if(!nn||!le)return Promise.resolve();const be=!D&&sR(vd(_.fullPath,0))||($||!D)&&history.state&&history.state.scroll||null;return yp().then(()=>le(_,M,be)).then(re=>re&&nR(re)).catch(re=>se(re,_,M))}const Xt=_=>s.go(_);let Ut;const wt=new Set,Rr={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:E,getRoutes:v,resolve:R,options:t,push:P,replace:K,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Rt.add,isReady:ce,install(_){const M=this;_.component("RouterLink",GR),_.component("RouterView",XR),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Hr(c)}),nn&&!Ut&&c.value===En&&(Ut=!0,P(s.location).catch(le=>{he("Unexpected error when starting the router:",le)}));const D={};for(const le in En)D[le]=Tt(()=>c.value[le]);_.provide(sh,M),_.provide(pv,hi(D)),_.provide(Al,c);const $=_.unmount;wt.add(_),_.unmount=function(){wt.delete(_),wt.size<1&&(l=En,Ae&&Ae(),Ae=null,c.value=En,Ut=!1,Fe=!1),$()},nn&&tO(_,M,e)}};return Rr}function Dr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function uO(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Hn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Hn(l,c))||s.push(c))}return[n,r,s]}const hO="modulepreload",fO=function(t){return"/"+t},Dd={},ro=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=fO(i),i in Dd)return;Dd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":hO,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},dO=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function so(t){return()=>dO(Object.assign({"../pages/About.vue":()=>ro(()=>import("./About-f19dbc98.js"),["assets/About-f19dbc98.js","assets/Sidebar-1345482b.js","assets/About-6511fcdf.css"]),"../pages/Closet.vue":()=>ro(()=>import("./Closet-7b49a7fc.js"),["assets/Closet-7b49a7fc.js","assets/Sidebar-1345482b.js","assets/Closet-37da5976.css"]),"../pages/Home.vue":()=>ro(()=>import("./Home-6a04c116.js"),["assets/Home-6a04c116.js","assets/Sidebar-1345482b.js","assets/Home-a44eba66.css"]),"../pages/Login.vue":()=>ro(()=>import("./Login-a73d66b7.js"),["assets/Login-a73d66b7.js","assets/Sidebar-1345482b.js","assets/Login-bac4bc3c.css"])}),`../pages/${t}.vue`)}const pO=[{path:"/",component:so("Home")},{path:"/About",component:so("About")},{path:"/Closet",component:so("Closet")},{path:"/Login",component:so("Login")}];var gO="firebase",mO="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(gO,mO,"app");/**
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
 */const bv="firebasestorage.googleapis.com",Tv="storageBucket",yO=2*60*1e3,vO=10*60*1e3;/**
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
 */class Ne extends Mt{constructor(e,n,r=0){super(Ic(e),`Firebase Storage: ${n} (${Ic(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ic(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function Ic(t){return"storage/"+t}function ih(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Oe.UNKNOWN,t)}function _O(t){return new Ne(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function wO(t){return new Ne(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function EO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Oe.UNAUTHENTICATED,t)}function bO(){return new Ne(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TO(t){return new Ne(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IO(){return new Ne(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SO(){return new Ne(Oe.CANCELED,"User canceled the upload/download.")}function CO(t){return new Ne(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function AO(t){return new Ne(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function kO(){return new Ne(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Tv+"' property when initializing the app?")}function RO(){return new Ne(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OO(){return new Ne(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NO(t){return new Ne(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Rl(t){return new Ne(Oe.INVALID_ARGUMENT,t)}function Iv(){return new Ne(Oe.APP_DELETED,"The Firebase app was deleted.")}function DO(t){return new Ne(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $s(t,e){return new Ne(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function _s(t){throw new Ne(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ft.makeFromUrl(e,n)}catch{return new ft(e,"")}if(r.path==="")return r;throw AO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},v=n===bv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",R=new RegExp(`^https?://${v}/${s}/${E}`,"i"),L=[{regex:a,indices:c,postModify:i},{regex:p,indices:y,postModify:l},{regex:R,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<L.length;P++){const K=L[P],de=K.regex.exec(e);if(de){const Ce=de[K.indices.bucket];let W=de[K.indices.path];W||(W=""),r=new ft(Ce,W),K.postModify(r);break}}if(r==null)throw CO(e);return r}}class PO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function xO(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(p,c())},E)}function f(){i&&clearTimeout(i)}function p(E,...R){if(l){f();return}if(E){f(),u.call(null,E,...R);return}if(c()||o){f(),u.call(null,E,...R);return}r<64&&(r*=2);let L;a===1?(a=2,L=0):L=(r+Math.random())*1e3,h(L)}let y=!1;function v(E){y||(y=!0,f(),!l&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function LO(t){t(!1)}/**
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
 */function MO(t){return t!==void 0}function UO(t){return typeof t=="object"&&!Array.isArray(t)}function oh(t){return typeof t=="string"||t instanceof String}function Pd(t){return ah()&&t instanceof Blob}function ah(){return typeof Blob<"u"&&!ib()}function Ol(t,e,n,r){if(r<e)throw Rl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Rl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ga(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Sv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var pr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pr||(pr={}));/**
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
 */function $O(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class FO{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new io(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===pr.NO_ERROR,c=i.getStatus();if(!a||$O(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===pr.ABORT;r(!1,new io(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new io(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());MO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ih();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Iv():SO();o(c)}else{const c=IO();o(c)}};this.canceled_?n(!1,new io(!1,null,!0)):this.backoffId_=xO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class io{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qO(t,e,n,r,s,i,o=!0){const a=Sv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return jO(l,e),VO(l,n),BO(l,i),HO(l,r),new FO(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function KO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zO(...t){const e=KO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ah())return new Blob(t);throw new Ne(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function WO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function GO(t){if(typeof atob>"u")throw NO("base-64");return atob(t)}/**
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
 */const qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sc{constructor(e,n){this.data=e,this.contentType=n||null}}function QO(t,e){switch(t){case qt.RAW:return new Sc(Cv(e));case qt.BASE64:case qt.BASE64URL:return new Sc(Av(t,e));case qt.DATA_URL:return new Sc(JO(e),XO(e))}throw ih()}function Cv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function YO(t){let e;try{e=decodeURIComponent(t)}catch{throw $s(qt.DATA_URL,"Malformed data URL.")}return Cv(e)}function Av(t,e){switch(t){case qt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw $s(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case qt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw $s(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=GO(e)}catch(s){throw s.message.includes("polyfill")?s:$s(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class kv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw $s(qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ZO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function JO(t){const e=new kv(t);return e.base64?Av(qt.BASE64,e.rest):YO(e.rest)}function XO(t){return new kv(t).contentType}function ZO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class On{constructor(e,n){let r=0,s="";Pd(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Pd(this.data_)){const r=this.data_,s=WO(r,e,n);return s===null?null:new On(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new On(r,!0)}}static getBlob(...e){if(ah()){const n=e.map(r=>r instanceof On?r.data_:r);return new On(zO.apply(null,n))}else{const n=e.map(o=>oh(o)?QO(qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new On(s,!0)}}uploadData(){return this.data_}}/**
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
 */function ch(t){let e;try{e=JSON.parse(t)}catch{return null}return UO(e)?e:null}/**
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
 */function eN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Rv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function nN(t,e){return e}class at{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||nN}}let oo=null;function rN(t){return!oh(t)||t.length<2?t:Rv(t)}function Ov(){if(oo)return oo;const t=[];t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));function e(i,o){return rN(o)}const n=new at("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new at("size");return s.xform=r,t.push(s),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),oo=t,oo}function sN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function iN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return sN(r,t),r}function Nv(t,e,n){const r=ch(e);return r===null?null:iN(t,r,n)}function oN(t,e,n,r){const s=ch(e);if(s===null||!oh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=Ga(f,n,r),y=Sv({alt:"media",token:l});return p+y})[0]}function aN(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
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
 */const xd="prefixes",Ld="items";function cN(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[xd])for(const s of n[xd]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new ft(e,i));r.prefixes.push(o)}if(n[Ld])for(const s of n[Ld]){const i=t._makeStorageReference(new ft(e,s.name));r.items.push(i)}return r}function lN(t,e,n){const r=ch(n);return r===null?null:cN(t,e,r)}class lh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function uh(t){if(!t)throw ih()}function uN(t,e){function n(r,s){const i=Nv(t,s,e);return uh(i!==null),i}return n}function hN(t,e){function n(r,s){const i=lN(t,e,s);return uh(i!==null),i}return n}function fN(t,e){function n(r,s){const i=Nv(t,s,e);return uh(i!==null),oN(i,s,t.host,t._protocol)}return n}function hh(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=bO():s=EO():n.getStatus()===402?s=wO(t.bucket):n.getStatus()===403?s=TO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function dN(t){const e=hh(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=_O(t.path)),i.serverResponse=s.serverResponse,i}return n}function pN(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),a=Ga(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,u=new lh(a,c,hN(t,e.bucket),l);return u.urlParams=i,u.errorHandler=hh(e),u}function gN(t,e,n){const r=e.fullServerUrl(),s=Ga(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new lh(s,i,fN(t,n),o);return a.errorHandler=dN(e),a}function mN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=mN(null,e)),r}function vN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let L="";for(let P=0;P<2;P++)L=L+Math.random().toString().slice(2);return L}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=yN(e,r,s),u=aN(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=On.getBlob(h,r,f);if(p===null)throw RO();const y={name:l.fullPath},v=Ga(i,t.host,t._protocol),E="POST",R=t.maxUploadRetryTime,O=new lh(v,E,uN(t,n),R);return O.urlParams=y,O.headers=o,O.body=p.uploadData(),O.errorHandler=hh(e),O}class _N{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw _s("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _s("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _s("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _s("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _s("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wN extends _N{initXhr(){this.xhr_.responseType="text"}}function fh(){return new wN}/**
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
 */class br{constructor(e,n){this._service=e,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new br(e,n)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rv(this._location.path)}get storage(){return this._service}get parent(){const e=eN(this._location.path);if(e===null)return null;const n=new ft(this._location.bucket,e);return new br(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DO(e)}}function EN(t,e,n){t._throwIfRoot("uploadBytes");const r=vN(t.storage,t._location,Ov(),new On(e,!0),n);return t.storage.makeRequestWithTokens(r,fh).then(s=>({metadata:s,ref:t}))}function bN(t){const e={prefixes:[],items:[]};return Dv(t,e).then(()=>e)}async function Dv(t,e,n){const s=await TN(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Dv(t,e,s.nextPageToken)}function TN(t,e){e!=null&&typeof e.maxResults=="number"&&Ol("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=pN(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,fh)}function IN(t){t._throwIfRoot("getDownloadURL");const e=gN(t.storage,t._location,Ov());return t.storage.makeRequestWithTokens(e,fh).then(n=>{if(n===null)throw OO();return n})}function SN(t,e){const n=tN(t._location.path,e),r=new ft(t._location.bucket,n);return new br(t.storage,r)}/**
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
 */function CN(t){return/^[A-Za-z]+:\/\//.test(t)}function AN(t,e){return new br(t,e)}function Pv(t,e){if(t instanceof dh){const n=t;if(n._bucket==null)throw kO();const r=new br(n,n._bucket);return e!=null?Pv(r,e):r}else return e!==void 0?SN(t,e):t}function kN(t,e){if(e&&CN(e)){if(t instanceof dh)return AN(t,e);throw Rl("To use ref(service, url), the first argument must be a Storage instance.")}else return Pv(t,e)}function Md(t,e){const n=e==null?void 0:e[Tv];return n==null?null:ft.makeFromBucketSpec(n,t)}function RN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ag(s,t.app.options.projectId))}class dh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=bv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yO,this._maxUploadRetryTime=vO,this._requests=new Set,s!=null?this._bucket=ft.makeFromBucketSpec(s,this._host):this._bucket=Md(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=Md(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ol("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ol("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new br(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new PO(Iv());{const o=qO(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ud="@firebase/storage",$d="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="storage";function uD(t,e,n){return t=xe(t),EN(t,e,n)}function hD(t){return t=xe(t),bN(t)}function fD(t){return t=xe(t),IN(t)}function dD(t,e){return t=xe(t),kN(t,e)}function ON(t=ma(),e){t=xe(t);const r=yi(t,xv).getImmediate({identifier:e}),s=tu("storage");return s&&NN(r,...s),r}function NN(t,e,n,r={}){RN(t,e,n,r)}function DN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new dh(n,r,s,e,os)}function PN(){Fn(new hn(xv,DN,"PUBLIC").setMultipleInstances(!0)),Ct(Ud,$d,""),Ct(Ud,$d,"esm2017")}PN();/**
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
 */const xN="type.googleapis.com/google.protobuf.Int64Value",LN="type.googleapis.com/google.protobuf.UInt64Value";function Lv(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Nl(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Nl(e));if(typeof t=="function"||typeof t=="object")return Lv(t,e=>Nl(e));throw new Error("Data cannot be encoded in JSON: "+t)}function ta(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case xN:case LN:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>ta(e)):typeof t=="function"||typeof t=="object"?Lv(t,e=>ta(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="functions";/**
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
 */const Fd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qr extends Mt{constructor(e,n,r){super(`${ph}/${e}`,n||""),this.details=r}}function MN(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function UN(t,e){let n=MN(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Fd[o])return new Qr("internal","internal");n=Fd[o],r=o}const a=i.message;typeof a=="string"&&(r=a),s=i.details,s!==void 0&&(s=ta(s))}}catch{}return n==="ok"?null:new Qr(n,r,s)}/**
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
 */class $N{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
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
 */const Dl="us-central1";function FN(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Qr("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class VN{constructor(e,n,r,s,i=Dl,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new $N(n,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin,this.region=Dl}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function BN(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function jN(t,e,n){return r=>qN(t,e,r,n||{})}async function HN(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function qN(t,e,n,r){const s=t._url(e);return KN(t,s,n,r)}async function KN(t,e,n,r){n=Nl(n);const s={data:n},i={},o=await t.contextProvider.getContext();o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,c=FN(a),l=await Promise.race([HN(e,s,i,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!l)throw new Qr("cancelled","Firebase Functions instance was deleted.");const u=UN(l.status,l.json);if(u)throw u;if(!l.json)throw new Qr("internal","Response is not valid JSON object.");let h=l.json.data;if(typeof h>"u"&&(h=l.json.result),typeof h>"u")throw new Qr("internal","Response is missing data field.");return{data:ta(h)}}const Vd="@firebase/functions",Bd="0.9.4";/**
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
 */const zN="auth-internal",WN="app-check-internal",GN="messaging-internal";function QN(t,e){const n=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(zN),a=r.getProvider(GN),c=r.getProvider(WN);return new VN(i,o,a,c,s,t)};Fn(new hn(ph,n,"PUBLIC").setMultipleInstances(!0)),Ct(Vd,Bd,e),Ct(Vd,Bd,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t=ma(),e=Dl){const r=yi(xe(t),ph).getImmediate({identifier:e}),s=tu("functions");return s&&JN(r,...s),r}function JN(t,e,n){BN(xe(t),e,n)}function pD(t,e,n){return jN(xe(t),e,n)}QN(fetch.bind(self));const XN={apiKey:"AIzaSyBDevPI9maQg7zZPO4rUDHj7ZMENqdw3vE",authDomain:"closetsnap-822e7.firebaseapp.com",projectId:"closetsnap-822e7",storageBucket:"closetsnap-822e7.appspot.com",messagingSenderId:"604567787747",appId:"1:604567787747:web:173093122cebf15280cdd6"},gh=ug(XN);$o(gh);ON(gh);YN(gh);let ZN=lO({history:cR(),routes:pO});const Mv=qE(Uk);Mv.use(ZN);Mv.mount("#app");export{cE as A,bt as F,Pk as _,mt as a,Fr as b,rE as c,Ok as d,ON as e,dD as f,$o as g,fD as h,pD as i,YN as j,nD as k,hD as l,sD as m,lD as n,Wp as o,cD as p,tD as q,Cw as r,iD as s,eD as t,uD as u,rD as v,hk as w,oD as x,rw as y,sE as z};
