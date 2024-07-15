<script setup>
const { closeSurahPlayer } = useSurahStore();
const { surah } = storeToRefs(useSurahStore());
</script>

<template>
  <div class="surah-player">
    <audio
      :src="`${surah.src}#t=${surah.timestamps}`"
      controls
      autoplay
    ></audio>
    <button
      type="button"
      class="text-xl flex items-center justify-center"
      @click="closeSurahPlayer"
    >
      <Icon name="icon-park-outline:close" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.surah-player {
  @apply flex gap-4 items-center fixed bottom-0 left-1/2 -translate-x-1/2 bg-body rounded-tl-xl rounded-tr-xl w-full max-w-5xl p-4 z-50 shadow-xl border-t border-light dark:bg-dark-300 dark:border-dark-300 border-l border-r;

  audio {
    @apply flex-1 w-full dark:invert;

    &::-webkit-media-controls-play-button,
    &::-webkit-media-controls-panel {
      @apply bg-body dark:bg-[#d2d1cc];
    }
  }
}
</style>
