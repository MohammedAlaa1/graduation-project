import { useState } from "react"
import {
  createStyles,
  Navbar as NavbarMantine,
  Group,
  Code,
  getStylesRef,
  rem,
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
import { MantineLogo } from "@mantine/ds"
import Link from "next/link"
import ReactLogo from "../../assets/vercel.svg"
import { Logo } from "./Logo"

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
  { link: "/history", label: "Medical History", icon: IconFingerprint },
  { link: "/billing", label: "Billing", icon: Icon2fa },
  { link: "/chat", label: "Chat ", icon: IconDatabaseImport },
  { link: "/settings", label: "Settings", icon: IconSettings },
]

export default function Navbar() {
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
        <Group className={classes.header} position="apart">
          <Logo />
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
        {links}
      </NavbarMantine.Section>

      <NavbarMantine.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </NavbarMantine.Section>
    </NavbarMantine>
  )
}
