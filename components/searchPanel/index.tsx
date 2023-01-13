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
    <div className='px-5 py-3'>
      <div className={`max-w-7xl mx-auto text-slate-900 flex justify-between`}>
        <div className={`${bgTextClasses} flex justify-between items-center w-96 p-3 rounded-lg `}>
          <input
            type='search'
            className={`${bgTextClasses} outline-none inline-block w-11/12`}
            placeholder='Search for a country'
            value={context?.searchQuery}
            onChange={onChangeSearchQuery}
          />
          <SearchIcon color={context?.isDark ? '#f2f2f2' : '#111517'} />
        </div>
        <div className={`${bgTextClasses} p-3 rounded-lg`}>
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