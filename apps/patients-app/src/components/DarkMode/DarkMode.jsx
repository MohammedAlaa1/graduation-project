"use client"
import { ActionIcon, Stack, useMantineColorScheme } from "@mantine/core"
import { IconSun, IconMoonStars } from "@tabler/icons-react"

export default function DarkMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <ActionIcon
      variant="transparent"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size="2rem" /> : <IconMoonStars size="2rem" />}
    </ActionIcon>
  )
}
