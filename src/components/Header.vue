<template>
  <div class="navbar">
    <div class="navbar-inner">
      <a href="/">
        <img src="../assets/cnodejs_light.svg" alt="">
      </a>
      <input type="text">
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .navbar {
    height: 50px;
    width: 100%;
    background: #444;
  }
  .navbar-inner {
    width: 1400px;
    height: 100%;
    margin: auto;
  }
  .navbar-inner>a {
    width: 120px;
    padding-top: 8px;
    display: block;
    float: left;
  }
  .navbar-inner>input {
    display: inline-block;
    width: 230px;
    height: 26px;
    margin-left: 26px;
    margin-top: 12px;
    float: left;
    border: none;
    border-radius: 25px;
    background: gray;
    transition: background-color 0.5s;
  }
  .navbar-inner>input:focus, .navbar-inner>input:hover {
    background: white;
  }
  .navbar-inner>ul {
    float: right;
    list-style: none;
  }
  ul>li {
    display: inline;
    float: left;
    padding: 0 15px;
    line-height: 50px;
  }
  li>a {
    display: inline-block;
    text-decoration: none;
    font-size: 13px;
  }
  a:link, a:visited {
    color: #ccc;
  }
</style>