import * as trpc from "@trpc/server"

import { Context } from "../../../../../../lib/trpc/context.js"

export const t = trpc.initTRPC.context<Context>().create()

export const publicProcedure = t.procedure
