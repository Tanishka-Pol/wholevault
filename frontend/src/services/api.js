// Central HTTP client for the WholeVault backend. Feature services call these
// helpers instead of using fetch directly, so request/response handling lives
// in one place.

const DEFAULT_API_URL = 'http://localhost:5000/api'

// Strip trailing slashes so paths can always be written as "/resource".
export const API_BASE_URL = (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/+$/, '')

// Thrown for any failed request. `status` is the HTTP status code (0 when the
// server could not be reached) and `data` is the parsed response body, if any.
export class ApiError extends Error {
  constructor(message, { status = 0, data = null } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

async function parseBody(response) {
  if (response.status === 204) return null

  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return response.json()
  }

  const text = await response.text()
  return text || null
}

async function request(path, { method = 'GET', body, headers, ...options } = {}) {
  const init = {
    ...options,
    method,
    headers: { Accept: 'application/json', ...headers },
  }

  if (body !== undefined) {
    // FormData (e.g. future file uploads) sets its own multipart Content-Type.
    if (body instanceof FormData) {
      init.body = body
    } else {
      init.body = JSON.stringify(body)
      init.headers['Content-Type'] = 'application/json'
    }
  }

  let response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, init)
  } catch (error) {
    // Let callers tell a deliberate cancellation apart from a network failure.
    if (error.name === 'AbortError') throw error
    throw new ApiError(`Unable to reach the server at ${API_BASE_URL}.`, { data: error })
  }

  const data = await parseBody(response)

  if (!response.ok) {
    const serverMessage = data && typeof data === 'object' ? data.message || data.error : null
    const message =
      serverMessage || `Request failed: ${method} ${path} returned ${response.status} ${response.statusText}`.trim()
    throw new ApiError(message, { status: response.status, data })
  }

  return data
}

// `options` is passed through to fetch (e.g. `signal` for cancellation, or
// extra `headers`).
export const api = {
  get: (path, options) => request(path, { ...options, method: 'GET' }),
  post: (path, body, options) => request(path, { ...options, method: 'POST', body }),
  put: (path, body, options) => request(path, { ...options, method: 'PUT', body }),
  patch: (path, body, options) => request(path, { ...options, method: 'PATCH', body }),
  delete: (path, options) => request(path, { ...options, method: 'DELETE' }),
}

export default api
