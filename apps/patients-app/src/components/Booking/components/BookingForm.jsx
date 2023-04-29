import {
  NumberInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Select,
} from "@mantine/core"
import { DateTimePicker } from "@mantine/dates"
import SelectDoctor from "./SelectDoctor"
import { trpc } from "@/lib/trpc/trpc"
import { useForm } from "@mantine/form"

export default function BookingForm({
  docSpecialities,
  getSpecialitySelector,
  saveBooking,
}) {
  // console.log("BOOKING FORM COMPONENT")

  const form = useForm({
    initialValues: {
      reasonForVisit: "",
      bookingDate: "",
      phoneNumber: 100,
      specilization: "",
      doctor: "",
    },
    /*validate: {
          name: (value) => value.trim().length < 2,
          email: (value) => !/^\S+@\S+$/.test(value),
          subject: (value) => value.trim().length === 0,
        },*/
  })

  function getSpeciality() {
    getSpecialitySelector({ value: form.values.specilization })
  }

  console.log(form.values.specilization)
  return (
    <form
      onSubmit={form.onSubmit((submitValues) =>
        saveBooking({ values: submitValues })
      )}
    >
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
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
          {...form.getInputProps("bookingDate")}
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
          //SPREAD OPERATOR

          onChange={getSpeciality()}
          data={[...docSpecialities()]}
          {...form.getInputProps("specilization")}
        />
        <SelectDoctor form={form} />
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
