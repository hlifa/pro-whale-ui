<!--
 * @Author: your name
 * @Date: 2021-04-01 14:35:50
 * @LastEditTime: 2021-04-02 11:20:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-checkbox-all/src/checkbox-all.vue
-->
<template>
  <div class="pro-checkbox-all">
    <el-checkbox-group
      v-model="checkedAll"
      class="check-all-group"
      :class="[
        elCheckboxStyle === 'button'
          ? 'checkbox-style-button'
          : 'checkbox-style-normal',
        elCheckboxStyle !== 'button' && direction === 'vertical'
          ? 'pro-direction__vertical'
          : '',
      ]"
      v-bind="$attrs"
    >
      <component
        :is="
          elCheckboxStyle === 'button' ? 'el-checkbox-button' : 'el-checkbox'
        "
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
      >
        {{ checkAllText }}
      </component>
    </el-checkbox-group>
    <el-checkbox-group
      v-model="checkedItems"
      class="check-items-group"
      :class="[
        elCheckboxStyle !== 'button' && direction === 'vertical'
          ? 'pro-direction__vertical'
          : '',
      ]"
      v-bind="$attrs"
    >
      <component
        :is="
          elCheckboxStyle === 'button' ? 'el-checkbox-button' : 'el-checkbox'
        "
        v-for="(option, optionIndex) in resolvedOptions"
        v-bind="option.props"
        :key="optionIndex"
        :label="option.label"
      >
        {{ option.name }}
      </component>
    </el-checkbox-group>
  </div>
</template>
<script>
import { isFunction, isArray } from "@/utils/types";

export default {
  name: "ProCheckboxAll",

  inheritAttrs: false,

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      required: true,
      type: Array,
    },

    direction: {
      type: String,
      default: "horizontal",
    },

    elCheckboxStyle: {
      type: String,
      default: "button",
    },

    checkAllText: {
      type: String,
      default: "全选",
    },

    options: {
      type: [Array, Function],
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      resolvedOptions: [],
    };
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

  computed: {
    checkedAll() {
      return this.value.length === this.resolvedOptions.length;
    },

    checkedItems: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      },
    },

    isIndeterminate() {
      return (
        this.checkedItems.length > 0 &&
        this.checkedItems.length !== this.resolvedOptions.length
      );
    },
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedItems = val
        ? this.resolvedOptions.map((option) => option.label)
        : [];
    },
  },
};
</script>
