// import { createApp } from "vue";
// import App from "./App.vue";

// createApp(App).mount("#app");

import { createApp } from "vue";

import App from "./App.vue";

import { CarbonIconsVue } from "@carbon/icons-vue";
import AppSwitcher20 from "@carbon/icons-vue/es/app-switcher/20";
import Bee32 from "@carbon/icons-vue/es/bee/32";

const app = createApp(App);
app.use(CarbonIconsVue, {
  components: {
    AppSwitcher20,
    Bee32
  }
});
app.mount("#app");
