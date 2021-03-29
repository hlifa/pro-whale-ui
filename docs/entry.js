/*
 * @Author: your name
 * @Date: 2021-03-29 09:10:25
 * @LastEditTime: 2021-03-29 09:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/entry.js
 */
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import WhaleUI from "../src/main.js";

import "element-ui/lib/theme-chalk/index.css";

// element-ui必须先引入
Vue.use(ElementUI);
Vue.use(WhaleUI);

// register vc-snippet
import VcSnippet from "./components/vc-snippet";
Vue.component("VcSnippet", VcSnippet);

// register docs component
import Docs from "./markdown/index.js";
Vue.use(Docs);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
