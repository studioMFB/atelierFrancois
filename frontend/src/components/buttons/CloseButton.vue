<script setup lang="ts">
const props = defineProps<{
    fontSize?: string
}>()

</script>

<template>
    <button type="button" class="button-outer" >
        <p v-bind:style="{ fontSize:props.fontSize }"> &#10006; </p> 
    </button>
</template>

<style scoped lang="scss">
.button-outer {
    cursor: pointer;
    display: flex;
    justify-content: right;
    border: none;
    color: #fff;
    opacity: .6;
    background: none;

    p{ 
        font-size: 17px;
    }

    &:hover {
        opacity: 1;
    }
}
</style>