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
        <div class="gutter-box">
          <Pie title="OA系统" :data="pieData" index="0"></Pie>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          <Pie title="选课系统" :data="pieData" index="1"></Pie>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          <Pie title="教务系统" :data="pieData" index="2"></Pie>
        </div>
      </a-col>
    </a-row>
  </div>
  
</template>
<script lang="ts">
  import { defineComponent,computed } from "vue";
  import {useRouter} from 'vue-router';
  import Pie from '@/components/charts/pie.vue';
  export default defineComponent({
    setup() {
      const router = useRouter();
      const routerMap = computed(() => router.options.routes);
      
      return {
        routerMap,
        value1: '30秒',
        pieData: [
          { name: '111圣彼得堡来客', value: 5.6 },
          { name: '陀思妥耶夫斯基全集', value: 1 },
          { name: '史记精注全译（全6册）', value: 0.8 },
          { name: '加德纳艺术通史', value: 0.5 },
          { name: '表象与本质', value: 0.5 },
          { name: '其它', value: 3.8 }
        ]
      };
    },
    components: {
      Pie
    }
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
    padding: 5px 0;
    border: 1px solid #333;
  }
</style>
