<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipe" :key="item">
          <img :src="item">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                <img src="../../assets/6grid/menu1.png">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/6grid/menu2.png">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/6grid/menu3.png">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/6grid/menu4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/6grid/menu5.png">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/6grid/menu6.png">
                <div class="mui-media-body">联系我们</div></a></li>
	</ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            swipe: [] //轮播图数据
        }
    },
    created(){
        this.getSwipe();
    },
    methods:{
        getSwipe(){
           this.axios.get("http://120.77.181.41:3000/api/getcover").then(res => {
               if(res){
                   this.swipe = res.data.imgs;
               }else{
                   Toast('加载轮播图失败')
               }
           }).catch(function(error){
               console.log(error)
           })
        }
    }
};
</script>
<style lang="less" scoped>
.mint-swipe{
    height: 31vh;
    .mint-swipe-item{
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    .mui-table-view-cell{
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
    }
}
</style>