<script setup>
import { toPng } from 'html-to-image';
import slugify from 'slugify';

const props = defineProps(['data', 'surahName']);

const exportVerseEl = ref();
const colorValue = ref();
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
  const image = await toPng(exportVerseEl.value);

  const downloadLink = document.createElement('a');
  downloadLink.href = image;
  downloadLink.download = `${slugify(props.surahName, { lower: true })}-${props.data.verseNumber}-ayeti-ve-meali`;
  downloadLink.click();
  document.removeChild(downloadLink);
};
</script>

<template>
  <div class="flex items-start gap-5 max-sm:flex-col">
    <div class="flex flex-wrap gap-5 sm:w-52">
      <div class="export-option">
        <div class="export-option-title">Arka Plan</div>
        <div class="flex flex-wrap gap-2 sm:gap-4">
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
      </div>
      <div class="export-option">
        <div class="export-option-title">Yazı Rengi</div>
        <input v-model="colorValue" type="color" class="export-color-input" />
      </div>
    </div>
    <div class="w-full flex-1 overflow-hidden rounded-lg">
      <div
        ref="exportVerseEl"
        class="export-preview"
        :class="{ '!text-white': exportData.pattern.theme === 'dark' }"
        :style="{
          backgroundImage: `url(${exportData.pattern.src})`,
        }"
      >
        <div :style="{ color: `${colorValue} !important` }">
          <div
            v-if="!['1', '9'].includes($route.params.id)"
            class="mb-10 font-arabic text-2xl sm:text-4xl"
            dir="rtl"
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </div>
          <div class="export-preview-title mb-10" dir="rtl">
            {{ data.text }}
          </div>
          <p class="mb-4 text-base sm:text-lg">
            {{ data.translations[0]?.text }}
          </p>
          <p class="mb-1 sm:text-base">
            ({{ data.chapterId }}/{{ surahName }}, {{ data.verseNumber }})
          </p>
          <p>{{ data.translations[0]?.resourceName }}</p>
        </div>
        <div class="export-preview-copyright mt-20">
          <img src="/emblem.svg" alt="Emblem" class="w-6" />
          siratimustakim.com
        </div>
      </div>
    </div>
  </div>
  <div class="mt-10 flex justify-end">
    <BaseButton type="button" @click="exportVerse"> İndir </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.export {
  &-preview {
    @apply overflow-hidden px-10 pb-4 pt-10 dark:text-black sm:px-20 sm:pb-6 sm:pt-20;

    &-title {
      @apply font-arabic text-4xl max-sm:text-2xl;
      line-height: 2 !important;
    }

    &-copyright {
      @apply flex items-center justify-center gap-1 text-center;
    }
  }

  &-pattern {
    @apply h-8 w-8 overflow-hidden rounded-lg border-2 sm:h-12 sm:w-12;
  }

  &-option {
    @apply flex flex-col gap-2.5;

    &-title {
      @apply font-medium sm:text-base;
    }
  }

  &-color-input {
    @apply h-8 w-8 cursor-pointer appearance-none rounded-lg border-2 sm:h-12 sm:w-12;

    &::-webkit-color-swatch-wrapper {
      @apply p-0;
    }

    &::-webkit-color-swatch {
      @apply border-none;
    }
  }
}
</style>
