<script setup>
const emit = defineEmits(['close']);

const route = useRoute();

const surahList = [
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Fatihah',
    versesCount: 7,
    translatedName: 'The Opener',
    slug: 'al-fatihah',
    id: 1,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Baqarah',
    versesCount: 286,
    translatedName: 'The Cow',
    slug: 'al-baqarah',
    id: 2,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: "Ali 'Imran",
    versesCount: 200,
    translatedName: 'Family of Imran',
    slug: 'ali-imran',
    id: 3,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'An-Nisa',
    versesCount: 176,
    translatedName: 'The Women',
    slug: 'an-nisa',
    id: 4,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: "Al-Ma'idah",
    versesCount: 120,
    translatedName: 'The Table Spread',
    slug: 'al-maidah',
    id: 5,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-An'am",
    versesCount: 165,
    translatedName: 'The Cattle',
    slug: 'al-anam',
    id: 6,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-A'raf",
    versesCount: 206,
    translatedName: 'The Heights',
    slug: 'al-araf',
    id: 7,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Anfal',
    versesCount: 75,
    translatedName: 'The Spoils of War',
    slug: 'al-anfal',
    id: 8,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'At-Tawbah',
    versesCount: 129,
    translatedName: 'The Repentance',
    slug: 'at-tawbah',
    id: 9,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Yunus',
    versesCount: 109,
    translatedName: 'Jonah',
    slug: 'yunus',
    id: 10,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Hud',
    versesCount: 123,
    translatedName: 'Hud',
    slug: 'hud',
    id: 11,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Yusuf',
    versesCount: 111,
    translatedName: 'Joseph',
    slug: 'yusuf',
    id: 12,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: "Ar-Ra'd",
    versesCount: 43,
    translatedName: 'The Thunder',
    slug: 'ar-rad',
    id: 13,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ibrahim',
    versesCount: 52,
    translatedName: 'Abraham',
    slug: 'ibrahim',
    id: 14,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Hijr',
    versesCount: 99,
    translatedName: 'The Rocky Tract',
    slug: 'al-hijr',
    id: 15,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'An-Nahl',
    versesCount: 128,
    translatedName: 'The Bee',
    slug: 'an-nahl',
    id: 16,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Isra',
    versesCount: 111,
    translatedName: 'The Night Journey',
    slug: 'al-isra',
    id: 17,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Kahf',
    versesCount: 110,
    translatedName: 'The Cave',
    slug: 'al-kahf',
    id: 18,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Maryam',
    versesCount: 98,
    translatedName: 'Mary',
    slug: 'maryam',
    id: 19,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Taha',
    versesCount: 135,
    translatedName: 'Ta-Ha',
    slug: 'taha',
    id: 20,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Anbya',
    versesCount: 112,
    translatedName: 'The Prophets',
    slug: 'al-anbya',
    id: 21,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Hajj',
    versesCount: 78,
    translatedName: 'The Pilgrimage',
    slug: 'al-hajj',
    id: 22,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-Mu'minun",
    versesCount: 118,
    translatedName: 'The Believers',
    slug: 'al-muminun',
    id: 23,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'An-Nur',
    versesCount: 64,
    translatedName: 'The Light',
    slug: 'an-nur',
    id: 24,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Furqan',
    versesCount: 77,
    translatedName: 'The Criterion',
    slug: 'al-furqan',
    id: 25,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Ash-Shu'ara",
    versesCount: 227,
    translatedName: 'The Poets',
    slug: 'ash-shuara',
    id: 26,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'An-Naml',
    versesCount: 93,
    translatedName: 'The Ant',
    slug: 'an-naml',
    id: 27,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Qasas',
    versesCount: 88,
    translatedName: 'The Stories',
    slug: 'al-qasas',
    id: 28,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-'Ankabut",
    versesCount: 69,
    translatedName: 'The Spider',
    slug: 'al-ankabut',
    id: 29,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ar-Rum',
    versesCount: 60,
    translatedName: 'The Romans',
    slug: 'ar-rum',
    id: 30,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Luqman',
    versesCount: 34,
    translatedName: 'Luqman',
    slug: 'luqman',
    id: 31,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'As-Sajdah',
    versesCount: 30,
    translatedName: 'The Prostration',
    slug: 'as-sajdah',
    id: 32,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Ahzab',
    versesCount: 73,
    translatedName: 'The Combined Forces',
    slug: 'al-ahzab',
    id: 33,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Saba',
    versesCount: 54,
    translatedName: 'Sheba',
    slug: 'saba',
    id: 34,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Fatir',
    versesCount: 45,
    translatedName: 'Originator',
    slug: 'fatir',
    id: 35,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ya-Sin',
    versesCount: 83,
    translatedName: 'Ya Sin',
    slug: 'ya-sin',
    id: 36,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'As-Saffat',
    versesCount: 182,
    translatedName: 'Those who set the Ranks',
    slug: 'as-saffat',
    id: 37,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Sad',
    versesCount: 88,
    translatedName: 'The Letter "Saad"',
    slug: 'sad',
    id: 38,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Az-Zumar',
    versesCount: 75,
    translatedName: 'The Troops',
    slug: 'az-zumar',
    id: 39,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ghafir',
    versesCount: 85,
    translatedName: 'The Forgiver',
    slug: 'ghafir',
    id: 40,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Fussilat',
    versesCount: 54,
    translatedName: 'Explained in Detail',
    slug: 'fussilat',
    id: 41,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ash-Shuraa',
    versesCount: 53,
    translatedName: 'The Consultation',
    slug: 'ash-shuraa',
    id: 42,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Az-Zukhruf',
    versesCount: 89,
    translatedName: 'The Ornaments of Gold',
    slug: 'az-zukhruf',
    id: 43,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ad-Dukhan',
    versesCount: 59,
    translatedName: 'The Smoke',
    slug: 'ad-dukhan',
    id: 44,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Jathiyah',
    versesCount: 37,
    translatedName: 'The Crouching',
    slug: 'al-jathiyah',
    id: 45,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Ahqaf',
    versesCount: 35,
    translatedName: 'The Wind-Curved Sandhills',
    slug: 'al-ahqaf',
    id: 46,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Muhammad',
    versesCount: 38,
    translatedName: 'Muhammad',
    slug: 'muhammad',
    id: 47,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Fath',
    versesCount: 29,
    translatedName: 'The Victory',
    slug: 'al-fath',
    id: 48,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Hujurat',
    versesCount: 18,
    translatedName: 'The Rooms',
    slug: 'al-hujurat',
    id: 49,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Qaf',
    versesCount: 45,
    translatedName: 'The Letter "Qaf"',
    slug: 'qaf',
    id: 50,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Adh-Dhariyat',
    versesCount: 60,
    translatedName: 'The Winnowing Winds',
    slug: 'adh-dhariyat',
    id: 51,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'At-Tur',
    versesCount: 49,
    translatedName: 'The Mount',
    slug: 'at-tur',
    id: 52,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'An-Najm',
    versesCount: 62,
    translatedName: 'The Star',
    slug: 'an-najm',
    id: 53,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Qamar',
    versesCount: 55,
    translatedName: 'The Moon',
    slug: 'al-qamar',
    id: 54,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Ar-Rahman',
    versesCount: 78,
    translatedName: 'The Beneficent',
    slug: 'ar-rahman',
    id: 55,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-Waqi'ah",
    versesCount: 96,
    translatedName: 'The Inevitable',
    slug: 'al-waqiah',
    id: 56,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Hadid',
    versesCount: 29,
    translatedName: 'The Iron',
    slug: 'al-hadid',
    id: 57,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Mujadila',
    versesCount: 22,
    translatedName: 'The Pleading Woman',
    slug: 'al-mujadila',
    id: 58,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Hashr',
    versesCount: 24,
    translatedName: 'The Exile',
    slug: 'al-hashr',
    id: 59,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Mumtahanah',
    versesCount: 13,
    translatedName: 'She that is to be examined',
    slug: 'al-mumtahanah',
    id: 60,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'As-Saf',
    versesCount: 14,
    translatedName: 'The Ranks',
    slug: 'as-saf',
    id: 61,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: "Al-Jumu'ah",
    versesCount: 11,
    translatedName: 'The Congregation, Friday',
    slug: 'al-jumuah',
    id: 62,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Munafiqun',
    versesCount: 11,
    translatedName: 'The Hypocrites',
    slug: 'al-munafiqun',
    id: 63,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'At-Taghabun',
    versesCount: 18,
    translatedName: 'The Mutual Disillusion',
    slug: 'at-taghabun',
    id: 64,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'At-Talaq',
    versesCount: 12,
    translatedName: 'The Divorce',
    slug: 'at-talaq',
    id: 65,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'At-Tahrim',
    versesCount: 12,
    translatedName: 'The Prohibition',
    slug: 'at-tahrim',
    id: 66,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Mulk',
    versesCount: 30,
    translatedName: 'The Sovereignty',
    slug: 'al-mulk',
    id: 67,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Qalam',
    versesCount: 52,
    translatedName: 'The Pen',
    slug: 'al-qalam',
    id: 68,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Haqqah',
    versesCount: 52,
    translatedName: 'The Reality',
    slug: 'al-haqqah',
    id: 69,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-Ma'arij",
    versesCount: 44,
    translatedName: 'The Ascending Stairways',
    slug: 'al-maarij',
    id: 70,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Nuh',
    versesCount: 28,
    translatedName: 'Noah',
    slug: 'nuh',
    id: 71,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Jinn',
    versesCount: 28,
    translatedName: 'The Jinn',
    slug: 'al-jinn',
    id: 72,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Muzzammil',
    versesCount: 20,
    translatedName: 'The Enshrouded One',
    slug: 'al-muzzammil',
    id: 73,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Muddaththir',
    versesCount: 56,
    translatedName: 'The Cloaked One',
    slug: 'al-muddaththir',
    id: 74,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Qiyamah',
    versesCount: 40,
    translatedName: 'The Resurrection',
    slug: 'al-qiyamah',
    id: 75,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Insan',
    versesCount: 31,
    translatedName: 'The Man',
    slug: 'al-insan',
    id: 76,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Mursalat',
    versesCount: 50,
    translatedName: 'The Emissaries',
    slug: 'al-mursalat',
    id: 77,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'An-Naba',
    versesCount: 40,
    translatedName: 'The Tidings',
    slug: 'an-naba',
    id: 78,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "An-Nazi'at",
    versesCount: 46,
    translatedName: 'Those who drag forth',
    slug: 'an-naziat',
    id: 79,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "'Abasa",
    versesCount: 42,
    translatedName: 'He Frowned',
    slug: 'abasa',
    id: 80,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'At-Takwir',
    versesCount: 29,
    translatedName: 'The Overthrowing',
    slug: 'at-takwir',
    id: 81,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Infitar',
    versesCount: 19,
    translatedName: 'The Cleaving',
    slug: 'al-infitar',
    id: 82,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Mutaffifin',
    versesCount: 36,
    translatedName: 'The Defrauding',
    slug: 'al-mutaffifin',
    id: 83,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Inshiqaq',
    versesCount: 25,
    translatedName: 'The Sundering',
    slug: 'al-inshiqaq',
    id: 84,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Buruj',
    versesCount: 22,
    translatedName: 'The Mansions of the Stars',
    slug: 'al-buruj',
    id: 85,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'At-Tariq',
    versesCount: 17,
    translatedName: 'The Nightcommer',
    slug: 'at-tariq',
    id: 86,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-A'la",
    versesCount: 19,
    translatedName: 'The Most High',
    slug: 'al-ala',
    id: 87,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Ghashiyah',
    versesCount: 26,
    translatedName: 'The Overwhelming',
    slug: 'al-ghashiyah',
    id: 88,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Fajr',
    versesCount: 30,
    translatedName: 'The Dawn',
    slug: 'al-fajr',
    id: 89,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Balad',
    versesCount: 20,
    translatedName: 'The City',
    slug: 'al-balad',
    id: 90,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ash-Shams',
    versesCount: 15,
    translatedName: 'The Sun',
    slug: 'ash-shams',
    id: 91,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Layl',
    versesCount: 21,
    translatedName: 'The Night',
    slug: 'al-layl',
    id: 92,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ad-Duhaa',
    versesCount: 11,
    translatedName: 'The Morning Hours',
    slug: 'ad-duhaa',
    id: 93,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Ash-Sharh',
    versesCount: 8,
    translatedName: 'The Relief',
    slug: 'ash-sharh',
    id: 94,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'At-Tin',
    versesCount: 8,
    translatedName: 'The Fig',
    slug: 'at-tin',
    id: 95,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-'Alaq",
    versesCount: 19,
    translatedName: 'The Clot',
    slug: 'al-alaq',
    id: 96,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Qadr',
    versesCount: 5,
    translatedName: 'The Power',
    slug: 'al-qadr',
    id: 97,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Al-Bayyinah',
    versesCount: 8,
    translatedName: 'The Clear Proof',
    slug: 'al-bayyinah',
    id: 98,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'Az-Zalzalah',
    versesCount: 8,
    translatedName: 'The Earthquake',
    slug: 'az-zalzalah',
    id: 99,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-'Adiyat",
    versesCount: 11,
    translatedName: 'The Courser',
    slug: 'al-adiyat',
    id: 100,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-Qari'ah",
    versesCount: 11,
    translatedName: 'The Calamity',
    slug: 'al-qariah',
    id: 101,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'At-Takathur',
    versesCount: 8,
    translatedName: 'The Rivalry in world increase',
    slug: 'at-takathur',
    id: 102,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-'Asr",
    versesCount: 3,
    translatedName: 'The Declining Day',
    slug: 'al-asr',
    id: 103,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Humazah',
    versesCount: 9,
    translatedName: 'The Traducer',
    slug: 'al-humazah',
    id: 104,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Fil',
    versesCount: 5,
    translatedName: 'The Elephant',
    slug: 'al-fil',
    id: 105,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Quraysh',
    versesCount: 4,
    translatedName: 'Quraysh',
    slug: 'quraysh',
    id: 106,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: "Al-Ma'un",
    versesCount: 7,
    translatedName: 'The Small kindnesses',
    slug: 'al-maun',
    id: 107,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Kawthar',
    versesCount: 3,
    translatedName: 'The Abundance',
    slug: 'al-kawthar',
    id: 108,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Kafirun',
    versesCount: 6,
    translatedName: 'The Disbelievers',
    slug: 'al-kafirun',
    id: 109,
  },
  {
    revelationPlace: 'madinah',
    transliteratedName: 'An-Nasr',
    versesCount: 3,
    translatedName: 'The Divine Support',
    slug: 'an-nasr',
    id: 110,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Masad',
    versesCount: 5,
    translatedName: 'The Palm Fiber',
    slug: 'al-masad',
    id: 111,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Ikhlas',
    versesCount: 4,
    translatedName: 'The Sincerity',
    slug: 'al-ikhlas',
    id: 112,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'Al-Falaq',
    versesCount: 5,
    translatedName: 'The Daybreak',
    slug: 'al-falaq',
    id: 113,
  },
  {
    revelationPlace: 'makkah',
    transliteratedName: 'An-Nas',
    versesCount: 6,
    translatedName: 'Mankind',
    slug: 'an-nas',
    id: 114,
  },
];
const search = ref('');
const surahItemsEl = ref();
const verseItemsEl = ref();

