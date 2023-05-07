import { Dispatch, SetStateAction } from 'react'

export interface IContext {
  isDark: boolean,
  setIsDark: Dispatch<SetStateAction<boolean>>,
  region: REGIONS,
  setRegion: Dispatch<SetStateAction<REGIONS>>,
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
}

export enum REGIONS {
  ALL = 'All',
  AFR = 'Africa',
  AMR = 'Americas',
  ASI = 'Asia',
  EUR = 'Europe',
  OCE = 'Oceania'
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