<script setup lang="ts">
// IMPORTS
import { ref, type Ref, type Component, markRaw } from 'vue'
import { sleep } from '@/utils/common'
import ListItem from '@/components/ListItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
import ScrollBottom from '@/components/core/ScrollBottom.vue'
import AppLoader from '@/components/core/AppLoader.vue'

// DATA
const listItems: { icon: Component, heading: string, text: string }[] = [
  {
    icon: markRaw(DocumentationIcon),
    heading: 'First item',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: markRaw(ToolingIcon),
    heading: 'Second item',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  },
  {
    icon: markRaw(EcosystemIcon),
    heading: 'Third item',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  },
  {
    icon: markRaw(CommunityIcon),
    heading: 'Fourth item',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    icon: markRaw(SupportIcon),
    heading: 'Fifth item',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
]

const dynamicListItems: Ref<typeof listItems> = ref(listItems)
const itemsAreLoading: Ref<boolean> = ref(false)

// FUNCTIONS
async function onScrollBottom() {
  itemsAreLoading.value = true
  await sleep(1000)
  dynamicListItems.value = [...dynamicListItems.value, ...listItems]
  itemsAreLoading.value = false
}
</script>

<template>
  <div class="wrapper">
    <AppLoader v-if="itemsAreLoading" />

    <div class="list-container">
      <ListItem v-for="(item, index) in dynamicListItems"
        :key="index">
        <template #icon>
          <component v-bind:is="item.icon"></component>
        </template>
        <template #heading>{{ item.heading }}</template>
        {{ item.text }}
      </ListItem>

      <ScrollBottom @reached-the-bottom="onScrollBottom" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-width: 25rem;
  min-height: 30rem;
  position: relative;

  .list-container {
    max-width: 35rem;
    max-height: 30rem;
    overflow-y: scroll;
  }
}

@media (min-width: 1024px) {
  .wrapper {
    min-width: 35rem;

    .list-container {
      max-width: 35rem;
    }
  }

}
</style>
