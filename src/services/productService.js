import http from './http'

export const productService = {
  async getProducts(params) {
    const response = await http.get('/products', { params })
    return response.data
  },

  async getProductById(id) {
    const response = await http.get(`/products/${id}`)
    return response.data
  },

  async createProduct(productData) {
    const response = await http.post('/products', productData)
    return response.data
  },

  async updateProduct(id, productData) {
    const response = await http.put(`/products/${id}`, productData)
    return response.data
  },

  async deleteProduct(id) {
    const response = await http.delete(`/products/${id}`)
    return response.data
  }
} 