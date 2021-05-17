/*
 * @Author: your name
 * @Date: 2021-05-17 10:52:48
 * @LastEditTime: 2021-05-17 11:08:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-number-range/index.js
 */
import ProNumberRange from "./src/number-range.vue";

ProNumberRange.install = function (Vue) {
  Vue.component(ProNumberRange.name, ProNumberRange);
};

export default ProNumberRange;
