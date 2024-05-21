<template>
    <div class="back-button-container">
        <BackButton />
    </div>
    <div class="health-advice-detail">
        <aside class="sidebar">
            <div class="nav-container">
                <h3>导航</h3>
                <ul>
                    <li @click="scrollToSection('heart-rate')">了解心率对健康的影响</li>
                    <li @click="scrollToSection('diet-advice')">健康饮食建议</li>
                    <li @click="scrollToSection('life-tips')">生活小Tips</li>
                </ul>
            </div>
        </aside>
        <main class="content">
            <section id="heart-rate" class="section heart-rate">
                <h2>了解心率对健康的影响</h2>
                <div class="video-container">
                    <video controls class="video">
                        <source src="@/images/115.mp4" type="video/mp4">
                        您的浏览器不支持 HTML5 视频标签。
                    </video>
                </div>
            </section>

            <section id="diet-advice" class="section diet-advice">
                <h2>健康饮食建议</h2>
                <div class="photo-container">
                    <div class="photo-wrapper">
                        <div class="photo-box"><img src="@/images/145.png" alt="照片1"></div>
                        <div class="photo-box"><img src="@/images/146.png" alt="照片2"></div>
                        <div class="photo-box"><img src="@/images/1466.png" alt="照片3"></div>
                    </div>
                </div>
            </section>

            <section id="life-tips" class="section life-tips">
                <h2>生活小Tips</h2>
                <p>保持良好的生活习惯可以有效提高生活质量...</p>
                <!-- 可以添加更多内容和相关信息 -->
            </section>
        </main>
    </div>
</template>

<script>
    import BackButton from '../BackButton.vue';
    export default {
        name: 'HealthAdviceDetail',
        components: {
            BackButton
        },
        methods: {
            scrollToSection(sectionId) {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
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

    .health-advice-detail {
        display: flex;
        background-color: #e0f1f1; /* 浅蓝色背景 */
    }

    .sidebar {
        width: 200px;
        padding: 20px;
        background-color: #f8f9fa;
        border-right: 1px solid #dee2e6;
    }

    .nav-container {
        padding: 10px;
    }

    .nav-container h3 {
        text-align: center;
        margin-bottom: 20px;
    }

    .nav-container ul {
        list-style: none;
        padding: 0;
    }

    .nav-container ul li {
        color: #888; /* 灰色 */
        cursor: pointer;
        margin-bottom: 15px; /* 调整间距 */
    }

    .nav-container ul li:hover {
        text-decoration: underline;
    }

    .content {
        flex: 1;
        padding: 20px;
    }

    .section {
        margin-bottom: 30px; /* 调整分隔间距 */
    }

    .section h2 {
        margin-bottom: 15px; /* 调整标题间距 */
        color: #2c3e50;
    }

    .section p {
        line-height: 1.6;
        color: #34495e;
    }

    .video-container {
        border: 2px solid #ccc; /* 调整视频框框样式 */
        padding: 5px; /* 调整内边距 */
        margin-bottom: 10px; /* 调整视频框框间距 */
        width: 80%; /* 调整宽度 */
        margin: 0 auto; /* 水平居中 */
    }

    .video {
        width: 100%;
        display: block;
    }

    .photo-container {
        display: flex;
        justify-content: center; /* 水平居中 */
    }

    .photo-wrapper {
        display: flex;
    }

    .photo-box {
        margin: 0 10px; /* 调整图片间距 */
    }

    .photo-box img {
        max-width: 100%;
        max-height: 100%;
    }

    .photo-wrapper img {
        border: 2px solid #ccc; /* 框框样式 */
        padding: 5px; /* 内边距 */
    }
</style>
