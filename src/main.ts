import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "@/router";
import '@/styles/common.scss'
import {lazyPlugin} from '@/directives'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// 使用 Pinia
app.use(pinia);

// 使用路由
app.use(router);

// 使用自定义图片懒加载指令
app.use(lazyPlugin)
app.mount('#app');
