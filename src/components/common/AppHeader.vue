<template>
    <div class="app-header">
        后台管理系统
        <div style="float:right;">
            <el-dropdown @command="setUser">
                <span class="el-dropdown-link">
                    <span class="user-name">admin</span>
                    <div class="user-pic">
                        <img src="../../assets/admin.jpg" alt="头像">
                    </div>
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <router-link class='inlineBlock' to="/index/personalInfo">
                        <el-dropdown-item command="">个人信息</el-dropdown-item>
                    </router-link>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>切换主题</el-dropdown-item>
                    <el-dropdown-item divided>退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        setUser(command){
            this.$message('click on item ' + command);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-header {
  padding:0 20px;
  color: #fff;
  font-size: 24px;
  flex: 0 0 60px;
  height: 60px;
  background-color:#2c3e50;
  line-height: 60px;
  .user-pic{
      width: 40px;
      height: 40px;
      display: inline-block;
      border-radius: 50%;
      overflow: hidden;
      vertical-align: middle;
     
      img{
          width: 100%;
      }
  }
  i{
         color: #fff
     }
  .user-name{
    color:#fff;
    margin-right:10px;
  }
}

</style>
