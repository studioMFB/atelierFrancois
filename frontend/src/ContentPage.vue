<script setup lang="ts">
</script>

<template>
    <div class="content-page-wrapper">

        <div class="content-page">
            <!-- <suspense> -->
            <router-view name="Content" v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
            <!-- </suspense> -->
        </div>

        <!-- <footer class="footer"></footer> -->
    </div>
</template>

<style scoped lang="scss">
.content-page-wrapper {
    position: fixed;
    top: var(--header-height);
    width: 100%;
    overflow-y: hidden;
}

.content-page {
    overflow-y: auto;
}
</style>