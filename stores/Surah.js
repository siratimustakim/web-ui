export const useSurahStore = defineStore('surahStore', {
  state: () => ({
    surah: null,
    surahList: null,
    verseList: null,
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
    async getSurahList() {
      if (!this.surahList) {
        const {
          data: { value },
        } = await useFetchApi('/Chapter/List');
        this.surahList = value;
      }
    },
    async getVerseList(id) {
      this.verseList = null;
      const {
        data: { value },
      } = await useFetchApi(`/Verse/ChapterId/${id}`);
      this.verseList = value;
    },
  },
});
