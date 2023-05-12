import Bot from "../../components/Bot/Bot"
import { openai } from "../../config/chatGPT/chatGPT"

async function getResponse(data) {
  "use server"
  console.log("HELLO FROM THE SERVER", data?.get("message"))

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `${data?.get("message")})` }],
    temperature: 0.9,
    max_tokens: 1024,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  })
  return response?.data?.choices[0]?.message.content
}

export default async function Home() {
  return <Bot handleFormSubmit={getResponse} />
}
