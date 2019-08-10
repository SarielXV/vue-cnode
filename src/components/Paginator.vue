<template>
  <!--<div class="paginator">-->
    <!--<div class="paginator-body">-->
      <!--<button @click="changePage(1)"> 首页 </button>-->
      <!--<button @click="changePage(currentPage-1)"> 上一页 </button>-->
      <!--<button v-if="judge">...</button>-->
      <!--<button v-for="(page,index) in pageArr" @click="changePage(page)" :class="[{active: currentPage===page}]" :key="index">{{page}}</button>-->
      <!--<button @click="changePage(currentPage+1)">下一页</button>-->
    <!--</div>-->
  <!--</div>-->
  <el-pagination
      :page-size="20"
      :pager-count="6"
      layout="prev, pager, next"
      :total="1000"
      @current-change="currentChange">
  </el-pagination>
</template>

<script>
  export default {
    methods: {
      currentChange(val) {
        this.$emit('handleList', val)
      }
    }
    // data() {
    //   return {
    //     pageArr: [1,2,3,4,5,'...'],
    //     currentPage: 1
    //   }
    // },
    // methods: {
    //   changePage(btn) {
        // this.currentPage = btn
        // if (btn === '<<') {
        //   this.currentPage = 1
        //   this.pageArr = [1,2,3,4,5,'...']
        // } else if (btn === this.pageArr[4]) {
        //   this.pageArr.shift();
        //   this.pageArr.splice(4, 0, this.pageArr[3] + 1);
        // } else if (btn === this.pageArr[0] && btn !== 1) {
        //   this.pageArr.unshift(this.pageArr[0] - 1);
        //   this.pageArr.splice(5, 1);
        // }
    //     this.currentPage = btn;
    //     if (btn === 0) {
    //       this.currrentPage = 1;
    //       // $(this.pageArr[0]).addClass("curtPage");
    //     }
    //     if (btn > 4) {
    //       this.judge = true;
    //     } else {
    //       this.judge = false;
    //     }
    //     if (btn === this.pageArr[4]) {
    //       this.pageArr.shift();
    //       this.pageArr.splice(4, 0, this.pageArr[3] + 1);
    //     } else if (btn === this.pageArr[0] && btn !== 1) {
    //       this.pageArr.unshift(this.pageArr[0] - 1);
    //       this.pageArr.splice(5, 1);
    //     }
    //     this.$emit('handleList', this.currentPage)
    //   }
    // }
  }
</script>

<style >
  /*.paginator {*/
    /*padding: 10px;*/
    /*height: 30px;*/
  /*}*/
  /*.paginator-body {*/
    /*border-radius: 3px;*/
  /*}*/
  /*.paginator-body button {*/
    /*height: 100%;*/
    /*border: 1px solid #e1e1e1;*/
    /*color: #778087;*/
    /*padding: 4px 12px;*/
    /*background: white;*/
    /*outline: none;*/
  /*}*/
  /*.active {*/
    /*color: #80bd01;*/
  /*}*/
  .el-pagination {
    padding: 15px !important;
    font-weight: 500 !important;
  }
  .active,
  .active:hover{
    color: #80bd01 !important;
  }
</style>