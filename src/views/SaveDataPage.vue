<script setup lang="ts">
// IMPORTS
import { computed } from "vue";
import { useTasksStore } from "@/stores/tasks.store";
import TaskCard from '@/components/TaskCard.vue'
import InputTask from '@/components/InputTask.vue'

// STORES
const { tasks } = useTasksStore()

// COMPUTED
const tasksSortedByNew = computed(() => [...tasks].reverse())

// FUNCTIONS
function removeTask(id: number) {
    const taskToDelete = tasks.findIndex(task => task.id === id)
    if (taskToDelete > (-1)) tasks.splice(taskToDelete, 1)
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