import httpInstance from "@/utils/http.ts";

export const loginAPI = ({account, password}) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {account, password}
    })
}

export const getLikeListAPI = ({limit = 4}) => {
    return httpInstance({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}

export const getUserOrder = (params) => {
    return httpInstance({
        url: '/member/order',
        method: 'GET',
        params
    })
}