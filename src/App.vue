<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/organisms/HeaderSection.vue'
import FooterSection from '@/components/organisms/FooterSection.vue'
</script>

<template>
  <HeaderSection />
  <RouterView />
  <FooterSection />
</template>
