<script setup lang="ts">
import ListItem from '@/components/ListItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'

const listItems = [
  {
    icon: DocumentationIcon,
    heading: 'First item',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: ToolingIcon,
    heading: 'Second item',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: EcosystemIcon,
    heading: 'Third item',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: CommunityIcon,
    heading: 'Fourth item',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: SupportIcon,
    heading: 'Fifth item',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

]
</script>

<template>
  <div class="scroll-container">
    <ListItem v-for="(item, index) in  listItems"
      :key="index">
      <template #icon>
        <component v-bind:is="item.icon"></component>
      </template>
      <template #heading>{{ item.heading }}</template>
      {{ item.text }}
    </ListItem>
  </div>
</template>

<style>
.scroll-container {
  max-width: 35rem;
  max-height: 30rem;
  overflow-y: scroll;

}
</style>
