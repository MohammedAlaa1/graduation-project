import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { appRouter } from "../generated/routers/index"
import { createContext } from "@/lib/trpc/context"

const handler = (request: Request) => {
  console.log(`incoming request ${request.url}`)
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext,
  })
}

export const GET = handler
export const POST = handler
