import { createApp } from "vue";
import HelloVue from "./components/HelloVue.vue";
import button from "./components/Button.vue";

createApp(button).mount(".button");
createApp(button).mount(".button2");
createApp(button).mount(".button3");
createApp(HelloVue).mount("#app");