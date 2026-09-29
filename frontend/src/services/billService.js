import api from './api.js'

const BASE_PATH = '/bills'

export const getBills = () => api.get(BASE_PATH)

export const getBillById = (id) => api.get(`${BASE_PATH}/${encodeURIComponent(id)}`)

export const createBill = (data) => api.post(BASE_PATH, data)

export const updateBill = (id, data) => api.put(`${BASE_PATH}/${encodeURIComponent(id)}`, data)

export const deleteBill = (id) => api.delete(`${BASE_PATH}/${encodeURIComponent(id)}`)
