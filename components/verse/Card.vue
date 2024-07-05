<script setup>
defineProps(['data']);
</script>

<template>
  <div class="verse-card">
    <h1 class="verse-card-title mb-6">{{ data.textImlaeiSimple }}</h1>
    <div class="flex flex-col gap-5">
      <div
        v-for="translation in data.translations"
        :key="translation.id"
        class="flex flex-col gap-1"
      >
        <p class="text-base font-medium">{{ translation.text }}</p>
        <span class="text-dark-100"> - {{ translation.resourceName }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.verse-card {
  @apply relative text-center;

  &:not(:last-child) {
    @apply mb-10 pb-10;

    &::after {
      @apply absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-body via-light to-body dark:from-dark dark:via-dark-300 dark:to-dark;
      content: '';
    }
  }

  &-title {
    @apply font-arabic text-4xl;
  }
}
</style>
