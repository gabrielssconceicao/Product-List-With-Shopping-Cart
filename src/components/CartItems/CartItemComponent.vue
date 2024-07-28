<script setup lang="ts">
import { type CartItem, useCartStore } from "@/stores/cart";
import { computed } from "vue";
type CartItemProps = {
  product: CartItem
}
const props = defineProps<CartItemProps>()
const cartStore = useCartStore()

const total = computed(() => {
  return (props.product.price * props.product.quantity).toFixed(2)
})
</script>

<template>
  <div class="flex flex-col font-red-hat-text space-y-2 border-b-2 border-slate-200 px-2 py-4">

    <p class="text-rose-900 font-semibold">{{ props.product.name }}</p>
    <div class="flex flex-row ">
      <div class="flex-1 flex flex-row items-center gap-5 ">
        <p class="text-red font-bold">x{{ props.product.quantity }}</p>
        <p class="text-gray-400 ">${{ props.product.price.toFixed(2) }}</p>
        <p class="text-gray-500 font-bold">${{ total }}</p>
      </div>
      <button @click="cartStore.removeProductFromCart(props.product.name)"
        class="border-2 border-gray-400 p-2 rounded-full">
        <img src="../../assets/images/icon-remove-item.svg" alt="remove-item">
      </button>
    </div>
  </div>
</template>
