<template>
  <div class="slide-bar-user">
    <div class="user-header">
      <span>作者</span>
    </div>
    <div class="user-body">
      <router-link :to="'/user/'+userInfo.loginname" class="user-avatar">
        <img :src="userInfo.avatar_url" alt="">
      </router-link>
      <span class="user-name">{{userInfo.loginname}}</span>
      <div>积分：{{userInfo.score}}</div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import { getUserByName } from '../api/api'

  export default {
    data () {
      return {
        userInfo: {}
      }
    },
    mounted () {
      PubSub.subscribe('loginName', (mes, data) => {
        getUserByName(data)
          .then(response => {
            this.userInfo = response.data.data
          })
      })
    }
  }
</script>

<style scoped>
  .slide-bar-user {
    background: white;
  }
  .user-header {
    padding: 10px;
    background: #f6f6f6;
  }
  .user-header span {
    font-size: 13px;
  }
  .user-body {
    padding: 10px;
    line-height: 2em;
  }
  .user-avatar {
    vertical-align: middle;
    margin-right: .5em;
    display: inline-block;
  }
  .user-avatar img {
    width: 48px;
    height: 48px;
  }
  .user-name {
    display: inline-block;
    font-size: 16px;
    color: #778087;
  }
</style>