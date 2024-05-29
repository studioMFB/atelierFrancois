<script setup lang="ts">
import { watch, computed, ref, type Ref } from 'vue';


const props = defineProps<{
    close:boolean;
}>();

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
    <button ref="hamburgerButton" class="hamburger" :class="close?'active':''" id="hamburgerButton" @click="(e) => {toggle(e)}">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>  

<style scoped lang="scss">
.hamburger {
    z-index: 10;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // flex-grow: 1;
    width: 30px;
    height: 24px;
    padding: 0;
    border: none;
    background: none;
    margin: 0 var(--spacing-3);

    &:hover {
        opacity: .8;
    }
}

.hamburger span {
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--color-1);
    transition: all 0.3s ease-in-out;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg);
    top: 8px;
    position: relative;
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg);
    top: -8px;
    position: relative;
}
</style>