<template>
    <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell mui-media" v-for="(news,i) in newList" :key="i">
            <router-link class="mui-navigate-right" :to="'/home/newDetails/' + news.id">
                <img class="mui-media-object mui-pull-left" src="../../assets/logo.png">
                <div class="mui-media-body">
                    <h1>{{news.title}}</h1>
                    <p class="mui-ellipsis">
                        <span>时间:{{news.add_time | dateFormat("YYYY-MM-DD")}}</span>
                        <span>点击量{{news.clicked}}</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>			
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return{
            newList:[]
        }
    },
    created(){
        this.getNewList();
    },
    methods:{
        getNewList(s){
            this.axios.get("http://120.77.181.41:3000/api/getnews?pageIdx=1").then(res => {
                if(res.data.status){
                    this.newList = JSON.parse(res.data.news);
                }else{
                    Toast('获取失败')
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    body{
        background-color: #fff;
    }
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                display: flex;
                justify-content:space-between;
            }
        }
    }
</style>