<!--
 * @Author: your name
 * @Date: 2021-03-26 15:26:30
 * @LastEditTime: 2021-07-07 11:32:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/modal-form.vue
-->

<template>
  <el-dialog :visible.sync="internalVisible" v-bind="resolvedElDialogProps">
    <pro-base-form
      v-bind="resolvedAttrs"
      v-on="$listeners"
      @onCancel="$emit('update:visible', false)"
    ></pro-base-form>
  </el-dialog>
</template>

<script>
import ProBaseForm from "./base-form";

const attrsPreset = {
  buttonsAlign: "right",
  cancelDefaultReset: true,
  resetButtonProps: {
    style: { display: "none" },
  },
  cancelButtonProps: {
    style: { display: "" },
  },
};

export default {
  components: {
    ProBaseForm,
  },

  inheritAttrs: false,

  props: {
    visible: {
      type: Boolean,
      default: false,
    },

    elDialogProps: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      elDialogPropsPreset: {
        title: "",
        width: "50%",
      },
    };
  },

  computed: {
    internalVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
    resolvedElDialogProps() {
      return { ...this.elDialogPropsPreset, ...this.elDialogProps };
    },
    resolvedAttrs() {
      return {
        ...attrsPreset,
        ...this.$attrs,
      };
    },
  },
};
</script>
