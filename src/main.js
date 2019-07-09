import Vue from 'vue'
import App from './App.vue'
// 导包
import ElementUI from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
// 在全局范围内注册组件
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 挂在根对象
  router
}).$mount('#app')
