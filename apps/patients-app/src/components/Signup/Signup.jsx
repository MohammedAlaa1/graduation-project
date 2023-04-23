"use client"
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  NumberInput,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import Link from "next/link"

export function Signup() {
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

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Have an account already? <Link href="/login">log in</Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => saveFormDataToDB(values))}>
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
          <TextInput
            label="Email"
            placeholder="example@gmail.com"
            required
            mt="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <NumberInput
            defaultValue={18}
            placeholder="Your age"
            label="Your age"
            mt="md"
            withAsterisk
          />

          <Group position="apart" mt="lg">
            <Checkbox label="Agree to the policy" />
          </Group>
          <Button fullWidth mt="xl">
            Sign up
          </Button>
        </form>
      </Paper>
    </Container>
  )
}
