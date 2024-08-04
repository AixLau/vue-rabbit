export const useCartStore = defineStore('cart', () => {
    const cartList = ref([]);
    const addCart = (goods) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) {
            item.count += goods.count;
        } else {
            goods.selected = false
            cartList.value.push(goods);
        }
    };

    const delCart = (skuId) => {
        cartList.value = cartList.value.filter((item) => item.skuId != skuId)
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
        addCart,
        delCart
    };
}, {persist: true});