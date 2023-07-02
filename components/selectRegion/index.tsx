import { ChangeEvent } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { setRegionAction } from '../../context/actions'
import { REGIONS } from '../../types'

export default function SelectRegion({ bgTextClasses }: { bgTextClasses: string }) {
  const [state, dispatch] = useAppContext()
  const onChangeRegion = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRegionAction(event.target.value as REGIONS))
    event.target.blur()
  }

  return (
    <div className={`${bgTextClasses} w-36 p-2 md:p-3
  rounded-md md:rounded-lg `}>
      <select
        name='regions'
        value={state.region}
        className={`${bgTextClasses} outline-none`}
        onChange={onChangeRegion}
      >
        <option value={REGIONS.ALL}>All regions</option>
        <option value={REGIONS.AFR}>Africa</option>
        <option value={REGIONS.AMR}>America</option>
        <option value={REGIONS.ASI}>Asia</option>
        <option value={REGIONS.EUR}>Europe</option>
        <option value={REGIONS.OCE}>Oceania</option>
      </select>
    </div>
  )
}