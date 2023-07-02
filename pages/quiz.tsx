import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useAppContext } from '../hooks/useAppContext'
import { useColorTheme } from '../hooks/useColorTheme'
import Question from '../components/question'
import SelectRegion from '../components/selectRegion'
import Spinner from '../components/spinner'
import SelectMode from '../components/selectMode'
import { MODES, ICountryInfo, IQuestion, REGIONS } from '../types'

export default function Quiz() {
  const [mode, setMode] = useState<MODES>(MODES.COUNTRY_CAPITAL)
  const [question, setQuestion] = useState<IQuestion>({} as IQuestion)

  const [state] = useAppContext()
  const bgTextClasses = useColorTheme()

  const url = 'https://restcountries.com/v3.1/all'
  const fetcher = () => fetch(url).then(res => res.json())

  const { data, error, isLoading } = useSWR<ICountryInfo[], boolean>(url, fetcher)

  useEffect(() => {
    getNewQuestion()
  }, [mode, state.region, data])


  const getRandomIndex = (length: number) => Math.floor(Math.random() * length)
  const shuffleArray = (arr: Array<ICountryInfo>) => arr.sort(() => Math.random() - 0.5)
  const getNewQuestion = () => {
    const filteredCountries = data && state.region !== REGIONS.ALL ?
      data.filter(country => country.region === state.region) :
      data || [] as ICountryInfo[]

    if (!filteredCountries.length) return

    const answer = filteredCountries[getRandomIndex(filteredCountries.length)]
    const variants = [answer]

    while (variants.length < 4) {
      const randomCountry = filteredCountries[getRandomIndex(filteredCountries.length)]
      if (randomCountry.ccn3 !== answer.ccn3) {
        variants.push(randomCountry)
      }
    }

    setQuestion({ answer, variants: shuffleArray(variants) })
  }

  return (
    <>
      <h1 className='text-center text-2xl sm:text-3xl py-4'>Quiz</h1>
      <div className='max-w-7xl mx-auto px-4 md:px-0'>
        <div className='md:flex md:gap-4'>
          <SelectRegion
            bgTextClasses={bgTextClasses}
          />
          <SelectMode
            bgTextClasses={bgTextClasses}
            setMode={setMode}
            mode={mode}
          />
        </div>
        {isLoading || !question.answer ?
          <Spinner /> :
          <Question
            question={question}
            mode={mode}
            getNewQuestion={getNewQuestion}
          />}
        {error && <h2 className='text-center text-3xl mt-8'>Somesing go wrong</h2>}
      </div>
    </>
  )
}