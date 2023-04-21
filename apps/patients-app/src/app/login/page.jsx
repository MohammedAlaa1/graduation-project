"use client"
import SignIn from "../../components/SignIn"
import DarkMode from "../../components/DarkMode/DarkMode"
import { Box, Container } from "@mantine/core"

export default function Login() {
  return (
    <Box
      sx={(theme) => ({
        height: "100vh",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      })}
    >
      <SignIn />
    </Box>
  )
}
