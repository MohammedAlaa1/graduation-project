"use client"
import { trpc } from "../../lib/trpc/trpc"
import { useForm } from "@mantine/form"
import SignUpForm from "./components/SignupForm"

export default function Signup() {
  let insertNewPatient = trpc.patient.createOnePatient.useMutation({
    onSuccess: (data, variables, context) => {
      console.log("SUCCESS", data)
      //run custom code on success
    },
  })

  const saveFormDataToDB = async ({ formData }) => {
    console.log("SAVING USER DATA", formData)

    insertNewPatient.mutate({
      data: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: parseInt(formData.age),
        phoneNumber: parseInt(formData.phoneNumber),
        address: formData.address,
      },
    })
  }

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: 10,
      phoneNumber: 5454,
      address: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })

  return <SignUpForm form={form} saveFormDataToDB={saveFormDataToDB} />
}
