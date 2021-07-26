<!--
 * @Author: your name
 * @Date: 2021-03-30 10:51:16
 * @LastEditTime: 2021-07-26 21:00:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-base-form.md
-->
# ProForm
高阶表单 - 预设多种布局样式及默认行为，无需布局表单项，可快速生成一个表单且适应多种场景

## 基本用法

:::snippet 基本用法，通过`model`绑定表单数据，`rules`设置表单项数据检查，`items`设置表单项样式及包裹的自定义组件

```html
<template>
  <div>
    <pro-form
      size="medium"
      :model="formData" 
      :rules="formRules" 
      :items="formItems"
      :submitButtonLoading="submitButtonLoading"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitButtonLoading: false,
      formData: {
        username: '',
        password: '',
      },
      formRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在2至20个字符之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {min: 8, message: '密码长度应大于8个字符', trigger: 'blur'}
        ]
      },
      formItems: [
        {
          name: '用户名',
          field: 'username',
          rule: 'username', // 可省略，省略时使用`field`字段值
          trim: true,
          component: 'el-input',
          props: { // 子组件的props
            placeholder: '请输入用户名',
            minlength: 2,
            maxlength: 20,
            prefixIcon: 'el-icon-user'
          }
        },
        {
          name: '密码',
          field: 'password',
          component: 'pro-password',
          props: { // 子组件的props
            minlength: 8,
            prefixIcon: 'el-icon-lock'
          }
        }
      ]
    }
  },

  computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      this.submitButtonLoading = true;
      setTimeout(() => {
        alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
        this.submitButtonLoading = false;
      }, 2000);
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    },
  },
}
</script>

<style>
.form-data-container {
  margin-left: 80px;
}
</style>
```
:::

## 表单文本方向

:::snippet 通过`direction`设置表单内文本输入框的文本方向，有三种可选: `ltr`: 满足`希伯来语或阿拉伯语`的显示需求; `rtl`: 满足英语等大部分语言的显示需求; `auto`: 自动检测表单项的输入文本，根据语言设置文本方向

```html
<template>
  <div>
    <div>
      <pro-radio-group v-model="direction" :options="options" size="small" style="margin: 0 0 20px 80px;"></pro-radio-group>
    </div>
    <pro-form
      size="medium"
      :direction="direction"
      :model="formData" 
      :rules="formRules" 
      :items="formItems"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: 'ltr',
      options: [
        { label: "ltr", name: "左->右" },
        { label: "rtl", name: "右->左" },
        { label: "auto", name: "自动检测" },
      ],
      formData: {
        username: '',
        password: '',
      },
      formRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在2至20个字符之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {min: 8, message: '密码长度应大于8个字符', trigger: 'blur'}
        ]
      },
      formItems: [
        {
          name: '用户名',
          field: 'username',
          rule: 'username', // 可省略，省略时使用`field`字段值
          component: 'el-input',
          props: { // 子组件的props
            placeholder: '请输入用户名',
            minlength: 2,
            maxlength: 20,
            prefixIcon: 'el-icon-user'
          }
        },
        {
          name: '密码',
          field: 'password',
          component: 'pro-password',
          props: { // 子组件的props
            minlength: 8,
            prefixIcon: 'el-icon-lock'
          }
        }
      ]
    }
  },

  computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    },
  },
}
</script>

<style>
.form-data-container {
  margin-left: 80px;
}
</style>
```
:::

## 表单项联动
### 1. 设置`onChange`函数，由变动表单项主动触发联动逻辑

:::snippet `form-item`之间具有联动逻辑，一个组件的状态会影响另一个组件的状态或另一个组件的显示 / 隐藏

