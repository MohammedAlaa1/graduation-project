import { t } from "./helpers/createRouter"
import { patientsRouter } from "./Patient.router"
import { doctorsRouter } from "./Doctor.router"
import { appointmentsRouter } from "./Appointment.router"

//DUMMY USER DATA / FAKE DB DATA
let users = [
  {
    name: "Vic",
    age: "34",
  },
  {
    name: "Mo",
    age: "25",
  },
  {
    name: "Charlie",
    age: "99",
  },
]

export const appRouter = t.router({
  patient: patientsRouter,
  doctor: doctorsRouter,
  appointment: appointmentsRouter,
  getUsers: t.procedure.query(() => {
    return users
  }),
})
