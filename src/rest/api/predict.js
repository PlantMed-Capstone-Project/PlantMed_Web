import { PREDICT_URL } from 'constants'
import Client from 'rest/baseClient'

const http = new Client(PREDICT_URL)

export const predict = (payload) => {
    return http.postForm('predict', payload)
}

export const test = (payload) => {
    return http.postForm('upload', payload)
}
