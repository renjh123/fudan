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
        props: {
            title: String,
            data: Array
        },
        setup(props) {
            console.log(props.title,1111);
            console.log(props.data,222);
            var data = props.data;
            var title = props.title;
            //methods
            const echartInit = () =>{
                var myChart = echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: title,
                        left: 'center',
                        textStyle: {
                        color: '#999',
                        fontWeight: 'normal',
                        fontSize: 14
                        }
                    },
                    series: {
                        type: 'pie',
                        radius: [20, 60],
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