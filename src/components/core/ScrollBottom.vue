<script setup lang="ts">
// IMPORTS
import { onMounted, onUnmounted, ref } from 'vue'
import type { Ref } from 'vue'

// EMITS
const emits = defineEmits({
    reachedTheBottom() {
        return true
    },
})

// DATA
let observer: IntersectionObserver
const listBottomRef: Ref<Element | null> = ref(null)

// HOOKS
onMounted(() => {
    startObserver()
})

onUnmounted(() => {
    observer.disconnect()
})

// METHODS
function startObserver() {
    const intersectionOptions = { root: null, rootMargin: '0px', threshold: 0.1 }
    observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            emits('reachedTheBottom')
        }
    }, intersectionOptions)

    if (listBottomRef.value) observer.observe(listBottomRef.value)
}
</script>

<template>
    <div class="list-bottom"
        ref="listBottomRef"
        :style="{ height: '1px' }"></div>
</template>
