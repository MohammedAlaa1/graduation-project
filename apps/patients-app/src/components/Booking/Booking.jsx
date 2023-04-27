import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateTimePicker } from '@mantine/dates';
//import { date } from 'zod';
import { SelectDoctor } from './SelectDoctor';
import { trpc } from '@/lib/trpc/trpc'; 

export function BookingForm() {
  /*reasonForVisit  String
  appointmentDate DateTime @unique*/
  let {data: doctor} = trpc.doctor.findManyDoctor.useQuery({
    select:(data) =>{    
        let specialtyArray = []
        doctor.map((data) => {return(specialtyArray.push(data.specialty))})
    },
  })
  

  console.log({data: doctor})

  const form = useForm({
    initialValues: {
      date: '',
      reasonForVisit: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>   
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
        <TextInput
          label="Name"
          placeholder="Name"
          name="name"
          {...form.getInputProps('name')}
        />
        <Select
        label="Doctor specilization"
        name="specilization"
        placeholder="Pick a specilization"
        data={['1','2']}
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
          name="ReasonOfVisit"
          {...form.getInputProps('ReasonOfVisit')}
        />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Book now
        </Button>
      </Group>
    </form>
  );
}