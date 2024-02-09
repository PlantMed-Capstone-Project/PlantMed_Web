import { LOCAL_URL } from 'constants'
import Client from 'rest/baseClient'

const http = new Client(LOCAL_URL)

export const login = async (payload) => {
    return http.post('auth/login', payload)
}

export const register = async (payload) => {
    return http.post('auth/register', payload)
}

export const verifyEmail = async (payload) => {
    return http.post('auth/verify', payload)
}
