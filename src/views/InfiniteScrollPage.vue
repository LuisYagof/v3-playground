<script setup lang="ts">
import InfiniteScroll from '@/components/InfiniteScroll.vue'
</script>

<template>
  <main>
    <h1>Infinite scroll</h1>
    <InfiniteScroll />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
