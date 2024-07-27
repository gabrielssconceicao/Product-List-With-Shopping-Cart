<script setup lang="ts">
import products from '@/data.json'

import ProductImage from './ProductImageComponent.vue'
type Product = typeof products[0]
const product: Product = products[0]
</script>
<template>
  <div class="flex flex-col max-mobile:w-full">
    <ProductImage :desktop="product.image.desktop" :tablet="product.image.tablet" :mobile="product.image.mobile"
      :alt="product.name" />
    <div class="flex-1 flex flex-col">
      <button
        class="self-center flex flex-row  gap-4 px-4 py-3 max-mobile:min-w-1/2 max-mobile:max-w-48 border-2 cursor-pointer hover:border-red border-[#C2B2A3] rounded-full transition-colors duration-200 -translate-y-6 bg-white">
        <img src="../../assets/images/icon-add-to-cart.svg" alt="Add to Cart" />
        <span class="max-mobile:text-sm font-semibold">Add to Cart</span>
      </button>
      <div class="space-y-2">
        <p class="text-xs text-rose-500">{{ product.category }}</p>
        <p class="text-sm font-semibold text-rose-900">{{ product.name }}</p>
        <p class="text-md text-red font-semibold"> ${{ product.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
  @apply font-red-hat-text;
}
</style>
