import{g,_ as p,r as d,o as n,c as u,f as e,a as c,w as s,b as m,d as i,t as f,F as h,e as a}from"./index-bc21f2a3.js";import{l as v}from"./auth_signout-cda706aa.js";import{g as k}from"./db_read_user-94eb3e49.js";import"./index.esm2017-e1f5add9.js";const C={data(){return{auth:!1,name:""}},mounted(){g().onAuthStateChanged(l=>{l?(this.auth=!0,k("name").then(r=>{this.name=r})):this.auth=!1})},methods:{authLogOut(){v()}}},y="/assets/image1-aed3eca9.png",x="/assets/image2-a672e984.png",L="/assets/image3-48a1886c.png";const V={class:"greet"},A={key:0},B=e("div",{class:"image-container"},[e("img",{class:"item",src:y}),e("img",{class:"item",src:x}),e("img",{class:"item",src:L})],-1);function H(l,r,N,b,o,_){const t=d("router-link");return n(),u(h,null,[e("nav",null,[c(t,{to:"/",class:"nav-link"},{default:s(()=>[a("Home")]),_:1}),c(t,{to:"/Closet",class:"nav-link"},{default:s(()=>[a("My Closet")]),_:1}),c(t,{to:"/About",class:"nav-link"},{default:s(()=>[a("About")]),_:1}),o.auth==!1?(n(),m(t,{key:0,to:"/Login",class:"nav-link"},{default:s(()=>[a("Log in")]),_:1})):i("v-if",!0),o.auth==!0?(n(),m(t,{key:1,onClick:_.authLogOut,to:"/",class:"nav-link"},{default:s(()=>[a("Log out")]),_:1},8,["onClick"])):i("v-if",!0)]),e("div",V,[o.auth==!0?(n(),u("p",A,"Welcome "+f(o.name),1)):i("v-if",!0)]),B],64)}const S=p(C,[["render",H],["__file","/home/dave/Documents/VueFleet/vue-project/src/pages/Home.vue"]]);export{S as default};
