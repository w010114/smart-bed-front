<template>
    <div id="heart-rate-alert" @click="navigateToDetail" class="HeartRateAlert">
        <h2>心率异常预警</h2>
        <!-- Add your alert functionality here -->
    </div>
</template>

<script>
    export default {
        name: 'HeartRateAlert',
        methods: {
            navigateToDetail() {
                this.$router.push({ name: 'HeartRateAlertDetail' });
            }
        }
    };
</script>

<style scoped>
    #heart-rate-alert {
        cursor: pointer;
    }
    .HeartRateAlert {
        padding: 20px;
    }
</style>
