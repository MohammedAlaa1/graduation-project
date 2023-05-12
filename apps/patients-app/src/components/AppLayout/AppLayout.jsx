"use client"
import { AppShell, Box } from "@mantine/core"
import { useSession } from "next-auth/react"
import Header from "../Header"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Login from "@/app/login/page"

export default function AppLayout({ children }) {
  const { data: session } = useSession()

  return (
    <>
      {" "}
      {session ? (
        <AppShell
          layout="alt"
          padding="md"
          navbar={<Navbar />}
          header={<Header />}
          footer={<Footer />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          {children}
        </AppShell>
      ) : (
        <Box
          sx={(theme) => ({
            height: "100vh",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          })}
        >
          <Login />
        </Box>
      )}
    </>
  )
}
