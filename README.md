# WeexDriver

> WeexDriver

## getting start

```bash
npm install
```

## file structure

* `src/*`: all source code
* `app.js`: entrance of the Weex page
* `build/*`: some build scripts
* `dist/*`: where places generated code
* `assets/*`: some assets for Web preview
* `index.html`: a page with Web preview and qrcode of Weex js bundle
* `weex.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build both two js bundles for Weex and Web
npm run build

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 8080 port
npm run serve

# start weex-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins in `webpack.config.js`.

## 语法
| - | weex | vue |
| ---- | ---- | ---- |
| 生命周期 | ready: function() {}	 | mounted: function() {} |
| 条件指令 | if="{{!foo}}" | v-if="!foo" |
| 循环指令 | repeat="{{item in list}}" | v-for="item in list" |
| 样式类名 | class="btn btn-{{type}}" | :class="['btn', 'btn-' + type]" |
| 内联样式 | style="color:{{textColor}}" | :style="{ color: textColor }" |
| 事件绑定| onclick="handler" | @click="handler" |
| 原生事件 | onclick="xxx" | @click.native="xxx" |
| 数据绑定 | src="{{rightItemSrc}}" | :src="rightItemSrc" |
| 数据初始化 | data: { value: 'x' } | data: function() { return { value: 'x' } } |
| 标签ID | id="xxx" | ref="xxx" |
| 获取节点| this.$el('xxx') | this.$refs.xxx
[详细请戳](http://www.cnblogs.com/hehey/p/6295482.html)

## done

仿饿了么app商户食品页

* 商户食品列表页
* 点击menu的时候右侧食品列表滚动到对应项
* 动画-添加食品按钮点击时的滚动效果

## 当前效果图
<img src="https://github.com/ALiaoo/WeexDriver/blob/master/src/screenshots/shop.jpeg" width="365" height="619"/>

# WeexDriver
