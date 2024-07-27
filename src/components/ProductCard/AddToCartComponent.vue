<script setup lang="ts">
type AddToCartProps = {
  onClick: () => void
}
const props = defineProps<AddToCartProps>()
</script>
<template>
  <button @click="props.onClick"
    class="self-center flex flex-row justify-center items-center gap-4 px-4 py-3 max-mobile:min-w-[50%] max-mobile:w-8/12 border-2 cursor-pointer hover:border-red border-[#C2B2A3] rounded-full transition-colors duration-200 -translate-y-6 bg-white">
    <img src="../../assets/images/icon-add-to-cart.svg" alt="Add to Cart" />
    <span class="max-mobile:text-sm font-semibold">Add to Cart</span>
  </button>
</template>
