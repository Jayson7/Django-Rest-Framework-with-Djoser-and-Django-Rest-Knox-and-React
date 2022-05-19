export const storeProduct = (product) => {
    return {
        type: 'STORE_PRODUCT',
        payload: {
            ...product,
        },
    }
}