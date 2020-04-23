<template>
  <div class="header">
    <nav>
      <div class="navDiv">
        <img src="../../assets/images/logo.png" alt srcset />
        <div v-if="wap" class="wap">
          <span class="fa fa-bars" v-if="clone==false" @click="clone=!clone"></span>
          <img src="../../assets/images/clone.png" v-if="clone==true" @click="clone=!clone" />
        </div>
      </div>
      <div class="listNav" v-if="wap==false">
        <ul>
          <li
            v-for="(item,index) in navList"
            :key="index"
            @click="changeNav(index)"
            :class="{'blue':$store.state.navListVal==index}"
          >{{item}}</li>
        </ul>
      </div>
      <div class="listNav" v-if="wap==true&&clone==true ">
        <ul>
          <li
            v-for="(item,index) in navList"
            :key="index"
            @click="changeNav(index)"
            :class="{'blue':$store.state.navListVal==index}"
          >
            {{item}}
            <span class="fa fa-angle-right" v-if="wap"></span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import store, { mutations } from "../../store/index.js";
export default {
  data() {
    return {
      navList: [
        "天山之水",
        "科研检测",
        "低氘水课堂",
        "公司简介",
        "跨界联名",
        "产品系列"
      ],
      wap: false,
      clone: false
    };
  },
  mounted() {
    var vw = document.body.offsetWidth;
    if (vw <= 725) {
      this.wap = true;
    } else {
      this.wap = false;
    }
  },
  methods: {
    changeNav(index) {
      this.clone = !this.clone;
      store.commit("setListVal", index);
      if (index == 0) {
        this.$router.push({
          path: "/", // 路径
          parmas: {} //parmas传值
        });
      } else if (index == 1) {
        this.$router.push({
          path: "", // 路径
          parmas: {} //parmas传值
        });
      } else if (index == 2) {
        this.$router.push({
          path: "", // 路径
          parmas: {} //parmas传值
        });
      } else if (index == 3) {
        this.$router.push({
          path: "", // 路径
          parmas: {} //parmas传值
        });
      } else if (index == 4) {
        this.$router.push({
          path: "", // 路径
          parmas: {} //parmas传值
        });
      } else if (index == 5) {
        this.$router.push({
          path: "", // 路径
          parmas: {} //parmas传值
        });
      }
    }
  },
  watch: {
    "$store.state.vWidth"() {
      console.log(this.$store.state.vWidth);
      if (this.$store.state.vWidth <= 725) {
        this.wap = true;
        this.clone = false;
      } else {
        this.wap = false;
      }
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 999;
  height: 13vh;
}
nav {
  width: 55%;
  margin: 0 auto;
  padding: 1vh 0 1.5vh;
  box-sizing: border-box;
  text-align: center;
}
nav img {
  width: 5vw;
}
.navDiv {
  margin-bottom: 1.5vh;
}
nav ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 0.08rem;
  color: #333333;
}
.blue {
  color: #21ade5;
}
.wap {
  position: absolute;
  top: 2vh;
  right: 4vw;
  font-size: 20px;
  font-weight: 300;
  width: 20px;
  height: 20px;
}
.wap img {
  width: 100%;
}
@media (max-width: 725px) {
  .header {
    height: 7vh;
  }
  nav {
    width: 100%;
  }
  .navDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav img {
    width: 12vw;
    margin-top: 0.8vh;
  }
  .listNav {
    width: 100vw;
    height: 95vh;
    padding: 0 4vw;
    box-sizing: border-box;
    background-color: white;
    position: absolute;
    top: 7vh;
    left: 0;
    z-index: 99;
  }
  nav ul {
    width: 100%;
    display: unset;
  }

  nav ul li {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d2d2d2;
    font-size: 0.2rem;
  }

  .wap {
    width: 20px;
  }
}
@media (max-width: 1200px) {
}
</style>