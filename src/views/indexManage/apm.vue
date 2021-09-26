<template>
  <div>
    <h2>评估指标列表</h2>
  </div>
  <a-table :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
const columns = [
  {
    title: '评估指标',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '指标类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '指标单位',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: '得分规则',
    key: 'rule',
    dataIndex: 'rule'
  }
];

const data = [
  {
    key: '1',
    index: '响应时间',
    type: '整数',
    unit: 'ms',
    rule: '',
  },
  {
    key: '2',
    index: 'APDEX',
    type: '浮点',
    unit: '',
    rule: '',
  },
  {
    key: '3',
    index: '错误率',
    type: '整数',
    unit: '%',
    rule: '',
  },
];
export default defineComponent({
    name: 'apm',
    setup() {
        return {
          data,
          columns
        };
    }
});
</script>