```html
<template>
  <div>
    <pro-form
      size="medium"
      :model="formData"
      :rules="formRules"
      :items="formItems"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    function validateMobile(rule, value, callback) {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return callback(new Error('请输入正确的手机号'))
      }
      callback()
    }
    function validateCode(rule, value, callback) {
      if (!/^\d{6}$/.test(value)) {
        return callback(new Error('请输入正确的验证码'))
      }
      callback()
    }

    return {
      formData: {
        login_type: 'verify_code',
        mobile: '15999839976',
        code: 'أذهب إلى',
        username: '',
        password: '',
      },
      formRules: {
        mobile: [
          {required: true, message: '请输入手机号登录', trigger: 'blur'},
          {validator: validateMobile, trigger: 'blur'}
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {validator: validateCode, trigger: 'blur'}
        ],
        username: [
          false,
          {required: true, message: '请输入用户名登录', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在2至20个字符之间', trigger: 'blur'}
        ],
        password: [
          false,
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {min: 8, message: '密码长度应大于8个字符', trigger: 'blur'}
        ]
      },
      formItems: [
        {
          name: '登录方式',
          field: 'login_type',
          component: 'pro-radio-group',
          props: { // 子组件的props
            options: [
              {label: 'verify_code', name: '验证码登录'},
              {label: 'password', name: '密码登录'}
            ]
          },
          onChange(newValue, oldValue) {
            if (newValue === 'verify_code') {
              this.showFormItems(['mobile', 'code']);
              this.hideFormItems(['username', 'password']);
              this.enableRules(['mobile', 'code']);
              this.disableRules(['username', 'password']);
            } else {
              this.showFormItems(['username', 'password']);
              this.hideFormItems(['mobile', 'code']);
              this.enableRules(['username', 'password']);
              this.disableRules(['mobile', 'code']);
            }
          }
        },
        {
          name: '手机号',
          field: 'mobile',
          component: {
            render: function (h, context) {
              const handleClick = function () {
                alert('验证码已发送')
              }
              return <el-input {...context.data}>
                      <el-button slot="append" type="primary" vOn:click={handleClick}>发送验证码</el-button>
                    </el-input>;
            }
          },
          props: { // 子组件的props
            placeholder: '请输入手机号登录',
            prefixIcon: 'el-icon-mobile',
          },
        },
        {
          name: '验证码',
          field: 'code',
          component: 'el-input',
          props: { // 子组件的props
            placeholder: '请输入验证码',
            prefixIcon: 'el-icon-message',
          }
        },
        {
          name: '用户名',
          field: 'username',
          rule: 'username', // 可省略，省略时使用`field`字段值
          component: 'el-input',
          hide: true,
          props: { // 子组件的props
            placeholder: '请输入用户名',
            minlength: 2,
            maxlength: 20,
            prefixIcon: 'el-icon-user'
          }
        },
        {
          name: '密码',
          field: 'password',
          component: 'pro-password',
          hide: true,
          props: { // 子组件的props
            placeholder: '请输入登录密码',
            minlength: 8,
            prefixIcon: 'el-icon-lock'
          }
        }
      ]
    }
  },

  computed: {
    stringifyFormData() {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    }
  }
}
</script>
```

:::

### 2. 设置`watch`数组，侦听其他表单项变化，触发联动逻辑

:::snippet `form-item`之间具有联动逻辑，一个组件的状态会影响另一个组件的状态或另一个组件的显示 / 隐藏

