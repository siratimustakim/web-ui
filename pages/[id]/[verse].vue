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
    <div class="verse">
      <NuxtLink
        :to="`/${verse.chapterId}`"
        class="mb-20 block text-center text-xl font-medium"
      >
        {{ currentSurahName }}
        {{ verse.verseNumber }}. Ayet
      </NuxtLink>
      <h1 class="verse-title mb-10" dir="rtl">
        {{ verse.text }}
        <span class="verse-number">
          {{ verse.arabicVerseNumber }}
        </span>
      </h1>
      <div class="verse-key">
        {{ verse.verseKey }}
      </div>
      <div v-if="verse.translations.length" class="mt-4 flex flex-col gap-5">
        <div
          v-for="translation in verse.translations"
          :key="translation.id"
          class="flex flex-col gap-1"
        >
          <p class="font-medium sm:text-lg">{{ translation.text }}</p>
          <span class="text-dark-100"> - {{ translation.resourceName }}</span>
        </div>
      </div>
    </div>
  </div>
  <Loader v-else class="py-20" />
</template>

<style lang="scss" scoped>
.verse {
  &-title {
    @apply font-arabic text-4xl leading-loose;
  }

  &-number {
    @apply mr-2.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black text-2xl dark:border-white/70 sm:h-12 sm:w-12;
  }

  &-key {
    @apply w-fit rounded-full bg-primary px-3 py-1 text-white;
  }
}
</style>
