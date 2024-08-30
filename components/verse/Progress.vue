<script setup>
const surahStore = useSurahStore();
const { verseList } = storeToRefs(surahStore);

const currentVerseCount = computed(() => verseList.value?.length);
const totalVerseCount = computed(() => surahStore.getSurah()?.versesCount);
</script>

<template>
  <template v-if="totalVerseCount && !$route.params.verse">
    <progress
      :value="currentVerseCount"
      :max="totalVerseCount"
      class="verse-progress"
    ></progress>
    <div
      class="verse-progress-info"
      :class="{
        '!bg-primary text-white dark:text-white/70':
          currentVerseCount === totalVerseCount,
      }"
    >
      {{ currentVerseCount }} / {{ totalVerseCount }}
    </div>
  </template>
</template>

<style lang="scss" scoped>
.verse-progress {
  @apply absolute bottom-0 left-0 h-1 w-full;

  &::-webkit-progress-bar {
    @apply bg-light dark:bg-dark-800;
  }

  &::-webkit-progress-value {
    @apply bg-primary transition-all;
  }

  &-info {
    @apply absolute right-auto top-full flex h-6 w-20 -translate-y-3 items-center justify-center rounded-full bg-light font-medium transition-all dark:bg-dark-800 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:text-[0.75rem] lg:right-10 lg:h-10 lg:w-24 lg:-translate-y-5;
  }
}
</style>
