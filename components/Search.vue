<script setup>
const emit = defineEmits(['close']);

const surahStore = useSurahStore();
const { searchChapterList, searchVerseList } = storeToRefs(surahStore);

const search = ref('');
const popularTagList = [
  {
    id: 1,
    name: 'Fâtiha Suresi',
  },
  {
    id: 2,
    name: 'Bakara Suresi',
  },
  {
    id: 3,
    name: 'Âl-i İmrân Suresi',
  },
  {
    id: 4,
    name: 'Nisâ Suresi',
  },
];

const handleClose = () => {
  emit('close');
};
</script>

<template>
  <div class="search mb-4">
    <Icon name="ep:search" class="text-2xl sm:text-3xl" />
    <input
      v-model="search"
      type="text"
      placeholder="Ara"
      class="search-input"
      @input="surahStore.getSearchList(search)"
    />
    <div
      v-if="
        search.length > 1 &&
        (searchChapterList.length || searchVerseList.length)
      "
      class="search-result"
    >
      <div class="search-list">
        <button
          v-for="surah in searchChapterList"
          :key="surah.id"
          type="button"
          class="search-item font-medium"
          @click="
            $router.push(`/${surah.id}`);
            handleClose();
          "
        >
          {{ surah.nameSimple }}
        </button>
        <button
          v-for="verse in searchVerseList"
          :key="verse.id"
          type="button"
          class="search-item"
          @click="
            $router.push(`/${verse.chapterId}/${verse.verseId}`);
            handleClose();
          "
        >
          <span class="mb-2 block font-medium">
            {{ surahStore.getSurah(verse.chapterId)?.nameSimple }}
            {{ verse.verseId }}. Ayet
          </span>
          {{ verse.text }}
        </button>
      </div>
    </div>
  </div>
  <div class="search-tag">
    <button
      v-for="tag in popularTagList"
      :key="tag.id"
      type="button"
      class="search-tag-item"
      @click="
        $router.push(`/${tag.id}`);
        handleClose();
      "
    >
      {{ tag.name }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply relative flex items-center gap-5 rounded-lg bg-white pl-5 shadow-xl dark:bg-dark-800 sm:gap-8 sm:pl-8;

  &-input {
    @apply h-full w-full flex-1 rounded-lg bg-transparent py-5 pr-5 text-base sm:py-8 sm:pr-8 sm:text-xl;
  }

  &-tag {
    @apply flex flex-wrap gap-2.5;

    &-item {
      @apply rounded-lg bg-white/10 px-5 py-2 text-white transition-colors dark:bg-dark-800 dark:text-white/70;

      &:hover {
        @apply bg-white/20 dark:bg-dark-800;
      }
    }
  }

  &-result {
    @apply absolute left-0 top-full z-10 w-full translate-y-4 rounded-md bg-white p-6 shadow-xl dark:bg-dark-800;
  }

  &-list {
    @apply max-h-52 overflow-auto pr-4;

    &::-webkit-scrollbar {
      @apply w-2 rounded-full bg-transparent;

      &-thumb {
        @apply rounded-full bg-primary/10 dark:bg-white/70;
      }
    }
  }

  &-item {
    @apply block w-full px-4 text-left sm:text-base;

    &:not(:last-child) {
      @apply mb-4 border-b border-light pb-4 dark:border-dark-300;
    }
  }
}
</style>
