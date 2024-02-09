import Client from 'rest/baseClient'

const http = new Client()

export const login = async (payload) => {
    return http.post('auth/login', payload)
}

export const register = async (payload) => {
    return http.post('auth/register', payload)
}

export const verifyEmail = async (payload) => {
    return http.post('auth/verify', payload)
}
