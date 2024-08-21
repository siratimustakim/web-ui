<script setup>
const route = useRoute();

const isSticky = ref(false);
const searchModal = ref(false);

const isHomePage = computed(() => route.path === '/');

const handleScroll = () => {
  isSticky.value = window.scrollY > 50 ? true : false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="header"
    :class="[
      { 'sticky-top': isSticky },
      isHomePage
        ? 'border-transparent'
        : 'border-b border-b-light dark:border-b-dark-300',
    ]"
  >
    <div class="container flex items-center gap-4">
      <LayoutLogo class="mr-auto" />
      <button
        v-if="!isHomePage"
        type="button"
        class="text-2xl leading-normal"
        @click="searchModal = true"
      >
        <Icon name="iconamoon:search-light" />
      </button>
      <ThemeMode />
    </div>
  </header>
  <Modal v-model="searchModal" :noContentBg="true">
    <button
      v-if="!noContentBg"
      type="button"
      class="mb-4 w-full pr-2.5 text-end text-3xl text-white"
      @click="searchModal = false"
    >
      <Icon name="icon-park-outline:close" />
    </button>
    <Search @close="searchModal = false" />
  </Modal>
</template>

<style lang="scss" scoped>
.header {
  @apply sticky top-0 z-20 border-b bg-body py-6 transition-all dark:bg-dark sm:z-40;

  &.sticky-top {
    @apply border-b-light py-2.5 dark:border-b-dark-300;
  }
}
</style>
