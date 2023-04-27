import * as trpc from "@trpc/server"
import { PrismaClient } from "@prisma/client"
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"

export async function createContext(opts: FetchCreateContextFnOptions) {
  let prisma

  //check if we are running in production mode
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
  } else {
    //check if there is already a connection to the database
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }
    prisma = global.prisma
  }

  return {
    req: opts.req,
    res: opts.resHeaders,
    prisma,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
