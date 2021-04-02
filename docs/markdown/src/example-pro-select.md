# ProSelect

高阶Select选择器 - 

## 基础用法

:::snippet 在`pro-checkbox-all`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-radio-group`组件的全部属性

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

:::snippet 在`pro-checkbox-all`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-radio-group`组件的全部属性

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

## 基础多选

:::snippet 在`pro-checkbox-all`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-radio-group`组件的全部属性

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

:::snippet 在`pro-checkbox-all`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-radio-group`组件的全部属性

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

:::snippet 在`pro-checkbox-all`中绑定`v-model`，通过`options`属性设置多个单选的选项，同时继承了`el-radio-group`组件的全部属性

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