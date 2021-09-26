<template>
  <div>
    <h2>评估指标列表</h2>
  </div>
  <a-table :columns="columns" :data-source="data">
    <template #action>
      <span>
        <a @click="showModal">编辑</a>
      </span>
    </template>
  </a-table>
  <a-modal v-model:visible="visible" title="评估指标定义" @ok="handleOk" cancelText="取消" okText="确定">
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>

    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="指标名称">
        <a-input v-model:value="formState.name"/>
      </a-form-item>
      <a-form-item label="指标类型">
        <a-select v-model:value="formState.type">
          <a-select-option value="0">整数</a-select-option>
          <a-select-option value="1">浮点数</a-select-option>
          <a-select-option value="2">字符</a-select-option>
          <a-select-option value="3">布尔</a-select-option>
        </a-select>
      </a-form-item>
       <a-form-item label="数值范围" class="df">
          <span><a-input v-model:value="formState.range1"/></span>
      </a-form-item>
       <a-form-item label="指标单位">
        <a-input v-model:value="formState.unit" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRaw, UnwrapRef } from 'vue'
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
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    index: '等保',
    type: '整数',
    unit: '级',
    rule: '等保=5级为100;等保=4级为80；等保=3为60；等保=2为40；等保=1为20'
  },
  {
    key: '2',
    index: '杀毒软件',
    type: '布尔',
    unit: '',
    rule: '杀毒软件有为100；杀毒软件无为0',
  },
  {
    key: '3',
    index: '防火墙',
    type: '布尔',
    unit: '',
    rule: '防护墙有为100；防火墙无为0',
  },
];

interface FormState {
  name: string;
  type: string | undefined;
  range1: number;
  range2: number;
  unit: string | undefined;
}

export default defineComponent({
    name: 'source-index',
    setup() {
      // 搜索
      const value = ref<string>('');

      const onSearch = (searchValue: string) => {
        console.log('use value', searchValue);
        console.log('or use this.value', value.value);
      };

      // 弹框
      const visible = ref<boolean>(false);

      const showModal = () => {
        visible.value = true;
      };

      const handleOk = (e: MouseEvent) => {
        console.log(e);
        visible.value = false;
      };

      // 步骤图
      const current = ref<number>(0);
      const next = () => {
        current.value++;
      };
      const prev = () => {
        current.value--;
      };
      
      // 表单
      const formState: UnwrapRef<FormState> = reactive({
        name: '',
        type: '0',
        range1: undefined,
        range2: undefined,
        unit: ''
      });
      const onSubmit = () => {
        console.log('submit!', toRaw(formState));
      };

      return {
        data,
        columns,
        value,
        visible,
        onSearch,
        showModal,
        handleOk,
        current,
        steps: [
          {
            title: '评估指标',
            content: '评估指标',
          },
          {
            title: '得分规则',
            content: '得分规则',
          }
        ],
        next,
        prev,
        formState,
        onSubmit
      };
    }
});
</script>
<style lang="less" scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
.ant-form-item{
  margin-bottom: 6px !important;
}
</style>
