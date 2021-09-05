<!--
 * @Author: your name
 * @Date: 2021-03-26 15:23:49
 * @LastEditTime: 2021-09-05 09:33:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/query-filter.vue
-->
<script>
import ProBaseForm from "./base-form";

const attrsPreset = {
  inline: false,
  size: "mini",
  buttonsAlign: "left",
  submitButtonProps: {
    submitText: "查询",
  },
};

export default {
  render: function (h) {
    const baseFormProps = {
      attrs: this.resolvedAttrs,
      props: this.resolvedAttrs,
      on: this.$listeners,
      scopedSlots: this.$scopedSlots,
    };
    return h(ProBaseForm, baseFormProps);
  },

  inheritAttrs: false,

  props: {
    columns: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {};
  },

  computed: {
    resolvedAttrs() {
      return {
        ...attrsPreset,
        ...this.$attrs,
      };
    },
    resolvedColumns() {
      return [1, 2, 3, 4].indexOf(this.columns) >= 0 ? this.columns : 2;
    },
  },
};
</script>
