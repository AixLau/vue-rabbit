export const useUserStore = defineStore('user', () => {
    const userInfo = ref([])
    const cartStore = useCartStore()
    const getUserInfo = async ({account, password}) => {
        const res = await loginAPI({account, password})
        userInfo.value = res.result;
    }

    const clearUserInfo = () => {
        userInfo.value = []
        cartStore.clearCart()
    }
    return {userInfo, getUserInfo, clearUserInfo}
}, {persist: true})