<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { RouterLink } from 'vue-router'
import NavigationMain from '@/components/molecules/NavigationMain.vue'
</script>

<template>
  <header className="px-8 py-5">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <RouterLink to="/">
        <img class="h-8 w-auto" :src="logo" alt="Cottage Booker Logo" />
      </RouterLink>

      <NavigationMain />
    </div>
  </header>
</template>
