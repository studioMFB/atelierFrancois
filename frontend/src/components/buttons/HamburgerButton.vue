<script setup lang="ts">
import { ref, type Ref } from 'vue';


const emit = defineEmits<{
    (e: "toggle", target:HTMLButtonElement) : void,
}>();

const hamburgerButton = ref() as Ref<HTMLButtonElement>;

function toggle(e:Event) {
    e.preventDefault();
    e.stopPropagation()
    const target = e.target as HTMLButtonElement;
    emit('toggle',target)

    hamburgerButton.value.classList.toggle('active');
}

</script>
  
<template>   
    <button ref="hamburgerButton" class="hamburger" id="hamburgerButton" @click="(e) => {toggle(e)}">
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