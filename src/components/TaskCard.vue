
<script setup lang='ts'>
import type { PropType } from 'vue';

// PROPS
const props = defineProps({
    task: { type: Object as PropType<{ text: string, priority: boolean, id: number }>, required: true }

})

// EMITS
const emits = defineEmits({
    removeTask(id: number) {
        return id
    }
})
</script>

<template>
    <div class="task"
        :class="{ priority: task.priority }">
        <span>
            {{ task.text }}
        </span>

        <button @click="$emit('removeTask', task.id)"
            class="remove">
            🗑
        </button>
    </div>
</template>

<style scoped>
.task {
    width: 30rem;
    padding: 1rem;
    border: 1px white solid;
    border-radius: 8px;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    &.priority {
        border: 1px var(--vt-c-vue-green) solid;
    }

    .remove {
        width: 3rem;
        cursor: pointer;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: red;
        color: white;
        border: none;
    }
}
</style>