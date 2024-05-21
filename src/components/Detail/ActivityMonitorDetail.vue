<template>
    <div class="activity-monitor-detail">
        <div class="back-button-container">
            <BackButton />
        </div>
        <div class="left-content">
            <!-- 导航栏 -->
            <div class="module-link" @click="scrollTo('hrv-measurement')">HRV测量</div>
            <div class="module-link" @click="scrollTo('hrv-disease')">HRV与疾病</div>
            <div class="module-link" @click="scrollTo('scientific-basis')">科学依据</div>
        </div>

        <div class="main-content">
            <!-- 内容 -->
            <div id="hrv-measurement" class="content-section">
                <h2>HRV测量</h2>
                <ChartComponent /> <!-- 这里嵌入了ChartComponent -->
            </div>
            <div id="hrv-disease" class="content-section">
                <h2>HRV与疾病</h2>
                <p>HRV可以定量检测心脏自主神经活性，具有快速、无创和简便等优点，可以成为评价冠心病患者冠状动脉病变范围及其预后的一种新手段。</p>
                <p>冠心病患者HRV均降低，降低程度与冠状动脉粥样硬化范围和程度密切相关，是冠状动脉粥样硬化的独立预测指标。</p>
                <p>高血压患者HRV降低与左心室肥厚、心功能不全、心脏事件的发生呈正相关，心肌肥厚越重，HRV减低越明显，室性心律失常发生的概率越高越严重！</p>
            </div>
            <div id="scientific-basis" class="content-section">
                <h2>科学依据</h2>
                <img src="@/images/250.png" alt="HRV的危害图片" class="section-image"> <!-- 将图片路径指向 images/250.png -->
            </div>
        </div>
    </div>
</template>

<script>
    import ChartComponent from './ChartComponent.vue';
    import BackButton from '../BackButton.vue';

    export default {
        name: "ActivityMonitorDetail",
        components: {
            ChartComponent,
            BackButton
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            scrollTo(sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };
</script>

<style scoped>
    .activity-monitor-detail {
        position: relative;
        background: url('@/images/350.png') no-repeat center center;
        background-size: cover;
    }

    .back-button-container {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .left-content {
        position: absolute;
        top: 50px;
        left: 20px;
    }

    .module-link {
        padding: 10px 20px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .main-content {
        margin-left: 250px;
    }
</style>
