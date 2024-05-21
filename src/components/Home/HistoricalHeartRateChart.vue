<template>
    <div id="historical-heart-rate-chart" @click="navigateToDetail" class="HistoricalHeartRateChart">
        <h2>历史心率数据</h2>
        <!-- Add your chart here -->
    </div>
</template>

<script>
    export default {
        name: 'HistoricalHeartRateChart',
        methods: {
            navigateToDetail() {
                this.$router.push({ name: 'HistoricalHeartRateDetail' });
            }
        }
    };
</script>

<style scoped>
    #historical-heart-rate-chart {
        cursor: pointer;
    }
    .HistoricalHeartRateChart {
        padding: 20px;
    }
</style>
