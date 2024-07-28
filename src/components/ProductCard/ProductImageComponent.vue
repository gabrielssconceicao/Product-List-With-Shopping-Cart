<script setup lang="ts">
import { computed } from 'vue';

type ImageProps = {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
  isOnCart: boolean;
};

const borderColor = computed(() => {
  return props.isOnCart ? 'border-red' : 'border-slate-300'
})

const props = defineProps<ImageProps>()
</script>
<template>
  <picture>
    <source media="(min-width: 1440px)" :srcset="props.desktop" />

    <source media="(max-width: 375px)" :srcset="props.mobile" />
    <img :src="props.tablet" :alt="`${props.alt} image`"
      class="max-mobile:w-full mobile:max-w-[200px] rounded-lg border-2 transition-colors duration-200 self-center"
      :class="borderColor" />
  </picture>
</template>
