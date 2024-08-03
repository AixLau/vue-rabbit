// axios 基本封装

import {ElMessage} from "element-plus";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);
// 响应拦截器
httpInstance.interceptors.response.use(
    response => response.data,
    error => {
        ElMessage({type: 'warning', message: error.response?.data?.message || '请求失败'});
        return Promise.reject(error);  // 确保在发生错误时抛出错误
    }
);

export default httpInstance