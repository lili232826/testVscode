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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
