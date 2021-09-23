<template>
  <div class="pie" id="mycharts" ref="myRef"></div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted } from 'vue';
export default defineComponent({
  name: 'echarts',
  setup() {
    const { ctx } = getCurrentInstance();
    const myRef = ref(null);

    const initT = () => {
        const myChart = this.echarts.init(document.getElementById('mycharts'));
        console.log(myChart);
        myChart.setOption({
            title: {
            text: '本月数据统计'
            },
            tooltip: {},
            legend: {
            data: ['任务数量']
            },
            xAxis: {
            data: ['javascript', 'vue', 'ts', 'react', 'nginx']
            },
            yAxis: {},
            series: [
            {
                name: '任务数量',
                type: 'bar',
                data: [5, 20, 36, 10, 10]
            }
            ]
        });
        };

        onMounted(() => {
            initT();
        });
        return {
            myRef
        };
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
img{
  width: 400px;
  height: 400px;
  background: red;
}
.pie{
  width: 600px;
  height: 600px;
}
</style>
