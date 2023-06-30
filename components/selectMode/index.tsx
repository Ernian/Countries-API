import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { MODES } from '../../types'

export default function SelectMode(
  {
    bgTextClasses,
    mode,
    setMode
  }:
    {
      bgTextClasses: string,
      mode: MODES,
      setMode: Dispatch<SetStateAction<MODES>>
    }
) {
  const onChangeMode = (event: ChangeEvent<HTMLSelectElement>) => {
    setMode(event.target.value as MODES)
  }

  return (
    <div className={`${bgTextClasses} w-44 p-2 mt-4 md:p-3 rounded-md md:rounded-lg md:mt-0`}>
      <select
        name='mode'
        value={mode}
        className={`${bgTextClasses} outline-none`}
        onChange={onChangeMode}
      >
        <option value={MODES.COUNTRY_CAPITAL}>Counatry &#8594; Capital</option>
        <option value={MODES.CAPITAL_COUNTRY}>Capital &#8594; Counatry</option>
        <option value={MODES.FLAG_COUNTRY}>Flag &#8594; Counatry</option>
      </select>
    </div>
  )
}