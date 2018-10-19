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

##个人信息映入图标echarts
1:编辑信息是两部分的显示,form 和 列表
2:npm install echarts-gl --save
3:切换主题，你加载了不同的主题样式表

##vuex管理数据

######state 管理全局数据
state:{
    msgNum:100
}
使用 this.$store.state.msgNum

######mutations 里面可以修改state里面的数据,(同步函数)；
mutations:{
    setMsgNum(state,parme){
        state.msgNum=parme
    }
}
调用 this.$store.commit('setMsgNum',999)

######getters 直接对数据进行处理，各个组件在引用
getters: {
    arrFilter(state) {
        return state.arrList.filter(item => item % 2 !== 0)
    }
},
调用this.$store.getters.arrFilter

## axois
拦截器
Vue.axios.interceptors.request.use();
Vue.axios.interceptors.response.use();

##图片懒加载
vue-lazyload
注意：loading图片在static文件下，使用相对路径；
在assets里面，使用require("路径")；

##登陆
1: router.beforeEach(),先进登陆页面,main.js里面；
2：模拟接口:webpack.dev.conf.js
3：判断用户名密码
4:根据是否存在token判断是否进去登陆页面

##登出
panduan 
清空state里面的option

##图片上传
待完善