import api from './api.js'

const BASE_PATH = '/life-events'

export const getLifeEvents = () => api.get(BASE_PATH)

export const getLifeEventById = (id) => api.get(`${BASE_PATH}/${encodeURIComponent(id)}`)

export const createLifeEvent = (data) => api.post(BASE_PATH, data)

export const updateLifeEvent = (id, data) => api.put(`${BASE_PATH}/${encodeURIComponent(id)}`, data)

export const deleteLifeEvent = (id) => api.delete(`${BASE_PATH}/${encodeURIComponent(id)}`)