```html
<template>
  <div>
    <pro-form
      size="medium"
      :model="formData"
      :rules="formRules"
      :items="formItems"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    function validateMobile(rule, value, callback) {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return callback(new Error('请输入正确的手机号'))
      }
      callback()
    }
    function validateCode(rule, value, callback) {
      if (!/^\d{6}$/.test(value)) {
        return callback(new Error('请输入正确的验证码'))
      }
      callback()
    }

    return {
      formData: {
        login_type: 'verify_code',
        mobile: '15999839976',
        code: 'أذهب إلى',
        username: '',
        password: '',
      },
      formRules: {
        mobile: [
          {required: true, message: '请输入手机号登录', trigger: 'blur'},
          {validator: validateMobile, trigger: 'blur'}
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {validator: validateCode, trigger: 'blur'}
        ],
        username: [
          false,
          {required: true, message: '请输入用户名登录', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在2至20个字符之间', trigger: 'blur'}
        ],
        password: [
          false,
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {min: 8, message: '密码长度应大于8个字符', trigger: 'blur'}
        ]
      },
      formItems: [
        {
          name: '登录方式',
          field: 'login_type',
          component: 'pro-radio-group',
          props: { // 子组件的props
            options: [
              {label: 'verify_code', name: '验证码登录'},
              {label: 'password', name: '密码登录'}
            ]
          },
        },
        {
          name: '手机号',
          field: 'mobile',
          component: {
            render: function (h, context) {
              const handleClick = function () {
                alert('验证码已发送')
              }
              return <el-input {...context.data}>
                      <el-button slot="append" type="primary" vOn:click={handleClick}>发送验证码</el-button>
                    </el-input>;
            }
          },
          props: { // 子组件的props
            placeholder: '请输入手机号登录',
            prefixIcon: 'el-icon-mobile',
          },
          watch: [
            {
              expOrFn: 'login_type',
              cb: function (newVal, oldVal) {
                if (newVal === 'verify_code') {
                  this.showFormItem('mobile');
                  this.enableRule('mobile');
                } else {
                  this.hideFormItem('mobile');
                  this.disableRule('mobile');
                }
              }
            }
          ]
        },
        {
          name: '验证码',
          field: 'code',
          component: 'el-input',
          props: { // 子组件的props
            placeholder: '请输入验证码',
            prefixIcon: 'el-icon-message',
          },
          watch: [
            {
              expOrFn: 'login_type',
              cb: function (newVal, oldVal) {
                if (newVal === 'verify_code') {
                  this.showFormItem('code');
                  this.enableRule('code');
                } else {
                  this.hideFormItem('code');
                  this.disableRule('code');
                }
              }
            }
          ]
        },
        {
          name: '用户名',
          field: 'username',
          rule: 'username', // 可省略，省略时使用`field`字段值
          component: 'el-input',
          hide: true,
          props: { // 子组件的props
            placeholder: '请输入用户名',
            minlength: 2,
            maxlength: 20,
            prefixIcon: 'el-icon-user'
          },
          watch: [
            {
              expOrFn: 'login_type',
              cb: function (newVal, oldVal) {
                if (newVal === 'verify_code') {
                  this.hideFormItem('username');
                  this.disableRule('username');
                } else {
                  this.showFormItem('username');
                  this.enableRule('username');
                }
              }
            }
          ]
        },
        {
          name: '密码',
          field: 'password',
          component: 'pro-password',
          hide: true,
          props: { // 子组件的props
            placeholder: '请输入登录密码',
            minlength: 8,
            prefixIcon: 'el-icon-lock'
          },
          watch: [
            {
              expOrFn: 'login_type',
              cb: function (newVal, oldVal) {
                if (newVal === 'verify_code') {
                  this.hideFormItem('password');
                  this.disableRule('password');
                } else {
                  this.showFormItem('password');
                  this.enableRule('password');
                }
              }
            }
          ]
        }
      ]
    }
  },

  computed: {
    stringifyFormData() {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    }
  }
}
</script>
```
:::

## 动态加载子组件的4种方式

### 全局注册子组件
:::snippet 全局注册子组件
```html
<template>
  <div>
    <pro-form
      size="medium"
      :model="formData" 
      :items="formItems"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        lunch: 'fish',
      },
      formItems: [
        {
          name: '中午吃啥',
          field: 'lunch',
          component: 'pro-radio-group',
          props: { // 子组件的props
            options: [
              {label: 'fish', name: '清蒸鲈鱼'},
              {label: 'chicken', name: '照烧鸡饭'},
            ]
          }
        },
      ]
    }
  },

  computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    },
  },
}
</script>

<style>
.form-data-container {
  margin-left: 80px;
}
</style>
```
:::

### 单文件子组件`import`对象
:::snippet 通过`import ComponentA from 'path/to/component-a'`导入的单文件组件对象

```html
<template>
  <div>
    <pro-form
      size="medium"
      :model="formData" 
      :items="formItems"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
import ProRadioGroup from '@/../packages/pro-radio-group/index';

export default {
  data() {
    return {
      formData: {
        lunch: 'fish',
      },
      formItems: [
        {
          name: '中午吃啥',
          field: 'lunch',
          component: ProRadioGroup,
          props: { // 子组件的props
            options: [
              {label: 'fish', name: '清蒸鲈鱼'},
              {label: 'chicken', name: '照烧鸡饭'},
            ]
          }
        },
      ]
    }
  },

  computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    },
  },
}
</script>

<style>
.form-data-container {
  margin-left: 80px;
}
</style>
```
:::

### 动态加载单文件组件
:::snippet 动态加载的组件不会打到最终的构建包里，而是当真正需要组件的时候才去加载代码`chunk`，使用这种方式可以避免最终构建包体积不断膨胀

```html
<template>
  <div>
    <pro-form
      size="medium"
      :model="formData" 
      :items="formItems"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        lunch: 'fish',
      },
      formItems: [
        {
          name: '中午吃啥',
          field: 'lunch',
          component: function () {
            return import('@/../packages/pro-radio-group/index');
          },
          props: { // 子组件的props
            options: [
              {label: 'fish', name: '清蒸鲈鱼'},
              {label: 'chicken', name: '照烧鸡饭'},
            ]
          }
        },
      ]
    }
  },

  computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    },
  },
}
</script>

<style>
.form-data-container {
  margin-left: 80px;
}
</style>
```
:::

