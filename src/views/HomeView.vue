<script setup lang="ts">
import CottageCard from '@/components/molecules/CottageCard.vue'
import FiltersSidebar from '@/components/organisms/FiltersSidebar.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import { useUserStore } from '@/stores/useUserStore'

const { currentUser } = useUserStore()
console.log('Current user: ', currentUser)
</script>

<template>
  <main class="flex flex-col flex-1">
    <HeroSection />

    <div class="container mx-auto px-4 py-16 space-y-10">
      <div class="text-center">
        <h3 class="text-4xl sm:text-6xl md:text-7xl font-bold font-playfair leading-tight">
          Explore
        </h3>
        <p class="text-muted-foreground">Take a few clicks and book your favorite cottage.</p>
      </div>

      <div class="grid sm:grid-cols-[250px_1fr] gap-5">
        <FiltersSidebar />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CottageCard v-for="n in 6" :key="n" />
        </div>
      </div>
    </div>
  </main>
</template>
