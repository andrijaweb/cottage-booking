import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

export default function useAppNavigation() {
  const router = useRouter()
  const route = useRoute()

  return { router, route }
}
