<template>
 <div class="components-container">
   {{$route.name}}
   <div class='component-item'>
      <el-button   v-waves.button type="primary">水波纹效果</el-button>
      <code class='code-part'>水波纹 v-directive</code>
    </div>
 </div>

</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button,button:hover{
  color: #fff;
  background-color: #409EFF;
}
</style>
