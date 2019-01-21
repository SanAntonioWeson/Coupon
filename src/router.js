import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
const toWelfareDetail = r => require.ensure([], () => r(require('@/views/welfareDetail.vue')),'welfareDetail')
const couponDetail = r => require.ensure([], () => r(require('@/views/couponDetail.vue')), 'couponDetail')
const successfulPayment = r => require.ensure([], () => r(require('@/views/successfulPayment.vue')), 'successfulPayment')
const mine = r => require.ensure([], () => r(require('@/views/mine.vue')), 'mine')
const mineDetail = r => require.ensure([], () => r(require('@/views/mineDetail.vue')), 'mineDetail')



Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { //首页
      path: '/',
      name: 'index',
      // component: () => import(/* webpackChunkName: "about" */ './views/index/index.vue')
      component: Index
    },
    {
      path: '/welfareDetail',
      name: 'toWelfareDetail',
      // component: () => import('./views/categoryIndex.vue')
      component: toWelfareDetail
    },
    {
      path: '/couponDetail',
      name: 'couponDetail',
      component: couponDetail
    },
    {
      path: '/successfulPayment',
      name: 'toSuccessfulPayment',
      component: successfulPayment
    },
    {
      path: '/mine',
      name: 'toMine',
      component: mine
    },
    {
      path: '/mineDetail',
      name: 'mineDetail',
      component: mineDetail
    }
  ]
})
