<script setup>
const popularTagList = [
  {
    id: 1,
    name: 'Al Mulk',
  },
  {
    id: 2,
    name: 'Yaseen',
  },
  {
    id: 3,
    name: 'Al Kahf',
  },
  {
    id: 4,
    name: "Al Waqi'ah",
  },
];
</script>

<template>
  <div class="search-overlay">
    <div class="search-wrapper">
      <div class="search mb-4">
        <Icon name="ep:search" class="text-2xl sm:text-3xl" />
        <input type="text" placeholder="Ara" class="search-input" />
      </div>
      <div class="search-tag">
        <button
          v-for="tag in popularTagList"
          :key="tag.id"
          type="button"
          class="search-tag-item"
        >
          {{ tag.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply flex items-center gap-5 rounded-lg bg-white pl-5 dark:bg-dark sm:gap-8 sm:pl-8;

  &-overlay {
    @apply bg-primary py-16 dark:bg-dark-500 sm:py-44 xl:rounded-lg;
  }

  &-wrapper {
    @apply mx-auto max-w-5xl px-4;
  }

  &-input {
    @apply h-full w-full flex-1 rounded-lg bg-transparent py-5 pr-5 text-base sm:py-8 sm:pr-8 sm:text-xl;
  }

  &-tag {
    @apply flex flex-wrap gap-2.5;

    &-item {
      @apply rounded-lg bg-white/10 px-5 py-2 text-white transition-colors dark:text-dark-100;

      &:hover {
        @apply bg-white/20;
      }
    }
  }
}
</style>
