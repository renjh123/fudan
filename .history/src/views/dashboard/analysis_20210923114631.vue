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
  <div class="df a-center j-space-between">
    <div>应用健康排名： <span>升序</span><span>降序</span></div>
    <div class="df">
      应用健康度：
      <p>严重（0 - 50）</p>
      <p>警戒（51 - 95）</p>
      <p>正常（96 - 100）</p>
    </div>
  </div>

  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">col-6</div>
      </a-col>
    </a-row>
  </div>
  
</template>
<script lang="ts">
  import { defineComponent,computed } from "vue";
  import {useRouter} from 'vue-router';
  import P from '@/components/charts/pie.vue';
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

  .gutter-example :deep(.ant-row > div) {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    background: #00a0e9;
    padding: 5px 0;
  }
</style>
