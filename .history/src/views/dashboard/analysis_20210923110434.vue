<template>
  <div class="df">
    <p>应用健康度Dashboard</p>
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 120px"
      @focus="focus"
      @change="handleChange"
    >
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled" disabled>Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
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
