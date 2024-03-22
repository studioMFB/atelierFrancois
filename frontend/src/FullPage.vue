<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, type ComputedRef } from 'vue';

const route = useRoute();
const scrollEnabled : ComputedRef<any> = computed(() => route.meta.AllowScroll ? "auto" : undefined);
</script>

<template>
    <div class="full-page-wrapper">
        <suspense>
            <router-view name="Content" v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
        </suspense>
    </div>
</template>

<style scoped lang="scss">
.full-page-wrapper {
    width: 100%;
    height: 100%;
}
</style>