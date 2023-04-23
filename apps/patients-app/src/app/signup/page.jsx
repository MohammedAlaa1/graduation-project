"use client"
import DarkMode from "../../components/DarkMode/DarkMode"
import { Box, Container } from "@mantine/core"
import { signupTRPC } from "../../components/Signup/signupTRPC"

export default function signup() {
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
      <signupTRPC />
    </Box>
  )
}
