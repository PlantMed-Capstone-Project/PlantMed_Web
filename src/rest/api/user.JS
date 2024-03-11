import Client from 'rest/baseClient'

const http = new Client('https://neutral-weevil-formerly.ngrok-free.app/api/v1/')

export const updateInfo = async (payload) => {
    return http.put('users/updateInfo', payload)
}

