import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {path: '', component: () => import('@/views/home/index.vue'),},
            {path: 'category/:id', component: () => import('@/views/category/index.vue')},
            {path: 'category/sub/:id', component: () => import('@/views/sub-category/index.vue')},
            {path: 'detail/:id', component: () => import('@/views/detail/index.vue')},
            {path: 'cartlist', component: () => import('@/views/cart/index.vue'),},
            {path: 'checkout', component: () => import('@/views/checkout/index.vue')},
            {path: 'pay', component: () => import('@/views/pay/index.vue')},
            {path: 'paycallback', component: () => import('@/views/pay/PayBack.vue')},
            {
                path: '/member',
                component: () => import('@/views/member/index.vue'),
                children: [
                    {path: '', component: () => import('@/views/member/components/UserInfo.vue')},
                    {path: 'order', component: () => import('@/views/member/components/UserOrder.vue')}
                ]
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },


];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
});

export default router;
