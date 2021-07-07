<!--
 * @Author: your name
 * @Date: 2021-03-26 15:26:30
 * @LastEditTime: 2021-07-07 11:33:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/drawer-form.vue
-->

<template>
  <el-drawer :visible.sync="internalVisible" v-bind="resolvedElDrawerProps">
    <div class="pro-drawer__content">
      <pro-base-form
        v-bind="resolvedAttrs"
        v-on="$listeners"
        @onCancel="$emit('update:visible', false)"
      ></pro-base-form>
    </div>
  </el-drawer>
</template>

<script>
import ProBaseForm from "./base-form";

const attrsPreset = {
  buttonsAlign: "",
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

    elDrawerProps: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      elDrawerPropsPreset: {
        title: "",
        size: "30%",
        direction: "rtl",
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
    resolvedElDrawerProps() {
      return { ...this.elDrawerPropsPreset, ...this.elDrawerProps };
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

<style>
.pro-drawer__content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
}
.pro-drawer__content form {
  flex: 1;
}
.pro-drawer__content .el-form-item.buttons .el-form-item__content {
  display: flex;
}
.pro-drawer__content .el-form-item.buttons .el-form-item__content button {
  flex: 1;
}
</style>
