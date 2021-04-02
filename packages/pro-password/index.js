/*
 * @Author: your name
 * @Date: 2021-04-01 20:43:15
 * @LastEditTime: 2021-04-01 20:48:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-password/index.js
 */
import ProPassword from "./src/password";

ProPassword.install = function (Vue) {
  Vue.component(ProPassword.name, ProPassword);
};

export default ProPassword;
