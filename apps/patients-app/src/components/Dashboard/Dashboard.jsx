import { useState } from "react"
import { Card, Text, Button, useMantineColorScheme } from "@mantine/core"
import { mdiVideo, mdiMessage, mdiCalendar } from "@mdi/js"
import Icon from "@mdi/react"
import Link from "next/link"

const cardStyle = {
  height: 300,
  width: 450,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1.5rem",
  borderRadius: "1rem",
  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "2rem",
}

const Dashboard = () => {
  const [activeCard, setActiveCard] = useState("")
  let { colorScheme } = useMantineColorScheme()

  const handleCardClick = (card) => {
    setActiveCard(card)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: colorScheme === "dark" ? "#0072C6" : "#FFFFFF",
          padding: "1rem 2rem",
          boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem",
        }}
      >
        <Text
          size="xl"
          weight={700}
          color={colorScheme === "dark" ? "gray.3" : "dark.8"}
        >
          Virtual Hospital
        </Text>
      </div>
      <Card
        style={{
          ...cardStyle,
          border: activeCard === "message" ? "5px solid #0072C6" : "none",
          cursor: "pointer",
        }}
        onClick={() => handleCardClick("message")}
      >
        <Icon
          path={mdiMessage}
          size={5}
          color="#0072C6"
          style={{ marginBottom: "2rem" }}
        />
        <Text size="xl" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          Message Doctor
        </Text>
        <Link href="/messages">
          {" "}
          <Button style={{ backgroundColor: "#0072C6" }}>
            Send Message
          </Button>{" "}
        </Link>
      </Card>
      <Card
        style={{
          ...cardStyle,
          border: activeCard === "appointments" ? "5px solid #0072C6" : "none",
          cursor: "pointer",
        }}
        onClick={() => handleCardClick("appointments")}
      >
        <Icon
          path={mdiCalendar}
          size={5}
          color="#0072C6"
          style={{ marginBottom: "2rem" }}
        />
        <Text size="xl" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          Book and Show Appointments
        </Text>
        <Link href="/booking">
          <Button style={{ backgroundColor: "#0072C6" }}>
            Book Appointment
          </Button>
        </Link>
      </Card>
      <Card
        style={{
          ...cardStyle,
          border: activeCard === "video" ? "5px solid #0072C6" : "none",
          cursor: "pointer",
        }}
        onClick={() => handleCardClick("video")}
      >
        <Icon
          path={mdiVideo}
          size={5}
          color="#0072C6"
          style={{ marginBottom: "2rem" }}
        />
        <Text size="xl" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          Video Call with Doctor
        </Text>
        <Button style={{ backgroundColor: "#0072C6" }}>Start Call</Button>
      </Card>
    </div>
  )
}

export default Dashboard
