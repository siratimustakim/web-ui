<script setup>
const emit = defineEmits(['close']);

const surahStore = useSurahStore();
const { surahList } = storeToRefs(surahStore);

const search = ref('');
const surahItemsEl = ref();

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
});
</script>

<template>
  <aside v-if="surahList" class="sidebar">
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
    <div class="sidebar-list pr-2.5">
      <NuxtLink
        ref="surahItemsEl"
        v-for="surah in filteredSurahList"
        :key="surah.id"
        :to="`/${surah.id}`"
        class="sidebar-item"
        activeClass="highlight"
      >
        {{ surah.id }} - {{ surah.nameSimple }}
      </NuxtLink>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply flex h-[calc(100vh-19.375rem)] flex-col gap-5 overflow-hidden rounded-lg border border-light bg-body p-4 transition-all dark:border-dark-800 dark:bg-dark max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:-translate-x-full max-lg:opacity-0 max-lg:shadow-xl;

  &.visible {
    @apply translate-x-0 opacity-100;
  }

  &-search {
    @apply w-full rounded-lg border border-light bg-transparent px-4 py-2.5 dark:border-dark-800;
  }

  &-list {
    @apply flex h-full max-h-full flex-1 flex-col overflow-auto;

    &::-webkit-scrollbar {
      @apply w-2 rounded-full bg-transparent;

      &-thumb {
        @apply rounded-full bg-primary/10 dark:bg-dark-300;
      }
    }
  }

  &-item {
    @apply rounded px-5 py-2.5;

    &.highlight {
      @apply bg-primary text-white dark:bg-dark-800 dark:text-white/70;
    }
  }
}
</style>
