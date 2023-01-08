import { createApp } from "vue";
import App from "./App.vue";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

//Vuex
import store from "./store/index.js";

const app = createApp(App);

app.use(store);
app.use(bootstrap);
app.mount("#app");
