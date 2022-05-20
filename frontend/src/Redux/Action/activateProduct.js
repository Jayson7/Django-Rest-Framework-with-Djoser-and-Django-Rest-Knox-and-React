export const storeProduct = (product) => ({
    type: 'STORE_PRODUCT',
    payload: {...product },
})

export const storeProductCategories = (category) => ({
    type: 'STORE_PRODUCT_CATEGORIES',
    payload: {
        category,
    },
})