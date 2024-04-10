import { PREDICT_URL } from 'constant'
import Client from 'rest/baseClient'

const http = new Client(PREDICT_URL)

export const predict = async (payload) => {
    return http.postForm('predict', payload)
}
/**
 * {image: file}
 */
