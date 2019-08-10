<template>
  <div class="content">
    <div class="topic-header">
      <div class="topic-title">
        <span :class="[{top: topicContent.top}, {good: topicContent.good}, {tab: !topicContent.top && !topicContent.good}]">
          {{topicContent | thisTab}}
        </span>
        <span class="full-title">{{topicContent.title}}</span>
      </div>
      <div class="change">
        <span>发布于 {{topicContent.create_at | dateFormat}}</span>
        <span>作者 {{topicContent.author.loginname}}</span>
        <span>{{topicContent.visit_count}} 次浏览</span>
        <span>来自 {{topicContent | fromTab}}</span>
      </div>
    </div>
    <div class="inner">
      <div class="topic-content" v-html="topicContent.content"></div>
    </div>
  </div>
</template>

<script>
  import { getTopicById } from '../api/api'
  import PubSub from 'pubsub-js'

  export default {
    props: ['thisId'],
    data () {
      return {
        topicContent: {}
      }
    },
    mounted() {
      getTopicById(this.thisId)
        .then(response => {
          this.topicContent = response.data.data
          PubSub.publish('loginName', response.data.data.author.loginname)
          PubSub.publish('currentTitle', response.data.data.title)
          PubSub.publish('comment', response.data.data.replies)
        })
        .catch(err => {
          alert(err)
        })
    }
  }
</script>

<style>
  .content {
    background: white;
  }
  .topic-header {
    padding: 10px;
    border-radius: 3px 3px 0 0;
  }
  .topic-title {
    margin: 8px 0;
  }
  .full-title {
    font-size: 22px;
    font-weight: 700;
  }
  .topic-header>.change {
    font-size: 12px;
    color: #838383;
  }
  .change>span::before {
    content: " • ";
  }
  .inner {
    border-top: 1px solid #e5e5e5;
    padding: 10px;
    line-height: 2em;
  }
  .inner>.topic-content {
    margin: 0 10px;
  }
  .topic-content p {
    font-size: 15px;
    line-height: 1.7em;
    margin: 1em 0;
    white-space: pre-wrap;
  }
  .topic-content h2 {
    font-size: 26px !important;
    border-bottom: 1px solid #eee;
    line-height: 40px;
  }
  .topic-content ul {
    margin: 0 0 10px 25px;
    list-style: disc;
  }
  .topic-content ul li {
    line-height: 2em;
  }
  .topic-content img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
  pre.prettyprint {
    font-size: 14px;
    border-radius: 0;
    padding: 0 15px;
    border: none;
    margin: 20px -10px;
    border-width: 1px 0;
    background: #f7f7f7;
    tab-size: 4;
  }
  .topic-c ontent a:visited,
  .topic-content a:link {
    color: #08c;
  }
</style>