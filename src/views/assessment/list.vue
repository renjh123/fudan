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
.footDataAll {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 26px;
  em {
    color: green;
    font-style: normal;
  }
}
</style>
<template>
  <div class="assessHeader">
    <a-select
      v-model:value="value1"
      :size="size"
      style="width: 200px"
      :options="options"
    ></a-select>
  </div>
  <a-table :columns="columns" :data-source="data" bordered :pagination="false">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #title>
      <div class="tableHeaderConfig">
        <div>评估指标列表</div>

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
       <a @click="getApmWeight(text)">编辑APM权重</a>
    </template>
  </a-table> 
  <div class="footDataAll"><span>总权重：20 % </span><span>健康得分：<em>19.4</em></span></div>
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
          <p style="display:flex">
            <div>
            <a-form-item label="指标名称" v-for='item in indicatorsList'>
              <a-select placeholder="指标名称" style="width: 200px" @onChange="getIndicators"
                 v-model:value="value"
                  label-in-value
                  :options="optionsIndicatorsName"
                  @change="getIndicatorsName" >
              </a-select>
            </a-form-item>
              </div>
            <span style="margin-left:10px;margin-top:8px"><a @click="getAddindicators">创建</a></span>
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
    title: "评估指标",
    dataIndex: "name",
    // slots: { customRender: "name" },
  },
  {
    title: "指标数据",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "得分",
    dataIndex: "address",
  },
  {
    title: "权重",
    dataIndex: "address",
  },
  {
    title: "健康得分",
    dataIndex: "address",
  },
  {
    title: "操作",
    dataIndex: "operation",
    slots: { customRender: "operation" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park",
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
