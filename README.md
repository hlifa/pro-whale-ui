# ProWhaleUI
ProWhaleUI是基于ElementUI而开发的一套高阶组件(ProComponent)，用于后台场景中快速搭建CRUD页面，提供了更高级别的抽象，开箱即用，同时不失灵活性，期望可以满足绝大多数业务需求。

## 安装
```bash
# 安装最新版
npm install --save pro-whale-ui

# 安装指定版本
npm install --save pro-whale-ui@0.1.6
```

## 在项目中使用
### 完整引入 ProWhaleUI
```js
import Vue from 'vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import ProWhaleUI from "pro-whale-ui";
import "pro-whale-ui/whale-ui.css";

import App from './App.vue';

Vue.use(ElementUI);

Vue.use(ProWhaleUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

```

### 按需引入
```js
import Vue from 'vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { ProRadioGroup, ProCheckboxAll } from "pro-whale-ui";
import "pro-whale-ui/whale-ui.css";

import App from './App.vue';

Vue.use(ElementUI);

Vue.use(ProRadioGroup);
Vue.use(ProCheckboxAll);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### Document
See [ProWhaleUI Document](https://hlifa.github.io/pro-whale-ui/).
