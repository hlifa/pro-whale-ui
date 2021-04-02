<!--
 * @Author: your name
 * @Date: 2021-04-01 20:43:26
 * @LastEditTime: 2021-04-01 21:25:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-password/src/password.vue
-->
<template>
  <el-input v-model="model" v-bind="resolvedAttrs"></el-input>
</template>

<script>
const attrsPrest = {
  showPassword: true,
  placeholder: "请输入密码",
};

export default {
  name: "ProPassword",

  inheritAttrs: false,

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  computed: {
    resolvedAttrs() {
      return { ...attrsPrest, ...this.$attrs };
    },

    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      },
    },
  },
};
</script>
