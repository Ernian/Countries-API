import Link from 'next/link'
import { useAppContext } from '../../hooks/useAppContext'
import { IBorderCountry } from '../../types'

export default function BorderCountryLink({ country }: { country: IBorderCountry }) {
  const context = useAppContext()
  if (!country.name || !country.ccn3) return null
  const bgTextClasses = context?.isDark ?
    'bg-dark-blue text-very-light-gray' :
    'bg-slate-100 text-very-dark-blue-lm'

  return (
    <Link
      href={`/${country.ccn3}`}
      className={`${bgTextClasses} inline-block mx-1 mt-2 px-3 py-2 
       h-10 rounded-md hover:shadow-lg`}
    >
      {country.name}
    </Link>
  )
}