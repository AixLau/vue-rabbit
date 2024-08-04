export const useUserStore = defineStore('user', () => {
    const userInfo = ref([])
    const cartStore = useCartStore()
    const getUserInfo = async ({account, password}) => {
        const res = await loginAPI({account, password})
        userInfo.value = res.result
        await cartStore.memberCart(cartStore.cartList.map((item) => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
    }

    const clearUserInfo = () => {
        userInfo.value = []
        cartStore.clearCart()
    }
    return {userInfo, getUserInfo, clearUserInfo}
}, {persist: true})