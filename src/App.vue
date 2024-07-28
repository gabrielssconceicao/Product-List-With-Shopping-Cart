<script setup lang="ts">
import ProductListView from "@/views/ProductListView.vue";
import CartView from "@/views/CartView.vue";
</script>

<template>
  <section class="flex max-mobile:flex-col max-md:flex-col flex-row px-8 py-5">
    <ProductListView />
    <CartView />
  </section>
</template>
