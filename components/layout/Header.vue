<script setup>
const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 50 ? true : false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="header" :class="{ 'sticky-top': isSticky }">
    <div class="container flex items-center gap-4">
      <LayoutLogo class="mr-auto" />
      <button type="button" class="text-xl leading-normal">
        <Icon name="oui:search" />
      </button>
      <ThemeMode />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply sticky top-0 z-20 border-b bg-body py-6 transition-all dark:bg-dark sm:z-40;

  &.sticky-top {
    @apply border-b-light py-2.5 dark:border-b-dark-300;
  }
}
</style>
