export const imgLazy = {
    install(app) {
        app.directive('img-lazy', {
            // el：指令绑定的那个元素
            // binding：绑定元素的表达式值
            mounted(el, binding) {
                const {stop} = useIntersectionObserver(
                    el, ([{isIntersecting}]) => {
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}