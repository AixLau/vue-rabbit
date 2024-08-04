export const useCartStore = defineStore('cart', () => {
    const cartList = ref([]);
    const addCart = (goods) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) {
            item.count += goods.count;
        } else {
            cartList.value.push(goods);
        }
    };

    const delCart = (skuId) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        if (item.count > 1) {
            item.count--
        } else {
            cartList.value = cartList.value.filter((item) => item.skuId != skuId)
        }
    }

    const totalQuantity = computed(() => {
        return cartList.value.reduce((total, item) => total + item.count, 0)
    })

    const totalPrice = computed(() => {
        return cartList.value.reduce((total, item) => total + item.count * item.price, 0)
    })

    return {cartList, addCart, delCart, totalQuantity, totalPrice};
}, {persist: true});
