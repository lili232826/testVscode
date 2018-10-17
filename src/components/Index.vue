<template>
 <div class="wrap">
   <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in build" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img v-lazy="'../../static/images/' + item.pic" class="image">
          <div style="padding: 14px;">
            <span style="vertical-align: middle;">{{item.name}}</span>
            <el-rate
              v-model="item.rate"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
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
//var buildData=require("../../static/data/build.json");
//console.log(buildData)
export default {
  data () {
    return {
      build:[],
      currentDate: new Date()
    }
  },
  computed:{

  },
  mounted() {
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
.el-rate{
  display: inline-block;
}
.el-col {
    margin-bottom: 20px;
}
.image{
  width: 100%;
  height: 248px;
}
</style>
