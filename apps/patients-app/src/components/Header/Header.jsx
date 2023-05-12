import { Header as HeaderMantine, Group, Stack, Box } from "@mantine/core"
import DarkMode from "../DarkMode"

export default function Header() {
  return (
    <Box>
      <HeaderMantine height={50} px="md">
        <Stack h={50} justify="center">
          <Group position="right" mr={"xl"} spacing={"xs"}>
            <DarkMode />
            {/* <Avatar size={"md"} />
          <IconChevronDown /> */}
          </Group>
        </Stack>
      </HeaderMantine>
    </Box>
  )
}
