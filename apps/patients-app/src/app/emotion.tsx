"use client"
import { CacheProvider } from "@emotion/react"
import {
  useEmotionCache,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core"
import { useServerInsertedHTML } from "next/navigation"
import { useState } from "react"

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const cache = useEmotionCache()
  cache.compat = true

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light")
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  )
}
