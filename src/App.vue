<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>TodoList</h1>
    <hr />
    <router-view></router-view>
    <footer>Copyright ⓒ 2021 Ahn,GiHwan all rights reserved.</footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "MaplestoryOTFLight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: MaplestoryOTFLight;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

footer {
  margin: 20px 0px;
}
</style>
