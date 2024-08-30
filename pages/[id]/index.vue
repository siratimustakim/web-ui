<script setup>
const router = useRouter();
const route = useRoute();

const surahStore = useSurahStore();
const { verseList, isVerseLoader, versePagination } = storeToRefs(surahStore);

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
const toggleSidebar = ref(true);

const handleSurahDirection = (direction) => {
  let currentSurahId = Number(route.params.id);

  if (direction === 'next') {
    currentSurahId++;
  } else {
    currentSurahId--;
  }

  router.push(`/${currentSurahId}`);
};

const currentSurahName = computed(() => surahStore.getSurah()?.nameSimple);

surahStore.resetVerseData();
surahStore.getVerseList();

useHead({
  title: currentSurahName.value,
});

onMounted(() => {
  if (route.params.verse) {
    router.push(`/${route.params.id}/${route.params.verse}`);
  }
});
</script>

<template>
  <div class="surah-wrapper">
    <div class="sticky top-20 flex items-start gap-4 max-lg:z-50">
      <button
        type="button"
        class="sidebar-toggle-button"
        @click="toggleSidebar = !toggleSidebar"
      >
        <Icon :name="toggleSidebar ? 'ep:close' : 'hugeicons:menu-05'" />
      </button>
      <Transition name="fade">
        <LayoutSidebar
          v-if="toggleSidebar"
          class="w-full sm:w-80"
          :class="{ visible: showSidebar }"
          @close="showSidebar = false"
        />
      </Transition>
    </div>
    <div class="flex-1">
      <div v-if="verseList.length" class="mb-10 sm:mb-20">
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
        <div v-if="activeTab === 1">
          <VerseCard
            v-for="verse in verseList"
            :key="verse.id"
            :data="verse"
            :surahName="currentSurahName"
          />
        </div>
        <div v-else class="mx-auto max-w-6xl" dir="rtl">
          <VersePage v-for="verse in verseList" :key="verse.id" :data="verse" />
        </div>
        <div v-if="versePagination" class="surah-more">
          <div
            class="surah-more-button"
            :class="{ 'pointer-events-none': isVerseLoader }"
            @click="surahStore.getVerseList()"
          >
            Devamını oku
            <Icon
              :name="
                isVerseLoader
                  ? 'ant-design:loading-outlined'
                  : 'flowbite:angle-down-outline'
              "
              class="text-xl sm:text-2xl"
              :class="{ 'animate-spin': isVerseLoader }"
            />
          </div>
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
    @apply my-6 flex items-start px-4 sm:my-16 lg:gap-10;
  }

  &-tab {
    &-title {
      @apply mx-auto mb-10 flex w-fit justify-center rounded-md border border-light p-2.5 dark:border-dark-300;
    }

    &-item {
      @apply rounded-md px-10 py-2 transition-colors;

      &.active {
        @apply bg-primary text-white dark:bg-dark-800 dark:text-white/70;
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

  &-more {
    @apply relative z-10 mt-10 flex justify-center sm:mt-20;

    &::after {
      @apply absolute left-0 top-1/2 -z-10 h-px w-full -translate-y-1/2 bg-gradient-to-r from-body via-light-200 to-body dark:from-dark dark:via-dark-800 dark:to-dark;
      content: '';
    }

    &-button {
      @apply flex cursor-pointer select-none flex-col items-center justify-center gap-1.5 bg-body px-10 font-medium dark:bg-dark sm:text-base;
    }
  }
}

.sidebar-toggle-button {
  @apply hidden h-12 w-12 items-center justify-center rounded-lg border border-light text-2xl dark:border-dark-800 lg:flex;
}
</style>
