import { useState } from "react"
import { signOut, useSession } from "next-auth/react"

import {
  createStyles,
  Center,
  Navbar as NavbarMantine,
  Group,
  getStylesRef,
  rem,
  Text,
} from "@mantine/core"
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react"
import Link from "next/link"
import Image from "next/image"

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}))

//SIDE MENU DATA
const data = [
  { link: "/", label: "Home", icon: IconBellRinging },
  { link: "/appointments", label: "Appointments", icon: IconReceipt2 },
  { link: "/report", label: "Medical History", icon: IconFingerprint },
  { link: "/booking", label: "Book an appointment", icon: Icon2fa },
  { link: "/messages", label: "Talk with a doctor", icon: IconDatabaseImport },
  { link: "/bot", label: "Talk to our bot", icon: IconSettings },
]

export default function Navbar() {
  const { data: session } = useSession()

  const { classes, cx } = useStyles()
  const [active, setActive] = useState("Dashboard")

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      {item.label}
    </Link>
  ))

  return (
    <NavbarMantine height={"100vh"} width={{ sm: 300 }} p="md">
      <NavbarMantine.Section grow>
        <Group className={classes.header} position="center">
          <Image
            priority
            src="./next.svg"
            height={100}
            width={100}
            alt="Logo"
          />
        </Group>
        {links}
      </NavbarMantine.Section>

      <NavbarMantine.Section className={classes.footer}>
        <Center>
          <Text fz={"sm"}>
            Logged in as: {`${session?.user?.name} (${session?.user?.email})`}
          </Text>
        </Center>
        <a href="#" className={classes.link} onClick={() => signOut()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>{"Logout"}</span>
        </a>
      </NavbarMantine.Section>
    </NavbarMantine>
  )
}
