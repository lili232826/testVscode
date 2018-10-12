<template>
 <div class="wrap">
   <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in build" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img v-lazy="'../../static/images/' + item.pic" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
   {{$route.name}}
 </div>

</template>
<script>
import {mapState} from "vuex";
import {mapGetters} from "vuex";
<<<<<<< HEAD
//var buildData=require("../../static/data/build.json");
//console.log(buildData)
export default {
  data () {
    return {
      build:[],
=======
var buildData=require("../../static/data/build.json");
console.log(buildData)
export default {
  data () {
    return {
      build:buildData,
>>>>>>> 8c08a85b4c2b0c7a7d353d46cce80de20edcc33b
      currentDate: new Date()
    }
  },
  computed:{

  },
  mounted() {
<<<<<<< HEAD
    var Vue=this;
    this.axios.get("/api/build",{
      params:{
        "id":102
      },
      headers:{
        take:"123"
      }
    }).then((res)=>{
      Vue.build=res.data.data;
      //console.log(res.data.data,"resdate")
    })
=======

>>>>>>> 8c08a85b4c2b0c7a7d353d46cce80de20edcc33b
  },
  methods:{
     
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/mixin.scss";
.wrap{
    @include padding(20px);
    
}
.el-col {
<<<<<<< HEAD
    margin-bottom: 20px;
}
=======
    margin-bottom: 20px;}
>>>>>>> 8c08a85b4c2b0c7a7d353d46cce80de20edcc33b
.image{
  width: 100%;
  height: 248px;
}
</style>
