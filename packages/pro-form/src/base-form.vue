<!--
 * @Author: your name
 * @Date: 2021-03-26 15:23:34
 * @LastEditTime: 2021-07-26 20:57:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/packages/pro-form/src/base-form.vue
-->
<template>
  <el-container direction="vertical">
    <el-form
      ref="elForm"
      :model="model"
      :rules="resolvedRules"
      v-bind="resolvedFormProps"
    >
      <el-form-item
        :key="itemIndex"
        v-for="(item, itemIndex) in resolvedItems"
        :label="item.name"
        :prop="item.rule || item.field"
        :ref="item.field"
        :style="{ display: item.hide ? 'none' : '' }"
      >
        <template v-if="item.component && !item.readonly">
          <component
            v-if="item.trim"
            :is="item.component"
            v-model.trim="model[item.field]"
            v-bind="item.props"
          ></component>
          <component
            v-else
            :is="item.component"
            v-model="model[item.field]"
            v-bind="item.props"
          ></component>
        </template>
        <template v-else>{{ model[item.field] }}</template>
        <pro-mask-layer v-if="item.disabled"></pro-mask-layer>
      </el-form-item>
    </el-form>
    <div
      class="el-form-item buttons"
      :class="[sizeClass ? 'el-form-item--' + sizeClass : '']"
      :style="{ textAlign: buttonsAlign }"
    >
      <div
        class="el-form-item__content"
        :style="{ marginLeft: resolvedFormProps.labelWidth }"
      >
        <el-button
          :loading="cancelButtonLoading"
          v-bind="resolvedCancelButtonProps"
          :class="[sizeClass ? 'el-button--' + sizeClass : '']"
          @click="onCancel"
          >{{ resolvedCancelButtonProps.cancelText }}</el-button
        >
        <el-button
          :loading="submitButtonLoading"
          v-bind="resolvedSubmitButtonProps"
          :class="[sizeClass ? 'el-button--' + sizeClass : '']"
          @click="onSubmit"
          >{{ resolvedSubmitButtonProps.submitText }}</el-button
        >
        <el-button
          :loading="resetButtonLoading"
          v-bind="resolvedResetButtonProps"
          :class="[sizeClass ? 'el-button--' + sizeClass : '']"
          @click="onReset"
          >{{ resolvedResetButtonProps.resetText }}</el-button
        >
      </div>
    </div>
  </el-container>
</template>

<script>
import {
  isString,
  isObject,
  isArray,
  isFunction,
  isBoolean,
} from "@/utils/types";

const formPreset = {
    labelPosition: "right",
    labelWidth: "80px",
    inline: false,
    "hide-required-asterisk": false,
    "show-message": true,
    "inline-message": false,
    "status-icon": false,
    "validate-on-rule-change": true,
    size: "",
    disabled: false,
  },
  submitButtonPreset = {
    type: "primary",
    submitText: "提交",
  },
  resetButtonPreset = {
    type: "info",
    resetText: "重置",
  },
  cancelButtonPreset = {
    type: "",
    cancelText: "取消",
    style: {
      display: "none",
    },
  };

const checkArabic = (text) => {
  if (isString(text)) {
    // 非空格、数字字符串的首字符为阿拉伯语，则认为是阿语文本
    return /^[\s|\d]*[\u0590-\u05FF|\u0600-\u06ff|\u0750-\u077F|\u08A0-\u08FF]/.test(
      text
    );
  }
  if (!isObject(text)) {
    return false;
  }
  for (let k in text) {
    if (Object.prototype.hasOwnProperty.call(text, k)) {
      if (checkArabic(text[k])) {
        return true;
      }
    }
  }
  return false;
};

