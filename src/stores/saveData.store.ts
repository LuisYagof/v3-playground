import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSaveDataStore = defineStore('saveData', () => {
  const tasks = ref([{ text: 'Try out the latest Pinia syntax', priority: true }])
  const newTask = ref('')

  return { tasks, newTask }
})
