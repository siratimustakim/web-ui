export const useSurahStore = defineStore('surahStore', {
  state: () => ({
    surah: null,
  }),
  actions: {
    playSurah(src, { timestampFrom }) {
      const seconds = Math.floor((timestampFrom / 1000) % 60);

      this.surah = {
        src,
        timestamps: seconds,
      };
    },
    closeSurahPlayer() {
      this.surah = null;
    },
  },
});
