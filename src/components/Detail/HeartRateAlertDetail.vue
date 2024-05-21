<template>

    <div id="heart-rate-warn">
        <video id="video-background" autoplay loop muted>
            <source src="@/images/Heart.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <!-- 蓝色横栏 -->
        <div class="blue-bar">
            <h1 class="blue-bar-title">心率异常预警</h1>
            <div class="back-button-container">
                <BackButton />
            </div>
        </div>

        <!-- 导航栏 -->
        <div
                class="sidebar"
                :class="{ collapsed: isCollapsed }"
        >
            <h2 class="sidebar-title">导航栏</h2>
            <ul>
                <li><a href="#threshold-settings">心率阈值设置</a></li>
                <li><a href="#feature2">心率数据分析</a></li>
                <li><a href="#feature3">心率日志</a></li>
                <!-- 添加更多功能链接 -->
            </ul>
            <!-- 添加收缩按钮 -->
            <button class="collapse-button" @click="toggleCollapse">{{ isCollapsed ? '展开' : '收缩' }}</button>
        </div>
        <!-- 内容区域 -->
        <div class="content">
            <!-- 心率阈值设置 -->
            <div id="threshold-settings" class="section">
                <div class="threshold-settings">
                    <h2>心率阈值设置</h2>
                    <div class="input-group">
                        <label for="upper-limit">心率上限：</label>
                        <input v-model="upperLimit" type="number" id="upper-limit" />
                    </div>
                    <div class="input-group">
                        <label for="lower-limit">心率下限：</label>
                        <input v-model="lowerLimit" type="number" id="lower-limit" />
                    </div>
                </div>
            </div>
            <!-- 心率数据分析 -->
            <div id="feature2" class="section">
                <div class="feature-section">
                    <h2>心率数据分析</h2>
                    <p>在这里进行对心率数据的连续性分析，检测异常行为。</p>
                    <!-- 可添加心率数据分析的相关内容 -->
                    <canvas id="line-chart"></canvas>
                </div>
            </div>

            <!-- 心率日志 -->
            <div id="feature3" class="section">
                <div class="feature-section">
                    <h2>心率日志</h2>
                    <p>这里记录心率的警报记录表。</p>
                </div>
            </div>
            <!-- 添加更多功能内容 -->
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js/auto';
    import BackButton from '../BackButton.vue';
    export default {
        name: 'HeartRateWarn',
        components:{
            BackButton
        },
        mounted() {
            this.generateChart();
        },
        data() {
            return {
                upperLimit: 120,
                lowerLimit: 60,
                isCollapsed: false
            };
        },
        methods: {
            toggleCollapse() {
                this.isCollapsed = !this.isCollapsed;
            },
            generateChart() {
                const labels = [];
                const data = [];
                for (let i = 0; i < 10; i++) {
                    labels.push(`Event ${i + 1}`);
                    data.push(Math.floor(Math.random() * 100)); // 生成随机心率数据，范围在 0 到 100 之间
                }

                const ctx = document.getElementById('line-chart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Heart Rate',
                            data: data,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            fill: false
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Event'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Heart Rate'
                                }
                            }
                        }
                    }
                });
            }
        }
    };
</script>

<style scoped>

    #video-background {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: -1; /* 确保视频背景在内容之后显示 */
    }

    .back-button-container {
        position: absolute;
        top: 10px;
        right: 20px;
    }
    /* 使页面内容与浅蓝色横栏不重叠 */
    body {
        margin-top: 50px; /* 将页面内容下移以避免与浅蓝色横栏重叠 */
    }

    /* 浅蓝色横栏样式 */
    .blue-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: lightpink; /* 浅蓝色 */
        z-index: 1000; /* 确保浅蓝色横栏在最上层 */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .blue-bar .blue-bar-title {
        margin: 0;
        font-size: 24px;
        color: black/* 粉色 */
    }
    #heart-rate-warn {
        display: flex;
    }

    /* 导航栏样式 */
    .sidebar {
        width: 200px;
        background-color: antiquewhite ;/* 设置背景颜色为灰色 */
        color: white; /* 设置文本颜色为白色以提高可读性 */
        padding: 20px;
        position: fixed; /* 固定位置 */
        top: 50px; /* 距离页面顶部50px，与浅蓝色横栏高度一致 */
        left: 0;
        height: calc(100% - 50px); /* 导航栏高度减去浅蓝色横栏的高度 */
        overflow-y: auto; /* 当内容过多时，添加滚动条 */
        z-index: 999; /* 确保导航栏在浅蓝色横栏之下，但在内容上面 */
    }

    .sidebar h2 {
        text-align: center;
        color: white; /* 设置标题颜色为白色 */
    }

    .sidebar ul {
        list-style-type: none;
        padding: 0;
        color: white; /* 设置列表项颜色为白色 */
        display: flex;
        flex-direction: column; /* 垂直排列 */
        gap: 10px; /* 每个功能之间的间距 */
    }

    .sidebar ul li {
        margin: 0; /* 取消原有的 margin */
    }

    .sidebar ul li a {
        text-decoration: none;
        color: white; /* 设置链接颜色为白色 */
        padding: 10px;
        display: block;
        background-color: #505050; /* 设置每个功能项的背景颜色为较深的灰色 */
        border-radius: 5px;
        text-align: center;
    }

    .sidebar ul li a:hover {
        background-color: #666666; /* 设置悬停效果 */
    }

    /* 收缩按钮样式 */
    .sidebar button.collapse-button {
        width: 100%;
        padding: 10px;
        background-color: #eaeaea;
        border: none;
        cursor: pointer;
    }

    /* 收缩导航栏时隐藏链接列表 */
    .sidebar.collapsed ul {
        display: none;
    }

    /* 收缩按钮样式 */
    .sidebar.collapsed button.collapse-button {
        display: block;
    }

    /* 收缩导航栏时隐藏标题 */
    .sidebar.collapsed .sidebar-title {
        display: none;
    }

    /* 收缩导航栏时的样式 */
    .sidebar.collapsed {
        width: 50px;
    }

    /* 内容区域样式 */
    .content {
        flex-grow: 1;
        padding: 20px;
        margin-left: 220px; /* 确保内容不被固定的导航栏遮挡，留出导航栏宽度和一点间距 */
    }
    /* 区域块样式 */
    .section {
        margin-bottom: 20px; /* 为每个区域块添加一定的底部间距 */
    }

    /* 功能区域样式 */
    .feature-section {
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
</style>
