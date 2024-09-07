<script setup>
const route = useRoute();
const router = useRouter();

const surahStore = useSurahStore();
const { verseList, versePagination } = storeToRefs(surahStore);

const calculatePageNumber = computed(() => Math.ceil(route.params.verse / 10));

const currentSurahName = computed(() => surahStore.getSurah()?.nameSimple);

const verse = computed(
  () =>
    verseList.value &&
    verseList.value.find((verse) => verse.verseNumber == route.params.verse)
);

const handleSurahDirection = (direction) => {
  const currentSurahId = Number(route.params.id);
  let currentVerseId = Number(route.params.verse);

  if (direction === 'next') {
    currentVerseId++;
  } else {
    currentVerseId--;
  }

  router.push(`/${currentSurahId}/${currentVerseId}`);
};

versePagination.value = calculatePageNumber.value;
surahStore.getVerseList();
surahStore.getSurahList();

const handleKeydown = (e) => {
  if (e.code === 'ArrowLeft' && route.params.verse > 1) {
    handleSurahDirection();
  }

  if (
    e.code === 'ArrowRight' &&
    route.params.verse != surahStore.getSurah()?.versesCount
  ) {
    handleSurahDirection('next');
  }
};

useHead({
  title: `${currentSurahName.value} ${route.params.verse}. Ayeti ve Meali`,
});

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div v-if="verse" class="container my-10 sm:my-20">
    <NuxtLink
      :to="`/${verse.chapterId}`"
      class="mb-10 block text-center text-xl font-medium sm:mb-20"
    >
      {{ currentSurahName }}
      {{ verse.verseNumber }}. Ayet
    </NuxtLink>
    <VerseCard :data="verse" :surahName="currentSurahName" :noMaxWidth="true" />
    <div class="flex justify-center gap-5">
      <BaseButton
        v-if="route.params.verse > 1"
        secondary
        @click="handleSurahDirection"
      >
        Önceki Ayet
      </BaseButton>
      <BaseButton
        v-if="route.params.verse != surahStore.getSurah()?.versesCount"
        @click="handleSurahDirection('next')"
      >
        Sonraki Ayet
      </BaseButton>
    </div>
  </div>
  <Loader v-else class="py-20" />
</template>
