<!--
 * @Author: your name
 * @Date: 2021-04-01 14:37:25
 * @LastEditTime: 2021-04-08 16:42:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-date-picker.md
-->
# ProTabs

高阶标签页 - 预设卡片化样式，用于后台标准布局`ProLayout`的部件之一，标签页中承载的内容支持异步组件加载

## 基础用法

:::snippet 在`pro-tabs`上设置`active-name.sync`绑定当前激活选项卡，通过`tabs`属性设置标签页选项，可以设置自定义组件

```html
<template>
  <div class="example-container">
    <div>
      <pro-tabs :active-name.sync="activeName" :tabs="tabs"></pro-tabs>
    </div>
    <div>
      <pre>{{stringifyValue}}</pre>
    </div>
  </div>
</template>

<script>
  import Login from '../../components/login'
  import Register from '../../components/register'

  export default {
    data() {
      return {
        activeName: "/user/login",
        tabs: {
          "/user/login": {
            name: "用户登录",
            component: Login,
          },
          "/user/register": {
            name: "用户注册",
            component: Register,
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

## 异步组件

:::snippet 通过`import(...)`来设置Vue 的异步组件和 Webpack 的代码分割功能，可以减少最终构建包的体积

```html
<template>
  <div class="example-container">
    <div>
      <pro-tabs :active-name.sync="activeName" :tabs="tabs"></pro-tabs>
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
        activeName: "/user/login",
        tabs: {
          "/user/login": {
            name: "用户登录",
            component: () => {
              return import('../../components/login');
            },
          },
          "/user/register": {
            name: "用户注册",
            component: () => {
              return import('../../components/register');
            },
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


## ProTabs Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| active-name | 当前激活标签页选项卡的name | String  | —      | —      | |
| tabs | 标签页配置 | Object | - | {} | { 'tab1': { name: 'tab1',  component: ComponentA, paneProps: {...}, props: {...} } } |

## ProTabs Inherit Attributes
请参考[Tabs Attributes](https://element.eleme.cn/#/zh-CN/component/tabs#tabs-attributes)

## Tab-pane Attributes
通过对`tabs`属性中的元素设置`paneProps`属性来传递Tab-pane Attributes
请参考[Tab-pane Attributes](https://element.eleme.cn/#/zh-CN/component/tabs#tab-pane-attributes)

## Tab-component Attributes
Tab-component指`tab-pane`中包裹的自定义组件，
通过对`tabs`属性中的元素设置`props`属性来传递Tab-component Attributes