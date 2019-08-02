<template>
  <div class="comment-container">
    <!-- 评论内容 -->
    <div class="comment">
      <p class="comment-head">发表评论：</p>
      <textarea v-model="content"></textarea>
      <div class="footer">
        <input type="button" class="btn-send"  value="发送" @click="send">
      </div>
    </div>
    <!-- 已经发布的评论 -->
     <ul class="comment-list">
      <li v-for="(comment, index) in commentList" :key="comment.comId" tag="li">
        <div class="metadata flex-box">
          <p class="comment-time">{{comment.comDate | dateFormat("YYYY-MM-DD")}}</p>
          <p class="rank">{{index + 1}}楼</p>
        </div>
        <div class="content">{{comment.content}}</div>
      </li>
    </ul>
    <!-- 加载更多的按钮 -->
    <mt-button plain type="primary" size="large" @click.native="getComment()">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return{
            commentList: [],
            pageIdx: 1,  //默认展示第一页评论数据
            content: ''
        }
    },
    props:["id"],
    created(){
        this.getComment();
    },
    methods:{
        getComment(){
            this.axios.get("http://120.77.181.41:3000/api/getnewscom?newsId="+ this.id + "&pageIdx="+ this.pageIdx)
                    .then(res =>{
                        if (res.data.status == 1) {
                        this.commentList = this.commentList.concat(res.data.comments);
                        this.pageIdx++;
                        } else {
                        Toast("没有评论了~~");
                        }
                    })
        },
        send(){
            var day = new Date();
            
            this.commentList.push({comDate:day,comId:day.getTime(),content:this.content});
            this.content = '';
        }
    }
}
// import xss from "xss";
// export default {
//   props: [
//     // 外部传入的评论的源地址
//     "commentSrc",
//     // 提交评论的源地址
//     "submitSrc"
//   ],
//   data() {
//     return {
//       commentList: [],
//       pageIdx: 1,
//       content: ""
//     };
//   },
//   computed: {},
//   created() {
//     // 当组件加载完成之后调用该方法 加载所有的评论信息
//     this.getCommentList();
//   },
//   mounted() {},
//   watch: {},
//   methods: {
//     getCommentList() {
//       this.$http.get(this.commentSrc + "&pageIdx=" + this.pageIdx).then(res => {
//         if (res.body.status == 1) {
//           this.commentList = this.commentList.concat(res.body.comments);
//           this.pageIdx++;
//         } else {
//           Toast("没有评论了~~");
//         }
//       });
//     },
//     sendContent() {
//       if (this.content.trim() == "") {
//         Toast("不能提交空的评论");
//         return;
//       }
//       this.$http
//         .post(this.submitSrc, {
//           content: xss(this.content)
//         })
//         .then(res => {
//           if (res.body.status == 1) {
//             Toast("提交成功");
//             this.commentList.unshift({
//               comDate: new Date(),
//               content: this.content
//             });
//             this.content = "";
//           } else {
//             Toast("提交失败");
//           }
//         });
//     }
//   },
//   components: {}
// };
</script>

<style scoped lang="less">
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.flex-box {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
textarea {
  margin-bottom: 5px;
}
.btn-send{
    margin-bottom: 5px;
}
</style>