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
  @apply cursor-pointer whitespace-pre-wrap rounded p-1.5 font-arabic;

  &:hover {
    @apply bg-light dark:bg-dark-300;
  }

  &-number {
    @apply inline-flex h-12 w-12 items-center justify-center rounded-full border border-black text-2xl whitespace-normal dark:border-white/70;
  }
}
</style>
