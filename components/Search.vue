<script setup>
const router = useRouter();

const { surahList } = storeToRefs(useSurahStore());

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

const goToSurah = (id) => {
  router.push(`/${id}?verse=1`);
};

const filteredSurahList = computed(
  () =>
    surahList.value &&
    surahList.value.filter((surah) =>
      surah.searchableText.toLowerCase().includes(search.value.toLowerCase())
    )
);
</script>

<template>
  <div class="search-overlay">
    <div class="search-wrapper">
      <div class="search mb-4">
        <Icon name="ep:search" class="text-2xl sm:text-3xl" />
        <input
          v-model="search"
          type="text"
          placeholder="Ara"
          class="search-input"
        />
        <div v-if="search.length > 1" class="search-result">
          <div v-if="filteredSurahList.length" class="search-list">
            <button
              v-for="surah in filteredSurahList"
              :key="surah.id"
              type="button"
              class="search-item"
              @click="goToSurah(surah.id)"
            >
              {{ surah.nameSimple }}
            </button>
          </div>
          <div v-else class="search-item">Sonuç bulunamadı.</div>
        </div>
      </div>
      <div class="search-tag">
        <button
          v-for="tag in popularTagList"
          :key="tag.id"
          type="button"
          class="search-tag-item"
          @click="goToSurah(tag.id)"
        >
          {{ tag.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply relative flex items-center gap-5 rounded-lg bg-white pl-5 dark:bg-dark sm:gap-8 sm:pl-8 shadow-xl;

  &-overlay {
    @apply bg-primary py-16 dark:bg-dark-500 sm:py-44 xl:rounded-lg;
  }

  &-wrapper {
    @apply mx-auto max-w-5xl px-4;
  }

  &-input {
    @apply h-full w-full flex-1 rounded-lg bg-transparent py-5 pr-5 text-base sm:py-8 sm:pr-8 sm:text-xl;
  }

  &-tag {
    @apply flex flex-wrap gap-2.5;

    &-item {
      @apply rounded-lg bg-white/10 px-5 py-2 text-white transition-colors dark:text-dark-100;

      &:hover {
        @apply bg-white/20;
      }
    }
  }

  &-result {
    @apply absolute top-full left-0 w-full p-6 rounded-md translate-y-4 bg-white dark:bg-dark z-10 shadow-xl;
  }

  &-list {
    @apply max-h-52 overflow-auto pr-4;

    &::-webkit-scrollbar {
      @apply bg-transparent w-2 rounded-full;

      &-thumb {
        @apply bg-primary/10 dark:bg-dark-300 rounded-full;
      }
    }
  }

  &-item {
    @apply px-4 sm:text-base block w-full text-left;

    &:not(:last-child) {
      @apply pb-4 mb-4 border-b border-light dark:border-dark-300;
    }
  }
}
</style>
