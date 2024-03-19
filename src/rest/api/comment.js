import Client from 'rest/baseClient'

const http = new Client()

export const getCommentByBlog = async (id) => {
    return http.get(`comments/${id}`)
}

export const createComment = async (id, payload) => {
    return http.post(`comments/postComment/${id}`, payload)
}

export const replyComment = async (payload) => {
    return http.post('comments/reply', payload)
}

export const deleteComment = async (id) => {
    return http.patch(`comments/comment/${id}`)
}

export const deleteReplyComment = async (id) => {
    return http.patch(`comments/reply/${id}`)
}