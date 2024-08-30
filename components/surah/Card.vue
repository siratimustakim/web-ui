<script setup>
defineProps(['data']);
</script>

<template>
  <div class="surah-card">
    <div class="surah-card-order">
      {{ data.id }}
    </div>
    <div class="flex-1">
      <h3 class="mb-1 font-medium sm:text-base">{{ data.nameSimple }}</h3>
      <span class="text-gray-400">{{ data.versesCount }} Ayet</span>
    </div>
    <div class="surah-card-icon">
      <Icon name="uiw:right" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.surah-card {
  $self: &;
  @apply flex cursor-pointer items-center gap-4 rounded-lg border border-light p-4 transition-colors dark:border-dark-800;

  &-order {
    @apply flex h-14 w-14 items-center justify-center rounded-lg bg-light text-base transition-colors dark:bg-dark-800;
  }

  &-icon {
    @apply text-2xl text-primary opacity-0 transition-opacity;
  }

  &:hover {
    @apply border-primary;

    #{$self}-order {
      @apply bg-primary text-white;
    }

    #{$self}-icon {
      @apply opacity-100;
    }
  }
}
</style>
