
<script setup lang='ts'>
// IMPORTS
import { useSaveDataStore } from "@/stores/saveData.store";
import { storeToRefs } from "pinia";

// STORES
const { newTask, tasks } = storeToRefs(useSaveDataStore())

// FUNCTIONS
function saveTask(priority: boolean) {
    tasks.value.push({ text: newTask.value, priority })
    newTask.value = ''
}
</script>

<template>
    <div class="input-task">
        <input type="text"
            v-model="newTask"
            class="new-task"
            placeholder="Enter your task here">

        <div class="button-wrapper">
            <button @click="saveTask(true)"
                class="priority">Save (priority)</button>
            <button @click="saveTask(false)">Save (no priority)</button>
        </div>
    </div>
</template>

<style scoped>
.input-task {
    width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .new-task {
        height: 3rem;
        width: 100%;
        padding: 1rem;
        font-family: 'Segoe UI';
        border: none;
    }

    .new-task:focus {
        outline: none;
    }

    .button-wrapper {
        display: flex;
        gap: 0.5rem;

        button {
            width: 100%;
            cursor: pointer;
            font-family: 'Segoe UI';
            border: none;
            padding: 0.5rem;
            background-color: var(--vt-c-vue-darkgreen);
            color: white;

            &.priority {
                background-color: var(--vt-c-vue-green);
                color: white;
            }
        }
    }
}
</style>