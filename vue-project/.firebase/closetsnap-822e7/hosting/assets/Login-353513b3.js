import{g as p,e as w,s as C,f as B,r as y,w as I,l as M,_ as x,h as A,o as g,c as _,a as t,i as m,j as u,k as v,d as h,m as d,v as f,t as k,F as L,n as c}from"./index-c51c4b3c.js";function V(o,e){const l=p();w(l,o,e).then(async n=>{n.user}).catch(n=>{n.code;const s=n.message;console.log(s)})}function b(o,e,l){C(o,e,l).then(n=>n.user).catch(n=>n.message)}async function U(o,e,l){try{await B(y(I(),"users",e),{email:e,name:l})}catch(n){console.error(n)}}const S={data(){return{email:"",password:"",fname:"",signInBoolean:!1,signInButtonMessage:"Sign in",createAccountMessage:"Create account",auth:!1}},methods:{switchCreation(){this.signInBoolean?(this.createAccountMessage="Create account",this.signInButtonMessage="Sign in",this.signInBoolean=!1):(this.createAccountMessage="Sign in intead",this.signInButtonMessage="Sign up",this.signInBoolean=!0)},signin_email(){let o=p();this.signInBoolean?this.email.length>0&&this.password.length>0&&(this.email=this.email.toLowerCase(),V(this.email,this.password),U(o,this.email,this.fname)):b(p(),this.email,this.password),this.$router.push("/")},authLogOut(){M()}}};const F={class:"form-container"},N={onsubmit:"return false;"},q=t("div",{class:"separator"},"or",-1),D={class:"email-container"},E=t("span",{class:"gmail-icon"},null,-1),O=[E];function j(o,e,l,n,s,i){const r=A("router-link");return g(),_(L,null,[t("nav",null,[m(r,{to:"/",class:"nav-link"},{default:u(()=>[c("Home")]),_:1}),m(r,{to:"/Closet",class:"nav-link"},{default:u(()=>[c("My Closet")]),_:1}),m(r,{to:"/About",class:"nav-link"},{default:u(()=>[c("About")]),_:1}),s.auth==!1?(g(),v(r,{key:0,to:"/Login",class:"nav-link"},{default:u(()=>[c("Log in")]),_:1})):h("v-if",!0),s.auth==!0?(g(),v(r,{key:1,onClick:i.authLogOut,to:"/",class:"nav-link"},{default:u(()=>[c("Log out")]),_:1},8,["onClick"])):h("v-if",!0)]),t("div",F,[t("form",N,[s.signInBoolean?d((g(),_("input",{key:0,"onUpdate:modelValue":e[0]||(e[0]=a=>s.fname=a),type:"text",placeholder:"First name",required:""},null,512)),[[f,s.fname]]):h("v-if",!0),d(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.email=a),type:"email",placeholder:"exmaple@gmail.com",required:""},null,512),[[f,s.email]]),d(t("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.password=a),type:"password",placeholder:"password",required:""},null,512),[[f,s.password]]),t("button",{class:"form-button",onClick:e[3]||(e[3]=(...a)=>i.signin_email&&i.signin_email(...a))},k(s.signInButtonMessage),1)]),q,t("form",null,[t("div",D,[t("label",{for:"email",onClick:e[4]||(e[4]=(...a)=>i.signin_email&&i.signin_email(...a))},O)])]),t("button",{class:"create-account",onClick:e[5]||(e[5]=(...a)=>i.switchCreation&&i.switchCreation(...a))},k(s.createAccountMessage),1)])],64)}const T=x(S,[["render",j],["__file","/home/dave/Documents/VueFleet/vue-project/src/pages/Login.vue"]]);export{T as default};
