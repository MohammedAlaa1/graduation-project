"use client"
import { trpc } from "../lib/trpc/trpc"

export default function HelloTRPC() {
  let { data: patients } = trpc.patient.useQuery()

  console.log(patients)

  return (
    <>
      {patients &&
        patients.map((patient) => (
          <p key={patient.id}>Hello, {patient.name}</p>
        ))}
    </>
  )
}
