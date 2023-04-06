import{j as Ia,C as Sa,k as fi,l as Ca,m as ce,n as Aa,p as ka,q as Da,L as he,u as Na,S as Ra,x as ba}from"./index-bc21f2a3.js";var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Ts=Ts||{},T=xa||self;function Ye(){}function gn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Se(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _a(e){return Object.prototype.hasOwnProperty.call(e,qn)&&e[qn]||(e[qn]=++La)}var qn="closure_uid_"+(1e9*Math.random()>>>0),La=0;function Ma(e,t,n){return e.call.apply(e.bind,arguments)}function Oa(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function W(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=Ma:W=Oa,W.apply(null,arguments)}function Ve(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Tt(){this.s=this.s,this.o=this.o}var Fa=0;Tt.prototype.s=!1;Tt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Fa!=0)&&_a(this)};Tt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Is(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function gi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(gn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var Pa=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Ye,t),T.removeEventListener("test",Ye,t)}catch{}return e}();function Je(e){return/^[\s\xa0]*$/.test(e)}var mi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Bn(e,t){return e<t?-1:e>t?1:0}function mn(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function rt(e){return mn().indexOf(e)!=-1}function Ss(e){return Ss[" "](e),e}Ss[" "]=Ye;function Va(e){var t=qa;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Ua=rt("Opera"),Vt=rt("Trident")||rt("MSIE"),or=rt("Edge"),Zn=or||Vt,ar=rt("Gecko")&&!(mn().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),$a=mn().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function ur(){var e=T.document;return e?e.documentMode:void 0}var Ze;t:{var jn="",Kn=function(){var e=mn();if(ar)return/rv:([^\);]+)(\)|;)/.exec(e);if(or)return/Edge\/([\d\.]+)/.exec(e);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if($a)return/WebKit\/(\S+)/.exec(e);if(Ua)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Kn&&(jn=Kn?Kn[1]:""),Vt){var zn=ur();if(zn!=null&&zn>parseFloat(jn)){Ze=String(zn);break t}}Ze=jn}var qa={};function Ba(){return Va(function(){let e=0;const t=mi(String(Ze)).split("."),n=mi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Bn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Bn(i[2].length==0,r[2].length==0)||Bn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var ts;if(T.document&&Vt){var pi=ur();ts=pi||parseInt(Ze,10)||void 0}else ts=void 0;var ja=ts;function le(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ar){t:{try{Ss(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ka[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&le.X.h.call(this)}}K(le,X);var Ka={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),za=0;function Ga(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++za,this.ba=this.ea=!1}function pn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Cs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function cr(e){const t={};for(const n in e)t[n]=e[n];return t}const yi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<yi.length;r++)n=yi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function yn(e){this.src=e,this.g={},this.h=0}yn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ns(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Ga(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function es(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=rr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ns(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var As="closure_lm_"+(1e6*Math.random()|0),Gn={};function lr(e,t,n,s,i){if(s&&s.once)return fr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)lr(e,t[r],n,s,i);return null}return n=Ns(n),e&&e[Ce]?e.N(t,n,Se(s)?!!s.capture:!!s,i):dr(e,t,n,!1,s,i)}function dr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Se(i)?!!i.capture:!!i,a=Ds(e);if(a||(e[As]=a=new yn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Qa(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Pa||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(mr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qa(){function e(n){return t.call(e.src,e.listener,n)}const t=Ha;return e}function fr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)fr(e,t[r],n,s,i);return null}return n=Ns(n),e&&e[Ce]?e.O(t,n,Se(s)?!!s.capture:!!s,i):dr(e,t,n,!0,s,i)}function gr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)gr(e,t[r],n,s,i);else s=Se(s)?!!s.capture:!!s,n=Ns(n),e&&e[Ce]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ns(r,n,s,i),-1<n&&(pn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ds(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ns(t,n,s,i)),(n=-1<e?t[e]:null)&&ks(n))}function ks(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Ce])es(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(mr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ds(t))?(es(n,e),n.h==0&&(n.src=null,t[As]=null)):pn(e)}}}function mr(e){return e in Gn?Gn[e]:Gn[e]="on"+e}function Ha(e,t){if(e.ba)e=!0;else{t=new le(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&ks(e),e=n.call(s,t)}return e}function Ds(e){return e=e[As],e instanceof yn?e:null}var Qn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ns(e){return typeof e=="function"?e:(e[Qn]||(e[Qn]=function(t){return e.handleEvent(t)}),e[Qn])}function q(){Tt.call(this),this.i=new yn(this),this.P=this,this.I=null}K(q,Tt);q.prototype[Ce]=!0;q.prototype.removeEventListener=function(e,t,n,s){gr(this,e,t,n,s)};function j(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var i=t;t=new X(s,e),hr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ue(o,s,!0,t)&&i}if(o=t.g=e,i=Ue(o,s,!0,t)&&i,i=Ue(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ue(o,s,!1,t)&&i}q.prototype.M=function(){if(q.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)pn(n[s]);delete e.g[t],e.h--}}this.I=null};q.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ue(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&es(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Rs=T.JSON.stringify;function Wa(){var e=vr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Xa{constructor(){this.h=this.g=null}add(t,n){const s=pr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var pr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ya,e=>e.reset());class Ya{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ja(e){T.setTimeout(()=>{throw e},0)}function yr(e,t){ss||Za(),is||(ss(),is=!0),vr.add(e,t)}var ss;function Za(){var e=T.Promise.resolve(void 0);ss=function(){e.then(tu)}}var is=!1,vr=new Xa;function tu(){for(var e;e=Wa();){try{e.h.call(e.g)}catch(n){Ja(n)}var t=pr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}is=!1}function vn(e,t){q.call(this),this.h=e||1,this.g=t||T,this.j=W(this.lb,this),this.l=Date.now()}K(vn,q);p=vn.prototype;p.ca=!1;p.R=null;p.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),j(this,"tick"),this.ca&&(bs(this),this.start()))}};p.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bs(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}p.M=function(){vn.X.M.call(this),bs(this),delete this.g};function xs(e,t,n){if(typeof e=="function")n&&(e=W(e,n));else if(e&&typeof e.handleEvent=="function")e=W(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function wr(e){e.g=xs(()=>{e.g=null,e.i&&(e.i=!1,wr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class eu extends Tt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:wr(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function de(e){Tt.call(this),this.h=e,this.g={}}K(de,Tt);var vi=[];function Er(e,t,n,s){Array.isArray(n)||(n&&(vi[0]=n.toString()),n=vi);for(var i=0;i<n.length;i++){var r=lr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Tr(e){Cs(e.g,function(t,n){this.g.hasOwnProperty(n)&&ks(t)},e),e.g={}}de.prototype.M=function(){de.X.M.call(this),Tr(this)};de.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wn(){this.g=!0}wn.prototype.Aa=function(){this.g=!1};function nu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function su(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Ot(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ru(e,n)+(s?" "+s:"")})}function iu(e,t){e.info(function(){return"TIMEOUT: "+t})}wn.prototype.info=function(){};function ru(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Rs(n)}catch{return t}}var bt={},wi=null;function En(){return wi=wi||new q}bt.Pa="serverreachability";function Ir(e){X.call(this,bt.Pa,e)}K(Ir,X);function fe(e){const t=En();j(t,new Ir(t))}bt.STAT_EVENT="statevent";function Sr(e,t){X.call(this,bt.STAT_EVENT,e),this.stat=t}K(Sr,X);function Z(e){const t=En();j(t,new Sr(t,e))}bt.Qa="timingevent";function Cr(e,t){X.call(this,bt.Qa,e),this.size=t}K(Cr,X);function Ae(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Tn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ar={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _s(){}_s.prototype.h=null;function Ei(e){return e.h||(e.h=e.i())}function kr(){}var ke={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ls(){X.call(this,"d")}K(Ls,X);function Ms(){X.call(this,"c")}K(Ms,X);var rs;function In(){}K(In,_s);In.prototype.g=function(){return new XMLHttpRequest};In.prototype.i=function(){return{}};rs=new In;function De(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new de(this),this.O=ou,e=Zn?125:void 0,this.T=new vn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Dr}function Dr(){this.i=null,this.g="",this.h=!1}var ou=45e3,os={},tn={};p=De.prototype;p.setTimeout=function(e){this.O=e};function as(e,t,n){e.K=1,e.v=Cn(dt(t)),e.s=n,e.P=!0,Nr(e,null)}function Nr(e,t){e.F=Date.now(),Ne(e),e.A=dt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Fr(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Dr,e.g=so(e.l,n?t:null,!e.s),0<e.N&&(e.L=new eu(W(e.La,e,e.g),e.N)),Er(e.S,e.g,"readystatechange",e.ib),t=e.H?cr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),fe(),nu(e.j,e.u,e.A,e.m,e.U,e.s)}p.ib=function(e){e=e.target;const t=this.L;t&&ht(e)==3?t.l():this.La(e)};p.La=function(e){try{if(e==this.g)t:{const h=ht(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||Zn||this.g&&(this.h.h||this.g.fa()||Ci(this.g)))){this.I||h!=4||t==7||(t==8||0>=f?fe(3):fe(2)),Sn(this);var n=this.g.aa();this.Y=n;e:if(Rr(this)){var s=Ci(this.g);e="";var i=s.length,r=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){St(this),ie(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,su(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Je(a)){var c=a;break e}}c=null}if(n=c)Ot(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,us(this,n);else{this.i=!1,this.o=3,Z(12),St(this),ie(this);break t}}this.P?(br(this,h,o),Zn&&this.i&&h==3&&(Er(this.S,this.T,"tick",this.hb),this.T.start())):(Ot(this.j,this.m,o,null),us(this,o)),h==4&&St(this),this.i&&!this.I&&(h==4?Zr(this.l,this):(this.i=!1,Ne(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),St(this),ie(this)}}}catch{}finally{}};function Rr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function br(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=au(e,n),i==tn){t==4&&(e.o=4,Z(14),s=!1),Ot(e.j,e.m,null,"[Incomplete Response]");break}else if(i==os){e.o=4,Z(15),Ot(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Ot(e.j,e.m,i,null),us(e,i);Rr(e)&&i!=tn&&i!=os&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qs(t),t.K=!0,Z(11))):(Ot(e.j,e.m,n,"[Invalid Chunked Response]"),St(e),ie(e))}p.hb=function(){if(this.g){var e=ht(this.g),t=this.g.fa();this.C<t.length&&(Sn(this),br(this,e,t),this.i&&e!=4&&Ne(this))}};function au(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?tn:(n=Number(t.substring(n,s)),isNaN(n)?os:(s+=1,s+n>t.length?tn:(t=t.substr(s,n),e.C=s+n,t)))}p.cancel=function(){this.I=!0,St(this)};function Ne(e){e.V=Date.now()+e.O,xr(e,e.O)}function xr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ae(W(e.gb,e),t)}function Sn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}p.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(iu(this.j,this.A),this.K!=2&&(fe(),Z(17)),St(this),this.o=2,ie(this)):xr(this,this.V-e)};function ie(e){e.l.G==0||e.I||Zr(e.l,e)}function St(e){Sn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,bs(e.T),Tr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function us(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||cs(n.h,e))){if(!e.J&&cs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)sn(n),Dn(n);else break t;$s(n),Z(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ae(W(n.cb,n),6e3));if(1>=Ur(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ct(n,11)}else if((e.J||n.g==e)&&sn(n),!Je(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const k=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(k){var r=s.h;r.g||k.indexOf("spdy")==-1&&k.indexOf("quic")==-1&&k.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Os(r,r.h),r.h=null))}if(s.D){const C=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.za=C,x(s.F,s.D,C))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=no(s,s.H?s.ka:null,s.V),o.J){$r(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(Sn(a),Ne(a)),s.g=o}else Yr(s);0<n.i.length&&Nn(n)}else c[0]!="stop"&&c[0]!="close"||Ct(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ct(n,7):Us(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}fe(4)}catch{}}function uu(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(gn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function cu(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(gn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function _r(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(gn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=cu(e),s=uu(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Lr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function kt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof kt){this.h=t!==void 0?t:e.h,en(this,e.j),this.s=e.s,this.g=e.g,nn(this,e.m),this.l=e.l,t=e.i;var n=new ge;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ti(this,n),this.o=e.o}else e&&(n=String(e).match(Lr))?(this.h=!!t,en(this,n[1]||"",!0),this.s=ee(n[2]||""),this.g=ee(n[3]||"",!0),nn(this,n[4]),this.l=ee(n[5]||"",!0),Ti(this,n[6]||"",!0),this.o=ee(n[7]||"")):(this.h=!!t,this.i=new ge(null,this.h))}kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ne(t,Ii,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ne(t,Ii,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ne(n,n.charAt(0)=="/"?fu:du,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ne(n,mu)),e.join("")};function dt(e){return new kt(e)}function en(e,t,n){e.j=n?ee(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ti(e,t,n){t instanceof ge?(e.i=t,pu(e.i,e.h)):(n||(t=ne(t,gu)),e.i=new ge(t,e.h))}function x(e,t,n){e.i.set(t,n)}function Cn(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ee(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ne(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,lu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function lu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ii=/[#\/\?@]/g,du=/[#\?:]/g,fu=/[#\?]/g,gu=/[#\?@]/g,mu=/#/g;function ge(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function It(e){e.g||(e.g=new Map,e.h=0,e.i&&hu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=ge.prototype;p.add=function(e,t){It(this),this.i=null,e=Gt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Mr(e,t){It(e),t=Gt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Or(e,t){return It(e),t=Gt(e,t),e.g.has(t)}p.forEach=function(e,t){It(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};p.oa=function(){It(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};p.W=function(e){It(this);let t=[];if(typeof e=="string")Or(this,e)&&(t=t.concat(this.g.get(Gt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return It(this),this.i=null,e=Gt(this,e),Or(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Fr(e,t,n){Mr(e,t),0<n.length&&(e.i=null,e.g.set(Gt(e,t),Is(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Gt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function pu(e,t){t&&!e.j&&(It(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Mr(this,s),Fr(this,i,n))},e)),e.j=t}var yu=class{constructor(t,n){this.h=t,this.g=n}};function Pr(e){this.l=e||vu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ga&&T.g.Ga()&&T.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vu=10;function Vr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ur(e){return e.h?1:e.g?e.g.size:0}function cs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Os(e,t){e.g?e.g.add(t):e.h=t}function $r(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Pr.prototype.cancel=function(){if(this.i=qr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function qr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Is(e.i)}function Fs(){}Fs.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Fs.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function wu(){this.g=new Fs}function Eu(e,t,n){const s=n||"";try{_r(e,function(i,r){let o=i;Se(i)&&(o=Rs(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Tu(e,t){const n=new wn;if(T.Image){const s=new Image;s.onload=Ve($e,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ve($e,n,s,"TestLoadImage: error",!1,t),s.onabort=Ve($e,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ve($e,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function $e(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Re(e){this.l=e.ac||null,this.j=e.jb||!1}K(Re,_s);Re.prototype.g=function(){return new An(this.l,this.j)};Re.prototype.i=function(e){return function(){return e}}({});function An(e,t){q.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ps,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(An,q);var Ps=0;p=An.prototype;p.open=function(e,t){if(this.readyState!=Ps)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,me(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,be(this)),this.readyState=Ps};p.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,me(this)),this.g&&(this.readyState=3,me(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Br(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Br(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}p.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?be(this):me(this),this.readyState==3&&Br(this)}};p.Va=function(e){this.g&&(this.response=this.responseText=e,be(this))};p.Ua=function(e){this.g&&(this.response=e,be(this))};p.ga=function(){this.g&&be(this)};function be(e){e.readyState=4,e.l=null,e.j=null,e.A=null,me(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function me(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(An.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Iu=T.JSON.parse;function L(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jr,this.K=this.L=!1}K(L,q);var jr="",Su=/^https?$/i,Cu=["POST","PUT"];p=L.prototype;p.Ka=function(e){this.L=e};p.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():rs.g(),this.C=this.u?Ei(this.u):Ei(rs),this.g.onreadystatechange=W(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Si(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=T.FormData&&e instanceof T.FormData,!(0<=rr(Cu,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gr(this),0<this.B&&((this.K=Au(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.qa,this)):this.A=xs(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Si(this,r)}};function Au(e){return Vt&&Ba()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.qa=function(){typeof Ts<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j(this,"timeout"),this.abort(8))};function Si(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Kr(e),kn(e)}function Kr(e){e.D||(e.D=!0,j(e,"complete"),j(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,j(this,"complete"),j(this,"abort"),kn(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kn(this,!0)),L.X.M.call(this)};p.Ha=function(){this.s||(this.F||this.v||this.l?zr(this):this.fb())};p.fb=function(){zr(this)};function zr(e){if(e.h&&typeof Ts<"u"&&(!e.C[1]||ht(e)!=4||e.aa()!=2)){if(e.v&&ht(e)==4)xs(e.Ha,0,e);else if(j(e,"readystatechange"),ht(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Lr)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!Su.test(i?i.toLowerCase():"")}n=s}if(n)j(e,"complete"),j(e,"success");else{e.m=6;try{var o=2<ht(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Kr(e)}}finally{kn(e)}}}}function kn(e,t){if(e.g){Gr(e);const n=e.g,s=e.C[0]?Ye:null;e.g=null,e.C=null,t||j(e,"ready");try{n.onreadystatechange=s}catch{}}}function Gr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ht(e){return e.g?e.g.readyState:0}p.aa=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};p.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Iu(t)}};function Ci(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case jr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}p.Ea=function(){return this.m};p.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qr(e){let t="";return Cs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Vs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Qr(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function te(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hr(e){this.Ca=0,this.i=[],this.j=new wn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=te("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=te("baseRetryDelayMs",5e3,e),this.bb=te("retryDelaySeedMs",1e4,e),this.$a=te("forwardChannelMaxRetries",2,e),this.ta=te("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Pr(e&&e.concurrentRequestLimit),this.Fa=new wu,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}p=Hr.prototype;p.ma=8;p.G=1;function Us(e){if(Wr(e),e.G==3){var t=e.U++,n=dt(e.F);x(n,"SID",e.I),x(n,"RID",t),x(n,"TYPE","terminate"),xe(e,n),t=new De(e,e.j,t,void 0),t.K=2,t.v=Cn(dt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=so(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ne(t)}eo(e)}function Dn(e){e.g&&(qs(e),e.g.cancel(),e.g=null)}function Wr(e){Dn(e),e.u&&(T.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Nn(e){Vr(e.h)||e.m||(e.m=!0,yr(e.Ja,e),e.C=0)}function ku(e,t){return Ur(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ae(W(e.Ja,e,t),to(e,e.C)),e.C++,!0)}p.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new De(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=cr(r),hr(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Xr(this,i,t),n=dt(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),xe(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Qr(r)))+"&"+t:this.o&&Vs(n,this.o,r)),Os(this.h,i),this.Ya&&x(n,"TYPE","init"),this.O?(x(n,"$req",t),x(n,"SID","null"),i.Z=!0,as(i,n,null)):as(i,n,t),this.G=2}}else this.G==3&&(e?Ai(this,e):this.i.length==0||Vr(this.h)||Ai(this))};function Ai(e,t){var n;t?n=t.m:n=e.U++;const s=dt(e.F);x(s,"SID",e.I),x(s,"RID",n),x(s,"AID",e.T),xe(e,s),e.o&&e.s&&Vs(s,e.o,e.s),n=new De(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Xr(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Os(e.h,n),as(n,s,t)}function xe(e,t){e.ia&&Cs(e.ia,function(n,s){x(t,s,n)}),e.l&&_r({},function(n,s){x(t,s,n)})}function Xr(e,t,n){n=Math.min(e.i.length,n);var s=e.l?W(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const h=i[u].g;if(c-=r,0>c)r=Math.max(0,i[u].h-100),a=!1;else try{Eu(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Yr(e){e.g||e.u||(e.Z=1,yr(e.Ia,e),e.A=0)}function $s(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ae(W(e.Ia,e),to(e,e.A)),e.A++,!0)}p.Ia=function(){if(this.u=null,Jr(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ae(W(this.eb,this),e)}};p.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Z(10),Dn(this),Jr(this))};function qs(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Jr(e){e.g=new De(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=dt(e.sa);x(t,"RID","rpc"),x(t,"SID",e.I),x(t,"CI",e.L?"0":"1"),x(t,"AID",e.T),x(t,"TYPE","xmlhttp"),xe(e,t),e.o&&e.s&&Vs(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Cn(dt(t)),n.s=null,n.P=!0,Nr(n,e)}p.cb=function(){this.v!=null&&(this.v=null,Dn(this),$s(this),Z(19))};function sn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Zr(e,t){var n=null;if(e.g==t){sn(e),qs(e),e.g=null;var s=2}else if(cs(e.h,t))n=t.D,$r(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=En(),j(s,new Cr(s,n)),Nn(e)}else Yr(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&ku(e,t)||s==2&&$s(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Ct(e,5);break;case 4:Ct(e,10);break;case 3:Ct(e,6);break;default:Ct(e,2)}}}function to(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ct(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=W(e.kb,e);n||(n=new kt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||en(n,"https"),Cn(n)),Tu(n.toString(),s)}else Z(2);e.G=0,e.l&&e.l.va(t),eo(e),Wr(e)}p.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function eo(e){if(e.G=0,e.la=[],e.l){const t=qr(e.h);(t.length!=0||e.i.length!=0)&&(gi(e.la,t),gi(e.la,e.i),e.h.i.length=0,Is(e.i),e.i.length=0),e.l.ua()}}function no(e,t,n){var s=n instanceof kt?dt(n):new kt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),nn(s,s.m);else{var i=T.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new kt(null,void 0);s&&en(r,s),t&&(r.g=t),i&&nn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&x(s,n,t),x(s,"VER",e.ma),xe(e,s),s}function so(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new L(new Re({jb:!0})):new L(e.ra),t.Ka(e.H),t}function io(){}p=io.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Ra=function(){};function rn(){if(Vt&&!(10<=Number(ja)))throw Error("Environmental error: no available transport.")}rn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){q.call(this),this.g=new Hr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Je(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Je(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Qt(this)}K(et,q);et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Z(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=no(e,null,e.V),Nn(e)};et.prototype.close=function(){Us(this.g)};et.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Rs(e),e=n);t.i.push(new yu(t.ab++,e)),t.G==3&&Nn(t)};et.prototype.M=function(){this.g.l=null,delete this.j,Us(this.g),delete this.g,et.X.M.call(this)};function ro(e){Ls.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(ro,Ls);function oo(){Ms.call(this),this.status=1}K(oo,Ms);function Qt(e){this.g=e}K(Qt,io);Qt.prototype.xa=function(){j(this.g,"a")};Qt.prototype.wa=function(e){j(this.g,new ro(e))};Qt.prototype.va=function(e){j(this.g,new oo)};Qt.prototype.ua=function(){j(this.g,"b")};rn.prototype.createWebChannel=rn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;Tn.NO_ERROR=0;Tn.TIMEOUT=8;Tn.HTTP_ERROR=6;Ar.COMPLETE="complete";kr.EventType=ke;ke.OPEN="a";ke.CLOSE="b";ke.ERROR="c";ke.MESSAGE="d";q.prototype.listen=q.prototype.N;L.prototype.listenOnce=L.prototype.O;L.prototype.getLastError=L.prototype.Oa;L.prototype.getLastErrorCode=L.prototype.Ea;L.prototype.getStatus=L.prototype.aa;L.prototype.getResponseJson=L.prototype.Sa;L.prototype.getResponseText=L.prototype.fa;L.prototype.send=L.prototype.da;L.prototype.setWithCredentials=L.prototype.Ka;var Du=function(){return new rn},Nu=function(){return En()},Hn=Tn,Ru=Ar,bu=bt,ki={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},xu=Re,qe=kr,_u=L;const Di="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new ba("@firebase/firestore");function Ni(){return Nt.logLevel}function y(e,...t){if(Nt.logLevel<=he.DEBUG){const n=t.map(Bs);Nt.debug(`Firestore (${Ht}): ${e}`,...n)}}function ft(e,...t){if(Nt.logLevel<=he.ERROR){const n=t.map(Bs);Nt.error(`Firestore (${Ht}): ${e}`,...n)}}function on(e,...t){if(Nt.logLevel<=he.WARN){const n=t.map(Bs);Nt.warn(`Firestore (${Ht}): ${e}`,...n)}}function Bs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e="Unexpected state"){const t=`FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: `+e;throw ft(t),new Error(t)}function b(e,t){e||E()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Ca{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Lu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class Mu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ou{constructor(t){this.t=t,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new pt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new pt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(b(typeof s.accessToken=="string"),new ao(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(t===null||typeof t=="string"),new G(t)}}class Fu{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=G.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Pu{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Fu(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uu{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(b(typeof n.token=="string"),this.T=n.token,new Vu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=$u(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function Ut(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(l.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(l.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(l.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(l.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new P(0,0))}static max(){return new I(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,n,s){n===void 0?n=0:n>t.length&&E(),s===void 0?s=t.length-n:s>t.length-n&&E(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return pe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof pe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class _ extends pe{construct(t,n,s){return new _(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(l.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new _(n)}static emptyPath(){return new _([])}}const qu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends pe{construct(t,n,s){return new H(t,n,s)}static isValidIdentifier(t){return qu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(l.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(l.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(l.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(l.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(n)}static emptyPath(){return new H([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(_.fromString(t))}static fromName(t){return new v(_.fromString(t).popFirst(5))}static empty(){return new v(_.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return _.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new _(t.slice()))}}function Bu(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=I.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new vt(i,v.empty(),t)}function ju(e){return new vt(e.readTime,e.key,-1)}class vt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new vt(I.min(),v.empty(),-1)}static max(){return new vt(I.max(),v.empty(),-1)}}function Ku(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e){if(e.code!==l.FAILED_PRECONDITION||e.message!==zu)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new d((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new d((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Le(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class js{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}js.ct=-1;function Rn(e){return e==null}function an(e){return e===0&&1/e==-1/0}function Qu(e){return typeof e=="number"&&Number.isInteger(e)&&!an(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Wt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function co(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Be(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Be(this.root,t,this.comparator,!1)}getReverseIterator(){return new Be(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Be(this.root,t,this.comparator,!0)}}class Be{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??B.RED,this.left=i??B.EMPTY,this.right=r??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bi(this.data.getIterator())}getIteratorFrom(t){return new bi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof V)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new V(this.comparator);return n.data=t,n}}class bi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.fields=t,t.sort(H.comparator)}static empty(){return new it([])}unionWith(t){let n=new V(H.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new it(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ut(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hu("Invalid base64 string: "+i):i}}(t);return new Y(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new Y(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Y.EMPTY_BYTE_STRING=new Y("");const Wu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(e){if(b(!!e),typeof e=="string"){let t=0;const n=Wu.exec(e);if(b(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:O(e.seconds),nanos:O(e.nanos)}}function O(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function $t(e){return typeof e=="string"?Y.fromBase64String(e):Y.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lo(e){const t=e.mapValue.fields.__previous_value__;return ho(t)?lo(t):t}function ye(e){const t=wt(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class ve{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ve("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ve&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ho(e)?4:Yu(e)?9007199254740991:10:E()}function at(e,t){if(e===t)return!0;const n=Rt(e);if(n!==Rt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ye(e).isEqual(ye(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=wt(s.timestampValue),o=wt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return $t(s.bytesValue).isEqual($t(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return O(s.geoPointValue.latitude)===O(i.geoPointValue.latitude)&&O(s.geoPointValue.longitude)===O(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return O(s.integerValue)===O(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=O(s.doubleValue),o=O(i.doubleValue);return r===o?an(r)===an(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Ut(e.arrayValue.values||[],t.arrayValue.values||[],at);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ri(r)!==Ri(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!at(r[a],o[a])))return!1;return!0}(e,t);default:return E()}}function we(e,t){return(e.values||[]).find(n=>at(n,t))!==void 0}function qt(e,t){if(e===t)return 0;const n=Rt(e),s=Rt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=O(i.integerValue||i.doubleValue),a=O(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return xi(e.timestampValue,t.timestampValue);case 4:return xi(ye(e),ye(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(i,r){const o=$t(i),a=$t(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=N(o[u],a[u]);if(c!==0)return c}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=N(O(i.latitude),O(r.latitude));return o!==0?o:N(O(i.longitude),O(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=qt(o[u],a[u]);if(c)return c}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===je.mapValue&&r===je.mapValue)return 0;if(i===je.mapValue)return 1;if(r===je.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=N(a[h],c[h]);if(f!==0)return f;const g=qt(o[a[h]],u[c[h]]);if(g!==0)return g}return N(a.length,c.length)}(e.mapValue,t.mapValue);default:throw E()}}function xi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=wt(e),s=wt(t),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function Bt(e){return hs(e)}function hs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=wt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?$t(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=hs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${hs(s.fields[a])}`;return r+"}"}(e.mapValue):E();var t,n}function ls(e){return!!e&&"integerValue"in e}function Ks(e){return!!e&&"arrayValue"in e}function _i(e){return!!e&&"nullValue"in e}function Li(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qe(e){return!!e&&"mapValue"in e}function re(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Wt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=re(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=re(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.value=t}static empty(){return new nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Qe(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(n)}setAll(t){let n=H.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=re(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Qe(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Qe(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Wt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new nt(re(this.value))}}function fo(e){const t=[];return Wt(e.fields,(n,s)=>{const i=new H([n]);if(Qe(s)){const r=fo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new it(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Q(t,0,I.min(),I.min(),I.min(),nt.empty(),0)}static newFoundDocument(t,n,s,i){return new Q(t,1,n,I.min(),s,i,0)}static newNoDocument(t,n){return new Q(t,2,n,I.min(),I.min(),nt.empty(),0)}static newUnknownDocument(t,n){return new Q(t,3,n,I.min(),I.min(),nt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class un{constructor(t,n){this.position=t,this.inclusive=n}}function Mi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=qt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!at(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class oe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ju(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class go{}class F extends go{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new tc(t,n,s):n==="array-contains"?new sc(t,s):n==="in"?new ic(t,s):n==="not-in"?new rc(t,s):n==="array-contains-any"?new oc(t,s):new F(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new ec(t,s):new nc(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qt(n,this.value)):n!==null&&Rt(this.value)===Rt(n)&&this.matchesComparison(qt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ut extends go{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new ut(t,n)}matches(t){return mo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function mo(e){return e.op==="and"}function po(e){return Zu(e)&&mo(e)}function Zu(e){for(const t of e.filters)if(t instanceof ut)return!1;return!0}function ds(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+Bt(e.value);if(po(e))return e.filters.map(t=>ds(t)).join(",");{const t=e.filters.map(n=>ds(n)).join(",");return`${e.op}(${t})`}}function yo(e,t){return e instanceof F?function(n,s){return s instanceof F&&n.op===s.op&&n.field.isEqual(s.field)&&at(n.value,s.value)}(e,t):e instanceof ut?function(n,s){return s instanceof ut&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&yo(r,s.filters[o]),!0):!1}(e,t):void E()}function vo(e){return e instanceof F?function(t){return`${t.field.canonicalString()} ${t.op} ${Bt(t.value)}`}(e):e instanceof ut?function(t){return t.op.toString()+" {"+t.getFilters().map(vo).join(" ,")+"}"}(e):"Filter"}class tc extends F{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.matchesComparison(n)}}class ec extends F{constructor(t,n){super(t,"in",n),this.keys=wo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class nc extends F{constructor(t,n){super(t,"not-in",n),this.keys=wo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function wo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class sc extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ks(n)&&we(n.arrayValue,this.value)}}class ic extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&we(this.value.arrayValue,n)}}class rc extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(we(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!we(this.value.arrayValue,n)}}class oc extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ks(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>we(this.value.arrayValue,s))}}/**
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
 */class ac{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Fi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new ac(e,t,n,s,i,r,o)}function zs(e){const t=S(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>ds(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Rn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Bt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Bt(s)).join(",")),t.ft=n}return t.ft}function Gs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ju(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Oi(e.startAt,t.startAt)&&Oi(e.endAt,t.endAt)}function fs(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this.wt=null,this.startAt,this.endAt}}function uc(e,t,n,s,i,r,o,a){return new bn(e,t,n,s,i,r,o,a)}function Eo(e){return new bn(e)}function Pi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function cc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function hc(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function lc(e){return e.collectionGroup!==null}function Ft(e){const t=S(e);if(t.dt===null){t.dt=[];const n=hc(t),s=cc(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new oe(n)),t.dt.push(new oe(H.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new oe(H.keyField(),r))}}}return t.dt}function gt(e){const t=S(e);if(!t.wt)if(t.limitType==="F")t.wt=Fi(t.path,t.collectionGroup,Ft(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Ft(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new oe(r.field,o))}const s=t.endAt?new un(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new un(t.startAt.position,t.startAt.inclusive):null;t.wt=Fi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.wt}function gs(e,t,n){return new bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xn(e,t){return Gs(gt(e),gt(t))&&e.limitType===t.limitType}function To(e){return`${zs(gt(e))}|lt:${e.limitType}`}function ms(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>vo(s)).join(", ")}]`),Rn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Bt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Bt(s)).join(",")),`Target(${n})`}(gt(e))}; limitType=${e.limitType})`}function _n(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Ft(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Mi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ft(n),s)||n.endAt&&!function(i,r,o){const a=Mi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ft(n),s))}(e,t)}function dc(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Io(e){return(t,n)=>{let s=!1;for(const i of Ft(e)){const r=fc(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function fc(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?qt(a,u):E()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Wt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return co(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new U(v.comparator);function mt(){return gc}const So=new U(v.comparator);function se(...e){let t=So;for(const n of e)t=t.insert(n.key,n);return t}function Co(e){let t=So;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function At(){return ae()}function Ao(){return ae()}function ae(){return new Xt(e=>e.toString(),(e,t)=>e.isEqual(t))}const mc=new U(v.comparator),pc=new V(v.comparator);function A(...e){let t=pc;for(const n of e)t=t.add(n);return t}const yc=new V(N);function ko(){return yc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:an(t)?"-0":t}}function No(e){return{integerValue:""+e}}function vc(e,t){return Qu(t)?No(t):Do(e,t)}/**
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
 */class Ln{constructor(){this._=void 0}}function wc(e,t,n){return e instanceof cn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Ee?bo(e,t):e instanceof Te?xo(e,t):function(s,i){const r=Ro(s,i),o=Vi(r)+Vi(s._t);return ls(r)&&ls(s._t)?No(o):Do(s.serializer,o)}(e,t)}function Ec(e,t,n){return e instanceof Ee?bo(e,t):e instanceof Te?xo(e,t):n}function Ro(e,t){return e instanceof hn?ls(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class cn extends Ln{}class Ee extends Ln{constructor(t){super(),this.elements=t}}function bo(e,t){const n=_o(t);for(const s of e.elements)n.some(i=>at(i,s))||n.push(s);return{arrayValue:{values:n}}}class Te extends Ln{constructor(t){super(),this.elements=t}}function xo(e,t){let n=_o(t);for(const s of e.elements)n=n.filter(i=>!at(i,s));return{arrayValue:{values:n}}}class hn extends Ln{constructor(t,n){super(),this.serializer=t,this._t=n}}function Vi(e){return O(e.integerValue||e.doubleValue)}function _o(e){return Ks(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Tc(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ee&&s instanceof Ee||n instanceof Te&&s instanceof Te?Ut(n.elements,s.elements,at):n instanceof hn&&s instanceof hn?at(n._t,s._t):n instanceof cn&&s instanceof cn}(e.transform,t.transform)}class Ic{constructor(t,n){this.version=t,this.transformResults=n}}class lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function He(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Mn{}function Lo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Oo(e.key,lt.none()):new Me(e.key,e.data,lt.none());{const n=e.data,s=nt.empty();let i=new V(H.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new xt(e.key,s,new it(i.toArray()),lt.none())}}function Sc(e,t,n){e instanceof Me?function(s,i,r){const o=s.value.clone(),a=$i(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof xt?function(s,i,r){if(!He(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=$i(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Mo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ue(e,t,n,s){return e instanceof Me?function(i,r,o,a){if(!He(i.precondition,r))return o;const u=i.value.clone(),c=qi(i.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof xt?function(i,r,o,a){if(!He(i.precondition,r))return o;const u=qi(i.fieldTransforms,a,r),c=r.data;return c.setAll(Mo(i)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return He(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Cc(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Ro(s.transform,i||null);r!=null&&(n===null&&(n=nt.empty()),n.set(s.field,r))}return n||null}function Ui(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ut(n,s,(i,r)=>Tc(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Me extends Mn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xt extends Mn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function $i(e,t,n){const s=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Ec(o,a,n[i]))}return s}function qi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,wc(r,o,t))}return s}class Oo extends Mn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ac extends Mn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Sc(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ue(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ue(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Ao();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Lo(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&Ut(this.mutations,t.mutations,(n,s)=>Ui(n,s))&&Ut(this.baseMutations,t.baseMutations,(n,s)=>Ui(n,s))}}class Qs{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){b(t.mutations.length===s.length);let i=mc;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Qs(t,n,s,i)}}/**
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
 */class Dc{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Nc{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,D;function Rc(e){switch(e){default:return E();case l.CANCELLED:case l.UNKNOWN:case l.DEADLINE_EXCEEDED:case l.RESOURCE_EXHAUSTED:case l.INTERNAL:case l.UNAVAILABLE:case l.UNAUTHENTICATED:return!1;case l.INVALID_ARGUMENT:case l.NOT_FOUND:case l.ALREADY_EXISTS:case l.PERMISSION_DENIED:case l.FAILED_PRECONDITION:case l.ABORTED:case l.OUT_OF_RANGE:case l.UNIMPLEMENTED:case l.DATA_LOSS:return!0}}function Fo(e){if(e===void 0)return ft("GRPC error has no .code"),l.UNKNOWN;switch(e){case M.OK:return l.OK;case M.CANCELLED:return l.CANCELLED;case M.UNKNOWN:return l.UNKNOWN;case M.DEADLINE_EXCEEDED:return l.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return l.RESOURCE_EXHAUSTED;case M.INTERNAL:return l.INTERNAL;case M.UNAVAILABLE:return l.UNAVAILABLE;case M.UNAUTHENTICATED:return l.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return l.INVALID_ARGUMENT;case M.NOT_FOUND:return l.NOT_FOUND;case M.ALREADY_EXISTS:return l.ALREADY_EXISTS;case M.PERMISSION_DENIED:return l.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return l.FAILED_PRECONDITION;case M.ABORTED:return l.ABORTED;case M.OUT_OF_RANGE:return l.OUT_OF_RANGE;case M.UNIMPLEMENTED:return l.UNIMPLEMENTED;case M.DATA_LOSS:return l.DATA_LOSS;default:return E()}}(D=M||(M={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Hs{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ke}static getOrCreateInstance(){return Ke===null&&(Ke=new Hs),Ke}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Ke=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Oe.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new On(I.min(),i,ko(),mt(),A())}}class Oe{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Oe(s,n,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n,s,i){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Po{constructor(t,n){this.targetId=t,this.Et=n}}class Vo{constructor(t,n,s=Y.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Bi{constructor(){this.At=0,this.Rt=Ki(),this.vt=Y.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=A(),n=A(),s=A();return this.Rt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:E()}}),new Oe(this.vt,this.bt,t,n,s)}xt(){this.Pt=!1,this.Rt=Ki()}Nt(t,n){this.Pt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class bc{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=mt(),this.qt=ji(),this.Ut=new V(N)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}zt(t){this.forEachTarget(t,n=>{const s=this.jt(n);switch(t.state){case 0:this.Wt(n)&&s.Dt(t.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(t.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:E()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(t){var n;const s=t.targetId,i=t.Et.count,r=this.Yt(s);if(r){const o=r.target;if(fs(o))if(i===0){const a=new v(o.path);this.Qt(s,a,Q.newNoDocument(a,I.min()))}else b(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Hs.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:t.Et.count}))}}}Xt(t){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&fs(a.target)){const u=new v(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,Q.newNoDocument(u,t))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=A();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Yt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(t));const i=new On(t,n,this.Ut,this.Lt,s);return this.Lt=mt(),this.qt=ji(),this.Ut=new V(N),i}Gt(t,n){if(!this.Wt(t))return;const s=this.te(t,n.key)?2:0;this.jt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.Wt(t))return;const i=this.jt(t);this.te(t,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Zt(t){const n=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let n=this.Bt.get(t);return n||(n=new Bi,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new V(N),this.qt=this.qt.insert(t,n)),n}Wt(t){const n=this.Yt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new Bi),this.Ft.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.Ft.getRemoteKeysForTarget(t).has(n)}}function ji(){return new U(v.comparator)}function Ki(){return new U(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_c=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lc=(()=>({and:"AND",or:"OR"}))();class Mc{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ln(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Uo(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Oc(e,t){return ln(e,t.toTimestamp())}function ot(e){return b(!!e),I.fromTimestamp(function(t){const n=wt(t);return new P(n.seconds,n.nanos)}(e))}function Ws(e,t){return function(n){return new _(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function $o(e){const t=_.fromString(e);return b(Ko(t)),t}function ps(e,t){return Ws(e.databaseId,t.path)}function Wn(e,t){const n=$o(t);if(n.get(1)!==e.databaseId.projectId)throw new w(l.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(l.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(qo(n))}function ys(e,t){return Ws(e.databaseId,t)}function Fc(e){const t=$o(e);return t.length===4?_.emptyPath():qo(t)}function vs(e){return new _(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qo(e){return b(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zi(e,t,n){return{name:ps(e,t),fields:n.value.mapValue.fields}}function Pc(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:E()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,c){return u.useProto3Json?(b(c===void 0||typeof c=="string"),Y.fromBase64String(c||"")):(b(c===void 0||c instanceof Uint8Array),Y.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?l.UNKNOWN:Fo(u.code);return new w(c,u.message||"")}(o);n=new Vo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Wn(e,s.document.name),r=ot(s.document.updateTime),o=s.document.createTime?ot(s.document.createTime):I.min(),a=new nt({mapValue:{fields:s.document.fields}}),u=Q.newFoundDocument(i,r,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new We(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Wn(e,s.document),r=s.readTime?ot(s.readTime):I.min(),o=Q.newNoDocument(i,r),a=s.removedTargetIds||[];n=new We([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Wn(e,s.document),r=s.removedTargetIds||[];n=new We([],r,i,null)}else{if(!("filter"in t))return E();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Nc(i),o=s.targetId;n=new Po(o,r)}}return n}function Vc(e,t){let n;if(t instanceof Me)n={update:zi(e,t.key,t.value)};else if(t instanceof Oo)n={delete:ps(e,t.key)};else if(t instanceof xt)n={update:zi(e,t.key,t.data),updateMask:Qc(t.fieldMask)};else{if(!(t instanceof Ac))return E();n={verify:ps(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof cn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ee)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Te)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof hn)return{fieldPath:r.field.canonicalString(),increment:o._t};throw E()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Oc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E()}(e,t.precondition)),n}function Uc(e,t){return e&&e.length>0?(b(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ot(s.updateTime):ot(i);return r.isEqual(I.min())&&(r=ot(i)),new Ic(r,s.transformResults||[])}(n,t))):[]}function $c(e,t){return{documents:[ys(e,t.path)]}}function qc(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ys(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ys(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return jo(ut.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Lt(h.field),direction:Kc(h.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,c){return u.useProto3Json||Rn(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Bc(e){let t=Fc(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){b(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const f=Bo(h);return f instanceof ut&&po(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new oe(Mt(f.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Rn(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(h){const f=!!h.before,g=h.values||[];return new un(g,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,g=h.values||[];return new un(g,f)}(n.endAt)),uc(t,i,o,r,a,"F",u,c)}function jc(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Bo(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Mt(t.unaryFilter.field);return F.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Mt(t.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mt(t.unaryFilter.field);return F.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Mt(t.unaryFilter.field);return F.create(r,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(e):e.fieldFilter!==void 0?function(t){return F.create(Mt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ut.create(t.compositeFilter.filters.map(n=>Bo(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return E()}}(t.compositeFilter.op))}(e):E()}function Kc(e){return xc[e]}function zc(e){return _c[e]}function Gc(e){return Lc[e]}function Lt(e){return{fieldPath:e.canonicalString()}}function Mt(e){return H.fromServerFormat(e.fieldPath)}function jo(e){return e instanceof F?function(t){if(t.op==="=="){if(Li(t.value))return{unaryFilter:{field:Lt(t.field),op:"IS_NAN"}};if(_i(t.value))return{unaryFilter:{field:Lt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Li(t.value))return{unaryFilter:{field:Lt(t.field),op:"IS_NOT_NAN"}};if(_i(t.value))return{unaryFilter:{field:Lt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lt(t.field),op:zc(t.op),value:t.value}}}(e):e instanceof ut?function(t){const n=t.getFilters().map(s=>jo(s));return n.length===1?n[0]:{compositeFilter:{op:Gc(t.op),filters:n}}}(e):E()}function Qc(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ko(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,n,s,i,r=I.min(),o=I.min(),a=Y.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Dt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.se=t}}function Wc(e){const t=Bc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?gs(t,t.limit,"L"):t}/**
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
 */class Xc{constructor(){this.He=new Yc}addToCollectionParentIndex(t,n){return this.He.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(vt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(vt.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Yc{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new V(_.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new V(_.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new jt(0)}static bn(){return new jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.changes=new Xt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zc{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&ue(s.mutation,i,it.empty(),P.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const i=At();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=se();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=At();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=mt();const o=ae(),a=ae();return n.forEach((u,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof xt)?r=r.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ue(h.mutation,c,h.mutation.getFieldMask(),P.now())):o.set(c.key,it.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new Zc(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ae();let i=new U((o,a)=>o-a),r=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||it.empty();h=a.applyToLocalView(c,h),s.set(u,h);const f=(i.get(a.batchId)||A()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=Ao();h.forEach(g=>{if(!r.has(g)){const m=Lo(n.get(g),s.get(g));m!==null&&f.set(g,m),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,f))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):lc(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):d.resolve(At());let a=-1,u=r;return o.next(c=>d.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?d.resolve():this.remoteDocumentCache.getEntry(t,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,u,c,A())).next(h=>({batchId:a,changes:Co(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(s=>{let i=se();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=se();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const u=function(c,h){return new bn(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,Q.newInvalidDocument(c)))});let o=se();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&ue(c.mutation,u,it.empty(),P.now()),_n(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return d.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ot(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Wc(s.bundledQuery),readTime:ot(s.readTime)}}(n)),d.resolve()}}/**
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
 */class nh{constructor(){this.overlays=new U(v.comparator),this.ts=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=At();return d.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.re(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=At(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new U((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=At(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=At(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return d.resolve(a)}re(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Dc(n,s));let r=this.ts.get(n);r===void 0&&(r=A(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.es=new V($.ns),this.ss=new V($.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const s=new $(t,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.us(new $(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}hs(t){const n=new v(new _([])),s=new $(n,t),i=new $(n,t+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new v(new _([])),s=new $(n,t),i=new $(n,t+1);let r=A();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new $(t,0),s=this.es.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ${constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return v.comparator(t.key,n.key)||N(t.ds,n.ds)}static rs(t,n){return N(t.ds,n.ds)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new V($.ns)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kc(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new $(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new $(n,0),i=new $(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new V(N);return n.forEach(i=>{const r=new $(i,0),o=new $(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),d.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new $(new v(r),0);let a=new V(N);return this._s.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.ds)),!0)},o),d.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){b(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return d.forEach(n.mutations,i=>{const r=new $(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this._s=s})}En(t){}containsKey(t,n){const s=new $(n,0),i=this._s.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t){this.Ts=t,this.docs=new U(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():Q.newInvalidDocument(n))}getEntries(t,n){let s=mt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Q.newInvalidDocument(i))}),d.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=mt();const o=n.path,a=new v(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ku(ju(h),s)<=0||(i.has(h.key)||_n(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return d.resolve(r)}getAllFromCollectionGroup(t,n,s,i){E()}Es(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new rh(this)}getSize(t){return d.resolve(this.size)}}class rh extends Jc{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(t,i)):this.Jn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.persistence=t,this.As=new Xt(n=>zs(n),Gs),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Xs,this.targetCount=0,this.bs=jt.vn()}forEachTarget(t,n){return this.As.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),d.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new jt(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.Sn(n),d.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.As.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.vs.os(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.vs.fs(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new js(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new oh(this),this.indexManager=new Xc,this.remoteDocumentCache=function(s){return new ih(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Hc(n),this.xs=new eh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new nh,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ps[t.toKey()];return s||(s=new sh(n,this.referenceDelegate),this.Ps[t.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new uh(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(t,n){return d.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class uh extends Gu{constructor(t){super(),this.currentSequenceNumber=t}}class Ys{constructor(t){this.persistence=t,this.$s=new Xs,this.Ms=null}static Fs(t){return new Ys(t)}get Bs(){if(this.Ms)return this.Ms;throw E()}addReference(t,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),d.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Bs,s=>{const i=v.fromPath(s);return this.Ls(t,i).next(r=>{r||n.removeEntry(i,I.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return d.or([()=>d.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Vi=s,this.Si=i}static Di(t,n){let s=A(),i=A();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Js(t,n.fromCache,s,i)}}/**
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
 */class ch{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ni(t,n).next(r=>r||this.ki(t,n,i,s)).next(r=>r||this.Oi(t,n))}Ni(t,n){if(Pi(n))return d.resolve(null);let s=gt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gs(n,null,"F"),s=gt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=A(...r);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.$i(n,a);return this.Mi(n,c,o,u.readTime)?this.Ni(t,gs(n,null,"F")):this.Fi(t,c,n,u)}))})))}ki(t,n,s,i){return Pi(n)||i.isEqual(I.min())?this.Oi(t,n):this.xi.getDocuments(t,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(t,n):(Ni()<=he.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ms(n)),this.Fi(t,o,n,Bu(i,-1)))})}$i(t,n){let s=new V(Io(t));return n.forEach((i,r)=>{_n(t,r)&&(s=s.add(r))}),s}Mi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(t,n){return Ni()<=he.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ms(n)),this.xi.getDocumentsMatchingQuery(t,n,vt.min())}Fi(t,n,s,i){return this.xi.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n,s,i){this.persistence=t,this.Bi=n,this.serializer=i,this.Li=new U(N),this.qi=new Xt(r=>zs(r),Gs),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(s)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new th(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}function lh(e,t,n,s){return new hh(e,t,n,s)}async function zo(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=A();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function dh(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,f=h.keys();let g=d.resolve();return f.forEach(m=>{g=g.next(()=>c.getEntry(a,m)).next(k=>{const C=u.docVersions.get(m);b(C!==null),k.version.compareTo(C)<0&&(h.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),c.addEntry(k)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=A();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Go(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function fh(e,t){const n=S(e),s=t.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];t.targetChanges.forEach((h,f)=>{const g=i.get(f);if(!g)return;a.push(n.Ds.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Ds.addMatchingKeys(r,h.addedDocuments,f)));let m=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(f)?m=m.withResumeToken(Y.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(f,m),function(k,C,R){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(g,m,h)&&a.push(n.Ds.updateTargetData(r,m))});let u=mt(),c=A();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(gh(r,o,t.documentUpdates).next(h=>{u=h.zi,c=h.ji})),!s.isEqual(I.min())){const h=n.Ds.getLastRemoteSnapshotVersion(r).next(f=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(n.Li=i,r))}function gh(e,t,n){let s=A(),i=A();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=mt();return n.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{zi:o,ji:i}})}function mh(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function ph(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new Dt(t,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function ws(e,t,n){const s=S(e),i=s.Li.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Le(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Li=s.Li.remove(t),s.qi.delete(i.target)}function Gi(e,t,n){const s=S(e);let i=I.min(),r=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=S(a),f=h.qi.get(c);return f!==void 0?d.resolve(h.Li.get(f)):h.Ds.getTargetData(u,c)}(s,o,gt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,t,n?i:I.min(),n?r:A())).next(a=>(yh(s,dc(t),a),{documents:a,Wi:r})))}function yh(e,t,n){let s=e.Ui.get(t)||I.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ui.set(t,s)}class Qi{constructor(){this.activeTargetIds=ko()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vh{constructor(){this.Br=new Qi,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,s){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Qi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class wh{qr(t){}shutdown(){}}/**
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
 */class Hi{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ze=null;function Xn(){return ze===null?ze=268435456+Math.round(2147483648*Math.random()):ze++,"0x"+ze.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="WebChannelConnection";class Ih extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,s,i,r){const o=Xn(),a=this.ao(t,n);y("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.ho(u,i,r),this.lo(t,a,u,s).then(c=>(y("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw on("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(t,n,s,i,r,o){return this.co(t,n,s,i,r)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ht,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ao(t,n){const s=Eh[t];return`${this.ro}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,i){const r=Xn();return new Promise((o,a)=>{const u=new _u;u.setWithCredentials(!0),u.listenOnce(Ru.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Hn.NO_ERROR:const h=u.getResponseJson();y(z,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case Hn.TIMEOUT:y(z,`RPC '${t}' ${r} timed out`),a(new w(l.DEADLINE_EXCEEDED,"Request time out"));break;case Hn.HTTP_ERROR:const f=u.getStatus();if(y(z,`RPC '${t}' ${r} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const k=function(C){const R=C.toLowerCase().replace(/_/g,"-");return Object.values(l).indexOf(R)>=0?R:l.UNKNOWN}(m.status);a(new w(k,m.message))}else a(new w(l.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new w(l.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{y(z,`RPC '${t}' ${r} completed.`)}});const c=JSON.stringify(i);y(z,`RPC '${t}' ${r} sending request:`,i),u.send(n,"POST",c,s,15)})}wo(t,n,s){const i=Xn(),r=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Du(),a=Nu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new xu({})),this.ho(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const c=r.join("");y(z,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let f=!1,g=!1;const m=new Th({Wr:C=>{g?y(z,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(f||(y(z,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),y(z,`RPC '${t}' stream ${i} sending:`,C),h.send(C))},Hr:()=>h.close()}),k=(C,R,J)=>{C.listen(R,tt=>{try{J(tt)}catch(ct){setTimeout(()=>{throw ct},0)}})};return k(h,qe.EventType.OPEN,()=>{g||y(z,`RPC '${t}' stream ${i} transport opened.`)}),k(h,qe.EventType.CLOSE,()=>{g||(g=!0,y(z,`RPC '${t}' stream ${i} transport closed`),m.so())}),k(h,qe.EventType.ERROR,C=>{g||(g=!0,on(z,`RPC '${t}' stream ${i} transport errored:`,C),m.so(new w(l.UNAVAILABLE,"The operation could not be completed")))}),k(h,qe.EventType.MESSAGE,C=>{var R;if(!g){const J=C.data[0];b(!!J);const tt=J,ct=tt.error||((R=tt[0])===null||R===void 0?void 0:R.error);if(ct){y(z,`RPC '${t}' stream ${i} received error:`,ct);const Jt=ct.status;let Zt=function(Ta){const di=M[Ta];if(di!==void 0)return Fo(di)}(Jt),li=ct.message;Zt===void 0&&(Zt=l.INTERNAL,li="Unknown error status: "+Jt+" with message "+ct.message),g=!0,m.so(new w(Zt,li)),h.close()}else y(z,`RPC '${t}' stream ${i} received:`,J),m.io(J)}}),k(a,bu.STAT_EVENT,C=>{C.stat===ki.PROXY?y(z,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===ki.NOPROXY&&y(z,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function Yn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e){return new Mc(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Ws=t,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,n,s,i,r,o,a,u){this.Ws=t,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Qo(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===l.RESOURCE_EXHAUSTED?(ft(n.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===l.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{t(()=>{const i=new w(l.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(t,n){const s=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sh extends Ho{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Co.reset();const n=Pc(this.serializer,t),s=function(i){if(!("targetChange"in i))return I.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?I.min():r.readTime?ot(r.readTime):I.min()}(t);return this.listener.zo(n,s)}jo(t){const n={};n.database=vs(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=fs(a)?{documents:$c(i,a)}:{query:qc(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Uo(i,r.resumeToken):r.snapshotVersion.compareTo(I.min())>0&&(o.readTime=ln(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,t);const s=jc(this.serializer,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=vs(this.serializer),n.removeTarget=t,this.Fo(n)}}class Ch extends Ho{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const n=Uc(t.writeResults,t.commitTime),s=ot(t.commitTime);return this.listener.Zo(s,n)}return b(!t.writeResults||t.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=vs(this.serializer),this.Fo(t)}Yo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Vc(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new w(l.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===l.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(l.UNKNOWN,i.toString())})}fo(t,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===l.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(l.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class kh{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(ft(n),this.ru=!1):y("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{_t(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=S(a);u.du.add(4),await Fe(u),u.mu.set("Unknown"),u.du.delete(4),await Pn(u)}(this))})}),this.mu=new kh(s,i)}}async function Pn(e){if(_t(e))for(const t of e.wu)await t(!0)}async function Fe(e){for(const t of e.wu)await t(!1)}function Wo(e,t){const n=S(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),ei(n)?ti(n):Yt(n).No()&&Zs(n,t))}function Xo(e,t){const n=S(e),s=Yt(n);n.fu.delete(t),s.No()&&Yo(n,t),n.fu.size===0&&(s.No()?s.$o():_t(n)&&n.mu.set("Unknown"))}function Zs(e,t){e.gu.Ot(t.targetId),Yt(e).jo(t)}function Yo(e,t){e.gu.Ot(t),Yt(e).Wo(t)}function ti(e){e.gu=new bc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Yt(e).start(),e.mu.ou()}function ei(e){return _t(e)&&!Yt(e).xo()&&e.fu.size>0}function _t(e){return S(e).du.size===0}function Jo(e){e.gu=void 0}async function Nh(e){e.fu.forEach((t,n)=>{Zs(e,t)})}async function Rh(e,t){Jo(e),ei(e)?(e.mu.au(t),ti(e)):e.mu.set("Unknown")}async function bh(e,t,n){if(e.mu.set("Online"),t instanceof Vo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await dn(e,s)}else if(t instanceof We?e.gu.Kt(t):t instanceof Po?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(I.min()))try{const s=await Go(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(u);c&&i.fu.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.fu.get(a);if(!u)return;i.fu.set(a,u.withResumeToken(Y.EMPTY_BYTE_STRING,u.snapshotVersion)),Yo(i,a);const c=new Dt(u.target,a,1,u.sequenceNumber);Zs(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await dn(e,s)}}async function dn(e,t,n){if(!Le(t))throw t;e.du.add(1),await Fe(e),e.mu.set("Offline"),n||(n=()=>Go(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Pn(e)})}function Zo(e,t){return t().catch(n=>dn(e,n,t))}async function Vn(e){const t=S(e),n=Et(t);let s=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;xh(t);)try{const i=await mh(t.localStore,s);if(i===null){t.lu.length===0&&n.$o();break}s=i.batchId,_h(t,i)}catch(i){await dn(t,i)}ta(t)&&ea(t)}function xh(e){return _t(e)&&e.lu.length<10}function _h(e,t){e.lu.push(t);const n=Et(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function ta(e){return _t(e)&&!Et(e).xo()&&e.lu.length>0}function ea(e){Et(e).start()}async function Lh(e){Et(e).tu()}async function Mh(e){const t=Et(e);for(const n of e.lu)t.Yo(n.mutations)}async function Oh(e,t,n){const s=e.lu.shift(),i=Qs.from(s,t,n);await Zo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Vn(e)}async function Fh(e,t){t&&Et(e).Jo&&await async function(n,s){if(i=s.code,Rc(i)&&i!==l.ABORTED){const r=n.lu.shift();Et(n).Oo(),await Zo(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Vn(n)}var i}(e,t),ta(e)&&ea(e)}async function Wi(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=_t(n);n.du.add(3),await Fe(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Pn(n)}async function Ph(e,t){const n=S(e);t?(n.du.delete(2),await Pn(n)):t||(n.du.add(2),await Fe(n),n.mu.set("Unknown"))}function Yt(e){return e.yu||(e.yu=function(t,n,s){const i=S(t);return i.nu(),new Sh(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Jr:Nh.bind(null,e),Zr:Rh.bind(null,e),zo:bh.bind(null,e)}),e.wu.push(async t=>{t?(e.yu.Oo(),ei(e)?ti(e):e.mu.set("Unknown")):(await e.yu.stop(),Jo(e))})),e.yu}function Et(e){return e.pu||(e.pu=function(t,n,s){const i=S(t);return i.nu(),new Ch(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Jr:Lh.bind(null,e),Zr:Fh.bind(null,e),Xo:Mh.bind(null,e),Zo:Oh.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),await Vn(e)):(await e.pu.stop(),e.lu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ni(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(l.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function si(e,t){if(ft("AsyncQueue",`${t}: ${e}`),Le(e))return new w(l.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=se(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Pt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Pt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Pt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.Iu=new U(v.comparator)}track(t){const n=t.doc.key,s=this.Iu.get(n);s?t.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,t):t.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Iu=this.Iu.remove(n):t.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):E():this.Iu=this.Iu.insert(n,t)}Tu(){const t=[];return this.Iu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Kt{constructor(t,n,s,i,r,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Kt(t,n,Pt.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Eu=void 0,this.listeners=[]}}class Uh{constructor(){this.queries=new Xt(t=>To(t),xn),this.onlineState="Unknown",this.Au=new Set}}async function $h(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Vh),i)try{r.Eu=await n.onListen(s)}catch(o){const a=si(o,`Initialization of query '${ms(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Ru(n.onlineState),r.Eu&&t.vu(r.Eu)&&ii(n)}async function qh(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Bh(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&ii(n)}function jh(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ii(e){e.Au.forEach(t=>{t.next()})}class Kh{constructor(t,n,s){this.query=t,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Kt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),n=!0):this.Du(t,this.onlineState)&&(this.Cu(t),n=!0),this.Vu=t,n}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),n=!0),n}Du(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Su(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(t){t=Kt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t){this.key=t}}class sa{constructor(t){this.key=t}}class zh{constructor(t,n){this.query=t,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=A(),this.mutatedKeys=A(),this.Ku=Io(t),this.Gu=new Pt(this.Ku)}get Qu(){return this.Lu}zu(t,n){const s=n?n.ju:new Xi,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,f)=>{const g=i.get(h),m=_n(this.query,f)?f:null,k=!!g&&this.mutatedKeys.has(g.key),C=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let R=!1;g&&m?g.data.isEqual(m.data)?k!==C&&(s.track({type:3,doc:m}),R=!0):this.Wu(g,m)||(s.track({type:2,doc:m}),R=!0,(u&&this.Ku(m,u)>0||c&&this.Ku(m,c)<0)&&(a=!0)):!g&&m?(s.track({type:0,doc:m}),R=!0):g&&!m&&(s.track({type:1,doc:g}),R=!0,(u||c)&&(a=!0)),R&&(m?(o=o.add(m),r=C?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.ju.Tu();r.sort((c,h)=>function(f,g){const m=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return m(f)-m(g)}(c.type,h.type)||this.Ku(c.doc,h.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,r.length!==0||u?{snapshot:new Kt(this.query,t.Gu,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Xi,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=A(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return t.forEach(s=>{this.Uu.has(s)||n.push(new sa(s))}),this.Uu.forEach(s=>{t.has(s)||n.push(new na(s))}),n}Xu(t){this.Lu=t.Wi,this.Uu=A();const n=this.zu(t.documents);return this.applyChanges(n,!0)}tc(){return Kt.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Gh{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Qh{constructor(t){this.key=t,this.ec=!1}}class Hh{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Xt(a=>To(a),xn),this.ic=new Map,this.rc=new Set,this.oc=new U(v.comparator),this.uc=new Map,this.cc=new Xs,this.ac={},this.hc=new Map,this.lc=jt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Wh(e,t){const n=rl(e);let s,i;const r=n.sc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await ph(n.localStore,gt(t));n.isPrimaryClient&&Wo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Xh(n,t,s,a==="current",o.resumeToken)}return i}async function Xh(e,t,n,s,i){e.dc=(f,g,m)=>async function(k,C,R,J){let tt=C.view.zu(R);tt.Mi&&(tt=await Gi(k.localStore,C.query,!1).then(({documents:Zt})=>C.view.zu(Zt,tt)));const ct=J&&J.targetChanges.get(C.targetId),Jt=C.view.applyChanges(tt,k.isPrimaryClient,ct);return Ji(k,C.targetId,Jt.Yu),Jt.snapshot}(e,f,g,m);const r=await Gi(e.localStore,t,!0),o=new zh(t,r.Wi),a=o.zu(r.documents),u=Oe.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Ji(e,n,c.Yu);const h=new Gh(t,n,o);return e.sc.set(t,h),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),c.snapshot}async function Yh(e,t){const n=S(e),s=n.sc.get(t),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!xn(r,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ws(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xo(n.remoteStore,s.targetId),Es(n,s.targetId)}).catch(_e)):(Es(n,s.targetId),await ws(n.localStore,s.targetId,!0))}async function Jh(e,t,n){const s=ol(e);try{const i=await function(r,o){const a=S(r),u=P.now(),c=o.reduce((g,m)=>g.add(m.key),A());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let m=mt(),k=A();return a.Ki.getEntries(g,c).next(C=>{m=C,m.forEach((R,J)=>{J.isValidDocument()||(k=k.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,m)).next(C=>{h=C;const R=[];for(const J of o){const tt=Cc(J,h.get(J.key).overlayedDocument);tt!=null&&R.push(new xt(J.key,tt,fo(tt.value.mapValue),lt.exists(!0)))}return a.mutationQueue.addMutationBatch(g,u,R,o)}).next(C=>{f=C;const R=C.applyToLocalDocumentSet(h,k);return a.documentOverlayCache.saveOverlays(g,C.batchId,R)})}).then(()=>({batchId:f.batchId,changes:Co(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.ac[r.currentUser.toKey()];u||(u=new U(N)),u=u.insert(o,a),r.ac[r.currentUser.toKey()]=u}(s,i.batchId,n),await Pe(s,i.changes),await Vn(s.remoteStore)}catch(i){const r=si(i,"Failed to persist write");n.reject(r)}}async function ia(e,t){const n=S(e);try{const s=await fh(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(b(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?b(o.ec):i.removedDocuments.size>0&&(b(o.ec),o.ec=!1))}),await Pe(n,s,t)}catch(s){await _e(s)}}function Yi(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Ru(o)&&(u=!0)}),u&&ii(a)}(s.eventManager,t),i.length&&s.nc.zo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Zh(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.uc.get(t),r=i&&i.key;if(r){let o=new U(v.comparator);o=o.insert(r,Q.newNoDocument(r,I.min()));const a=A().add(r),u=new On(I.min(),new Map,new V(N),o,a);await ia(s,u),s.oc=s.oc.remove(r),s.uc.delete(t),ri(s)}else await ws(s.localStore,t,!1).then(()=>Es(s,t,n)).catch(_e)}async function tl(e,t){const n=S(e),s=t.batch.batchId;try{const i=await dh(n.localStore,t);oa(n,s,null),ra(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pe(n,i)}catch(i){await _e(i)}}async function el(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(b(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);oa(s,t,n),ra(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Pe(s,i)}catch(i){await _e(i)}}function ra(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function oa(e,t,n){const s=S(e);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.ac[s.currentUser.toKey()]=i}}function Es(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc.wc(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(s=>{e.cc.containsKey(s)||aa(e,s)})}function aa(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(Xo(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),ri(e))}function Ji(e,t,n){for(const s of n)s instanceof na?(e.cc.addReference(s.key,t),nl(e,s)):s instanceof sa?(y("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||aa(e,s.key)):E()}function nl(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.rc.add(s),ri(e))}function ri(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new v(_.fromString(t)),s=e.lc.next();e.uc.set(s,new Qh(n)),e.oc=e.oc.insert(n,s),Wo(e.remoteStore,new Dt(gt(Eo(n.path)),s,2,js.ct))}}async function Pe(e,t,n){const s=S(e),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,u)=>{o.push(s.dc(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Js.Di(u.targetId,c);r.push(h)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,u){const c=S(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(u,f=>d.forEach(f.Vi,g=>c.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>d.forEach(f.Si,g=>c.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!Le(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const g=c.Li.get(f),m=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(m);c.Li=c.Li.insert(f,k)}}}(s.localStore,r))}async function sl(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await zo(n.localStore,t);n.currentUser=t,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new w(l.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Pe(n,s.Qi)}}function il(e,t){const n=S(e),s=n.uc.get(t);if(s&&s.ec)return A().add(s.key);{let i=A();const r=n.ic.get(t);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function rl(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ia.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=il.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zh.bind(null,t),t.nc.zo=Bh.bind(null,t.eventManager),t.nc.wc=jh.bind(null,t.eventManager),t}function ol(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=el.bind(null,t),t}class Zi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Fn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return lh(this.persistence,new ch,t.initialUser,this.serializer)}createPersistence(t){return new ah(Ys.Fs,this.serializer)}createSharedClientState(t){return new vh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class al{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sl.bind(null,this.syncEngine),await Ph(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Uh}createDatastore(t){const n=Fn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Ih(i));var i;return function(r,o,a,u){return new Ah(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Yi(this.syncEngine,a,0),o=Hi.D()?new Hi:new wh,new Dh(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,c){const h=new Hh(s,i,r,o,a,u);return c&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);y("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Fe(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ul{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):ft("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=G.UNAUTHENTICATED,this.clientId=uo.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(l.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=si(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Jn(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await zo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function tr(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ll(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Wi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Wi(t.remoteStore,r)),e._onlineComponents=t}function hl(e){return e.name==="FirebaseError"?e.code===l.FAILED_PRECONDITION||e.code===l.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function ll(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jn(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!hl(n))throw n;on("Error using user provided cache. Falling back to memory cache: "+n),await Jn(e,new Zi)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Jn(e,new Zi);return e._offlineComponents}async function ua(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await tr(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await tr(e,new al))),e._onlineComponents}function dl(e){return ua(e).then(t=>t.syncEngine)}async function fl(e){const t=await ua(e),n=t.eventManager;return n.onListen=Wh.bind(null,t.syncEngine),n.onUnlisten=Yh.bind(null,t.syncEngine),n}function gl(e,t,n={}){const s=new pt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new ul({next:f=>{r.enqueueAndForget(()=>qh(i,h)),f.fromCache&&a.source==="server"?u.reject(new w(l.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new Kh(o,c,{includeMetadataChanges:!0,xu:!0});return $h(i,h)}(await fl(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(e,t,n){if(!n)throw new w(l.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ml(e,t,n,s){if(t===!0&&s===!0)throw new w(l.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function nr(e){if(!v.isDocumentKey(e))throw new w(l.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sr(e){if(v.isDocumentKey(e))throw new w(l.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":E()}function Ie(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(l.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oi(e);throw new w(l.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(l.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(l.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ml("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ir({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(l.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(l.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ir(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Lu;switch(n.type){case"firstParty":return new Pu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(l.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=er.get(t);n&&(y("ComponentProvider","Removing Datastore"),er.delete(t),n.terminate())}(this),Promise.resolve()}}function pl(e,t,n,s={}){var i;const r=(e=Ie(e,Un))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&on("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=G.MOCK_USER;else{o=Na(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new w(l.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new G(u)}e._authCredentials=new Mu(new ao(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class $n{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new $n(this.firestore,t,this._query)}}class yt extends $n{constructor(t,n,s){super(t,n,Eo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new v(t))}withConverter(t){return new yt(this.firestore,t,this._path)}}function Pl(e,t,...n){if(e=ce(e),ca("collection","path",t),e instanceof Un){const s=_.fromString(t,...n);return sr(s),new yt(e,null,s)}{if(!(e instanceof st||e instanceof yt))throw new w(l.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(_.fromString(t,...n));return sr(s),new yt(e.firestore,null,s)}}function Vl(e,t,...n){if(e=ce(e),arguments.length===1&&(t=uo.A()),ca("doc","path",t),e instanceof Un){const s=_.fromString(t,...n);return nr(s),new st(e,null,new v(s))}{if(!(e instanceof st||e instanceof yt))throw new w(l.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(_.fromString(t,...n));return nr(s),new st(e.firestore,e instanceof yt?e.converter:null,new v(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Qo(this,"async_queue_retry"),this.qc=()=>{const n=Yn();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=Yn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=Yn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new pt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!Le(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ft("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(t,n,s){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const i=ni.createAndSchedule(this,t,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&E()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class ai extends Un{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new yl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||la(this),this._firestoreClient.terminate()}}function Ul(e,t){const n=typeof e=="object"?e:Aa(),s=typeof e=="string"?e:t||"(default)",i=ka(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Da("firestore");r&&pl(i,...r)}return i}function ha(e){return e._firestoreClient||la(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function la(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,u,c){return new Xu(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new cl(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zt(Y.fromBase64String(t))}catch(n){throw new w(l.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new zt(Y.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(l.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(l.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(l.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=/^__.*__$/;class wl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new xt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Me(t,this.data,n,this.fieldTransforms)}}function fa(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class hi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new hi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Zc({path:s,ta:!1});return i.ea(t),i}na(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return fn(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(fa(this.Yc)&&vl.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class El{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Fn(t)}ua(t,n,s,i=!1){return new hi({Yc:t,methodName:n,oa:s,path:H.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tl(e){const t=e._freezeSettings(),n=Fn(e._databaseId);return new El(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Il(e,t,n,s,i,r={}){const o=e.ua(r.merge||r.mergeFields?2:0,t,n,i);ya("Data must be an object, but it was:",o,s);const a=ma(s,o);let u,c;if(r.merge)u=new it(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const g=Sl(t,f,n);if(!o.contains(g))throw new w(l.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Al(h,g)||h.push(g)}u=new it(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new wl(new nt(a),u,c)}function ga(e,t){if(pa(e=ce(e)))return ya("Unsupported field value:",t,e),ma(e,t);if(e instanceof da)return function(n,s){if(!fa(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ga(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vc(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=P.fromDate(n);return{timestampValue:ln(s.serializer,i)}}if(n instanceof P){const i=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ln(s.serializer,i)}}if(n instanceof ci)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zt)return{bytesValue:Uo(s.serializer,n._byteString)};if(n instanceof st){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ws(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${oi(n)}`)}(e,t)}function ma(e,t){const n={};return co(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Wt(e,(s,i)=>{const r=ga(i,t.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function pa(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof ci||e instanceof zt||e instanceof st||e instanceof da)}function ya(e,t,n){if(!pa(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=oi(n);throw s==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+s)}}function Sl(e,t,n){if((t=ce(t))instanceof ui)return t._internalPath;if(typeof t=="string")return va(e,t);throw fn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Cl=new RegExp("[~\\*/\\[\\]]");function va(e,t,n){if(t.search(Cl)>=0)throw fn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ui(...t.split("."))._internalPath}catch{throw fn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function fn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new w(l.INVALID_ARGUMENT,a+e+u)}function Al(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ea("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kl extends wa{data(){return super.data()}}function Ea(e,t){return typeof t=="string"?va(e,t):t instanceof ui?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(l.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nl{convertValue(t,n="none"){switch(Rt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return O(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes($t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw E()}}convertObject(t,n){const s={};return Wt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new ci(O(t.latitude),O(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=lo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ye(t));default:return null}}convertTimestamp(t){const n=wt(t);return new P(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=_.fromString(t);b(Ko(s));const i=new ve(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||ft(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bl extends wa{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Xe(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ea("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Xe extends bl{data(t={}){return super.data(t)}}class xl{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ge(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Xe(this._firestore,this._userDataWriter,s.key,s,new Ge(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(l.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Xe(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ge(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Xe(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ge(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:_l(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _l(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}class Ll extends Nl{constructor(t){super(),this.firestore=t}convertBytes(t){return new zt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function $l(e){e=Ie(e,$n);const t=Ie(e.firestore,ai),n=ha(t),s=new Ll(t);return Dl(e._query),gl(n,e._query).then(i=>new xl(t,s,e,i))}function ql(e,t,n){e=Ie(e,st);const s=Ie(e.firestore,ai),i=Rl(e.converter,t,n);return Ml(s,[Il(Tl(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,lt.none())])}function Ml(e,t){return function(n,s){const i=new pt;return n.asyncQueue.enqueueAndForget(async()=>Jh(await dl(n),s,i)),i.promise}(ha(e),t)}(function(e,t=!0){(function(n){Ht=n})(Ra),Ia(new Sa("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ai(new Ou(n.getProvider("auth-internal")),new Uu(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(l.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ve(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),fi(Di,"3.10.0",e),fi(Di,"3.10.0","esm2017")})();export{ql as a,Vl as r,Pl as s,$l as t,Ul as w};
