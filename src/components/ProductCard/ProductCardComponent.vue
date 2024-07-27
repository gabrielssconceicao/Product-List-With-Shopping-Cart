<script setup lang="ts">

import ProductImage from './ProductImageComponent.vue';
import AddToCart from "./AddToCartComponent.vue";
import QuantityControll from "./QuantityControllComponent.vue";
type Product = {
  name: string
  category: string
  price: number
  image: {
    desktop: string
    tablet: string
    mobile: string
  }
}

interface ProductProps {
  product: Product
}

const props = defineProps<ProductProps>()

const handleClick = () => {
  console.log('clicked')
  console.log(props.product)
}
</script>
<template>
  <div class="flex flex-col max-mobile:w-full">
    <ProductImage :desktop="props.product.image.desktop" :tablet="props.product.image.tablet"
      :mobile="props.product.image.mobile" :alt="props.product.name" />
    <div class="flex-1 flex flex-col">
      <AddToCart :onClick="handleClick" />
      <QuantityControll :quantity="1" :increase="() => { }" :decrease="() => { }" />
      <div class="space-y-2">
        <p class="text-xs text-rose-500">{{ props.product.category }}</p>
        <p class="text-sm font-semibold text-rose-900">{{ props.product.name }}</p>
        <p class="text-md text-red font-semibold"> ${{ props.product.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
  @apply font-red-hat-text;
}
</style>
