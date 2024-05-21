<template>
    <div id="activity-monitor" @click="navigateToDetail" class="ActivityMonitor">
        <h2>活动量监测</h2>
        <!-- Add your activity monitor functionality here -->
    </div>
</template>

<script>
    export default {
        name: 'ActivityMonitor',
        methods: {
            navigateToDetail() {
                this.$router.push({ name: 'ActivityMonitorDetail' });
            }
        }
    };
</script>

<style scoped>
    #activity-monitor {
        cursor: pointer;
    }
    .ActivityMonitor {
        padding: 20px;
    }
</style>
