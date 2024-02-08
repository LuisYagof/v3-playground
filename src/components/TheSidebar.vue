<script setup lang="ts">
// PROPS
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ props.title }}</h1>
    <h3>
      Welcome to my sandbox
    </h3>
  </div>
</template>

<style scoped>
.greetings {
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  h1,
  h3 {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .greetings {

    h1,
    h3 {
      text-align: left;
    }
  }
}
</style>
