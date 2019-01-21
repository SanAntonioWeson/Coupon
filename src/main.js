import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false
import vueFilter from './filters/index'


for (let key in vueFilter){
	Vue.filter(key,vueFilter[key])
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
