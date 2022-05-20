export default function productReducer(state = {}, action) {
    switch (action.type) {
        case 'STORE_PRODUCT':
            return {
                ...state,
                ...action.payload,
            }
        case 'STORE_PRODUCT_CATEGORIES':
            return {
                ...state,
                productCategories: action.payload.productCategories,
            }
        default:
            return state
    }
}