export default {
  name: "ProForm",

  inheritAttrs: false,

  props: {
    model: {
      type: Object,
      defult() {
        return {};
      },
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    direction: {
      type: String,
      default: "ltr",
    },
    buttonsAlign: {
      type: String,
      default: "left",
    },
    submitButtonLoading: {
      type: Boolean,
      default: false,
    },
    submitButtonProps: {
      type: Object,
      default() {
        return {
          type: "primary",
          submitText: "提交",
        };
      },
    },
    resetButtonLoading: {
      type: Boolean,
      default: false,
    },
    resetButtonProps: {
      type: Object,
      default() {
        return {
          type: "info",
          resetText: "重置",
        };
      },
    },
    cancelButtonLoading: {
      type: Boolean,
      default: false,
    },
    cancelButtonProps: {
      type: Object,
      default() {
        return {
          type: "",
          cancelText: "取消",
          style: { display: "none" },
        };
      },
    },
    cancelDefaultSubmit: {
      type: Boolean,
      default: false,
    },
    cancelDefaultReset: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    //
  },

  data() {
    return {
      resovledResetButtonLoading: this.resetButtonLoading,
      resovledSubmitButtonLoading: this.submitButtonLoading,
      resovledCancelButtonLoading: this.cancelButtonLoading,
      mixin: {
        methods: {
          getField: function (fieldName) {
            if (!(fieldName in this.model)) {
              throw Error(`No such field: ${fieldName} in model`);
            }
            return this.model[fieldName];
          }.bind(this),

          setField: function (fieldName, fieldValue) {
            if (!(fieldName in this.model)) {
              throw Error(`No such field: ${fieldName} in model`);
            }
            this.$set(this.model, fieldName, fieldValue);
          }.bind(this),

          getFormItem: function (itemRef) {
            if (!(itemRef in this.$refs)) {
              throw Error(`No such formItem ${itemRef} in form`);
            }
            return isArray(this.$refs[itemRef])
              ? this.$refs[itemRef][0]
              : this.$refs[itemRef];
          }.bind(this),

          showFormItem: function (itemRef) {
            if (!(itemRef in this.$refs)) {
              throw Error(`No such formItem ${itemRef} in form`);
            }
            const $el = isArray(this.$refs[itemRef])
              ? this.$refs[itemRef][0].$el
              : this.$refs[itemRef].$el;
            if ($el) {
              $el.style.display = "";
            }
          }.bind(this),

          showFormItems: function (itemRefs) {
            if (!isArray(itemRefs)) {
              throw Error(
                "showFormItems argument[itemRefs] must be a Array instance"
              );
            }
            itemRefs.forEach((itemRef) => {
              this.mixin.methods.showFormItem(itemRef);
            });
          }.bind(this),

          hideFormItem: function (itemRef) {
            if (!(itemRef in this.$refs)) {
              throw Error(`No such formItem ${itemRef} in form`);
            }
            const $el = isArray(this.$refs[itemRef])
              ? this.$refs[itemRef][0].$el
              : this.$refs[itemRef].$el;
            if ($el) {
              $el.style.display = "none";
            }
          }.bind(this),

          hideFormItems: function (itemRefs) {
            if (!isArray(itemRefs)) {
              throw Error(
                "hideFormItems argument[itemRefs] must be a Array instance"
              );
            }
            itemRefs.forEach((itemRef) => {
              this.mixin.methods.hideFormItem(itemRef);
            });
          }.bind(this),

          disableRule: function (ruleKey) {
            if (
              isArray(this.rules[ruleKey]) &&
              this.rules[ruleKey][0] !== false
            ) {
              this.rules[ruleKey].unshift(false);
            }
          }.bind(this),

          disableRules: function (ruleKeys) {
            if (!isArray(ruleKeys)) {
              throw Error(
                "disableRules argument[ruleKeys] must be a Array instance"
              );
            }
            ruleKeys.forEach((ruleKey) => {
              this.mixin.methods.disableRule(ruleKey);
            });
          }.bind(this),

          enableRule: function (ruleKey) {
            if (
              isArray(this.rules[ruleKey]) &&
              isBoolean(this.rules[ruleKey][0])
            ) {
              this.rules[ruleKey].shift();
            }
          }.bind(this),

          enableRules: function (ruleKeys) {
            if (!isArray(ruleKeys)) {
              throw Error(
                "enableRules argument[ruleKeys] must be a Array instance"
              );
            }
            ruleKeys.forEach((ruleKey) => {
              this.mixin.methods.enableRule(ruleKey);
            });
          }.bind(this),
        },
      },
    };
  },

  computed: {
    resolvedFormProps() {
      return { ...formPreset, ...this.$attrs };
    },
    sizeClass() {
      return this.resolvedFormProps.size;
    },
    resolvedRules() {
      let resolvedRules = {};
      const rulesKeys = Object.keys(this.rules);
      rulesKeys.forEach((key) => {
        if (isArray(this.rules[key]) && this.rules[key][0]) {
          resolvedRules[key] = this.rules[key];
        }
      });
      return resolvedRules;
    },
    resolvedItems() {
      this.items.forEach((item) => {
        if (item.component) {
          if (isString(item.component)) {
            // 全局注册component
          } else if (isObject(item.component)) {
            // 局部注册component
            if (!("render" in item.component)) {
              throw Error(
                "Component options object must contain `render` method"
              );
            }
            item.component = { ...item.component, functional: true };
          } else if (isFunction(item.component)) {
            // 动态加载组件
          }
          // 处理onChange / watch
          if (isFunction(item.onChange)) {
            this.$watch(
              `model.${item.field}`,
              item.onChange.bind(this.mixin.methods)
            );
          }

          if (isArray(item.watch)) {
            item.watch.forEach((option) => {
              if (!isObject(option)) {
                throw Error("watch option must be a `Object`");
              }
              this.$watch(
                `model.${option.expOrFn}`,
                option.cb.bind(this.mixin.methods),
                option.options
              );
            });
          }

          // 处理`item.props`
          if (this.direction === "auto") {
            this.$watch(
              `model.${item.field}`,
              (function (field, context) {
                return function (val) {
                  context.$nextTick(() => {
                    context.mixin.methods
                      .getFormItem(field)
                      .$el.setAttribute(
                        "direction",
                        checkArabic(val) ? "rtl" : ""
                      );
                  });
                };
              })(item.field, this),
              {
                immediate: true,
              }
            );
          } else {
            this.$nextTick(() => {
              this.mixin.methods
                .getFormItem(item.field)
                .$el.setAttribute("direction", this.direction);
            });
          }
        }
      });
      return this.items;
    },
    resolvedSubmitButtonProps() {
      return { ...submitButtonPreset, ...this.submitButtonProps };
    },
    resolvedResetButtonProps() {
      return { ...resetButtonPreset, ...this.resetButtonProps };
    },
    resolvedCancelButtonProps() {
      return { ...cancelButtonPreset, ...this.cancelButtonProps };
    },
  },

  methods: {
    onSubmit() {
      if (this.cancelDefaultSubmit) {
        this.$emit("onSubmit", this.$refs.elForm, this.model);
        return;
      }

      this.$refs.elForm.validate((valid) => {
        if (valid) {
          this.$emit("onSubmit", this.$refs.elForm, this.model);
        } else {
          this.$emit("onValidateError", this.$refs.elForm, this.model);
        }
      });
    },
    onReset() {
      if (this.cancelDefaultReset) {
        this.$emit("onReset", this.$refs.elForm);
        return;
      }
      this.$refs.elForm.resetFields();
    },
    onCancel() {
      this.$emit("onCancel", this.$refs.elForm);
    },
  },
};
</script>
