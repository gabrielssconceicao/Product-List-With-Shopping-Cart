<script setup lang="ts">
import ProductListView from "@/views/ProductListView.vue";
import CartView from "@/views/CartView.vue";
import ConfirmOrderView from '@/views/ConfirmOrderView.vue';
import { ref } from 'vue';

const isConfirmOrderModalOpen = ref(false);

const openConfirmOrderModal = () => {
  isConfirmOrderModalOpen.value = true;
}

const closeConfirmOrderModal = () => {
  isConfirmOrderModalOpen.value = false;
}
</script>

<template>
  <section class="flex w-full max-mobile:flex-col max-lg:flex-col flex-row px-8 py-5">
    <ProductListView />
    <CartView @openConfirmOrderModal="openConfirmOrderModal" />
  </section>
  <ConfirmOrderView v-if="isConfirmOrderModalOpen" @closeConfirmOrderModal="closeConfirmOrderModal" />
</template>
