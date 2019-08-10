<template>
  <div class="main">
    <nav class="nav-tabs">
      <ul class="clearfloat">
        <li><router-link to="/all" class="topic-tab">全部</router-link></li>
        <li><router-link to="/good" class="topic-tab">精华</router-link></li>
        <li><router-link to="/share" class="topic-tab">分享</router-link></li>
        <li><router-link to="/ask" class="topic-tab">问答</router-link></li>
        <li><router-link to="/job" class="topic-tab">招聘</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .main {
    font-size: 14px;
  }
  .nav-tabs {
    padding: 10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .nav-tabs>ul>li {
    float: left;
    margin: 0 10px;
  }
  .topic-tab {
    display: inline-block;
    padding: 3px 4px;
  }
  .topic-tab:link,
  .topic-tab:visited {
    color: #80bd01;
  }
  .router-link-active {
    background: #80bd01;
    color: white !important;
    border-radius: 3px;
    padding: 3px 4px;
  }
</style>