export const getHeaders = (extra = {}) => ({
  'Content-Type': 'application/json',
  ...extra,
})

export const API_BASE = process.env.REACT_APP_API_URL
