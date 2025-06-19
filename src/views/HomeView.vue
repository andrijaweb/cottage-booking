<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { logout } from '@/services/auth'

const handleLogout = async () => {
  await logout()

  console.log('Successfully logged out!')
}
</script>

<template>
  <main>
    <p>HOMEPAGE</p>
    <Button @click="handleLogout">Logout</Button>
  </main>
</template>
