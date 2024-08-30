<script setup>
const menuList = [
  {
    id: '1',
    name: 'Fatiha Suresi',
  },
  {
    id: '2',
    name: 'Bakara Suresi',
  },
  {
    id: '12',
    name: 'Yusuf Suresi',
  },
  {
    id: '36',
    name: 'Yasin Suresi',
  },
  {
    id: '48',
    name: 'Fetih Suresi',
  },
  {
    id: '67',
    name: 'Mülk Suresi',
  },
  {
    id: '73',
    name: 'Müzzemmil Suresi',
  },
  {
    id: '72',
    name: 'Cin Suresi',
  },
  {
    id: '54',
    name: 'Kamer Suresi',
  },
];
</script>

<template>
  <footer class="footer">
    <div class="container flex flex-wrap justify-between gap-10">
      <div class="footer-section sm:w-1/3">
        <LayoutLogo />
        <p>
          Ehli sünnet alimlerinin hazırladığı Kuran meallerini kullanıcı dostu
          arayüzle sunuyoruz. Kuran'ı Kerim'i keşfetmek için ideal ve güvenilir
          kaynak.
        </p>
        <p>&copy; 2024 Tüm hakları saklıdır.</p>
      </div>
      <div class="footer-section">
        <div class="footer-title">Sure</div>
        <nav class="footer-menu">
          <NuxtLink
            v-for="menu in menuList"
            :key="menu.id"
            :to="`/${menu.id}`"
            class="footer-link"
          >
            {{ menu.name }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply border-t border-light py-14 dark:border-dark-300;

  &-section {
    @apply flex flex-col gap-4;
  }

  &-title {
    @apply text-base font-semibold;
  }

  &-menu {
    @apply grid grid-cols-3 gap-x-6 gap-y-4;
  }

  &-link {
    @apply transition-colors hover:text-primary;
  }
}
</style>
