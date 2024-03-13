import { createRouter, createWebHashHistory } from "vue-router";

import LandingPage from "@/pages/LandingPage.vue";

const routes = [
    {
        path: '/',
        name: 'landing-page',
        component: LandingPage
    },
    {
        path: '/hospitals',
        name: 'hospitals',
        component: () => import('@/pages/Hospitals.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/Dashboard.vue'),
    },
    {
        path: '/dashboard/add-hospital',
        name: 'add-hospital',
        component: () => import('@/pages/AddHospital.vue'),
    },
    {
        path: '/user',
        name: 'user-profile',
        component: () => import('@/pages/UserProfile.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router