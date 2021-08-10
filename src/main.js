/*
 * @Author: your name
 * @Date: 2021-03-22 17:44:02
 * @LastEditTime: 2021-08-10 20:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/src/main.js
 */
import ProTabs from "../packages/pro-tabs/index.js";
import ProBreadcrumb from "../packages/pro-breadcrumb/index.js";
import ProLayout from "../packages/pro-layout/index.js";
import ProRadioGroup from "../packages/pro-radio-group/index.js";
import ProCheckboxAll from "../packages/pro-checkbox-all/index.js";
import ProDateRangePicker from "../packages/pro-date-range-picker/index.js";
import ProDatetimeRangePicker from "../packages/pro-datetime-range-picker/index.js";
import ProSelect from "../packages/pro-select/index.js";
import ProPassword from "../packages/pro-password/index.js";
import ProMaskLayer from "../packages/pro-mask-layer/index.js";
import ProNumberRange from "../packages/pro-number-range/index.js";
import ProForm from "../packages/pro-form/index.js";

import "./style/index.scss";

const components = [
  ProTabs,
  ProBreadcrumb,
  ProLayout,
  ProRadioGroup,
  ProCheckboxAll,
  ProDateRangePicker,
  ProDatetimeRangePicker,
  ProSelect,
  ProPassword,
  ProMaskLayer,
  ProNumberRange,
  ProForm,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  version: "0.0.1",
  install,
  ProTabs,
  ProBreadcrumb,
  ProLayout,
  ProRadioGroup,
  ProCheckboxAll,
  ProDateRangePicker,
  ProDatetimeRangePicker,
  ProSelect,
  ProPassword,
  ProMaskLayer,
  ProNumberRange,
  ProForm,
};
