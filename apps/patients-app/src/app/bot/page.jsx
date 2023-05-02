import Bot from "../../components/Bot/Bot"
import { openai } from "../../lib/chatGPT/chatGPT"
import cookieCutter from "cookie-cutter"

async function getResponse() {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Who won the world series in 2020?" }],
    temperature: 0.9,
    max_tokens: 2048,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  })
  return response
}

export default async function Home() {
  let userInput = cookieCutter.get("userInput")

  let response = await getResponse({
    input: userInput,
  })

  let output = response?.data?.choices[0]?.message.content
  return <Bot responseData={output} />
}
