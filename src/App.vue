<template>
  <div id="app">
    <div class="app-header">
      <div class="title">后台管理系统</div>
    </div>
    <div class="app-content">
      <div class="side-left">
        <app-nav></app-nav>
      </div>
      <div class="content-right">

      </div>
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/common/AppNav";
export default {
  name: 'App',
  components:{
    AppNav
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100%;
 flex-flow: column;
 overflow: hidden;
}
.app-header {
  padding:0 20px;
  color: #fff;
  font-size: 24px;
  flex: 0 0 60px;
  height: 60px;
  background-color:#2c3e50;
  line-height: 60px;
}
.app-content{
flex:1;
 display: flex;
    flex-flow: row;
    .side-left{
      flex:0 0 300px;
    }
    .content-right{
      flex: 1;
      padding:10px 20px
    }
}
</style>
