<template>
  <div class="hero">
    <div class="hero-inner">
      <Search />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @apply bg-primary px-4 py-16 dark:bg-dark-900 sm:py-44 xl:rounded-lg;

  &-inner {
    @apply mx-auto max-w-5xl;
  }
}
</style>
