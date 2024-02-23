import Client from 'rest/baseClient'

const http = new Client()

export const allPlant = async () => {
    return http.get('plants')
}
