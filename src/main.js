// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import sellers from './components/sellers/sellers.vue'
import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/sellers', component: sellers}
]
const router = new VueRouter({
  linkActiveClass: 'active', /* router官方文档中的 router 构造配置中参数，效果为 'a标签点击后高亮' */
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
})

/* router.go('/goods') 设置默认路由，这里使用 go 则浏览器会不断的刷新页面 */
