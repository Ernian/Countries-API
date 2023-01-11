export type AppContextType = IColorTheme | null

export interface IColorTheme {
  isDark: boolean,
  setIsDark: (isDark: boolean) => void
}

export interface ICountryInfo {
  border: string[] | null,
  capital: [string] | null,
  continents: [string] | null,
  currencies: {
    ANG: {
      name: string,
      symbol: string
    }
  } | null,
  flags: {
    png: string,
    svg: string
  } | null,
  languages: object | null,
  name: {
    common: string,
    nativeName: object,
    official: string
  } | null,
  population: number | null,
  region: string | null,
  subregion: string | null,
}