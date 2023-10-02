<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>



<template>
        <button class="move__btn">{{ name }}</button>
</template>

<style>

.move__btn{
    cursor: pointer;
    width: auto;
    height: auto;
    margin: 0 .1rem;
    padding: 0 .4rem;
    border: none;
    background-color:#737376;

    &:hover{
        /* color: #737376; */
        background-color: rgb(66, 66, 156);
    }
}

</style>