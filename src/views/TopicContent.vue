<template>
  <div class="container clearfloat">
    <div class="item-right">
      <User/>
      <OtherTopic/>
    </div>
    <div class="item-left">
      <Content :thisId="thisId"/>
      <Comment />
    </div>
  </div>
</template>

<script>
  import Content from '../components/Content'
  import OtherTopic from '../components/OtherTopic'
  import User from '../components/User'
  import Comment from '../components/Comment'

  export default {
    data () {
      return {
        thisId: this.$route.params.id
      }
    },
    components: {
      Content,
      OtherTopic,
      User,
      Comment
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    background: #e1e1e1;
    border-radius: 3px;
  }
  .item-left {
    padding: 0;
    margin-right: 305px;
  }
  .item-right {
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
  }
</style>