/*
 * @Author: your name
 * @Date: 2021-04-01 16:28:26
 * @LastEditTime: 2021-04-01 20:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-date-range-picker/index.js
 */
import ProDateRangePicker from "./src/date-range-picker.vue";

ProDateRangePicker.install = function (Vue) {
  Vue.component(ProDateRangePicker.name, ProDateRangePicker);
};

export default ProDateRangePicker;
