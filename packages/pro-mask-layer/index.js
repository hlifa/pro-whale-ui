/*
 * @Author: your name
 * @Date: 2021-03-29 17:26:44
 * @LastEditTime: 2021-03-31 21:15:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-mask-layer/index.js
 */
import ProMaskLayer from "./src/mask-layer.vue";

ProMaskLayer.install = function (Vue) {
  Vue.component(ProMaskLayer.name, ProMaskLayer);
};

export default ProMaskLayer;
