<template>
  <router-view />
</template>
<script lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    // const store = useStore();
    // //在页面加载时读取localStorage里的状态信息
    // if (localStorage.getItem("refresh")) {
    //   let refresh: any = localStorage.getItem("refresh");
    //   store.replaceState(Object.assign({}, store.state, JSON.parse(refresh)));
    // }

    // //在页面刷新时将vuex里的信息保存到localStorage里
    // window.addEventListener("beforeunload", () => {
    //   localStorage.setItem("refresh", JSON.stringify(store.state));
    // });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
