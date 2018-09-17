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
        <div class="template-tab">
          <el-tabs v-model="activeIndex" type="border-card" closable v-if="options.length" @tab-click="tabClick" @tab-remove="tabRemove">
            <el-tab-pane :key="item.name" v-for="item in options" :label="item.name" :name="item.route">
               {{item.router}}
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="tab-content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/common/AppNav";
export default {
  name: 'app',
  components: {
    AppNav
  },
  methods: {
   // tab切换时，动态的切换路由
    tabClick () {
      let path = this.activeIndex;
     //  // 用户详情页的时候，对应了二级路由，需要拼接添加第二级路由
     //  if (this.activeIndex === '/userInfo') {
     //      path = this.activeIndex + '/' + this.$store.state.userInfo.name;
     //  }
      this.$router.push({path: path});
    },
    tabRemove (targetName) {
      // 首页不可删除
      if(targetName == '/') {
        return;
      }
      this.$store.commit('delete_tabs', targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.$store.commit('set_active_index', this.options[this.options.length-1].route);
          this.$router.push({path: this.activeIndex});
        } else {
          this.$router.push({path: '/'});
        }
      }
    }
  },
  computed: {
    options () {
      return this.$store.state.options;
    },
    activeIndex: {
      get () {
        return this.$store.state.activeIndex;
      },
      set (val) {
        this.$store.commit('set_active_index', val);
      }
    }
  },
  watch: {
    '$route'(to) {
      let flag = false;
      for (let option of this.options ) {
        
        if (option.name === to.name) {
          flag = true;
          this.$store.commit('set_active_index', '/' + to.path.split('/')[1]);
          break
        }
      }
      if (!flag) {
        this.$store.commit('add_tabs', {route: '/' + to.path.split('/')[1], name: to.name});
        this.$store.commit('set_active_index', '/' + to.path.split('/')[1]);
      }
    }
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
    }
}
</style>
