import Vue from 'vue'
import App from './App'
import router from './router'
//导入MUI
import './lib/mui/css/mui.min.css'
// 按需导入 Mint-UI 组件
import { Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

Vue.component(Header.name , Header);  //按需导入,需要注册组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) //渲染替换了#app
})

console.log('ok')