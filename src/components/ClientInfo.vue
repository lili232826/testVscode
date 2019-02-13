<template>
  <div class="box"> 客户详情</div>
</template>

<script>
//var echarts = require('echarts');
//import {mapState} from "vuex";
export default {
  data() {
      return {
        
      }
    },
    watch: {
      '$route': "changerouter"
    },
    computed:{
      
    },
    created(){
       
      this.changerouter();
    },
    mounted(){
      //console.log(this.$route.params,"ppppppppppp") 
    },
    methods:{
     changerouter(){
       console.log('change-router');
       console.log(this.$route.params,"params") 
       console.log(this.$route.query,"query")
     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box{
  color:red;
}
</style>
