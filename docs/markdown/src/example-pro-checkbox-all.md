<!--
 * @Author: your name
 * @Date: 2021-04-01 14:37:25
 * @LastEditTime: 2021-04-01 20:34:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-checkbox-all.md
-->
# ProCheckboxAll

高阶多选框组 - 

## 基础用法

:::snippet 在`pro-checkbox-all`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-radio-group`组件的全部属性

```html
<template>
  <!-- <div class="example-container"> -->
    <el-container direction="vertical">
    <div>
      <pro-checkbox-all v-model="value" :options="options" size="small"></pro-checkbox-all>
    </div>
    <div style="margin-top: 20px;">
      <pro-checkbox-all v-model="value" :options="options" size="small" el-checkbox-style="normal" direction="vertical"></pro-checkbox-all>
    </div>
    <div>
      <pre>{{stringifyValue}}</pre>
    </div>
    </el-container>
    
  <!-- </div> -->
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