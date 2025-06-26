<template>
  <div class="min-h-screen flex items-center" :style="backgroundStyle">
    <div class="container mx-auto px-4 pb-10 text-white">
      <h1 class="text-5xl sm:text-7xl md:text-9xl font-playfair">Welcome to CottageBooker</h1>
      <p class="my-5 max-w-2xl text-xl">
        Your trusted platform for discovering and booking charming cottages in beautiful, serene
        locations. At CottageBooking, we believe in helping people reconnect with nature.
      </p>
      <Button class="bg-yellow-500" size="lg">
        <RouterLink to="/"> Explore Cottages </RouterLink>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import bgImage from '@/assets/imgs/about-bg.jpg'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'

const backgroundStyle = computed(() => ({
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${bgImage}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))
</script>
