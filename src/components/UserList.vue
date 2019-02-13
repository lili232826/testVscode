<template>
<div class="table-wrap">
  <el-table
    ref="singleTable"
    :data="pageDate"
    stripe
    border
    highlight-current-row
    :default-sort = "{prop: 'date', order: 'descending'}"
    @current-change="handleCurrentChange"
    @selection-change="handleSelectionChange"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      label="日期"
      prop="date"
      sortable
      width="180"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterTimeHandler">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover  trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper" >
            <el-tag size="medium" >{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="地址"
      prop="address"
      :formatter="formatDress">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="标签"
      prop="tag"
      width="100"
      filter-placement="bottom-end"
      :filters="tagArr"
      :filter-method="filterTagHandler">
      <template slot-scope="scope">
        <el-tag :type="scope.row.tag === '家' ? 'primary':'success'" disable-transitions style="margin-left: 10px">{{ scope.row.tag }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleInfo(scope.$index, scope.row)">详情</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(pageDate, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page-container" style="margin-top:20px">
    <el-pagination
      layout="total,sizes,prev, pager, next,jumper"
      background
      :current-page="currentPage4"
      :page-sizes="[10 ,20]"
      :page-size="10"
      :total="tableData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentPageChange">
    </el-pagination>
  </div>
  <div style="margin-top: 20px">
    <p>单选（注意默认排序得影响）</p>
    <el-button @click="setCurrent(tableData[0])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
    <p>多选（注意默认排序得影响）</p>
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">选中第二行和第三行</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  <router-link :to="{ name: '用户管理22', params: { id: 333},query:{name:'lili'}}"><span class="notice_title">跳转路由传参</span></router-link>
</div>
</template>

<script>
import tableList from "@/data/tableList";
//console.log(tableList,"list")
  export default {
    data() {
      return {
        tableData: tableList,
        currentRow: null,
        tagArr:[{text:"家",value:"家"},{text:"公司",value:"公司"}],
        currentPage4: 1,
        pageDate:[],
        size:10,
      }
    },
    mounted:function(){
      var vm=this;
      this.getList();
    },
    created: function () {
      //this.pageDate=this.tableData.splice(0,this.size);
    },
    watch: {
      $route (to, from) {
        // 对路由变化作出响应...
        console.log('watch')
        console.log(to,from,'router')
      }
    },
    methods: {
      getList(){
        var vm=this;
        var start=(vm.currentPage4-1)*vm.size;
        vm.pageDate= vm.tableData.slice(start,start+vm.size)
      },
      setCurrent(row) {
        console.log(this.$refs)
        this.$refs.singleTable.setCurrentRow(row);
      },
      toggleSelection(rows){
        if (rows) {
          rows.forEach(row => {
            this.$refs.singleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.singleTable.clearSelection();
        }
      },
      handleCurrentChange(val) {
        console.log(val,"单选项")
       // this.currentRow = val;
      },
      handleSelectionChange(val){
        console.log(val,"多选项触发得事件")
      },
      filterTagHandler(value, row, column) {
        return row.tag === value;
      },
      filterTimeHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      formatDress(row, column) {
        //console.log(row,"row")
        return row.address + "hhhhhh";
      },
      handleSizeChange(val){//切换每页的条数
        //console.log(`Size:${val}`);
        this.size=val;
        this.getList()
      },
      handleCurrentPageChange(val){//切换当前的页码
        //console.log(`Current:${val}`);
        this.currentPage4=val;
        this.getList()
      },
      handleInfo(index,row){
        this.$router.push('/user2/'+index)
      },
      handleEdit(index, row) {
        //console.log(index, row);
      },
      handleDelete(pageDate, row) {
        console.log(pageDate, row.id);
        this.$confirm('确定删除此用户吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //console.log(this)
          pageDate.splice(pageDate.findIndex(item => item.id === row.id), 1)
          //this.tableData.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
      
    }
  }
</script>
<style lang="scss">

.table-wrap{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
  .name-wrapper{
    display: inline-block;
  }
}
</style>
