import { Text, Group, Footer as FooterMantine } from "@mantine/core"

export default function Footer() {
  return (
    <FooterMantine height={40} px="md">
      <Group position="center">
        <Text fz="md">v.0.1</Text>
      </Group>
    </FooterMantine>
  )
}
