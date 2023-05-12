import RootStyleRegistry from "./emotion"
import { TrpcProvider } from "../config/trpc/TrpcProvider"
import AppLayout from "@/components/AppLayout/AppLayout"
import { NextAuthProvider } from "./providers"

export const metadata = {
  title: "Patients App",
  description: "Patients Portal",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TrpcProvider>
          <RootStyleRegistry>
            <NextAuthProvider>
              <AppLayout>{children}</AppLayout>
            </NextAuthProvider>
          </RootStyleRegistry>
        </TrpcProvider>
      </body>
    </html>
  )
}
