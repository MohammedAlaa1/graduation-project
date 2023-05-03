import { useState } from "react";
import {
  Button,
  Card,
  Textarea,
  Select,
  List,
  Group,
  Text,
} from "@mantine/core";

const doctorOptions = [
  { label: "Dr. John Doe", value: "John Doe" },
  { label: "Dr. Jane Smith", value: "Jane Smith" },
  { label: "Dr. Alex Johnson", value: "Alex Johnson" },
];

const messagePageStyle = {
  maxWidth: "500px",
  margin: "0 auto",
  padding: "1rem",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
  fontFamily: "'Open Sans', sans-serif",
};

export default function MessagePage() {
  const [doctor, setDoctor] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.currentTarget.value);
  };

  const handleDoctorChange = (value) => {
    setDoctor(value);
  };

  const handleSendMessage = () => {
    const newMessage = {
      doctor: doctor,
      message: message,
      date: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
    setDoctor("");
    setMessage("");
  };

  const handleOpenMessage = (index) => {
    // Code to open the message with index 'index'
    console.log("Opening message with index:", index);
  };

  const messageItems = messages.map((message, index) => (
    <Group
      key={index}
      onClick={() => handleOpenMessage(index)}
      style={{ cursor: "pointer", marginBottom: "0.5rem" }}
    >
      <Text size="md" weight="bold">{message.doctor}:</Text>
      <Text size="sm" style={{ marginTop: "0.25rem" }}>
        {message.message} - {message.date}
      </Text>
    </Group>
  ));

  const isDisabled = !doctor || !message;

  return (
    <Card shadow="sm" style={messagePageStyle}>
      <Select
        label="Choose a doctor"
        placeholder="Select a doctor"
        value={doctor}
        onChange={handleDoctorChange}
        data={doctorOptions}
      />
      <Textarea
        label="Type your message"
        placeholder="Type your message here..."
        value={message}
        onChange={handleMessageChange}
        style={{ marginTop: "1rem" }}
      />
      <Button
        variant="outline"
        color="blue"
        disabled={isDisabled}
        style={{ marginTop: "1rem" }}
        onClick={handleSendMessage}
      >
        Send message
      </Button>
      <List style={{ marginTop: "1rem" }}>{messageItems}</List>
    </Card>
  );
}
