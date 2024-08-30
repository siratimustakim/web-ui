<script setup>
defineProps(['data']);
</script>

<template>
  <span class="verse">
    {{ data.text }}
    <span class="verse-number">
      {{ data.arabicVerseNumber }}
    </span>
  </span>
</template>

<style lang="scss" scoped>
.verse {
  @apply cursor-pointer whitespace-pre-wrap rounded p-1.5 font-arabic text-4xl max-sm:text-2xl;
  line-height: 2.5 !important;

  &:hover {
    @apply bg-light dark:bg-dark-800;
  }

  &-number {
    @apply inline-flex h-12 w-12 items-center justify-center whitespace-normal rounded-full border border-black text-xl dark:border-white/70 sm:text-2xl;
  }
}
</style>
