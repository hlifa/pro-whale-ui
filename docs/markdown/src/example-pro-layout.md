<!--
 * @Author: your name
 * @Date: 2021-04-01 14:37:25
 * @LastEditTime: 2021-04-02 10:40:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-date-picker.md
-->
# ProLayout

高阶日期时间选择器 - 

## 基础用法

:::snippet 在`pro-checkbox-all`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-radio-group`组件的全部属性

```html
<template>
  <div class="example-container">
    <div>
      <pro-layout :breadcrumb="breadcrumb" :activeName.sync="activeName" :tabs="tabs"></pro-layout>
    </div>
    <div>
      <pre>{{stringifyValue}}</pre>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        breadcrumb: [
          "首页",
          "用户登录"
        ],
        activeName: "/user/login",
        tabs: {
          "/user/login": {
            name: "用户登录",
            component: "pro-form",
            props: {
              model: {
                username: '',
                password: '',
              },
              rules: {
                username: [
                  {required: true, message: '请输入用户名', trigger: 'blur'},
                  {min: 2, max: 20, message: '长度在2至20个字符之间', trigger: 'blur'}
                ],
                password: [
                  {required: true, message: '请输入登录密码', trigger: 'blur'},
                  {min: 8, message: '密码长度应大于8个字符', trigger: 'blur'}
                ]
              },
              items: [
                {
                  name: '用户名',
                  field: 'username',
                  rule: 'username', // 可省略，省略时使用`field`字段值
                  component: 'el-input',
                  props: { // 子组件的props
                    placeholder: '请输入用户名',
                    minlength: 2,
                    maxlength: 20,
                  }
                },
                {
                  name: '密码',
                  field: 'password',
                  component: 'pro-password',
                  props: { // 子组件的props
                    minlength: 8,
                  }
                }
              ]
            }
          },
          "/user/register": {
            name: "用户注册",
            component: "pro-form",
            props: {
              model: {
                username: '',
                password: '',
                password_again: '',
              },
              rules: {
                username: [
                  {required: true, message: '请输入用户名', trigger: 'blur'},
                  {min: 2, max: 20, message: '长度在2至20个字符之间', trigger: 'blur'}
                ],
                password: [
                  {required: true, message: '请输入登录密码', trigger: 'blur'},
                  {min: 8, message: '密码长度应大于8个字符', trigger: 'blur'}
                ],
                password_again: [
                  {required: true, message: '请再次输入登录密码', trigger: 'blur'},
                  {min: 8, message: '密码长度应大于8个字符', trigger: 'blur'}
                ]
              },
              items: [
                {
                  name: '用户名',
                  field: 'username',
                  rule: 'username', // 可省略，省略时使用`field`字段值
                  component: 'el-input',
                  props: { // 子组件的props
                    placeholder: '请输入用户名',
                    minlength: 2,
                    maxlength: 20,
                  }
                },
                {
                  name: '密码',
                  field: 'password',
                  component: 'pro-password',
                  props: { // 子组件的props
                    minlength: 8,
                  }
                },
                {
                  name: '确认密码',
                  field: 'password_again',
                  component: 'pro-password',
                  props: { // 子组件的props
                    minlength: 8,
                  }
                }
              ]
            }
          }
        },
      }
    },

    computed: {
      stringifyValue() {
        return JSON.stringify(this.activeName, null, 4);
      }
    },
  }
</script>
```
:::


## ProCheckboxAll Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| value / v-model | 绑定值 | String / Number / Boolean | —      | —      | |
| el-checkbox-style | 指定radio的类型 | String | button / normal | button | |
| options | `radio-group`包裹的`radio`组 | Array / Function |  | []| [{ label: "1", name: "是" },{ label: "0", name: "否" }] |

## ProCheckboxAll Events
|事件名称	|说明	|回调参数 |
|---|---|---|
|change	|绑定值变化时触发的事件	|选中的 Radio label 值|

## ProCheckboxAll Inherit Attributes
请参考[Radio-group Attributes](https://element.eleme.cn/#/zh-CN/component/radio#radio-group-attributes)

## Checkbox Inherit Attributes
请参考[Radio Attributes](https://element.eleme.cn/#/zh-CN/component/radio#radio-attributes)

## Checkbox Button Inherit Attributes
请参考[Radio-button Attributes](https://element.eleme.cn/#/zh-CN/component/radio#radio-button-attributes)