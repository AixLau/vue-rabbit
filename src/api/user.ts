import httpInstance from "@/utils/http.ts";

export const loginAPI = ({account, password}) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {account, password}
    })
}