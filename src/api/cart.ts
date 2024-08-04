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

export const delCartAPI = (ids) => {
    return httpInstance({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

export const memberCartAPI = (data) => {
    return httpInstance({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })
}