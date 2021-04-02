/*
 * @Author: your name
 * @Date: 2021-04-01 16:51:47
 * @LastEditTime: 2021-04-01 17:04:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-select/index.js
 */
import ProSelect from "./src/select.vue";

ProSelect.install = function (Vue) {
  Vue.component(ProSelect.name, ProSelect);
};

export default ProSelect;
