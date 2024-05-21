<template>
    <div id="health-advice" @click="navigateToDetail" class="HealthAdvice">
        <h2>健康建议推送</h2>
        <!-- 在此处添加健康建议推送的功能 -->
    </div>
</template>

<script>
    export default {
        name: 'HealthAdvice',
        methods: {
            navigateToDetail() {
                this.$router.push({ name: 'HealthAdviceDetail' });
            }
        }
    };
</script>

<style scoped>
    #health-advice {
        cursor: pointer;
    }
    .HealthAdvice {
        padding: 20px;
    }
</style>
