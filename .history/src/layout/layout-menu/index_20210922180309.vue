<template>
  <a-menu theme="dark" mode="inline">
    <div v-for="item in routerMap" :key="item.path">
      <template v-if="item.meta && item.meta.hidden">
        <template v-if="!item.children">
          <a-menu-item :key="item.path">
            <router-link :to="item.path"> {{ item.meta.title }}</router-link>
          </a-menu-item>
        </template>
        <template v-else>
          <a-sub-menu :key="item.path">
            <template #title>
              <span> {{ item.meta.title }}</span>
            </template>
            <div v-for="children in item.children" :key="children.path">
              <template v-if="children.meta && children.meta.hidden">
                <a-menu-item :key="children.path">
                  <router-link :to="children.path">{{
                    children.meta.title
                  }}</router-link>
                </a-menu-item>
              </template>
            </div>
          </a-sub-menu>
        </template>
      </template>
    </div>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const routerMap = store.state.router.RouterMap;
    // console.log(routerMap);
    const selectedKeys = ref([]);
    return {
      routerMap,
      selectedKeys,
    };
  },
});
</script>
