import Image from 'next/image'
import Link from 'next/link'
import { ICountryInfo } from '../../types'
import { useAppContext } from '../../hooks/useAppContext'

export default function CountryCard({ country }: { country: ICountryInfo }) {
  const context = useAppContext()
  const bgTextClasses = context?.isDark ? 'bg-dark-blue text-very-light-gray'
    : 'bg-slate-100 text-very-dark-blue-lm'

  return (
    <section className={`${bgTextClasses} relative m-3 w-2/3 sm:w-2/5 md:w-72 flex flex-col 
    justify-between items-center rounded-lg overflow-hidden`}>
      {(country.flags && country.name) &&
        <div className='w-full h-40 relative'>
          <Image
            src={country.flags.svg}
            alt={country.name.official}
            fill
            className='object-cover'
          />
        </div>
      }
      <div className='w-full p-4 grow-[5]' >
        <p className='font-extrabold text-xl'>{country.name?.common}</p>
        <p><span className='font-semibold text-base'>Population : </span>{country.population}</p>
        <p><span className='font-semibold'>Region : </span> {country.region}</p>
        <p>
          <span className='font-semibold'>Capital : </span>
          {typeof country.capital === 'string' ? country.capital : country.capital.join('')}
        </p>
      </div>
      <Link
        href={`/${country.ccn3}`}
        className='block absolute inset-0'
      />
    </section>
  )
}