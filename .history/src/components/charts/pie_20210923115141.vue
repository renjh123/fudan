<template>
  <div class="pie" id="mycharts" ref="myRef"></div>
</template>

<script lang="ts">

import * as echarts from 'echarts';
import { defineComponent, getCurrentInstance, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'pie',
  setup(){
	const echartInit = () =>{
       	var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
	        title: {
	            text: 'ECharts 入门示例'
	        },
	        tooltip: {},
	        legend: {
	            data:['销量']
	        },
	        xAxis: {
	            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	        },
	        yAxis: {},
	        series: [{
	            name: '销量',
	            type: 'bar',
	            data: [5, 20, 36, 10, 10, 20]
	        }]
	  };
	  // 使用刚指定的配置项和数据显示图表。
	  myChart.setOption(option);
   	}
    onMounted(()=>{
      	echartInit()
    })
    
    return { 
      	echartInit
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
