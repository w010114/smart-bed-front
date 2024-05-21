<template>
    <div class="back-button-container">
        <BackButton />
    </div>
    <div id="heart-rate-warn">
        <!-- 导航栏 -->
        <div
                class="sidebar"
                :class="{ collapsed: isCollapsed }"
        >
            <h2>导航栏</h2>
            <ul>

                <li><a href="#threshold-settings">用药提醒设置</a></li>
                <li><a href="#feature2">功能2（预留）</a></li>
                <li><a href="#feature3">功能3（预留）</a></li>
                <!-- 添加更多功能链接 -->
            </ul>
            <!-- 添加按钮 -->
            <button @click="toggleCollapse">{{ isCollapsed ? '展开' : '收缩' }}</button>
        </div>
        <!-- 内容区域 -->
        <div class="content">
            <h1>用药提醒</h1>
            <!-- 心率阈值设置 -->
            <div>
                <label for="hour-input">设置提醒小时:</label>
                <input type="number" id="hour-input" min="0" max="23" v-model="remindTime.hour" @input="updateReminder" />

                <label for="minute-input" style="margin-left: 10px;">设置提醒分钟:</label>
                <input type="number" id="minute-input" min="0" max="59" v-model="remindTime.minute" @input="updateReminder" />

                <p>将在每天的{{ formattedRemindTime }}进行提醒,请按时按照医嘱吃药</p>
                <p v-if="isReminding" class="reminder">提醒：时间到了！</p>
                <h2>这里还有个添加至时间提醒的按钮</h2>
            </div>
            <!-- 功能2 -->
            <div id="feature2" class="section">
                <h2>药物提醒</h2>
                <p>xxx药：xx：xx时间应该服用</p>
                <p>xxx药：xx：xx时间应该服用</p>
                <p>xxx药：xx：xx时间应该服用</p>
            </div>
            <!-- 功能3 -->
            <div id="feature3" class="section">
                <h2>添加时间提醒</h2>
                <p>这里是功能3的预留内容。</p>
            </div>
            <!-- 添加更多功能内容 -->

            <!-- Add more content to make the page scrollable -->
            <div class="extra-content">
                <p>这里是一些额外的内容，用于使页面滚动。</p>
                <p>更多内容...</p>
                <p>更多内容...</p>
                <!-- 重复添加更多内容 -->
            </div>
        </div>
    </div>
</template>

<script>
    import BackButton from '../BackButton.vue';
    export default {
        name: 'MedicationReminderDetail',
        components:{
            BackButton
        },
        data() {
            return {
                remindTime: {
                    hour: '', // 提醒的小时
                    minute: '', // 提醒的分钟
                },
                isReminding: false,
                reminderInterval: null,
            };
        },
        computed: {
            formattedRemindTime() {
                return `${this.remindTime.hour}:${this.remindTime.minute.toString().padStart(2, '0')}`;
            },
        },
        mounted() {
            this.startReminderCheck();
        },
        beforeUnmount() {
            // 在组件销毁前清除定时器
            clearInterval(this.reminderInterval);
        },
        methods: {
            startReminderCheck() {
                this.reminderInterval = setInterval(() => {
                    const now = new Date();
                    const nowHours = now.getHours();
                    const nowMinutes = now.getMinutes();

                    if (
                        nowHours === this.remindTime.hour &&
                        nowMinutes === this.remindTime.minute
                    ) {
                        this.isReminding = true;
                        // 可以在这里添加其他提醒逻辑，如弹出框、声音等
                        // ...
                        alert('提醒：时间到了！');
                        // 假设提醒只会持续一段时间，然后关闭
                        setTimeout(() => {
                            this.isReminding = false;
                        }, 5000); // 5秒后关闭提醒
                    }
                }, 1000 * 60); // 每分钟检查一次
            },
            updateReminder() {
                // 清除之前的定时器（如果需要的话）
                // 在这个例子中，我们不需要在每次输入时都清除，因为定时器每分钟都会检查一次
                // 但如果你有更复杂的逻辑，可能需要在这里处理
            },
        }
    };

</script>

<style scoped>
    #heart-rate-warn {
        display: flex;
    }

    .back-button-container {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    /* 导航栏样式 */
    .sidebar {
        width: 200px;
        background-color: #f3f3f3;
        padding: 20px;
    }

    .sidebar h2 {
        text-align: center;
    }

    .sidebar ul {
        list-style-type: none;
        padding: 0;
    }

    .sidebar ul li {
        margin: 20px 0;
    }

    .sidebar ul li a {
        text-decoration: none;
        color: #2c3e50;
    }

    /* 按钮样式 */
    .sidebar button {
        width: 100%;
        padding: 10px;
        margin-top: 20px;
        background-color: #eaeaea;
        border: none;
        cursor: pointer;
    }

    /* 收缩导航栏时的样式 */
    .sidebar.collapsed {
        width: 0;
    }

    /* 内容区域样式 */
    .content {
        flex-grow: 1;
        padding: 20px;
    }

    .threshold-settings {
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        margin-bottom: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .input-group {
        margin-bottom: 10px;
    }

    .input-group label {
        margin-right: 10px;
    }

    .input-group input {
        width: 100px;
    }

    .section {
        margin-bottom: 40px;
    }

    .extra-content {
        padding: 20px;
    }
</style>
