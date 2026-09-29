import api from './api.js'

const BASE_PATH = '/documents'

export const getDocuments = () => api.get(BASE_PATH)

export const getDocumentById = (id) => api.get(`${BASE_PATH}/${encodeURIComponent(id)}`)

export const createDocument = (data) => api.post(BASE_PATH, data)

export const updateDocument = (id, data) => api.put(`${BASE_PATH}/${encodeURIComponent(id)}`, data)

export const deleteDocument = (id) => api.delete(`${BASE_PATH}/${encodeURIComponent(id)}`)
