<script setup lang="ts">
// PROPS
defineProps({
    modalName: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    }
})

// EMITS
const emits = defineEmits({
    closeModal() {
        return true
    },
})
</script>

<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="title">
                <h1 class="title-text">
                    {{ title }}
                </h1>
                <span class="close-icon"
                    @click="emits('closeModal')">✖</span>
            </div>
            <span v-if="text"
                class="modal-text">
                {{ text }}
            </span>
            <slot />
        </div>
    </div>
</template>


<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #464646cc;
    color: var(--color-text);
    font-family: 'Segoe UI';
    font-size: 14px;
    z-index: 99;

    .modal {
        background-color: var(--color-background);
        min-width: 45rem;
        max-width: 50rem;
        max-height: 95vh;
        border-radius: 0.5rem;
        padding: 2rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .title {
            display: flex;
            align-items: flex-start;
            width: 100%;
            justify-content: space-between;

            .title-text {
                font-size: 24px;
                line-height: 32px;
                font-family: 'Segoe UI';
                width: 98%;
            }

            .close-icon {
                cursor: pointer;
                margin-top: calc((32px - 24px) / 2);
                width: 1.5rem;
            }
        }

        .modal-text {
            font-size: 16px;
            margin-top: 1rem;
        }
    }
}
</style>
