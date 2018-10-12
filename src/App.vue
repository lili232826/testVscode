<template>
  <div id="app"> 
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'APP'
}
</script>
<style lang="scss">
<<<<<<< HEAD
=======
@import "./assets/style/common.scss";

//@import url('static/reset.scss');
>>>>>>> 8c08a85b4c2b0c7a7d353d46cce80de20edcc33b
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
  height: 100%;
<<<<<<< HEAD
=======
  flex-flow: column;
  overflow: hidden;
}
.app-content{
    flex:1;
    display: flex;
    flex-flow: row;
    .side-left{
      flex:0 0 240px;
    }
    .content-right{
      flex: 1;
      padding:10px 20px
    }
    .el-tabs--border-card{
      box-shadow: none;
      border-bottom: 0;
    }
    .tab-content{
      height: calc(100% - 70px);
      border:1px solid #dcdfe6;
      border-top-color:transparent;
      overflow-y: scroll
    }
>>>>>>> 8c08a85b4c2b0c7a7d353d46cce80de20edcc33b
}
</style>


