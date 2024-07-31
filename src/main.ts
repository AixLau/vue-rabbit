import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "@/router";
import '@/styles/common.scss'
const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia();

// 使用 Pinia
app.use(pinia);

// 使用路由
app.use(router);

app.mount('#app');
