<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getAccount, login } from '@/services/auth'
import useAppNavigation from '@/composables/useAppNavigation'
import { loginSchema, type LoginSchemaFormValues } from '@/lib/schemas/login'
import { useUserStore } from '@/stores/useUserStore'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { router, toast } = useAppNavigation()
const userStore = useUserStore()

const isLoading = ref(false)
const loginUser = ref<LoginSchemaFormValues>({
  email: '',
  password: '',
})

const handleSubmit = async () => {
  const result = loginSchema.safeParse(loginUser.value)
  if (!result.success) {
    toast.error('Invalid credentials.')
    return
  }

  isLoading.value = true
  try {
    await login({ email: result.data.email, password: result.data.password })

    const user = await getAccount()
    userStore.setCurrentUser(user)
    router.push({ name: 'home' })
    toast.success('Successfully logged in!')

    loginUser.value.email = ''
    loginUser.value.password = ''
  } catch {
    console.log('Error during login')
    toast.error('Invalid credentials.')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div :class="cn('space-y-4 w-full max-w-xl mx-auto', props.class)">
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription> Enter your email below to login to your account </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-col gap-6">
            <div class="grid gap-3">
              <Label for="email">Email</Label>
              <Input
                v-model="loginUser.email"
                id="email"
                type="email"
                placeholder="m@example.com"
              />
            </div>
            <div class="grid gap-3">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a href="#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Input v-model="loginUser.password" id="password" type="password" />
            </div>
            <Button
              type="submit"
              class="w-full cursor-pointer"
              :loading="isLoading"
              :disabled="isLoading"
            >
              Login
            </Button>
          </div>
          <div class="mt-4 text-center text-sm">
            Don't have an account?
            <RouterLink to="/signup" class="underline underline-offset-4"> Sign up </RouterLink>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
