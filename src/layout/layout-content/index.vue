<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent,computed } from "vue";
import store from "@/store/index";                                                                             
export default defineComponent({
  setup() {
      // @ts-ignore
    const routerMap = computed(()=> store.state.Router.RouterMap)
    return {routerMap};
  },
});
</script>
