<script setup lang="ts">
import { computed, ref, watch } from 'vue';


const props = defineProps<{
    show: boolean,
    allowDrag?: boolean,
    modalBack?: boolean
}>();

const emit = defineEmits<{
    (e: "update:show", show: boolean): void,
    (e: "onModalClose"): void,
}>();

const showModal = ref(props.show);

const allowDrag = computed(() => props.allowDrag || false)

watch(() => props.show, (newShow) => {
    showModal.value = newShow;
});

function closeModal(e: Event): void {
    const targetElement = e.target as HTMLElement;
    if (targetElement.classList && (targetElement.classList.contains("modal") || targetElement.classList.contains("modal-content"))) {
        emit('update:show', false);
        emit('onModalClose');
    }
}
</script>

<template>
    <div v-if="showModal" class="modal" :class="{ modalback: modalBack }" @pointerdown="closeModal"
        @[!allowDrag&&`dragenter`]="closeModal">
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

.modalback {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px)
}

.modal-content {
    // z-index: 10;
    // position: relative;
}
</style>