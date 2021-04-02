<!--
 * @Author: your name
 * @Date: 2021-03-26 15:30:01
 * @LastEditTime: 2021-04-01 20:30:44
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
          this.resolvedOptions = isArray(result) ? result : [];
        })
        .catch((error) => {
          console.log("resolve options occur error");
          throw error;
        });
    } else {
      this.resolvedOptions = options;
    }
  },

  data() {
    return {
      resolvedOptions: [],
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
