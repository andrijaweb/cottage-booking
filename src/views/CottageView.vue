<script setup lang="ts">
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue'
import ReservationForm from '@/components/forms/ReservationForm.vue'
import { Badge } from '@/components/ui/badge'
import useAppNavigation from '@/composables/useAppNavigation'
import { getCottageBySlug } from '@/services/cottages'
import type { Cottage } from '@/types/cottage'
import { onMounted, ref } from 'vue'

const { route } = useAppNavigation()

const facilities = [
  {
    name: 'Free Wi-Fi',
    icon: 'pi pi-wifi',
  },
  {
    name: 'Free Parking',
    icon: 'pi pi-car',
  },
  {
    name: 'Air Conditioning',
    icon: 'pi pi-sun',
  },
]

const cottage = ref<Cottage | null>(null)
const isLoading = ref(true)
const error = ref<Error | null>(null)

onMounted(async () => {
  try {
    const data = await getCottageBySlug(route.params.slug as string)
    console.log(data)
    cottage.value = data
  } catch (err) {
    error.value = err as Error
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center py-12">
    <LoadingSpinner class-name="size-14" />
  </div>

  <div v-else class="container mx-auto px-4 pt-12 py-20 space-y-10">
    <div v-if="!cottage">No cottage found!</div>

    <div v-else class="space-y-5">
      <div class="space-y-2.5">
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold font-playfair leading-tight">
          {{ cottage.name }}
        </h1>
        <div class="text-sm text-muted-foreground flex items-center gap-2.5">
          <p class="">{{ cottage.city }}, {{ cottage.country }}</p>
          <span class="opacity-30">|</span>
          <div class="flex items-center space-x-2">
            <i class="pi pi-star-fill w-4 h-4 text-yellow-400" />
            <span class="text-sm font-medium">{{ cottage.rating }}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-[2fr_1fr] gap-8 items-center">
        <img
          :src="cottage.images?.length ? cottage.images[0] : undefined"
          :alt="cottage.name"
          class="rounded-lg"
        />
        <ReservationForm />
      </div>

      <div class="space-y-2.5">
        <h4 class="text-xl font-medium">About</h4>
        <p class="text-muted-foreground text-sm leading-relaxed max-w-4xl">
          {{ cottage.description }}
        </p>
      </div>

      <div class="space-y-2.5">
        <h4 class="text-xl font-medium">Facilities</h4>
        <ul class="flex flec-wrap gap-5 max-w-4xl">
          <li v-for="facility in facilities" :key="facility.name">
            <Badge class="flex items-center gap-2.5 px-4 py-1.5">
              <i :class="facility.icon + ' text-base'"></i>
              <span class="font-semibold">
                {{ facility.name }}
              </span>
            </Badge>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
