<template>
  131312
</template>
<script lang="ts">
import { defineComponent,computed } from "vue";
import {useRouter} from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter();
    const routerMap = computed(() => router.options.routes);
    return {
      routerMap
    };
  },
});
</script>
