import Image from 'next/image'
import { useState, useEffect } from 'react'
import Answer from '../answer'
import { IQuestion, MODES } from '../../types'
import { useColorTheme } from '../../hooks/useColorTheme'

const Question = ({ question, mode, getNewQuestion }:
  { question: IQuestion, mode: MODES, getNewQuestion: () => void }) => {
  const [ccn3, setCnn3] = useState('')
  const [isChosen, setIsChosen] = useState(false)
  const classes = useColorTheme()

  useEffect(() => {
    setCnn3('')
  }, [question])

  if (!question.answer) return <h1>Ooops, there is no question</h1>

  const renderQuestion = () => {
    switch (mode) {
      case MODES.CAPITAL_COUNTRY:
        return <span>{question.answer.capital || 'Server error, no data'}</span>
      case MODES.COUNTRY_CAPITAL:
        return <span>{question.answer.name?.common || 'Server error, no data'}</span>
      case MODES.FLAG_COUNTRY:
        return <div className='w-full h-40 md:h-56 lg:h-80 relative'>
          <Image
            src={question.answer.flags?.svg || ''}
            alt='quize'
            fill
            className='object-contain'
          />
        </div>
    }
  }

  const getColorOfAnswer = (id: string): string => {
    if (!ccn3 && !isChosen) return ''
    if (ccn3 === id && !isChosen) return 'bg-violet-500'
    if (ccn3 === id && ccn3 !== question.answer.ccn3 && isChosen) return 'bg-red-500'
    if (ccn3 === id && ccn3 === question.answer.ccn3 && isChosen) return 'bg-green-500'
    if (id === question.answer.ccn3 && isChosen) return 'bg-green-500'
    return ''
  }

  const checkAnswer = (ccn3: string) => {
    if (isChosen) return
    setCnn3(ccn3)
    setTimeout(() => {
      setIsChosen(isChosen => !isChosen)
    }, 500)
    setTimeout(() => {
      setIsChosen(isChosen => !isChosen)
      getNewQuestion()
    }, 2000)
  }

  return (
    <div className='mt-6 py-2 px-5'>
      <div className={`text-center text-2xl p-3 mb-5 rounded-lg max-w-xl md:mx-auto ${classes}`}>
        {renderQuestion()}
      </div>
      <div className='lg:grid lg:grid-cols-2 gap-x-4'>
        {
          question.variants.map(country => (
            <Answer
              key={country.ccn3 + country.name?.official}
              country={country}
              mode={mode}
              classes={classes}
              checkAnswer={checkAnswer}
              getColorOfAnswer={getColorOfAnswer}
            />))
        }
      </div>
    </div>
  )
}

export default Question