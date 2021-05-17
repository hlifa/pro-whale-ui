# ProNumberRange

高阶数值范围选择器 

## 基础用法

:::snippet 基础用法

```html
<template>
  <div>
    <pro-number-range v-model="ageRange" :min="min" :max="max" size="small"></pro-number-range>

    <div><pre>{{ stringifyFormData }}</pre></div>
  </div>
  
</template>

<script>
 export default {
   data() {
     return {
       min: 0,
       max: 100,
       ageRange: [0, 0]
     }
   },

   computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.ageRange, null, 4);
    }
  },
 }
</script>
```
:::