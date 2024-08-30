<template>
  <div class="loader">
    <div class="loader-icon"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  @apply flex items-center justify-center;

  &-icon {
    @apply h-14 w-14 animate-spin rounded-full border-2 border-b-light border-l-light border-r-light border-t-primary dark:border-b-dark-800 dark:border-l-dark-800 dark:border-r-dark-800;
  }
}
</style>
