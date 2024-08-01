import httpInstance from "@/utils/http.ts";

export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

export function getNewProductAPI() {
    return httpInstance({
        url: '/home/new'
    })
}

export const getHotAPI = () => {
    return httpInstance('home/hot')
}

export const getGoodsAPI = () => {
    return httpInstance('/home/goods')
}