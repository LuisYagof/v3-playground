import { useRouter } from 'vue-router'
import type { RouteLocationNormalized, Router, NavigationGuardNext } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUnsavedDataStore } from '@/stores/unsavedData.store'

export function registerGuard(router: Router) {
  router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const { unsavedChanges, displaySaveDataModal } = storeToRefs(useUnsavedDataStore())
      const { setAction } = useUnsavedDataStore()

      if (unsavedChanges.value) {
        setAction(useRouter().push, [{ name: to.name }])
        displaySaveDataModal.value = true
        next(false)
      } else {
        next()
      }
    }
  )
}
