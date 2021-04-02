<!--
 * @Author: your name
 * @Date: 2021-04-02 08:39:03
 * @LastEditTime: 2021-04-02 10:33:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-tabs/src/tabs.vue
-->
<template>
  <el-tabs v-model="model" v-bind="resolvedAttrs">
    <template v-for="(tab, index) in tabs">
      <el-tab-pane
        :key="index"
        :label="tab.name"
        :name="index"
        v-bind="tab.paneProps"
      >
        <template v-if="tab.keepAlive === false">
          <component :is="tab.component" v-bind="tab.props"></component>
        </template>
        <template v-else>
          <keep-alive>
            <component :is="tab.component" v-bind="tab.props"></component>
          </keep-alive>
        </template>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script>
const attrsPreset = {
  type: "border-card",
};

export default {
  name: "ProTabs",

  inheritAttrs: false,

  props: {
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

  data() {
    return {};
  },

  computed: {
    resolvedAttrs() {
      return { ...attrsPreset, ...this.$attrs };
    },
    model: {
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
