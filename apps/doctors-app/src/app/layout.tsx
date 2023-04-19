import RootStyleRegistry from "./emotion"

export const metadata = {
  title: "Doctors App",
  description: "Doctors Admin Panel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
}
