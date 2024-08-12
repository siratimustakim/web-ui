export const useSurahStore = defineStore('surahStore', {
  state: () => ({
    surahMedia: null,
    surahList: null,
    verseList: [],
    searchChapterList: [],
    searchVerseList: [],
    versePagination: 1,
  }),
  actions: {
    playSurah() {
      this.surahMedia = {
        src: this.getSurah().audioUrl,
        timestamps: 0,
      };
    },
    closeSurahPlayer() {
      this.surahMedia = null;
    },
    getSurah() {
      const route = useRoute();

      return (
        this.surahList &&
        this.surahList.find((surah) => surah.id === Number(route.params.id))
      );
    },
    resetVerseData() {
      this.versePagination = 1;
      this.verseList = [];
    },
    handleVersePagination() {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight === scrolledTo;

      if (isReachBottom && this.versePagination) {
        this.getVerseList();
      }
    },
    async getSurahList() {
      if (!this.surahList) {
        const {
          data: { value },
        } = await useFetchApi('/Chapter/List');

        this.surahList = value;
      }
    },
    async getVerseList() {
      const route = useRoute();

      const {
        data: {
          value: {
            verses,
            pagination: { nextPage },
          },
        },
      } = await useFetchApi(
        `/Verse/ChapterId/${route.params.id}?page_number=${this.versePagination}`
      );

      this.verseList = [...this.verseList, ...verses];
      this.versePagination = nextPage;
    },
    async getSearchList(value) {
      if (value.toString().length > 1) {
        const {
          data: {
            value: { chapters, verses },
          },
        } = await useFetchApi(`/Search/Get?text=${value}`);

        this.searchChapterList = chapters;
        this.searchVerseList = verses;
      }
    },
  },
});
