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
                ],
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
                series: datas.map(function (data, idx) {
                    var top = idx * 33.3;
                    return {
                    type: 'pie',
                    radius: [20, 60],
                    top: top + '%',
                    height: '33.33%',
                    left: 'center',
                    width: 400,
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    label: {
                        alignTo: 'edge',
                        formatter: '{name|{b}}\n{time|{c} 小时}',
                        minMargin: 5,
                        edgeDistance: 10,
                        lineHeight: 15,
                        rich: {
                        time: {
                            fontSize: 10,
                            color: '#999'
                        }
                        }
                    },
                    labelLine: {
                        length: 15,
                        length2: 0,
                        maxSurfaceAngle: 80
                    },
                    labelLayout: function (params) {
                        const isLeft = params.labelRect.x < myChart.getWidth() / 2;
                        const points = params.labelLinePoints;
                        // Update the end point.
                        points[2][0] = isLeft
                        ? params.labelRect.x
                        : params.labelRect.x + params.labelRect.width;
                        return {
                        labelLinePoints: points
                        };
                    },
                    data: data
                    };
                })
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