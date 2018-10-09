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
var buildData=require("../../static/data/build.json");
console.log(buildData)
export default {
  data () {
    return {
      build:buildData,
      currentDate: new Date()
    }
  },
  computed:{

  },
  mounted() {

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
    margin-bottom: 20px;}
.image{
  width: 100%;
  height: 248px;
}
</style>
