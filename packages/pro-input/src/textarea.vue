<!--
 * @Author: your name
 * @Date: 2021-03-26 10:04:35
 * @LastEditTime: 2021-03-26 15:07:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-input/src/textarea.vue
-->
<template>
  <textarea v-model="model" name="" id="" cols="30" rows="10"></textarea>
</template>

<script>
export default {
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
    model: {
      get() {
        return this.value;
      },
      set(val) {
        console.log(val);
        this.$emit("change", val);
      },
    },
  },

  methods: {
    // handleChange(event) {
    //   this.$emit("change", event.target.value);
    // },
  },
};
</script>
