import { Header as HeaderMantine, Group, Avatar, Box } from "@mantine/core"
import { MantineLogo } from "@mantine/ds"
import { IconChevronDown } from "@tabler/icons-react"
import DarkMode from "../DarkMode"

export default function Header() {
  return (
    <Box>
      <HeaderMantine height={50} px="md">
        <Group position="right" spacing={"xs"}>
          <DarkMode />
          <Avatar size={"md"} />
          <IconChevronDown />
        </Group>
      </HeaderMantine>
    </Box>
  )
}
