import axios from 'axios'

export const getTopics = (page, tab) => {
  return axios.get('https://cnodejs.org/api/v1/topics',{
    params:{
      page: page,
      tab: tab
    }
  })
}

export const getTopicById = (id) => {
  return axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
}

export const getUserByName = (name) => {
  return axios.get(`https://cnodejs.org/api/v1/user/${name}`)
}

export const getTopicsByName = (name) => {
  return axios.get(`https://cnodejs.org/api/v1/topic_collect/${name}`)
}
