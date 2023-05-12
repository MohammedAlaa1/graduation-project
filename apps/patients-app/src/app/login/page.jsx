"use client"
import SignIn from "../../components/SignIn"
import DarkMode from "../../components/DarkMode/DarkMode"
import { Box, Group } from "@mantine/core"

export default function Login() {
  return (
    <>
      <Group position={"right"} mr={"xl"} pt={"md"}>
        <DarkMode />
      </Group>
      <SignIn />
    </>
  )
}
