<script setup>
const props = defineProps(['data', 'surahName', 'noMaxWidth']);

const route = useRoute();

const verseExportModal = ref(false);
const verseActionList = ref([
  {
    id: 1,
    tooltip: 'Linki Kopyala',
    icon: 'weui:link-filled',
    data: `${window?.location.origin}${window?.location.pathname}${route.params.verse ? '' : `/${props.data.verseNumber}`}`,
    isCopied: false,
  },
  {
    id: 2,
    tooltip: 'Ayeti ve Meali Kopyala',
    icon: 'mingcute:copy-line',
    data: `
${props.data.text}

${props.data.translations[0]?.text}
- (${props.data.translations[0]?.resourceName}, ${props.surahName} ${props.data.verseNumber}. Ayet)`,
    isCopied: false,
  },
  {
    id: 3,
    tooltip: 'Meali Kopyala',
    icon: 'ph:book-open-text',
    data: `
${props.data.translations[0]?.text}
- (${props.data.translations[0]?.resourceName}, ${props.surahName} ${props.data.verseNumber}. Ayet)`,
    isCopied: false,
  },
]);

const handleCopy = async (data, i) => {
  verseActionList.value[i].isCopied = true;

  try {
    await navigator.clipboard.writeText(data);
  } catch (err) {
    console.error(err);
  } finally {
    setTimeout(() => {
      verseActionList.value[i].isCopied = false;
    }, 1500);
  }
};
</script>

<template>
  <div class="verse-card">
    <div class="verse-card-inner" :class="{ 'max-w-6xl': !noMaxWidth }">
      <div class="verse-card-action">
        <button
          v-for="(action, i) in verseActionList"
          :key="action.id"
          type="button"
          class="verse-card-button"
          :class="{ '!border-primary text-primary': action.isCopied }"
          :title="action.tooltip"
          @click="handleCopy(action.data, i)"
        >
          <Icon :name="action.isCopied ? 'ci:check-big' : action.icon" />
        </button>
        <button
          type="button"
          class="verse-card-button"
          @click="verseExportModal = true"
        >
          <Icon name="hugeicons:image-download" />
        </button>
      </div>
      <div class="w-full flex-1">
        <h1 class="verse-card-title mb-10" dir="rtl">
          {{ data.text }}
          <span class="verse-card-number">
            {{ data.arabicVerseNumber }}
          </span>
        </h1>
        <div class="verse-card-key">
          {{ data.verseKey }}
        </div>
        <div v-if="data.translations.length" class="mt-4 flex flex-col gap-5">
          <div
            v-for="translation in data.translations"
            :key="translation.id"
            class="flex flex-col gap-1"
          >
            <p class="font-medium sm:text-lg">{{ translation.text }}</p>
            <span class="text-dark-100"> - {{ translation.resourceName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal v-model="verseExportModal" width="max-w-7xl">
    <VerseExport :data="data" :surahName="surahName" />
  </Modal>
</template>

<style lang="scss" scoped>
.verse-card {
  @apply relative;

  &:not(:last-child) {
    @apply mb-8 pb-8 sm:mb-20 sm:pb-20;

    &::after {
      @apply absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-body via-light-200 to-body dark:from-dark dark:via-dark-800 dark:to-dark;
      content: '';
    }
  }

  &-inner {
    @apply mx-auto flex items-start gap-5 max-sm:flex-col-reverse sm:gap-20;
  }

  &-key {
    @apply w-fit rounded-full bg-primary px-3 py-1 text-white;
  }

  &-number {
    @apply mr-1.5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black text-2xl dark:border-white/70;
  }

  &-title {
    @apply font-arabic text-4xl leading-loose;
  }

  &-action {
    @apply flex items-center justify-center gap-2.5 sm:flex-col;
  }

  &-button {
    @apply flex h-9 w-9 items-center justify-center rounded-full border border-light text-lg transition-colors dark:border-dark-300 sm:h-12 sm:w-12 sm:text-2xl;

    &:hover {
      @apply border-primary text-primary;
    }
  }
}
</style>
