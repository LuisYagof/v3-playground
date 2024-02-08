import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('Tasks', () => {
  const tasks = ref([{ text: 'Try out the latest Pinia syntax', priority: true }])
  const newTask = ref('')

  return { tasks, newTask }
})