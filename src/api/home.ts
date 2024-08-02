import httpInstance from "@/utils/http.ts";

export function getBannerAPI(params = {}) {
    const {distributionSite = '1'} = params
    return httpInstance({
        url: '/home/banner',
        params: {distributionSite}
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