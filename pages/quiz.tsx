import { useEffect, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import { useColorTheme } from '../hooks/useColorTheme'
import SelectRegion from '../components/selectRegion'

export default function Quiz() {
  const context = useAppContext()
  const bgTextClasses = useColorTheme()

  useEffect(() => {
    const fetchCountries = async () => {
      fetch('')
    }
  }, [context.region])


  return (
    <>
      <h1>Quiz</h1>
      <div>
        <SelectRegion bgTextClasses={bgTextClasses} />
      </div>
    </>
  )
}