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
    let filteredDocs = dataSet?.filter(function(el){
      return el.specialty === value
    })
    let names = filteredDocs?.map((obj)=>obj.name)
    //console.log("docs names:",names)
    return names
  }

  let insertNewPatient = trpc.patient.createOnePatient.useMutation({
    onSuccess: (data, variables, context) => {
      console.log("SUCCESS", data)
      //run custom code on success
    },
  })
  const saveFormDataToDB = async ({ values }) => {
    console.log("SAVING USER DATA", values)

  //   insertNewPatient.mutate({
    //   data: {
      //   reasonForVisit: values.reasonForVisit,
        // appointmentDate: values.bookingDate,
         
      // },
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
