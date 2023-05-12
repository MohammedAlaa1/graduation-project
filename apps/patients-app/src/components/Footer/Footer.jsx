import {
  Text,
  Group,
  Stack,
  Footer as FooterMantine,
  useMantineColorScheme,
} from "@mantine/core"

export default function Footer() {
  let { colorScheme } = useMantineColorScheme()
  return (
    <FooterMantine height={40} px="md">
      <Stack h={40} justify="center">
        <Group position="center">
          <Text color={colorScheme === "dark" ? "gray.3" : "dark.8"} fz="xs">
            v.0.1
          </Text>
        </Group>
      </Stack>
    </FooterMantine>
  )
}
