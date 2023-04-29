import BookingForm from "./components/BookingForm"
import { trpc } from "@/lib/trpc/trpc"

export default function Booking() {
  console.log("BOOKING ROOT COMPONENT")

  let { data: doctors } = trpc.doctor.findManyDoctor.useQuery({})

  const doctorsSpecialtiesSet = () => {
    let docSpec = new Set()

    doctors &&
      doctors.map((doc) => {
        return docSpec.add(doc.specialty)
      })
    return docSpec
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
    />
  )
}
