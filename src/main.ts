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

// 定义全局指令
app.directive('img-lazy', {
    // el：指令绑定的那个元素
    // binding：绑定元素的表达式值
    mounted(el, binding) {
        const {stop} = useIntersectionObserver(
            el, ([{isIntersecting}]) => {
                if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value
                    stop()
                }
            },
        )
    }
})