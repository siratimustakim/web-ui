<script setup>
const route = useRoute();

const surahStore = useSurahStore();
const { verseList, versePagination } = storeToRefs(surahStore);

const calculatePageNumber = computed(() => Math.ceil(route.params.verse / 10));

const currentSurahName = computed(() => surahStore.getSurah()?.nameSimple);

const verse = computed(
  () =>
    verseList.value &&
    verseList.value.find((verse) => verse.verseNumber == route.params.verse)
);

versePagination.value = calculatePageNumber.value;
surahStore.getVerseList();
surahStore.getSurahList();
</script>

<template>
  <div v-if="verse" class="container my-10 sm:my-20">
    <NuxtLink
      :to="`/${verse.chapterId}`"
      class="mb-20 block text-center text-xl font-medium"
    >
      {{ currentSurahName }}
      {{ verse.verseNumber }}. Ayet
    </NuxtLink>
    <VerseCard :data="verse" :noMaxWidth="true" :surahName="currentSurahName" />
  </div>
  <Loader v-else class="py-20" />
</template>
