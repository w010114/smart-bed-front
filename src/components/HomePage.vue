<!-- src/components/HomePage.vue -->
<template>
    <div id="home-page" class="background">
        <div id="webp-background"></div>
        <HeartRateMonitor />
        <div class="row">
            <HistoricalHeartRateChart />
            <HeartRateAlert />
            <SleepQualityAnalysis />
            <ActivityMonitor />
            <BodyTemperatureMonitor />
            <MedicationReminder />
            <HealthAdvice />
            <MoreComponent />
        </div>
    </div>
</template>

<script>
    import HeartRateMonitor from './Home/HeartRateMonitor.vue';
    import HistoricalHeartRateChart from './Home/HistoricalHeartRateChart.vue';
    import HeartRateAlert from './Home/HeartRateAlert.vue';
    import SleepQualityAnalysis from './Home/SleepQualityAnalysis.vue';
    import ActivityMonitor from './Home/ActivityMonitor.vue';
    import BodyTemperatureMonitor from './Home/BodyTemperatureMonitor.vue';
    import MedicationReminder from './Home/MedicationReminder.vue';
    import HealthAdvice from './Home/HealthAdvice.vue';
    import MoreComponent from './Home/MoreComponent.vue';

    export default {
        name: 'HomePage',
        components: {
            HeartRateMonitor,
            HistoricalHeartRateChart,
            HeartRateAlert,
            SleepQualityAnalysis,
            ActivityMonitor,
            BodyTemperatureMonitor,
            MedicationReminder,
            HealthAdvice,
            MoreComponent
        }
    };
</script>

<style>
    #home-page {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #ffffff; /* 设置字体颜色为白色 */
        margin-top: 60px;
        position: relative;
        z-index: 1;
        min-height: 100vh; /* 确保整个视口高度 */
        min-width: 100vw;  /* 确保整个视口宽度 */
        overflow: hidden;
    }

    #webp-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../images/human.webp'); /* 使用 WebP 图片 */
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: #ffffff; /* 设置字体颜色为白色 */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加文字阴影 */
    }

    .row > * {
        flex: 1 1 20%;
        max-width: 25%;
        margin: 10px;
        background-color: rgba(0, 0, 0, 0.5); /* 设置背景为半透明黑色，增加对比度 */
        padding: 20px;
        border-radius: 10px; /* 添加圆角 */
    }

    .row > * a {
        color: #ffffff; /* 设置链接颜色为白色 */
    }

    .row > * h2,
    .row > * p {
        color: #ffffff; /* 设置标题和段落颜色为白色 */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加文字阴影 */
    }
</style>
