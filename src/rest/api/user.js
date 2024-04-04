import Client from 'rest/baseClient'

const http = new Client()

export const updateInfo = async (payload) => {
    return http.put('users/updateInfo', payload)
}

export const updateAvatar = async (payload) => {
    return http.patch('users/updateImage', payload)
}

export const getAvatar = async () => {
    return http.get('users/getAvatar')
}

export const sendChat = async (payload) => {
    return http.post('users/sendContent', payload)
}
