<script setup>
defineProps(['data']);
</script>

<template>
  <span class="verse">
    {{ data.textUthmani }}
    <span class="verse-number">
      {{ data.verseNumber }}
    </span>
  </span>
</template>

<style lang="scss" scoped>
.verse {
  @apply cursor-pointer whitespace-pre-wrap rounded p-1.5;

  &:hover {
    @apply bg-light dark:bg-dark-300;
  }

  &-number {
    @apply inline-flex h-12 w-12 items-center justify-center rounded-full border border-light text-2xl dark:border-dark-300;
  }
}
</style>
