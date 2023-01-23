import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/styles/app.css";
import "./assets/fontawesome-free/css/all.min.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia);

app.mount("#app");
