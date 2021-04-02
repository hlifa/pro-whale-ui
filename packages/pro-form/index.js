/*
 * @Author: your name
 * @Date: 2021-03-26 15:20:15
 * @LastEditTime: 2021-03-31 20:35:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/index.js
 */

import ProBaseForm from "./src/base-form.vue";
import ProModalForm from "./src/modal-form.vue";
import ProDrawerForm from "./src/drawer-form.vue";
import ProQueryFilter from "./src/query-filter.vue";

const NORMAL_LAYOUT = "normal";
const MODAL_LAYOUT = "modal";
const DRAWER_LAYOUT = "drawer";
const QUERY_FILTER_LAYOUT = "query-filter";

const LAYOUT_COMPONENTS = {
  [NORMAL_LAYOUT]: ProBaseForm,
  [MODAL_LAYOUT]: ProModalForm,
  [DRAWER_LAYOUT]: ProDrawerForm,
  [QUERY_FILTER_LAYOUT]: ProQueryFilter,
};

const ProForm = {
  name: "ProForm",
  functional: true,
  props: {
    layout: {
      type: String,
      default: "normal",
    },
  },
  render(h, context) {
    function appropriateFormComponent() {
      if (!(context.props.layout in LAYOUT_COMPONENTS)) {
        throw Error(`Not support form layout: ${context.props.layout}`);
      }
      return LAYOUT_COMPONENTS[context.props.layout];
    }
    return h(appropriateFormComponent(), context.data, context.children);
  },
};

ProForm.install = function (Vue) {
  Vue.component(ProForm.name, ProForm);
};
export default ProForm;
