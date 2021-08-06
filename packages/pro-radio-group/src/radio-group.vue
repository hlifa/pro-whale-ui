<!--
 * @Author: your name
 * @Date: 2021-03-26 15:30:01
 * @LastEditTime: 2021-08-06 09:52:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-radio-group/src/radio-group.vue
-->
<template>
  <el-radio-group
    v-model="model"
    v-bind="$attrs"
    :class="[
      elRadioStyle !== 'button' && direction === 'vertical'
        ? 'pro-direction__vertical'
        : '',
    ]"
  >
    <template v-for="(option, optionIndex) in resolvedOptions">
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
import { isFunction, isArray } from "@/utils/types";

export default {
  name: "ProRadioGroup",

  inheritAttrs: false,

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    direction: {
      type: String,
      default: "horizontal",
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
          this.initOptions = isArray(result) ? result : [];
        })
        .catch((error) => {
          throw error;
        });
    } else {
      this.initOptions = options;
    }
  },

  data() {
    return {
      initOptions: [],
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
    resolvedOptions() {
      let resolvedOptions = [];
      const { options, initOptions } = this;
      if (isFunction(options)) {
        resolvedOptions = initOptions;
      } else {
        resolvedOptions = options;
      }
      return resolvedOptions;
    },
  },
};
</script>
