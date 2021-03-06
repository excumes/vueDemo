import Vue from 'vue'
import App from './App'
import router from './router'
//导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入 Mint-UI 组件
import { Header, Swipe, SwipeItem,Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'; 
Vue.prototype.axios = axios; //把axios挂到vue原型上, 通过this.axios 使用,因为this是vue实例
import moment from 'moment' //时间格式插件
Vue.config.productionTip = false

Vue.component(Header.name , Header);  //按需导入,需要注册组件
Vue.component(Swipe.name, Swipe); //轮播图组件
Vue.component(SwipeItem.name, SwipeItem);//轮播图组件
Vue.component(Button.name, Button); //按钮组件
/* eslint-disable no-new */
//定义一个全局的过滤器 来格式化时间
Vue.filter('dateFormat' , function(dataStr , pattern = "YYYY-MM-DD HH:mm:ss") {
   return moment(dataStr).format(pattern)
})
new Vue({
  el: '#app',
  router,
  render: h => h(App) //渲染替换了#app
})

console.log('ok')