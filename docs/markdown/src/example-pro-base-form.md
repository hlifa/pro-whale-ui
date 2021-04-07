<!--
 * @Author: your name
 * @Date: 2021-03-30 10:51:16
 * @LastEditTime: 2021-04-04 20:28:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/docs/markdown/src/example-pro-base-form.md
-->
# ProBaseForm
高阶表单 - 无需布局，设置一些必须的配置即可快速搭成表单

## 基本用法

:::snippet 基本用法

```html
<template>
  <div>
    <pro-form
      size="medium"
      direction="rtl"
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

## 联动用法
:::snippet `form-item`之间具有联动逻辑，一个组件的状态会影响另一个组件的状态或另一个组件的显示 / 隐藏

```html
<template>
  <div>
    <pro-form
      size="medium"
      direction="auto"
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
              this.showFormItem('mobile');
              this.showFormItem('code');
              this.hideFormItem('username');
              this.hideFormItem('password');
              this.enableRule('mobile');
              this.enableRule('code');
              this.disableRule('username');
              this.disableRule('password');
            } else {
              this.showFormItem('username');
              this.showFormItem('password');
              this.hideFormItem('mobile');
              this.hideFormItem('code');
              this.enableRule('username');
              this.enableRule('password');
              this.disableRule('mobile');
              this.disableRule('code');
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
:::snippet 单文件子组件`import`对象

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

### 动态加载单文件子组件
:::snippet 动态加载的组件不会打到最终的构建包里，而是当真正需要组件的时候才去加载`chunk`，可以使打包后的js尺寸更小

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

### 基于渲染函数的子组件
:::snippet 基于渲染函数的子组件，比较难写，不建议

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

## Form 的 layout 切换
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
    <div class="form-data-container"><pre>{{ stringifyFormData }}</pre></div>
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
          // disabled: true,
          readonly: true,
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