<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import CartItem from '@/components/CartItems/CartItemComponent.vue';
const cartStore = useCartStore();
</script>
<template>
  <aside class="bg-white px-10 py-4 rounded-xl max-md:self-center max-md:w-full">
    <h2 class="font-red-hat-text font-bold text-red text-2xl">Your Cart ({{ cartStore.cartItems }})</h2>
    <div class="flex flex-col justify-center items-center space- y-4" v-if="!cartStore.cartItems">
      <div class="flex-1">
        <img src="../assets/images/illustration-empty-cart.svg" alt="empty-cart">
      </div>
      <p class="text-rose-500 font-red-hat-text">Your added items will appear here</p>
    </div>
    <div class="space-y-4 py-5" v-else>
      <CartItem v-for="(product, i) in cartStore.cart" :key="i" :product="product" />
    </div>
  </aside>
</template>
