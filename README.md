# 关于 #
v0.1.0
由 `vue init webpack` 生成模板改写而来
# 使用 #
同 vue-cli模板

开发`npm run dev`
生产`npm run build`

### html ###

page级html创建在src目录中
页面html中不需手动
```
<link href=""></link>
<script src=""></script>
```
引入项目本身样式与js文件

### js ###

js文件分为两种。
1. 与html对应的页面级js文件创建在`src/js`(**必须**)中，且需与page级html同名(**作为webpack文件入口**)。
2. 其他库等或自定义工具js文件位置可自定义，需在页面级js文件中使用import引入。
构建时，会被添加至html文件中

### 样式文件 ###

支持css/Less/SCSS/Sass/stylus
样式文件在页面级js文件使用`import`引入。
less等预编译样式文件的工具文件(如公用变量声明、函数等)需在对应样式文件中使用`@import`引入

### 注意 ###
即html本身的引入 link 与 script 的职能交给了页面级js文件

# 补充 #

相关示例可查看src目录