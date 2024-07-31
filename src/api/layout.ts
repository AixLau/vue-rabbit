import httpInstance from "@/utils/http.ts";

export function getCategoryAPI(){
    return httpInstance({
        url: '/home/category/head'
    })
}