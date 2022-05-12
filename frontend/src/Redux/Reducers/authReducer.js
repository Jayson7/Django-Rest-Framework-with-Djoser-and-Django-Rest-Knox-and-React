const initialState = {
    isAuthenticated: false,
    username: 'anonymous',
    password: '',
    token: '',
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case 'STORE_USER':
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username,
                password: action.payload.password,
                token: action.payload.token,
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                username: 'anonymous',
                password: '',
                token: '',
            }
        default:
            return state
    }
}