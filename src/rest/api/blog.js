import Client from 'rest/baseClient'

const http = new Client()

export const PostBlog = async (payload) => {
    return http.post('/blogs/create', payload)
}
