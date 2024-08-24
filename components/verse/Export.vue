<script setup>
import html2canvas from 'html2canvas';
import slugify from 'slugify';

const props = defineProps(['data', 'surahName']);

const exportVerseEl = ref();
const patterns = ref([
  {
    id: 1,
    src: '/xv.webp',
  },
  {
    id: 2,
    src: '/lyonnette.png',
  },
  {
    id: 3,
    src: '/vintage-wallpaper.webp',
    theme: 'dark',
  },
  {
    id: 4,
    src: '/moroccan-flower-dark.png',
    theme: 'dark',
  },
  {
    id: 5,
    src: '/country-quilt-dark.webp',
    theme: 'dark',
  },
  {
    id: 6,
    src: '/micro_carbon.png',
    theme: 'dark',
  },
]);
const exportData = ref({
  pattern: {
    id: 1,
    src: '/xv.webp',
  },
});

const exportVerse = async () => {
  const canvas = await html2canvas(exportVerseEl.value);
  const image = canvas.toDataURL('image/png;base64');

  const downloadLink = document.createElement('a');
  downloadLink.href = image;
  downloadLink.download = `${slugify(props.surahName, { lower: true })}-${props.data.verseNumber}-ayeti-ve-meali`;
  downloadLink.click();
  document.removeChild(downloadLink);
};
</script>

<template>
  <div class="mb-10 flex flex-wrap gap-4">
    <button
      v-for="pattern in patterns"
      :key="pattern.id"
      type="button"
      class="export-pattern"
      :class="{ 'border-primary': exportData.pattern.id === pattern.id }"
      @click="exportData.pattern = pattern"
    >
      <img
        :src="pattern.src"
        alt="Pattern"
        class="h-full w-full object-cover"
      />
    </button>
  </div>
  <div class="overflow-hidden rounded-lg">
    <div
      ref="exportVerseEl"
      class="export-preview overflow-hidden"
      :class="{ 'text-white': exportData.pattern.theme === 'dark' }"
      :style="{ backgroundImage: `url(${exportData.pattern.src})` }"
    >
      <div class="export-preview-title mb-10" dir="rtl">
        {{ data.text }}
      </div>
      <p class="mb-4 text-lg">
        {{ data.translations[0]?.text }}
      </p>
      <p class="mb-20 text-base">
        ({{ data.translations[0]?.resourceName }}, {{ surahName }}
        {{ data.verseNumber }}. Ayet)
      </p>
      <div class="text-center">siratimustakim.com</div>
    </div>
  </div>
  <div class="mt-10 flex justify-end">
    <BaseButton type="button" @click="exportVerse"> Ayeti İndir </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.export {
  &-preview {
    @apply px-20 pb-6 pt-20;

    &-title {
      @apply font-arabic text-4xl leading-loose;
    }
  }

  &-pattern {
    @apply h-12 w-12 overflow-hidden rounded-lg border-2;
  }
}
</style>
