import type { appRouter } from "../../app/api/trpc/generated/routers"

import { createTRPCReact } from "@trpc/react-query"

type AppRouter = typeof appRouter

export const trpc = createTRPCReact<AppRouter>()
