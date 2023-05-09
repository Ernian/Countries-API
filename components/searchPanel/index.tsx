import { ChangeEvent } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { useColorTheme } from '../../hooks/useColorTheme'
import SelectRegion from '../selectRegion'
import SearchIcon from '../searchIcon'

export default function SearchPanel() {
  const context = useAppContext()
  const bgTextClasses = useColorTheme()

  const onChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    context.setSearchQuery(event.target.value)
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
            value={context.searchQuery}
            onChange={onChangeSearchQuery}
          />
          <SearchIcon />
        </div>
        <SelectRegion bgTextClasses={bgTextClasses} />
      </div>
    </div>
  )
}