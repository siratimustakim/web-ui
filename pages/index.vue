<script setup>
const surahStore = useSurahStore();
const { surahList } = storeToRefs(surahStore);

surahStore.resetVerseData();
surahStore.getSurahList();
</script>

<template>
  <Hero />
  <div class="container my-6 sm:my-16">
    <div class="mb-6 text-center text-lg font-semibold sm:text-2xl">Sure</div>
    <div v-if="surahList" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <SurahCard
        v-for="surah in surahList"
        :key="surah.id"
        :data="surah"
        @click="$router.push(`/${surah.id}`)"
      />
    </div>
    <Loader v-else class="py-10 sm:py-28" />
  </div>
</template>
