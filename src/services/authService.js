import http from './http'

export const authService = {
  async login(credentials) {
    const response = await http.post('/auth/login', credentials)
    return response.data
  },

  async register(userData) {
    const response = await http.post('/auth/register', userData)
    return response.data
  },

  async getCurrentUser() {
    const response = await http.get('/auth/me')
    return response.data
  },

  async logout() {
    const response = await http.post('/auth/logout')
    return response.data
  }
} 