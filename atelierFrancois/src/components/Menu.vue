<script setup lang="ts">
import MovebuttonView from "./moveButton/MovebuttonView.vue";
</script>

<template>
<div class="menu">
    <div class="menu__btn--container">
        <MovebuttonView name="up"></MovebuttonView>
        <MovebuttonView name="left"></MovebuttonView>
    </div>
</div>

</template>

<style>
.menu{
    z-index: 10;
    grid-area: menu;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 100%;
    height: 100%;
    background-color: #2b2c31;
}

.menu__btn--container{
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    width: 30rem;
    height: 100%;
    margin: auto auto;
}

</style>