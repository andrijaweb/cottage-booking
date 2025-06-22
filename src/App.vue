<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/organisms/HeaderSection.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen w-full overflow-x-auto">
    <HeaderSection />
    <RouterView />
  </div>
</template>
