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
    <div class="flex-1 flex flex-row items-center justify-center">
      <button
        class="px-4 py-2 max-mobile:w-40 hover:border-red border-[#C2B2A3] border-2 cursor-pointer rounded-full transition-colors duration-200 -translate-y-5">

        <span class="max-mobile:text-sm font-semibold">Add to Cart</span>
      </button>
    </div>
  </div>
</template>
