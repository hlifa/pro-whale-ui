<!--
 * @Author: your name
 * @Date: 2021-04-01 14:37:25
 * @LastEditTime: 2021-04-08 17:59:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-date-picker.md
-->
# ProDateRangePicker

高阶日期时间范围选择器

## 基础用法

:::snippet 在`pro-date-range-picker`上绑定`v-model`即可使用

```html
<template>
  <div class="example-container">
    <div>
      <pro-date-range-picker v-model="value"></pro-date-range-picker>
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


## ProDateRangePicker Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| value / v-model | 绑定值 | date(DateTimePicker) / array(DateTimeRangePicker) | —      | —      | |

## ProDateRangePicker Events
|事件名称	|说明	|回调参数 |
|---|---|---|
|change	|绑定值变化时触发的事件	|选择的时间范围值|

## ProDateRangePicker Inherit Attributes
请参考[DateTimePicker Attributes](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)
