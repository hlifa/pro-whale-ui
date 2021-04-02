<!--
 * @Author: your name
 * @Date: 2021-03-26 15:23:49
 * @LastEditTime: 2021-04-01 20:53:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/query-filter.vue
-->
<template>
  <pro-base-form v-bind="resolvedAttrs" v-on="$listeners"></pro-base-form>
</template>

<script>
import ProBaseForm from "./base-form";

const attrsPreset = {
  inline: true,
  size: "small",
  buttonsAlign: "left",
  submitButtonProps: {
    submitText: "查询",
  },
};

export default {
  components: {
    ProBaseForm,
  },

  inheritAttrs: false,

  props: {},

  data() {
    return {};
  },

  computed: {
    resolvedAttrs() {
      return {
        ...attrsPreset,
        ...this.$attrs,
      };
    },
  },
};
</script>
