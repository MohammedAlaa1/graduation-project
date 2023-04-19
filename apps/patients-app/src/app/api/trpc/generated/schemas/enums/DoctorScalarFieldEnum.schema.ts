import { z } from "zod"

export const DoctorScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "email",
  "age",
  "phoneNumber",
  "address",
  "specialty",
  "yeasOfExperience",
])
