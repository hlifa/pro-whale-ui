<!--
 * @Author: your name
 * @Date: 2021-04-02 09:56:06
 * @LastEditTime: 2021-04-02 10:03:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-breadcrumb/src/breadcrumb.vue
-->
<template>
  <el-breadcrumb v-if="breadcrumb.length > 0" v-bind="resolvedAttrs">
    <template v-for="(item, index) in breadcrumb">
      <el-breadcrumb-item :key="index" :to="getPath(item)">
        {{ getName(item) }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script>
import { isString } from "@/utils/types";

const attrsPreset = {
  separatorClass: "el-icon-arrow-right",
};

export default {
  name: "ProBreadcrumb",

  inheritAttrs: false,

  props: {
    breadcrumb: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {};
  },

  computed: {
    resolvedAttrs() {
      return { ...attrsPreset, ...this.$attrs };
    },
  },

  methods: {
    getName(item) {
      return isString(item) ? item : item.name;
    },
    getPath(item) {
      return isString(item) ? "" : item.path || "";
    },
  },
};
</script>
