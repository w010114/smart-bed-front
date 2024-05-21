<template>
    <router-link to="/Home" class="back-button">返回</router-link>
</template>

<script>
    export default {
        name: 'BackButton'
    }
</script>

<style scoped>
    .back-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #3498db;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .back-button:hover {
        background-color: #2980b9;
    }
</style>
