import { darkTheme } from 'naive-ui'

export function useTheme() {
  const { colorMode } = useNaiveColorMode()
  const appConfig = useAppConfig()
  const isDark = computed(() => colorMode.value === 'dark')
  const theme = computed(() => (isDark.value ? darkTheme : null))
  const themeConfig = useCookie<NTheme.Config>('theme-config', {
    default: () => ({ ...appConfig.theme }),
  })
  const themeOverrides = computed(() => {
    return getThemeOverrides(themeConfig.value, isDark.value)
  })
  const themeColors = computed(() => {
    const entries = Object.entries(themeConfig.value) as [
      NTheme.ColorType,
      string,
    ][]
    const colors = {} as Record<NTheme.ColorType, string[]>
    entries.forEach(([key, value]) => {
      colors[key] = getGenerateColors(value, isDark.value)
    })
    return colors
  })
  const cssVarColors = computed(() => getVarColors(themeConfig.value, isDark.value))

  function setThemeConfig(config: Partial<NTheme.Config>) {
    themeConfig.value = { ...themeConfig.value, ...config }
  }

  function resetThemeConfig() {
    themeConfig.value = { ...appConfig.theme }
  }

  return {
    isDark,
    theme,
    themeConfig,
    themeOverrides,
    themeColors,
    cssVarColors,
    setThemeConfig,
    resetThemeConfig,
  }
}
