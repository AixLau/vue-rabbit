import httpInstance from "@/utils/http.ts";

export function getTopCategoryAPI(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}