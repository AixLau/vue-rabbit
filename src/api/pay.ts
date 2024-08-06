import httpInstance from "@/utils/http.ts";

export const getOrderAPI = (id) => {
    return httpInstance({
        url: `/member/order/${id}`
    })
}