import type { Models } from 'appwrite'

export type Cottage = Models.Document & {
  name: string
  description: string | null
  city: string
  country: string
  price: number
  maxGuests: number
  bedrooms: number
  bathrooms: number
  facilities: string[] | null
  images: string[] | null
  isActive: boolean | null
  rating: number | null
  numReviews: number | null
  owner: string | null
  availableStartDates: Date[] | null
  availableEndDates: Date[] | null
}
