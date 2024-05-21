<!-- src/components/SleepQualityDetail.vue -->
<template>
    <div id="sleep-quality-detail">
        <div class="back-button-container">
            <BackButton />
        </div>
        <h1>睡眠质量分析</h1>
        <div class="content">
            <!-- 左侧：睡眠指标 -->
            <div class="left-side">
                <div class="metric">
                    <h2>总睡眠时长</h2>
                    <p>{{ sleepData.totalDuration }} 小时</p>
                </div>
                <div class="metric">
                    <h2>深睡眠比例</h2>
                    <p>{{ sleepData.deepSleepPercentage }}%</p>
                </div>
                <div class="metric">
                    <h2>心率警报</h2>
                    <ul>
                        <li v-for="alert in sleepData.heartRateAlerts" :key="alert">
                            {{ alert }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 中间：建议 -->
            <div class="middle">
                <h2>合理建议</h2>
                <p>根据过去七天的睡眠得分，以下是一些提高睡眠质量的建议：</p>
                <ul>
                    <li>调整您的睡眠时长，每晚至少7-8小时。</li>
                    <li>考虑补充维生素D和镁，以支持更好的睡眠。</li>
                    <li>保持一致的作息时间，每天同一时间上床和起床。</li>
                    <li>创建一个放松的睡前例行程序来帮助入睡。</li>
                </ul>
            </div>

            <!-- 右侧：睡眠质量得分表 -->
            <div class="right-side">
                <h2>过去七天睡眠质量得分</h2>
                <table>
                    <thead>
                    <tr>
                        <th>日期</th>
                        <th>睡眠质量得分</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="score in sleepData.pastWeekScores" :key="score.date">
                        <td>{{ score.date }}</td>
                        <td>{{ score.score }}</td>
                    </tr>
                    </tbody>
                </table>

                <h2>平均得分排名</h2>
                <table>
                    <thead>
                    <tr>
                        <th>用户</th>
                        <th>平均得分</th>
                        <th>排名</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user in rankedUsers" :key="user.id">
                        <td>{{ user.name }}</td>
                        <td>{{ user.averageScore.toFixed(2) }}</td>
                        <td>{{ user.rank }}</td>
                    </tr>
                    <!-- 新增内容显示当前用户的排名 -->
                    <tr>
                        <td colspan="2">您当前的得分排名</td>
                        <td>{{ 184274126 }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import BackButton from '../BackButton.vue';
    export default {
        name: 'SleepQualityDetail',
        components: {
            BackButton
        },
        data() {
            return {
                sleepData: {
                    totalDuration: 8, // 小时
                    deepSleepPercentage: 25, // %
                    heartRateAlerts: [
                        "00:30 - 检测到心率升高",
                        "03:15 - 检测到心率升高",
                        "05:45 - 检测到心率升高"
                    ],
                    pastWeekScores: [
                        { date: '2024-05-10', score: 85 },
                        { date: '2024-05-11', score: 80 },
                        { date: '2024-05-12', score: 78 },
                        { date: '2024-05-13', score: 82 },
                        { date: '2024-05-14', score: 90 },
                        { date: '2024-05-15', score: 88 },
                        { date: '2024-05-16', score: 84 }
                    ]
                },
                users: [
                    { id: 1, name: '用户1', scores: [85, 80, 78, 82, 90, 88, 84] },
                    { id: 2, name: '用户2', scores: [75, 80, 85, 88, 82, 79, 81] },
                    { id: 3, name: '用户3', scores: [80, 85, 90, 88, 84, 86, 87] }
                    // 更多用户数据...
                ]
            };
        },
        computed: {
            rankedUsers() {
                // 计算每个用户的平均得分
                this.users.forEach(user => {
                    const totalScore = user.scores.reduce((sum, score) => sum + score, 0);
                    user.averageScore = totalScore / user.scores.length;
                });

                // 根据平均得分进行排序
                const sortedUsers = [...this.users].sort((a, b) => b.averageScore - a.averageScore);

                // 添加排名
                sortedUsers.forEach((user, index) => {
                    user.rank = index + 1;
                });

                return sortedUsers;
            }
        }
    };
</script>

<style scoped>
    html, body, #app {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #sleep-quality-detail {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    h1 {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .back-button-container {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-grow: 1; /* 使 content 区域占满剩余空间 */
        position: relative;
        height: calc(100% - 100px); /* 计算剩余空间，假设 h1 高度约为 100px */
    }

    .left-side, .right-side {
        width: 20%;
        background-color: #f7f7f7;
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow-y: auto; /* 添加滚动条以防内容溢出 */
    }

    .left-side {
        height: 100%;
    }

    .right-side {
        height: 100%;
    }

    .middle {
        width: 55%;
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        overflow-y: auto; /* 添加滚动条以防内容溢出 */
    }

    .metric {
        margin: 20px 0;
    }

    .metric h2 {
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    .metric p, .metric ul {
        font-size: 1em;
        color: #34495e;
    }

    .metric ul {
        list-style-type: none;
        padding: 0;
    }

    .metric ul li {
        margin: 5px 0;
    }

    .middle h2, .right-side h2 {
        font-size: 1.5em;
        margin-bottom: 15px;
    }

    .middle ul {
        text-align: left;
    }

    .right-side table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
    }

    .right-side table th, .right-side table td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    .right-side table th {
        background-color: #f2f2f2;
        text-align: left;
    }
</style>