### 基于渲染函数`render`的函数组件
:::snippet 基于渲染函数的函数组件，比较难写，不建议使用

```html
<template>
  <div>
    <pro-form
      size="medium"
      :model="formData" 
      :items="formItems"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        lunch: 'fish',
      },
      formItems: [
        {
          name: '中午吃啥',
          field: 'lunch',
          component: {
            render: (h, context) => {
              return h('pro-radio-group', context.data, context.children);
            }
          },
          props: { // 子组件的props
            options: [
              {label: 'fish', name: '清蒸鲈鱼'},
              {label: 'chicken', name: '照烧鸡饭'},
            ]
          }
        },
      ]
    }
  },

  computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    },
  },
}
</script>

<style>
.form-data-container {
  margin-left: 80px;
}
</style>
```
:::

### 基于渲染函数+JSX的子组件
:::snippet 基于渲染函数+JSX的子组件，JSX的写法跟vue模板写法相似，更符合直观

```html
<template>
  <div>
    <pro-form
      size="medium"
      :model="formData" 
      :items="formItems"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        lunch: 'fish',
      },
      formItems: [
        {
          name: '中午吃啥',
          field: 'lunch',
          component: {
            render: (h, context) => {
              return <pro-radio-group { ...context.data } />;
            }
          },
          props: { // 子组件的props
            options: [
              {label: 'fish', name: '清蒸鲈鱼'},
              {label: 'chicken', name: '照烧鸡饭'},
            ]
          }
        },
      ]
    }
  },

  computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.formData, null, 4);
    }
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    },
  },
}
</script>

<style>
.form-data-container {
  margin-left: 80px;
}
</style>
```
:::

## Form 预设4种 layout 
:::snippet

```html
<template>
  <div>
    <pro-radio-group v-model="layout" :options="layoutOptions" size="medium" style="margin: 0 0 20px 80px;"></pro-radio-group>

    <pro-form
      :layout="layout"
      :visible.sync="visible"
      :model="resolvedFormData" 
      :items="resolvedFormItems"
      :rules="resolvedFormRules"
      @onSubmit="onSubmit"
      @onValidateError="onValidateError"
    >
    </pro-form>
    <div class="form-data-container"><pre>Layout: {{ layout }}</pre><pre>FormData: {{ stringifyFormData }}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: 'normal',
      visible: false,
      layoutOptions: [
        {label: 'normal', name: '常用'},
        {label: 'modal', name: '弹出框'},
        {label: 'drawer', name: '抽屉'},
        {label: 'query-filter', name: '查询过滤'},
      ],
      formData: {
        username: 'hulifa',
        password: '',
      },
      formRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 20, message: '长度在2至20个字符之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {min: 8, message: '密码长度应大于8个字符', trigger: 'blur'}
        ]
      },
      formItems: [
        {
          name: '用户名',
          field: 'username',
          rule: 'username', // 可省略，省略时使用`field`字段值
          component: 'el-input',
          props: { // 子组件的props
            placeholder: '请输入用户名',
            minlength: 2,
            maxlength: 20,
            prefixIcon: 'el-icon-user'
          },
        },
        {
          name: '密码',
          field: 'password',
          component: 'pro-password',
          props: { // 子组件的props
            placeholder: '请输入登录密码',
            minlength: 8,
            prefixIcon: 'el-icon-lock'
          }
        }
      ],
      queryFormData: {
        publish_datetime: '',
        status: 'all',
        keyword: '',
        operator: '',
      },
      queryFormItems: [
        {
          name: '发布时间',
          field: 'publish_datetime',
          component: 'el-date-picker',
          props: { // 子组件的props
            type: "datetimerange",
            valueFormat: "timestamp",
            pickerOptions: {
                shortcuts: [
                    {
                        text: "最近一周",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() -
                                    3600 * 1000 * 24 * 7
                            );
                            picker.$emit("pick", [
                                start,
                                end,
                            ]);
                        },
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() -
                                    3600 *
                                        1000 *
                                        24 *
                                        30
                            );
                            picker.$emit("pick", [
                                start,
                                end,
                            ]);
                        },
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() -
                                    3600 *
                                        1000 *
                                        24 *
                                        90
                            );
                            picker.$emit("pick", [
                                start,
                                end,
                            ]);
                        },
                    },
                  ],
              },
              rangeSeparator: "至",
              startPlaceholder: "开始时间",
              endPlaceholder: "结束时间",
              align: "right",
          }
        },
        {
          name: '状态',
          field: 'status',
          component: 'pro-radio-group',
          props: { // 子组件的props
            options: [
              {label: 'all', name: '全部'},
              {label: 'pending', name: '待审核'},
              {label: 'passed', name: '审核通过'},
              {label: 'rejected', name: '审核拒绝'},
            ]
          }
        },
        {
          name: '关键词',
          field: 'keyword',
          component: 'el-input',
          props: { // 子组件的props
            placeholder: '请输入关键词搜索',
          }
        },
        {
          name: '操作人',
          field: 'operator',
          component: 'el-input',
          props: { // 子组件的props
            placeholder: '请输入操作人搜索',
          }
        },
      ]
    }
  },

  computed: {
    stringifyFormData: function () {
      return JSON.stringify(this.resolvedFormData, null, 4);
    },
    resolvedFormData() {
      if (this.layout === 'query-filter') {
        return this.queryFormData;
      } else {
        return this.formData;
      }
    },
    resolvedFormRules() {
      if (this.layout === 'query-filter') {
        return {};
      } else {
        return this.formRules;
      }
    },
    resolvedFormItems() {
      if (this.layout === 'query-filter') {
        return this.queryFormItems;
      } else {
        return this.formItems;
      }
    },
  },

  watch: {
    layout(val) {
      this.visible = ['modal', 'drawer'].indexOf(val) >= 0;
    },
  },

  methods: {
    onSubmit(form, formData) {
      alert(
            "Reading to submit, form-data: `" +
              JSON.stringify(formData, null, 4) +
              "`"
          );
    },
    onValidateError(form, formData) {
      alert('form-data validate error!');
    },
  },
}
</script>

