<script setup>
const router = useRouter();
const route = useRoute();

const surahStore = useSurahStore();
const { verseList } = storeToRefs(surahStore);

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

const handleSurahDirection = (direction) => {
  const currentSurahId = Number(route.params.id);

  router.push(
    `/${direction === 'next' ? currentSurahId + 1 : currentSurahId - 1}?verse=1`
  );
};

const currentSurahName = computed(() => surahStore.getSurah()?.nameSimple);

surahStore.resetVerseData();
surahStore.getVerseList();

useHead({
  title: currentSurahName.value,
});

onMounted(() => {
  window.addEventListener('scroll', surahStore.handleVersePagination);
});
</script>

<template>
  <div class="surah-wrapper">
    <LayoutSidebar
      class="sticky top-20 w-full sm:w-80"
      :class="{ visible: showSidebar }"
      @close="showSidebar = false"
    />
    <div class="flex-1">
      <div v-if="verseList.length" class="mb-16">
        <div class="surah-tab-title">
          <button
            v-for="tab in tabList"
            :key="tab.id"
            type="button"
            class="surah-tab-item"
            :class="{ active: activeTab === tab.value }"
            @click="activeTab = tab.value"
          >
            {{ tab.name }}
          </button>
        </div>
        <button type="button" class="surah-name" @click="showSidebar = true">
          {{ currentSurahName }}
          <span class="text-xl lg:hidden">
            <Icon name="flowbite:angle-down-outline" />
          </span>
        </button>
        <div class="surah-header">
          <button
            type="button"
            class="flex items-center gap-2 font-medium sm:text-base"
            @click="surahStore.playSurah"
          >
            <Icon name="ph:play-fill" class="text-lg sm:text-xl" />
            Sureyi Dinle
          </button>
          <div
            v-if="!['1', '9'].includes(route.params.id)"
            class="font-arabic text-2xl sm:text-4xl"
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </div>
        </div>
        <template v-if="activeTab === 1">
          <VerseCard
            v-for="verse in verseList"
            :key="verse.id"
            :data="verse"
            :surahName="currentSurahName"
          />
        </template>
        <div v-else class="mx-auto max-w-6xl text-4xl leading-loose" dir="rtl">
          <VersePage v-for="verse in verseList" :key="verse.id" :data="verse" />
        </div>
      </div>
      <Loader v-else class="py-10 sm:py-48" />
      <div class="surah-footer">
        <BaseButton
          v-if="route.params.id > 1"
          secondary
          @click="handleSurahDirection"
        >
          Önceki Sure
        </BaseButton>
        <BaseButton
          v-if="route.params.id != 114"
          @click="handleSurahDirection('next')"
        >
          Sonraki Sure
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.surah {
  &-wrapper {
    @apply my-6 flex items-start gap-10 px-4 sm:my-16;
  }

  &-tab {
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

  &-name {
    @apply mb-20 flex w-full items-center justify-center gap-1.5 text-xl font-medium;
  }

  &-header {
    @apply mx-auto mb-20 flex max-w-6xl items-center justify-between gap-4;
  }

  &-footer {
    @apply flex justify-center gap-2 lg:gap-4;
  }
}
</style>
