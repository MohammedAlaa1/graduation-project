"use client"
import { trpc } from "../lib/trpc/trpc"
import { TextInput, Text, Button, Group, Box } from "@mantine/core"
import { useForm } from "@mantine/form"

export default function HelloTRPC() {
  //get data from API
  // let apiData = fetch(..)

  //    // where: { email: customEmail },

  let { data: patients } = trpc.patient.findManyPatient.useQuery({
    where: { email: "mo2@prisma.io" },
  })

  let { data: usersData } = trpc.getUsers.useQuery()

  // FIRST STEP FOR DATA MUTATION (CREATE/UPDATE etc)
  let insertNewPatient = trpc.patient.createOnePatient.useMutation({
    onSuccess: (data, variables, context) => {
      console.log("SUCCESS", data)
      // allow user to log in
      // create pdf based on form data
    },
  })

  const saveFormDataToDB = async (formData) => {
    console.log("USER DATA", formData)
    //essential
    insertNewPatient.mutate({
      data: {
        address: formData.address,
        name: formData.name,
        email: formData.email,
        age: parseInt(formData.age),
        phoneNumber: parseInt(formData.phoneNumber),
      },
    })
  }

  const form = useForm({
    initialValues: {
      email: "",
      age: 10,
      address: "",
      name: "",
      phoneNumber: 10,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })

  return (
    <>
      {/*usersData &&
        usersData.map((user) => (
          <>
            <p>Hello, {user.name}</p>
            <Text c="red.4" fs={"italic"} style={{ fontSize: "25px" }}>
              {user.age}
            </Text>
          </>
        ))*/}

      {patients &&
        patients.map((patient) => (
          <>
            <p key={patient.id}>Hello, {patient.name}</p>
            <Text c="red.4" fs={"italic"} style={{ fontSize: "25px" }}>
              {patient.email}
            </Text>
            <Text c="teal.4">{patient.age}</Text>
          </>
        ))}

      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => saveFormDataToDB(values))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <TextInput
            withAsterisk
            label="address"
            placeholder="Address"
            {...form.getInputProps("address")}
          />

          <TextInput
            withAsterisk
            label="Name"
            placeholder="your name"
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            type="number"
            label="age"
            placeholder="age"
            {...form.getInputProps("age")}
          />

          <TextInput
            withAsterisk
            type="number"
            label="phone Number"
            placeholder="number"
            {...form.getInputProps("phoneNumber")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  )
}