const verseList = computed(
  () => surahList.find((surah) => surah.id == route.params.id).versesCount
);

const filteredSurahList = computed(() =>
  surahList.filter((surah) =>
    surah.transliteratedName.toLowerCase().includes(search.value.toLowerCase())
  )
);

const scrollToActiveItem = (data) => {
  const activeData = data.find((item) =>
    item.$el.classList.value.includes('highlight')
  );

  activeData.$el.scrollIntoView({ block: 'center' });
};

onMounted(async () => {
  await nextTick();

  scrollToActiveItem(surahItemsEl.value);
  scrollToActiveItem(verseItemsEl.value);
});
</script>

<template>
  <aside class="sidebar">
    <button
      type="button"
      class="ml-auto text-lg lg:hidden"
      @click="emit('close')"
    >
      <Icon name="uiw:close" />
    </button>
    <input
      v-model="search"
      type="text"
      class="sidebar-search"
      placeholder="Ara"
    />
    <div class="sidebar-inner">
      <div
        class="sidebar-list flex-1 border-r border-light pr-3.5 dark:border-dark-300"
      >
        <nuxt-link
          ref="surahItemsEl"
          v-for="surah in filteredSurahList"
          :key="surah.id"
          :to="`/${surah.id}?verse=1`"
          class="sidebar-item"
          activeClass="highlight"
        >
          {{ surah.transliteratedName }}
        </nuxt-link>
      </div>
      <div class="sidebar-list w-20 pr-3.5">
        <nuxt-link
          ref="verseItemsEl"
          v-for="verse in verseList"
          :key="verse"
          :to="`?verse=${verse}`"
          class="sidebar-item"
          :class="{ highlight: $route.query.verse == verse }"
          @click="emit('close')"
        >
          {{ verse }}
        </nuxt-link>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply left-0 z-30 flex h-[calc(100vh-19.375rem)] flex-col gap-5 overflow-hidden rounded-lg border border-light bg-body p-4 transition-all dark:border-dark-300 dark:bg-dark max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:-translate-x-full max-lg:opacity-0 max-lg:shadow-xl;

  &.visible {
    @apply translate-x-0 opacity-100;
  }

  &-search {
    @apply w-full rounded-lg border border-light bg-transparent px-4 py-2.5 dark:border-dark-300;
  }

  &-inner {
    @apply flex h-full flex-1 gap-3.5 overflow-hidden;
  }

  &-list {
    @apply flex h-full max-h-full flex-col overflow-auto;
  }

  &-item {
    @apply rounded px-5 py-2.5;

    &.highlight {
      @apply bg-primary text-white dark:bg-dark-300 dark:text-dark-100;
    }
  }
}
</style>
