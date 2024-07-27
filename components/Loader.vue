<template>
  <div class="loader">
    <div class="loader-icon"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  @apply flex items-center justify-center;

  &-icon {
    @apply w-14 h-14 border-2 border-l-light border-r-light border-t-primary border-b-light animate-spin rounded-full;
  }
}
</style>
