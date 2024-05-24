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
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="showModal" class="modal" :class="{ modalback: modalBack }" @pointerdown="closeModal" @[!allowDrag&&`dragenter`]="closeModal">
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped lang="scss">
.modal {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modalback {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px)
}

.modal-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95%;
}

.modal-close-button {
    float: right;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 1;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>