/*
 * @Author: your name
 * @Date: 2021-04-01 14:35:39
 * @LastEditTime: 2021-04-01 14:50:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-checkbox-all/index.js
 */
import ProCheckboxAll from "./src/checkbox-all.vue";

ProCheckboxAll.install = function (Vue) {
  Vue.component(ProCheckboxAll.name, ProCheckboxAll);
};

export default ProCheckboxAll;
