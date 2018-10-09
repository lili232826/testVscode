<template>
  <div class="bg">
    <div class="form-wrap"> 
        <h3>系统登陆<i class="el-icon-view"></i></h3>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="loginForm" class="demo-ruleForm">
            <el-form-item label="" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')" style="width:100%">提交</el-button>
            </el-form-item>
        </el-form>

    </div>
  </div>
</template>
<script>
export default {
    name:"login",
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    mounted(){
      //this.fn()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      fn(){
        if(this.$route.query.redirect){
        //     let redirect = decodeURIComponent(this.$route.query.redirect);
              let redirect = this.$route.query.redirect;
              this.$router.push(redirect);
        }else{
              this.$router.push('/');
        }
      }
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


