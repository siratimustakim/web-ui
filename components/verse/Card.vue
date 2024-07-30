<script setup>
const props = defineProps(['data']);

const isCopied = ref(false);

const copyLink = async () => {
  const route = window.location;

  isCopied.value = true;

  try {
    await navigator.clipboard.writeText(
      `${route.origin}${route.pathname}?verse=${props.data.verseNumber}`
    );
  } catch (err) {
    console.error(err);
  } finally {
    setTimeout(() => {
      isCopied.value = false;
    }, 1500);
  }
};
</script>

<template>
  <div class="verse-card">
    <div class="verse-card-inner">
      <div class="verse-card-action">
        <button
          type="button"
          class="verse-card-button"
          :class="{ 'text-primary !border-primary': isCopied }"
          @click="copyLink"
        >
          <Icon :name="isCopied ? 'ci:check-big' : 'weui:link-filled'" />
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
    @apply flex max-sm:flex-col-reverse items-start gap-5 sm:gap-20 max-w-2xl mx-auto;
  }

  &-key {
    @apply rounded-full px-3 w-fit text-white bg-primary py-1;
  }

  &-number {
    @apply w-9 h-9 sm:w-12 sm:h-12 inline-flex items-center justify-center border border-black rounded-full mr-2.5 text-2xl;
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
