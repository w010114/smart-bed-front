<template>
    <div class="temperature-detail">
        <div class="back-button-container">
            <BackButton />
        </div>
        <h2>体温详情</h2>
        <div class="chart-container">
            <canvas ref="temperatureChart"></canvas>
        </div>
        <div class="back-button-container">
            <BackButton />
        </div>
        <div class="info">
            <p v-if="isAlert" class="alert">体温异常，请注意！</p>
            <p>平均体温: {{ averageTemperature }} °C</p>
            <p>最高体温: {{ maxTemperature }} °C</p>
            <p>最低体温: {{ minTemperature }} °C</p>
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js/auto';
    import BackButton from '../BackButton.vue';

    export default {
        name: 'BodyTemperatureDetail',
        components:{
            BackButton
        },
        data() {
            return {
                temperatureData: [], // 历史体温数据
                isAlert: false, // 是否体温异常
                averageTemperature: 0, // 平均体温
                maxTemperature: 0, // 最高体温
                minTemperature: 0 // 最低体温
            };
        },
        mounted() {
            // 模拟历史体温数据
            this.temperatureData = this.generateTemperatureData(30);

            // 创建体温曲线图
            this.createTemperatureChart();
        },
        methods: {
            generateTemperatureData(count) {
                const data = [];
                for (let i = 0; i < count; i++) {
                    data.push(Math.random() * (39 - 35) + 35);
                }
                return data;
            },
            createTemperatureChart() {
                const ctx = this.$refs.temperatureChart.getContext('2d');
                this.chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: Array.from(Array(this.temperatureData.length).keys()),
                        datasets: [{
                            label: '体温曲线',
                            data: this.temperatureData,
                            borderColor: 'blue',
                            borderWidth: 1,
                            fill: false
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: false
                            }
                        }
                    }
                });
                this.updateStatistics();
            },
            updateStatistics() {
                const sum = this.temperatureData.reduce((acc, curr) => acc + curr, 0);
                this.averageTemperature = (sum / this.temperatureData.length).toFixed(2);
                this.maxTemperature = Math.max(...this.temperatureData).toFixed(2);
                this.minTemperature = Math.min(...this.temperatureData).toFixed(2);
                this.isAlert = this.maxTemperature > 37.5 || this.minTemperature < 36.5;
            }
        }
    };
</script>

<style scoped>
    .temperature-detail {
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .back-button-container {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .chart-container {
        position: relative;
        width: 100%;
        height: 300px; /* 调整为合适的高度 */
        margin-bottom: 20px;
    }
    .info {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }
    .alert {
        color: red;
        font-weight: bold;
    }

</style>
