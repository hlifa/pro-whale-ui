/*
 * @Author: your name
 * @Date: 2021-04-02 08:38:57
 * @LastEditTime: 2021-04-02 08:55:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-tabs/index.js
 */
import ProTabs from "./src/tabs.vue";

ProTabs.install = function (Vue) {
  Vue.component(ProTabs.name, ProTabs);
};

export default ProTabs;
