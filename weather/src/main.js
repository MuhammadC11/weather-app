import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },

    // { path: "/contact", name: "contact", component: Contact },
  ],
});

createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");
