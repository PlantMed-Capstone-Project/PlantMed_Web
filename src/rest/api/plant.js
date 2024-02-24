import Client from 'rest/baseClient'

const http = new Client()

export const getAll = async () => {
    return http.get('plants')
}

export const getById = async (id) => {
    return http.get('plants/:id', id)
}
