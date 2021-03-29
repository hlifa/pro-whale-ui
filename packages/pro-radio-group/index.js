/*
 * @Author: your name
 * @Date: 2021-03-26 15:30:07
 * @LastEditTime: 2021-03-26 16:21:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-radio-group/index.js
 */
import ProRadioGroup from "./src/radio-group";

ProRadioGroup.install = function (Vue) {
  Vue.components(ProRadioGroup.name, ProRadioGroup);
};

export default ProRadioGroup;
