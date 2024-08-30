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
      <button
        type="button"
        class="verse-progress-play"
        @click="surahStore.playSurah"
      >
        <Icon name="ph:play-fill" />
      </button>
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
    @apply absolute top-full flex w-fit -translate-y-3.5 items-center justify-center rounded-full bg-light py-1 pl-1 pr-4 font-medium transition-all dark:bg-dark-800 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:text-[0.75rem] sm:right-10 sm:-translate-y-5 sm:py-1.5 sm:pl-1.5;
  }

  &-play {
    @apply mr-2.5 flex h-5 w-5 items-center justify-center rounded-full border border-black dark:border-white/70 sm:h-7 sm:w-7;
  }
}
</style>
