<template>
  <div id="app"> 
    <app-header></app-header>
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
import AppHeader from "@/components/common/AppHeader"
import AppNav from "@/components/common/AppNav";
export default {
  name: 'app',
  components: {
    AppNav,
    AppHeader
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
      console.log(targetName,'targetName')
      if(targetName == '/'||targetName =="/index") {
        return;
      }
      this.$store.commit('delete_tabs', targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.$store.commit('set_active_index', this.options[this.options.length-1].route);
          this.$router.push({path: this.activeIndex});
        } else {
          this.$router.push({path: '/index'});
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
          this.$store.commit('set_active_index', '/' + to.path.slice(1));
          break
        }
      }
      if (!flag) {
        console.log(to.path.split('/'),"to")
        this.$store.commit('add_tabs', {route: '/' + to.path.slice(1), name: to.name});
        this.$store.commit('set_active_index', '/' + to.path.slice(1));
      }
    }
  }
}
</script>

<style lang="scss">
//@import url('static/reset.scss');
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
      // overflow-y: scroll
    }
}
</style>
