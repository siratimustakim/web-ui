<template>
  <div class="hero">
    <div class="hero-inner">
      <Search />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @apply bg-primary py-16 dark:bg-dark-500 sm:py-44 xl:rounded-lg;

  &-inner {
    @apply mx-auto max-w-5xl px-4;
  }
}
</style>
