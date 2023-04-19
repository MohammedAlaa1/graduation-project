"use client"
import { AppShell } from "@mantine/core"
import Header from "../Header"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function AppLayout({ children }) {
  return (
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
  )
}
