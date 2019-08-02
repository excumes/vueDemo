import Vue from 'vue'
import Router from 'vue-router'
import member from '../components/tabbar/MemberContainer.vue'
import search from '../components/tabbar/SearchContainer.vue'
import home from '../components/tabbar/HomeContainer.vue'
import shopcar from '../components/tabbar/ShopcarContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [ //配置路由规则
      {path : '/',redirect : '/home'},
      {path : '/home',component : home},
      {path : '/member',component : member},
      {path : '/shopcar',component : shopcar},
      {path : '/search',component : search},
  ],
  linkActiveClass: 'mui-active' //改变默认路路由选择的类名,默认的叫做 router-link-active
                                //替换成mui-active,使它选着高亮
})
