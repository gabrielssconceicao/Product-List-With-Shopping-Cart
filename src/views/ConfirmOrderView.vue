<script setup lang="ts">
const emit = defineEmits(['closeConfirmOrderModal']);

const handleCloseConfirmOrderModal = () => {
  emit('closeConfirmOrderModal');
}
</script>

<template>
  <section class="fixed top-0 bg-black/50 w-full h-full ">

    <h1>Confirm Order</h1>
    <button @click="handleCloseConfirmOrderModal">Close</button>
  </section>
</template>
