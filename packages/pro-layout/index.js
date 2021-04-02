/*
 * @Author: your name
 * @Date: 2021-04-02 10:24:00
 * @LastEditTime: 2021-04-02 10:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-layout/index.js
 */
import ProLayout from "./src/layout.vue";

ProLayout.install = function (Vue) {
  Vue.component(ProLayout.name, ProLayout);
};

export default ProLayout;
