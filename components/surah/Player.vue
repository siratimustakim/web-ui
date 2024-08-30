<script setup>
const { closeSurahPlayer } = useSurahStore();
const { surahMedia } = storeToRefs(useSurahStore());
</script>

<template>
  <div class="surah-player">
    <audio
      :src="`${surahMedia.src}#t=${surahMedia.timestamps}`"
      controls
      autoplay
    ></audio>
    <button
      type="button"
      class="flex items-center justify-center text-xl"
      @click="closeSurahPlayer"
    >
      <Icon name="icon-park-outline:close" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.surah-player {
  @apply fixed bottom-0 left-1/2 z-50 flex w-full max-w-5xl -translate-x-1/2 items-center gap-4 rounded-tl-xl rounded-tr-xl border-l border-r border-t border-light bg-body p-4 shadow-xl dark:border-dark-800 dark:bg-dark-800;

  audio {
    @apply w-full flex-1 dark:invert;

    &::-webkit-media-controls-play-button,
    &::-webkit-media-controls-panel {
      @apply bg-body dark:bg-[#bebcb4];
    }
  }
}
</style>
