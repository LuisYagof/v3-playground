<script setup lang="ts">
// IMPORTS
import InactivityCountdown from '@/components/core/InactivityCountdown.vue';
</script>

<template>
    <main>
        <h1>Screen Inactivity</h1>
        <InactivityCountdown />
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>
