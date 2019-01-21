import axios from '@/api/api.request'

// export const getTableData = () => {
//   return axios.request({
//     url: 'get_table_data',
//     method: 'get'
//   })
// }

// export const getDragList = () => {
//   return axios.request({
//     url: 'get_drag_list',
//     method: 'get'
//   })
// }

// // 获取充值记录
// export const getWalletRecords = ({page, pageSize, keyword, currency, status, sort}) => {
//   var params = {
//     page: page || 1,
//     take: pageSize || 10,
//     keyword: keyword || '',
//     currency: currency || 0,
//     status: status || -1,
//   }
//   if (sort && sort.key) {
//     params.sort = sort.key
//   }
//   if (sort && sort.order != 'normal') {
//     params.order = sort.order
//   }
// 	return axios.request({
//     url: '/admin/wallet/records',
//     method: 'get',
//     params: params,
//   })
// }

// // 获取同步记录
// export const getWalletSyncs = ({page, pageSize, sort}) => {
//   var params = {
//     page: page || 1,
//     take: pageSize || 10,
//   }
//   if (sort && sort.key) {
//     params.sort = sort.key
//   }
//   if (sort && sort.order != 'normal') {
//     params.order = sort.order
//   }
//   return axios.request({
//     url: '/admin/wallet/syncs',
//     method: 'get',
//     params: params,
//   })
// }

// 获取币种数据
export const getlanglist = () => {
  return [
    {id: 0, lang: '中文'},
    {id: 1, lang: 'English'},
    {id: 2, lang: '日本語'},
    {id: 3, lang: '한국어'},
  ]
}
// export const usermenulist = () => {
//   return [
//     {img:require('../assets/pic_home.png'), text: '首页' , edImg:require('../assets/pic_home_pre.png')},
//     {img:require('../assets/pic_mine.png'), text: '我的' , edImg:require('../assets/pic_mine_pre.png')},

//   ]
// }


//临时数据 temporary
export const tem_date = () => {
  return [
    {id:0,date:2018.1},
    {id:1,date:2018.2},
    {id:2,date:2018.3},
    {id:3,date:2018.4},
    {id:4,date:2018.5},
    {id:5,date:2018.6},
    {id:5,date:2018.6},
  ]
}
export const tem_ticketList = () => {
  return [
   {name:'国际助教特训——让世界看见你',date:'2018.3.24' , adress:'香港'},
   {name:'百万征途第二届',date:'2018.3.24' , adress:'香港'},
   {name:'第五届与天空有约',date:'2018.3.24' , adress:'香港'},
   {name:'国际助教特助教特助教特助教特助教特助教特助教特助教特助教特助教特助教特助教特助教特助教特训——让世界看见你',date:'2018.3.24' , adress:'泰国·丹诺'},
   {name:'国际助教特训——让世看见你',date:'2018.9.24' , adress:'香港'},
   {name:'国教特训——让世界看见你',date:'2018.12.24' , adress:'泰国·丹诺'},
   {name:'国际助界看见你',date:'2022.1.24' , adress:'香港'},

  ]
}


// export const userRegister = ({nickname,referrer_code})=>{//注册
//   return axios.request({
//     url: '/api/v1/auth/account',
//     method: 'post',
//     params: {nickname,referrer_code},
//   })
// }

// export const userLogin = ({nickname,password})=>{//登录
//   return axios.request({
//     url: '/api/v1/auth/login',
//     method: 'post',
//     params: {nickname,password},
//   })
// }

// export const sendEmail = ({email})=>{//发送邮箱以验证码
//   return axios.request({
//     url: '/api/emailSendCode',
//     method: 'post',
//     params: { email },
//   })
// }


//精选列表
export const getInfo = () => {
  return axios.request({
    url: '/coupon/featured',
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