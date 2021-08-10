<!--
 * @Author: your name
 * @Date: 2021-08-10 19:57:44
 * @LastEditTime: 2021-08-10 19:59:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-datetime-range-picker.md
-->
# ProDatetimeRangePicker

高阶日期时间范围选择器

## 基础用法

:::snippet 在`pro-datetime-range-picker`上绑定`v-model`即可使用

```html
<template>
  <div class="example-container">
    <div>
      <pro-datetime-range-picker v-model="value"></pro-datetime-range-picker>
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
        value: [1617206400000, 1617379200000],
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


## ProDatetimeRangePicker Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| value / v-model | 绑定值 | date(DateTimePicker) / array(DateTimeRangePicker) | —      | —      | |

## ProDatetimeRangePicker Events
|事件名称	|说明	|回调参数 |
|---|---|---|
|change	|绑定值变化时触发的事件	|选择的时间范围值|

## ProDatetimeRangePicker Inherit Attributes
请参考[DateTimePicker Attributes](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)
