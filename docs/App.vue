<!--
 * @Author: your name
 * @Date: 2021-03-22 17:44:02
 * @LastEditTime: 2021-04-08 15:53:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/src/App.vue
-->
<template>
  <div id="app">
    <el-container direction="vertical home">
      <el-header>
        <div class="home--header-logo">
          <img src="./assets/logo.png" />
        </div>
        <div class="home--header-title">PRO-WHALE-UI</div>
        <div class="home--header-github" @click="handleGitbubClick">
          <img src="./assets/github.svg" />
        </div>
      </el-header>
      <el-container>
        <el-aside class="home--left">
          <el-menu>
            <el-menu
              :default-active="activeComponentName"
              mode="vertical"
              :collapse="false"
              @select="handleSelect"
            >
              <el-submenu index="summary">
                <template slot="title"
                  ><div class="home--left-title">开发指南</div></template
                >
                <el-menu-item-group>
                  <template slot="title">Start</template>
                  <el-menu-item index="example-introduce"
                    ><el-link href="#Introduce">介绍</el-link></el-menu-item
                  >
                  <el-menu-item index="example-quick-start"
                    ><el-link href="#QuickStart"
                      >快速上手</el-link
                    ></el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="component">
                <template slot="title"
                  ><div class="home--left-title">组件</div></template
                >
                <el-menu-item-group>
                  <template slot="title">ProLayout</template>
                  <el-menu-item index="example-pro-tabs"
                    ><el-link href="#ProTabs">ProTabs</el-link></el-menu-item
                  >
                  <el-menu-item index="example-pro-layout"
                    ><el-link href="#ProLayout"
                      >ProLayout</el-link
                    ></el-menu-item
                  >
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">ProForm</template>
                  <el-menu-item index="example-pro-radio-group"
                    ><el-link href="#ProRadioGroup"
                      >ProRadioGroup</el-link
                    ></el-menu-item
                  >
                  <el-menu-item index="example-pro-checkbox-all"
                    ><el-link href="#ProCheckboxAll"
                      >ProCheckboxAll</el-link
                    ></el-menu-item
                  >
                  <el-menu-item index="example-pro-date-picker"
                    ><el-link href="#ProDateRangePicker"
                      >ProDateRangePicker</el-link
                    ></el-menu-item
                  >
                  <el-menu-item index="example-pro-select"
                    ><el-link href="#ProSelect"
                      >ProSelect</el-link
                    ></el-menu-item
                  >
                  <el-menu-item index="example-pro-base-form"
                    ><el-link href="#ProForm">ProForm</el-link></el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-menu>
        </el-aside>
        <el-main class="demo-block demo-form">
          <component :is="activeComponentName"></component>
        </el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      activeComponentName: "example-introduce",
    };
  },

  computed: {},

  methods: {
    handleSelect(index) {
      this.activeComponentName = index;
    },
    handleGitbubClick() {
      window.open("https://github.com/hlifa/pro-whale-ui");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Microsoft YaHei, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  color: #333333;
  font-size: 12px;
}

ul,
ol {
  list-style: none;
}

a {
  color: #333333;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  transition: color 0.3s;
  cursor: pointer;
}

a:active,
a:hover {
  text-decoration: none;
  outline: 0;
}

.vc-snippet-doc {
  min-width: 600px;
  color: #3f536e;
  font-size: 14px;
  line-height: 1.5;

  > .tip,
  > .warning {
    padding: 12px 16px;
    border-radius: 4px;
    margin: 20px 0;
    line-height: 1.3;
  }

  > .tip {
    background-color: #ecf8ff;
    border-left: 5px solid #6190e8;
  }

  > .warning {
    background-color: #fff6f7;
    border-left: 5px solid #fe6c6f;
  }

  > h1 {
    font-size: 28px;
    font-weight: 600;
    margin: 22px 0 18px;
  }

  > h2 {
    font-size: 22px;
    font-weight: 600;
    margin: 18px 0 10px;
  }

  > h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0 10px;
  }

  > p {
    line-height: 1.8;
    color: #3f536e;
    font-size: 14px;
    margin-bottom: 5px;
  }

  > p > code {
    background: #e6effb;
    border-radius: 3px;
    color: #5e6d82;
    padding: 2px 8px;
  }

  > table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #ebedf0;
    width: 100%;
    margin: 8px 0 16px;
    font-size: 14px;

    th,
    td {
      color: #314659;
      border: 1px solid #ebedf0;
      text-align: left;
      padding: 8px 10px;
      vertical-align: middle;

      code {
        background: #e6effb;
        border-radius: 3px;
        color: #5e6d82;
        padding: 2px 8px;
      }
    }

    th {
      white-space: nowrap;
      color: #333333;
      font-weight: 500;
      background-color: #fafafa;
    }
  }

  > .hljs {
    padding: 0;
  }

  > ol {
    > li {
      margin: 8px 0 8px 20px;
      padding-left: 0;
      list-style-type: decimal;
      line-height: 1.6;
    }
  }

  code {
    background: #e6effb;
    border-radius: 3px;
    color: #5e6d82;
    padding: 2px 8px;
  }

  a:not(.n-link) {
    text-decoration: none;
    color: #409eff;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a.n-snippent--markdown-it-anchor {
      opacity: 0;
    }

    &:hover a.n-snippent--markdown-it-anchor {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
}

.hljs > code {
  border: 1px solid #f0f2f7;
  background: #f9f9f9;
  font-family: Consolas, Menlo, Courier, monospace;
  display: block;
  font-size: 14px;
  padding: 8px 16px;
  line-height: 1.5;
  border-radius: 5px;
}

.hljs-comment {
  color: #608b4e;
}

.example-container {
}

.example-container > div + div {
  margin-top: 30px;
}

.demo-form .el-form {
  max-width: 460px;
}

.home {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.home--header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.08);
}

.home--header-logo {
  float: left;
  padding-left: 25px;
  height: 65px;
  line-height: 65px;
  overflow: hidden;
  cursor: pointer;

  > img {
    height: 32px;
    vertical-align: middle;
    border-style: none;
  }
}

.home--header-title {
  height: 65px;
  line-height: 65px;
  font-size: 25px;
  display: inline-block;
  padding-left: 12px;
  font-weight: 700;
}

.home--left {
  z-index: 30;
  top: 65px;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  width: 250px;
  font-size: 14px;
  margin: 30px 0;
  color: #3f536e;
  background: #fff;
  border-right: 1px solid #ececec;
}

.home--left-title {
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 4px 25px;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 700;
}

.home--left-link {
  font-size: 14px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 4px 25px;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 500;

  &:hover {
    color: #41a259;
  }
}

.home--header-github {
  position: absolute;
  height: 40px;
  width: 40px;
  right: 20px;
  top: 10px;
  color: #444444;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  > img {
    height: 100%;
    width: 100%;
  }
}

.router-link-exact-active {
  color: #41a259 !important;
  background-color: #eeffde !important;
  border-right: 3px solid #41a259 !important;
}

.home--content {
  height: calc(100% - 65px);
  overflow: auto;
  margin-top: 65px;
}

.home--content-page {
  padding-left: 250px;
}

.home--content-view {
  max-width: 1000px;
  padding: 30px 50px 60px 50px;
  margin: 0 auto;
}
.el-menu-item.is-active {
  background-color: #eeffde !important;
  border-right: 3px solid #41a259 !important;

  > a {
    color: #41a259 !important;
  }
}
</style>
