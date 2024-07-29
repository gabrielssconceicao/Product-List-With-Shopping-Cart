<script setup lang="ts">
import ConfirmOrderItem from '@/components/ConfirmOrder/ConfirmOrderItemComponent.vue'
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
const emit = defineEmits(['closeConfirmOrderModal']);

const handleCloseConfirmOrderModal = () => {
  cartStore.clearCart();
  emit('closeConfirmOrderModal');
}
</script>

<template>
  <section class="fixed top-0 bg-black/50 w-full h-full space-y-5">

    <section
      class="bg-white absolute flex flex-col max-md:w-full max-md:bottom-0 max-md:rounded-t-2xl px-3 py-5 max-md:h-[90%] font-red-hat-text shadow-lg md:top-1/2  md:left-1/2  md:-translate-x-1/2 md:-translate-y-1/2 md:h-[70vw] md:w-[70vh] md:rounded-xl">
      <div class="space-y-5">
        <div>
          <img src="../assets/images/icon-order-confirmed.svg" alt="order-confirmed">
        </div>
        <h2 class="font-red-hat-text font-bold text-4xl text-rose-900 inline-flex flex-col gap-3">
          <span>Order</span>
          <span>Confirmed</span>
        </h2>
        <p class="text-rose-500">Hope you enjoy your food</p>
      </div>

      <div class="flex-1 overflow-y-auto space-y-1 my-3">
        <ConfirmOrderItem v-for="(product, i) in cartStore.cart" :key="i" :product="product" />
      </div>

      <p class="font-red-hat-text flex justify-between py-5 px-10">

        <span class="text-lg"> Order Total</span>
        <span class="text-3xl font-bold text-rose-900">${{ cartStore.cartTotal }}</span>
      </p>


      <button @click="handleCloseConfirmOrderModal"
        class=" bg-red px-10 py-3 rounded-3xl text-white w-full hover:bg-rose-900 transition-colors duration-200">Start
        New Order</button>
    </section>
  </section>
</template>
