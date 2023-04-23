"use client"
import { trpc } from "../../lib/trpc/trpc"
import { Signup } from "./Signup"

export default function signupTRPC() {
  let insertNewPatient = trpc.patient.createOnePatient.useMutation({
    onSuccess: (data, variables, context) => {
      console.log("SUCCESS", data)
    },
  })
  const saveFormDataToDB = async (formData) => {
    console.log("USER DATA", formData)

    insertNewPatient.mutate({
      data: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: parseInt(formData.age),
      },
    })
  }

  return <Signup saveFormDataToDB={saveFormDataToDB()} />
}
