import { createRouter, createWebHistory } from 'vue-router';
import MainTaskManagement from '@/views/MainTaskManagement.vue';

const routes = [
    {
        path: '/tasks',
        name: 'TaskManagement',
        component: MainTaskManagement,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
