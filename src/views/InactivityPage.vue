<script setup lang="ts">
// IMPORTS
import AppCountdown from '@/components/core/AppCountdown.vue';
</script>

<template>
    <main>
        <h1>Screen Inactivity</h1>
        <AppCountdown />
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
