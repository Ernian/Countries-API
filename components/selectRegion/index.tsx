import { ChangeEvent } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import { REGIONS } from '../../types'

export default function SelectRegion({ bgTextClasses }: { bgTextClasses: string }) {
  const context = useAppContext()
  const onChangeRegion = (event: ChangeEvent<HTMLSelectElement>) => {
    context.setRegion(event.target.value as REGIONS)
    event.target.blur()
  }

  return (
    <div className={`${bgTextClasses} mt-4 md:mt-0 w-36 p-2 md:p-3
  rounded-md md:rounded-lg `}>
      <select
        name='regions'
        value={context.region}
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
  )
}