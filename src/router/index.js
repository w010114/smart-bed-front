// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import HeartRateAlertDetail from '../components/Detail/HeartRateAlertDetail.vue';
import SleepQualityDetail from '../components/Detail/SleepQualityDetail.vue';
import ActivityMonitorDetail from '../components/Detail/ActivityMonitorDetail.vue';
import HealthAdviceDetail from '../components/Detail/HealthAdviceDetail.vue';
import HistoricalHeartRateDetail from '../components/Detail/HistoricalHeartRateDetail.vue';
import MedicationReminderDetail from '../components/Detail/MedicationReminderDetail.vue';
import BodyTemperatureDetail from '../components/Detail/BodyTemperatureDetail.vue';
import LoginPage from '../components/LoginPage.vue';
import BackButton from '../components/BackButton.vue'

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/Home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/historical-heart-rate-chart',
        name: 'HistoricalHeartRateDetail',
        component: HistoricalHeartRateDetail
    },
    {
        path: '/body-temperature-monitor',
        name: 'BodyTemperatureDetail',
        component: BodyTemperatureDetail
    },
    {
        path: '/health-advice',
        name: 'HealthAdviceDetail',
        component: HealthAdviceDetail
    },
    {
        path: '/activity-monitor-detail',
        name: 'ActivityMonitorDetail',
        component: ActivityMonitorDetail
    },
    {
        path: '/medication-reminder',
        name: 'MedicationReminderDetail',
        component: MedicationReminderDetail
    },
    {
        path: '/sleep-quality-detail',
        name: 'SleepQualityDetail',
        component: SleepQualityDetail
    },
    {
        path: '/heart-rate-warn',
        name: 'HeartRateAlertDetail',
        component: HeartRateAlertDetail
    },
    {
        path: '/BackButton',
        name: 'BackButton',
        component: BackButton
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
