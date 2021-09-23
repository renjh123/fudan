<template>
  <div>
    <div class="df a-center j-space-between">
      <p>应用健康度Dashboard</p>
      <div>
        <ReloadOutlined />
      </div>
      
    </div>
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
        routerMap,
        value1: '30秒'
      };
    },
  });
</script>
