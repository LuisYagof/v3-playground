<script setup lang="ts">
// IMPORTS
import { storeToRefs } from 'pinia'
import { useUnsavedDataStore } from '@/stores/unsavedData.store';
import { useTasksStore } from '@/stores/tasks.store';
import AppModal from '@/components/core/AppModal.vue'


// STORES
const { displaySaveDataModal, delayedAction } = storeToRefs(useUnsavedDataStore())
const { newTask, tasks } = storeToRefs(useTasksStore())

// FUNCTIONS
function onSave() {
    tasks.value.push({ text: newTask.value, priority: false, id: tasks.value.length })
    newTask.value = ''
    delayedAction.value?.action(...delayedAction.value.params)
    closeModal()
}

function onContinue() {
    newTask.value = ''
    delayedAction.value?.action(...delayedAction.value.params)
    closeModal()
}

function closeModal() {
    displaySaveDataModal.value = false
}
</script>

<template>
    <AppModal @closeModal="closeModal"
        :modal-name="'save-draft'"
        :title="'There is unsaved data'"
        :text="'Continue without saving?'">
        <div class="wrapper-buttons">
            <button @click="onContinue"
                class="continue-btn">Continue</button>
            <button @click="onSave"
                class="save-btn">Save</button>
        </div>
    </AppModal>
</template>

<style scoped>
.wrapper-buttons {
    display: flex;
    gap: 1rem;

    button {
        padding: 1rem;
        border: none;
        font-family: 'Segoe UI';
        color: white;
        border-radius: 4px;
        min-width: 5rem;
        cursor: pointer;

        &.continue-btn {
            background-color: var(--vt-c-vue-darkgreen);
        }

        &.save-btn {
            background-color: var(--vt-c-vue-green);
        }
    }
}
</style>
