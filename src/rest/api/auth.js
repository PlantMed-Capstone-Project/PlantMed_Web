import Client from 'rest/baseClient'

const http = new Client()

export const login = (payload) => {
    return http.post('auth/signin', payload)
}

export const register = (payload) => {
    return http.post('auth/signup', payload)
}

// ...etc
