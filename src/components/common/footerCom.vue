<template>
  <div class="foot">
    <img src="../../assets/images/logofoot.png" alt srcset />
    <ul>
      <li class="codeLi">
        <p>Publicaddress</p>
        <p>弥玥泉官方公众号</p>
        <img src="../../assets/images/code.png" alt srcset class="code" />
      </li>
      <li>
        <p>Tele</p>
        <p>0371-63393363</p>
      </li>
      <li>
        <p>information</p>
        <p>新疆天然水源地</p>
      </li>
    </ul>
    <div class="pingtai">
      <img src="../../assets/images/jd.png" alt />
      <img src="../../assets/images/wb.png" alt />
      <img src="../../assets/images/red.png" alt />
    </div>
    <div class="reser">
      <p>Copyright2019河南弥玥泉电子商务有限公司.All Rights Reserved.</p>
      <p>
        豫ICP备18033600号-1
        <span>营业执照</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.foot {
  padding: 3vh 0 1.5vh;
  width: 100vw10vw;
  text-align: center;
  font-size: 0.055rem;
  color: #999999;
  font-weight: 400;
  background-color: white;
}
.foot > img {
  width: 4vw;
  margin-bottom: 2vh;
}
.foot > ul {
  width: 40vw;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 3vh;
}
.foot > ul > li {
  width: 33.3%;
}
.foot > ul > li:nth-child(2) {
  border-left: 1px solid rgba(234, 236, 235, 1);
  border-right: 1px solid rgba(234, 236, 235, 1);
}
.foot > ul > li > p:nth-child(1) {
  font-size: 0.055rem;
  letter-spacing: 0.01rem;
  word-wrap: break-word;
}
.foot > ul > li > p:nth-child(2) {
  font-size: 0.05rem;
}
.pingtai {
  margin-bottom: 3vh;
}
.pingtai img {
  width: 3vw;
  margin: 0 0.02rem;
}
.reser {
  padding-top: 4vh;
  border-top: 1px solid #e5e5e5;
}
.reser p:nth-child(2) {
  margin: 0.04rem 0;
}
.reser span {
  border-left: 1px solid #e5e5e5;
  padding-left: 0.04rem;
}
.codeLi {
  position: relative;
}
.code {
  width: 40%;
  position: absolute;
  top: 4.5vh;
  left: 4.5vw;
  display: none;
}
.codeLi:hover .code {
  display: block;
}
@media (max-width: 725px) {
  .foot > img {
    width: 16vw;
    margin-bottom: 2vh;
  }
  .foot > ul {
    width: 80vw;
  }
  .pingtai img {
    width: 10vw;
    margin: 0 0.1rem;
  }
  .code {
    width: 60%;
    position: absolute;
    top: 5vh;
    left: 4vw;
    display: none;
    transition: all 0.5s;
  }
}
@media (max-width: 1200px) {
  .foot > ul > li > p:nth-child(1) {
    letter-spacing: unset;
  }
}
</style>