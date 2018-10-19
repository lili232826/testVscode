<template>
    <div class="app-header">
        后台管理系统
        <div style="float:right;">
            <span style="font-size:14px;">评论 <el-badge class="mark" :value="msgNum" /></span>
            <el-dropdown @command="set">
                <span class="el-dropdown-link">
                    <span class="user-name">{{msgUser}}</span>
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
                    <el-dropdown-item><span @click="dialogVisible = true">切换主题</span></el-dropdown-item>
                    <el-dropdown-item ><span @click="signOut">退出登陆</span></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog
            title="更改主题颜色"
            :visible.sync="dialogVisible"
            width="50%" >
            <el-form label-position="left" label-width="130px">
                <el-form-item label="请选择主题颜色">
                  <el-radio-group v-model="themeValue">
                    <el-radio label="red">红色</el-radio>
                    <el-radio label="blue">蓝色</el-radio>
                    <el-radio label="green">绿色</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleChangeTheme">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import { global } from "../../global/global.js"
import { mapMutations,mapActions } from 'vuex'
export default {
    data(){
        return {
            dialogVisible:false,
            themeValue:localStorage.getItem("themeValue") ? localStorage.getItem("themeValue") : 'blue'
        }
    },
    methods:{
        //换肤
        
        handleChangeTheme(){
            var vm = this;
            global.changeTheme(vm.themeValue);
            console.log('hahahhah')
            this.dialogVisible = false;
        },
        set(command){
            //this.$message('click on item ' + command);
        },
        // setMsgNum(){
        //     this.$store.commit('setMsgNum',999)
        // },
        //同下面一个意思
        ...mapMutations([
            'setMsgNum',
            'clearOption',
            
        ]),
        // setCount () {
        //     this.$store.dispatch('setCount', {count: 1233})
        // },
        ...mapActions([
            'setCount'// 将 `this.setCount()` 映射为 `this.$store.dispatch('setCount')`

        ]),
        signOut(){
            console.log("out")
            Cookies.remove('userToken');
            this.$store.commit('setToken',Cookies.get('userToken'))
            this.clearOption()// //清空tab项，options
            this.$router.push('/login')
        }
    },
    mounted:function(){
        this.setMsgNum(98);
        this.setCount({count: 1233});//active方法改变msgNum
        
    },
    computed:{
        msgNum(){
            return this.$store.state.msgNum;
        },
        msgUser(){
            return Cookies.get("userToken");
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
