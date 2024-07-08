<script setup>
const router = useRouter();
const route = useRoute();

const verseList = [
  {
    id: 1,
    verseNumber: 1,
    verseKey: '1:1',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    chapterId: 1,
    textImlaeiSimple: 'بسم الله الرحمن الرحيم',
    pageNumber: 1,
    juzNumber: 1,
    words: [
      {
        id: 1,
        position: 1,
        audioUrl: 'wbw/001_001_001.mp3',
        verseKey: '1:1',
        verseId: 1,
        location: '1:1:1',
        textUthmani: 'بِسْمِ',
        codeV1: 'ﭑ',
        qpcUthmaniHafs: 'بِسۡمِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 9,
        text: 'ﭑ',
        translation: {
          text: 'In (the) name',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: "bis'mi",
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 2,
        position: 2,
        audioUrl: 'wbw/001_001_002.mp3',
        verseKey: '1:1',
        verseId: 1,
        location: '1:1:2',
        textUthmani: 'ٱللَّهِ',
        codeV1: 'ﭒ',
        qpcUthmaniHafs: 'ٱللَّهِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 9,
        text: 'ﭒ',
        translation: {
          text: '(of) Allah',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-lahi',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 3,
        position: 3,
        audioUrl: 'wbw/001_001_003.mp3',
        verseKey: '1:1',
        verseId: 1,
        location: '1:1:3',
        textUthmani: 'ٱلرَّحْمَـٰنِ',
        codeV1: 'ﭓ',
        qpcUthmaniHafs: 'ٱلرَّحۡمَٰنِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 9,
        text: 'ﭓ',
        translation: {
          text: 'the Most Gracious',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-raḥmāni',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 4,
        position: 4,
        audioUrl: 'wbw/001_001_004.mp3',
        verseKey: '1:1',
        verseId: 1,
        location: '1:1:4',
        textUthmani: 'ٱلرَّحِيمِ',
        codeV1: 'ﭔ',
        qpcUthmaniHafs: 'ٱلرَّحِيمِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 9,
        text: 'ﭔ',
        translation: {
          text: 'the Most Merciful',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-raḥīmi',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 5,
        position: 5,
        audioUrl: null,
        verseKey: '1:1',
        verseId: 1,
        location: '1:1:5',
        textUthmani: '١',
        codeV1: 'ﭕ',
        qpcUthmaniHafs: '١',
        charTypeName: 'end',
        pageNumber: 1,
        lineNumber: 9,
        text: 'ﭕ',
        translation: {
          text: '(1)',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: null,
          languageName: 'english',
          languageId: 38,
        },
      },
    ],
    timestamps: {
      timestampFrom: 0,
    },
    translations: [
      {
        id: 903958,
        resourceId: 131,
        text: 'In the Name of Allah—the Most Compassionate, Most Merciful.',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 2,
    verseNumber: 2,
    verseKey: '1:2',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
    chapterId: 1,
    textImlaeiSimple: 'الحمد لله رب العالمين',
    pageNumber: 1,
    juzNumber: 1,
    words: [
      {
        id: 1130,
        position: 1,
        audioUrl: 'wbw/001_002_001.mp3',
        verseKey: '1:2',
        verseId: 2,
        location: '1:2:1',
        textUthmani: 'ٱلْحَمْدُ',
        codeV1: 'ﭖ',
        qpcUthmaniHafs: 'ٱلۡحَمۡدُ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 10,
        text: 'ﭖ',
        translation: {
          text: 'All praises and thanks',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'al-ḥamdu',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 1131,
        position: 2,
        audioUrl: 'wbw/001_002_002.mp3',
        verseKey: '1:2',
        verseId: 2,
        location: '1:2:2',
        textUthmani: 'لِلَّهِ',
        codeV1: 'ﭗ',
        qpcUthmaniHafs: 'لِلَّهِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 10,
        text: 'ﭗ',
        translation: {
          text: '(be) to Allah',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'lillahi',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 1132,
        position: 3,
        audioUrl: 'wbw/001_002_003.mp3',
        verseKey: '1:2',
        verseId: 2,
        location: '1:2:3',
        textUthmani: 'رَبِّ',
        codeV1: 'ﭘ',
        qpcUthmaniHafs: 'رَبِّ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 10,
        text: 'ﭘ',
        translation: {
          text: 'the Lord',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'rabbi',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 1133,
        position: 4,
        audioUrl: 'wbw/001_002_004.mp3',
        verseKey: '1:2',
        verseId: 2,
        location: '1:2:4',
        textUthmani: 'ٱلْعَـٰلَمِينَ',
        codeV1: 'ﭙ',
        qpcUthmaniHafs: 'ٱلۡعَٰلَمِينَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 10,
        text: 'ﭙ',
        translation: {
          text: 'of the universe',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-ʿālamīna',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 1134,
        position: 5,
        audioUrl: null,
        verseKey: '1:2',
        verseId: 2,
        location: '1:2:5',
        textUthmani: '٢',
        codeV1: 'ﭚ',
        qpcUthmaniHafs: '٢',
        charTypeName: 'end',
        pageNumber: 1,
        lineNumber: 10,
        text: 'ﭚ',
        translation: {
          text: '(2)',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: null,
          languageName: 'english',
          languageId: 38,
        },
      },
    ],
    timestamps: {
      timestampFrom: 6090,
    },
    translations: [
      {
        id: 903959,
        resourceId: 131,
        text: 'All praise is for Allah—Lord of all worlds,',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 3,
    verseNumber: 3,
    verseKey: '1:3',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    chapterId: 1,
    textImlaeiSimple: 'الرحمن الرحيم',
    pageNumber: 1,
    juzNumber: 1,
    words: [
      {
        id: 2953,
        position: 1,
        audioUrl: 'wbw/001_003_001.mp3',
        verseKey: '1:3',
        verseId: 3,
        location: '1:3:1',
        textUthmani: 'ٱلرَّحْمَـٰنِ',
        codeV1: 'ﭛ',
        qpcUthmaniHafs: 'ٱلرَّحۡمَٰنِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 11,
        text: 'ﭛ',
        translation: {
          text: 'The Most Gracious',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'al-raḥmāni',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 2954,
        position: 2,
        audioUrl: 'wbw/001_003_002.mp3',
        verseKey: '1:3',
        verseId: 3,
        location: '1:3:2',
        textUthmani: 'ٱلرَّحِيمِ',
        codeV1: 'ﭜ',
        qpcUthmaniHafs: 'ٱلرَّحِيمِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 11,
        text: 'ﭜ',
        translation: {
          text: 'the Most Merciful',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-raḥīmi',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 2955,
        position: 3,
        audioUrl: null,
        verseKey: '1:3',
        verseId: 3,
        location: '1:3:3',
        textUthmani: '٣',
        codeV1: 'ﭝ',
        qpcUthmaniHafs: '٣',
        charTypeName: 'end',
        pageNumber: 1,
        lineNumber: 11,
        text: 'ﭝ',
        translation: {
          text: '(3)',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: null,
          languageName: 'english',
          languageId: 38,
        },
      },
    ],
    timestamps: {
      timestampFrom: 11680,
    },
    translations: [
      {
        id: 903960,
        resourceId: 131,
        text: 'the Most Compassionate, Most Merciful,',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 4,
    verseNumber: 4,
    verseKey: '1:4',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
    chapterId: 1,
    textImlaeiSimple: 'مالك يوم الدين',
    pageNumber: 1,
    juzNumber: 1,
    words: [
      {
        id: 3252,
        position: 1,
        audioUrl: 'wbw/001_004_001.mp3',
        verseKey: '1:4',
        verseId: 4,
        location: '1:4:1',
        textUthmani: 'مَـٰلِكِ',
        codeV1: 'ﭞ',
        qpcUthmaniHafs: 'مَٰلِكِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 11,
        text: 'ﭞ',
        translation: {
          text: '(The) Master',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'māliki',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 3253,
        position: 2,
        audioUrl: 'wbw/001_004_002.mp3',
        verseKey: '1:4',
        verseId: 4,
        location: '1:4:2',
        textUthmani: 'يَوْمِ',
        codeV1: 'ﭟ',
        qpcUthmaniHafs: 'يَوۡمِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 11,
        text: 'ﭟ',
        translation: {
          text: '(of the) Day',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'yawmi',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 3254,
        position: 3,
        audioUrl: 'wbw/001_004_003.mp3',
        verseKey: '1:4',
        verseId: 4,
        location: '1:4:3',
        textUthmani: 'ٱلدِّينِ',
        codeV1: 'ﭠ',
        qpcUthmaniHafs: 'ٱلدِّينِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 11,
        text: 'ﭠ',
        translation: {
          text: '(of the) Judgment',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-dīni',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 3255,
        position: 4,
        audioUrl: null,
        verseKey: '1:4',
        verseId: 4,
        location: '1:4:4',
        textUthmani: '٤',
        codeV1: 'ﭡ',
        qpcUthmaniHafs: '٤',
        charTypeName: 'end',
        pageNumber: 1,
        lineNumber: 11,
        text: 'ﭡ',
        translation: {
          text: '(4)',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: null,
          languageName: 'english',
          languageId: 38,
        },
      },
    ],
    timestamps: {
      timestampFrom: 16300,
    },
    translations: [
      {
        id: 903961,
        resourceId: 131,
        text: 'Master of the Day of Judgment.',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 5,
    verseNumber: 5,
    verseKey: '1:5',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    chapterId: 1,
    textImlaeiSimple: 'اياك نعبد واياك نستعين',
    pageNumber: 1,
    juzNumber: 1,
    words: [
      {
        id: 5334,
        position: 1,
        audioUrl: 'wbw/001_005_001.mp3',
        verseKey: '1:5',
        verseId: 5,
        location: '1:5:1',
        textUthmani: 'إِيَّاكَ',
        codeV1: 'ﭢ',
        qpcUthmaniHafs: 'إِيَّاكَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 12,
        text: 'ﭢ',
        translation: {
          text: 'You Alone',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'iyyāka',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 5335,
        position: 2,
        audioUrl: 'wbw/001_005_002.mp3',
        verseKey: '1:5',
        verseId: 5,
        location: '1:5:2',
        textUthmani: 'نَعْبُدُ',
        codeV1: 'ﭣ',
        qpcUthmaniHafs: 'نَعۡبُدُ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 12,
        text: 'ﭣ',
        translation: {
          text: 'we worship',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'naʿbudu',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 5336,
        position: 3,
        audioUrl: 'wbw/001_005_003.mp3',
        verseKey: '1:5',
        verseId: 5,
        location: '1:5:3',
        textUthmani: 'وَإِيَّاكَ',
        codeV1: 'ﭤ',
        qpcUthmaniHafs: 'وَإِيَّاكَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 12,
        text: 'ﭤ',
        translation: {
          text: 'and You Alone',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'wa-iyyāka',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 5337,
        position: 4,
        audioUrl: 'wbw/001_005_004.mp3',
        verseKey: '1:5',
        verseId: 5,
        location: '1:5:4',
        textUthmani: 'نَسْتَعِينُ',
        codeV1: 'ﭥ',
        qpcUthmaniHafs: 'نَسۡتَعِينُ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 12,
        text: 'ﭥ',
        translation: {
          text: 'we ask for help',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'nastaʿīnu',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 5338,
        position: 5,
        audioUrl: null,
        verseKey: '1:5',
        verseId: 5,
        location: '1:5:5',
        textUthmani: '٥',
        codeV1: 'ﭦ',
        qpcUthmaniHafs: '٥',
        charTypeName: 'end',
        pageNumber: 1,
        lineNumber: 12,
        text: 'ﭦ',
        translation: {
          text: '(5)',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: null,
          languageName: 'english',
          languageId: 38,
        },
      },
    ],
    timestamps: {
      timestampFrom: 20950,
    },
    translations: [
      {
        id: 903962,
        resourceId: 131,
        text: 'You ˹alone˺ we worship and You ˹alone˺ we ask for help.',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 6,
    verseNumber: 6,
    verseKey: '1:6',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
    chapterId: 1,
    textImlaeiSimple: 'اهدنا الصراط المستقيم',
    pageNumber: 1,
    juzNumber: 1,
    words: [
      {
        id: 6844,
        position: 1,
        audioUrl: 'wbw/001_006_001.mp3',
        verseKey: '1:6',
        verseId: 6,
        location: '1:6:1',
        textUthmani: 'ٱهْدِنَا',
        codeV1: 'ﭧ',
        qpcUthmaniHafs: 'ٱهۡدِنَا',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 12,
        text: 'ﭧ',
        translation: {
          text: 'Guide us',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: "ih'dinā",
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 6845,
        position: 2,
        audioUrl: 'wbw/001_006_002.mp3',
        verseKey: '1:6',
        verseId: 6,
        location: '1:6:2',
        textUthmani: 'ٱلصِّرَٰطَ',
        codeV1: 'ﭨ',
        qpcUthmaniHafs: 'ٱلصِّرَٰطَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 13,
        text: 'ﭨ',
        translation: {
          text: '(to) the path',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-ṣirāṭa',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 6846,
        position: 3,
        audioUrl: 'wbw/001_006_003.mp3',
        verseKey: '1:6',
        verseId: 6,
        location: '1:6:3',
        textUthmani: 'ٱلْمُسْتَقِيمَ',
        codeV1: 'ﭩ',
        qpcUthmaniHafs: 'ٱلۡمُسۡتَقِيمَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 13,
        text: 'ﭩ',
        translation: {
          text: 'the straight',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: "l-mus'taqīma",
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 6847,
        position: 4,
        audioUrl: null,
        verseKey: '1:6',
        verseId: 6,
        location: '1:6:4',
        textUthmani: '٦',
        codeV1: 'ﭪ',
        qpcUthmaniHafs: '٦',
        charTypeName: 'end',
        pageNumber: 1,
        lineNumber: 13,
        text: 'ﭪ',
        translation: {
          text: '(6)',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: null,
          languageName: 'english',
          languageId: 38,
        },
      },
    ],
    timestamps: {
      timestampFrom: 27660,
    },
    translations: [
      {
        id: 903963,
        resourceId: 131,
        text: 'Guide us along the Straight Path,',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
  {
    id: 7,
    verseNumber: 7,
    verseKey: '1:7',
    hizbNumber: 1,
    rubElHizbNumber: 1,
    rukuNumber: 1,
    manzilNumber: 1,
    sajdahNumber: null,
    textUthmani:
      'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
    chapterId: 1,
    textImlaeiSimple: 'صراط الذين انعمت عليهم غير المغضوب عليهم ولا الضالين',
    pageNumber: 1,
    juzNumber: 1,
    words: [
      {
        id: 8411,
        position: 1,
        audioUrl: 'wbw/001_007_001.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:1',
        textUthmani: 'صِرَٰطَ',
        codeV1: 'ﭫ',
        qpcUthmaniHafs: 'صِرَٰطَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 13,
        text: 'ﭫ',
        translation: {
          text: '(The) path',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'ṣirāṭa',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8412,
        position: 2,
        audioUrl: 'wbw/001_007_002.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:2',
        textUthmani: 'ٱلَّذِينَ',
        codeV1: 'ﭬ',
        qpcUthmaniHafs: 'ٱلَّذِينَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 13,
        text: 'ﭬ',
        translation: {
          text: '(of) those',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'alladhīna',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8413,
        position: 3,
        audioUrl: 'wbw/001_007_003.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:3',
        textUthmani: 'أَنْعَمْتَ',
        codeV1: 'ﭭ',
        qpcUthmaniHafs: 'أَنۡعَمۡتَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 13,
        text: 'ﭭ',
        translation: {
          text: 'You have bestowed (Your) Favors',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'anʿamta',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8414,
        position: 4,
        audioUrl: 'wbw/001_007_004.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:4',
        textUthmani: 'عَلَيْهِمْ',
        codeV1: 'ﭮ',
        qpcUthmaniHafs: 'عَلَيۡهِمۡ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 14,
        text: 'ﭮ',
        translation: {
          text: 'on them',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'ʿalayhim',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8415,
        position: 5,
        audioUrl: 'wbw/001_007_005.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:5',
        textUthmani: 'غَيْرِ',
        codeV1: 'ﭯ',
        qpcUthmaniHafs: 'غَيۡرِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 14,
        text: 'ﭯ',
        translation: {
          text: 'not (of)',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'ghayri',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8416,
        position: 6,
        audioUrl: 'wbw/001_007_006.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:6',
        textUthmani: 'ٱلْمَغْضُوبِ',
        codeV1: 'ﭰ',
        qpcUthmaniHafs: 'ٱلۡمَغۡضُوبِ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 14,
        text: 'ﭰ',
        translation: {
          text: 'those who earned (Your) wrath',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-maghḍūbi',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8417,
        position: 7,
        audioUrl: 'wbw/001_007_007.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:7',
        textUthmani: 'عَلَيْهِمْ',
        codeV1: 'ﭱ',
        qpcUthmaniHafs: 'عَلَيۡهِمۡ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 14,
        text: 'ﭱ',
        translation: {
          text: 'on themselves',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'ʿalayhim',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8418,
        position: 8,
        audioUrl: 'wbw/001_007_008.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:8',
        textUthmani: 'وَلَا',
        codeV1: 'ﭲ',
        qpcUthmaniHafs: 'وَلَا',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 15,
        text: 'ﭲ',
        translation: {
          text: 'and not',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'walā',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8419,
        position: 9,
        audioUrl: 'wbw/001_007_009.mp3',
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:9',
        textUthmani: 'ٱلضَّآلِّينَ',
        codeV1: 'ﭳ',
        qpcUthmaniHafs: 'ٱلضَّآلِّينَ',
        charTypeName: 'word',
        pageNumber: 1,
        lineNumber: 15,
        text: 'ﭳ',
        translation: {
          text: '(of) those who go astray',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: 'l-ḍālīna',
          languageName: 'english',
          languageId: 38,
        },
      },
      {
        id: 8420,
        position: 10,
        audioUrl: null,
        verseKey: '1:7',
        verseId: 7,
        location: '1:7:10',
        textUthmani: '٧',
        codeV1: 'ﭴ',
        qpcUthmaniHafs: '٧',
        charTypeName: 'end',
        pageNumber: 1,
        lineNumber: 15,
        text: 'ﭴ',
        translation: {
          text: '(7)',
          languageName: 'english',
          languageId: 38,
        },
        transliteration: {
          text: null,
          languageName: 'english',
          languageId: 38,
        },
      },
    ],
    timestamps: {
      timestampFrom: 33250,
    },
    translations: [
      {
        id: 903964,
        resourceId: 131,
        text: 'the Path of those You have blessed—not those You are displeased with, or those who are astray.<sup foot_note=76374>1</sup> ',
        resourceName: 'Dr. Mustafa Khattab, The Clear Quran',
        languageId: 38,
      },
    ],
  },
];
const tabList = ref([
  {
    id: 1,
    name: 'Meal',
    value: 1,
  },
  {
    id: 2,
    name: 'Okuma',
    value: 2,
  },
]);
const activeTab = ref(1);
const showSidebar = ref(false);
const verseEl = ref([]);

const handleSurahDirection = (direction) => {
  const currentSurahId = Number(route.params.id);

  router.push(
    `/${direction === 'next' ? currentSurahId + 1 : currentSurahId - 1}?verse=1`
  );
};

const scrollToVerse = (verse) => {
  verseEl.value[verse].$el.scrollIntoView({ behavior: 'smooth', block: 'end' });
};
</script>

<template>
  <div class="my-6 flex items-start gap-10 px-4 sm:my-16">
    <LayoutSidebar
      class="sticky top-20 w-80"
      :class="{ visible: showSidebar }"
      @close="showSidebar = false"
      @verse="scrollToVerse"
    />
    <div class="flex-1">
      <div class="mb-16">
        <button
          type="button"
          class="mb-6 flex w-full items-center justify-center gap-1.5 text-base font-medium lg:hidden"
          @click="showSidebar = true"
        >
          Al-Fatihah
          <Icon name="flowbite:angle-down-outline" class="text-xl" />
        </button>
        <div class="tab-title">
          <button
            v-for="tab in tabList"
            :key="tab.id"
            type="button"
            class="tab-item"
            :class="{ active: activeTab === tab.value }"
            @click="activeTab = tab.value"
          >
            {{ tab.name }}
          </button>
        </div>
        <template v-if="activeTab === 1">
          <VerseCard
            ref="verseEl"
            v-for="verse in verseList"
            :key="verse.id"
            :data="verse"
          />
        </template>
        <div
          v-else
          class="mx-auto max-w-2xl text-center font-arabic text-4xl leading-loose"
          dir="rtl"
        >
          <VersePage v-for="verse in verseList" :key="verse.id" :data="verse" />
        </div>
      </div>
      <div class="flex justify-center gap-2 lg:gap-4">
        <BaseButton
          v-if="$route.params.id > 1"
          secondary
          @click="handleSurahDirection"
        >
          Önceki Sure
        </BaseButton>
        <BaseButton
          v-if="$route.params.id != 114"
          @click="handleSurahDirection('next')"
        >
          Sonraki Sure
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  &-title {
    @apply mx-auto mb-10 flex w-fit justify-center rounded-md border border-light p-2.5 dark:border-dark-300 lg:mb-20;
  }

  &-item {
    @apply rounded-md px-10 py-2 transition-colors;

    &.active {
      @apply bg-primary text-white dark:bg-dark-300 dark:text-dark-100;
    }
  }
}
</style>
