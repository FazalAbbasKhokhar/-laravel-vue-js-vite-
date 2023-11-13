import { createRouter, createWebHistory } from 'vue-router'
const routesarray = [
    {
        path: '/home',
        name: 'home-route',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/about',
        name: 'about-route',
        component: () => import('./pages/About.vue')
    },
    {
        path: '/contact',
        name: 'contact-route',
        component: () => import('./pages/Contact.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routesarray,
})

export default router
