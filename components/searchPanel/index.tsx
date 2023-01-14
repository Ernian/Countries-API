import { ChangeEvent } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import SearchIcon from '../searchIcon'
import { REGIONS } from '../../types'

export default function SearchPanel() {
  const context = useAppContext()
  const bgTextClasses = context?.isDark ?
    'bg-dark-blue text-very-light-gray' :
    'bg-slate-100 text-very-dark-blue-lm'

  const onChangeRegion = (event: ChangeEvent<HTMLSelectElement>) => {
    context?.setRegion(event.target.value as REGIONS)
    event.target.blur()
  }

  const onChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    context?.setSearchQuery(event.target.value)
  }

  return (
    <div className='p-3 md:px-5 md:py-3'>
      <div className={`max-w-7xl mx-auto text-slate-900 flex flex-col
       md:flex-row  md:justify-between`}>
        <div className={`${bgTextClasses} flex justify-between 
        items-center w-4/5 md:w-96 p-2 md:p-3 rounded-md md:rounded-lg`}>
          <input
            type='search'
            className={`${bgTextClasses} outline-none inline-block w-11/12 md:w-11/12`}
            placeholder='Search for a country'
            value={context?.searchQuery}
            onChange={onChangeSearchQuery}
          />
          <SearchIcon color={context?.isDark ? '#f2f2f2' : '#111517'} />
        </div>
        <div className={`${bgTextClasses} mt-4 md:mt-0 w-36 p-2 md:p-3
         rounded-md md:rounded-lg `}>
          <select
            name='regions'
            value={context?.region}
            className={`${bgTextClasses} outline-none`}
            onChange={onChangeRegion}
          >
            <option value={REGIONS.ALL}>Filter by Region</option>
            <option value={REGIONS.AFR}>Africa</option>
            <option value={REGIONS.AMR}>America</option>
            <option value={REGIONS.ASI}>Asia</option>
            <option value={REGIONS.EUR}>Europe</option>
            <option value={REGIONS.OCE}>Oceania</option>
          </select>
        </div>
      </div>
    </div>
  )
}