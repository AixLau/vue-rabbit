import {getCategoryAPI} from "@/api/layout.ts";

export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([]);

    const getCategory = async () => {
        const res = await getCategoryAPI();
        categoryList.value = res.result;
    };

    return {
        categoryList,
        getCategory,
    };
});
