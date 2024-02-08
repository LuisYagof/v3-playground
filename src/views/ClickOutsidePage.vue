<script setup lang="ts">
// IMPORTS
import { computed, ref } from 'vue';

// DATA
const paddings = { small: '1rem', big: '4rem' }
const boxPadding = ref(paddings.small)
const boxText = computed(() => boxPadding.value === paddings.small ? 'Click here to increase size!' : 'Click outside to decrease size!')

// FUNCTIONS
function increaseSize() {
    boxPadding.value = paddings.big
}

function decreaseSize() {
    boxPadding.value = paddings.small
}
</script>

<template>
    <main>
        <h1>Click Outside</h1>
        <div class="button-wrapper">
            <button @click="increaseSize"
                v-click-outside="decreaseSize"
                class="button">
                <span>{{ boxText }}</span>
            </button>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-wrapper {
    width: 20rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button {
    cursor: pointer;
    background-color: var(--vt-c-vue-green);
    color: white;
    font-family: 'Segoe UI';
    padding: v-bind(boxPadding);
    transition: padding 1s;
}
</style>
