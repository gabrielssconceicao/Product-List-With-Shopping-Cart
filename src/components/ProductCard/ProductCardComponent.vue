<script setup lang="ts">

import ProductImage from './ProductImageComponent.vue';
import AddToCart from "./AddToCartComponent.vue";
import QuantityControll from "./QuantityControllComponent.vue";
import { useCounterStore } from '@/stores/cart'
const counterStore = useCounterStore()
type Product = {
  name: string
  category: string
  price: number
  image: {
    desktop: string
    tablet: string
    mobile: string
    thumbnail: string
  }
}

interface ProductProps {
  product: Product
}

const props = defineProps<ProductProps>()


const handleIncreaseProductQuantityToCart = () => {
  const cartProduct = {
    name: props.product.name,
    price: props.product.price,
    quantity: 1,
    image: props.product.image.thumbnail
  }

  counterStore.incrementQuantity(cartProduct)
}
const handleDecreaseProductQuantityToCart = () => {
  counterStore.decreaseQuantity(props.product.name)
}
</script>
<template>
  <div class="flex flex-col max-mobile:w-full">
    <ProductImage :desktop="props.product.image.desktop" :tablet="props.product.image.tablet"
      :mobile="props.product.image.mobile" :alt="props.product.name"
      :isOnCart="counterStore.isProductOnCart(props.product.name)" />
    <div class="flex-1 flex flex-col">

      <AddToCart :onClick="handleIncreaseProductQuantityToCart"
        v-if="!counterStore.isProductOnCart(props.product.name)" />
      <QuantityControll v-else :quantity="counterStore.getProductQuantity(props.product.name)"
        :increase="handleIncreaseProductQuantityToCart" :decrease="handleDecreaseProductQuantityToCart" />
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
