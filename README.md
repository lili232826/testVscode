# vue-shop

> qll

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##关于图标
1:直接托管在线引入font-awesome/4.7.0

##关于实现左侧菜单
1:侧边栏开启router模式，见element-ui文档,显示对应得内容；
2:监听路由（watch）添加tab项
3：在监听tab切换，删除，手动切换路由，显示对应内容

##用户管理
1:element-ui的
2:排序，删除，选择一行或多行，分页
3:引入了tableList.js文件当数据
