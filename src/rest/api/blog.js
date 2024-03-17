import Client from 'rest/baseClient'

const http = new Client()

export const PostBlog = async (payload) => {
    return http.post('blogs/create', payload)
}

export const approvalBlog = async (id) => {
    return http.patch('blogs/accept', id)
}

export const rejectBlog = async (id) => {
    return http.patch('blogs/reject', id)
}

export const getApproval = async () => {
    return http.get('blogs/pending')
}

export const getActiveBlog = async () => {
    return http.get('blogs')
}

export const getActiveByUser = async () => {
    return http.get('blogs/user')
}

export const getPendingByUser = async () => {
    return http.get('blogs/user/pending')
}

/**
 * payload: {id: input.id}
 * approvalBlog(input.id)
 */
