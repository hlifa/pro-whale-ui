<!--
 * @Author: your name
 * @Date: 2021-08-10 19:51:59
 * @LastEditTime: 2021-08-10 19:56:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-datetime-range-picker/src/datetime-range-picker.vue
-->
<template>
  <el-date-picker v-model="model" v-bind="resolvedAttrs"></el-date-picker>
</template>

<script>
const attrsPreset = {
  type: "datetimerange",
  align: "right",
  unlinkPanels: false,
  rangeSeparator: "至",
  startPlaceholder: "开始日期",
  endPlaceholder: "结束日期",
  valueFormat: "timestamp",
  pickerOptions: {
    shortcuts: [
      {
        text: "最近一周",
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit("pick", [start, end]);
        },
      },
      {
        text: "最近一个月",
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit("pick", [start, end]);
        },
      },
      {
        text: "最近三个月",
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit("pick", [start, end]);
        },
      },
    ],
  },
};

export default {
  name: "ProDatetimeRangePicker",

  inheritAttrs: false,

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: [Array, String],
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
        this.$emit("change", val);
      },
    },
    resolvedAttrs() {
      return { ...attrsPreset, ...this.$attrs };
    },
  },
};
</script>
