<template>
  <div style="background: #e1e1e1">
    <User class="sidebar"/>
    <div class="content">
      <div class="header">
        <a href="/">主页 </a>
        <span>/ </span>
        <router-link :to="'/user/'+userInfo.loginname">{{userInfo.loginname}}的主页</router-link>
      </div>
      <div v-if="type==='topics'" class="header">{{userInfo.loginname}} 最近创建的话题</div>
      <div v-else class="header">{{userInfo.loginname}} 最近参与的话题</div>
      <div class="topics-list">
        <div v-if="type==='topics'">
          <div v-for="item in userInfo.recent_topics" :key="item.id" class="topics-item">
            <router-link :to="'/user/'+item.author.loginname">
              <img :src="item.author.avatar_url" :title="item.author.loginname" class="avatar">
            </router-link>
            <router-link :to="'/topic/'+item.id" class="topics-title">{{item.title}}</router-link>
          </div>
        </div>
        <div v-else>
          <div v-for="item in userInfo.recent_replies" :key="item.id" class="topics-item">
            <router-link :to="'/user/'+item.author.loginname">
              <img :src="item.author.avatar_url" :title="item.author.loginname" class="avatar">
            </router-link>
            <router-link :to="'/topic/'+item.id" class="topics-title">{{item.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import User from '../components/User'
  import PubSub from 'pubsub-js'
  import { getUserByName } from "../api/api"

  export default {
    data() {
      return {
        userName: this.$route.params.name,
        type: this.$route.params.type,
        userInfo: {}
      }
    },
    mounted() {
      this.getThisUser(this.userName)
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
      }
    },
    components: {
      User
    }
  }
</script>

<style scoped>
  .sidebar {
    width: 290px;
    float: right;
  }
  .content {
    margin-right: 305px;
    background: #e1e1e1;
  }
  .header {
    margin-top: 20px;
    padding: 10px;
    font-size: 14px;
    background: #f6f6f6;
    color: #80bd01;
  }
  .header a:link,
  .header a:visited
  {
    color: #80bd01;
  }
  .topics-list {
    padding: 10px;
    background: white;
  }
  .topics-item {
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f0;
  }
  .topics-item:last-child {
    border: none;
  }
  .topics-title {
    margin-left: 10px;
  }
  .topics-title:link,
  .topics-title:visited {
    color: black;
  }
  .topics-title:hover {
    text-decoration: underline;
  }
</style>