import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "@/router";
import '@/styles/common.scss'
import {imgLazy} from '@/directives/img-lazy.ts'
const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia();

// 使用 Pinia
app.use(pinia);

// 使用路由
app.use(router);

// 使用自定义图片懒加载指令
app.use(imgLazy)
app.mount('#app');
