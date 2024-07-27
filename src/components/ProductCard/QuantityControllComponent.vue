<script setup lang="ts">
type QuantityControllProps = {
  increase: () => void;
  decrease: () => void;
  quantity: number
}
const props = defineProps<QuantityControllProps>()
</script>
<template>
  <div class="self-center flex flex-row  gap-6 px-4 py-3 max-mobile:min-w-[50%] max-mobile:w-8/12  rounded-full border-2 bg-red  -translate-y-6">
    <button>
      <img src="../../assets/images/icon-decrement-quantity.svg" alt="decrease"/>
    </button>
    <span class="text-white flex-1 text-center">1</span>
    <button>
      <img src="../../assets/images/icon-increment-quantity.svg" alt="increase"/>
    </button>
  </div>
</template>
<style scoped>
button {
  @apply border border-white rounded-full p-2
}
</style>
