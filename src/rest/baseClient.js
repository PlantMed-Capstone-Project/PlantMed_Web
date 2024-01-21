import axios from 'axios'
import { BASE_URL } from 'constants'
import { ACCESS_TOKEN } from 'constants'
import { objectToFormData } from 'utils'
import { readCookie } from 'utils/cookie'

export default class Client {
    constructor(server = BASE_URL) {
        this.baseUrl = 'https://content-foxhound-logically.ngrok-free.app/'
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        this.client.interceptors.request.use(async (config) => {
            let access_token = readCookie(ACCESS_TOKEN)

            config.headers.Authorization = `Bearer ${access_token}`
            return config
        })
    }

    async get(url, payload) {
        let res = {}
        try {
            res = await this.client.get(url, payload || {})
        } catch (e) {
            throw e
        }
        return res
    }

    async post(url, payload, config) {
        let res = {}
        try {
            res = await this.client.post(url, payload || {}, config)
        } catch (e) {
            throw e
        }
        return res
    }

    async put(url, payload) {
        let res = {}
        try {
            res = await this.client.put(url, payload || {})
        } catch (e) {
            throw e
        }
        return res
    }

    async delete(url, payload) {
        let res = {}
        try {
            res = await this.client.delete(url, payload || {})
        } catch (e) {
            throw e
        }
        return res
    }

    async patch(url, payload, config) {
        let res = {}
        try {
            res = await this.client.patch(url, payload || {}, config)
        } catch (e) {
            throw e
        }
        return res
    }

    async postForm(url, payload) {
        let res = {}
        const formData = objectToFormData(payload)
        try {
            res = await this.client.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        } catch (e) {
            throw e
        }
        return res
    }
}
