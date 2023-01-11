import { useAppContext } from '../hooks/useAppContext'
import SearchPanel from '../components/searchPanel'
import CountryCard from '../components/countryCard'
import { ICountryInfo } from '../types'

export default function Home({ countries }: { countries: ICountryInfo[] }) {
  const context = useAppContext()
  const bgTextClasses = `${context?.isDark && 'bg-very-dark-blue-dm text-very-light-gray'} ||
                         ${!context?.isDark && 'bg-slate-200 text-very-dark-blue-lm'}`
  const countryCardList = countries.map(country => <CountryCard country={country} key={country.name?.official} />)

  return (
    <main className={`${bgTextClasses} grow overflow-y-auto`}>
      <SearchPanel />
      <section
        className='flex flex-wrap justify-center max-w-7xl mx-auto'
      >
        {countryCardList}
      </section>
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