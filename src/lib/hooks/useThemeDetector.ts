import { useEffect, useState } from "react"

type ColorSchemeClass = "dark" | "light"

type ThemeDetected = {
  isDark: boolean
  isLight: boolean
  activeTheme: ColorSchemeClass
  inactiveTheme: ColorSchemeClass
}

const DEFAULT_THEME = "light"

function getCurrentTheme(): ColorSchemeClass {
  if (typeof window === "undefined") {
    return DEFAULT_THEME
  }
  return userThemePreference() ?? browserThemePreference()
}

function userThemePreference(): ColorSchemeClass | undefined {
  const theme = localStorage.getItem("theme") ?? ""

  if (theme === "dark" || theme === "light") {
    return theme as ColorSchemeClass
  }
  return undefined
}

function browserThemePreference(): ColorSchemeClass {
  return darkThemeMediaQuery()?.matches ? "dark" : "light"
}

function darkThemeMediaQuery(): MediaQueryList | undefined {
  if (typeof window === "undefined") {
    return undefined
  }
  return window.matchMedia("(prefers-color-scheme: dark)")
}

export function useThemeDetector(): ThemeDetected {
  const [theme, setTheme] = useState<ColorSchemeClass>(getCurrentTheme())

  function callback(this: MediaQueryList, event: MediaQueryListEvent) {
    setTheme(event.matches ? "dark" : "light")
  }

  useEffect(() => {
    const mediaQuery = darkThemeMediaQuery()
    mediaQuery?.addEventListener("change", callback)
    return () => {
      mediaQuery?.removeEventListener("change", callback)
    }
  }, [])

  return {
    isDark: theme === "dark",
    isLight: theme === "light",
    activeTheme: theme,
    inactiveTheme: theme === "dark" ? "light" : "dark",
  }
}
