import { PREDICT_URL } from 'constant'
import Client from 'rest/baseClient'

const http = new Client(PREDICT_URL)
const httpBackend = new Client()

export const predict = async (payload) => {
    return http.postForm('predict', payload)
}

export const predictHistory = async (payload) => {
    return httpBackend.post('history/save', payload)
}

export const getHistory = async () => {
    return httpBackend.get('history/getAll')
}
/**
 * {image: file}
 */
