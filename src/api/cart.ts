import httpInstance from "@/utils/http.ts";

export const insertCartAPI = ({skuId, count}) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

export const getCartAPI = () => {
    return httpInstance({
        url: '/member/cart'
    })
}