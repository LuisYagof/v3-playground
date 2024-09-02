<script setup
  lang="ts">
  import { ref } from 'vue'
  import { useTransition, TransitionPresets } from '@vueuse/core'
  import InfiniteScroll from '@/components/InfiniteScroll.vue'

  // DATA
  const source = ref(0)
  const output = useTransition(source, {
    duration: 5000,
    transition: TransitionPresets.easeOutExpo,
  })
  source.value = 5000
</script>

<template>
  <main>
    <h1>Infinite scroll - {{ Math.round(output) }}+ items</h1>
    <InfiniteScroll />
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
