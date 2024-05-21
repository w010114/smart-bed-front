<template>
    <div class="back-button-container">
        <BackButton />
    </div>
    <div>
        <h1>用户信息</h1>
        <div v-for="user in users" :key="user.id">
            <p>用户ID: {{ user.id }}</p>
            <p>用户姓名: {{ user.username }}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import BackButton from '../BackButton.vue';

    export default {
        name: "HistoricalHeartRateDetail",
        components: {
            BackButton
        },
        data() {
            return {
                users: []
            };
        },
        created() {
            this.fetchUserData();
        },
        methods: {
            fetchUserData() {
                axios.get('http://localhost/user')
                    .then(response => {
                        this.users = response.data;
                    })
                    .catch(error => {
                        console.error('There was an error!', error);
                    });
            }
        }
    };
</script>

<style scoped>
    .back-button-container {
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>



