import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref(null)
  const isLoading = ref(false)

  function setIsLoading(value: boolean) {
    isLoading.value = value
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setCurrentUser(user: any) {
    currentUser.value = user
  }

  return {
    currentUser,
    isLoading,
    setIsLoading,
    setCurrentUser,
  }
})
