import{g as c,d as g,e as p,u as m,f as h,_,o as f,c as v,b as l,h as w}from"./index-3ff4236c.js";const B={data(){return{}},methods:{onFileChange(i){var t;const e=document.getElementById("image-preview"),n=(t=i.target)==null?void 0:t.files[0],o=new FileReader;o.readAsDataURL(n),o.onload=()=>{e.src=o.result,e.width=window.innerWidth*.95,e.height=window.innerWidth*.95}},generateRandomString(i){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let o=0;o<i;o++){const t=Math.floor(Math.random()*e.length);n+=e.charAt(t)}return n},uploadToBucket(){var s,r,d;if(c().currentUser==null){console.log("Current User is not logged in ");return}const i=g(),e=document.getElementById("image"),n=document.getElementById("category"),o=p(i,"users/"+((r=(s=c())==null?void 0:s.currentUser)==null?void 0:r.email)+"/"+n.value+"/"+this.generateRandomString(30)),t=(d=e==null?void 0:e.files)==null?void 0:d[0];t&&m(o,t).on("state_changed",a=>{const u=a.bytesTransferred/a.totalBytes*100;switch(console.log(u),a.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},a=>{console.log(a)},()=>{console.log("Upload Complete"),h(o).then(a=>{console.log("File available at",a)})})}}};const y={class:"container"},k=l("img",{id:"image-preview"},null,-1),C={class:"bottom"},U=w('<div class="category-dropdown"><select id="category"><option value="Tops">Tops</option><option value="Pants">Pants</option><option value="Jeans">Jeans</option><option value="Shirts">Shirts</option><option value="Underwear">Underwear</option><option value="Bras">Bras</option><option value="Socks">Socks</option></select></div>',1),b={class:"buttons"},S=l("label",{style:{},for:"image",class:"custom-file-upload"},[l("p",null,"Choose File")],-1);function T(i,e,n,o,t,s){return f(),v("div",y,[k,l("div",C,[U,l("div",b,[l("button",{id:"uploadBtn",onClick:e[0]||(e[0]=(...r)=>s.uploadToBucket&&s.uploadToBucket(...r))},"Upload"),S,l("input",{type:"file",id:"image",accept:"image/*",onChange:e[1]||(e[1]=(...r)=>s.onFileChange&&s.onFileChange(...r))},null,32)])])])}const A=_(B,[["render",T],["__file","/home/dave/Documents/VueFleet/vue-project/src/pages/AddCloset.vue"]]);export{A as default};
