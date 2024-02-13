import './assets/main.scss'
import './assets/tailwind.css'
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { POSITION, type PluginOptions } from "vue-toastification";
import router from './router/router'
import App from './App.vue'

const options: PluginOptions = {
    position: POSITION.TOP_RIGHT,
    transition: "Vue-Toastification__fade",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
}

const pinia = createPinia()
createApp(App).use(pinia).use(router).use(Toast, options).mount('#app')
