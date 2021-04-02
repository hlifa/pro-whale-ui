/*
 * @Author: your name
 * @Date: 2021-03-29 09:39:39
 * @LastEditTime: 2021-04-02 10:43:22
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

const components = {
  exampleProRadioGroup,
  exampleProCheckboxAll,
  exampleProDatePicker,
  exampleProSelect,
  exampleProBaseForm,
  exampleProTabs,
  exampleProLayout,
};

const install = (Vue) => {
  for (let name in components) {
    Vue.component(name, components[name]);
  }
};

export default {
  install,
};
