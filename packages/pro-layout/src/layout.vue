<!--
 * @Author: your name
 * @Date: 2021-04-02 10:24:06
 * @LastEditTime: 2021-04-07 12:04:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-layout/src/layout.vue
-->
<template>
  <el-container>
    <el-header height="auto">
      <pro-breadcrumb :breadcrumb="resolvedBreadcrumb"></pro-breadcrumb>
    </el-header>
    <el-main>
      <slot name="header"></slot>
      <pro-tabs :activeName.sync="resolvedActiveName" :tabs="tabs"></pro-tabs>
      <slot name="footer"></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "ProLayout",

  props: {
    breadcrumb: {
      type: Array,
      default() {
        return {};
      },
    },

    activeName: {
      type: String,
      required: true,
    },

    tabs: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    resolvedBreadcrumb() {
      const { activeName, breadcrumb, tabs } = this;
      return breadcrumb.concat([tabs[activeName].name]);
    },
    resolvedActiveName: {
      get() {
        return this.activeName;
      },
      set(val) {
        this.$emit("update:activeName", val);
      },
    },
  },
};
</script>
