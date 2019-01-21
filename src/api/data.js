import axios from '@/api/api.request'

//生成token
export const getToken = () => {
  return axios.request({
    url: 'coupon/get_token',
    method: 'get',
    params: {uuid: ''}
  })
}

//精选列表
export const getInfo = () => {
  return axios.request({
    url: 'coupon/featured',
    method: 'get',
  })
}

//分类列表
export const getCategoryList = () => {
  return axios.request({
    url: 'coupon/category',
    method: 'get'
  })
}

// //购买记录
export const getPurchaseRecord = () => {
  var params ={
    uid: ''
  }
  return axios.request({
    url: 'coupon/buy',
    method: 'get',
    header: '',            //X-Token
    params: params
  })
}

//获取用户信息
export const getUserInfo = () => {
  return axios.request({
    url: 'coupon/user',
    method: 'get',
    header: '',            //X-Token
    params: {uid: ''}
  })
}