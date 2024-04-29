<script setup lang="ts">
</script>

<template>
    <div class="full-page-wrapper">
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
    width: 100%;
    height: 100%;
}
</style>