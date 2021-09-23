<template>
  <div>
    <div class="df a-center j-space-between">
      <p class="dashboard-title">应用健康度Dashboard</p>
      <div>
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
          <a-select-option value="lucy">1小时</a-select-option>
        </a-select>
      </div>
    </div>
    <a-divider />
  </div>
  <div>
    <div>应用健康排名： <span>升序</span>
     
      <span>降序</span>
    </div>
    <div></div>
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
<style lang="less" scoped>
  .dashboard-title{
    font-size: 18px;
  }
</style>
