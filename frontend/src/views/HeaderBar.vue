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
// .menu-wrapper {
//     // display: flex;
//     // flex: 2;
//     // justify-content: flex-start;
//     width: 100%;
// }

.header-wrapper {
  z-index: 9999;
  position: absolute;
  display: flex;
  // align-items: center;
  // justify-content: center;
  justify-content: space-between;
    flex-grow: 1;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  padding: 0 var(--spacing-3);
  // margin: 0 auto;
  border-bottom: 1px solid var(--color-1);
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
  // flex-direction: row;
  // justify-content: space-between;
    // justify-content: center;

  // margin: 0 auto;
  width: 100%;
  height: 100%;
  // max-width: var(--max-width);
}

.logo {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-grow: 1;
  // flex-shrink: 2;
  width: 100%;
}

.logo-link {
  // width: auto;
  // height: 2rem;
  // padding: .5rem 1rem;
  // margin: 0 .7rem;
  font-weight: 800;
  font-size: 25px;
  color: var(--color-text);
  text-decoration: none;
  transition: all .1s ease-in-out;

  // margin: 0;
  //   max-height: 58px;
  //   max-width: 250px;
  //   height: auto;
  //   width: auto;
}
</style>