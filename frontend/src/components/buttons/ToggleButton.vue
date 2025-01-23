<script setup lang="ts">
const emit = defineEmits<{
    (e: "toggle", target:HTMLButtonElement) : void,
}>();

function toggle(e:Event) {
    e.preventDefault();
    e.stopPropagation()
    const target = e.target as HTMLButtonElement;
    emit('toggle',target)
}
</script>
  
<template>
    <button type="button" class="toggle-button" @click="(e) => {toggle(e)}">
        <slot></slot>
    </button>
</template>  

<style scoped lang="scss">
.toggle-button {
    cursor: pointer;
    border: none;
    background: none;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0;

    &:hover {
        opacity: .8;
    }
}
</style>