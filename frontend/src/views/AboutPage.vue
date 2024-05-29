<script setup lang="ts">
import { PageNameProviders } from '@/providers';
</script>

<template>
    <div class="content-wrapper">
        {{ PageNameProviders.About }}
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