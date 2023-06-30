import { useAppContext } from '../hooks/useAppContext'
import SearchPanel from '../components/searchPanel'
import CountryCard from '../components/countryCard'
import { ICountryInfo, REGIONS } from '../types'

export default function Home({ countries }: { countries: ICountryInfo[] }) {
  const context = useAppContext()
  const searchQuery = context.searchQuery || ''

  const countryCardList = countries.reduce((countryList, country) => {
    const filterFlag = context.region === REGIONS.ALL || country.region === context.region
    if (searchQuery) {
      const searchFlag = country.name?.official.toLowerCase().includes(searchQuery.toLowerCase())
      if (searchFlag && filterFlag) {
        countryList.push(<CountryCard country={country} key={country.ccn3} />)
      }
    } else if (filterFlag) {
      countryList.push(<CountryCard country={country} key={country.ccn3} />)
    }
    return countryList
  }, [] as JSX.Element[])

  return (
    <>
      <SearchPanel />
      <section className='flex flex-wrap justify-center max-w-7xl mx-auto'>
        {countryCardList}
      </section>
      {!countryCardList.length &&
        <h1 className={`w-full text-3xl md:text-5xl text-center absolute left-1/2 top-1/2 
                        translate-x-[-50%] translate-y-[-50%]`}>
          Country not found
        </h1>}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data: ICountryInfo[] = await response.json()
  const countries = data.map((country) => {
    const {
      capital = 'No information',
      flags = null,
      name = null,
      population = 0,
      region = null,
      ccn3 = null,
    } = country
    return {
      capital,
      flags,
      name,
      population: population.toLocaleString('ru'),
      region,
      ccn3,
    }
  })
  return { props: { countries } }
}