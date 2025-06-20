<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ref, type HTMLAttributes } from 'vue'
import { RouterLink } from 'vue-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { getAccount, login, signup } from '@/services/auth'
import useAppNavigation from '@/composables/useAppNavigation'
import { signupSchema, type SignupSchemaFormValues } from '@/lib/schemas/signup'
import * as z from 'zod/v4'
import { useUserStore } from '@/stores/useUserStore'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { router, toast } = useAppNavigation()
const { setCurrentUser } = useUserStore()

const isLoading = ref(false)
const errors = ref<{
  email?: string[] | undefined
  password?: string[] | undefined
  name?: string[] | undefined
}>()
const formFields = ref<SignupSchemaFormValues>({
  email: '',
  password: '',
  name: '',
})

const handleSubmit = async () => {
  errors.value = undefined

  const result = signupSchema.safeParse(formFields.value)
  if (!result.success) {
    const flattened = z.flattenError(result.error)
    console.log(flattened)
    errors.value = flattened.fieldErrors
    toast.error('Invalid credentials.')
    return
  }

  isLoading.value = true

  try {
    await signup(result.data)
    await login({ email: result.data.email, password: result.data.password })

    const user = await getAccount()
    setCurrentUser(user)
    router.push('/')
    toast.success('Successfully created account!')

    formFields.value.email = ''
    formFields.value.password = ''
    formFields.value.name = ''
  } catch {
    toast.error('An error occurred while creating your account.')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div :class="cn('space-y-4 w-full max-w-xl mx-auto', props.class)">
    <Card>
      <CardHeader>
        <CardTitle>Create new account</CardTitle>
        <CardDescription> Fill required fields in order to create new account. </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-col gap-6">
            <div class="grid gap-3">
              <Label for="email">Email</Label>
              <Input
                v-model="formFields.email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <p v-if="errors?.email" class="text-sm text-red-500">{{ errors.email[0] }}</p>
            </div>
            <div class="grid gap-3">
              <Label for="password">Password</Label>
              <Input v-model="formFields.password" id="password" type="password" required />
              <p v-if="errors?.password" class="text-sm text-red-500">{{ errors.password[0] }}</p>
            </div>
            <div class="grid gap-3">
              <Label for="name">Name</Label>
              <Input
                v-model="formFields.name"
                id="name"
                type="name"
                placeholder="John Doe"
                required
              />
              <p v-if="errors?.name" class="text-sm text-red-500">{{ errors.name[0] }}</p>
            </div>
            <Button
              type="submit"
              class="w-full cursor-pointer"
              :loading="isLoading"
              :disabled="isLoading"
            >
              Create account
            </Button>
          </div>
          <div class="mt-4 text-center text-sm">
            Already have an account?
            <RouterLink to="/login" class="underline underline-offset-4"> Sign in </RouterLink>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
