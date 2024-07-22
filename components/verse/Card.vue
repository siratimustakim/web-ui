<script setup>
const props = defineProps(['data']);
const { playSurah } = useSurahStore();

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
          @click="playSurah(data.audioUrl, data.timestamps)"
        >
          <Icon name="bi:play" />
        </button>
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
        <h1 class="verse-card-title mb-8" dir="rtl">
          {{ data.text }}
        </h1>
        <div class="flex flex-col gap-5">
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
    @apply flex max-sm:flex-col-reverse items-start gap-5 sm:gap-10 max-w-2xl mx-auto;
  }

  &-title {
    @apply font-arabic text-4xl leading-loose;
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
