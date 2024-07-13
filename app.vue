<script setup>
const { surah } = storeToRefs(useSurahStore());
const route = useRoute();

const isHomePage = computed(() => route.path === '/');
</script>

<template>
  <LayoutHeader
    :class="
      isHomePage
        ? 'border-transparent'
        : 'border-b border-b-light dark:border-b-dark-300'
    "
  />
  <div class="xl:px-20">
    <NuxtPage />
  </div>
  <LayoutFooter />
  <SurahPlayer v-if="surah" />
</template>
