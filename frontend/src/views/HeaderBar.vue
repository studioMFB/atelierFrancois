<script setup lang="ts">
import { PageNameProviders } from '@/providers';
import SideMenu from '@/components/menus/SideMenu.vue';

</script>

<template>
  <header class="header-wrapper">
    <!-- <div class="header-wrapper-inner"> -->
    <div class="header-wrapper-inner-wrap">
      <side-menu></side-menu>
      <div class="logo">
        <router-link :to="{ name: PageNameProviders.Home }" class="logo-link">
          {{ PageNameProviders.Home }}
        </router-link>
      </div>
    </div>
    <!-- </div> -->
  </header>
</template>

<style scoped lang="scss">
.header-wrapper {
  user-select: none;
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  padding: 0 var(--spacing-3);
  border-bottom: 1px solid var(--color-2);
  background-color: var(--header-background);
}

// @media (min-width: 721px) {
//   .header-wrapper-inner {
//     padding: 5px var(--spacing-3);
//   }
// }

// .header-wrapper-inner {
//   z-index: 25;
//   // position: relative;
//   // display: flex;
//   // min-height: 69px;
//   // padding: 5px var(--spacing-2);
// }

.header-wrapper-inner-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.logo {
  width: 100%;
}

.logo-link {
  font-weight: 800;
  font-size: 25px;
  color: var(--color-text);
  text-decoration: none;
  transition: all .1s ease-in-out;
}
</style>