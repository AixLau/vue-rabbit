export const useCartStore = defineStore('cart', () => {
    const cartList = ref([]);
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    const getCart = async () => {
        const res = await getCartAPI()
        cartList.value = res.result
    }

    const addCart = async (goods) => {
        const {skuId, count} = goods;
        if (isLogin.value) {
            await insertCartAPI({skuId, count});
            await getCart()
        } else {
            const item = cartList.value.find((item) => item.skuId === goods.skuId);
            if (item) {
                item.count += goods.count;
            } else {
                goods.picture = goods.mainPictures[0]
                goods.selected = false;
                cartList.value.push(goods);
            }
        }
    };

    const clearCart = () => {
        cartList.value = []
    }

    const memberCart = async (data) => {
        await memberCartAPI(data)
        await getCart()
    }

    const delCart = async (skuId) => {
        if (isLogin.value) {
            await delCartAPI([skuId])
            await getCart()
        } else {
            cartList.value = cartList.value.filter((item) => item.skuId != skuId)
        }
    }

    const selectAll = computed({
        get() {
            return cartList.value.length > 0 && cartList.value.every((item) => item.selected)
        },
        set(value) {
            return cartList.value.forEach((item) => item.selected = value)
        }
    })

    // 计算选中商品的总数
    const selectedQuantity = computed(() => {
        return cartList.value.reduce((total, item) => item.selected ? total + item.count : total, 0);
    });

    // 计算选中商品的总价
    const selectedPrice = computed(() => {
        return cartList.value.reduce((total, item) => item.selected ? total + item.count * item.price : total, 0);
    });

    const totalQuantity = computed(() => {
        return cartList.value.reduce((total, item) => total + item.count, 0)
    })

    const totalPrice = computed(() => {
        return cartList.value.reduce((total, item) => total + item.count * item.price, 0)
    })

    return {
        cartList,
        selectAll,
        selectedQuantity,
        selectedPrice,
        totalQuantity,
        totalPrice,
        getCart,
        addCart,
        clearCart,
        memberCart,
        delCart
    };
}, {persist: true});
