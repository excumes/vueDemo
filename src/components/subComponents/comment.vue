<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea class="text"  rows="5" maxlength="120" placeholder="请输入评论内容(最多120字)"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <br>

        <div class="cmt-list">
            <div class="cmt-item">
                div.cmt
            </div>
        </div>

        <mt-button plain size="large">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
    .text{
        // position: absolute;
        margin: 10px 5vw;
        width: 90vw;
    }
</style>

