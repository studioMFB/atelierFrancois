<script setup lang="ts">
import { ref, type Ref } from 'vue';

import { PageNameProviders } from '@/providers';

import HamburgerButton from '../buttons/HamburgerButton.vue';

import ModalComponent from '@/components/containers/ModalComponent.vue';


const show = ref(false) as Ref<boolean>;

function toggleShow() {
    show.value = !show.value;
}
</script>

<template>
    <div class="menu-wrapper">
        <hamburger-button :close="show" @toggle="toggleShow"></hamburger-button>

        <!-- <transition name="slide-menu"> -->
        <!-- <div v-if="show"> -->
        <!-- <modal-component :show="show" @update:show="toggleShow"> -->
        <div class="menu" :class="show ? ['move'] : ['']">
            <ul>
                <li>
                    <router-link :to="{ name: PageNameProviders.Products }" class="menu__link" @click="toggleShow">
                        {{ PageNameProviders.Products }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: PageNameProviders.Editor }" class="menu__link" @click="toggleShow">
                        {{ PageNameProviders.Editor }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: PageNameProviders.Projects }" class="menu__link" @click="toggleShow">
                        {{ PageNameProviders.Projects }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: PageNameProviders.About }" class="menu__link" @click="toggleShow">
                        {{ PageNameProviders.About }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- </modal-component> -->
        <!-- </div> -->
        <!-- </transition> -->
    </div>
</template>

<style scoped lang="scss">
$menu-top: calc(1px + var(--header-height));
$menu-width: calc(var(--side-menu-width) *-1);

.menu-wrapper {
    display: flex;
    justify-content: left;
    width: 100%;
}

@mixin menu-common-styles {
    position: fixed;
    display: block;
    top: $menu-top;

    width: var(--side-menu-width);
    height: 100%;

    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: #8e8f94;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: var(--header-background);
    // backdrop-filter: blur(10px);

    ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: var(--spacing-3) var(--spacing-1);
        padding: 0 var(--spacing-2);
        list-style: none;
        text-align: left;
        font-size: var(--body-medium-font-size);
        font-weight: var(--font-weight-light);
        line-height: var(--h5-line-height);
    }

    li {
        display: inline-block;
        margin-right: var(--spacing-3);
        padding: 0;
        height: 3rem;
    }

    transition: transform var(--slide-transition) ease-in;
    transform: translateX($menu-width);
}

.move {
    transform: translateX(0px) !important;
}

.menu {
    @include menu-common-styles;
}

.menu__link {
    display: inline-block;
    color: var(--color-1);
    font-size: var(--h6-font-size);
    line-height: var(--h6-line-height);
    margin: 0;
    text-decoration: none;
    transition: all .15s ease-in-out;

    &:hover {
        opacity: .6;
    }
}

// .slide-menu-enter-active,
// .slide-menu-leave-active {
//     @include menu-common-styles;
//     // transform: translateY(0);
//     top:0;
//     transition: transform var(--slide-transition) ease-in;
// }

// .slide-menu-enter-from,
// .slide-menu-leave-to {
//     @include menu-common-styles;
//     // transform: translateY(0);
//     top:0;
//     transform: translateX(calc(var(--side-menu-width) *-1));
// }</style>