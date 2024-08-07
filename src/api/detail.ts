import httpInstance from "@/utils/http.ts";

export function getDetail(id) {
    return httpInstance({
        url: '/goods',
        params: {id}
    })
}

export const getHotGoodsAPI = ({id, type, limit = 3}) => {
    return httpInstance({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}