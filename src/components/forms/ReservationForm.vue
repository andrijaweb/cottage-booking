<script setup lang="ts">
import { useForm } from 'vee-validate'
import { Button } from '../ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { reservationSchema } from '@/lib/schemas/reservation'
import DateRangePicker from '../ui/date-picker/DateRangePicker.vue'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { toDate } from 'reka-ui/date'

const form = useForm({
  validationSchema: reservationSchema,
})

const onSubmit = form.handleSubmit((values) => {
  const data = {
    ...values,
    dateRange: {
      start: toDate(values.dateRange.start),
      end: toDate(values.dateRange.end),
    },
  }

  console.log('Form submitted!', data)
})
</script>

<template>
  <form @submit="onSubmit" class="space-y-6">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input v-bind="componentField" placeholder="andrija@example.com" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="phone">
      <FormItem>
        <FormLabel>Phone number</FormLabel>
        <FormControl>
          <Input v-bind="componentField" placeholder="+381612367016" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="dateRange">
      <FormItem>
        <FormLabel>Check-in and Check-out Dates</FormLabel>
        <FormControl>
          <DateRangePicker v-bind="componentField" placeholder="Select your stay dates" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="numberOfGuests">
      <FormItem>
        <FormLabel>Number of guests</FormLabel>
        <FormControl>
          <Input type="number" v-bind="componentField" placeholder="Select a number of guests" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="message">
      <FormItem>
        <FormLabel>Message (optional)</FormLabel>
        <FormControl>
          <Textarea v-bind="componentField" placeholder="Your message here..." />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit" class="w-full"> Reserve </Button>
  </form>
</template>
