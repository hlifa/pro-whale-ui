/*
 * @Author: your name
 * @Date: 2021-08-10 19:51:47
 * @LastEditTime: 2021-08-10 19:57:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-datetime-range-picker/index.js
 */
import ProDatetimeRangePicker from "./src/datetime-range-picker.vue";

ProDatetimeRangePicker.install = function (Vue) {
  Vue.component(ProDatetimeRangePicker.name, ProDatetimeRangePicker);
};

export default ProDatetimeRangePicker;
