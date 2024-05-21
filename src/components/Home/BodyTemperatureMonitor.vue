<template>
    <div id="body-temperature-monitor" @click="navigateToDetail" class="BodyTemperatureMonitor">
        <h2>体温监测</h2>
        <!-- 在此处添加体温监测的功能 -->
    </div>
</template>

<script>
    export default {
        name: 'BodyTemperatureMonitor',
        methods: {
            navigateToDetail() {
                this.$router.push({ name: 'BodyTemperatureDetail' });
            }
        }
    };
</script>

<style scoped>
    #body-temperature-monitor {
        cursor: pointer;
    }
    .BodyTemperatureMonitor {
        padding: 20px;
    }
</style>
