"use client"
import { Container } from "@mantine/core"
import Booking from "../../components/Booking/"

export default function BookinPage() {
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
      <Booking />
    </Container>
  )
}
