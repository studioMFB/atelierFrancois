<script setup lang="ts">
</script>

<template>
    <div class="full-page-wrapper">
        <!-- <div class="menu-overlay"></div> -->

        <!-- <suspense> -->
            <router-view name="Content" v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
        <!-- </suspense> -->

        <!-- <suspense>
            <router-view name="Background" v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
        </suspense> -->
    </div>
</template>

<style scoped lang="scss">
.full-page-wrapper {
    position: fixed;
    top: var(--header-height);
    width: 100%;
    height: 100%;
}

// .menu-overlay {
//     position: absolute;
//     overflow: auto;
//     box-sizing: border-box;
//     width: 100%;
//     background-color: #fff;
//     transition: var(--transition-panel-1);
//     -webkit-overflow-scrolling: touch;
//     transform: translateX(-100%);
//     min-height: 100vh;
//     height: 100%;
// }
</style>