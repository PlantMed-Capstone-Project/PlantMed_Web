import Client from 'rest/baseClient'

const http = new Client()

export const predictHistory = async (payload) => {
  return http.post('history/save', payload)
}

export const getHistory = async () => {
  return http.get('history/getAll')
}