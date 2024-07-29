<script setup lang="ts">
import type { CartItem } from '@/stores/cart';
type ConfirmOrderItemProps = {
  product: CartItem
}
const props = defineProps<ConfirmOrderItemProps>()

const productThumbnail = new URL(props.product.image, import.meta.url).href;
</script>

<template>
  <div class="flex flex-row items-stretch gap-3 px-2 bg-rose-100 border-b-4 border-gray-200
  ">
    <div class="w-20">
      <img :src="productThumbnail" :alt="`${props.product.name} thumbnail`">
    </div>
    <div class="flex-1 flex-grow flex flex-col ">
      <p class=" px-2 py-1"> {{ props.product.name }}</p>
      <div class="flex flex-1 items-center px-3 flex-row gap-3 ">
        <p class="text-red font-bold">x{{ props.product.quantity }}</p>
        <p class="text-rose-500 ">${{ props.product.price.toFixed(2) }}</p>
      </div>
    </div>
    <p class="font-bold text-2xl inline-flex items-center">${{ (props.product.price * props.product.quantity).toFixed(2)
      }}</p>
  </div>


</template>
