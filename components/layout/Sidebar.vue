<script setup>
const emit = defineEmits(['close', 'verse']);

const surahStore = useSurahStore();
const { surahList } = storeToRefs(surahStore);

const search = ref('');
const surahItemsEl = ref();
const verseItemsEl = ref();

const verseList = computed(() => surahStore.getSurah().versesCount);

const filteredSurahList = computed(
  () =>
    surahList.value &&
    surahList.value.filter((surah) =>
      surah.searchableText.toLowerCase().includes(search.value.toLowerCase())
    )
);

const scrollToActiveItem = (data) => {
  const activeItem = data.find((item) =>
    item.$el.classList.value.includes('highlight')
  );

  activeItem.$el.scrollIntoView({ block: 'center' });
};

surahStore.getSurahList();

onMounted(async () => {
  await nextTick();

  scrollToActiveItem(surahItemsEl.value);
  scrollToActiveItem(verseItemsEl.value);
});
</script>

<template>
  <aside class="sidebar">
    <button
      type="button"
      class="ml-auto text-lg lg:hidden"
      @click="emit('close')"
    >
      <Icon name="uiw:close" />
    </button>
    <input
      v-model="search"
      type="text"
      placeholder="Ara"
      class="sidebar-search"
    />
    <div class="sidebar-inner">
      <div class="sidebar-list flex-1 pr-2.5">
        <nuxt-link
          ref="surahItemsEl"
          v-for="surah in filteredSurahList"
          :key="surah.id"
          :to="`/${surah.id}?verse=1`"
          class="sidebar-item"
          activeClass="highlight"
        >
          {{ surah.id }} - {{ surah.nameSimple }}
        </nuxt-link>
      </div>
      <div
        class="sidebar-list w-24 border-l pl-2.5 border-light dark:border-dark-300 pr-2.5"
      >
        <nuxt-link
          ref="verseItemsEl"
          v-for="(verse, i) in verseList"
          :key="verse"
          :to="`?verse=${verse}`"
          class="sidebar-item"
          :class="{ highlight: $route.query.verse == verse }"
          @click="
            emit('verse', i);
            emit('close');
          "
        >
          {{ verse }}
        </nuxt-link>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply left-0 z-30 flex h-[calc(100vh-19.375rem)] flex-col gap-5 overflow-hidden rounded-lg border border-light bg-body p-4 transition-all dark:border-dark-300 dark:bg-dark max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:-translate-x-full max-lg:opacity-0 max-lg:shadow-xl;

  &.visible {
    @apply translate-x-0 opacity-100;
  }

  &-search {
    @apply w-full rounded-lg border border-light bg-transparent px-4 py-2.5 dark:border-dark-300;
  }

  &-inner {
    @apply flex h-full flex-1 gap-2.5 overflow-hidden;
  }

  &-list {
    @apply flex h-full max-h-full flex-col overflow-auto;

    &::-webkit-scrollbar {
      @apply bg-transparent w-2 rounded-full;

      &-thumb {
        @apply bg-primary/10 dark:bg-dark-300 rounded-full;
      }
    }
  }

  &-item {
    @apply rounded px-5 py-2.5;

    &.highlight {
      @apply bg-primary text-white dark:bg-dark-300 dark:text-dark-100;
    }
  }
}
</style>
