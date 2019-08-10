import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import AllList from './views/AllList'
import AskList from './views/AskList'
import GoodList from './views/GoodList'
import JobList from './views/JobList'
import ShareList from './views/ShareList'
import UserInfo from './views/UserInfo'
import TopicContent from './views/TopicContent'
import More from './views/MoreList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/all',
          name: 'All',
          component: AllList
        },
        {
          path: '/good',
          component: GoodList
        },
        {
          path: '/share',
          component: ShareList
        },
        {
          path: '/ask',
          component: AskList
        },
        {
          path: '/job',
          component: JobList
        },
        {
          path: '/',
          redirect: '/all'
        }
      ]
    },
    {
      path: '/user/:name',
      component: UserInfo,
    },
    {
      path: '/topic/:id',
      component: TopicContent
    },
    {
      path: '/user/:name/:type',
      component: More
    }
  ]
})