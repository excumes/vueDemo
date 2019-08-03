<template>
  <div class="goods-detail-container">
    <div class="god">
      <!-- 图片介绍 -->
      <div class="pho-intro">
        <div class="mui-card">
          <mt-swipe :auto="4000" class="swipe">
            <mt-swipe-item v-for="img in god.phos" :key="img">
              <img :src="img">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!-- 文字介绍 -->
        <div class="mui-card">
          <div class="mui-card-header">{{god.name}}</div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <div class="price">
                <span>市场价：</span>
                <span class="old-price">{{god.oldPrice}}</span>
                <span>销售价：</span>
                <span class="new-price">{{god.newPrice}}</span>
              </div>
              <div class="god-num">
                <span>购买数量</span>
                <div class="mui-numbox" data-numbox-min='0'>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                    <input class="mui-numbox-input" type="number" v-model="number"/>
                    <button class="mui-btn mui-numbox-btn-plus" type="button" @click="test">+</button>
                </div>
              </div>
              <div>
                <div class="mui-btn mui-btn-primary">立即购买</div>
                <div class="mui-btn mui-btn-danger">加入购物车</div>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>
              <span>商品货号</span>
              <span>{{god.godNum}}</span>
            </p>
            <p>
              <span>上架日期</span>
              <span>{{god.addDate | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
            </p>
            <p>
              <span>库存情况</span>
              <span>{{god.quantity}}</span>
            </p>
            <mt-button plain type="primary" size="large" @click.native="goGodImgIntro">图文详细</mt-button>
          </div>
        </div>
      </div> 
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- <mt-button plain type="primary" size="large" @click.native="goGodImgIntro">图文详细</mt-button> -->
            <comment></comment>
          <!-- <comment :commentSrc="'getgodcom?godId='+this.id" :submitSrc="'addgodcom?godId'+this.id"></comment> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Comment from "../subComponents/newComment";
// import mui from '../../lib/mui/js/mui.min'

export default{
    data(){
        return{
            id:this.$route.params.id,
            god: '',
            number: 1
        }
    },
    created(){
        this.getInfo();
    },
    methods:{
        getInfo(){
            this.axios.get("http://120.77.181.41:3000/api/getgoddetail?godId=" + this.id)
                    .then(res => {
                        if(res.data.status == 1){
                            this.god = res.data.god
                        }else{
                            Toast('获取失败')
                        }
                    })
        },
        test(){
            console.log(this.number)
        },
        goGodImgIntro() {
      // 路由添加到商品图文详细页面
      this.$router.push("/home/imgInfo/" + this.god.godId);
        }
    },
    watch: {
        // god() {
        // // 初始化数字输入框
        // mui(".mui-numbox")
        //     .numbox()
        //     .setOption("max", this.god.quantity);
        // }
    },
    components: { Comment }
}
// import mui from "../../lib/mui/js/mui.min.js";
// export default {
//   props: [],
//   data() {
//     return {
//       id: this.$route.params.godId,
//       god: "",
//       // 购买的数量
//       num: 1
//     };
//   },
//   computed: {},
//   created() {
//     this.getGoddsDetail();
//   },
//   mounted() {},
//   watch: {
//     god() {
//       // 初始化数字输入框
//       mui(".mui-numbox")
//         .numbox()
//         .setOption("max", this.god.quantity);
//     }
//   },
//   methods: {
//     getGoddsDetail() {
//       this.$http.get("getgoddetail?godId=" + this.id).then(res => {
//         if (res.body.status == -1) {
//           Toast("没有找到这个商品");
//           return;
//         }
//         this.god = res.body.god;
//       });
//     },
//     getNum() {
//       // 手动判断如果大小超过了 quantity return 赋值
//       let num = parseInt(window.event.target.value);
//       if (num > this.god.quantity) num = this.god.quantity;
//       this.num = num;
//     },
//     goGodImgIntro() {
//       // 路由添加到商品图文详细页面
//       this.$router.push("imgintro/" + this.god.godId);
//     }
//   },
//   components: { Comment }
// };
</script>

<style scoped lang="less">
.goods-detail-container {
  background-color: #f9f9f9;
}
.mint-swipe.swipe {
  height: 300px;
}
.mint-swipe.swipe {
  text-align: center;
}
.mint-swipe.swipe img {
  height: 100%;
}
.mui-card-content-inner > div {
  margin-bottom: 8px;
}
.price {
  color: #666;
}
.old-price {
  text-decoration: line-through;
}
.new-price {
  font-size: 16px;
  color: #dd0000;
}
</style>
