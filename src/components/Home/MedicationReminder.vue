<template>
    <div id="medication-reminder" @click="navigateToDetail" class="MedicationReminder">
        <h2>用药提醒</h2>
        <!-- 在此处添加用药提醒的功能 -->
    </div>
</template>

<script>
    export default {
        name: 'MedicationReminder',
        methods: {
            navigateToDetail() {
                this.$router.push({ name: 'MedicationReminderDetail' });
            }
        }
    };
</script>

<style scoped>
    #medication-reminder {
        cursor: pointer;
    }
    .MedicationReminder {
        padding: 20px;
    }
</style>
