export type AppContextType = IColorTheme | null

export interface IColorTheme {
  isDark: boolean,
  setIsDark: (isDark: boolean) => void
}