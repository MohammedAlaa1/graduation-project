"use client"
import { Container } from "@mantine/core"
import AppointmentPage from "../../components/Appointments/Appointments"

export default function Appointments() {
  return (
    <Container
      sx={(theme) => ({
        height: "100vh",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      })}
      w={"100%"}
      h={"100%"}
    >
      <AppointmentPage/>
    </Container>
  )
}
