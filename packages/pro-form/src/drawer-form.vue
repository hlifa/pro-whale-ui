<!--
 * @Author: your name
 * @Date: 2021-03-26 15:26:30
 * @LastEditTime: 2021-09-05 09:31:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/drawer-form.vue
-->

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
  render: function (h) {
    const drawerProps = {
      props: this.resolvedElDrawerProps,
      on: {
        "update:visible": this.updatevisible,
      },
    };
    const baseFormProps = {
      attrs: this.resolvedAttrs,
      props: this.resolvedAttrs,
      on: {
        ...this.$listeners,
        onCancel: this.hideDrawer,
      },
      scopedSlots: this.$scopedSlots,
    };
    return h("el-drawer", drawerProps, [
      h(
        "div",
        {
          class: "pro-drawer__content",
        },
        [h(ProBaseForm, baseFormProps)]
      ),
    ]);
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
    resolvedElDrawerProps() {
      return {
        ...this.elDrawerPropsPreset,
        ...this.elDrawerProps,
        visible: this.visible,
      };
    },
    resolvedAttrs() {
      return {
        ...attrsPreset,
        ...this.$attrs,
      };
    },
  },

  methods: {
    updatevisible(val) {
      this.$emit("update:visible", val);
    },
    hideDrawer() {
      this.$emit("update:visible", false);
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
