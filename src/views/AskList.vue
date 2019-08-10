<template>
  <div class="content-all">
    <ul>
      <li v-for="item in allList" :key="item.id" class="content-item">
        <router-link :to="'/user/'+item.author.loginname" class="user-url">
          <img :src="item.author.avatar_url" alt="" class="avatar">
        </router-link>
        <span class="reply-count">{{item.reply_count}}</span><span class="visit-count">/{{item.visit_count}}</span>
        <span :class="[{top: item.top}, {good: item.good}, {tab: !item.top && !item.good}]">{{item | thisTab}}</span>
        <router-link :to="'/topic/'+item.id" class="title">{{item.title}}</router-link>
        <span class="relative-date">{{item.last_reply_at | dateFormat}}</span>
      </li>
    </ul>
    <Paginator @handleList="handleList"/>
  </div>
</template>

<script>
  import Paginator from '../components/Paginator'
  import { getTopics } from '../api/api'

  export default {
    data () {
      return {
        allList: {},
        currentPage: 1
      }
    },
    mounted() {
      this.getCurrentTopics(1, 'ask')
    },
    methods: {
      getCurrentTopics(page, type) {
        getTopics(page, type)
          .then(response => {
            this.allList = response.data.data
          }).catch(err => {
          alert(err)
        })
      },
      handleList(value) {
        this.currentPage = value
        this.getCurrentTopics(value, 'ask')
      }
    },
    components: {
      Paginator
    }
  }
</script>

<style scoped>
  <style scoped>
  .content-all {
    border-radius: 3px;
  }
  .reply-count {
    color: #9e78c0;
    font-size: 14px;
    margin-left: 10px;
    margin-right: 4px;
  }
  .visit-count {
    color: #b4b4b4;
    font-size: 8px;
    margin-right: 10px;
  }
  .content-item {
    height: 30px;
    overflow: hidden;
    line-height: 30px;
    padding: 10px;
    border-top: 1px solid #f0f0f0;
    font-size: 16px;
  }
  .content-item:hover {
    background: #f6f6f6;
  }
  .content-item:first-child {
    border-top: none;
  }
  .user-url {
    display: inline-block;
  }
  .avatar {
    border-radius: 3px;
    width: 30px;
    height: 30px;
    margin-left: 10px;
    vertical-align: middle;
  }
  .title:link,
  .title:visited {
    color: black;
  }
  .title:hover {
    cursor: pointer;
  }
  .relative-date {
    float: right;
    margin-right: 10px;
    font-size: 10px;
    color: #778087;
  }
</style>