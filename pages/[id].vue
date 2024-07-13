<script setup>
const router = useRouter();
const route = useRoute();

const verseList = [
  {
    id: 1,
    verseNumber: 1,
    verseKey: '1:1',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    chapterId: 1,
    textImlaeiSimple: 'بسم الله الرحمن الرحيم',
    pageNumber: 1,
    juzNumber: 1,
    audioUrl:
      'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3',
    timestamps: {
      timestampFrom: 0,
    },
    translations: [
      {
        id: 903958,
        resourceId: 131,
        text: 'In the Name of Allah—the Most Compassionate, Most Merciful.',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 2,
    verseNumber: 2,
    verseKey: '1:2',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
    chapterId: 1,
    textImlaeiSimple: 'الحمد لله رب العالمين',
    pageNumber: 1,
    juzNumber: 1,
    audioUrl:
      'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3',
    timestamps: {
      timestampFrom: 6090,
    },
    translations: [
      {
        id: 903959,
        resourceId: 131,
        text: 'All praise is for Allah—Lord of all worlds,',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 3,
    verseNumber: 3,
    verseKey: '1:3',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    chapterId: 1,
    textImlaeiSimple: 'الرحمن الرحيم',
    pageNumber: 1,
    juzNumber: 1,
    audioUrl:
      'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3',
    timestamps: {
      timestampFrom: 11680,
    },
    translations: [
      {
        id: 903960,
        resourceId: 131,
        text: 'the Most Compassionate, Most Merciful,',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 4,
    verseNumber: 4,
    verseKey: '1:4',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
    chapterId: 1,
    textImlaeiSimple: 'مالك يوم الدين',
    pageNumber: 1,
    juzNumber: 1,
    audioUrl:
      'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3',
    timestamps: {
      timestampFrom: 16300,
    },
    translations: [
      {
        id: 903961,
        resourceId: 131,
        text: 'Master of the Day of Judgment.',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 5,
    verseNumber: 5,
    verseKey: '1:5',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    chapterId: 1,
    textImlaeiSimple: 'اياك نعبد واياك نستعين',
    pageNumber: 1,
    juzNumber: 1,
    audioUrl:
      'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3',
    timestamps: {
      timestampFrom: 20950,
    },
    translations: [
      {
        id: 903962,
        resourceId: 131,
        text: 'You ˹alone˺ we worship and You ˹alone˺ we ask for help.',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 6,
    verseNumber: 6,
    verseKey: '1:6',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
    chapterId: 1,
    textImlaeiSimple: 'اهدنا الصراط المستقيم',
    pageNumber: 1,
    juzNumber: 1,
    audioUrl:
      'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3',
    timestamps: {
      timestampFrom: 27660,
    },
    translations: [
      {
        id: 903963,
        resourceId: 131,
        text: 'Guide us along the Straight Path,',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 7,
    verseNumber: 7,
    verseKey: '1:7',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani:
      'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
    chapterId: 1,
    textImlaeiSimple: 'صراط الذين انعمت عليهم غير المغضوب عليهم ولا الضالين',
    pageNumber: 1,
    juzNumber: 1,
    audioUrl:
      'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3',
    timestamps: {
      timestampFrom: 33250,
    },
    translations: [
      {
        id: 903964,
        resourceId: 131,
        text: 'the Path of those You have blessed—not those You are displeased with, or those who are astray.<sup foot_note=76374>1</sup> ',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
];
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
  verseEl.value[verse].$el.scrollIntoView({ behavior: 'smooth', block: 'end' });
};

onMounted(async () => {
  await nextTick();
  scrollToVerse(route.query.verse - 1);
});
</script>

<template>
  <div class="my-6 flex items-start gap-10 px-4 sm:my-16">
    <LayoutSidebar
      class="sticky top-20 w-80"
      :class="{ visible: showSidebar }"
      @close="showSidebar = false"
      @verse="scrollToVerse"
    />
    <div class="flex-1">
      <div class="mb-16">
        <button
          type="button"
          class="mb-6 flex w-full items-center justify-center gap-1.5 text-base font-medium lg:hidden"
          @click="showSidebar = true"
        >
          Al-Fatihah
          <Icon name="flowbite:angle-down-outline" class="text-xl" />
        </button>
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
        <template v-if="activeTab === 1">
          <VerseCard
            ref="verseEl"
            v-for="verse in verseList"
            :key="verse.id"
            :data="verse"
          />
        </template>
        <div
          v-else
          class="mx-auto max-w-2xl text-center font-arabic text-4xl leading-loose"
          dir="rtl"
        >
          <VersePage v-for="verse in verseList" :key="verse.id" :data="verse" />
        </div>
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
    @apply mx-auto mb-10 flex w-fit justify-center rounded-md border border-light p-2.5 dark:border-dark-300 lg:mb-20;
  }

  &-item {
    @apply rounded-md px-10 py-2 transition-colors;

    &.active {
      @apply bg-primary text-white dark:bg-dark-300 dark:text-dark-100;
    }
  }
}
</style>
