<script setup lang="ts">
import { computed } from 'vue';
type ImageProps = {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
  isOnCart: boolean;
};

const props = defineProps<ImageProps>()
const borderColor = computed(() => {
  return props.isOnCart ? 'border-red' : 'border-slate-300'
})

const desktopImage = new URL(props.desktop, import.meta.url).href;
const tabletImage = new URL(props.tablet, import.meta.url).href;
const mobileImage = new URL(props.mobile, import.meta.url).href;

</script>
<template>
  <picture>
    <source media="(min-width: 1440px)" :srcset="desktopImage" />

    <source media="(max-width: 375px)" :srcset="mobileImage" />
    <img :src="tabletImage" :alt="`${props.alt} image`"
      class="max-mobile:w-full mobile:max-w-[200px] rounded-lg border-2 transition-colors duration-200 self-center mx-auto"
      :class="borderColor" />
  </picture>
</template>
