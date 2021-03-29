/*
 * @Author: your name
 * @Date: 2021-03-22 17:44:02
 * @LastEditTime: 2021-03-26 16:24:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/src/main.js
 */

import ProRadioGroup from "../packages/pro-radio-group/index.js";

const components = [ProRadioGroup];

const install = function (Vue, opts = {}) {
  console.log(opts);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  version: "0.0.1",
  install,
};
