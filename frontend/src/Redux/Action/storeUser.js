export const storeUser = (username, password, token) => {
    return {
        type: 'STORE_USER',
        payload: {
            username,
            password,
            token,
        },
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}