<template>
 <div class="info-wrap">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content ">
          <div class="user-info">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

            <!-- <div class="radius-box">
              <img src="../assets/admin.jpg" alt="header_pic">
            </div> -->
            <!-- <div style="margin-bottom:20px">
              <el-button type="primary"><i class="el-icon-upload el-icon--left"></i>上传头像</el-button>
            </div> -->
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content" style="padding:0">
          <div class="user-msg">
            <h2>个人信息
              <el-button size="small" style="float:right" v-if="!editable" @click="editable=true">编辑</el-button>
            </h2>
            <div class="form-wrap" v-if="editable">
              <el-form :label-position="labelPosition" label-width="80px" :model="formUser">
                <el-form-item label="昵称">
                  <el-input v-model="formUser.name"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                  <el-input v-model="formUser.trueName"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-radio-group v-model="formUser.sex">
                    <el-radio label="1">男</el-radio>
                    <el-radio label="0">女</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="邮箱地址">
                  <el-input v-model="formUser.email"></el-input>
                </el-form-item>
                <el-form-item label="个人简介">
                  <el-input type="textarea" v-model="formUser.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" >提交</el-button>
                  <el-button @click="editable = false">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="user_info_text" v-if="!editable">
                <el-form label-position="right" label-width="100px" :model="formUser">
                      <el-form-item label="昵称：">
                        {{ formUser.name }}
                      </el-form-item>
                      <el-form-item label="真实姓名：">
                        {{ formUser.trueName }}
                        
                      </el-form-item>
                      <el-form-item label="性别：">
                        <span v-if="formUser.sex == '1'">男</span>
                        <span v-else>女</span>
                            
                      </el-form-item>
                      <el-form-item label="邮件地址：">
                        {{ formUser.email }}
                        
                      </el-form-item>
                      <el-form-item label="个人简介：">
                        {{ formUser.desc }}     
                      </el-form-item>
                </el-form>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:20px;">
            <el-col :span="8">
                <div id="income">
                  
                </div>
            </el-col>

            <el-col :span="12">
                <div id="interest">
                  
                </div>
            </el-col>

        </el-row>
 </div>
</template>

<script>
var echarts = require('echarts');
import {mapState} from "vuex";
export default {
  data() {
      return {
        imageUrl: '',
        labelPosition: 'right',
        editable:false,//编辑form默认为false
        formUser: {
          name: '小乔',
          trueName: '乔楚',
          sex: '0',
          desc:"爱耍酷的可爱的小男生中的型男",
          email:"jiubugaosuni@qisini.com"
        }
      };
    },
    computed:{
      ...mapState(["saveAdminHeader"])
    },
    mounted(){
      // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('income'));
        var myChart2 = echarts.init(document.getElementById('interest'));
        // 绘制收入图表
        myChart1.setOption({
            title: { text: '最近收入' },
            tooltip: {},
            xAxis: {
                data: ["3月","4月","5月","6月","7月","8月"]
            },
            yAxis: {},
            series: [{
                name: '收入',
                type: 'bar',
                data: [800, 1200, 1360, 1100, 1100, 1800]
            }]
        });
        // 绘制兴趣图表
        myChart2.setOption({
            title: { text: '兴趣爱好' },
            series : [
                {
                    name: '兴趣',
                    type: 'pie',
                    radius: '55%',
                    data:[
                        {value:500, name:'吃饭'},
                        {value:250, name:'睡觉'},
                        {value:100, name:'打豆豆'},
                        {value:100, name:'看电影'},
                        {value:50, name:'其他'}
                    ]
                }
            ]
        })
    },
    methods:{
      handleAvatarSuccess(res, file) {
        console.log(res.data,"data")
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(imageUrl,"url")
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        console.log(file,'file')
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-form-item{
  margin-bottom:4px;
}
h2{
  font-size: 24px;
  font-weight: normal;
  padding: 20px;
  border-bottom:1px solid #eee
}
.info-wrap{
  padding: 20px;
}
.grid-content{
  border-radius: 4px;
  padding: 20px;
  border:1px solid #eee;
  .user-info{
    text-align: center;
    padding:16px;
  }
}
.radius-box{
  width: 120px;
  height: 120px;
  margin:10px auto;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 28px;
  img{
    width: 100%;
  }
}
.form-wrap{
  padding:20px
}
#income,#interest{
  height: 400px;
}
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
 .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    }
    .el-upload:hover{
    border-color: #409EFF;
    }

</style>
