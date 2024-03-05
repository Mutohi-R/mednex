import "./assets/main.scss";
import "./assets/tailwind.css";
import "vue-toastification/dist/index.css";
import JsonCSV from 'vue-json-csv'
// import "primevue/resources/primevue.min.css"
// import "primeicons/primeicons.css"
// import 'primevue/resources/themes/saga-blue/theme.css';


import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast, { POSITION, type PluginOptions} from "vue-toastification"
// import PrimeVue from "primevue/config";
// import ToastService from "primevue/toastservice";
// import Toast from "primevue/toast";

import router from "./router/router";
import App from "./App.vue";

const options: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  transition: "Vue-Toastification__fade",
  timeout: 1000,
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

const pinia = createPinia();
createApp(App)
  .component('downloadCsv', JsonCSV)
  .use(pinia)
  .use(router)
  // .use(PrimeVue)
  // .use(ToastService)
  // .use(Toast, options)
  .mount("#app");
