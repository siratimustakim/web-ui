<script setup>
const route = useRoute();
const { surahMedia } = storeToRefs(useSurahStore());

const isHomePage = computed(() => route.path === '/');

useHead({
  title: 'Sırat-ı Müstakim',
  meta: [
    {
      name: 'description',
      content:
        "Ehli sünnet alimlerinin hazırladığı Kuran meallerini kullanıcı dostu arayüzle sunuyoruz. Kuran'ı Kerim'i keşfetmek için ideal ve güvenilir kaynak.",
    },
  ],
});
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
  <SurahPlayer v-if="surahMedia" />
</template>
