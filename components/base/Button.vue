<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  secondary: {
    type: Boolean,
  },
});
</script>

<template>
  <button
    :type="type"
    class="button"
    :class="{ 'button-secondary': secondary }"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply rounded-full bg-primary px-6 py-3 text-white transition-colors dark:bg-dark-800 dark:text-white/70 lg:px-10;

  &-secondary {
    @apply border border-primary bg-transparent text-primary dark:border-dark-800 dark:bg-transparent dark:text-white/70;
  }

  &:hover {
    @apply bg-primary/95 text-white dark:bg-dark-800 dark:text-white/70;
  }
}
</style>
