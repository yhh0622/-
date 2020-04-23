<template>
  <div class="app">
    <section>
      <el-carousel trigger="click" :height="bannerHeight+'px'" :interval="5000">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
          <img :src="item" alt srcset />
        </el-carousel-item>
      </el-carousel>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        require("../assets/images/BN1.png"),
        require("../assets/images/BN2.png")
      ],
      bannerHeight: 750
    };
  },
  methods: {},
  mounted() {
    var vw = document.body.offsetWidth;
    this.bannerHeight = (900 / 1920) * vw;
    if (this.$store.state.vWidth <= 720) {
      this.banner = [
        require("../assets/images/bnx1.png"),
        require("../assets/images/bnx2.png")
      ];
      this.bannerHeight = vw * 1.219;
    }
  },
  watch: {
    "$store.state.vWidth"() {
      this.bannerHeight = (900 / 1920) * this.$store.state.vWidth;
      if (this.$store.state.vWidth <= 720) {
        this.banner = [
          require("../assets/images/bnx1.png"),
          require("../assets/images/bnx2.png")
        ];
        this.bannerHeight = this.$store.state.vWidth * 1.219;
      } else {
        this.banner = [
          require("../assets/images/BN1.png"),
          require("../assets/images/BN2.png")
        ];
        this.bannerHeight = (900 / 1920) * this.$store.state.vWidth;
      }
    }
  }
};
</script>
<style scoped>
.app {
  margin-top: 13vh;
}
@media (max-width: 725px) {
  .app {
    margin-top: 7vh;
  }
}
</style>
<style>
.el-carousel--horizontal {
  width: 100%;
}
.el-carousel__item img {
  max-width: 100%;
  height: 100%;
}
.el-carousel__button {
  width: 0.6vw;
  height: 0.6vw;
  border-radius: 50%;
}
@media (max-width: 725px) {
  .el-carousel__button {
    width: 1.8vw;
    height: 1.8vw;
    border-radius: 50%;
  }
}
</style>