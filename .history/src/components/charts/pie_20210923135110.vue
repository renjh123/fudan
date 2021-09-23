<template>
  <div class="map">
    <div id="main" style="width: 100%; height: 400px;">
    </div>
  </div>
</template>
<script lang="ts">
    import * as echarts from 'echarts';
    import { onMounted } from 'vue';
    export default {
        name: 'Pie',
        setup() {
            //methods
            const echartInit = () =>{
                var myChart = echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var datas = [
                ////////////////////////////////////////
                    [
                        { name: '圣彼得堡来客', value: 5.6 },
                        { name: '陀思妥耶夫斯基全集', value: 1 },
                        { name: '史记精注全译（全6册）', value: 0.8 },
                        { name: '加德纳艺术通史', value: 0.5 },
                        { name: '表象与本质', value: 0.5 },
                        { name: '其它', value: 3.8 }
                    ]
                ];
                var option = {
                title: {
                    text: '阅读书籍分布',
                    left: 'center',
                    textStyle: {
                    color: '#999',
                    fontWeight: 'normal',
                    fontSize: 14
                    }
                },
                series: {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
                }
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
            //onMounted
            onMounted(()=>{
                echartInit()
            })
            //return
            return { 
                echartInit
            };
        }
    };
</script>