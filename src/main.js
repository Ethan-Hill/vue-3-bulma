import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/global.scss";

const app = createApp(App);

// Using Vuex Store
app.use(store);

// Using Vue Router
app.use(router);

// Mounting Vue Instance to document
app.mount("#app");
