<template>
  <div class="logo" />
  <a-menu theme="dark" mode="inline">
    <div v-for="item in routerMap[1].children" :key="item.path">
      <template v-if="item.meta && item.meta.disable">
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
              <a-menu-item :key="children.path">
                <router-link :to="children.path">{{
                  children.meta.title
                }}</router-link>
              </a-menu-item>
            </div>
          </a-sub-menu>
        </template>
      </template>
    </div>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from "vue";

import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    console.log("----------------");
    const router = useRouter();
    console.log(router.options.routes);
    console.log("----------------");
    const routerMap = computed(() => router.options.routes);
    const selectedKeys = ref([]);

    return {
      routerMap,
      selectedKeys,
    };
  },
});
</script>
