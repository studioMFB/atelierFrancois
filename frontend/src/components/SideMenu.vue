<script setup lang="ts">
import { RouteProviders, PageNameProviders } from '@/providers';


</script>

<template>
    <nav class="menu-wrapper">
        <ul id="menu-hovedmenu" class="menu">
            <!-- <li class="menu__item"><a href="https://taktcph.com/products/" class="menu__link">Products</a></li> -->
            <li class="menu__item">
                <router-link :to="{ name: PageNameProviders.Home }" class="logo-link">
                    {{ PageNameProviders.Home }}
                </router-link>
            </li>

        </ul>
        <button type="button" class="hamburger" aria-label="Menu">
            <span class="hamburger__icon"></span>
        </button>
    </nav>
</template>

<style scoped lang="scss"></style>