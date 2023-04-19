import RootStyleRegistry from "./emotion"
import { TrpcProvider } from "../lib/trpc/TrpcProvider"
import AppLayout from "@/components/AppLayout/AppLayout"

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
            <AppLayout>{children}</AppLayout>
          </RootStyleRegistry>
        </TrpcProvider>
      </body>
    </html>
  )
}
