<script setup lang="ts">
// IMPORTS
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useTasksStore } from "@/stores/tasks.store";
import { useUnsavedDataStore } from '@/stores/unsavedData.store';
import TaskCard from '@/components/TaskCard.vue'
import InputTask from '@/components/InputTask.vue'

// STORES
const { tasks } = useTasksStore()
const { unsavedChanges } = storeToRefs(useUnsavedDataStore())

// LIFECYCLE
onMounted(() => handleBrowserClose())

// COMPUTED
const tasksSortedByNew = computed(() => [...tasks].reverse())

// FUNCTIONS
function removeTask(id: number) {
    const taskToDelete = tasks.findIndex(task => task.id === id)
    if (taskToDelete > (-1)) tasks.splice(taskToDelete, 1)
}

function handleBrowserClose() {
    window.addEventListener('beforeunload', checkUnsavedChanges)
}

function checkUnsavedChanges(event: BeforeUnloadEvent) {
    if (unsavedChanges.value) {
        event.preventDefault()
        event.returnValue = ''
    }
}
</script>

<template>
    <main>
        <h1>Save Data</h1>
        <InputTask />
        <div class="task-list">
            <TaskCard v-for="(task, index) in tasksSortedByNew"
                :key="index"
                :task="task"
                @remove-task="removeTask" />
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .task-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>