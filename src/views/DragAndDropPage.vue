<script setup lang="ts">
// IMPORTS
import { onMounted, onUnmounted, ref } from "vue";
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";

// DATA
const sixElementArray = Array.from({ length: 6 }, (value, index) => ++index)
const [parent, boxes] = useDragAndDrop(sixElementArray, { plugins: [animations()] });
const customDraggable = ref()

// HOOKS
onMounted(() => {
    customDraggable.value.addEventListener('dragstart', dragStart, false)
    document.body.addEventListener('dragover', dragOver, false);
    document.body.addEventListener('drop', drop, false);
})

onUnmounted(() => {
    document.body.removeEventListener('dragover', dragOver);
    document.body.removeEventListener('drop', drop);
})

// FUNCTIONS
function dragStart(event: DragEvent) {
    if (event.target && event.dataTransfer) {
        const style = window.getComputedStyle(event.target as Element, null);
        event.dataTransfer.setData("text/plain",
            (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
    }
}

function dragOver(event: DragEvent) {
    event.preventDefault();
    return false;
}

function drop(event: DragEvent) {
    if (event.dataTransfer) {
        const offset = event.dataTransfer.getData("text/plain").split(',');
        customDraggable.value.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
        customDraggable.value.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        event.preventDefault();
        return false;
    }
}


</script>

<template>
    <main>
        <h1>Drag & Drop</h1>
        <div ref="parent"
            class="drag-drop-wrapper">
            <div v-for="(box, i) in boxes"
                :key="box"
                class="draggable"
                :class="`box-${(i + 1).toString()}`">
                {{ box }}
            </div>

        </div>
        <div class="draggable custom"
            draggable="true"
            ref="customDraggable">
            MOVE ME!
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    user-select: none;

    & .drag-drop-wrapper {
        position: relative;
        width: 30rem;
        height: 30rem;
        border: 3px dotted var(--color-text);
        padding: 1rem;
    }

    & .draggable {
        position: absolute;
        width: 5rem;
        height: 5rem;
        border: 2px solid var(--color-text);
        display: flex;
        padding: 0.5rem;
        align-items: center;
        justify-content: center;
        cursor: grab;
        background-color: var(--vt-c-vue-darkgreen);
        color: var(--color-text);
        font-weight: 700;

        &.box-1 {
            left: 1rem;
            top: 1rem;
        }

        &.box-2 {
            left: 3rem;
            top: 7rem;
        }

        &.box-3 {
            left: 5rem;
            top: 13rem;
        }

        &.box-4 {
            left: 7rem;
            top: 19rem;
        }

        &.box-5 {
            left: 11rem;
            top: 4rem;
        }

        &.box-6 {
            left: 13rem;
            top: 10rem;
        }

        &.custom {
            right: 1rem;
            bottom: 1rem;
            text-align: center;
            background-color: var(--vt-c-vue-green);
            color: black;
        }

    }
}
</style>