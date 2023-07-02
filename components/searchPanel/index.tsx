import { ChangeEvent } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { useColorTheme } from '../../hooks/useColorTheme'
import { setSearchQueryAction } from '../../context/actions'
import SelectRegion from '../selectRegion'
import SearchIcon from '../searchIcon'

export default function SearchPanel() {
  const [state, dispatch] = useAppContext()
  const bgTextClasses = useColorTheme()

  const onChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQueryAction(event.target.value))
  }

  return (
    <div className='p-3 md:px-5 md:py-3'>
      <div className={`max-w-7xl mx-auto text-slate-900 flex flex-col
       md:flex-row  md:justify-between`}>
        <div className={`${bgTextClasses} flex justify-between 
        items-center w-4/5 md:w-96 p-2 md:p-3 rounded-md md:rounded-lg mb-4 md:mb-0`}>
          <input
            type='search'
            className={`${bgTextClasses} outline-none inline-block w-11/12 md:w-11/12`}
            placeholder='Search for a country'
            value={state.searchQuery}
            onChange={onChangeSearchQuery}
          />
          <SearchIcon />
        </div>
        <SelectRegion bgTextClasses={bgTextClasses} />
      </div>
    </div>
  )
}