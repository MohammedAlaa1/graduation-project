import { t } from "./helpers/createRouter";
import { patientsRouter } from "./Patient.router";
import { doctorsRouter } from "./Doctor.router";
import { appointmentsRouter } from "./Appointment.router";

export const appRouter = t.router({
  patient: patientsRouter,
  doctor: doctorsRouter,
  appointment: appointmentsRouter
})

