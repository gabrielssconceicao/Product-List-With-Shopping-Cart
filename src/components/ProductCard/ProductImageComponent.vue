<script setup lang="ts">
type ImageProps = {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
};

const props = defineProps<ImageProps>()
</script>
<template>
  <picture>
    <source media="(min-width: 1440px)" :srcset="props.desktop" />

    <source media="(max-width: 375px)" :srcset="props.mobile" />
    <img :src="props.tablet" :alt="`${props.alt} image`" class="w-full rounded-lg border-2 border-slate-300" />
  </picture>
</template>
