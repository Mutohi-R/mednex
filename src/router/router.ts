import { createRouter, createWebHashHistory } from "vue-router";

import LandingPage from "@/pages/LandingPage.vue";

const routes = [
    {
        path: '/',
        name: 'landing-page',
        component: LandingPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router