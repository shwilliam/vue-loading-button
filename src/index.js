import component from "./vue-loading-button.vue";

// install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueLoadingButton", component);
}

// create module definition for Vue.use()
const plugin = {
  install
};

// auto-install when vue is found
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default component;
