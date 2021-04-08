<!--
 * @Author: your name
 * @Date: 2021-03-26 15:23:49
 * @LastEditTime: 2021-04-08 12:03:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/query-filter.vue
-->
<template>
  <pro-base-form
    v-bind="resolvedAttrs"
    v-on="$listeners"
    :class="`pro-form-item--columns-${resolvedColumns}`"
  ></pro-base-form>
</template>

<script>
import ProBaseForm from "./base-form";

const attrsPreset = {
  inline: false,
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

  props: {
    columns: {
      type: Number,
      default: 1,
    },
  },

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
    resolvedColumns() {
      return [1, 2, 3, 4].indexOf(this.columns) >= 0 ? this.columns : 2;
    },
  },
};
</script>
