<template>
  <div>
    <div class="df a-center j-space-between">
      <p class="dashboard-title">应用健康度Dashboard</p>
      <div class="df a-center">
        <ReloadOutlined/>
        <a-select
          ref="select"
          v-model:value="value1"
          style="width: 120px;margin-left: 10px;"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option v-for="item in timePeriod" :value="item.value" :key="item.value">{{ item.name }}</a-select-option>
        </a-select>
      </div>
    </div>
    <a-divider />
  </div>
  <div class="df a-center j-space-between">
    <div class="legend-sort">应用健康排名： <span>升序</span><span>降序</span></div>
    <div class="df dashboard-legend">
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
  import { ReloadOutlined } from '@ant-design/icons-vue';
  export default defineComponent({
    setup() {
      const router = useRouter();
      const routerMap = computed(() => router.options.routes);
     
      return {
        routerMap,
        value1: '30秒',
        pieData: [
          { name: '基础资源', value: 5 },
          { name: 'APM', value: 70 },
          { name: '安全性', value: 25 },
        ],
        timePeriod: [
          { name: '关闭', value: 0 },
          { name: '30秒', value: 1 },
          { name: '1分钟', value: 2 },
          { name: '10分钟', value: 3 },
          { name: '30分钟', value: 4 },
          { name: '1小时', value: 5 }
        ]
      };
    },
    methods: {
      handleChange(){
        console.log(this.value1)
      }
    },
    components: {
      Pie, ReloadOutlined
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
  .legend-sort{
    span:nth-child(1){
      margin-right: 20px;
    }
  }
  .dashboard-legend{
    p:nth-child(1):before{ 
      content:"";
      display: inline-block;   
      width: 10px;
      height: 10px;
      background: red;
      border-radius: 5px;
      margin: 0 4px 0 20px;
    }
    p:nth-child(2):before{ 
      content:"";
      display: inline-block;   
      width: 10px;
      height: 10px;
      background: orange;
      border-radius: 5px;
      margin: 0 4px 0 20px;
    }
    p:nth-child(3):before{ 
      content:"";
      display: inline-block;   
      width: 10px;
      height: 10px;
      background: yellow;
      border-radius: 5px;
      margin: 0 4px 0 20px;
    }
  }
</style>
