import Client from 'rest/baseClient'

const http = new Client()

export const getReport = async () => {
    return http.get('reports/category')
}

export const reportComment = async (payload) => {
    return http.post('reports/add/comment', payload)
}
