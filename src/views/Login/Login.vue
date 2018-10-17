<template>
  <div class="bg">
    <div class="form-wrap"> 
        <h3>系统登陆<i class="el-icon-view"></i></h3>
        <el-form :model="LoginForm2" status-icon :rules="rules2" ref="loginForm" class="demo-ruleForm">
            <el-form-item label="" prop="name">
                <el-input type="text" v-model="LoginForm2.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
                <el-input type="password" v-model="LoginForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')" style="width:100%">提交</el-button>
            </el-form-item>
        </el-form>

    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import { mapMutations,mapActions } from 'vuex'
export default {
    name:"login",
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } 
        callback()
      };  
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
        callback()
      };   
      return {
        LoginForm2: {
          name: '',
          pass: '',
        },
        rules2: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    mounted(){

    },
    methods: {
      submitForm(formName) {
        var Vue=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post("/api/login",{
              'username':Vue.LoginForm2.name,
              'password':Vue.LoginForm2.pass
            }).then((res)=>{
              if(res.data.error){
                alert(res.data.error)
              }else{
                alert("欢迎777"+res.data);
                // 按一天8小时工作制设置过期时间
                Cookies.set('userToken', res.data,{ expires: 1/3}); //设置token
                alert(Cookies.get('userToken'),"cookies")
               // Cookies.set('userId', res.data,{ expires: 1/3}); //设置用户id，
                //Vue.setUserName( res.data)//设置用户名
                //this.$store.commit('setUser',res.data)
                this.$router.push('/');
                //this.$router.go(1);
              }
            }).catch(function (error) {
              //console.log(error);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      ...mapActions([
        'setUserName'
      ])
     
    }
}

</script>
<style lang="scss">
.bg{
  width: 100%;
  height: 100%;
  background:#464851 url("../../assets/login_bg1.png") center no-repeat;
  background-size:50% auto;
  position: relative;
}
.form-wrap{
  width: 400px;
  background-color:rgba(000,000,000,0.6);
  border-radius: 10px;
  padding: 40px 20px;
  margin: 250px auto;
  left: 0;
  right: 0;
  position: absolute;
  .el-input__inner{
    background-color: transparent;
    color: #fff
  }
  h3{
    color: #fff;
    font-size: 24px;
    text-align: center;
    i{
      margin-left: 10px;
    }
  }
}
</style>


