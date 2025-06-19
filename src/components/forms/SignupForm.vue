<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ref, type HTMLAttributes } from 'vue'
import { RouterLink } from 'vue-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { signup } from '@/services/auth'
import useAppNavigation from '@/composables/useAppNavigation'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { router } = useAppNavigation()

const formFields = ref<{ email: string; password: string; name: string }>({
  email: '',
  password: '',
  name: '',
})

const handleSubmit = async () => {
  const newUser = await signup(formFields.value)

  if (newUser) {
    router.push('/')
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
            </div>
            <div class="grid gap-3">
              <Label for="password">Password</Label>
              <Input v-model="formFields.password" id="password" type="password" required />
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
            </div>
            <Button type="submit" class="w-full"> Create account </Button>
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
