import{s as u,w as c,t as f}from"./index.esm2017-e1f5add9.js";import{g as i}from"./index-bc21f2a3.js";async function w(o){var n;let t=i();for(let e=0;e<5&&t.currentUser==null;e++)console.log("Waiting for authentication..."),await new Promise(r=>setTimeout(r,1e3)),t=i();if(t===null||!((n=t.currentUser)!=null&&n.email))return console.log("Authentication failed or user email is null"),"undefined";const s=u(c(),"users"),l=await f(s);let a;return l.forEach(e=>{e.data().email===t.currentUser.email&&(a=e.data()[o])}),a}export{w as g};