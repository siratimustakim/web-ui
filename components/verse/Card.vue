<script setup>
const props = defineProps(['data', 'surahName']);

const verseActionList = ref([
  {
    id: 1,
    tooltip: 'Linki Kopyala',
    icon: 'weui:link-filled',
    data: `${window?.location.origin}${window?.location.pathname}?verse=${props.data.verseNumber}`,
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
    <div class="verse-card-inner">
      <div class="verse-card-action">
        <button
          v-for="(action, i) in verseActionList"
          :key="action.id"
          type="button"
          class="verse-card-button"
          :class="{ 'text-primary !border-primary': action.isCopied }"
          :title="action.tooltip"
          @click="handleCopy(action.data, i)"
        >
          <Icon :name="action.isCopied ? 'ci:check-big' : action.icon" />
        </button>
      </div>
      <div class="flex-1 w-full">
        <h1 class="verse-card-title mb-10" dir="rtl">
          {{ data.text }}
          <div class="verse-card-number">
            {{ data.arabicVerseNumber }}
          </div>
        </h1>
        <div class="verse-card-key">
          {{ data.verseKey }}
        </div>
        <div v-if="data.translations.length" class="flex flex-col gap-5 mt-4">
          <div
            v-for="translation in data.translations"
            :key="translation.id"
            class="flex flex-col gap-1"
          >
            <p class="sm:text-base font-medium">{{ translation.text }}</p>
            <span class="text-dark-100"> - {{ translation.resourceName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.verse-card {
  @apply relative;

  &:not(:last-child) {
    @apply sm:mb-20 mb-8 pb-8 sm:pb-20;

    &::after {
      @apply absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-body via-light-200 to-body dark:from-dark dark:via-dark-800 dark:to-dark;
      content: '';
    }
  }

  &-inner {
    @apply flex max-sm:flex-col-reverse items-start gap-5 sm:gap-20 max-w-6xl mx-auto;
  }

  &-key {
    @apply rounded-full px-3 w-fit text-white bg-primary py-1;
  }

  &-number {
    @apply w-9 h-9 sm:w-12 sm:h-12 inline-flex items-center justify-center border border-black rounded-full dark:border-white/70 mr-2.5 text-2xl;
  }

  &-title {
    @apply text-4xl leading-loose font-arabic;
  }

  &-action {
    @apply flex sm:flex-col items-center justify-center gap-2.5;
  }

  &-button {
    @apply transition-colors border border-light dark:border-dark-300 text-lg sm:text-2xl rounded-full w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center;

    &:hover {
      @apply text-primary border-primary;
    }
  }
}
</style>
