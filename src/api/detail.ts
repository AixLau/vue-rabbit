import httpInstance from "@/utils/http.ts";

export function getDetail(id) {
    return httpInstance({
        url: '/goods',
        params: {id}
    })
}