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