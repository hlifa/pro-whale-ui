/*
 * @Author: your name
 * @Date: 2021-03-29 09:39:39
 * @LastEditTime: 2021-03-29 09:54:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/index.js
 */
import exampleProRadioGroup from "./src/example-pro-radio-group.md";

const components = { exampleProRadioGroup };

const install = (Vue) => {
  for (let name in components) {
    Vue.component(name, components[name]);
  }
};

export default {
  install,
};
