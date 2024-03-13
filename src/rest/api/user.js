import Client from 'rest/baseClient'

const http = new Client()

export const updateInfo = async (payload) => {
    return http.put('users/updateInfo', payload)
}
