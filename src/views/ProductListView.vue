<script setup lang="ts">
import ProductCard from '@/components/ProductCard/ProductCardComponent.vue'
import products from '@/data.json'
</script>
<template>
  <section class="space-y-6 max-mobile:px-8 max-mobile:py-4  ">
    <h1 class="font-red-hat-text font-bold text-4xl">Desserts</h1>

    <article>
      <ProductCard v-for="product in products" :key="product.name" :product="product" />
    </article>
  </section>

</template>
