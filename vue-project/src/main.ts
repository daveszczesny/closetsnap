import { createApp } from 'vue'
import App from './App.vue'


import {createRouter, createWebHistory} from 'vue-router';
import routes from './router/routes';


import './api/firebase'
import './assets/main.css'

let router:any = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');

