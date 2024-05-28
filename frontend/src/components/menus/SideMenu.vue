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

        <transition name="slide-menu">
            <div v-if="show">
                <modal-component :show="show" @update:show="toggleShow">
                    <div class="menu">
                        <ul>
                            <li>
                                <router-link :to="{ name: PageNameProviders.Editor }" class="menu__link"
                                    @click="toggleShow">
                                    {{ PageNameProviders.Editor }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: PageNameProviders.Projects }" class="menu__link"
                                    @click="toggleShow">
                                    {{ PageNameProviders.Projects }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </modal-component>
            </div>
        </transition>
    </div>
</template>

<style scoped lang="scss">
$menu-top: calc(1px + var(--header-height));

.menu-wrapper {
    display: flex;
    width: 100%;
}

@mixin menu-common-styles {
    z-index: 1001;
    position: fixed;
    display: block;
    top: $menu-top;

    width: var(--side-menu-width);
    height: 100%;
    // height: 30rem;

    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: #8e8f94;
    background-color: var(--header-background);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    // // backdrop-filter: blur(10px);

    ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: var(--spacing-3) 0;
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

    left: 0;
    // top:0;
    right: auto;
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
    transition: all .1s ease-in-out;

    &:hover {
        opacity: .6;
    }
}

.slide-menu-enter-active,
.slide-menu-leave-active {
    @include menu-common-styles;

    transition: transform var(--slide-transition) cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-menu-enter-from,
.slide-menu-leave-to {
    @include menu-common-styles;

    transform: translateX(calc(var(--side-menu-width) *-1));
}
</style>