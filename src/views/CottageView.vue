<script setup lang="ts">
import ReservationForm from '@/components/forms/ReservationForm.vue'
import { Badge } from '@/components/ui/badge'

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
</script>

<template>
  <div class="container mx-auto px-4 pt-12 py-20 space-y-10">
    <div class="space-y-2.5">
      <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold font-playfair leading-tight">
        Cottage 001
      </h1>
      <div class="text-sm text-muted-foreground flex items-center gap-2.5">
        <p class="">Fruska Gora, Serbia</p>
        <span class="opacity-30">|</span>
        <div class="flex items-center space-x-2">
          <i class="pi pi-star-fill w-4 h-4 text-yellow-400" />
          <span class="text-sm font-medium">4.9</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-[2fr_1fr] gap-8 items-center">
      <img src="../assets/imgs/cottage-1.jpg" alt="small wooden cabin" class="rounded-lg" />
      <ReservationForm />
    </div>

    <div class="space-y-2.5">
      <h4 class="text-xl font-medium">About</h4>
      <p class="text-muted-foreground text-sm leading-relaxed max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et
        commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
        Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
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
</template>
