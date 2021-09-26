<template>
  <div class="df j-space-between">
    <h2>评估指标列表</h2>
    <div class="df a-center">
      <a-input-search v-model:value="value" placeholder="请输入搜索关键字..."  @search="onSearch"/>
      <a-button type="primary" style="margin-left: 20px;" @click="showModal">新建</a-button>
    </div>
  </div>
  <a-table :columns="columns" :data-source="data">
    <template #action>
      <span>
        <a @click="editForm">编辑</a>
        <a-divider type="vertical" />
          <a-popconfirm
            title="Are you sure 删除 this task?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirm"
            @cancel="cancel"
          >
            <a @click="deletelist(record)">删除</a>
          </a-popconfirm>
      </span>
    </template>
  </a-table>
  <a-modal v-model:visible="visible" title="评估指标定义" @ok="handleOk" cancelText="取消" okText="下一步">
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <!-- 评估指标 -->
    <a-form :model="formIndex" :label-col="labelCol" :wrapper-col="wrapperCol" v-if="current === 0">
      <a-form-item label="指标名称">
        <a-input v-model:value="formIndex.name"  style="width: 400px;"/>
      </a-form-item>
      <a-form-item label="指标类型">
        <a-select v-model:value="formIndex.type" style="width: 400px;">
          <a-select-option value="0">整数</a-select-option>
          <a-select-option value="1">浮点数</a-select-option>
          <a-select-option value="2">字符</a-select-option>
          <a-select-option value="3">布尔</a-select-option>
        </a-select>
      </a-form-item>
       <a-form-item label="数值范围" class="df">
          <a-input v-model:value="formIndex.range1"  style="width: 150px;"/>
          -
          <a-input v-model:value="formIndex.range2"  style="width: 150px;"/>
      </a-form-item>
       <a-form-item label="指标单位">
        <a-input v-model:value="formIndex.unit"  style="width: 400px;"/>
      </a-form-item>
    </a-form>
    <!-- 得分规则 -->
    <a-form :model="formRule" :label-col="labelCol" :wrapper-col="wrapperCol" v-if="current === 1">
      <a-form-item label="当指标数据" class="df" v-for="(item, index) in indexList" :key="item">
        <a-select v-model:value="formRule.type" style="width: 100px;">
          <a-select-option :value="index" v-for="(item, index) in conditions" :key="item">{{ item.name }}</a-select-option>
        </a-select>
        -
        <a-input v-model:value="formRule.indexData"  style="width: 100px;"/>
        <span style="display: inline-block;margin: 0 4px;">得分:</span>
        <a-input v-model:value="formRule.score"  style="width: 100px;margin-right: 4px;"/>
        <span @click="deleteIndex(index)">删除</span>
      </a-form-item>
      <a-button type="primary" @click="addIndex">添加</a-button>
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

const conditions = [{
  name: "=",
  id: 0
},{
  name: ">",
  id: 1
},{
  name: ">=",
  id: 2
},{
  name: "<",
  id: 3
},{
  name: "<=",
  id: 4
},{
  name: "in range",
  id: 5
},{
  name: "每递增",
  id: 6
},{
  name: "每递减",
  id: 7
},{
  name: "偏离基线",
  id: 8
},{
  name: "大于基线",
  id: 9
},{
  name: "小于基线",
  id: 10
}]

interface formIndex {
  name: string;
  type: string | undefined;
  range1: number;
  range2: number;
  unit: string | undefined;
}

interface formRule {
  type: string | undefined;
  indexData: number;
  score: number;
}

export default defineComponent({
    name: 'safe',
    setup() {
      // 搜索
      const value = ref<string>('');

      const onSearch = (searchValue: string) => {
        console.log('use value', searchValue);
        console.log('or use this.value', value.value);
      };

      
      // 步骤图
      const current = ref<number>(0);
      const next = () => {
        current.value++;
      };
      const prev = () => {
        current.value--;
      };

      // 弹框
      const visible = ref<boolean>(false);

      const showModal = () => {
        visible.value = true;
      };

      const handleOk = (e: MouseEvent) => {
        console.log(e);
        current.value = 1;
        // visible.value = false;
      };

      
      // 表单1
      const formIndex: UnwrapRef<formIndex> = reactive({
        name: '',
        type: '0',
        range1: undefined,
        range2: undefined,
        unit: ''
      });
      const onSubmit = () => {
        console.log('submit!', toRaw(formIndex));
      };

      // 表单2
      const formRule: UnwrapRef<formRule> = reactive({
        type: undefined,
        indexData: undefined,
        score: undefined,
      });
      
      const indexList = ref<any>([2]);


      // 添加指标
      const addIndex = () => {
        indexList.value.push(2);
      };

      // 删除指标
      const deleteIndex = (i) => {
        if(indexList.value.length > 1){
          indexList.value.splice(i, 1);
        }
      };

      // 编辑
      const editForm = (i) => {
        showModal();
      };

      // 删除
      const deletelist= (e) => {
        console.log(e)
      }
      return {
        data,
        columns,
        value,
        visible,
        conditions,
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
        formIndex,
        formRule,
        indexList,
        addIndex,
        deleteIndex,
        onSubmit,
        editForm,
        deletelist
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
.ant-form-item:nth-child(1){
  margin-top: 20px !important;
}
</style>
