import httpInstance from "@/utils/http.ts";

export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}