/*
 * @Author: your name
 * @Date: 2021-04-02 09:55:50
 * @LastEditTime: 2021-04-02 10:04:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-breadcrumb/index.js
 */
import ProBreadcrumb from "./src/breadcrumb.vue";

ProBreadcrumb.install = function (Vue) {
  Vue.component(ProBreadcrumb.name, ProBreadcrumb);
};

export default ProBreadcrumb;
