<template>
  <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
    <div v-for="item in menuList" :key="item.path">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <router-link :to="item.path"> {{ item.name }}</router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <a-sub-menu :key="item.path">
          <template #title>
            <span> {{ item.title }}</span>
          </template>
          <div v-for="children in item.children" :key="children.path">
            <template v-if="children.hidden">
              <a-menu-item :key="children.path">
                <router-link :to="children.path">{{
                  children.name
                }}</router-link>
              </a-menu-item>
            </template>
          </div>
        </a-sub-menu>
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
      menuList: [{
        name: 'dashboard',
        title: '首页',
        path: '/dashboard/analysis'
      },{
        name: 'assess',
        title: '应用健康度评估',
        path: '/assessment'
      }]
    };
  },
});
</script>
