<!--
 * @Author: your name
 * @Date: 2021-04-01 16:51:55
 * @LastEditTime: 2021-04-08 19:11:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-select/src/select.vue
-->
<template>
  <el-select v-model="model" v-bind="resolvedAttrs">
    <template v-if="layout !== 'group'">
      <el-option
        v-for="item in resolvedOptions"
        v-bind="item.props"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <slot v-bind="item"></slot>
      </el-option>
    </template>
    <template v-else>
      <el-option-group
        v-for="group in options"
        v-bind="group.props"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          v-bind="item.props"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-option-group>
    </template>
  </el-select>
</template>

<script>
import { isFunction, isArray } from "@/utils/types";

const attrsPreset = {
  clearable: true,
  filterable: true,
  placeholder: "请选择",
};

export default {
  name: "ProSelect",

  inheritAttrs: false,

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      required: true,
    },

    layout: {
      type: String,
      default: "single",
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
    resolvedAttrs() {
      return { ...attrsPreset, ...this.$attrs };
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
