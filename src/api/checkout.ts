import httpInstance from "@/utils/http.ts";

export const getCheckoutInfoAPI = () => {
    return httpInstance({
        url: '/member/order/pre'
    })
}