# myui(ui组件存放目录)
基于TS/JSX的vite工程  
vscode插件使用的volar

## 创建基础项目工程
``yarn create vite vite-demo --template vue-ts``
npm版本小于7，去掉中间的空--
``npm init vite@latest vite-demo -- --template vue-ts``  
构建的时候``vue-tsc --noEmit``这个命令会做类型检查，有错误会提示出来  
**env.d.ts：**vue组件类型声明

## 引入sass
``yarn add -D sass``

## 添加 jsx 支持
jsx语法最早出现于react中，babel默认解析转译出来的是针对react的，所以需要处理引入vite插件：@vitejs/plugin-vue-jsx
``yarn add -D @vitejs/plugin-vue-jsx``  
在``vite.config.ts``的plugins中引入vueJsx插件

# docs(文档)
## VitePress文档系统
安装vitepress``yarn add -D vitepress``  
新建docs目录  
添加脚本命令
```
"docs:dev": "vitepress dev docs",
"docs:build": "vitepress build docs",
"docs:serve": "vitepress serve docs"
```
### 配置VitePress
新建``.vitepress/config.ts``配置文件

#### 添加一个左侧菜单

#### 引入组件（vite-demo\docs\.vitepress\theme\index.ts）
.vitepress下新增theme文件夹,可以用来引用ui下的组件  
由于docs和ui是两套结构，对于jsx的支持也需要在docs中配置一遍
``import Button from '../../../ui/button/src/button'``
``app.component('d-button',Button),``

#### 文档写在``vite-demo\docs\components``下
产考对应的例子，需要注意空格符的问题，前面不要留空格

#### demo代码展开/收起
使用``vitepress-theme-demoblock``  
安装  
```
npm install -D vitepress-theme-demoblock
yarn add -D vitepress-theme-demoblock
```
注入插件  
在``.vitepress/config.ts``下配置
```
import demoblock from 'vitepress-theme-demoblock'
markdown: {
    config: (md) => {
        // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
        const { demoBlockPlugin } = demoblock
        md.use(demoBlockPlugin)
    }
}
```
在``.vitepress/theme/index.ts``下配置
```
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
//添加到配置项，这里规范要求大驼峰
app.component('Demo',Demo),
app.component('DemoBlock',DemoBlock)
```
#### [主题样式](https://vitepress.vuejs.org/guide/theming.html#extending-the-default-theme)
在``docs/.vitepress/theme/index.ts``中配置  
// 主题样式  
```import 'vitepress-theme-demoblock/theme/styles/index.css'```
// 插件的组件，主要是demo组件  
//这样的好处是所有需要的插件组件都不需要我们手动进行注册，全部在插件内部就能确定，未来插件有任何改动都不需要修改这里  
```import { registerComponents } from './register-components.js'```
需要在``package.json``添加``"register:components": "vitepress-rc"``命令并且执行一下  
最后加上``registerComponents(app)``

# 单元测试
#### 安装
- ``yarn add -D jest @types/jest`` 
- ``yarn add -D babel-jest @babel/preset-env``
  - 处理es6、ts
  - 需要配置``jest.config.js``
- ``yarn add -D @babel/preset-typescript``
  - 解决语法报错
  - 需要配置``jest.config.js``
- ``yarn add -D @vue/babel-plugin-jsx``
  - 需要配置``jest.config.js``
- ``yarn add -D @vue/test-utils``
  - 处理vue组件
  - 不用装
- ``yarn add -D vue-template-compiler``
  - 默认安装的``@vue/test-utils``是vue2版本的
  - 需要支持vue3组件库
  - 不用装
- ``yarn add -D @vue/test-utils@next``
  - 安装Vue3版本的@vue/test-utils@next

#### 增加脚本命令
```
"scripts": {
  "test": "jest" // 新增
},
```
#### 编写单元测试
默认每个组件的测试用例写在对应组件的src同层目录下的``__tests__``目录里面,测试文件格式``tree.spec.ts``

# 脚手架开发（cli）
- 依赖三方插件
  - ``commander``插件提供用于命令注册、参数解析、执行回调
  - ``inquirer``插件用于命令行交互
  - ``fs-extra``插件是对于nodejs文件Api的进一步封装
  - ``kolorist``插件用于输出颜色信息
- 安装依赖
  - ``yarn add -D commander inquirer fs-extra kolorist``
  - ``npm i -D commander inquirer fs-extra kolorist``
- 安装``esbuild``
  - 修改``package.json``script
此时执行下 dev 命令，然后重新开一个 shell 再执行 cli 命令，就可以测试下成果了。如果什么都不输入返回的应该是一个``{}``。  
如果使用npm需要加--：``npm run cli -- -t component``，传参需要添加--，类似参数透传给脚本。  
修改cli的package.json添加script
## create命令
!todo