<style>
.form-data-container {
  margin-left: 80px;
}
</style>
```

:::

## ProForm Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| model | 表单数据对象 | Object | —      | —      | - |
| rules | 表单验证规则对象 | Object | - | - | - |
| direction | 表单内文本输入域的文字方向 | String | ltr / rtl / auto | ltr | - |
| button-align | 表单底部按钮对齐方式 | String | left / right | left | - |
| submit-button-props | 表单提交按钮属性 | Object | - | { type: "primary", submitText: "提交" } | - |
| reset-button-props | 表单重置按钮属性 | Object | - | { type: "info", resetText: "重置" } | - |
| cancel-button-props | 表单取消按钮属性，默认不可见 | Object | - | { type: "", cancelText: "取消", style: { display: 'none' } } | - |
| cancel-default-submit | 取消提交按钮点击事件的默认行为: 校验表单数据，而是直接抛出事件由用户处理 | Boolean | - | false | - |
| cancel-default-reset | 取消重置按钮点击事件的默认行为: 重置表单数据，而是直接抛出事件由用户处理 | Boolean | - | false | - |


## ProForm Events
|事件名称	|说明	|回调参数 |
|---|---|---|
|onSubmit	| 表单提交，数据校验成功时触发的事件	| Function(elForm: VueComponent, model: Object) |
|onValidateError	| 表单提交，数据校验失败时触发的事件	| Function(elForm: VueComponent, model: Object) |
|onReset	| 表单重置触发的事件，，将所有字段值重置为初始值并移除校验结果	| Function(elForm: VueComponent) |
|onCancel	| 点击取消按钮触发的事件	| Function(elForm: VueComponent) |


## ProForm Inherit Attributes
请参考[ElForm Attributes](https://element.eleme.cn/#/zh-CN/component/form#form-attributes)

## ProFormItem Attributes
| 参数 | 说明     | 类型   | 可选值 | 默认值 | 示例 |
| ---- | -------- | ------ | ------ | ------ | ----- |
| name | 表单项label | String | —      | —      | - |
| field | 表单项绑定值对应的数据字段 | String | - | - | - |
| rule | 表单项对应的数据校验规则字段，默认与`field`相同 | String | - | - | - |
| hide | 表单项隐藏/显示开关 | Boolean | - | false | - |
| readonly | 表单项是否只读，将以文本节点显示表单项 | Boolean | - | false | - |
| disabled | 表单项是否禁止编辑，表单项不可编辑 | Boolean | - | false | - |
| component | 表单项包裹的自定义组件 | String / Object / Function | - | - | - |
| props | 传递给表单项包裹的自定义组件的Attributes | Object | - | - | - |
| onChange | 表单项包裹的自定义组件绑定值变化时触发的联动逻辑 | Function | - | - | - |
| watch | 侦听其他表单项数据字段的变化，触发的联动逻辑  | Array | - | - | - |