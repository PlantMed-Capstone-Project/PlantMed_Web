import Client from 'rest/baseClient'

const http = new Client('https://neutral-weevil-formerly.ngrok-free.app/api/v1/')

export const login = async (payload) => {
    return http.post('auth/login', payload)
}

export const register = async (payload) => {
    return http.post('auth/register', payload)
}

export const verifyEmail = async (payload) => {
    return http.post('auth/verify', payload)
}

export const refreshToken = async (payload) => {
    return http.put('auth/refresh', payload)
}
