import { useState } from "react"
import BookingForm from "./components/BookingForm"
import { trpc } from "@/config/trpc/trpc"

export default function Booking() {
  console.log("BOOKING ROOT COMPONENT")

  let { data: doctors } = trpc.doctor.findManyDoctor.useQuery({})
  console.log("Doctors data TRPC:", doctors)

  // FUNCTION TO RETURN SET WITH SPECIALTIES
  const getDoctorsSpecialties = () => {
    let docSpec = new Set()

    doctors &&
      doctors?.map((doc) => {
        return docSpec.add(doc.specialty)
      })
    return docSpec
  }

  const getDoctorNamesBySpecialty = ({ value }) => {
    let names = []
    value &&
      doctors
        ?.filter((doctor) => {
          return doctor.specialty === value
        })
        .map((doctor) => names.push({ label: doctor.name, value: doctor.id }))
    console.log("VALUE IS: ", value, names)
    return names
  }

  let insertNewPatient = trpc.appointment.createOneAppointment.useMutation({
    onSuccess: (data, variables, context) => {
      console.log("SUCCESS", data)
      //run custom code on success
    },
  })
  const saveFormDataToDB = async ({ values }) => {
    console.log("SAVING USER DATA", values)
    insertNewPatient.mutate({
      data: {
        patientId: "1f0b7dbe-f5dc-4c0e-a49e-dd29fe53ce52",
        reasonForVisit: values.reasonForVisit,
        appointmentDate: new Date(values.appointmentDate).toString(),
        doctorId: values.doctor,
      },
    })
  }

  return (
    <BookingForm
      getDoctorsSpecialties={getDoctorsSpecialties}
      getDoctorNamesBySpecialty={getDoctorNamesBySpecialty}
      saveFormDataToDB={saveFormDataToDB}
    />
  )
}
