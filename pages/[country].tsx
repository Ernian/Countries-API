import Image from 'next/image'
import BackButton from '../components/backButton'
import BorderCountryLink from '../components/borderCountryLink'
import { useAppContext } from '../hooks/useAppContext'
import { ICountryInfo } from '../types'

export default function CountryPage({ country }: { country: ICountryInfo | null }) {
  const context = useAppContext()

  if (!country) return null

  const bgTextClasses = context?.isDark ?
    'bg-very-dark-blue-dm text-very-light-gray' :
    'bg-slate-200 text-very-dark-blue-lm'

  const [nativeName] = Object.values(country?.name?.nativeName || {})
  const [currencies] = Object.values(country.currencies || {})
  const languages = Object.values(country.languages || {})

  return (
    <main className={`${bgTextClasses} grow`}>
      <div className='max-w-7xl mx-auto'>
        <BackButton />
        <section className='p-4 flex flex-col items-center lg:flex-row lg:justify-around lg:items-center'>
          <Image
            src={`${country?.flags?.svg}`}
            alt={`${country?.name?.official}`}
            width={600}
            height={1}
            className='p-5'
          />
          <div className='w-5/6 lg:w-auto'>
            <h1 className='text-4xl'>{country?.name?.official}</h1>
            <div>
              <p className='mt-1'>
                <span className='font-semibold text-base'>
                  Native Name :
                </span>
                &nbsp; {nativeName?.common}
              </p>
              <p className='mt-1'>
                <span className='font-semibold text-base'>
                  Population :
                </span>
                &nbsp; {country.population}
              </p>
              <p className='mt-1'>
                <span className='font-semibold text-base'>
                  Region :
                </span>
                &nbsp; {country.region}
              </p>
              <p className='mt-1'>
                <span className='font-semibold text-base'>
                  Subregion :
                </span>
                &nbsp; {country.subregion ? country.subregion : 'No information'}
              </p>
              <p className='mt-1'>
                <span className='font-semibold text-base'>
                  Capital :
                </span>
                &nbsp; {country.capital ? country.capital : 'No information'}
              </p>
              <p className='mt-1'>
                <span className='font-semibold text-base'>
                  Top Level Domain :
                </span>
                &nbsp; {country.tld.join(' ')}
              </p>
              <p className='mt-1'>
                <span className='font-semibold text-base'>
                  Currencies :
                </span>
                &nbsp; {currencies ? `${currencies?.name} - ${currencies?.symbol}` : 'No information'}
              </p>
              <p className='mt-1'>
                <span className='font-semibold text-base'>
                  Languages :
                </span>
                &nbsp; {languages.join(', ')}
              </p>
            </div>
            <div className='mt-5'>
              <span className='font-semibold text-base'>
                Border Countries :
              </span>
              &nbsp;{country.borderCountries.length ?
                country.borderCountries.map(c => <BorderCountryLink country={c} key={c.ccn3} />)
                : null}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export async function getStaticPaths() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()

  const paths = data.map((country: ICountryInfo) => ({
    params: {
      country: `${country.ccn3}`
    }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps(context: { params: { country: string } }) {
  const { country } = context.params

  if (country === 'undefined' || country === '500') {
    return {
      props: {
        country: null
      }
    }
  }

  const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
  const data: ICountryInfo[] = await response.json()

  if (!data) return { notFound: true }

  const [{
    borders = null,
    borderCountries = [],
    capital = null,
    continents = null,
    currencies = null,
    flags = null,
    languages = null,
    name = null,
    population = null,
    region = null,
    subregion = null,
    tld = null,
    ccn3 = null,
  }] = data

  if (borders) {
    for (const country of borders) {
      const response = await fetch(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`)
      const data: ICountryInfo[] = await response.json()

      if (!Array.isArray(data)) continue

      const [{
        name,
        ccn3,
      }] = data

      borderCountries.push({
        name: name?.common || 'No information',
        ccn3,
      })
    }
  }

  return {
    props: {
      country: {
        borders,
        borderCountries,
        capital,
        continents,
        currencies,
        flags,
        languages,
        name,
        population,
        region,
        subregion,
        tld,
        ccn3
      }
    },
  }
}
