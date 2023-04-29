import BookingForm from "./components/BookingForm"
import { trpc } from "@/lib/trpc/trpc"

export default function Booking() {
  console.log("BOOKING ROOT COMPONENT")

  let { data: doctors } = trpc.doctor.findManyDoctor.useQuery({})
  console.log("Doctors data TRPC:", doctors)

  // FUNCTION TO RETURN SET WITH SPECIALTIES
  const doctorsSpecialtiesSet = () => {
    let docSpec = new Set()

    doctors &&
      doctors.map((doc) => {
        return docSpec.add(doc.specialty)
      })
    return docSpec
  }

  //match = speciality (NEUROLOGY)
  //Data set = doctors

  // WRITE A FUNCTION THAT RETURN A DOCTOR NAME BASED ON SPECIALITY

  const getDoctorNameArray = ({ value }) => {
    console.log("SPECIALITY DATA from SELECTOR:", value)
    let dataSet = doctors
    // DO LOGIC HERE
    return null
  }

  let insertNewPatient = trpc.patient.createOnePatient.useMutation({
    onSuccess: (data, variables, context) => {
      console.log("SUCCESS", data)
      //run custom code on success
    },
  })
  const saveFormDataToDB = async ({ values }) => {
    console.log("SAVING USER DATA", values)

    // insertNewPatient.mutate({
    //   data: {
    //     reasonForVisit: values.reasonForVisit,
    //     date: values.bookingDate,
    //   },
    // })
  }

  return (
    <BookingForm
      docSpecialities={doctorsSpecialtiesSet}
      saveBooking={saveFormDataToDB}
      getSpecialitySelector={getDoctorNameArray}
    />
  )
}
