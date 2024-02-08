<script setup lang='ts'>
// IMPORTS
import { onMounted, ref } from 'vue';

// LIFECYCLE
onMounted(() => {
    beginListeningToScreenEvents()
})

// DATA
let inactivityTimeout: ReturnType<typeof setTimeout> | undefined = undefined
let oneSecondTimeout: ReturnType<typeof setTimeout> | undefined = undefined
const secondsRemaining = ref(60)

// FUNCTIONS
function beginListeningToScreenEvents() {
    document.addEventListener('mousemove', resetInactivityTimeout)
    document.addEventListener('click', resetInactivityTimeout)
    resetInactivityTimeout()
}

function resetInactivityTimeout() {
    resetCountdown()
    startCountdown()
    const oneMinInMs = 1 * 60 * 1000
    clearTimeout(inactivityTimeout)
    inactivityTimeout = setTimeout(() => {
        window.alert('The app was inactive for one minute')
    }, oneMinInMs)
}

function startCountdown() {
    if (secondsRemaining.value > 0) {
        clearTimeout(oneSecondTimeout)
        oneSecondTimeout = setTimeout(() => {
            secondsRemaining.value--
            startCountdown()
        }, 1000);
    }

}

function resetCountdown() {
    secondsRemaining.value = 60
}
</script>

<template>
    <span>Countdown:
        <span :style="{ color: 'var(--vt-c-vue-green)', fontSize: '1.5rem' }">
            {{ secondsRemaining }}
        </span>
    </span>
</template>