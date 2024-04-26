<script setup lang="ts">
import { RouteProviders, PageNameProviders } from '@/providers';

</script>

<template>
  <div class="nav-bar">
    <router-link :to="{name: RouteProviders.Home}" class="btn-link">
      {{ PageNameProviders.Home }}
    </router-link>

    <!-- <router-link :to="{name: RouteProviders.Testimony}" class="btn-link">
      {{ PageNameProviders.Testimony }}
    </router-link> -->
  </div>
</template>

<style lang="scss">
.nav-bar{
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  padding: 0 4rem;
  background:#e5e0d8;
}

.btn-link{
  width: auto;
  height: 2rem;
  padding: .5rem 1rem;
  margin: 0 .7rem;
  border: 1px solid rgba(0, 0, 0, 0.288);
  border-radius: 10px;
  color: rgb(94, 61, 0);

}
</style>