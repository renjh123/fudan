<template>
  <div class="chart">
    <p class="chart-title">{{ title }}</p>
    <div :id="'main' + index" style="width: 100%; height: 400px;">
    </div>
  </div>
</template>
<script lang="ts">
    import * as echarts from 'echarts';
    import { onMounted } from 'vue';
    export default {
        name: 'Pie',
        props: {
            title: String,
            data: Array,
            index: String
        },
        setup(props) {
            //methods
            const echartInit = () =>{
                var myChart = echarts.init(document.getElementById(`main${props.index}`));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '{name|' + 100 + '}\n{val|' + '健康度' + '}',
                        left: 'center',
                        top: 'center',
                        textStyle: {
                            rich: {
                                name: {
                                    fontSize: 28,
                                    color: '#666666',
                                    padding: [10, 0]
                                },
                                val: {
                                    fontSize: 14,
                                    color: '#333333',
                                }
                            }
                        }
                    },
                    series: {
                        type: 'pie',
                        radius: [80, 100],
                        left: 'center',
                        width: 400,
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        label: {
                            alignTo: 'edge',
                            formatter: '{name|{b}}\n{time|{c}}',
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
                        data: props.data
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
<style lang="less" scoped>
    .chart-title{
        padding-top: 30px
      text-align: center;
    }
</style>