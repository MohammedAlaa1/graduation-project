/* eslint-disable no-undef */
import * as trpc from "@trpc/server"
import { PrismaClient } from "@prisma/client"
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"

export async function createContext(opts: FetchCreateContextFnOptions) {
  let prisma: PrismaClient

  //check if we are running in production mode
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
  } else {
    let globalWithPrisma = global as typeof globalThis & {
      prisma: PrismaClient
    }
    //check if there is already a connection to the database
    if (!globalWithPrisma.prisma) {
      globalWithPrisma.prisma = new PrismaClient()
    }
    prisma = globalWithPrisma.prisma
  }

  return {
    req: opts.req,
    res: opts.resHeaders,
    prisma,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
