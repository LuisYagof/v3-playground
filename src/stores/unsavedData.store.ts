import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasks.store'
import type { UserAction } from '@/types/store/tasksStore.types'

export const useUnsavedDataStore = defineStore('UnsavedData', () => {
  const { newTask } = storeToRefs(useTasksStore())

  const displaySaveDataModal = ref(false)

  const unsavedChanges = computed(() => newTask.value !== '')

  const delayedAction = ref(null as UserAction | null)

  const setAction = (action: Function, params: any[] = []) => {
    delayedAction.value = { action, params }
  }

  const clearAction = () => {
    delayedAction.value = null
  }

  return { displaySaveDataModal, unsavedChanges, delayedAction, setAction, clearAction }
})
