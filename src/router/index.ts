import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'), // 动态导入
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'), // 动态导入
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
