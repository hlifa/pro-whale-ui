<!--
 * @Author: your name
 * @Date: 2021-03-29 17:26:55
 * @LastEditTime: 2021-03-29 17:29:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-mask-layer/src/mask-layer.vue
-->
<template>
  <el-container class="whaleui-mask-layer"></el-container>
</template>

<script>
export default {
  name: "ProMaskLayer",
};
</script>

<style scoped>
.whaleui-mask-layer {
  cursor: no-drop;
  position: absolute;
  display: block;
  background: rgb(0 0 0 / 10%);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000000;
}
</style>
