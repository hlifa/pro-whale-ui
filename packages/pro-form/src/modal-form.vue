<!--
 * @Author: your name
 * @Date: 2021-03-26 15:26:30
 * @LastEditTime: 2021-09-05 09:31:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/modal-form.vue
-->

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
  render: function (h) {
    const dialogProps = {
      props: this.resolvedElDialogProps,
      on: {
        "update:visible": this.updateVisible,
      },
    };

    const baseFormProps = {
      attrs: this.resolvedAttrs,
      props: this.resolvedAttrs,
      on: {
        ...this.$listeners,
        onCancel: this.hideDialog,
      },
      scopedSlots: this.$scopedSlots,
    };

    return h("el-dialog", dialogProps, [h(ProBaseForm, baseFormProps)]);
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
    resolvedElDialogProps() {
      return {
        ...this.elDialogPropsPreset,
        ...this.elDialogProps,
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
    updateVisible(val) {
      this.$emit("update:visible", val);
    },
    hideDialog() {
      this.$emit("update:visible", false);
    },
  },
};
</script>
