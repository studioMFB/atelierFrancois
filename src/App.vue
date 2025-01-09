<script setup lang="ts">
</script>

<template>
    <div>
        <router-view name="HeaderBar"></router-view>
        <router-view name="ContentPage"></router-view>
    </div>
</template>

<style lang="scss">
.mainContent{
    position: fixed;
    z-index: 10;
    background-color: black;
}
</style>