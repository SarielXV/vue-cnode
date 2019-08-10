<template>
  <div style="background: #e1e1e1">
    <div class="sidebar">
      <User/>
    </div>
    <div class="user-info">
      <div class="user-header"><a href="/">主页</a></div>
      <div class="user-body">
        <img :src="userInfo.avatar_url" class="avatar" :title="userInfo.loginname">
        <span class="name">{{userInfo.loginname}}</span>
        <div class="user-profile">
          <span>{{userInfo.score}} 积分</span>
          <span>{{userCollect.length}}个话题收藏</span>
          <span>注册时间 {{userInfo.create_at | dateFormat}}</span>
        </div>
      </div>
      <LastCreate :userInfo="userInfo">
        <span slot="lastJoin"></span>
        <div slot="lastJoinList"></div>
      </LastCreate>
      <LastCreate :userInfo="userInfo">
        <span slot="lastCreate"></span>
        <div slot="lastCreateList"></div>
      </LastCreate>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import User from '../components/User'
  import LastCreate from '../components/LastList'
  import { getUserByName, getTopicsByName } from '../api/api'

  export default {
    data () {
      return {
        userName: this.$route.params.name,
        userInfo: {},
        userCollect: {}
      }
    },
    mounted() {
      const userName = this.userName
      this.getThisUser(userName)
      this.getThisTopics(userName)
    },
    methods: {
      getThisUser(name) {
        getUserByName(name)
          .then(response => {
            this.userInfo = response.data.data
              PubSub.publish('loginName', response.data.data.loginname)
          }).catch(err => {
            alert(err)
        })
      },
      getThisTopics(name) {
        getTopicsByName(name)
          .then(response => {
            this.userCollect = response.data.data
          }).catch(err => {
          alert(err)
        })
      }
    },
    components: {
      User,
      LastCreate
    }
  }
</script>

<style scoped>
  .sidebar {
    width: 290px;
    float: right;
  }
  .user-info {
    margin-right: 305px;
  }
  .user-header {
    padding: 10px;
    background: #f6f6f6;
  }
  .user-body {
    background: white;
    padding: 10px;
  }
  .avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .name {
    color: #778087;
  }
  .user-profile {
    margin-top: 10px;
  }
  .user-profile>span {
     display: block;
     line-height: 2em;
     color: #778087;
   }
  .user-profile>span:first-child {
    color: black;
  }
</style>