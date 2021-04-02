/*
 * @Author: your name
 * @Date: 2021-03-26 15:30:07
 * @LastEditTime: 2021-04-01 14:50:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-radio-group/index.js
 */
import ProRadioGroup from "./src/radio-group";

ProRadioGroup.install = function (Vue) {
  Vue.component(ProRadioGroup.name, ProRadioGroup);
};

export default ProRadioGroup;
