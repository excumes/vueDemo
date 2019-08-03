import Vue from 'vue'
import Router from 'vue-router'
import member from '../components/tabbar/MemberContainer.vue'
import search from '../components/tabbar/SearchContainer.vue'
import home from '../components/tabbar/HomeContainer.vue'
import shopcar from '../components/tabbar/ShopcarContainer.vue'
import newList from '../components/news/newList.vue'
import NewsInfo from '../components/news/newDetails.vue'
import goodsList from '../components/goods/goodsList.vue'
import goodsInfo from '../components/goods/goodsInfo.vue'
//商品的图文详情
import imgInfo from '../components/goods/imgInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [ //配置路由规则
      {path : '/',redirect : '/home'},
      {path : '/home',component : home},
      {path : '/member',component : member},
      {path : '/shopcar',component : shopcar},
      {path : '/search',component : search},
      {path : '/home/newslist', component : newList},
      {path : '/home/newDetails/:id', component : NewsInfo},
      {path: '/home/goodslist', component: goodsList},
      {path : '/home/goodsinfo/:id' , component : goodsInfo ,name : 'goodsinfo'}, //根据名字就能跳转,在使用this.$router.push时
      {path : '/home/imgInfo/:id', component : imgInfo}
  ],
  linkActiveClass: 'mui-active' //改变默认路路由选择的类名,默认的叫做 router-link-active
                                //替换成mui-active,使它选着高亮
})
