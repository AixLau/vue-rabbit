import httpInstance from "@/utils/http.ts";

export const getCheckoutInfoAPI = () => {
    return httpInstance({
        url: '/member/order/pre'
    })
}

export const createOrderAPI = (data) => {
    return httpInstance({
        url: '/member/order',
        method: 'Post',
        data
    })
}