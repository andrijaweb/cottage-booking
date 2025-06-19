import * as z from 'zod/v4'

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
})

export type LoginSchemaFormValues = z.infer<typeof loginSchema>
