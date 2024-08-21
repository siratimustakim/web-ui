<script setup>
defineProps(['noContentBg']);
const model = defineModel();

const closeModal = () => {
  model.value = false;
};
</script>

<template>
  <teleport to="body">
    <div v-if="model" class="modal">
      <div
        class="w-full max-w-5xl"
        :class="{ 'rounded-lg bg-white p-10': !noContentBg }"
      >
        <button
          v-if="!noContentBg"
          type="button"
          class="mb-10 ml-auto text-2xl"
          @click="closeModal"
        >
          <Icon name="uiw:close" />
        </button>
        <slot></slot>
      </div>
      <div class="modal-overlay" @click="closeModal"></div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.modal {
  @apply fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center overflow-auto p-4;

  &-overlay {
    @apply fixed left-0 top-0 -z-10 h-full w-full bg-gray-900/80;
  }
}
</style>
