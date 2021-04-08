# ProSelect

高阶Select选择器 - 封装了`el-select`选择器，无需自己布局

## 基础用法

:::snippet 在`pro-select`中绑定`v-model`，通过`options`属性设置可选项，同时继承了`el-select`组件的全部属性

```html
<template>
  <div class="example-container">
    <div>
      <pro-select v-model="value" :options="options"></pro-select>
    </div>

    <div>
      <pro-select v-model="value" :options="options" :disabled="true"></pro-select>
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
        value: "Shanghai",
        options: [
          { value: "Shanghai", label: "上海" },
          { value: "Beijing", label: "北京" },
          { value: "Guangzhou", label: "广州" },
          { value: "Shenzhen", label: "深圳" },
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
  <div class="example-container">
    <div>
      <pro-select v-model="value" :options="options"></pro-select>
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
        value: "",
        options() {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                { value: "Shanghai", label: "上海" },
                { value: "Beijing", label: "北京" },
                { value: "Guangzhou", label: "广州" },
                { value: "Shenzhen", label: "深圳" },
              ]);
            }, 1000);
          })
        },
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

## 多选

:::snippet 为`el-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapse-tags`属性将它们合并为一段文字。

```html
<template>
  <div class="example-container">
    <div>
      <pro-select v-model="value" :options="options" multiple></pro-select>
    </div>

    <div>
      <pro-select v-model="value" :options="options" multiple collapse-tags></pro-select>
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
        value: ["Shanghai", "Beijing"],
        options: [
          { value: "Shanghai", label: "上海" },
          { value: "Beijing", label: "北京" },
          { value: "Guangzhou", label: "广州" },
          { value: "Shenzhen", label: "深圳" },
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

## 自定义模板

:::snippet 将自定义的 HTML 模板插入`pro-select`的 作用域 slot 中即可

```html
<template>
  <div class="example-container">
    <div>
      <pro-select v-model="value" :options="options">
        <template v-slot="option">
          <span style="float: left">{{ option && option.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ option && option.value }}</span>
        </template>
      </pro-select>
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
        value: "",
        options: [
          { value: "Shanghai", label: "上海" },
          { value: "Beijing", label: "北京" },
          { value: "Guangzhou", label: "广州" },
          { value: "Shenzhen", label: "深圳" },
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

## 分组

:::snippet 将`layout`设置为`group`，并传入分组数据，可将备选项设置为分组显示

```html
<template>
  <div class="example-container">
    <div>
      <pro-select layout="group" v-model="value" :options="options">
      </pro-select>
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
        value: "",
        options: [
          {
            label: '热门城市',
            options: [
              {
                value: 'Shanghai',
                label: '上海'
              }, 
              {
                value: 'Beijing',
                label: '北京'
              }
            ]
          }, 
          {
            label: '城市名',
            options: [
              {
                value: 'Chengdu',
                label: '成都'
              }, 
              {
                value: 'Shenzhen',
                label: '深圳'
              }, 
              {
                value: 'Guangzhou',
                label: '广州'
              }, 
              {
                value: 'Dalian',
                label: '大连'
              }
            ]
        }],
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

## ProSelect Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| value / v-model | 绑定值 | String / Number / Boolean | —      | —      | |
| layout| 备选项布局方式 | String | single / group | single | - |
| options | 备选项数组 | Array / Function |  | [] | - |

## ProSelect Events
|事件名称	|说明	|回调参数 |
|---|---|---|
|change	|绑定值变化时触发的事件	| 绑定值 |

## ProSelect Inherit Attributes
请参考[Select Attributes](https://element.eleme.cn/#/zh-CN/component/select#select-attributes)

## Option Group Attributes
通过传递`group.props`来设置，请参考[Option Group Attributes](https://element.eleme.cn/#/zh-CN/component/select#option-group-attributes)

## Option Attributes
通过传递`option.props`来设置，请参考[Option Attributes](https://element.eleme.cn/#/zh-CN/component/select#option-attributes)