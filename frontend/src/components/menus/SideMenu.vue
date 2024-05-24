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

        <hamburger-button @toggle="toggleShow"></hamburger-button>
        
        <transition name="slideToRight">
            <div v-if="show">
                <modal-component :show="show" @update:show="toggleShow">
                    <div v-if="show" class="dropdown-menu dropdown-menu-left">
                        <!-- <div class="sidebar-wrapper"> -->
                            
                            <ul class="menu">
                                <li class="menu__item">
                                    <router-link :to="{ name: PageNameProviders.Home }" class="menu__link">
                                        {{ PageNameProviders.Home }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <!-- </div> -->
                    </modal-component>
                </div>
            </transition>
        </div>
</template>

<style scoped lang="scss">
.menu-wrapper {
    display: flex;
    // flex: 2;
    // flex-grow: 1;
    justify-content: flex-start;
    width: 100%;
}

.menu {
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--body-medium-font-size);
    font-weight: var(--font-weight-light);
    text-align: left;
}

.menu__item {
    display: inline-block;
    margin-right: var(--spacing-3);
    padding: 0;
}

// .hamburger {
//     -webkit-appearance: none;
//     appearance: none;
//     display: block;
//     position: relative;
//     top: 1px;
//     padding: 5px;
//     width: 30px;
//     height: 30px;
//     color: var(--color-1);
//     border: 0;
//     background: none;
//     transition: opacity .3s ease-in-out;
// }

.hamburger__icon {
    position: absolute;
    top: 14px;
    left: 5px;
    // position: absolute;
    // top: -5px;
    // left: 0;

    background-color: var(--color-1);
    height: 1px;
    width: 20px;
    transition: all .15s var(--transition-curve-1);
}

.sidebar-close-btn {
    width: 2rem;
    position: absolute;
    top: 0rem;
    right: 0rem;
    // padding: 1rem 1rem 0 0;
}

.sidebar-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.dropdown-menu {
    z-index: 999;
    position: absolute;
    display: block;
    right: 1rem;
    top: var(--header-height);
    bottom: 0;
    height: 100%;
    min-width: 240px;
    max-width: 500px;
    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: #8e8f94;
    background-color: #15161d3a;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.15);
    width: 400px;
    backdrop-filter: blur(10px);

    ul {
        padding: 0;
        margin: 0;
        min-height: 20rem;
    }

    li {
        display: block;
        text-align: left;
        list-style: none;
    }
}

.dropdown-menu-left {
    left: 0;
    right: auto;
}
</style>


<!-- <script setup lang="ts">
import { RouteProviders, PageNameProviders } from '@/providers';


</script>

<template>
    <nav class="menu-wrapper">
        <ul id="menu-hovedmenu" class="menu">
            <li class="menu__item">
                <router-link :to="{ name: PageNameProviders.Home }" class="menu__link">
                    {{ PageNameProviders.Home }}
                </router-link>
            </li>
        </ul>
        <button type="button" class="hamburger" aria-label="Menu">
            <span class="hamburger__icon"></span>
        </button>
    </nav>
</template>

<style scoped lang="scss">
.menu-wrapper {
    display: flex;
    // flex: 2;
    // flex-grow: 1;
    justify-content: flex-start;
    width: 100%;
}

.menu {
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--body-medium-font-size);
    font-weight: var(--font-weight-light);
    text-align: left;
}

.menu__item {
    display: inline-block;
    margin-right: var(--spacing-3);
    padding: 0;
}

.hamburger {
    -webkit-appearance: none;
    appearance: none;
    display: block;
    position: relative;
    top: 1px;
    padding: 5px;
    width: 30px;
    height: 30px;
    color: var(--color-1);
    border: 0;
    background: none;
    transition: opacity .3s ease-in-out;
}

.hamburger__icon {
    position: absolute;
    top: 14px;
    left: 5px;
}
.hamburger__icon:before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;

    background-color: var(--color-1);
    height: 1px;
    width: 20px;
    transition: all .15s var(--transition-curve-1);
}

.hamburger__icon:after {
    top: 5px;

    // content: "";
    // position: absolute;
    // top: -5px;
    // left: 0;
}

</style> -->