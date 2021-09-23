<template>
  <div>
    <div class="df a-center j-space-between">
      <p>应用健康度Dashboard</p>
      <a-select
        ref="select"
        v-model:value="value1"
        style="width: 120px"
        @focus="focus"
        @change="handleChange"
      >
        <a-select-option value="jack">关闭</a-select-option>
        <a-select-option value="lucy">30秒</a-select-option>
        <a-select-option value="lucy">1分钟</a-select-option>
        <a-select-option value="lucy">10分钟</a-select-option>
        <a-select-option value="lucy">30分钟</a-select-option>
        <a-select-option value="lucy">1分钟</a-select-option>
      </a-select>
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
      routerMap
    };
  },
});
</script>
