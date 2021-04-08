<!--
 * @Author: your name
 * @Date: 2021-04-01 14:37:25
 * @LastEditTime: 2021-04-08 19:25:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-checkbox-all.md
-->
# ProCheckboxAll

高阶多选框组 - 封装了`el-checkbox-group`组件，并带有`全选`功能

## 基础用法

:::snippet 在`pro-checkbox-all`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-checkbox-group`组件的全部属性

```html
<template>
  <el-container direction="vertical">
    <div>
      <pro-checkbox-all v-model="value" :options="options" size="small"></pro-checkbox-all>
    </div>
    <div>
      <pre>{{stringifyValue}}</pre>
    </div>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        value: ['Shanghai', 'Beijing', 'Guangzhou'],
        options: [
          { label: "Shanghai", name: "上海" },
          { label: "Beijing", name: "北京" },
          { label: "Guangzhou", name: "广州" },
          { label: "Shenzhen", name: "深圳" },
        ],
      }
    },

    computed: {
      stringifyValue() {
        return JSON.stringify(this.value, null, 4);
      }
    }
  }
</script>
```
:::

## 布局方向

:::snippet 通过`direction`设置单选框组的布局方向，可选: `horizontal` / `vertical`，默认`horizontal`，注：布局方向属性只对`el-checkbox-style` 为 `normal`时有效

```html
<template>
  <el-container direction="vertical">
    <div style="margin-bottom: 20px;">
      <pro-radio-group v-model="direction" :options="directionOptions" size="small"></pro-radio-group>
    </div>
    <div>
      <pro-checkbox-all v-model="value" :options="options" size="small" el-checkbox-style="normal" :direction="direction"></pro-checkbox-all>
    </div>
    <div>
      <pre>{{stringifyValue}}</pre>
    </div>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        direction: 'horizontal',
        directionOptions: [
          { label: 'horizontal', name: '水平' },
          { label: 'vertical', name: '垂直' },
        ],
        value: ['Shanghai', 'Beijing', 'Guangzhou'],
        options: [
          { label: "Shanghai", name: "上海" },
          { label: "Beijing", name: "北京" },
          { label: "Guangzhou", name: "广州" },
          { label: "Shenzhen", name: "深圳" },
        ],
      }
    },

    computed: {
      stringifyValue() {
        return JSON.stringify(this.value, null, 4);
      }
    }
  }
</script>
```
:::

## 异步用法
:::snippet `options`属性可以传入一个函数，该函数返回一个`Promise`实例，该`Promise`实例`resolve`了选项数组

```html
<template>
  <div>
    <pro-checkbox-all v-model="value" :options="options" size="small"></pro-checkbox-all>
    <div>
      <pre>{{stringifyValue}}</pre>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ['Shanghai', 'Beijing', 'Guangzhou'],
        options() {
          return new Promise((resolve) => {
            setTimeout(() => {
              return resolve([
                { label: "Shanghai", name: "上海" },
                { label: "Beijing", name: "北京" },
                { label: "Guangzhou", name: "广州" },
                { label: "Shenzhen", name: "深圳" },
              ])    
            }, 1000);
          })
        }
      }
    },

    computed: {
      stringifyValue() {
        return JSON.stringify(this.value, null, 4);
      }
    }
  }
</script>
```
:::

## ProCheckboxAll Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| value / v-model | 绑定值 | String / Number / Boolean | —      | —      |- |
| el-checkbox-style | 指定radio的类型 | String | button / normal | button |- |
| direction | 布局方向 | String | vertical / horizontal | horizontal | -|
| options | `radio-group`包裹的`radio`组 | Array / Function |  | []| [{ label: "1", name: "是" },{ label: "0", name: "否" }] |

## ProCheckboxAll Events
|事件名称	|说明	|回调参数 |
|---|---|---|
|change	|绑定值变化时触发的事件	|选中的值|

## ProCheckboxAll Inherit Attributes
请参考[Checkbox-group Attributes](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-group-attributes)

## Checkbox Inherit Attributes
请参考[Checkbox Attributes](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-attributes)

## Checkbox-button Inherit Attributes
请参考[Checkbox-button Attributes](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-button-attributes)