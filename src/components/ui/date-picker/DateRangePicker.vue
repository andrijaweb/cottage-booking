<script setup lang="ts">
import type { DateRange } from 'reka-ui'
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { cn } from '@/lib/utils'

interface Props {
  modelValue?: DateRange
  placeholder?: string
  disabled?: boolean
  numberOfMonths?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Pick a date range',
  disabled: false,
  numberOfMonths: 2,
})

const emit = defineEmits<{
  'update:modelValue': [value: DateRange]
}>()

const df = new DateFormatter('en-US', {
  dateStyle: 'medium',
})

const value = computed({
  get: () => props.modelValue,
  set: (newValue: DateRange) => emit('update:modelValue', newValue),
})

const displayText = computed(() => {
  if (!value.value?.start) return props.placeholder

  if (value.value.end) {
    return `${df.format(value.value.start.toDate(getLocalTimeZone()))} - ${df.format(value.value.end.toDate(getLocalTimeZone()))}`
  }

  return df.format(value.value.start.toDate(getLocalTimeZone()))
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :disabled="disabled"
        :class="
          cn(
            'w-[280px] justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            props.class,
          )
        "
      >
        {{ displayText }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <RangeCalendar v-model="value" initial-focus :number-of-months="numberOfMonths" />
    </PopoverContent>
  </Popover>
</template>
