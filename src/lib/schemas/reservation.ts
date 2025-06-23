import { CalendarDate } from '@internationalized/date'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const calendarDateSchema = z.custom<CalendarDate>((val) => val instanceof CalendarDate, {
  message: 'Invalid date format',
})

const dateRangeSchema = z
  .object({
    start: calendarDateSchema,
    end: calendarDateSchema,
  })
  .refine(
    (data) => {
      return data.start.compare(data.end) <= 0
    },
    {
      message: 'Check-out date must be after check-in date',
      path: ['end'],
    },
  )
  .refine(
    (data) => {
      const today = new CalendarDate(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        new Date().getDate(),
      )
      return data.start.compare(today) >= 0
    },
    {
      message: 'Check-in date cannot be in the past',
      path: ['start'],
    },
  )

const reservationSchemaRaw = z.object({
  dateRange: dateRangeSchema,
  numberOfGuests: z
    .number()
    .min(1, 'At least 1 guest required.')
    .max(10, 'Maximum 10 guests allowed.')
    .or(z.string().pipe(z.coerce.number().min(1).max(10))),
  email: z.string().email('Please enter a valid email address.'),
  phone: z
    .string()
    .min(10, 'Phone number needs at least 10 digits.')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number.'),
  message: z.string().max(500, 'Message must be less than 500 characters.').optional(),
})

export const reservationSchema = toTypedSchema(reservationSchemaRaw)
