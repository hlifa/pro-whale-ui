<!--
 * @Author: your name
 * @Date: 2021-04-02 10:24:06
 * @LastEditTime: 2021-04-02 10:42:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-layout/src/layout.vue
-->
<template>
  <el-container>
    <el-header height="auto">
      <pro-breadcrumb :breadcrumb="breadcrumb"></pro-breadcrumb>
    </el-header>
    <el-main>
      <pro-tabs :activeName.sync="activeName" :tabs="tabs"></pro-tabs>
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

  watch: {
    activeName: function (newVal, oldVal) {
      this.$emit("update:activeName", newVal);
      const oldName = this.tabs[oldVal].name,
        newName = this.tabs[newVal].name;
      const oldIndex = this.breadcrumb
        .map((item) => {
          if (typeof item === "string") {
            return item;
          }
          return item.name;
        })
        .indexOf(oldName);
      if (oldIndex >= 0) {
        this.breadcrumb.splice(oldIndex, 1);
      }
      this.breadcrumb.push(newName);
    },
  },
};
</script>
