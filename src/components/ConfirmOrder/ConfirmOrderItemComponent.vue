<script setup lang="ts">
import type { CartItem } from '@/stores/cart';
type ConfirmOrderItemProps = {
  product: CartItem
}
const props = defineProps<ConfirmOrderItemProps>()
</script>

<template>
  <div class="flex flex-row items-stretch gap-3 px-2
  ">
    <div class="w-20">
      <img :src="props.product.image" :alt="`${props.product.name} thumbnail`">
    </div>
    <div class="flex-1 flex-grow bg-red">
      <p>{{ props.product.name }}</p>
      <div>
        <p>x{{ props.product.quantity }}</p>
        <p>${{ props.product.price.toFixed(2) }}</p>
      </div>
    </div>
    <p>${{ (props.product.price * props.product.quantity).toFixed(2) }}</p>
  </div>


</template>
