<template>
    <div class="other-topic">
      <div class="topic-header">
        <span>作者的其他话题</span>
      </div>
      <div class="topic-body">
        <ul class="topics-list">
          <li v-for="(recentTopic, index) in userInfo.recent_topics" :key="recentTopic.id">
            <div v-if="index < 5 && recentTopic && recentTopic.title != currentTitle">
              <span v-if="index = 0">无</span>
              <router-link :to="'/topic/'+recentTopic.id">{{recentTopic.title}}</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import { getUserByName } from "../api/api"

  export default {
    data () {
      return {
        userInfo: {},
        currentTitle: ''
      }
    },
    mounted () {
      PubSub.subscribe('loginName', (mes, data) => {
        getUserByName(data)
          .then(response => {
            this.userInfo = response.data.data
          }).catch(err => {
            alert(err)
        })
      })
      PubSub.subscribe('currentTitle', (mes, data) => {
        this.currentTitle = data
      })
    },
    watch: {
      '$route'() {
        this.$router.go(0)
      }
    }
  }
</script>

<style scoped>
  .other-topic {
    background: white;
    margin-top: 15px;
  }
  .topic-header {
    padding: 10px;
    background: #f6f6f6;
  }
  .topic-header span {
    font-size: 13px;
  }
  .topic-body {
    padding: 10px;
    font-size: 13px;
  }
  .topics-list>li div{
    font-size: 14px;
    line-height: 2em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .topics-list li a:visited,
  .topics-list li a:link {
    color: #778087;
  }
</style>