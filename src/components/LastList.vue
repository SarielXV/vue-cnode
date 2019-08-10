<template>
  <div class="last-create" v-bind="$attrs">
    <div class="topics-header">
      <slot name="lastJoin">最近参与的话题</slot>
      <slot name="lastCreate">最近创建的话题</slot>
    </div>
    <slot name="lastCreateList">
      <div class="topics-item" v-for="(item, index) in userInfo.recent_topics" v-if="index < 5 && item" :key="item.id">
        <div v-if="userInfo.recent_topics.length === 1">无</div>
        <router-link :to="'/user/'+userInfo.loginname">
          <img :src="userInfo.avatar_url" :title="userInfo.loginname" class="avatar">
        </router-link>
        <router-link :to="'/topic/'+item.id" class="topics-title">{{item.title}}</router-link>
        <span class="relative-date">{{item.last_reply_at | dateFormat}}</span>
      </div>
      <div class="more" v-if="userInfo.recent_topics.length > 5">
        <router-link :to="'/user/'+userInfo.loginname+'/topics'">查看更多>></router-link>
      </div>
    </slot>
    <slot name="lastJoinList">
      <div class="topics-item" v-for="(item, index) in userInfo.recent_replies" v-if="index < 5 && item" :key="item.id">
        <div v-if="userInfo.recent_replies.length === 0">无</div>
        <router-link :to="'/user/'+item.author.loginname">
          <img :src="item.author.avatar_url" :title="item.author.loginname" class="avatar">
        </router-link>
        <router-link :to="'/topic/'+item.id" class="topics-title">{{item.title}}</router-link>
        <span class="relative-date">{{item.last_reply_at | dateFormat}}</span>
      </div>
      <div class="more" v-if="userInfo.recent_replies.length > 5">
        <router-link :to="'/user/'+userInfo.loginname+'/replies'">查看更多>></router-link>
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      userInfo: {
        type: Object,
        default: () => {}
      }
    },
    watch: {
      '$route'() {
        this.$router.go(0)
      }
    }
  }
</script>

<style scoped>
  .topics-header {
    padding: 10px;
    background: #f6f6f6;
    margin-top: 20px;
  }
  .topics-item {
    background: white;
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f0;
    line-height: 30px;
  }
  .topics-item a:link,
  .topics-item a:visited {
    color: #08c;
  }
  .topics-item a:hover {
    color: #005580;
    text-decoration: underline
  }
  .topics-title {
    margin-left: 10px;
  }
  .more {
    padding: 10px;
    font-size: 14px;
    background: white;
  }
</style>