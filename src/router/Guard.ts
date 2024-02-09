import type { RouteLocationNormalized, Router, NavigationGuardNext } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasks.store'
import { useUnsavedDataStore } from '@/stores/unsavedData.store'

export function registerGuard(router: Router) {
  router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const { newTask } = storeToRefs(useTasksStore())
      const { unsavedChanges } = storeToRefs(useUnsavedDataStore())

      if (unsavedChanges.value) {
        if (window.confirm('There are unsaved changes. Do you wish to continue anyways?')) {
          newTask.value = ''
          next()
        } else next(false)
      } else {
        next()
      }
    }
  )
}
