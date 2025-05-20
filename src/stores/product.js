import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),
  
  getters: {
    allProducts: (state) => state.products,
    isLoading: (state) => state.loading
  },
  
  actions: {
    setProducts(products) {
      this.products = products
    },
    setLoading(status) {
      this.loading = status
    },
    setError(error) {
      this.error = error
    }
  }
}) 