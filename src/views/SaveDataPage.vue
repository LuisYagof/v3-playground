<script setup lang="ts">
// IMPORTS
import { useTasksStore } from "@/stores/tasks.store";
import TaskCard from '@/components/TaskCard.vue'
import InputTask from '@/components/InputTask.vue'

// STORES
const { tasks } = useTasksStore()

// FUNCTIONS
function removeTask(index: number) {
    tasks.splice(index, 1)
}
</script>

<template>
    <main>
        <h1>Save Data</h1>
        <InputTask />
        <div class="task-list">
            <TaskCard v-for="(task, index) in tasks"
                :key="index"
                :task="task"
                @remove-task="removeTask(index)" />
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