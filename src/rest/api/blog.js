import Client from 'rest/baseClient'

const http = new Client()

export const PostBlog = async (payload) => {
    return http.post('blogs/create', payload)
}

export const getActiveBlog = async () => {
    return http.get('blogs')
}

export const getByUser = async () => {
    return http.get('blogs/user')
}

export const getIdBlog = async (id) => {
    return http.get(`blogs/${id}`)
}