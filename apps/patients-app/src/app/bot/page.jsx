"use client"
import { Container } from "@mantine/core"
import Bot from "../../components/Bot/Bot"

export default function Home() {
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
        <Bot/>
      </Container>
    )
  }