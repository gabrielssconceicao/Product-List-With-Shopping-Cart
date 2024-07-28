<script setup lang="ts">
import ProductCard from '@/components/ProductCard/ProductCardComponent.vue'
import products from '@/data.json'
</script>
<template>
  <section class="space-y-6 max-mobile:px-8 max-mobile:py-4 max-w-[768px] max-lg:mx-auto">
    <h1 class="font-red-hat-text font-bold text-4xl">Desserts</h1>

    <article class="px-3 py-5 flex flex-row flex-wrap justify-center gap-4">
      <ProductCard v-for="product in products" :key="product.name" :product="product" />
    </article>
  </section>

</template>
