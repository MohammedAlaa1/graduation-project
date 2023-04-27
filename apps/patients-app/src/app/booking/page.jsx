"use client"
import { BookingForm } from "../../components/Booking/Booking"
import { Container } from "@mantine/core"

export default function Booking(){
    return(
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
        <BookingForm/>
      </Container>
    )
}