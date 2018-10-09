<template>
 <div>
   {{$route.name}}
  <div>
    <el-button size="small">{{activeIndex}}</el-button>
    <el-button size="small">{{msgNum}}</el-button>
    <el-button size="small">{{id}}</el-button>
    <el-button size="small">{{name}}</el-button>
    <el-tag >{{arrFilter}}</el-tag>
  </div>
  <router-view/>
 </div>

</template>

<script>
import {mapState} from "vuex";
import {mapGetters} from "vuex";
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState({
      activeIndex: 'activeIndex',//字符串activeIndex等于activeIndex => state.activeIndex
      msgNum:state => state.msgNum,
      id:state => state.testFnObj.id,
      name(state){
        return state.testFnObj.name + this.msg;
      }
    }),
    // arrFilter () {
    //   return this.$store.getters.arrFilter
    // },
    ...mapGetters([
      'arrFilter'
    ])
    
  },
  mounted() {
    var Vue=this;
    var loading=null;
    // 添加请求拦截器
    Vue.axios.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log("before")
          loading = Vue.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });
    // 添加响应拦截器
    Vue.axios.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      console.log("after")
      loading.close();
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });

    this.getAjax();
  },
  methods:{
      getAjax:function () {
        console.log(this.axios)
        this.axios.get('/static/test.json')
          .then(function (response) {
            console.log(response.data,"data");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
