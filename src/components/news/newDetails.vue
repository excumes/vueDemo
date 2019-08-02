<template>
    <div class="wrapper">
        <div class="info-wrap">
            <div>这是第<h3 style="display:inline-block">{{Number(id) + 1}}</h3>条新闻详情</div>
            <router-link to="/home/newslist" tag="div">
                <mt-button plain>back</mt-button>
            </router-link>
            <!-- 评论子组件 -->
        </div>
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
// import comment from '../subComponents/comment'
import comment from '../subComponents/newComment'
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    },
    mounted(){
        this.getInfo();
    },
    methods:{
        getInfo(){
            this.axios.get("http://120.77.181.41:3000/getnewsdetail?newsId=" + this.id).then(data => {
            })
        }
    },
    components:{
        'comment-box' : comment
    }
}
</script>
<style lang="less" scoped>
.wrapper{
    padding: 10px;
}
.info-wrap{
    margin: 20px;
    display: flex;
    justify-content: space-between;
}
</style>
