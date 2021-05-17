<!--
 * @Author: your name
 * @Date: 2021-05-17 10:53:08
 * @LastEditTime: 2021-05-17 14:12:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-number-range/src/number-range.vue
-->
<template>
  <div class="pro-number-range">
    <el-input-number
      v-model="checked[0]"
      controls-position="right"
      :size="size"
      :min="min"
      :max="max"
    ></el-input-number>
    <span style="margin: auto 10px">{{ separator }}</span>
    <el-input-number
      v-model="checked[1]"
      controls-position="right"
      :size="size"
      :min="min"
      :max="max"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  name: "ProNumberRange",

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      required: true,
      type: Array,
    },

    min: {
      type: Number,
      default: -Infinity,
    },

    max: {
      type: Number,
      default: Infinity,
    },

    separator: {
      type: String,
      default: "-",
    },

    size: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  computed: {
    checked: {
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
