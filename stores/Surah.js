export const useSurahStore = defineStore('surahStore', {
  state: () => ({
    surah: null,
    surahList: null,
    verseList: null,
  }),
  actions: {
    playSurah(id) {
      const src =
        this.surahList &&
        this.surahList.find((surah) => surah.id === Number(id)).audioUrl;

      this.surah = {
        src,
        timestamps: 0,
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
