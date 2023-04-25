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
import Link from "next/link"

export default function SignUpForm({form}) {
    return(
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
          <form onSubmit={form.onSubmit((values) => saveData({values}))}>
            <TextInput placeholder="Your name" label="Full name" withAsterisk             {...form.getInputProps('name')}
   />
            <TextInput
              label="Email"
              placeholder="example@gmail.com"
              required
              mt="md"
              {...form.getInputProps('email')}
  
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              {...form.getInputProps('password')}
  
            />
            <NumberInput
              defaultValue={18}
              placeholder="Your age"
              label="Your age"
              mt="md"
              withAsterisk
              {...form.getInputProps('age')}
  
            />
  
  <TextInput
              label="Address"
              placeholder="Address"
              required
              mt="md"
              {...form.getInputProps('address')}
  
            />
  
  <NumberInput
              defaultValue={18}
              placeholder="Phone Number"
              label="Phone Number"
              mt="md"
              withAsterisk
              {...form.getInputProps('phoneNumber')}
  
            />
  
            <Group position="apart" mt="lg">
              <Checkbox label="Agree to the policy" />
            </Group>
            <Button type="submit" fullWidth mt="xl">
              Sign up
            </Button>
          </form>
        </Paper>
      </Container>
    )
}