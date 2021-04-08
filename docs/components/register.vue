<!--
 * @Author: your name
 * @Date: 2021-04-07 20:42:27
 * @LastEditTime: 2021-04-07 20:47:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/components/register.vue
-->
<template>
  <pro-form
    size="medium"
    :model="formData"
    :rules="formRules"
    :items="formItems"
    @onSubmit="onSubmit"
    @onValidateError="onValidateError"
  >
  </pro-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
        password_again: "",
      },
      formRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在2至20个字符之间",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 8, message: "密码长度应大于8个字符", trigger: "blur" },
        ],
        password_again: [
          { required: true, message: "请再次输入登录密码", trigger: "blur" },
          { min: 8, message: "密码长度应大于8个字符", trigger: "blur" },
        ],
      },
      formItems: [
        {
          name: "用户名",
          field: "username",
          rule: "username", // 可省略，省略时使用`field`字段值
          component: "el-input",
          props: {
            // 子组件的props
            placeholder: "请输入用户名",
            prefixIcon: "el-icon-user",
            minlength: 2,
            maxlength: 20,
          },
        },
        {
          name: "密码",
          field: "password",
          component: "pro-password",
          props: {
            // 子组件的props
            prefixIcon: "el-icon-lock",
            minlength: 8,
          },
        },
        {
          name: "确认密码",
          field: "password_again",
          component: "pro-password",
          props: {
            // 子组件的props
            prefixIcon: "el-icon-lock",
            minlength: 8,
          },
        },
      ],
    };
  },

  methods: {
    onSubmit(form, formData) {
      alert(
        "Reading to submit, form-data: `" +
          JSON.stringify(formData, null, 4) +
          "`"
      );
    },
    onValidateError() {
      alert("form-data validate error!");
    },
  },
};
</script>
