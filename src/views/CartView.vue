<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import CartItem from '@/components/CartItems/CartItemComponent.vue';
const cartStore = useCartStore();
</script>
<template>
  <aside class="bg-white px-10 py-4 rounded-xl max-md:self-center max-md:w-full h-fit mx-auto min-w-96">
    <h2 class="font-red-hat-text font-bold text-red text-2xl">Your Cart ({{ cartStore.cartItems }})</h2>
    <div class="flex flex-col justify-center items-center space- y-4" v-if="!cartStore.cartItems">
      <div class="flex-1">
        <img src="../assets/images/illustration-empty-cart.svg" alt="empty-cart">
      </div>
      <p class="text-rose-500 font-red-hat-text">Your added items will appear here</p>
    </div>
    <div class="space-y-4 py-5" v-else>
      <CartItem v-for="(product, i) in cartStore.cart" :key="i" :product="product" />
      <div class="py-8 px-10 flex justify-between font-red-hat-text items-center">
        <p>Order Total</p>
        <h3 class="text-3xl font-bold text-rose-900">$ {{ cartStore.cartTotal }}</h3>
      </div>
      <div class="py-4  px-10 flex items-center justify-center gap-3 bg-rose-100 text-rose-900 rounded-lg"> <img
          src=" ../assets/images/icon-carbon-neutral.svg" alt="">
        <p>This is a <span class="font-bold">carbon-neutral</span> delivery</p>
      </div>

      <div class="flex justify-center py-8">
        <button
          class="bg-red px-10 py-3 rounded-3xl text-white w-full hover:bg-rose-900 transition-colors duration-200">
          Confirm Order </button>
      </div>
    </div>
  </aside>
</template>
