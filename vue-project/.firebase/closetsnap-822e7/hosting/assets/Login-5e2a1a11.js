import{C as g,d as m,D as u,_,o as p,c as h,e as s,x as r,y as c,z as d,F as w,A as v}from"./index-c974ddb6.js";import{l as f}from"./auth_signout-f9685701.js";import{_ as y,a as k}from"./arrow_right-10cea047.js";async function x(t,e,a){await g(t,e,a).then(l=>l.user).catch(l=>(alert("Email or password incorrect. Please try again"),l.message))}async function E(t){const e=await m();await u(e,t)}const P={data(){return{auth:!1,email:"",password:""}},methods:{async generatePasswordReset(){try{await E(this.email),alert("Rest link sent to email: "+this.email)}catch{alert("Ensure email is entered correctly");return}},login_join_us(){this.$router.push("/CreateAccount")},async signin_email(){await x(m(),this.email,this.password)instanceof String?(console.error("Login: Email or password incorrect..."),alert("Email or password are incorrect, please try again")):this.$router.push("/Account")},authLogOut(){f()}}};const A=s("div",{class:"login-top-headers"},[s("div",{class:"login-main-header-container"},[s("h1",null,"Welcome Back")]),s("div",{class:"login-float-left-container"},[s("h1",null,"Anonymous")]),s("div",{class:"login-float-right-container"},[s("h1",null,"Person")])],-1),L={class:"login-section"},C={class:"login-name-section"},R=s("div",{class:"login-circle"},[s("img",{src:v})],-1),j={class:"login-input"},z={class:"login-name-section"},B=s("div",{class:"login-circle"},[s("img",{src:k})],-1),F={class:"login-input"},S={class:"forgot-password-container"},V={class:"login-bottom-section"},D={class:"login-circle"};function b(t,e,a,l,i,n){return p(),h(w,null,[A,s("div",L,[s("div",C,[R,s("div",j,[r(s("input",{type:"email",placeholder:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),style:d({fontSize:i.email.length>25?"small":i.email.length>22?"medium":i.email.length>15?"large":"x-large"})},null,4),[[c,i.email]])])]),s("div",z,[B,s("div",F,[r(s("input",{type:"password",placeholder:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),style:d({fontSize:i.password.length>25?"small":i.password.length>22?"medium":i.password.length>15?"large":"x-large"})},null,4),[[c,i.password]])]),s("div",S,[s("p",{onClick:e[2]||(e[2]=o=>n.generatePasswordReset())},"Forgot password?")])]),s("div",V,[s("button",{onClick:e[3]||(e[3]=(...o)=>n.login_join_us&&n.login_join_us(...o))},"Join us"),s("div",D,[s("img",{onClick:e[4]||(e[4]=(...o)=>n.signin_email&&n.signin_email(...o)),src:y})])])])],64)}const W=_(P,[["render",b],["__file","/home/dave/Documents/VueFleet/vue-project/src/pages/Login.vue"]]);export{W as default};