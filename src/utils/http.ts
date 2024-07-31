// axios 基本封装

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(config =>  config,
        e => Promise.reject(e))

// 响应拦截器
httpInstance.interceptors.response.use(res => res.data,
        error =>  Promise.reject(error))

export default httpInstance