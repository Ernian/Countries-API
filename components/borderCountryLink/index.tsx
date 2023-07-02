import Link from 'next/link'
import { useColorTheme } from '../../hooks/useColorTheme'
import { IBorderCountry } from '../../types'

export default function BorderCountryLink({ country }: { country: IBorderCountry }) {
  const bgTextClasses = useColorTheme()
  if (!country.name || !country.ccn3) return null

  return (
    <Link
      href={`/country/${country.ccn3}`}
      className={`${bgTextClasses} inline-block mx-1 mt-2 px-3 py-2 
       h-10 rounded-md hover:shadow-lg`}
    >
      {country.name}
    </Link>
  )
}