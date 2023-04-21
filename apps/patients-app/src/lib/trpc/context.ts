import * as trpc from "@trpc/server"
import { PrismaClient } from "@prisma/client"
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"

export async function createContext(opts: FetchCreateContextFnOptions) {
  const prisma = new PrismaClient()

  return {
    req: opts.req,
    res: opts.resHeaders,
    prisma,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
