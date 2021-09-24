<style lang="less" scoped >
.assessHeader {
  margin-bottom: 20px;
}
.tableHeaderConfig {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.addAssets {
  margin-left: 10px;
}

</style>
<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="严重">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="警戒" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="正常">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>

 
  <a-table :columns="columns" :data-source="data" bordered >
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #title>
      <div class="tableHeaderConfig">
        <div>应用系统列表</div>

        <div>
          <a-input-search
            v-model:value="value"
            placeholder="input search text"
            style="width: 200px"
            @search="onSearch"
          />
          <a-button type="primary" class="addAssets" @click="showModal"
            >添加评估指标</a-button
          >
        </div>
      </div>
    </template>
    <template #operation="{text}">
       <a @click="getApmWeight(text)">编辑</a> ｜  <a @click="getApmWeight(text)">删除</a>
    </template>
  </a-table> 
  
  <div class="addFrom">
        <a-modal
          title="添加评估指标"
          v-model:visible="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
        >
          <p>
            <a-form-item label="指标对象">
              <a-select placeholder="指标对象"
               style="width: 200px"
               @onChange="getIndicators"
                 v-model:value="value"
                  label-in-value
                  :options="optionsIndicators"
                  @change="getIndicators"
               >
               
              </a-select>
            </a-form-item>
          </p>
          
          <p>
            <a-form-item label="指标数据：">
              <a-input v-model:value="indicatorsData" />
            </a-form-item>
          </p>
          <p class="sliderData">
            <a-form-item label="权重：" style="width:100%">
             <div ><a-slider :tip-formatter="formatter" :max="80" @change="getsliderData"/></div> 
            </a-form-item>
          </p>
          <!-- <p>
            <a-form-item label="指标对象">
              <a-input v-model:value="formState.name" />
            </a-form-item>
          </p> -->
        </a-modal>
   </div>
   <div class="updateFrom">
     <a-modal v-model:visible="visibleWeight" title="APM权重定义" @ok="handleOk">
         <p class="sliderData">
            <a-form-item label="权重：" style="width:100%">
             <div ><a-slider :tip-formatter="formatter" :max="80" @change="getsliderData"/></div> 
            </a-form-item>
          </p>
    </a-modal>
   </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { SelectTypes } from "ant-design-vue/es/select";
import { useRouter } from "vue-router";
const columns = [
  {
    title: "应用名称",
    dataIndex: "name",
    // slots: { customRender: "name" },
  },
  {
    title: "应用ID",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "主机ID",
    dataIndex: "address",
  },
  {
    title: "操作",
    dataIndex: "operation",
  }
];

const data = [
  {
    key: "1",
    name: "响应时间",
    money: "整数",
    address: "ms",
  },
  {
    key: "2",
    name: "APDEX",
    money: "浮点",
    address: "",
  },
  {
    key: "3",
    name: "错误率",
    money: "整数",
    address: "%",
  },
];
export default defineComponent({
  setup() {
    const popupScroll = () => {
      console.log("popupScroll");
    };
    //指标对象虚拟数据
    const optionsIndicators = ref<SelectTypes["options"]>([
      {
        value: "1",
        label: "安全性",
      },
      {
        value: "2",
        label: "基础资源",
      },
    ]);
    //指标名称虚拟数据
    const optionsIndicatorsName = ref<SelectTypes["options"]>([
      {
        value: "1",
        label: "等保",
      },
      {
        value: "2",
        label: "杀毒软件",
      },
      {
        value: "3",
        label: "防火墙",
      },
      {
        value: "4",
        label: "防DOS",
      },
    ]);
    const visible = ref<boolean>(false);
    const visibleWeight = ref<boolean>(false);

    const confirmLoading = ref<boolean>(false);
    const indicatorsList = ref<any>([2]);
    const indicatorsData = ref<Number>(5);

    const showModal = () => {
      visible.value = true;
    };
    const getAddindicators = () => {
      indicatorsList.value.push(2);
    };
    const handleOk = () => {};

    const formatter = (value: number) => {
      return `${value}%`;
    };
    const getsliderData = (e) => {
      console.log(e);
    };
    //编辑APM权重
    const getApmWeight = (item) => {
      console.log(item);
      visibleWeight.value = true;
    };
    //指标对象
    const getIndicators = (e) => {
      console.log(e);
    };
    //指标名称
    const getIndicatorsName = (e) => {
      console.log(e);
    };
    return {
        activeKey: ref('1'),
      formatter,
      optionsIndicators,
      optionsIndicatorsName,
      visible,
      getIndicators,
      getIndicatorsName,
      visibleWeight,
      getApmWeight,
      confirmLoading,
      getAddindicators,
      getsliderData,
      showModal,
      handleOk,
      indicatorsData: ref(indicatorsData),
      indicatorsList: ref(indicatorsList),
      data,
      columns,
      popupScroll,
      size: ref("default"),
      value1: ref("a1"),
      value2: ref(["a1", "b2"]),
      value3: ref(["a1", "b2"]),
      options: [...Array(25)].map((_, i) => ({
        value: (i + 10).toString(36) + (i + 1),
      })),
    };
  },
});
</script>
