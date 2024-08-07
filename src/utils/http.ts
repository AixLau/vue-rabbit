// axios 基本封装

import {ElMessage} from "element-plus";
import router from "@/router";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 50000
})

// 请求拦截器
httpInstance.interceptors.request.use(
    config => {
        const userStore = useUserStore()
        const token = userStore.userInfo.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
);
// 响应拦截器
httpInstance.interceptors.response.use(
    response => response.data,
    error => {
        const userStore = useUserStore()
        if (error.response.status === 401) {
            userStore.clearUserInfo()
            router.push('/')
        }
        ElMessage({type: 'warning', message: error.response?.data?.message || '请求失败'});
        return Promise.reject(error);  // 确保在发生错误时抛出错误
    }
);

export default httpInstance