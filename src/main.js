// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueLazyload from "vue-lazyload"
import 'element-ui/lib/theme-chalk/index.css'
import VueWaves from 'vue-waves/dist/vue-waves.js'
Vue.config.productionTip = false; //阻止 vue 在启动时生成生产提示

Vue.use(VueWaves); //水波纹按钮
Vue.use(ElementUI);

<<<<<<< HEAD
let loadingPic = require('./assets/loading.gif');
Vue.use(VueLazyload, {
    // preLoad: 1.3,
    error: './assets/logo.png',
    loading: loadingPic,
    //attempt: 1
})

// 全局导航钩子,没有token进去登陆页；
router.beforeEach((to, from, next) => {      
        if (to.path == "/login") {         
            next(); 
            //console.log("hahaha")     
        } else {                  
            next({ path: "/login" })             
        }   
    })
    // router.beforeEach((to, from, next) => {
    //     //判断该路由是否需要登录权限
    //     // if (to.meta.requireAuth) {
    //     //通过vuex state获取当前的token是否存在
    //     // console.log(isEmptyObject(store.state.user))
    //     if (store.getters.userInfo) {
    //         next();
    //     } else {
    //         next({
    //             path: '/login',
    //             //query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //         })
    //     }
    //     //} else {
    //     // next();
    //     // }
    // })

=======
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './assets/logo.gif',
    loading: './assets/loading.gif',
    attempt: 1
})

>>>>>>> 8c08a85b4c2b0c7a7d353d46cce80de20edcc33b
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})