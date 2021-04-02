# ProRadioGroup

高阶单选框组 - 无需对多个单选框布局

## 基础用法

:::snippet 在`pro-radio-group`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-radio-group`组件的全部属性

```html
<template>
  <div class="example-container">
    <div>
      <pro-radio-group v-model="value" :options="options" size="small"></pro-radio-group>
    </div>
    <div>
      <pro-radio-group v-model="value" :options="options" size="small" el-radio-style="normal" direction="vertical"></pro-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '1',
        options: [
          { label: "1", name: "是" },
          { label: "0", name: "否" },
        ],
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
    <pro-radio-group v-model="value" :options="options" size="small"></pro-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 'mike',
        options() {
          return new Promise((resolve) => {
            setTimeout(() => {
              return resolve([
                { label: "mike", name: "牛奶" },
                { label: "coffee", name: "咖啡" },
              ])    
            }, 1000);
          })
        }
      }
    }
  }
</script>
```
:::

## 单独设置`Radio`的属性
:::snippet `options`数组的元素对象可以提供一个`props`属性，来单独设置`radio`的属性

```html
<template>
  <div>
    <pro-radio-group v-model="value" :options="options" size="small"></pro-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '1',
        options: [
          { label: "1", name: "是" },
          { label: "0", name: "否", props: { disabled: true } },
        ]
      }
    }
  }
</script>
```
:::

## 监听`change`事件
:::snippet `ProRadioGroup`绑定值变化时触发`change`事件
```html
<template>
  <div class="example-container">
      <pro-radio-group v-model="value" :options="options" size="small" @change="handleChange"></pro-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '1',
      options: [
        { label: "1", name: "是" },
        { label: "0", name: "否" },
      ]
    }
  },
  methods: {
    handleChange(checked) {
      alert(`You selected is ${checked}`);
    }
  }
}
</script>
```
:::


## ProRadioGroup Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| value / v-model | 绑定值 | String / Number / Boolean | —      | —      | |
| el-radio-style | 指定radio的类型 | String | button / normal | button | |
| options | `radio-group`包裹的`radio`组 | Array / Function |  | []| [{ label: "1", name: "是" },{ label: "0", name: "否" }] |

## ProRadioGroup Events
|事件名称	|说明	|回调参数 |
|---|---|---|
|change	|绑定值变化时触发的事件	|选中的 Radio label 值|

## ProRadioGroup Inherit Attributes
请参考[Radio-group Attributes](https://element.eleme.cn/#/zh-CN/component/radio#radio-group-attributes)

## Radio Inherit Attributes
请参考[Radio Attributes](https://element.eleme.cn/#/zh-CN/component/radio#radio-attributes)

## Radio Button Inherit Attributes
请参考[Radio-button Attributes](https://element.eleme.cn/#/zh-CN/component/radio#radio-button-attributes)