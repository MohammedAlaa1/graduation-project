import { t } from "./helpers/createRouter"
import { patientsRouter } from "./Patient.router"
import { doctorsRouter } from "./Doctor.router"
import { appointmentsRouter } from "./Appointment.router"

export const appRouter = t.router({
  // patient: patientsRouter,
  doctor: doctorsRouter,
  appointment: appointmentsRouter,
  patient: t.procedure.query(({ ctx }) => {
    return patients
  }),
})

//DUMMY DATA - to be replaced with real Data from Postgres DB

interface Patient {
  id: string
  name: string
  email: string
  age: number
  phoneNumber: number
  address: string
}

const patients: Patient[] = [
  {
    id: "1",
    name: "Vic",
    email: "vic@prisma.io",
    age: 34,
    phoneNumber: 546434,
    address: "WorldWide",
  },
  {
    id: "2",
    name: "Mo",
    email: "Mo@prisma.io",
    age: 24,
    phoneNumber: 457764,
    address: "Egypt",
  },
]
