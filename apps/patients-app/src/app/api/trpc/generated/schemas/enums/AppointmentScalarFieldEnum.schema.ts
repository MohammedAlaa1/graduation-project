import { z } from "zod"

export const AppointmentScalarFieldEnumSchema = z.enum([
  "id",
  "reasonForVisit",
  "bookingDate",
  "appointmentDate",
  "isCanceled",
  "doctorId",
  "patientId",
])
