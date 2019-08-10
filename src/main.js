import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './main.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.filter('thisTab', item => {
  if (item.top) {
    return '置顶'
  } else if (item.good) {
    return '精华'
  } else if (item.tab === 'ask') {
    return '问答'
  } else if (item.tab === 'share') {
    return '分享'
  }
})

Vue.filter('fromTab', item => {
  switch (item.tab) {
    case 'ask':
      return '问答' ;
    case 'share':
      return '分享' ;
    case 'job':
      return '招聘'
  }
})

Vue.filter('dateFormat', value => {
  return moment(value, 'YYYY-MM-DD').startOf('day').fromNow()
})