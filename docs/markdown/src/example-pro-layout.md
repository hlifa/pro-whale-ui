<!--
 * @Author: your name
 * @Date: 2021-04-01 14:37:25
 * @LastEditTime: 2021-04-08 16:44:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-date-picker.md
-->
# ProLayout

高阶布局组件 - 组合了`ProTabs`和`ProBreadcrumb`，随标签页的切换自动更新面包屑，提供页头和页脚插槽，便于设置页头页脚元素，如页面提示信息

## 基础用法

:::snippet 通过`breadcrumb`传递基础面包屑路径，`active-name.sync`绑定当前激活的选项卡，`tabs`传递标签页列表配置

```html
<template>
  <div class="example-container">
    <div>
      <pro-layout :breadcrumb="breadcrumb" :active-name.sync="activeName" :tabs="tabs"></pro-layout>
    </div>
    <div>
      <pre>{{ stringifyValue }}</pre>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        breadcrumb: [
          "首页",
        ],
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

## 页头页脚插槽

:::snippet 提供页头和页脚插槽，便于设置页头页脚元素，如页面提示信息

```html
<template>
  <div class="example-container">
    <div>
      <pro-layout :breadcrumb="breadcrumb" :active-name.sync="activeName" :tabs="tabs">
        <template #header>
          <el-alert title="warning in header" type="warning" :closable="false"></el-alert>
        </template>
        <template #footer>
          <el-alert title="warning in footer" type="warning" :closable="false"></el-alert>
        </template>
      </pro-layout>
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
        ],
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


## ProLayout Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| active-name | 当前激活选项卡name绑定值 | String | —      | —      | |
| breadcrumb | 基础面包屑路径 | Array | [] | - | - |
| tabs | 标签页配置 | Object | - | {} | { 'tab1': { name: 'tab1',  component: ComponentA, paneProps: {...}, props: {...} } } |

## ProTabs Inherit Attributes
额外设置的`Attributes`会传递给`ElTabs`，
请参考[Tabs Attributes](https://element.eleme.cn/#/zh-CN/component/tabs#tabs-attributes)