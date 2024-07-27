<script setup lang="ts">
import products from '@/data.json'

import ProductImage from './ProductImageComponent.vue';
import AddToCart from "./AddToCartComponent.vue";
import QuantityControll from "./QuantityControllComponent.vue";
type Product = typeof products[0]
const product: Product = products[0]

const handleClick = () => {
  console.log('clicked')
  console.log(product)
}
</script>
<template>
  <div class="flex flex-col max-mobile:w-full">
    <ProductImage :desktop="product.image.desktop" :tablet="product.image.tablet" :mobile="product.image.mobile"
      :alt="product.name" />
    <div class="flex-1 flex flex-col">
      <AddToCart :onClick="handleClick" />
      <QuantityControll :quantity="1" :increase="() => { }" :decrease="() => { }" />
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
