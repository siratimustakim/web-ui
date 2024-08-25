<template>
  <div class="hero">
    <div class="hero-inner">
      <Search />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @apply dark:bg-dark-900 bg-primary py-16 sm:py-44 xl:rounded-lg;

  &-inner {
    @apply mx-auto max-w-5xl px-4;
  }
}
</style>
