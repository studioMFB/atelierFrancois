<script setup lang="ts">
import { PathProviders } from '@/providers';
</script>

<template>
    <div class="content-wrapper">
        {{ PathProviders.Home }}
    </div>
</template>

<style scoped lang="scss">
.content-wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
    padding: 69px;
}
</style>