import { createRouter ,createWebHistory } from "vue-router";

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ListProject from '../views/ListProject.vue'


const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/projects',
        name: 'ListProject',
        component: ListProject
    },
]


const router  = createRouter({
    history: createWebHistory(),
    routes
})

export default router