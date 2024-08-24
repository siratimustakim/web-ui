<script setup>
defineProps(['title', 'noContentBg', 'noHeader']);
const model = defineModel();

const closeModal = () => {
  model.value = false;
};
</script>

<template>
  <teleport to="body">
    <div v-if="model" class="modal">
      <div
        class="modal-inner"
        :class="{
          'rounded-lg bg-white p-6 dark:bg-dark sm:p-10': !noContentBg,
        }"
      >
        <div v-if="!noHeader" class="modal-header">
          <div v-if="title" class="modal-title">
            {{ title }}
          </div>
          <button
            type="button"
            class="ml-auto flex items-center text-2xl"
            @click="closeModal"
          >
            <Icon name="uiw:close" />
          </button>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
      <div class="modal-overlay" @click="closeModal"></div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.modal {
  @apply fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center p-4;

  &-overlay {
    @apply fixed left-0 top-0 -z-10 h-full w-full bg-gray-900/85;
  }

  &-inner {
    @apply flex max-h-full w-full max-w-5xl flex-col gap-5 sm:gap-10;
  }

  &-header {
    @apply flex items-center justify-between gap-4;
  }

  &-title {
    @apply text-lg font-medium;
  }

  &-content {
    @apply flex-1 overflow-auto;

    &::-webkit-scrollbar {
      @apply w-6 rounded-full bg-transparent;

      &-thumb {
        @apply rounded-full border-[0.5rem] border-solid border-white bg-gray-300 dark:border-dark dark:bg-dark-100;
      }
    }
  }
}
</style>
