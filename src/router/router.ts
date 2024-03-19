import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "@/stores/AuthStore";
import { storeToRefs } from "pinia";

import LandingPage from "@/pages/LandingPage.vue";

const authStore = useAuthStore();
const { isAdmin, isAuthenticated } = storeToRefs(authStore)

const routes = [
    {
        path: '/',
        name: 'landing-page',
        component: LandingPage,
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

router.beforeEach((to, from) => {
    // checks if user is an admin trying to access the dashboard
    if (!isAdmin.value && to.name == 'dashboard') {
        return { name: 'landing-page'}
    }
    // checks if user is authenticated
    if (!isAuthenticated.value && to.name == 'user-profile') {
        return { name: 'user-profile' }
    }
})

export default router