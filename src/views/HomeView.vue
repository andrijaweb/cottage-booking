<script setup lang="ts">
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue'
import CottageCard from '@/components/molecules/CottageCard.vue'
import FiltersSidebar from '@/components/organisms/FiltersSidebar.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import { getCottages } from '@/services/cottages'
import { useUserStore } from '@/stores/useUserStore'
import type { Cottage } from '@/types/cottage'
import { onMounted, ref } from 'vue'

const { currentUser } = useUserStore()
console.log('Current user: ', currentUser)

const cottages = ref<Cottage[] | null>(null)
const isLoading = ref(true)
const error = ref<Error | null>(null)

onMounted(async () => {
  try {
    const data = (await getCottages()) as Cottage[]
    cottages.value = data
  } catch (err) {
    error.value = err as Error
    console.error('Failed to fetch cottages:', err)
  } finally {
    isLoading.value = false
  }
})
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
          <div v-if="isLoading" class="flex items-center justify-center">
            <LoadingSpinner class-name="size-10" />
          </div>

          <CottageCard v-else v-for="cottage in cottages" :key="cottage.id" :cottage="cottage" />
        </div>
      </div>
    </div>
  </main>
</template>
