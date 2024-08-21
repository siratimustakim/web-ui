<template>
  <button
    type="button"
    class="flex items-center text-2xl leading-normal"
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
