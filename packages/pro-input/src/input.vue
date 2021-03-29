<!--
 * @Author: your name
 * @Date: 2021-03-25 20:25:33
 * @LastEditTime: 2021-03-26 15:15:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-input/src/main.vue
-->
<template>
  <el-input v-model="model" placeholder=""></el-input>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input",
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
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },

  methods: {
    // handleInput(val) {
    //   this.emit("input", val);
    // },
  },
};
</script>
