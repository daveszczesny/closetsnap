import{l as v}from"./auth_signout-95852c4e.js";import{g as Q}from"./db_read_user-9b547f39.js";import{d as g,g as h,i as U,j as p,r as m,k as B,_ as S,o as E,c as I,e as l,t as f,f as F,F as D}from"./index-3459aeb0.js";const V="data:image/png;base64,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",L="/assets/outfit-2d654367.png",T="/assets/bin-3c3d99ad.png",Y={data(){return{auth:!1,name:"",emptyCloset:!1,editMode:!0}},async mounted(){var t;g().onAuthStateChanged(e=>{e?(this.auth=!0,console.log("Logged in"),Q("name").then(o=>{this.name=o})):(console.log("Logged out"),this.auth=!1,this.$router.push("/Login"))});const s=`users/${(t=g().currentUser)==null?void 0:t.email}/`;await this.loadClothingItems(h(),s)},methods:{async loadClothingItems(s,t){const e=document.getElementById("closetDiv"),o=e==null?void 0:e.querySelectorAll("div");(await this.listPrefixInFolder(s,t)).forEach(async i=>{const a=await this.listItemsInFolder(s,i.fullPath),{folderDiv:c,imgDiv:d}=await this.createFolderContainer(i.name);a.forEach(u=>{U(u).then(C=>{const r=this.createImageElement(C,i.name),A=document.createElement("div");A.classList.add("closet-custom-loader"),c.appendChild(A),d.appendChild(r),this.showImages(r,A)})}),c.appendChild(d),e.appendChild(c)}),setTimeout(()=>{o.item.length<1?this.emptyCloset=!0:this.emptyCloset=!1},1e3)},showImages(s,t){s.complete?(s.style.visibility="visible",t.style.display="none"):s.onload=()=>{s.style.visibility="visible",t.style.display="none"}},createImageElement(s,t){const e=document.createElement("img");return e.setAttribute("src",s),e.setAttribute("loading","lazy"),e.setAttribute("visibility","hidden"),e.classList.add("item-alt"),e.style.width=`${window.innerWidth*.95}px`,e.style.height=`${window.innerWidth*.95}px`,e.addEventListener("click",()=>this.createSelectBar(s,t)),e},createSelectBar(s,t){const e=document.createElement("div");e.classList.add("select-bar");const o=document.querySelector(".selected-item");o==null||o.appendChild(e);const n=document.createElement("img");n.setAttribute("src",s),n.style.width="8vh",n.style.height="8vh",n.style.paddingLeft="2vh",n.style.paddingTop="2.5vh";const i=document.createElement("p");i.innerText=t+" piece",i.style.color="black",i.style.paddingTop="2vh",i.style.maxWidth="10ch",i.style.wordWrap="break-word",i.style.paddingLeft="1vh";const a=document.createElement("img");a.setAttribute("src",V),a.style.width="6vh",a.style.height="6vh",a.style.paddingTop="3.5vh",a.style.position="fixed",a.style.right="15vh";const c=document.createElement("img");c.setAttribute("src",L),c.style.width="6vh",c.style.height="6vh",c.style.paddingTop="3.5vh",c.style.position="fixed",c.style.right="8vh";const d=document.createElement("img");d.setAttribute("src",T),d.style.width="6vh",d.style.height="6vh",d.style.paddingTop="3.5vh",d.style.position="fixed",d.style.right="1vh",d.addEventListener("click",async()=>{var r;if(window.confirm("Are you sure you want to delete this image")){await this.deleteImage(s);const A=document.getElementById("closetDiv");A.innerHTML="",o.innerHTML="";const y=`users/${(r=g().currentUser)==null?void 0:r.email}/`;await this.loadClothingItems(h(),y)}}),e.appendChild(n),e.appendChild(i),e.appendChild(a),e.appendChild(c),e.appendChild(d),document.querySelector(".closet-circle").classList.add("closet-circle-alt")},async listPrefixInFolder(s,t){try{return(await p(m(s,t))).prefixes}catch(e){return console.log(e),alert("Error occured whilst grabbing your clothes... Try again"),[]}},async listItemsInFolder(s,t){try{return(await p(m(s,t))).items}catch(e){return console.log(e),alert("Error occured whilst grabbing your clothes... Try again"),[]}},async createFolderContainer(s){const t=document.createElement("div");t.classList.add("folder-container");const e=document.createElement("div");e.classList.add("image-container");const o=document.createElement("div");o.classList.add("image-title-container");const n=document.createElement("p");return n.innerHTML=s,o.appendChild(n),t.appendChild(o),{folderDiv:t,imgDiv:e}},async deleteImage(s){const t=h(),e=m(t,s);try{await B(e),console.log("Imaged deleted")}catch{console.log("Error deleting image")}},authLogOut(){v()},addToCloset(){this.$router.push("AddCloset")},toggleEdit(){this.editMode=!this.editMode;const t=document.getElementById("closetDiv").querySelectorAll("img");this.editMode?t.forEach(e=>{e.classList.add("item-alt"),e.classList.remove("item")}):t.forEach(e=>{e.classList.add("item"),e.classList.remove("item-alt")})}}},k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7Zq9ctNAFIWvLQo6/1SUxnZP0qXD6SjhCQglHX6COE+AWypCSUXooMLp6HAewLbS0VmUNDbnQDxkHDnZ1a6kXWW/GY+VaDUefXP37r0riQQCgUAgEAgEAoGAdWriOZ1OpxlF0WC9Xu/x71qtNp3NZmdiCa8F9Xq9lxAzxmFz61QMUSOI+iCGROIp3W73GF+U8zDlNIU9b7Vaslwuz8UALwVdyRkpDB2YSvJOkIacDUaSvBKUQc6GzJK8EWQgZ8Og3W7HkHShc5EXq5gFORuS1Wr1OI7jRPWCujiORTmEq9tTnQucFoQicCD25PylXq/va40Xh8FUmKAQnEqJOD/FIOiVWAQ56IfOeOdXsSRJfmKJ/oXDZ2JOvFgsXutc4HwEkfl8PkYkGfdV7M9EE2cEcbXC5+2u8xD0xjAfnWRpXp2og64v5cgRL5CcU7crsKp1EAXf8OmIHieIwpFkoHRBKXUOi7l9SIrTxmeQlFkOKXWK7SgCm7j5T9wIS7uG4jDVDhWnm5EcUtoqdluFDEGP+EHf9DntfPKPdy12oCIH6b9gLoeUIkixfdjD/Tch6euuATj35aoEoKTrG2dW5JDCBWn2Vgd3bVPg3PdGo/ERhy1EHfelrckhhSZpg8ZzjJse3jWIvRvbE7FIYYJMu3Ik5TO2HTpbFTYoRJDFLYsYJcDhrhIgD3LPQbb3c5BnjpCXfjP3SAHkGkGW5Wxzimga5j3lcisUc5ZDLovIR7lEUAFyrC7lt2FdUJXkEKuCqiaHWBNURTnEiqCqyiHGgqoshxgJqrocklnQfZBDMgm6L3KItiBsKRzh8e17yQ9n5BDtVgPN4rHkh1NyiJagfr8/yPDIRRXn5BAtQeieB5IPTsohWoIQPVrv1ijirByiJWjzsrZFnJZDlAXxiabcfGHbBOflEGVBURTZjB4v5BBlQRanlzdyiLIgSwnaKzmkyAjyTg5REmQhQXsphzxQGcQEjQiSDCSYmsPZbHYqnqIkSHV6YVyMrymkTFB1X9h+Tl4GqoKe4Ka3/xfLfxmXOJ4U/dy8CJQEQcI5p1jVZQQCgUAgEAgEAsr8AW+OjtrPUiOYAAAAAElFTkSuQmCC",O="data:image/png;base64,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",G="/assets/sad-5f48ee11.png";const b={class:"closet-title"},q={class:"closet-title-img"},z={class:"closet-circle"},J=l("div",{id:"closetDiv",class:"closetDiv"},null,-1),w=l("div",{class:"selected-item"},null,-1),W={key:0,class:"closet-empty"},M=l("img",{src:G},null,-1),x=[M];function X(s,t,e,o,n,i){return E(),I(D,null,[l("div",b,[l("h1",null,f(n.name)+"'s Closet",1),l("div",q,[l("img",{onClick:t[0]||(t[0]=(...a)=>i.toggleEdit&&i.toggleEdit(...a)),src:k})])]),l("div",z,[l("img",{onClick:t[1]||(t[1]=(...a)=>i.addToCloset&&i.addToCloset(...a)),src:O})]),J,w,n.emptyCloset==!0?(E(),I("div",W,x)):F("v-if",!0)],64)}const P=S(Y,[["render",X],["__file","/home/dave/Documents/VueFleet/vue-project/src/pages/Closet.vue"]]);export{P as default};