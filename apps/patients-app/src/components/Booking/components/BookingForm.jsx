import {
  NumberInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Select,
  useMantineColorScheme,
} from "@mantine/core"
import { DateTimePicker } from "@mantine/dates"
import { useForm } from "@mantine/form"
import { useState } from "react"

export default function BookingForm({
  getDoctorsSpecialties,
  getDoctorNamesBySpecialty,
  saveFormDataToDB,
}) {
  console.log("BOOKING FORM COMPONENT")
  let { colorScheme } = useMantineColorScheme()
  const form = useForm({
    initialValues: {
      reasonForVisit: "",
      appointmentDate: "",
      phoneNumber: 0,
      specilization: "",
      doctor: "",
    },
    /*validate: {
          name: (value) => value.trim().length < 2,
          email: (value) => !/^\S+@\S+$/.test(value),
          subject: (value) => value.trim().length === 0,
        },*/
  })

  const [specialisationSelectChangeEvent, setSpecializationSelectChangeEvent] =
    useState("")

  return (
    <form
      onSubmit={form.onSubmit((submitValues) =>
        saveFormDataToDB({ values: submitValues })
      )}
    >
      <Title
        order={2}
        size="h1"
        c={colorScheme === "dark" ? "gray.3" : "dark.9"}
        weight={900}
        align="center"
      >
        Book an appointment
      </Title>

      <SimpleGrid cols={1} mt="sm" breakpoints={[{ maxWidth: "sm", cols: 2 }]}>
        <DateTimePicker
          dropdownType="modal"
          valueFormat="DD MMM YYYY hh:mm A"
          label="Pick date and time"
          placeholder="Pick date and time"
          maw={400}
          {...form.getInputProps("appointmentDate")}
        />
        <NumberInput
          hideControls
          placeholder="Your phone number"
          label="Phone number"
          mt="md"
          withAsterisk
          {...form.getInputProps("phoneNumber")}
        />
        <Select
          label="Doctor specilization"
          placeholder="Pick a specilization"
          onChange={setSpecializationSelectChangeEvent}
          data={[...getDoctorsSpecialties()]}
          {...form.getInputProps("specilization")}
        />
        <Select
          name="doctor"
          label="Choose doctor"
          placeholder="Pick a doctor"
          data={[
            ...getDoctorNamesBySpecialty({ value: form.values.specilization }),
          ]}
          maxDropdownHeight={400}
          nothingFound="No doctor found"
          filter={(value, item) =>
            item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
            item.description?.toLowerCase().includes(value.toLowerCase().trim())
          }
          {...form.getInputProps("doctor")}
        />
      </SimpleGrid>
      <Textarea
        mt="md"
        label="Reason of visit"
        placeholder="Reason of visit"
        maxRows={10}
        minRows={5}
        autosize
        {...form.getInputProps("reasonForVisit")}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Book now
        </Button>
      </Group>
    </form>
  )
}
