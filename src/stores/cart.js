import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    total: 0
  }),
  
  getters: {
    cartItems: (state) => state.items,
    cartTotal: (state) => state.total,
    itemCount: (state) => state.items.length
  },
  
  actions: {
    addItem(item) {
      this.items.push(item)
      this.updateTotal()
    },
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId)
      this.updateTotal()
    },
    updateTotal() {
      this.total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
  }
}) 