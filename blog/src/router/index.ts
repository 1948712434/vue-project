import * as VueRouter from 'vue-router';

import Home from '../components/HelloWorld.vue'

const routes  = [
    { path: '/home', component: Home , name:'home'},
    { path: '/' , redirect:'/home' },
]

const history = VueRouter.createWebHashHistory();

const router = VueRouter.createRouter({
    history,
    routes 
})

export default router;