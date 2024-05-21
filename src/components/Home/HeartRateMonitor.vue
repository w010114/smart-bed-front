<template>
    <div class="heart-rate-monitor">
        <h2>实时心率数据</h2>
        <p :style="{ color: heartRateColor }" class="current-heart-rate">当前心率：{{ currentHeartRate }} bpm</p>

    </div>
</template>

<script>

    export default {
        name: 'HeartRateMonitor',
        components: {

        },
        data() {
            return {
                currentHeartRate: 75, // 示例数据
                heartRateData: [70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95, 98, 100, 102, 105, 108, 110, 112, 115, 118, 120, 122, 125, 128], // 示例数据
            };
        },
        computed: {
            heartRateColor() {
                if (this.currentHeartRate < 60) {
                    return 'blue';
                } else if (this.currentHeartRate >= 60 && this.currentHeartRate <= 100) {
                    return 'green';
                } else if (this.currentHeartRate > 100 && this.currentHeartRate <= 120) {
                    return 'yellow';
                } else {
                    return 'red';
                }
            }
        },
        mounted() {
            // console.log("HeartRateMonitor.vue 组件已挂载");
            setInterval(() => {
                // console.log("Updating heart rate...");
                this.currentHeartRate = Math.floor(Math.random() * 100) + 60; // 模拟实时心率数据更新
            }, 2000); // 每隔2秒更新一次
        },
        methods: {

        }
    };
</script>

<style scoped>
    .heart-rate-monitor {
        padding: 20px;
    }
    .current-heart-rate {
        font-size: 24px;
    }
</style>
