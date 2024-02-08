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

        <div @click="increaseSize"
            v-click-outside="decreaseSize"
            class="box">
            <span>{{ boxText }}</span>
        </div>

    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.box {
    cursor: pointer;
    background-color: var(--vt-c-vue-green);
    padding: v-bind(boxPadding);
    transition: padding 1s;
}
</style>
