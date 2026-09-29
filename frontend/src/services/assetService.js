import api from './api.js'

const BASE_PATH = '/assets'

export const getAssets = () => api.get(BASE_PATH)

export const getAssetById = (id) => api.get(`${BASE_PATH}/${encodeURIComponent(id)}`)

export const createAsset = (data) => api.post(BASE_PATH, data)

export const updateAsset = (id, data) => api.put(`${BASE_PATH}/${encodeURIComponent(id)}`, data)

export const deleteAsset = (id) => api.delete(`${BASE_PATH}/${encodeURIComponent(id)}`)
