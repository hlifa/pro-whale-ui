<!--
 * @Author: your name
 * @Date: 2021-03-26 15:30:01
 * @LastEditTime: 2021-03-29 11:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-radio-group/src/radio-group.vue
-->
<template>
  <el-radio-group v-model="model" v-bind="$attrs" v-on="$listeners">
    <template v-for="(option, optionIndex) in resolveOptions">
      <el-radio-button
        v-if="elRadioStyle === 'button'"
        :key="optionIndex"
        v-bind="option.props"
        :label="option.label"
      >
        {{ option.name }}
      </el-radio-button>
      <el-radio
        v-else
        :key="optionIndex"
        v-bind="option.props"
        :label="option.label"
      >
        {{ option.name }}
      </el-radio>
    </template>
  </el-radio-group>
</template>


<script>
import { isFunction } from "@/utils/types.js";

export default {
  name: "ProRadioGroup",

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    elRadioStyle: {
      type: String,
      default: "button",
    },
    options: {
      type: [Array, Function],
      default() {
        return [];
      },
    },
  },

  created() {
    const { options } = this;
    if (isFunction(options)) {
      options()
        .then((result) => {
          this.resolveOptions = result;
        })
        .catch((error) => {
          console.log("resolve options occur error");
          throw error;
        });
    } else {
      this.resolveOptions = options;
    }
  },

  data() {
    return {
      resolveOptions: [],
    };
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
  },
};
</script>
