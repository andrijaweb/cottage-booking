import * as z from 'zod/v4'

export const signupSchema = z.object({
  email: z.email().min(1, 'Email is required.'),
  password: z.string().min(8, 'Password must be at least 8 characters long.'),
  name: z.string().min(1, 'Name is required.'),
})

export type SignupSchemaFormValues = z.infer<typeof signupSchema>
