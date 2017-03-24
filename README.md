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

## done

仿饿了么app商户食品页

* 商户食品列表页
* 点击menu的时候右侧食品列表滚动到对应项
* 动画-添加食品按钮点击时的滚动效果

## 当前效果图
<img src="https://github.com/ALiaoo/WeexDriver/blob/master/src/screenshots/shop.jpeg" width="365" height="619"/>

# WeexDriver
