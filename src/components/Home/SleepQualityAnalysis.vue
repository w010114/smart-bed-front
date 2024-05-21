<!-- src/components/SleepQualityAnalysis.vue -->
<template>
    <div id="sleep-quality-analysis" @click="navigateToDetail" class="SleepQualityAnalysis">
        <h2>睡眠质量分析</h2>
        <!-- 其他内容 -->
    </div>
</template>

<script>
    export default {
        name: 'SleepQualityAnalysis',
        methods: {
            navigateToDetail() {
                this.$router.push({ name: 'SleepQualityDetail' });
            }
        }
    };
</script>

<style scoped>
    #sleep-quality-analysis {
        cursor: pointer;
    }
    .SleepQualityAnalysis {
        padding: 20px;
    }
</style>
