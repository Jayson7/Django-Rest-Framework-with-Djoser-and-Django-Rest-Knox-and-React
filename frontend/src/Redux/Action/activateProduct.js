export const storeProduct = (name_of_product, price, quantity) => ({
    type: 'STORE_PRODUCT',
    payload: {
        name_of_product,
        price,
        quantity,
    },
})

export const storeProductCategories = (category) => ({
    type: 'STORE_PRODUCT_CATEGORIES',
    payload: {
        category,
    },
})