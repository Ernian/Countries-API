import { useAppContext } from '../hooks/useAppContext'
import SearchPanel from '../components/searchPanel'
import CountryCard from '../components/countryCard'
import { ICountryInfo, REGIONS } from '../types'

export default function Home({ countries }: { countries: ICountryInfo[] }) {
  const context = useAppContext()
  const bgTextClasses = context?.isDark ?
    'bg-very-dark-blue-dm text-very-light-gray' :
    'bg-slate-200 text-very-dark-blue-lm'

  const searchQuery = context?.searchQuery || ''

  const countryCardList = countries.reduce((countryList, country) => {
    if (searchQuery) {
      const searchFlag = country.name?.official.toLowerCase().includes(searchQuery.toLowerCase())
      const filterFlag = context?.region === REGIONS.ALL || country.region === context?.region

      if (searchFlag && filterFlag) {
        countryList.push(<CountryCard country={country} key={country.name?.official} />)
      }
      return countryList
    } else {
      if (context?.region === REGIONS.ALL || country.region === context?.region) {
        countryList.push(<CountryCard country={country} key={country.name?.official} />)
      }
      return countryList
    }
  }, [] as JSX.Element[])

  return (
    <main className={`${bgTextClasses} grow overflow-y-auto`}>
      <SearchPanel />
      <section className='flex flex-wrap justify-center max-w-7xl mx-auto'>
        {countryCardList}
      </section>
      {!countryCardList.length &&
        <h1 className={`w-full text-3xl md:text-5xl text-center absolute left-1/2 top-1/2 
                        translate-x-[-50%] translate-y-[-50%]`}>
          Country not found
        </h1>}
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()
  const countries = data.map((country: any) => {
    const {
      borders = null,
      capital = null,
      continents = null,
      currencies = null,
      flags = null,
      languages = null,
      name = null,
      population = null,
      region = null,
      subregion = null,
    } = country
    return {
      capital,
      continents,
      currencies,
      flags,
      languages,
      name,
      population,
      region,
      subregion,
      borders
    }
  })
  return { props: { countries } }
}