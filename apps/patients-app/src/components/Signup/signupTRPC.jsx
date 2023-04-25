"use client"
import { trpc } from "../../lib/trpc/trpc"
import { Signup } from "./Signup"
import { useForm } from "@mantine/form"

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

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: formData.password,
      age: 10,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })

  return {<SignUp />}
}
