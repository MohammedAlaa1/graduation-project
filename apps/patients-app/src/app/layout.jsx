import RootStyleRegistry from "./emotion"
import { TrpcProvider } from "../lib/trpc/TrpcProvider"
import AppLayout from "@/components/AppLayout/AppLayout"
import SignIn from "@/components/SignIn/"

export const metadata = {
  title: "Patients App",
  description: "Patients Portal",
}

export default function RootLayout({ children }) {
  //simulating user login
  let isUserAuthenticated = true
  return (
    <html lang="en">
      <body>
        <TrpcProvider>
          <RootStyleRegistry>
            {/* if Authenticated show SideBar/Header (AppLayout)  */}
            {isUserAuthenticated ? (
              <AppLayout>{children}</AppLayout>
            ) : (
              <SignIn />
            )}
          </RootStyleRegistry>
        </TrpcProvider>
      </body>
    </html>
  )
}
