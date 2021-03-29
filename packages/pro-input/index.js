/*
 * @Author: your name
 * @Date: 2021-03-25 20:25:41
 * @LastEditTime: 2021-03-26 14:57:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-input/index.js
 */
import Input from "./src/input";
import Textarea from "./src/textarea";

// ProInput.install = function (Vue) {
//   Vue.component(ProInput.name, ProInput);
// };
// const INPUT_TYPE_MAP = {
//   input: <Input />,
//   textarea: <Textarea />,
// };

export default {
  name: "ProInput",

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    type: {
      type: String,
      default: "input",
    },
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        console.log("proinput", val);
        this.$emit("change", val);
      },
    },
  },

  render() {
    if (this.type === "input") {
      return <Input vModel={this.model}></Input>;
    }
    return <Textarea vModel={this.model}></Textarea>;
  },
};
