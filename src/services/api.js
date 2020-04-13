import instance from 'axios'
import { API_BASE, getHeaders } from './helpers'

const api = instance.create({ baseURL: API_BASE })
api.interceptors.request.use(config => {
  config.headers = getHeaders()
  return config
})

export const API = {
  post: (endpoint, data) => api.post(endpoint, data),
  put: (endpoint, data) => api.put(endpoint, data),
  get: endpoint => api.get(endpoint),
  delete: endpoint => api.get(endpoint),
}
