<template>
    <div class="container">
        <div class="login-wrapper">
            <div class="header">Login</div>
            <div class="form-wrapper">
                <input type="text" v-model="username" placeholder="username" class="input-item">
                <input type="password" v-model="password" placeholder="password" class="input-item">
                <!-- 将 <div> 元素改为 <button> 元素 -->
                <button class="btn" @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginPage",
        data() {
            return {
                username: "",
                password: ""
            };
        },
        methods: {
            login() {
                // 假设输入的用户名和密码为 admin 和 123456
                if (this.username === "admin" && this.password === "123456") {
                    console.log("Login successful");
                    // 登录成功，重定向到首页
                    this.$router.push("/home");
                } else {
                    console.log("Login failed");
                    // 登录失败，可以在这里添加一些提示或者其他处理逻辑
                }
            }
        }
    };
</script>

<style scoped>
    html {
        height: 100%;
    }
    body {
        height: 100%;
    }
    .container {
        /* margin-top: 5%; */
        height: 980px;
        width: 100%;
        background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
    }
    .login-wrapper {
        background-color: #fff;
        width: 358px;
        height: 588px;
        border-radius: 15px;
        padding: 0 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .header {
        font-size: 38px;
        font-weight: bold;
        text-align: center;
        line-height: 200px;
    }
    .input-item {
        display: block;
        width: 100%;
        margin-bottom: 20px;
        border: 0;
        padding: 10px;
        border-bottom: 1px solid rgb(128, 125, 125);
        font-size: 15px;
        outline: none;
    }
    .input-item:placeholder {
        text-transform: uppercase;
    }
    .btn {
        text-align: center;
        padding: 10px;
        margin: 0 auto;
        width: 100%;
        margin-top: 40px;
        background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
        color: #fff;
    }
    .msg {
        text-align: center;
        line-height: 88px;
    }
    a {
        text-decoration-line: none;
        color: #abc1ee;
    }
</style>
