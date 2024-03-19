import Client from 'rest/baseClient'

const http = new Client()

export const login = async (payload) => {
    return http.post('auth/login', payload)
}

export const register = async (payload) => {
    return http.post('auth/register', payload)
}

export const verifyEmail = async () => {
    return http.post('auth/verify')
}

export const refreshToken = async (payload) => {
    return http.put('auth/refresh', payload)
}

export const resetPassword = async (payload) => {
    return http.put('auth/resetPassword', payload)
}
