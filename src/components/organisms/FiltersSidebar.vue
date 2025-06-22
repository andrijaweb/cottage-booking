<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import DateRangePicker from '@/components/ui/date-picker/DateRangePicker.vue'

const modelValue = ref([0, 10000])
</script>

<template>
  <aside class="block space-y-5">
    <div class="flex items-center justify-between gap-5">
      <h4 class="text-lg font-medium">Filters:</h4>
      <Button variant="link" class="text-emerald-400">Reset</Button>
    </div>

    <Separator />

    <div class="space-y-2.5 max-w-[250px]">
      <h4 class="text-lg font-medium">Price:</h4>
      <div class="space-y-2.5">
        <Slider v-model="modelValue" :max="10000" :min="0" :step="200" />
        <div class="flex justify-between gap-4 text-sm text-muted-foreground">
          <span>Min: ${{ modelValue[0] }}</span>
          <span>Max: ${{ modelValue[1] }}</span>
        </div>
      </div>
    </div>

    <div class="space-y-2.5">
      <h4 class="text-lg font-medium">Check-in / Check-out:</h4>
      <DateRangePicker />
    </div>
  </aside>
</template>
