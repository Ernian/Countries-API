export interface IState {
  isDark: boolean,
  region: REGIONS,
  searchQuery: string,
}

export enum REGIONS {
  ALL = 'All',
  AFR = 'Africa',
  AMR = 'Americas',
  ASI = 'Asia',
  EUR = 'Europe',
  OCE = 'Oceania'
}

export enum MODES {
  COUNTRY_CAPITAL = 'Counatry -> Capital',
  CAPITAL_COUNTRY = 'Capital -> Counatry',
  FLAG_COUNTRY = 'Flag -> Counatry',
}

export interface IBorderCountry {
  name: string,
  ccn3: string,
}

export interface ICountryInfo {
  borders: string[] | null,
  borderCountries: IBorderCountry[],
  capital: [string] | string,
  continents: [string] | null,
  currencies: {
    [key: string]: {
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
    nativeName: {
      [key: string]: {
        common: string,
        official: string
      }
    },
    official: string
  } | null,
  population: number,
  region: REGIONS | null,
  subregion: string | null,
  tld: string[],
  ccn3: string,
}

export interface IQuestion {
  answer: ICountryInfo,
  variants: ICountryInfo[]
}

export type ActionType = 'CHANGE_COLOR_THEME' | 'SET_REGION' | 'SET_SEARCH_QUERY'

export interface IAction {
  type: ActionType,
  payload: string
}