<template>
    <div class="chart-container">
        <v-chart :option="chartOptions" style="width: 100%; height: 300px;"></v-chart>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import VChart from 'vue-echarts';
    import * as echarts from 'echarts';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/grid';
    import 'echarts/lib/chart/line';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([CanvasRenderer]);

    export default {
        name: 'ChartComponent',
        components: {
            VChart
        },
        setup() {
            const chartOptions = ref(null);

            function generateRandomData(length) {
                const data = [];
                for (let i = 0; i < length; i++) {
                    data.push(Math.floor(Math.random() * 121)); // 生成 0 到 120 之间的随机数
                }
                return data;
            }

            onMounted(() => {
                const data = generateRandomData(12);
                const timeLabels = ['22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00'];

                chartOptions.value = {
                    title: {
                        text: 'HRV 数据图表'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: timeLabels
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        max: 120,
                        interval: 50, // 设置分段
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['#f2dede', '#fcf8e3', '#dff0d8'] // 分段背景色
                            }
                        }
                    },
                    series: [
                        {
                            name: 'HRV值',
                            type: 'line',
                            data: data,
                            itemStyle: {
                                color: params => {
                                    if (params.value < 50) {
                                        return '#d9534f'; // 红色
                                    } else if (params.value <= 100) {
                                        return '#f0ad4e'; // 黄色
                                    } else {
                                        return '#5cb85c'; // 绿色
                                    }
                                }
                            }
                        }
                    ]
                };
            });

            return {
                chartOptions
            };
        }
    };
</script>

<style scoped>
    .chart-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
