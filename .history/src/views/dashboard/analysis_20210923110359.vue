<template>
  <div class="df">
    应用健康度Dashboard
    <a-divider />
  </div>
  
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
