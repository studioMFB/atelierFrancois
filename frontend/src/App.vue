<script setup lang="ts">
import { ref, type Ref } from 'vue';
import HomePage from './views/HomePage.vue';

// import WebGlRenderer from "@/components/3D/WebGlRenderer.vue";


// const canvasElement:Ref<HTMLCanvasElement | undefined> = ref();
</script>

<template>
    <div>        
        <router-view name="NavBar"></router-view> 
        <router-view class="full-page-wrapper" name="FullPage"></router-view>
    </div>
</template>

<style lang="scss">
#scene-viewer{
    position: fixed;
    top:4rem;
    width: 86% !important;
    height: 90% !important;
    border: none;
    border-radius: 10px;
    margin: 0 2rem;
    background-color: #060911;
    // background: none;
}
</style>