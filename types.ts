export type AppContextType = IContext | null

export interface IContext {
  isDark: boolean,
  setIsDark: (isDark: boolean) => void,
  region: REGIONS,
  setRegion: (region: REGIONS) => void,
  searchQuery: string,
  setSearchQuery: (searchQuery: string) => void,
}
export enum REGIONS {
  ALL = 'All',
  AFR = 'Africa',
  AMR = 'Americas',
  ASI = 'Asia',
  EUR = 'Europe',
  OCE = 'Oceania'
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
  region: REGIONS | null,
  subregion: string | null,
}