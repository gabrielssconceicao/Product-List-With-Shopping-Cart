import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
type CartItens = {
  name: string
  quantity: number
  price: number
  image: string
}
export const useCounterStore = defineStore('cart', () => {
  const cart = ref<CartItens[]>([])
})
