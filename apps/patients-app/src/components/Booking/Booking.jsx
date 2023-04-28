import { NumberInput, Textarea, SimpleGrid, Group, Title, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateTimePicker } from '@mantine/dates';
import { SelectDoctor } from './SelectDoctor';
import { trpc } from '@/lib/trpc/trpc'; 

export function BookingForm() {
  /*reasonForVisit  String
  appointmentDate DateTime @unique*/
  let { data: doctors } = trpc.doctor.findManyDoctor.useQuery(
    {
      //where: { specialty: "Neurology" },
    },
    
    {
      select: (data) => {
        let specialtyArray = []
        data.map((doctor) => {
          specialtyArray.push(doctor?.specialty)
          console.log("VALUES", doctor.specialty, specialtyArray)

          // DON"T do this. Return at the end.
          // return specialtyArray
        })
        let specialtySet = new Set(specialtyArray)
        specialtyArray = Array.from(specialtySet)
        //RETURN HERE
        return specialtyArray
      },
    }
  )
  console.log("Doctor", doctors)

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
        reasonForVisit: formData.reasonForVisit,
        date: formData.date,
      },
    })
  }

  const form = useForm({
    initialValues: {
      reasonForVisit: '',
      date: '',
      //phoneNumber: 0,
      //specilization:'',

    },
   /*validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },*/
  });

  return (
    <form onSubmit={form.onSubmit((values) =>
      saveFormDataToDB({ formData: values })
    )}>   
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        Book an appointment
      </Title>

      <SimpleGrid cols={1} mt="sm" breakpoints={[{ maxWidth: 'sm', cols: 2 }]}>
      <DateTimePicker
      name="date"
      dropdownType="modal"
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      {...form.getInputProps('date')}
        />
        <NumberInput
            defaultValue={0}
            placeholder="Your phone number"
            label="Phone number"
            name = "phoneNumber"
            mt="md"
            withAsterisk
            {...form.getInputProps("phoneNumber")}
        />
        <Select
        label="Doctor specilization"
        name="specilization"
        placeholder="Pick a specilization"
        data={doctors}
        
        {...form.getInputProps('specilization')}
        />
        <SelectDoctor
        {...form.getInputProps('doctor')}
        />
      </SimpleGrid>
        <Textarea
          mt="md"
          label="Reason of visit"
          placeholder="Reason of visit"
          maxRows={10}
          minRows={5}
          autosize
          name="ReasonForVisit"
          {...form.getInputProps('ReasonForVisit')}
        />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Book now
        </Button>
      </Group>
    </form>
  );
}