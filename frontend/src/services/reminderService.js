import api from './api.js'

const BASE_PATH = '/reminders'

export const getReminders = () => api.get(BASE_PATH)

export const getReminderById = (id) => api.get(`${BASE_PATH}/${encodeURIComponent(id)}`)

export const createReminder = (data) => api.post(BASE_PATH, data)

export const updateReminder = (id, data) => api.put(`${BASE_PATH}/${encodeURIComponent(id)}`, data)

export const deleteReminder = (id) => api.delete(`${BASE_PATH}/${encodeURIComponent(id)}`)
