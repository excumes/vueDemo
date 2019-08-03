<template>
    <div class="wrap">
        <ul class="goodslist">
           <router-link tag="li" v-for="item in goodslist" :key="item.godId" :to="'/home/goodsinfo/'+item.godId">
                <img :src="item.phos[0]" alt="">
                <h3 class="title">{{item.intro}}</h3>
                <div class="info">
                    <div class="price">
                        <span>￥</span>
                        {{item.newPrice}}
                        <span>.00</span>
                    </div>
                    <div class="kucun">
                        <span>95%好评率</span><span>库存{{item.quantity}}</span>
                    </div>
                </div>
           </router-link>
        </ul>
        <div class="btn-wrap">
            <mt-button plain size="large" @click.native="getGoods">加载更多</mt-button>
        </div>        
   </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return{
            goodslist:[],
            pageIdx: 1,
            goodsId: 1
        }
    },
    created(){
        this.getGoods();
    },
    methods: {
        getGoods(){
            this.axios.get("http://120.77.181.41:3000/api/getgod?pageIdx=" + this.pageIdx)
                .then(res => {
                    if(res.data.status == 1){
                        this.goodslist = res.data.gods;
                        this.pageIdx++;
                    }else{
                        Toast("已经没有更多了~")
                    }
                })
        }
    }
}
</script>

<style lang="less" scoped>

*{
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
}
.wrap{
    width: 100vw;
    .goodslist{
        overflow: hidden;
        padding: 5px 5px;
        margin: 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
        background-color: #fff;
        width: 49%;
        border-radius: 10px;
        margin-bottom: 6px;
        overflow: hidden;
            img{
                width: 100%;
                
            }
            h3.title{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding:  0 5px;
                font-size: 16px;
                font-weight: 400;
            }
            .info{
                .price{
                    padding-left: 5px;
                    color: #f40;
                    font-size: 18px;
                    padding-bottom: 5px;
                    span{
                        font-size: 13px;
                    }
                }
                .kucun{
                    font-size: 14px;
                    padding: 0 10px;
                    color: #666;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
    .btn-wrap{
            display: flex;
            justify-content: center;
                .mint-button{
                &.mint-button--default.mint-button--large.is-plain{
                    width: 95%;
                    // margin-left: 15%;
                }
            }
    }
}

</style>
