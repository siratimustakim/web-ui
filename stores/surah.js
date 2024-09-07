export const useSurahStore = defineStore('surahStore', {
  state: () => ({
    surahMedia: null,
    surahList: null,
    verse: null,
    verseList: [],
    searchChapterList: [],
    searchVerseList: [],
    versePagination: 1,
    isVerseLoader: false,
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
    getSurah(id) {
      const route = useRoute();

      return (
        this.surahList &&
        this.surahList.find(
          (surah) => surah.id === Number(id || route.params.id)
        )
      );
    },
    resetVerseData() {
      this.versePagination = 1;
      this.verseList = [];
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

      try {
        this.isVerseLoader = true;

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
      } catch (error) {
        console.error(error);
      } finally {
        this.isVerseLoader = false;
      }
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
      } else {
        this.searchChapterList = [];
        this.searchVerseList = [];
      }
    },
    async getVerse() {
      const route = useRoute();

      const {
        data: { value },
      } = await useFetchApi(
        `/Verse/GetVerseById?chapter_id=${route.params.id}&verse_id=${route.params.verse}`
      );

      this.verse = value;
    },
  },
});
