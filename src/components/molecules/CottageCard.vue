<script setup lang="ts">
import useAppNavigation from '@/composables/useAppNavigation'

const { router } = useAppNavigation()

const handleCardClick = () => {
  router.push('/cottage/1')
}
</script>

<template>
  <div class="group cursor-pointer" @click="handleCardClick">
    <div class="relative overflow-hidden rounded-2xl mb-6">
      <img
        src="../../assets/imgs/cottage-1.jpg"
        alt="Forest Retreat Cottage"
        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-4 left-4">
        <div class="flex items-center space-x-2">
          <i class="pi pi-star-fill w-4 h-4 text-yellow-400" />
          <span class="text-sm font-medium">4.9</span>
        </div>
      </div>
    </div>
    <h3 class="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
      Forest Retreat
    </h3>
    <p class="text-gray-400 mb-4 leading-relaxed">
      A secluded cabin nestled deep in the pine forest, perfect for digital detox and reconnecting
      with nature.
    </p>
    <div class="flex flex-wrap gap-4 items-center justify-between">
      <div class="flex items-center space-x-4 text-sm text-gray-400">
        <span class="flex items-center space-x-1">
          <i class="pi pi-users w-4 h-4" />
          <span>4 guests</span>
        </span>
        <span class="flex items-center space-x-1">
          <i class="pi pi-users w-4 h-4" />
          <span>2 beds</span>
        </span>
      </div>
      <div class="text-right">
        <span class="text-2xl font-bold text-emerald-400">$180</span>
        <span class="text-gray-400">/night</span>
      </div>
    </div>
  </div>
</template>
