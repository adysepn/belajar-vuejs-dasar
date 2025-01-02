import { createApp } from "vue";
import HelloVue from "./components/HelloVue.vue";
import button from "./components/button.vue";

createApp(HelloVue).mount("#app");
createApp(button).mount(".button");
createApp(button).mount(".button2");
createApp(button).mount(".button3");