import { z } from "zod"

export const PatientScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "email",
  "age",
  "phoneNumber",
  "address",
])
