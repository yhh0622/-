<template>
  <div id="app">
    <headerNav></headerNav>
    <router-view />
    <footerCom></footerCom>
  </div>
</template>
// etVwidth(state, data) {
//       return state.vWidth = data
//     }
<script>
import store, { setVwidth } from "./store/index.js";
import headerNav from "./components/common/headerNav";
import footerCom from "./components/common/footerCom";
export default {
  name: "App",
  components: {
    headerNav,
    footerCom
  },
  mounted() {
    var vw = document.body.offsetWidth;
    store.commit("setVwidth", vw);
    var that = this;
    window.onresize = function() {
      vw = document.body.offsetWidth 
      store.commit("setVwidth", vw);
      console.log(vw);
      console.log(that.$store.state);
    };
  }
};
</script>

<style>
</style>
