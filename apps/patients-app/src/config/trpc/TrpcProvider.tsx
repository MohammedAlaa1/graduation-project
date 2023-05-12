"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpLink } from "@trpc/client"
import React, { useState } from "react"
import { trpc } from "./trpc"

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = (p) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpLink({
          url:
            process.env.NODE_ENV === "development"
              ? "http://localhost:3000/api/trpc"
              : "/api/trpc",
        }),
      ],
      transformer: undefined,
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {p.children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}
