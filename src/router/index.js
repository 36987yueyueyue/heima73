// 创建路由对象  路由规则 和其他路由
// 导入vue-router
import VueRouter from 'vue-router'
// 导入vue
import Vue from 'vue'
// 导入login组件
import Login from '@/views/login/login.vue'
// 注册
// vue对象  导入vue
Vue.use(VueRouter)
// 初始化router对象（配置路由规则）
const router = new VueRouter({
  routes: [
    // 路由规则
    { path: '/login', name: 'login', component: Login }
  ]
})
// 导出
export default router
