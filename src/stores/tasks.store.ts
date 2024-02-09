import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('Tasks', () => {
  const tasks = ref([{ text: 'Try out the latest Pinia syntax', priority: true, id: 0 }])
  const newTask = ref('')

  return { tasks, newTask }
})
