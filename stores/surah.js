export const useSurahStore = defineStore('surahStore', {
  state: () => ({
    surahMedia: null,
    surahList: null,
    verseList: [],
    versePagination: 1,
  }),
  actions: {
    playSurah(id) {
      const src =
        this.surahList &&
        this.surahList.find((surah) => surah.id === Number(id)).audioUrl;

      this.surahMedia = {
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
      const {
        data: {
          value: {
            verses,
            pagination: { nextPage },
          },
        },
      } = await useFetchApi(
        `/Verse/ChapterId/${id}?page_number=${this.versePagination}`
      );
      this.verseList = [...this.verseList, ...verses];
      this.versePagination = nextPage;
    },
    resetVerseData() {
      this.versePagination = 1;
      this.verseList = [];
    },
  },
});
