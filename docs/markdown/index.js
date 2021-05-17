/*
 * @Author: your name
 * @Date: 2021-03-29 09:39:39
 * @LastEditTime: 2021-05-17 11:28:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/index.js
 */
import exampleProRadioGroup from "./src/example-pro-radio-group.md";
import exampleProCheckboxAll from "./src/example-pro-checkbox-all.md";
import exampleProDatePicker from "./src/example-pro-date-picker.md";
import exampleProSelect from "./src/example-pro-select.md";
import exampleProBaseForm from "./src/example-pro-base-form.md";
import exampleProTabs from "./src/example-pro-tabs.md";
import exampleProLayout from "./src/example-pro-layout.md";
import exampleQuickStart from "./src/example-quick-start.md";
import exampleIntroduce from "./src/example-introduce.md";
import exampleProNumberRange from "./src/example-pro-number-range.md";

const components = {
  exampleProRadioGroup,
  exampleProCheckboxAll,
  exampleProDatePicker,
  exampleProSelect,
  exampleProBaseForm,
  exampleProTabs,
  exampleProLayout,
  exampleProNumberRange,
  exampleQuickStart,
  exampleIntroduce,
};

const install = (Vue) => {
  for (let name in components) {
    Vue.component(name, components[name]);
  }
};

export default {
  install,
};
