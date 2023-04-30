import { useState } from 'react';
import { TextInput, Button, Text } from '@mantine/core';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    // Logic to send message to chatbot
    setChatHistory([...chatHistory, { sender: 'user', message }]);
    setMessage('');
  };

  const styles = {
    container: {
        maxWidth: 600,
        margin: 'auto',
        padding: 16,
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
      },
      header: {
        textAlign: 'center',
        marginBottom: 32,
        color: '#333333',
        fontWeight: 700,
        fontSize: 48,
        textTransform: 'uppercase',
        letterSpacing: 2,
      },
      chatContainer: {
        height: 400,
        width: '100%',
        maxWidth: 600,
        overflowY: 'scroll',
        marginBottom: 32,
        borderRadius: 8,
        backgroundColor: '#F7F7F7',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: 16,
      },
      chatMessage: {
        backgroundColor: '#2B8BFF',
        color: '#FFFFFF',
        borderRadius: 16,
        padding: '12px 16px',
        marginBottom: 16,
        alignSelf: 'flex-start',
        maxWidth: '60%',
        wordWrap: 'break-word',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        animation: '$fadeIn 0.3s ease-in-out',
      },
      chatbotMessage: {
        backgroundColor: '#EFEFEF',
        borderRadius: 16,
        padding: '12px 16px',
        marginBottom: 16,
        alignSelf: 'flex-end',
        maxWidth: '60%',
        wordWrap: 'break-word',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        animation: '$fadeIn 0.3s ease-in-out',
      },
      messageContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 32,
        width: '100%',
        maxWidth: 600,
      },
      input: {
        flex: 1,
        marginRight: 8,
        borderRadius: 16,
        borderColor: '#EFEFEF',
        backgroundColor: '#F7F7F7',
        padding: '12px 16px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        fontSize: 18,
        ':focus': {
          borderColor: '#2B8BFF',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        },
      },
      button: {
        borderRadius: 16,
        backgroundColor: '#2B8BFF',
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: '12px 24px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        fontSize: 18,
      ':hover': {
        backgroundColor: '#1870',
      },
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  };

  return (    <div style={styles.container}>
    <Text style={styles.header}>
      Chatbot
    </Text>
    <div style={styles.chatContainer}>
      {chatHistory.map((chat, index) => (
    <div
      key={index}
      style={
        chat.sender === 'user'
          ? styles.chatMessage
          : styles.chatbotMessage
      }
    >
      <Text>{chat.message}</Text>
    </div>
  ))}
</div>
<div style={styles.messageContainer}>
  <TextInput
    value={message}
    onChange={(event) => setMessage(event.target.value)}
    placeholder="Type your message here..."
    style={styles.input}
  />
  <Button
    onClick={handleSendMessage}
    style={styles.button}
  >
    Send
  </Button>
</div>
</div>)}
