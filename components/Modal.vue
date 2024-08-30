<script setup>
defineProps(['title', 'noContentBg', 'noHeader', 'width']);
const model = defineModel();

const modalTopValue = ref(0);

const closeModal = () => {
  model.value = false;
};

const handleScroll = () => {
  if (!model.value) {
    modalTopValue.value = window.scrollY;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <teleport to="body">
    <Transition name="fade">
      <div v-if="model" class="modal" :style="{ top: `${modalTopValue}px` }">
        <div
          class="w-full"
          :class="[
            {
              'rounded-lg bg-white p-6 dark:border dark:border-dark-800 dark:bg-dark-300 sm:p-10':
                !noContentBg,
            },
            width ? width : 'max-w-5xl',
          ]"
        >
          <div v-if="!noHeader" class="modal-header mb-6 sm:mb-10">
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
          <slot></slot>
        </div>
        <div class="modal-overlay" @click="closeModal"></div>
      </div>
    </Transition>
  </teleport>
</template>

<style lang="scss" scoped>
.modal {
  @apply absolute left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center p-4;

  &-overlay {
    @apply fixed left-0 top-0 -z-10 h-full w-full bg-dark/85;
  }

  &-header {
    @apply flex items-center justify-between gap-4;
  }

  &-title {
    @apply text-lg font-medium;
  }
}
</style>
