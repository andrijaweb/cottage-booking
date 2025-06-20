import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'

export default function useAppNavigation() {
  const router = useRouter()
  const route = useRoute()
  const toast = useToast()

  return { router, route, toast }
}
