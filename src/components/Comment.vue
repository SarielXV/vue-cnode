<template>
  <div class="comment">
    <div class="comment-header" v-show="isShow">{{commentList.length}} 条回复</div>
    <div class="comment-body" v-show="isShow" >
      <div class="comment-item" v-for="(item,index) in commentList" :key="item.id">
        <div>
          <a href=""><img :src="item.author.avatar_url" class="avatar"></a>
          <span class="comment-name">{{item.author.loginname}}</span>
          <span class="floor-info">{{index+1}}楼 • {{item.create_at | dateFormat}}</span>
          <span class="up" v-show="item.ups.length !== 0">
            <span :class="[{isUp: item.is_uped}]" @click="doUp(item, 'test')">
              <i class="iconfont icon-dianzan1"></i>
            </span>
            {{item.ups.length}}
          </span>
        </div>
        <div v-html="item.content" class="comment-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    data() {
      return {
        isShow: true,
        commentList: {}
      }
    },
    mounted() {
      PubSub.subscribe('comment', (mes, data) => {
        this.commentList = data
        if (data.length === 0) this.isShow = false
      })
    },
    methods: {
      doUp(item, value) {
        if(!item.is_uped) {
          item.ups.push(value)
          item.is_uped = true
        } else {
          let index = item.ups.indexOf(value)
          item.ups.splice(index, 1)
          item.is_uped = false
        }
      }
    }
  }
</script>

<style>
  .comment {
    margin-top: 20px;
  }
  .comment-header {
    padding: 10px;
    background: #f6f6f6;
  }
  .comment-body {
    background: white;
  }
  .comment-item {
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .comment-name {
    margin-left: 10px;
    color: #666;
    font-size: 12px;
    font-weight: 700;
  }
  .comment-content {
    padding-left: 50px;
  }
  .markdown-text p{
    font-size: 15px;
    line-height: 1.7em;
  }
  .markdown-text img {
    width: 100%;
    vertical-align: middle;
  }
  .markdown-text a:link,
  .markdown-text a:visited
  {
    color: #0088cc;
  }
  .floor-info {
    margin-left: 10px;
    font-size: 10px;
    color: #0088cc;
  }
  .up {
    float: right;
    font-size: 15px;
    color: #808080;
  }
  .isUp {
    color: #80bd01;
  }
  .isUp:hover {
    color: #80bd01;
  }
</style>