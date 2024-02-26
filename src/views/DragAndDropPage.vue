<script setup lang="ts">
// IMPORTS
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";

// DATA
const sixElementArray = Array.from({ length: 6 }, (value, index) => ++index)
const [parent, boxes] = useDragAndDrop(sixElementArray, { plugins: [animations()] });

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
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & .drag-drop-wrapper {
        /* display: flex;
        flex-wrap: wrap;
        gap: 1rem; */
        position: relative;
        width: 30rem;
        height: 30rem;
        border: 3px dotted var(--color-text);
        border-radius: 1rem;
        padding: 1rem;

        & .draggable {
            position: absolute;
            width: 5rem;
            height: 5rem;
            border: 2px solid var(--color-text);
            border-radius: 1rem;
            display: flex;
            padding: 0.5rem;
            align-items: center;
            justify-content: center;
            cursor: grab;
            background-color: var(--vt-c-vue-darkgreen);
            color: var(--color-text);

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

        }
    }
}
</style>