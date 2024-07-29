<script setup>
const router = useRouter();
const route = useRoute();

const surahStore = useSurahStore();
const { surahList, verseList } = storeToRefs(surahStore);

const tabList = ref([
  {
    id: 1,
    name: 'Meal',
    value: 1,
  },
  {
    id: 2,
    name: 'Okuma',
    value: 2,
  },
]);
const activeTab = ref(1);
const showSidebar = ref(false);
const verseEl = ref([]);

const handleSurahDirection = (direction) => {
  const currentSurahId = Number(route.params.id);

  router.push(
    `/${direction === 'next' ? currentSurahId + 1 : currentSurahId - 1}?verse=1`
  );
};

const scrollToVerse = (verse) => {
  if (verse) {
    verseEl.value[verse].$el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};

const currentSurahName = computed(
  () =>
    surahList.value &&
    surahList.value.find((surah) => surah.id == Number(route.params.id))
      .nameSimple
);

surahStore.getVerseList(route.params.id);

onMounted(async () => {
  await nextTick();
  scrollToVerse(route.query.verse - 1);
});
</script>

<template>
  <div class="my-6 flex items-start gap-10 px-4 sm:my-16">
    <LayoutSidebar
      class="sticky top-20 w-[22rem]"
      :class="{ visible: showSidebar }"
      @close="showSidebar = false"
      @verse="scrollToVerse"
    />
    <div class="flex-1">
      <div class="mb-16">
        <div class="tab-title">
          <button
            v-for="tab in tabList"
            :key="tab.id"
            type="button"
            class="tab-item"
            :class="{ active: activeTab === tab.value }"
            @click="activeTab = tab.value"
          >
            {{ tab.name }}
          </button>
        </div>
        <button
          type="button"
          class="mb-20 flex w-full items-center justify-center gap-1.5 text-xl font-medium"
          @click="showSidebar = true"
        >
          {{ currentSurahName }}
          <span class="lg:hidden text-xl">
            <Icon name="flowbite:angle-down-outline" />
          </span>
        </button>
        <div
          class="flex items-center justify-between gap-4 max-w-2xl mx-auto mb-20"
        >
          <button
            type="button"
            class="flex items-center gap-2"
            @click="surahStore.playSurah($route.params.id)"
          >
            <Icon name="ph:play-fill" class="text-lg" />
            Sureyi Dinle
          </button>
          <div
            v-if="!['1', '9'].includes($route.params.id)"
            class="text-4xl font-arabic"
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </div>
        </div>
        <template v-if="activeTab === 1 && verseList">
          <VerseCard
            ref="verseEl"
            v-for="verse in verseList"
            :key="verse.id"
            :data="verse"
          />
        </template>
        <div
          v-else-if="activeTab === 2 && verseList"
          class="mx-auto max-w-2xl text-center text-4xl leading-loose"
          dir="rtl"
        >
          <VersePage v-for="verse in verseList" :key="verse.id" :data="verse" />
        </div>
        <Loader v-else class="py-10 sm:py-48" />
      </div>
      <div class="flex justify-center gap-2 lg:gap-4">
        <BaseButton
          v-if="$route.params.id > 1"
          secondary
          @click="handleSurahDirection"
        >
          Önceki Sure
        </BaseButton>
        <BaseButton
          v-if="$route.params.id != 114"
          @click="handleSurahDirection('next')"
        >
          Sonraki Sure
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  &-title {
    @apply mx-auto mb-10 flex w-fit justify-center rounded-md border border-light p-2.5 dark:border-dark-300;
  }

  &-item {
    @apply rounded-md px-10 py-2 transition-colors;

    &.active {
      @apply bg-primary text-white dark:bg-dark-300 dark:text-dark-100;
    }
  }
}
</style>
