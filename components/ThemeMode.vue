<template>
  <button
    type="button"
    class="text-2xl"
    @click="
      $colorMode.preference =
        $colorMode.preference === 'dark' ? 'light' : 'dark'
    "
  >
    <Icon
      :name="
        $colorMode.preference === 'dark'
          ? 'iconamoon:mode-dark-light'
          : 'entypo:light-up'
      "
    />
  </button>
</template>
