<script setup lang="ts">
import ConfirmOrderItem from '@/components/ConfirmOrder/ConfirmOrderItemComponent.vue'
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
const emit = defineEmits(['closeConfirmOrderModal']);

const handleCloseConfirmOrderModal = () => {
  emit('closeConfirmOrderModal');
}
</script>

<template>
  <section class="fixed top-0 bg-black/50 w-full h-full space-y-5">

    <section
      class="bg-white absolute flex flex-col mobile:w-full mobile:bottom-0 mobile:rounded-t-2xl px-3 py-5 h-[90%] font-red-hat-text shadow-lg">
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

      <div class="flex-1 overflow-y-auto space-y-1 py-1">
        <ConfirmOrderItem v-for="(product, i) in cartStore.cart" :key="i" :product="product" />
      </div>


      <button @click="handleCloseConfirmOrderModal"
        class=" bg-red px-10 py-3 rounded-3xl text-white w-full hover:bg-rose-900 transition-colors duration-200">Start
        New Order</button>
    </section>
  </section>
</template>
