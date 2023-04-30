"use client"
import { Container } from "@mantine/core"
import MedicalRecord from "../../components/MedicalRecord/MedicalRecord"

export default function report() {
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
    <MedicalRecord/>
    </Container>
  )
}
