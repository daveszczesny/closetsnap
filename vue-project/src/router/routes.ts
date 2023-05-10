
/**
 * 
 * @param {string} component 
 * @returns component.vue
 */
function loadPage(component: string){
    return () => import(`@/pages/${component}.vue`);
}

export default [
    {path: '/', component: loadPage('Home')},
    {path: '/About', component: loadPage('About')},
    {path: '/Closet', component: loadPage('Closet')},
    {path: '/Login', component: loadPage('Login')},
    {path: '/AddCloset', component: loadPage('AddCloset')},

]