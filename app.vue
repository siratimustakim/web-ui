<script setup>
const { surahMedia } = storeToRefs(useSurahStore());

useHead({
  title: 'Sırat-ı Müstakim - Kuran Mealleri',
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
  <LayoutHeader />
  <div class="xl:px-20">
    <NuxtPage />
  </div>
  <LayoutFooter />
  <SurahPlayer v-if="surahMedia" />
</template>
