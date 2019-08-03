<template>
  <div>
    <h2>{{god.name}}</h2>
    <div class="imgs">
      <img v-for="imgSrc in god.imgIntro" :src="imgSrc" alt :key="imgSrc">
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  props: [],
  data() {
    return {
      id: this.$route.params.id,
      god: ""
    };
  },
  created() {
    this.getGoodsImgIntro();
  },
  methods: {
    getGoodsImgIntro() {
        this.axios.get("http://120.77.181.41:3000/api/getgoddetail?godId="+ this.id).then(res => {
            if(res.data.status == -1){
                Toast("暂时没有信息");
                return
            }
            console.log(res);
            this.god = res.data.god
        })
    }
  }
};
</script>

<style scoped lang="less">
h2 {
  text-align: center;
  color: #007aff;
}
.imgs img {
  width: 100%;
  vertical-align: top;
}
</style>